import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.wgcXhEkw.js";import{u as d}from"./asyncData.U32qeXBM.js";import f from"./Ellipsis.oAWTLP-r.js";import y from"./ComponentPlaygroundData.VkUjMD3q.js";import"./TabsHeader.uo7svLAA.js";import"./ComponentPlaygroundProps.cUkLO02k.js";import"./ProseH4.MT8vBZ8P.js";import"./ProseCodeInline.pNYTtgbj.js";import"./Badge.KEHyXQFI.js";import"./MDCSlot._mexv3dv.js";import"./slot.ErkGQsrA.js";import"./ProseP.rgEH-HRU.js";import"./index.HgnGnjze.js";import"./ComponentPlaygroundSlots.vue.KZ3rsxCY.js";import"./ComponentPlaygroundTokens.vue.F4IdhvNB.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-db765c06"]]);export{E as default};