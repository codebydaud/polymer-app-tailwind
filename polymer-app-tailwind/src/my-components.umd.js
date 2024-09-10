(function($,K){typeof exports=="object"&&typeof module<"u"?K(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],K):($=typeof globalThis<"u"?globalThis:$||self,K($.React,$.ReactDOM))})(this,function($,K){"use strict";const ue=globalThis||void 0||self;var Ze=Object.defineProperty,er=(t,o,i)=>o in t?Ze(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,Z=(t,o,i)=>(er(t,typeof o!="symbol"?o+"":o,i),i);const rr={stringify:t=>t,parse:t=>t},tr={stringify:t=>`${t}`,parse:t=>parseFloat(t)},nr={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},ar={stringify:t=>t.name,parse:(t,o,i)=>{const b=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof ue<"u"&&t in ue)return ue[t]})();return typeof b=="function"?b.bind(i):void 0}},or={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},se={string:rr,number:tr,boolean:nr,function:ar,json:or};function ir(t){return t.replace(/([a-z0-9])([A-Z])/g,(o,i,b)=>`${i}-${b.toLowerCase()}`)}const ee=Symbol.for("r2wc.render"),re=Symbol.for("r2wc.connected"),N=Symbol.for("r2wc.context"),Y=Symbol.for("r2wc.props");function ur(t,o,i){var b,C,S;o.props||(o.props=t.propTypes?Object.keys(t.propTypes):[]);const x=Array.isArray(o.props)?o.props.slice():Object.keys(o.props),p={},l={},_={};for(const f of x){p[f]=Array.isArray(o.props)?"string":o.props[f];const m=ir(f);l[f]=m,_[m]=f}class h extends HTMLElement{constructor(){super(),Z(this,b,!0),Z(this,C),Z(this,S,{}),Z(this,"container"),o.shadow?this.container=this.attachShadow({mode:o.shadow}):this.container=this,this[Y].container=this.container;for(const m of x){const j=l[m],P=this.getAttribute(j),w=p[m],k=w?se[w]:null;k!=null&&k.parse&&P&&(this[Y][m]=k.parse(P,j,this))}}static get observedAttributes(){return Object.keys(_)}connectedCallback(){this[re]=!0,this[ee]()}disconnectedCallback(){this[re]=!1,this[N]&&i.unmount(this[N]),delete this[N]}attributeChangedCallback(m,j,P){const w=_[m],k=p[w],D=k?se[k]:null;w in p&&D!=null&&D.parse&&P&&(this[Y][w]=D.parse(P,m,this),this[ee]())}[(b=re,C=N,S=Y,ee)](){this[re]&&(this[N]?i.update(this[N],this[Y]):this[N]=i.mount(this.container,t,this[Y]))}}for(const f of x){const m=l[f],j=p[f];Object.defineProperty(h.prototype,f,{enumerable:!0,configurable:!0,get(){return this[Y][f]},set(P){this[Y][f]=P;const w=j?se[j]:null;if(w!=null&&w.stringify){const k=w.stringify(P,m,this);this.getAttribute(m)!==k&&this.setAttribute(m,k)}else this[ee]()}})}return h}function sr(t,o,i,b={}){function C(p,l,_){const h=o.createElement(l,_);if("createRoot"in i){const f=i.createRoot(p);return f.render(h),{container:p,root:f,ReactComponent:l}}if("render"in i)return i.render(h,p),{container:p,ReactComponent:l};throw new Error("Invalid ReactDOM instance provided.")}function S({container:p,root:l,ReactComponent:_},h){const f=o.createElement(_,h);if(l){l.render(f);return}if("render"in i){i.render(f,p);return}}function x({container:p,root:l}){if(l){l.unmount();return}if("unmountComponentAtNode"in i){i.unmountComponentAtNode(p);return}}return ur(t,b,{mount:C,unmount:x,update:S})}function cr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _e={exports:{}},v=_e.exports={},A,F;function ce(){throw new Error("setTimeout has not been defined")}function le(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?A=setTimeout:A=ce}catch{A=ce}try{typeof clearTimeout=="function"?F=clearTimeout:F=le}catch{F=le}})();function Te(t){if(A===setTimeout)return setTimeout(t,0);if((A===ce||!A)&&setTimeout)return A=setTimeout,setTimeout(t,0);try{return A(t,0)}catch{try{return A.call(null,t,0)}catch{return A.call(this,t,0)}}}function lr(t){if(F===clearTimeout)return clearTimeout(t);if((F===le||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(t);try{return F(t)}catch{try{return F.call(null,t)}catch{return F.call(this,t)}}}var W=[],J=!1,M,te=-1;function fr(){!J||!M||(J=!1,M.length?W=M.concat(W):te=-1,W.length&&we())}function we(){if(!J){var t=Te(fr);J=!0;for(var o=W.length;o;){for(M=W,W=[];++te<o;)M&&M[te].run();te=-1,o=W.length}M=null,J=!1,lr(t)}}v.nextTick=function(t){var o=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)o[i-1]=arguments[i];W.push(new Oe(t,o)),W.length===1&&!J&&Te(we)};function Oe(t,o){this.fun=t,this.array=o}Oe.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={};function L(){}v.on=L,v.addListener=L,v.once=L,v.off=L,v.removeListener=L,v.removeAllListeners=L,v.emit=L,v.prependListener=L,v.prependOnceListener=L,v.listeners=function(t){return[]},v.binding=function(t){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(t){throw new Error("process.chdir is not supported")},v.umask=function(){return 0};var dr=_e.exports;const Ce=cr(dr);var fe={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function pr(){if(Se)return z;Se=1;var t=$,o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function x(p,l,_){var h,f={},m=null,j=null;_!==void 0&&(m=""+_),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(j=l.ref);for(h in l)b.call(l,h)&&!S.hasOwnProperty(h)&&(f[h]=l[h]);if(p&&p.defaultProps)for(h in l=p.defaultProps,l)f[h]===void 0&&(f[h]=l[h]);return{$$typeof:o,type:p,key:m,ref:j,props:f,_owner:C.current}}return z.Fragment=i,z.jsx=x,z.jsxs=x,z}var G={},xe;function vr(){return xe||(xe=1,Ce.env.NODE_ENV!=="production"&&function(){var t=$,o=Symbol.for("react.element"),i=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),p=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),P=Symbol.iterator,w="@@iterator";function k(e){if(e===null||typeof e!="object")return null;var r=P&&e[P]||e[w];return typeof r=="function"?r:null}var D=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];mr("error",e,n)}}function mr(e,r,n){{var a=D.ReactDebugCurrentFrame,c=a.getStackAddendum();c!==""&&(r+="%s",n=n.concat([c]));var d=n.map(function(s){return String(s)});d.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,d)}}var yr=!1,gr=!1,br=!1,Er=!1,Rr=!1,je;je=Symbol.for("react.module.reference");function _r(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===S||Rr||e===C||e===_||e===h||Er||e===j||yr||gr||br||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===x||e.$$typeof===p||e.$$typeof===l||e.$$typeof===je||e.getModuleId!==void 0))}function Tr(e,r,n){var a=e.displayName;if(a)return a;var c=r.displayName||r.name||"";return c!==""?n+"("+c+")":n}function Pe(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case i:return"Portal";case S:return"Profiler";case C:return"StrictMode";case _:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var r=e;return Pe(r)+".Consumer";case x:var n=e;return Pe(n._context)+".Provider";case l:return Tr(e,e.render,"ForwardRef");case f:var a=e.displayName||null;return a!==null?a:I(e.type)||"Memo";case m:{var c=e,d=c._payload,s=c._init;try{return I(s(d))}catch{return null}}}return null}var V=Object.assign,X=0,ke,Ae,Fe,De,Ie,We,Le;function $e(){}$e.__reactDisabledLog=!0;function wr(){{if(X===0){ke=console.log,Ae=console.info,Fe=console.warn,De=console.error,Ie=console.group,We=console.groupCollapsed,Le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}X++}}function Or(){{if(X--,X===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:V({},e,{value:ke}),info:V({},e,{value:Ae}),warn:V({},e,{value:Fe}),error:V({},e,{value:De}),group:V({},e,{value:Ie}),groupCollapsed:V({},e,{value:We}),groupEnd:V({},e,{value:Le})})}X<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var pe=D.ReactCurrentDispatcher,ve;function ne(e,r,n){{if(ve===void 0)try{throw Error()}catch(c){var a=c.stack.trim().match(/\n( *(at )?)/);ve=a&&a[1]||""}return`
`+ve+e}}var he=!1,ae;{var Cr=typeof WeakMap=="function"?WeakMap:Map;ae=new Cr}function Ye(e,r){if(!e||he)return"";{var n=ae.get(e);if(n!==void 0)return n}var a;he=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d;d=pe.current,pe.current=null,wr();try{if(r){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(T){a=T}Reflect.construct(e,[],s)}else{try{s.call()}catch(T){a=T}e.call(s.prototype)}}else{try{throw Error()}catch(T){a=T}e()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var u=T.stack.split(`
`),R=a.stack.split(`
`),y=u.length-1,g=R.length-1;y>=1&&g>=0&&u[y]!==R[g];)g--;for(;y>=1&&g>=0;y--,g--)if(u[y]!==R[g]){if(y!==1||g!==1)do if(y--,g--,g<0||u[y]!==R[g]){var O=`
`+u[y].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,O),O}while(y>=1&&g>=0);break}}}finally{he=!1,pe.current=d,Or(),Error.prepareStackTrace=c}var B=e?e.displayName||e.name:"",U=B?ne(B):"";return typeof e=="function"&&ae.set(e,U),U}function Sr(e,r,n){return Ye(e,!1)}function xr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function oe(e,r,n){if(e==null)return"";if(typeof e=="function")return Ye(e,xr(e));if(typeof e=="string")return ne(e);switch(e){case _:return ne("Suspense");case h:return ne("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Sr(e.render);case f:return oe(e.type,r,n);case m:{var a=e,c=a._payload,d=a._init;try{return oe(d(c),r,n)}catch{}}}return""}var H=Object.prototype.hasOwnProperty,Ne={},Me=D.ReactDebugCurrentFrame;function ie(e){if(e){var r=e._owner,n=oe(e.type,e._source,r?r.type:null);Me.setExtraStackFrame(n)}else Me.setExtraStackFrame(null)}function jr(e,r,n,a,c){{var d=Function.call.bind(H);for(var s in e)if(d(e,s)){var u=void 0;try{if(typeof e[s]!="function"){var R=Error((a||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}u=e[s](r,s,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){u=y}u&&!(u instanceof Error)&&(ie(c),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,s,typeof u),ie(null)),u instanceof Error&&!(u.message in Ne)&&(Ne[u.message]=!0,ie(c),E("Failed %s type: %s",n,u.message),ie(null))}}}var Pr=Array.isArray;function me(e){return Pr(e)}function kr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Ar(e){try{return Ve(e),!1}catch{return!0}}function Ve(e){return""+e}function Ue(e){if(Ar(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",kr(e)),Ve(e)}var Q=D.ReactCurrentOwner,Fr={key:!0,ref:!0,__self:!0,__source:!0},Je,qe,ye;ye={};function Dr(e){if(H.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ir(e){if(H.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Wr(e,r){if(typeof e.ref=="string"&&Q.current&&r&&Q.current.stateNode!==r){var n=I(Q.current.type);ye[n]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(Q.current.type),e.ref),ye[n]=!0)}}function Lr(e,r){{var n=function(){Je||(Je=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function $r(e,r){{var n=function(){qe||(qe=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Yr=function(e,r,n,a,c,d,s){var u={$$typeof:o,type:e,key:r,ref:n,props:s,_owner:d};return u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function Nr(e,r,n,a,c){{var d,s={},u=null,R=null;n!==void 0&&(Ue(n),u=""+n),Ir(r)&&(Ue(r.key),u=""+r.key),Dr(r)&&(R=r.ref,Wr(r,c));for(d in r)H.call(r,d)&&!Fr.hasOwnProperty(d)&&(s[d]=r[d]);if(e&&e.defaultProps){var y=e.defaultProps;for(d in y)s[d]===void 0&&(s[d]=y[d])}if(u||R){var g=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&Lr(s,g),R&&$r(s,g)}return Yr(e,u,R,c,a,Q.current,s)}}var ge=D.ReactCurrentOwner,Be=D.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,n=oe(e.type,e._source,r?r.type:null);Be.setExtraStackFrame(n)}else Be.setExtraStackFrame(null)}var be;be=!1;function Ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function Ke(){{if(ge.current){var e=I(ge.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Mr(e){return""}var ze={};function Vr(e){{var r=Ke();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function Ge(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Vr(r);if(ze[n])return;ze[n]=!0;var a="";e&&e._owner&&e._owner!==ge.current&&(a=" It was passed a child from "+I(e._owner.type)+"."),q(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),q(null)}}function Xe(e,r){{if(typeof e!="object")return;if(me(e))for(var n=0;n<e.length;n++){var a=e[n];Ee(a)&&Ge(a,r)}else if(Ee(e))e._store&&(e._store.validated=!0);else if(e){var c=k(e);if(typeof c=="function"&&c!==e.entries)for(var d=c.call(e),s;!(s=d.next()).done;)Ee(s.value)&&Ge(s.value,r)}}}function Ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===f))n=r.propTypes;else return;if(n){var a=I(r);jr(n,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!be){be=!0;var c=I(r);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var a=r[n];if(a!=="children"&&a!=="key"){q(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),q(null);break}}e.ref!==null&&(q(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),q(null))}}var He={};function Qe(e,r,n,a,c,d){{var s=_r(e);if(!s){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=Mr();R?u+=R:u+=Ke();var y;e===null?y="null":me(e)?y="array":e!==void 0&&e.$$typeof===o?(y="<"+(I(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,u)}var g=Nr(e,r,n,c,d);if(g==null)return g;if(s){var O=r.children;if(O!==void 0)if(a)if(me(O)){for(var B=0;B<O.length;B++)Xe(O[B],e);Object.freeze&&Object.freeze(O)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xe(O,e)}if(H.call(r,"key")){var U=I(e),T=Object.keys(r).filter(function(Xr){return Xr!=="key"}),Re=T.length>0?"{key: someKey, "+T.join(": ..., ")+": ...}":"{key: someKey}";if(!He[U+Re]){var Gr=T.length>0?"{"+T.join(": ..., ")+": ...}":"{}";E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Re,U,Gr,U),He[U+Re]=!0}}return e===b?Jr(g):Ur(g),g}}function qr(e,r,n){return Qe(e,r,n,!0)}function Br(e,r,n){return Qe(e,r,n,!1)}var Kr=Br,zr=qr;G.Fragment=b,G.jsx=Kr,G.jsxs=zr}()),G}Ce.env.NODE_ENV==="production"?fe.exports=pr():fe.exports=vr();var de=fe.exports;const hr=sr(({label:t,type:o="text",name:i,newValue:b,onValueChange:C,placeholder:S})=>de.jsxs("div",{className:"mb-4",children:[de.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:i,children:t}),de.jsx("input",{type:o,name:i,id:i,value:b,onChange:C,placeholder:S,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),$,K,{props:["label","type","name","newValue","placeholder"],events:["value-changed"]});customElements.define("text-field",hr)});
