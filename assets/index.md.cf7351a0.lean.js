import{e as u,o as _,c as m,_ as p,f as b}from"./app.c3f2ed9e.js";const T=b("",10),W=[T],A=JSON.parse(`{"title":"Наш розклад","description":"","frontmatter":{"title":"Наш розклад","layout":"doc","aside":false},"headers":[{"level":3,"title":"Таблиця з прогресом Лаб та КР","slug":"таблиця-з-прогресом-лаб-та-кр","link":"#таблиця-з-прогресом-лаб-та-кр","children":[]},{"level":3,"title":"Курсач на цей семестр Обов'язково","slug":"курсач-на-цеи-семестр-обов-язково","link":"#курсач-на-цеи-семестр-обов-язково","children":[]},{"level":3,"title":"Classroom","slug":"classroom","link":"#classroom","children":[]},{"level":3,"title":"Zoom","slug":"zoom","link":"#zoom","children":[]},{"level":2,"title":"Перший тиждень","slug":"firstWeekH2","link":"#firstWeekH2","children":[]},{"level":2,"title":"Другий тиждень","slug":"secondWeekH2","link":"#secondWeekH2","children":[]}],"relativePath":"index.md"}`),P={name:"index.md"},S=Object.assign(P,{setup(w){u(()=>{console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");try{g(),setInterval(()=>{g()},1e4)}catch{}});function a(r,i,v,n,o,s){return new Date(new Date(r,i,v,n,o,s).toLocaleString("en",{timeZone:"Europe/Kyiv"}))}const t=new Date(new Date().toLocaleString("en",{timeZone:"Europe/Kyiv"})),e=t.getFullYear(),d=t.getMonth(),c=t.getDate(),l=t.getDay(),x=t.getTime();function g(){const r=document.getElementById("firstWeek"),i=document.getElementById("secondWeek"),v=f()===1?r:i,n=k(),o=v.getElementsByTagName("table")[0];o.style.border="2px solid #059669";const s=o.getElementsByTagName("td");if(n===-1){let y=[21,22,23,24];for(let h=0;h<y.length;h++)s[y[h]].style.border="1px solid var(--vp-c-divider)"}else n&&(s[n>5?n-5:n].style.border="1px solid var(--vp-c-divider)",s[n].style.border="2px solid #059669")}function f(){return a(e,d,c,0,0,0).getTime(),Math.round(x/(1e3*60*60*24*7))%2?1:2}function k(){const r=[[],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[],[]];return t>=a(e,d,c,8,30,0)&&t<=a(e,d,c,10,5,0)?r[l][0]:t>=a(e,d,c,10,5,0)&&t<=a(e,d,c,12,0,0)?r[l][1]:t>=a(e,d,c,12,0,0)&&t<=a(e,d,c,13,55,0)?r[l][2]:t>=a(e,d,c,13,55,0)&&t<=a(e,d,c,15,50,0)?r[l][3]:t>=a(e,d,c,15,50,0)&&t<=a(e,d,c,17,45,0)?r[l][4]:t>a(e,d,c,17,45,0)&&t<a(e,d,c,8,30,0)?-1:0}return(r,i)=>(_(),m("div",null,W))}}),D=p(S,[["__scopeId","data-v-a3240c96"]]);export{A as __pageData,D as default};
