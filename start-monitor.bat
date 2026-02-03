@echo off
chcp 65001 >nul
cd /d C:\Users\Administrator\.openclaw\workspace

echo ========================================
echo OpenClaw 进程监控启动
echo ========================================
echo.

echo 检查监控脚本...
if not exist "openclaw-monitor.ps1" (
    echo 错误：找不到 openclaw-monitor.ps1
    pause
    exit /b 1
)

echo 启动监控服务...
start /B powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File openclaw-monitor.ps1

echo.
echo ========================================
echo 监控服务已启动！
echo ========================================
echo 日志文件: openclaw-monitor.log
echo 检查间隔: 5分钟
echo ========================================
echo.
echo 监控脚本会在后台运行，关闭此窗口不会停止监控
echo 查看日志: openclaw-monitor.log
echo.
echo 按任意键退出...
pause >nul
