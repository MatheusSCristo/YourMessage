function jS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var $S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ky={exports:{}},cc={},qy={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),VS=Symbol.for("react.portal"),zS=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),WS=Symbol.for("react.profiler"),HS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),KS=Symbol.for("react.forward_ref"),qS=Symbol.for("react.suspense"),ZS=Symbol.for("react.memo"),YS=Symbol.for("react.lazy"),Fm=Symbol.iterator;function QS(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Zy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,Qy={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Qy,this.updater=n||Zy}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xy(){}Xy.prototype=Qs.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=Qy,this.updater=n||Zy}var Ph=Nh.prototype=new Xy;Ph.constructor=Nh;Yy(Ph,Qs.prototype);Ph.isPureReactComponent=!0;var Um=Array.isArray,Jy=Object.prototype.hasOwnProperty,Ah={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jy.call(e,r)&&!ev.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:La,type:t,key:s,ref:o,props:i,_owner:Ah.current}}function XS(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function JS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jm=/\/+/g;function td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JS(""+t.key):e.toString(36)}function Il(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case VS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+td(o,0):r,Um(i)?(n="",t!=null&&(n=t.replace(jm,"$&/")+"/"),Il(i,e,n,"",function(u){return u})):i!=null&&(Oh(i)&&(i=XS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Um(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+td(s,a);o+=Il(s,e,n,l,i)}else if(l=QS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+td(s,a++),o+=Il(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var r=[],i=0;return Il(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Rl={transition:null},tC={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Ah};we.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=Qs;we.Fragment=zS;we.Profiler=WS;we.PureComponent=Nh;we.StrictMode=BS;we.Suspense=qS;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jy.call(e,l)&&!ev.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:La,type:t.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(t){return t={$$typeof:GS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HS,_context:t},t.Consumer=t};we.createElement=tv;we.createFactory=function(t){var e=tv.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:KS,render:t}};we.isValidElement=Oh;we.lazy=function(t){return{$$typeof:YS,_payload:{_status:-1,_result:t},_init:eC}};we.memo=function(t,e){return{$$typeof:ZS,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};we.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};we.useCallback=function(t,e){return Mt.current.useCallback(t,e)};we.useContext=function(t){return Mt.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};we.useEffect=function(t,e){return Mt.current.useEffect(t,e)};we.useId=function(){return Mt.current.useId()};we.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return Mt.current.useMemo(t,e)};we.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};we.useRef=function(t){return Mt.current.useRef(t)};we.useState=function(t){return Mt.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return Mt.current.useTransition()};we.version="18.2.0";qy.exports=we;var A=qy.exports;const ct=Gy(A),nC=jS({__proto__:null,default:ct},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rC=A,iC=Symbol.for("react.element"),sC=Symbol.for("react.fragment"),oC=Object.prototype.hasOwnProperty,aC=rC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lC={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oC.call(e,r)&&!lC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iC,type:t,key:s,ref:o,props:i,_owner:aC.current}}cc.Fragment=sC;cc.jsx=nv;cc.jsxs=nv;Ky.exports=cc;var I=Ky.exports,ef={},rv={exports:{}},Xt={},iv={exports:{}},sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var J=D.length;D.push(X);e:for(;0<J;){var _e=J-1>>>1,N=D[_e];if(0<i(N,X))D[_e]=X,D[J]=N,J=_e;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var X=D[0],J=D.pop();if(J!==X){D[0]=J;e:for(var _e=0,N=D.length,G=N>>>1;_e<G;){var oe=2*(_e+1)-1,ue=D[oe],ee=oe+1,S=D[ee];if(0>i(ue,J))ee<N&&0>i(S,ue)?(D[_e]=S,D[ee]=J,_e=ee):(D[_e]=ue,D[oe]=J,_e=oe);else if(ee<N&&0>i(S,J))D[_e]=S,D[ee]=J,_e=ee;else break e}}return X}function i(D,X){var J=D.sortIndex-X.sortIndex;return J!==0?J:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,p=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=D)r(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function v(D){if(y=!1,m(D),!p)if(n(l)!==null)p=!0,Ne(E);else{var X=n(u);X!==null&&je(v,X.startTime-D)}}function E(D,X){p=!1,y&&(y=!1,_(P),P=-1),g=!0;var J=f;try{for(m(X),d=n(l);d!==null&&(!(d.expirationTime>X)||D&&!le());){var _e=d.callback;if(typeof _e=="function"){d.callback=null,f=d.priorityLevel;var N=_e(d.expirationTime<=X);X=t.unstable_now(),typeof N=="function"?d.callback=N:d===n(l)&&r(l),m(X)}else r(l);d=n(l)}if(d!==null)var G=!0;else{var oe=n(u);oe!==null&&je(v,oe.startTime-X),G=!1}return G}finally{d=null,f=J,g=!1}}var T=!1,C=null,P=-1,z=5,$=-1;function le(){return!(t.unstable_now()-$<z)}function q(){if(C!==null){var D=t.unstable_now();$=D;var X=!0;try{X=C(!0,D)}finally{X?re():(T=!1,C=null)}}else T=!1}var re;if(typeof h=="function")re=function(){h(q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Te=fe.port2;fe.port1.onmessage=q,re=function(){Te.postMessage(null)}}else re=function(){k(q,0)};function Ne(D){C=D,T||(T=!0,re())}function je(D,X){P=k(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){p||g||(p=!0,Ne(E))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var J=f;f=X;try{return D()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=f;f=D;try{return X()}finally{f=J}},t.unstable_scheduleCallback=function(D,X,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,D){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=J+N,D={id:c++,callback:X,priorityLevel:D,startTime:J,expirationTime:N,sortIndex:-1},J>_e?(D.sortIndex=J,e(u,D),n(l)===null&&D===n(u)&&(y?(_(P),P=-1):y=!0,je(v,J-_e))):(D.sortIndex=N,e(l,D),p||g||(p=!0,Ne(E))),D},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(D){var X=f;return function(){var J=f;f=X;try{return D.apply(this,arguments)}finally{f=J}}}})(sv);iv.exports=sv;var uC=iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=A,Qt=uC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var av=new Set,Ko={};function Wi(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Ko[t]=e,t=0;t<e.length;t++)av.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,cC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Vm={};function dC(t){return tf.call(Vm,t)?!0:tf.call($m,t)?!1:cC.test(t)?Vm[t]=!0:($m[t]=!0,!1)}function fC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hC(t,e,n,r){if(e===null||typeof e>"u"||fC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Mh);Et[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Mh);Et[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Mh);Et[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hC(e,n,i,r)&&(n=null),r||i===null?dC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),rs=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),zm=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,nd;function Co(t){if(nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nd=e&&e[1]||""}return`
`+nd+t}var rd=!1;function id(t,e){if(!t||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function pC(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=id(t.type,!1),t;case 11:return t=id(t.type.render,!1),t;case 1:return t=id(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case rs:return"Portal";case nf:return"Profiler";case Fh:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case lv:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function mC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gC(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=gC(t))}function fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function lf(t,e){hv(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(ko(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function pv(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_C=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){_C.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yC=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(yC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,ws=null,Es=null;function Km(t){if(t=ja(t)){if(typeof mf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=mc(e),mf(t.stateNode,t.type,e))}}function vv(t){ws?Es?Es.push(t):Es=[t]:ws=t}function wv(){if(ws){var t=ws,e=Es;if(Es=ws=null,Km(t),e)for(t=0;t<e.length;t++)Km(e[t])}}function Ev(t,e){return t(e)}function Sv(){}var sd=!1;function Cv(t,e,n){if(sd)return t(e,n);sd=!0;try{return Ev(t,e,n)}finally{sd=!1,(ws!==null||Es!==null)&&(Sv(),wv())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var r=mc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var gf=!1;if(ar)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){gf=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{gf=!1}function vC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Po=!1,eu=null,tu=!1,_f=null,wC={onError:function(t){Po=!0,eu=t}};function EC(t,e,n,r,i,s,o,a,l){Po=!1,eu=null,vC.apply(wC,arguments)}function SC(t,e,n,r,i,s,o,a,l){if(EC.apply(this,arguments),Po){if(Po){var u=eu;Po=!1,eu=null}else throw Error(O(198));tu||(tu=!0,_f=u)}}function Hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(Hi(t)!==t)throw Error(O(188))}function CC(t){var e=t.alternate;if(!e){if(e=Hi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function Tv(t){return t=CC(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Iv=Qt.unstable_scheduleCallback,Zm=Qt.unstable_cancelCallback,kC=Qt.unstable_shouldYield,TC=Qt.unstable_requestPaint,Qe=Qt.unstable_now,xC=Qt.unstable_getCurrentPriorityLevel,Vh=Qt.unstable_ImmediatePriority,Rv=Qt.unstable_UserBlockingPriority,nu=Qt.unstable_NormalPriority,IC=Qt.unstable_LowPriority,bv=Qt.unstable_IdlePriority,dc=null,Fn=null;function RC(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:PC,bC=Math.log,NC=Math.LN2;function PC(t){return t>>>=0,t===0?32:31-(bC(t)/NC|0)|0}var ol=64,al=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=To(a):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function AC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nv(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function DC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function Pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Av,Bh,Ov,Dv,Mv,vf=!1,ll=[],Dr=null,Mr=null,Lr=null,Yo=new Map,Qo=new Map,Sr=[],MC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ja(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LC(t,e,n,r,i){switch(e){case"focusin":return Dr=co(Dr,t,e,n,r,i),!0;case"dragenter":return Mr=co(Mr,t,e,n,r,i),!0;case"mouseover":return Lr=co(Lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yo.set(s,co(Yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qo.set(s,co(Qo.get(s)||null,t,e,n,r,i)),!0}return!1}function Lv(t){var e=di(t.target);if(e!==null){var n=Hi(e);if(n!==null){if(e=n.tag,e===13){if(e=kv(n),e!==null){t.blockedOn=e,Mv(t.priority,function(){Ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pf=r,n.target.dispatchEvent(r),pf=null}else return e=ja(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){bl(t)&&n.delete(e)}function FC(){vf=!1,Dr!==null&&bl(Dr)&&(Dr=null),Mr!==null&&bl(Mr)&&(Mr=null),Lr!==null&&bl(Lr)&&(Lr=null),Yo.forEach(Qm),Qo.forEach(Qm)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,FC)))}function Xo(t){function e(i){return fo(i,t)}if(0<ll.length){fo(ll[0],t);for(var n=1;n<ll.length;n++){var r=ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&fo(Dr,t),Mr!==null&&fo(Mr,t),Lr!==null&&fo(Lr,t),Yo.forEach(e),Qo.forEach(e),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&Sr.shift()}var Ss=pr.ReactCurrentBatchConfig,iu=!0;function UC(t,e,n,r){var i=xe,s=Ss.transition;Ss.transition=null;try{xe=1,Wh(t,e,n,r)}finally{xe=i,Ss.transition=s}}function jC(t,e,n,r){var i=xe,s=Ss.transition;Ss.transition=null;try{xe=4,Wh(t,e,n,r)}finally{xe=i,Ss.transition=s}}function Wh(t,e,n,r){if(iu){var i=wf(t,e,n,r);if(i===null)gd(t,e,r,su,n),Ym(t,r);else if(LC(i,t,e,n,r))r.stopPropagation();else if(Ym(t,r),e&4&&-1<MC.indexOf(t)){for(;i!==null;){var s=ja(i);if(s!==null&&Av(s),s=wf(t,e,n,r),s===null&&gd(t,e,r,su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gd(t,e,r,null,n)}}var su=null;function wf(t,e,n,r){if(su=null,t=$h(r),t=di(t),t!==null)if(e=Hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function Fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xC()){case Vh:return 1;case Rv:return 4;case nu:case IC:return 16;case bv:return 536870912;default:return 16}default:return 16}}var Nr=null,Hh=null,Nl=null;function Uv(){if(Nl)return Nl;var t,e=Hh,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Xm(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Xm,this.isPropagationStopped=Xm,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gh=Jt(Xs),Ua=We({},Xs,{view:0,detail:0}),$C=Jt(Ua),ad,ld,ho,fc=We({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(ad=t.screenX-ho.screenX,ld=t.screenY-ho.screenY):ld=ad=0,ho=t),ad)},movementY:function(t){return"movementY"in t?t.movementY:ld}}),Jm=Jt(fc),VC=We({},fc,{dataTransfer:0}),zC=Jt(VC),BC=We({},Ua,{relatedTarget:0}),ud=Jt(BC),WC=We({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),HC=Jt(WC),GC=We({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KC=Jt(GC),qC=We({},Xs,{data:0}),eg=Jt(qC),ZC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QC[t])?!!e[t]:!1}function Kh(){return XC}var JC=We({},Ua,{key:function(t){if(t.key){var e=ZC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kh,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ek=Jt(JC),tk=We({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=Jt(tk),nk=We({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kh}),rk=Jt(nk),ik=We({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sk=Jt(ik),ok=We({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ak=Jt(ok),lk=[9,13,27,32],qh=ar&&"CompositionEvent"in window,Ao=null;ar&&"documentMode"in document&&(Ao=document.documentMode);var uk=ar&&"TextEvent"in window&&!Ao,jv=ar&&(!qh||Ao&&8<Ao&&11>=Ao),ng=" ",rg=!1;function $v(t,e){switch(t){case"keyup":return lk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function ck(t,e){switch(t){case"compositionend":return Vv(e);case"keypress":return e.which!==32?null:(rg=!0,ng);case"textInput":return t=e.data,t===ng&&rg?null:t;default:return null}}function dk(t,e){if(ss)return t==="compositionend"||!qh&&$v(t,e)?(t=Uv(),Nl=Hh=Nr=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jv&&e.locale!=="ko"?null:e.data;default:return null}}var fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fk[t.type]:e==="textarea"}function zv(t,e,n,r){vv(r),e=ou(e,"onChange"),0<e.length&&(n=new Gh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oo=null,Jo=null;function hk(t){Jv(t,0)}function hc(t){var e=ls(t);if(fv(e))return t}function pk(t,e){if(t==="change")return e}var Bv=!1;if(ar){var cd;if(ar){var dd="oninput"in document;if(!dd){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),dd=typeof sg.oninput=="function"}cd=dd}else cd=!1;Bv=cd&&(!document.documentMode||9<document.documentMode)}function og(){Oo&&(Oo.detachEvent("onpropertychange",Wv),Jo=Oo=null)}function Wv(t){if(t.propertyName==="value"&&hc(Jo)){var e=[];zv(e,Jo,t,$h(t)),Cv(hk,e)}}function mk(t,e,n){t==="focusin"?(og(),Oo=e,Jo=n,Oo.attachEvent("onpropertychange",Wv)):t==="focusout"&&og()}function gk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(Jo)}function _k(t,e){if(t==="click")return hc(e)}function yk(t,e){if(t==="input"||t==="change")return hc(e)}function vk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:vk;function ea(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tf.call(e,i)||!xn(t[i],e[i]))return!1}return!0}function ag(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,e){var n=ag(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ag(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wk(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lg(n,s);var o=lg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ek=ar&&"documentMode"in document&&11>=document.documentMode,os=null,Ef=null,Do=null,Sf=!1;function ug(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||os==null||os!==Jl(r)||(r=os,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&ea(Do,r)||(Do=r,r=ou(Ef,"onSelect"),0<r.length&&(e=new Gh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=os)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},fd={},Kv={};ar&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function pc(t){if(fd[t])return fd[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kv)return fd[t]=e[n];return t}var qv=pc("animationend"),Zv=pc("animationiteration"),Yv=pc("animationstart"),Qv=pc("transitionend"),Xv=new Map,cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){Xv.set(t,e),Wi(e,[t])}for(var hd=0;hd<cg.length;hd++){var pd=cg[hd],Sk=pd.toLowerCase(),Ck=pd[0].toUpperCase()+pd.slice(1);ni(Sk,"on"+Ck)}ni(qv,"onAnimationEnd");ni(Zv,"onAnimationIteration");ni(Yv,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(Qv,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function dg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SC(r,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;dg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;dg(i,a,u),s=l}}}if(tu)throw t=_f,tu=!1,_f=null,t}function Me(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(e0(e,t,2,!1),n.add(r))}function md(t,e,n){var r=0;e&&(r|=4),e0(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[dl]){t[dl]=!0,av.forEach(function(n){n!=="selectionchange"&&(kk.has(n)||md(n,!1,t),md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,md("selectionchange",!1,e))}}function e0(t,e,n,r){switch(Fv(e)){case 1:var i=UC;break;case 4:i=jC;break;default:i=Wh}n=i.bind(null,e,n,t),i=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=di(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cv(function(){var u=s,c=$h(n),d=[];e:{var f=Xv.get(t);if(f!==void 0){var g=Gh,p=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":g=ek;break;case"focusin":p="focus",g=ud;break;case"focusout":p="blur",g=ud;break;case"beforeblur":case"afterblur":g=ud;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=zC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rk;break;case qv:case Zv:case Yv:g=HC;break;case Qv:g=sk;break;case"scroll":g=$C;break;case"wheel":g=ak;break;case"copy":case"cut":case"paste":g=KC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tg}var y=(e&4)!==0,k=!y&&t==="scroll",_=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,_!==null&&(v=Zo(h,_),v!=null&&y.push(na(h,v,m)))),k)break;h=h.return}0<y.length&&(f=new g(f,p,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==pf&&(p=n.relatedTarget||n.fromElement)&&(di(p)||p[lr]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(p=n.relatedTarget||n.toElement,g=u,p=p?di(p):null,p!==null&&(k=Hi(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(g=null,p=u),g!==p)){if(y=Jm,v="onMouseLeave",_="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=tg,v="onPointerLeave",_="onPointerEnter",h="pointer"),k=g==null?f:ls(g),m=p==null?f:ls(p),f=new y(v,h+"leave",g,n,c),f.target=k,f.relatedTarget=m,v=null,di(c)===u&&(y=new y(_,h+"enter",p,n,c),y.target=m,y.relatedTarget=k,v=y),k=v,g&&p)t:{for(y=g,_=p,h=0,m=y;m;m=Qi(m))h++;for(m=0,v=_;v;v=Qi(v))m++;for(;0<h-m;)y=Qi(y),h--;for(;0<m-h;)_=Qi(_),m--;for(;h--;){if(y===_||_!==null&&y===_.alternate)break t;y=Qi(y),_=Qi(_)}y=null}else y=null;g!==null&&fg(d,f,g,y,!1),p!==null&&k!==null&&fg(d,k,p,y,!0)}}e:{if(f=u?ls(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=pk;else if(ig(f))if(Bv)E=yk;else{E=gk;var T=mk}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=_k);if(E&&(E=E(t,u))){zv(d,E,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&uf(f,"number",f.value)}switch(T=u?ls(u):window,t){case"focusin":(ig(T)||T.contentEditable==="true")&&(os=T,Ef=u,Do=null);break;case"focusout":Do=Ef=os=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,ug(d,n,c);break;case"selectionchange":if(Ek)break;case"keydown":case"keyup":ug(d,n,c)}var C;if(qh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ss?$v(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jv&&n.locale!=="ko"&&(ss||P!=="onCompositionStart"?P==="onCompositionEnd"&&ss&&(C=Uv()):(Nr=c,Hh="value"in Nr?Nr.value:Nr.textContent,ss=!0)),T=ou(u,P),0<T.length&&(P=new eg(P,t,null,n,c),d.push({event:P,listeners:T}),C?P.data=C:(C=Vv(n),C!==null&&(P.data=C)))),(C=uk?ck(t,n):dk(t,n))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new eg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Jv(d,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zo(t,n),s!=null&&r.unshift(na(t,s,i)),s=Zo(t,e),s!=null&&r.push(na(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zo(n,s),l!=null&&o.unshift(na(n,l,a))):i||(l=Zo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Tk=/\r\n?/g,xk=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(Tk,`
`).replace(xk,"")}function fl(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(O(425))}function au(){}var Cf=null,kf=null;function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,Ik=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,Rk=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(bk)}:xf;function bk(t){setTimeout(function(){throw t})}function _d(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xo(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Js,ra="__reactProps$"+Js,lr="__reactContainer$"+Js,If="__reactEvents$"+Js,Nk="__reactListeners$"+Js,Pk="__reactHandles$"+Js;function di(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mg(t);t!==null;){if(n=t[Dn])return n;t=mg(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[Dn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function mc(t){return t[ra]||null}var Rf=[],us=-1;function ri(t){return{current:t}}function Ue(t){0>us||(t.current=Rf[us],Rf[us]=null,us--)}function De(t,e){us++,Rf[us]=t.current,t.current=e}var qr={},xt=ri(qr),Vt=ri(!1),Ri=qr;function As(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function lu(){Ue(Vt),Ue(xt)}function gg(t,e,n){if(xt.current!==qr)throw Error(O(168));De(xt,e),De(Vt,n)}function t0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,mC(t)||"Unknown",i));return We({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Ri=xt.current,De(xt,t),De(Vt,Vt.current),!0}function _g(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=t0(t,e,Ri),r.__reactInternalMemoizedMergedChildContext=t,Ue(Vt),Ue(xt),De(xt,t)):Ue(Vt),De(Vt,n)}var Qn=null,gc=!1,yd=!1;function n0(t){Qn===null?Qn=[t]:Qn.push(t)}function Ak(t){gc=!0,n0(t)}function ii(){if(!yd&&Qn!==null){yd=!0;var t=0,e=xe;try{var n=Qn;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,gc=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),Iv(Vh,ii),i}finally{xe=e,yd=!1}}return null}var cs=[],ds=0,cu=null,du=0,rn=[],sn=0,bi=null,Jn=1,er="";function ai(t,e){cs[ds++]=du,cs[ds++]=cu,cu=t,du=e}function r0(t,e,n){rn[sn++]=Jn,rn[sn++]=er,rn[sn++]=bi,bi=t;var r=Jn;t=er;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-wn(e)+i|n<<i|r,er=s+t}else Jn=1<<s|n<<i|r,er=t}function Yh(t){t.return!==null&&(ai(t,1),r0(t,1,0))}function Qh(t){for(;t===cu;)cu=cs[--ds],cs[ds]=null,du=cs[--ds],cs[ds]=null;for(;t===bi;)bi=rn[--sn],rn[sn]=null,er=rn[--sn],rn[sn]=null,Jn=rn[--sn],rn[sn]=null}var Yt=null,qt=null,$e=!1,pn=null;function i0(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,qt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bi!==null?{id:Jn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,qt=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nf(t){if($e){var e=qt;if(e){var n=e;if(!yg(t,e)){if(bf(t))throw Error(O(418));e=Fr(n.nextSibling);var r=Yt;e&&yg(t,e)?i0(r,n):(t.flags=t.flags&-4097|2,$e=!1,Yt=t)}}else{if(bf(t))throw Error(O(418));t.flags=t.flags&-4097|2,$e=!1,Yt=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function hl(t){if(t!==Yt)return!1;if(!$e)return vg(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tf(t.type,t.memoizedProps)),e&&(e=qt)){if(bf(t))throw s0(),Error(O(418));for(;e;)i0(t,e),e=Fr(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Yt?Fr(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=qt;t;)t=Fr(t.nextSibling)}function Os(){qt=Yt=null,$e=!1}function Xh(t){pn===null?pn=[t]:pn.push(t)}var Ok=pr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fu=ri(null),hu=null,fs=null,Jh=null;function ep(){Jh=fs=hu=null}function tp(t){var e=fu.current;Ue(fu),t._currentValue=e}function Pf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){hu=t,Jh=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(hu===null)throw Error(O(308));fs=t,hu.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var fi=null;function np(t){fi===null?fi=[t]:fi.push(t)}function o0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,np(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,np(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}function wg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(f=e,g=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(g,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(g,d,f):p,f==null)break e;d=We({},d,f);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=d}}function Eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var l0=new ov.Component().refs;function Af(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?Hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=$r(t),s=ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(En(e,t,i,r),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=$r(t),s=ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(En(e,t,i,r),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=$r(t),i=ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(En(e,t,r,n),Al(e,t,r))}};function Sg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,r)||!ea(i,s):!0}function u0(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=zt(e)?Ri:xt.current,r=e.contextTypes,s=(r=r!=null)?As(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=l0,rp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=zt(e)?Ri:xt.current,i.context=As(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Af(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===l0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kg(t){var e=t._init;return e(t._payload)}function c0(t){function e(_,h){if(t){var m=_.deletions;m===null?(_.deletions=[h],_.flags|=16):m.push(h)}}function n(_,h){if(!t)return null;for(;h!==null;)e(_,h),h=h.sibling;return null}function r(_,h){for(_=new Map;h!==null;)h.key!==null?_.set(h.key,h):_.set(h.index,h),h=h.sibling;return _}function i(_,h){return _=Vr(_,h),_.index=0,_.sibling=null,_}function s(_,h,m){return _.index=m,t?(m=_.alternate,m!==null?(m=m.index,m<h?(_.flags|=2,h):m):(_.flags|=2,h)):(_.flags|=1048576,h)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,h,m,v){return h===null||h.tag!==6?(h=Td(m,_.mode,v),h.return=_,h):(h=i(h,m),h.return=_,h)}function l(_,h,m,v){var E=m.type;return E===is?c(_,h,m.props.children,v,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===wr&&kg(E)===h.type)?(v=i(h,m.props),v.ref=po(_,h,m),v.return=_,v):(v=Ul(m.type,m.key,m.props,null,_.mode,v),v.ref=po(_,h,m),v.return=_,v)}function u(_,h,m,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=xd(m,_.mode,v),h.return=_,h):(h=i(h,m.children||[]),h.return=_,h)}function c(_,h,m,v,E){return h===null||h.tag!==7?(h=vi(m,_.mode,v,E),h.return=_,h):(h=i(h,m),h.return=_,h)}function d(_,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Td(""+h,_.mode,m),h.return=_,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rl:return m=Ul(h.type,h.key,h.props,null,_.mode,m),m.ref=po(_,null,h),m.return=_,m;case rs:return h=xd(h,_.mode,m),h.return=_,h;case wr:var v=h._init;return d(_,v(h._payload),m)}if(ko(h)||lo(h))return h=vi(h,_.mode,m,null),h.return=_,h;pl(_,h)}return null}function f(_,h,m,v){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(_,h,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case rl:return m.key===E?l(_,h,m,v):null;case rs:return m.key===E?u(_,h,m,v):null;case wr:return E=m._init,f(_,h,E(m._payload),v)}if(ko(m)||lo(m))return E!==null?null:c(_,h,m,v,null);pl(_,m)}return null}function g(_,h,m,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return _=_.get(m)||null,a(h,_,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rl:return _=_.get(v.key===null?m:v.key)||null,l(h,_,v,E);case rs:return _=_.get(v.key===null?m:v.key)||null,u(h,_,v,E);case wr:var T=v._init;return g(_,h,m,T(v._payload),E)}if(ko(v)||lo(v))return _=_.get(m)||null,c(h,_,v,E,null);pl(h,v)}return null}function p(_,h,m,v){for(var E=null,T=null,C=h,P=h=0,z=null;C!==null&&P<m.length;P++){C.index>P?(z=C,C=null):z=C.sibling;var $=f(_,C,m[P],v);if($===null){C===null&&(C=z);break}t&&C&&$.alternate===null&&e(_,C),h=s($,h,P),T===null?E=$:T.sibling=$,T=$,C=z}if(P===m.length)return n(_,C),$e&&ai(_,P),E;if(C===null){for(;P<m.length;P++)C=d(_,m[P],v),C!==null&&(h=s(C,h,P),T===null?E=C:T.sibling=C,T=C);return $e&&ai(_,P),E}for(C=r(_,C);P<m.length;P++)z=g(C,_,P,m[P],v),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?P:z.key),h=s(z,h,P),T===null?E=z:T.sibling=z,T=z);return t&&C.forEach(function(le){return e(_,le)}),$e&&ai(_,P),E}function y(_,h,m,v){var E=lo(m);if(typeof E!="function")throw Error(O(150));if(m=E.call(m),m==null)throw Error(O(151));for(var T=E=null,C=h,P=h=0,z=null,$=m.next();C!==null&&!$.done;P++,$=m.next()){C.index>P?(z=C,C=null):z=C.sibling;var le=f(_,C,$.value,v);if(le===null){C===null&&(C=z);break}t&&C&&le.alternate===null&&e(_,C),h=s(le,h,P),T===null?E=le:T.sibling=le,T=le,C=z}if($.done)return n(_,C),$e&&ai(_,P),E;if(C===null){for(;!$.done;P++,$=m.next())$=d(_,$.value,v),$!==null&&(h=s($,h,P),T===null?E=$:T.sibling=$,T=$);return $e&&ai(_,P),E}for(C=r(_,C);!$.done;P++,$=m.next())$=g(C,_,P,$.value,v),$!==null&&(t&&$.alternate!==null&&C.delete($.key===null?P:$.key),h=s($,h,P),T===null?E=$:T.sibling=$,T=$);return t&&C.forEach(function(q){return e(_,q)}),$e&&ai(_,P),E}function k(_,h,m,v){if(typeof m=="object"&&m!==null&&m.type===is&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case rl:e:{for(var E=m.key,T=h;T!==null;){if(T.key===E){if(E=m.type,E===is){if(T.tag===7){n(_,T.sibling),h=i(T,m.props.children),h.return=_,_=h;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===wr&&kg(E)===T.type){n(_,T.sibling),h=i(T,m.props),h.ref=po(_,T,m),h.return=_,_=h;break e}n(_,T);break}else e(_,T);T=T.sibling}m.type===is?(h=vi(m.props.children,_.mode,v,m.key),h.return=_,_=h):(v=Ul(m.type,m.key,m.props,null,_.mode,v),v.ref=po(_,h,m),v.return=_,_=v)}return o(_);case rs:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(_,h.sibling),h=i(h,m.children||[]),h.return=_,_=h;break e}else{n(_,h);break}else e(_,h);h=h.sibling}h=xd(m,_.mode,v),h.return=_,_=h}return o(_);case wr:return T=m._init,k(_,h,T(m._payload),v)}if(ko(m))return p(_,h,m,v);if(lo(m))return y(_,h,m,v);pl(_,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(_,h.sibling),h=i(h,m),h.return=_,_=h):(n(_,h),h=Td(m,_.mode,v),h.return=_,_=h),o(_)):n(_,h)}return k}var Ds=c0(!0),d0=c0(!1),$a={},Un=ri($a),ia=ri($a),sa=ri($a);function hi(t){if(t===$a)throw Error(O(174));return t}function ip(t,e){switch(De(sa,e),De(ia,t),De(Un,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}Ue(Un),De(Un,e)}function Ms(){Ue(Un),Ue(ia),Ue(sa)}function f0(t){hi(sa.current);var e=hi(Un.current),n=df(e,t.type);e!==n&&(De(ia,t),De(Un,n))}function sp(t){ia.current===t&&(Ue(Un),Ue(ia))}var ze=ri(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function op(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var Ol=pr.ReactCurrentDispatcher,wd=pr.ReactCurrentBatchConfig,Ni=0,Be=null,tt=null,dt=null,gu=!1,Mo=!1,oa=0,Dk=0;function St(){throw Error(O(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function lp(t,e,n,r,i,s){if(Ni=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?Uk:jk,t=n(r,i),Mo){s=0;do{if(Mo=!1,oa=0,25<=s)throw Error(O(301));s+=1,dt=tt=null,e.updateQueue=null,Ol.current=$k,t=n(r,i)}while(Mo)}if(Ol.current=_u,e=tt!==null&&tt.next!==null,Ni=0,dt=tt=Be=null,gu=!1,e)throw Error(O(300));return t}function up(){var t=oa!==0;return oa=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Be.memoizedState=dt=t:dt=dt.next=t,dt}function un(){if(tt===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=dt===null?Be.memoizedState:dt.next;if(e!==null)dt=e,tt=t;else{if(t===null)throw Error(O(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},dt===null?Be.memoizedState=dt=t:dt=dt.next=t}return dt}function aa(t,e){return typeof e=="function"?e(t):e}function Ed(t){var e=un(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ni&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Be.lanes|=c,Pi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,xn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sd(t){var e=un(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function h0(){}function p0(t,e){var n=Be,r=un(),i=e(),s=!xn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,cp(_0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,la(9,g0.bind(null,n,r,i,e),void 0,null),_t===null)throw Error(O(349));Ni&30||m0(n,e,i)}return i}function m0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g0(t,e,n,r){e.value=n,e.getSnapshot=r,y0(e)&&v0(t)}function _0(t,e,n){return n(function(){y0(e)&&v0(t)})}function y0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function v0(t){var e=ur(t,1);e!==null&&En(e,t,1,-1)}function Tg(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=Fk.bind(null,Be,t),[e.memoizedState,t]}function la(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w0(){return un().memoizedState}function Dl(t,e,n,r){var i=Pn();Be.flags|=t,i.memoizedState=la(1|e,n,void 0,r===void 0?null:r)}function yc(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=la(e,n,s,r);return}}Be.flags|=t,i.memoizedState=la(1|e,n,s,r)}function xg(t,e){return Dl(8390656,8,t,e)}function cp(t,e){return yc(2048,8,t,e)}function E0(t,e){return yc(4,2,t,e)}function S0(t,e){return yc(4,4,t,e)}function C0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k0(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,C0.bind(null,e,t),n)}function dp(){}function T0(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x0(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I0(t,e,n){return Ni&21?(xn(n,e)||(n=Nv(),Be.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function Mk(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=wd.transition;wd.transition={};try{t(!1),e()}finally{xe=n,wd.transition=r}}function R0(){return un().memoizedState}function Lk(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))N0(e,n);else if(n=o0(t,e,n,r),n!==null){var i=Ot();En(n,t,r,i),P0(n,e,r)}}function Fk(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))N0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,o)){var l=e.interleaved;l===null?(i.next=i,np(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o0(t,e,i,r),n!==null&&(i=Ot(),En(n,t,r,i),P0(n,e,r))}}function b0(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function N0(t,e){Mo=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}var _u={readContext:ln,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},Uk={readContext:ln,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:xg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,C0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Lk.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:dp,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=Mk.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=Pn();if($e){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),_t===null)throw Error(O(349));Ni&30||m0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xg(_0.bind(null,r,s,t),[t]),r.flags|=2048,la(9,g0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=_t.identifierPrefix;if($e){var n=er,r=Jn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jk={readContext:ln,useCallback:T0,useContext:ln,useEffect:cp,useImperativeHandle:k0,useInsertionEffect:E0,useLayoutEffect:S0,useMemo:x0,useReducer:Ed,useRef:w0,useState:function(){return Ed(aa)},useDebugValue:dp,useDeferredValue:function(t){var e=un();return I0(e,tt.memoizedState,t)},useTransition:function(){var t=Ed(aa)[0],e=un().memoizedState;return[t,e]},useMutableSource:h0,useSyncExternalStore:p0,useId:R0,unstable_isNewReconciler:!1},$k={readContext:ln,useCallback:T0,useContext:ln,useEffect:cp,useImperativeHandle:k0,useInsertionEffect:E0,useLayoutEffect:S0,useMemo:x0,useReducer:Sd,useRef:w0,useState:function(){return Sd(aa)},useDebugValue:dp,useDeferredValue:function(t){var e=un();return tt===null?e.memoizedState=t:I0(e,tt.memoizedState,t)},useTransition:function(){var t=Sd(aa)[0],e=un().memoizedState;return[t,e]},useMutableSource:h0,useSyncExternalStore:p0,useId:R0,unstable_isNewReconciler:!1};function Ls(t,e){try{var n="",r=e;do n+=pC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vk=typeof WeakMap=="function"?WeakMap:Map;function A0(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vu||(vu=!0,Wf=r),Df(t,e)},n}function O0(t,e,n){n=ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Vk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tT.bind(null,t,e,n),e.then(t,t))}function Rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var zk=pr.ReactCurrentOwner,Ut=!1;function Nt(t,e,n,r){e.child=t===null?d0(e,null,n,r):Ds(e,t.child,n,r)}function Ng(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=lp(t,e,n,r,s,i),n=up(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):($e&&n&&Yh(e),e.flags|=1,Nt(t,e,r,i),e.child)}function Pg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,r,i)):(t=Ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=Vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ea(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Mf(t,e,n,r,i)}function M0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(ps,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(ps,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(ps,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(ps,Kt),Kt|=r;return Nt(t,e,i,n),e.child}function L0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,i){var s=zt(n)?Ri:xt.current;return s=As(e,s),Cs(e,i),n=lp(t,e,n,r,s,i),r=up(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):($e&&r&&Yh(e),e.flags|=1,Nt(t,e,n,i),e.child)}function Ag(t,e,n,r,i){if(zt(n)){var s=!0;uu(e)}else s=!1;if(Cs(e,i),e.stateNode===null)Ml(t,e),u0(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=zt(n)?Ri:xt.current,u=As(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cg(e,o,r,u),Er=!1;var f=e.memoizedState;o.state=f,pu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Vt.current||Er?(typeof c=="function"&&(Af(e,n,c,r),l=e.memoizedState),(a=Er||Sg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=zt(n)?Ri:xt.current,l=As(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Cg(e,o,r,l),Er=!1,f=e.memoizedState,o.state=f,pu(e,r,o,i);var p=e.memoizedState;a!==d||f!==p||Vt.current||Er?(typeof g=="function"&&(Af(e,n,g,r),p=e.memoizedState),(u=Er||Sg(e,n,u,r,f,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Lf(t,e,n,r,s,i)}function Lf(t,e,n,r,i,s){L0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_g(e,n,!1),cr(t,e,s);r=e.stateNode,zk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&_g(e,n,!0),e.child}function F0(t){var e=t.stateNode;e.pendingContext?gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gg(t,e.context,!1),ip(t,e.containerInfo)}function Og(t,e,n,r,i){return Os(),Xh(i),e.flags|=256,Nt(t,e,n,r),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function U0(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(ze,i&1),t===null)return Nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=Ff,t):fp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Bk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vr(a,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,r}return s=t.child,t=s.sibling,r=Vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fp(t,e){return e=Ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,r){return r!==null&&Xh(r),Ds(e,t.child,null,n),t=fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cd(Error(O(422))),ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ec({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=Ff,s);if(!(e.mode&1))return ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Cd(s,r,void 0),ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=_t,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),En(r,t,i,-1))}return yp(),r=Cd(Error(O(421))),ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=Fr(i.nextSibling),Yt=e,$e=!0,pn=null,t!==null&&(rn[sn++]=Jn,rn[sn++]=er,rn[sn++]=bi,Jn=t.id,er=t.overflow,bi=e),e=fp(e,r.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pf(t.return,e,n)}function kd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kd(e,!0,n,null,s);break;case"together":kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wk(t,e,n){switch(e.tag){case 3:F0(e),Os();break;case 5:f0(e);break;case 1:zt(e.type)&&uu(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?U0(t,e,n):(De(ze,ze.current&1),t=cr(t,e,n),t!==null?t.sibling:null);De(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,M0(t,e,n)}return cr(t,e,n)}var $0,jf,V0,z0;$0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};V0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hi(Un.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=cf(t,i),r=cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}ff(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};z0=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hk(t,e,n){var r=e.pendingProps;switch(Qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return zt(e.type)&&lu(),Ct(e),null;case 3:return r=e.stateNode,Ms(),Ue(Vt),Ue(xt),op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(Kf(pn),pn=null))),jf(t,e),Ct(e),null;case 5:sp(e);var i=hi(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return Ct(e),null}if(t=hi(Un.current),hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[ra]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)Me(xo[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Bm(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":Hm(r,s),Me("invalid",r)}ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":il(r),Wm(r,s,!0);break;case"textarea":il(r),Gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[ra]=r,$0(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<xo.length;i++)Me(xo[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":Bm(t,r),i=af(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Me("invalid",t);break;case"textarea":Hm(t,r),i=cf(t,r),Me("invalid",t);break;default:i=r}ff(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Me("scroll",t):l!=null&&Lh(t,s,l,o))}switch(n){case"input":il(t),Wm(t,r,!1);break;case"textarea":il(t),Gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vs(t,!!r.multiple,s,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=hi(sa.current),hi(Un.current),hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return Ct(e),null;case 13:if(Ue(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&qt!==null&&e.mode&1&&!(e.flags&128))s0(),Os(),e.flags|=98560,s=!1;else if(s=hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[Dn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else pn!==null&&(Kf(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?it===0&&(it=3):yp())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return Ms(),jf(t,e),t===null&&ta(e.stateNode.containerInfo),Ct(e),null;case 10:return tp(e.type._context),Ct(e),null;case 17:return zt(e.type)&&lu(),Ct(e),null;case 19:if(Ue(ze),s=e.memoizedState,s===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mo(s,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>Fs&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return Ct(e),null}else 2*Qe()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=ze.current,De(ze,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return _p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function Gk(t,e){switch(Qh(e),e.tag){case 1:return zt(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),Ue(Vt),Ue(xt),op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sp(e),null;case 13:if(Ue(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(ze),null;case 4:return Ms(),null;case 10:return tp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var gl=!1,kt=!1,Kk=typeof WeakSet=="function"?WeakSet:Set,Z=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function $f(t,e,n){try{n()}catch(r){He(t,e,r)}}var Mg=!1;function qk(t,e){if(Cf=iu,t=Gv(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kf={focusedElem:t,selectionRange:n},iu=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,k=p.memoizedState,_=e.stateNode,h=_.getSnapshotBeforeUpdate(e.elementType===e.type?y:fn(e.type,y),k);_.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(v){He(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return p=Mg,Mg=!1,p}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$f(e,n,s)}i=i.next}while(i!==r)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[ra],delete e[If],delete e[Nk],delete e[Pk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function Lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var vt=null,hn=!1;function _r(t,e,n){for(n=n.child;n!==null;)H0(t,e,n),n=n.sibling}function H0(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:kt||hs(n,e);case 6:var r=vt,i=hn;vt=null,_r(t,e,n),vt=r,hn=i,vt!==null&&(hn?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(hn?(t=vt,n=n.stateNode,t.nodeType===8?_d(t.parentNode,n):t.nodeType===1&&_d(t,n),Xo(t)):_d(vt,n.stateNode));break;case 4:r=vt,i=hn,vt=n.stateNode.containerInfo,hn=!0,_r(t,e,n),vt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!kt&&(hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,_r(t,e,n),kt=r):_r(t,e,n);break;default:_r(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kk),e.forEach(function(r){var i=rT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,hn=!1;break e;case 3:vt=a.stateNode.containerInfo,hn=!0;break e;case 4:vt=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(vt===null)throw Error(O(160));H0(s,o,i),vt=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){He(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G0(e,t),e=e.sibling}function G0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),Nn(t),r&4){try{Lo(3,t,t.return),vc(3,t)}catch(y){He(t,t.return,y)}try{Lo(5,t,t.return)}catch(y){He(t,t.return,y)}}break;case 1:dn(e,t),Nn(t),r&512&&n!==null&&hs(n,n.return);break;case 5:if(dn(e,t),Nn(t),r&512&&n!==null&&hs(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(y){He(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hv(i,s),hf(a,o);var u=hf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?yv(i,d):c==="dangerouslySetInnerHTML"?gv(i,d):c==="children"?qo(i,d):Lh(i,c,d,u)}switch(a){case"input":lf(i,s);break;case"textarea":pv(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vs(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?vs(i,!!s.multiple,s.defaultValue,!0):vs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ra]=s}catch(y){He(t,t.return,y)}}break;case 6:if(dn(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){He(t,t.return,y)}}break;case 3:if(dn(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(y){He(t,t.return,y)}break;case 4:dn(e,t),Nn(t);break;case 13:dn(e,t),Nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mp=Qe())),r&4&&Fg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(u=kt)||c,dn(e,t),kt=u):dn(e,t),Nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Z=t,c=t.child;c!==null;){for(d=Z=c;Z!==null;){switch(f=Z,g=f.child,f.tag){case 0:case 11:case 14:case 15:Lo(4,f,f.return);break;case 1:hs(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){He(r,n,y)}}break;case 5:hs(f,f.return);break;case 22:if(f.memoizedState!==null){jg(d);continue}}g!==null?(g.return=f,Z=g):jg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_v("display",o))}catch(y){He(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){He(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dn(e,t),Nn(t),r&4&&Fg(t);break;case 21:break;default:dn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=Lg(t);Bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lg(t);zf(t,a,o);break;default:throw Error(O(161))}}catch(l){He(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zk(t,e,n){Z=t,K0(t)}function K0(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||kt;a=gl;var u=kt;if(gl=o,(kt=l)&&!u)for(Z=i;Z!==null;)o=Z,l=o.child,o.tag===22&&o.memoizedState!==null?$g(i):l!==null?(l.return=o,Z=l):$g(i);for(;s!==null;)Z=s,K0(s),s=s.sibling;Z=i,gl=a,kt=u}Ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Z=s):Ug(t)}}function Ug(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||vc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Eg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}kt||e.flags&512&&Vf(e)}catch(f){He(e,e.return,f)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function jg(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function $g(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){He(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){He(e,i,l)}}var s=e.return;try{Vf(e)}catch(l){He(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){He(e,o,l)}}}catch(l){He(e,e.return,l)}if(e===t){Z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Z=a;break}Z=e.return}}var Yk=Math.ceil,yu=pr.ReactCurrentDispatcher,hp=pr.ReactCurrentOwner,an=pr.ReactCurrentBatchConfig,Ee=0,_t=null,et=null,wt=0,Kt=0,ps=ri(0),it=0,ua=null,Pi=0,wc=0,pp=0,Fo=null,Ft=null,mp=0,Fs=1/0,Zn=null,vu=!1,Wf=null,jr=null,_l=!1,Pr=null,wu=0,Uo=0,Hf=null,Ll=-1,Fl=0;function Ot(){return Ee&6?Qe():Ll!==-1?Ll:Ll=Qe()}function $r(t){return t.mode&1?Ee&2&&wt!==0?wt&-wt:Ok.transition!==null?(Fl===0&&(Fl=Nv()),Fl):(t=xe,t!==0||(t=window.event,t=t===void 0?16:Fv(t.type)),t):1}function En(t,e,n,r){if(50<Uo)throw Uo=0,Hf=null,Error(O(185));Fa(t,n,r),(!(Ee&2)||t!==_t)&&(t===_t&&(!(Ee&2)&&(wc|=n),it===4&&Cr(t,wt)),Bt(t,r),n===1&&Ee===0&&!(e.mode&1)&&(Fs=Qe()+500,gc&&ii()))}function Bt(t,e){var n=t.callbackNode;OC(t,e);var r=ru(t,t===_t?wt:0);if(r===0)n!==null&&Zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zm(n),e===1)t.tag===0?Ak(Vg.bind(null,t)):n0(Vg.bind(null,t)),Rk(function(){!(Ee&6)&&ii()}),n=null;else{switch(Pv(r)){case 1:n=Vh;break;case 4:n=Rv;break;case 16:n=nu;break;case 536870912:n=bv;break;default:n=nu}n=tw(n,q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q0(t,e){if(Ll=-1,Fl=0,Ee&6)throw Error(O(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var r=ru(t,t===_t?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var i=Ee;Ee|=2;var s=Y0();(_t!==t||wt!==e)&&(Zn=null,Fs=Qe()+500,yi(t,e));do try{Jk();break}catch(a){Z0(t,a)}while(!0);ep(),yu.current=s,Ee=i,et!==null?e=0:(_t=null,wt=0,e=it)}if(e!==0){if(e===2&&(i=yf(t),i!==0&&(r=i,e=Gf(t,i))),e===1)throw n=ua,yi(t,0),Cr(t,r),Bt(t,Qe()),n;if(e===6)Cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qk(i)&&(e=Eu(t,r),e===2&&(s=yf(t),s!==0&&(r=s,e=Gf(t,s))),e===1))throw n=ua,yi(t,0),Cr(t,r),Bt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:li(t,Ft,Zn);break;case 3:if(Cr(t,r),(r&130023424)===r&&(e=mp+500-Qe(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xf(li.bind(null,t,Ft,Zn),e);break}li(t,Ft,Zn);break;case 4:if(Cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yk(r/1960))-r,10<r){t.timeoutHandle=xf(li.bind(null,t,Ft,Zn),r);break}li(t,Ft,Zn);break;case 5:li(t,Ft,Zn);break;default:throw Error(O(329))}}}return Bt(t,Qe()),t.callbackNode===n?q0.bind(null,t):null}function Gf(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Kf(e)),t}function Kf(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function Qk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~pp,e&=~wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function Vg(t){if(Ee&6)throw Error(O(327));ks();var e=ru(t,0);if(!(e&1))return Bt(t,Qe()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=yf(t);r!==0&&(e=r,n=Gf(t,r))}if(n===1)throw n=ua,yi(t,0),Cr(t,e),Bt(t,Qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Ft,Zn),Bt(t,Qe()),null}function gp(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(Fs=Qe()+500,gc&&ii())}}function Ai(t){Pr!==null&&Pr.tag===0&&!(Ee&6)&&ks();var e=Ee;Ee|=1;var n=an.transition,r=xe;try{if(an.transition=null,xe=1,t)return t()}finally{xe=r,an.transition=n,Ee=e,!(Ee&6)&&ii()}}function _p(){Kt=ps.current,Ue(ps)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ik(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:Ms(),Ue(Vt),Ue(xt),op();break;case 5:sp(r);break;case 4:Ms();break;case 13:Ue(ze);break;case 19:Ue(ze);break;case 10:tp(r.type._context);break;case 22:case 23:_p()}n=n.return}if(_t=t,et=t=Vr(t.current,null),wt=Kt=e,it=0,ua=null,pp=wc=Pi=0,Ft=Fo=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function Z0(t,e){do{var n=et;try{if(ep(),Ol.current=_u,gu){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(Ni=0,dt=tt=Be=null,Mo=!1,oa=0,hp.current=null,n===null||n.return===null){it=1,ua=e,et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Rg(o);if(g!==null){g.flags&=-257,bg(g,o,a,s,e),g.mode&1&&Ig(s,u,e),e=g,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){Ig(s,u,e),yp();break e}l=Error(O(426))}}else if($e&&a.mode&1){var k=Rg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),bg(k,o,a,s,e),Xh(Ls(l,a));break e}}s=l=Ls(l,a),it!==4&&(it=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=A0(s,l,e);wg(s,_);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jr===null||!jr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=O0(s,a,e);wg(s,v);break e}}s=s.return}while(s!==null)}X0(n)}catch(E){e=E,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function Y0(){var t=yu.current;return yu.current=_u,t===null?_u:t}function yp(){(it===0||it===3||it===2)&&(it=4),_t===null||!(Pi&268435455)&&!(wc&268435455)||Cr(_t,wt)}function Eu(t,e){var n=Ee;Ee|=2;var r=Y0();(_t!==t||wt!==e)&&(Zn=null,yi(t,e));do try{Xk();break}catch(i){Z0(t,i)}while(!0);if(ep(),Ee=n,yu.current=r,et!==null)throw Error(O(261));return _t=null,wt=0,it}function Xk(){for(;et!==null;)Q0(et)}function Jk(){for(;et!==null&&!kC();)Q0(et)}function Q0(t){var e=ew(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?X0(t):et=e,hp.current=null}function X0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gk(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,et=null;return}}else if(n=Hk(n,e,Kt),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);it===0&&(it=5)}function li(t,e,n){var r=xe,i=an.transition;try{an.transition=null,xe=1,eT(t,e,n,r)}finally{an.transition=i,xe=r}return null}function eT(t,e,n,r){do ks();while(Pr!==null);if(Ee&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DC(t,s),t===_t&&(et=_t=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,tw(nu,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=an.transition,an.transition=null;var o=xe;xe=1;var a=Ee;Ee|=4,hp.current=null,qk(t,n),G0(n,t),wk(kf),iu=!!Cf,kf=Cf=null,t.current=n,Zk(n),TC(),Ee=a,xe=o,an.transition=s}else t.current=n;if(_l&&(_l=!1,Pr=t,wu=i),s=t.pendingLanes,s===0&&(jr=null),RC(n.stateNode),Bt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vu)throw vu=!1,t=Wf,Wf=null,t;return wu&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Hf?Uo++:(Uo=0,Hf=t):Uo=0,ii(),null}function ks(){if(Pr!==null){var t=Pv(wu),e=an.transition,n=xe;try{if(an.transition=null,xe=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,wu=0,Ee&6)throw Error(O(331));var i=Ee;for(Ee|=4,Z=t.current;Z!==null;){var s=Z,o=s.child;if(Z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Z=u;Z!==null;){var c=Z;switch(c.tag){case 0:case 11:case 15:Lo(8,c,s)}var d=c.child;if(d!==null)d.return=c,Z=d;else for(;Z!==null;){c=Z;var f=c.sibling,g=c.return;if(B0(c),c===u){Z=null;break}if(f!==null){f.return=g,Z=f;break}Z=g}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}Z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Z=o;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,Z=_;break e}Z=s.return}}var h=t.current;for(Z=h;Z!==null;){o=Z;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Z=m;else e:for(o=h;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(E){He(a,a.return,E)}if(a===o){Z=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,Z=v;break e}Z=a.return}}if(Ee=i,ii(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(dc,t)}catch{}r=!0}return r}finally{xe=n,an.transition=e}}return!1}function zg(t,e,n){e=Ls(n,e),e=A0(t,e,1),t=Ur(t,e,1),e=Ot(),t!==null&&(Fa(t,1,e),Bt(t,e))}function He(t,e,n){if(t.tag===3)zg(t,t,n);else for(;e!==null;){if(e.tag===3){zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Ls(n,t),t=O0(e,t,1),e=Ur(e,t,1),t=Ot(),e!==null&&(Fa(e,1,t),Bt(e,t));break}}e=e.return}}function tT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(wt&n)===n&&(it===4||it===3&&(wt&130023424)===wt&&500>Qe()-mp?yi(t,0):pp|=n),Bt(t,e)}function J0(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=Ot();t=ur(t,e),t!==null&&(Fa(t,e,n),Bt(t,n))}function nT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J0(t,n)}function rT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),J0(t,n)}var ew;ew=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,Wk(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,$e&&e.flags&1048576&&r0(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ml(t,e),t=e.pendingProps;var i=As(e,xt.current);Cs(e,n),i=lp(null,e,r,t,i,n);var s=up();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rp(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=Lf(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&Yh(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sT(r),t=fn(r,t),i){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Ag(null,e,r,t,n);break e;case 11:e=Ng(null,e,r,t,n);break e;case 14:e=Pg(null,e,r,fn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Mf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Ag(t,e,r,i,n);case 3:e:{if(F0(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a0(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ls(Error(O(423)),e),e=Og(t,e,r,n,i);break e}else if(r!==i){i=Ls(Error(O(424)),e),e=Og(t,e,r,n,i);break e}else for(qt=Fr(e.stateNode.containerInfo.firstChild),Yt=e,$e=!0,pn=null,n=d0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),r===i){e=cr(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return f0(e),t===null&&Nf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tf(r,i)?o=null:s!==null&&Tf(r,s)&&(e.flags|=32),L0(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Nf(e),null;case 13:return U0(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Ng(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(fu,r._currentValue),r._currentValue=o,s!==null)if(xn(s.value,o)){if(s.children===i.children&&!Vt.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cs(e,n),i=ln(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Pg(t,e,r,i,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Ml(t,e),e.tag=1,zt(r)?(t=!0,uu(e)):t=!1,Cs(e,n),u0(e,r,i),Of(e,r,i,n),Lf(null,e,r,!0,t,n);case 19:return j0(t,e,n);case 22:return M0(t,e,n)}throw Error(O(156,e.tag))};function tw(t,e){return Iv(t,e)}function iT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new iT(t,e,n,r)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sT(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===jh)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case is:return vi(n.children,i,s,e);case Fh:o=8,i|=8;break;case nf:return t=on(12,n,e,i|2),t.elementType=nf,t.lanes=s,t;case rf:return t=on(13,n,e,i),t.elementType=rf,t.lanes=s,t;case sf:return t=on(19,n,e,i),t.elementType=sf,t.lanes=s,t;case cv:return Ec(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lv:o=10;break e;case uv:o=9;break e;case Uh:o=11;break e;case jh:o=14;break e;case wr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function Ec(t,e,n,r){return t=on(22,t,r,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=od(0),this.expirationTimes=od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wp(t,e,n,r,i,s,o,a,l){return t=new oT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function aT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nw(t){if(!t)return qr;t=t._reactInternals;e:{if(Hi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(zt(n))return t0(t,n,e)}return e}function rw(t,e,n,r,i,s,o,a,l){return t=wp(n,r,!0,t,i,s,o,a,l),t.context=nw(null),n=t.current,r=Ot(),i=$r(n),s=ir(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,Fa(t,i,r),Bt(t,r),t}function Sc(t,e,n,r){var i=e.current,s=Ot(),o=$r(i);return n=nw(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(En(t,i,o,s),Al(t,i,o)),o}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ep(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function lT(){return null}var iw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}Cc.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Sc(t,e,null,null)};Cc.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ai(function(){Sc(null,t,null,null)}),e[lr]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&Lv(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wg(){}function uT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Su(o);s.call(u)}}var o=rw(e,r,t,0,null,!1,!1,"",Wg);return t._reactRootContainer=o,t[lr]=o.current,ta(t.nodeType===8?t.parentNode:t),Ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Su(l);a.call(u)}}var l=wp(t,0,!1,null,null,!1,!1,"",Wg);return t._reactRootContainer=l,t[lr]=l.current,ta(t.nodeType===8?t.parentNode:t),Ai(function(){Sc(e,l,n,r)}),l}function Tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Su(o);a.call(l)}}Sc(e,o,t,i)}else o=uT(n,e,t,i,r);return Su(o)}Av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(zh(e,n|1),Bt(e,Qe()),!(Ee&6)&&(Fs=Qe()+500,ii()))}break;case 13:Ai(function(){var r=ur(t,1);if(r!==null){var i=Ot();En(r,t,1,i)}}),Ep(t,1)}};Bh=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Ot();En(e,t,134217728,n)}Ep(t,134217728)}};Ov=function(t){if(t.tag===13){var e=$r(t),n=ur(t,e);if(n!==null){var r=Ot();En(n,t,e,r)}Ep(t,e)}};Dv=function(){return xe};Mv=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mc(r);if(!i)throw Error(O(90));fv(r),lf(r,i)}}}break;case"textarea":pv(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};Ev=gp;Sv=Ai;var cT={usingClientEntryPoint:!1,Events:[ja,ls,mc,vv,wv,gp]},go={findFiberByHostInstance:di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dT={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tv(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{dc=yl.inject(dT),Fn=yl}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(O(200));return aT(t,e,null,n)};Xt.createRoot=function(t,e){if(!Cp(t))throw Error(O(299));var n=!1,r="",i=iw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wp(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,ta(t.nodeType===8?t.parentNode:t),new Sp(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=Tv(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Ai(t)};Xt.hydrate=function(t,e,n){if(!kc(e))throw Error(O(200));return Tc(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rw(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cc(e)};Xt.render=function(t,e,n){if(!kc(e))throw Error(O(200));return Tc(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!kc(t))throw Error(O(40));return t._reactRootContainer?(Ai(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Xt.unstable_batchedUpdates=gp;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Tc(t,e,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";function sw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sw)}catch(t){console.error(t)}}sw(),rv.exports=Xt;var fT=rv.exports,Hg=fT;ef.createRoot=Hg.createRoot,ef.hydrateRoot=Hg.hydrateRoot;const xc=A.createContext([]);function hT({children:t}){const[e,n]=A.useState();return I.jsx(xc.Provider,{value:{currentChat:e,setCurrentChat:n},children:t})}const pT=({children:t})=>I.jsx(hT,{children:I.jsx("div",{children:t})});/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ca.apply(this,arguments)}var Ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ar||(Ar={}));const Gg="popstate";function mT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Gi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),qf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:ow(s))}function r(i,s){Ic(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return _T(e,n,r,t)}function st(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ic(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gT(){return Math.random().toString(36).substr(2,8)}function Kg(t,e){return{usr:t.state,key:t.key,idx:e}}function qf(t,e,n,r){return n===void 0&&(n=null),ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||gT()})}function ow(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _T(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ar.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ca({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ar.Pop;let k=c(),_=k==null?null:k-u;u=k,l&&l({action:a,location:y.location,delta:_})}function f(k,_){a=Ar.Push;let h=qf(y.location,k,_);n&&n(h,k),u=c()+1;let m=Kg(h,u),v=y.createHref(h);try{o.pushState(m,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function g(k,_){a=Ar.Replace;let h=qf(y.location,k,_);n&&n(h,k),u=c();let m=Kg(h,u),v=y.createHref(h);o.replaceState(m,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function p(k){let _=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:ow(k);return st(_,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,_)}let y={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gg,d),l=k,()=>{i.removeEventListener(Gg,d),l=null}},createHref(k){return e(i,k)},createURL:p,encodeLocation(k){let _=p(k);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:f,replace:g,go(k){return o.go(k)}};return y}var qg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qg||(qg={}));function yT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gi(e):e,i=uw(r.pathname||"/",n);if(i==null)return null;let s=aw(t);vT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=RT(s[a],PT(i));return o}function aw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(st(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wi([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(st(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),aw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:xT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of lw(s.path))i(s,o,l)}),e}function lw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=lw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function vT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wT=/^:\w+$/,ET=3,ST=2,CT=1,kT=10,TT=-2,Zg=t=>t==="*";function xT(t,e){let n=t.split("/"),r=n.length;return n.some(Zg)&&(r+=TT),e&&(r+=ST),n.filter(i=>!Zg(i)).reduce((i,s)=>i+(wT.test(s)?ET:s===""?CT:kT),r)}function IT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function RT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=bT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:wi([i,c.pathname]),pathnameBase:UT(wi([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=wi([i,c.pathnameBase]))}return s}function bT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:g}=c;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const p=a[d];return g&&!p?u[f]=void 0:u[f]=AT(p||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function NT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ic(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function PT(t){try{return decodeURI(t)}catch(e){return Ic(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function AT(t,e){try{return decodeURIComponent(t)}catch(n){return Ic(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function uw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function OT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t;return{pathname:n?n.startsWith("/")?n:DT(n,e):e,search:jT(r),hash:$T(i)}}function DT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Id(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function LT(t){return MT(t).map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function FT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=ca({},t),st(!i.pathname||!i.pathname.includes("?"),Id("?","pathname","search",i)),st(!i.pathname||!i.pathname.includes("#"),Id("#","pathname","hash",i)),st(!i.search||!i.search.includes("#"),Id("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let d=e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d.pop();i.pathname=f.join("/")}a="/"+d.join("/")}else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=OT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wi=t=>t.join("/").replace(/\/\/+/g,"/"),UT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$T=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cw=["post","put","patch","delete"];new Set(cw);const zT=["get",...cw];new Set(zT);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cu(){return Cu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cu.apply(this,arguments)}const kp=A.createContext(null),BT=A.createContext(null),Rc=A.createContext(null),bc=A.createContext(null),eo=A.createContext({outlet:null,matches:[],isDataRoute:!1}),dw=A.createContext(null);function Nc(){return A.useContext(bc)!=null}function fw(){return Nc()||st(!1),A.useContext(bc).location}function hw(t){A.useContext(Rc).static||A.useLayoutEffect(t)}function Tp(){let{isDataRoute:t}=A.useContext(eo);return t?nx():WT()}function WT(){Nc()||st(!1);let t=A.useContext(kp),{basename:e,navigator:n}=A.useContext(Rc),{matches:r}=A.useContext(eo),{pathname:i}=fw(),s=JSON.stringify(LT(r)),o=A.useRef(!1);return hw(()=>{o.current=!0}),A.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=FT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:wi([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function HT(t,e){return GT(t,e)}function GT(t,e,n){Nc()||st(!1);let{navigator:r}=A.useContext(Rc),{matches:i}=A.useContext(eo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=fw(),u;if(e){var c;let y=typeof e=="string"?Gi(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||st(!1),u=y}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=yT(t,{pathname:f}),p=QT(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:wi([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:wi([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&p?A.createElement(bc.Provider,{value:{location:Cu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ar.Pop}},p):p}function KT(){let t=tx(),e=VT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,s)}const qT=A.createElement(KT,null);class ZT extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement(eo.Provider,{value:this.props.routeContext},A.createElement(dw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YT(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(kp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(eo.Provider,{value:e},r)}function QT(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||st(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||qT);let f=e.concat(s.slice(0,u+1)),g=()=>{let p;return c?p=d:l.route.Component?p=A.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,A.createElement(YT,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?A.createElement(ZT,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var pw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pw||{}),ku=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ku||{});function XT(t){let e=A.useContext(kp);return e||st(!1),e}function JT(t){let e=A.useContext(BT);return e||st(!1),e}function ex(t){let e=A.useContext(eo);return e||st(!1),e}function mw(t){let e=ex(),n=e.matches[e.matches.length-1];return n.route.id||st(!1),n.route.id}function tx(){var t;let e=A.useContext(dw),n=JT(ku.UseRouteError),r=mw(ku.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function nx(){let{router:t}=XT(pw.UseNavigateStable),e=mw(ku.UseNavigateStable),n=A.useRef(!1);return hw(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Cu({fromRouteId:e},s)))},[t,e])}function jl(t){st(!1)}function rx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ar.Pop,navigator:s,static:o=!1}=t;Nc()&&st(!1);let a=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,p=A.useMemo(()=>{let y=uw(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return p==null?null:A.createElement(Rc.Provider,{value:l},A.createElement(bc.Provider,{children:n,value:p}))}function ix(t){let{children:e,location:n}=t;return HT(Zf(e),n)}new Promise(()=>{});function Zf(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Zf(r.props.children,s));return}r.type!==jl&&st(!1),!r.props.index||!r.props.children||st(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sx="startTransition",Yg=nC[sx];function ox(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=mT({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(d=>{u&&Yg?Yg(()=>l(d)):l(d)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(rx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var Qg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qg||(Qg={}));var Xg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xg||(Xg={}));var Jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+gw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new lx;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yw=function(t){const e=_w(t);return xp.encodeByteArray(e,!0)},Tu=function(t){return yw(t).replace(/\./g,"")},xu=function(t){try{return xp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){return vw(void 0,t)}function vw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cx(n)||(t[n]=vw(t[n],e[n]));return t}function cx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=()=>dx().__FIREBASE_DEFAULTS__,hx=()=>{if(typeof process>"u"||typeof Jg>"u")return;const t=Jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},px=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xu(t[1]);return e&&JSON.parse(e)},Ip=()=>{try{return fx()||hx()||px()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=Ip())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ew=t=>{const e=ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sw=()=>{var t;return(t=Ip())===null||t===void 0?void 0:t.config},Cw=t=>{var e;return(e=Ip())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function mx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gx(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xw(){return gw.NODE_ADMIN===!0}function _x(){try{return typeof indexedDB=="object"}catch{return!1}}function yx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="FirebaseError";class mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vx,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mr(i,a,r)}}function wx(t,e){return t.replace(Ex,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ex=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=da(xu(s[0])||""),n=da(xu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Sx=function(t){const e=Iw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cx=function(t){const e=Iw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Iu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ru(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(e_(s)&&e_(o)){if(!Ru(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function e_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Tx(t,e){const n=new xx(t,e);return n.subscribe.bind(n)}class xx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ix(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rd),i.error===void 0&&(i.error=Rd),i.complete===void 0&&(i.complete=Rd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ix(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rd(){}function bp(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Px(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nx(t){return t===ui?void 0:t}function Px(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const Ox={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Dx=Ie.INFO,Mx={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Lx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Np{constructor(e){this.name=e,this._logLevel=Dx,this._logHandler=Lx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ox[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Fx=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function Ux(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jx(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rw=new WeakMap,Qf=new WeakMap,bw=new WeakMap,bd=new WeakMap,Pp=new WeakMap;function $x(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rw.set(n,t)}).catch(()=>{}),Pp.set(e,t),e}function Vx(t){if(Qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qf.set(t,e)}let Xf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zx(t){Xf=t(Xf)}function Bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nd(this),e,...n);return bw.set(r,e.sort?e.sort():[e]),zr(r)}:jx().includes(t)?function(...e){return t.apply(Nd(this),e),zr(Rw.get(this))}:function(...e){return zr(t.apply(Nd(this),e))}}function Wx(t){return typeof t=="function"?Bx(t):(t instanceof IDBTransaction&&Vx(t),Fx(t,Ux())?new Proxy(t,Xf):t)}function zr(t){if(t instanceof IDBRequest)return $x(t);if(bd.has(t))return bd.get(t);const e=Wx(t);return e!==t&&(bd.set(t,e),Pp.set(e,t)),e}const Nd=t=>Pp.get(t);function Hx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zr(o.result),l.oldVersion,l.newVersion,zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Gx=["get","getKey","getAll","getAllKeys","count"],Kx=["put","add","delete","clear"],Pd=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pd.set(e,s),s}zx(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jf="@firebase/app",i_="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Np("@firebase/app"),Yx="@firebase/app-compat",Qx="@firebase/analytics-compat",Xx="@firebase/analytics",Jx="@firebase/app-check-compat",eI="@firebase/app-check",tI="@firebase/auth",nI="@firebase/auth-compat",rI="@firebase/database",iI="@firebase/database-compat",sI="@firebase/functions",oI="@firebase/functions-compat",aI="@firebase/installations",lI="@firebase/installations-compat",uI="@firebase/messaging",cI="@firebase/messaging-compat",dI="@firebase/performance",fI="@firebase/performance-compat",hI="@firebase/remote-config",pI="@firebase/remote-config-compat",mI="@firebase/storage",gI="@firebase/storage-compat",_I="@firebase/firestore",yI="@firebase/firestore-compat",vI="firebase",wI="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",EI={[Jf]:"fire-core",[Yx]:"fire-core-compat",[Xx]:"fire-analytics",[Qx]:"fire-analytics-compat",[eI]:"fire-app-check",[Jx]:"fire-app-check-compat",[tI]:"fire-auth",[nI]:"fire-auth-compat",[rI]:"fire-rtdb",[iI]:"fire-rtdb-compat",[sI]:"fire-fn",[oI]:"fire-fn-compat",[aI]:"fire-iid",[lI]:"fire-iid-compat",[uI]:"fire-fcm",[cI]:"fire-fcm-compat",[dI]:"fire-perf",[fI]:"fire-perf-compat",[hI]:"fire-rc",[pI]:"fire-rc-compat",[mI]:"fire-gcs",[gI]:"fire-gcs-compat",[_I]:"fire-fst",[yI]:"fire-fst-compat","fire-js":"fire-js",[vI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map,th=new Map;function SI(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Di(t){const e=t.name;if(th.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of bu.values())SI(n,t);return!0}function Oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Br=new Va("app","Firebase",CI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=wI;function Nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Br.create("bad-app-name",{appName:String(i)});if(n||(n=Sw()),!n)throw Br.create("no-options");const s=bu.get(i);if(s){if(Ru(n,s.options)&&Ru(r,s.config))return s;throw Br.create("duplicate-app",{appName:i})}const o=new Ax(i);for(const l of th.values())o.addComponent(l);const a=new kI(n,r,o);return bu.set(i,a),a}function Ap(t=eh){const e=bu.get(t);if(!e&&t===eh&&Sw())return Nw();if(!e)throw Br.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let i=(r=EI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}Di(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="firebase-heartbeat-database",xI=1,fa="firebase-heartbeat-store";let Ad=null;function Pw(){return Ad||(Ad=Hx(TI,xI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fa)}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),Ad}async function II(t){try{return await(await Pw()).transaction(fa).objectStore(fa).get(Aw(t))}catch(e){if(e instanceof mr)Oi.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function s_(t,e){try{const r=(await Pw()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,Aw(t)),await r.done}catch(n){if(n instanceof mr)Oi.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function Aw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=1024,bI=30*24*60*60*1e3;class NI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=o_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=o_(),{heartbeatsToSend:r,unsentEntries:i}=PI(this._heartbeatsCache.heartbeats),s=Tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function o_(){return new Date().toISOString().substring(0,10)}function PI(t,e=RI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),a_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),a_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _x()?yx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await II(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function a_(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){Di(new Zr("platform-logger",e=>new qx(e),"PRIVATE")),Di(new Zr("heartbeat",e=>new NI(e),"PRIVATE")),jn(Jf,i_,t),jn(Jf,i_,"esm2017"),jn("fire-js","")}OI("");var jt=function(){return jt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},jt.apply(this,arguments)};function Op(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DI=Ow,Dw=new Va("auth","Firebase",Ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new Np("@firebase/auth");function MI(t,...e){Pu.logLevel<=Ie.WARN&&Pu.warn(`Auth (${Ki}): ${t}`,...e)}function $l(t,...e){Pu.logLevel<=Ie.ERROR&&Pu.error(`Auth (${Ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Dp(t,...e)}function $n(t,...e){return Dp(t,...e)}function LI(t,e,n){const r=Object.assign(Object.assign({},DI()),{[e]:n});return new Va("auth","Firebase",r).create(e,{appName:t.name})}function Dp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dw.create(t,...e)}function ae(t,e,...n){if(!t)throw Dp(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function dr(t,e){t||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FI(){return l_()==="http:"||l_()==="https:"}function l_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||mx()||"connection"in navigator)?navigator.onLine:!0}function jI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=Rp()||Tw()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new za(3e4,6e4);function si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,r,i={}){return Lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=no(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mw.fetch()(Fw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$I),e);try{const i=new BI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw LI(t,c,u);In(t,c)}}catch(i){if(i instanceof mr)throw i;In(t,"network-request-failed",{message:String(i)})}}async function Ba(t,e,n,r,i={}){const s=await oi(t,e,n,r,i);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Fw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mp(t.config,i):`${t.config.apiScheme}://${i}`}function zI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),VI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}function u_(t){return t!==void 0&&t.enterprise!==void 0}class WI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HI(t,e){return oi(t,"GET","/v2/recaptchaConfig",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function KI(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qI(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=Lp(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(Od(i.auth_time)),issuedAtTime:jo(Od(i.iat)),expirationTime:jo(Od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function Lp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const i=xu(n);return i?JSON.parse(i):($l("Failed to decode base64 JWT payload"),null)}catch(i){return $l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZI(t){const e=Lp(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mr&&YI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ha(t,KI(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eR(s.providerUserInfo):[],a=JI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function XI(t){const e=at(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eR(t){return t.map(e=>{var{providerId:n}=e,r=Op(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e){const n=await Lw(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Fw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nR(t,e){return oi(t,"POST","/v2/accounts:revokeToken",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pa;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pa,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ha(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qI(this,e)}reload(){return XI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ha(this,GI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:E,providerData:T,stsTokenManager:C}=n;ae(m&&C,e,"internal-error");const P=pa.fromJSON(this.name,C);ae(typeof m=="string",e,"internal-error"),yr(d,e.name),yr(f,e.name),ae(typeof v=="boolean",e,"internal-error"),ae(typeof E=="boolean",e,"internal-error"),yr(g,e.name),yr(p,e.name),yr(y,e.name),yr(k,e.name),yr(_,e.name),yr(h,e.name);const z=new Ei({uid:m,auth:e,email:f,emailVerified:v,displayName:d,isAnonymous:E,photoURL:p,phoneNumber:g,tenantId:y,stsTokenManager:P,createdAt:_,lastLoginAt:h});return T&&Array.isArray(T)&&(z.providerData=T.map($=>Object.assign({},$))),k&&(z._redirectEventId=k),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new pa;i.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Au(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;function nr(t){dr(t instanceof Function,"Expected a class definition");let e=c_.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,c_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jw.type="NONE";const d_=jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(nr(d_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nr(d_);const o=Vl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ei._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ww(e))return"Blackberry";if(Hw(e))return"Webos";if(Fp(e))return"Safari";if((e.includes("chrome/")||Vw(e))&&!e.includes("edge/"))return"Chrome";if(Bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=It()){return/firefox\//i.test(t)}function Fp(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vw(t=It()){return/crios\//i.test(t)}function zw(t=It()){return/iemobile/i.test(t)}function Bw(t=It()){return/android/i.test(t)}function Ww(t=It()){return/blackberry/i.test(t)}function Hw(t=It()){return/webos/i.test(t)}function Dc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rR(t=It()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iR(){return gx()&&document.documentMode===10}function Gw(t=It()){return Dc(t)||Bw(t)||Hw(t)||Ww(t)||/windows phone/i.test(t)||zw(t)}function sR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e=[]){let n;switch(t){case"Browser":n=f_(It());break;case"Worker":n=`${f_(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(t,e={}){return oi(t,"GET","/v2/passwordPolicy",si(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=6;class uR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new h_(this),this.idTokenSubscription=new h_(this),this.beforeStateQueue=new oR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aR(this),n=new uR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return at(t)}class h_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tx(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dR().appendChild(r)})}function fR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hR="https://www.google.com/recaptcha/enterprise.js?render=",pR="recaptcha-enterprise",mR="NO_RECAPTCHA";class gR{constructor(e){this.type=pR,this.auth=qi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{HI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new WI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;u_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&u_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qw(hR+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function p_(t,e,n,r=!1){const i=new gR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await p_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await p_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e){const n=Oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ru(s,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function yR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vR(t,e,n){const r=qi(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Zw(e),{host:o,port:a}=wR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ER()}function Zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wR(t){const e=Zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:m_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:m_(o)}}}function m_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ER(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function SR(t,e){return oi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e){return Ba(t,"POST","/v1/accounts:signInWithPassword",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}async function TR(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Up{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(e,n,"signInWithPassword",CR);case"emailLink":return kR(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(e,r,"signUpPassword",SR);case"emailLink":return TR(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e){return Ba(t,"POST","/v1/accounts:signInWithIdp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="http://localhost";class Mi extends Up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Op(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:xR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RR(t){const e=Io(Ro(t)).link,n=e?Io(Ro(e)).deep_link_id:null,r=Io(Ro(t)).deep_link_id;return(r?Io(Ro(r)).link:null)||r||n||e||t}class jp{constructor(e){var n,r,i,s,o,a;const l=Io(Ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=IR((i=l.mode)!==null&&i!==void 0?i:null);ae(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RR(e);try{return new jp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(e,n){return ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jp.parseLink(n);return ae(r,"argument-error"),ma._fromEmailAndCode(e,r.code,r.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Wa{constructor(){super("facebook.com")}static credential(e){return Mi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Wa{constructor(){super("github.com")}static credential(e){return Mi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Wa{constructor(){super("twitter.com")}static credential(e,n){return Mi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e){return Ba(t,"POST","/v1/accounts:signUp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ei._fromIdTokenResponse(e,r,i),o=g_(r);return new Li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g_(r);return new Li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends mr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ou(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ou._fromErrorAndOperation(t,s,e,r):s})}async function NR(t,e,n=!1){const r=await ha(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ha(t,Qw(r,i,e,t),n);ae(s.idToken,r,"internal-error");const o=Lp(s.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(t.uid===a,r,"user-mismatch"),Li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e,n=!1){const r="signIn",i=await Qw(t,r,e),s=await Li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AR(t,e){return Xw(qi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t){const e=qi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OR(t,e,n){const r=qi(t),o=await rh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jw(t),l}),a=await Li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function __(t,e,n){return AR(at(t),ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t,e){return at(t).setPersistence(e)}function MR(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function LR(t,e,n){return at(t).beforeAuthStateChanged(e,n)}const Du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Du,"1"),this.storage.removeItem(Du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(){const t=It();return Fp(t)||Dc(t)}const UR=1e3,jR=10;class tE extends eE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FR()&&sR(),this.fallbackToPolling=Gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tE.type="LOCAL";const $R=tE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends eE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nE.type="SESSION";const $p=nE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await VR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Vp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function BR(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function WR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GR(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebaseLocalStorageDb",KR=1,Mu="firebaseLocalStorage",sE="fbase_key";class Ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function qR(){const t=indexedDB.deleteDatabase(iE);return new Ha(t).toPromise()}function ih(){const t=indexedDB.open(iE,KR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:sE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await qR(),e(await ih()))})})}async function y_(t,e,n){const r=Lc(t,!0).put({[sE]:e,value:n});return new Ha(r).toPromise()}async function ZR(t,e){const n=Lc(t,!1).get(e),r=await new Ha(n).toPromise();return r===void 0?null:r.value}function v_(t,e){const n=Lc(t,!0).delete(e);return new Ha(n).toPromise()}const YR=800,QR=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(GR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WR(),!this.activeServiceWorker)return;this.sender=new zR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await y_(e,Du,"1"),await v_(e,Du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>y_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>v_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lc(i,!1).getAll();return new Ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const XR=oE;new za(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t,e){return e?nr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp extends Up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eb(t){return Xw(t.auth,new zp(t),t.bypassAuthState)}function tb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),PR(n,new zp(t),t.bypassAuthState)}async function nb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),NR(n,new zp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:In(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new za(2e3,1e4);class ms extends aE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=Vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rb.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="pendingRedirect",zl=new Map;class sb extends aE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(t,e){const n=ub(e),r=lb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ab(t,e){zl.set(t._key(),e)}function lb(t){return nr(t._redirectPersistence)}function ub(t){return Vl(ib,t.config.apiKey,t.name)}async function cb(t,e,n=!1){const r=qi(t),i=JR(r,e),o=await new sb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=10*60*1e3;class fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=db&&this.cachedEventUids.clear(),this.cachedEventUids.has(w_(e))}saveEventToCache(e){this.cachedEventUids.add(w_(e)),this.lastProcessedEventTime=Date.now()}}function w_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function _b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pb(t);for(const n of e)try{if(yb(n))return}catch{}In(t,"unauthorized-domain")}function yb(t){const e=nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gb.test(n))return!1;if(mb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new za(3e4,6e4);function E_(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wb(t){return new Promise((e,n)=>{var r,i,s;function o(){E_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E_(),n($n(t,"network-request-failed"))},timeout:vb.get()})}if(!((i=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vn().gapi)===null||s===void 0)&&s.load)o();else{const a=fR("iframefcb");return Vn()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},qw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bl=null,e})}let Bl=null;function Eb(t){return Bl=Bl||wb(t),Bl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new za(5e3,15e3),Cb="__/auth/iframe",kb="emulator/auth/iframe",Tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ib(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mp(e,kb):`https://${t.config.authDomain}/${Cb}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},i=xb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${no(r).slice(1)}`}async function Rb(t){const e=await Eb(t),n=Vn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Ib(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=Vn().setTimeout(()=>{s(o)},Sb.get());function l(){Vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nb=500,Pb=600,Ab="_blank",Ob="http://localhost";class S_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Db(t,e,n,r=Nb,i=Pb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=It().toLowerCase();n&&(a=Vw(u)?Ab:n),$w(u)&&(e=e||Ob,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,p])=>`${f}${g}=${p},`,"");if(rR(u)&&a!=="_self")return Mb(e||"",a),new S_(null);const d=window.open(e||"",a,c);ae(d,t,"popup-blocked");try{d.focus()}catch{}return new S_(d)}function Mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="__/auth/handler",Fb="emulator/auth/handler",Ub=encodeURIComponent("fac");async function C_(t,e,n,r,i,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(e instanceof Yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Wa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Ub}=${encodeURIComponent(l)}`:"";return`${jb(t)}?${no(a).slice(1)}${u}`}function jb({config:t}){return t.emulator?Mp(t,Fb):`https://${t.authDomain}/${Lb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="webStorageSupport";class $b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$p,this._completeRedirectFn=cb,this._overrideRedirectResult=ab}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await C_(e,n,r,nh(),i);return Db(e,o,Vp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await C_(e,n,r,nh(),i);return BR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rb(e),r=new fb(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dd,{type:Dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dd];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gw()||Fp()||Dc()}}const Vb=$b;var k_="@firebase/auth",T_="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wb(t){Di(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kw(t)},u=new cR(r,i,s,l);return yR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Di(new Zr("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(r=>new zb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(k_,T_,Bb(t)),jn(k_,T_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=5*60,Gb=Cw("authIdTokenMaxAge")||Hb;let x_=null;const Kb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gb)return;const i=n==null?void 0:n.token;x_!==i&&(x_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qb(t=Ap()){const e=Oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_R(t,{popupRedirectResolver:Vb,persistence:[XR,$R,$p]}),r=Cw("authTokenSyncURL");if(r){const s=Kb(r);LR(n,s,()=>s(n.currentUser)),MR(n,o=>s(o))}const i=ww("auth");return i&&vR(n,`http://${i}`),n}Wb("Browser");var Le="-ms-",$o="-moz-",ke="-webkit-",uE="comm",Fc="rule",Bp="decl",Zb="@import",cE="@keyframes",Yb="@layer",Qb=Math.abs,Wp=String.fromCharCode,sh=Object.assign;function Xb(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function dE(t){return t.trim()}function Yn(t,e){return(t=e.exec(t))?t[0]:t}function he(t,e,n){return t.replace(e,n)}function Wl(t,e){return t.indexOf(e)}function ft(t,e){return t.charCodeAt(e)|0}function js(t,e,n){return t.slice(e,n)}function On(t){return t.length}function fE(t){return t.length}function bo(t,e){return e.push(t),t}function Jb(t,e){return t.map(e).join("")}function I_(t,e){return t.filter(function(n){return!Yn(n,e)})}var Uc=1,$s=1,hE=0,cn=0,Xe=0,io="";function jc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Uc,column:$s,length:o,return:"",siblings:a}}function vr(t,e){return sh(jc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Xi(t){for(;t.root;)t=vr(t.root,{children:[t]});bo(t,t.siblings)}function eN(){return Xe}function tN(){return Xe=cn>0?ft(io,--cn):0,$s--,Xe===10&&($s=1,Uc--),Xe}function Sn(){return Xe=cn<hE?ft(io,cn++):0,$s++,Xe===10&&($s=1,Uc++),Xe}function Si(){return ft(io,cn)}function Hl(){return cn}function $c(t,e){return js(io,t,e)}function oh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nN(t){return Uc=$s=1,hE=On(io=t),cn=0,[]}function rN(t){return io="",t}function Md(t){return dE($c(cn-1,ah(t===91?t+2:t===40?t+1:t)))}function iN(t){for(;(Xe=Si())&&Xe<33;)Sn();return oh(t)>2||oh(Xe)>3?"":" "}function sN(t,e){for(;--e&&Sn()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return $c(t,Hl()+(e<6&&Si()==32&&Sn()==32))}function ah(t){for(;Sn();)switch(Xe){case t:return cn;case 34:case 39:t!==34&&t!==39&&ah(Xe);break;case 40:t===41&&ah(t);break;case 92:Sn();break}return cn}function oN(t,e){for(;Sn()&&t+Xe!==57;)if(t+Xe===84&&Si()===47)break;return"/*"+$c(e,cn-1)+"*"+Wp(t===47?t:Sn())}function aN(t){for(;!oh(Si());)Sn();return $c(t,cn)}function lN(t){return rN(Gl("",null,null,null,[""],t=nN(t),0,[0],t))}function Gl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,g=0,p=0,y=1,k=1,_=1,h=0,m="",v=i,E=s,T=r,C=m;k;)switch(p=h,h=Sn()){case 40:if(p!=108&&ft(C,d-1)==58){Wl(C+=he(Md(h),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Md(h);break;case 9:case 10:case 13:case 32:C+=iN(p);break;case 92:C+=sN(Hl()-1,7);continue;case 47:switch(Si()){case 42:case 47:bo(uN(oN(Sn(),Hl()),e,n,l),l);break;default:C+="/"}break;case 123*y:a[u++]=On(C)*_;case 125*y:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+c:_==-1&&(C=he(C,/\f/g,"")),g>0&&On(C)-d&&bo(g>32?b_(C+";",r,n,d-1,l):b_(he(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(bo(T=R_(C,e,n,u,c,i,a,m,v=[],E=[],d,s),s),h===123)if(c===0)Gl(C,e,T,T,v,s,d,a,E);else switch(f===99&&ft(C,3)===110?100:f){case 100:case 108:case 109:case 115:Gl(t,T,T,r&&bo(R_(t,T,T,0,0,i,a,m,i,v=[],d,E),E),i,E,d,a,r?v:E);break;default:Gl(C,T,T,T,[""],E,0,a,E)}}u=c=g=0,y=_=1,m=C="",d=o;break;case 58:d=1+On(C),g=p;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&tN()==125)continue}switch(C+=Wp(h),h*y){case 38:_=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(On(C)-1)*_,_=1;break;case 64:Si()===45&&(C+=Md(Sn())),f=Si(),c=d=On(m=C+=aN(Hl())),h++;break;case 45:p===45&&On(C)==2&&(y=0)}}return s}function R_(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,g=i===0?s:[""],p=fE(g),y=0,k=0,_=0;y<r;++y)for(var h=0,m=js(t,f+1,f=Qb(k=o[y])),v=t;h<p;++h)(v=dE(k>0?g[h]+" "+m:he(m,/&\f/g,g[h])))&&(l[_++]=v);return jc(t,e,n,i===0?Fc:a,l,u,c,d)}function uN(t,e,n,r){return jc(t,e,n,uE,Wp(eN()),js(t,2,-2),0,r)}function b_(t,e,n,r,i){return jc(t,e,n,Bp,js(t,0,r),js(t,r+1,-1),r,i)}function pE(t,e,n){switch(Xb(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return $o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+$o+t+Le+t+t;case 5936:switch(ft(t,e+11)){case 114:return ke+t+Le+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+Le+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+Le+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+Le+t+t;case 6165:return ke+t+Le+"flex-"+t+t;case 5187:return ke+t+he(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Le+"flex-$1$2")+t;case 5443:return ke+t+Le+"flex-item-"+he(t,/flex-|-self/g,"")+(Yn(t,/flex-|baseline/)?"":Le+"grid-row-"+he(t,/flex-|-self/g,""))+t;case 4675:return ke+t+Le+"flex-line-pack"+he(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+Le+he(t,"shrink","negative")+t;case 5292:return ke+t+Le+he(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+he(t,"-grow","")+ke+t+Le+he(t,"grow","positive")+t;case 4554:return ke+he(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!Yn(t,/flex-|baseline/))return Le+"grid-column-align"+js(t,e)+t;break;case 2592:case 3360:return Le+he(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Yn(r.props,/grid-\w+-end/)})?~Wl(t+(n=n[e].value),"span")?t:Le+he(t,"-start","")+t+Le+"grid-row-span:"+(~Wl(n,"span")?Yn(n,/\d+/):+Yn(n,/\d+/)-+Yn(t,/\d+/))+";":Le+he(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Yn(r.props,/grid-\w+-start/)})?t:Le+he(he(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+$o+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wl(t,"stretch")?pE(he(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return he(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Le+i+":"+s+u+(o?Le+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(ft(t,e+6)===121)return he(t,":",":"+ke)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return he(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(ft(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Le+"$2box$3")+t;case 100:return he(t,":",":"+Le)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(t,"scroll-","scroll-snap-")+t}return t}function Lu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function cN(t,e,n,r){switch(t.type){case Yb:if(t.children.length)break;case Zb:case Bp:return t.return=t.return||t.value;case uE:return"";case cE:return t.return=t.value+"{"+Lu(t.children,r)+"}";case Fc:if(!On(t.value=t.props.join(",")))return""}return On(n=Lu(t.children,r))?t.return=t.value+"{"+n+"}":""}function dN(t){var e=fE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function fN(t){return function(e){e.root||(e=e.return)&&t(e)}}function hN(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Bp:t.return=pE(t.value,t.length,n);return;case cE:return Lu([vr(t,{value:he(t.value,"@","@"+ke)})],r);case Fc:if(t.length)return Jb(n=t.props,function(i){switch(Yn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xi(vr(t,{props:[he(i,/:(read-\w+)/,":"+$o+"$1")]})),Xi(vr(t,{props:[i]})),sh(t,{props:I_(n,r)});break;case"::placeholder":Xi(vr(t,{props:[he(i,/:(plac\w+)/,":"+ke+"input-$1")]})),Xi(vr(t,{props:[he(i,/:(plac\w+)/,":"+$o+"$1")]})),Xi(vr(t,{props:[he(i,/:(plac\w+)/,Le+"input-$1")]})),Xi(vr(t,{props:[i]})),sh(t,{props:I_(n,r)});break}return""})}}var pN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Vs=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",Hp=typeof window<"u"&&"HTMLElement"in window,mN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),Vc=Object.freeze([]),zs=Object.freeze({});function gN(t,e,n){return n===void 0&&(n=zs),t.theme!==n.theme&&t.theme||e||n.theme}var mE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_N=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yN=/(^-|-$)/g;function N_(t){return t.replace(_N,"-").replace(yN,"")}var vN=/(a)(d)/gi,P_=function(t){return String.fromCharCode(t+(t>25?39:97))};function lh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=P_(e%52)+n;return(P_(e%52)+n).replace(vN,"$1-$2")}var Ld,gs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},gE=function(t){return gs(5381,t)};function wN(t){return lh(gE(t)>>>0)}function EN(t){return t.displayName||t.name||"Component"}function Fd(t){return typeof t=="string"&&!0}var _E=typeof Symbol=="function"&&Symbol.for,yE=_E?Symbol.for("react.memo"):60115,SN=_E?Symbol.for("react.forward_ref"):60112,CN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TN=((Ld={})[SN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ld[yE]=vE,Ld);function A_(t){return("type"in(e=t)&&e.type.$$typeof)===yE?vE:"$$typeof"in t?TN[t.$$typeof]:CN;var e}var xN=Object.defineProperty,IN=Object.getOwnPropertyNames,O_=Object.getOwnPropertySymbols,RN=Object.getOwnPropertyDescriptor,bN=Object.getPrototypeOf,D_=Object.prototype;function wE(t,e,n){if(typeof e!="string"){if(D_){var r=bN(e);r&&r!==D_&&wE(t,r,n)}var i=IN(e);O_&&(i=i.concat(O_(e)));for(var s=A_(t),o=A_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in kN||n&&n[l]||o&&l in o||s&&l in s)){var u=RN(e,l);try{xN(t,l,u)}catch{}}}}return t}function Bs(t){return typeof t=="function"}function Gp(t){return typeof t=="object"&&"styledComponentId"in t}function pi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function M_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ga(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function uh(t,e,n){if(n===void 0&&(n=!1),!n&&!ga(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=uh(t[r],e[r]);else if(ga(e))for(var r in e)t[r]=uh(t[r],e[r]);return t}function Kp(t,e){Object.defineProperty(t,"toString",{value:e})}function Ga(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var NN=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ga(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Kl=new Map,Fu=new Map,ql=1,wl=function(t){if(Kl.has(t))return Kl.get(t);for(;Fu.has(ql);)ql++;var e=ql++;return Kl.set(t,e),Fu.set(e,t),e},PN=function(t,e){ql=e+1,Kl.set(t,e),Fu.set(e,t)},AN="style[".concat(Vs,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),ON=new RegExp("^".concat(Vs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),DN=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},MN=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(ON);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(PN(c,u),DN(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function LN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var EE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Vs,"active"),r.setAttribute("data-styled-version","6.1.1");var o=LN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},FN=function(){function t(e){this.element=EE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ga(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),UN=function(){function t(e){this.element=EE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),jN=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),L_=Hp,$N={isServer:!Hp,useCSSOMInjection:!mN},SE=function(){function t(e,n,r){e===void 0&&(e=zs),n===void 0&&(n={});var i=this;this.options=jt(jt({},$N),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hp&&L_&&(L_=!1,function(s){for(var o=document.querySelectorAll(AN),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Vs)!=="active"&&(MN(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Kp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(_){return Fu.get(_)}(d);if(f===void 0)return"continue";var g=s.names.get(f),p=o.getGroup(d);if(g===void 0||p.length===0)return"continue";var y="".concat(Vs,".g").concat(d,'[id="').concat(f,'"]'),k="";g!==void 0&&g.forEach(function(_){_.length>0&&(k+="".concat(_,","))}),l+="".concat(p).concat(y,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return wl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(jt(jt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jN(i):r?new FN(i):new UN(i)}(this.options),new NN(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(wl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(wl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),VN=/&/g,zN=/^\s*\/\/.*$/gm;function CE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=CE(n.children,e)),n})}function BN(t){var e,n,r,i=t===void 0?zs:t,s=i.options,o=s===void 0?zs:s,a=i.plugins,l=a===void 0?Vc:a,u=function(f,g,p){return p===n||p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===Fc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(VN,n).replace(r,u))}),o.prefix&&c.push(hN),c.push(cN);var d=function(f,g,p,y){g===void 0&&(g=""),p===void 0&&(p=""),y===void 0&&(y="&"),e=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(zN,""),_=lN(p||g?"".concat(p," ").concat(g," { ").concat(k," }"):k);o.namespace&&(_=CE(_,o.namespace));var h=[];return Lu(_,dN(c.concat(fN(function(m){return h.push(m)})))),h};return d.hash=l.length?l.reduce(function(f,g){return g.name||Ga(15),gs(f,g.name)},5381).toString():"",d}var WN=new SE,ch=BN(),kE=ct.createContext({shouldForwardProp:void 0,styleSheet:WN,stylis:ch});kE.Consumer;ct.createContext(void 0);function F_(){return A.useContext(kE)}var HN=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ch);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Kp(this,function(){throw Ga(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ch),this.name+e.hash},t}(),GN=function(t){return t>="A"&&t<="Z"};function U_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;GN(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var TE=function(t){return t==null||t===!1||t===""},xE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!TE(s)&&(Array.isArray(s)&&s.isCss||Bs(s)?r.push("".concat(U_(i),":"),s,";"):ga(s)?r.push.apply(r,Nu(Nu(["".concat(i," {")],xE(s),!1),["}"],!1)):r.push("".concat(U_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in pN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ci(t,e,n,r){if(TE(t))return[];if(Gp(t))return[".".concat(t.styledComponentId)];if(Bs(t)){if(!Bs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ci(i,e,n,r)}var s;return t instanceof HN?n?(t.inject(n,r),[t.getName(r)]):[t]:ga(t)?xE(t):Array.isArray(t)?Array.prototype.concat.apply(Vc,t.map(function(o){return Ci(o,e,n,r)})):[t.toString()]}function KN(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Bs(n)&&!Gp(n))return!1}return!0}var qN=gE("6.1.1"),ZN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KN(e),this.componentId=n,this.baseHash=gs(qN,n),this.baseStyle=r,SE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pi(i,this.staticRulesId);else{var s=M_(Ci(this.rules,e,n,r)),o=lh(gs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=pi(i,o),this.staticRulesId=o}else{for(var l=gs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=M_(Ci(d,e,n,r));l=gs(l,f+c),u+=f}}if(u){var g=lh(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=pi(i,g)}}return i},t}(),IE=ct.createContext(void 0);IE.Consumer;var Ud={};function YN(t,e,n){var r=Gp(t),i=t,s=!Fd(t),o=e.attrs,a=o===void 0?Vc:o,l=e.componentId,u=l===void 0?function(v,E){var T=typeof v!="string"?"sc":N_(v);Ud[T]=(Ud[T]||0)+1;var C="".concat(T,"-").concat(wN("6.1.1"+T+Ud[T]));return E?"".concat(E,"-").concat(C):C}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(v){return Fd(v)?"styled.".concat(v):"Styled(".concat(EN(v),")")}(t):c,f=e.displayName&&e.componentId?"".concat(N_(e.displayName),"-").concat(e.componentId):e.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;p=function(v,E){return y(v,E)&&k(v,E)}}else p=y}var _=new ZN(n,f,r?i.componentStyle:void 0);function h(v,E){return function(T,C,P){var z=T.attrs,$=T.componentStyle,le=T.defaultProps,q=T.foldedComponentIds,re=T.styledComponentId,fe=T.target,Te=ct.useContext(IE),Ne=F_(),je=T.shouldForwardProp||Ne.shouldForwardProp,D=function(oe,ue,ee){for(var S,R=jt(jt({},ue),{className:void 0,theme:ee}),W=0;W<oe.length;W+=1){var j=Bs(S=oe[W])?S(R):S;for(var B in j)R[B]=B==="className"?pi(R[B],j[B]):B==="style"?jt(jt({},R[B]),j[B]):j[B]}return ue.className&&(R.className=pi(R.className,ue.className)),R}(z,C,gN(C,Te,le)||zs),X=D.as||fe,J={};for(var _e in D)D[_e]===void 0||_e[0]==="$"||_e==="as"||_e==="theme"||(_e==="forwardedAs"?J.as=D.forwardedAs:je&&!je(_e,X)||(J[_e]=D[_e]));var N=function(oe,ue){var ee=F_(),S=oe.generateAndInjectStyles(ue,ee.styleSheet,ee.stylis);return S}($,D),G=pi(q,re);return N&&(G+=" "+N),D.className&&(G+=" "+D.className),J[Fd(X)&&!mE.has(X)?"class":"className"]=G,J.ref=P,A.createElement(X,J)}(m,v,E)}h.displayName=d;var m=ct.forwardRef(h);return m.attrs=g,m.componentStyle=_,m.displayName=d,m.shouldForwardProp=p,m.foldedComponentIds=r?pi(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var T=[],C=1;C<arguments.length;C++)T[C-1]=arguments[C];for(var P=0,z=T;P<z.length;P++)uh(E,z[P],!0);return E}({},i.defaultProps,v):v}}),Kp(m,function(){return".".concat(m.styledComponentId)}),s&&wE(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function j_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var $_=function(t){return Object.assign(t,{isCss:!0})};function QN(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Bs(t)||ga(t)){var r=t;return $_(Ci(j_(Vc,Nu([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Ci(i):$_(Ci(j_(i,e)))}function dh(t,e,n){if(n===void 0&&(n=zs),!e)throw Ga(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,QN.apply(void 0,Nu([i],s,!1)))};return r.attrs=function(i){return dh(t,e,jt(jt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return dh(t,e,jt(jt({},n),i))},r}var RE=function(t){return dh(YN,t)},F=RE;mE.forEach(function(t){F[t]=RE(t)});const Hn={color:{background:"#D9EAF4",lightBlue:"#3E54B0",darkBlue:"#37488E"}},XN=F.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100vh;
    justify-content:center;
    
`,JN=F.h1`
    font-size:5em;
    color:${Hn.color.lightBlue};
    margin-bottom:40px;
    @media (max-width:900px){
        font-size:3em;
        text-align:center;
    }
`,eP=F.div`
    width:30%;
    height:400px;
    border-radius:20px;
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (max-width:900px){
        width:fit-content;
    }

`,tP=F.h1`
    font-size:2em;
    color:#000;
    text-align:center;
    font-weight:200;
    margin:20px;
`,V_=F.input`
    width:80%;
    height:5vh;
    background-color:#F9F9F9;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:5px;
    font-size:1em;
`,nP=F.button`
    background-color:${Hn.color.lightBlue};
    color:#FFF;
    width:40%;
    height:5vh;
    border:none;
    border-radius:10px;
    font-size:1em;
    cursor: pointer;
`,rP=F.h2`
    margin:10px;
    font-size:0.8em;
    font-weight:100;
    color:#000;
`,iP=F.button`
    background-color:${Hn.color.darkBlue};
    color:#FFF;
    width:50%;
    height:5vh;
    border:none;
    border-radius:10px;
    font-size:1em;
    cursor: pointer;
    margin:20px;
`,z_=F.span`
    font-size:0.8em;
    color:#fe4444; 
    text-align:center;
`;var sP="firebase",oP="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(sP,oP,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firebasestorage.googleapis.com",NE="storageBucket",aP=2*60*1e3,lP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends mr{constructor(e,n,r=0){super(jd(e),`Firebase Storage: ${n} (${jd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function jd(t){return"storage/"+t}function qp(){const t="An unknown error occurred, please check the error payload for server response.";return new qe(Ke.UNKNOWN,t)}function uP(t){return new qe(Ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function cP(t){return new qe(Ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe(Ke.UNAUTHENTICATED,t)}function fP(){return new qe(Ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hP(t){return new qe(Ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function pP(){return new qe(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mP(){return new qe(Ke.CANCELED,"User canceled the upload/download.")}function gP(t){return new qe(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function _P(t){return new qe(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yP(){return new qe(Ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+NE+"' property when initializing the app?")}function vP(){return new qe(Ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wP(){return new qe(Ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function EP(t){return new qe(Ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fh(t){return new qe(Ke.INVALID_ARGUMENT,t)}function PE(){return new qe(Ke.APP_DELETED,"The Firebase app was deleted.")}function SP(t){return new qe(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vo(t,e){return new qe(Ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _o(t){throw new qe(Ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(r.path==="")return r;throw _P(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},y=n===bE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",_=new RegExp(`^https?://${y}/${i}/${k}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:p,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<m.length;v++){const E=m[v],T=E.regex.exec(e);if(T){const C=T[E.indices.bucket];let P=T[E.indices.path];P||(P=""),r=new Zt(C,P),E.postModify(r);break}}if(r==null)throw gP(e);return r}}class CP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...k){u||(u=!0,e.apply(null,k))}function d(k){i=setTimeout(()=>{i=null,t(g,l())},k)}function f(){s&&clearTimeout(s)}function g(k,..._){if(u){f();return}if(k){f(),c.call(null,k,..._);return}if(l()||o){f(),c.call(null,k,..._);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let p=!1;function y(k){p||(p=!0,f(),!u&&(i!==null?(k||(a=2),clearTimeout(i),d(0)):k||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function TP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){return t!==void 0}function IP(t){return typeof t=="object"&&!Array.isArray(t)}function Zp(t){return typeof t=="string"||t instanceof String}function B_(t){return Yp()&&t instanceof Blob}function Yp(){return typeof Blob<"u"}function W_(t,e,n,r){if(r<e)throw fh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function AE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ki||(ki={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,p)=>{this.resolve_=g,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new El(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ki.NO_ERROR,l=s.getStatus();if(!a||RP(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ki.ABORT;r(!1,new El(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new El(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=qp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?PE():mP();o(l)}else{const l=pP();o(l)}};this.canceled_?n(!1,new El(!1,null,!0)):this.backoffId_=kP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class El{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function NP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DP(t,e,n,r,i,s,o=!0){const a=AE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return AP(u,e),NP(u,n),PP(u,s),OP(u,r),new bP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function LP(...t){const e=MP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yp())return new Blob(t);throw new qe(Ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){if(typeof atob>"u")throw EP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $d{constructor(e,n){this.data=e,this.contentType=n||null}}function jP(t,e){switch(t){case Mn.RAW:return new $d(OE(e));case Mn.BASE64:case Mn.BASE64URL:return new $d(DE(t,e));case Mn.DATA_URL:return new $d(VP(e),zP(e))}throw qp()}function OE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $P(t){let e;try{e=decodeURIComponent(t)}catch{throw Vo(Mn.DATA_URL,"Malformed data URL.")}return OE(e)}function DE(t,e){switch(t){case Mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Vo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Vo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UP(e)}catch(i){throw i.message.includes("polyfill")?i:Vo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ME{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Vo(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=BP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function VP(t){const e=new ME(t);return e.base64?DE(Mn.BASE64,e.rest):$P(e.rest)}function zP(t){return new ME(t).contentType}function BP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){let r=0,i="";B_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(B_(this.data_)){const r=this.data_,i=FP(r,e,n);return i===null?null:new Rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Rr(r,!0)}}static getBlob(...e){if(Yp()){const n=e.map(r=>r instanceof Rr?r.data_:r);return new Rr(LP.apply(null,n))}else{const n=e.map(o=>Zp(o)?jP(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Rr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){let e;try{e=JSON.parse(t)}catch{return null}return IP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function FE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||GP}}let Sl=null;function KP(t){return!Zp(t)||t.length<2?t:FE(t)}function UE(){if(Sl)return Sl;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return KP(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Sl=t,Sl}function qP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Zt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ZP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return qP(r,t),r}function jE(t,e,n){const r=LE(e);return r===null?null:ZP(t,r,n)}function YP(t,e,n,r){const i=LE(e);if(i===null||!Zp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),g=Qp(f,n,r),p=AE({alt:"media",token:u});return g+p})[0]}function QP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class $E{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){if(!t)throw qp()}function XP(t,e){function n(r,i){const s=jE(t,i,e);return VE(s!==null),s}return n}function JP(t,e){function n(r,i){const s=jE(t,i,e);return VE(s!==null),YP(s,i,t.host,t._protocol)}return n}function zE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=fP():i=dP():n.getStatus()===402?i=cP(t.bucket):n.getStatus()===403?i=hP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function eA(t){const e=zE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=uP(t.path)),s.serverResponse=i.serverResponse,s}return n}function tA(t,e,n){const r=e.fullServerUrl(),i=Qp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new $E(i,s,JP(t,n),o);return a.errorHandler=eA(e),a}function nA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function rA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=nA(null,e)),r}function iA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let v=0;v<2;v++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=rA(e,r,i),c=QP(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=Rr.getBlob(d,r,f);if(g===null)throw vP();const p={name:u.fullPath},y=Qp(s,t.host,t._protocol),k="POST",_=t.maxUploadRetryTime,h=new $E(y,k,XP(t,n),_);return h.urlParams=p,h.headers=o,h.body=g.uploadData(),h.errorHandler=zE(e),h}class sA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ki.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ki.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ki.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw _o("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _o("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _o("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _o("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _o("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class oA extends sA{initXhr(){this.xhr_.responseType="text"}}function BE(){return new oA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fi(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FE(this._location.path)}get storage(){return this._service}get parent(){const e=WP(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new Fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SP(e)}}function aA(t,e,n){t._throwIfRoot("uploadBytes");const r=iA(t.storage,t._location,UE(),new Rr(e,!0),n);return t.storage.makeRequestWithTokens(r,BE).then(i=>({metadata:i,ref:t}))}function lA(t){t._throwIfRoot("getDownloadURL");const e=tA(t.storage,t._location,UE());return t.storage.makeRequestWithTokens(e,BE).then(n=>{if(n===null)throw wP();return n})}function uA(t,e){const n=HP(t._location.path,e),r=new Zt(t._location.bucket,n);return new Fi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){return/^[A-Za-z]+:\/\//.test(t)}function dA(t,e){return new Fi(t,e)}function WE(t,e){if(t instanceof Xp){const n=t;if(n._bucket==null)throw yP();const r=new Fi(n,n._bucket);return e!=null?WE(r,e):r}else return e!==void 0?uA(t,e):t}function fA(t,e){if(e&&cA(e)){if(t instanceof Xp)return dA(t,e);throw fh("To use ref(service, url), the first argument must be a Storage instance.")}else return WE(t,e)}function H_(t,e){const n=e==null?void 0:e[NE];return n==null?null:Zt.makeFromBucketSpec(n,t)}function hA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kw(i,t.app.options.projectId))}class Xp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=bE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=aP,this._maxUploadRetryTime=lP,this._requests=new Set,i!=null?this._bucket=Zt.makeFromBucketSpec(i,this._host):this._bucket=H_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=H_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new CP(PE());{const o=DP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const G_="@firebase/storage",K_="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="storage";function pA(t,e,n){return t=at(t),aA(t,e,n)}function hh(t){return t=at(t),lA(t)}function Zl(t,e){return t=at(t),fA(t,e)}function mA(t=Ap(),e){t=at(t);const r=Oc(t,HE).getImmediate({identifier:e}),i=Ew("storage");return i&&gA(r,...i),r}function gA(t,e,n,r={}){hA(t,e,n,r)}function _A(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xp(n,r,i,e,Ki)}function yA(){Di(new Zr(HE,_A,"PUBLIC").setMultipleInstances(!0)),jn(G_,K_,""),jn(G_,K_,"esm2017")}yA();var q_={};const Z_="@firebase/database",Y_="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GE="";function vA(t){GE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:da(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wA(e)}}catch{}return new EA},mi=KE("localStorage"),ph=KE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Np("@firebase/database"),SA=function(){let t=1;return function(){return t++}}(),qE=function(t){const e=Rx(t),n=new kx;n.update(e);const r=n.digest();return xp.encodeByteArray(r)},Ka=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ka.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Ti=null,Q_=!0;const CA=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Is.logLevel=Ie.VERBOSE,Ti=Is.log.bind(Is),e&&ph.set("logging_enabled",!0)):typeof t=="function"?Ti=t:(Ti=null,ph.remove("logging_enabled"))},Tt=function(...t){if(Q_===!0&&(Q_=!1,Ti===null&&ph.get("logging_enabled")===!0&&CA(!0)),Ti){const e=Ka.apply(null,t);Ti(e)}},qa=function(t){return function(...e){Tt(t,...e)}},mh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ka(...t);Is.error(e)},fr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ka(...t)}`;throw Is.error(e),new Error(e)},Wt=function(...t){const e="FIREBASE WARNING: "+Ka(...t);Is.warn(e)},kA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ZE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ws="[MIN_NAME]",Ui="[MAX_NAME]",so=function(t,e){if(t===e)return 0;if(t===Ws||e===Ui)return-1;if(e===Ws||t===Ui)return 1;{const n=X_(t),r=X_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},xA=function(t,e){return t===e?0:t<e?-1:1},yo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Jp=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=Jp(t[e[r]]);return n+="}",n},YE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const QE=function(t){L(!ZE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},IA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const NA=new RegExp("^-?(0*)\\d{1,10}$"),PA=-2147483648,AA=2147483647,X_=function(t){if(NA.test(t)){const e=Number(t);if(e>=PA&&e<=AA)return e}return null},oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},OA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Wt(e)}}class Rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="5",XE="v",JE="s",e1="r",t1="f",n1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,r1="ls",i1="p",gh="ac",s1="websocket",o1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function l1(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===s1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===o1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LA(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ux(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={},zd={};function tm(t){const e=t.toString();return Vd[e]||(Vd[e]=new FA),Vd[e]}function UA(t,e){const n=t.toString();return zd[n]||(zd[n]=e()),zd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="start",$A="close",VA="pLPCommand",zA="pRTLPCB",u1="id",c1="pw",d1="ser",BA="cb",WA="seg",HA="ts",GA="d",KA="dframe",f1=1870,h1=30,qA=f1-h1,ZA=25e3,YA=3e4;class _s{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(e),this.stats_=tm(n),this.urlFn=l=>(this.appCheckToken&&(l[gh]=this.appCheckToken),l1(n,o1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YA)),TA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===J_)this.id=a,this.password=l;else if(o===$A)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[J_]="t",r[d1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[XE]=em,this.transportSessionId&&(r[JE]=this.transportSessionId),this.lastSessionId&&(r[r1]=this.lastSessionId),this.applicationId&&(r[i1]=this.applicationId),this.appCheckToken&&(r[gh]=this.appCheckToken),typeof location<"u"&&location.hostname&&n1.test(location.hostname)&&(r[e1]=t1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_s.forceAllow_=!0}static forceDisallow(){_s.forceDisallow_=!0}static isAvailable(){return _s.forceAllow_?!0:!_s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IA()&&!RA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yw(n),i=YE(r,qA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[KA]="t",r[u1]=e,r[c1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SA(),window[VA+this.uniqueCallbackIdentifier]=e,window[zA+this.uniqueCallbackIdentifier]=n,this.myIFrame=nm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Tt("frame writing exception"),a.stack&&Tt(a.stack),Tt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Tt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u1]=this.myID,e[c1]=this.myPW,e[d1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+h1+r.length<=f1;){const o=this.pendingSegs.shift();r=r+"&"+WA+i+"="+o.seg+"&"+HA+i+"="+o.ts+"&"+GA+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=16384,XA=45e3;let Uu=null;typeof MozWebSocket<"u"?Uu=MozWebSocket:typeof WebSocket<"u"&&(Uu=WebSocket);class mn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=tm(n),this.connURL=mn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[XE]=em,typeof location<"u"&&location.hostname&&n1.test(location.hostname)&&(o[e1]=t1),n&&(o[JE]=n),r&&(o[r1]=r),i&&(o[gh]=i),s&&(o[i1]=s),l1(e,s1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mi.set("previous_websocket_failure",!0);try{let r;xw(),this.mySock=new Uu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uu!==null&&!mn.forceDisallow_}static previouslyFailed(){return mi.isInMemoryStorage||mi.get("previous_websocket_failure")===!0}markConnectionHealthy(){mi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=da(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=YE(n,QA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mn.responsesRequiredToBeHealthy=2;mn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_s,mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mn&&mn.isAvailable();let r=n&&!mn.previouslyFailed();if(e.webSocketOnly&&(n||Wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mn];else{const i=this.transports_=[];for(const s of _a.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);_a.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_a.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=6e4,eO=5e3,tO=10*1024,nO=100*1024,Bd="t",ey="d",rO="s",ty="r",iO="e",ny="o",ry="a",iy="n",sy="p",sO="h";class oO{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new _a(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bd in e){const n=e[Bd];n===ry?this.upgradeIfSecondaryHealthy_():n===ty?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ny&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yo("t",e),r=yo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ry,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:iy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yo("t",e),r=yo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yo(Bd,e);if(ey in e){const r=e[ey];if(n===sO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===iy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rO?this.onConnectionShutdown_(r):n===ty?this.onReset_(r):n===iO?mh("Server Error: "+r):n===ny?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),em!==r&&Wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends m1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ju}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=32,ay=768;class be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new be("")}function me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yr(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new be(t.pieces_,e)}function g1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function y1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new be(e,0)}function rt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof be)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new be(n,0)}function ve(t){return t.pieceNum_>=t.pieces_.length}function At(t,e){const n=me(t),r=me(e);if(n===null)return e;if(n===r)return At(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rm(t,e){if(Yr(t)!==Yr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function _n(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Yr(t)>Yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class lO{constructor(e,n){this.errorPrefix_=n,this.parts_=_1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ac(this.parts_[r]);v1(this)}}function uO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ac(e),v1(t)}function cO(t){const e=t.parts_.pop();t.byteLength_-=Ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function v1(t){if(t.byteLength_>ay)throw new Error(t.errorPrefix_+"has a key path longer than "+ay+" bytes ("+t.byteLength_+").");if(t.parts_.length>oy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oy+") or object contains a cycle "+ci(t))}function ci(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im extends m1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new im}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=1e3,dO=60*5*1e3,ly=30*1e3,fO=1.3,hO=3e4,pO="server_kill",uy=3;class sr extends p1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sr.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vo,this.maxReconnectDelay_=dO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!xw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ju.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Pc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;sr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=Us(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ly)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mh("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hO&&(this.reconnectDelay_=vo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Tt("getToken() completed but was canceled"):(Tt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new oO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Wt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(pO)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Wt(d),l())}}}interrupt(e){Tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yf(this.interruptReasons_)&&(this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new be(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uy&&(this.reconnectDelay_=ly,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+GE.replace(/\./g,"-")]=1,Rp()?e["framework.cordova"]=1:Tw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ju.getInstance().currentlyOnline();return Yf(this.interruptReasons_)&&e}}sr.nextPersistentConnectionId_=0;sr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ge(Ws,e),i=new ge(Ws,n);return this.compare(r,i)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class w1 extends zc{static get __EMPTY_NODE(){return Cl}static set __EMPTY_NODE(e){Cl=e}compare(e,n){return so(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Ui,Cl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Cl)}toString(){return".key"}}const bs=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??$t.EMPTY_NODE,this.right=s??$t.EMPTY_NODE}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class mO{copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,n=$t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kl(this.root_,null,this.comparator_,!0,e)}}$t.EMPTY_NODE=new mO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){return so(t.name,e.name)}function sm(t,e){return so(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;function _O(t){_h=t}const E1=function(t){return typeof t=="number"?"number:"+QE(t):"string:"+t},S1=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else L(t===_h||t.isEmpty(),"priority of unexpected type.");L(t===_h||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cy;class ut{constructor(e,n=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),S1(this.priorityNode_)}static set __childrenNodeConstructor(e){cy=e}static get __childrenNodeConstructor(){return cy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:me(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=me(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+E1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=QE(this.value_):e+=this.value_,this.lazyHash_=qE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ut.VALUE_TYPE_ORDER.indexOf(n),s=ut.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C1,k1;function yO(t){C1=t}function vO(t){k1=t}class wO extends zc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?so(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Ui,new ut("[PRIORITY-POST]",k1))}makePost(e,n){const r=C1(e);return new ge(n,new ut("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ge=new wO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=Math.log(2);class SO{constructor(e){const n=s=>parseInt(Math.log(s)/EO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $u=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ht(f,d.node,ht.BLACK,null,null);{const g=parseInt(c/2,10)+l,p=i(l,g),y=i(g+1,u);return d=t[g],f=n?n(d):d,new ht(f,d.node,ht.BLACK,p,y)}},s=function(l){let u=null,c=null,d=t.length;const f=function(p,y){const k=d-p,_=d;d-=p;const h=i(k+1,_),m=t[k],v=n?n(m):m;g(new ht(v,m.node,y,null,h))},g=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),k=Math.pow(2,l.count-(p+1));y?f(k,ht.BLACK):(f(k,ht.BLACK),f(k,ht.RED))}return c},o=new SO(t.length),a=s(o);return new $t(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wd;const Ji={};class rr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Ji&&Ge,"ChildrenNode.ts has not been loaded"),Wd=Wd||new rr({".priority":Ji},{".priority":Ge}),Wd}get(e){const n=Us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $t?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){L(e!==bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ge.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=$u(r,e.getCompare()):a=Ji;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new rr(c,u)}addToIndexes(e,n){const r=Iu(this.indexes_,(i,s)=>{const o=Us(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ge.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),$u(a,o.getCompare())}else return Ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ge(e.name,a))),l.insert(e,e.node)}});return new rr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Iu(this.indexes_,i=>{if(i===Ji)return i;{const s=n.get(e.name);return s?i.remove(new ge(e.name,s)):i}});return new rr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;class ie{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&S1(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wo||(wo=new ie(new $t(sm),null,rr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wo}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wo:n}}getChild(e){const n=me(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ge(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wo:this.priorityNode_;return new ie(i,o,s)}}updateChild(e,n){const r=me(e);if(r===null)return n;{L(me(e)!==".priority"||Yr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ge,(o,a)=>{n[o]=a.val(e),r++,s&&ie.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+E1(this.getPriority().val())+":"),this.forEachChild(Ge,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ge(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ge.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Za?-1:0}withIndex(e){if(e===bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ge),i=n.getIterator(Ge);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bs?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CO extends ie{constructor(){super(new $t(sm),ie.EMPTY_NODE,rr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const Za=new CO;Object.defineProperties(ge,{MIN:{value:new ge(Ws,ie.EMPTY_NODE)},MAX:{value:new ge(Ui,Za)}});w1.__EMPTY_NODE=ie.EMPTY_NODE;ut.__childrenNodeConstructor=ie;_O(Za);vO(Za);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=!0;function pt(t,e=null){if(t===null)return ie.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ut(n,pt(e))}if(!(t instanceof Array)&&kO){const n=[];let r=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=pt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ge(o,l)))}}),n.length===0)return ie.EMPTY_NODE;const s=$u(n,gO,o=>o.name,sm);if(r){const o=$u(n,Ge.getCompare());return new ie(s,pt(e),new rr({".priority":o},{".priority":Ge}))}else return new ie(s,pt(e),rr.Default)}else{let n=ie.EMPTY_NODE;return Ht(t,(r,i)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const s=pt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(pt(e))}}yO(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO extends zc{constructor(e){super(),this.indexPath_=e,L(!ve(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?so(e.name,n.name):s}makePost(e,n){const r=pt(e),i=ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new ge(n,i)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,Za);return new ge(Ui,e)}toString(){return _1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO extends zc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?so(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const r=pt(e);return new ge(n,r)}toString(){return".value"}}const IO=new xO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){return{type:"value",snapshotNode:t}}function Hs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ya(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function va(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ya(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Hs(n,r)):o.trackChildChange(va(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ge,(i,s)=>{n.hasChild(i)||r.trackChildChange(ya(i,s))}),n.isLeafNode()||n.forEachChild(Ge,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(va(i,s,o))}else r.trackChildChange(Hs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.indexedFilter_=new om(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wa.getStartPost_(e),this.endPost_=wa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ge(n,r))||(r=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ie.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ie.EMPTY_NODE);const s=this;return n.forEachChild(Ge,(o,a)=>{s.matches(new ge(o,a))||(i=i.updateImmediateChild(o,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new wa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ge(n,r))||(r=ie.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ie.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ie.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new ge(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(va(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ya(n,d));const y=a.updateImmediateChild(n,ie.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Hs(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ya(u.name,u.node)),s.trackChildChange(Hs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ws}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ge}copy(){const e=new am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function NO(t){return t.loadsAllData()?new om(t.getIndex()):t.hasLimit()?new bO(t):new wa(t)}function dy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ge?n="$priority":t.index_===IO?n="$value":t.index_===bs?n="$key":(L(t.index_ instanceof TO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends p1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Vu.getListenId_(e,r),a={};this.listens_[o]=a;const l=dy(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Us(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Vu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=dy(e._queryParams),r=e._path.toString(),i=new Pc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+no(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=da(a.responseText)}catch{Wt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Wt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){return{value:null,children:new Map}}function x1(t,e,n){if(ve(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=me(e);t.children.has(r)||t.children.set(r,zu());const i=t.children.get(r);e=Oe(e),x1(i,e,n)}}function yh(t,e,n){t.value!==null?n(e,t.value):AO(t,(r,i)=>{const s=new be(e.toString()+"/"+r);yh(i,s,n)})}function AO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=10*1e3,DO=30*1e3,MO=5*60*1e3;class LO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OO(e);const r=hy+(DO-hy)*Math.random();zo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ht(e,(i,s)=>{s>0&&gr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),zo(this.reportStats_.bind(this),Math.floor(Math.random()*2*MO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yn||(yn={}));function I1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function um(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yn.ACK_USER_WRITE,this.source=I1()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new be(e));return new Bu(Ce(),n,this.revert)}}else return L(me(this.path)===e,"operationForChild called for unrelated child."),new Bu(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.source=e,this.path=n,this.type=yn.LISTEN_COMPLETE}operationForChild(e){return ve(this.path)?new Ea(this.source,Ce()):new Ea(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yn.OVERWRITE}operationForChild(e){return ve(this.path)?new ji(this.source,Ce(),this.snap.getImmediateChild(e)):new ji(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yn.MERGE}operationForChild(e){if(ve(this.path)){const n=this.children.subtree(new be(e));return n.isEmpty()?null:n.value?new ji(this.source,Ce(),n.value):new Sa(this.source,Ce(),n)}else return L(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sa(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const n=me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(RO(o.childName,o.snapshotNode))}),Eo(t,i,"child_removed",e,r,n),Eo(t,i,"child_added",e,r,n),Eo(t,i,"child_moved",s,r,n),Eo(t,i,"child_changed",e,r,n),Eo(t,i,"value",e,r,n),i}function Eo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>$O(t,a,l)),o.forEach(a=>{const l=jO(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function jO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $O(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const r=new ge(e.childName,e.snapshotNode),i=new ge(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){return{eventCache:t,serverCache:e}}function Bo(t,e,n,r){return Bc(new Qr(e,n,r),t.serverCache)}function R1(t,e,n,r){return Bc(t.eventCache,new Qr(e,n,r))}function Wu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $i(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd;const VO=()=>(Hd||(Hd=new $t(xA)),Hd);class Fe{constructor(e,n=VO()){this.value=e,this.children=n}static fromObject(e){let n=new Fe(null);return Ht(e,(r,i)=>{n=n.set(new be(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(ve(e))return null;{const r=me(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Oe(e),n);return s!=null?{path:rt(new be(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const n=me(e),r=this.children.get(n);return r!==null?r.subtree(Oe(e)):new Fe(null)}}set(e,n){if(ve(e))return new Fe(n,this.children);{const r=me(e),s=(this.children.get(r)||new Fe(null)).set(Oe(e),n),o=this.children.insert(r,s);return new Fe(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new Fe(null):new Fe(null,this.children);{const n=me(e),r=this.children.get(n);if(r){const i=r.remove(Oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Fe(null):new Fe(this.value,s)}else return this}}get(e){if(ve(e))return this.value;{const n=me(e),r=this.children.get(n);return r?r.get(Oe(e)):null}}setTree(e,n){if(ve(e))return n;{const r=me(e),s=(this.children.get(r)||new Fe(null)).setTree(Oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Fe(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(rt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ve(e))return null;{const s=me(e),o=this.children.get(s);return o?o.findOnPath_(Oe(e),rt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,r){if(ve(e))return this;{this.value&&r(n,this.value);const i=me(e),s=this.children.get(i);return s?s.foreachOnPath_(Oe(e),rt(n,i),r):new Fe(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(rt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.writeTree_=e}static empty(){return new Cn(new Fe(null))}}function Wo(t,e,n){if(ve(e))return new Cn(new Fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=At(i,e);return s=s.updateChild(o,n),new Cn(t.writeTree_.set(i,s))}else{const i=new Fe(n),s=t.writeTree_.setTree(e,i);return new Cn(s)}}}function py(t,e,n){let r=t;return Ht(n,(i,s)=>{r=Wo(r,rt(e,i),s)}),r}function my(t,e){if(ve(e))return Cn.empty();{const n=t.writeTree_.setTree(e,new Fe(null));return new Cn(n)}}function vh(t,e){return Zi(t,e)!=null}function Zi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(At(n.path,e)):null}function gy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ge,(r,i)=>{e.push(new ge(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ge(r,i.value))}),e}function Wr(t,e){if(ve(e))return t;{const n=Zi(t,e);return n!=null?new Cn(new Fe(n)):new Cn(t.writeTree_.subtree(e))}}function wh(t){return t.writeTree_.isEmpty()}function Gs(t,e){return b1(Ce(),t.writeTree_,e)}function b1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=b1(rt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(rt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e){return O1(e,t)}function zO(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Wo(t.visibleWrites,e,n)),t.lastWriteId=r}function BO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function WO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HO(a,r.path)?i=!1:_n(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return GO(t),!0;if(r.snap)t.visibleWrites=my(t.visibleWrites,r.path);else{const a=r.children;Ht(a,l=>{t.visibleWrites=my(t.visibleWrites,rt(r.path,l))})}return!0}else return!1}function HO(t,e){if(t.snap)return _n(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_n(rt(t.path,n),e))return!0;return!1}function GO(t){t.visibleWrites=N1(t.allWrites,KO,Ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KO(t){return t.visible}function N1(t,e,n){let r=Cn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)_n(n,o)?(a=At(n,o),r=Wo(r,a,s.snap)):_n(o,n)&&(a=At(o,n),r=Wo(r,Ce(),s.snap.getChild(a)));else if(s.children){if(_n(n,o))a=At(n,o),r=py(r,a,s.children);else if(_n(o,n))if(a=At(o,n),ve(a))r=py(r,Ce(),s.children);else{const l=Us(s.children,me(a));if(l){const u=l.getChild(Oe(a));r=Wo(r,Ce(),u)}}}else throw to("WriteRecord should have .snap or .children")}}return r}function P1(t,e,n,r,i){if(!r&&!i){const s=Zi(t.visibleWrites,e);if(s!=null)return s;{const o=Wr(t.visibleWrites,e);if(wh(o))return n;if(n==null&&!vh(o,Ce()))return null;{const a=n||ie.EMPTY_NODE;return Gs(o,a)}}}else{const s=Wr(t.visibleWrites,e);if(!i&&wh(s))return n;if(!i&&n==null&&!vh(s,Ce()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(_n(u.path,e)||_n(e,u.path))},a=N1(t.allWrites,o,e),l=n||ie.EMPTY_NODE;return Gs(a,l)}}}function qO(t,e,n){let r=ie.EMPTY_NODE;const i=Zi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ge,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Wr(t.visibleWrites,e);return n.forEachChild(Ge,(o,a)=>{const l=Gs(Wr(s,new be(o)),a);r=r.updateImmediateChild(o,l)}),gy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Wr(t.visibleWrites,e);return gy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ZO(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=rt(e,n);if(vh(t.visibleWrites,s))return null;{const o=Wr(t.visibleWrites,s);return wh(o)?i.getChild(n):Gs(o,i.getChild(n))}}function YO(t,e,n,r){const i=rt(e,n),s=Zi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Wr(t.visibleWrites,i);return Gs(o,r.getNode().getImmediateChild(n))}else return null}function QO(t,e){return Zi(t.visibleWrites,e)}function XO(t,e,n,r,i,s,o){let a;const l=Wr(t.visibleWrites,e),u=Zi(l,Ce());if(u!=null)a=u;else if(n!=null)a=Gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function JO(){return{visibleWrites:Cn.empty(),allWrites:[],lastWriteId:-1}}function Hu(t,e,n,r){return P1(t.writeTree,t.treePath,e,n,r)}function cm(t,e){return qO(t.writeTree,t.treePath,e)}function _y(t,e,n,r){return ZO(t.writeTree,t.treePath,e,n,r)}function Gu(t,e){return QO(t.writeTree,rt(t.treePath,e))}function eD(t,e,n,r,i,s){return XO(t.writeTree,t.treePath,e,n,r,i,s)}function dm(t,e,n){return YO(t.writeTree,t.treePath,e,n)}function A1(t,e){return O1(rt(t.treePath,e),t.writeTree)}function O1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,va(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ya(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,va(r,e.snapshotNode,i.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const D1=new nD;class fm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),s=eD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){return{filter:t}}function iD(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sD(t,e,n,r,i){const s=new tD;let o,a;if(n.type===yn.OVERWRITE){const u=n;u.source.fromUser?o=Eh(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=Ku(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===yn.MERGE){const u=n;u.source.fromUser?o=aD(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Sh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===yn.ACK_USER_WRITE){const u=n;u.revert?o=cD(t,e,u.path,r,i,s):o=lD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yn.LISTEN_COMPLETE)o=uD(t,e,n.path,r,s);else throw to("Unknown operation type: "+n.type);const l=s.getChanges();return oD(e,o,l),{viewCache:o,changes:l}}function oD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Wu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(T1(Wu(e)))}}function M1(t,e,n,r,i,s){const o=e.eventCache;if(Gu(r,n)!=null)return e;{let a,l;if(ve(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=$i(e),c=u instanceof ie?u:ie.EMPTY_NODE,d=cm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Hu(r,$i(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=me(n);if(u===".priority"){L(Yr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=_y(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Oe(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=_y(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=dm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Bo(e,a,o.isFullyInitialized()||ve(n),t.filter.filtersNodes())}}function Ku(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ve(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=me(n);if(!l.isCompleteForPath(n)&&Yr(n)>1)return e;const p=Oe(n),k=l.getNode().getImmediateChild(g).updateChild(p,r);g===".priority"?u=c.updatePriority(l.getNode(),k):u=c.updateChild(l.getNode(),g,k,p,D1,null)}const d=R1(e,u,l.isFullyInitialized()||ve(n),c.filtersNodes()),f=new fm(i,d,s);return M1(t,d,n,i,f,a)}function Eh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new fm(i,e,s);if(ve(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Bo(e,u,!0,t.filter.filtersNodes());else{const d=me(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Bo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Oe(n),g=a.getNode().getImmediateChild(d);let p;if(ve(f))p=r;else{const y=c.getCompleteChild(d);y!=null?g1(f)===".priority"&&y.getChild(y1(f)).isEmpty()?p=y:p=y.updateChild(f,r):p=ie.EMPTY_NODE}if(g.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),d,p,f,c,o);l=Bo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function yy(t,e){return t.eventCache.isCompleteForChild(e)}function aD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=rt(n,l);yy(e,me(c))&&(a=Eh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=rt(n,l);yy(e,me(c))||(a=Eh(t,a,c,u,i,s,o))}),a}function vy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Sh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ve(n)?u=r:u=new Fe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),p=vy(t,g,f);l=Ku(t,l,new be(d),p,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const p=e.serverCache.getNode().getImmediateChild(d),y=vy(t,p,f);l=Ku(t,l,new be(d),y,i,s,o,a)}}),l}function lD(t,e,n,r,i,s,o){if(Gu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ve(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ku(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ve(n)){let u=new Fe(null);return l.getNode().forEachChild(bs,(c,d)=>{u=u.set(new be(c),d)}),Sh(t,e,n,u,i,s,a,o)}else return e}else{let u=new Fe(null);return r.foreach((c,d)=>{const f=rt(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Sh(t,e,n,u,i,s,a,o)}}function uD(t,e,n,r,i){const s=e.serverCache,o=R1(e,s.getNode(),s.isFullyInitialized()||ve(n),s.isFiltered());return M1(t,o,n,r,D1,i)}function cD(t,e,n,r,i,s){let o;if(Gu(r,n)!=null)return e;{const a=new fm(r,e,i),l=e.eventCache.getNode();let u;if(ve(n)||me(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Hu(r,$i(e));else{const d=e.serverCache.getNode();L(d instanceof ie,"serverChildren would be complete if leaf node"),c=cm(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=me(n);let d=dm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Oe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,ie.EMPTY_NODE,Oe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hu(r,$i(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Gu(r,Ce())!=null,Bo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new om(r.getIndex()),s=NO(r);this.processor_=rD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ie.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(ie.EMPTY_NODE,a.getNode(),null),c=new Qr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Qr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bc(d,c),this.eventGenerator_=new FO(this.query_)}get query(){return this.query_}}function fD(t){return t.viewCache_.serverCache.getNode()}function hD(t){return Wu(t.viewCache_)}function pD(t,e){const n=$i(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ve(e)&&!n.getImmediateChild(me(e)).isEmpty())?n.getChild(e):null}function wy(t){return t.eventRegistrations_.length===0}function mD(t,e){t.eventRegistrations_.push(e)}function Ey(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Sy(t,e,n,r){e.type===yn.MERGE&&e.source.queryId!==null&&(L($i(t.viewCache_),"We should always have a full cache before handling merges"),L(Wu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=sD(t.processor_,i,e,n,r);return iD(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,L1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function gD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ge,(s,o)=>{r.push(Hs(s,o))}),n.isFullyInitialized()&&r.push(T1(n.getNode())),L1(t,r,n.getNode(),e)}function L1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;class F1{constructor(){this.views=new Map}}function _D(t){L(!qu,"__referenceConstructor has already been defined"),qu=t}function yD(){return L(qu,"Reference.ts has not been loaded"),qu}function vD(t){return t.views.size===0}function hm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),Sy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Sy(o,e,n,r));return s}}function U1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Hu(n,i?r:null),l=!1;a?l=!0:r instanceof ie?(a=cm(n,r),l=!1):(a=ie.EMPTY_NODE,l=!1);const u=Bc(new Qr(a,l,!1),new Qr(r,i,!1));return new dD(e,u)}return o}function wD(t,e,n,r,i,s){const o=U1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mD(o,n),gD(o,n)}function ED(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Xr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ey(u,n,r)),wy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ey(l,n,r)),wy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Xr(t)&&s.push(new(yD())(e._repo,e._path)),{removed:s,events:o}}function j1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hr(t,e){let n=null;for(const r of t.views.values())n=n||pD(r,e);return n}function $1(t,e){if(e._queryParams.loadsAllData())return Hc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function V1(t,e){return $1(t,e)!=null}function Xr(t){return Hc(t)!=null}function Hc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu;function SD(t){L(!Zu,"__referenceConstructor has already been defined"),Zu=t}function CD(){return L(Zu,"Reference.ts has not been loaded"),Zu}let kD=1;class Cy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fe(null),this.pendingWriteTree_=JO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function z1(t,e,n,r,i){return zO(t.pendingWriteTree_,e,n,r,i),i?Qa(t,new ji(I1(),e,n)):[]}function gi(t,e,n=!1){const r=BO(t.pendingWriteTree_,e);if(WO(t.pendingWriteTree_,e)){let s=new Fe(null);return r.snap!=null?s=s.set(Ce(),!0):Ht(r.children,o=>{s=s.set(new be(o),!0)}),Qa(t,new Bu(r.path,s,n))}else return[]}function Ya(t,e,n){return Qa(t,new ji(lm(),e,n))}function TD(t,e,n){const r=Fe.fromObject(n);return Qa(t,new Sa(lm(),e,r))}function xD(t,e){return Qa(t,new Ea(lm(),e))}function ID(t,e,n){const r=mm(t,n);if(r){const i=gm(r),s=i.path,o=i.queryId,a=At(s,e),l=new Ea(um(o),a);return _m(t,s,l)}else return[]}function Yu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||V1(o,e))){const l=ED(o,e,n,r);vD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>Xr(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=ND(f);for(let p=0;p<g.length;++p){const y=g[p],k=y.query,_=G1(t,y);t.listenProvider_.startListening(Ho(k),Ca(t,k),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ho(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Gc(f));t.listenProvider_.stopListening(Ho(f),g)}))}PD(t,u)}return a}function B1(t,e,n,r){const i=mm(t,r);if(i!=null){const s=gm(i),o=s.path,a=s.queryId,l=At(o,e),u=new ji(um(a),l,n);return _m(t,o,u)}else return[]}function RD(t,e,n,r){const i=mm(t,r);if(i){const s=gm(i),o=s.path,a=s.queryId,l=At(o,e),u=Fe.fromObject(n),c=new Sa(um(a),l,u);return _m(t,o,c)}else return[]}function Ch(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const p=At(f,i);s=s||Hr(g,p),o=o||Xr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Xr(a),s=s||Hr(a,Ce())):(a=new F1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ie.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,p)=>{const y=Hr(p,Ce());y&&(s=s.updateImmediateChild(g,y))}));const u=V1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Gc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=AD();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=Wc(t.pendingWriteTree_,i);let d=wD(a,e,n,c,s,l);if(!u&&!o&&!r){const f=$1(a,e);d=d.concat(OD(t,e,f))}return d}function pm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=At(o,e),u=Hr(a,l);if(u)return u});return P1(i,e,s,n,!0)}function bD(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=At(u,n);r=r||Hr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Hr(i,Ce()):(i=new F1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qr(r,!0,!1):null,a=Wc(t.pendingWriteTree_,e._path),l=U1(i,e,a,s?o.getNode():ie.EMPTY_NODE,s);return hD(l)}function Qa(t,e){return W1(e,t.syncPointTree_,null,Wc(t.pendingWriteTree_,Ce()))}function W1(t,e,n,r){if(ve(t.path))return H1(t,e,n,r);{const i=e.get(Ce());n==null&&i!=null&&(n=Hr(i,Ce()));let s=[];const o=me(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=A1(r,o);s=s.concat(W1(a,l,u,c))}return i&&(s=s.concat(hm(i,t,r,n))),s}}function H1(t,e,n,r){const i=e.get(Ce());n==null&&i!=null&&(n=Hr(i,Ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=A1(r,o),c=t.operationForChild(o);c&&(s=s.concat(H1(c,a,l,u)))}),i&&(s=s.concat(hm(i,t,r,n))),s}function G1(t,e){const n=e.query,r=Ca(t,n);return{hashFn:()=>(fD(e)||ie.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ID(t,n._path,r):xD(t,n._path);{const s=bA(i,n);return Yu(t,n,null,s)}}}}function Ca(t,e){const n=Gc(e);return t.queryToTagMap.get(n)}function Gc(t){return t._path.toString()+"$"+t._queryIdentifier}function mm(t,e){return t.tagToQueryMap.get(e)}function gm(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new be(t.substr(0,e))}}function _m(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=Wc(t.pendingWriteTree_,e);return hm(r,n,i,null)}function ND(t){return t.fold((e,n,r)=>{if(n&&Xr(n))return[Hc(n)];{let i=[];return n&&(i=j1(n)),Ht(r,(s,o)=>{i=i.concat(o)}),i}})}function Ho(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CD())(t._repo,t._path):t}function PD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function AD(){return kD++}function OD(t,e,n){const r=e._path,i=Ca(t,e),s=G1(t,n),o=t.listenProvider_.startListening(Ho(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!Xr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ve(u)&&c&&Xr(c))return[Hc(c).query];{let f=[];return c&&(f=f.concat(j1(c).map(g=>g.query))),Ht(d,(g,p)=>{f=f.concat(p)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ho(c),Ca(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ym(n)}node(){return this.node_}}class vm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=rt(this.path_,e);return new vm(this.syncTree_,n)}node(){return pm(this.syncTree_,this.path_)}}const DD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ky=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LD(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},LD=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FD=function(t,e,n,r){return wm(e,new vm(n,t),r)},K1=function(t,e,n){return wm(t,new ym(e),n)};function wm(t,e,n){const r=t.getPriority().val(),i=ky(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ky(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ut(a,pt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ut(i))),o.forEachChild(Ge,(a,l)=>{const u=wm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Sm(t,e){let n=e instanceof be?e:new be(e),r=t,i=me(n);for(;i!==null;){const s=Us(r.node.children,i)||{children:{},childCount:0};r=new Em(i,r,s),n=Oe(n),i=me(n)}return r}function ao(t){return t.node.value}function q1(t,e){t.node.value=e,kh(t)}function Z1(t){return t.node.childCount>0}function UD(t){return ao(t)===void 0&&!Z1(t)}function Kc(t,e){Ht(t.node.children,(n,r)=>{e(new Em(n,t,r))})}function Y1(t,e,n,r){n&&!r&&e(t),Kc(t,i=>{Y1(i,e,!0,r)}),n&&r&&e(t)}function jD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xa(t){return new be(t.parent===null?t.name:Xa(t.parent)+"/"+t.name)}function kh(t){t.parent!==null&&$D(t.parent,t.name,t)}function $D(t,e,n){const r=UD(n),i=gr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,kh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=/[\[\].#$\/\u0000-\u001F\u007F]/,zD=/[\[\].#$\u0000-\u001F\u007F]/,Gd=10*1024*1024,Q1=function(t){return typeof t=="string"&&t.length!==0&&!VD.test(t)},X1=function(t){return typeof t=="string"&&t.length!==0&&!zD.test(t)},BD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),X1(t)},J1=function(t,e,n,r){r&&e===void 0||Cm(bp(t,"value"),e,n)},Cm=function(t,e,n){const r=n instanceof be?new lO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ci(r));if(typeof e=="function")throw new Error(t+"contains a function "+ci(r)+" with contents = "+e.toString());if(ZE(e))throw new Error(t+"contains "+e.toString()+" "+ci(r));if(typeof e=="string"&&e.length>Gd/3&&Ac(e)>Gd)throw new Error(t+"contains a string greater than "+Gd+" utf8 bytes "+ci(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Q1(o)))throw new Error(t+" contains an invalid key ("+o+") "+ci(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uO(r,o),Cm(t,a,r),cO(r)}),i&&s)throw new Error(t+' contains ".value" child '+ci(r)+" in addition to actual children.")}},eS=function(t,e,n,r){if(!(r&&n===void 0)&&!X1(n))throw new Error(bp(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WD=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eS(t,e,n,r)},tS=function(t,e){if(me(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},HD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Q1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BD(n))throw new Error(bp(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function km(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function nS(t,e,n){km(t,n),rS(t,r=>rm(r,e))}function zn(t,e,n){km(t,n),rS(t,r=>_n(r,e)||_n(e,r))}function rS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(KD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ti&&Tt("event: "+n.toString()),oo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="repo_interrupt",ZD=25;class YD{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zu(),this.transactionQueueTree_=new Em,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QD(t,e,n){if(t.stats_=tm(t.repoInfo_),t.forceRestClient_||OA())t.server_=new Vu(t.repoInfo_,(r,i,s,o)=>{Ty(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new sr(t.repoInfo_,e,(r,i,s,o)=>{Ty(t,r,i,s,o)},r=>{xy(t,r)},r=>{XD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=UA(t.repoInfo_,()=>new LO(t.stats_,t.server_)),t.infoData_=new PO,t.infoSyncTree_=new Cy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ya(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xm(t,"connected",!1),t.serverSyncTree_=new Cy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);zn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iS(t){const n=t.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tm(t){return DD({timestamp:iS(t)})}function Ty(t,e,n,r,i){t.dataUpdateCount++;const s=new be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Iu(n,u=>pt(u));o=RD(t.serverSyncTree_,s,l,i)}else{const l=pt(n);o=B1(t.serverSyncTree_,s,l,i)}else if(r){const l=Iu(n,u=>pt(u));o=TD(t.serverSyncTree_,s,l)}else{const l=pt(n);o=Ya(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Zc(t,s)),zn(t.eventQueue_,a,o)}function xy(t,e){xm(t,"connected",e),e===!1&&tM(t)}function XD(t,e){Ht(e,(n,r)=>{xm(t,n,r)})}function xm(t,e,n){const r=new be("/.info/"+e),i=pt(n);t.infoData_.updateSnapshot(r,i);const s=Ya(t.infoSyncTree_,r,i);zn(t.eventQueue_,r,s)}function sS(t){return t.nextWriteId_++}function JD(t,e,n){const r=bD(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=pt(i).withIndex(e._queryParams.getIndex());Ch(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ya(t.serverSyncTree_,e._path,s);else{const a=Ca(t.serverSyncTree_,e);o=B1(t.serverSyncTree_,e._path,s,a)}return zn(t.eventQueue_,e._path,o),Yu(t.serverSyncTree_,e,n,null,!0),s},i=>(qc(t,"get for query "+nt(e)+" failed: "+i),Promise.reject(new Error(i))))}function eM(t,e,n,r,i){qc(t,"set",{path:e.toString(),value:n,priority:r});const s=Tm(t),o=pt(n,r),a=pm(t.serverSyncTree_,e),l=K1(o,a,s),u=sS(t),c=z1(t.serverSyncTree_,e,l,u,!0);km(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const p=f==="ok";p||Wt("set at "+e+" failed: "+f);const y=gi(t.serverSyncTree_,u,!p);zn(t.eventQueue_,e,y),iM(t,i,f,g)});const d=cS(t,e);Zc(t,d),zn(t.eventQueue_,d,[])}function tM(t){qc(t,"onDisconnectEvents");const e=Tm(t),n=zu();yh(t.onDisconnect_,Ce(),(i,s)=>{const o=FD(i,s,t.serverSyncTree_,e);x1(n,i,o)});let r=[];yh(n,Ce(),(i,s)=>{r=r.concat(Ya(t.serverSyncTree_,i,s));const o=cS(t,i);Zc(t,o)}),t.onDisconnect_=zu(),zn(t.eventQueue_,Ce(),r)}function nM(t,e,n){let r;me(e._path)===".info"?r=Ch(t.infoSyncTree_,e,n):r=Ch(t.serverSyncTree_,e,n),nS(t.eventQueue_,e._path,r)}function Iy(t,e,n){let r;me(e._path)===".info"?r=Yu(t.infoSyncTree_,e,n):r=Yu(t.serverSyncTree_,e,n),nS(t.eventQueue_,e._path,r)}function rM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qD)}function qc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Tt(n,...e)}function iM(t,e,n,r){e&&oo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function oS(t,e,n){return pm(t.serverSyncTree_,e,n)||ie.EMPTY_NODE}function Im(t,e=t.transactionQueueTree_){if(e||Yc(t,e),ao(e)){const n=lS(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&sM(t,Xa(e),n)}else Z1(e)&&Kc(e,n=>{Im(t,n)})}function sM(t,e,n){const r=n.map(u=>u.currentWriteId),i=oS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=At(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{qc(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(gi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Yc(t,Sm(t.transactionQueueTree_,e)),Im(t,t.transactionQueueTree_),zn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)oo(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Wt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Zc(t,e)}},o)}function Zc(t,e){const n=aS(t,e),r=Xa(n),i=lS(t,n);return oM(t,i,r),r}function oM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=At(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ZD)c=!0,d="maxretry",i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=oS(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Cm("transaction failed: Data returned ",g,l.path);let p=pt(g);typeof g=="object"&&g!=null&&gr(g,".priority")||(p=p.updatePriority(f.getPriority()));const k=l.currentWriteId,_=Tm(t),h=K1(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=h,l.currentWriteId=sS(t),o.splice(o.indexOf(k),1),i=i.concat(z1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(gi(t.serverSyncTree_,k,!0))}else c=!0,d="nodata",i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0))}zn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Yc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)oo(r[a]);Im(t,t.transactionQueueTree_)}function aS(t,e){let n,r=t.transactionQueueTree_;for(n=me(e);n!==null&&ao(r)===void 0;)r=Sm(r,n),e=Oe(e),n=me(e);return r}function lS(t,e){const n=[];return uS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function uS(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kc(e,i=>{uS(t,i,n)})}function Yc(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,q1(e,n.length>0?n:void 0)}Kc(e,r=>{Yc(t,r)})}function cS(t,e){const n=Xa(aS(t,e)),r=Sm(t.transactionQueueTree_,e);return jD(r,i=>{Kd(t,i)}),Kd(t,r),Y1(r,i=>{Kd(t,i)}),n}function Kd(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?q1(e,void 0):n.length=s+1,zn(t.eventQueue_,Xa(e),i);for(let o=0;o<r.length;o++)oo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ry=function(t,e){const n=uM(t),r=n.namespace;n.domain==="firebase.com"&&fr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new a1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new be(n.pathString)}},uM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=aM(t.substring(c,d)));const f=lM(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cM=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=by.charAt(n%64),n=Math.floor(n/64);L(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=by.charAt(e[i]);return L(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class fS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ve(this._path)?null:g1(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=fy(this._queryParams),n=Jp(e);return n==="{}"?"default":n}get _queryObject(){return fy(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof Rm))return!1;const n=this._repo===e._repo,r=rm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+aO(this._path)}}class Gn extends Rm{constructor(e,n){super(e,n,new am,!1)}get parent(){const e=y1(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new be(e),r=qs(this.ref,e);return new Ks(this._node.getChild(n),r,Ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ks(i,qs(this.ref,r),Ge)))}hasChild(e){const n=new be(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mt(t,e){return t=at(t),t._checkNotDeleted("ref"),e!==void 0?qs(t._root,e):t._root}function qs(t,e){return t=at(t),me(t._path)===null?WD("child","path",e,!1):eS("child","path",e,!1),new Gn(t._repo,rt(t._path,e))}function Ny(t,e){t=at(t),tS("push",t._path),J1("push",e,t._path,!0);const n=iS(t._repo),r=cM(n),i=qs(t,r),s=qs(t,r);let o;return e!=null?o=xi(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function xi(t,e){t=at(t),tS("set",t._path),J1("set",e,t._path,!1);const n=new Pc;return eM(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Py(t){t=at(t);const e=new hS(()=>{}),n=new Qc(e);return JD(t._repo,t,n).then(r=>new Ks(r,new Gn(t._repo,t._path),t._queryParams.getIndex()))}class Qc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new dS("value",this,new Ks(e.snapshotNode,new Gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fS(this,e,n):null}matches(e){return e instanceof Qc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class bm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fS(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=qs(new Gn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new dS(e.type,this,new Ks(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dM(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Iy(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new hS(n,s||void 0),a=e==="value"?new Qc(o):new bm(e,o);return nM(t._repo,t,a),()=>Iy(t._repo,t,a)}function Gr(t,e,n,r){return dM(t,"value",e,n,r)}_D(Gn);SD(Gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM="FIREBASE_DATABASE_EMULATOR_HOST",Th={};let hM=!1;function pM(t,e,n,r){t.repoInfo_=new a1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function mM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Tt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ry(s,i),a=o.repoInfo,l,u;typeof process<"u"&&q_&&(u=q_[fM]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Ry(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Rs(Rs.OWNER):new MA(t.name,t.options,e);HD("Invalid Firebase Database URL",o),ve(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=_M(a,t,c,new DA(t.name,n));return new yM(d,t)}function gM(t,e){const n=Th[e];(!n||n[t.key]!==t)&&fr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rM(t),delete n[t.key]}function _M(t,e,n,r){let i=Th[e.name];i||(i={},Th[e.name]=i);let s=i[t.toURLString()];return s&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new YD(t,hM,n,r),i[t.toURLString()]=s,s}class yM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function vM(t=Ap(),e){const n=Oc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ew("database");r&&wM(n,...r)}return n}function wM(t,e,n,r={}){t=at(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&fr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Rs(Rs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:kw(r.mockUserToken,t.app.options.projectId);s=new Rs(o)}pM(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t){vA(Ki),Di(new Zr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return mM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),jn(Z_,Y_,t),jn(Z_,Y_,"esm2017")}sr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EM();const SM={apiKey:"AIzaSyDD4urg6eE2W5GpDs4Mp1_Wx8AxpchY5uo",authDomain:"yourmessage-91925.firebaseapp.com",projectId:"yourmessage-91925",storageBucket:"yourmessage-91925.appspot.com",messagingSenderId:"538135518428",appId:"1:538135518428:web:057f0ebf0a7c3da270a819"},Nm=Nw(SM),Je=qb(Nm);DR(Je,$p);const gt=vM(Nm),Yl=mA(Nm);var Ja=t=>t.type==="checkbox",ys=t=>t instanceof Date,Pt=t=>t==null;const pS=t=>typeof t=="object";var ot=t=>!Pt(t)&&!Array.isArray(t)&&pS(t)&&!ys(t),CM=t=>ot(t)&&t.target?Ja(t.target)?t.target.checked:t.target.value:t,kM=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,TM=(t,e)=>t.has(kM(e)),xM=t=>{const e=t.constructor&&t.constructor.prototype;return ot(e)&&e.hasOwnProperty("isPrototypeOf")},Pm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function qn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Pm&&(t instanceof Blob||t instanceof FileList))&&(n||ot(t)))if(e=n?[]:{},!n&&!xM(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=qn(t[r]));else return t;return e}var el=t=>Array.isArray(t)?t.filter(Boolean):[],Ye=t=>t===void 0,Q=(t,e,n)=>{if(!e||!ot(t))return n;const r=el(e.split(/[,[\].]+?/)).reduce((i,s)=>Pt(i)?i:i[s],t);return Ye(r)||r===t?Ye(t[e])?n:t[e]:r},Xn=t=>typeof t=="boolean";const Ay={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},gn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Kn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ct.createContext(null);var IM=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==gn.all&&(e._proxyFormState[o]=!r||gn.all),n&&(n[o]=!0),t[o]}});return i},nn=t=>ot(t)&&!Object.keys(t).length,RM=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return nn(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||gn.all))},qd=t=>Array.isArray(t)?t:[t];function bM(t){const e=ct.useRef(t);e.current=t,ct.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Ln=t=>typeof t=="string",NM=(t,e,n,r,i)=>Ln(t)?(r&&e.watch.add(t),Q(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),Q(n,s))):(r&&(e.watchAll=!0),n),Am=t=>/^\w*$/.test(t),mS=t=>el(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Re=(t,e,n)=>{let r=-1;const i=Am(e)?[e]:mS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=ot(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},gS=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},Oy=t=>({isOnSubmit:!t||t===gn.onSubmit,isOnBlur:t===gn.onBlur,isOnChange:t===gn.onChange,isOnAll:t===gn.all,isOnTouch:t===gn.onTouched}),Dy=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const Go=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=Q(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;Go(a,e)}else ot(a)&&Go(a,e)}}};var PM=(t,e,n)=>{const r=el(Q(t,n));return Re(r,"root",e[n]),Re(t,n,r),t},Om=t=>t.type==="file",Or=t=>typeof t=="function",Qu=t=>{if(!Pm)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Ql=t=>Ln(t),Dm=t=>t.type==="radio",Xu=t=>t instanceof RegExp;const My={value:!1,isValid:!1},Ly={value:!0,isValid:!0};var _S=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ye(t[0].attributes.value)?Ye(t[0].value)||t[0].value===""?Ly:{value:t[0].value,isValid:!0}:Ly:My}return My};const Fy={isValid:!1,value:null};var yS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,Fy):Fy;function Uy(t,e,n="validate"){if(Ql(t)||Array.isArray(t)&&t.every(Ql)||Xn(t)&&!t)return{type:n,message:Ql(t)?t:"",ref:e}}var es=t=>ot(t)&&!Xu(t)?t:{value:t,message:""},jy=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:g,name:p,valueAsNumber:y,mount:k,disabled:_}=t._f,h=Q(e,p);if(!k||_)return{};const m=o?o[0]:s,v=q=>{r&&m.reportValidity&&(m.setCustomValidity(Xn(q)?"":q||""),m.reportValidity())},E={},T=Dm(s),C=Ja(s),P=T||C,z=(y||Om(s))&&Ye(s.value)&&Ye(h)||Qu(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,$=gS.bind(null,p,n,E),le=(q,re,fe,Te=Kn.maxLength,Ne=Kn.minLength)=>{const je=q?re:fe;E[p]={type:q?Te:Ne,message:je,ref:s,...$(q?Te:Ne,je)}};if(i?!Array.isArray(h)||!h.length:a&&(!P&&(z||Pt(h))||Xn(h)&&!h||C&&!_S(o).isValid||T&&!yS(o).isValid)){const{value:q,message:re}=Ql(a)?{value:!!a,message:a}:es(a);if(q&&(E[p]={type:Kn.required,message:re,ref:m,...$(Kn.required,re)},!n))return v(re),E}if(!z&&(!Pt(c)||!Pt(d))){let q,re;const fe=es(d),Te=es(c);if(!Pt(h)&&!isNaN(h)){const Ne=s.valueAsNumber||h&&+h;Pt(fe.value)||(q=Ne>fe.value),Pt(Te.value)||(re=Ne<Te.value)}else{const Ne=s.valueAsDate||new Date(h),je=J=>new Date(new Date().toDateString()+" "+J),D=s.type=="time",X=s.type=="week";Ln(fe.value)&&h&&(q=D?je(h)>je(fe.value):X?h>fe.value:Ne>new Date(fe.value)),Ln(Te.value)&&h&&(re=D?je(h)<je(Te.value):X?h<Te.value:Ne<new Date(Te.value))}if((q||re)&&(le(!!q,fe.message,Te.message,Kn.max,Kn.min),!n))return v(E[p].message),E}if((l||u)&&!z&&(Ln(h)||i&&Array.isArray(h))){const q=es(l),re=es(u),fe=!Pt(q.value)&&h.length>+q.value,Te=!Pt(re.value)&&h.length<+re.value;if((fe||Te)&&(le(fe,q.message,re.message),!n))return v(E[p].message),E}if(f&&!z&&Ln(h)){const{value:q,message:re}=es(f);if(Xu(q)&&!h.match(q)&&(E[p]={type:Kn.pattern,message:re,ref:s,...$(Kn.pattern,re)},!n))return v(re),E}if(g){if(Or(g)){const q=await g(h,e),re=Uy(q,m);if(re&&(E[p]={...re,...$(Kn.validate,re.message)},!n))return v(re.message),E}else if(ot(g)){let q={};for(const re in g){if(!nn(q)&&!n)break;const fe=Uy(await g[re](h,e),m,re);fe&&(q={...fe,...$(re,fe.message)},v(fe.message),n&&(E[p]=q))}if(!nn(q)&&(E[p]={ref:m,...q},!n))return E}}return v(!0),E};function AM(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ye(t)?r++:t[e[r++]];return t}function OM(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ye(t[e]))return!1;return!0}function yt(t,e){const n=Array.isArray(e)?e:Am(e)?[e]:mS(e),r=n.length===1?t:AM(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(ot(r)&&nn(r)||Array.isArray(r)&&OM(r))&&yt(t,n.slice(0,-1)),t}var Zd=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},Ju=t=>Pt(t)||!pS(t);function _i(t,e){if(Ju(t)||Ju(e))return t===e;if(ys(t)&&ys(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ys(s)&&ys(o)||ot(s)&&ot(o)||Array.isArray(s)&&Array.isArray(o)?!_i(s,o):s!==o)return!1}}return!0}var vS=t=>t.type==="select-multiple",DM=t=>Dm(t)||Ja(t),Yd=t=>Qu(t)&&t.isConnected,wS=t=>{for(const e in t)if(Or(t[e]))return!0;return!1};function ec(t,e={}){const n=Array.isArray(t);if(ot(t)||n)for(const r in t)Array.isArray(t[r])||ot(t[r])&&!wS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},ec(t[r],e[r])):Pt(t[r])||(e[r]=!0);return e}function ES(t,e,n){const r=Array.isArray(t);if(ot(t)||r)for(const i in t)Array.isArray(t[i])||ot(t[i])&&!wS(t[i])?Ye(e)||Ju(n[i])?n[i]=Array.isArray(t[i])?ec(t[i],[]):{...ec(t[i])}:ES(t[i],Pt(e)?{}:e[i],n[i]):n[i]=!_i(t[i],e[i]);return n}var Qd=(t,e)=>ES(t,e,ec(e)),SS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ye(t)?t:e?t===""?NaN:t&&+t:n&&Ln(t)?new Date(t):r?r(t):t;function Xd(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Om(e)?e.files:Dm(e)?yS(t.refs).value:vS(e)?[...e.selectedOptions].map(({value:n})=>n):Ja(e)?_S(t.refs).value:SS(Ye(e.value)?t.ref.value:e.value,t)}var MM=(t,e,n,r)=>{const i={};for(const s of t){const o=Q(e,s);o&&Re(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},So=t=>Ye(t)?t:Xu(t)?t.source:ot(t)?Xu(t.value)?t.value.source:t.value:t,LM=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function $y(t,e,n){const r=Q(t,n);if(r||Am(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Q(e,s),a=Q(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var FM=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,UM=(t,e)=>!el(Q(t,e)).length&&yt(t,e);const jM={mode:gn.onSubmit,reValidateMode:gn.onChange,shouldFocusError:!0};function $M(t={},e){let n={...jM,...t},r={submitCount:0,isDirty:!1,isLoading:Or(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},s=ot(n.defaultValues)||ot(n.values)?qn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:qn(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Zd(),array:Zd(),state:Zd()},g=t.resetOptions&&t.resetOptions.keepDirtyValues,p=Oy(n.mode),y=Oy(n.reValidateMode),k=n.criteriaMode===gn.all,_=w=>x=>{clearTimeout(c),c=setTimeout(w,x)},h=async w=>{if(d.isValid||w){const x=n.resolver?nn((await $()).errors):await q(i,!0);x!==r.isValid&&f.state.next({isValid:x})}},m=w=>d.isValidating&&f.state.next({isValidating:w}),v=(w,x=[],b,Y,V=!0,U=!0)=>{if(Y&&b){if(a.action=!0,U&&Array.isArray(Q(i,w))){const ne=b(Q(i,w),Y.argA,Y.argB);V&&Re(i,w,ne)}if(U&&Array.isArray(Q(r.errors,w))){const ne=b(Q(r.errors,w),Y.argA,Y.argB);V&&Re(r.errors,w,ne),UM(r.errors,w)}if(d.touchedFields&&U&&Array.isArray(Q(r.touchedFields,w))){const ne=b(Q(r.touchedFields,w),Y.argA,Y.argB);V&&Re(r.touchedFields,w,ne)}d.dirtyFields&&(r.dirtyFields=Qd(s,o)),f.state.next({name:w,isDirty:fe(w,x),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Re(o,w,x)},E=(w,x)=>{Re(r.errors,w,x),f.state.next({errors:r.errors})},T=w=>{r.errors=w,f.state.next({errors:r.errors,isValid:!1})},C=(w,x,b,Y)=>{const V=Q(i,w);if(V){const U=Q(o,w,Ye(b)?Q(s,w):b);Ye(U)||Y&&Y.defaultChecked||x?Re(o,w,x?U:Xd(V._f)):je(w,U),a.mount&&h()}},P=(w,x,b,Y,V)=>{let U=!1,ne=!1;const Ae={name:w},lt=!!(Q(i,w)&&Q(i,w)._f.disabled);if(!b||Y){d.isDirty&&(ne=r.isDirty,r.isDirty=Ae.isDirty=fe(),U=ne!==Ae.isDirty);const bn=lt||_i(Q(s,w),x);ne=!!(!lt&&Q(r.dirtyFields,w)),bn||lt?yt(r.dirtyFields,w):Re(r.dirtyFields,w,!0),Ae.dirtyFields=r.dirtyFields,U=U||d.dirtyFields&&ne!==!bn}if(b){const bn=Q(r.touchedFields,w);bn||(Re(r.touchedFields,w,b),Ae.touchedFields=r.touchedFields,U=U||d.touchedFields&&bn!==b)}return U&&V&&f.state.next(Ae),U?Ae:{}},z=(w,x,b,Y)=>{const V=Q(r.errors,w),U=d.isValid&&Xn(x)&&r.isValid!==x;if(t.delayError&&b?(u=_(()=>E(w,b)),u(t.delayError)):(clearTimeout(c),u=null,b?Re(r.errors,w,b):yt(r.errors,w)),(b?!_i(V,b):V)||!nn(Y)||U){const ne={...Y,...U&&Xn(x)?{isValid:x}:{},errors:r.errors,name:w};r={...r,...ne},f.state.next(ne)}m(!1)},$=async w=>n.resolver(o,n.context,MM(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),le=async w=>{const{errors:x}=await $(w);if(w)for(const b of w){const Y=Q(x,b);Y?Re(r.errors,b,Y):yt(r.errors,b)}else r.errors=x;return x},q=async(w,x,b={valid:!0})=>{for(const Y in w){const V=w[Y];if(V){const{_f:U,...ne}=V;if(U){const Ae=l.array.has(U.name),lt=await jy(V,o,k,n.shouldUseNativeValidation&&!x,Ae);if(lt[U.name]&&(b.valid=!1,x))break;!x&&(Q(lt,U.name)?Ae?PM(r.errors,lt,U.name):Re(r.errors,U.name,lt[U.name]):yt(r.errors,U.name))}ne&&await q(ne,x,b)}}return b.valid},re=()=>{for(const w of l.unMount){const x=Q(i,w);x&&(x._f.refs?x._f.refs.every(b=>!Yd(b)):!Yd(x._f.ref))&&R(w)}l.unMount=new Set},fe=(w,x)=>(w&&x&&Re(o,w,x),!_i(G(),s)),Te=(w,x,b)=>NM(w,l,{...a.mount?o:Ye(x)?s:Ln(w)?{[w]:x}:x},b,x),Ne=w=>el(Q(a.mount?o:s,w,t.shouldUnregister?Q(s,w,[]):[])),je=(w,x,b={})=>{const Y=Q(i,w);let V=x;if(Y){const U=Y._f;U&&(!U.disabled&&Re(o,w,SS(x,U)),V=Qu(U.ref)&&Pt(x)?"":x,vS(U.ref)?[...U.ref.options].forEach(ne=>ne.selected=V.includes(ne.value)):U.refs?Ja(U.ref)?U.refs.length>1?U.refs.forEach(ne=>(!ne.defaultChecked||!ne.disabled)&&(ne.checked=Array.isArray(V)?!!V.find(Ae=>Ae===ne.value):V===ne.value)):U.refs[0]&&(U.refs[0].checked=!!V):U.refs.forEach(ne=>ne.checked=ne.value===V):Om(U.ref)?U.ref.value="":(U.ref.value=V,U.ref.type||f.values.next({name:w,values:{...o}})))}(b.shouldDirty||b.shouldTouch)&&P(w,V,b.shouldTouch,b.shouldDirty,!0),b.shouldValidate&&N(w)},D=(w,x,b)=>{for(const Y in x){const V=x[Y],U=`${w}.${Y}`,ne=Q(i,U);(l.array.has(w)||!Ju(V)||ne&&!ne._f)&&!ys(V)?D(U,V,b):je(U,V,b)}},X=(w,x,b={})=>{const Y=Q(i,w),V=l.array.has(w),U=qn(x);Re(o,w,U),V?(f.array.next({name:w,values:{...o}}),(d.isDirty||d.dirtyFields)&&b.shouldDirty&&f.state.next({name:w,dirtyFields:Qd(s,o),isDirty:fe(w,U)})):Y&&!Y._f&&!Pt(U)?D(w,U,b):je(w,U,b),Dy(w,l)&&f.state.next({...r}),f.values.next({name:w,values:{...o}}),!a.mount&&e()},J=async w=>{const x=w.target;let b=x.name,Y=!0;const V=Q(i,b),U=()=>x.type?Xd(V._f):CM(w),ne=Ae=>{Y=Number.isNaN(Ae)||Ae===Q(o,b,Ae)};if(V){let Ae,lt;const bn=U(),Yi=w.type===Ay.BLUR||w.type===Ay.FOCUS_OUT,LS=!LM(V._f)&&!n.resolver&&!Q(r.errors,b)&&!V._f.deps||FM(Yi,Q(r.touchedFields,b),r.isSubmitted,y,p),Jc=Dy(b,l,Yi);Re(o,b,bn),Yi?(V._f.onBlur&&V._f.onBlur(w),u&&u(0)):V._f.onChange&&V._f.onChange(w);const ed=P(b,bn,Yi,!1),FS=!nn(ed)||Jc;if(!Yi&&f.values.next({name:b,type:w.type,values:{...o}}),LS)return d.isValid&&h(),FS&&f.state.next({name:b,...Jc?{}:ed});if(!Yi&&Jc&&f.state.next({...r}),m(!0),n.resolver){const{errors:Mm}=await $([b]);if(ne(bn),Y){const US=$y(r.errors,i,b),Lm=$y(Mm,i,US.name||b);Ae=Lm.error,b=Lm.name,lt=nn(Mm)}}else Ae=(await jy(V,o,k,n.shouldUseNativeValidation))[b],ne(bn),Y&&(Ae?lt=!1:d.isValid&&(lt=await q(i,!0)));Y&&(V._f.deps&&N(V._f.deps),z(b,lt,Ae,ed))}},_e=(w,x)=>{if(Q(r.errors,x)&&w.focus)return w.focus(),1},N=async(w,x={})=>{let b,Y;const V=qd(w);if(m(!0),n.resolver){const U=await le(Ye(w)?w:V);b=nn(U),Y=w?!V.some(ne=>Q(U,ne)):b}else w?(Y=(await Promise.all(V.map(async U=>{const ne=Q(i,U);return await q(ne&&ne._f?{[U]:ne}:ne)}))).every(Boolean),!(!Y&&!r.isValid)&&h()):Y=b=await q(i);return f.state.next({...!Ln(w)||d.isValid&&b!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:b}:{},errors:r.errors,isValidating:!1}),x.shouldFocus&&!Y&&Go(i,_e,w?V:l.mount),Y},G=w=>{const x={...s,...a.mount?o:{}};return Ye(w)?x:Ln(w)?Q(x,w):w.map(b=>Q(x,b))},oe=(w,x)=>({invalid:!!Q((x||r).errors,w),isDirty:!!Q((x||r).dirtyFields,w),isTouched:!!Q((x||r).touchedFields,w),error:Q((x||r).errors,w)}),ue=w=>{w&&qd(w).forEach(x=>yt(r.errors,x)),f.state.next({errors:w?r.errors:{}})},ee=(w,x,b)=>{const Y=(Q(i,w,{_f:{}})._f||{}).ref;Re(r.errors,w,{...x,ref:Y}),f.state.next({name:w,errors:r.errors,isValid:!1}),b&&b.shouldFocus&&Y&&Y.focus&&Y.focus()},S=(w,x)=>Or(w)?f.values.subscribe({next:b=>w(Te(void 0,x),b)}):Te(w,x,!0),R=(w,x={})=>{for(const b of w?qd(w):l.mount)l.mount.delete(b),l.array.delete(b),x.keepValue||(yt(i,b),yt(o,b)),!x.keepError&&yt(r.errors,b),!x.keepDirty&&yt(r.dirtyFields,b),!x.keepTouched&&yt(r.touchedFields,b),!n.shouldUnregister&&!x.keepDefaultValue&&yt(s,b);f.values.next({values:{...o}}),f.state.next({...r,...x.keepDirty?{isDirty:fe()}:{}}),!x.keepIsValid&&h()},W=({disabled:w,name:x,field:b,fields:Y,value:V})=>{if(Xn(w)){const U=w?void 0:Ye(V)?Xd(b?b._f:Q(Y,x)._f):V;Re(o,x,U),P(x,U,!1,!1,!0)}},j=(w,x={})=>{let b=Q(i,w);const Y=Xn(x.disabled);return Re(i,w,{...b||{},_f:{...b&&b._f?b._f:{ref:{name:w}},name:w,mount:!0,...x}}),l.mount.add(w),b?W({field:b,disabled:x.disabled,name:w,value:x.value}):C(w,!0,x.value),{...Y?{disabled:x.disabled}:{},...n.progressive?{required:!!x.required,min:So(x.min),max:So(x.max),minLength:So(x.minLength),maxLength:So(x.maxLength),pattern:So(x.pattern)}:{},name:w,onChange:J,onBlur:J,ref:V=>{if(V){j(w,x),b=Q(i,w);const U=Ye(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,ne=DM(U),Ae=b._f.refs||[];if(ne?Ae.find(lt=>lt===U):U===b._f.ref)return;Re(i,w,{_f:{...b._f,...ne?{refs:[...Ae.filter(Yd),U,...Array.isArray(Q(s,w))?[{}]:[]],ref:{type:U.type,name:w}}:{ref:U}}}),C(w,!1,void 0,U)}else b=Q(i,w,{}),b._f&&(b._f.mount=!1),(n.shouldUnregister||x.shouldUnregister)&&!(TM(l.array,w)&&a.action)&&l.unMount.add(w)}}},B=()=>n.shouldFocusError&&Go(i,_e,l.mount),ye=w=>{Xn(w)&&(f.state.next({disabled:w}),Go(i,(x,b)=>{let Y=w;const V=Q(i,b);V&&Xn(V._f.disabled)&&(Y||(Y=V._f.disabled)),x.disabled=Y},0,!1))},Ze=(w,x)=>async b=>{b&&(b.preventDefault&&b.preventDefault(),b.persist&&b.persist());let Y=qn(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:V,values:U}=await $();r.errors=V,Y=U}else await q(i);yt(r.errors,"root"),nn(r.errors)?(f.state.next({errors:{}}),await w(Y,b)):(x&&await x({...r.errors},b),B(),setTimeout(B)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Pe=(w,x={})=>{Q(i,w)&&(Ye(x.defaultValue)?X(w,Q(s,w)):(X(w,x.defaultValue),Re(s,w,x.defaultValue)),x.keepTouched||yt(r.touchedFields,w),x.keepDirty||(yt(r.dirtyFields,w),r.isDirty=x.defaultValue?fe(w,Q(s,w)):fe()),x.keepError||(yt(r.errors,w),d.isValid&&h()),f.state.next({...r}))},en=(w,x={})=>{const b=w?qn(w):s,Y=qn(b),V=w&&!nn(w)?Y:s;if(x.keepDefaultValues||(s=b),!x.keepValues){if(x.keepDirtyValues||g)for(const U of l.mount)Q(r.dirtyFields,U)?Re(V,U,Q(o,U)):X(U,Q(V,U));else{if(Pm&&Ye(w))for(const U of l.mount){const ne=Q(i,U);if(ne&&ne._f){const Ae=Array.isArray(ne._f.refs)?ne._f.refs[0]:ne._f.ref;if(Qu(Ae)){const lt=Ae.closest("form");if(lt){lt.reset();break}}}}i={}}o=t.shouldUnregister?x.keepDefaultValues?qn(s):{}:qn(V),f.array.next({values:{...V}}),f.values.next({values:{...V}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!x.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:x.keepSubmitCount?r.submitCount:0,isDirty:x.keepDirty?r.isDirty:!!(x.keepDefaultValues&&!_i(w,s)),isSubmitted:x.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:x.keepDirtyValues?r.dirtyFields:x.keepDefaultValues&&w?Qd(s,w):{},touchedFields:x.keepTouched?r.touchedFields:{},errors:x.keepErrors?r.errors:{},isSubmitSuccessful:x.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},tn=(w,x)=>en(Or(w)?w(o):w,x);return{control:{register:j,unregister:R,getFieldState:oe,handleSubmit:Ze,setError:ee,_executeSchema:$,_getWatch:Te,_getDirty:fe,_updateValid:h,_removeUnmounted:re,_updateFieldArray:v,_updateDisabledField:W,_getFieldArray:Ne,_reset:en,_resetDefaultValues:()=>Or(n.defaultValues)&&n.defaultValues().then(w=>{tn(w,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_disableForm:ye,_subjects:f,_proxyFormState:d,_setErrors:T,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:N,register:j,handleSubmit:Ze,watch:S,setValue:X,getValues:G,reset:tn,resetField:Pe,clearErrors:ue,unregister:R,setError:ee,setFocus:(w,x={})=>{const b=Q(i,w),Y=b&&b._f;if(Y){const V=Y.refs?Y.refs[0]:Y.ref;V.focus&&(V.focus(),x.shouldSelect&&V.select())}},getFieldState:oe}}function CS(t={}){const e=ct.useRef(),n=ct.useRef(),[r,i]=ct.useState({isDirty:!1,isValidating:!1,isLoading:Or(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:t.errors||{},disabled:!1,defaultValues:Or(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...$M(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,bM({subject:s._subjects.state,next:o=>{RM(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),ct.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),ct.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),ct.useEffect(()=>{t.values&&!_i(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),ct.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),ct.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=IM(r,s),e.current}var Vy=function(t,e,n){if(t&&"reportValidity"in t){var r=Q(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},kS=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?Vy(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return Vy(o,i,t)})};for(var r in e.fields)n(r)},VM=function(t,e){e.shouldUseNativeValidation&&kS(t,e);var n={};for(var r in t){var i=Q(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(BM(e.names||Object.keys(t),r)){var o=Object.assign({},zM(Q(n,r)));Re(o,"root",s),Re(n,r,o)}else Re(n,r,s)}return n},zM=function(t){return Array.isArray(t)?t.filter(Boolean):[]},BM=function(t,e){return t.some(function(n){return n.startsWith(e+".")})},WM=function(t,e){for(var n={};t.length;){var r=t[0],i=r.code,s=r.message,o=r.path.join(".");if(!n[o])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];n[o]={message:a.message,type:a.code}}else n[o]={message:s,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(c){return c.errors.forEach(function(d){return t.push(d)})}),e){var l=n[o].types,u=l&&l[r.code];n[o]=gS(o,e,n,i,u?[].concat(u,r.message):r.message)}t.shift()}return n},TS=function(t,e,n){return n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=Promise.resolve(t[n.mode==="sync"?"parse":"parseAsync"](r,e)).then(function(u){return s.shouldUseNativeValidation&&kS({},s),{errors:{},values:n.raw?r:u}})}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(function(a){return a.errors!=null}(o))return{values:{},errors:VM(WM(o.errors,!s.shouldUseNativeValidation&&s.criteriaMode==="all"),s)};throw o}))}catch(o){return Promise.reject(o)}}},Se;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},t.getValidEnumValues=i=>{const s=t.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),o={};for(const a of s)o[a]=i[a];return t.objectValues(o)},t.objectValues=i=>t.objectKeys(i).map(function(s){return i[s]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},t.find=(i,s)=>{for(const o of i)if(s(o))return o},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}t.joinValues=r,t.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(Se||(Se={}));var xh;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(xh||(xh={}));const H=Se.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),br=t=>{switch(typeof t){case"undefined":return H.undefined;case"string":return H.string;case"number":return isNaN(t)?H.nan:H.number;case"boolean":return H.boolean;case"function":return H.function;case"bigint":return H.bigint;case"symbol":return H.symbol;case"object":return Array.isArray(t)?H.array:t===null?H.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?H.promise:typeof Map<"u"&&t instanceof Map?H.map:typeof Set<"u"&&t instanceof Set?H.set:typeof Date<"u"&&t instanceof Date?H.date:H.object;default:return H.unknown}},M=Se.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),HM=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class kn extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(s){return s.message},r={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let a=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(o))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Se.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}kn.create=t=>new kn(t);const ka=(t,e)=>{let n;switch(t.code){case M.invalid_type:t.received===H.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case M.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Se.jsonStringifyReplacer)}`;break;case M.unrecognized_keys:n=`Unrecognized key(s) in object: ${Se.joinValues(t.keys,", ")}`;break;case M.invalid_union:n="Invalid input";break;case M.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Se.joinValues(t.options)}`;break;case M.invalid_enum_value:n=`Invalid enum value. Expected ${Se.joinValues(t.options)}, received '${t.received}'`;break;case M.invalid_arguments:n="Invalid function arguments";break;case M.invalid_return_type:n="Invalid function return type";break;case M.invalid_date:n="Invalid date";break;case M.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Se.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case M.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case M.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case M.custom:n="Invalid input";break;case M.invalid_intersection_types:n="Intersection results could not be merged";break;case M.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case M.not_finite:n="Number must be finite";break;default:n=e.defaultError,Se.assertNever(t)}return{message:n}};let xS=ka;function GM(t){xS=t}function tc(){return xS}const nc=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,s=[...n,...i.path||[]],o={...i,path:s};let a="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)a=u(o,{data:e,defaultError:a}).message;return{...i,path:s,message:i.message||a}},KM=[];function K(t,e){const n=nc({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,tc(),ka].filter(r=>!!r)});t.common.issues.push(n)}class Rt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return ce;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return Rt.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return ce;s.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(r[s.value]=o.value)}return{status:e.value,value:r}}}const ce=Object.freeze({status:"aborted"}),IS=t=>({status:"dirty",value:t}),Dt=t=>({status:"valid",value:t}),Ih=t=>t.status==="aborted",Rh=t=>t.status==="dirty",Ta=t=>t.status==="valid",rc=t=>typeof Promise<"u"&&t instanceof Promise;var te;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(te||(te={}));class Bn{constructor(e,n,r,i){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const zy=(t,e)=>{if(Ta(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new kn(t.common.issues);return this._error=n,this._error}}};function de(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class pe{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return br(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:br(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Rt,ctx:{common:e.parent.common,data:e.data,parsedType:br(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(rc(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:br(e)},s=this._parseSync({data:e,path:i.path,parent:i});return zy(i,s)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:br(e)},i=this._parse({data:e,path:r.path,parent:r}),s=await(rc(i)?i:Promise.resolve(i));return zy(r,s)}refine(e,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,s)=>{const o=e(i),a=()=>s.addIssue({code:M.custom,...r(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(e){return new Rn({schema:this,typeName:se.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return or.create(this,this._def)}nullable(){return Bi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Tn.create(this,this._def)}promise(){return Ys.create(this,this._def)}or(e){return ba.create([this,e],this._def)}and(e){return Na.create(this,e,this._def)}transform(e){return new Rn({...de(this._def),schema:this,typeName:se.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Ma({...de(this._def),innerType:this,defaultValue:n,typeName:se.ZodDefault})}brand(){return new bS({typeName:se.ZodBranded,type:this,...de(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new ac({...de(this._def),innerType:this,catchValue:n,typeName:se.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return tl.create(this,e)}readonly(){return uc.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const qM=/^c[^\s-]{8,}$/i,ZM=/^[a-z][a-z0-9]*$/,YM=/^[0-9A-HJKMNP-TV-Z]{26}$/,QM=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,XM=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,JM="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Jd;const eL=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,tL=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,nL=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function rL(t,e){return!!((e==="v4"||!e)&&eL.test(t)||(e==="v6"||!e)&&tL.test(t))}class vn extends pe{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==H.string){const s=this._getOrReturnCtx(e);return K(s,{code:M.invalid_type,expected:H.string,received:s.parsedType}),ce}const r=new Rt;let i;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(i=this._getOrReturnCtx(e,i),K(i,{code:M.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")e.data.length>s.value&&(i=this._getOrReturnCtx(e,i),K(i,{code:M.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const o=e.data.length>s.value,a=e.data.length<s.value;(o||a)&&(i=this._getOrReturnCtx(e,i),o?K(i,{code:M.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&K(i,{code:M.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")XM.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"email",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")Jd||(Jd=new RegExp(JM,"u")),Jd.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"emoji",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")QM.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"uuid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")qM.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"cuid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")ZM.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"cuid2",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")YM.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"ulid",code:M.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),K(i,{validation:"url",code:M.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"regex",code:M.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(e,i),K(i,{code:M.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(i=this._getOrReturnCtx(e,i),K(i,{code:M.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(i=this._getOrReturnCtx(e,i),K(i,{code:M.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?nL(s).test(e.data)||(i=this._getOrReturnCtx(e,i),K(i,{code:M.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="ip"?rL(e.data,s.version)||(i=this._getOrReturnCtx(e,i),K(i,{validation:"ip",code:M.invalid_string,message:s.message}),r.dirty()):Se.assertNever(s);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:M.invalid_string,...te.errToObj(r)})}_addCheck(e){return new vn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...te.errToObj(e)})}url(e){return this._addCheck({kind:"url",...te.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...te.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...te.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...te.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...te.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...te.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...te.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...te.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...te.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...te.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...te.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...te.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...te.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...te.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...te.errToObj(n)})}nonempty(e){return this.min(1,te.errToObj(e))}trim(){return new vn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new vn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new vn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}vn.create=t=>{var e;return new vn({checks:[],typeName:se.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...de(t)})};function iL(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,s=parseInt(t.toFixed(i).replace(".","")),o=parseInt(e.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}class Jr extends pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==H.number){const s=this._getOrReturnCtx(e);return K(s,{code:M.invalid_type,expected:H.number,received:s.parsedType}),ce}let r;const i=new Rt;for(const s of this._def.checks)s.kind==="int"?Se.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),K(r,{code:M.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),K(r,{code:M.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),K(r,{code:M.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?iL(e.data,s.value)!==0&&(r=this._getOrReturnCtx(e,r),K(r,{code:M.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),K(r,{code:M.not_finite,message:s.message}),i.dirty()):Se.assertNever(s);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,te.toString(n))}gt(e,n){return this.setLimit("min",e,!1,te.toString(n))}lte(e,n){return this.setLimit("max",e,!0,te.toString(n))}lt(e,n){return this.setLimit("max",e,!1,te.toString(n))}setLimit(e,n,r,i){return new Jr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:te.toString(i)}]})}_addCheck(e){return new Jr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:te.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:te.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:te.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:te.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:te.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:te.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Se.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Jr.create=t=>new Jr({checks:[],typeName:se.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...de(t)});class ei extends pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==H.bigint){const s=this._getOrReturnCtx(e);return K(s,{code:M.invalid_type,expected:H.bigint,received:s.parsedType}),ce}let r;const i=new Rt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),K(r,{code:M.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),K(r,{code:M.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),K(r,{code:M.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):Se.assertNever(s);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,te.toString(n))}gt(e,n){return this.setLimit("min",e,!1,te.toString(n))}lte(e,n){return this.setLimit("max",e,!0,te.toString(n))}lt(e,n){return this.setLimit("max",e,!1,te.toString(n))}setLimit(e,n,r,i){return new ei({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:te.toString(i)}]})}_addCheck(e){return new ei({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:te.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:te.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}ei.create=t=>{var e;return new ei({checks:[],typeName:se.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...de(t)})};class xa extends pe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==H.boolean){const r=this._getOrReturnCtx(e);return K(r,{code:M.invalid_type,expected:H.boolean,received:r.parsedType}),ce}return Dt(e.data)}}xa.create=t=>new xa({typeName:se.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...de(t)});class Vi extends pe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==H.date){const s=this._getOrReturnCtx(e);return K(s,{code:M.invalid_type,expected:H.date,received:s.parsedType}),ce}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return K(s,{code:M.invalid_date}),ce}const r=new Rt;let i;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(i=this._getOrReturnCtx(e,i),K(i,{code:M.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(i=this._getOrReturnCtx(e,i),K(i,{code:M.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):Se.assertNever(s);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Vi({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:te.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:te.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Vi.create=t=>new Vi({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:se.ZodDate,...de(t)});class ic extends pe{_parse(e){if(this._getType(e)!==H.symbol){const r=this._getOrReturnCtx(e);return K(r,{code:M.invalid_type,expected:H.symbol,received:r.parsedType}),ce}return Dt(e.data)}}ic.create=t=>new ic({typeName:se.ZodSymbol,...de(t)});class Ia extends pe{_parse(e){if(this._getType(e)!==H.undefined){const r=this._getOrReturnCtx(e);return K(r,{code:M.invalid_type,expected:H.undefined,received:r.parsedType}),ce}return Dt(e.data)}}Ia.create=t=>new Ia({typeName:se.ZodUndefined,...de(t)});class Ra extends pe{_parse(e){if(this._getType(e)!==H.null){const r=this._getOrReturnCtx(e);return K(r,{code:M.invalid_type,expected:H.null,received:r.parsedType}),ce}return Dt(e.data)}}Ra.create=t=>new Ra({typeName:se.ZodNull,...de(t)});class Zs extends pe{constructor(){super(...arguments),this._any=!0}_parse(e){return Dt(e.data)}}Zs.create=t=>new Zs({typeName:se.ZodAny,...de(t)});class Ii extends pe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Dt(e.data)}}Ii.create=t=>new Ii({typeName:se.ZodUnknown,...de(t)});class hr extends pe{_parse(e){const n=this._getOrReturnCtx(e);return K(n,{code:M.invalid_type,expected:H.never,received:n.parsedType}),ce}}hr.create=t=>new hr({typeName:se.ZodNever,...de(t)});class sc extends pe{_parse(e){if(this._getType(e)!==H.undefined){const r=this._getOrReturnCtx(e);return K(r,{code:M.invalid_type,expected:H.void,received:r.parsedType}),ce}return Dt(e.data)}}sc.create=t=>new sc({typeName:se.ZodVoid,...de(t)});class Tn extends pe{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==H.array)return K(n,{code:M.invalid_type,expected:H.array,received:n.parsedType}),ce;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(o||a)&&(K(n,{code:o?M.too_big:M.too_small,minimum:a?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(K(n,{code:M.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(K(n,{code:M.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>i.type._parseAsync(new Bn(n,o,n.path,a)))).then(o=>Rt.mergeArray(r,o));const s=[...n.data].map((o,a)=>i.type._parseSync(new Bn(n,o,n.path,a)));return Rt.mergeArray(r,s)}get element(){return this._def.type}min(e,n){return new Tn({...this._def,minLength:{value:e,message:te.toString(n)}})}max(e,n){return new Tn({...this._def,maxLength:{value:e,message:te.toString(n)}})}length(e,n){return new Tn({...this._def,exactLength:{value:e,message:te.toString(n)}})}nonempty(e){return this.min(1,e)}}Tn.create=(t,e)=>new Tn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:se.ZodArray,...de(e)});function ns(t){if(t instanceof Ve){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=or.create(ns(r))}return new Ve({...t._def,shape:()=>e})}else return t instanceof Tn?new Tn({...t._def,type:ns(t.element)}):t instanceof or?or.create(ns(t.unwrap())):t instanceof Bi?Bi.create(ns(t.unwrap())):t instanceof Wn?Wn.create(t.items.map(e=>ns(e))):t}class Ve extends pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Se.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==H.object){const u=this._getOrReturnCtx(e);return K(u,{code:M.invalid_type,expected:H.object,received:u.parsedType}),ce}const{status:r,ctx:i}=this._processInputParams(e),{shape:s,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof hr&&this._def.unknownKeys==="strip"))for(const u in i.data)o.includes(u)||a.push(u);const l=[];for(const u of o){const c=s[u],d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Bn(i,d,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof hr){const u=this._def.unknownKeys;if(u==="passthrough")for(const c of a)l.push({key:{status:"valid",value:c},value:{status:"valid",value:i.data[c]}});else if(u==="strict")a.length>0&&(K(i,{code:M.unrecognized_keys,keys:a}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const c of a){const d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Bn(i,d,i.path,c)),alwaysSet:c in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const c of l){const d=await c.key;u.push({key:d,value:await c.value,alwaysSet:c.alwaysSet})}return u}).then(u=>Rt.mergeObjectSync(r,u)):Rt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return te.errToObj,new Ve({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,s,o,a;const l=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=te.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new Ve({...this._def,unknownKeys:"strip"})}passthrough(){return new Ve({...this._def,unknownKeys:"passthrough"})}extend(e){return new Ve({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Ve({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:se.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Ve({...this._def,catchall:e})}pick(e){const n={};return Se.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Ve({...this._def,shape:()=>n})}omit(e){const n={};return Se.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new Ve({...this._def,shape:()=>n})}deepPartial(){return ns(this)}partial(e){const n={};return Se.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new Ve({...this._def,shape:()=>n})}required(e){const n={};return Se.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof or;)s=s._def.innerType;n[r]=s}}),new Ve({...this._def,shape:()=>n})}keyof(){return RS(Se.objectKeys(this.shape))}}Ve.create=(t,e)=>new Ve({shape:()=>t,unknownKeys:"strip",catchall:hr.create(),typeName:se.ZodObject,...de(e)});Ve.strictCreate=(t,e)=>new Ve({shape:()=>t,unknownKeys:"strict",catchall:hr.create(),typeName:se.ZodObject,...de(e)});Ve.lazycreate=(t,e)=>new Ve({shape:t,unknownKeys:"strip",catchall:hr.create(),typeName:se.ZodObject,...de(e)});class ba extends pe{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function i(s){for(const a of s)if(a.result.status==="valid")return a.result;for(const a of s)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=s.map(a=>new kn(a.ctx.common.issues));return K(n,{code:M.invalid_union,unionErrors:o}),ce}if(n.common.async)return Promise.all(r.map(async s=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await s._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(i);{let s;const o=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},c=l._parseSync({data:n.data,path:n.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!s&&(s={result:c,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(s)return n.common.issues.push(...s.ctx.common.issues),s.result;const a=o.map(l=>new kn(l));return K(n,{code:M.invalid_union,unionErrors:a}),ce}}get options(){return this._def.options}}ba.create=(t,e)=>new ba({options:t,typeName:se.ZodUnion,...de(e)});const Xl=t=>t instanceof Aa?Xl(t.schema):t instanceof Rn?Xl(t.innerType()):t instanceof Oa?[t.value]:t instanceof ti?t.options:t instanceof Da?Object.keys(t.enum):t instanceof Ma?Xl(t._def.innerType):t instanceof Ia?[void 0]:t instanceof Ra?[null]:null;class Xc extends pe{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.object)return K(n,{code:M.invalid_type,expected:H.object,received:n.parsedType}),ce;const r=this.discriminator,i=n.data[r],s=this.optionsMap.get(i);return s?n.common.async?s._parseAsync({data:n.data,path:n.path,parent:n}):s._parseSync({data:n.data,path:n.path,parent:n}):(K(n,{code:M.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),ce)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const s of n){const o=Xl(s.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(i.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);i.set(a,s)}}return new Xc({typeName:se.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...de(r)})}}function bh(t,e){const n=br(t),r=br(e);if(t===e)return{valid:!0,data:t};if(n===H.object&&r===H.object){const i=Se.objectKeys(e),s=Se.objectKeys(t).filter(a=>i.indexOf(a)!==-1),o={...t,...e};for(const a of s){const l=bh(t[a],e[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(n===H.array&&r===H.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let s=0;s<t.length;s++){const o=t[s],a=e[s],l=bh(o,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===H.date&&r===H.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Na extends pe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=(s,o)=>{if(Ih(s)||Ih(o))return ce;const a=bh(s.value,o.value);return a.valid?((Rh(s)||Rh(o))&&n.dirty(),{status:n.value,value:a.data}):(K(r,{code:M.invalid_intersection_types}),ce)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([s,o])=>i(s,o)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Na.create=(t,e,n)=>new Na({left:t,right:e,typeName:se.ZodIntersection,...de(n)});class Wn extends pe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.array)return K(r,{code:M.invalid_type,expected:H.array,received:r.parsedType}),ce;if(r.data.length<this._def.items.length)return K(r,{code:M.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ce;!this._def.rest&&r.data.length>this._def.items.length&&(K(r,{code:M.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const s=[...r.data].map((o,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Bn(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(s).then(o=>Rt.mergeArray(n,o)):Rt.mergeArray(n,s)}get items(){return this._def.items}rest(e){return new Wn({...this._def,rest:e})}}Wn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Wn({items:t,typeName:se.ZodTuple,rest:null,...de(e)})};class Pa extends pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.object)return K(r,{code:M.invalid_type,expected:H.object,received:r.parsedType}),ce;const i=[],s=this._def.keyType,o=this._def.valueType;for(const a in r.data)i.push({key:s._parse(new Bn(r,a,r.path,a)),value:o._parse(new Bn(r,r.data[a],r.path,a))});return r.common.async?Rt.mergeObjectAsync(n,i):Rt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof pe?new Pa({keyType:e,valueType:n,typeName:se.ZodRecord,...de(r)}):new Pa({keyType:vn.create(),valueType:e,typeName:se.ZodRecord,...de(n)})}}class oc extends pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.map)return K(r,{code:M.invalid_type,expected:H.map,received:r.parsedType}),ce;const i=this._def.keyType,s=this._def.valueType,o=[...r.data.entries()].map(([a,l],u)=>({key:i._parse(new Bn(r,a,r.path,[u,"key"])),value:s._parse(new Bn(r,l,r.path,[u,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of o){const u=await l.key,c=await l.value;if(u.status==="aborted"||c.status==="aborted")return ce;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),a.set(u.value,c.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of o){const u=l.key,c=l.value;if(u.status==="aborted"||c.status==="aborted")return ce;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),a.set(u.value,c.value)}return{status:n.value,value:a}}}}oc.create=(t,e,n)=>new oc({valueType:e,keyType:t,typeName:se.ZodMap,...de(n)});class zi extends pe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.set)return K(r,{code:M.invalid_type,expected:H.set,received:r.parsedType}),ce;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(K(r,{code:M.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(K(r,{code:M.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const s=this._def.valueType;function o(l){const u=new Set;for(const c of l){if(c.status==="aborted")return ce;c.status==="dirty"&&n.dirty(),u.add(c.value)}return{status:n.value,value:u}}const a=[...r.data.values()].map((l,u)=>s._parse(new Bn(r,l,r.path,u)));return r.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(e,n){return new zi({...this._def,minSize:{value:e,message:te.toString(n)}})}max(e,n){return new zi({...this._def,maxSize:{value:e,message:te.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}zi.create=(t,e)=>new zi({valueType:t,minSize:null,maxSize:null,typeName:se.ZodSet,...de(e)});class Ns extends pe{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.function)return K(n,{code:M.invalid_type,expected:H.function,received:n.parsedType}),ce;function r(a,l){return nc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,tc(),ka].filter(u=>!!u),issueData:{code:M.invalid_arguments,argumentsError:l}})}function i(a,l){return nc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,tc(),ka].filter(u=>!!u),issueData:{code:M.invalid_return_type,returnTypeError:l}})}const s={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof Ys){const a=this;return Dt(async function(...l){const u=new kn([]),c=await a._def.args.parseAsync(l,s).catch(g=>{throw u.addIssue(r(l,g)),u}),d=await Reflect.apply(o,this,c);return await a._def.returns._def.type.parseAsync(d,s).catch(g=>{throw u.addIssue(i(d,g)),u})})}else{const a=this;return Dt(function(...l){const u=a._def.args.safeParse(l,s);if(!u.success)throw new kn([r(l,u.error)]);const c=Reflect.apply(o,this,u.data),d=a._def.returns.safeParse(c,s);if(!d.success)throw new kn([i(c,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ns({...this._def,args:Wn.create(e).rest(Ii.create())})}returns(e){return new Ns({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Ns({args:e||Wn.create([]).rest(Ii.create()),returns:n||Ii.create(),typeName:se.ZodFunction,...de(r)})}}class Aa extends pe{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Aa.create=(t,e)=>new Aa({getter:t,typeName:se.ZodLazy,...de(e)});class Oa extends pe{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return K(n,{received:n.data,code:M.invalid_literal,expected:this._def.value}),ce}return{status:"valid",value:e.data}}get value(){return this._def.value}}Oa.create=(t,e)=>new Oa({value:t,typeName:se.ZodLiteral,...de(e)});function RS(t,e){return new ti({values:t,typeName:se.ZodEnum,...de(e)})}class ti extends pe{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return K(n,{expected:Se.joinValues(r),received:n.parsedType,code:M.invalid_type}),ce}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return K(n,{received:n.data,code:M.invalid_enum_value,options:r}),ce}return Dt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return ti.create(e)}exclude(e){return ti.create(this.options.filter(n=>!e.includes(n)))}}ti.create=RS;class Da extends pe{_parse(e){const n=Se.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==H.string&&r.parsedType!==H.number){const i=Se.objectValues(n);return K(r,{expected:Se.joinValues(i),received:r.parsedType,code:M.invalid_type}),ce}if(n.indexOf(e.data)===-1){const i=Se.objectValues(n);return K(r,{received:r.data,code:M.invalid_enum_value,options:i}),ce}return Dt(e.data)}get enum(){return this._def.values}}Da.create=(t,e)=>new Da({values:t,typeName:se.ZodNativeEnum,...de(e)});class Ys extends pe{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.promise&&n.common.async===!1)return K(n,{code:M.invalid_type,expected:H.promise,received:n.parsedType}),ce;const r=n.parsedType===H.promise?n.data:Promise.resolve(n.data);return Dt(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Ys.create=(t,e)=>new Ys({type:t,typeName:se.ZodPromise,...de(e)});class Rn extends pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===se.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),i=this._def.effect||null,s={addIssue:o=>{K(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),i.type==="preprocess"){const o=i.transform(r.data,s);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}if(i.type==="refinement"){const o=a=>{const l=i.refinement(a,s);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?ce:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?ce:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Ta(o))return o;const a=i.transform(o.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Ta(o)?Promise.resolve(i.transform(o.value,s)).then(a=>({status:n.value,value:a})):o);Se.assertNever(i)}}Rn.create=(t,e,n)=>new Rn({schema:t,typeName:se.ZodEffects,effect:e,...de(n)});Rn.createWithPreprocess=(t,e,n)=>new Rn({schema:e,effect:{type:"preprocess",transform:t},typeName:se.ZodEffects,...de(n)});class or extends pe{_parse(e){return this._getType(e)===H.undefined?Dt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}or.create=(t,e)=>new or({innerType:t,typeName:se.ZodOptional,...de(e)});class Bi extends pe{_parse(e){return this._getType(e)===H.null?Dt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Bi.create=(t,e)=>new Bi({innerType:t,typeName:se.ZodNullable,...de(e)});class Ma extends pe{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===H.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Ma.create=(t,e)=>new Ma({innerType:t,typeName:se.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...de(e)});class ac extends pe{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return rc(i)?i.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new kn(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new kn(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ac.create=(t,e)=>new ac({innerType:t,typeName:se.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...de(e)});class lc extends pe{_parse(e){if(this._getType(e)!==H.nan){const r=this._getOrReturnCtx(e);return K(r,{code:M.invalid_type,expected:H.nan,received:r.parsedType}),ce}return{status:"valid",value:e.data}}}lc.create=t=>new lc({typeName:se.ZodNaN,...de(t)});const sL=Symbol("zod_brand");class bS extends pe{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class tl extends pe{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?ce:s.status==="dirty"?(n.dirty(),IS(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?ce:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new tl({in:e,out:n,typeName:se.ZodPipeline})}}class uc extends pe{_parse(e){const n=this._def.innerType._parse(e);return Ta(n)&&(n.value=Object.freeze(n.value)),n}}uc.create=(t,e)=>new uc({innerType:t,typeName:se.ZodReadonly,...de(e)});const NS=(t,e={},n)=>t?Zs.create().superRefine((r,i)=>{var s,o;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(o=(s=a.fatal)!==null&&s!==void 0?s:n)!==null&&o!==void 0?o:!0,u=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...u,fatal:l})}}):Zs.create(),oL={object:Ve.lazycreate};var se;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(se||(se={}));const aL=(t,e={message:`Input not instance of ${t.name}`})=>NS(n=>n instanceof t,e),PS=vn.create,AS=Jr.create,lL=lc.create,uL=ei.create,OS=xa.create,cL=Vi.create,dL=ic.create,fL=Ia.create,hL=Ra.create,pL=Zs.create,mL=Ii.create,gL=hr.create,_L=sc.create,yL=Tn.create,vL=Ve.create,wL=Ve.strictCreate,EL=ba.create,SL=Xc.create,CL=Na.create,kL=Wn.create,TL=Pa.create,xL=oc.create,IL=zi.create,RL=Ns.create,bL=Aa.create,NL=Oa.create,PL=ti.create,AL=Da.create,OL=Ys.create,By=Rn.create,DL=or.create,ML=Bi.create,LL=Rn.createWithPreprocess,FL=tl.create,UL=()=>PS().optional(),jL=()=>AS().optional(),$L=()=>OS().optional(),VL={string:t=>vn.create({...t,coerce:!0}),number:t=>Jr.create({...t,coerce:!0}),boolean:t=>xa.create({...t,coerce:!0}),bigint:t=>ei.create({...t,coerce:!0}),date:t=>Vi.create({...t,coerce:!0})},zL=ce;var An=Object.freeze({__proto__:null,defaultErrorMap:ka,setErrorMap:GM,getErrorMap:tc,makeIssue:nc,EMPTY_PATH:KM,addIssueToContext:K,ParseStatus:Rt,INVALID:ce,DIRTY:IS,OK:Dt,isAborted:Ih,isDirty:Rh,isValid:Ta,isAsync:rc,get util(){return Se},get objectUtil(){return xh},ZodParsedType:H,getParsedType:br,ZodType:pe,ZodString:vn,ZodNumber:Jr,ZodBigInt:ei,ZodBoolean:xa,ZodDate:Vi,ZodSymbol:ic,ZodUndefined:Ia,ZodNull:Ra,ZodAny:Zs,ZodUnknown:Ii,ZodNever:hr,ZodVoid:sc,ZodArray:Tn,ZodObject:Ve,ZodUnion:ba,ZodDiscriminatedUnion:Xc,ZodIntersection:Na,ZodTuple:Wn,ZodRecord:Pa,ZodMap:oc,ZodSet:zi,ZodFunction:Ns,ZodLazy:Aa,ZodLiteral:Oa,ZodEnum:ti,ZodNativeEnum:Da,ZodPromise:Ys,ZodEffects:Rn,ZodTransformer:Rn,ZodOptional:or,ZodNullable:Bi,ZodDefault:Ma,ZodCatch:ac,ZodNaN:lc,BRAND:sL,ZodBranded:bS,ZodPipeline:tl,ZodReadonly:uc,custom:NS,Schema:pe,ZodSchema:pe,late:oL,get ZodFirstPartyTypeKind(){return se},coerce:VL,any:pL,array:yL,bigint:uL,boolean:OS,date:cL,discriminatedUnion:SL,effect:By,enum:PL,function:RL,instanceof:aL,intersection:CL,lazy:bL,literal:NL,map:xL,nan:lL,nativeEnum:AL,never:gL,null:hL,nullable:ML,number:AS,object:vL,oboolean:$L,onumber:jL,optional:DL,ostring:UL,pipeline:FL,preprocess:LL,promise:OL,record:TL,set:IL,strictObject:wL,string:PS,symbol:dL,transformer:By,tuple:kL,undefined:fL,union:EL,unknown:mL,void:_L,NEVER:zL,ZodIssueCode:M,quotelessJson:HM,ZodError:kn});const BL=()=>{const t=Tp(),e=async a=>{try{await __(Je,a.email,a.password)}catch{return!0}},n=An.object({email:An.string().min(1,"Email is required").email("Invalid email"),password:An.string().min(1,"Password is required")}).refine(async a=>!await e(a),{path:["password"],message:"Invalid email or password"}),{register:r,handleSubmit:i,formState:{errors:s}}=CS({resolver:TS(n)}),o=a=>{__(Je,a.email,a.password).then(()=>{t("/")})};return I.jsxs(XN,{children:[I.jsx(JN,{children:"Welcome Back"}),I.jsxs(eP,{as:"form",onSubmit:i(o),children:[I.jsx(tP,{children:"Log in to YourMessage"}),I.jsx(V_,{type:"string",placeholder:"Email",autoComplete:"email",...r("email")}),s.email&&I.jsx(z_,{children:s.email.message}),I.jsx(V_,{type:"password",placeholder:"Password",autoComplete:"current-password",...r("password")}),s.password&&I.jsx(z_,{children:s.password.message}),I.jsx(nP,{children:"Sign-In"}),I.jsx(rP,{children:"Forgot your password?"}),I.jsx(iP,{onClick:()=>t("/register"),children:"Create new account"})]})]})},WL=F.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100vh;
    justify-content:center;
    @media (max-width:900px){
        height:fit-content
    }
`,HL=F.h1`
    font-size:5em;
    color:${Hn.color.lightBlue};
    margin-bottom:40px;
    @media (max-width:900px){
        font-size:3em;
        text-align:center;
    }
    @media (max-width:400px){
        font-size:2em;
        text-align:center;
    }
`,GL=F.div`
    width:30%;
    height:600px;
    border-radius:20px;
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (max-width:900px){
        width:fit-content;
    }

`,KL=F.div`
    display:flex;
    justify-content:space-evenly;
`,Wy=F.input`
    width:80%;
    height:5vh;
    background-color:#F9F9F9;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:5px;
    font-size:1em;
`,qL=F.h1`
    font-size:2em;
    color:#000;
    text-align:center;
    font-weight:200;
    margin:20px;
`,Tl=F.input`
    width:80%;
    height:5vh;
    background-color:#F9F9F9;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:5px;
    font-size:1em;
`,ZL=F.button`
    background-color:${Hn.color.darkBlue};
    color:#FFF;
    width:50%;
    height:5vh;
    border:none;
    border-radius:10px;
    font-size:1em;
    cursor: pointer;
    margin:20px;
`,ts=F.span`
    font-size:0.8em;
    color:#fe4444; 
    text-align:center;
`,xl=F.span`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`,YL=()=>{const t=Tp(),[e,n]=A.useState(!1),[r,i]=A.useState(!1),s=f=>{n(!1);const g=mt(gt,"/users/");return Py(g).then(p=>{p.exists()&&Object.values(p.val()).forEach(k=>{k.email===f.email&&n(!0)})}),e},o=f=>{i(!1);const g=mt(gt,"/users/");return Py(g).then(p=>{p.exists()&&Object.values(p.val()).forEach(k=>{k.username===`@${f.username}`&&i(!0)})}),r},a=An.object({firstName:An.string().min(1,"First name is required"),lastName:An.string().min(1,"Last name is required"),email:An.string().min(1,"Email is required").email("Invalid email"),username:An.string().min(3,"Username needs at least 3 characters").max(6,"Username can't have more than 6 characters"),password:An.string().min(6,"Password needs to be at least 6 characters"),confirmPassword:An.string().min(6,"Password needs to be at least 6 characters")}).refine(f=>f.password===f.confirmPassword,{path:["confirmPassword"],message:"Passwords don't match"}).refine(f=>!s(f),{path:["email"],message:"Email address already registered, log in to your account to use YourMessage"}).refine(f=>!o(f),{path:["username"],message:"Username already in use"}),{register:l,handleSubmit:u,formState:{errors:c}}=CS({resolver:TS(a)}),d=f=>{OR(Je,f.email,f.password).then(()=>{const g=Je.currentUser,p=mt(gt,`/users/${g.uid}`);xi(p,{email:f.email,firstName:f.firstName,lastName:f.lastName,username:`@${f.username}`,id:g.uid})}).then(()=>t("/")).catch(g=>console.log(g))};return I.jsxs(WL,{children:[I.jsx(HL,{children:"Welcome to YourMessage"}),I.jsxs(GL,{as:"form",onSubmit:u(d),children:[I.jsx(qL,{children:"Create your account"}),I.jsxs(KL,{style:{display:"flex"},children:[I.jsxs(xl,{children:[I.jsx(Wy,{placeholder:"First Name",...l("firstName")}),c.firstName&&I.jsx(ts,{children:c.firstName.message})]}),I.jsxs(xl,{children:[I.jsx(Wy,{placeholder:"Last Name",...l("lastName")}),c.lastName&&I.jsx(ts,{children:c.lastName.message})]})]}),I.jsxs(xl,{children:[I.jsx(Tl,{type:"text",placeholder:"Username",autoComplete:"username",onChange:()=>{setUserExist(!1)},...l("username")}),c.username&&I.jsx(ts,{children:c.username.message})]}),I.jsxs(xl,{children:[I.jsx(Tl,{type:"string",placeholder:"Email",autoComplete:"email",onChange:()=>{n(!1)},...l("email")}),c.email&&I.jsx(ts,{children:c.email.message})]}),I.jsx(Tl,{type:"password",placeholder:"Password",autoComplete:"new-password",...l("password")}),c.password&&I.jsx(ts,{children:c.password.message}),I.jsx(Tl,{type:"password",placeholder:"Confirm your password",autoComplete:"new-password",...l("confirmPassword")}),c.confirmPassword&&I.jsx(ts,{children:c.confirmPassword.message}),I.jsx(ZL,{children:"Create new account"})]})]})},QL=F.div`
    height:100vh;
    display:flex;
    width:500px;
    align-items:center;
    display:${({display:t})=>t};
    @media (max-width:1200px){
        width:50%;
    }
    @media (max-width:780px){
        position:absolute;
        top:70px;
        z-index:1;
    }

    @media (max-width:780px){
        width:70%;
    }
`,XL=F.div`
    display:flex;
    flex-direction:column;
    background-color:#FFF;
    height:90%;
    width:100%;
    margin-left:50px;
    border:1px solid #00000079;
    border-radius:30px;
    @media (max-width:780px){
        margin-left:10px;
    }
`,JL=F.img`
    display:${({display:t})=>t};
    cursor: pointer;
    width:50px;
    position:absolute;
    top:70px;
    background-color:#ffffff;
    padding:5px;
    border-radius:50%;
    z-index:2;

`,e2=F.div`
    display:flex;
    margin:20px;
    justify-content:space-between;
    position:relative;
    
`,t2=F.h1`
    font-size:1em;
    color:#000;
   
`,n2=F.h1`
    font-size:0.8em;
    color:#a8a8a8;
    
`,r2=F.img`
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit:cover;
    
`,i2=F.img`
    width:50px;
    height:auto;
    cursor: pointer;
`,s2=F.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:hidden;

`,o2=F.h1`
    font-size:1.5em;
    color:#000;
    width:100%;
    padding-left:40px;
    margin-bottom:10px;

`,a2=F.input`
    width:80%;
    height:5vh;
    background-color:#EDEDED;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:40px;
    font-size:1em;
`,l2=F.div`
    width:100%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`,u2=F.img`
    height:2vh;
    background-color:#EDEDED;
    left:60px;
    position:absolute;
    cursor:pointer;
`;F.div`
    background-color:${Hn.color.lightBlue};
    position:absolute;
    width:200px;
    min-height:100px;
    right:40px;
    top:15px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:10px;
    z-index:1;
`;F.input`
    width:80%;
    height:3vh;
    background-color:#EDEDED;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:20px;
    font-size:1em;
`;const c2=F.img`
    width:45px;
    height:auto;
    margin-right:20px;
    cursor: pointer;

`,d2=F.div`
    background-color:${Hn.color.lightBlue};
    position:absolute;
    width:fit-content;
    min-height:300px;
    right:90px;
    top:35px;
    border-radius:10px;
    z-index:1;

`,f2=F.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    `,h2=F.button`
    width:40%;
    height:3vh;
    border-radius:5px;
    border:1px solid black;
    cursor: pointer;
`,p2=F.input`
    width:80%;
    height:3vh;
    border-radius:5px;
    margin:5px;

`,m2=F.h2`
    margin:10px;
    font-size:1em;
    color:#FFF;
    font-weight:100;
`,g2=F.input`
    width:70%;
    border:1px solid #bcbcbc;
    height:4vh;
    border-radius:10px;
    padding-left:10px;
    
`,_2=F.h1`
    font-size:2em;
    color:#FFF;
    margin:20px;


`;F.h1`
    font-size:2em;
    color: #fff;

`;F.h2`
    font-size:1em;
    font-weight:100;
    color: #fff;
    
`;F.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    `;F.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    
`;F.div`
    display:flex;
    justify-content:space-between;
`;F.h1`
    margin:5px;
    cursor: pointer;
`;const y2=F.div`
    height:10vh;
    margin:10px 40px;
    display:flex;
    align-items:center;
    border:1px solid #e7e7e7;
    border-radius:15px;
    cursor:pointer;
`,v2=F.img`
    width:60px;
    height:60px;
    margin:10px;
    object-fit:cover;
    border-radius:50%;
`,w2=F.h1`
    font-size:1em;

`,E2=F.div`
    width:100%;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
`,S2=F.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`,C2=F.h2`
    color:#5d5d5d;
    font-size:0.8em;
    font-weight:100;

`,k2=F.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:80%;
`;var DS={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(typeof self<"u"?self:$S,function(){return function(n){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=n,i.c=r,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="/",i(i.s=7)}([function(n,r,i){function s(o,a,l,u,c,d,f,g){if(!o){var p;if(a===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[l,u,c,d,f,g],k=0;p=new Error(a.replace(/%s/g,function(){return y[k++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}}n.exports=s},function(n,r,i){function s(a){return function(){return a}}var o=function(){};o.thatReturns=s,o.thatReturnsFalse=s(!1),o.thatReturnsTrue=s(!0),o.thatReturnsNull=s(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(a){return a},n.exports=o},function(n,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function u(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var d={},f=0;f<10;f++)d["_"+String.fromCharCode(f)]=f;var g=Object.getOwnPropertyNames(d).map(function(y){return d[y]});if(g.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(y){p[y]=y}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}n.exports=u()?Object.assign:function(c,d){for(var f,g=l(c),p,y=1;y<arguments.length;y++){f=Object(arguments[y]);for(var k in f)o.call(f,k)&&(g[k]=f[k]);if(s){p=s(f);for(var _=0;_<p.length;_++)a.call(f,p[_])&&(g[p[_]]=f[p[_]])}}return g}},function(n,r,i){var s=i(1),o=s;n.exports=o},function(n,r,i){var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";n.exports=s},function(n,r,i){var s={};n.exports=s},function(n,r,i){function s(o,a,l,u,c){}n.exports=s},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(v){for(var E=1;E<arguments.length;E++){var T=arguments[E];for(var C in T)Object.prototype.hasOwnProperty.call(T,C)&&(v[C]=T[C])}return v},o=function(){function v(E,T){for(var C=0;C<T.length;C++){var P=T[C];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(E,P.key,P)}}return function(E,T,C){return T&&v(E.prototype,T),C&&v(E,C),E}}(),a=i(8),l=p(a),u=i(11),c=p(u),d=i(14),f=g(d);function g(v){if(v&&v.__esModule)return v;var E={};if(v!=null)for(var T in v)Object.prototype.hasOwnProperty.call(v,T)&&(E[T]=v[T]);return E.default=v,E}function p(v){return v&&v.__esModule?v:{default:v}}function y(v,E){var T={};for(var C in v)E.indexOf(C)>=0||Object.prototype.hasOwnProperty.call(v,C)&&(T[C]=v[C]);return T}function k(v,E){if(!(v instanceof E))throw new TypeError("Cannot call a class as a function")}function _(v,E){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:v}function h(v,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);v.prototype=Object.create(E&&E.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(v,E):v.__proto__=E)}var m=function(v){h(E,v);function E(){var T,C,P,z;k(this,E);for(var $=arguments.length,le=Array($),q=0;q<$;q++)le[q]=arguments[q];return z=(C=(P=_(this,(T=E.__proto__||Object.getPrototypeOf(E)).call.apply(T,[this].concat(le))),P),P.state={delayed:P.props.delay>0},C),_(P,z)}return o(E,[{key:"componentDidMount",value:function(){var C=this,P=this.props.delay,z=this.state.delayed;z&&(this.timeout=setTimeout(function(){C.setState({delayed:!1})},P))}},{key:"componentWillUnmount",value:function(){var C=this.timeout;C&&clearTimeout(C)}},{key:"render",value:function(){var C=this.props,P=C.color;C.delay;var z=C.type,$=C.height,le=C.width,q=y(C,["color","delay","type","height","width"]),re=this.state.delayed?"blank":z,fe=f[re],Te={fill:P,height:$,width:le};return l.default.createElement("div",s({style:Te,dangerouslySetInnerHTML:{__html:fe}},q))}}]),E}(a.Component);m.propTypes={color:c.default.string,delay:c.default.number,type:c.default.string,height:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number])},m.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},r.default=m},function(n,r,i){n.exports=i(9)},function(n,r,i){/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(2),o=i(0),a=i(5),l=i(1),u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,p=u?Symbol.for("react.provider"):60109,y=u?Symbol.for("react.context"):60110,k=u?Symbol.for("react.async_mode"):60111,_=u?Symbol.for("react.forward_ref"):60112,h=typeof Symbol=="function"&&Symbol.iterator;function m(S){for(var R=arguments.length-1,W="http://reactjs.org/docs/error-decoder.html?invariant="+S,j=0;j<R;j++)W+="&args[]="+encodeURIComponent(arguments[j+1]);o(!1,"Minified React error #"+S+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",W)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function E(S,R,W){this.props=S,this.context=R,this.refs=a,this.updater=W||v}E.prototype.isReactComponent={},E.prototype.setState=function(S,R){typeof S!="object"&&typeof S!="function"&&S!=null&&m("85"),this.updater.enqueueSetState(this,S,R,"setState")},E.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function T(){}T.prototype=E.prototype;function C(S,R,W){this.props=S,this.context=R,this.refs=a,this.updater=W||v}var P=C.prototype=new T;P.constructor=C,s(P,E.prototype),P.isPureReactComponent=!0;var z={current:null},$=Object.prototype.hasOwnProperty,le={key:!0,ref:!0,__self:!0,__source:!0};function q(S,R,W){var j=void 0,B={},ye=null,Ze=null;if(R!=null)for(j in R.ref!==void 0&&(Ze=R.ref),R.key!==void 0&&(ye=""+R.key),R)$.call(R,j)&&!le.hasOwnProperty(j)&&(B[j]=R[j]);var Pe=arguments.length-2;if(Pe===1)B.children=W;else if(1<Pe){for(var en=Array(Pe),tn=0;tn<Pe;tn++)en[tn]=arguments[tn+2];B.children=en}if(S&&S.defaultProps)for(j in Pe=S.defaultProps,Pe)B[j]===void 0&&(B[j]=Pe[j]);return{$$typeof:c,type:S,key:ye,ref:Ze,props:B,_owner:z.current}}function re(S){return typeof S=="object"&&S!==null&&S.$$typeof===c}function fe(S){var R={"=":"=0",":":"=2"};return"$"+(""+S).replace(/[=:]/g,function(W){return R[W]})}var Te=/\/+/g,Ne=[];function je(S,R,W,j){if(Ne.length){var B=Ne.pop();return B.result=S,B.keyPrefix=R,B.func=W,B.context=j,B.count=0,B}return{result:S,keyPrefix:R,func:W,context:j,count:0}}function D(S){S.result=null,S.keyPrefix=null,S.func=null,S.context=null,S.count=0,10>Ne.length&&Ne.push(S)}function X(S,R,W,j){var B=typeof S;(B==="undefined"||B==="boolean")&&(S=null);var ye=!1;if(S===null)ye=!0;else switch(B){case"string":case"number":ye=!0;break;case"object":switch(S.$$typeof){case c:case d:ye=!0}}if(ye)return W(j,S,R===""?"."+J(S,0):R),1;if(ye=0,R=R===""?".":R+":",Array.isArray(S))for(var Ze=0;Ze<S.length;Ze++){B=S[Ze];var Pe=R+J(B,Ze);ye+=X(B,Pe,W,j)}else if(S===null||typeof S>"u"?Pe=null:(Pe=h&&S[h]||S["@@iterator"],Pe=typeof Pe=="function"?Pe:null),typeof Pe=="function")for(S=Pe.call(S),Ze=0;!(B=S.next()).done;)B=B.value,Pe=R+J(B,Ze++),ye+=X(B,Pe,W,j);else B==="object"&&(W=""+S,m("31",W==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":W,""));return ye}function J(S,R){return typeof S=="object"&&S!==null&&S.key!=null?fe(S.key):R.toString(36)}function _e(S,R){S.func.call(S.context,R,S.count++)}function N(S,R,W){var j=S.result,B=S.keyPrefix;S=S.func.call(S.context,R,S.count++),Array.isArray(S)?G(S,j,W,l.thatReturnsArgument):S!=null&&(re(S)&&(R=B+(!S.key||R&&R.key===S.key?"":(""+S.key).replace(Te,"$&/")+"/")+W,S={$$typeof:c,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}),j.push(S))}function G(S,R,W,j,B){var ye="";W!=null&&(ye=(""+W).replace(Te,"$&/")+"/"),R=je(R,ye,j,B),S==null||X(S,"",N,R),D(R)}var oe={Children:{map:function(S,R,W){if(S==null)return S;var j=[];return G(S,j,null,R,W),j},forEach:function(S,R,W){if(S==null)return S;R=je(null,null,R,W),S==null||X(S,"",_e,R),D(R)},count:function(S){return S==null?0:X(S,"",l.thatReturnsNull,null)},toArray:function(S){var R=[];return G(S,R,null,l.thatReturnsArgument),R},only:function(S){return re(S)||m("143"),S}},createRef:function(){return{current:null}},Component:E,PureComponent:C,createContext:function(S,R){return R===void 0&&(R=null),S={$$typeof:y,_calculateChangedBits:R,_defaultValue:S,_currentValue:S,_changedBits:0,Provider:null,Consumer:null},S.Provider={$$typeof:p,_context:S},S.Consumer=S},forwardRef:function(S){return{$$typeof:_,render:S}},Fragment:f,StrictMode:g,unstable_AsyncMode:k,createElement:q,cloneElement:function(S,R,W){S==null&&m("267",S);var j=void 0,B=s({},S.props),ye=S.key,Ze=S.ref,Pe=S._owner;if(R!=null){R.ref!==void 0&&(Ze=R.ref,Pe=z.current),R.key!==void 0&&(ye=""+R.key);var en=void 0;S.type&&S.type.defaultProps&&(en=S.type.defaultProps);for(j in R)$.call(R,j)&&!le.hasOwnProperty(j)&&(B[j]=R[j]===void 0&&en!==void 0?en[j]:R[j])}if(j=arguments.length-2,j===1)B.children=W;else if(1<j){en=Array(j);for(var tn=0;tn<j;tn++)en[tn]=arguments[tn+2];B.children=en}return{$$typeof:c,type:S.type,key:ye,ref:Ze,props:B,_owner:Pe}},createFactory:function(S){var R=q.bind(null,S);return R.type=S,R},isValidElement:re,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:z,assign:s}},ue=Object.freeze({default:oe}),ee=ue&&oe||ue;n.exports=ee.default?ee.default:ee},function(n,r,i){},function(n,r,i){n.exports=i(13)()},function(n,r,i){var s=i(1),o=i(0),a=i(3),l=i(2),u=i(4),c=i(6);n.exports=function(d,f){var g=typeof Symbol=="function"&&Symbol.iterator,p="@@iterator";function y(N){var G=N&&(g&&N[g]||N[p]);if(typeof G=="function")return G}var k="<<anonymous>>",_={array:E("array"),bool:E("boolean"),func:E("function"),number:E("number"),object:E("object"),string:E("string"),symbol:E("symbol"),any:T(),arrayOf:C,element:P(),instanceOf:z,node:re(),objectOf:le,oneOf:$,oneOfType:q,shape:fe,exact:Te};function h(N,G){return N===G?N!==0||1/N===1/G:N!==N&&G!==G}function m(N){this.message=N,this.stack=""}m.prototype=Error.prototype;function v(N){function G(ue,ee,S,R,W,j,B){return R=R||k,j=j||S,B!==u&&f&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),ee[S]==null?ue?ee[S]===null?new m("The "+W+" `"+j+"` is marked as required "+("in `"+R+"`, but its value is `null`.")):new m("The "+W+" `"+j+"` is marked as required in "+("`"+R+"`, but its value is `undefined`.")):null:N(ee,S,R,W,j)}var oe=G.bind(null,!1);return oe.isRequired=G.bind(null,!0),oe}function E(N){function G(oe,ue,ee,S,R,W){var j=oe[ue],B=D(j);if(B!==N){var ye=X(j);return new m("Invalid "+S+" `"+R+"` of type "+("`"+ye+"` supplied to `"+ee+"`, expected ")+("`"+N+"`."))}return null}return v(G)}function T(){return v(s.thatReturnsNull)}function C(N){function G(oe,ue,ee,S,R){if(typeof N!="function")return new m("Property `"+R+"` of component `"+ee+"` has invalid PropType notation inside arrayOf.");var W=oe[ue];if(!Array.isArray(W)){var j=D(W);return new m("Invalid "+S+" `"+R+"` of type "+("`"+j+"` supplied to `"+ee+"`, expected an array."))}for(var B=0;B<W.length;B++){var ye=N(W,B,ee,S,R+"["+B+"]",u);if(ye instanceof Error)return ye}return null}return v(G)}function P(){function N(G,oe,ue,ee,S){var R=G[oe];if(!d(R)){var W=D(R);return new m("Invalid "+ee+" `"+S+"` of type "+("`"+W+"` supplied to `"+ue+"`, expected a single ReactElement."))}return null}return v(N)}function z(N){function G(oe,ue,ee,S,R){if(!(oe[ue]instanceof N)){var W=N.name||k,j=_e(oe[ue]);return new m("Invalid "+S+" `"+R+"` of type "+("`"+j+"` supplied to `"+ee+"`, expected ")+("instance of `"+W+"`."))}return null}return v(G)}function $(N){if(!Array.isArray(N))return s.thatReturnsNull;function G(oe,ue,ee,S,R){for(var W=oe[ue],j=0;j<N.length;j++)if(h(W,N[j]))return null;var B=JSON.stringify(N);return new m("Invalid "+S+" `"+R+"` of value `"+W+"` "+("supplied to `"+ee+"`, expected one of "+B+"."))}return v(G)}function le(N){function G(oe,ue,ee,S,R){if(typeof N!="function")return new m("Property `"+R+"` of component `"+ee+"` has invalid PropType notation inside objectOf.");var W=oe[ue],j=D(W);if(j!=="object")return new m("Invalid "+S+" `"+R+"` of type "+("`"+j+"` supplied to `"+ee+"`, expected an object."));for(var B in W)if(W.hasOwnProperty(B)){var ye=N(W,B,ee,S,R+"."+B,u);if(ye instanceof Error)return ye}return null}return v(G)}function q(N){if(!Array.isArray(N))return s.thatReturnsNull;for(var G=0;G<N.length;G++){var oe=N[G];if(typeof oe!="function")return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",J(oe),G),s.thatReturnsNull}function ue(ee,S,R,W,j){for(var B=0;B<N.length;B++){var ye=N[B];if(ye(ee,S,R,W,j,u)==null)return null}return new m("Invalid "+W+" `"+j+"` supplied to "+("`"+R+"`."))}return v(ue)}function re(){function N(G,oe,ue,ee,S){return Ne(G[oe])?null:new m("Invalid "+ee+" `"+S+"` supplied to "+("`"+ue+"`, expected a ReactNode."))}return v(N)}function fe(N){function G(oe,ue,ee,S,R){var W=oe[ue],j=D(W);if(j!=="object")return new m("Invalid "+S+" `"+R+"` of type `"+j+"` "+("supplied to `"+ee+"`, expected `object`."));for(var B in N){var ye=N[B];if(ye){var Ze=ye(W,B,ee,S,R+"."+B,u);if(Ze)return Ze}}return null}return v(G)}function Te(N){function G(oe,ue,ee,S,R){var W=oe[ue],j=D(W);if(j!=="object")return new m("Invalid "+S+" `"+R+"` of type `"+j+"` "+("supplied to `"+ee+"`, expected `object`."));var B=l({},oe[ue],N);for(var ye in B){var Ze=N[ye];if(!Ze)return new m("Invalid "+S+" `"+R+"` key `"+ye+"` supplied to `"+ee+"`.\nBad object: "+JSON.stringify(oe[ue],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(N),null,"  "));var Pe=Ze(W,ye,ee,S,R+"."+ye,u);if(Pe)return Pe}return null}return v(G)}function Ne(N){switch(typeof N){case"number":case"string":case"undefined":return!0;case"boolean":return!N;case"object":if(Array.isArray(N))return N.every(Ne);if(N===null||d(N))return!0;var G=y(N);if(G){var oe=G.call(N),ue;if(G!==N.entries){for(;!(ue=oe.next()).done;)if(!Ne(ue.value))return!1}else for(;!(ue=oe.next()).done;){var ee=ue.value;if(ee&&!Ne(ee[1]))return!1}}else return!1;return!0;default:return!1}}function je(N,G){return N==="symbol"||G["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&G instanceof Symbol}function D(N){var G=typeof N;return Array.isArray(N)?"array":N instanceof RegExp?"object":je(G,N)?"symbol":G}function X(N){if(typeof N>"u"||N===null)return""+N;var G=D(N);if(G==="object"){if(N instanceof Date)return"date";if(N instanceof RegExp)return"regexp"}return G}function J(N){var G=X(N);switch(G){case"array":case"object":return"an "+G;case"boolean":case"date":case"regexp":return"a "+G;default:return G}}function _e(N){return!N.constructor||!N.constructor.name?k:N.constructor.name}return _.checkPropTypes=c,_.PropTypes=_,_}},function(n,r,i){var s=i(1),o=i(0),a=i(4);n.exports=function(){function l(d,f,g,p,y,k){k!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}l.isRequired=l;function u(){return l}var c={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u};return c.checkPropTypes=s,c.PropTypes=c,c}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(15);Object.defineProperty(r,"blank",{enumerable:!0,get:function(){return p(s).default}});var o=i(16);Object.defineProperty(r,"balls",{enumerable:!0,get:function(){return p(o).default}});var a=i(17);Object.defineProperty(r,"bars",{enumerable:!0,get:function(){return p(a).default}});var l=i(18);Object.defineProperty(r,"bubbles",{enumerable:!0,get:function(){return p(l).default}});var u=i(19);Object.defineProperty(r,"cubes",{enumerable:!0,get:function(){return p(u).default}});var c=i(20);Object.defineProperty(r,"cylon",{enumerable:!0,get:function(){return p(c).default}});var d=i(21);Object.defineProperty(r,"spin",{enumerable:!0,get:function(){return p(d).default}});var f=i(22);Object.defineProperty(r,"spinningBubbles",{enumerable:!0,get:function(){return p(f).default}});var g=i(23);Object.defineProperty(r,"spokes",{enumerable:!0,get:function(){return p(g).default}});function p(y){return y&&y.__esModule?y:{default:y}}},function(n,r){n.exports=`<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
`},function(n,r){n.exports=`<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
  </path>
</svg>
`}])})})(DS);var T2=DS.exports;const MS=Gy(T2),x2=({search:t})=>{const[e,n]=A.useState([]),{setCurrentChat:r}=A.useContext(xc),[i,s]=A.useState([]),[o,a]=A.useState([]),[l,u]=A.useState(!1),c=()=>{Je.onAuthStateChanged(p=>{if(p){const y=p.uid,k=mt(gt,`users/${y}/friends`);Gr(k,_=>{if(_.exists()){const h=Object.values(_.val());n(h),h.map((m,v)=>{f(m,v)})}})}})};function d(){const p=e.map((y,k)=>{const _=Zl(Yl,`images/${y.id}`);return hh(_).then(h=>h).catch(h=>"./user.svg")});Promise.all(p).then(y=>{a(y)}).catch(y=>{console.error("Error fetching friend images:",y)}).finally(()=>u(!0))}A.useEffect(()=>{c()},[]),A.useEffect(()=>{e.length>0&&d()},[e]);const f=(p,y)=>{let k=[];const _=Je.currentUser.uid,h=mt(gt,`users/${_}/sent/${p.id}`),m=mt(gt,`users/${_}/received/${p.id}`);Gr(h,v=>{v.exists()?Object.values(v.val()).map(T=>{k.push(T)}):k=[],Gr(m,E=>{E.exists()&&Object.values(E.val()).map(P=>{k.push(P)}),k.sort((C,P)=>C.date-P.date);const T=i;T[y]=k[k.length-1],s(T)})})},g=(p,y)=>{r({firstName:p.firstName,id:p.id,username:p.username,img:o[y]})};return I.jsx(E2,{children:e.length>0&&l?e.map((p,y)=>{if(p.username.includes(t))return I.jsxs(y2,{onClick:()=>g(p,y),children:[I.jsx(v2,{src:o[y]}),I.jsxs(S2,{children:[I.jsx(w2,{children:p.firstName[0].toUpperCase()+p.firstName.slice(1)}),i[y]&&I.jsx(C2,{children:i[y].message})]})]},p.id)}):I.jsx(k2,{children:I.jsx(MS,{type:"spin",color:"black",height:30,width:30})})})},I2=F.div`
    background-color:${Hn.color.lightBlue};
    position:absolute;
    width:60%;
    min-height:10vh;
    right:40px;
    top:15px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:10px;
    z-index:1;
`,R2=F.input`
    width:80%;
    height:4vh;
    background-color:#EDEDED;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:10px;
    font-size:1em;
`,b2=F.h1`
    font-size:1.5em;
    color: #fff;
    font-weight:500;

`,N2=F.h2`
    font-size:1em;
    font-weight:100;
    color: #fff;
    
`,P2=F.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    `,A2=F.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    
`,O2=F.div`
    display:flex;
    justify-content:space-between;
`,D2=F.h1`
    margin:5px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`,M2=F.h2`
    font-size:1em;
    color:white;
    font-weight:300;
`,L2=F.h2`
    font-size:1em;
    color:white;
    font-weight:300;
`,F2=({setSearchActive:t,users:e,AddFriend:n})=>{const[r,i]=A.useState(""),[s,o]=A.useState(!0);let a=!1;return A.useEffect(()=>{o(!0),setTimeout(()=>{o(!1)},1500)},[r]),I.jsxs(I2,{children:[I.jsxs(O2,{children:[I.jsx(R2,{type:"text",value:r,onChange:l=>i(l.target.value),placeholder:"Find your friends"}),I.jsx(D2,{onClick:()=>t(!1),children:"X"})]}),r==""&&I.jsx(M2,{children:"Connect with people"}),s&&!r==""&&I.jsx(MS,{type:"spin",color:"black",height:30,width:30}),e.map(l=>{if(l.username.toUpperCase().includes(r.toUpperCase())&&r!==""&&!s)return a=!0,I.jsxs(P2,{children:[I.jsxs(A2,{children:[I.jsx(b2,{children:l.firstName[0].toUpperCase()+l.firstName.slice(1)}),I.jsx(N2,{children:l.username})]}),I.jsx("img",{src:"./plus.svg",onClick:()=>{n(l),t(!1)}})]},l.uid)}),!a&&r!==""&&!s&&I.jsx(L2,{children:"User not found!"})]})},U2=()=>{const[t,e]=A.useState(!1),[n,r]=A.useState([]),[i,s]=A.useState(),[o,a]=A.useState(!1),[l,u]=A.useState(""),[c,d]=A.useState(),[f,g]=A.useState(),[p,y]=A.useState(),k=()=>{Je.onAuthStateChanged(z=>{if(z){const $=z.uid,le=mt(gt,`users/${$}`);Gr(le,q=>{if(q.exists()){const re=q.val();s(re)}})}})},_=()=>{const z=mt(gt,"users");Gr(z,$=>{if($.exists()){const le=$.val();r(Object.values(le))}})};A.useEffect(()=>{_(),k(),Je.onAuthStateChanged(z=>{if(z){const $=Zl(Yl,`images/${z.uid}`);hh($).then(le=>y(le))}})},[]);const h=z=>{const $=Je.currentUser.uid,le=mt(gt,`users/${$}/friends/${z.id}`);xi(le,{username:z.username,firstName:z.firstName,id:z.id});const q=mt(gt,`users/${$}`);Gr(q,re=>{if(re.exists()){const fe=re.val(),Te=mt(gt,`users/${z.id}/friends/${$}`);xi(Te,{username:fe.username,firstName:fe.firstName,id:fe.id})}}),setFriendSearch("")},m=z=>{Je.onAuthStateChanged($=>{if($){const le=$.uid;if(!z)return;const q=Zl(Yl,`images/${le}`);return pA(q,z)}})},v=z=>{z.preventDefault(),Je.onAuthStateChanged($=>{if($&&c){const le=$.uid,q=mt(gt,`users/${le}/firstName`);xi(q,c)}m(f).then(()=>{const le=Zl(Yl,`images/${Je.currentUser.uid}`);hh(le).then(q=>y(q))}).catch(le=>{console.error("Error uploading image: ",le)})})},[E,T]=A.useState(window.innerWidth);A.useEffect(()=>{window.addEventListener("resize",()=>T(window.innerWidth))},[]);const[C,P]=A.useState(!1);return I.jsxs(I.Fragment,{children:[I.jsx(JL,{src:"./Team.svg",onClick:()=>P(!C),display:E>780?"none":""}),I.jsx(QL,{display:E>780||C?"":"none",children:I.jsxs(XL,{children:[I.jsxs(e2,{children:[o&&I.jsx(d2,{children:I.jsxs(f2,{onSubmit:v,as:"form",children:[I.jsx(_2,{children:"Edit profile"}),I.jsx(g2,{placeholder:"Name",value:c,onChange:z=>d(z.target.value)}),I.jsx(m2,{children:"Change profile picture"}),I.jsx(p2,{type:"file",accept:"image/*",onChange:z=>g(z.target.files[0])}),I.jsx(h2,{type:"submit",children:"Confirm"})]})}),t&&I.jsx(F2,{setSearchActive:e,users:n,AddFriend:h}),I.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[I.jsx(r2,{src:p||"./user.svg"}),I.jsx("div",{style:{marginLeft:"20px"},children:i&&I.jsxs(I.Fragment,{children:[I.jsx(t2,{children:i.firstName}),I.jsx(n2,{children:i.username})]})})]}),I.jsxs("div",{children:[I.jsx(c2,{src:"./editUser.svg",onClick:()=>a(!o)}),I.jsx(i2,{src:"./userAdd.svg",onClick:()=>e(!0)})]})]}),I.jsxs(s2,{children:[I.jsx(o2,{children:"Messages"}),I.jsxs(l2,{children:[I.jsx(u2,{src:"./search.svg"}),I.jsx(a2,{placeholder:"Search Chats",value:l,onChange:z=>u(z.target.value)})]}),I.jsx(x2,{search:l})]})]})})]})},j2=F.div`
    display:flex;
    flex-direction:column-reverse;
    width:100%;
    position:relative;
    overflow-y:scroll;
    height:100vh;
`,$2=F.div`
    width:30%;
    min-height:8vh;
    align-self:${({$received:t})=>t==="true"?"start":"end"};
    background-color:${({$received:t})=>t==="true"?"#FFF":Hn.color.lightBlue};
    margin:80px;
    border-radius:15px;
    border:1px solid #dbdbdb;
`,V2=F.h1`
    font-size:1em;
    margin:10px;

`,z2=()=>{const t=A.useRef(null),[e,n]=A.useState([]),[r,i]=A.useState([]),[s,o]=A.useState([]),{currentChat:a}=A.useContext(xc),l=()=>{a&&Je.onAuthStateChanged(d=>{if(d){const f=d.uid,g=mt(gt,`users/${f}/sent/${a.id}`);Gr(g,p=>{if(p.exists()){const y=Object.values(p.val());i(y)}else i([])})}})},u=()=>{if(a){const d=Je.currentUser;if(d){const f=d.uid,g=mt(gt,`users/${f}/received/${a.id}`);Gr(g,p=>{if(p.exists()){const y=Object.values(p.val());o(y)}else o([])})}}};A.useEffect(()=>{l(),u()},[a]),A.useEffect(()=>{c()},[r,s]),A.useEffect(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)},[]);const c=()=>{let d=[];r.map(f=>d.push(f)),s.map(f=>d.push(f)),d.sort((f,g)=>g.date-f.date),n(d)};return I.jsx(j2,{ref:t,children:e.map((d,f)=>I.jsx($2,{$received:d.id==Je.currentUser.uid?"false":"true",children:I.jsx(V2,{children:d.message})},f))})},B2=F.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
`,W2=F.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    height:10vh;
    margin:50px;
    background-color:${Hn.color.lightBlue};
    border-radius:20px;
    position:relative;

`,H2=F.div`
    width:100%;
    display:flex;
    align-items:center;
    margin:20px;
`,G2=F.img`
    width:60px;
    height:60px;
    border-radius:50%;
    object-fit:cover;

`,K2=F.h1`
    font-size:1.5em;
    color:#ffffff;
    margin-left:20px;
    
`,q2=F.img`
    width:40px;
    cursor: pointer;
    margin-right:20px;

`,Z2=F.input`
    width:100%;
    height:7vh;
    background-color:#FFF;
    border:none;
    border-radius:10px;
    padding:5px;
    border:1px solid #dbdbdb;

`,Y2=F.button`
    width:50px;
    height:50px;
    background-image:url("./planeSend.svg");
    background-size:contain;
    background-color:transparent;
    position:absolute;
    right:10px;
    border:none;
    cursor: pointer;

`,Q2=F.div`
    display:flex;
    align-items:center;
    position:relative;
    margin:20px;
`,X2=F.div`
    position:absolute;
    width:fit-content;
    height:8vh;
    background-color:#FFF;
    right:45px;
    top:55px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:1px solid #dbdbdb;
    
`,Hy=F.h2`
    font-size:1em;
    font-weight:100;
    margin:5px;
    cursor: pointer;
`,J2=F.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`,eF=F.div`
    width:50%;
    height:30%;
    background-color:#FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid #c7c7c7 ;
    border-radius:15px;
`,tF=F.h1`
    font-size:2em;

`,nF=F.div`
    display:flex;
    flex-direction:column;
       
`,rF=F.h2`
    font-size:1em;
    color:#d1d1d1;
    margin-left:20px;
    font-weight:normal;
    letter-spacing:1px;
`,iF=()=>{const[t,e]=A.useState(!1),[n,r]=A.useState(""),{currentChat:i}=A.useContext(xc),s=()=>{const l=Je.currentUser;if(l){const u=l.uid,c=mt(gt,`users/${u}/sent/${i.id}`),d=mt(gt,`users/${u}/received/${i.id}`);xi(d,{}),xi(c,{})}},o=()=>{if(n!==""){const l=Je.currentUser.uid,u=mt(gt,`users/${l}/sent/${i.id}`),c=mt(gt,`users/${i.id}/received/${l}`),d=new Date().getTime();Ny(u,{date:d,message:n,id:l}),Ny(c,{date:d,message:n,id:l}),r("")}},a=()=>{Je.signOut()};return I.jsxs(B2,{children:[i&&I.jsxs(I.Fragment,{children:[I.jsxs(W2,{children:[t&&I.jsxs(X2,{children:[I.jsx(Hy,{onClick:s,children:"Clear chat"}),I.jsx(Hy,{onClick:a,children:"Disconnect"})]}),I.jsxs(H2,{children:[I.jsx(G2,{src:i.img}),i&&I.jsxs(nF,{children:[I.jsx(K2,{children:i.firstName[0].toUpperCase()+i.firstName.slice(1)}),I.jsx(rF,{children:i.username})]})]}),I.jsx(q2,{src:"./dotsVertical.svg",onClick:()=>e(!t)})]}),I.jsx(z2,{}),I.jsxs(Q2,{as:"form",onSubmit:o,children:[I.jsx(Z2,{type:"text",value:n,onChange:l=>r(l.target.value)}),I.jsx(Y2,{type:"submit"})]})]}),!i&&I.jsx(J2,{children:I.jsx(eF,{children:I.jsx(tF,{children:"Start talking with your friends"})})})]})},sF=F.div`
    display:flex;
    height:100vh;
    overflow:hidden
`,oF=()=>{const t=Tp();return A.useEffect(()=>{Je.onAuthStateChanged(e=>{e||t("/login")})},[]),I.jsxs(sF,{children:[I.jsx(U2,{}),I.jsx(iF,{})]})};ef.createRoot(document.getElementById("root")).render(I.jsx(ct.StrictMode,{children:I.jsx(ox,{children:I.jsx(pT,{children:I.jsxs(ix,{children:[I.jsx(jl,{path:"/",element:I.jsx(oF,{})}),I.jsx(jl,{path:"/register",element:I.jsx(YL,{})}),I.jsx(jl,{path:"/login",element:I.jsx(BL,{})})]})})})}));
