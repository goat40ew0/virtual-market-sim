@echo off
setlocal
cd /d "%~dp0"

set "URL=http://localhost:3000"

where py >nul 2>&1
if %errorlevel%==0 goto start_py

where python >nul 2>&1
if %errorlevel%==0 goto start_python

echo Python was not found on this computer.
echo Install Python from https://www.python.org/downloads/windows/ and try again.
pause
exit /b 1

:start_py
start "Virtual Market Server" /min py -m http.server 3000
set "PYTHON_COMMAND=py"
goto open_browser

:start_python
start "Virtual Market Server" /min python -m http.server 3000
set "PYTHON_COMMAND=python"
goto open_browser

:open_browser
timeout /t 2 /nobreak >nul
start "" "%URL%"
echo Virtual Market is running at %URL%
echo Close the minimized "Virtual Market Server" window to stop the server.
exit /b 0
