#!/bin/bash
# Meta-Lingo-Website Release 上传脚本（固定 latest 模式）
# 本地文件名可任意；上传到 Release 时统一使用固定名并覆盖

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

REPO="TLtanium/meta-lingo-website"
DEFAULT_TITLE_PREFIX="Meta-Lingo"
FIXED_TAG="latest"
WIN_FILENAME="meta-lingo-win-latest.7z"
MAC_FILENAME="meta-lingo-mac-latest.7z"
# GitHub release asset hard limit (bytes); uploads at or above this fail with HTTP 422.
MAX_GITHUB_RELEASE_ASSET_BYTES=$((2 * 1024 * 1024 * 1024))

show_help() {
  echo "用法: ./release.sh [选项]"
  echo ""
  echo "选项:"
  echo "  -n, --notes <notes>     Release 说明文本（默认自动生成）"
  echo "  -d, --draft             创建为草稿"
  echo "  -p, --prerelease        标记为预发布"
  echo "      --keep-extra-assets 不删除 release 中除两个固定文件以外的资产（默认会删除）"
  echo "  -h, --help              显示帮助"
  echo ""
  echo "示例:"
  echo "  ./release.sh"
  echo "  ./release.sh -n \"update latest packages\""
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo -e "${RED}[错误] 未找到命令: $1${NC}"
    exit 1
  fi
}

