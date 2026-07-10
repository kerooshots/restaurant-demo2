# Alforno Premium Redesign Demo

A premium Next.js redesign concept for Alforno's Italian Kitchen. It uses a consistent Italian heritage theme across Home, Menu, Order, and Visit pages.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a new GitHub repository and upload this project's files.
2. Sign in to Vercel and import the repository.
3. Vercel detects Next.js automatically. Click Deploy.

## Static export

`next.config.mjs` uses `output: 'export'`, so `npm run build` creates an `out/` folder that can also be hosted on static hosting.

## Before client launch

- Obtain written permission to use the restaurant's logo, photographs, copy, menu, and trademarks.
- Verify every menu item, price, business hour, phone number, and ordering URL with the owner.
- Replace demo ordering/cart behavior with the owner's approved ordering integration.
- Connect the owner's domain only after approval and payment terms are signed.
