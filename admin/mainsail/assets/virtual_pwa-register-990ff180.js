import{F as m}from"./index-97b4652c.js";import"./vuetify-52f40ce5.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-9bc570b0.js";function g(c={}){const{immediate:d=!1,onNeedRefresh:w,onOfflineReady:i,onRegistered:r,onRegisteredSW:a,onRegisterError:s}=c;let t,o;const l=async(n=!0)=>{await o};async function p(){if("serviceWorker"in navigator){const{Workbox:n}=await m(()=>import("./workbox-window.prod.es5-ed7f7eb3.js"),[]);t=new n("/sw.js",{scope:"/",type:"classic"}),t.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed",e=>{e.isUpdate||i==null||i()}),t.register({immediate:d}).then(e=>{a?a("/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return o=p(),l}export{g as registerSW};
