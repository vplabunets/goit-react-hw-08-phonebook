"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[842],{6842:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r=t(9434),a=function(n){return n.contacts.items},o=function(n){return n.contacts.error},i=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.filter},l=t(181);var s,u,d,f,p,m,x,h,b,g,y,v,Z,j=t(3634),w=t(168),P=t(7691),k=P.ZP.form(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  align-self: center;\n  align-items: center;\n"]))),A=P.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  margin: 0 auto;\n  align-self: center;\n  align-items: flex-end;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),C=P.ZP.label(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  margin-bottom: 10px;\n"]))),z=P.ZP.input(f||(f=(0,w.Z)(["\n  display: flex;\n"]))),_=P.ZP.button(p||(p=(0,w.Z)(["\n  align-self: center;\n  justify-content: center;\n  width: 150px;\n  transition: background-color 250ms linear;\n  &:hover,\n  &:focus {\n    background-color: #0fece1;\n    border-radius: 2px;\n  }\n"]))),I=t(3329),F=function(){var n=(0,r.v9)(a),e=(0,r.I0)();return(0,I.jsx)(k,{onSubmit:function(t){t.preventDefault();var r,a=t.currentTarget,o=a.elements,i=o.name,c=o.phone,s=function(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=(0,l.Z)(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return i=n.done,n},e:function(n){c=!0,o=n},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}(n);try{for(s.s();!(r=s.n()).done;){var u=r.value;if(u.name===i.value)return alert("".concat(u.name," is already contacts."))}}catch(d){s.e(d)}finally{s.f()}e((0,j.uK)({name:i.value,number:c.value})),a.reset()},children:(0,I.jsxs)(A,{children:[(0,I.jsxs)(C,{children:["Name",(0,I.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,I.jsxs)(C,{children:["Number",(0,I.jsx)(z,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,I.jsx)(_,{type:"submit",children:"Add contact"})]})})},N=t(2791),S=P.ZP.li(m||(m=(0,w.Z)(["\n  display: flex;\n  padding: 5px;\n  justify-content: space-between;\n  &:not(:last-child) {\n  }\n"]))),L=P.ZP.button(x||(x=(0,w.Z)(["\n  align-self: center;\n  justify-content: center;\n  transition: background-color 250ms linear;\n  &:hover,\n  &:focus {\n    background-color: #0fece1;\n    border-radius: 2px;\n  }\n"]))),q=function(n){var e=n.contact,t=e.name,a=e.number,o=e.id,i=(0,r.I0)();return(0,I.jsxs)(S,{children:[(0,I.jsxs)("span",{children:[t,":"]}),(0,I.jsx)("span",{children:a}),(0,I.jsx)(L,{contact:e.id,type:"button",onClick:function(){return i((0,j.GK)(o))},children:"Delete"})]})},B=P.ZP.ul(h||(h=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),D=function(){var n=(0,r.I0)();(0,N.useEffect)((function(){n((0,j.yF)())}),[n]);var e=(0,r.v9)(a),t=(0,r.v9)(c);return(0,I.jsx)(B,{children:function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){return(0,I.jsx)(q,{contact:n},n.id)}))})},E=t(1538),J=P.ZP.label(b||(b=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto 0 auto;\n  text-align: center;\n  align-items: space-between;\n  margin-bottom: 10px;\n"]))),K=P.ZP.input(g||(g=(0,w.Z)(["\n  margin-top: 10px;\n  display: flex;\n"]))),M=function(){var n=(0,r.v9)(c),e=(0,r.I0)();return(0,I.jsxs)(J,{children:["Find contacts by name",(0,I.jsx)(K,{value:n,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(n){console.log(n.target.value),e((0,E.x)(n.target.value.trim()))}})]})},T=P.ZP.div(y||(y=(0,w.Z)(["\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n  background-color: #8bf3dd;\n  width: 400px;\n"]))),$=P.ZP.h1(v||(v=(0,w.Z)(["\n  text-align: center;\n"]))),G=P.ZP.h2(Z||(Z=(0,w.Z)(["\n  text-align: center;\n"])));function Y(){var n=(0,r.v9)(o),e=(0,r.v9)(i);return(0,I.jsxs)(T,{children:[(0,I.jsx)($,{children:"Phonebook"}),(0,I.jsx)(F,{}),(0,I.jsx)(G,{children:"Contacts"}),(0,I.jsx)(M,{}),e&&"Your contacts are loading, please wait foe a while",n&&{error:n},a.length>0&&(0,I.jsx)(D,{})]})}}}]);
//# sourceMappingURL=842.2f54a058.chunk.js.map