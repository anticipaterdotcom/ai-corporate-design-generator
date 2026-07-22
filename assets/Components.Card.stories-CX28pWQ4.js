import{c as d}from"./brands-Bt7X0WfB.js";const b={title:"Components/Card"},n=e=>String(e||"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),s=(e,a)=>{const t=d(a);return`<section class="band"><div class="wrap">
    <div class="card">
      <div class="card__bar"></div>
      <p class="eyebrow card__eyebrow">${n(t.branche)}</p>
      <h3 class="h3" style="margin:8px 0 12px">${n(t.name)}</h3>
      <p class="body" style="font-size:15px">${n(t.claim)||"A themeable card that draws its colors, radii, shadow and type from the brand tokens."}</p>
      <div class="row" style="margin-top:16px">
        <span class="badge badge--soft">Featured</span>
        <span class="badge badge--accent">New</span>
      </div>
      <div class="row" style="margin-top:20px">
        <button class="btn btn--primary btn--sm">Action</button>
        <button class="btn btn--ghost btn--sm">Details</button>
      </div>
    </div>
  </div></section>`};var r,c,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`(args, context) => {
  const b = currentBrand(context);
  return \`<section class="band"><div class="wrap">
    <div class="card">
      <div class="card__bar"></div>
      <p class="eyebrow card__eyebrow">\${esc(b.branche)}</p>
      <h3 class="h3" style="margin:8px 0 12px">\${esc(b.name)}</h3>
      <p class="body" style="font-size:15px">\${esc(b.claim) || 'A themeable card that draws its colors, radii, shadow and type from the brand tokens.'}</p>
      <div class="row" style="margin-top:16px">
        <span class="badge badge--soft">Featured</span>
        <span class="badge badge--accent">New</span>
      </div>
      <div class="row" style="margin-top:20px">
        <button class="btn btn--primary btn--sm">Action</button>
        <button class="btn btn--ghost btn--sm">Details</button>
      </div>
    </div>
  </div></section>\`;
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const l=["Default"];export{s as Default,l as __namedExportsOrder,b as default};
