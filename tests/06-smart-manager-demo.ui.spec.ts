import { test, expect } from '@playwright/test';

/**
 * UI COMPONENT TESTS
 *
 * AI Smart Manager: Run these tests when:
 * - app/app.vue changed (UI structure)
 * - CSS/styling files changed
 * - Component props/events changed
 *
 * These are FAST tests focused on visual elements
 */

test.describe('UI Tests - Input Field', () => {

  test('input field has correct placeholder @ui @fast', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await expect(input).toHaveAttribute('placeholder', 'Add a new task...');
  });

  test('input field is properly styled @ui @fast', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
  });

  test('add button has plus icon @ui @fast', async ({ page }) => {
    await page.goto('/');

    const addButton = page.locator('button:has(.fa-plus)');
    await expect(addButton).toBeVisible();
  });
});

test.describe('UI Tests - Task List', () => {

  test('tasks are displayed in a list @ui @fast', async ({ page }) => {
    await page.goto('/');

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(5); // Default tasks
  });

  test('each task has checkbox and delete button @ui @fast', async ({ page }) => {
    await page.goto('/');

    const firstTask = page.locator('li').first();
    await expect(firstTask.locator('input[type="checkbox"]')).toBeVisible();
    await expect(firstTask.locator('button .fa-trash')).toBeVisible();
  });

  test('completed tasks have strike-through styling @ui @visual', async ({ page }) => {
    await page.goto('/');

    // First task is completed by default
    const firstTask = page.locator('li').first().locator('span').last();
    await expect(firstTask).toHaveClass(/line-through/);
  });

  test('pending tasks do not have strike-through @ui @visual', async ({ page }) => {
    await page.goto('/');

    // Third task is not completed
    const thirdTask = page.locator('li').nth(2).locator('span').last();
    await expect(thirdTask).not.toHaveClass(/line-through/);
  });
});

test.describe('UI Tests - Action Buttons', () => {

  test('clear completed button is visible @ui @fast', async ({ page }) => {
    await page.goto('/');

    const clearCompleted = page.locator('button:has-text("Clear Completed")');
    await expect(clearCompleted).toBeVisible();
  });

  test('clear all button is visible @ui @fast', async ({ page }) => {
    await page.goto('/');

    const clearAll = page.locator('button:has-text("Clear All")');
    await expect(clearAll).toBeVisible();
  });

  test('buttons are properly styled @ui @visual', async ({ page }) => {
    await page.goto('/');

    const clearCompleted = page.locator('button:has-text("Clear Completed")');
    const clearAll = page.locator('button:has-text("Clear All")');

    // Both should be visible and clickable
    await expect(clearCompleted).toBeEnabled();
    await expect(clearAll).toBeEnabled();
  });
});

test.describe('UI Tests - Counter', () => {

  test('pending tasks counter is visible @ui @fast', async ({ page }) => {
    await page.goto('/');

    const counter = page.locator('text=/Pending Tasks:/');
    await expect(counter).toBeVisible();
  });

  test('counter shows correct initial count @ui @fast', async ({ page }) => {
    await page.goto('/');

    // Initially, 3 tasks are pending (out of 5)
    await expect(page.locator('text=/Pending Tasks: 3/')).toBeVisible();
  });
});

test.describe('UI Tests - Layout and Responsive', () => {

  test('app title is displayed @ui @fast', async ({ page }) => {
    await page.goto('/');

    const title = page.locator('h1');
    await expect(title).toContainText('To-Do List');
  });

  test('layout works on mobile viewport @ui @responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // All main elements should still be visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('input[placeholder="Add a new task..."]')).toBeVisible();
    await expect(page.locator('button:has-text("Clear Completed")')).toBeVisible();
  });

  test('layout works on tablet viewport @ui @responsive', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('ul')).toBeVisible();
  });

  test('layout works on desktop viewport @ui @responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('ul')).toBeVisible();
  });
});
