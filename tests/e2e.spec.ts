import { test, expect } from '@playwright/test';

test.describe('PMP Flashcards App E2E', () => {
  test('Home page loads and navigation works', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /PMP Flashcards App/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Study Flashcards/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Quiz/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Statistics Page/i })).toBeVisible();
  });

  test('Navigate to Study page and see flashcard', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Study Flashcards/i }).click();
    await expect(page.getByRole('heading', { name: /Study Flashcards/i })).toBeVisible();
    // The card front (English term) should be visible
    await expect(page.getByTestId('card-front')).toHaveText('Scope');
  });

  test('Flip flashcard and see back content', async ({ page }) => {
    await page.goto('/study');
    // Click the card to flip
    await page.locator('div[style*="perspective"]').click();
    // The back should show Vietnamese translation and examples
    await expect(page.getByTestId('card-back')).toContainText('Phạm vi');
    await expect(page.getByTestId('card-back')).toContainText('The project scope defines what is included and excluded from the project.');
    await expect(page.getByTestId('card-back')).toContainText('Phạm vi dự án xác định những gì được bao gồm và loại trừ khỏi dự án.');
  });

  test('Back to Home button works from Study page', async ({ page }) => {
    await page.goto('/study');
    await page.getByRole('button', { name: /Back to Home/i }).click();
    await expect(page.getByRole('heading', { name: /PMP Flashcards App/i })).toBeVisible();
  });
}); 