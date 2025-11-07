import { test, expect } from '@playwright/test';

/**
 * INTEGRATION TESTS
 *
 * AI Smart Manager: Run these tests when:
 * - Multiple features interact
 * - Full workflows need verification
 * - Major changes across multiple files
 *
 * These are SLOWER but cover complex scenarios
 */

test.describe('Integration Tests - Complex Workflows', () => {

  test('complete workflow: add, complete, clear @integration @critical', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('Buy groceries');
    await input.press('Enter');

    await input.fill('Walk the dog');
    await input.press('Enter');

    await input.fill('Write code');
    await input.press('Enter');

    await expect(page.locator('text=Buy groceries')).toBeVisible();
    await expect(page.locator('text=Walk the dog')).toBeVisible();
    await expect(page.locator('text=Write code')).toBeVisible();

    const buyGroceriesCheckbox = page.locator('li:has-text("Buy groceries") input[type="checkbox"]');
    const writeCodeCheckbox = page.locator('li:has-text("Write code") input[type="checkbox"]');

    await buyGroceriesCheckbox.click();
    await writeCodeCheckbox.click();

    await page.locator('button:has-text("Clear Completed")').click();

    await expect(page.locator('text=Buy groceries')).not.toBeVisible();
    await expect(page.locator('text=Walk the dog')).toBeVisible();
    await expect(page.locator('text=Write code')).not.toBeVisible();
  });

  test('managing many tasks (stress test) @integration @performance', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');

    for (let i = 1; i <= 20; i++) {
      await input.fill(`Task ${i}`);
      await input.press('Enter');
    }

    const tasks = page.locator('li');
    await expect(tasks).toHaveCount(25); // 5 default + 20 new

    for (let i = 0; i < 25; i += 2) {
      const checkbox = page.locator('input[type="checkbox"]').nth(i);
      await checkbox.click();
    }

    await page.locator('button:has-text("Clear Completed")').click();

    await expect(tasks.first()).toBeVisible();

    await page.locator('button:has-text("Clear All")').click();

    await expect(tasks).toHaveCount(0);
  });

  test('rapid interactions (race condition detection) @integration @timing', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');

    await input.fill('Rapid task 1');
    await input.press('Enter');

    const lastCheckbox = page.locator('input[type="checkbox"]').last();
    await lastCheckbox.click();

    await input.fill('Rapid task 2');
    await input.press('Enter');

    await lastCheckbox.click();

    await page.locator('button:has-text("Clear Completed")').click();

    const tasks = page.locator('li');
    const count = await tasks.count();

    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('counter accuracy across complex operations @integration @counter', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('text=/Pending Tasks: 3/')).toBeVisible();

    const input = page.locator('input[placeholder="Add a new task..."]');

    await input.fill('Task A');
    await input.press('Enter');
    await input.fill('Task B');
    await input.press('Enter');
    await expect(page.locator('text=/Pending Tasks: 5/')).toBeVisible();

    const lastCheckbox = page.locator('input[type="checkbox"]').last();
    await lastCheckbox.click();
    await expect(page.locator('text=/Pending Tasks: 4/')).toBeVisible();

    await input.fill('Task C');
    await input.press('Enter');
    await expect(page.locator('text=/Pending Tasks: 5/')).toBeVisible();

    const deleteButton = page.locator('li:has-text("Task A") button');
    await deleteButton.click();
    await expect(page.locator('text=/Pending Tasks: 4/')).toBeVisible();

    await page.locator('button:has-text("Clear Completed")').click();
    await expect(page.locator('text=/Pending Tasks: 4/')).toBeVisible();
  });
});

test.describe('Integration Tests - State Consistency', () => {

  test('state remains consistent after many operations @integration @state', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    const tasks = page.locator('li');

    await input.fill('State test 1');
    await input.press('Enter');

    await input.fill('State test 2');
    await input.press('Enter');

    const stateTest1Checkbox = page.locator('li:has-text("State test 1") input[type="checkbox"]');
    await stateTest1Checkbox.click();

    const deleteButton = page.locator('button .fa-trash').first();
    await deleteButton.click();

    await input.fill('State test 3');
    await input.press('Enter');

    const lastCheckbox = page.locator('input[type="checkbox"]').last();
    await lastCheckbox.click();
    await lastCheckbox.click();

    await page.locator('button:has-text("Clear Completed")').click();

    const finalCount = await tasks.count();
    const pendingText = await page.locator('p').filter({ hasText: 'Pending Tasks:' }).textContent();
    const pendingCount = parseInt(pendingText?.match(/\d+/)?.[0] || '0');

    expect(pendingCount).toBeLessThanOrEqual(finalCount);
  });

  test('toggling tasks multiple times maintains consistency @integration @state', async ({ page }) => {
    await page.goto('/');

    const firstCheckbox = page.locator('input[type="checkbox"]').first();

    for (let i = 0; i < 10; i++) {
      await firstCheckbox.click();
      await page.waitForTimeout(50);
    }

    await expect(firstCheckbox).toBeChecked();
  });
});

test.describe('Integration Tests - Browser Features', () => {

  test('using keyboard only (accessibility) @integration @a11y', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');

    await page.keyboard.type('Keyboard only task');
    await page.keyboard.press('Enter');

    await expect(page.locator('text=Keyboard only task')).toBeVisible();
  });

  test('window resize during operations @integration @responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const input = page.locator('input[placeholder="Add a new task..."]');
    await input.fill('Resize test');
    await input.press('Enter');

    await page.setViewportSize({ width: 375, height: 667 });

    await expect(page.locator('text=Resize test')).toBeVisible();

    await input.fill('Mobile task');
    await input.press('Enter');

    await expect(page.locator('text=Mobile task')).toBeVisible();

    await page.setViewportSize({ width: 1920, height: 1080 });

    await expect(page.locator('text=Resize test')).toBeVisible();
    await expect(page.locator('text=Mobile task')).toBeVisible();
  });
});
