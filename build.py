"""Generate static HTML from public JSON content and HTML templates.

The script is intentionally dependency-free and refuses to generate the full
site until every template has been converted to content markers.
"""
from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).parent
CONTENT = ROOT / "content"
TEMPLATES = ROOT / "templates"
DEFAULT_OUTPUT = ROOT / ".build"


SCALAR = re.compile(r"\{\{\s*([\w.-]+)\s*\}\}")
LOOP = re.compile(r"\{\{#\s*([\w.-]+)\s*\}\}(.*?)\{\{/\s*\1\s*\}\}", re.DOTALL)


def resolve(data: Any, path: str) -> Any:
    current = data
    for part in path.split("."):
        if isinstance(current, list):
            current = current[int(part)]
        elif isinstance(current, dict):
            current = current[part]
        else:
            raise KeyError(path)
    return current


def render(template: str, data: dict[str, Any], context: dict[str, Any] | None = None) -> str:
    current = data if context is None else context

    def lookup(path: str) -> Any:
        try:
            return resolve(current, path)
        except (KeyError, IndexError, ValueError):
            return resolve(data, path)

    def render_loop(match: re.Match[str]) -> str:
        values = lookup(match.group(1))
        body = match.group(2)
        if isinstance(values, list):
            return "".join(render(body, data, item) for item in values)
        if values:
            return render(body, data, current)
        return ""

    def render_scalar(match: re.Match[str]) -> str:
        return html.escape(str(lookup(match.group(1))), quote=True)

    while LOOP.search(template):
        template = LOOP.sub(render_loop, template)
    return SCALAR.sub(render_scalar, template)


def manifest_pages() -> list[dict[str, Any]]:
    return json.loads((CONTENT / "manifest.json").read_text(encoding="utf-8"))["pages"]


def validate_manifest() -> None:
    missing = []
    for page in manifest_pages():
        if not (CONTENT / page["file"]).is_file():
            missing.append(page["file"])
        if not (TEMPLATES / page["source"]).is_file():
            missing.append("templates/" + page["source"])
    if missing:
        raise SystemExit("Missing build files: " + ", ".join(missing))


def load_content(relative_file: str) -> dict[str, Any]:
    path = CONTENT / relative_file
    data = json.loads(path.read_text(encoding="utf-8"))
    if "inherits" in data:
        parent = load_content(data["inherits"])
        parent.update({key: value for key, value in data.items() if key != "inherits"})
        return parent
    return data


def build_page(page: dict[str, Any], output_root: Path) -> Path:
    data = load_content(page["file"])
    template_path = TEMPLATES / page["source"]
    result = render(template_path.read_text(encoding="utf-8"), data)
    if "{{" in result or "}}" in result:
        raise SystemExit(f"Unresolved template marker in {page['source']}")
    destination = output_root / page["source"]
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(result, encoding="utf-8")
    return destination


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--page", help="Source path from the manifest, for example fr/index.html")
    parser.add_argument("--all", action="store_true", help="Generate every manifest page")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()
    validate_manifest()
    pages = manifest_pages()
    if args.page:
        pages = [page for page in pages if page["source"] == args.page]
        if not pages:
            raise SystemExit(f"Page not found in manifest: {args.page}")
    elif not args.all:
        raise SystemExit("Use --all or --page SOURCE_PATH")
    for page in pages:
        destination = build_page(page, args.output)
        print(f"Generated {destination.relative_to(args.output)}")


if __name__ == "__main__":
    main()
