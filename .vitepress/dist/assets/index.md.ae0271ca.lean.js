import{b as o,o as i,c as g,_ as h,a as y}from"./app.eb240e72.js";const x=y("",6),p=[x],m=JSON.parse('{"title":"Наш розклад","description":"","frontmatter":{"title":"Наш розклад","layout":"doc","aside":false},"headers":[],"relativePath":"index.md"}'),k={name:"index.md"},u=Object.assign(k,{setup(_){o(()=>{let e="2.0.1";console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");try{r(),setInterval(()=>{r();const t=localStorage.getItem("appVersion");(t==null||t!==e)&&(localStorage.setItem("appVersion",e),location.reload())},1e4)}catch{}});function r(){let e=document.getElementById("firstWeek"),t=document.getElementById("secondWeek"),d=v()===1?e:t,a=f()?f():0,s=d.getElementsByTagName("table")[0];s.style.border="2px solid #059669";let l=s.getElementsByTagName("td");if(a===-1){let c=[19,20,21,22,23];for(let n=0;n<c.length;n++)l[c[n]].style.border="1px solid var(--vp-c-divider)"}else a&&(l[a-6].style.border="1px solid var(--vp-c-divider)",l[a].style.border="2px solid #059669")}function v(){var e=new Date().getFullYear(),t=new Date().getMonth();new Date(e,t,0).getTime();var d=new Date().getTime(),a=Math.round(d/(1e3*60*60*24*7));return a%2?1:2}function f(){let e=[[],[1,7,13,19],[2,8,14,20],[3,9,15,21],[4,10,16,22],[5,11,17,23],[]],t=new Date;return t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),8,30,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),10,5,0)?e[t.getDay()][0]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),10,5,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)?e[t.getDay()][1]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),13,55,0)?e[t.getDay()][2]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),13,55,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),15,50,0)?e[t.getDay()][3]:t>new Date(t.getFullYear(),t.getMonth(),t.getDate(),15,50,0)&&t<new Date(t.getFullYear(),t.getMonth(),t.getDate(),8,30,0)?-1:0}return(e,t)=>(i(),g("div",null,p))}}),b=h(u,[["__scopeId","data-v-e3366d0f"]]);export{m as __pageData,b as default};
