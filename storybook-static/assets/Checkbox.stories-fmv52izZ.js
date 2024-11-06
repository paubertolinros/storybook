import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r as k}from"./index-DJO9vBfz.js";import{P as r}from"./index-C1dzxQ9A.js";function o({messageOn:u,messageOff:p,backgroundColor:f}){const[e,g]=k.useState(!1),h=()=>{g(!e)};return c.jsxs("div",{className:"checkbox-container",style:{backgroundColor:f},children:[c.jsx("input",{type:"checkbox",checked:e,onChange:h,className:`custom-checkbox ${e?"checked":"unchecked"}`}),c.jsx("span",{className:`checkbox-label ${e?"checked":"unchecked"}`,children:e?u:p})]})}o.propTypes={messageOn:r.string.isRequired,messageOff:r.string.isRequired,backgroundColor:r.string};o.defaultProps={messageOn:"Seleccionado",messageOff:"No seleccionado",backgroundColor:"#1f1f1f"};o.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{messageOn:{defaultValue:{value:'"Seleccionado"',computed:!1},description:"",type:{name:"string"},required:!1},messageOff:{defaultValue:{value:'"No seleccionado"',computed:!1},description:"",type:{name:"string"},required:!1},backgroundColor:{defaultValue:{value:'"#1f1f1f"',computed:!1},description:"",type:{name:"string"},required:!1}}};const O={title:"My Components/Checkbox",component:o,parameters:{layout:"centered"}},s={args:{messageOn:"Vaya... me has seleccionado :(",messageOff:"No me selecciones, no quiero trabajar"}},a={args:{messageOn:"¡Yuhu me has seleccionado :)",messageOff:"¿Me seleccionas :)?",backgroundColor:"#025f0a"}};var n,t,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    messageOn: "Vaya... me has seleccionado :(",
    messageOff: "No me selecciones, no quiero trabajar"
  }
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var i,m,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    messageOn: "¡Yuhu me has seleccionado :)",
    messageOff: "¿Me seleccionas :)?",
    backgroundColor: "#025f0a"
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["CheckboxDiscouraged","CheckboxAnimed"];export{a as CheckboxAnimed,s as CheckboxDiscouraged,y as __namedExportsOrder,O as default};
