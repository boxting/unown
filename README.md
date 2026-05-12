<p align="center">
  <img src="public/favicon.svg" alt="Unown" width="96" height="96">
</p>

# Unown — Boxting Labs Gmail Signature Generator

Internal tool for the Boxting Labs team to generate consistent Gmail signatures.

## Usage

1. Visit the deployed app at [boxting.github.io/unown](https://boxting.github.io/unown/)
2. Fill in your details (name, role, phone, email, location)
3. The live preview updates as you type
4. Click **Copy HTML — paste into Gmail**

### Setting up your Gmail signature

1. Open Gmail and click the **gear icon** (top-right) → **See all settings**
2. Scroll down to the **Signature** section
3. Create a new signature or select an existing one
4. Click the **`</>`** (source/HTML) icon in the signature editor toolbar
5. Paste the copied HTML and click **Insert**
6. Click **Save Changes** at the bottom of the page

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deployment

The app auto-deploys to GitHub Pages on every push to `main` via the workflow in `.github/workflows/deploy.yml`.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- i18next (English / Spanish)
- GitHub Pages (pnpm + Vite)
