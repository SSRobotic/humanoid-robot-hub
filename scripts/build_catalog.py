import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'catalog.json').read_text(encoding='utf-8'))
ids = set()
for item in data:
    assert item['id'] not in ids, f"Duplicate ID: {item['id']}"
    ids.add(item['id'])
    for field in ('title', 'description', 'descriptionTh', 'owner', 'categories', 'tags', 'url'):
        assert item[field], f"Missing {field}: {item['id']}"
    assert item['url'].startswith('https://github.com/')
(root / 'docs/catalog.js').write_text('const HUB_CATALOG = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f"Validated and generated {len(data)} resources.")
