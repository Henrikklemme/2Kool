# 2Kool — website

A single self-contained page (`index.html`) — no build step, no dependencies. Open it directly in a browser, or host it for free with GitHub Pages.

## Publish with GitHub Pages

1. Create a new repository on GitHub (public or private, Pages works for both on paid plans; public repos get Pages free).
2. Upload the contents of this folder to the repo (drag-and-drop `index.html` and `README.md` via the GitHub web UI, or `git push`).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the `main` branch and `/ (root)` folder, then **Save**.
6. GitHub gives you a live URL within a minute or two, typically `https://<your-username>.github.io/<repo-name>/`.

That's it — every time you push a change to `index.html`, the live page updates automatically.

## Notes

- The language toggle (EN/DA) and all content are handled in plain JavaScript inside `index.html` — no external i18n library needed.
- All photos (forest, city, fjord, coast, café, architecture, nature, and the two founder headshots) live in `images/` and are referenced with plain relative paths, so they'll work as soon as the folder structure is uploaded as-is — keep `index.html` and `images/` in the same place.
- `images/harbor.jpg` is included but not currently used on the page (it wasn't used in the original design either) — feel free to drop it in somewhere or delete it.
- Two fonts (Inter, Instrument Serif) load from Google Fonts via a CDN link in the `<head>` — this requires an internet connection for visitors, which is normal for any public website.
