#!/bin/bash
echo "启动Jekyll服务器..."
echo "如果遇到权限问题，请以管理员身份运行"
echo "服务器将在 http://localhost:4000 启动"
echo "按 Ctrl+C 停止服务器"
echo ""
bundle exec jekyll serve --host 0.0.0.0 --port 4000