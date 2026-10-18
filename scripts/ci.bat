@echo off
setlocal

call npm ci
if errorlevel 1 exit /b 1

call npm run build
if errorlevel 1 exit /b 1

call npm test
if errorlevel 1 exit /b 1

exit /b 0
