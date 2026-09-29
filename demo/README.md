# Mr Bubs Mini demo

This demo uses the published `page-mascot` package with the two Bubs 3×3 sprite atlases in `public/mascots/`.

## Local

```bash
npm install
npm run dev
```

## GitHub Pages

The repository workflow at `.github/workflows/demo-pages.yml` builds this folder and deploys it to GitHub Pages.

Expected public URL:

`https://mr-bubs.github.io/bubs-mascot/`

The Vite base path is explicitly set to `/bubs-mascot/`, and the mascot asset URLs are constructed from `import.meta.env.BASE_URL`, so the demo works both locally and on GitHub Pages.
