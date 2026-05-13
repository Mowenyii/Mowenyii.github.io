@echo off
setlocal EnableExtensions
cd /d "%~dp0"

REM Keep Bundler version in sync with the "BUNDLED WITH" section of Gemfile.lock
set "BUNDLER_VERSION=2.4.22"

echo Starting Jekyll local server...
echo If this fails, install Ruby+Devkit from https://rubyinstaller.org/ then run again.
echo.

gem list bundler -i -v %BUNDLER_VERSION% >nul 2>&1
if errorlevel 1 (
  echo Installing Bundler %BUNDLER_VERSION%...
  call gem install bundler -v %BUNDLER_VERSION%
)

call bundle install
echo.
echo Open http://127.0.0.1:4000 in your browser. Press Ctrl+C to stop.
echo.
call bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload
pause
