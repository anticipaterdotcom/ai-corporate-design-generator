const w={title:"Components/Button",argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","accent","secondary","ghost"]},size:{control:"select",options:["sm","md","lg"]}},args:{label:"Button",variant:"primary",size:"md"}},r=({label:h,variant:z,size:o})=>`<div class="band"><div class="wrap">
    <button class="btn btn--${z} ${o!=="md"?"btn--"+o:""}">${h}</button>
  </div></div>`,t=r.bind({});t.args={label:"Get started",variant:"primary",size:"md"};const s=r.bind({});s.args={label:"Call to action",variant:"accent",size:"md"};const n=r.bind({});n.args={label:"Secondary action",variant:"ghost",size:"md"};const a=()=>`<section class="band"><div class="wrap stack-lg">
  <div class="stack"><p class="eyebrow">Components</p><h2 class="h1">Button</h2></div>
  <div class="stack">
    <div class="row"><button class="btn btn--primary">Primary</button><button class="btn btn--accent">Accent</button><button class="btn btn--secondary">Secondary</button><button class="btn btn--ghost">Ghost</button></div>
    <div class="row"><button class="btn btn--primary btn--sm">Small</button><button class="btn btn--primary">Medium</button><button class="btn btn--primary btn--lg">Large</button></div>
  </div>
</div></section>`;var e,c,b;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`({
  label,
  variant,
  size
}) => \`<div class="band"><div class="wrap">
    <button class="btn btn--\${variant} \${size !== 'md' ? 'btn--' + size : ''}">\${label}</button>
  </div></div>\``,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`({
  label,
  variant,
  size
}) => \`<div class="band"><div class="wrap">
    <button class="btn btn--\${variant} \${size !== 'md' ? 'btn--' + size : ''}">\${label}</button>
  </div></div>\``,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  variant,
  size
}) => \`<div class="band"><div class="wrap">
    <button class="btn btn--\${variant} \${size !== 'md' ? 'btn--' + size : ''}">\${label}</button>
  </div></div>\``,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,y,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`<section class="band"><div class="wrap stack-lg">
  <div class="stack"><p class="eyebrow">Components</p><h2 class="h1">Button</h2></div>
  <div class="stack">
    <div class="row"><button class="btn btn--primary">Primary</button><button class="btn btn--accent">Accent</button><button class="btn btn--secondary">Secondary</button><button class="btn btn--ghost">Ghost</button></div>
    <div class="row"><button class="btn btn--primary btn--sm">Small</button><button class="btn btn--primary">Medium</button><button class="btn btn--primary btn--lg">Large</button></div>
  </div>
</div></section>\``,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const $=["Primary","Accent","Ghost","AllVariants"];export{s as Accent,a as AllVariants,n as Ghost,t as Primary,$ as __namedExportsOrder,w as default};
