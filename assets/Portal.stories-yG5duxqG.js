import{B as i}from"./brands-Bt7X0WfB.js";import{r as _}from"./theme-am4WDJP3.js";import{I as v}from"./images-ZwpotJlb.js";const $={title:"Portal/Gallery"},o=n=>String(n||"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]);function h(n){let a="";try{const s=window.location;a=s.origin+s.pathname.replace(/iframe\.html.*$/,"")}catch{a="./"}return`${a}?path=/story/brand-guideline--guideline&globals=brand:${n}`}const t=()=>{const n=i.map(a=>{const s=a.tokens||{},r=s.color||{},p=(v[a.slug]||[])[0]||"",g=_((s.font||{}).heading)||"Inter",m=["primary","secondary","accent"].map(e=>r[e]?`<span class="pcard__dot" style="background:${r[e]}"></span>`:"").join("");return`<a class="pcard" href="${h(a.slug)}" target="_top" data-slug="${a.slug}">
      <div class="pcard__img" style="background-image:url('${p}')"></div>
      <div class="pcard__body">
        <div class="pcard__eyebrow">${o(a.branche)}</div>
        <div class="pcard__name" style="font-family:'${g}', system-ui, sans-serif">${o(a.name)}</div>
        <p class="pcard__claim">${o(a.claim)}</p>
        <div class="pcard__dots">${m}</div>
      </div>
    </a>`}).join("");return`<div class="portal">
    <div class="portal__head">
      <div class="pcard__eyebrow">AI Corporate Design Generator</div>
      <h1 style="font-size:clamp(30px,5vw,52px);line-height:1.05;letter-spacing:-.02em;margin:8px 0 10px;font-weight:800">Brand&nbsp;Portal</h1>
      <p style="font-size:18px;color:#5B6470;max-width:60ch;margin:0">${i.length} AI-generated corporate designs. Click a brand to open its full guideline — strategy, logo, colour, type, components, applications & downloads. Fictional brands.</p>
    </div>
    <div class="portal__grid">${n}</div>
    <p style="max-width:1200px;margin:28px auto 0;color:#8A93A0;font-size:13px">Photography via Unsplash. Fonts via Google Fonts.</p>
  </div>`};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const cards = BRAND_LIST.map(b => {
    const t = b.tokens || {};
    const c = t.color || {};
    const img = (IMAGES[b.slug] || [])[0] || '';
    const heading = resolveFamily((t.font || {}).heading) || 'Inter';
    const dots = ['primary', 'secondary', 'accent'].map(k => c[k] ? \`<span class="pcard__dot" style="background:\${c[k]}"></span>\` : '').join('');
    return \`<a class="pcard" href="\${managerUrl(b.slug)}" target="_top" data-slug="\${b.slug}">
      <div class="pcard__img" style="background-image:url('\${img}')"></div>
      <div class="pcard__body">
        <div class="pcard__eyebrow">\${esc(b.branche)}</div>
        <div class="pcard__name" style="font-family:'\${heading}', system-ui, sans-serif">\${esc(b.name)}</div>
        <p class="pcard__claim">\${esc(b.claim)}</p>
        <div class="pcard__dots">\${dots}</div>
      </div>
    </a>\`;
  }).join('');
  return \`<div class="portal">
    <div class="portal__head">
      <div class="pcard__eyebrow">AI Corporate Design Generator</div>
      <h1 style="font-size:clamp(30px,5vw,52px);line-height:1.05;letter-spacing:-.02em;margin:8px 0 10px;font-weight:800">Brand&nbsp;Portal</h1>
      <p style="font-size:18px;color:#5B6470;max-width:60ch;margin:0">\${BRAND_LIST.length} AI-generated corporate designs. Click a brand to open its full guideline — strategy, logo, colour, type, components, applications & downloads. Fictional brands.</p>
    </div>
    <div class="portal__grid">\${cards}</div>
    <p style="max-width:1200px;margin:28px auto 0;color:#8A93A0;font-size:13px">Photography via Unsplash. Fonts via Google Fonts.</p>
  </div>\`;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["AllBrands"];export{t as AllBrands,b as __namedExportsOrder,$ as default};
