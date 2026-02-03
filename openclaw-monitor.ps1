# OpenClaw 进程监控脚本

# 监控配置
$scriptPath = $PSScriptRoot
$logFile = "$scriptPath\openclaw-monitor.log"
$restartScript = "$scriptPath\restart-openclaw.ps1"
$checkInterval = 300  # 5分钟（秒）

# 日志函数
function Write-Log {
    param ([string]$message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] $message"
    Add-Content -Path $logFile -Value $logMessage
    Write-Host $logMessage
}

# 检查进程是否卡住
function Test-ProcessFrozen {
    param ([string]$processName)

    # 检查进程是否存在
    $process = Get-Process -Name $processName -ErrorAction SilentlyContinue
    if (-not $process) {
        Write-Log "进程 $processName 不存在"
        return $true  # 进程不存在，需要重启
    }

    # 获取进程启动时间
    $startTime = $process.StartTime
    $age = (Get-Date) - $startTime

    # 检查进程是否超过阈值时间未响应（默认30分钟）
    $frozenThreshold = 1800  # 30分钟

    if ($age.TotalSeconds -gt $frozenThreshold) {
        Write-Log "进程 $processName 已运行 $([math]::Round($age.TotalMinutes, 1)) 分钟，可能卡住"
        return $true
    }

    # 检查CPU使用率（如果卡住，CPU使用率会很低或为0）
    if ($process.CPU -eq 0 -and $age.TotalMinutes -gt 10) {
        Write-Log "进程 $processName CPU使用率为0，已运行 $([math]::Round($age.TotalMinutes, 1)) 分钟"
        return $true
    }

    return $false
}

# 重启OpenClaw
function Restart-OpenClaw {
    Write-Log "开始重启 OpenClaw..."

    # 1. 停止OpenClaw进程
    Write-Log "停止 OpenClaw 进程..."
    Stop-Process -Name "openclaw" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2

    # 2. 启动OpenClaw
    Write-Log "启动 OpenClaw..."
    $openclawPath = "C:\Users\Administrator\AppData\Roaming\npm\node_modules\openclaw\bin\openclaw.exe"
    if (Test-Path $openclawPath) {
        Start-Process -FilePath $openclawPath -WindowStyle Normal
        Write-Log "OpenClaw 启动成功"
    } else {
        Write-Log "错误：找不到 OpenClaw 可执行文件: $openclawPath"
    }
}

# 主循环
function Start-Monitor {
    Write-Log "========================================="
    Write-Log "OpenClaw 进程监控已启动"
    Write-Log "检查间隔: $checkInterval 秒 ($([math]::Round($checkInterval / 60, 1)) 分钟)"
    Write-Log "========================================="

    while ($true) {
        try {
            Write-Log "检查 OpenClaw 进程状态..."

            if (Test-ProcessFrozen -processName "openclaw") {
                Write-Log "检测到 OpenClaw 可能卡住，准备重启..."
                Restart-OpenClaw
            } else {
                Write-Log "OpenClaw 运行正常"
            }

            # 等待下一次检查
            Start-Sleep -Seconds $checkInterval

        } catch {
            Write-Log "错误: $_"
            Start-Sleep -Seconds $checkInterval
        }
    }
}

# 启动监控
Start-Monitor
