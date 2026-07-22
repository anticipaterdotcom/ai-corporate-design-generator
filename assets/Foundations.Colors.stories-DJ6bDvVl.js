import{c as b}from"./brands-Bt7X0WfB.js";import{b as m,c as v,w as g}from"./theme-am4WDJP3.js";const y={title:"Foundations/Colors"};function h(r,a){if(!a)return"";const s=m(a),t=v(a,s),e=g(t),o=t>=4.5,c=o?"rgba(30,158,106,.16)":"rgba(210,75,75,.16)",n=o?"#0d7a4f":"#b23b3b";return`<div class="swatch">
    <div class="swatch__chip" style="background:${a};color:${s}">
      <span class="badge-aa" style="background:${s==="#FFFFFF"?"rgba(0,0,0,.28)":"rgba(255,255,255,.6)"};color:${s}">${s==="#FFFFFF"?"white text":"black text"}</span>
    </div>
    <div class="swatch__meta">
      <div class="swatch__name">${r}</div>
      <div class="swatch__hex">${a.toUpperCase()}</div>
      <div style="margin-top:8px"><span class="badge-aa" style="background:${c};color:${n}">${e} · ${t.toFixed(1)}:1</span></div>
    </div>
  </div>`}function d(r,a){const s=a.filter(([,t])=>t).map(([t,e])=>h(t,e)).join("");return s?`<div class="stack"><h3 class="h3">${r}</h3><div class="grid swatches">${s}</div></div>`:""}const i=(r,a)=>{const s=(b(a).tokens||{}).color||{},t=[["Primary",s.primary],["Secondary",s.secondary],["Accent",s.accent]],e=Object.entries(s.neutral||{}).map(([c,n])=>[`Neutral ${c}`,n]),o=Object.entries(s.semantic||{}).map(([c,n])=>[c[0].toUpperCase()+c.slice(1),n]);return`<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Colors</h2>
      <p class="body">Each swatch shows the best on-color text and its measured WCAG contrast — body text needs ≥ 4.5:1.</p></div>
    ${d("Brand",t)}
    ${d("Neutrals",e)}
    ${d("Semantic",o)}
  </div></section>`};var l,p,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`(args, context) => {
  const c = (currentBrand(context).tokens || {}).color || {};
  const brand = [['Primary', c.primary], ['Secondary', c.secondary], ['Accent', c.accent]];
  const neutral = Object.entries(c.neutral || {}).map(([k, v]) => [\`Neutral \${k}\`, v]);
  const semantic = Object.entries(c.semantic || {}).map(([k, v]) => [k[0].toUpperCase() + k.slice(1), v]);
  return \`<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Colors</h2>
      <p class="body">Each swatch shows the best on-color text and its measured WCAG contrast — body text needs ≥ 4.5:1.</p></div>
    \${group('Brand', brand)}
    \${group('Neutrals', neutral)}
    \${group('Semantic', semantic)}
  </div></section>\`;
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const F=["Palette"];export{i as Palette,F as __namedExportsOrder,y as default};
