(this.webpackJsonpDoIt=this.webpackJsonpDoIt||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),c=n(7),r=n.n(c),l=(n(12),n(2)),a=n(16),i=n(5),d=n(0);var u=function(e){for(var t,n=e.todo,s=e.todos,c=e.setTodos,r=Object(o.useState)(n.done),a=Object(l.a)(r,2),i=a[0],u=a[1],b=Object(o.useState)(!1),j=Object(l.a)(b,2),f=j[0],x=j[1],h=Object(o.useState)(!1),m=Object(l.a)(h,2),p=m[0],g=m[1],O=Object(o.useState)(n.title),v=Object(l.a)(O,2),w=v[0],k=v[1],N=Object(o.useState)(n.tag),y=Object(l.a)(N,2),C=y[0],S=y[1],L={Work:"#ffbe0b",Life:"#fb5607",Personal:"#ff006e",Travel:"#8338ec",School:"#3a86ff"},T=Object(o.useRef)(null),D=0;D<s.length;D++){n===s[D]&&(t=D)}var M=s,A=n;function I(e){e.preventDefault(),w&&(M.splice(t,1),A.title=w,A.done=!1,M.splice(t,0,A),x(!1))}return Object(o.useEffect)((function(){i?(A.done=!0,M.splice(t,1),M.splice(t,0,A),c(M)):(A.done=!1,M.splice(t,1),M.splice(t,0,A),c(M)),console.log("effect"),console.log(A.done),console.log(M[t].done),console.log(s[t].done)}),[i]),Object(o.useEffect)((function(){f&&T.current.focus()}),[f]),f?Object(d.jsx)("button",{className:" gap-24 rounded-md bg-gray-100 focus:bg-gray-300 p-4 w-full ",onClick:function(){return u(!i)},children:Object(d.jsxs)("form",{onSubmit:function(e){return I(e)},className:"flex items-center gap-4 w-full",children:[Object(d.jsx)("input",{type:"text",name:"edit",id:"",value:w,className:"h-full px-2  text-semibold rounded border border-gray-300 outline-none flex-1 focus:ring-2 focus:ring-blue-400 ",onChange:function(e){return k(e.target.value)},ref:T}),Object(d.jsx)("button",{className:"bg-blue-500 text-semibold text-white px-4 rounded-md flex items-center justify-center",onClick:function(e){return I(e)},type:"submit",children:"Done"})]})}):Object(d.jsxs)("button",{className:"flex rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-400 p-4 items-center  w-full",onClick:function(){return u(!i)},children:[Object(d.jsxs)("div",{className:"flex gap-6 flex-1",children:[Object(d.jsx)("input",{type:"checkbox",name:"",id:"",className:"w-5 h-5",checked:i,onClick:function(){return u(!i)}}),Object(d.jsx)("p",{className:i?"font-semibold line-through":"font-semibold",children:n.title})]}),Object(d.jsxs)("div",{className:"flex space-x-2",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-600 hover:bg-gray-400 rounded",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:function(){return x(!0)},children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),Object(d.jsxs)("div",{className:"relative group",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 ",fill:"none"===C?"none":L[C],viewBox:"0 0 24 24",stroke:"none"===C?"blue":L[C],onClick:function(){return g(!p)},children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})}),p&&Object(d.jsxs)("div",{className:"absolute top-6 right-0 md: text-center w-24  pt-6 pb-2 rounded bg-black z-10 transition text-white flex flex-col gap-4",children:[Object(d.jsx)("h1",{className:"absolute top-0 right-0 text-center hover:border-gray-500",onClick:function(){return g(!p)},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object.keys(L).map((function(e){return Object(d.jsx)("p",{className:"hover:bg-gray-500 w-full text-center",onClick:function(){return function(e){S(e),A.tag=e,M.splice(t,1),M.splice(t,0,A),c(M)}(e)},children:e})}))]}),Object(d.jsx)("div",{className:"absolute -top-10 right-0 opacity-0   text-center w-24 group-hover:opacity-100 pointer-events-none px-4 py-2 rounded bg-gray-700 transition text-white",children:C})]})]})]})};var b=function(e){var t=e.todos,n=e.setTodos,s=Object(o.useState)(""),c=Object(l.a)(s,2),r=c[0],a=c[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),r&&n([].concat(Object(i.a)(t),[{title:r,done:!1,tag:"none"}])),a("")}(e)},className:"flex gap-8 h-12 mb-4 max-w-full",children:[Object(d.jsx)("input",{type:"text",className:"rounded border border-gray-300 flex-1 p-3",name:"",id:"",value:r,placeholder:"add details",onChange:function(e){return a(e.currentTarget.value)}}),Object(d.jsx)("div",{className:"bg-blue-500 rounded px-10 py-3 text-white font-semibold",onClick:function(){},children:"Add"})]}),Object(d.jsx)("div",{className:"flex flex-col gap-4",children:t.map((function(e){return Object(d.jsx)(u,{todo:e,todos:t,setTodos:n})}))})]})};var j=function(e){var t=e.todos,n=e.setTodos,s=Object(o.useState)(""),c=Object(l.a)(s,2),r=c[0],a=c[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n([].concat(Object(i.a)(t),[{title:r,done:!1,tag:"none"}])),a("")}(e)},className:"flex gap-8 h-12 mb-4",children:[Object(d.jsx)("input",{type:"text",className:"rounded border border-gray-300 flex-1 p-3",name:"",id:"",value:r,placeholder:"add details",onChange:function(e){return a(e.currentTarget.value)}}),Object(d.jsx)("div",{className:"bg-blue-500 rounded px-10 py-3 text-white font-semibold",onClick:function(){},children:"Add"})]}),Object(d.jsx)("div",{className:"flex flex-col gap-4",children:t.filter((function(e){return!1===e.done})).map((function(e){return Object(d.jsx)(u,{todo:e,setTodos:n,todos:t})}))})]})};var f=function(e){var t=e.todo,n=e.todos,o=e.setTodos;return Object(d.jsxs)("button",{className:"flex rounded-md hover:bg-gray-100 focus:bg-gray-300 p-4 items-center gap-6 w-full",children:[Object(d.jsx)("input",{type:"checkbox",name:"",id:"",className:"w-5 h-5",defaultChecked:!0}),Object(d.jsxs)("div",{className:"flex justify-between w-full",children:[Object(d.jsx)("p",{className:"font-semibold line-through text-gray-600",children:t.title}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:function(){o(n.filter((function(e){return e!==t})))},children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})]})]})};var x=function(e){var t=e.todos,n=e.setTodos;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"flex flex-col gap-4 mb-5",children:t.filter((function(e){return!0===e.done})).map((function(e){return Object(d.jsx)(f,{todo:e,todos:t,setTodos:n})}))}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"ml-auto flex px-4 py-4 rounded-md gap-1 text-white font-semibold bg-red-500 w-36",onClick:function(){n(t.filter((function(e){return!1===e.done})))},children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"Delete All"]})})]})},h=["All","Active","Completed"];var m=function(){var e=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[];console.log(e);var t=Object(o.useState)(e),n=Object(l.a)(t,2),s=n[0],c=n[1];function r(e){c(e),localStorage.setItem("todos",JSON.stringify(e))}return console.log(s),Object(d.jsxs)("div",{className:"flex flex-col h-40 container max-w-lg mx-auto px-2 pt-3 ",children:[Object(d.jsx)("h1",{className:"font-bold text-2xl font-serif mx-auto",children:"Do-It"}),Object(d.jsxs)(a.a.Group,{children:[Object(d.jsx)(a.a.List,{className:"px-20 flex justify-between mb-5",children:h.map((function(e){return Object(d.jsx)(a.a,{className:function(e){return e.selected?"border-b-2 border-blue-500 transition font-semibold":"bg-white text-black border-none font-semibold"},children:e})}))}),Object(d.jsxs)(a.a.Panels,{children:[Object(d.jsx)(a.a.Panel,{children:Object(d.jsx)(b,{todos:s,setTodos:r})}),Object(d.jsx)(a.a.Panel,{children:Object(d.jsx)(j,{todos:s,setTodos:r})}),Object(d.jsx)(a.a.Panel,{children:Object(d.jsx)(x,{todos:s,setTodos:r})})]})]})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f67ccb29.chunk.js.map