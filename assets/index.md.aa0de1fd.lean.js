import{e as _,o as k,c as u,_ as T,f as p}from"./app.c3f2ed9e.js";const m=p("",6),S=[m],w=JSON.parse('{"title":"Наш розклад","description":"","frontmatter":{"title":"Наш розклад","layout":"doc","aside":false},"headers":[],"relativePath":"index.md"}'),P={name:"index.md"},A=Object.assign(P,{setup(W){_(()=>{console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");try{y(),setInterval(()=>{y()},1e4)}catch{}});function e(n,c,o,s,v,l){return new Date(new Date(n,c,o,s,v,l).toLocaleString("en",{timeZone:"Europe/Kyiv"}))}const t=new Date(new Date().toLocaleString("en",{timeZone:"Europe/Kyiv"})),d=t.getFullYear(),a=t.getMonth(),b=t.getDate(),r=t.getDay(),x=t.getTime();function y(){const n=document.getElementById("firstWeek"),c=document.getElementById("secondWeek"),o=h()===1?n:c,s=f(),v=o.getElementsByTagName("table")[0];v.style.border="2px solid #059669";const l=v.getElementsByTagName("td");if(s===-1){let g=[21,22,23,24];for(let i=0;i<g.length;i++)l[g[i]].style.border="1px solid var(--vp-c-divider)"}else s&&(l[s-6].style.border="1px solid var(--vp-c-divider)",l[s].style.border="2px solid #059669")}function h(){return e(d,a,r,0,0,0).getTime(),Math.round(x/(1e3*60*60*24*7))%2?1:2}function f(){const n=[[],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[],[]];return t>=e(d,a,b,8,30,0)&&t<=e(d,a,b,10,5,0)?n[r][0]:t>=e(d,a,b,10,5,0)&&t<=e(d,a,b,12,0,0)?n[r][1]:t>=e(d,a,b,12,0,0)&&t<=e(d,a,b,13,55,0)?n[r][2]:t>=e(d,a,b,13,55,0)&&t<=e(d,a,b,15,50,0)?n[r][3]:t>=e(d,a,b,15,50,0)&&t<=e(d,a,b,18,10,0)?n[r][4]:t>e(d,a,b,18,10,0)&&t<e(d,a,b,8,30,0)?-1:0}return(n,c)=>(k(),u("div",null,S))}}),D=T(A,[["__scopeId","data-v-bd144b9b"]]);export{w as __pageData,D as default};