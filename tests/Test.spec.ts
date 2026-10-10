import { test, expect } from '@playwright/test';
test('Registro: muestra error al usar un correo con formato inválido', async ({ page }) => {
  await page.addLocatorHandler(
    page.getByRole('button', { name: 'Rechazar cookies' }),
    async (button) => {
      await button.click();
    }
  );
  await page.goto('/es/client', { waitUntil: 'domcontentloaded' });
  const form = page.locator('#sing-up-email_form:visible');
  const emailInput = form.locator('#email_create_account');
  const errorMessage = form.locator('#email_create_account-helper');

  await expect(form).toBeVisible();

  await emailInput.fill('juan.com');
  await form.getByRole('button', { name: 'Crear Cuenta' }).click();
  
  await expect(errorMessage).toHaveAttribute('state', 'error');
  await expect(errorMessage).toHaveText('El correo electrónico es incorrecto');
  await expect(page.locator('#registerForm')).toBeHidden();
});
