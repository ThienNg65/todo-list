import { test, expect } from '@playwright/test';

/**
 * BUSINESS LOGIC TESTS
 *
 * AI Smart Manager: Run these tests when:
 * - Core functionality changed (addTask, deleteTask, etc.)
 * - State management changed
 * - Data validation changed
 *
 * These tests verify the BEHAVIOR, not the appearance
 */

test.describe('Logic Tests - Adding Tasks', () => {

  test('can add a new task @logic @critical', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('New Logic Test Task');
    await input.press('Enter');

    await expect(page.locator('text=New Logic Test Task')).toBeVisible();

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(6); // 5 default + 1 new
  });

  test('cannot add empty task @logic @validation', async ({ page }) => {
    await page.goto('/');

    const initialCount = await page.locator('li').count();

    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('   '); // Only spaces
    await input.press('Enter');

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(initialCount);
  });

  test('input clears after adding task @logic @ux', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('Task to clear');
    await input.press('Enter');

    await expect(input).toHaveValue('');
  });

  test('new tasks start as uncompleted @logic', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('Uncompleted Task');
    await input.press('Enter');

    const lastCheckbox = page.locator('input[type="checkbox"]').last();
    await expect(lastCheckbox).not.toBeChecked();
  });
});

test.describe('Logic Tests - Toggling Tasks', () => {

  test('can mark task as completed @logic @critical', async ({ page }) => {
    await page.goto('/');

    const checkbox = page.locator('input[type="checkbox"]').nth(2);
    await expect(checkbox).not.toBeChecked();

    await checkbox.click();

    await expect(checkbox).toBeChecked();
  });

  test('toggling updates pending count @logic @counter', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('text=/Pending Tasks: 3/')).toBeVisible();

    const checkbox = page.locator('input[type="checkbox"]').nth(2);
    await checkbox.click();

    await expect(page.locator('text=/Pending Tasks: 2/')).toBeVisible();
  });
});

test.describe('Logic Tests - Deleting Tasks', () => {

  test('can delete a task @logic @critical', async ({ page }) => {
    await page.goto('/');

    const initialCount = await page.locator('li').count();

    const firstDeleteButton = page.locator('button .fa-trash').first();
    await firstDeleteButton.click();

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(initialCount - 1);
  });

  test('deleting pending task updates count @logic @counter', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('text=/Pending Tasks: 3/')).toBeVisible();

    const deleteButton = page.locator('button .fa-trash').nth(2);
    await deleteButton.click();

    await expect(page.locator('text=/Pending Tasks: 2/')).toBeVisible();
  });
});

test.describe('Logic Tests - Clear Operations', () => {

  test('clear completed removes only completed tasks @logic @critical', async ({ page }) => {
    await page.goto('/');

    const clearCompleted = page.locator('button:has-text("Clear Completed")');
    await clearCompleted.click();

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(3);

    await expect(page.locator('text=/Pending Tasks: 3/')).toBeVisible();
  });

  test('clear all removes all tasks @logic @critical', async ({ page }) => {
    await page.goto('/');

    const clearAll = page.locator('button:has-text("Clear All")');
    await clearAll.click();

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(0);

    await expect(page.locator('text=/Pending Tasks: 0/')).toBeVisible();
  });
});
