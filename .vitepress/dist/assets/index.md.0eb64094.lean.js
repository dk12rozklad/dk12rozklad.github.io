import{b as i,o as g,c as h,_ as y,a as x}from"./app.eb240e72.js";const f=x("",6),p=[f],b=JSON.parse('{"title":"Наш розклад","description":"","frontmatter":{"title":"Наш розклад","layout":"doc","aside":false},"headers":[],"relativePath":"index.md"}'),k={name:"index.md"},u=Object.assign(k,{setup(_){i(()=>{console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");try{n(),setInterval(()=>{n()},1e4)}catch{}});function n(){let a=document.getElementById("firstWeek"),t=document.getElementById("secondWeek"),c=o()===1?a:t,e=s()?s():0,d=c.getElementsByTagName("table")[0];d.style.border="2px solid #059669";let l=d.getElementsByTagName("td");if(e===-1){let v=[19,20,21,22,23];for(let r=0;r<v.length;r++)l[v[r]].style.border="1px solid var(--vp-c-divider)"}else e&&(l[e-6].style.border="1px solid var(--vp-c-divider)",l[e].style.border="2px solid #059669")}function o(){var a=new Date().getFullYear(),t=new Date().getMonth(),c=new Date(a,t,0).getTime(),e=new Date().getTime(),d=Math.round((e-c)/(1e3*60*60*24*7));return d%2?1:2}function s(){let a=[[],[1,7,13,19],[2,8,14,20],[3,9,15,21],[4,10,16,22],[5,11,17,23],[]],t=new Date;return t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),8,30,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),10,5,0)?a[t.getDay()][0]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),10,5,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)?a[t.getDay()][1]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),13,55,0)?a[t.getDay()][2]:t>=new Date(t.getFullYear(),t.getMonth(),t.getDate(),13,55,0)&&t<=new Date(t.getFullYear(),t.getMonth(),t.getDate(),15,50,0)?a[t.getDay()][3]:t>new Date(t.getFullYear(),t.getMonth(),t.getDate(),15,50,0)&&t<new Date(t.getFullYear(),t.getMonth(),t.getDate(),8,30,0)?-1:0}return(a,t)=>(g(),h("div",null,p))}}),m=y(u,[["__scopeId","data-v-9c54ad34"]]);export{b as __pageData,m as default};
