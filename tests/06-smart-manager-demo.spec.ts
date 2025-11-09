import { test, expect } from '@playwright/test';

/**
 * Todo App - Core Functionality Tests
 * Tests critical user workflows and core features
 */

test.describe('Todo App - Critical Flows', () => {

  test('should display app title and main interface @smoke @critical', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Todo App');

    // Verify core UI elements are present
    await expect(page.locator('input[placeholder="Add a new task..."]')).toBeVisible();
  });

  test('should complete task lifecycle: add, mark complete, and clear @e2e @critical', async ({ page }) => {
    await page.goto('/');

    // Add new task
    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('Buy groceries');
    await input.press('Enter');

    // Mark task as complete
    const lastCheckbox = page.locator('input[type="checkbox"]').last();
    await lastCheckbox.click();

    // Clear completed tasks
    await page.locator('button:has-text("Clear Completed")').click();

    // Verify task was removed
    await expect(page.locator('text=Buy groceries')).not.toBeVisible();
  });
});
