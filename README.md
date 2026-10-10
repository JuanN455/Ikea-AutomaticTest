# Prueba técnica QA – IKEA RD

Test automatizado con Playwright que valida que el registro de [ikea.com.do](https://www.ikea.com.do/es/client) muestre el mensaje **"El correo electrónico es incorrecto"** al usar un correo con formato inválido, y que no avance al siguiente paso.

## Requisitos

- Node.js 20 o superior

## Cómo ejecutarlo

```bash
npm install
npx playwright install chromium
npm test
```

Para ver el navegador mientras corre:

```bash
npm run test:headed
```

Para ver el reporte de la última ejecución:

```bash
npm run report
```

## Archivos

- `tests/Test.spec.ts`: el test
- `playwright.config.ts`: configuración (Chromium, sitio base y reportes)
