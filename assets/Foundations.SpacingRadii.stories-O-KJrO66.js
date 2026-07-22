import{c as v}from"./brands-Bt7X0WfB.js";const u={title:"Foundations/Spacing & Radii"},i=(m,d)=>{const t=v(d).tokens||{},r=t.space&&t.space.scale||[],p=t.radius||{},l=r.map((s,a)=>`
    <div class="type-row" style="grid-template-columns:120px 1fr;padding:12px 0">
      <div class="meta">space-${a}<br>${s}px</div>
      <div class="row"><div class="bar" style="width:${Math.max(s,2)}px"></div></div>
    </div>`).join(""),o=Object.entries(p).map(([s,a])=>`
    <div class="tile" style="text-align:center">
      <div class="radius-demo" style="border-radius:${Math.min(a,46)}px">${a}px</div>
      <p class="caption" style="margin-top:10px">radius-${s}</p>
    </div>`).join("");return`<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Spacing &amp; Radii</h2>
      <p class="body">An 8-point spacing rhythm keeps layouts predictable; the radius set gives the brand its shape language.</p></div>
    <div><h3 class="h3" style="margin-bottom:6px">Spacing scale</h3>${l}</div>
    <div class="stack"><h3 class="h3">Corner radii</h3>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">${o}</div></div>
  </div></section>`};var e,n,c;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`(args, context) => {
  const t = currentBrand(context).tokens || {};
  const space = t.space && t.space.scale || [];
  const radius = t.radius || {};
  const spacing = space.map((v, i) => \`
    <div class="type-row" style="grid-template-columns:120px 1fr;padding:12px 0">
      <div class="meta">space-\${i}<br>\${v}px</div>
      <div class="row"><div class="bar" style="width:\${Math.max(v, 2)}px"></div></div>
    </div>\`).join('');
  const radii = Object.entries(radius).map(([k, v]) => \`
    <div class="tile" style="text-align:center">
      <div class="radius-demo" style="border-radius:\${Math.min(v, 46)}px">\${v}px</div>
      <p class="caption" style="margin-top:10px">radius-\${k}</p>
    </div>\`).join('');
  return \`<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Spacing &amp; Radii</h2>
      <p class="body">An 8-point spacing rhythm keeps layouts predictable; the radius set gives the brand its shape language.</p></div>
    <div><h3 class="h3" style="margin-bottom:6px">Spacing scale</h3>\${spacing}</div>
    <div class="stack"><h3 class="h3">Corner radii</h3>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">\${radii}</div></div>
  </div></section>\`;
}`,...(c=(n=i.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Scale"];export{i as Scale,h as __namedExportsOrder,u as default};
