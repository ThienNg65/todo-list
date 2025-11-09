import { test, expect } from '@playwright/test';

/**
 * AI SMART TEST MANAGER - Master Demo File
 *
 * This demo shows how AI can intelligently manage and select tests based on:
 * - What code changed
 * - Test execution history
 * - Test importance/priority
 * - Test dependencies
 *
 * AI Approach: Analyze changes and run only relevant tests to save time
 */

test.describe('Smart Test Selection Demo', () => {

  test('quick smoke test - always runs first @smoke @critical', async ({ page }) => {
    // AI: This test ALWAYS runs first to catch major breakage
    await page.goto('/');
    // INTENTIONALLY BROKEN: Wrong text to demonstrate MCP fix workflow
    await expect(page.locator('h1')).toContainText('Todo App');

    // Verify app is at least rendering
    await expect(page.locator('input[placeholder="Add a new task..."]')).toBeVisible();
  });

  test('full end-to-end workflow @e2e @critical', async ({ page }) => {
    // AI: This test covers the complete user journey
    // Run this when multiple components changed
    await page.goto('/');

    // Add task
    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('E2E Test Task');
    await input.press('Enter');

    // Complete task
    const lastCheckbox = page.locator('input[type="checkbox"]').last();
    await lastCheckbox.click();

    // Clear completed
    await page.locator('button:has-text("Clear Completed")').click();

    // Verify
    await expect(page.locator('text=E2E Test Task')).not.toBeVisible();
  });
});

/**
 * For organized test suites, see:
 * - tests/06-smart-manager-demo.ui.spec.ts (UI component tests)
 * - tests/06-smart-manager-demo.logic.spec.ts (Business logic tests)
 * - tests/06-smart-manager-demo.integration.spec.ts (Integration tests)
 *
 * Run the test-manager.js script to see intelligent test selection:
 * node tests/test-manager.js
 */
