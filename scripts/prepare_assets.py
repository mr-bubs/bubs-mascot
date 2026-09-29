"""Normalize Mr Bubs source sheets into page-mascot compatible 3x3 atlases.

Usage from the repository root:
    python scripts/prepare_assets.py

Requires Pillow. Source sheets are expected at:
    assets/mini/directional/directions-raw.png
    assets/mini/expressions/reactions-raw.png

Outputs:
    assets/mini/optimized/bubs-directions.webp
    assets/mini/optimized/bubs-reactions.webp

The script treats the input as a 3x3 grid, trims transparent padding per cell,
scales all cells consistently, aligns the bottom edge, and packs a clean atlas.
"""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TILE_SIZE = 280
PADDING = 14


def split_grid(image: Image.Image):
    width, height = image.size
    x = [round(i * width / 3) for i in range(4)]
    y = [round(i * height / 3) for i in range(4)]
    return [
        image.crop((x[col], y[row], x[col + 1], y[row + 1]))
        for row in range(3)
        for col in range(3)
    ]


def content_bbox(image: Image.Image):
    alpha = image.getchannel("A")
    mask = alpha.point(lambda p: 255 if p > 8 else 0)
    return mask.getbbox() or (0, 0, image.width, image.height)


def pack(source: Path, destination: Path):
    image = Image.open(source).convert("RGBA")
    cells = []

    for cell in split_grid(image):
        left, top, right, bottom = content_bbox(cell)
        margin = 8
        box = (
            max(0, left - margin),
            max(0, top - margin),
            min(cell.width, right + margin),
            min(cell.height, bottom + margin),
        )
        cells.append(cell.crop(box))

    max_width = max(cell.width for cell in cells)
    max_height = max(cell.height for cell in cells)
    scale = min(
        (TILE_SIZE - 2 * PADDING) / max_width,
        (TILE_SIZE - 2 * PADDING) / max_height,
    )

    atlas = Image.new("RGBA", (TILE_SIZE * 3, TILE_SIZE * 3), (0, 0, 0, 0))

    for index, cell in enumerate(cells):
        width = max(1, round(cell.width * scale))
        height = max(1, round(cell.height * scale))
        resized = cell.resize((width, height), Image.Resampling.LANCZOS)

        tile = Image.new("RGBA", (TILE_SIZE, TILE_SIZE), (0, 0, 0, 0))
        x = (TILE_SIZE - width) // 2
        y = TILE_SIZE - PADDING - height
        tile.alpha_composite(resized, (x, y))

        row, col = divmod(index, 3)
        atlas.alpha_composite(tile, (col * TILE_SIZE, row * TILE_SIZE))

    destination.parent.mkdir(parents=True, exist_ok=True)
    atlas.save(destination, "WEBP", quality=78, method=6)


def main():
    pack(
        ROOT / "assets/mini/directional/directions-raw.png",
        ROOT / "assets/mini/optimized/bubs-directions.webp",
    )
    pack(
        ROOT / "assets/mini/expressions/reactions-raw.png",
        ROOT / "assets/mini/optimized/bubs-reactions.webp",
    )


if __name__ == "__main__":
    main()
