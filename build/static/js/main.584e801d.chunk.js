(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{10:function(e,t,n){e.exports={select:"selezione_select__lbDBI",selectMossa:"selezione_selectMossa__3Xz5D"}},11:function(e,t,n){e.exports={boxPokemon:"App_boxPokemon__3zHZL",header:"App_header__3gYlJ"}},23:function(e,t,n){e.exports=n(49)},28:function(e,t,n){},47:function(e,t,n){e.exports=n.p+"static/media/pngegg.edd72be4.png"},48:function(e,t,n){e.exports=n.p+"static/media/Poke_Ball.ee784ca0.webp"},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),u=(n(28),n(7)),i=n(3),l=n.n(i),s=n(4),m=n(1),p=n(5),f=n.n(p);function v(e,t){return e=e.map((function(e,n){var a=e.name.split("-");return{name:(a=a.map((function(e){return e.charAt(0).toUpperCase()+e.substr(1,e.length)}))).join(" "),url:"https://pokeapi.co/api/v2/".concat(t,"/").concat(n+1,"/")}}))}var h=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:"https://pokeapi.co/api/v2/pokemon?limit=807"}).then((function(e){return e.data})).then((function(e){return v(e.results,"pokemon")}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:"https://pokeapi.co/api/v2/nature?limit=25"}).then((function(e){return e.data})).then((function(e){return v(e.results,"nature")}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({url:"https://pokeapi.co/api/v2/item-attribute/5/",method:"GET"}).then((function(e){return e.data})).then((function(e){var t=v(e.items,"items");return t.unshift({name:"Strumenti",url:""}),t}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=e.nomi,n=e.aggiungi,o=Object(a.useState)(t[0].url),c=Object(m.a)(o,2),u=c[0],i=c[1];return r.a.createElement("div",null,r.a.createElement("select",{value:u,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&n(u)}},t.map((function(e,t){return r.a.createElement("option",{key:t,value:e.url},e.name)}))),r.a.createElement("button",{style:{marginLeft:"15px"},onClick:function(){return n(u)}},"Aggiungi"))},E=n(6),j=n.n(E),k=n(12);function O(){return(O=Object(s.a)(l.a.mark((function e(t,n,a,r,o,c,u,i,s){var m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:t,timeout:2e3}).then((function(e){return e.data})).then((function(e){m=e.name;var t=e.moves.map((function(e){return Object(k.a)({},e.move)}));t.unshift({name:"Mossa",url:""}),t.push({name:" ",url:""}),t=v(t,"move");var c=e.abilities.map((function(e){return Object(k.a)({},e.ability)}));return c=v(c,"ability"),n(c[0].name),a((function(){return c})),r((function(){return t})),o((function(){return e.sprites.other["official-artwork"].front_default})),e})).then((function(e){var t=e.species;f()({url:t.url,method:"GET"}).then((function(e){return e.data})).then((function(e){var t=e.evolution_chain;f.a.get(t.url).then((function(e){return e.data})).then((function(e){var t=e.chain.species.name,n=1;if(m!==t){var a=e.chain.evolves_to[0];if(a.species.name===m)n=a.evolution_details[0].min_level;else{var r=a.evolves_to[0];n=r.evolution_details[0].min_level}}c((function(){return n})),u((function(){return n}))}))}))})).catch((function(e){console.log(e.name),i(s)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=n(10),x=n.n(_),y=function(e){var t=e.lista,n=e.value,a=e.setValue,o=e.nome;return r.a.createElement("div",{style:{display:"inline"}},r.a.createElement("label",null,o),r.a.createElement("select",{className:x.a.select,value:n,onChange:function(e){return a(e.target.value)}},t.map((function(e,t){return r.a.createElement("option",{key:"Seleziona".concat(o,":").concat(t)},e.name)}))))},w=function(e){var t=e.lista,n=e.value,a=e.index,o=e.setValue;return r.a.createElement("select",{className:x.a.selectMossa,value:n,onChange:function(e){var t=e.target.value;o((function(e){var n=Object(u.a)(e);return n[a]=t,n}))}},t.map((function(e,t){return r.a.createElement("option",{key:"SelezionaMossa".concat(a,":").concat(t)},e.name)})))},S=function(e){var t=e.indice,o=e.url,c=e.items,u=e.naturaList,i=e.rimuovi,l=Object(a.useState)([]),s=Object(m.a)(l,2),p=s[0],f=s[1],v=Object(a.useState)([]),h=Object(m.a)(v,2),d=h[0],b=h[1],g=Object(a.useState)(""),E=Object(m.a)(g,2),k=E[0],_=E[1],x=Object(a.useState)("strumenti"),S=Object(m.a)(x,2),C=S[0],N=S[1],z=Object(a.useState)(""),A=Object(m.a)(z,2),M=A[0],B=A[1],G=Object(a.useState)([]),I=Object(m.a)(G,2),L=I[0],V=I[1],P=Object(a.useState)(u[0].name),T=Object(m.a)(P,2),q=T[0],D=T[1],R=Object(a.useState)(1),J=Object(m.a)(R,2),K=J[0],W=J[1],H=Object(a.useState)(),Q=Object(m.a)(H,2),U=Q[0],X=Q[1];if(Object(a.useEffect)((function(){c.push({name:" ",url:""})}),[c]),Object(a.useEffect)((function(){!function(e,t,n,a,r,o,c,u,i){O.apply(this,arguments)}(o,B,f,b,_,X,W,i,t)}),[o,t,i]),p.length<1||d.length<1||!k||!U)return r.a.createElement("div",{style:{display:"grid",placeItems:"center"}},r.a.createElement("img",{className:j.a.loading,style:{height:"40vh"},src:n(47)}));for(var Y=[],Z=0;Z<4;Z++)Y.push(r.a.createElement(w,{key:"SelezionaMossa:".concat(Z),lista:d,index:Z,value:L[Z],setValue:V}));return r.a.createElement("div",{className:j.a.container},r.a.createElement("div",{className:j.a.pokemonContainer},r.a.createElement("img",{className:j.a.img,src:k})),r.a.createElement("div",{className:j.a.inserimentoDati},r.a.createElement("div",{className:j.a.quattroItem},r.a.createElement(y,{lista:c,value:C,setValue:N,nome:"Strumento"}),r.a.createElement(y,{lista:p,value:M,setValue:B,nome:"Abilita"}),r.a.createElement(y,{lista:u,value:q,setValue:D,nome:"Natura"}),r.a.createElement("input",{style:{width:"80%",textAlign:"center",fontSize:"18px"},type:"number",min:U,max:"99",value:K,onChange:function(e){return W(parseInt(e.target.value))}})),r.a.createElement("div",null,Y),r.a.createElement("button",{id:j.a.buttonRimuovi,onClick:function(){return i(t)}},"Rimuovi")))},C=n(11),N=n.n(C);var z=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),o=t[0],c=t[1],i=Object(a.useState)(),p=Object(m.a)(i,2),f=p[0],v=p[1],E=Object(a.useState)([]),j=Object(m.a)(E,2),k=j[0],O=j[1],_=Object(a.useState)(["https://pokeapi.co/api/v2/pokemon/3/"]),x=Object(m.a)(_,2),y=x[0],w=x[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,c(t),e.next=6,d();case 6:return n=e.sent,v(n),e.next=10,b();case 10:a=e.sent,O(a);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(e){w((function(t){var n=Object(u.a)(t);return n=[].concat(Object(u.a)(n.slice(0,e)),Object(u.a)(n.slice(e+1,n.length)))}))};return r.a.createElement("div",null,r.a.createElement("div",{className:N.a.header},r.a.createElement("div",null,r.a.createElement("img",{style:{width:"50px",height:" 50px",marginLeft:"20px"},src:n(48)})),r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"white"}},"Pokemon Team Builder")),r.a.createElement("div",{style:{textAlign:"center"}},o&&f&&k.length>0&&y.length<6?r.a.createElement(g,{nomi:o,aggiungi:function(e){w((function(t){return[].concat(Object(u.a)(t),[e])}))}}):y.length<6?r.a.createElement("div",null,"Loading"):r.a.createElement("div",null,"La tua squadra e' piena"))),o&&f&&k.length>0?r.a.createElement("div",{className:N.a.boxPokemon},y.map((function(e,t){return r.a.createElement(S,{key:"NuovoPokemon:".concat(t),indice:t,url:e,items:k,naturaList:f,rimuovi:C})}))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={container:"nuovopokemon_container__eQDG8",pokemonContainer:"nuovopokemon_pokemonContainer__1CGVd",img:"nuovopokemon_img__3EK0z",buttonRimuovi:"nuovopokemon_buttonRimuovi__2tglf",quattroItem:"nuovopokemon_quattroItem__1q72a",loading:"nuovopokemon_loading__flKzz",loadingBall:"nuovopokemon_loadingBall__3AtM-"}}},[[23,1,2]]]);
//# sourceMappingURL=main.584e801d.chunk.js.map