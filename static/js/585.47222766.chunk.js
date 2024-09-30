"use strict";(self.webpackChunkw5_tools=self.webpackChunkw5_tools||[]).push([[585],{9762:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(9950),o=n(48738),i=n.n(o),l=n(66191),s=n(5741),a=n(9415),c=n(16661);const d={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},u=r.createContext({});var p=n(50604),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function g(e,t,n){const o=r.useMemo((()=>{return t||(e=n,(0,p.A)(e).map((e=>Object.assign(Object.assign({},null===e||void 0===e?void 0:e.props),{key:e.key}))));var e}),[t,n]);return r.useMemo((()=>o.map((t=>{var{span:n}=t,r=m(t,["span"]);return Object.assign(Object.assign({},r),{span:"number"===typeof n?n:(0,l.ko)(e,n)})}))),[o,e])}function f(e,t,n){let r=e,o=!1;return(void 0===n||n>t)&&(r=Object.assign(Object.assign({},e),{span:t}),o=void 0!==n),[r,o]}const b=(e,t)=>{const[n,o]=(0,r.useMemo)((()=>function(e,t){const n=[];let r=[],o=t,i=!1;return e.filter((e=>e)).forEach(((l,s)=>{const a=null===l||void 0===l?void 0:l.span,c=a||1;if(s===e.length-1){const[e,t]=f(l,o,a);return i=i||t,r.push(e),void n.push(r)}if(c<o)o-=c,r.push(l);else{const[e,s]=f(l,o,c);i=i||s,r.push(e),n.push(r),o=t,r=[]}})),[n,i]}(t,e)),[t,e]);return n},y=e=>{let{children:t}=e;return t};function $(e){return void 0!==e&&null!==e}const h=e=>{const{itemPrefixCls:t,component:n,span:o,className:l,style:s,labelStyle:a,contentStyle:c,bordered:d,label:u,content:p,colon:m,type:g}=e,f=n;return d?r.createElement(f,{className:i()({[`${t}-item-label`]:"label"===g,[`${t}-item-content`]:"content"===g},l),style:s,colSpan:o},$(u)&&r.createElement("span",{style:a},u),$(p)&&r.createElement("span",{style:c},p)):r.createElement(f,{className:i()(`${t}-item`,l),style:s,colSpan:o},r.createElement("div",{className:`${t}-item-container`},(u||0===u)&&r.createElement("span",{className:i()(`${t}-item-label`,{[`${t}-item-no-colon`]:!m}),style:a},u),(p||0===p)&&r.createElement("span",{className:i()(`${t}-item-content`),style:c},p)))};function v(e,t,n){let{colon:o,prefixCls:i,bordered:l}=t,{component:s,type:a,showLabel:c,showContent:d,labelStyle:u,contentStyle:p}=n;return e.map(((e,t)=>{let{label:n,children:m,prefixCls:g=i,className:f,style:b,labelStyle:y,contentStyle:$,span:v=1,key:k}=e;return"string"===typeof s?r.createElement(h,{key:`${a}-${k||t}`,className:f,style:b,labelStyle:Object.assign(Object.assign({},u),y),contentStyle:Object.assign(Object.assign({},p),$),span:v,colon:o,component:s,itemPrefixCls:g,bordered:l,label:c?n:null,content:d?m:null,type:a}):[r.createElement(h,{key:`label-${k||t}`,className:f,style:Object.assign(Object.assign(Object.assign({},u),b),y),span:1,colon:o,component:s[0],itemPrefixCls:g,bordered:l,label:n,type:"label"}),r.createElement(h,{key:`content-${k||t}`,className:f,style:Object.assign(Object.assign(Object.assign({},p),b),$),span:2*v-1,component:s[1],itemPrefixCls:g,bordered:l,content:m,type:"content"})]}))}const k=e=>{const t=r.useContext(u),{prefixCls:n,vertical:o,row:i,index:l,bordered:s}=e;return o?r.createElement(r.Fragment,null,r.createElement("tr",{key:`label-${l}`,className:`${n}-row`},v(i,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:`content-${l}`,className:`${n}-row`},v(i,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:l,className:`${n}-row`},v(i,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))};var x=n(34433),C=n(45343),S=n(31900),O=n(77261);const w=e=>{const{componentCls:t,labelBg:n}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,x.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,x.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,x.unit)(e.padding)} ${(0,x.unit)(e.paddingLG)}`,borderInlineEnd:`${(0,x.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:n,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,x.unit)(e.paddingSM)} ${(0,x.unit)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,x.unit)(e.paddingXS)} ${(0,x.unit)(e.padding)}`}}}}}},E=(0,S.OF)("Descriptions",(e=>(e=>{const{componentCls:t,extraColor:n,itemPaddingBottom:r,itemPaddingEnd:o,colonMarginRight:i,colonMarginLeft:l,titleMarginBottom:s}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,C.dF)(e)),w(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:s},[`${t}-title`]:Object.assign(Object.assign({},C.L9),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:n,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:r,paddingInlineEnd:o},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,x.unit)(l)} ${(0,x.unit)(i)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}})((0,O.mergeToken)(e,{}))),(e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText})));var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const A=e=>{const{prefixCls:t,title:n,extra:o,column:p,colon:m=!0,bordered:f,layout:y,children:$,className:h,rootClassName:v,style:x,size:C,labelStyle:S,contentStyle:O,items:w}=e,A=j(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:N,direction:P,descriptions:I}=r.useContext(s.QO),W=N("descriptions",t),z=(0,c.A)(),M=r.useMemo((()=>{var e;return"number"===typeof p?p:null!==(e=(0,l.ko)(z,Object.assign(Object.assign({},d),p)))&&void 0!==e?e:3}),[z,p]),L=g(z,w,$),B=(0,a.A)(C),D=b(M,L),[T,R,X]=E(W),F=r.useMemo((()=>({labelStyle:S,contentStyle:O})),[S,O]);return T(r.createElement(u.Provider,{value:F},r.createElement("div",Object.assign({className:i()(W,null===I||void 0===I?void 0:I.className,{[`${W}-${B}`]:B&&"default"!==B,[`${W}-bordered`]:!!f,[`${W}-rtl`]:"rtl"===P},h,v,R,X),style:Object.assign(Object.assign({},null===I||void 0===I?void 0:I.style),x)},A),(n||o)&&r.createElement("div",{className:`${W}-header`},n&&r.createElement("div",{className:`${W}-title`},n),o&&r.createElement("div",{className:`${W}-extra`},o)),r.createElement("div",{className:`${W}-view`},r.createElement("table",null,r.createElement("tbody",null,D.map(((e,t)=>r.createElement(k,{key:t,index:t,colon:m,prefixCls:W,vertical:"vertical"===y,bordered:f,row:e})))))))))};A.Item=y;const N=A},48864:(e,t,n)=>{n.d(t,{A:()=>re});var r=n(9950),o=n(30767),i=n(13239),l=n(58143),s=n(94118),a=n(23452),c=n(48738),d=n.n(c),u=n(15207),p=n(5741),m=n(58168),g=n(89379),f=n(80045),b={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},y=function(){var e=(0,r.useRef)([]),t=(0,r.useRef)(null);return(0,r.useEffect)((function(){var n=Date.now(),r=!1;e.current.forEach((function(e){if(e){r=!0;var o=e.style;o.transitionDuration=".3s, .3s, .3s, .06s",t.current&&n-t.current<100&&(o.transitionDuration="0s, 0s")}})),r&&(t.current=Date.now())})),e.current};var $=n(82284),h=n(5544),v=n(3888),k=0,x=(0,v.A)();const C=function(e){var t=r.useState(),n=(0,h.A)(t,2),o=n[0],i=n[1];return r.useEffect((function(){i("rc_progress_".concat(function(){var e;return x?(e=k,k+=1):e="TEST_OR_SSR",e}()))}),[]),e||o};var S=function(e){var t=e.bg,n=e.children;return r.createElement("div",{style:{width:"100%",height:"100%",background:t}},n)};function O(e,t){return Object.keys(e).map((function(n){var r=parseFloat(n),o="".concat(Math.floor(r*t),"%");return"".concat(e[n]," ").concat(o)}))}const w=r.forwardRef((function(e,t){var n=e.prefixCls,o=e.color,i=e.gradientId,l=e.radius,s=e.style,a=e.ptg,c=e.strokeLinecap,d=e.strokeWidth,u=e.size,p=e.gapDegree,m=o&&"object"===(0,$.A)(o),g=m?"#FFF":void 0,f=u/2,b=r.createElement("circle",{className:"".concat(n,"-circle-path"),r:l,cx:f,cy:f,stroke:g,strokeLinecap:c,strokeWidth:d,opacity:0===a?0:1,style:s,ref:t});if(!m)return b;var y="".concat(i,"-conic"),h=p?"".concat(180+p/2,"deg"):"0deg",v=O(o,(360-p)/360),k=O(o,1),x="conic-gradient(from ".concat(h,", ").concat(v.join(", "),")"),C="linear-gradient(to ".concat(p?"bottom":"top",", ").concat(k.join(", "),")");return r.createElement(r.Fragment,null,r.createElement("mask",{id:y},b),r.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(y,")")},r.createElement(S,{bg:C},r.createElement(S,{bg:x}))))}));var E=100,j=function(e,t,n,r,o,i,l,s,a,c){var d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,u=n/100*360*((360-i)/360),p=0===i?0:{bottom:0,top:180,left:90,right:-90}[l],m=(100-r)/100*t;"round"===a&&100!==r&&(m+=c/2)>=t&&(m=t-.01);return{stroke:"string"===typeof s?s:void 0,strokeDasharray:"".concat(t,"px ").concat(e),strokeDashoffset:m+d,transform:"rotate(".concat(o+u+p,"deg)"),transformOrigin:"".concat(50,"px ").concat(50,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},A=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function N(e){var t=null!==e&&void 0!==e?e:[];return Array.isArray(t)?t:[t]}const P=function(e){var t=(0,g.A)((0,g.A)({},b),e),n=t.id,o=t.prefixCls,i=t.steps,l=t.strokeWidth,s=t.trailWidth,a=t.gapDegree,c=void 0===a?0:a,u=t.gapPosition,p=t.trailColor,h=t.strokeLinecap,v=t.style,k=t.className,x=t.strokeColor,S=t.percent,O=(0,f.A)(t,A),P=C(n),I="".concat(P,"-gradient"),W=50-l/2,z=2*Math.PI*W,M=c>0?90+c/2:-90,L=z*((360-c)/360),B="object"===(0,$.A)(i)?i:{count:i,gap:2},D=B.count,T=B.gap,R=N(S),X=N(x),F=X.find((function(e){return e&&"object"===(0,$.A)(e)})),H=F&&"object"===(0,$.A)(F)?"butt":h,_=j(z,L,0,100,M,c,u,p,H,l),G=y();return r.createElement("svg",(0,m.A)({className:d()("".concat(o,"-circle"),k),viewBox:"0 0 ".concat(E," ").concat(E),style:v,id:n,role:"presentation"},O),!D&&r.createElement("circle",{className:"".concat(o,"-circle-trail"),r:W,cx:50,cy:50,stroke:p,strokeLinecap:H,strokeWidth:s||l,style:_}),D?function(){var e=Math.round(D*(R[0]/100)),t=100/D,n=0;return new Array(D).fill(null).map((function(i,s){var a=s<=e-1?X[0]:p,d=a&&"object"===(0,$.A)(a)?"url(#".concat(I,")"):void 0,m=j(z,L,n,t,M,c,u,a,"butt",l,T);return n+=100*(L-m.strokeDashoffset+T)/L,r.createElement("circle",{key:s,className:"".concat(o,"-circle-path"),r:W,cx:50,cy:50,stroke:d,strokeWidth:l,opacity:1,style:m,ref:function(e){G[s]=e}})}))}():function(){var e=0;return R.map((function(t,n){var i=X[n]||X[X.length-1],s=j(z,L,e,t,M,c,u,i,H,l);return e+=t,r.createElement(w,{key:n,color:i,ptg:t,radius:W,prefixCls:o,gradientId:I,style:s,strokeLinecap:H,strokeWidth:l,gapDegree:c,ref:function(e){G[n]=e},size:E})})).reverse()}())};var I=n(46680),W=n(36889);function z(e){return!e||e<0?0:e>100?100:e}function M(e){let{success:t,successPercent:n}=e,r=n;return t&&"progress"in t&&(r=t.progress),t&&"percent"in t&&(r=t.percent),r}const L=(e,t,n)=>{var r,o,i,l;let s=-1,a=-1;if("step"===t){const t=n.steps,r=n.strokeWidth;"string"===typeof e||"undefined"===typeof e?(s="small"===e?2:14,a=null!==r&&void 0!==r?r:8):"number"===typeof e?[s,a]=[e,e]:[s=14,a=8]=Array.isArray(e)?e:[e.width,e.height],s*=t}else if("line"===t){const t=null===n||void 0===n?void 0:n.strokeWidth;"string"===typeof e||"undefined"===typeof e?a=t||("small"===e?6:8):"number"===typeof e?[s,a]=[e,e]:[s=-1,a=8]=Array.isArray(e)?e:[e.width,e.height]}else"circle"!==t&&"dashboard"!==t||("string"===typeof e||"undefined"===typeof e?[s,a]="small"===e?[60,60]:[120,120]:"number"===typeof e?[s,a]=[e,e]:Array.isArray(e)&&(s=null!==(o=null!==(r=e[0])&&void 0!==r?r:e[1])&&void 0!==o?o:120,a=null!==(l=null!==(i=e[0])&&void 0!==i?i:e[1])&&void 0!==l?l:120));return[s,a]},B=e=>{const{prefixCls:t,trailColor:n=null,strokeLinecap:o="round",gapPosition:i,gapDegree:l,width:s=120,type:a,children:c,success:u,size:p=s,steps:m}=e,[g,f]=L(p,"circle");let{strokeWidth:b}=e;void 0===b&&(b=Math.max((e=>3/e*100)(g),6));const y={width:g,height:f,fontSize:.15*g+6},$=r.useMemo((()=>l||0===l?l:"dashboard"===a?75:void 0),[l,a]),h=(e=>{let{percent:t,success:n,successPercent:r}=e;const o=z(M({success:n,successPercent:r}));return[o,z(z(t)-o)]})(e),v=i||"dashboard"===a&&"bottom"||void 0,k="[object Object]"===Object.prototype.toString.call(e.strokeColor),x=(e=>{let{success:t={},strokeColor:n}=e;const{strokeColor:r}=t;return[r||W.presetPrimaryColors.green,n||null]})({success:u,strokeColor:e.strokeColor}),C=d()(`${t}-inner`,{[`${t}-circle-gradient`]:k}),S=r.createElement(P,{steps:m,percent:m?h[1]:h,strokeWidth:b,trailWidth:b,strokeColor:m?x[1]:x,strokeLinecap:o,trailColor:n,prefixCls:t,gapDegree:$,gapPosition:v}),O=g<=20,w=r.createElement("div",{className:C,style:y},S,!O&&c);return O?r.createElement(I.A,{title:c},w):w};var D=n(34433),T=n(45343),R=n(31900),X=n(77261);const F="--progress-line-stroke-color",H="--progress-percent",_=e=>{const t=e?"100%":"-100%";return new D.Keyframes(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},G=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:Object.assign(Object.assign({},(0,T.dF)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${F})`]},height:"100%",width:`calc(1 / var(${H}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[n]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${(0,D.unit)(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:_(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:_(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},q=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[n]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Q=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},K=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]:{fontSize:e.fontSizeSM}}}},Y=(0,R.OF)("Progress",(e=>{const t=e.calc(e.marginXXS).div(2).equal(),n=(0,X.mergeToken)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[G(n),q(n),Q(n),K(n)]}),(e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:e.fontSize/e.fontSizeSM+"em"})));var J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const U=(e,t)=>{const{from:n=W.presetPrimaryColors.blue,to:r=W.presetPrimaryColors.blue,direction:o=("rtl"===t?"to left":"to right")}=e,i=J(e,["from","to","direction"]);if(0!==Object.keys(i).length){const e=`linear-gradient(${o}, ${(e=>{let t=[];return Object.keys(e).forEach((n=>{const r=parseFloat(n.replace(/%/g,""));isNaN(r)||t.push({key:r,value:e[n]})})),t=t.sort(((e,t)=>e.key-t.key)),t.map((e=>{let{key:t,value:n}=e;return`${n} ${t}%`})).join(", ")})(i)})`;return{background:e,[F]:e}}const l=`linear-gradient(${o}, ${n}, ${r})`;return{background:l,[F]:l}},V=e=>{const{prefixCls:t,direction:n,percent:o,size:i,strokeWidth:l,strokeColor:s,strokeLinecap:a="round",children:c,trailColor:u=null,percentPosition:p,success:m}=e,{align:g,type:f}=p,b=s&&"string"!==typeof s?U(s,n):{[F]:s,background:s},y="square"===a||"butt"===a?0:void 0,$=null!==i&&void 0!==i?i:[-1,l||("small"===i?6:8)],[h,v]=L($,"line",{strokeWidth:l});const k={backgroundColor:u||void 0,borderRadius:y},x=Object.assign(Object.assign({width:`${z(o)}%`,height:v,borderRadius:y},b),{[H]:z(o)/100}),C=M(e),S={width:`${z(C)}%`,height:v,borderRadius:y,backgroundColor:null===m||void 0===m?void 0:m.strokeColor},O={width:h<0?"100%":h},w=r.createElement("div",{className:`${t}-inner`,style:k},r.createElement("div",{className:d()(`${t}-bg`,`${t}-bg-${f}`),style:x},"inner"===f&&c),void 0!==C&&r.createElement("div",{className:`${t}-success-bg`,style:S})),E="outer"===f&&"start"===g,j="outer"===f&&"end"===g;return"outer"===f&&"center"===g?r.createElement("div",{className:`${t}-layout-bottom`},w,c):r.createElement("div",{className:`${t}-outer`,style:O},E&&c,w,j&&c)},Z=e=>{const{size:t,steps:n,percent:o=0,strokeWidth:i=8,strokeColor:l,trailColor:s=null,prefixCls:a,children:c}=e,u=Math.round(n*(o/100)),p=null!==t&&void 0!==t?t:["small"===t?2:14,i],[m,g]=L(p,"step",{steps:n,strokeWidth:i}),f=m/n,b=new Array(n);for(let y=0;y<n;y++){const e=Array.isArray(l)?l[y]:l;b[y]=r.createElement("div",{key:y,className:d()(`${a}-steps-item`,{[`${a}-steps-item-active`]:y<=u-1}),style:{backgroundColor:y<=u-1?e:s,width:f,height:g}})}return r.createElement("div",{className:`${a}-steps-outer`},b,c)};var ee=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const te=["normal","exception","active","success"],ne=r.forwardRef(((e,t)=>{const{prefixCls:n,className:c,rootClassName:m,steps:g,strokeColor:f,percent:b=0,size:y="default",showInfo:$=!0,type:h="line",status:v,format:k,style:x,percentPosition:C={}}=e,S=ee(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:O="end",type:w="outer"}=C,E=Array.isArray(f)?f[0]:f,j="string"===typeof f||Array.isArray(f)?f:void 0,A=r.useMemo((()=>{if(E){const e="string"===typeof E?E:Object.values(E)[0];return new a.q(e).isLight()}return!1}),[f]),N=r.useMemo((()=>{var t,n;const r=M(e);return parseInt(void 0!==r?null===(t=null!==r&&void 0!==r?r:0)||void 0===t?void 0:t.toString():null===(n=null!==b&&void 0!==b?b:0)||void 0===n?void 0:n.toString(),10)}),[b,e.success,e.successPercent]),P=r.useMemo((()=>!te.includes(v)&&N>=100?"success":v||"normal"),[v,N]),{getPrefixCls:I,direction:W,progress:D}=r.useContext(p.QO),T=I("progress",n),[R,X,F]=Y(T),H="line"===h,_=H&&!g,G=r.useMemo((()=>{if(!$)return null;const t=M(e);let n;const a=H&&A&&"inner"===w;return"inner"===w||k||"exception"!==P&&"success"!==P?n=(k||(e=>`${e}%`))(z(b),z(t)):"exception"===P?n=H?r.createElement(l.A,null):r.createElement(s.A,null):"success"===P&&(n=H?r.createElement(o.A,null):r.createElement(i.A,null)),r.createElement("span",{className:d()(`${T}-text`,{[`${T}-text-bright`]:a,[`${T}-text-${O}`]:_,[`${T}-text-${w}`]:_}),title:"string"===typeof n?n:void 0},n)}),[$,b,N,P,h,T,k]);let q;"line"===h?q=g?r.createElement(Z,Object.assign({},e,{strokeColor:j,prefixCls:T,steps:"object"===typeof g?g.count:g}),G):r.createElement(V,Object.assign({},e,{strokeColor:E,prefixCls:T,direction:W,percentPosition:{align:O,type:w}}),G):"circle"!==h&&"dashboard"!==h||(q=r.createElement(B,Object.assign({},e,{strokeColor:E,prefixCls:T,progressStatus:P}),G));const Q=d()(T,`${T}-status-${P}`,{[`${T}-${"dashboard"===h?"circle":h}`]:"line"!==h,[`${T}-inline-circle`]:"circle"===h&&L(y,"circle")[0]<=20,[`${T}-line`]:_,[`${T}-line-align-${O}`]:_,[`${T}-line-position-${w}`]:_,[`${T}-steps`]:g,[`${T}-show-info`]:$,[`${T}-${y}`]:"string"===typeof y,[`${T}-rtl`]:"rtl"===W},null===D||void 0===D?void 0:D.className,c,m,X,F);return R(r.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},null===D||void 0===D?void 0:D.style),x),className:Q,role:"progressbar","aria-valuenow":N,"aria-valuemin":0,"aria-valuemax":100},(0,u.A)(S,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),q))}));const re=ne}}]);