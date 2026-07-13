# AGENTS.md

Plain HTML/CSS/JS static site — no build step, no dependencies.

## Serve locally

```bash
./serve.sh          # port 8080
./serve.sh 3000     # custom port
```

Alternatively: `python3 -m http.server 8080`

## Deploy

Push to `main` (root). Enable GitHub Pages in repo settings — no build action needed.

## Updating content

Edit `.html` files directly and push. No rebuild required.

## Tasks before first deploy

- Replace `email@example.com` in `index.html` and `contact.html` with the real email
- (Optional) Replace placeholder images in `assets/images/` (keep filenames or update `src`)

## Conventions

- `.html` pages share a common `<header>` and `<footer>` — keep them in sync across all pages
- Social links appear in both header (`IG`/`SB`/`SC` text placeholders) and `.footer-social` at page bottom — update both places
- Mobile breakpoints at 768px and 480px in `styles.css`
