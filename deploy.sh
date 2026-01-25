#!/bin/bash
# Meta-Lingo-Website 部署脚本
# 自动构建并推送到 GitHub Pages (gh-pages 分支)

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目目录
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

# GitHub 仓库地址
REPO_URL="https://github.com/TLtanium/meta-lingo-website.git"

echo -e "${BLUE}=======================================${NC}"
echo -e "${BLUE}   Meta-Lingo-Website 部署脚本        ${NC}"
echo -e "${BLUE}=======================================${NC}"
echo ""

# 检查 git 是否安装
check_git() {
    if ! command -v git &> /dev/null; then
        echo -e "${RED}[错误] git 未安装，请先安装 git${NC}"
        exit 1
    fi
    echo -e "${GREEN}[OK] git 已安装${NC}"
}

# 检查 pnpm 是否安装
check_pnpm() {
    if ! command -v pnpm &> /dev/null; then
        echo -e "${YELLOW}[警告] pnpm 未安装，正在安装...${NC}"
        npm install -g pnpm
        if [ $? -ne 0 ]; then
            echo -e "${RED}[错误] pnpm 安装失败${NC}"
            exit 1
        fi
    fi
    echo -e "${GREEN}[OK] pnpm 已安装${NC}"
}

# 检查并安装依赖
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}[提示] 正在安装依赖...${NC}"
        pnpm install
    fi
    echo -e "${GREEN}[OK] 依赖已安装${NC}"
}

# 版本检查 (从 start.sh 复制的逻辑)
check_version() {
    ELECTRON_README="/Volumes/TL-TANIUM/Meta-Lingo-Electron/README.md"
    LANGUAGE_CONTEXT="$PROJECT_DIR/client/src/contexts/LanguageContext.tsx"
    
    echo -e "${BLUE}[检查] 正在检查版本号...${NC}"
    
    if [ ! -f "$ELECTRON_README" ]; then
        echo -e "${YELLOW}[跳过] 未找到 Meta-Lingo-Electron README${NC}"
        return
    fi
    
    SOURCE_VERSION=$(grep -o '\*\*版本\*\*: v[0-9.]*' "$ELECTRON_README" | sed 's/\*\*版本\*\*: //')
    
    if [ -z "$SOURCE_VERSION" ]; then
        echo -e "${YELLOW}[跳过] 无法提取版本号${NC}"
        return
    fi
    
    CURRENT_VERSION=$(grep -o 'badge: "v[0-9.]*' "$LANGUAGE_CONTEXT" | head -1 | sed 's/badge: "//')
    
    if [ "$SOURCE_VERSION" != "$CURRENT_VERSION" ]; then
        echo -e "${YELLOW}[更新] 版本号从 $CURRENT_VERSION 更新为 $SOURCE_VERSION${NC}"
        if [[ "$OSTYPE" == "darwin"* ]]; then
            sed -i '' "s/badge: \"v[0-9.]*\( 现已发布\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
            sed -i '' "s/badge: \"v[0-9.]*\( Released\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
        else
            sed -i "s/badge: \"v[0-9.]*\( 现已发布\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
            sed -i "s/badge: \"v[0-9.]*\( Released\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
        fi
    fi
    echo -e "${GREEN}[OK] 版本号: $SOURCE_VERSION${NC}"
}

# 构建项目
build_project() {
    echo ""
    echo -e "${BLUE}[构建] 正在构建项目 (GitHub Pages 模式)...${NC}"
    # 设置 GITHUB_PAGES 环境变量，Vite 会据此设置 base 路径
    GITHUB_PAGES=true pnpm build
    
    if [ ! -d "dist/public" ]; then
        echo -e "${RED}[错误] 构建失败，未找到 dist/public 目录${NC}"
        exit 1
    fi
    echo -e "${GREEN}[成功] 构建完成${NC}"
}

# 初始化 git 仓库
init_git_repo() {
    echo ""
    echo -e "${BLUE}[初始化] 正在初始化 Git 仓库...${NC}"
    
    git init
    git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"
    
    echo -e "${GREEN}[成功] Git 仓库已初始化${NC}"
}

