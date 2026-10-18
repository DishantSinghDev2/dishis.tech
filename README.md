# dishis.tech

Website for DishIs Technologies LLC.

## Development

```bash
npm install
cp .env.example .env   # fill in SMTP + Turnstile keys
npm run dev
```

The contact form is protected by [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).
Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` in production; without them the
form falls back to Cloudflare's always-pass test keys.

Company details shown on the About page, contact page and footer live in `lib/company.ts`.
