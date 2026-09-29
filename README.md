# Bubs Mascot

Reusable home for **Mr Bubs**, the mascot used across Mr Bubs projects.

## Character system

Mr Bubs has two presentation modes:

- **Mini Bubs** — close-up interactive mascot for compact UI, pointer tracking, and reaction states.
- **Full Bubs** — full-body character for larger scenes, poses, and future animation.

## Mini Bubs

Mini Bubs uses the open-source [page-mascot](https://github.com/nilbuild/page-mascot) interaction engine. It reads two aligned 3×3 atlases:

- `assets/mini/optimized/bubs-directions.webp`
- `assets/mini/optimized/bubs-reactions.webp`

The generated art has already been normalized locally. The repository includes a reproducible asset-preparation script at `scripts/prepare_assets.py`.

> The GitHub connector available in chat can write code/text files but cannot directly upload local binary image files, so the two WebP atlases still need to be copied into the repository.

## Repository structure

```text
assets/
  master/       Canonical source artwork (never overwrite)
  mini/
    directional/
    expressions/
    optimized/
  full/
    static/
    poses/
    animations/
packages/
  page-mascot/
  full-mascot/
demo/
docs/
  CHARACTER.md
scripts/
  prepare_assets.py
```

The original full-body artwork is the visual authority. Derived assets should preserve Mr Bubs' identity and remain versionable so projects can upgrade deliberately.

## Demo

The React/Vite demo lives in `demo/`.

Once the two WebP atlases are served at:

- `/mascots/bubs-directions.webp`
- `/mascots/bubs-reactions.webp`

run:

```bash
cd demo
npm install
npm run dev
```

Move the pointer around Mr Bubs to change head direction. Click/tap him to trigger a reaction.

## Attribution

See `THIRD_PARTY_NOTICES.md` for the page-mascot MIT attribution.
