import { defineConfig, devices } from '@playwright/test';

/**
 * Configuración de Playwright para la prueba técnica de QA (BITBOX).
 * Sitio bajo prueba: https://www.ikea.com.do
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Tiempo máximo por test y por cada expect (el sitio es productivo y puede tardar) */
  timeout: 60_000,
  expect: { timeout: 10_000 },

  /* Un reintento para evitar falsos fallos por lentitud de la red */
  retries: 1,

  /* Salida legible en la terminal + reporte HTML que no se abre solo */
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'https://www.ikea.com.do',
    locale: 'es-DO',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
