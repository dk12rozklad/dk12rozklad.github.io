import{b as h,o as y,c as o,a as x}from"./app.e5fbbf53.js";const f=x("",6),k=[f],_=JSON.parse('{"title":"Наш розклад","description":"","frontmatter":{"title":"Наш розклад","layout":"doc","aside":false},"headers":[],"relativePath":"index.md"}'),p={name:"index.md"},b=Object.assign(p,{setup(u){h(()=>{console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");try{d(),setInterval(()=>{d()},1e4)}catch{}});function d(){let e=document.getElementById("firstWeek"),t=document.getElementById("secondWeek"),r=c()===1?e:t,a=i()?i():0,l=r.getElementsByTagName("table")[0];l.style.border="2px solid #059669";let n=l.getElementsByTagName("td");if(a===-1){let g=[19,20,21,22,23];for(let s=0;s<g.length;s++)n[g[s]].style.border="1px solid var(--vp-c-divider)"}else a&&(n[a-6].style.border="1px solid var(--vp-c-divider)",n[a].style.border="2px solid #059669")}function c(){var e=new Date().getFullYear(),t=new Date().getMonth(),r=new Date(e,t,0).getTime(),a=new Date().getTime(),l=Math.round((a-r)/(1e3*60*60*24*7));return l%2?1:2}function i(){let e=[[],[1,7,13,19],[2,8,14,20],[3,9,15,21],[4,10,16,22],[5,11,17,23],[]],t=new Date;return t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),8,30,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),10,5,0)?e[t.getDay()][0]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),10,5,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)?e[t.getDay()][1]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),13,55,0)?e[t.getDay()][2]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),13,55,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),15,50,0)?e[t.getDay()][3]:t>new Date(t.getFullYear(),t.getMonth(),t.getDate(),15,50,0)&&t<new Date(t.getFullYear(),t.getMonth(),t.getDate(),8,30,0)?-1:0}return(e,t)=>(y(),o("div",null,k))}});export{_ as __pageData,b as default};
