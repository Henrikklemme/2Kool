# 2Kool — static site

This is a clean, static rebuild of the **2Kool** ("Nordic Digital Elevate") landing
page, reconstructed from a saved copy of the Lovable preview (browser "Save
Page As" output). It's a single page, no build step, no framework — just
HTML/CSS/JS, ready to push to GitHub and serve with GitHub Pages.

## What's in here

```
index.html               the page
assets/
  fonts.css              real Google Fonts CSS (Instrument Serif + Inter)
  tailwind.config.js      maps the site's design tokens to Tailwind's CDN build
  site.css                CSS custom properties (colors) + small base styles
  main.js                 contact-form mailto fallback + language-toggle UI
  images/                 the six photos used on the page
.github/workflows/deploy.yml   GitHub Pages Actions workflow (deploy on push)
.nojekyll                 tells GitHub Pages not to run Jekyll over this
```

Styling is done with the [Tailwind CDN build](https://tailwindcss.com/docs/installation/play-cdn) —
no `npm install`, no bundler. That keeps this repo trivial to host anywhere
static (GitHub Pages, Netlify, Vercel, S3, etc.).

## A few things worth knowing

- **Source material was partial.** The uploaded zip was a browser-saved copy
  of the Lovable *editor* preview, not an exported source bundle — most of
  the CSS/JS files in it were Lovable's own app chrome (chat panel, file
  browser, canvas, etc.), not the 2Kool site itself. What I actually had to
  work with was the rendered HTML of the homepage, the real photos, and the
  real Google Fonts stylesheet.
- **Colors are a close reconstruction, not a certainty.** A warm
  cream/near-black light theme (`--background`, `--foreground`, `--primary`,
  `--border`, `--muted-foreground`) showed up intact in the saved files and
  is used as-is. The one accent color used throughout (the small dot marks,
  the italic highlight words) wasn't recoverable, so I approximated it with
  a warm terracotta that fits the site's tone — see the comment at the top
  of `assets/site.css` if you want to swap in the real value.
- **Only the homepage was captured.** The nav originally linked to
  `/founders` and `/philosophy` as separate pages in the live app; those
  weren't part of the save, so here they point to the in-page `#founders`
  section (and to `#redesign`) instead. If you have that content, it's easy
  to add as `founders.html` / `philosophy.html` and link them back up.
- **The contact form has no backend.** It's wired to open the visitor's
  email client with a pre-filled message (`mailto:`) rather than to Lovable's
  original submit handler, since there's no server here. Swap in
  [Formspree](https://formspree.io/), [Getform](https://getform.io/), or
  similar if you want real submissions.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this folder to `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 2Kool static site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and choose **GitHub Actions**. The included workflow
   (`.github/workflows/deploy.yml`) will build and deploy automatically on
   every push to `main`.
3. Your site will be live at `https://<you>.github.io/<repo>/`.

No further configuration needed — there's no build step to run locally
either; you can also just open `index.html` directly in a browser to preview.
