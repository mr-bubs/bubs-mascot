# Bubs Mascot

Reusable home for **Mr Bubs**, the mascot used across Mr Bubs projects.

## Character system

Mr Bubs has two presentation modes:

- **Mini Bubs** — close-up interactive mascot for compact UI, pointer tracking, and reaction states.
- **Full Bubs** — full-body character for larger scenes, poses, and future animation.

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
```

The original full-body artwork is the visual authority. Derived assets should preserve Mr Bubs' identity and remain versionable so projects can upgrade deliberately.

## Status

Initial repository scaffold. The first Mini Bubs directional and expression sheets are being prepared for the page-mascot implementation.
