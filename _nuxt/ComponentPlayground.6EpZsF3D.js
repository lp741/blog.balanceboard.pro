import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.FyBKmdZs.js";import{u as d}from"./asyncData.AxSG9ZxN.js";import f from"./Ellipsis.qzy10IS5.js";import y from"./ComponentPlaygroundData.5KOd4CYg.js";import"./TabsHeader.eiVdw6BO.js";import"./ComponentPlaygroundProps.g_1sANI2.js";import"./ProseH4.MXdwA5Dk.js";import"./ProseCodeInline.rTu2itw3.js";import"./Badge.W4Yt5bnJ.js";import"./MDCSlot.eABGFnJj.js";import"./slot.U5ksbjDs.js";import"./ProseP.3ukAWvzK.js";import"./index.2ujkEU-2.js";import"./ComponentPlaygroundSlots.vue.51h56zPL.js";import"./ComponentPlaygroundTokens.vue.IinQ6GZE.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-db765c06"]]);export{E as default};