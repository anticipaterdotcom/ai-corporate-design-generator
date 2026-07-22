import{c as v}from"./brands-Bt7X0WfB.js";import{r as d}from"./theme-am4WDJP3.js";const $={title:"Foundations/Typography"},n=r=>String(r||"").replace(/[&<>"]/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[i]),o=(r,i)=>{const a=(v(i).tokens||{}).font||{},t=a.scale||{},p=["h1","h2","h3","body","caption"],y=Object.keys(t).sort((s,e)=>(t[e]||0)-(t[s]||0)),f=p.filter(s=>t[s]).concat(y.filter(s=>!p.includes(s))).map(s=>{const e=t[s],l=e>=(t.h3||22);return`<div class="type-row">
        <div class="meta">${s}<br>${e}px</div>
        <div style="font-family:${l?"var(--font-heading),var(--font-fallback)":"var(--font-body),var(--font-fallback)"};font-size:${e}px;line-height:1.1;font-weight:${l?700:400}">Design that carries the brand</div>
      </div>`}).join(""),c=s=>s&&d(s)!==s?` <span class="mono caption">(rendered with ${n(d(s))})</span>`:"";return`<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Typography</h2></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
      <div class="tile"><p class="caption">Headline</p><p class="specimen" style="font-size:64px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>${n(a.heading)}</strong>${c(a.heading)}</p></div>
      <div class="tile"><p class="caption">Body</p><p style="font-family:var(--font-body),var(--font-fallback);font-size:48px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>${n(a.body)}</strong>${c(a.body)}</p></div>
      <div class="tile"><p class="caption">Mono</p><p class="mono" style="font-size:44px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>${n(a.mono)}</strong>${c(a.mono)}</p></div>
    </div>
    <div><h3 class="h3" style="margin-bottom:8px">Scale</h3>${f}</div>
    <div class="stack"><h3 class="h3">Paragraph</h3>
      <p class="body">Good typography is invisible: it lets the message lead. This paragraph is set in the body face at ${t.body||16}px with a 1.65 line height and a measure capped around 66 characters — the sweet spot for sustained reading. Weights, sizes and rhythm all come straight from the brand's design tokens.</p>
    </div>
  </div></section>`};var h,g,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(args, context) => {
  const b = currentBrand(context);
  const f = (b.tokens || {}).font || {};
  const scale = f.scale || {};
  const order = ['h1', 'h2', 'h3', 'body', 'caption'];
  const keys = Object.keys(scale).sort((a, c) => (scale[c] || 0) - (scale[a] || 0));
  const rows = order.filter(k => scale[k]).concat(keys.filter(k => !order.includes(k))).map(k => {
    const px = scale[k];
    const isHead = px >= (scale.h3 || 22);
    return \`<div class="type-row">
        <div class="meta">\${k}<br>\${px}px</div>
        <div style="font-family:\${isHead ? 'var(--font-heading),var(--font-fallback)' : 'var(--font-body),var(--font-fallback)'};font-size:\${px}px;line-height:1.1;font-weight:\${isHead ? 700 : 400}">Design that carries the brand</div>
      </div>\`;
  }).join('');
  const note = name => name && resolveFamily(name) !== name ? \` <span class="mono caption">(rendered with \${esc(resolveFamily(name))})</span>\` : '';
  return \`<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Typography</h2></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
      <div class="tile"><p class="caption">Headline</p><p class="specimen" style="font-size:64px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>\${esc(f.heading)}</strong>\${note(f.heading)}</p></div>
      <div class="tile"><p class="caption">Body</p><p style="font-family:var(--font-body),var(--font-fallback);font-size:48px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>\${esc(f.body)}</strong>\${note(f.body)}</p></div>
      <div class="tile"><p class="caption">Mono</p><p class="mono" style="font-size:44px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>\${esc(f.mono)}</strong>\${note(f.mono)}</p></div>
    </div>
    <div><h3 class="h3" style="margin-bottom:8px">Scale</h3>\${rows}</div>
    <div class="stack"><h3 class="h3">Paragraph</h3>
      <p class="body">Good typography is invisible: it lets the message lead. This paragraph is set in the body face at \${scale.body || 16}px with a 1.65 line height and a measure capped around 66 characters — the sweet spot for sustained reading. Weights, sizes and rhythm all come straight from the brand's design tokens.</p>
    </div>
  </div></section>\`;
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const k=["Specimen"];export{o as Specimen,k as __namedExportsOrder,$ as default};
