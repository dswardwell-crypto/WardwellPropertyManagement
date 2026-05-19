# Wardwell Property Management Website

This is a Vite + React website ready to upload to GitHub and deploy through Vercel.

## Payment setup

The website includes a Payments section with three buttons:
- Pay Rent
- Pay Fees
- Owner Payment

All three currently use a placeholder link in `src/App.jsx`:

```js
const PAYMENT_LINK = 'https://buy.stripe.com/REPLACE_WITH_YOUR_STRIPE_PAYMENT_LINK'
```

After you create a real Stripe Payment Link or Square Checkout link, replace the placeholder URL with your real link.

## Local preview

If you have Node.js installed:

```bash
npm install
npm run dev
```

## Vercel deployment

1. Upload this folder to a GitHub repository.
2. In Vercel, click Add New > Project.
3. Import the GitHub repository.
4. Framework preset should detect Vite.
5. Click Deploy.
6. In Vercel, go to Settings > Domains and add `wardwellpropertymanagement.com`.
7. Update your domain DNS records as Vercel instructs.
