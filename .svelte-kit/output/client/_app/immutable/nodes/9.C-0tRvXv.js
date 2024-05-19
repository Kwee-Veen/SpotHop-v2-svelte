import{s as W,o as B}from"../chunks/scheduler.Dda-Ubu_.js";import{S as q,i as R,e as f,p as C,c as h,a as b,q as L,f as c,h as p,k as N,r as k,u as D,v as I,w as E,s as O,g as j,b as H,l as d}from"../chunks/index.BUOivlNn.js";import{s as G}from"../chunks/stores.DUKXx1u7.js";import{C as J,S as K}from"../chunks/SpotList.DbOgukCJ.js";import{C as F}from"../chunks/Chart.De-Ru-V4.js";function Q(l){let e,s,a;return s=new F({props:{options:l[0]}}),{c(){e=f("div"),C(s.$$.fragment),this.h()},l(t){e=h(t,"DIV",{class:!0});var r=b(e);L(s.$$.fragment,r),r.forEach(c),this.h()},h(){p(e,"class","app svelte-qhw3u1")},m(t,r){N(t,e,r),k(s,e,null),a=!0},p(t,[r]){const o={};r&1&&(o.options=t[0]),s.$set(o)},i(t){a||(D(s.$$.fragment,t),a=!0)},o(t){I(s.$$.fragment,t),a=!1},d(t){t&&c(e),E(s)}}}function X(l,e,s){let{data:a}=e,t=[],r={},o=[{value:0,name:"Site"},{value:0,name:"Locale"},{value:0,name:"Activity"},{value:0,name:"Scenery"},{value:0,name:"Structure"},{value:0,name:"Shopping"},{value:0,name:"Uncategorised"}];B(async()=>{t=a.spots,t.forEach(n=>{n.category=="Site"&&(o[0].value+=1),n.category=="Locale"&&(o[1].value+=1),n.category=="Activity"&&(o[2].value+=1),n.category=="Scenery"&&(o[3].value+=1),n.category=="Structure"&&(o[4].value+=1),n.category=="Shopping"&&(o[5].value+=1),n.category=="Uncategorised"&&(o[6].value+=1)}),y()});function y(){s(0,r={tooltip:{trigger:"item"},legend:{top:"0%",left:"center"},responsive:!0,maintainAspectRatio:!1,series:[{name:"Spot Category",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:7,borderColor:"#fff",borderWidth:5},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:12,fontWeight:"bold"}},labelLine:{show:!1},data:o}]})}return l.$$set=n=>{"data"in n&&s(1,a=n.data)},[r,a]}class Y extends q{constructor(e){super(),R(this,e,X,Q,W,{data:1})}}function Z(l){let e,s,a;return s=new F({props:{options:l[0]}}),{c(){e=f("div"),C(s.$$.fragment),this.h()},l(t){e=h(t,"DIV",{class:!0});var r=b(e);L(s.$$.fragment,r),r.forEach(c),this.h()},h(){p(e,"class","app svelte-1dz9pih")},m(t,r){N(t,e,r),k(s,e,null),a=!0},p(t,[r]){const o={};r&1&&(o.options=t[0]),s.$set(o)},i(t){a||(D(s.$$.fragment,t),a=!0)},o(t){I(s.$$.fragment,t),a=!1},d(t){t&&c(e),E(s)}}}function tt(l,e,s){let{data:a}=e,t=[],r=[],o={};B(async()=>{r=a.userSpots,a.users.forEach(m=>{if(m.firstName&&m.lastName){let v=`${m.firstName} ${m.lastName}`;t.push(v)}}),y()});function y(){s(0,o={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",top:"2%",containLabel:!0},xAxis:[{type:"category",data:t,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",barWidth:"60%",data:r}]})}return l.$$set=n=>{"data"in n&&s(1,a=n.data)},[o,a]}class et extends q{constructor(e){super(),R(this,e,tt,Z,W,{data:1})}}function at(l){let e,s;return e=new K({props:{spots:l[0].spots}}),{c(){C(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,t){k(e,a,t),s=!0},p(a,t){const r={};t&1&&(r.spots=a[0].spots),e.$set(r)},i(a){s||(D(e.$$.fragment,a),s=!0)},o(a){I(e.$$.fragment,a),s=!1},d(a){E(e,a)}}}function st(l){let e,s,a,t,r,o='<div class="column is-narrow"><div class="box has-background-link-dark pb-2"><h4 class="text has-text-centered has-text-white has-text-weight-bold">Spots by Category</h4></div></div>',y,n,m,v,g,x,z='<div class="column is-narrow"><div class="box has-background-link-dark pb-2"><h4 class="text has-text-centered has-text-white has-text-weight-bold">Spots by User</h4></div></div>',U,$,T,_,A;return n=new Y({props:{data:l[0]}}),$=new et({props:{data:l[0]}}),_=new J({props:{$$slots:{default:[at]},$$scope:{ctx:l}}}),{c(){e=f("div"),s=f("div"),a=f("div"),t=f("div"),r=f("div"),r.innerHTML=o,y=O(),C(n.$$.fragment),m=O(),v=f("div"),g=f("div"),x=f("div"),x.innerHTML=z,U=O(),C($.$$.fragment),T=O(),C(_.$$.fragment),this.h()},l(i){e=h(i,"DIV",{class:!0});var u=b(e);s=h(u,"DIV",{class:!0});var S=b(s);a=h(S,"DIV",{class:!0});var V=b(a);t=h(V,"DIV",{class:!0});var w=b(t);r=h(w,"DIV",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-y577k4"&&(r.innerHTML=o),y=H(w),L(n.$$.fragment,w),w.forEach(c),V.forEach(c),m=H(S),v=h(S,"DIV",{class:!0});var P=b(v);g=h(P,"DIV",{class:!0});var M=b(g);x=h(M,"DIV",{class:!0,"data-svelte-h":!0}),j(x)!=="svelte-wx7u7n"&&(x.innerHTML=z),U=H(M),L($.$$.fragment,M),M.forEach(c),P.forEach(c),S.forEach(c),u.forEach(c),T=H(i),L(_.$$.fragment,i),this.h()},h(){p(r,"class","columns is-mobile is-centered"),p(t,"class","card"),p(a,"class","column is-half"),p(x,"class","columns is-mobile is-centered"),p(g,"class","card"),p(v,"class","column is-half"),p(s,"class","columns is-mobile"),p(e,"class","box has-background-link-dark pt-5 pb-5")},m(i,u){N(i,e,u),d(e,s),d(s,a),d(a,t),d(t,r),d(t,y),k(n,t,null),d(s,m),d(s,v),d(v,g),d(g,x),d(g,U),k($,g,null),N(i,T,u),k(_,i,u),A=!0},p(i,[u]){const S={};u&1&&(S.data=i[0]),n.$set(S);const V={};u&1&&(V.data=i[0]),$.$set(V);const w={};u&3&&(w.$$scope={dirty:u,ctx:i}),_.$set(w)},i(i){A||(D(n.$$.fragment,i),D($.$$.fragment,i),D(_.$$.fragment,i),A=!0)},o(i){I(n.$$.fragment,i),I($.$$.fragment,i),I(_.$$.fragment,i),A=!1},d(i){i&&(c(e),c(T)),E(n),E($),E(_,i)}}}function rt(l,e,s){G.set("Spot Report");let{data:a}=e;return l.$$set=t=>{"data"in t&&s(0,a=t.data)},[a]}class ut extends q{constructor(e){super(),R(this,e,rt,st,W,{data:0})}}export{ut as component};
