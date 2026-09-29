# @mr-bubs/page-mascot

Thin Mr Bubs wrapper around [page-mascot](https://github.com/nilbuild/page-mascot).

It keeps application code consistent while the canonical sprite atlases live in
this repository.

## Usage

```tsx
import { BubsMascot } from '@mr-bubs/page-mascot'

<BubsMascot size={180} />
```

By default the component expects:

- `/mascots/bubs-directions.webp`
- `/mascots/bubs-reactions.webp`

Copy those two optimized assets into the consuming app's static/public mascot
directory, or pass custom `directions` and `reactions` URLs.
