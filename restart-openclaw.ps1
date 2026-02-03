# OpenClaw 重启脚本

# 日志函数
function Write-Log {
    param ([string]$message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] $message"
    Write-Host $logMessage
}

Write-Log "开始重启 OpenClaw..."

# 停止OpenClaw进程
Write-Log "停止 OpenClaw 进程..."
Stop-Process -Name "openclaw" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# 启动OpenClaw
Write-Log "启动 OpenClaw..."
$openclawPath = "C:\Users\Administrator\AppData\Roaming\npm\node_modules\openclaw\bin\openclaw.exe"
if (Test-Path $openclawPath) {
    Start-Process -FilePath $openclawPath -WindowStyle Normal
    Write-Log "OpenClaw 启动成功"
} else {
    Write-Log "错误：找不到 OpenClaw 可执行文件: $openclawPath"
    exit 1
}
