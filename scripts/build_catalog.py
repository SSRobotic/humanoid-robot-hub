import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'catalog.json').read_text(encoding='utf-8'))
sections=json.loads((root/'sections.json').read_text(encoding='utf-8'))
repos=json.loads((root/'repositories.json').read_text(encoding='utf-8'))
assert len({r['id'] for r in data})==len(data)
assert len({r['name'] for r in repos})==len(repos)
valid={s['id'] for s in sections}
for item in data:
    assert item['categories'] and set(item['categories'])<=valid
    for field in ('title','description','descriptionTh','owner','tags','url'):
        assert item[field],(item['id'],field)
    assert item['url'].startswith(('https://github.com/','https://huggingface.co/'))
out=''
for name,value in [('HUB_CATALOG',data),('HUB_SECTIONS',sections),('HUB_REPOSITORIES',repos)]:
    out+='const '+name+' = '+json.dumps(value,ensure_ascii=False,indent=2)+';\n'
(root/'docs/catalog.js').write_text(out,encoding='utf-8')
print(f'Validated {len(data)} resources, {len(sections)} categories and {len(repos)} repositories.')
