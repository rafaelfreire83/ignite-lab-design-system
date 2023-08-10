import{j as C}from"./jsx-runtime-4ca860c5.js";import{$ as b}from"./index-f5c3bd84.js";import{c as z}from"./clsx-1229b3e0.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";function o({size:e="md",children:y,asChild:_}){const T=_?b:"span";return C.jsx(T,{className:z("text-gray-400 font-sans",{"text-xs":e==="sm","text-sm":e==="md","text-md":e==="lg"}),children:y})}try{o.displayName="Text",o.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Components/Text",component:o,args:{children:"Lorem ipsum",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},r={},s={args:{size:"sm"}},a={args:{size:"lg"}},t={args:{asChild:!0,children:C.jsx("p",{children:"Text with P"})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <p>Text with P</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const q=["Default","Small","Large","CustomComponet"];export{t as CustomComponet,r as Default,a as Large,s as Small,q as __namedExportsOrder,N as default};
//# sourceMappingURL=Text.stories-7ae7d12d.js.map
