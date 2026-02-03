# Obsidian 快捷启动脚本

```powershell
# 添加到PowerShell配置文件
# $PROFILE = '$PROFILE'
# Add-Content -Path $PROFILE -Value "`nfunction Obsidian { Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Obsidian.exe' }"
# Obsidian  # 直接运行打开Obsidian
```

## 手动快速启动

**方法1：PowerShell**
```powershell
Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Obsidian.exe'
```

**方法2：直接运行exe**
```powershell
& 'C:\Users\Administrator\AppData\Roaming\Obsidian\Obsidian.exe'
```

**方法3：创建别名**
```powershell
function obsidian { Start-Process 'C:\Users\Administrator\AppData\Roaming\Obsidian\Obsidian.exe' }
obsidian  # 打开Obsidian
```
