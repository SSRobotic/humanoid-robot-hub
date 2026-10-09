'use strict';
const state={query:'',category:'all',source:'all',sort:'curated',lang:localStorage.getItem('hub-lang')||'en'};
const categories=[['all','All resources','ทั้งหมด'],['models','Models & URDF','โมเดล & URDF'],['control','SDK & Control','SDK & ควบคุม'],['ros','ROS & Integration','ROS & เชื่อมต่อ'],['simulation','Simulation','จำลอง'],['learning','Robot Learning','Robot Learning'],['vision','Vision & Manipulation','Vision & แขนกล']];
const $=id=>document.getElementById(id);
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function link(text,url){const a=el('a','',text);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function categoryName(id){const c=categories.find(x=>x[0]===id);return c?c[state.lang==='th'?2:1]:id;}
function render(){
 const q=state.query.trim().toLowerCase();
 let items=HUB_CATALOG.filter(r=>(state.category==='all'||r.categories.includes(state.category))&&(state.source==='all'||r.source===state.source)&&(!q||[r.title,r.description,r.descriptionTh,r.owner,...r.tags].join(' ').toLowerCase().includes(q)));
 if(state.sort==='name')items=items.slice().sort((a,b)=>a.title.localeCompare(b.title));
 $('cards').replaceChildren();
 for(const r of items){
  const card=el('article','card');const top=el('div','card-top');top.append(el('span','category',categoryName(r.categories[0])),el('span','source-tag',r.source==='collection'?'SSROBOTIC COLLECTION':'ORIGINAL PROJECT'));card.append(top,el('h3','',r.title),el('p','',state.lang==='th'?r.descriptionTh:r.description));
  const tags=el('div','tags');r.tags.forEach(t=>tags.append(el('span','',t)));card.append(tags,el('div','credit',(state.lang==='th'?'ผู้พัฒนาต้นฉบับ: ':'Original creators: ')+r.owner));
  const links=el('div','card-links');links.append(link(r.source==='collection'?(state.lang==='th'?'เปิดคลังโค้ด ↗':'Browse collection ↗'):(state.lang==='th'?'เปิดโครงการ ↗':'Explore project ↗'),r.url));if(r.source==='collection')links.append(link(state.lang==='th'?'ต้นฉบับ ↗':'Upstream ↗',r.upstream));card.append(links);$('cards').append(card);
 }
 $('results-count').textContent=state.lang==='th'?`พบ ${items.length} จาก ${HUB_CATALOG.length} รายการ`:`Showing ${items.length} of ${HUB_CATALOG.length} resources`;
 $('empty').hidden=items.length!==0;
 document.querySelectorAll('#filters button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===state.category)));
}
function language(){
 document.documentElement.lang=state.lang;
 document.querySelectorAll('[data-en]').forEach(n=>{const value=n.dataset[state.lang];if(n.tagName==='H1'){n.replaceChildren();value.split('<br>').forEach((line,i)=>{if(i)n.append(document.createElement('br'));n.append(document.createTextNode(line));});}else n.textContent=value;});
 $('language').textContent=state.lang==='th'?'EN':'TH';$('language').setAttribute('aria-label',state.lang==='th'?'Switch to English':'Switch to Thai');
 $('search').placeholder=state.lang==='th'?'ค้นหา G1, Atom, ROS 2, จำลอง…':'Search G1, Atom, ROS 2, simulation…';
 $('filters').replaceChildren();categories.forEach(c=>{const b=el('button','',c[state.lang==='th'?2:1]);b.type='button';b.dataset.category=c[0];b.addEventListener('click',()=>{state.category=c[0];render();});$('filters').append(b);});
 const sources=state.lang==='th'?['ทุกแหล่งข้อมูล','คลัง SSRobotic','โครงการต้นฉบับ']:['All sources','SSRobotic collections','Original projects'];Array.from($('source').options).forEach((o,i)=>o.textContent=sources[i]);
 const sorts=state.lang==='th'?['ลำดับแนะนำ','ชื่อ A–Z']:['Curated order','Name A–Z'];Array.from($('sort').options).forEach((o,i)=>o.textContent=sorts[i]);
 render();
}
$('search').addEventListener('input',e=>{state.query=e.target.value;render();});$('source').addEventListener('change',e=>{state.source=e.target.value;render();});$('sort').addEventListener('change',e=>{state.sort=e.target.value;render();});
$('language').addEventListener('click',()=>{state.lang=state.lang==='en'?'th':'en';localStorage.setItem('hub-lang',state.lang);language();});
$('reset').addEventListener('click',()=>{Object.assign(state,{query:'',category:'all',source:'all',sort:'curated'});$('search').value='';$('source').value='all';$('sort').value='curated';render();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();$('search').focus();}});
$('resource-count').textContent=String(HUB_CATALOG.length).padStart(2,'0');language();
