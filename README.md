# Edith Skeard — Artist Site

Portfolio site for interdisciplinary artist Edith Skeard (Edie). Built with plain HTML, CSS, and JS — no framework or build step required.

## Pages

- **Home** — Bio, listen section, performance photo gallery, contact/social links
- **CV** — Full CV: exhibitions, projects, curation, teaching, awards
- **Contact** — Contact information and social links

## Develop

```bash
./serve.sh              # serves on port 8080
./serve.sh 3000         # or specify a custom port
```

Then open `http://localhost:8080` in a browser.

## Deploy

Push to GitHub and enable **GitHub Pages** from the `main` branch (root folder). The site is fully static with no build step.

## Updating content

Just edit the HTML files and push — the site updates immediately on Pages.

## Replace placeholder images

The images in `assets/images/` were downloaded from the previous Squarespace site. Replace them with your own files at any time (keep the same filenames to avoid editing HTML, or update the `src` attributes accordingly).

## Replace placeholder email

The `mailto:email@example.com` links appear on `index.html` and `contact.html`. Replace with the actual email address.
