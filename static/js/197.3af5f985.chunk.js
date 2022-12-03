"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[197],{7197:function(t,e,n){n.r(e),n.d(e,{default:function(){return xt}});var a=n(9434),r=function(t){return t.contacts.items},o=function(t){return t.contacts.error},i=function(t){return t.contacts.isLoading},s=function(t){return t.contacts.filter},c=n(181);var l,d,u,p,m,v,f,g=n(3634),h=n(168),b=n(7691),y=b.ZP.form(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  align-self: center;\n  align-items: center;\n"]))),Z=b.ZP.div(d||(d=(0,h.Z)(["\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  margin: 0 auto;\n  align-self: center;\n  align-items: flex-end;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),x=b.ZP.label(u||(u=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  margin-bottom: 10px;\n"]))),P=b.ZP.input(p||(p=(0,h.Z)(["\n  display: flex;\n"]))),C=b.ZP.button(m||(m=(0,h.Z)(["\n  align-self: center;\n  justify-content: center;\n  width: 150px;\n  transition: background-color 250ms linear;\n  &:hover,\n  &:focus {\n    background-color: #0fece1;\n    border-radius: 2px;\n  }\n"]))),w=n(3329),j=function(){var t=(0,a.v9)(r),e=(0,a.I0)();return(0,w.jsx)(y,{onSubmit:function(n){n.preventDefault();var a,r=n.currentTarget,o=r.elements,i=o.name,s=o.phone,l=function(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,c.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}(t);try{for(l.s();!(a=l.n()).done;){var d=a.value;if(d.name===i.value)return alert("".concat(d.name," is already contacts."))}}catch(u){l.e(u)}finally{l.f()}e((0,g.uK)({name:i.value,number:s.value})),r.reset()},children:(0,w.jsxs)(Z,{children:[(0,w.jsxs)(x,{children:["Name",(0,w.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(x,{children:["Number",(0,w.jsx)(P,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(C,{type:"submit",children:"Add contact"})]})})},A=n(2791),S=b.ZP.li(v||(v=(0,h.Z)(["\n  display: flex;\n  padding: 5px;\n  justify-content: space-between;\n  &:not(:last-child) {\n  }\n"]))),I=(b.ZP.button(f||(f=(0,h.Z)(["\n  align-self: center;\n  justify-content: center;\n  transition: background-color 250ms linear;\n  &:hover,\n  &:focus {\n    background-color: #0fece1;\n    border-radius: 2px;\n  }\n"]))),n(4942)),k=n(3366),N=n(7462),M=n(8182),B=n(4419),G=n(627),L=n(2065),R=n(6056),O=n(5873),F=n(1102),z=n(6258),T=n(3026),V=n(7933),W=n(8826),_=n(5878),q=n(7225);function D(t){return(0,q.Z)("MuiListItem",t)}var E=(0,_.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var J=(0,_.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function K(t){return(0,q.Z)("MuiListItemSecondaryAction",t)}(0,_.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var Y=["className"],$=(0,R.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.disableGutters&&e.disableGutters]}})((function(t){var e=t.ownerState;return(0,N.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})})),H=A.forwardRef((function(t,e){var n=(0,O.Z)({props:t,name:"MuiListItemSecondaryAction"}),a=n.className,r=(0,k.Z)(n,Y),o=A.useContext(W.Z),i=(0,N.Z)({},n,{disableGutters:o.disableGutters}),s=function(t){var e=t.disableGutters,n=t.classes,a={root:["root",e&&"disableGutters"]};return(0,B.Z)(a,K,n)}(i);return(0,w.jsx)($,(0,N.Z)({className:(0,M.Z)(s.root,a),ownerState:i,ref:e},r))}));H.muiName="ListItemSecondaryAction";var Q,U,X,tt,et,nt,at=H,rt=["className"],ot=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],it=(0,R.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.dense&&e.dense,"flex-start"===n.alignItems&&e.alignItemsFlexStart,n.divider&&e.divider,!n.disableGutters&&e.gutters,!n.disablePadding&&e.padding,n.button&&e.button,n.hasSecondaryAction&&e.secondaryAction]}})((function(t){var e,n=t.theme,a=t.ownerState;return(0,N.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,N.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,I.Z)({},"& > .".concat(J.root),{paddingRight:48}),(e={},(0,I.Z)(e,"&.".concat(E.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,I.Z)(e,"&.".concat(E.selected),(0,I.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,L.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(E.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,L.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,I.Z)(e,"&.".concat(E.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),e),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,I.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(E.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,L.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,L.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),st=(0,R.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(t,e){return e.container}})({position:"relative"}),ct=A.forwardRef((function(t,e){var n=(0,O.Z)({props:t,name:"MuiListItem"}),a=n.alignItems,r=void 0===a?"center":a,o=n.autoFocus,i=void 0!==o&&o,s=n.button,c=void 0!==s&&s,l=n.children,d=n.className,u=n.component,p=n.components,m=void 0===p?{}:p,v=n.componentsProps,f=void 0===v?{}:v,g=n.ContainerComponent,h=void 0===g?"li":g,b=n.ContainerProps,y=(b=void 0===b?{}:b).className,Z=n.dense,x=void 0!==Z&&Z,P=n.disabled,C=void 0!==P&&P,j=n.disableGutters,S=void 0!==j&&j,I=n.disablePadding,L=void 0!==I&&I,R=n.divider,_=void 0!==R&&R,q=n.focusVisibleClassName,J=n.secondaryAction,K=n.selected,Y=void 0!==K&&K,$=n.slotProps,H=void 0===$?{}:$,Q=n.slots,U=void 0===Q?{}:Q,X=(0,k.Z)(n.ContainerProps,rt),tt=(0,k.Z)(n,ot),et=A.useContext(W.Z),nt=A.useMemo((function(){return{dense:x||et.dense||!1,alignItems:r,disableGutters:S}}),[r,et.dense,x,S]),ct=A.useRef(null);(0,T.Z)((function(){i&&ct.current&&ct.current.focus()}),[i]);var lt=A.Children.toArray(l),dt=lt.length&&(0,z.Z)(lt[lt.length-1],["ListItemSecondaryAction"]),ut=(0,N.Z)({},n,{alignItems:r,autoFocus:i,button:c,dense:nt.dense,disabled:C,disableGutters:S,disablePadding:L,divider:_,hasSecondaryAction:dt,selected:Y}),pt=function(t){var e=t.alignItems,n=t.button,a=t.classes,r=t.dense,o=t.disabled,i={root:["root",r&&"dense",!t.disableGutters&&"gutters",!t.disablePadding&&"padding",t.divider&&"divider",o&&"disabled",n&&"button","flex-start"===e&&"alignItemsFlexStart",t.hasSecondaryAction&&"secondaryAction",t.selected&&"selected"],container:["container"]};return(0,B.Z)(i,D,a)}(ut),mt=(0,V.Z)(ct,e),vt=U.root||m.Root||it,ft=H.root||f.root||{},gt=(0,N.Z)({className:(0,M.Z)(pt.root,ft.className,d),disabled:C},tt),ht=u||"li";return c&&(gt.component=u||"div",gt.focusVisibleClassName=(0,M.Z)(E.focusVisible,q),ht=F.Z),dt?(ht=gt.component||u?ht:"div","li"===h&&("li"===ht?ht="div":"li"===gt.component&&(gt.component="div")),(0,w.jsx)(W.Z.Provider,{value:nt,children:(0,w.jsxs)(st,(0,N.Z)({as:h,className:(0,M.Z)(pt.container,y),ref:mt,ownerState:ut},X,{children:[(0,w.jsx)(vt,(0,N.Z)({},ft,!(0,G.Z)(vt)&&{as:ht,ownerState:(0,N.Z)({},ut,ft.ownerState)},gt,{children:lt})),lt.pop()]}))})):(0,w.jsx)(W.Z.Provider,{value:nt,children:(0,w.jsxs)(vt,(0,N.Z)({},ft,{as:ht,ref:mt},!(0,G.Z)(vt)&&{ownerState:(0,N.Z)({},ut,ft.ownerState)},gt,{children:[lt,J&&(0,w.jsx)(at,{children:J})]}))})})),lt=n(8074),dt=n(7205),ut=function(t){var e=t.contact,n=e.name,r=e.number,o=e.id,i=(0,a.I0)();return(0,w.jsxs)(S,{children:[(0,w.jsxs)(ct,{a:!0,children:[(0,w.jsxs)(lt.Z,{class:"MuiTypography-subtitle",variant:"string",children:[n,":"]}),(0,w.jsx)(lt.Z,{variant:"string",children:r})]}),(0,w.jsx)(dt.Z,{contact:e.id,type:"button",variant:"contained",onClick:function(){return i((0,g.GK)(o))},children:"Delete"})]})},pt=b.ZP.ul(Q||(Q=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),mt=function(){var t=(0,a.I0)();(0,A.useEffect)((function(){t((0,g.yF)())}),[t]);var e=(0,a.v9)(r),n=(0,a.v9)(s);return(0,w.jsx)(pt,{children:function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(t){return(0,w.jsx)(ut,{contact:t},t.id)}))})},vt=n(1538),ft=b.ZP.label(U||(U=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto 0 auto;\n  text-align: center;\n  align-items: space-between;\n  margin-bottom: 10px;\n"]))),gt=b.ZP.input(X||(X=(0,h.Z)(["\n  margin-top: 10px;\n  display: flex;\n"]))),ht=function(){var t=(0,a.v9)(s),e=(0,a.I0)();return(0,w.jsxs)(ft,{children:["Find contacts by name",(0,w.jsx)(gt,{value:t,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(t){console.log(t.target.value),e((0,vt.x)(t.target.value.trim()))}})]})},bt=b.ZP.div(tt||(tt=(0,h.Z)(["\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n  background-color: #8bf3dd;\n  width: 400px;\n"]))),yt=b.ZP.h1(et||(et=(0,h.Z)(["\n  text-align: center;\n"]))),Zt=b.ZP.h2(nt||(nt=(0,h.Z)(["\n  text-align: center;\n"])));function xt(){var t=(0,a.v9)(o),e=(0,a.v9)(i);return(0,w.jsxs)(bt,{children:[(0,w.jsx)(yt,{children:"Phonebook"}),(0,w.jsx)(j,{}),(0,w.jsx)(Zt,{children:"Contacts"}),(0,w.jsx)(ht,{}),e&&"Your contacts are loading, please wait foe a while",t&&{error:t},r.length>0&&(0,w.jsx)(mt,{})]})}},627:function(t,e){e.Z=function(t){return"string"===typeof t}},8826:function(t,e,n){var a=n(2791).createContext({});e.Z=a},8074:function(t,e,n){n.d(e,{Z:function(){return w}});var a=n(3366),r=n(7462),o=n(2791),i=n(8182),s=n(2982),c=n(2466),l=n(114),d=["sx"];function u(t){var e,n=t.sx,o=function(t){var e={systemProps:{},otherProps:{}};return Object.keys(t).forEach((function(n){l.Gc[n]?e.systemProps[n]=t[n]:e.otherProps[n]=t[n]})),e}((0,a.Z)(t,d)),i=o.systemProps,u=o.otherProps;return e=Array.isArray(n)?[i].concat((0,s.Z)(n)):"function"===typeof n?function(){var t=n.apply(void 0,arguments);return(0,c.P)(t)?(0,r.Z)({},i,t):i}:(0,r.Z)({},i,n),(0,r.Z)({},u,{sx:e})}var p=n(4419),m=n(6056),v=n(5873),f=n(9853),g=n(5878),h=n(7225);function b(t){return(0,h.Z)("MuiTypography",t)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=n(3329),Z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,m.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat((0,f.Z)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((function(t){var e=t.theme,n=t.ownerState;return(0,r.Z)({margin:0},n.variant&&e.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o.forwardRef((function(t,e){var n=(0,v.Z)({props:t,name:"MuiTypography"}),o=function(t){return C[t]||t}(n.color),s=u((0,r.Z)({},n,{color:o})),c=s.align,l=void 0===c?"inherit":c,d=s.className,m=s.component,g=s.gutterBottom,h=void 0!==g&&g,w=s.noWrap,j=void 0!==w&&w,A=s.paragraph,S=void 0!==A&&A,I=s.variant,k=void 0===I?"body1":I,N=s.variantMapping,M=void 0===N?P:N,B=(0,a.Z)(s,Z),G=(0,r.Z)({},s,{align:l,color:o,className:d,component:m,gutterBottom:h,noWrap:j,paragraph:S,variant:k,variantMapping:M}),L=m||(S?"p":M[k]||P[k])||"span",R=function(t){var e=t.align,n=t.gutterBottom,a=t.noWrap,r=t.paragraph,o=t.variant,i=t.classes,s={root:["root",o,"inherit"!==t.align&&"align".concat((0,f.Z)(e)),n&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,p.Z)(s,b,i)}(G);return(0,y.jsx)(x,(0,r.Z)({as:L,ref:e,ownerState:G,className:(0,i.Z)(R.root,d)},B))}))},6258:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(2791);var r=function(t,e){return a.isValidElement(t)&&-1!==e.indexOf(t.type.muiName)}},3026:function(t,e,n){var a=n(5721);e.Z=a.Z}}]);
//# sourceMappingURL=197.3af5f985.chunk.js.map