# 推送到 main 分支
push_to_main() {
    echo ""
    echo -e "${BLUE}[推送] 正在推送源码到 main 分支...${NC}"
    
    # 检查是否是 git 仓库
    if [ ! -d ".git" ]; then
        init_git_repo
    fi
    
    # 确保远程仓库地址正确
    git remote set-url origin "$REPO_URL" 2>/dev/null || git remote add origin "$REPO_URL"
    
    # 检查是否有未提交的更改
    if [ -n "$(git status --porcelain)" ]; then
        echo -e "${YELLOW}[提示] 检测到未提交的更改，正在提交...${NC}"
        git add -A
        git commit -m "chore: update before deploy - $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    # 确保在 main 分支
    git branch -M main
    
    # 推送到 main
    git push -u origin main
    echo -e "${GREEN}[成功] 源码已推送到 main 分支${NC}"
}

# 部署到 gh-pages 分支
deploy_to_gh_pages() {
    echo ""
    echo -e "${BLUE}[部署] 正在部署到 gh-pages 分支...${NC}"
    
    # 检查是否是 git 仓库
    if [ ! -d ".git" ]; then
        echo -e "${RED}[错误] 不是 git 仓库，请先运行 ./deploy.sh push 初始化仓库${NC}"
        exit 1
    fi
    
    # 创建临时目录用于 gh-pages 操作
    TEMP_DIR=$(mktemp -d)
    DEPLOY_DIR=$(mktemp -d)
    
    # 复制构建文件到部署目录
    cp -r dist/public/* "$DEPLOY_DIR/"
    
    # 添加 .nojekyll 文件 (告诉 GitHub 不要使用 Jekyll 处理)
    touch "$DEPLOY_DIR/.nojekyll"
    
    # 复制 index.html 为 404.html (SPA 路由回退)
    cp "$DEPLOY_DIR/index.html" "$DEPLOY_DIR/404.html"
    
    # 克隆 gh-pages 分支到临时目录 (如果存在)
    if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
        git clone --branch gh-pages --single-branch --depth 1 "$REPO_URL" "$TEMP_DIR" 2>/dev/null || true
    fi
    
    # 如果克隆失败，初始化新仓库
    if [ ! -d "$TEMP_DIR/.git" ]; then
        cd "$TEMP_DIR"
        git init
        git checkout -b gh-pages
        git remote add origin "$REPO_URL"
        cd "$PROJECT_DIR"
    fi
    
    # 清空临时目录内容 (保留 .git)
    find "$TEMP_DIR" -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +
    
    # 复制构建文件到临时目录
    cp -r "$DEPLOY_DIR/"* "$TEMP_DIR/"
    cp "$DEPLOY_DIR/.nojekyll" "$TEMP_DIR/"
    
    # 在临时目录中提交并推送
    cd "$TEMP_DIR"
    git add -A
    git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')" --allow-empty
    git push origin gh-pages --force
    
    # 返回项目目录
    cd "$PROJECT_DIR"
    
    # 清理临时目录
    rm -rf "$TEMP_DIR" "$DEPLOY_DIR"
    
    echo -e "${GREEN}[成功] 已部署到 gh-pages 分支${NC}"
}

# 显示帮助
show_help() {
    echo "用法: ./deploy.sh [选项]"
    echo ""
    echo "选项:"
    echo "  all       完整部署: 构建 + 推送 main + 部署 gh-pages (默认)"
    echo "  build     仅构建项目"
    echo "  push      仅推送源码到 main 分支"
    echo "  pages     仅部署到 gh-pages 分支 (需要先构建)"
    echo "  help      显示帮助信息"
    echo ""
    echo "GitHub Pages 地址: https://tltanium.github.io/meta-lingo-website/"
    echo ""
}

# 主函数
main() {
    case "${1:-all}" in
        all)
            check_git
            check_pnpm
            check_dependencies
            check_version
            build_project
            push_to_main
            deploy_to_gh_pages
            echo ""
            echo -e "${GREEN}=======================================${NC}"
            echo -e "${GREEN}  部署完成!${NC}"
            echo -e "${GREEN}  GitHub Pages: https://tltanium.github.io/meta-lingo-website/${NC}"
            echo -e "${GREEN}=======================================${NC}"
            ;;
        build)
            check_pnpm
            check_dependencies
            check_version
            build_project
            ;;
        push)
            check_git
            push_to_main
            ;;
        pages)
            check_git
            if [ ! -d "dist/public" ]; then
                echo -e "${RED}[错误] 请先运行 ./deploy.sh build 构建项目${NC}"
                exit 1
            fi
            deploy_to_gh_pages
            echo -e "${GREEN}GitHub Pages: https://tltanium.github.io/meta-lingo-website/${NC}"
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}[错误] 未知命令: $1${NC}"
            show_help
            exit 1
            ;;
    esac
}

main "$@"
