@echo off
REM Demo Workspace Cleanup Script
REM Removes temporary test artifacts and reports
REM Restores test files to broken state for demo

echo Cleaning up demo workspace...

REM Remove test artifacts
if exist "nul" del /q "nul"
if exist "test-results.txt" del /q "test-results.txt"

REM Remove test report directories
if exist "playwright-report\" (
    echo Removing playwright-report/
    rmdir /s /q "playwright-report"
)

if exist "test-results\" (
    echo Removing test-results/
    rmdir /s /q "test-results"
)

REM Remove .claude if needed (uncomment to enable)
REM if exist ".claude\" (
REM     echo Removing .claude/
REM     rmdir /s /q ".claude"
REM )

REM Restore test files to broken state
echo Restoring test files to demo state...
git restore tests/06-smart-manager-demo.integration.spec.ts tests/06-smart-manager-demo.spec.ts

echo.
echo ✓ Cleanup complete! Workspace is ready for demo.
echo.
