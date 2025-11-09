#!/bin/bash
# Demo Workspace Cleanup Script
# Removes temporary test artifacts and reports
# Restores test files to broken state for demo

echo "Cleaning up demo workspace..."

# Remove test artifacts
rm -f nul test-results.txt

# Remove test report directories
if [ -d "playwright-report" ]; then
    echo "Removing playwright-report/"
    rm -rf playwright-report
fi

if [ -d "test-results" ]; then
    echo "Removing test-results/"
    rm -rf test-results
fi

# Remove .claude if needed (uncomment to enable)
# if [ -d ".claude" ]; then
#     echo "Removing .claude/"
#     rm -rf .claude
# fi

# Restore test files to broken state
echo "Restoring test files to demo state..."
git restore tests/06-smart-manager-demo.integration.spec.ts tests/06-smart-manager-demo.spec.ts

echo ""
echo "✓ Cleanup complete! Workspace is ready for demo."
echo ""
