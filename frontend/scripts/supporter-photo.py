import argparse
import pathlib

from PIL import Image, ImageOps

WIDTH, HEIGHT = 800, 1000
OUT_DIR = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'unterstuetzende'


def crop_box(w: int, h: int, fx: float, fy: float) -> tuple[int, int, int, int]:
    target = WIDTH / HEIGHT
    if w / h > target:
        cw, ch = round(h * target), h
    else:
        cw, ch = w, round(w / target)
    left = min(max(round(fx * w - cw / 2), 0), w - cw)
    top = min(max(round(fy * h - ch / 2), 0), h - ch)
    return left, top, left + cw, top + ch


def main() -> None:
    parser = argparse.ArgumentParser(description='Foto für Unterstützer:innen auf 4:5 zuschneiden')
    parser.add_argument('source')
    parser.add_argument('slug')
    parser.add_argument('--x', type=float, default=0.5, help='Bildmitte horizontal, 0 bis 1')
    parser.add_argument('--y', type=float, default=0.4, help='Bildmitte vertikal, 0 bis 1')
    args = parser.parse_args()

    image = ImageOps.exif_transpose(Image.open(args.source)).convert('RGB')
    image = image.crop(crop_box(*image.size, args.x, args.y))
    image = image.resize((WIDTH, HEIGHT), Image.LANCZOS)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out = OUT_DIR / f'{args.slug}.webp'
    image.save(out, 'WEBP', quality=80, method=6)
    print(f'{out} ({out.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    main()
