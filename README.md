# Aseryx Website

A modern, responsive website built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to Cloudflare Pages

## ☁️ Deployment (Cloudflare Pages)

This site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/) (not Vercel).

### One-time setup

1. **Create a Cloudflare account** and add the `aseryx.xyz` zone (Workers & Pages → Add domain).
2. **Create a Pages project** named `aseryx-website`:
   - Option A (recommended): Connect the `Aseryx/aseryx_website` GitHub repo in the Cloudflare dashboard.
   - Option B: Deploy manually with `npm run deploy` after `wrangler login`.
3. **Build settings** (if using Git integration):
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `20`
4. **GitHub Actions secrets** (if using the included workflow):
   - `CLOUDFLARE_API_TOKEN` — API token with *Cloudflare Pages Edit* permission
   - `CLOUDFLARE_ACCOUNT_ID` — found in the Cloudflare dashboard URL

### Domain configuration

After the first deploy succeeds, attach custom domains in **Pages → aseryx-website → Custom domains**:

- `aseryx.xyz` (primary)
- `www.aseryx.xyz` (redirect to apex)

#### If DNS is managed at Spaceship (current registrar)

Replace the old Vercel records with Cloudflare's instructions from the Custom domains panel. Typically:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `aseryx-website.pages.dev` |
| A or CNAME | `@` | Per Cloudflare Pages apex setup |

#### Recommended: move DNS to Cloudflare

1. Add `aseryx.xyz` as a site in Cloudflare.
2. At Spaceship, change nameservers to the two Cloudflare nameservers.
3. Attach `aseryx.xyz` and `www.aseryx.xyz` as custom domains on the Pages project — DNS records are created automatically.

#### Remove Vercel

Once Cloudflare is serving traffic, remove `aseryx.xyz` / `www.aseryx.xyz` from the Vercel project and delete the old Vercel DNS records (`563558a760b3e08b.vercel-dns-017.com`, etc.).

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
aseryx_website/
├── public/              # Static assets (images)
├── src/
│   ├── components/
│   │   ├── common/      # Reusable UI components
│   │   │   ├── GrainOverlay.jsx
│   │   │   └── CursorGlow.jsx
│   │   └── layout/      # Layout components
│   │       ├── Navigation.jsx
│   │       └── Footer.jsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useScrollReveal.jsx
│   │   └── useMousePosition.jsx
│   ├── pages/           # Page components
│   │   ├── LandingPage.jsx
│   │   └── IndividualsPage.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Customization

### Colors

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Components

The project follows a modular component structure:
- **common/**: Reusable UI components (GrainOverlay, CursorGlow)
- **layout/**: Layout components (Navigation, Footer)

### Pages

Add new pages in `src/pages/` and update routes in `src/App.jsx`.

## 📝 License

MIT
