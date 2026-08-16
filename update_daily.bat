@echo off
echo ==================================================
echo   Updating Stock Tracking Data Daily
echo ==================================================
cd /d "%~dp0"
python scripts\update_all.py
echo.
echo ==================================================
echo   All Data Successfully Updated!
echo ==================================================
pause
