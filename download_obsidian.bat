@echo off
echo 正在下载 Obsidian...
echo 下载地址: https://github.com/obsidianmd/obsidian-releases/releases/download/v1.6.7/Obsidian.1.6.7.exe
echo 请耐心等待...
powershell -Command "Start-BitsTransfer -Source 'https://github.com/obsidianmd/obsidian-releases/releases/download/v1.6.7/Obsidian.1.6.7.exe' -Destination 'Obsidian.1.6.7.exe'"
if exist "Obsidian.1.6.7.exe" (
    echo 下载完成！
    echo 文件大小:
    dir Obsidian.1.6.7.exe | findstr /C:"Obsidian.1.6.7.exe"
) else (
    echo 下载失败，请手动下载：https://obsidian.md
)
pause