pick_latest_archive() {
  local dir="$1"
  local picked=""
  local mtime=0
  for f in "$dir"/*.7z; do
    local base
    base="$(basename "$f")"
    if [[ "$base" == ._* ]]; then
      continue
    fi
    if [[ ! -f "$f" ]]; then
      continue
    fi
    local t
    t=$(stat -f "%m" "$f" 2>/dev/null || echo 0)
    if [[ "$t" -ge "$mtime" ]]; then
      mtime="$t"
      picked="$f"
    fi
  done
  echo "$picked"
}

NOTES=""
IS_DRAFT=false
IS_PRERELEASE=false
KEEP_EXTRA_ASSETS=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    -n|--notes)
      NOTES="${2:-}"
      shift 2
      ;;
    -d|--draft)
      IS_DRAFT=true
      shift
      ;;
    -p|--prerelease)
      IS_PRERELEASE=true
      shift
      ;;
    --keep-extra-assets)
      KEEP_EXTRA_ASSETS=true
      shift
      ;;
    -h|--help)
      show_help
      exit 0
      ;;
    *)
      echo -e "${RED}[错误] 未知参数: $1${NC}"
      show_help
      exit 1
      ;;
  esac
done

require_cmd gh

ensure_github_token() {
  if [[ -n "${GH_TOKEN:-}" ]]; then
    return 0
  fi

  # If not running with GH_TOKEN, fall back to checking whether gh is logged in.
  if gh auth status >/dev/null 2>&1; then
    return 0
  fi

  echo -e "${RED}[错误] 未设置 GH_TOKEN，且 gh 未处于登录状态。${NC}"
  echo -e "${YELLOW}请二选一：${NC}"
  echo -e "  1) 设置 GH_TOKEN（推荐脚本方式）"
  echo -e "     export GH_TOKEN='你的GitHub Token（repo scope）'"
  echo -e "     然后再运行： ./release.sh"
  echo -e "  2) 或修复 gh auth login 写入权限，然后重新运行"
  exit 1
}

ensure_github_token

WIN_ARCHIVE="$(pick_latest_archive "$PROJECT_DIR/release/win")"
MAC_ARCHIVE="$(pick_latest_archive "$PROJECT_DIR/release/mac")"

if [[ -z "$WIN_ARCHIVE" || -z "$MAC_ARCHIVE" ]]; then
  echo -e "${RED}[错误] 未找到可上传的 .7z 文件${NC}"
  echo -e "${YELLOW}[提示] 请确认以下目录各至少有一个 .7z 文件:${NC}"
  echo "  - release/win/"
  echo "  - release/mac/"
  exit 1
fi

WIN_NAME="$(basename "$WIN_ARCHIVE")"
MAC_NAME="$(basename "$MAC_ARCHIVE")"

check_archive_size() {
  local path="$1"
  local label="$2"
  local size
  size=$(stat -f "%z" "$path" 2>/dev/null || stat -c "%s" "$path" 2>/dev/null || echo 0)
  if [[ "$size" -ge "$MAX_GITHUB_RELEASE_ASSET_BYTES" ]]; then
    local mb=$((size / 1024 / 1024))
    echo -e "${RED}[错误] ${label} 超过 GitHub Release 单文件上限（< 2 GiB）${NC}"
    echo -e "${YELLOW}  文件: $path${NC}"
    echo -e "${YELLOW}  大小: ${mb} MiB${NC}"
    echo -e "${YELLOW}[提示] 请缩小打包内容、提高压缩率、拆分为多个分卷，或改用对象存储/CDN 分发大文件。${NC}"
    exit 1
  fi
}

check_archive_size "$WIN_ARCHIVE" "Windows 包"
check_archive_size "$MAC_ARCHIVE" "macOS 包"

if [[ -z "$NOTES" ]]; then
  NOTES="Automated latest package refresh"
fi

echo -e "${BLUE}[信息] Repository: $REPO${NC}"
echo -e "${BLUE}[信息] Tag: $FIXED_TAG${NC}"
echo -e "${BLUE}[信息] Windows 源文件: $WIN_NAME${NC}"
echo -e "${BLUE}[信息] macOS 源文件: $MAC_NAME${NC}"
echo -e "${BLUE}[信息] 上传后文件名: $WIN_FILENAME / $MAC_FILENAME${NC}"

if gh release view "$FIXED_TAG" --repo "$REPO" >/dev/null 2>&1; then
  echo -e "${YELLOW}[提示] Release 已存在，改为编辑并上传资源${NC}"
  gh release edit "$FIXED_TAG" --repo "$REPO" --title "${DEFAULT_TITLE_PREFIX} Latest" --notes "$NOTES"
else
  CREATE_ARGS=(--repo "$REPO" --title "${DEFAULT_TITLE_PREFIX} Latest" --notes "$NOTES")
  if [[ "$IS_DRAFT" == true ]]; then
    CREATE_ARGS+=(--draft)
  fi
  if [[ "$IS_PRERELEASE" == true ]]; then
    CREATE_ARGS+=(--prerelease)
  fi
  gh release create "$FIXED_TAG" "${CREATE_ARGS[@]}"
fi

# 零拷贝上传：使用 localPath#assetName 指定 Release 资产名，不改本地文件名
gh release upload "$FIXED_TAG" \
  "$WIN_ARCHIVE#$WIN_FILENAME" \
  "$MAC_ARCHIVE#$MAC_FILENAME" \
  --repo "$REPO" \
  --clobber

if [[ "$KEEP_EXTRA_ASSETS" == false ]]; then
  OWNER="${REPO%%/*}"
  REPO_NAME="${REPO##*/}"
  RELEASE_ID="$(gh release view "$FIXED_TAG" --repo "$REPO" --json id --jq '.id')"
  ASSET_LINES="$(gh api "repos/$OWNER/$REPO_NAME/releases/$RELEASE_ID/assets" --jq '.[] | "\(.id)\t\(.name)"')"
  while IFS=$'\t' read -r asset_id asset_name; do
    [[ -z "${asset_id:-}" || -z "${asset_name:-}" ]] && continue
    if [[ "$asset_name" != "$WIN_FILENAME" && "$asset_name" != "$MAC_FILENAME" ]]; then
      gh api -X DELETE "repos/$OWNER/$REPO_NAME/releases/assets/$asset_id" >/dev/null
      echo -e "${YELLOW}[清理] 已删除多余资产: $asset_name${NC}"
    fi
  done <<< "$ASSET_LINES"
fi

echo -e "${GREEN}[成功] Release 上传完成${NC}"
echo -e "${GREEN}https://github.com/${REPO}/releases/tag/${FIXED_TAG}${NC}"
