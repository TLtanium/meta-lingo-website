#!/bin/bash
# Meta-Lingo-Website 启动脚本
# 用于快速启动开发环境

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

# 版本源文件路径
ELECTRON_PROJECT="/Volumes/TL-TANIUM/Meta-Lingo-Electron/PROJECT.md"
LANGUAGE_CONTEXT="$PROJECT_DIR/client/src/contexts/LanguageContext.tsx"

echo -e "${BLUE}=======================================${NC}"
echo -e "${BLUE}   Meta-Lingo-Website 开发环境启动器   ${NC}"
echo -e "${BLUE}=======================================${NC}"
echo ""

# 检查并同步版本号
check_version() {
    echo -e "${BLUE}[检查] 正在检查版本号...${NC}"
    
    # 检查 Electron PROJECT.md 是否存在
    if [ ! -f "$ELECTRON_PROJECT" ]; then
        echo -e "${YELLOW}[跳过] 未找到 Meta-Lingo-Electron PROJECT.md，跳过版本检查${NC}"
        return
    fi
    
    # 从 Electron PROJECT.md 提取版本号 (格式: **版本**: v3.8.93)
    SOURCE_VERSION=$(grep -o '\*\*版本\*\*: v[0-9.]*' "$ELECTRON_PROJECT" | sed 's/\*\*版本\*\*: //')
    
    if [ -z "$SOURCE_VERSION" ]; then
        echo -e "${YELLOW}[跳过] 无法从 PROJECT.md 提取版本号，跳过版本检查${NC}"
        return
    fi
    
    echo -e "  源版本 (Electron): ${BLUE}$SOURCE_VERSION${NC}"
    
    # 从 LanguageContext 提取当前版本号 (格式: badge: "v3.8.87 现已发布")
    CURRENT_VERSION=$(grep -o 'badge: "v[0-9.]*' "$LANGUAGE_CONTEXT" | head -1 | sed 's/badge: "//')
    
    if [ -z "$CURRENT_VERSION" ]; then
        echo -e "${YELLOW}[跳过] 无法从 LanguageContext 提取版本号${NC}"
        return
    fi
    
    echo -e "  当前版本 (Website): ${BLUE}$CURRENT_VERSION${NC}"
    
    # 比较版本号
    if [ "$SOURCE_VERSION" = "$CURRENT_VERSION" ]; then
        echo -e "${GREEN}[OK] 版本号一致${NC}"
    else
        echo -e "${YELLOW}[更新] 版本号不一致，正在同步...${NC}"
        
        # 使用 sed 替换版本号 (兼容 macOS 和 Linux)
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' "s/badge: \"v[0-9.]*\( 现已发布\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
            sed -i '' "s/badge: \"v[0-9.]*\( Released\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
        else
            # Linux
            sed -i "s/badge: \"v[0-9.]*\( 现已发布\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
            sed -i "s/badge: \"v[0-9.]*\( Released\)/badge: \"$SOURCE_VERSION\1/" "$LANGUAGE_CONTEXT"
        fi
        
        echo -e "${GREEN}[成功] 版本号已更新为 $SOURCE_VERSION${NC}"
    fi
}

# 检查 pnpm 是否安装
check_pnpm() {
    if ! command -v pnpm &> /dev/null; then
        echo -e "${YELLOW}[警告] pnpm 未安装，正在安装...${NC}"
        npm install -g pnpm
        if [ $? -ne 0 ]; then
            echo -e "${RED}[错误] pnpm 安装失败，请手动安装: npm install -g pnpm${NC}"
            exit 1
        fi
        echo -e "${GREEN}[成功] pnpm 安装完成${NC}"
    else
        echo -e "${GREEN}[OK] pnpm 已安装${NC}"
    fi
}

# 检查并安装依赖
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}[提示] 未检测到 node_modules，正在安装依赖...${NC}"
        pnpm install
        if [ $? -ne 0 ]; then
            echo -e "${RED}[错误] 依赖安装失败${NC}"
            exit 1
        fi
        echo -e "${GREEN}[成功] 依赖安装完成${NC}"
    else
        echo -e "${GREEN}[OK] 依赖已安装${NC}"
    fi
}

# 获取本机 IP 地址
get_local_ip() {
    if command -v ipconfig &> /dev/null; then
        # Windows
        ipconfig | grep -i "IPv4" | head -1 | awk '{print $NF}'
    else
        # macOS / Linux
        ifconfig 2>/dev/null | grep "inet " | grep -v 127.0.0.1 | head -1 | awk '{print $2}'
    fi
}

# 启动开发服务器
start_dev_server() {
    echo ""
    echo -e "${BLUE}[启动] 正在启动 Vite 开发服务器...${NC}"
    echo ""
    
    LOCAL_IP=$(get_local_ip)
    
    echo -e "${GREEN}访问地址:${NC}"
    echo -e "  本地:   ${BLUE}http://localhost:3000${NC}"
    if [ -n "$LOCAL_IP" ]; then
        echo -e "  网络:   ${BLUE}http://${LOCAL_IP}:3000${NC}"
    fi
    echo ""
    echo -e "${YELLOW}按 Ctrl+C 停止服务器${NC}"
    echo -e "${BLUE}=======================================${NC}"
    echo ""
    
    # 启动开发服务器
    pnpm dev
}

# 显示帮助信息
show_help() {
    echo "用法: ./start.sh [选项]"
    echo ""
    echo "选项:"
    echo "  dev       启动开发服务器 (默认，自动检查版本)"
    echo "  build     构建生产版本 (自动检查版本)"
    echo "  preview   预览构建结果 (自动检查版本)"
    echo "  install   仅安装依赖"
    echo "  clean     清理并重新安装依赖"
    echo "  version   仅检查并同步版本号"
    echo "  help      显示帮助信息"
    echo ""
    echo "版本检查:"
    echo "  启动前会自动检查 Meta-Lingo-Electron/PROJECT.md 中的版本号"
    echo "  如果与网站显示的版本不一致，会自动同步更新"
    echo ""
}

# 清理并重新安装
clean_install() {
    echo -e "${YELLOW}[清理] 删除 node_modules...${NC}"
    rm -rf node_modules
    echo -e "${YELLOW}[安装] 重新安装依赖...${NC}"
    pnpm install
    echo -e "${GREEN}[成功] 清理并重新安装完成${NC}"
}

# 主函数
main() {
    case "${1:-dev}" in
        dev)
            check_pnpm
            check_dependencies
            check_version
            start_dev_server
            ;;
        build)
            check_pnpm
            check_dependencies
            check_version
            echo -e "${BLUE}[构建] 正在构建生产版本...${NC}"
            pnpm build
            echo -e "${GREEN}[成功] 构建完成，输出目录: dist/${NC}"
            ;;
        preview)
            check_pnpm
            check_dependencies
            check_version
            echo -e "${BLUE}[预览] 正在启动预览服务器...${NC}"
            pnpm preview
            ;;
        install)
            check_pnpm
            pnpm install
            echo -e "${GREEN}[成功] 依赖安装完成${NC}"
            ;;
        clean)
            check_pnpm
            clean_install
            ;;
        version)
            check_version
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
