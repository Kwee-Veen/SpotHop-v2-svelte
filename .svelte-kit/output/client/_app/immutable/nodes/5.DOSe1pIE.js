import{_ as oe}from"../chunks/preload-helper.D6kgxu3v.js";import{s as se,o as ne,r as ce,f as ue,a as de,n as me,b as Q}from"../chunks/scheduler.Dda-Ubu_.js";import{S as le,i as re,e as f,p as S,c as h,a as _,q as R,f as d,h as i,k as D,r as N,u as q,v as B,w as j,s as L,b as F,g as A,l as p,j as Y,o as $,C as fe,x as he}from"../chunks/index.BUOivlNn.js";import{e as ee}from"../chunks/each.D6YF6ztN.js";import{e as pe}from"../chunks/forms.B_ddXdL2.js";import{s as ge}from"../chunks/stores.DUKXx1u7.js";import{C as _e}from"../chunks/Chart.De-Ru-V4.js";import{L as ve}from"../chunks/LeafletMap.DbM4DCBW.js";function be(o){let n,s,a;return s=new _e({props:{options:o[0]}}),{c(){n=f("div"),S(s.$$.fragment),this.h()},l(t){n=h(t,"DIV",{class:!0});var r=_(n);R(s.$$.fragment,r),r.forEach(d),this.h()},h(){i(n,"class","app svelte-qhw3u1")},m(t,r){D(t,n,r),N(s,n,null),a=!0},p(t,[r]){const e={};r&1&&(e.options=t[0]),s.$set(e)},i(t){a||(q(s.$$.fragment,t),a=!0)},o(t){B(s.$$.fragment,t),a=!1},d(t){t&&d(n),j(s)}}}function we(o,n,s){let{data:a}=n,t,r,e={};ne(async()=>{t=a.weatherTrends.tempTrend,r=a.weatherTrends.trendLabels,c()});function c(){let g={title:{text:`${a.spot.name}: Five-day Temperature Forecast`},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#a1360b"}}},toolbox:{feature:{dataZoom:{},saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:r}],yAxis:[{type:"value"}],series:[{name:"°C",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:t,color:["#f7d50f","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"]}]};s(0,e=g)}return o.$$set=g=>{"data"in g&&s(1,a=g.data)},[e,a]}class Ie extends le{constructor(n){super(),re(this,n,we,be,se,{data:1})}}function te(o,n,s){const a=o.slice();return a[10]=n[s],a}function Ve(o){let n,s=ee(o[4].img),a=[];for(let t=0;t<s.length;t+=1)a[t]=ae(te(o,s,t));return{c(){n=f("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){n=h(t,"DIV",{class:!0});var r=_(n);for(let e=0;e<a.length;e+=1)a[e].l(r);r.forEach(d),this.h()},h(){i(n,"class","columns is-multiline is-mobile")},m(t,r){D(t,n,r);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(n,null)},p(t,r){if(r&16){s=ee(t[4].img);let e;for(e=0;e<s.length;e+=1){const c=te(t,s,e);a[e]?a[e].p(c,r):(a[e]=ae(c),a[e].c(),a[e].m(n,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=s.length}},d(t){t&&d(n),he(a,t)}}}function ae(o){let n,s,a,t,r,e,c,g="Delete",v,m,I,b,l,w='<button class="button"><span class="icon is-small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FF0000" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg></span></button>',y,O,P;return{c(){n=f("div"),s=f("div"),a=f("img"),r=L(),e=f("div"),c=f("b"),c.textContent=g,v=L(),m=f("form"),I=f("input"),b=L(),l=f("div"),l.innerHTML=w,y=L(),this.h()},l(x){n=h(x,"DIV",{class:!0});var E=_(n);s=h(E,"DIV",{class:!0});var T=_(s);a=h(T,"IMG",{src:!0,class:!0,alt:!0}),r=F(T),e=h(T,"DIV",{class:!0});var k=_(e);c=h(k,"B",{"data-svelte-h":!0}),A(c)!=="svelte-1j30tal"&&(c.textContent=g),v=F(k),m=h(k,"FORM",{method:!0,action:!0});var M=_(m);I=h(M,"INPUT",{type:!0,name:!0}),b=F(M),l=h(M,"DIV",{class:!0,"data-svelte-h":!0}),A(l)!=="svelte-u22lu3"&&(l.innerHTML=w),M.forEach(d),k.forEach(d),T.forEach(d),y=F(E),E.forEach(d),this.h()},h(){ue(a.src,t=o[10])||i(a,"src",t),i(a,"class","image"),i(a,"alt","uploaded spot"),i(I,"type","hidden"),i(I,"name","deleteImageId"),I.value=o[10],i(l,"class","text has-text-centered"),i(m,"method","POST"),i(m,"action","?/deleteImage"),i(e,"class","column is-narrow has-text-centered"),i(s,"class","box p-2"),i(n,"class","column is-6")},m(x,E){D(x,n,E),p(n,s),p(s,a),p(s,r),p(s,e),p(e,c),p(e,v),p(e,m),p(m,I),p(m,b),p(m,l),p(n,y),O||(P=de(pe.call(null,m)),O=!0)},p:me,d(x){x&&d(n),O=!1,P()}}}function ye(o){let n,s,a,t,r,e,c,g,v,m,I,b,l,w,y,O="Upload New Image",P,x,E,T,k,M;t=new Ie({props:{data:o[1]}});let ie={height:44,zoom:7,activeLayer:"Transportation",data:o[1]};c=new ve({props:ie}),o[7](c);let C=o[4].img&&Ve(o);return{c(){n=f("div"),s=f("div"),a=f("div"),S(t.$$.fragment),r=L(),e=f("div"),S(c.$$.fragment),g=L(),v=f("form"),m=f("input"),I=L(),b=f("section"),l=f("div"),w=f("box"),y=f("button"),y.textContent=O,P=L(),x=f("div"),E=f("div"),C&&C.c(),this.h()},l(u){n=h(u,"DIV",{class:!0});var V=_(n);s=h(V,"DIV",{class:!0});var H=_(s);a=h(H,"DIV",{class:!0});var U=_(a);R(t.$$.fragment,U),U.forEach(d),r=F(H),e=h(H,"DIV",{class:!0});var W=_(e);R(c.$$.fragment,W),W.forEach(d),H.forEach(d),V.forEach(d),g=F(u),v=h(u,"FORM",{method:!0,action:!0});var G=_(v);m=h(G,"INPUT",{type:!0,placeholder:!0,name:!0}),G.forEach(d),I=F(u),b=h(u,"SECTION",{class:!0});var z=_(b);l=h(z,"DIV",{class:!0});var X=_(l);w=h(X,"BOX",{class:!0});var Z=_(w);y=h(Z,"BUTTON",{class:!0,"data-svelte-h":!0}),A(y)!=="svelte-rn1jhp"&&(y.textContent=O),Z.forEach(d),X.forEach(d),P=F(z),x=h(z,"DIV",{class:!0});var J=_(x);E=h(J,"DIV",{class:!0});var K=_(E);C&&C.l(K),K.forEach(d),J.forEach(d),z.forEach(d),this.h()},h(){i(a,"class","column is-half"),i(e,"class","column is-half"),i(s,"class","columns has-background-white is-vcentered"),i(n,"class","box has-background-warning"),i(m,"type","hidden"),i(m,"placeholder","Image URL"),i(m,"name","returnedURL"),i(v,"method","POST"),i(v,"action","?/uploadImage"),i(y,"class","button is-danger is-medium has-text-weight-bold"),i(w,"class","box"),i(l,"class","columns is-centered mt-2 mb-4"),i(E,"class","column is-10"),i(x,"class","columns is-centered"),i(b,"class","content box has-background-link-light")},m(u,V){D(u,n,V),p(n,s),p(s,a),N(t,a,null),p(s,r),p(s,e),N(c,e,null),D(u,g,V),D(u,v,V),p(v,m),Y(m,o[2]),o[9](v),D(u,I,V),D(u,b,V),p(b,l),p(l,w),p(w,y),p(b,P),p(b,x),p(x,E),C&&C.m(E,null),T=!0,k||(M=[$(m,"input",o[8]),$(y,"click",fe(o[5]))],k=!0)},p(u,[V]){const H={};V&2&&(H.data=u[1]),t.$set(H);const U={};V&2&&(U.data=u[1]),c.$set(U),V&4&&Y(m,u[2]),u[4].img&&C.p(u,V)},i(u){T||(q(t.$$.fragment,u),q(c.$$.fragment,u),T=!0)},o(u){B(t.$$.fragment,u),B(c.$$.fragment,u),T=!1},d(u){u&&(d(n),d(g),d(v),d(I),d(b)),j(t),o[7](null),j(c),o[9](null),C&&C.d(),k=!1,ce(M)}}}function xe(o,n,s){ge.set("Weather & Images");let{widget:a}=n,{imageFiles:t}=n,{data:r}=n,e=r.spot,c,g;ne(async()=>{if(await oe(()=>import("../chunks/leaflet-src.BCgUuAGh.js").then(l=>l.l),[],import.meta.url),e){const l=`Spot "${e.name}" (${e.latitude} ${e.longitude}), category: ${e.category}`;g.addMarker(e.latitude,e.longitude,l),g.moveTo(e.latitude,e.longitude)}"cloudinary"in window&&s(6,a=window.cloudinary.createUploadWidget({cloudName:"dx2zbn7jb",uploadPreset:"cvcdhrcq"},(l,w)=>{console.log(w),w.event==="success"&&(s(2,c=w.info.secure_url),s(0,t.elements.returnedURL.value=w.info.secure_url,t),t.submit())}))});function v(){a&&a.open()}function m(l){Q[l?"unshift":"push"](()=>{g=l,s(3,g)})}function I(){c=this.value,s(2,c)}function b(l){Q[l?"unshift":"push"](()=>{t=l,s(0,t)})}return o.$$set=l=>{"widget"in l&&s(6,a=l.widget),"imageFiles"in l&&s(0,t=l.imageFiles),"data"in l&&s(1,r=l.data)},[t,r,c,g,e,v,a,m,I,b]}class He extends le{constructor(n){super(),re(this,n,xe,ye,se,{widget:6,imageFiles:0,data:1})}}export{He as component};