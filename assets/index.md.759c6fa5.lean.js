import{e as u,o as _,c as m,_ as p,f as b}from"./app.c3f2ed9e.js";const T=b("",11),P=[T],E=JSON.parse(`{"title":"Наш розклад","description":"","frontmatter":{"title":"Наш розклад","layout":"doc","aside":false},"headers":[{"level":3,"title":"Таблиця з прогресом Лаб та КР","slug":"таблиця-з-прогресом-лаб-та-кр","link":"#таблиця-з-прогресом-лаб-та-кр","children":[]},{"level":3,"title":"Google Drive з Лабами","slug":"google-drive-з-лабами","link":"#google-drive-з-лабами","children":[]},{"level":3,"title":"Курсач на цей семестр Обов'язково","slug":"курсач-на-цеи-семестр-обов-язково","link":"#курсач-на-цеи-семестр-обов-язково","children":[]},{"level":3,"title":"Classroom","slug":"classroom","link":"#classroom","children":[]},{"level":3,"title":"Zoom","slug":"zoom","link":"#zoom","children":[]},{"level":2,"title":"Перший тиждень","slug":"firstWeekH2","link":"#firstWeekH2","children":[]},{"level":2,"title":"Другий тиждень","slug":"secondWeekH2","link":"#secondWeekH2","children":[]}],"relativePath":"index.md"}`),S={name:"index.md"},W=Object.assign(S,{setup(w){u(()=>{console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");try{h(),setInterval(()=>{h()},1e4)}catch{}});function t(r,f,o,n,i,s){return new Date(new Date(r,f,o,n,i,s).toLocaleString("en",{timeZone:"Europe/Kyiv"}))}const e=new Date(new Date().toLocaleString("en",{timeZone:"Europe/Kyiv"})),a=e.getFullYear(),d=e.getMonth(),c=e.getDate(),l=e.getDay(),x=e.getTime();function h(){const r=document.getElementById("firstWeek"),f=document.getElementById("secondWeek"),o=y()===1?r:f,n=k(),i=o.getElementsByTagName("table")[0];i.style.border="2px solid #059669";const s=i.getElementsByTagName("td");if(n===-1){let g=[21,22,23,24];for(let v=0;v<g.length;v++)s[g[v]].style.border="1px solid var(--vp-c-divider)"}else n&&(s[n>5?n-5:n].style.border="1px solid var(--vp-c-divider)",s[n].style.border="2px solid #059669")}function y(){return t(a,d,c,0,0,0).getTime(),Math.round(x/(1e3*60*60*24*7))%2?1:2}function k(){const r=[[],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[],[]];return e>=t(a,d,c,8,30,0)&&e<=t(a,d,c,10,5,0)?r[l][0]:e>=t(a,d,c,10,5,0)&&e<=t(a,d,c,12,0,0)?r[l][1]:e>=t(a,d,c,12,0,0)&&e<=t(a,d,c,13,55,0)?r[l][2]:e>=t(a,d,c,13,55,0)&&e<=t(a,d,c,15,50,0)?r[l][3]:e>=t(a,d,c,15,50,0)&&e<=t(a,d,c,17,45,0)?r[l][4]:e>t(a,d,c,17,45,0)&&e<t(a,d,c,8,30,0)?-1:0}return(r,f)=>(_(),m("div",null,P))}}),A=p(W,[["__scopeId","data-v-6e2f6ec7"]]);export{E as __pageData,A as default};