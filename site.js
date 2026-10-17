(()=>{const d=document,b=d.querySelector('.burger'),m=d.querySelector('.mmenu');if(!b||!m)return;
const s=o=>{m.classList.toggle('open',o);b.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');d.body.style.overflow=o?'hidden':'';if(o)m.querySelector('a').focus();else b.focus()};
b.onclick=()=>s(!m.classList.contains('open'));m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');b.classList.remove('open');d.body.style.overflow=''}));
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))s(false)});
matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches&&m.classList.contains('open'))s(false)})})();
(()=>{const S=window.SITE;if(!S)return;const d=document,$$=(s,r=d)=>[...r.querySelectorAll(s)],P=n=>'PKR\u00a0'+n.toLocaleString('en-PK');
const C=Object.entries(S.courses).map(([id,c])=>({id,...c})),L=C.filter(c=>c.live),T=c=>c.level?c.name+', '+c.level:c.name,B=n=>n+(n==1?' batch':' batches');
const V={window:S.nextWindow,liveCount:L.length,batchesTotal:B(C.reduce((a,c)=>a+c.batches,0))+' completed',
statusLine:L.length?`${L.length} course${L.length>1?'s':''} open for registration.`:`Registrations are closed. Next window: ${S.nextWindow}.`,
feesText:C.map(c=>`${T(c)} is ${P(c.early)} early bird (regular ${P(c.fee)})`).join('; '),
ambStatus:S.ambassador.open?'Applications are open':'Applications are closed',soonText:S.soon.map(c=>c.level?c.name+', '+c.level:c.name).join('; ')};
$$('[data-cta]').forEach(a=>{a.textContent=L.length?'Register now':'Join waitlist';a.href=L.length?S.registerUrl:S.waitlistUrl});
$$('[data-amb]').forEach(a=>a.href=S.ambassador.url);$$('[data-bind]').forEach(e=>e.textContent=V[e.dataset.bind]??'');
$$('[data-state]').forEach(e=>e.dataset.state=L.length?'open':'closed');
const fee=c=>`<s>${P(c.fee)}</s> ${P(c.early)}`,pl=c=>`<span class="pl ${c.live?'on':''}">${c.live?'Registrations open':'Registrations closed'}</span>`;
const nd=c=>`<a class="nd rv" href="courses.html#${c.id}">${pl(c)}<h3>${c.name}</h3><p>${c.level||'Foundations'}</p><div class="mt"><span>${fee(c)}</span><span>${B(c.batches)} completed</span></div></a>`;
const R={pathway:()=>S.tracks.map(t=>`<div class="tr"><p class="tl rv">${t.label}</p><div class="rw">${nd({id:t.ids[0],...S.courses[t.ids[0]]})}<i class="cn" aria-hidden="true"></i>${nd({id:t.ids[1],...S.courses[t.ids[1]]})}</div></div>`).join(''),
projects:()=>(S.projects||[]).map(p=>`<div class="proj"><div class="thumb">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover">`:'<svg viewBox="0 0 320 170" aria-hidden="true"><rect x="100" y="40" width="120" height="90" rx="8"/><rect x="145" y="65" width="30" height="40" rx="3"/><path d="M100 70H50M100 100H50M220 70H270M220 100H270"/></svg>'}</div><div><small>${p.category||''}</small><h3>${p.title}</h3><p>${p.summary}</p>${p.tags?`<small style="display:block;margin-top:12px">${p.tags.join(' / ')}</small>`:''}</div></div>`).join(''),
reviews:()=>(S.reviews||[]).map(r=>`<figure class="rq rv"><blockquote><p>\u201C${r.text}\u201D</p></blockquote><figcaption><b>${r.name}</b><span>${r.course||''}</span></figcaption></figure>`).join(''),
stack:()=>S.stack.map(g=>`<div class="tkr"><h3>${g.group}</h3><div><div class="cp">${g.core.map(x=>`<span>${x}</span>`).join('')}</div>${g.more.length?`<details><summary>${g.more.length} more</summary><div class="cp mo">${g.more.map(x=>`<span>${x}</span>`).join('')}</div></details>`:''}</div></div>`).join(''),
marquee:()=>{const a=S.stack.flatMap(g=>g.core.slice(0,2)).map(x=>`<span>${x}</span>`).join('');return a+a},
catalog:()=>C.map((c,i)=>{const n=S.instructors[c.instructor];return `<article class="cs rv" id="${c.id}"><div><span class="no">0${i+1}</span><div class="hd"><h2>${c.name}</h2>${c.level?`<span class="lv">${c.level}</span>`:''}${pl(c)}</div><p class="ds">${c.desc}</p><dl class="mt2"><div><dt>Fee</dt><dd>${fee(c)}</dd></div><div><dt>Duration</dt><dd>${c.weeks} weeks, online</dd></div><div><dt>Prerequisite</dt><dd>${c.prereq}</dd></div><div><dt>Delivered</dt><dd>${B(c.batches)}</dd></div></dl></div>
<div><ul class="tp">${c.topics.map(t=>`<li>${t}</li>`).join('')}</ul><details class="ins"><summary>Instructor: ${n.name}</summary><p>${n.bio}</p><a href="${n.linkedin}" target="_blank" rel="noopener">LinkedIn</a></details>
<a class="btn${c.live?'':' ghost'}" ${c.live?`href="${S.registerUrl}"`:`href="${S.waitlistUrl}"`} target="_blank" rel="noopener">${c.live?'Register now':'Join the waitlist'}</a></div></article>`}).join(''),
codes:()=>C.map(c=>`<div class="row"><h3>${T(c)}</h3><p>${c.name}${c.level?', '+c.level:''}. ${B(c.batches)} delivered.</p><small>EL-${c.code}-26B1-001</small></div>`).join(''),
soon:()=>S.soon.map(c=>`<div class="sn rv"><h3>${c.name}</h3>${c.level?`<span class="lv">${c.level}</span>`:''}<p>${c.desc}</p></div>`).join('')};
$$('[data-when]').forEach(e=>e.hidden=!(S[e.dataset.when]||[]).length);$$('[data-render]').forEach(e=>e.innerHTML=R[e.dataset.render]());
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv,.cn').forEach((e,i)=>{e.style.setProperty('--d',(i%4)*80+'ms');io.observe(e)});
$$('.nd,.cs,.sn').forEach(e=>e.addEventListener('pointermove',v=>{if(v.pointerType!=='mouse')return;const r=e.getBoundingClientRect();e.style.setProperty('--mx',v.clientX-r.left+'px');e.style.setProperty('--my',v.clientY-r.top+'px')}));
if(location.hash){const t=d.querySelector(location.hash);t&&t.scrollIntoView()}})();
