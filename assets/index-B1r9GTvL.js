function Q5(n,a){for(var i=0;i<a.length;i++){const l=a[i];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in n)){const d=Object.getOwnPropertyDescriptor(l,s);d&&Object.defineProperty(n,s,d.get?d:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(s){if(s.ep)return;s.ep=!0;const d=i(s);fetch(s.href,d)}})();function pv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1;function J5(){if(g1)return vo;g1=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(l,s,d){var h=null;if(d!==void 0&&(h=""+d),s.key!==void 0&&(h=""+s.key),"key"in s){d={};for(var x in s)x!=="key"&&(d[x]=s[x])}else d=s;return s=d.ref,{$$typeof:n,type:l,key:h,ref:s!==void 0?s:null,props:d}}return vo.Fragment=a,vo.jsx=i,vo.jsxs=i,vo}var x1;function W5(){return x1||(x1=1,cf.exports=J5()),cf.exports}var c=W5(),uf={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1;function eS(){if(b1)return we;b1=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),w=Symbol.iterator;function C(B){return B===null||typeof B!="object"?null:(B=w&&B[w]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,O={};function j(B,K,te){this.props=B,this.context=K,this.refs=O,this.updater=te||M}j.prototype.isReactComponent={},j.prototype.setState=function(B,K){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,K,"setState")},j.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function k(){}k.prototype=j.prototype;function A(B,K,te){this.props=B,this.context=K,this.refs=O,this.updater=te||M}var D=A.prototype=new k;D.constructor=A,R(D,j.prototype),D.isPureReactComponent=!0;var U=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},_=Object.prototype.hasOwnProperty;function z(B,K,te,re,ae,xe){return te=xe.ref,{$$typeof:n,type:B,key:K,ref:te!==void 0?te:null,props:xe}}function G(B,K){return z(B.type,K,void 0,void 0,void 0,B.props)}function N(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function Y(B){var K={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(te){return K[te]})}var ne=/\/+/g;function ie(B,K){return typeof B=="object"&&B!==null&&B.key!=null?Y(""+B.key):K.toString(36)}function ue(){}function Te(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(ue,ue):(B.status="pending",B.then(function(K){B.status==="pending"&&(B.status="fulfilled",B.value=K)},function(K){B.status==="pending"&&(B.status="rejected",B.reason=K)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Z(B,K,te,re,ae){var xe=typeof B;(xe==="undefined"||xe==="boolean")&&(B=null);var le=!1;if(B===null)le=!0;else switch(xe){case"bigint":case"string":case"number":le=!0;break;case"object":switch(B.$$typeof){case n:case a:le=!0;break;case g:return le=B._init,Z(le(B._payload),K,te,re,ae)}}if(le)return ae=ae(B),le=re===""?"."+ie(B,0):re,U(ae)?(te="",le!=null&&(te=le.replace(ne,"$&/")+"/"),Z(ae,K,te,"",function(Xe){return Xe})):ae!=null&&(N(ae)&&(ae=G(ae,te+(ae.key==null||B&&B.key===ae.key?"":(""+ae.key).replace(ne,"$&/")+"/")+le)),K.push(ae)),1;le=0;var je=re===""?".":re+":";if(U(B))for(var he=0;he<B.length;he++)re=B[he],xe=je+ie(re,he),le+=Z(re,K,te,xe,ae);else if(he=C(B),typeof he=="function")for(B=he.call(B),he=0;!(re=B.next()).done;)re=re.value,xe=je+ie(re,he++),le+=Z(re,K,te,xe,ae);else if(xe==="object"){if(typeof B.then=="function")return Z(Te(B),K,te,re,ae);throw K=String(B),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return le}function T(B,K,te){if(B==null)return B;var re=[],ae=0;return Z(B,re,"","",function(xe){return K.call(te,xe,ae++)}),re}function I(B){if(B._status===-1){var K=B._result;K=K(),K.then(function(te){(B._status===0||B._status===-1)&&(B._status=1,B._result=te)},function(te){(B._status===0||B._status===-1)&&(B._status=2,B._result=te)}),B._status===-1&&(B._status=0,B._result=K)}if(B._status===1)return B._result.default;throw B._result}var J=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function oe(){}return we.Children={map:T,forEach:function(B,K,te){T(B,function(){K.apply(this,arguments)},te)},count:function(B){var K=0;return T(B,function(){K++}),K},toArray:function(B){return T(B,function(K){return K})||[]},only:function(B){if(!N(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},we.Component=j,we.Fragment=i,we.Profiler=s,we.PureComponent=A,we.StrictMode=l,we.Suspense=p,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,we.__COMPILER_RUNTIME={__proto__:null,c:function(B){return S.H.useMemoCache(B)}},we.cache=function(B){return function(){return B.apply(null,arguments)}},we.cloneElement=function(B,K,te){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var re=R({},B.props),ae=B.key,xe=void 0;if(K!=null)for(le in K.ref!==void 0&&(xe=void 0),K.key!==void 0&&(ae=""+K.key),K)!_.call(K,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&K.ref===void 0||(re[le]=K[le]);var le=arguments.length-2;if(le===1)re.children=te;else if(1<le){for(var je=Array(le),he=0;he<le;he++)je[he]=arguments[he+2];re.children=je}return z(B.type,ae,void 0,void 0,xe,re)},we.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:d,_context:B},B},we.createElement=function(B,K,te){var re,ae={},xe=null;if(K!=null)for(re in K.key!==void 0&&(xe=""+K.key),K)_.call(K,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ae[re]=K[re]);var le=arguments.length-2;if(le===1)ae.children=te;else if(1<le){for(var je=Array(le),he=0;he<le;he++)je[he]=arguments[he+2];ae.children=je}if(B&&B.defaultProps)for(re in le=B.defaultProps,le)ae[re]===void 0&&(ae[re]=le[re]);return z(B,xe,void 0,void 0,null,ae)},we.createRef=function(){return{current:null}},we.forwardRef=function(B){return{$$typeof:x,render:B}},we.isValidElement=N,we.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:I}},we.memo=function(B,K){return{$$typeof:m,type:B,compare:K===void 0?null:K}},we.startTransition=function(B){var K=S.T,te={};S.T=te;try{var re=B(),ae=S.S;ae!==null&&ae(te,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(oe,J)}catch(xe){J(xe)}finally{S.T=K}},we.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},we.use=function(B){return S.H.use(B)},we.useActionState=function(B,K,te){return S.H.useActionState(B,K,te)},we.useCallback=function(B,K){return S.H.useCallback(B,K)},we.useContext=function(B){return S.H.useContext(B)},we.useDebugValue=function(){},we.useDeferredValue=function(B,K){return S.H.useDeferredValue(B,K)},we.useEffect=function(B,K,te){var re=S.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(B,K)},we.useId=function(){return S.H.useId()},we.useImperativeHandle=function(B,K,te){return S.H.useImperativeHandle(B,K,te)},we.useInsertionEffect=function(B,K){return S.H.useInsertionEffect(B,K)},we.useLayoutEffect=function(B,K){return S.H.useLayoutEffect(B,K)},we.useMemo=function(B,K){return S.H.useMemo(B,K)},we.useOptimistic=function(B,K){return S.H.useOptimistic(B,K)},we.useReducer=function(B,K,te){return S.H.useReducer(B,K,te)},we.useRef=function(B){return S.H.useRef(B)},we.useState=function(B){return S.H.useState(B)},we.useSyncExternalStore=function(B,K,te){return S.H.useSyncExternalStore(B,K,te)},we.useTransition=function(){return S.H.useTransition()},we.version="19.1.1",we}var v1;function qh(){return v1||(v1=1,uf.exports=eS()),uf.exports}var v=qh();const ct=pv(v),y1=Q5({__proto__:null,default:ct},[v]);var df={exports:{}},yo={},ff={exports:{}},hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function tS(){return w1||(w1=1,(function(n){function a(T,I){var J=T.length;T.push(I);e:for(;0<J;){var oe=J-1>>>1,B=T[oe];if(0<s(B,I))T[oe]=I,T[J]=B,J=oe;else break e}}function i(T){return T.length===0?null:T[0]}function l(T){if(T.length===0)return null;var I=T[0],J=T.pop();if(J!==I){T[0]=J;e:for(var oe=0,B=T.length,K=B>>>1;oe<K;){var te=2*(oe+1)-1,re=T[te],ae=te+1,xe=T[ae];if(0>s(re,J))ae<B&&0>s(xe,re)?(T[oe]=xe,T[ae]=J,oe=ae):(T[oe]=re,T[te]=J,oe=te);else if(ae<B&&0>s(xe,J))T[oe]=xe,T[ae]=J,oe=ae;else break e}}return I}function s(T,I){var J=T.sortIndex-I.sortIndex;return J!==0?J:T.id-I.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var h=Date,x=h.now();n.unstable_now=function(){return h.now()-x}}var p=[],m=[],g=1,w=null,C=3,M=!1,R=!1,O=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(T){for(var I=i(m);I!==null;){if(I.callback===null)l(m);else if(I.startTime<=T)l(m),I.sortIndex=I.expirationTime,a(p,I);else break;I=i(m)}}function S(T){if(O=!1,U(T),!R)if(i(p)!==null)R=!0,_||(_=!0,ie());else{var I=i(m);I!==null&&Z(S,I.startTime-T)}}var _=!1,z=-1,G=5,N=-1;function Y(){return j?!0:!(n.unstable_now()-N<G)}function ne(){if(j=!1,_){var T=n.unstable_now();N=T;var I=!0;try{e:{R=!1,O&&(O=!1,A(z),z=-1),M=!0;var J=C;try{t:{for(U(T),w=i(p);w!==null&&!(w.expirationTime>T&&Y());){var oe=w.callback;if(typeof oe=="function"){w.callback=null,C=w.priorityLevel;var B=oe(w.expirationTime<=T);if(T=n.unstable_now(),typeof B=="function"){w.callback=B,U(T),I=!0;break t}w===i(p)&&l(p),U(T)}else l(p);w=i(p)}if(w!==null)I=!0;else{var K=i(m);K!==null&&Z(S,K.startTime-T),I=!1}}break e}finally{w=null,C=J,M=!1}I=void 0}}finally{I?ie():_=!1}}}var ie;if(typeof D=="function")ie=function(){D(ne)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Te=ue.port2;ue.port1.onmessage=ne,ie=function(){Te.postMessage(null)}}else ie=function(){k(ne,0)};function Z(T,I){z=k(function(){T(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(T){T.callback=null},n.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<T?Math.floor(1e3/T):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_next=function(T){switch(C){case 1:case 2:case 3:var I=3;break;default:I=C}var J=C;C=I;try{return T()}finally{C=J}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var J=C;C=T;try{return I()}finally{C=J}},n.unstable_scheduleCallback=function(T,I,J){var oe=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,T){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=J+B,T={id:g++,callback:I,priorityLevel:T,startTime:J,expirationTime:B,sortIndex:-1},J>oe?(T.sortIndex=J,a(m,T),i(p)===null&&T===i(m)&&(O?(A(z),z=-1):O=!0,Z(S,J-oe))):(T.sortIndex=B,a(p,T),R||M||(R=!0,_||(_=!0,ie()))),T},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(T){var I=C;return function(){var J=C;C=I;try{return T.apply(this,arguments)}finally{C=J}}}})(hf)),hf}var S1;function nS(){return S1||(S1=1,ff.exports=tS()),ff.exports}var pf={exports:{}},Et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1;function aS(){if(j1)return Et;j1=1;var n=qh();function a(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(p,m,g){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:""+w,children:p,containerInfo:m,implementation:g}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Et.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(a(299));return d(p,m,null,g)},Et.flushSync=function(p){var m=h.T,g=l.p;try{if(h.T=null,l.p=2,p)return p()}finally{h.T=m,l.p=g,l.d.f()}},Et.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(p,m))},Et.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},Et.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,w=x(g,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?l.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:C,fetchPriority:M}):g==="script"&&l.d.X(p,{crossOrigin:w,integrity:C,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Et.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=x(m.as,m.crossOrigin);l.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(p)},Et.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,w=x(g,m.crossOrigin);l.d.L(p,g,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Et.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=x(m.as,m.crossOrigin);l.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(p)},Et.requestFormReset=function(p){l.d.r(p)},Et.unstable_batchedUpdates=function(p,m){return p(m)},Et.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Et.useFormStatus=function(){return h.H.useHostTransitionStatus()},Et.version="19.1.1",Et}var C1;function mv(){if(C1)return pf.exports;C1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),pf.exports=aS(),pf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function rS(){if(E1)return yo;E1=1;var n=nS(),a=qh(),i=mv();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(l(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return x(u),e;if(f===o)return x(u),t;f=f.sibling}throw Error(l(188))}if(r.return!==o.return)r=u,o=f;else{for(var y=!1,E=u.child;E;){if(E===r){y=!0,r=u,o=f;break}if(E===o){y=!0,o=u,r=f;break}E=E.sibling}if(!y){for(E=f.child;E;){if(E===r){y=!0,r=f,o=u;break}if(E===o){y=!0,o=f,r=u;break}E=E.sibling}if(!y)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case j:return"Profiler";case O:return"StrictMode";case S:return"Suspense";case _:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case D:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var Z=Array.isArray,T=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},oe=[],B=-1;function K(e){return{current:e}}function te(e){0>B||(e.current=oe[B],oe[B]=null,B--)}function re(e,t){B++,oe[B]=e.current,e.current=t}var ae=K(null),xe=K(null),le=K(null),je=K(null);function he(e,t){switch(re(le,t),re(xe,e),re(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qg(t),e=Fg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(ae),re(ae,e)}function Xe(){te(ae),te(xe),te(le)}function zn(e){e.memoizedState!==null&&re(je,e);var t=ae.current,r=Fg(t,e.type);t!==r&&(re(xe,e),re(ae,r))}function Jt(e){xe.current===e&&(te(ae),te(xe)),je.current===e&&(te(je),po._currentValue=J)}var Rt=Object.prototype.hasOwnProperty,yi=n.unstable_scheduleCallback,fr=n.unstable_cancelCallback,Kc=n.unstable_shouldYield,O2=n.unstable_requestPaint,yn=n.unstable_now,A2=n.unstable_getCurrentPriorityLevel,Cp=n.unstable_ImmediatePriority,Ep=n.unstable_UserBlockingPriority,ll=n.unstable_NormalPriority,D2=n.unstable_LowPriority,Mp=n.unstable_IdlePriority,N2=n.log,z2=n.unstable_setDisableYieldValue,wi=null,Ht=null;function la(e){if(typeof N2=="function"&&z2(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(wi,e)}catch{}}var It=Math.clz32?Math.clz32:_2,L2=Math.log,B2=Math.LN2;function _2(e){return e>>>=0,e===0?32:31-(L2(e)/B2|0)|0}var sl=256,cl=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ul(e,t,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?u=Da(o):(y&=E,y!==0?u=Da(y):r||(r=E&~e,r!==0&&(u=Da(r))))):(E=o&~f,E!==0?u=Da(E):y!==0?u=Da(y):r||(r=o&~e,r!==0&&(u=Da(r)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,r=t&-t,f>=r||f===32&&(r&4194048)!==0)?t:u}function Si(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kp(){var e=sl;return sl<<=1,(sl&4194048)===0&&(sl=256),e}function Tp(){var e=cl;return cl<<=1,(cl&62914560)===0&&(cl=4194304),e}function Qc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ji(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function U2(e,t,r,o,u,f){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var E=e.entanglements,L=e.expirationTimes,P=e.hiddenUpdates;for(r=y&~r;0<r;){var Q=31-It(r),ee=1<<Q;E[Q]=0,L[Q]=-1;var q=P[Q];if(q!==null)for(P[Q]=null,Q=0;Q<q.length;Q++){var F=q[Q];F!==null&&(F.lane&=-536870913)}r&=~ee}o!==0&&Rp(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function Rp(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-It(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194090}function Op(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-It(r),u=1<<o;u&t|e[o]&t&&(e[o]|=t),r&=~u}}function Jc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ap(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:u1(e.type))}function H2(e,t){var r=I.p;try{return I.p=e,t()}finally{I.p=r}}var sa=Math.random().toString(36).slice(2),jt="__reactFiber$"+sa,At="__reactProps$"+sa,hr="__reactContainer$"+sa,eu="__reactEvents$"+sa,I2="__reactListeners$"+sa,V2="__reactHandles$"+sa,Dp="__reactResources$"+sa,Ci="__reactMarker$"+sa;function tu(e){delete e[jt],delete e[At],delete e[eu],delete e[I2],delete e[V2]}function pr(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[hr]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Xg(e);e!==null;){if(r=e[jt])return r;e=Xg(e)}return t}e=r,r=e.parentNode}return null}function mr(e){if(e=e[jt]||e[hr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ei(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function gr(e){var t=e[Dp];return t||(t=e[Dp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[Ci]=!0}var Np=new Set,zp={};function Na(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(zp[e]=t,e=0;e<t.length;e++)Np.add(t[e])}var P2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lp={},Bp={};function q2(e){return Rt.call(Bp,e)?!0:Rt.call(Lp,e)?!1:P2.test(e)?Bp[e]=!0:(Lp[e]=!0,!1)}function dl(e,t,r){if(q2(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function fl(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function Ln(e,t,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+o)}}var nu,_p;function br(e){if(nu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);nu=t&&t[1]||"",_p=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nu+e+_p}var au=!1;function ru(e,t){if(!e||au)return"";au=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(F){var q=F}Reflect.construct(e,[],ee)}else{try{ee.call()}catch(F){q=F}e.call(ee.prototype)}}else{try{throw Error()}catch(F){q=F}(ee=e())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],E=f[1];if(y&&E){var L=y.split(`
`),P=E.split(`
`);for(u=o=0;o<L.length&&!L[o].includes("DetermineComponentFrameRoot");)o++;for(;u<P.length&&!P[u].includes("DetermineComponentFrameRoot");)u++;if(o===L.length||u===P.length)for(o=L.length-1,u=P.length-1;1<=o&&0<=u&&L[o]!==P[u];)u--;for(;1<=o&&0<=u;o--,u--)if(L[o]!==P[u]){if(o!==1||u!==1)do if(o--,u--,0>u||L[o]!==P[u]){var Q=`
`+L[o].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=o&&0<=u);break}}}finally{au=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?br(r):""}function F2(e){switch(e.tag){case 26:case 27:case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 15:return ru(e.type,!1);case 11:return ru(e.type.render,!1);case 1:return ru(e.type,!0);case 31:return br("Activity");default:return""}}function $p(e){try{var t="";do t+=F2(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Up(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y2(e){var t=Up(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hl(e){e._valueTracker||(e._valueTracker=Y2(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Up(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var G2=/[\n"\\]/g;function en(e){return e.replace(G2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function iu(e,t,r,o,u,f,y,E){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?ou(e,y,Wt(t)):r!=null?ou(e,y,Wt(r)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Wt(E):e.removeAttribute("name")}function Ip(e,t,r,o,u,f,y,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;r=r!=null?""+Wt(r):"",t=t!=null?""+Wt(t):r,E||t===e.value||(e.value=t),e.defaultValue=t}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function ou(e,t,r){t==="number"&&pl(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function vr(e,t,r,o){if(e=e.options,t){t={};for(var u=0;u<r.length;u++)t["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=t.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Wt(r),t=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Vp(e,t,r){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+Wt(r):""}function Pp(e,t,r,o){if(t==null){if(o!=null){if(r!=null)throw Error(l(92));if(Z(o)){if(1<o.length)throw Error(l(93));o=o[0]}r=o}r==null&&(r=""),t=r}r=Wt(t),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function yr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Z2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qp(e,t,r){var o=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,r):typeof r!="number"||r===0||Z2.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Fp(e,t,r){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in t)o=t[u],t.hasOwnProperty(u)&&r[u]!==o&&qp(e,u,o)}else for(var f in t)t.hasOwnProperty(f)&&qp(e,f,t[f])}function lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return K2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var su=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Sr=null;function Yp(e){var t=mr(e);if(t&&(e=t.stateNode)){var r=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(iu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+en(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var u=o[At]||null;if(!u)throw Error(l(90));iu(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<r.length;t++)o=r[t],o.form===e.form&&Hp(o)}break e;case"textarea":Vp(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&vr(e,!!r.multiple,t,!1)}}}var uu=!1;function Gp(e,t,r){if(uu)return e(t,r);uu=!0;try{var o=e(t);return o}finally{if(uu=!1,(wr!==null||Sr!==null)&&(es(),wr&&(t=wr,e=Sr,Sr=wr=null,Yp(t),e)))for(t=0;t<e.length;t++)Yp(e[t])}}function Mi(e,t){var r=e.stateNode;if(r===null)return null;var o=r[At]||null;if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Bn)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){du=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{du=!1}var ca=null,fu=null,gl=null;function Zp(){if(gl)return gl;var e,t=fu,r=t.length,o,u="value"in ca?ca.value:ca.textContent,f=u.length;for(e=0;e<r&&t[e]===u[e];e++);var y=r-e;for(o=1;o<=y&&t[r-o]===u[f-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Xp(){return!1}function Dt(e){function t(r,o,u,f,y){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?bl:Xp,this.isPropagationStopped=Xp,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Dt(za),Ti=g({},za,{view:0,detail:0}),Q2=Dt(Ti),hu,pu,Ri,yl=g({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?(hu=e.screenX-Ri.screenX,pu=e.screenY-Ri.screenY):pu=hu=0,Ri=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),Kp=Dt(yl),J2=g({},yl,{dataTransfer:0}),W2=Dt(J2),ew=g({},Ti,{relatedTarget:0}),mu=Dt(ew),tw=g({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),nw=Dt(tw),aw=g({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rw=Dt(aw),iw=g({},za,{data:0}),Qp=Dt(iw),ow={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sw[e])?!!t[e]:!1}function gu(){return cw}var uw=g({},Ti,{key:function(e){if(e.key){var t=ow[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dw=Dt(uw),fw=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Dt(fw),hw=g({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),pw=Dt(hw),mw=g({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),gw=Dt(mw),xw=g({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bw=Dt(xw),vw=g({},za,{newState:0,oldState:0}),yw=Dt(vw),ww=[9,13,27,32],xu=Bn&&"CompositionEvent"in window,Oi=null;Bn&&"documentMode"in document&&(Oi=document.documentMode);var Sw=Bn&&"TextEvent"in window&&!Oi,Wp=Bn&&(!xu||Oi&&8<Oi&&11>=Oi),e0=" ",t0=!1;function n0(e,t){switch(e){case"keyup":return ww.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function jw(e,t){switch(e){case"compositionend":return a0(t);case"keypress":return t.which!==32?null:(t0=!0,e0);case"textInput":return e=t.data,e===e0&&t0?null:e;default:return null}}function Cw(e,t){if(jr)return e==="compositionend"||!xu&&n0(e,t)?(e=Zp(),gl=fu=ca=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wp&&t.locale!=="ko"?null:t.data;default:return null}}var Ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ew[e.type]:t==="textarea"}function i0(e,t,r,o){wr?Sr?Sr.push(o):Sr=[o]:wr=o,t=os(t,"onChange"),0<t.length&&(r=new vl("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Ai=null,Di=null;function Mw(e){Ug(e,0)}function wl(e){var t=Ei(e);if(Hp(t))return e}function o0(e,t){if(e==="change")return t}var l0=!1;if(Bn){var bu;if(Bn){var vu="oninput"in document;if(!vu){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),vu=typeof s0.oninput=="function"}bu=vu}else bu=!1;l0=bu&&(!document.documentMode||9<document.documentMode)}function c0(){Ai&&(Ai.detachEvent("onpropertychange",u0),Di=Ai=null)}function u0(e){if(e.propertyName==="value"&&wl(Di)){var t=[];i0(t,Di,e,cu(e)),Gp(Mw,t)}}function kw(e,t,r){e==="focusin"?(c0(),Ai=t,Di=r,Ai.attachEvent("onpropertychange",u0)):e==="focusout"&&c0()}function Tw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(Di)}function Rw(e,t){if(e==="click")return wl(t)}function Ow(e,t){if(e==="input"||e==="change")return wl(t)}function Aw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:Aw;function Ni(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Rt.call(t,u)||!Vt(e[u],t[u]))return!1}return!0}function d0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function f0(e,t){var r=d0(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=d0(r)}}function h0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?h0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function p0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pl(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=pl(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dw=Bn&&"documentMode"in document&&11>=document.documentMode,Cr=null,wu=null,zi=null,Su=!1;function m0(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Su||Cr==null||Cr!==pl(o)||(o=Cr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zi&&Ni(zi,o)||(zi=o,o=os(wu,"onSelect"),0<o.length&&(t=new vl("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Cr)))}function La(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Er={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},ju={},g0={};Bn&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Ba(e){if(ju[e])return ju[e];if(!Er[e])return e;var t=Er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in g0)return ju[e]=t[r];return e}var x0=Ba("animationend"),b0=Ba("animationiteration"),v0=Ba("animationstart"),Nw=Ba("transitionrun"),zw=Ba("transitionstart"),Lw=Ba("transitioncancel"),y0=Ba("transitionend"),w0=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function dn(e,t){w0.set(e,t),Na(t,[e])}var S0=new WeakMap;function tn(e,t){if(typeof e=="object"&&e!==null){var r=S0.get(e);return r!==void 0?r:(t={value:e,source:t,stack:$p(t)},S0.set(e,t),t)}return{value:e,source:t,stack:$p(t)}}var nn=[],Mr=0,Eu=0;function Sl(){for(var e=Mr,t=Eu=Mr=0;t<e;){var r=nn[t];nn[t++]=null;var o=nn[t];nn[t++]=null;var u=nn[t];nn[t++]=null;var f=nn[t];if(nn[t++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&j0(r,u,f)}}function jl(e,t,r,o){nn[Mr++]=e,nn[Mr++]=t,nn[Mr++]=r,nn[Mr++]=o,Eu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,t,r,o){return jl(e,t,r,o),Cl(e)}function kr(e,t){return jl(e,null,null,t),Cl(e)}function j0(e,t,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-It(r),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[t]:o.push(t),t.lane=r|536870912),f):null}function Cl(e){if(50<io)throw io=0,Dd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Tr={};function Bw(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,r,o){return new Bw(e,t,r,o)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var r=e.alternate;return r===null?(r=Pt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function C0(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function El(e,t,r,o,u,f){var y=0;if(o=e,typeof e=="function")ku(e)&&(y=1);else if(typeof e=="string")y=$5(e,r,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case N:return e=Pt(31,r,t,u),e.elementType=N,e.lanes=f,e;case R:return _a(r.children,u,f,t);case O:y=8,u|=24;break;case j:return e=Pt(12,r,t,u|2),e.elementType=j,e.lanes=f,e;case S:return e=Pt(13,r,t,u),e.elementType=S,e.lanes=f,e;case _:return e=Pt(19,r,t,u),e.elementType=_,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case D:y=10;break e;case A:y=9;break e;case U:y=11;break e;case z:y=14;break e;case G:y=16,o=null;break e}y=29,r=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=Pt(y,r,t,u),t.elementType=e,t.type=o,t.lanes=f,t}function _a(e,t,r,o){return e=Pt(7,e,o,t),e.lanes=r,e}function Tu(e,t,r){return e=Pt(6,e,null,t),e.lanes=r,e}function Ru(e,t,r){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Rr=[],Or=0,Ml=null,kl=0,an=[],rn=0,$a=null,$n=1,Un="";function Ua(e,t){Rr[Or++]=kl,Rr[Or++]=Ml,Ml=e,kl=t}function E0(e,t,r){an[rn++]=$n,an[rn++]=Un,an[rn++]=$a,$a=e;var o=$n;e=Un;var u=32-It(o)-1;o&=~(1<<u),r+=1;var f=32-It(t)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,$n=1<<32-It(t)+u|r<<u|o,Un=f+e}else $n=1<<f|r<<u|o,Un=e}function Ou(e){e.return!==null&&(Ua(e,1),E0(e,1,0))}function Au(e){for(;e===Ml;)Ml=Rr[--Or],Rr[Or]=null,kl=Rr[--Or],Rr[Or]=null;for(;e===$a;)$a=an[--rn],an[rn]=null,Un=an[--rn],an[rn]=null,$n=an[--rn],an[rn]=null}var Ot=null,We=null,De=!1,Ha=null,wn=!1,Du=Error(l(519));function Ia(e){var t=Error(l(418,""));throw _i(tn(t,e)),Du}function M0(e){var t=e.stateNode,r=e.type,o=e.memoizedProps;switch(t[jt]=e,t[At]=o,r){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(r=0;r<lo.length;r++)ke(lo[r],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),Ip(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),hl(t);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),Pp(t,o.value,o.defaultValue,o.children),hl(t)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||o.suppressHydrationWarning===!0||Pg(t.textContent,r)?(o.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),o.onScroll!=null&&ke("scroll",t),o.onScrollEnd!=null&&ke("scrollend",t),o.onClick!=null&&(t.onclick=ls),t=!0):t=!1,t||Ia(e)}function k0(e){for(Ot=e.return;Ot;)switch(Ot.tag){case 5:case 13:wn=!1;return;case 27:case 3:wn=!0;return;default:Ot=Ot.return}}function Li(e){if(e!==Ot)return!1;if(!De)return k0(e),De=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Zd(e.type,e.memoizedProps)),r=!r),r&&We&&Ia(e),k0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){We=hn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}We=null}}else t===27?(t=We,Ea(e.type)?(e=Jd,Jd=null,We=e):We=t):We=Ot?hn(e.stateNode.nextSibling):null;return!0}function Bi(){We=Ot=null,De=!1}function T0(){var e=Ha;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Ha=null),e}function _i(e){Ha===null?Ha=[e]:Ha.push(e)}var Nu=K(null),Va=null,Hn=null;function ua(e,t,r){re(Nu,t._currentValue),t._currentValue=r}function In(e){e._currentValue=Nu.current,te(Nu)}function zu(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Lu(e,t,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=u;for(var L=0;L<t.length;L++)if(E.context===t[L]){f.lanes|=r,E=f.alternate,E!==null&&(E.lanes|=r),zu(f.return,r,e),o||(y=null);break e}f=E.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(l(341));y.lanes|=r,f=y.alternate,f!==null&&(f.lanes|=r),zu(y,r,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function $i(e,t,r,o){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var E=u.type;Vt(u.pendingProps.value,y.value)||(e!==null?e.push(E):e=[E])}}else if(u===je.current){if(y=u.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(po):e=[po])}u=u.return}e!==null&&Lu(t,e,r,o),t.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Va=e,Hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return R0(Va,e)}function Rl(e,t){return Va===null&&Pa(e),R0(e,t)}function R0(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},Hn===null){if(e===null)throw Error(l(308));Hn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Hn=Hn.next=t;return r}var _w=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},$w=n.unstable_scheduleCallback,Uw=n.unstable_NormalPriority,ut={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new _w,data:new Map,refCount:0}}function Ui(e){e.refCount--,e.refCount===0&&$w(Uw,function(){e.controller.abort()})}var Hi=null,_u=0,Ar=0,Dr=null;function Hw(e,t){if(Hi===null){var r=Hi=[];_u=0,Ar=Ud(),Dr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return _u++,t.then(O0,O0),t}function O0(){if(--_u===0&&Hi!==null){Dr!==null&&(Dr.status="fulfilled");var e=Hi;Hi=null,Ar=0,Dr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Iw(e,t){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var u=0;u<r.length;u++)(0,r[u])(t)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var A0=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hw(e,t),A0!==null&&A0(e,t)};var qa=K(null);function $u(){var e=qa.current;return e!==null?e:qe.pooledCache}function Ol(e,t){t===null?re(qa,qa.current):re(qa,t.pool)}function D0(){var e=$u();return e===null?null:{parent:ut._currentValue,pool:e}}var Ii=Error(l(460)),N0=Error(l(474)),Al=Error(l(542)),Uu={then:function(){}};function z0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dl(){}function L0(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(Dl,Dl),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_0(e),e;default:if(typeof t.status=="string")t.then(Dl,Dl);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=o}},function(o){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_0(e),e}throw Vi=t,Ii}}var Vi=null;function B0(){if(Vi===null)throw Error(l(459));var e=Vi;return Vi=null,e}function _0(e){if(e===Ii||e===Al)throw Error(l(483))}var da=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,($e&2)!==0){var u=o.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),o.pending=t,t=Cl(e),j0(e,null,r),t}return jl(e,o,t,r),Cl(e)}function Pi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Op(e,r)}}function Vu(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,r=r.next}while(r!==null);f===null?u=f=t:f=f.next=t}else u=f=t;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Pu=!1;function qi(){if(Pu){var e=Dr;if(e!==null)throw e}}function Fi(e,t,r,o){Pu=!1;var u=e.updateQueue;da=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var L=E,P=L.next;L.next=null,y===null?f=P:y.next=P,y=L;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==y&&(E===null?Q.firstBaseUpdate=P:E.next=P,Q.lastBaseUpdate=L))}if(f!==null){var ee=u.baseState;y=0,Q=P=L=null,E=f;do{var q=E.lane&-536870913,F=q!==E.lane;if(F?(Re&q)===q:(o&q)===q){q!==0&&q===Ar&&(Pu=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var be=e,pe=E;q=t;var Ve=r;switch(pe.tag){case 1:if(be=pe.payload,typeof be=="function"){ee=be.call(Ve,ee,q);break e}ee=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=pe.payload,q=typeof be=="function"?be.call(Ve,ee,q):be,q==null)break e;ee=g({},ee,q);break e;case 2:da=!0}}q=E.callback,q!==null&&(e.flags|=64,F&&(e.flags|=8192),F=u.callbacks,F===null?u.callbacks=[q]:F.push(q))}else F={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(P=Q=F,L=ee):Q=Q.next=F,y|=q;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;F=E,E=F.next,F.next=null,u.lastBaseUpdate=F,u.shared.pending=null}}while(!0);Q===null&&(L=ee),u.baseState=L,u.firstBaseUpdate=P,u.lastBaseUpdate=Q,f===null&&(u.shared.lanes=0),wa|=y,e.lanes=y,e.memoizedState=ee}}function $0(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function U0(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)$0(r[e],t)}var Nr=K(null),Nl=K(0);function H0(e,t){e=Zn,re(Nl,e),re(Nr,t),Zn=e|t.baseLanes}function qu(){re(Nl,Zn),re(Nr,Nr.current)}function Fu(){Zn=Nl.current,te(Nr),te(Nl)}var pa=0,Ce=null,He=null,it=null,zl=!1,zr=!1,Fa=!1,Ll=0,Yi=0,Lr=null,Vw=0;function nt(){throw Error(l(321))}function Yu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Vt(e[r],t[r]))return!1;return!0}function Gu(e,t,r,o,u,f){return pa=f,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?jm:Cm,Fa=!1,f=r(o,u),Fa=!1,zr&&(f=V0(t,r,o,u)),I0(e),f}function I0(e){T.H=Il;var t=He!==null&&He.next!==null;if(pa=0,it=He=Ce=null,zl=!1,Yi=0,Lr=null,t)throw Error(l(300));e===null||pt||(e=e.dependencies,e!==null&&Tl(e)&&(pt=!0))}function V0(e,t,r,o){Ce=e;var u=0;do{if(zr&&(Lr=null),Yi=0,zr=!1,25<=u)throw Error(l(301));if(u+=1,it=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}T.H=Xw,f=t(r,o)}while(zr);return f}function Pw(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Gi(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(Ce.flags|=1024),t}function Zu(){var e=Ll!==0;return Ll=0,e}function Xu(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Ku(e){if(zl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zl=!1}pa=0,it=He=Ce=null,zr=!1,Yi=Ll=0,Lr=null}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ce.memoizedState=it=e:it=it.next=e,it}function ot(){if(He===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=it===null?Ce.memoizedState:it.next;if(t!==null)it=t,He=e;else{if(e===null)throw Ce.alternate===null?Error(l(467)):Error(l(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},it===null?Ce.memoizedState=it=e:it=it.next=e}return it}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gi(e){var t=Yi;return Yi+=1,Lr===null&&(Lr=[]),e=L0(Lr,e,t),t=Ce,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?jm:Cm),e}function Bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gi(e);if(e.$$typeof===D)return Ct(e)}throw Error(l(438,String(e)))}function Ju(e){var t=null,r=Ce.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var o=Ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=Qu(),Ce.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),o=0;o<e;o++)r[o]=Y;return t.index++,r}function Vn(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=ot();return Wu(t,He,e)}function Wu(e,t,r){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=r;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}t.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var E=y=null,L=null,P=t,Q=!1;do{var ee=P.lane&-536870913;if(ee!==P.lane?(Re&ee)===ee:(pa&ee)===ee){var q=P.revertLane;if(q===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),ee===Ar&&(Q=!0);else if((pa&q)===q){P=P.next,q===Ar&&(Q=!0);continue}else ee={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},L===null?(E=L=ee,y=f):L=L.next=ee,Ce.lanes|=q,wa|=q;ee=P.action,Fa&&r(f,ee),f=P.hasEagerState?P.eagerState:r(f,ee)}else q={lane:ee,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},L===null?(E=L=q,y=f):L=L.next=q,Ce.lanes|=ee,wa|=ee;P=P.next}while(P!==null&&P!==t);if(L===null?y=f:L.next=E,!Vt(f,e.memoizedState)&&(pt=!0,Q&&(r=Dr,r!==null)))throw r;e.memoizedState=f,e.baseState=y,e.baseQueue=L,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ed(e){var t=ot(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,f=t.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Vt(f,t.memoizedState)||(pt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),r.lastRenderedState=f}return[f,o]}function P0(e,t,r){var o=Ce,u=ot(),f=De;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=t();var y=!Vt((He||u).memoizedState,r);y&&(u.memoizedState=r,pt=!0),u=u.queue;var E=Y0.bind(null,o,u,e);if(Zi(2048,8,E,[e]),u.getSnapshot!==t||y||it!==null&&it.memoizedState.tag&1){if(o.flags|=2048,Br(9,$l(),F0.bind(null,o,u,r,t),null),qe===null)throw Error(l(349));f||(pa&124)!==0||q0(o,t,r)}return r}function q0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ce.updateQueue,t===null?(t=Qu(),Ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function F0(e,t,r,o){t.value=r,t.getSnapshot=o,G0(t)&&Z0(e)}function Y0(e,t,r){return r(function(){G0(t)&&Z0(e)})}function G0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Vt(e,r)}catch{return!0}}function Z0(e){var t=kr(e,2);t!==null&&Zt(t,e,2)}function td(e){var t=Nt();if(typeof e=="function"){var r=e;if(e=r(),Fa){la(!0);try{r()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t}function X0(e,t,r,o){return e.baseState=r,Wu(e,He,typeof o=="function"?o:Vn)}function qw(e,t,r,o,u){if(Hl(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};T.T!==null?r(!0):f.isTransition=!1,o(f),r=t.pending,r===null?(f.next=t.pending=f,K0(t,f)):(f.next=r.next,t.pending=r.next=f)}}function K0(e,t){var r=t.action,o=t.payload,u=e.state;if(t.isTransition){var f=T.T,y={};T.T=y;try{var E=r(u,o),L=T.S;L!==null&&L(y,E),Q0(e,t,E)}catch(P){nd(e,t,P)}finally{T.T=f}}else try{f=r(u,o),Q0(e,t,f)}catch(P){nd(e,t,P)}}function Q0(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){J0(e,t,o)},function(o){return nd(e,t,o)}):J0(e,t,r)}function J0(e,t,r){t.status="fulfilled",t.value=r,W0(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,K0(e,r)))}function nd(e,t,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=r,W0(t),t=t.next;while(t!==o)}e.action=null}function W0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function em(e,t){return t}function tm(e,t){if(De){var r=qe.formState;if(r!==null){e:{var o=Ce;if(De){if(We){t:{for(var u=We,f=wn;u.nodeType!==8;){if(!f){u=null;break t}if(u=hn(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=hn(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(t=r[0])}}return r=Nt(),r.memoizedState=r.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:em,lastRenderedState:t},r.queue=o,r=ym.bind(null,Ce,o),o.dispatch=r,o=td(!1),f=ld.bind(null,Ce,!1,o.queue),o=Nt(),u={state:t,dispatch:null,action:e,pending:null},o.queue=u,r=qw.bind(null,Ce,u,f,r),u.dispatch=r,o.memoizedState=e,[t,r,!1]}function nm(e){var t=ot();return am(t,He,e)}function am(e,t,r){if(t=Wu(e,t,em)[0],e=_l(Vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Gi(t)}catch(y){throw y===Ii?Al:y}else o=t;t=ot();var u=t.queue,f=u.dispatch;return r!==t.memoizedState&&(Ce.flags|=2048,Br(9,$l(),Fw.bind(null,u,r),null)),[o,f,e]}function Fw(e,t){e.action=t}function rm(e){var t=ot(),r=He;if(r!==null)return am(t,r,e);ot(),t=t.memoizedState,r=ot();var o=r.queue.dispatch;return r.memoizedState=e,[t,o,!1]}function Br(e,t,r,o){return e={tag:e,create:r,deps:o,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=Qu(),Ce.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e),e}function $l(){return{destroy:void 0,resource:void 0}}function im(){return ot().memoizedState}function Ul(e,t,r,o){var u=Nt();o=o===void 0?null:o,Ce.flags|=e,u.memoizedState=Br(1|t,$l(),r,o)}function Zi(e,t,r,o){var u=ot();o=o===void 0?null:o;var f=u.memoizedState.inst;He!==null&&o!==null&&Yu(o,He.memoizedState.deps)?u.memoizedState=Br(t,f,r,o):(Ce.flags|=e,u.memoizedState=Br(1|t,f,r,o))}function om(e,t){Ul(8390656,8,e,t)}function lm(e,t){Zi(2048,8,e,t)}function sm(e,t){return Zi(4,2,e,t)}function cm(e,t){return Zi(4,4,e,t)}function um(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dm(e,t,r){r=r!=null?r.concat([e]):null,Zi(4,4,um.bind(null,t,e),r)}function ad(){}function fm(e,t){var r=ot();t=t===void 0?null:t;var o=r.memoizedState;return t!==null&&Yu(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function hm(e,t){var r=ot();t=t===void 0?null:t;var o=r.memoizedState;if(t!==null&&Yu(t,o[1]))return o[0];if(o=e(),Fa){la(!0);try{e()}finally{la(!1)}}return r.memoizedState=[o,t],o}function rd(e,t,r){return r===void 0||(pa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=gg(),Ce.lanes|=e,wa|=e,r)}function pm(e,t,r,o){return Vt(r,t)?r:Nr.current!==null?(e=rd(e,r,o),Vt(e,t)||(pt=!0),e):(pa&42)===0?(pt=!0,e.memoizedState=r):(e=gg(),Ce.lanes|=e,wa|=e,t)}function mm(e,t,r,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var y=T.T,E={};T.T=E,ld(e,!1,t,r);try{var L=u(),P=T.S;if(P!==null&&P(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var Q=Iw(L,o);Xi(e,t,Q,Gt(e))}else Xi(e,t,o,Gt(e))}catch(ee){Xi(e,t,{then:function(){},status:"rejected",reason:ee},Gt())}finally{I.p=f,T.T=y}}function Yw(){}function id(e,t,r,o){if(e.tag!==5)throw Error(l(476));var u=gm(e).queue;mm(e,u,t,J,r===null?Yw:function(){return xm(e),r(o)})}function gm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:J},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xm(e){var t=gm(e).next.queue;Xi(e,t,{},Gt())}function od(){return Ct(po)}function bm(){return ot().memoizedState}function vm(){return ot().memoizedState}function Gw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=Gt();e=fa(r);var o=ha(t,e,r);o!==null&&(Zt(o,t,r),Pi(o,t,r)),t={cache:Bu()},e.payload=t;return}t=t.return}}function Zw(e,t,r){var o=Gt();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Hl(e)?wm(t,r):(r=Mu(e,t,r,o),r!==null&&(Zt(r,e,o),Sm(r,t,o)))}function ym(e,t,r){var o=Gt();Xi(e,t,r,o)}function Xi(e,t,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))wm(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,E=f(y,r);if(u.hasEagerState=!0,u.eagerState=E,Vt(E,y))return jl(e,t,u,0),qe===null&&Sl(),!1}catch{}finally{}if(r=Mu(e,t,u,o),r!==null)return Zt(r,e,o),Sm(r,t,o),!0}return!1}function ld(e,t,r,o){if(o={lane:2,revertLane:Ud(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(t)throw Error(l(479))}else t=Mu(e,r,o,2),t!==null&&Zt(t,e,2)}function Hl(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function wm(e,t){zr=zl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Sm(e,t,r){if((r&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Op(e,r)}}var Il={readContext:Ct,use:Bl,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt},jm={readContext:Ct,use:Bl,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:om,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,Ul(4194308,4,um.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ul(4194308,4,e,t)},useInsertionEffect:function(e,t){Ul(4,2,e,t)},useMemo:function(e,t){var r=Nt();t=t===void 0?null:t;var o=e();if(Fa){la(!0);try{e()}finally{la(!1)}}return r.memoizedState=[o,t],o},useReducer:function(e,t,r){var o=Nt();if(r!==void 0){var u=r(t);if(Fa){la(!0);try{r(t)}finally{la(!1)}}}else u=t;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Zw.bind(null,Ce,e),[o.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:function(e){e=td(e);var t=e.queue,r=ym.bind(null,Ce,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:ad,useDeferredValue:function(e,t){var r=Nt();return rd(r,e,t)},useTransition:function(){var e=td(!1);return e=mm.bind(null,Ce,e.queue,!0,!1),Nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var o=Ce,u=Nt();if(De){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),qe===null)throw Error(l(349));(Re&124)!==0||q0(o,t,r)}u.memoizedState=r;var f={value:r,getSnapshot:t};return u.queue=f,om(Y0.bind(null,o,f,e),[e]),o.flags|=2048,Br(9,$l(),F0.bind(null,o,f,r,t),null),r},useId:function(){var e=Nt(),t=qe.identifierPrefix;if(De){var r=Un,o=$n;r=(o&~(1<<32-It(o)-1)).toString(32)+r,t="«"+t+"R"+r,r=Ll++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=Vw++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:od,useFormState:tm,useActionState:tm,useOptimistic:function(e){var t=Nt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=ld.bind(null,Ce,!0,r),r.dispatch=t,[e,t]},useMemoCache:Ju,useCacheRefresh:function(){return Nt().memoizedState=Gw.bind(null,Ce)}},Cm={readContext:Ct,use:Bl,useCallback:fm,useContext:Ct,useEffect:lm,useImperativeHandle:dm,useInsertionEffect:sm,useLayoutEffect:cm,useMemo:hm,useReducer:_l,useRef:im,useState:function(){return _l(Vn)},useDebugValue:ad,useDeferredValue:function(e,t){var r=ot();return pm(r,He.memoizedState,e,t)},useTransition:function(){var e=_l(Vn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Gi(e),t]},useSyncExternalStore:P0,useId:bm,useHostTransitionStatus:od,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var r=ot();return X0(r,He,e,t)},useMemoCache:Ju,useCacheRefresh:vm},Xw={readContext:Ct,use:Bl,useCallback:fm,useContext:Ct,useEffect:lm,useImperativeHandle:dm,useInsertionEffect:sm,useLayoutEffect:cm,useMemo:hm,useReducer:ed,useRef:im,useState:function(){return ed(Vn)},useDebugValue:ad,useDeferredValue:function(e,t){var r=ot();return He===null?rd(r,e,t):pm(r,He.memoizedState,e,t)},useTransition:function(){var e=ed(Vn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Gi(e),t]},useSyncExternalStore:P0,useId:bm,useHostTransitionStatus:od,useFormState:rm,useActionState:rm,useOptimistic:function(e,t){var r=ot();return He!==null?X0(r,He,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:vm},_r=null,Ki=0;function Vl(e){var t=Ki;return Ki+=1,_r===null&&(_r=[]),L0(_r,e,t)}function Qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pl(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Em(e){var t=e._init;return t(e._payload)}function Mm(e){function t(H,$){if(e){var V=H.deletions;V===null?(H.deletions=[$],H.flags|=16):V.push($)}}function r(H,$){if(!e)return null;for(;$!==null;)t(H,$),$=$.sibling;return null}function o(H){for(var $=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function u(H,$){return H=_n(H,$),H.index=0,H.sibling=null,H}function f(H,$,V){return H.index=V,e?(V=H.alternate,V!==null?(V=V.index,V<$?(H.flags|=67108866,$):V):(H.flags|=67108866,$)):(H.flags|=1048576,$)}function y(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function E(H,$,V,W){return $===null||$.tag!==6?($=Tu(V,H.mode,W),$.return=H,$):($=u($,V),$.return=H,$)}function L(H,$,V,W){var se=V.type;return se===R?Q(H,$,V.props.children,W,V.key):$!==null&&($.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===G&&Em(se)===$.type)?($=u($,V.props),Qi($,V),$.return=H,$):($=El(V.type,V.key,V.props,null,H.mode,W),Qi($,V),$.return=H,$)}function P(H,$,V,W){return $===null||$.tag!==4||$.stateNode.containerInfo!==V.containerInfo||$.stateNode.implementation!==V.implementation?($=Ru(V,H.mode,W),$.return=H,$):($=u($,V.children||[]),$.return=H,$)}function Q(H,$,V,W,se){return $===null||$.tag!==7?($=_a(V,H.mode,W,se),$.return=H,$):($=u($,V),$.return=H,$)}function ee(H,$,V){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Tu(""+$,H.mode,V),$.return=H,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case C:return V=El($.type,$.key,$.props,null,H.mode,V),Qi(V,$),V.return=H,V;case M:return $=Ru($,H.mode,V),$.return=H,$;case G:var W=$._init;return $=W($._payload),ee(H,$,V)}if(Z($)||ie($))return $=_a($,H.mode,V,null),$.return=H,$;if(typeof $.then=="function")return ee(H,Vl($),V);if($.$$typeof===D)return ee(H,Rl(H,$),V);Pl(H,$)}return null}function q(H,$,V,W){var se=$!==null?$.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return se!==null?null:E(H,$,""+V,W);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case C:return V.key===se?L(H,$,V,W):null;case M:return V.key===se?P(H,$,V,W):null;case G:return se=V._init,V=se(V._payload),q(H,$,V,W)}if(Z(V)||ie(V))return se!==null?null:Q(H,$,V,W,null);if(typeof V.then=="function")return q(H,$,Vl(V),W);if(V.$$typeof===D)return q(H,$,Rl(H,V),W);Pl(H,V)}return null}function F(H,$,V,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return H=H.get(V)||null,E($,H,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case C:return H=H.get(W.key===null?V:W.key)||null,L($,H,W,se);case M:return H=H.get(W.key===null?V:W.key)||null,P($,H,W,se);case G:var Ee=W._init;return W=Ee(W._payload),F(H,$,V,W,se)}if(Z(W)||ie(W))return H=H.get(V)||null,Q($,H,W,se,null);if(typeof W.then=="function")return F(H,$,V,Vl(W),se);if(W.$$typeof===D)return F(H,$,V,Rl($,W),se);Pl($,W)}return null}function be(H,$,V,W){for(var se=null,Ee=null,ce=$,me=$=0,gt=null;ce!==null&&me<V.length;me++){ce.index>me?(gt=ce,ce=null):gt=ce.sibling;var Ae=q(H,ce,V[me],W);if(Ae===null){ce===null&&(ce=gt);break}e&&ce&&Ae.alternate===null&&t(H,ce),$=f(Ae,$,me),Ee===null?se=Ae:Ee.sibling=Ae,Ee=Ae,ce=gt}if(me===V.length)return r(H,ce),De&&Ua(H,me),se;if(ce===null){for(;me<V.length;me++)ce=ee(H,V[me],W),ce!==null&&($=f(ce,$,me),Ee===null?se=ce:Ee.sibling=ce,Ee=ce);return De&&Ua(H,me),se}for(ce=o(ce);me<V.length;me++)gt=F(ce,H,me,V[me],W),gt!==null&&(e&&gt.alternate!==null&&ce.delete(gt.key===null?me:gt.key),$=f(gt,$,me),Ee===null?se=gt:Ee.sibling=gt,Ee=gt);return e&&ce.forEach(function(Oa){return t(H,Oa)}),De&&Ua(H,me),se}function pe(H,$,V,W){if(V==null)throw Error(l(151));for(var se=null,Ee=null,ce=$,me=$=0,gt=null,Ae=V.next();ce!==null&&!Ae.done;me++,Ae=V.next()){ce.index>me?(gt=ce,ce=null):gt=ce.sibling;var Oa=q(H,ce,Ae.value,W);if(Oa===null){ce===null&&(ce=gt);break}e&&ce&&Oa.alternate===null&&t(H,ce),$=f(Oa,$,me),Ee===null?se=Oa:Ee.sibling=Oa,Ee=Oa,ce=gt}if(Ae.done)return r(H,ce),De&&Ua(H,me),se;if(ce===null){for(;!Ae.done;me++,Ae=V.next())Ae=ee(H,Ae.value,W),Ae!==null&&($=f(Ae,$,me),Ee===null?se=Ae:Ee.sibling=Ae,Ee=Ae);return De&&Ua(H,me),se}for(ce=o(ce);!Ae.done;me++,Ae=V.next())Ae=F(ce,H,me,Ae.value,W),Ae!==null&&(e&&Ae.alternate!==null&&ce.delete(Ae.key===null?me:Ae.key),$=f(Ae,$,me),Ee===null?se=Ae:Ee.sibling=Ae,Ee=Ae);return e&&ce.forEach(function(K5){return t(H,K5)}),De&&Ua(H,me),se}function Ve(H,$,V,W){if(typeof V=="object"&&V!==null&&V.type===R&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case C:e:{for(var se=V.key;$!==null;){if($.key===se){if(se=V.type,se===R){if($.tag===7){r(H,$.sibling),W=u($,V.props.children),W.return=H,H=W;break e}}else if($.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===G&&Em(se)===$.type){r(H,$.sibling),W=u($,V.props),Qi(W,V),W.return=H,H=W;break e}r(H,$);break}else t(H,$);$=$.sibling}V.type===R?(W=_a(V.props.children,H.mode,W,V.key),W.return=H,H=W):(W=El(V.type,V.key,V.props,null,H.mode,W),Qi(W,V),W.return=H,H=W)}return y(H);case M:e:{for(se=V.key;$!==null;){if($.key===se)if($.tag===4&&$.stateNode.containerInfo===V.containerInfo&&$.stateNode.implementation===V.implementation){r(H,$.sibling),W=u($,V.children||[]),W.return=H,H=W;break e}else{r(H,$);break}else t(H,$);$=$.sibling}W=Ru(V,H.mode,W),W.return=H,H=W}return y(H);case G:return se=V._init,V=se(V._payload),Ve(H,$,V,W)}if(Z(V))return be(H,$,V,W);if(ie(V)){if(se=ie(V),typeof se!="function")throw Error(l(150));return V=se.call(V),pe(H,$,V,W)}if(typeof V.then=="function")return Ve(H,$,Vl(V),W);if(V.$$typeof===D)return Ve(H,$,Rl(H,V),W);Pl(H,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,$!==null&&$.tag===6?(r(H,$.sibling),W=u($,V),W.return=H,H=W):(r(H,$),W=Tu(V,H.mode,W),W.return=H,H=W),y(H)):r(H,$)}return function(H,$,V,W){try{Ki=0;var se=Ve(H,$,V,W);return _r=null,se}catch(ce){if(ce===Ii||ce===Al)throw ce;var Ee=Pt(29,ce,null,H.mode);return Ee.lanes=W,Ee.return=H,Ee}finally{}}}var $r=Mm(!0),km=Mm(!1),on=K(null),Sn=null;function ma(e){var t=e.alternate;re(dt,dt.current&1),re(on,e),Sn===null&&(t===null||Nr.current!==null||t.memoizedState!==null)&&(Sn=e)}function Tm(e){if(e.tag===22){if(re(dt,dt.current),re(on,e),Sn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Sn=e)}}else ga()}function ga(){re(dt,dt.current),re(on,on.current)}function Pn(e){te(on),Sn===e&&(Sn=null),te(dt)}var dt=K(0);function ql(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Qd(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function sd(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:g({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var cd={enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Gt(),u=fa(o);u.payload=t,r!=null&&(u.callback=r),t=ha(e,u,o),t!==null&&(Zt(t,e,o),Pi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Gt(),u=fa(o);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=ha(e,u,o),t!==null&&(Zt(t,e,o),Pi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Gt(),o=fa(r);o.tag=2,t!=null&&(o.callback=t),t=ha(e,o,r),t!==null&&(Zt(t,e,r),Pi(t,e,r))}};function Rm(e,t,r,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):t.prototype&&t.prototype.isPureReactComponent?!Ni(r,o)||!Ni(u,f):!0}function Om(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&cd.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var r=t;if("ref"in t){r={};for(var o in t)o!=="ref"&&(r[o]=t[o])}if(e=e.defaultProps){r===t&&(r=g({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Am(e){Fl(e)}function Dm(e){console.error(e)}function Nm(e){Fl(e)}function Yl(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function zm(e,t,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ud(e,t,r){return r=fa(r),r.tag=3,r.payload={element:null},r.callback=function(){Yl(e,t)},r}function Lm(e){return e=fa(e),e.tag=3,e}function Bm(e,t,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){zm(t,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){zm(t,r,o),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function Kw(e,t,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=r.alternate,t!==null&&$i(t,r,u,!0),r=on.current,r!==null){switch(r.tag){case 13:return Sn===null?zd():r.alternate===null&&et===0&&(et=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Uu?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([o]):t.add(o),Bd(e,o,u)),!1;case 22:return r.flags|=65536,o===Uu?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([o]):r.add(o)),Bd(e,o,u)),!1}throw Error(l(435,r.tag))}return Bd(e,o,u),zd(),!1}if(De)return t=on.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,o!==Du&&(e=Error(l(422),{cause:o}),_i(tn(e,r)))):(o!==Du&&(t=Error(l(423),{cause:o}),_i(tn(t,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=tn(o,r),u=ud(e.stateNode,o,u),Vu(e,u),et!==4&&(et=2)),!1;var f=Error(l(520),{cause:o});if(f=tn(f,r),ro===null?ro=[f]:ro.push(f),et!==4&&(et=2),t===null)return!0;o=tn(o,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=ud(r.stateNode,o,e),Vu(r,e),!1;case 1:if(t=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Lm(u),Bm(u,e,r,o),Vu(r,u),!1}r=r.return}while(r!==null);return!1}var _m=Error(l(461)),pt=!1;function bt(e,t,r,o){t.child=e===null?km(t,null,r,o):$r(t,e.child,r,o)}function $m(e,t,r,o,u){r=r.render;var f=t.ref;if("ref"in o){var y={};for(var E in o)E!=="ref"&&(y[E]=o[E])}else y=o;return Pa(t),o=Gu(e,t,r,y,f,u),E=Zu(),e!==null&&!pt?(Xu(e,t,u),qn(e,t,u)):(De&&E&&Ou(t),t.flags|=1,bt(e,t,o,u),t.child)}function Um(e,t,r,o,u){if(e===null){var f=r.type;return typeof f=="function"&&!ku(f)&&f.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=f,Hm(e,t,f,o,u)):(e=El(r.type,null,o,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!bd(e,u)){var y=f.memoizedProps;if(r=r.compare,r=r!==null?r:Ni,r(y,o)&&e.ref===t.ref)return qn(e,t,u)}return t.flags|=1,e=_n(f,o),e.ref=t.ref,e.return=t,t.child=e}function Hm(e,t,r,o,u){if(e!==null){var f=e.memoizedProps;if(Ni(f,o)&&e.ref===t.ref)if(pt=!1,t.pendingProps=o=f,bd(e,u))(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,qn(e,t,u)}return dd(e,t,r,o,u)}function Im(e,t,r){var o=t.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((t.flags&128)!==0){if(o=f!==null?f.baseLanes|r:r,e!==null){for(u=t.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;t.childLanes=f&~o}else t.childLanes=0,t.child=null;return Vm(e,t,o,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(t,f!==null?f.cachePool:null),f!==null?H0(t,f):qu(),Tm(t);else return t.lanes=t.childLanes=536870912,Vm(e,t,f!==null?f.baseLanes|r:r,r)}else f!==null?(Ol(t,f.cachePool),H0(t,f),ga(),t.memoizedState=null):(e!==null&&Ol(t,null),qu(),ga());return bt(e,t,u,r),t.child}function Vm(e,t,r,o){var u=$u();return u=u===null?null:{parent:ut._currentValue,pool:u},t.memoizedState={baseLanes:r,cachePool:u},e!==null&&Ol(t,null),qu(),Tm(t),e!==null&&$i(e,t,o,!0),null}function Gl(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function dd(e,t,r,o,u){return Pa(t),r=Gu(e,t,r,o,void 0,u),o=Zu(),e!==null&&!pt?(Xu(e,t,u),qn(e,t,u)):(De&&o&&Ou(t),t.flags|=1,bt(e,t,r,u),t.child)}function Pm(e,t,r,o,u,f){return Pa(t),t.updateQueue=null,r=V0(t,o,r,u),I0(e),o=Zu(),e!==null&&!pt?(Xu(e,t,f),qn(e,t,f)):(De&&o&&Ou(t),t.flags|=1,bt(e,t,r,f),t.child)}function qm(e,t,r,o,u){if(Pa(t),t.stateNode===null){var f=Tr,y=r.contextType;typeof y=="object"&&y!==null&&(f=Ct(y)),f=new r(o,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cd,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=o,f.state=t.memoizedState,f.refs={},Hu(t),y=r.contextType,f.context=typeof y=="object"&&y!==null?Ct(y):Tr,f.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(sd(t,r,y,o),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&cd.enqueueReplaceState(f,f.state,null),Fi(t,o,f,u),qi(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){f=t.stateNode;var E=t.memoizedProps,L=Ya(r,E);f.props=L;var P=f.context,Q=r.contextType;y=Tr,typeof Q=="object"&&Q!==null&&(y=Ct(Q));var ee=r.getDerivedStateFromProps;Q=typeof ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=t.pendingProps!==E,Q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||P!==y)&&Om(t,f,o,y),da=!1;var q=t.memoizedState;f.state=q,Fi(t,o,f,u),qi(),P=t.memoizedState,E||q!==P||da?(typeof ee=="function"&&(sd(t,r,ee,o),P=t.memoizedState),(L=da||Rm(t,r,L,o,q,P,y))?(Q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=P),f.props=o,f.state=P,f.context=y,o=L):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,Iu(e,t),y=t.memoizedProps,Q=Ya(r,y),f.props=Q,ee=t.pendingProps,q=f.context,P=r.contextType,L=Tr,typeof P=="object"&&P!==null&&(L=Ct(P)),E=r.getDerivedStateFromProps,(P=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ee||q!==L)&&Om(t,f,o,L),da=!1,q=t.memoizedState,f.state=q,Fi(t,o,f,u),qi();var F=t.memoizedState;y!==ee||q!==F||da||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof E=="function"&&(sd(t,r,E,o),F=t.memoizedState),(Q=da||Rm(t,r,Q,o,q,F,L)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(P||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,F,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,F,L)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=F),f.props=o,f.state=F,f.context=L,o=Q):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),o=!1)}return f=o,Gl(e,t),o=(t.flags&128)!==0,f||o?(f=t.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&o?(t.child=$r(t,e.child,null,u),t.child=$r(t,null,r,u)):bt(e,t,r,u),t.memoizedState=f.state,e=t.child):e=qn(e,t,u),e}function Fm(e,t,r,o){return Bi(),t.flags|=256,bt(e,t,r,o),t.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(e){return{baseLanes:e,cachePool:D0()}}function pd(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=ln),e}function Ym(e,t,r){var o=t.pendingProps,u=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),y&&(u=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(u?ma(t):ga(),De){var E=We,L;if(L=E){e:{for(L=E,E=wn;L.nodeType!==8;){if(!E){E=null;break e}if(L=hn(L.nextSibling),L===null){E=null;break e}}E=L}E!==null?(t.memoizedState={dehydrated:E,treeContext:$a!==null?{id:$n,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},L=Pt(18,null,null,0),L.stateNode=E,L.return=t,t.child=L,Ot=t,We=null,L=!0):L=!1}L||Ia(t)}if(E=t.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Qd(E)?t.lanes=32:t.lanes=536870912,null;Pn(t)}return E=o.children,o=o.fallback,u?(ga(),u=t.mode,E=Zl({mode:"hidden",children:E},u),o=_a(o,u,r,null),E.return=t,o.return=t,E.sibling=o,t.child=E,u=t.child,u.memoizedState=hd(r),u.childLanes=pd(e,y,r),t.memoizedState=fd,o):(ma(t),md(t,E))}if(L=e.memoizedState,L!==null&&(E=L.dehydrated,E!==null)){if(f)t.flags&256?(ma(t),t.flags&=-257,t=gd(e,t,r)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),u=o.fallback,E=t.mode,o=Zl({mode:"visible",children:o.children},E),u=_a(u,E,r,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,$r(t,e.child,null,r),o=t.child,o.memoizedState=hd(r),o.childLanes=pd(e,y,r),t.memoizedState=fd,t=u);else if(ma(t),Qd(E)){if(y=E.nextSibling&&E.nextSibling.dataset,y)var P=y.dgst;y=P,o=Error(l(419)),o.stack="",o.digest=y,_i({value:o,source:null,stack:null}),t=gd(e,t,r)}else if(pt||$i(e,t,r,!1),y=(r&e.childLanes)!==0,pt||y){if(y=qe,y!==null&&(o=r&-r,o=(o&42)!==0?1:Jc(o),o=(o&(y.suspendedLanes|r))!==0?0:o,o!==0&&o!==L.retryLane))throw L.retryLane=o,kr(e,o),Zt(y,e,o),_m;E.data==="$?"||zd(),t=gd(e,t,r)}else E.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=L.treeContext,We=hn(E.nextSibling),Ot=t,De=!0,Ha=null,wn=!1,e!==null&&(an[rn++]=$n,an[rn++]=Un,an[rn++]=$a,$n=e.id,Un=e.overflow,$a=t),t=md(t,o.children),t.flags|=4096);return t}return u?(ga(),u=o.fallback,E=t.mode,L=e.child,P=L.sibling,o=_n(L,{mode:"hidden",children:o.children}),o.subtreeFlags=L.subtreeFlags&65011712,P!==null?u=_n(P,u):(u=_a(u,E,r,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,E=e.child.memoizedState,E===null?E=hd(r):(L=E.cachePool,L!==null?(P=ut._currentValue,L=L.parent!==P?{parent:P,pool:P}:L):L=D0(),E={baseLanes:E.baseLanes|r,cachePool:L}),u.memoizedState=E,u.childLanes=pd(e,y,r),t.memoizedState=fd,o):(ma(t),r=e.child,e=r.sibling,r=_n(r,{mode:"visible",children:o.children}),r.return=t,r.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=r,t.memoizedState=null,r)}function md(e,t){return t=Zl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zl(e,t){return e=Pt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gd(e,t,r){return $r(t,e.child,null,r),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gm(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),zu(e.return,t,r)}function xd(e,t,r,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=u)}function Zm(e,t,r){var o=t.pendingProps,u=o.revealOrder,f=o.tail;if(bt(e,t,o.children,r),o=dt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,r,t);else if(e.tag===19)Gm(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(re(dt,o),u){case"forwards":for(r=t.child,u=null;r!==null;)e=r.alternate,e!==null&&ql(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=t.child,t.child=null):(u=r.sibling,r.sibling=null),xd(t,!1,u,r,f);break;case"backwards":for(r=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&ql(e)===null){t.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}xd(t,!0,r,null,f);break;case"together":xd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(r&t.childLanes)===0)if(e!==null){if($i(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=_n(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_n(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function bd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function Qw(e,t,r){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),ua(t,ut,e.memoizedState.cache),Bi();break;case 27:case 5:zn(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(t),t.flags|=128,null):(r&t.child.childLanes)!==0?Ym(e,t,r):(ma(t),e=qn(e,t,r),e!==null?e.sibling:null);ma(t);break;case 19:var u=(e.flags&128)!==0;if(o=(r&t.childLanes)!==0,o||($i(e,t,r,!1),o=(r&t.childLanes)!==0),u){if(o)return Zm(e,t,r);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),re(dt,dt.current),o)break;return null;case 22:case 23:return t.lanes=0,Im(e,t,r);case 24:ua(t,ut,e.memoizedState.cache)}return qn(e,t,r)}function Xm(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)pt=!0;else{if(!bd(e,r)&&(t.flags&128)===0)return pt=!1,Qw(e,t,r);pt=(e.flags&131072)!==0}else pt=!1,De&&(t.flags&1048576)!==0&&E0(t,kl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,u=o._init;if(o=u(o._payload),t.type=o,typeof o=="function")ku(o)?(e=Ya(o,e),t.tag=1,t=qm(null,t,o,e,r)):(t.tag=0,t=dd(null,t,o,e,r));else{if(o!=null){if(u=o.$$typeof,u===U){t.tag=11,t=$m(null,t,o,e,r);break e}else if(u===z){t.tag=14,t=Um(null,t,o,e,r);break e}}throw t=Te(o)||o,Error(l(306,t,""))}}return t;case 0:return dd(e,t,t.type,t.pendingProps,r);case 1:return o=t.type,u=Ya(o,t.pendingProps),qm(e,t,o,u,r);case 3:e:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var f=t.memoizedState;u=f.element,Iu(e,t),Fi(t,o,null,r);var y=t.memoizedState;if(o=y.cache,ua(t,ut,o),o!==f.cache&&Lu(t,[ut],r,!0),qi(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Fm(e,t,o,r);break e}else if(o!==u){u=tn(Error(l(424)),t),_i(u),t=Fm(e,t,o,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=hn(e.firstChild),Ot=t,De=!0,Ha=null,wn=!0,r=km(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Bi(),o===u){t=qn(e,t,r);break e}bt(e,t,o,r)}t=t.child}return t;case 26:return Gl(e,t),e===null?(r=Wg(t.type,null,t.pendingProps,null))?t.memoizedState=r:De||(r=t.type,e=t.pendingProps,o=ss(le.current).createElement(r),o[jt]=t,o[At]=e,yt(o,r,e),ht(o),t.stateNode=o):t.memoizedState=Wg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zn(t),e===null&&De&&(o=t.stateNode=Kg(t.type,t.pendingProps,le.current),Ot=t,wn=!0,u=We,Ea(t.type)?(Jd=u,We=hn(o.firstChild)):We=u),bt(e,t,t.pendingProps.children,r),Gl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((u=o=We)&&(o=E5(o,t.type,t.pendingProps,wn),o!==null?(t.stateNode=o,Ot=t,We=hn(o.firstChild),wn=!1,u=!0):u=!1),u||Ia(t)),zn(t),u=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Zd(u,f)?o=null:y!==null&&Zd(u,y)&&(t.flags|=32),t.memoizedState!==null&&(u=Gu(e,t,Pw,null,null,r),po._currentValue=u),Gl(e,t),bt(e,t,o,r),t.child;case 6:return e===null&&De&&((e=r=We)&&(r=M5(r,t.pendingProps,wn),r!==null?(t.stateNode=r,Ot=t,We=null,e=!0):e=!1),e||Ia(t)),null;case 13:return Ym(e,t,r);case 4:return he(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=$r(t,null,o,r):bt(e,t,o,r),t.child;case 11:return $m(e,t,t.type,t.pendingProps,r);case 7:return bt(e,t,t.pendingProps,r),t.child;case 8:return bt(e,t,t.pendingProps.children,r),t.child;case 12:return bt(e,t,t.pendingProps.children,r),t.child;case 10:return o=t.pendingProps,ua(t,t.type,o.value),bt(e,t,o.children,r),t.child;case 9:return u=t.type._context,o=t.pendingProps.children,Pa(t),u=Ct(u),o=o(u),t.flags|=1,bt(e,t,o,r),t.child;case 14:return Um(e,t,t.type,t.pendingProps,r);case 15:return Hm(e,t,t.type,t.pendingProps,r);case 19:return Zm(e,t,r);case 31:return o=t.pendingProps,r=t.mode,o={mode:o.mode,children:o.children},e===null?(r=Zl(o,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=_n(e.child,o),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Im(e,t,r);case 24:return Pa(t),o=Ct(ut),e===null?(u=$u(),u===null&&(u=qe,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),t.memoizedState={parent:o,cache:u},Hu(t),ua(t,ut,u)):((e.lanes&r)!==0&&(Iu(e,t),Fi(t,null,null,r),qi()),u=e.memoizedState,f=t.memoizedState,u.parent!==o?(u={parent:o,cache:o},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),ua(t,ut,o)):(o=f.cache,ua(t,ut,o),o!==u.cache&&Lu(t,[ut],r,!0))),bt(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Fn(e){e.flags|=4}function Km(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r1(t)){if(t=on.current,t!==null&&((Re&4194048)===Re?Sn!==null:(Re&62914560)!==Re&&(Re&536870912)===0||t!==Sn))throw Vi=Uu,N0;e.flags|=8192}}function Xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tp():536870912,e.lanes|=t,Vr|=t)}function Ji(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Jw(e,t,r){var o=t.pendingProps;switch(Au(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return r=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),In(ut),Xe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Li(t)?Fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,T0())),Ke(t),null;case 26:return r=t.memoizedState,e===null?(Fn(t),r!==null?(Ke(t),Km(t,r)):(Ke(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Fn(t),Ke(t),Km(t,r)):(Ke(t),t.flags&=-16777217):(e.memoizedProps!==o&&Fn(t),Ke(t),t.flags&=-16777217),null;case 27:Jt(t),r=le.current;var u=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Fn(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Ke(t),null}e=ae.current,Li(t)?M0(t):(e=Kg(u,o,r),t.stateNode=e,Fn(t))}return Ke(t),null;case 5:if(Jt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Fn(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Ke(t),null}if(e=ae.current,Li(t))M0(t);else{switch(u=ss(le.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}e[jt]=t,e[At]=o;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=e;e:switch(yt(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Fn(t)}}return Ke(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Fn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=le.current,Li(t)){if(e=t.stateNode,r=t.memoizedProps,o=null,u=Ot,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[jt]=t,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Pg(e.nodeValue,r)),e||Ia(t)}else e=ss(e).createTextNode(o),e[jt]=t,t.stateNode=e}return Ke(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Li(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[jt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),u=!1}else u=T0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Pn(t),t):(Pn(t),null)}if(Pn(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=t.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),Xl(t,t.updateQueue),Ke(t),null;case 4:return Xe(),e===null&&Pd(t.stateNode.containerInfo),Ke(t),null;case 10:return In(t.type),Ke(t),null;case 19:if(te(dt),u=t.memoizedState,u===null)return Ke(t),null;if(o=(t.flags&128)!==0,f=u.rendering,f===null)if(o)Ji(u,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ql(e),f!==null){for(t.flags|=128,Ji(u,!1),e=f.updateQueue,t.updateQueue=e,Xl(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)C0(r,e),r=r.sibling;return re(dt,dt.current&1|2),t.child}e=e.sibling}u.tail!==null&&yn()>Jl&&(t.flags|=128,o=!0,Ji(u,!1),t.lanes=4194304)}else{if(!o)if(e=ql(f),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Xl(t,e),Ji(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!De)return Ke(t),null}else 2*yn()-u.renderingStartTime>Jl&&r!==536870912&&(t.flags|=128,o=!0,Ji(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(e=u.last,e!==null?e.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=yn(),t.sibling=null,e=dt.current,re(dt,o?e&1|2:e&1),t):(Ke(t),null);case 22:case 23:return Pn(t),Fu(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(r&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),r=t.updateQueue,r!==null&&Xl(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==r&&(t.flags|=2048),e!==null&&te(qa),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),In(ut),Ke(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Ww(e,t){switch(Au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(ut),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jt(t),null;case 13:if(Pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(dt),null;case 4:return Xe(),null;case 10:return In(t.type),null;case 22:case 23:return Pn(t),Fu(),e!==null&&te(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return In(ut),null;case 25:return null;default:return null}}function Qm(e,t){switch(Au(t),t.tag){case 3:In(ut),Xe();break;case 26:case 27:case 5:Jt(t);break;case 4:Xe();break;case 13:Pn(t);break;case 19:te(dt);break;case 10:In(t.type);break;case 22:case 23:Pn(t),Fu(),e!==null&&te(qa);break;case 24:In(ut)}}function Wi(e,t){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var f=r.create,y=r.inst;o=f(),y.destroy=o}r=r.next}while(r!==u)}}catch(E){Pe(t,t.return,E)}}function xa(e,t,r){try{var o=t.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,E=y.destroy;if(E!==void 0){y.destroy=void 0,u=t;var L=r,P=E;try{P()}catch(Q){Pe(u,L,Q)}}}o=o.next}while(o!==f)}}catch(Q){Pe(t,t.return,Q)}}function Jm(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{U0(t,r)}catch(o){Pe(e,e.return,o)}}}function Wm(e,t,r){r.props=Ya(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Pe(e,t,o)}}function eo(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Pe(e,t,u)}}function jn(e,t){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Pe(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Pe(e,t,u)}else r.current=null}function eg(e){var t=e.type,r=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Pe(e,e.return,u)}}function vd(e,t,r){try{var o=e.stateNode;y5(o,e.type,r,t),o[At]=t}catch(u){Pe(e,e.return,u)}}function tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wd(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ls));else if(o!==4&&(o===27&&Ea(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(wd(e,t,r),e=e.sibling;e!==null;)wd(e,t,r),e=e.sibling}function Kl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(o===27&&Ea(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Kl(e,t,r),e=e.sibling;e!==null;)Kl(e,t,r),e=e.sibling}function ng(e){var t=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);yt(t,o,r),t[jt]=e,t[At]=r}catch(f){Pe(e,e.return,f)}}var Yn=!1,at=!1,Sd=!1,ag=typeof WeakSet=="function"?WeakSet:Set,mt=null;function e5(e,t){if(e=e.containerInfo,Yd=ps,e=p0(e),yu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var y=0,E=-1,L=-1,P=0,Q=0,ee=e,q=null;t:for(;;){for(var F;ee!==r||u!==0&&ee.nodeType!==3||(E=y+u),ee!==f||o!==0&&ee.nodeType!==3||(L=y+o),ee.nodeType===3&&(y+=ee.nodeValue.length),(F=ee.firstChild)!==null;)q=ee,ee=F;for(;;){if(ee===e)break t;if(q===r&&++P===u&&(E=y),q===f&&++Q===o&&(L=y),(F=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=F}r=E===-1||L===-1?null:{start:E,end:L}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gd={focusedElem:e,selectionRange:r},ps=!1,mt=t;mt!==null;)if(t=mt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,mt=e;else for(;mt!==null;){switch(t=mt,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=t,u=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var be=Ya(r.type,u,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(be,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Pe(r,r.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Kd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,mt=e;break}mt=t.return}}function rg(e,t,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ba(e,r),o&4&&Wi(5,r);break;case 1:if(ba(e,r),o&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(y){Pe(r,r.return,y)}else{var u=Ya(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(r,r.return,y)}}o&64&&Jm(r),o&512&&eo(r,r.return);break;case 3:if(ba(e,r),o&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{U0(e,t)}catch(y){Pe(r,r.return,y)}}break;case 27:t===null&&o&4&&ng(r);case 26:case 5:ba(e,r),t===null&&o&4&&eg(r),o&512&&eo(r,r.return);break;case 12:ba(e,r);break;case 13:ba(e,r),o&4&&lg(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=c5.bind(null,r),k5(e,r))));break;case 22:if(o=r.memoizedState!==null||Yn,!o){t=t!==null&&t.memoizedState!==null||at,u=Yn;var f=at;Yn=o,(at=t)&&!f?va(e,r,(r.subtreeFlags&8772)!==0):ba(e,r),Yn=u,at=f}break;case 30:break;default:ba(e,r)}}function ig(e){var t=e.alternate;t!==null&&(e.alternate=null,ig(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,zt=!1;function Gn(e,t,r){for(r=r.child;r!==null;)og(e,t,r),r=r.sibling}function og(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(wi,r)}catch{}switch(r.tag){case 26:at||jn(r,t),Gn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:at||jn(r,t);var o=Ge,u=zt;Ea(r.type)&&(Ge=r.stateNode,zt=!1),Gn(e,t,r),co(r.stateNode),Ge=o,zt=u;break;case 5:at||jn(r,t);case 6:if(o=Ge,u=zt,Ge=null,Gn(e,t,r),Ge=o,zt=u,Ge!==null)if(zt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(r.stateNode)}catch(f){Pe(r,t,f)}else try{Ge.removeChild(r.stateNode)}catch(f){Pe(r,t,f)}break;case 18:Ge!==null&&(zt?(e=Ge,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),bo(e)):Zg(Ge,r.stateNode));break;case 4:o=Ge,u=zt,Ge=r.stateNode.containerInfo,zt=!0,Gn(e,t,r),Ge=o,zt=u;break;case 0:case 11:case 14:case 15:at||xa(2,r,t),at||xa(4,r,t),Gn(e,t,r);break;case 1:at||(jn(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Wm(r,t,o)),Gn(e,t,r);break;case 21:Gn(e,t,r);break;case 22:at=(o=at)||r.memoizedState!==null,Gn(e,t,r),at=o;break;default:Gn(e,t,r)}}function lg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(r){Pe(t,t.return,r)}}function t5(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ag),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ag),t;default:throw Error(l(435,e.tag))}}function jd(e,t){var r=t5(e);t.forEach(function(o){var u=u5.bind(null,e,o);r.has(o)||(r.add(o),o.then(u,u))})}function qt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],f=e,y=t,E=y;e:for(;E!==null;){switch(E.tag){case 27:if(Ea(E.type)){Ge=E.stateNode,zt=!1;break e}break;case 5:Ge=E.stateNode,zt=!1;break e;case 3:case 4:Ge=E.stateNode.containerInfo,zt=!0;break e}E=E.return}if(Ge===null)throw Error(l(160));og(f,y,u),Ge=null,zt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)sg(t,e),t=t.sibling}var fn=null;function sg(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qt(t,e),Ft(e),o&4&&(xa(3,e,e.return),Wi(3,e),xa(5,e,e.return));break;case 1:qt(t,e),Ft(e),o&512&&(at||r===null||jn(r,r.return)),o&64&&Yn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=fn;if(qt(t,e),Ft(e),o&512&&(at||r===null||jn(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){e:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ci]||f[jt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),yt(f,o,r),f[jt]=e,ht(f),o=f;break e;case"link":var y=n1("link","href",u).get(o+(r.href||""));if(y){for(var E=0;E<y.length;E++)if(f=y[E],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(E,1);break t}}f=u.createElement(o),yt(f,o,r),u.head.appendChild(f);break;case"meta":if(y=n1("meta","content",u).get(o+(r.content||""))){for(E=0;E<y.length;E++)if(f=y[E],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(E,1);break t}}f=u.createElement(o),yt(f,o,r),u.head.appendChild(f);break;default:throw Error(l(468,o))}f[jt]=e,ht(f),o=f}e.stateNode=o}else a1(u,e.type,e.stateNode);else e.stateNode=t1(u,o,e.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?a1(u,e.type,e.stateNode):t1(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vd(e,e.memoizedProps,r.memoizedProps)}break;case 27:qt(t,e),Ft(e),o&512&&(at||r===null||jn(r,r.return)),r!==null&&o&4&&vd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(qt(t,e),Ft(e),o&512&&(at||r===null||jn(r,r.return)),e.flags&32){u=e.stateNode;try{yr(u,"")}catch(F){Pe(e,e.return,F)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,vd(e,u,r!==null?r.memoizedProps:u)),o&1024&&(Sd=!0);break;case 6:if(qt(t,e),Ft(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(F){Pe(e,e.return,F)}}break;case 3:if(ds=null,u=fn,fn=cs(t.containerInfo),qt(t,e),fn=u,Ft(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(F){Pe(e,e.return,F)}Sd&&(Sd=!1,cg(e));break;case 4:o=fn,fn=cs(e.stateNode.containerInfo),qt(t,e),Ft(e),fn=o;break;case 12:qt(t,e),Ft(e);break;case 13:qt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Rd=yn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jd(e,o)));break;case 22:u=e.memoizedState!==null;var L=r!==null&&r.memoizedState!==null,P=Yn,Q=at;if(Yn=P||u,at=Q||L,qt(t,e),at=Q,Yn=P,Ft(e),o&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(r===null||L||Yn||at||Ga(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){L=r=t;try{if(f=L.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{E=L.stateNode;var ee=L.memoizedProps.style,q=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;E.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){Pe(L,L.return,F)}}}else if(t.tag===6){if(r===null){L=t;try{L.stateNode.nodeValue=u?"":L.memoizedProps}catch(F){Pe(L,L.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,jd(e,r))));break;case 19:qt(t,e),Ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jd(e,o)));break;case 30:break;case 21:break;default:qt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var r,o=e.return;o!==null;){if(tg(o)){r=o;break}o=o.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var u=r.stateNode,f=yd(e);Kl(e,f,u);break;case 5:var y=r.stateNode;r.flags&32&&(yr(y,""),r.flags&=-33);var E=yd(e);Kl(e,E,y);break;case 3:case 4:var L=r.stateNode.containerInfo,P=yd(e);wd(e,P,L);break;default:throw Error(l(161))}}catch(Q){Pe(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rg(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Ga(t);break;case 1:jn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Wm(t,t.return,r),Ga(t);break;case 27:co(t.stateNode);case 26:case 5:jn(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function va(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,u=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:va(u,f,r),Wi(4,f);break;case 1:if(va(u,f,r),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(P){Pe(o,o.return,P)}if(o=f,u=o.updateQueue,u!==null){var E=o.stateNode;try{var L=u.shared.hiddenCallbacks;if(L!==null)for(u.shared.hiddenCallbacks=null,u=0;u<L.length;u++)$0(L[u],E)}catch(P){Pe(o,o.return,P)}}r&&y&64&&Jm(f),eo(f,f.return);break;case 27:ng(f);case 26:case 5:va(u,f,r),r&&o===null&&y&4&&eg(f),eo(f,f.return);break;case 12:va(u,f,r);break;case 13:va(u,f,r),r&&y&4&&lg(u,f);break;case 22:f.memoizedState===null&&va(u,f,r),eo(f,f.return);break;case 30:break;default:va(u,f,r)}t=t.sibling}}function Cd(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Ui(r))}function Ed(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ui(e))}function Cn(e,t,r,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ug(e,t,r,o),t=t.sibling}function ug(e,t,r,o){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Cn(e,t,r,o),u&2048&&Wi(9,t);break;case 1:Cn(e,t,r,o);break;case 3:Cn(e,t,r,o),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ui(e)));break;case 12:if(u&2048){Cn(e,t,r,o),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,E=f.onPostCommit;typeof E=="function"&&E(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(L){Pe(t,t.return,L)}}else Cn(e,t,r,o);break;case 13:Cn(e,t,r,o);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?Cn(e,t,r,o):to(e,t):f._visibility&2?Cn(e,t,r,o):(f._visibility|=2,Ur(e,t,r,o,(t.subtreeFlags&10256)!==0)),u&2048&&Cd(y,t);break;case 24:Cn(e,t,r,o),u&2048&&Ed(t.alternate,t);break;default:Cn(e,t,r,o)}}function Ur(e,t,r,o,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,y=t,E=r,L=o,P=y.flags;switch(y.tag){case 0:case 11:case 15:Ur(f,y,E,L,u),Wi(8,y);break;case 23:break;case 22:var Q=y.stateNode;y.memoizedState!==null?Q._visibility&2?Ur(f,y,E,L,u):to(f,y):(Q._visibility|=2,Ur(f,y,E,L,u)),u&&P&2048&&Cd(y.alternate,y);break;case 24:Ur(f,y,E,L,u),u&&P&2048&&Ed(y.alternate,y);break;default:Ur(f,y,E,L,u)}t=t.sibling}}function to(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,o=t,u=o.flags;switch(o.tag){case 22:to(r,o),u&2048&&Cd(o.alternate,o);break;case 24:to(r,o),u&2048&&Ed(o.alternate,o);break;default:to(r,o)}t=t.sibling}}var no=8192;function Hr(e){if(e.subtreeFlags&no)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 26:Hr(e),e.flags&no&&e.memoizedState!==null&&H5(fn,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var t=fn;fn=cs(e.stateNode.containerInfo),Hr(e),fn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=no,no=16777216,Hr(e),no=t):Hr(e));break;default:Hr(e)}}function fg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ao(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];mt=o,pg(o,e)}fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 0:case 11:case 15:ao(e),e.flags&2048&&xa(9,e,e.return);break;case 3:ao(e);break;case 12:ao(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ql(e)):ao(e);break;default:ao(e)}}function Ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];mt=o,pg(o,e)}fg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Ql(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,Ql(t));break;default:Ql(t)}e=e.sibling}}function pg(e,t){for(;mt!==null;){var r=mt;switch(r.tag){case 0:case 11:case 15:xa(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ui(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,mt=o;else e:for(r=e;mt!==null;){o=mt;var u=o.sibling,f=o.return;if(ig(o),o===r){mt=null;break e}if(u!==null){u.return=f,mt=u;break e}mt=f}}}var n5={getCacheForType:function(e){var t=Ct(ut),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},a5=typeof WeakMap=="function"?WeakMap:Map,$e=0,qe=null,Me=null,Re=0,Ue=0,Yt=null,ya=!1,Ir=!1,Md=!1,Zn=0,et=0,wa=0,Za=0,kd=0,ln=0,Vr=0,ro=null,Lt=null,Td=!1,Rd=0,Jl=1/0,Wl=null,Sa=null,vt=0,ja=null,Pr=null,qr=0,Od=0,Ad=null,mg=null,io=0,Dd=null;function Gt(){if(($e&2)!==0&&Re!==0)return Re&-Re;if(T.T!==null){var e=Ar;return e!==0?e:Ud()}return Ap()}function gg(){ln===0&&(ln=(Re&536870912)===0||De?kp():536870912);var e=on.current;return e!==null&&(e.flags|=32),ln}function Zt(e,t,r){(e===qe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Fr(e,0),Ca(e,Re,ln,!1)),ji(e,r),(($e&2)===0||e!==qe)&&(e===qe&&(($e&2)===0&&(Za|=r),et===4&&Ca(e,Re,ln,!1)),En(e))}function xg(e,t,r){if(($e&6)!==0)throw Error(l(327));var o=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Si(e,t),u=o?o5(e,t):Ld(e,t,!0),f=o;do{if(u===0){Ir&&!o&&Ca(e,t,0,!1);break}else{if(r=e.current.alternate,f&&!r5(r)){u=Ld(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var E=e;u=ro;var L=E.current.memoizedState.isDehydrated;if(L&&(Fr(E,y).flags|=256),y=Ld(E,y,!1),y!==2){if(Md&&!L){E.errorRecoveryDisabledLanes|=f,Za|=f,u=4;break e}f=Lt,Lt=u,f!==null&&(Lt===null?Lt=f:Lt.push.apply(Lt,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Fr(e,0),Ca(e,t,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Ca(o,t,ln,!ya);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(u=Rd+300-yn(),10<u)){if(Ca(o,t,ln,!ya),ul(o,0,!0)!==0)break e;o.timeoutHandle=Yg(bg.bind(null,o,r,Lt,Wl,Td,t,ln,Za,Vr,ya,f,2,-0,0),u);break e}bg(o,r,Lt,Wl,Td,t,ln,Za,Vr,ya,f,0,-0,0)}}break}while(!0);En(e)}function bg(e,t,r,o,u,f,y,E,L,P,Q,ee,q,F){if(e.timeoutHandle=-1,ee=t.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:U5},dg(t),ee=I5(),ee!==null)){e.cancelPendingCommit=ee(Eg.bind(null,e,t,f,r,o,u,y,E,L,Q,1,q,F)),Ca(e,f,y,!P);return}Eg(e,t,f,r,o,u,y,E,L)}function r5(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],f=u.getSnapshot;u=u.value;try{if(!Vt(f(),u))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,r,o){t&=~kd,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var u=t;0<u;){var f=31-It(u),y=1<<f;o[f]=-1,u&=~y}r!==0&&Rp(e,r,t)}function es(){return($e&6)===0?(oo(0),!1):!0}function Nd(){if(Me!==null){if(Ue===0)var e=Me.return;else e=Me,Hn=Va=null,Ku(e),_r=null,Ki=0,e=Me;for(;e!==null;)Qm(e.alternate,e),e=e.return;Me=null}}function Fr(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,S5(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Nd(),qe=e,Me=r=_n(e.current,null),Re=t,Ue=0,Yt=null,ya=!1,Ir=Si(e,t),Md=!1,Vr=ln=kd=Za=wa=et=0,Lt=ro=null,Td=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var u=31-It(o),f=1<<u;t|=e[u],o&=~f}return Zn=t,Sl(),r}function vg(e,t){Ce=null,T.H=Il,t===Ii||t===Al?(t=B0(),Ue=3):t===N0?(t=B0(),Ue=4):Ue=t===_m?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yt=t,Me===null&&(et=1,Yl(e,tn(t,e.current)))}function yg(){var e=T.H;return T.H=Il,e===null?Il:e}function wg(){var e=T.A;return T.A=n5,e}function zd(){et=4,ya||(Re&4194048)!==Re&&on.current!==null||(Ir=!0),(wa&134217727)===0&&(Za&134217727)===0||qe===null||Ca(qe,Re,ln,!1)}function Ld(e,t,r){var o=$e;$e|=2;var u=yg(),f=wg();(qe!==e||Re!==t)&&(Wl=null,Fr(e,t)),t=!1;var y=et;e:do try{if(Ue!==0&&Me!==null){var E=Me,L=Yt;switch(Ue){case 8:Nd(),y=6;break e;case 3:case 2:case 9:case 6:on.current===null&&(t=!0);var P=Ue;if(Ue=0,Yt=null,Yr(e,E,L,P),r&&Ir){y=0;break e}break;default:P=Ue,Ue=0,Yt=null,Yr(e,E,L,P)}}i5(),y=et;break}catch(Q){vg(e,Q)}while(!0);return t&&e.shellSuspendCounter++,Hn=Va=null,$e=o,T.H=u,T.A=f,Me===null&&(qe=null,Re=0,Sl()),y}function i5(){for(;Me!==null;)Sg(Me)}function o5(e,t){var r=$e;$e|=2;var o=yg(),u=wg();qe!==e||Re!==t?(Wl=null,Jl=yn()+500,Fr(e,t)):Ir=Si(e,t);e:do try{if(Ue!==0&&Me!==null){t=Me;var f=Yt;t:switch(Ue){case 1:Ue=0,Yt=null,Yr(e,t,f,1);break;case 2:case 9:if(z0(f)){Ue=0,Yt=null,jg(t);break}t=function(){Ue!==2&&Ue!==9||qe!==e||(Ue=7),En(e)},f.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:z0(f)?(Ue=0,Yt=null,jg(t)):(Ue=0,Yt=null,Yr(e,t,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var E=Me;if(!y||r1(y)){Ue=0,Yt=null;var L=E.sibling;if(L!==null)Me=L;else{var P=E.return;P!==null?(Me=P,ts(P)):Me=null}break t}}Ue=0,Yt=null,Yr(e,t,f,5);break;case 6:Ue=0,Yt=null,Yr(e,t,f,6);break;case 8:Nd(),et=6;break e;default:throw Error(l(462))}}l5();break}catch(Q){vg(e,Q)}while(!0);return Hn=Va=null,T.H=o,T.A=u,$e=r,Me!==null?0:(qe=null,Re=0,Sl(),et)}function l5(){for(;Me!==null&&!Kc();)Sg(Me)}function Sg(e){var t=Xm(e.alternate,e,Zn);e.memoizedProps=e.pendingProps,t===null?ts(e):Me=t}function jg(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Pm(r,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Pm(r,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Ku(t);default:Qm(r,t),t=Me=C0(t,Zn),t=Xm(r,t,Zn)}e.memoizedProps=e.pendingProps,t===null?ts(e):Me=t}function Yr(e,t,r,o){Hn=Va=null,Ku(t),_r=null,Ki=0;var u=t.return;try{if(Kw(e,u,t,r,Re)){et=1,Yl(e,tn(r,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;et=1,Yl(e,tn(r,e.current)),Me=null;return}t.flags&32768?(De||o===1?e=!0:Ir||(Re&536870912)!==0?e=!1:(ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=on.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(t,e)):ts(t)}function ts(e){var t=e;do{if((t.flags&32768)!==0){Cg(t,ya);return}e=t.return;var r=Jw(t.alternate,t,Zn);if(r!==null){Me=r;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);et===0&&(et=5)}function Cg(e,t){do{var r=Ww(e.alternate,e);if(r!==null){r.flags&=32767,Me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=r}while(e!==null);et=6,Me=null}function Eg(e,t,r,o,u,f,y,E,L){e.cancelPendingCommit=null;do ns();while(vt!==0);if(($e&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=Eu,U2(e,r,f,y,E,L),e===qe&&(Me=qe=null,Re=0),Pr=t,ja=e,qr=r,Od=f,Ad=u,mg=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d5(ll,function(){return Og(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=T.T,T.T=null,u=I.p,I.p=2,y=$e,$e|=4;try{e5(e,t,r)}finally{$e=y,I.p=u,T.T=o}}vt=1,Mg(),kg(),Tg()}}function Mg(){if(vt===1){vt=0;var e=ja,t=Pr,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=T.T,T.T=null;var o=I.p;I.p=2;var u=$e;$e|=4;try{sg(t,e);var f=Gd,y=p0(e.containerInfo),E=f.focusedElem,L=f.selectionRange;if(y!==E&&E&&E.ownerDocument&&h0(E.ownerDocument.documentElement,E)){if(L!==null&&yu(E)){var P=L.start,Q=L.end;if(Q===void 0&&(Q=P),"selectionStart"in E)E.selectionStart=P,E.selectionEnd=Math.min(Q,E.value.length);else{var ee=E.ownerDocument||document,q=ee&&ee.defaultView||window;if(q.getSelection){var F=q.getSelection(),be=E.textContent.length,pe=Math.min(L.start,be),Ve=L.end===void 0?pe:Math.min(L.end,be);!F.extend&&pe>Ve&&(y=Ve,Ve=pe,pe=y);var H=f0(E,pe),$=f0(E,Ve);if(H&&$&&(F.rangeCount!==1||F.anchorNode!==H.node||F.anchorOffset!==H.offset||F.focusNode!==$.node||F.focusOffset!==$.offset)){var V=ee.createRange();V.setStart(H.node,H.offset),F.removeAllRanges(),pe>Ve?(F.addRange(V),F.extend($.node,$.offset)):(V.setEnd($.node,$.offset),F.addRange(V))}}}}for(ee=[],F=E;F=F.parentNode;)F.nodeType===1&&ee.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ee.length;E++){var W=ee[E];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}ps=!!Yd,Gd=Yd=null}finally{$e=u,I.p=o,T.T=r}}e.current=t,vt=2}}function kg(){if(vt===2){vt=0;var e=ja,t=Pr,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=T.T,T.T=null;var o=I.p;I.p=2;var u=$e;$e|=4;try{rg(e,t.alternate,t)}finally{$e=u,I.p=o,T.T=r}}vt=3}}function Tg(){if(vt===4||vt===3){vt=0,O2();var e=ja,t=Pr,r=qr,o=mg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,Pr=ja=null,Rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Sa=null),Wc(r),t=t.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(wi,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=T.T,u=I.p,I.p=2,T.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var E=o[y];f(E.value,{componentStack:E.stack})}}finally{T.T=t,I.p=u}}(qr&3)!==0&&ns(),En(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Dd?io++:(io=0,Dd=e):io=0,oo(0)}}function Rg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ui(t)))}function ns(e){return Mg(),kg(),Tg(),Og()}function Og(){if(vt!==5)return!1;var e=ja,t=Od;Od=0;var r=Wc(qr),o=T.T,u=I.p;try{I.p=32>r?32:r,T.T=null,r=Ad,Ad=null;var f=ja,y=qr;if(vt=0,Pr=ja=null,qr=0,($e&6)!==0)throw Error(l(331));var E=$e;if($e|=4,hg(f.current),ug(f,f.current,y,r),$e=E,oo(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(wi,f)}catch{}return!0}finally{I.p=u,T.T=o,Rg(e,t)}}function Ag(e,t,r){t=tn(r,t),t=ud(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(ji(e,2),En(e))}function Pe(e,t,r){if(e.tag===3)Ag(e,e,r);else for(;t!==null;){if(t.tag===3){Ag(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sa===null||!Sa.has(o))){e=tn(r,e),r=Lm(2),o=ha(t,r,2),o!==null&&(Bm(r,o,t,e),ji(o,2),En(o));break}}t=t.return}}function Bd(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new a5;var u=new Set;o.set(t,u)}else u=o.get(t),u===void 0&&(u=new Set,o.set(t,u));u.has(r)||(Md=!0,u.add(r),e=s5.bind(null,e,t,r),t.then(e,e))}function s5(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(Re&r)===r&&(et===4||et===3&&(Re&62914560)===Re&&300>yn()-Rd?($e&2)===0&&Fr(e,0):kd|=r,Vr===Re&&(Vr=0)),En(e)}function Dg(e,t){t===0&&(t=Tp()),e=kr(e,t),e!==null&&(ji(e,t),En(e))}function c5(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dg(e,r)}function u5(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),Dg(e,r)}function d5(e,t){return yi(e,t)}var as=null,Gr=null,_d=!1,rs=!1,$d=!1,Xa=0;function En(e){e!==Gr&&e.next===null&&(Gr===null?as=Gr=e:Gr=Gr.next=e),rs=!0,_d||(_d=!0,h5())}function oo(e,t){if(!$d&&rs){$d=!0;do for(var r=!1,o=as;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(y&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Bg(o,f))}else f=Re,f=ul(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Si(o,f)||(r=!0,Bg(o,f));o=o.next}while(r);$d=!1}}function f5(){Ng()}function Ng(){rs=_d=!1;var e=0;Xa!==0&&(w5()&&(e=Xa),Xa=0);for(var t=yn(),r=null,o=as;o!==null;){var u=o.next,f=zg(o,t);f===0?(o.next=null,r===null?as=u:r.next=u,u===null&&(Gr=r)):(r=o,(e!==0||(f&3)!==0)&&(rs=!0)),o=u}oo(e)}function zg(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-It(f),E=1<<y,L=u[y];L===-1?((E&r)===0||(E&o)!==0)&&(u[y]=$2(E,t)):L<=t&&(e.expiredLanes|=E),f&=~E}if(t=qe,r=Re,r=ul(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&fr(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Si(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(o!==null&&fr(o),Wc(r)){case 2:case 8:r=Ep;break;case 32:r=ll;break;case 268435456:r=Mp;break;default:r=ll}return o=Lg.bind(null,e),r=yi(r,o),e.callbackPriority=t,e.callbackNode=r,t}return o!==null&&o!==null&&fr(o),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ns()&&e.callbackNode!==r)return null;var o=Re;return o=ul(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(xg(e,o,t),zg(e,yn()),e.callbackNode!=null&&e.callbackNode===r?Lg.bind(null,e):null)}function Bg(e,t){if(ns())return null;xg(e,t,!0)}function h5(){j5(function(){($e&6)!==0?yi(Cp,f5):Ng()})}function Ud(){return Xa===0&&(Xa=kp()),Xa}function _g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function $g(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function p5(e,t,r,o,u){if(t==="submit"&&r&&r.stateNode===u){var f=_g((u[At]||null).action),y=o.submitter;y&&(t=(t=y[At]||null)?_g(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var E=new vl("action","action",null,o,u);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var L=y?$g(u,y):new FormData(u);id(r,{pending:!0,data:L,method:u.method,action:f},null,L)}}else typeof f=="function"&&(E.preventDefault(),L=y?$g(u,y):new FormData(u),id(r,{pending:!0,data:L,method:u.method,action:f},f,L))},currentTarget:u}]})}}for(var Hd=0;Hd<Cu.length;Hd++){var Id=Cu[Hd],m5=Id.toLowerCase(),g5=Id[0].toUpperCase()+Id.slice(1);dn(m5,"on"+g5)}dn(x0,"onAnimationEnd"),dn(b0,"onAnimationIteration"),dn(v0,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Nw,"onTransitionRun"),dn(zw,"onTransitionStart"),dn(Lw,"onTransitionCancel"),dn(y0,"onTransitionEnd"),xr("onMouseEnter",["mouseout","mouseover"]),xr("onMouseLeave",["mouseout","mouseover"]),xr("onPointerEnter",["pointerout","pointerover"]),xr("onPointerLeave",["pointerout","pointerover"]),Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Na("onBeforeInput",["compositionend","keypress","textInput","paste"]),Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function Ug(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;e:{var f=void 0;if(t)for(var y=o.length-1;0<=y;y--){var E=o[y],L=E.instance,P=E.currentTarget;if(E=E.listener,L!==f&&u.isPropagationStopped())break e;f=E,u.currentTarget=P;try{f(u)}catch(Q){Fl(Q)}u.currentTarget=null,f=L}else for(y=0;y<o.length;y++){if(E=o[y],L=E.instance,P=E.currentTarget,E=E.listener,L!==f&&u.isPropagationStopped())break e;f=E,u.currentTarget=P;try{f(u)}catch(Q){Fl(Q)}u.currentTarget=null,f=L}}}}function ke(e,t){var r=t[eu];r===void 0&&(r=t[eu]=new Set);var o=e+"__bubble";r.has(o)||(Hg(t,e,2,!1),r.add(o))}function Vd(e,t,r){var o=0;t&&(o|=4),Hg(r,e,o,t)}var is="_reactListening"+Math.random().toString(36).slice(2);function Pd(e){if(!e[is]){e[is]=!0,Np.forEach(function(r){r!=="selectionchange"&&(x5.has(r)||Vd(r,!1,e),Vd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[is]||(t[is]=!0,Vd("selectionchange",!1,t))}}function Hg(e,t,r,o){switch(u1(t)){case 2:var u=q5;break;case 8:u=F5;break;default:u=af}r=u.bind(null,t,r,e),u=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(t,r,{capture:!0,passive:u}):e.addEventListener(t,r,!0):u!==void 0?e.addEventListener(t,r,{passive:u}):e.addEventListener(t,r,!1)}function qd(e,t,r,o,u){var f=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var E=o.stateNode.containerInfo;if(E===u)break;if(y===4)for(y=o.return;y!==null;){var L=y.tag;if((L===3||L===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;E!==null;){if(y=pr(E),y===null)return;if(L=y.tag,L===5||L===6||L===26||L===27){o=f=y;continue e}E=E.parentNode}}o=o.return}Gp(function(){var P=f,Q=cu(r),ee=[];e:{var q=w0.get(e);if(q!==void 0){var F=vl,be=e;switch(e){case"keypress":if(xl(r)===0)break e;case"keydown":case"keyup":F=dw;break;case"focusin":be="focus",F=mu;break;case"focusout":be="blur",F=mu;break;case"beforeblur":case"afterblur":F=mu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=pw;break;case x0:case b0:case v0:F=nw;break;case y0:F=gw;break;case"scroll":case"scrollend":F=Q2;break;case"wheel":F=bw;break;case"copy":case"cut":case"paste":F=rw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Jp;break;case"toggle":case"beforetoggle":F=yw}var pe=(t&4)!==0,Ve=!pe&&(e==="scroll"||e==="scrollend"),H=pe?q!==null?q+"Capture":null:q;pe=[];for(var $=P,V;$!==null;){var W=$;if(V=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||V===null||H===null||(W=Mi($,H),W!=null&&pe.push(so($,W,V))),Ve)break;$=$.return}0<pe.length&&(q=new F(q,be,null,r,Q),ee.push({event:q,listeners:pe}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",q&&r!==su&&(be=r.relatedTarget||r.fromElement)&&(pr(be)||be[hr]))break e;if((F||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,F?(be=r.relatedTarget||r.toElement,F=P,be=be?pr(be):null,be!==null&&(Ve=d(be),pe=be.tag,be!==Ve||pe!==5&&pe!==27&&pe!==6)&&(be=null)):(F=null,be=P),F!==be)){if(pe=Kp,W="onMouseLeave",H="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Jp,W="onPointerLeave",H="onPointerEnter",$="pointer"),Ve=F==null?q:Ei(F),V=be==null?q:Ei(be),q=new pe(W,$+"leave",F,r,Q),q.target=Ve,q.relatedTarget=V,W=null,pr(Q)===P&&(pe=new pe(H,$+"enter",be,r,Q),pe.target=V,pe.relatedTarget=Ve,W=pe),Ve=W,F&&be)t:{for(pe=F,H=be,$=0,V=pe;V;V=Zr(V))$++;for(V=0,W=H;W;W=Zr(W))V++;for(;0<$-V;)pe=Zr(pe),$--;for(;0<V-$;)H=Zr(H),V--;for(;$--;){if(pe===H||H!==null&&pe===H.alternate)break t;pe=Zr(pe),H=Zr(H)}pe=null}else pe=null;F!==null&&Ig(ee,q,F,pe,!1),be!==null&&Ve!==null&&Ig(ee,Ve,be,pe,!0)}}e:{if(q=P?Ei(P):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var se=o0;else if(r0(q))if(l0)se=Ow;else{se=Tw;var Ee=kw}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?P&&lu(P.elementType)&&(se=o0):se=Rw;if(se&&(se=se(e,P))){i0(ee,se,r,Q);break e}Ee&&Ee(e,q,P),e==="focusout"&&P&&q.type==="number"&&P.memoizedProps.value!=null&&ou(q,"number",q.value)}switch(Ee=P?Ei(P):window,e){case"focusin":(r0(Ee)||Ee.contentEditable==="true")&&(Cr=Ee,wu=P,zi=null);break;case"focusout":zi=wu=Cr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,m0(ee,r,Q);break;case"selectionchange":if(Dw)break;case"keydown":case"keyup":m0(ee,r,Q)}var ce;if(xu)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else jr?n0(e,r)&&(me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(me="onCompositionStart");me&&(Wp&&r.locale!=="ko"&&(jr||me!=="onCompositionStart"?me==="onCompositionEnd"&&jr&&(ce=Zp()):(ca=Q,fu="value"in ca?ca.value:ca.textContent,jr=!0)),Ee=os(P,me),0<Ee.length&&(me=new Qp(me,e,null,r,Q),ee.push({event:me,listeners:Ee}),ce?me.data=ce:(ce=a0(r),ce!==null&&(me.data=ce)))),(ce=Sw?jw(e,r):Cw(e,r))&&(me=os(P,"onBeforeInput"),0<me.length&&(Ee=new Qp("onBeforeInput","beforeinput",null,r,Q),ee.push({event:Ee,listeners:me}),Ee.data=ce)),p5(ee,e,P,r,Q)}Ug(ee,t)})}function so(e,t,r){return{instance:e,listener:t,currentTarget:r}}function os(e,t){for(var r=t+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Mi(e,r),u!=null&&o.unshift(so(e,u,f)),u=Mi(e,t),u!=null&&o.push(so(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,t,r,o,u){for(var f=t._reactName,y=[];r!==null&&r!==o;){var E=r,L=E.alternate,P=E.stateNode;if(E=E.tag,L!==null&&L===o)break;E!==5&&E!==26&&E!==27||P===null||(L=P,u?(P=Mi(r,f),P!=null&&y.unshift(so(r,P,L))):u||(P=Mi(r,f),P!=null&&y.push(so(r,P,L)))),r=r.return}y.length!==0&&e.push({event:t,listeners:y})}var b5=/\r\n?/g,v5=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(b5,`
`).replace(v5,"")}function Pg(e,t){return t=Vg(t),Vg(e)===t}function ls(){}function Ie(e,t,r,o,u,f){switch(r){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||yr(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&yr(e,""+o);break;case"className":fl(e,"class",o);break;case"tabIndex":fl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":fl(e,r,o);break;case"style":Fp(e,o,f);break;case"data":if(t!=="object"){fl(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=ml(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(t!=="input"&&Ie(e,t,"name",u.name,u,null),Ie(e,t,"formEncType",u.formEncType,u,null),Ie(e,t,"formMethod",u.formMethod,u,null),Ie(e,t,"formTarget",u.formTarget,u,null)):(Ie(e,t,"encType",u.encType,u,null),Ie(e,t,"method",u.method,u,null),Ie(e,t,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=ml(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=ls);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":ke("beforetoggle",e),ke("toggle",e),dl(e,"popover",o);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":dl(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=X2.get(r)||r,dl(e,r,o))}}function Fd(e,t,r,o,u,f){switch(r){case"style":Fp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof o=="string"?yr(e,o):(typeof o=="number"||typeof o=="bigint")&&yr(e,""+o);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ls);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zp.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),t=r.slice(2,u?r.length-7:void 0),f=e[At]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,o,u);break e}r in e?e[r]=o:o===!0?e.setAttribute(r,""):dl(e,r,o)}}}function yt(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var o=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var y=r[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ie(e,t,f,y,r,null)}}u&&Ie(e,t,"srcSet",r.srcSet,r,null),o&&Ie(e,t,"src",r.src,r,null);return;case"input":ke("invalid",e);var E=f=y=u=null,L=null,P=null;for(o in r)if(r.hasOwnProperty(o)){var Q=r[o];if(Q!=null)switch(o){case"name":u=Q;break;case"type":y=Q;break;case"checked":L=Q;break;case"defaultChecked":P=Q;break;case"value":f=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(l(137,t));break;default:Ie(e,t,o,Q,r,null)}}Ip(e,f,E,L,P,y,u,!1),hl(e);return;case"select":ke("invalid",e),o=y=f=null;for(u in r)if(r.hasOwnProperty(u)&&(E=r[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":y=E;break;case"multiple":o=E;default:Ie(e,t,u,E,r,null)}t=f,r=y,e.multiple=!!o,t!=null?vr(e,!!o,t,!1):r!=null&&vr(e,!!o,r,!0);return;case"textarea":ke("invalid",e),f=u=o=null;for(y in r)if(r.hasOwnProperty(y)&&(E=r[y],E!=null))switch(y){case"value":o=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(l(91));break;default:Ie(e,t,y,E,r,null)}Pp(e,o,u,f),hl(e);return;case"option":for(L in r)if(r.hasOwnProperty(L)&&(o=r[L],o!=null))switch(L){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,t,L,o,r,null)}return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(o=0;o<lo.length;o++)ke(lo[o],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in r)if(r.hasOwnProperty(P)&&(o=r[P],o!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ie(e,t,P,o,r,null)}return;default:if(lu(t)){for(Q in r)r.hasOwnProperty(Q)&&(o=r[Q],o!==void 0&&Fd(e,t,Q,o,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(o=r[E],o!=null&&Ie(e,t,E,o,r,null))}function y5(e,t,r,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,E=null,L=null,P=null,Q=null;for(F in r){var ee=r[F];if(r.hasOwnProperty(F)&&ee!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":L=ee;default:o.hasOwnProperty(F)||Ie(e,t,F,null,o,ee)}}for(var q in o){var F=o[q];if(ee=r[q],o.hasOwnProperty(q)&&(F!=null||ee!=null))switch(q){case"type":f=F;break;case"name":u=F;break;case"checked":P=F;break;case"defaultChecked":Q=F;break;case"value":y=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,t));break;default:F!==ee&&Ie(e,t,q,F,o,ee)}}iu(e,y,E,L,P,Q,f,u);return;case"select":F=y=E=q=null;for(f in r)if(L=r[f],r.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":F=L;default:o.hasOwnProperty(f)||Ie(e,t,f,null,o,L)}for(u in o)if(f=o[u],L=r[u],o.hasOwnProperty(u)&&(f!=null||L!=null))switch(u){case"value":q=f;break;case"defaultValue":E=f;break;case"multiple":y=f;default:f!==L&&Ie(e,t,u,f,o,L)}t=E,r=y,o=F,q!=null?vr(e,!!r,q,!1):!!o!=!!r&&(t!=null?vr(e,!!r,t,!0):vr(e,!!r,r?[]:"",!1));return;case"textarea":F=q=null;for(E in r)if(u=r[E],r.hasOwnProperty(E)&&u!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(e,t,E,null,o,u)}for(y in o)if(u=o[y],f=r[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":q=u;break;case"defaultValue":F=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==f&&Ie(e,t,y,u,o,f)}Vp(e,q,F);return;case"option":for(var be in r)if(q=r[be],r.hasOwnProperty(be)&&q!=null&&!o.hasOwnProperty(be))switch(be){case"selected":e.selected=!1;break;default:Ie(e,t,be,null,o,q)}for(L in o)if(q=o[L],F=r[L],o.hasOwnProperty(L)&&q!==F&&(q!=null||F!=null))switch(L){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ie(e,t,L,q,o,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in r)q=r[pe],r.hasOwnProperty(pe)&&q!=null&&!o.hasOwnProperty(pe)&&Ie(e,t,pe,null,o,q);for(P in o)if(q=o[P],F=r[P],o.hasOwnProperty(P)&&q!==F&&(q!=null||F!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:Ie(e,t,P,q,o,F)}return;default:if(lu(t)){for(var Ve in r)q=r[Ve],r.hasOwnProperty(Ve)&&q!==void 0&&!o.hasOwnProperty(Ve)&&Fd(e,t,Ve,void 0,o,q);for(Q in o)q=o[Q],F=r[Q],!o.hasOwnProperty(Q)||q===F||q===void 0&&F===void 0||Fd(e,t,Q,q,o,F);return}}for(var H in r)q=r[H],r.hasOwnProperty(H)&&q!=null&&!o.hasOwnProperty(H)&&Ie(e,t,H,null,o,q);for(ee in o)q=o[ee],F=r[ee],!o.hasOwnProperty(ee)||q===F||q==null&&F==null||Ie(e,t,ee,q,o,F)}var Yd=null,Gd=null;function ss(e){return e.nodeType===9?e:e.ownerDocument}function qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xd=null;function w5(){var e=window.event;return e&&e.type==="popstate"?e===Xd?!1:(Xd=e,!0):(Xd=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,S5=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,j5=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(e){return Gg.resolve(null).then(e).catch(C5)}:Yg;function C5(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Zg(e,t){var r=t,o=0,u=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<o&&8>o){r=o;var y=e.ownerDocument;if(r&1&&co(y.documentElement),r&2&&co(y.body),r&4)for(r=y.head,co(r),y=r.firstChild;y;){var E=y.nextSibling,L=y.nodeName;y[Ci]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&y.rel.toLowerCase()==="stylesheet"||r.removeChild(y),y=E}}if(u===0){e.removeChild(f),bo(t);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:o=r.charCodeAt(0)-48;else o=0;r=f}while(r);bo(t)}function Kd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Kd(r),tu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function E5(e,t,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ci])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hn(e.nextSibling),e===null)break}return null}function M5(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=hn(e.nextSibling),e===null))return null;return e}function Qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function k5(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var o=function(){t(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Jd=null;function Xg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function Kg(e,t,r){switch(t=ss(r),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function co(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tu(e)}var sn=new Map,Qg=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xn=I.d;I.d={f:T5,r:R5,D:O5,C:A5,L:D5,m:N5,X:L5,S:z5,M:B5};function T5(){var e=Xn.f(),t=es();return e||t}function R5(e){var t=mr(e);t!==null&&t.tag===5&&t.type==="form"?xm(t):Xn.r(e)}var Xr=typeof document>"u"?null:document;function Jg(e,t,r){var o=Xr;if(o&&typeof t=="string"&&t){var u=en(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Qg.has(u)||(Qg.add(u),e={rel:e,crossOrigin:r,href:t},o.querySelector(u)===null&&(t=o.createElement("link"),yt(t,"link",e),ht(t),o.head.appendChild(t)))}}function O5(e){Xn.D(e),Jg("dns-prefetch",e,null)}function A5(e,t){Xn.C(e,t),Jg("preconnect",e,t)}function D5(e,t,r){Xn.L(e,t,r);var o=Xr;if(o&&e&&t){var u='link[rel="preload"][as="'+en(t)+'"]';t==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+en(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+en(r.imageSizes)+'"]')):u+='[href="'+en(e)+'"]';var f=u;switch(t){case"style":f=Kr(e);break;case"script":f=Qr(e)}sn.has(f)||(e=g({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),sn.set(f,e),o.querySelector(u)!==null||t==="style"&&o.querySelector(uo(f))||t==="script"&&o.querySelector(fo(f))||(t=o.createElement("link"),yt(t,"link",e),ht(t),o.head.appendChild(t)))}}function N5(e,t){Xn.m(e,t);var r=Xr;if(r&&e){var o=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+en(o)+'"][href="'+en(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(e)}if(!sn.has(f)&&(e=g({rel:"modulepreload",href:e},t),sn.set(f,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(fo(f)))return}o=r.createElement("link"),yt(o,"link",e),ht(o),r.head.appendChild(o)}}}function z5(e,t,r){Xn.S(e,t,r);var o=Xr;if(o&&e){var u=gr(o).hoistableStyles,f=Kr(e);t=t||"default";var y=u.get(f);if(!y){var E={loading:0,preload:null};if(y=o.querySelector(uo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},r),(r=sn.get(f))&&Wd(e,r);var L=y=o.createElement("link");ht(L),yt(L,"link",e),L._p=new Promise(function(P,Q){L.onload=P,L.onerror=Q}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,us(y,t,o)}y={type:"stylesheet",instance:y,count:1,state:E},u.set(f,y)}}}function L5(e,t){Xn.X(e,t);var r=Xr;if(r&&e){var o=gr(r).hoistableScripts,u=Qr(e),f=o.get(u);f||(f=r.querySelector(fo(u)),f||(e=g({src:e,async:!0},t),(t=sn.get(u))&&ef(e,t),f=r.createElement("script"),ht(f),yt(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function B5(e,t){Xn.M(e,t);var r=Xr;if(r&&e){var o=gr(r).hoistableScripts,u=Qr(e),f=o.get(u);f||(f=r.querySelector(fo(u)),f||(e=g({src:e,async:!0,type:"module"},t),(t=sn.get(u))&&ef(e,t),f=r.createElement("script"),ht(f),yt(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Wg(e,t,r,o){var u=(u=le.current)?cs(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=Kr(r.href),r=gr(u).hoistableStyles,o=r.get(t),o||(o={type:"style",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Kr(r.href);var f=gr(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(uo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),sn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},sn.set(e,r),f||_5(u,e,r,y.state))),t&&o===null)throw Error(l(528,""));return y}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qr(r),r=gr(u).hoistableScripts,o=r.get(t),o||(o={type:"script",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Kr(e){return'href="'+en(e)+'"'}function uo(e){return'link[rel="stylesheet"]['+e+"]"}function e1(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function _5(e,t,r,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),yt(t,"link",r),ht(t),e.head.appendChild(t))}function Qr(e){return'[src="'+en(e)+'"]'}function fo(e){return"script[async]"+e}function t1(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+en(r.href)+'"]');if(o)return t.instance=o,ht(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ht(o),yt(o,"style",u),us(o,r.precedence,e),t.instance=o;case"stylesheet":u=Kr(r.href);var f=e.querySelector(uo(u));if(f)return t.state.loading|=4,t.instance=f,ht(f),f;o=e1(r),(u=sn.get(u))&&Wd(o,u),f=(e.ownerDocument||e).createElement("link"),ht(f);var y=f;return y._p=new Promise(function(E,L){y.onload=E,y.onerror=L}),yt(f,"link",o),t.state.loading|=4,us(f,r.precedence,e),t.instance=f;case"script":return f=Qr(r.src),(u=e.querySelector(fo(f)))?(t.instance=u,ht(u),u):(o=r,(u=sn.get(f))&&(o=g({},r),ef(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ht(u),yt(u,"link",o),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,us(o,r.precedence,e));return t.instance}function us(e,t,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var E=o[y];if(E.dataset.precedence===t)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Wd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ef(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ds=null;function n1(e,t,r){if(ds===null){var o=new Map,u=ds=new Map;u.set(r,o)}else u=ds,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[Ci]||f[jt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var E=o.get(y);E?E.push(f):o.set(y,[f])}}return o}function a1(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function $5(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function r1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ho=null;function U5(){}function H5(e,t,r){if(ho===null)throw Error(l(475));var o=ho;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=Kr(r.href),f=e.querySelector(uo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fs.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=f,ht(f);return}f=e.ownerDocument||e,r=e1(r),(u=sn.get(u))&&Wd(r,u),f=f.createElement("link"),ht(f);var y=f;y._p=new Promise(function(E,L){y.onload=E,y.onerror=L}),yt(f,"link",r),t.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(o.count++,t=fs.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function I5(){if(ho===null)throw Error(l(475));var e=ho;return e.stylesheets&&e.count===0&&tf(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&tf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function fs(){if(this.count--,this.count===0){if(this.stylesheets)tf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hs=null;function tf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hs=new Map,t.forEach(V5,e),hs=null,fs.call(e))}function V5(e,t){if(!(t.state.loading&4)){var r=hs.get(e);if(r)var o=r.get(null);else{r=new Map,hs.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}u=t.instance,y=u.getAttribute("data-precedence"),f=r.get(y)||o,f===o&&r.set(null,u),r.set(y,u),this.count++,o=fs.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var po={$$typeof:D,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function P5(e,t,r,o,u,f,y,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.hiddenUpdates=Qc(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function i1(e,t,r,o,u,f,y,E,L,P,Q,ee){return e=new P5(e,t,r,y,E,L,P,ee),t=1,f===!0&&(t|=24),f=Pt(3,null,null,t),e.current=f,f.stateNode=e,t=Bu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:t},Hu(f),e}function o1(e){return e?(e=Tr,e):Tr}function l1(e,t,r,o,u,f){u=o1(u),o.context===null?o.context=u:o.pendingContext=u,o=fa(t),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=ha(e,o,t),r!==null&&(Zt(r,e,t),Pi(r,e,t))}function s1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function nf(e,t){s1(e,t),(e=e.alternate)&&s1(e,t)}function c1(e){if(e.tag===13){var t=kr(e,67108864);t!==null&&Zt(t,e,67108864),nf(e,67108864)}}var ps=!0;function q5(e,t,r,o){var u=T.T;T.T=null;var f=I.p;try{I.p=2,af(e,t,r,o)}finally{I.p=f,T.T=u}}function F5(e,t,r,o){var u=T.T;T.T=null;var f=I.p;try{I.p=8,af(e,t,r,o)}finally{I.p=f,T.T=u}}function af(e,t,r,o){if(ps){var u=rf(o);if(u===null)qd(e,t,o,ms,r),d1(e,o);else if(G5(u,e,t,r,o))o.stopPropagation();else if(d1(e,o),t&4&&-1<Y5.indexOf(e)){for(;u!==null;){var f=mr(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Da(f.pendingLanes);if(y!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;y;){var L=1<<31-It(y);E.entanglements[1]|=L,y&=~L}En(f),($e&6)===0&&(Jl=yn()+500,oo(0))}}break;case 13:E=kr(f,2),E!==null&&Zt(E,f,2),es(),nf(f,2)}if(f=rf(o),f===null&&qd(e,t,o,ms,r),f===u)break;u=f}u!==null&&o.stopPropagation()}else qd(e,t,o,null,r)}}function rf(e){return e=cu(e),of(e)}var ms=null;function of(e){if(ms=null,e=pr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=h(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ms=e,null}function u1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A2()){case Cp:return 2;case Ep:return 8;case ll:case D2:return 32;case Mp:return 268435456;default:return 32}default:return 32}}var lf=!1,Ma=null,ka=null,Ta=null,mo=new Map,go=new Map,Ra=[],Y5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d1(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function xo(e,t,r,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},t!==null&&(t=mr(t),t!==null&&c1(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function G5(e,t,r,o,u){switch(t){case"focusin":return Ma=xo(Ma,e,t,r,o,u),!0;case"dragenter":return ka=xo(ka,e,t,r,o,u),!0;case"mouseover":return Ta=xo(Ta,e,t,r,o,u),!0;case"pointerover":var f=u.pointerId;return mo.set(f,xo(mo.get(f)||null,e,t,r,o,u)),!0;case"gotpointercapture":return f=u.pointerId,go.set(f,xo(go.get(f)||null,e,t,r,o,u)),!0}return!1}function f1(e){var t=pr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=h(r),t!==null){e.blockedOn=t,H2(e.priority,function(){if(r.tag===13){var o=Gt();o=Jc(o);var u=kr(r,o);u!==null&&Zt(u,r,o),nf(r,o)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=rf(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);su=o,r.target.dispatchEvent(o),su=null}else return t=mr(r),t!==null&&c1(t),e.blockedOn=r,!1;t.shift()}return!0}function h1(e,t,r){gs(e)&&r.delete(t)}function Z5(){lf=!1,Ma!==null&&gs(Ma)&&(Ma=null),ka!==null&&gs(ka)&&(ka=null),Ta!==null&&gs(Ta)&&(Ta=null),mo.forEach(h1),go.forEach(h1)}function xs(e,t){e.blockedOn===t&&(e.blockedOn=null,lf||(lf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Z5)))}var bs=null;function p1(e){bs!==e&&(bs=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){bs===e&&(bs=null);for(var t=0;t<e.length;t+=3){var r=e[t],o=e[t+1],u=e[t+2];if(typeof o!="function"){if(of(o||r)===null)continue;break}var f=mr(r);f!==null&&(e.splice(t,3),t-=3,id(f,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function bo(e){function t(L){return xs(L,e)}Ma!==null&&xs(Ma,e),ka!==null&&xs(ka,e),Ta!==null&&xs(Ta,e),mo.forEach(t),go.forEach(t);for(var r=0;r<Ra.length;r++){var o=Ra[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ra.length&&(r=Ra[0],r.blockedOn===null);)f1(r),r.blockedOn===null&&Ra.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],f=r[o+1],y=u[At]||null;if(typeof f=="function")y||p1(r);else if(y){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[At]||null)E=y.formAction;else if(of(u)!==null)continue}else E=y.action;typeof E=="function"?r[o+1]=E:(r.splice(o,3),o-=3),p1(r)}}}function sf(e){this._internalRoot=e}vs.prototype.render=sf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var r=t.current,o=Gt();l1(r,o,e,t,null,null)},vs.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;l1(e.current,2,null,e,null,null),es(),t[hr]=null}};function vs(e){this._internalRoot=e}vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ap();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ra.length&&t!==0&&t<Ra[r].priority;r++);Ra.splice(r,0,e),r===0&&f1(e)}};var m1=a.version;if(m1!=="19.1.1")throw Error(l(527,m1,"19.1.1"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var X5={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{wi=ys.inject(X5),Ht=ys}catch{}}return yo.createRoot=function(e,t){if(!s(e))throw Error(l(299));var r=!1,o="",u=Am,f=Dm,y=Nm,E=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(E=t.unstable_transitionCallbacks)),t=i1(e,1,!1,null,null,r,o,u,f,y,E,null),e[hr]=t.current,Pd(e),new sf(t)},yo.hydrateRoot=function(e,t,r){if(!s(e))throw Error(l(299));var o=!1,u="",f=Am,y=Dm,E=Nm,L=null,P=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(L=r.unstable_transitionCallbacks),r.formState!==void 0&&(P=r.formState)),t=i1(e,1,!0,t,r??null,o,u,f,y,E,L,P),t.context=o1(null),r=t.current,o=Gt(),o=Jc(o),u=fa(o),u.callback=null,ha(r,u,o),r=o,t.current.lanes=r,ji(t,r),En(t),e[hr]=t.current,Pd(e),new vs(t)},yo.version="19.1.1",yo}var M1;function iS(){if(M1)return df.exports;M1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),df.exports=rS(),df.exports}var oS=iS();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var k1="popstate";function lS(n={}){function a(l,s){let{pathname:d,search:h,hash:x}=l.location;return ph("",{pathname:d,search:h,hash:x},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(l,s){return typeof s=="string"?s:Fo(s)}return cS(a,i,null,n)}function Ze(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function xn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function sS(){return Math.random().toString(36).substring(2,10)}function T1(n,a){return{usr:n.state,key:n.key,idx:a}}function ph(n,a,i=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?hi(a):a,state:i,key:a&&a.key||l||sS()}}function Fo({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function hi(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function cS(n,a,i,l={}){let{window:s=document.defaultView,v5Compat:d=!1}=l,h=s.history,x="POP",p=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function w(){x="POP";let j=g(),k=j==null?null:j-m;m=j,p&&p({action:x,location:O.location,delta:k})}function C(j,k){x="PUSH";let A=ph(O.location,j,k);m=g()+1;let D=T1(A,m),U=O.createHref(A);try{h.pushState(D,"",U)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(U)}d&&p&&p({action:x,location:O.location,delta:1})}function M(j,k){x="REPLACE";let A=ph(O.location,j,k);m=g();let D=T1(A,m),U=O.createHref(A);h.replaceState(D,"",U),d&&p&&p({action:x,location:O.location,delta:0})}function R(j){return uS(j)}let O={get action(){return x},get location(){return n(s,h)},listen(j){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(k1,w),p=j,()=>{s.removeEventListener(k1,w),p=null}},createHref(j){return a(s,j)},createURL:R,encodeLocation(j){let k=R(j);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:C,replace:M,go(j){return h.go(j)}};return O}function uS(n,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(i,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:Fo(n);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=i+l),new URL(l,i)}function gv(n,a,i="/"){return dS(n,a,i,!1)}function dS(n,a,i,l){let s=typeof a=="string"?hi(a):a,d=aa(s.pathname||"/",i);if(d==null)return null;let h=xv(n);fS(h);let x=null;for(let p=0;x==null&&p<h.length;++p){let m=jS(d);x=wS(h[p],m,l)}return x}function xv(n,a=[],i=[],l="",s=!1){let d=(h,x,p=s,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(l)&&p)return;Ze(g.relativePath.startsWith(l),`Absolute route path "${g.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(l.length)}let w=ta([l,g.relativePath]),C=i.concat(g);h.children&&h.children.length>0&&(Ze(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),xv(h.children,a,C,w,p)),!(h.path==null&&!h.index)&&a.push({path:w,score:vS(w,h.index),routesMeta:C})};return n.forEach((h,x)=>{if(h.path===""||!h.path?.includes("?"))d(h,x);else for(let p of bv(h.path))d(h,x,!0,p)}),a}function bv(n){let a=n.split("/");if(a.length===0)return[];let[i,...l]=a,s=i.endsWith("?"),d=i.replace(/\?$/,"");if(l.length===0)return s?[d,""]:[d];let h=bv(l.join("/")),x=[];return x.push(...h.map(p=>p===""?d:[d,p].join("/"))),s&&x.push(...h),x.map(p=>n.startsWith("/")&&p===""?"/":p)}function fS(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:yS(a.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var hS=/^:[\w-]+$/,pS=3,mS=2,gS=1,xS=10,bS=-2,R1=n=>n==="*";function vS(n,a){let i=n.split("/"),l=i.length;return i.some(R1)&&(l+=bS),a&&(l+=mS),i.filter(s=>!R1(s)).reduce((s,d)=>s+(hS.test(d)?pS:d===""?gS:xS),l)}function yS(n,a){return n.length===a.length&&n.slice(0,-1).every((l,s)=>l===a[s])?n[n.length-1]-a[a.length-1]:0}function wS(n,a,i=!1){let{routesMeta:l}=n,s={},d="/",h=[];for(let x=0;x<l.length;++x){let p=l[x],m=x===l.length-1,g=d==="/"?a:a.slice(d.length)||"/",w=mc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),C=p.route;if(!w&&m&&i&&!l[l.length-1].route.index&&(w=mc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!w)return null;Object.assign(s,w.params),h.push({params:s,pathname:ta([d,w.pathname]),pathnameBase:kS(ta([d,w.pathnameBase])),route:C}),w.pathnameBase!=="/"&&(d=ta([d,w.pathnameBase]))}return h}function mc(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,l]=SS(n.path,n.caseSensitive,n.end),s=a.match(i);if(!s)return null;let d=s[0],h=d.replace(/(.)\/+$/,"$1"),x=s.slice(1);return{params:l.reduce((m,{paramName:g,isOptional:w},C)=>{if(g==="*"){let R=x[C]||"";h=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const M=x[C];return w&&!M?m[g]=void 0:m[g]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:h,pattern:n}}function SS(n,a=!1,i=!0){xn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,x,p)=>(l.push({paramName:x,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),l]}function jS(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return xn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function aa(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,l=n.charAt(i);return l&&l!=="/"?null:n.slice(i)||"/"}function CS(n,a="/"){let{pathname:i,search:l="",hash:s=""}=typeof n=="string"?hi(n):n;return{pathname:i?i.startsWith("/")?i:ES(i,a):a,search:TS(l),hash:RS(s)}}function ES(n,a){let i=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function mf(n,a,i,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function MS(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Fh(n){let a=MS(n);return a.map((i,l)=>l===a.length-1?i.pathname:i.pathnameBase)}function Yh(n,a,i,l=!1){let s;typeof n=="string"?s=hi(n):(s={...n},Ze(!s.pathname||!s.pathname.includes("?"),mf("?","pathname","search",s)),Ze(!s.pathname||!s.pathname.includes("#"),mf("#","pathname","hash",s)),Ze(!s.search||!s.search.includes("#"),mf("#","search","hash",s)));let d=n===""||s.pathname==="",h=d?"/":s.pathname,x;if(h==null)x=i;else{let w=a.length-1;if(!l&&h.startsWith("..")){let C=h.split("/");for(;C[0]==="..";)C.shift(),w-=1;s.pathname=C.join("/")}x=w>=0?a[w]:"/"}let p=CS(s,x),m=h&&h!=="/"&&h.endsWith("/"),g=(d||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ta=n=>n.join("/").replace(/\/\/+/g,"/"),kS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),TS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,RS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function OS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var vv=["POST","PUT","PATCH","DELETE"];new Set(vv);var AS=["GET",...vv];new Set(AS);var pi=v.createContext(null);pi.displayName="DataRouter";var Ac=v.createContext(null);Ac.displayName="DataRouterState";v.createContext(!1);var yv=v.createContext({isTransitioning:!1});yv.displayName="ViewTransition";var DS=v.createContext(new Map);DS.displayName="Fetchers";var NS=v.createContext(null);NS.displayName="Await";var bn=v.createContext(null);bn.displayName="Navigation";var Wo=v.createContext(null);Wo.displayName="Location";var un=v.createContext({outlet:null,matches:[],isDataRoute:!1});un.displayName="Route";var Gh=v.createContext(null);Gh.displayName="RouteError";function zS(n,{relative:a}={}){Ze(mi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=v.useContext(bn),{hash:s,pathname:d,search:h}=el(n,{relative:a}),x=d;return i!=="/"&&(x=d==="/"?i:ta([i,d])),l.createHref({pathname:x,search:h,hash:s})}function mi(){return v.useContext(Wo)!=null}function Tt(){return Ze(mi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Wo).location}var wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sv(n){v.useContext(bn).static||v.useLayoutEffect(n)}function Je(){let{isDataRoute:n}=v.useContext(un);return n?KS():LS()}function LS(){Ze(mi(),"useNavigate() may be used only in the context of a <Router> component.");let n=v.useContext(pi),{basename:a,navigator:i}=v.useContext(bn),{matches:l}=v.useContext(un),{pathname:s}=Tt(),d=JSON.stringify(Fh(l)),h=v.useRef(!1);return Sv(()=>{h.current=!0}),v.useCallback((p,m={})=>{if(xn(h.current,wv),!h.current)return;if(typeof p=="number"){i.go(p);return}let g=Yh(p,JSON.parse(d),s,m.relative==="path");n==null&&a!=="/"&&(g.pathname=g.pathname==="/"?a:ta([a,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[a,i,d,s,n])}var BS=v.createContext(null);function _S(n){let a=v.useContext(un).outlet;return a&&v.createElement(BS.Provider,{value:n},a)}function $S(){let{matches:n}=v.useContext(un),a=n[n.length-1];return a?a.params:{}}function el(n,{relative:a}={}){let{matches:i}=v.useContext(un),{pathname:l}=Tt(),s=JSON.stringify(Fh(i));return v.useMemo(()=>Yh(n,JSON.parse(s),l,a==="path"),[n,s,l,a])}function US(n,a){return jv(n,a)}function jv(n,a,i,l,s){Ze(mi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(bn),{matches:h}=v.useContext(un),x=h[h.length-1],p=x?x.params:{},m=x?x.pathname:"/",g=x?x.pathnameBase:"/",w=x&&x.route;{let A=w&&w.path||"";Cv(m,!w||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let C=Tt(),M;if(a){let A=typeof a=="string"?hi(a):a;Ze(g==="/"||A.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),M=A}else M=C;let R=M.pathname||"/",O=R;if(g!=="/"){let A=g.replace(/^\//,"").split("/");O="/"+R.replace(/^\//,"").split("/").slice(A.length).join("/")}let j=gv(n,{pathname:O});xn(w||j!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),xn(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=qS(j&&j.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:ta([g,d.encodeLocation?d.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:ta([g,d.encodeLocation?d.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),h,i,l,s);return a&&k?v.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},k):k}function HS(){let n=XS(),a=OS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},a),i?v.createElement("pre",{style:s},i):null,h)}var IS=v.createElement(HS,null),VS=class extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.unstable_onError?this.props.unstable_onError(n,a):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?v.createElement(un.Provider,{value:this.props.routeContext},v.createElement(Gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PS({routeContext:n,match:a,children:i}){let l=v.useContext(pi);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),v.createElement(un.Provider,{value:n},i)}function qS(n,a=[],i=null,l=null,s=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(a.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let d=n,h=i?.errors;if(h!=null){let m=d.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Ze(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let x=!1,p=-1;if(i)for(let m=0;m<d.length;m++){let g=d[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:w,errors:C}=i,M=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||M){x=!0,p>=0?d=d.slice(0,p+1):d=[d[0]];break}}}return d.reduceRight((m,g,w)=>{let C,M=!1,R=null,O=null;i&&(C=h&&g.route.id?h[g.route.id]:void 0,R=g.route.errorElement||IS,x&&(p<0&&w===0?(Cv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,O=null):p===w&&(M=!0,O=g.route.hydrateFallbackElement||null)));let j=a.concat(d.slice(0,w+1)),k=()=>{let A;return C?A=R:M?A=O:g.route.Component?A=v.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=m,v.createElement(PS,{match:g,routeContext:{outlet:m,matches:j,isDataRoute:i!=null},children:A})};return i&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?v.createElement(VS,{location:i.location,revalidation:i.revalidation,component:R,error:C,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0},unstable_onError:l}):k()},null)}function Zh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FS(n){let a=v.useContext(pi);return Ze(a,Zh(n)),a}function YS(n){let a=v.useContext(Ac);return Ze(a,Zh(n)),a}function GS(n){let a=v.useContext(un);return Ze(a,Zh(n)),a}function Xh(n){let a=GS(n),i=a.matches[a.matches.length-1];return Ze(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function ZS(){return Xh("useRouteId")}function XS(){let n=v.useContext(Gh),a=YS("useRouteError"),i=Xh("useRouteError");return n!==void 0?n:a.errors?.[i]}function KS(){let{router:n}=FS("useNavigate"),a=Xh("useNavigate"),i=v.useRef(!1);return Sv(()=>{i.current=!0}),v.useCallback(async(s,d={})=>{xn(i.current,wv),i.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:a,...d}))},[n,a])}var O1={};function Cv(n,a,i){!a&&!O1[n]&&(O1[n]=!0,xn(!1,i))}v.memo(QS);function QS({routes:n,future:a,state:i,unstable_onError:l}){return jv(n,void 0,i,l,a)}function A1({to:n,replace:a,state:i,relative:l}){Ze(mi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=v.useContext(bn);xn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=v.useContext(un),{pathname:h}=Tt(),x=Je(),p=Yh(n,Fh(d),h,l==="path"),m=JSON.stringify(p);return v.useEffect(()=>{x(JSON.parse(m),{replace:a,state:i,relative:l})},[x,m,l,a,i]),null}function Ev(n){return _S(n.context)}function Oe(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function JS({basename:n="/",children:a=null,location:i,navigationType:l="POP",navigator:s,static:d=!1}){Ze(!mi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),x=v.useMemo(()=>({basename:h,navigator:s,static:d,future:{}}),[h,s,d]);typeof i=="string"&&(i=hi(i));let{pathname:p="/",search:m="",hash:g="",state:w=null,key:C="default"}=i,M=v.useMemo(()=>{let R=aa(p,h);return R==null?null:{location:{pathname:R,search:m,hash:g,state:w,key:C},navigationType:l}},[h,p,m,g,w,C,l]);return xn(M!=null,`<Router basename="${h}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:v.createElement(bn.Provider,{value:x},v.createElement(Wo.Provider,{children:a,value:M}))}function Mv({children:n,location:a}){return US(mh(n),a)}function mh(n,a=[]){let i=[];return v.Children.forEach(n,(l,s)=>{if(!v.isValidElement(l))return;let d=[...a,s];if(l.type===v.Fragment){i.push.apply(i,mh(l.props.children,d));return}Ze(l.type===Oe,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=mh(l.props.children,d)),i.push(h)}),i}var tc="get",nc="application/x-www-form-urlencoded";function Dc(n){return n!=null&&typeof n.tagName=="string"}function WS(n){return Dc(n)&&n.tagName.toLowerCase()==="button"}function e4(n){return Dc(n)&&n.tagName.toLowerCase()==="form"}function t4(n){return Dc(n)&&n.tagName.toLowerCase()==="input"}function n4(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function a4(n,a){return n.button===0&&(!a||a==="_self")&&!n4(n)}var ws=null;function r4(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var i4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gf(n){return n!=null&&!i4.has(n)?(xn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nc}"`),null):n}function o4(n,a){let i,l,s,d,h;if(e4(n)){let x=n.getAttribute("action");l=x?aa(x,a):null,i=n.getAttribute("method")||tc,s=gf(n.getAttribute("enctype"))||nc,d=new FormData(n)}else if(WS(n)||t4(n)&&(n.type==="submit"||n.type==="image")){let x=n.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||x.getAttribute("action");if(l=p?aa(p,a):null,i=n.getAttribute("formmethod")||x.getAttribute("method")||tc,s=gf(n.getAttribute("formenctype"))||gf(x.getAttribute("enctype"))||nc,d=new FormData(x,n),!r4()){let{name:m,type:g,value:w}=n;if(g==="image"){let C=m?`${m}.`:"";d.append(`${C}x`,"0"),d.append(`${C}y`,"0")}else m&&d.append(m,w)}}else{if(Dc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=tc,l=null,s=nc,h=n}return d&&s==="text/plain"&&(h=d,d=void 0),{action:l,method:i.toLowerCase(),encType:s,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kh(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function l4(n,a,i){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l.pathname==="/"?l.pathname=`_root.${i}`:a&&aa(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.${i}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${i}`,l}async function s4(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function c4(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function u4(n,a,i){let l=await Promise.all(n.map(async s=>{let d=a.routes[s.route.id];if(d){let h=await s4(d,i);return h.links?h.links():[]}return[]}));return p4(l.flat(1).filter(c4).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function D1(n,a,i,l,s,d){let h=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,x=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return d==="assets"?a.filter((p,m)=>h(p,m)||x(p,m)):d==="data"?a.filter((p,m)=>{let g=l.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(h(p,m)||x(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function d4(n,a,{includeHydrateFallback:i}={}){return f4(n.map(l=>{let s=a.routes[l.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function f4(n){return[...new Set(n)]}function h4(n){let a={},i=Object.keys(n).sort();for(let l of i)a[l]=n[l];return a}function p4(n,a){let i=new Set;return new Set(a),n.reduce((l,s)=>{let d=JSON.stringify(h4(s));return i.has(d)||(i.add(d),l.push({key:d,link:s})),l},[])}function kv(){let n=v.useContext(pi);return Kh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function m4(){let n=v.useContext(Ac);return Kh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Qh=v.createContext(void 0);Qh.displayName="FrameworkContext";function Tv(){let n=v.useContext(Qh);return Kh(n,"You must render this element inside a <HydratedRouter> element"),n}function g4(n,a){let i=v.useContext(Qh),[l,s]=v.useState(!1),[d,h]=v.useState(!1),{onFocus:x,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:w}=a,C=v.useRef(null);v.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let O=k=>{k.forEach(A=>{h(A.isIntersecting)})},j=new IntersectionObserver(O,{threshold:.5});return C.current&&j.observe(C.current),()=>{j.disconnect()}}},[n]),v.useEffect(()=>{if(l){let O=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(O)}}},[l]);let M=()=>{s(!0)},R=()=>{s(!1),h(!1)};return i?n!=="intent"?[d,C,{}]:[d,C,{onFocus:wo(x,M),onBlur:wo(p,R),onMouseEnter:wo(m,M),onMouseLeave:wo(g,R),onTouchStart:wo(w,M)}]:[!1,C,{}]}function wo(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function x4({page:n,...a}){let{router:i}=kv(),l=v.useMemo(()=>gv(i.routes,n,i.basename),[i.routes,n,i.basename]);return l?v.createElement(v4,{page:n,matches:l,...a}):null}function b4(n){let{manifest:a,routeModules:i}=Tv(),[l,s]=v.useState([]);return v.useEffect(()=>{let d=!1;return u4(n,a,i).then(h=>{d||s(h)}),()=>{d=!0}},[n,a,i]),l}function v4({page:n,matches:a,...i}){let l=Tt(),{manifest:s,routeModules:d}=Tv(),{basename:h}=kv(),{loaderData:x,matches:p}=m4(),m=v.useMemo(()=>D1(n,a,p,s,l,"data"),[n,a,p,s,l]),g=v.useMemo(()=>D1(n,a,p,s,l,"assets"),[n,a,p,s,l]),w=v.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let R=new Set,O=!1;if(a.forEach(k=>{let A=s.routes[k.route.id];!A||!A.hasLoader||(!m.some(D=>D.route.id===k.route.id)&&k.route.id in x&&d[k.route.id]?.shouldRevalidate||A.hasClientLoader?O=!0:R.add(k.route.id))}),R.size===0)return[];let j=l4(n,h,"data");return O&&R.size>0&&j.searchParams.set("_routes",a.filter(k=>R.has(k.route.id)).map(k=>k.route.id).join(",")),[j.pathname+j.search]},[h,x,l,s,m,a,n,d]),C=v.useMemo(()=>d4(g,s),[g,s]),M=b4(g);return v.createElement(v.Fragment,null,w.map(R=>v.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),C.map(R=>v.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),M.map(({key:R,link:O})=>v.createElement("link",{key:R,nonce:i.nonce,...O})))}function y4(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rv&&(window.__reactRouterVersion="7.8.2")}catch{}function w4({basename:n,children:a,window:i}){let l=v.useRef();l.current==null&&(l.current=lS({window:i,v5Compat:!0}));let s=l.current,[d,h]=v.useState({action:s.action,location:s.location}),x=v.useCallback(p=>{v.startTransition(()=>h(p))},[h]);return v.useLayoutEffect(()=>s.listen(x),[s,x]),v.createElement(JS,{basename:n,children:a,location:d.location,navigationType:d.action,navigator:s})}var Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ia=v.forwardRef(function({onClick:a,discover:i="render",prefetch:l="none",relative:s,reloadDocument:d,replace:h,state:x,target:p,to:m,preventScrollReset:g,viewTransition:w,...C},M){let{basename:R}=v.useContext(bn),O=typeof m=="string"&&Ov.test(m),j,k=!1;if(typeof m=="string"&&O&&(j=m,Rv))try{let N=new URL(window.location.href),Y=m.startsWith("//")?new URL(N.protocol+m):new URL(m),ne=aa(Y.pathname,R);Y.origin===N.origin&&ne!=null?m=ne+Y.search+Y.hash:k=!0}catch{xn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=zS(m,{relative:s}),[D,U,S]=g4(l,C),_=C4(m,{replace:h,state:x,target:p,preventScrollReset:g,relative:s,viewTransition:w});function z(N){a&&a(N),N.defaultPrevented||_(N)}let G=v.createElement("a",{...C,...S,href:j||A,onClick:k||d?a:z,ref:y4(M,U),target:p,"data-discover":!O&&i==="render"?"true":void 0});return D&&!O?v.createElement(v.Fragment,null,G,v.createElement(x4,{page:A})):G});ia.displayName="Link";var Av=v.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:l="",end:s=!1,style:d,to:h,viewTransition:x,children:p,...m},g){let w=el(h,{relative:m.relative}),C=Tt(),M=v.useContext(Ac),{navigator:R,basename:O}=v.useContext(bn),j=M!=null&&R4(w)&&x===!0,k=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,A=C.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(A=A.toLowerCase(),D=D?D.toLowerCase():null,k=k.toLowerCase()),D&&O&&(D=aa(D,O)||D);const U=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let S=A===k||!s&&A.startsWith(k)&&A.charAt(U)==="/",_=D!=null&&(D===k||!s&&D.startsWith(k)&&D.charAt(k.length)==="/"),z={isActive:S,isPending:_,isTransitioning:j},G=S?a:void 0,N;typeof l=="function"?N=l(z):N=[l,S?"active":null,_?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Y=typeof d=="function"?d(z):d;return v.createElement(ia,{...m,"aria-current":G,className:N,ref:g,style:Y,to:h,viewTransition:x},typeof p=="function"?p(z):p)});Av.displayName="NavLink";var S4=v.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:l,replace:s,state:d,method:h=tc,action:x,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:w,...C},M)=>{let R=k4(),O=T4(x,{relative:m}),j=h.toLowerCase()==="get"?"get":"post",k=typeof x=="string"&&Ov.test(x),A=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,S=U?.getAttribute("formmethod")||h;R(U||D.currentTarget,{fetcherKey:a,method:S,navigate:i,replace:s,state:d,relative:m,preventScrollReset:g,viewTransition:w})};return v.createElement("form",{ref:M,method:j,action:O,onSubmit:l?p:A,...C,"data-discover":!k&&n==="render"?"true":void 0})});S4.displayName="Form";function j4(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dv(n){let a=v.useContext(pi);return Ze(a,j4(n)),a}function C4(n,{target:a,replace:i,state:l,preventScrollReset:s,relative:d,viewTransition:h}={}){let x=Je(),p=Tt(),m=el(n,{relative:d});return v.useCallback(g=>{if(a4(g,a)){g.preventDefault();let w=i!==void 0?i:Fo(p)===Fo(m);x(n,{replace:w,state:l,preventScrollReset:s,relative:d,viewTransition:h})}},[p,x,m,i,l,a,n,s,d,h])}var E4=0,M4=()=>`__${String(++E4)}__`;function k4(){let{router:n}=Dv("useSubmit"),{basename:a}=v.useContext(bn),i=ZS();return v.useCallback(async(l,s={})=>{let{action:d,method:h,encType:x,formData:p,body:m}=o4(l,a);if(s.navigate===!1){let g=s.fetcherKey||M4();await n.fetch(g,i,s.action||d,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||h,formEncType:s.encType||x,flushSync:s.flushSync})}else await n.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||h,formEncType:s.encType||x,replace:s.replace,state:s.state,fromRouteId:i,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,a,i])}function T4(n,{relative:a}={}){let{basename:i}=v.useContext(bn),l=v.useContext(un);Ze(l,"useFormAction must be used inside a RouteContext");let[s]=l.matches.slice(-1),d={...el(n||".",{relative:a})},h=Tt();if(n==null){d.search=h.search;let x=new URLSearchParams(d.search),p=x.getAll("index");if(p.some(g=>g==="")){x.delete("index"),p.filter(w=>w).forEach(w=>x.append("index",w));let g=x.toString();d.search=g?`?${g}`:""}}return(!n||n===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:ta([i,d.pathname])),Fo(d)}function R4(n,{relative:a}={}){let i=v.useContext(yv);Ze(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Dv("useViewTransitionState"),s=el(n,{relative:a});if(!i.isTransitioning)return!1;let d=aa(i.currentLocation.pathname,l)||i.currentLocation.pathname,h=aa(i.nextLocation.pathname,l)||i.nextLocation.pathname;return mc(s.pathname,h)!=null||mc(s.pathname,d)!=null}var Nv=mv();const zv=pv(Nv);class Ho extends Error{}Ho.prototype.name="InvalidTokenError";function O4(n){return decodeURIComponent(atob(n).replace(/(.)/g,(a,i)=>{let l=i.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}function A4(n){let a=n.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return O4(a)}catch{return atob(a)}}function Ss(n,a){if(typeof n!="string")throw new Ho("Invalid token specified: must be a string");a||(a={});const i=a.header===!0?0:1,l=n.split(".")[i];if(typeof l!="string")throw new Ho(`Invalid token specified: missing part #${i+1}`);let s;try{s=A4(l)}catch(d){throw new Ho(`Invalid token specified: invalid base64 for part #${i+1} (${d.message})`)}try{return JSON.parse(s)}catch(d){throw new Ho(`Invalid token specified: invalid json for part #${i+1} (${d.message})`)}}const Lv=v.createContext(null),D4=({children:n})=>{const[a,i]=v.useState(null),[l,s]=v.useState(!1),[d,h]=v.useState(!0),x=Je(),p=async k=>{try{const A=await fetch("http://localhost:8080/api/auth/validate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:k})});return A.ok?(await A.json()).valid:!1}catch(A){return console.error("토큰 검증 중 오류:",A),!1}},m=k=>{try{const A=Ss(k),D=Date.now()/1e3;return A.exp<D}catch(A){return console.error("토큰 디코딩 오류:",A),!0}},g=()=>{localStorage.removeItem("user"),localStorage.removeItem("accessToken"),i(null),console.log("토큰이 만료되어 자동 로그아웃되었습니다.")};v.useEffect(()=>{(async()=>{const A=localStorage.getItem("user"),D=localStorage.getItem("accessToken");if(A&&D){if(m(D)){g(),h(!1);return}if(await p(D)){const S=JSON.parse(A);S.token=D,i(S)}else g()}h(!1)})()},[]),v.useEffect(()=>{const A=setInterval(()=>{const D=localStorage.getItem("accessToken");D&&m(D)&&(g(),alert("세션이 만료되었습니다. 다시 로그인해주세요."))},6e4);return()=>clearInterval(A)},[]);const j={user:a,login:async(k,A)=>{s(!0);try{const D=await fetch("http://localhost:8080/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:k,password:A})});if(D.ok){const S=(await D.json()).accessToken;localStorage.setItem("accessToken",S);const _=Ss(S),z={userId:_.sub,username:_.username,role:_.role,token:S};return localStorage.setItem("user",JSON.stringify(z)),i(z),x("/home"),!0}else{const U=await D.text();return alert(U||"아이디 또는 비밀번호가 일치하지 않습니다."),!1}}catch(D){return console.error("로그인 중 오류 발생:",D),alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."),!1}finally{s(!1)}},register:async(k,A,D,U,S)=>{s(!0);try{const _=await fetch("http://localhost:8080/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:k,password:A,userName:D,birthDate:U,phoneNumber:S})});if(_.ok){const G=(await _.json()).accessToken;localStorage.setItem("accessToken",G);const N=Ss(G),Y={userId:N.sub,username:N.username,role:N.role,token:G};return localStorage.setItem("user",JSON.stringify(Y)),i(Y),Y}else{const z=await _.text();return alert(z||"회원가입 중 오류가 발생했습니다."),null}}catch(_){return console.error("회원가입 중 오류 발생:",_),alert("회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."),!1}finally{s(!1)}},checkUserId:async k=>{try{const A=await fetch("http://localhost:8080/api/auth/check-userid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:k})});if(A.ok)return await A.json();throw new Error("ID 중복 체크 실패")}catch(A){throw console.error("ID 중복 체크 중 오류 발생:",A),A}},logout:()=>{x("/"),setTimeout(()=>{localStorage.removeItem("user"),localStorage.removeItem("accessToken"),i(null)},0)},loginWithToken:k=>{try{localStorage.setItem("accessToken",k);const A=Ss(k),D={userId:A.sub,username:A.username,role:A.role,token:k};localStorage.setItem("user",JSON.stringify(D)),i(D),x("/home"),alert(`${D.username}님, 환영합니다!`)}catch(A){console.error("토큰 처리 중 오류 발생:",A),alert("로그인 처리에 실패했습니다.")}},loading:l,authLoading:d,autoLogout:g};return c.jsx(Lv.Provider,{value:j,children:n})},St=()=>v.useContext(Lv);class N4{constructor(){this.socket=null,this.callbacks=new Map,this.isConnected=!1,this.userId=null,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.reconnectDelay=3e3}connect(a){if(this.isConnected&&this.userId===a){console.log("이미 연결되어 있습니다.");return}this.userId=a,this.disconnect();try{this.socket=new WebSocket(`ws://localhost:8080/ws/notifications/${a}`),this.socket.onopen=()=>{console.log("WebSocket 연결 성공:",a),this.isConnected=!0,this.reconnectAttempts=0,this.notifyCallbacks("connection",{type:"CONNECTED"})},this.socket.onmessage=i=>{try{const l=JSON.parse(i.data);console.log("WebSocket 메시지 수신:",l),this.handleMessage(l)}catch(l){console.error("WebSocket 메시지 파싱 오류:",l)}},this.socket.onclose=i=>{console.log("WebSocket 연결 종료:",i.code,i.reason),this.isConnected=!1,this.notifyCallbacks("connection",{type:"DISCONNECTED"}),this.reconnectAttempts<this.maxReconnectAttempts&&this.scheduleReconnect()},this.socket.onerror=i=>{console.error("WebSocket 오류:",i),this.notifyCallbacks("error",{error:i})}}catch(i){console.error("WebSocket 연결 실패:",i),this.scheduleReconnect()}}disconnect(){this.socket&&(this.socket.close(),this.socket=null),this.isConnected=!1,this.userId=null,this.reconnectAttempts=0}handleMessage(a){switch(a.type){case"CONNECTION_SUCCESS":this.notifyCallbacks("connection",a);break;case"NOTIFICATION_UPDATE":this.notifyCallbacks("notification",a.data);break;case"UNREAD_COUNT_UPDATE":this.notifyCallbacks("unreadCount",a.unreadCount);break;default:console.log("알 수 없는 메시지 타입:",a.type)}}subscribe(a,i){return this.callbacks.has(a)||this.callbacks.set(a,new Set),this.callbacks.get(a).add(i),()=>{const l=this.callbacks.get(a);l&&l.delete(i)}}notifyCallbacks(a,i){const l=this.callbacks.get(a);l&&l.forEach(s=>{try{s(i)}catch(d){console.error("콜백 실행 오류:",d)}})}scheduleReconnect(){if(this.reconnectAttempts>=this.maxReconnectAttempts){console.log("최대 재연결 시도 횟수 초과");return}this.reconnectAttempts++;const a=this.reconnectDelay*this.reconnectAttempts;console.log(`${a}ms 후 재연결 시도... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`),setTimeout(()=>{!this.isConnected&&this.userId&&this.connect(this.userId)},a)}getConnectionStatus(){return{isConnected:this.isConnected,userId:this.userId,reconnectAttempts:this.reconnectAttempts}}reconnect(){this.userId&&(this.reconnectAttempts=0,this.connect(this.userId))}}const So=new N4,Jh=()=>{const{user:n}=St(),a=v.useRef(new Map),i=v.useCallback(()=>{n?.id&&So.connect(n.id)},[n?.id]),l=v.useCallback(()=>{So.disconnect()},[]),s=v.useCallback((x,p)=>{const m=So.subscribe(x,p);return a.current.has(x)||a.current.set(x,new Set),a.current.get(x).add(m),m},[]),d=v.useCallback(()=>So.getConnectionStatus(),[]),h=v.useCallback(()=>{So.reconnect()},[]);return v.useEffect(()=>(n?.id?i():l(),()=>{a.current.forEach(x=>{x.forEach(p=>p())}),a.current.clear()}),[n?.id,i,l]),v.useEffect(()=>{const x=()=>{l()},p=()=>{document.visibilityState==="visible"&&n?.id&&(d().isConnected||setTimeout(()=>i(),1e3))};return window.addEventListener("beforeunload",x),document.addEventListener("visibilitychange",p),()=>{window.removeEventListener("beforeunload",x),document.removeEventListener("visibilitychange",p)}},[n?.id,i,l,d]),{connect:i,disconnect:l,subscribe:s,getConnectionStatus:d,reconnect:h}};var Bt=function(){return Bt=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++){i=arguments[l];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])}return a},Bt.apply(this,arguments)};function Yo(n,a,i){if(i||arguments.length===2)for(var l=0,s=a.length,d;l<s;l++)(d||!(l in a))&&(d||(d=Array.prototype.slice.call(a,0,l)),d[l]=a[l]);return n.concat(d||Array.prototype.slice.call(a))}var Ye="-ms-",Po="-moz-",Be="-webkit-",Bv="comm",Nc="rule",Wh="decl",z4="@import",_v="@keyframes",L4="@layer",$v=Math.abs,ep=String.fromCharCode,gh=Object.assign;function B4(n,a){return xt(n,0)^45?(((a<<2^xt(n,0))<<2^xt(n,1))<<2^xt(n,2))<<2^xt(n,3):0}function Uv(n){return n.trim()}function Wn(n,a){return(n=a.exec(n))?n[0]:n}function Se(n,a,i){return n.replace(a,i)}function ac(n,a,i){return n.indexOf(a,i)}function xt(n,a){return n.charCodeAt(a)|0}function li(n,a,i){return n.slice(a,i)}function On(n){return n.length}function Hv(n){return n.length}function Io(n,a){return a.push(n),n}function _4(n,a){return n.map(a).join("")}function N1(n,a){return n.filter(function(i){return!Wn(i,a)})}var zc=1,si=1,Iv=0,cn=0,lt=0,gi="";function Lc(n,a,i,l,s,d,h,x){return{value:n,root:a,parent:i,type:l,props:s,children:d,line:zc,column:si,length:h,return:"",siblings:x}}function Aa(n,a){return gh(Lc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function Jr(n){for(;n.root;)n=Aa(n.root,{children:[n]});Io(n,n.siblings)}function $4(){return lt}function U4(){return lt=cn>0?xt(gi,--cn):0,si--,lt===10&&(si=1,zc--),lt}function pn(){return lt=cn<Iv?xt(gi,cn++):0,si++,lt===10&&(si=1,zc++),lt}function lr(){return xt(gi,cn)}function rc(){return cn}function Bc(n,a){return li(gi,n,a)}function xh(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H4(n){return zc=si=1,Iv=On(gi=n),cn=0,[]}function I4(n){return gi="",n}function xf(n){return Uv(Bc(cn-1,bh(n===91?n+2:n===40?n+1:n)))}function V4(n){for(;(lt=lr())&&lt<33;)pn();return xh(n)>2||xh(lt)>3?"":" "}function P4(n,a){for(;--a&&pn()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return Bc(n,rc()+(a<6&&lr()==32&&pn()==32))}function bh(n){for(;pn();)switch(lt){case n:return cn;case 34:case 39:n!==34&&n!==39&&bh(lt);break;case 40:n===41&&bh(n);break;case 92:pn();break}return cn}function q4(n,a){for(;pn()&&n+lt!==57;)if(n+lt===84&&lr()===47)break;return"/*"+Bc(a,cn-1)+"*"+ep(n===47?n:pn())}function F4(n){for(;!xh(lr());)pn();return Bc(n,cn)}function Y4(n){return I4(ic("",null,null,null,[""],n=H4(n),0,[0],n))}function ic(n,a,i,l,s,d,h,x,p){for(var m=0,g=0,w=h,C=0,M=0,R=0,O=1,j=1,k=1,A=0,D="",U=s,S=d,_=l,z=D;j;)switch(R=A,A=pn()){case 40:if(R!=108&&xt(z,w-1)==58){ac(z+=Se(xf(A),"&","&\f"),"&\f",$v(m?x[m-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:z+=xf(A);break;case 9:case 10:case 13:case 32:z+=V4(R);break;case 92:z+=P4(rc()-1,7);continue;case 47:switch(lr()){case 42:case 47:Io(G4(q4(pn(),rc()),a,i,p),p);break;default:z+="/"}break;case 123*O:x[m++]=On(z)*k;case 125*O:case 59:case 0:switch(A){case 0:case 125:j=0;case 59+g:k==-1&&(z=Se(z,/\f/g,"")),M>0&&On(z)-w&&Io(M>32?L1(z+";",l,i,w-1,p):L1(Se(z," ","")+";",l,i,w-2,p),p);break;case 59:z+=";";default:if(Io(_=z1(z,a,i,m,g,s,x,D,U=[],S=[],w,d),d),A===123)if(g===0)ic(z,a,_,_,U,d,w,x,S);else switch(C===99&&xt(z,3)===110?100:C){case 100:case 108:case 109:case 115:ic(n,_,_,l&&Io(z1(n,_,_,0,0,s,x,D,s,U=[],w,S),S),s,S,w,x,l?U:S);break;default:ic(z,_,_,_,[""],S,0,x,S)}}m=g=M=0,O=k=1,D=z="",w=h;break;case 58:w=1+On(z),M=R;default:if(O<1){if(A==123)--O;else if(A==125&&O++==0&&U4()==125)continue}switch(z+=ep(A),A*O){case 38:k=g>0?1:(z+="\f",-1);break;case 44:x[m++]=(On(z)-1)*k,k=1;break;case 64:lr()===45&&(z+=xf(pn())),C=lr(),g=w=On(D=z+=F4(rc())),A++;break;case 45:R===45&&On(z)==2&&(O=0)}}return d}function z1(n,a,i,l,s,d,h,x,p,m,g,w){for(var C=s-1,M=s===0?d:[""],R=Hv(M),O=0,j=0,k=0;O<l;++O)for(var A=0,D=li(n,C+1,C=$v(j=h[O])),U=n;A<R;++A)(U=Uv(j>0?M[A]+" "+D:Se(D,/&\f/g,M[A])))&&(p[k++]=U);return Lc(n,a,i,s===0?Nc:x,p,m,g,w)}function G4(n,a,i,l){return Lc(n,a,i,Bv,ep($4()),li(n,2,-2),0,l)}function L1(n,a,i,l,s){return Lc(n,a,i,Wh,li(n,0,l),li(n,l+1,-1),l,s)}function Vv(n,a,i){switch(B4(n,a)){case 5103:return Be+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Be+n+n;case 4789:return Po+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+n+Po+n+Ye+n+n;case 5936:switch(xt(n,a+11)){case 114:return Be+n+Ye+Se(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Be+n+Ye+Se(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Be+n+Ye+Se(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Be+n+Ye+n+n;case 6165:return Be+n+Ye+"flex-"+n+n;case 5187:return Be+n+Se(n,/(\w+).+(:[^]+)/,Be+"box-$1$2"+Ye+"flex-$1$2")+n;case 5443:return Be+n+Ye+"flex-item-"+Se(n,/flex-|-self/g,"")+(Wn(n,/flex-|baseline/)?"":Ye+"grid-row-"+Se(n,/flex-|-self/g,""))+n;case 4675:return Be+n+Ye+"flex-line-pack"+Se(n,/align-content|flex-|-self/g,"")+n;case 5548:return Be+n+Ye+Se(n,"shrink","negative")+n;case 5292:return Be+n+Ye+Se(n,"basis","preferred-size")+n;case 6060:return Be+"box-"+Se(n,"-grow","")+Be+n+Ye+Se(n,"grow","positive")+n;case 4554:return Be+Se(n,/([^-])(transform)/g,"$1"+Be+"$2")+n;case 6187:return Se(Se(Se(n,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),n,"")+n;case 5495:case 3959:return Se(n,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return Se(Se(n,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Be+n+n;case 4200:if(!Wn(n,/flex-|baseline/))return Ye+"grid-column-align"+li(n,a)+n;break;case 2592:case 3360:return Ye+Se(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(l,s){return a=s,Wn(l.props,/grid-\w+-end/)})?~ac(n+(i=i[a].value),"span",0)?n:Ye+Se(n,"-start","")+n+Ye+"grid-row-span:"+(~ac(i,"span",0)?Wn(i,/\d+/):+Wn(i,/\d+/)-+Wn(n,/\d+/))+";":Ye+Se(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(l){return Wn(l.props,/grid-\w+-start/)})?n:Ye+Se(Se(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Se(n,/(.+)-inline(.+)/,Be+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(n)-1-a>6)switch(xt(n,a+1)){case 109:if(xt(n,a+4)!==45)break;case 102:return Se(n,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+Po+(xt(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~ac(n,"stretch",0)?Vv(Se(n,"stretch","fill-available"),a,i)+n:n}break;case 5152:case 5920:return Se(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,s,d,h,x,p,m){return Ye+s+":"+d+m+(h?Ye+s+"-span:"+(x?p:+p-+d)+m:"")+n});case 4949:if(xt(n,a+6)===121)return Se(n,":",":"+Be)+n;break;case 6444:switch(xt(n,xt(n,14)===45?18:11)){case 120:return Se(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(xt(n,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+Ye+"$2box$3")+n;case 100:return Se(n,":",":"+Ye)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(n,"scroll-","scroll-snap-")+n}return n}function gc(n,a){for(var i="",l=0;l<n.length;l++)i+=a(n[l],l,n,a)||"";return i}function Z4(n,a,i,l){switch(n.type){case L4:if(n.children.length)break;case z4:case Wh:return n.return=n.return||n.value;case Bv:return"";case _v:return n.return=n.value+"{"+gc(n.children,l)+"}";case Nc:if(!On(n.value=n.props.join(",")))return""}return On(i=gc(n.children,l))?n.return=n.value+"{"+i+"}":""}function X4(n){var a=Hv(n);return function(i,l,s,d){for(var h="",x=0;x<a;x++)h+=n[x](i,l,s,d)||"";return h}}function K4(n){return function(a){a.root||(a=a.return)&&n(a)}}function Q4(n,a,i,l){if(n.length>-1&&!n.return)switch(n.type){case Wh:n.return=Vv(n.value,n.length,i);return;case _v:return gc([Aa(n,{value:Se(n.value,"@","@"+Be)})],l);case Nc:if(n.length)return _4(i=n.props,function(s){switch(Wn(s,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(Aa(n,{props:[Se(s,/:(read-\w+)/,":"+Po+"$1")]})),Jr(Aa(n,{props:[s]})),gh(n,{props:N1(i,l)});break;case"::placeholder":Jr(Aa(n,{props:[Se(s,/:(plac\w+)/,":"+Be+"input-$1")]})),Jr(Aa(n,{props:[Se(s,/:(plac\w+)/,":"+Po+"$1")]})),Jr(Aa(n,{props:[Se(s,/:(plac\w+)/,Ye+"input-$1")]})),Jr(Aa(n,{props:[s]})),gh(n,{props:N1(i,l)});break}return""})}}var J4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},ci=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",Pv="active",qv="data-styled-version",_c="6.1.19",tp=`/*!sc*/
`,xc=typeof window<"u"&&typeof document<"u",W4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),$c=Object.freeze([]),ui=Object.freeze({});function e6(n,a,i){return i===void 0&&(i=ui),n.theme!==i.theme&&n.theme||a||i.theme}var Fv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),t6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n6=/(^-|-$)/g;function B1(n){return n.replace(t6,"-").replace(n6,"")}var a6=/(a)(d)/gi,js=52,_1=function(n){return String.fromCharCode(n+(n>25?39:97))};function vh(n){var a,i="";for(a=Math.abs(n);a>js;a=a/js|0)i=_1(a%js)+i;return(_1(a%js)+i).replace(a6,"$1-$2")}var bf,Yv=5381,ni=function(n,a){for(var i=a.length;i;)n=33*n^a.charCodeAt(--i);return n},Gv=function(n){return ni(Yv,n)};function Zv(n){return vh(Gv(n)>>>0)}function r6(n){return n.displayName||n.name||"Component"}function vf(n){return typeof n=="string"&&!0}var Xv=typeof Symbol=="function"&&Symbol.for,Kv=Xv?Symbol.for("react.memo"):60115,i6=Xv?Symbol.for("react.forward_ref"):60112,o6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s6=((bf={})[i6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bf[Kv]=Qv,bf);function $1(n){return("type"in(a=n)&&a.type.$$typeof)===Kv?Qv:"$$typeof"in n?s6[n.$$typeof]:o6;var a}var c6=Object.defineProperty,u6=Object.getOwnPropertyNames,U1=Object.getOwnPropertySymbols,d6=Object.getOwnPropertyDescriptor,f6=Object.getPrototypeOf,H1=Object.prototype;function Jv(n,a,i){if(typeof a!="string"){if(H1){var l=f6(a);l&&l!==H1&&Jv(n,l,i)}var s=u6(a);U1&&(s=s.concat(U1(a)));for(var d=$1(n),h=$1(a),x=0;x<s.length;++x){var p=s[x];if(!(p in l6||i&&i[p]||h&&p in h||d&&p in d)){var m=d6(a,p);try{c6(n,p,m)}catch{}}}}return n}function di(n){return typeof n=="function"}function np(n){return typeof n=="object"&&"styledComponentId"in n}function ir(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function yh(n,a){if(n.length===0)return"";for(var i=n[0],l=1;l<n.length;l++)i+=n[l];return i}function Go(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function wh(n,a,i){if(i===void 0&&(i=!1),!i&&!Go(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)n[l]=wh(n[l],a[l]);else if(Go(a))for(var l in a)n[l]=wh(n[l],a[l]);return n}function ap(n,a){Object.defineProperty(n,"toString",{value:a})}function tl(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var h6=(function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var i=0,l=0;l<a;l++)i+=this.groupSizes[l];return i},n.prototype.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var l=this.groupSizes,s=l.length,d=s;a>=d;)if((d<<=1)<0)throw tl(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var h=s;h<d;h++)this.groupSizes[h]=0}for(var x=this.indexOfGroup(a+1),p=(h=0,i.length);h<p;h++)this.tag.insertRule(x,i[h])&&(this.groupSizes[a]++,x++)},n.prototype.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],l=this.indexOfGroup(a),s=l+i;this.groupSizes[a]=0;for(var d=l;d<s;d++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var l=this.groupSizes[a],s=this.indexOfGroup(a),d=s+l,h=s;h<d;h++)i+="".concat(this.tag.getRule(h)).concat(tp);return i},n})(),oc=new Map,bc=new Map,lc=1,Cs=function(n){if(oc.has(n))return oc.get(n);for(;bc.has(lc);)lc++;var a=lc++;return oc.set(n,a),bc.set(a,n),a},p6=function(n,a){lc=a+1,oc.set(n,a),bc.set(a,n)},m6="style[".concat(ci,"][").concat(qv,'="').concat(_c,'"]'),g6=new RegExp("^".concat(ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),x6=function(n,a,i){for(var l,s=i.split(","),d=0,h=s.length;d<h;d++)(l=s[d])&&n.registerName(a,l)},b6=function(n,a){for(var i,l=((i=a.textContent)!==null&&i!==void 0?i:"").split(tp),s=[],d=0,h=l.length;d<h;d++){var x=l[d].trim();if(x){var p=x.match(g6);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(p6(g,m),x6(n,g,p[3]),n.getTag().insertRules(m,s)),s.length=0}else s.push(x)}}},I1=function(n){for(var a=document.querySelectorAll(m6),i=0,l=a.length;i<l;i++){var s=a[i];s&&s.getAttribute(ci)!==Pv&&(b6(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function v6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wv=function(n){var a=document.head,i=n||a,l=document.createElement("style"),s=(function(x){var p=Array.from(x.querySelectorAll("style[".concat(ci,"]")));return p[p.length-1]})(i),d=s!==void 0?s.nextSibling:null;l.setAttribute(ci,Pv),l.setAttribute(qv,_c);var h=v6();return h&&l.setAttribute("nonce",h),i.insertBefore(l,d),l},y6=(function(){function n(a){this.element=Wv(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,s=0,d=l.length;s<d;s++){var h=l[s];if(h.ownerNode===i)return h}throw tl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var i=this.sheet.cssRules[a];return i&&i.cssText?i.cssText:""},n})(),w6=(function(){function n(a){this.element=Wv(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,i){if(a<=this.length&&a>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n})(),S6=(function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n})(),V1=xc,j6={isServer:!xc,useCSSOMInjection:!W4},ey=(function(){function n(a,i,l){a===void 0&&(a=ui),i===void 0&&(i={});var s=this;this.options=Bt(Bt({},j6),a),this.gs=i,this.names=new Map(l),this.server=!!a.isServer,!this.server&&xc&&V1&&(V1=!1,I1(this)),ap(this,function(){return(function(d){for(var h=d.getTag(),x=h.length,p="",m=function(w){var C=(function(k){return bc.get(k)})(w);if(C===void 0)return"continue";var M=d.names.get(C),R=h.getGroup(w);if(M===void 0||!M.size||R.length===0)return"continue";var O="".concat(ci,".g").concat(w,'[id="').concat(C,'"]'),j="";M!==void 0&&M.forEach(function(k){k.length>0&&(j+="".concat(k,","))}),p+="".concat(R).concat(O,'{content:"').concat(j,'"}').concat(tp)},g=0;g<x;g++)m(g);return p})(s)})}return n.registerId=function(a){return Cs(a)},n.prototype.rehydrate=function(){!this.server&&xc&&I1(this)},n.prototype.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new n(Bt(Bt({},this.options),a),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(i){var l=i.useCSSOMInjection,s=i.target;return i.isServer?new S6(s):l?new y6(s):new w6(s)})(this.options),new h6(a)));var a},n.prototype.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},n.prototype.registerName=function(a,i){if(Cs(a),this.names.has(a))this.names.get(a).add(i);else{var l=new Set;l.add(i),this.names.set(a,l)}},n.prototype.insertRules=function(a,i,l){this.registerName(a,i),this.getTag().insertRules(Cs(a),l)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(Cs(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n})(),C6=/&/g,E6=/^\s*\/\/.*$/gm;function ty(n,a){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(a," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(a," ")),i.props=i.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=ty(i.children,a)),i})}function M6(n){var a,i,l,s=ui,d=s.options,h=d===void 0?ui:d,x=s.plugins,p=x===void 0?$c:x,m=function(C,M,R){return R.startsWith(i)&&R.endsWith(i)&&R.replaceAll(i,"").length>0?".".concat(a):C},g=p.slice();g.push(function(C){C.type===Nc&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(C6,i).replace(l,m))}),h.prefix&&g.push(Q4),g.push(Z4);var w=function(C,M,R,O){M===void 0&&(M=""),R===void 0&&(R=""),O===void 0&&(O="&"),a=O,i=M,l=new RegExp("\\".concat(i,"\\b"),"g");var j=C.replace(E6,""),k=Y4(R||M?"".concat(R," ").concat(M," { ").concat(j," }"):j);h.namespace&&(k=ty(k,h.namespace));var A=[];return gc(k,X4(g.concat(K4(function(D){return A.push(D)})))),A};return w.hash=p.length?p.reduce(function(C,M){return M.name||tl(15),ni(C,M.name)},Yv).toString():"",w}var k6=new ey,Sh=M6(),ny=ct.createContext({shouldForwardProp:void 0,styleSheet:k6,stylis:Sh});ny.Consumer;ct.createContext(void 0);function P1(){return v.useContext(ny)}var ay=(function(){function n(a,i){var l=this;this.inject=function(s,d){d===void 0&&(d=Sh);var h=l.name+d.hash;s.hasNameForId(l.id,h)||s.insertRules(l.id,h,d(l.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=i,ap(this,function(){throw tl(12,String(l.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=Sh),this.name+a.hash},n})(),T6=function(n){return n>="A"&&n<="Z"};function q1(n){for(var a="",i=0;i<n.length;i++){var l=n[i];if(i===1&&l==="-"&&n[0]==="-")return n;T6(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var ry=function(n){return n==null||n===!1||n===""},iy=function(n){var a,i,l=[];for(var s in n){var d=n[s];n.hasOwnProperty(s)&&!ry(d)&&(Array.isArray(d)&&d.isCss||di(d)?l.push("".concat(q1(s),":"),d,";"):Go(d)?l.push.apply(l,Yo(Yo(["".concat(s," {")],iy(d),!1),["}"],!1)):l.push("".concat(q1(s),": ").concat((a=s,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||a in J4||a.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function sr(n,a,i,l){if(ry(n))return[];if(np(n))return[".".concat(n.styledComponentId)];if(di(n)){if(!di(d=n)||d.prototype&&d.prototype.isReactComponent||!a)return[n];var s=n(a);return sr(s,a,i,l)}var d;return n instanceof ay?i?(n.inject(i,l),[n.getName(l)]):[n]:Go(n)?iy(n):Array.isArray(n)?Array.prototype.concat.apply($c,n.map(function(h){return sr(h,a,i,l)})):[n.toString()]}function R6(n){for(var a=0;a<n.length;a+=1){var i=n[a];if(di(i)&&!np(i))return!1}return!0}var O6=Gv(_c),A6=(function(){function n(a,i,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&R6(a),this.componentId=i,this.baseHash=ni(O6,i),this.baseStyle=l,ey.registerId(i)}return n.prototype.generateAndInjectStyles=function(a,i,l){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))s=ir(s,this.staticRulesId);else{var d=yh(sr(this.rules,a,i,l)),h=vh(ni(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,h)){var x=l(d,".".concat(h),void 0,this.componentId);i.insertRules(this.componentId,h,x)}s=ir(s,h),this.staticRulesId=h}else{for(var p=ni(this.baseHash,l.hash),m="",g=0;g<this.rules.length;g++){var w=this.rules[g];if(typeof w=="string")m+=w;else if(w){var C=yh(sr(w,a,i,l));p=ni(p,C+g),m+=C}}if(m){var M=vh(p>>>0);i.hasNameForId(this.componentId,M)||i.insertRules(this.componentId,M,l(m,".".concat(M),void 0,this.componentId)),s=ir(s,M)}}return s},n})(),oy=ct.createContext(void 0);oy.Consumer;var yf={};function D6(n,a,i){var l=np(n),s=n,d=!vf(n),h=a.attrs,x=h===void 0?$c:h,p=a.componentId,m=p===void 0?(function(U,S){var _=typeof U!="string"?"sc":B1(U);yf[_]=(yf[_]||0)+1;var z="".concat(_,"-").concat(Zv(_c+_+yf[_]));return S?"".concat(S,"-").concat(z):z})(a.displayName,a.parentComponentId):p,g=a.displayName,w=g===void 0?(function(U){return vf(U)?"styled.".concat(U):"Styled(".concat(r6(U),")")})(n):g,C=a.displayName&&a.componentId?"".concat(B1(a.displayName),"-").concat(a.componentId):a.componentId||m,M=l&&s.attrs?s.attrs.concat(x).filter(Boolean):x,R=a.shouldForwardProp;if(l&&s.shouldForwardProp){var O=s.shouldForwardProp;if(a.shouldForwardProp){var j=a.shouldForwardProp;R=function(U,S){return O(U,S)&&j(U,S)}}else R=O}var k=new A6(i,C,l?s.componentStyle:void 0);function A(U,S){return(function(_,z,G){var N=_.attrs,Y=_.componentStyle,ne=_.defaultProps,ie=_.foldedComponentIds,ue=_.styledComponentId,Te=_.target,Z=ct.useContext(oy),T=P1(),I=_.shouldForwardProp||T.shouldForwardProp,J=e6(z,Z,ne)||ui,oe=(function(xe,le,je){for(var he,Xe=Bt(Bt({},le),{className:void 0,theme:je}),zn=0;zn<xe.length;zn+=1){var Jt=di(he=xe[zn])?he(Xe):he;for(var Rt in Jt)Xe[Rt]=Rt==="className"?ir(Xe[Rt],Jt[Rt]):Rt==="style"?Bt(Bt({},Xe[Rt]),Jt[Rt]):Jt[Rt]}return le.className&&(Xe.className=ir(Xe.className,le.className)),Xe})(N,z,J),B=oe.as||Te,K={};for(var te in oe)oe[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&oe.theme===J||(te==="forwardedAs"?K.as=oe.forwardedAs:I&&!I(te,B)||(K[te]=oe[te]));var re=(function(xe,le){var je=P1(),he=xe.generateAndInjectStyles(le,je.styleSheet,je.stylis);return he})(Y,oe),ae=ir(ie,ue);return re&&(ae+=" "+re),oe.className&&(ae+=" "+oe.className),K[vf(B)&&!Fv.has(B)?"class":"className"]=ae,G&&(K.ref=G),v.createElement(B,K)})(D,U,S)}A.displayName=w;var D=ct.forwardRef(A);return D.attrs=M,D.componentStyle=k,D.displayName=w,D.shouldForwardProp=R,D.foldedComponentIds=l?ir(s.foldedComponentIds,s.styledComponentId):"",D.styledComponentId=C,D.target=l?s.target:n,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=l?(function(S){for(var _=[],z=1;z<arguments.length;z++)_[z-1]=arguments[z];for(var G=0,N=_;G<N.length;G++)wh(S,N[G],!0);return S})({},s.defaultProps,U):U}}),ap(D,function(){return".".concat(D.styledComponentId)}),d&&Jv(D,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function F1(n,a){for(var i=[n[0]],l=0,s=a.length;l<s;l+=1)i.push(a[l],n[l+1]);return i}var Y1=function(n){return Object.assign(n,{isCss:!0})};function mn(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];if(di(n)||Go(n))return Y1(sr(F1($c,Yo([n],a,!0))));var l=n;return a.length===0&&l.length===1&&typeof l[0]=="string"?sr(l):Y1(sr(F1(l,a)))}function jh(n,a,i){if(i===void 0&&(i=ui),!a)throw tl(1,a);var l=function(s){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return n(a,i,mn.apply(void 0,Yo([s],d,!1)))};return l.attrs=function(s){return jh(n,a,Bt(Bt({},i),{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},l.withConfig=function(s){return jh(n,a,Bt(Bt({},i),s))},l}var ly=function(n){return jh(D6,n)},b=ly;Fv.forEach(function(n){b[n]=ly(n)});function N6(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var l=yh(mn.apply(void 0,Yo([n],a,!1))),s=Zv(l);return new ay(s,l)}const z6=""+new URL("aston-martin-db12-CM9NFlrP.png",import.meta.url).href;function sy(n,a){return function(){return n.apply(a,arguments)}}const{toString:L6}=Object.prototype,{getPrototypeOf:rp}=Object,{iterator:Uc,toStringTag:cy}=Symbol,Hc=(n=>a=>{const i=L6.call(a);return n[i]||(n[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),vn=n=>(n=n.toLowerCase(),a=>Hc(a)===n),Ic=n=>a=>typeof a===n,{isArray:xi}=Array,Zo=Ic("undefined");function nl(n){return n!==null&&!Zo(n)&&n.constructor!==null&&!Zo(n.constructor)&&_t(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const uy=vn("ArrayBuffer");function B6(n){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(n):a=n&&n.buffer&&uy(n.buffer),a}const _6=Ic("string"),_t=Ic("function"),dy=Ic("number"),al=n=>n!==null&&typeof n=="object",$6=n=>n===!0||n===!1,sc=n=>{if(Hc(n)!=="object")return!1;const a=rp(n);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(cy in n)&&!(Uc in n)},U6=n=>{if(!al(n)||nl(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},H6=vn("Date"),I6=vn("File"),V6=vn("Blob"),P6=vn("FileList"),q6=n=>al(n)&&_t(n.pipe),F6=n=>{let a;return n&&(typeof FormData=="function"&&n instanceof FormData||_t(n.append)&&((a=Hc(n))==="formdata"||a==="object"&&_t(n.toString)&&n.toString()==="[object FormData]"))},Y6=vn("URLSearchParams"),[G6,Z6,X6,K6]=["ReadableStream","Request","Response","Headers"].map(vn),Q6=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rl(n,a,{allOwnKeys:i=!1}={}){if(n===null||typeof n>"u")return;let l,s;if(typeof n!="object"&&(n=[n]),xi(n))for(l=0,s=n.length;l<s;l++)a.call(null,n[l],l,n);else{if(nl(n))return;const d=i?Object.getOwnPropertyNames(n):Object.keys(n),h=d.length;let x;for(l=0;l<h;l++)x=d[l],a.call(null,n[x],x,n)}}function fy(n,a){if(nl(n))return null;a=a.toLowerCase();const i=Object.keys(n);let l=i.length,s;for(;l-- >0;)if(s=i[l],a===s.toLowerCase())return s;return null}const or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hy=n=>!Zo(n)&&n!==or;function Ch(){const{caseless:n}=hy(this)&&this||{},a={},i=(l,s)=>{const d=n&&fy(a,s)||s;sc(a[d])&&sc(l)?a[d]=Ch(a[d],l):sc(l)?a[d]=Ch({},l):xi(l)?a[d]=l.slice():a[d]=l};for(let l=0,s=arguments.length;l<s;l++)arguments[l]&&rl(arguments[l],i);return a}const J6=(n,a,i,{allOwnKeys:l}={})=>(rl(a,(s,d)=>{i&&_t(s)?n[d]=sy(s,i):n[d]=s},{allOwnKeys:l}),n),W6=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),ej=(n,a,i,l)=>{n.prototype=Object.create(a.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:a.prototype}),i&&Object.assign(n.prototype,i)},tj=(n,a,i,l)=>{let s,d,h;const x={};if(a=a||{},n==null)return a;do{for(s=Object.getOwnPropertyNames(n),d=s.length;d-- >0;)h=s[d],(!l||l(h,n,a))&&!x[h]&&(a[h]=n[h],x[h]=!0);n=i!==!1&&rp(n)}while(n&&(!i||i(n,a))&&n!==Object.prototype);return a},nj=(n,a,i)=>{n=String(n),(i===void 0||i>n.length)&&(i=n.length),i-=a.length;const l=n.indexOf(a,i);return l!==-1&&l===i},aj=n=>{if(!n)return null;if(xi(n))return n;let a=n.length;if(!dy(a))return null;const i=new Array(a);for(;a-- >0;)i[a]=n[a];return i},rj=(n=>a=>n&&a instanceof n)(typeof Uint8Array<"u"&&rp(Uint8Array)),ij=(n,a)=>{const l=(n&&n[Uc]).call(n);let s;for(;(s=l.next())&&!s.done;){const d=s.value;a.call(n,d[0],d[1])}},oj=(n,a)=>{let i;const l=[];for(;(i=n.exec(a))!==null;)l.push(i);return l},lj=vn("HTMLFormElement"),sj=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,s){return l.toUpperCase()+s}),G1=(({hasOwnProperty:n})=>(a,i)=>n.call(a,i))(Object.prototype),cj=vn("RegExp"),py=(n,a)=>{const i=Object.getOwnPropertyDescriptors(n),l={};rl(i,(s,d)=>{let h;(h=a(s,d,n))!==!1&&(l[d]=h||s)}),Object.defineProperties(n,l)},uj=n=>{py(n,(a,i)=>{if(_t(n)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=n[i];if(_t(l)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},dj=(n,a)=>{const i={},l=s=>{s.forEach(d=>{i[d]=!0})};return xi(n)?l(n):l(String(n).split(a)),i},fj=()=>{},hj=(n,a)=>n!=null&&Number.isFinite(n=+n)?n:a;function pj(n){return!!(n&&_t(n.append)&&n[cy]==="FormData"&&n[Uc])}const mj=n=>{const a=new Array(10),i=(l,s)=>{if(al(l)){if(a.indexOf(l)>=0)return;if(nl(l))return l;if(!("toJSON"in l)){a[s]=l;const d=xi(l)?[]:{};return rl(l,(h,x)=>{const p=i(h,s+1);!Zo(p)&&(d[x]=p)}),a[s]=void 0,d}}return l};return i(n,0)},gj=vn("AsyncFunction"),xj=n=>n&&(al(n)||_t(n))&&_t(n.then)&&_t(n.catch),my=((n,a)=>n?setImmediate:a?((i,l)=>(or.addEventListener("message",({source:s,data:d})=>{s===or&&d===i&&l.length&&l.shift()()},!1),s=>{l.push(s),or.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",_t(or.postMessage)),bj=typeof queueMicrotask<"u"?queueMicrotask.bind(or):typeof process<"u"&&process.nextTick||my,vj=n=>n!=null&&_t(n[Uc]),X={isArray:xi,isArrayBuffer:uy,isBuffer:nl,isFormData:F6,isArrayBufferView:B6,isString:_6,isNumber:dy,isBoolean:$6,isObject:al,isPlainObject:sc,isEmptyObject:U6,isReadableStream:G6,isRequest:Z6,isResponse:X6,isHeaders:K6,isUndefined:Zo,isDate:H6,isFile:I6,isBlob:V6,isRegExp:cj,isFunction:_t,isStream:q6,isURLSearchParams:Y6,isTypedArray:rj,isFileList:P6,forEach:rl,merge:Ch,extend:J6,trim:Q6,stripBOM:W6,inherits:ej,toFlatObject:tj,kindOf:Hc,kindOfTest:vn,endsWith:nj,toArray:aj,forEachEntry:ij,matchAll:oj,isHTMLForm:lj,hasOwnProperty:G1,hasOwnProp:G1,reduceDescriptors:py,freezeMethods:uj,toObjectSet:dj,toCamelCase:sj,noop:fj,toFiniteNumber:hj,findKey:fy,global:or,isContextDefined:hy,isSpecCompliantForm:pj,toJSONObject:mj,isAsyncFn:gj,isThenable:xj,setImmediate:my,asap:bj,isIterable:vj};function ye(n,a,i,l,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",a&&(this.code=a),i&&(this.config=i),l&&(this.request=l),s&&(this.response=s,this.status=s.status?s.status:null)}X.inherits(ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}});const gy=ye.prototype,xy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{xy[n]={value:n}});Object.defineProperties(ye,xy);Object.defineProperty(gy,"isAxiosError",{value:!0});ye.from=(n,a,i,l,s,d)=>{const h=Object.create(gy);return X.toFlatObject(n,h,function(p){return p!==Error.prototype},x=>x!=="isAxiosError"),ye.call(h,n.message,a,i,l,s),h.cause=n,h.name=n.name,d&&Object.assign(h,d),h};const yj=null;function Eh(n){return X.isPlainObject(n)||X.isArray(n)}function by(n){return X.endsWith(n,"[]")?n.slice(0,-2):n}function Z1(n,a,i){return n?n.concat(a).map(function(s,d){return s=by(s),!i&&d?"["+s+"]":s}).join(i?".":""):a}function wj(n){return X.isArray(n)&&!n.some(Eh)}const Sj=X.toFlatObject(X,{},null,function(a){return/^is[A-Z]/.test(a)});function Vc(n,a,i){if(!X.isObject(n))throw new TypeError("target must be an object");a=a||new FormData,i=X.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,j){return!X.isUndefined(j[O])});const l=i.metaTokens,s=i.visitor||g,d=i.dots,h=i.indexes,p=(i.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(a);if(!X.isFunction(s))throw new TypeError("visitor must be a function");function m(R){if(R===null)return"";if(X.isDate(R))return R.toISOString();if(X.isBoolean(R))return R.toString();if(!p&&X.isBlob(R))throw new ye("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(R)||X.isTypedArray(R)?p&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function g(R,O,j){let k=R;if(R&&!j&&typeof R=="object"){if(X.endsWith(O,"{}"))O=l?O:O.slice(0,-2),R=JSON.stringify(R);else if(X.isArray(R)&&wj(R)||(X.isFileList(R)||X.endsWith(O,"[]"))&&(k=X.toArray(R)))return O=by(O),k.forEach(function(D,U){!(X.isUndefined(D)||D===null)&&a.append(h===!0?Z1([O],U,d):h===null?O:O+"[]",m(D))}),!1}return Eh(R)?!0:(a.append(Z1(j,O,d),m(R)),!1)}const w=[],C=Object.assign(Sj,{defaultVisitor:g,convertValue:m,isVisitable:Eh});function M(R,O){if(!X.isUndefined(R)){if(w.indexOf(R)!==-1)throw Error("Circular reference detected in "+O.join("."));w.push(R),X.forEach(R,function(k,A){(!(X.isUndefined(k)||k===null)&&s.call(a,k,X.isString(A)?A.trim():A,O,C))===!0&&M(k,O?O.concat(A):[A])}),w.pop()}}if(!X.isObject(n))throw new TypeError("data must be an object");return M(n),a}function X1(n){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return a[l]})}function ip(n,a){this._pairs=[],n&&Vc(n,this,a)}const vy=ip.prototype;vy.append=function(a,i){this._pairs.push([a,i])};vy.toString=function(a){const i=a?function(l){return a.call(this,l,X1)}:X1;return this._pairs.map(function(s){return i(s[0])+"="+i(s[1])},"").join("&")};function jj(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yy(n,a,i){if(!a)return n;const l=i&&i.encode||jj;X.isFunction(i)&&(i={serialize:i});const s=i&&i.serialize;let d;if(s?d=s(a,i):d=X.isURLSearchParams(a)?a.toString():new ip(a,i).toString(l),d){const h=n.indexOf("#");h!==-1&&(n=n.slice(0,h)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class K1{constructor(){this.handlers=[]}use(a,i,l){return this.handlers.push({fulfilled:a,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){X.forEach(this.handlers,function(l){l!==null&&a(l)})}}const wy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Cj=typeof URLSearchParams<"u"?URLSearchParams:ip,Ej=typeof FormData<"u"?FormData:null,Mj=typeof Blob<"u"?Blob:null,kj={isBrowser:!0,classes:{URLSearchParams:Cj,FormData:Ej,Blob:Mj},protocols:["http","https","file","blob","url","data"]},op=typeof window<"u"&&typeof document<"u",Mh=typeof navigator=="object"&&navigator||void 0,Tj=op&&(!Mh||["ReactNative","NativeScript","NS"].indexOf(Mh.product)<0),Rj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Oj=op&&window.location.href||"http://localhost",Aj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:op,hasStandardBrowserEnv:Tj,hasStandardBrowserWebWorkerEnv:Rj,navigator:Mh,origin:Oj},Symbol.toStringTag,{value:"Module"})),kt={...Aj,...kj};function Dj(n,a){return Vc(n,new kt.classes.URLSearchParams,{visitor:function(i,l,s,d){return kt.isNode&&X.isBuffer(i)?(this.append(l,i.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...a})}function Nj(n){return X.matchAll(/\w+|\[(\w*)]/g,n).map(a=>a[0]==="[]"?"":a[1]||a[0])}function zj(n){const a={},i=Object.keys(n);let l;const s=i.length;let d;for(l=0;l<s;l++)d=i[l],a[d]=n[d];return a}function Sy(n){function a(i,l,s,d){let h=i[d++];if(h==="__proto__")return!0;const x=Number.isFinite(+h),p=d>=i.length;return h=!h&&X.isArray(s)?s.length:h,p?(X.hasOwnProp(s,h)?s[h]=[s[h],l]:s[h]=l,!x):((!s[h]||!X.isObject(s[h]))&&(s[h]=[]),a(i,l,s[h],d)&&X.isArray(s[h])&&(s[h]=zj(s[h])),!x)}if(X.isFormData(n)&&X.isFunction(n.entries)){const i={};return X.forEachEntry(n,(l,s)=>{a(Nj(l),s,i,0)}),i}return null}function Lj(n,a,i){if(X.isString(n))try{return(a||JSON.parse)(n),X.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(n)}const il={transitional:wy,adapter:["xhr","http","fetch"],transformRequest:[function(a,i){const l=i.getContentType()||"",s=l.indexOf("application/json")>-1,d=X.isObject(a);if(d&&X.isHTMLForm(a)&&(a=new FormData(a)),X.isFormData(a))return s?JSON.stringify(Sy(a)):a;if(X.isArrayBuffer(a)||X.isBuffer(a)||X.isStream(a)||X.isFile(a)||X.isBlob(a)||X.isReadableStream(a))return a;if(X.isArrayBufferView(a))return a.buffer;if(X.isURLSearchParams(a))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let x;if(d){if(l.indexOf("application/x-www-form-urlencoded")>-1)return Dj(a,this.formSerializer).toString();if((x=X.isFileList(a))||l.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Vc(x?{"files[]":a}:a,p&&new p,this.formSerializer)}}return d||s?(i.setContentType("application/json",!1),Lj(a)):a}],transformResponse:[function(a){const i=this.transitional||il.transitional,l=i&&i.forcedJSONParsing,s=this.responseType==="json";if(X.isResponse(a)||X.isReadableStream(a))return a;if(a&&X.isString(a)&&(l&&!this.responseType||s)){const h=!(i&&i.silentJSONParsing)&&s;try{return JSON.parse(a)}catch(x){if(h)throw x.name==="SyntaxError"?ye.from(x,ye.ERR_BAD_RESPONSE,this,null,this.response):x}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kt.classes.FormData,Blob:kt.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],n=>{il.headers[n]={}});const Bj=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_j=n=>{const a={};let i,l,s;return n&&n.split(`
`).forEach(function(h){s=h.indexOf(":"),i=h.substring(0,s).trim().toLowerCase(),l=h.substring(s+1).trim(),!(!i||a[i]&&Bj[i])&&(i==="set-cookie"?a[i]?a[i].push(l):a[i]=[l]:a[i]=a[i]?a[i]+", "+l:l)}),a},Q1=Symbol("internals");function jo(n){return n&&String(n).trim().toLowerCase()}function cc(n){return n===!1||n==null?n:X.isArray(n)?n.map(cc):String(n)}function $j(n){const a=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(n);)a[l[1]]=l[2];return a}const Uj=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function wf(n,a,i,l,s){if(X.isFunction(l))return l.call(this,a,i);if(s&&(a=i),!!X.isString(a)){if(X.isString(l))return a.indexOf(l)!==-1;if(X.isRegExp(l))return l.test(a)}}function Hj(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,i,l)=>i.toUpperCase()+l)}function Ij(n,a){const i=X.toCamelCase(" "+a);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+i,{value:function(s,d,h){return this[l].call(this,a,s,d,h)},configurable:!0})})}let $t=class{constructor(a){a&&this.set(a)}set(a,i,l){const s=this;function d(x,p,m){const g=jo(p);if(!g)throw new Error("header name must be a non-empty string");const w=X.findKey(s,g);(!w||s[w]===void 0||m===!0||m===void 0&&s[w]!==!1)&&(s[w||p]=cc(x))}const h=(x,p)=>X.forEach(x,(m,g)=>d(m,g,p));if(X.isPlainObject(a)||a instanceof this.constructor)h(a,i);else if(X.isString(a)&&(a=a.trim())&&!Uj(a))h(_j(a),i);else if(X.isObject(a)&&X.isIterable(a)){let x={},p,m;for(const g of a){if(!X.isArray(g))throw TypeError("Object iterator must return a key-value pair");x[m=g[0]]=(p=x[m])?X.isArray(p)?[...p,g[1]]:[p,g[1]]:g[1]}h(x,i)}else a!=null&&d(i,a,l);return this}get(a,i){if(a=jo(a),a){const l=X.findKey(this,a);if(l){const s=this[l];if(!i)return s;if(i===!0)return $j(s);if(X.isFunction(i))return i.call(this,s,l);if(X.isRegExp(i))return i.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,i){if(a=jo(a),a){const l=X.findKey(this,a);return!!(l&&this[l]!==void 0&&(!i||wf(this,this[l],l,i)))}return!1}delete(a,i){const l=this;let s=!1;function d(h){if(h=jo(h),h){const x=X.findKey(l,h);x&&(!i||wf(l,l[x],x,i))&&(delete l[x],s=!0)}}return X.isArray(a)?a.forEach(d):d(a),s}clear(a){const i=Object.keys(this);let l=i.length,s=!1;for(;l--;){const d=i[l];(!a||wf(this,this[d],d,a,!0))&&(delete this[d],s=!0)}return s}normalize(a){const i=this,l={};return X.forEach(this,(s,d)=>{const h=X.findKey(l,d);if(h){i[h]=cc(s),delete i[d];return}const x=a?Hj(d):String(d).trim();x!==d&&delete i[d],i[x]=cc(s),l[x]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const i=Object.create(null);return X.forEach(this,(l,s)=>{l!=null&&l!==!1&&(i[s]=a&&X.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,i])=>a+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...i){const l=new this(a);return i.forEach(s=>l.set(s)),l}static accessor(a){const l=(this[Q1]=this[Q1]={accessors:{}}).accessors,s=this.prototype;function d(h){const x=jo(h);l[x]||(Ij(s,h),l[x]=!0)}return X.isArray(a)?a.forEach(d):d(a),this}};$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors($t.prototype,({value:n},a)=>{let i=a[0].toUpperCase()+a.slice(1);return{get:()=>n,set(l){this[i]=l}}});X.freezeMethods($t);function Sf(n,a){const i=this||il,l=a||i,s=$t.from(l.headers);let d=l.data;return X.forEach(n,function(x){d=x.call(i,d,s.normalize(),a?a.status:void 0)}),s.normalize(),d}function jy(n){return!!(n&&n.__CANCEL__)}function bi(n,a,i){ye.call(this,n??"canceled",ye.ERR_CANCELED,a,i),this.name="CanceledError"}X.inherits(bi,ye,{__CANCEL__:!0});function Cy(n,a,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?n(i):a(new ye("Request failed with status code "+i.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function Vj(n){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return a&&a[1]||""}function Pj(n,a){n=n||10;const i=new Array(n),l=new Array(n);let s=0,d=0,h;return a=a!==void 0?a:1e3,function(p){const m=Date.now(),g=l[d];h||(h=m),i[s]=p,l[s]=m;let w=d,C=0;for(;w!==s;)C+=i[w++],w=w%n;if(s=(s+1)%n,s===d&&(d=(d+1)%n),m-h<a)return;const M=g&&m-g;return M?Math.round(C*1e3/M):void 0}}function qj(n,a){let i=0,l=1e3/a,s,d;const h=(m,g=Date.now())=>{i=g,s=null,d&&(clearTimeout(d),d=null),n(...m)};return[(...m)=>{const g=Date.now(),w=g-i;w>=l?h(m,g):(s=m,d||(d=setTimeout(()=>{d=null,h(s)},l-w)))},()=>s&&h(s)]}const vc=(n,a,i=3)=>{let l=0;const s=Pj(50,250);return qj(d=>{const h=d.loaded,x=d.lengthComputable?d.total:void 0,p=h-l,m=s(p),g=h<=x;l=h;const w={loaded:h,total:x,progress:x?h/x:void 0,bytes:p,rate:m||void 0,estimated:m&&x&&g?(x-h)/m:void 0,event:d,lengthComputable:x!=null,[a?"download":"upload"]:!0};n(w)},i)},J1=(n,a)=>{const i=n!=null;return[l=>a[0]({lengthComputable:i,total:n,loaded:l}),a[1]]},W1=n=>(...a)=>X.asap(()=>n(...a)),Fj=kt.hasStandardBrowserEnv?((n,a)=>i=>(i=new URL(i,kt.origin),n.protocol===i.protocol&&n.host===i.host&&(a||n.port===i.port)))(new URL(kt.origin),kt.navigator&&/(msie|trident)/i.test(kt.navigator.userAgent)):()=>!0,Yj=kt.hasStandardBrowserEnv?{write(n,a,i,l,s,d){const h=[n+"="+encodeURIComponent(a)];X.isNumber(i)&&h.push("expires="+new Date(i).toGMTString()),X.isString(l)&&h.push("path="+l),X.isString(s)&&h.push("domain="+s),d===!0&&h.push("secure"),document.cookie=h.join("; ")},read(n){const a=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Gj(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Zj(n,a){return a?n.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):n}function Ey(n,a,i){let l=!Gj(a);return n&&(l||i==!1)?Zj(n,a):a}const ex=n=>n instanceof $t?{...n}:n;function ur(n,a){a=a||{};const i={};function l(m,g,w,C){return X.isPlainObject(m)&&X.isPlainObject(g)?X.merge.call({caseless:C},m,g):X.isPlainObject(g)?X.merge({},g):X.isArray(g)?g.slice():g}function s(m,g,w,C){if(X.isUndefined(g)){if(!X.isUndefined(m))return l(void 0,m,w,C)}else return l(m,g,w,C)}function d(m,g){if(!X.isUndefined(g))return l(void 0,g)}function h(m,g){if(X.isUndefined(g)){if(!X.isUndefined(m))return l(void 0,m)}else return l(void 0,g)}function x(m,g,w){if(w in a)return l(m,g);if(w in n)return l(void 0,m)}const p={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:x,headers:(m,g,w)=>s(ex(m),ex(g),w,!0)};return X.forEach(Object.keys({...n,...a}),function(g){const w=p[g]||s,C=w(n[g],a[g],g);X.isUndefined(C)&&w!==x||(i[g]=C)}),i}const My=n=>{const a=ur({},n);let{data:i,withXSRFToken:l,xsrfHeaderName:s,xsrfCookieName:d,headers:h,auth:x}=a;a.headers=h=$t.from(h),a.url=yy(Ey(a.baseURL,a.url,a.allowAbsoluteUrls),n.params,n.paramsSerializer),x&&h.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):"")));let p;if(X.isFormData(i)){if(kt.hasStandardBrowserEnv||kt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((p=h.getContentType())!==!1){const[m,...g]=p?p.split(";").map(w=>w.trim()).filter(Boolean):[];h.setContentType([m||"multipart/form-data",...g].join("; "))}}if(kt.hasStandardBrowserEnv&&(l&&X.isFunction(l)&&(l=l(a)),l||l!==!1&&Fj(a.url))){const m=s&&d&&Yj.read(d);m&&h.set(s,m)}return a},Xj=typeof XMLHttpRequest<"u",Kj=Xj&&function(n){return new Promise(function(i,l){const s=My(n);let d=s.data;const h=$t.from(s.headers).normalize();let{responseType:x,onUploadProgress:p,onDownloadProgress:m}=s,g,w,C,M,R;function O(){M&&M(),R&&R(),s.cancelToken&&s.cancelToken.unsubscribe(g),s.signal&&s.signal.removeEventListener("abort",g)}let j=new XMLHttpRequest;j.open(s.method.toUpperCase(),s.url,!0),j.timeout=s.timeout;function k(){if(!j)return;const D=$t.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),S={data:!x||x==="text"||x==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:D,config:n,request:j};Cy(function(z){i(z),O()},function(z){l(z),O()},S),j=null}"onloadend"in j?j.onloadend=k:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(k)},j.onabort=function(){j&&(l(new ye("Request aborted",ye.ECONNABORTED,n,j)),j=null)},j.onerror=function(){l(new ye("Network Error",ye.ERR_NETWORK,n,j)),j=null},j.ontimeout=function(){let U=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const S=s.transitional||wy;s.timeoutErrorMessage&&(U=s.timeoutErrorMessage),l(new ye(U,S.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,n,j)),j=null},d===void 0&&h.setContentType(null),"setRequestHeader"in j&&X.forEach(h.toJSON(),function(U,S){j.setRequestHeader(S,U)}),X.isUndefined(s.withCredentials)||(j.withCredentials=!!s.withCredentials),x&&x!=="json"&&(j.responseType=s.responseType),m&&([C,R]=vc(m,!0),j.addEventListener("progress",C)),p&&j.upload&&([w,M]=vc(p),j.upload.addEventListener("progress",w),j.upload.addEventListener("loadend",M)),(s.cancelToken||s.signal)&&(g=D=>{j&&(l(!D||D.type?new bi(null,n,j):D),j.abort(),j=null)},s.cancelToken&&s.cancelToken.subscribe(g),s.signal&&(s.signal.aborted?g():s.signal.addEventListener("abort",g)));const A=Vj(s.url);if(A&&kt.protocols.indexOf(A)===-1){l(new ye("Unsupported protocol "+A+":",ye.ERR_BAD_REQUEST,n));return}j.send(d||null)})},Qj=(n,a)=>{const{length:i}=n=n?n.filter(Boolean):[];if(a||i){let l=new AbortController,s;const d=function(m){if(!s){s=!0,x();const g=m instanceof Error?m:this.reason;l.abort(g instanceof ye?g:new bi(g instanceof Error?g.message:g))}};let h=a&&setTimeout(()=>{h=null,d(new ye(`timeout ${a} of ms exceeded`,ye.ETIMEDOUT))},a);const x=()=>{n&&(h&&clearTimeout(h),h=null,n.forEach(m=>{m.unsubscribe?m.unsubscribe(d):m.removeEventListener("abort",d)}),n=null)};n.forEach(m=>m.addEventListener("abort",d));const{signal:p}=l;return p.unsubscribe=()=>X.asap(x),p}},Jj=function*(n,a){let i=n.byteLength;if(i<a){yield n;return}let l=0,s;for(;l<i;)s=l+a,yield n.slice(l,s),l=s},Wj=async function*(n,a){for await(const i of e3(n))yield*Jj(i,a)},e3=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const a=n.getReader();try{for(;;){const{done:i,value:l}=await a.read();if(i)break;yield l}}finally{await a.cancel()}},tx=(n,a,i,l)=>{const s=Wj(n,a);let d=0,h,x=p=>{h||(h=!0,l&&l(p))};return new ReadableStream({async pull(p){try{const{done:m,value:g}=await s.next();if(m){x(),p.close();return}let w=g.byteLength;if(i){let C=d+=w;i(C)}p.enqueue(new Uint8Array(g))}catch(m){throw x(m),m}},cancel(p){return x(p),s.return()}},{highWaterMark:2})},Pc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ky=Pc&&typeof ReadableStream=="function",t3=Pc&&(typeof TextEncoder=="function"?(n=>a=>n.encode(a))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Ty=(n,...a)=>{try{return!!n(...a)}catch{return!1}},n3=ky&&Ty(()=>{let n=!1;const a=new Request(kt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!a}),nx=64*1024,kh=ky&&Ty(()=>X.isReadableStream(new Response("").body)),yc={stream:kh&&(n=>n.body)};Pc&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!yc[a]&&(yc[a]=X.isFunction(n[a])?i=>i[a]():(i,l)=>{throw new ye(`Response type '${a}' is not supported`,ye.ERR_NOT_SUPPORT,l)})})})(new Response);const a3=async n=>{if(n==null)return 0;if(X.isBlob(n))return n.size;if(X.isSpecCompliantForm(n))return(await new Request(kt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(X.isArrayBufferView(n)||X.isArrayBuffer(n))return n.byteLength;if(X.isURLSearchParams(n)&&(n=n+""),X.isString(n))return(await t3(n)).byteLength},r3=async(n,a)=>{const i=X.toFiniteNumber(n.getContentLength());return i??a3(a)},i3=Pc&&(async n=>{let{url:a,method:i,data:l,signal:s,cancelToken:d,timeout:h,onDownloadProgress:x,onUploadProgress:p,responseType:m,headers:g,withCredentials:w="same-origin",fetchOptions:C}=My(n);m=m?(m+"").toLowerCase():"text";let M=Qj([s,d&&d.toAbortSignal()],h),R;const O=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let j;try{if(p&&n3&&i!=="get"&&i!=="head"&&(j=await r3(g,l))!==0){let S=new Request(a,{method:"POST",body:l,duplex:"half"}),_;if(X.isFormData(l)&&(_=S.headers.get("content-type"))&&g.setContentType(_),S.body){const[z,G]=J1(j,vc(W1(p)));l=tx(S.body,nx,z,G)}}X.isString(w)||(w=w?"include":"omit");const k="credentials"in Request.prototype;R=new Request(a,{...C,signal:M,method:i.toUpperCase(),headers:g.normalize().toJSON(),body:l,duplex:"half",credentials:k?w:void 0});let A=await fetch(R,C);const D=kh&&(m==="stream"||m==="response");if(kh&&(x||D&&O)){const S={};["status","statusText","headers"].forEach(N=>{S[N]=A[N]});const _=X.toFiniteNumber(A.headers.get("content-length")),[z,G]=x&&J1(_,vc(W1(x),!0))||[];A=new Response(tx(A.body,nx,z,()=>{G&&G(),O&&O()}),S)}m=m||"text";let U=await yc[X.findKey(yc,m)||"text"](A,n);return!D&&O&&O(),await new Promise((S,_)=>{Cy(S,_,{data:U,headers:$t.from(A.headers),status:A.status,statusText:A.statusText,config:n,request:R})})}catch(k){throw O&&O(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new ye("Network Error",ye.ERR_NETWORK,n,R),{cause:k.cause||k}):ye.from(k,k&&k.code,n,R)}}),Th={http:yj,xhr:Kj,fetch:i3};X.forEach(Th,(n,a)=>{if(n){try{Object.defineProperty(n,"name",{value:a})}catch{}Object.defineProperty(n,"adapterName",{value:a})}});const ax=n=>`- ${n}`,o3=n=>X.isFunction(n)||n===null||n===!1,Ry={getAdapter:n=>{n=X.isArray(n)?n:[n];const{length:a}=n;let i,l;const s={};for(let d=0;d<a;d++){i=n[d];let h;if(l=i,!o3(i)&&(l=Th[(h=String(i)).toLowerCase()],l===void 0))throw new ye(`Unknown adapter '${h}'`);if(l)break;s[h||"#"+d]=l}if(!l){const d=Object.entries(s).map(([x,p])=>`adapter ${x} `+(p===!1?"is not supported by the environment":"is not available in the build"));let h=a?d.length>1?`since :
`+d.map(ax).join(`
`):" "+ax(d[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l},adapters:Th};function jf(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new bi(null,n)}function rx(n){return jf(n),n.headers=$t.from(n.headers),n.data=Sf.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Ry.getAdapter(n.adapter||il.adapter)(n).then(function(l){return jf(n),l.data=Sf.call(n,n.transformResponse,l),l.headers=$t.from(l.headers),l},function(l){return jy(l)||(jf(n),l&&l.response&&(l.response.data=Sf.call(n,n.transformResponse,l.response),l.response.headers=$t.from(l.response.headers))),Promise.reject(l)})}const Oy="1.11.0",qc={};["object","boolean","number","function","string","symbol"].forEach((n,a)=>{qc[n]=function(l){return typeof l===n||"a"+(a<1?"n ":" ")+n}});const ix={};qc.transitional=function(a,i,l){function s(d,h){return"[Axios v"+Oy+"] Transitional option '"+d+"'"+h+(l?". "+l:"")}return(d,h,x)=>{if(a===!1)throw new ye(s(h," has been removed"+(i?" in "+i:"")),ye.ERR_DEPRECATED);return i&&!ix[h]&&(ix[h]=!0,console.warn(s(h," has been deprecated since v"+i+" and will be removed in the near future"))),a?a(d,h,x):!0}};qc.spelling=function(a){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${a}`),!0)};function l3(n,a,i){if(typeof n!="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let s=l.length;for(;s-- >0;){const d=l[s],h=a[d];if(h){const x=n[d],p=x===void 0||h(x,d,n);if(p!==!0)throw new ye("option "+d+" must be "+p,ye.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ye("Unknown option "+d,ye.ERR_BAD_OPTION)}}const uc={assertOptions:l3,validators:qc},Mn=uc.validators;let cr=class{constructor(a){this.defaults=a||{},this.interceptors={request:new K1,response:new K1}}async request(a,i){try{return await this._request(a,i)}catch(l){if(l instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const d=s.stack?s.stack.replace(/^.+\n/,""):"";try{l.stack?d&&!String(l.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+d):l.stack=d}catch{}}throw l}}_request(a,i){typeof a=="string"?(i=i||{},i.url=a):i=a||{},i=ur(this.defaults,i);const{transitional:l,paramsSerializer:s,headers:d}=i;l!==void 0&&uc.assertOptions(l,{silentJSONParsing:Mn.transitional(Mn.boolean),forcedJSONParsing:Mn.transitional(Mn.boolean),clarifyTimeoutError:Mn.transitional(Mn.boolean)},!1),s!=null&&(X.isFunction(s)?i.paramsSerializer={serialize:s}:uc.assertOptions(s,{encode:Mn.function,serialize:Mn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),uc.assertOptions(i,{baseUrl:Mn.spelling("baseURL"),withXsrfToken:Mn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let h=d&&X.merge(d.common,d[i.method]);d&&X.forEach(["delete","get","head","post","put","patch","common"],R=>{delete d[R]}),i.headers=$t.concat(h,d);const x=[];let p=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(i)===!1||(p=p&&O.synchronous,x.unshift(O.fulfilled,O.rejected))});const m=[];this.interceptors.response.forEach(function(O){m.push(O.fulfilled,O.rejected)});let g,w=0,C;if(!p){const R=[rx.bind(this),void 0];for(R.unshift(...x),R.push(...m),C=R.length,g=Promise.resolve(i);w<C;)g=g.then(R[w++],R[w++]);return g}C=x.length;let M=i;for(w=0;w<C;){const R=x[w++],O=x[w++];try{M=R(M)}catch(j){O.call(this,j);break}}try{g=rx.call(this,M)}catch(R){return Promise.reject(R)}for(w=0,C=m.length;w<C;)g=g.then(m[w++],m[w++]);return g}getUri(a){a=ur(this.defaults,a);const i=Ey(a.baseURL,a.url,a.allowAbsoluteUrls);return yy(i,a.params,a.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(a){cr.prototype[a]=function(i,l){return this.request(ur(l||{},{method:a,url:i,data:(l||{}).data}))}});X.forEach(["post","put","patch"],function(a){function i(l){return function(d,h,x){return this.request(ur(x||{},{method:a,headers:l?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}cr.prototype[a]=i(),cr.prototype[a+"Form"]=i(!0)});let s3=class Ay{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(d){i=d});const l=this;this.promise.then(s=>{if(!l._listeners)return;let d=l._listeners.length;for(;d-- >0;)l._listeners[d](s);l._listeners=null}),this.promise.then=s=>{let d;const h=new Promise(x=>{l.subscribe(x),d=x}).then(s);return h.cancel=function(){l.unsubscribe(d)},h},a(function(d,h,x){l.reason||(l.reason=new bi(d,h,x),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const i=this._listeners.indexOf(a);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const a=new AbortController,i=l=>{a.abort(l)};return this.subscribe(i),a.signal.unsubscribe=()=>this.unsubscribe(i),a.signal}static source(){let a;return{token:new Ay(function(s){a=s}),cancel:a}}};function c3(n){return function(i){return n.apply(null,i)}}function u3(n){return X.isObject(n)&&n.isAxiosError===!0}const Rh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rh).forEach(([n,a])=>{Rh[a]=n});function Dy(n){const a=new cr(n),i=sy(cr.prototype.request,a);return X.extend(i,cr.prototype,a,{allOwnKeys:!0}),X.extend(i,a,null,{allOwnKeys:!0}),i.create=function(s){return Dy(ur(n,s))},i}const _e=Dy(il);_e.Axios=cr;_e.CanceledError=bi;_e.CancelToken=s3;_e.isCancel=jy;_e.VERSION=Oy;_e.toFormData=Vc;_e.AxiosError=ye;_e.Cancel=_e.CanceledError;_e.all=function(a){return Promise.all(a)};_e.spread=c3;_e.isAxiosError=u3;_e.mergeConfig=ur;_e.AxiosHeaders=$t;_e.formToJSON=n=>Sy(X.isHTMLForm(n)?new FormData(n):n);_e.getAdapter=Ry.getAdapter;_e.HttpStatusCode=Rh;_e.default=_e;const{Axios:Z9,AxiosError:X9,CanceledError:K9,isCancel:Q9,CancelToken:J9,VERSION:W9,all:eD,Cancel:tD,isAxiosError:nD,spread:aD,toFormData:rD,AxiosHeaders:iD,HttpStatusCode:oD,formToJSON:lD,getAdapter:sD,mergeConfig:cD}=_e,d3=()=>{const n=Je();return v.useEffect(()=>{(async()=>{try{const i=await _e.post("http://moka-flask.ap-northeast-2.elasticbeanstalk.com/get_response");console.log(i.data)}catch(i){console.error("ai타고옴?",i)}})()},[]),c.jsxs(f3,{children:[c.jsxs(h3,{children:[c.jsx(p3,{src:z6,alt:"애스턴 마틴 DB12 차량"}),c.jsxs(m3,{children:[c.jsxs(g3,{children:["프리미엄 차량을",c.jsx("br",{}),"가장 편리하게"]}),c.jsx(x3,{children:"모카와 함께 특별한 여정을 시작하세요."})]})]}),c.jsx(b3,{onClick:()=>n("/home"),children:"지금 시작하기"})]})},f3=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 40px;
    /* Layout에서 제공하는 padding을 제외한 실제 뷰포트 높이를 채우도록 설정 */
    min-height: calc(100vh - 82px - 32px);
`,h3=b.div`
    /* 특별한 스타일 없이 Page의 flex 설정에 따라 중앙 정렬됩니다. */
`,p3=b.img`
    width: 100%;
    max-width: 400px;
    margin-bottom: 24px;
    object-fit: contain;
`,m3=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,g3=b.h1`
    font-size: 28px;
    font-weight: 800;
    line-height: 1.4;
    color: #5d4037; /* Moca: Dark Brown */
    margin: 0;
`,x3=b.p`
    font-size: 16px;
    color: #795548; /* Moca: Medium Brown */
    margin: 0;
`,b3=b.button`
    width: 100%;
    height: 52px;
    border-radius: 999px; /* Pill shape */
    border: none;
    background: #a47551; /* Moca: Primary */
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: background-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 10px 24px rgba(164, 117, 81, 0.35); /* Moca: Shadow */

    &:active {
        transform: scale(0.99);
    }
`,v3=()=>{const n=Je(),{user:a}=St();return c.jsxs(y3,{children:[c.jsxs(w3,{role:"button",onClick:()=>n("/reserve"),children:[c.jsx(ai,{children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"M320-680q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22.5t45 57.5h326v80h-40v80h-80v-80H434q-14 35-45 57.5T320-680Zm0-80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-17 0-28.5 11.5T280-800q0 17 11.5 28.5T320-760Zm40 500q17 0 28.5-11.5T400-300q0-17-11.5-28.5T360-340q-17 0-28.5 11.5T320-300q0 17 11.5 28.5T360-260Zm240 0q17 0 28.5-11.5T640-300q0-17-11.5-28.5T600-340q-17 0-28.5 11.5T560-300q0 17 11.5 28.5T600-260ZM200-376l66-192q5-14 16.5-23t25.5-9h344q14 0 25.5 9t16.5 23l66 192v264q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-48H280v48q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-264Zm106-64h348l-28-80H334l-28 80Zm-26 80v120-120Zm0 120h400v-120H280v120Z"})})}),c.jsx(ri,{children:"예약"})]}),c.jsxs(S3,{children:[c.jsxs(ox,{role:"button",onClick:()=>n("/mypage"),children:[c.jsx(ai,{children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z"})})}),c.jsx(ri,{children:"마이페이지"})]}),c.jsxs(ox,{role:"button",onClick:()=>n("/ocr"),children:[c.jsx(ai,{children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"})})}),c.jsx(ri,{children:"운전면허증 등록"})]})]}),c.jsxs(C3,{children:[c.jsxs(Cf,{onClick:()=>n("/notices"),children:[c.jsx("span",{role:"img","aria-label":"공지사항",children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"m260-80-40-40v-160H80v-80l60-106v-94H80v-80h360v80h-60v94l60 106v80H300v160l-40 40Zm220-80v-80h320v-480H80q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H480ZM172-360h176l-48-84v-116h-80v116l-48 84Zm88 0Z"})})}),c.jsx("span",{children:"공지사항"})]}),c.jsxs(Cf,{onClick:()=>n("/payments-licenses"),children:[c.jsx("span",{role:"img","aria-label":"결제수단",children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240H160v240h400v80H160Zm0-480h640v-80H160v80ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM160-240v-480 480Z"})})}),c.jsx("span",{children:"결제·면허"})]}),c.jsxs(Cf,{onClick:()=>n("/faq"),children:[c.jsx("span",{role:"img","aria-label":"고객센터",children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})})}),c.jsx("span",{children:"고객센터"})]})]}),a?.role==="admin"&&c.jsxs(j3,{role:"button",onClick:()=>n("/admin"),children:[c.jsx(ai,{children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#1f1f1f",children:c.jsx("path",{d:"M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"})})}),c.jsx(ri,{children:"관리자 페이지"})]})]})},y3=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* 컴포넌트 사이의 간격을 일정하게 관리합니다 */
`,lp=b.div`
  background: #ffffff;
  border-radius: 24px; /* 모서리를 좀 더 둥글게 */
  padding: 24px;
  cursor: pointer;
  display: grid;
  place-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
    border-color: #d7ccc8;
  }

  &:active {
    transform: translateY(0);
    transition-duration: 0.05s;
  }
`,w3=b(lp)`
  height: 140px; /* 전체적인 균형을 위해 높이를 살짝 늘립니다 */
  /* 아이콘과 텍스트가 그룹으로 묶여 중앙 정렬되도록 수정 */
  grid-template-rows: auto auto;
  align-content: center;
  gap: 12px; /* 아이콘과 텍스트 사이의 간격을 조금 더 줍니다 */
`,ai=b.div`
  display: grid;
  place-items: center;
  font-size: 36px;
  line-height: 1;
`,ri=b.div`
  font-size: 18px;
  font-weight: 700; /* 폰트 두께를 살짝 올려 가독성을 높입니다 */
  color: #5d4037; /* Moca: Dark Brown */
`,ox=b(lp)`
  height: 100px;
  /* 아이콘과 제목을 세로로 배치합니다 */
  grid-template-rows: auto auto;
  align-content: center;
  gap: 8px;

  /* 작은 카드에 맞게 아이콘과 제목 크기를 조정합니다 */
  & > ${ai} {
    font-size: 28px;
  }
  & > ${ri} {
    font-size: 16px;
  }
`,S3=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,j3=b(lp)`
  height: 80px; /* 다른 카드들과의 균형을 위해 높이 조정 */
  background: #fafafa; /* 관리자용 메뉴임을 구분하기 위해 다른 배경색 사용 */
  border-color: #e0e0e0;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  & > ${ai} {
    font-size: 28px;
  }

  & > ${ri} {
    font-size: 16px;
    color: #616161;
  }

  &:hover {
    background: #f5f5f5;
    border-color: #bdbdbd;
  }
`,C3=b.section`
  /* margin-top: 8px; // PageLayout으로 대체되어 더 이상 필요 없습니다 */
  padding: 8px;
  background: #ffffff;
  border-radius: 24px;
  display: grid;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,Cf=b.button`
  background: transparent;
  border: none;
  border-radius: 14px;
  padding: 16px 8px;
  display: grid;
  place-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #795548; /* Moca: Medium Brown */
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #f5f1ed; /* Moca: Light Brown BG */
    color: #5d4037; /* Moca: Dark Brown */
  }

  /* 첫 번째 span(이모지) 스타일 */
  & > span:first-of-type {
    font-size: 24px;
    line-height: 1;
  }

  &:active {
    transform: translateY(1px); /* 헤더 버튼과 동일하게 눌리는 효과로 변경 */
    transition-duration: 0.05s;
  }

  & > span {
    white-space: nowrap;
  }
`,E3=({isOpen:n,onClose:a,children:i})=>n?c.jsx("div",{className:"modal-backdrop",onClick:a,children:c.jsx("div",{className:"modal-content",onClick:l=>l.stopPropagation(),children:i})}):null,M3=()=>{const n=Je(),a=v.useMemo(()=>{const Z=[],T=new Date;for(let I=0;I<=14;I++){const J=new Date(T);J.setDate(T.getDate()+I);const oe=J.getFullYear(),B=String(J.getMonth()+1).padStart(2,"0"),K=String(J.getDate()).padStart(2,"0"),te=I===0?`오늘 (${B}/${K})`:I===1?`내일 (${B}/${K})`:`${B}/${K}`;Z.push({value:`${oe}-${B}-${K}`,label:te})}return Z},[]),i=v.useMemo(()=>{const Z=[];for(let T=0;T<24;T++)for(let I=0;I<60;I+=10){const J=String(T).padStart(2,"0"),oe=String(I).padStart(2,"0");Z.push(`${J}:${oe}`)}return Z},[]),l=Z=>{const T=new Date(Z),I=T.getMinutes(),J=Math.ceil(I/10)*10;return T.setMinutes(J===60?0:J),J===60&&T.setHours(T.getHours()+1),T.setSeconds(0,0),T},s=l(new Date),d=Co(s),h=Es(s),x=new Date(s.getTime()+270*60*1e3),p=Co(x),m=Es(x),[g,w]=v.useState(d),[C,M]=v.useState(h),[R,O]=v.useState(p),[j,k]=v.useState(m),[A,D]=v.useState(1),U=v.useMemo(()=>lx(g,C),[g,C]),S=v.useMemo(()=>lx(R,j),[R,j]),_=v.useMemo(()=>{const Z=Co(new Date);if(g!==Z)return i;const T=l(new Date);if(Co(T)!==Z)return[];const I=Es(T);return i.filter(J=>J>=I)},[g,i]);v.useEffect(()=>{if(_.length>0&&!_.includes(C)){M(_[0]);return}if(!(isNaN(U.getTime())||isNaN(S.getTime()))&&S<=U){const Z=new Date(U.getTime()+162e5);O(Co(Z)),k(Es(Z))}},[U,S,C,_]);const[z,G]=v.useState(!1),N=v.useMemo(()=>{const Z=S-U;if(isNaN(Z)||Z<=0)return{days:0,hours:0,minutes:0,valid:!1,totalMin:0};const T=Math.floor(Z/(60*1e3)),I=Math.floor(T/1440),J=Math.floor((T-I*24*60)/60),oe=T%60;return{days:I,hours:J,minutes:oe,valid:!0,totalMin:T}},[U,S]),Y=1/10,ne=5e4,ie=v.useMemo(()=>N.valid?Math.ceil((N.totalMin||0)*Y)*ne:0,[N]),ue=()=>{N.valid&&G(!0)},Te=()=>{G(!1),n("/map",{state:{startDate:U,endDate:S,passengerCount:A,price:ie,billing:{unitMinutes:10,unitPrice:ne,totalMinutes:N.totalMin,chargedUnits:Math.ceil((N.totalMin||0)*Y)}}})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
                /* General Body Style for Context */
                .app-container {
                    font-family: 'Pretendard', sans-serif;
                    background-color: #F8F5F2; /* Moca-themed light background */
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    min-height: 90vh;
                }
                .box-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 20px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    display: grid;
                    gap: 16px;
                    width: 100%;
                    max-width: 420px;
                    height: 390px;
                    margin-top: 38px;
                }
                .section-title {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 0;
                    color: #5d4037; /* Moca: Dark Brown */
                }
                .field-row {
                    display: grid;
                    grid-template-columns: 90px 1fr;
                    gap: 12px;
                    align-items: center;
                }
                .field-label {
                    font-size: 14px;
                    color: #795548; /* Moca: Medium Brown */
                }
                .select-group {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }
                .select-form {
                    width: 100%;
                    height: 42px;
                    border-radius: 12px;
                    border: 1px solid #e7e0d9; /* Moca: Beige Border */
                    padding: 0 12px;
                    background: #fdfbfa; /* Moca: Light Beige BG */
                    font-size: 14px;
                    color: #5d4037; /* Moca: Dark Brown */
                    outline: none;
                    -webkit-appearance: none;
                    appearance: none;
                    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23795548%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
                    background-repeat: no-repeat;
                    background-position: right 12px center;
                    background-size: 8px 8px;
                }
                .select-form:focus {
                    border-color: #a47551; /* Moca: Primary Brown */
                    background-color: #fff;
                }
                .divider {
                    border: none;
                    border-top: 1px dashed #e7e0d9; /* Moca: Beige Border */
                    margin: 8px 0;
                }
                .summary {
                    font-size: 15px;
                    color: #795548; /* Moca: Medium Brown */
                    padding: 10px 12px;
                    background: #f5f1ed; /* Moca: Light Brown BG */
                    border-radius: 12px;
                    text-align: center;
                }
                .summary strong {
                    font-weight: 700;
                    color: #5d4037; /* Moca: Dark Brown */
                }
                .confirm-button {
                    margin-top: 4px;
                    height: 52px;
                    border: none;
                    border-radius: 999px; /* Pill shape */
                    color: #fff;
                    font-size: 16px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s;
                    background: #a47551; /* Moca: Primary */
                    box-shadow: 0 10px 24px rgba(164, 117, 81, .35); /* Moca: Shadow */
                }
                .confirm-button:active {
                    transform: scale(0.98);
                    box-shadow: 0 4px 10px rgba(164, 117, 81, .25);
                }
                .confirm-button:disabled {
                    background: #d7ccc8; /* Moca: Disabled */
                    cursor: not-allowed;
                    box-shadow: none;
                }
                .stepper-group {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px; /* 버튼과 숫자 사이 간격 추가 */
                    justify-self: start;
                }
                /* --- SVG 대신 Text를 사용하도록 스타일 수정 --- */
                .stepper-button {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1px solid #e7e0d9;
                    background: #fff;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background-color 0.2s, color 0.2s, border-color 0.2s, transform 0.1s;
                    
                    /* 텍스트 스타일링 */
                    font-size: 26px; /* 텍스트 크기 */
                    font-weight: 300; /* 얇은 폰트로 세련되게 */
                    color: #795548; /* 기본 텍스트 색상 */
                    line-height: 1; /* 수직 정렬을 위한 line-height 조정 */
                    padding: 0 0 2px 0; /* 미세한 수직 위치 조정 */
                }
                .stepper-button:hover:not(:disabled) {
                    background: #f5f1ed;
                    border-color: #d7ccc8;
                }
                .stepper-button:active:not(:disabled) {
                    transform: scale(0.95);
                }
                .stepper-button:disabled {
                    background: #f5f1ed;
                    cursor: not-allowed;
                    border-color: #f5f1ed;
                    color: #d7ccc8; /* 비활성화 시 텍스트 색상 */
                }
                .stepper-button:focus-visible {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.4);
                }
                .passenger-value-box {
                    min-width: 40px;
                    padding: 0 4px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #5d4037;
                    text-align: center;
                }
                .modal-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    animation: fadeIn 0.3s ease;
                }
                .modal-content {
                    background: white;
                    padding: 24px;
                    border-radius: 20px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 90%;
                    max-width: 300px;
                    animation: slideUp 0.4s ease;
                }
                .modal-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #5d4037;
                    margin: 0;
                    text-align: center;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: 12px;
                    background-color: #f5f1ed;
                    padding: 16px;
                    border-radius: 12px;
                }
                .info-label {
                    font-weight: 600;
                    color: #795548;
                }
                .info-value {
                    color: #5d4037;
                    font-weight: 500;
                }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}),c.jsx("div",{className:"app-container",children:c.jsxs("section",{className:"box-card",children:[c.jsx("h2",{className:"section-title",children:"이용시간"}),c.jsxs("div",{className:"field-row",children:[c.jsx("div",{className:"field-label",children:"대여시각"}),c.jsxs("div",{className:"select-group",children:[c.jsx("select",{className:"select-form",value:g,onChange:Z=>w(Z.target.value),children:a.map(Z=>c.jsx("option",{value:Z.value,children:Z.label},Z.value))}),c.jsx("select",{className:"select-form",value:C,onChange:Z=>M(Z.target.value),disabled:_.length===0,children:_.length>0?_.map(Z=>c.jsx("option",{value:Z,children:Z},Z)):c.jsx("option",{children:"선택 불가"})})]})]}),c.jsx("hr",{className:"divider"}),c.jsxs("div",{className:"field-row",children:[c.jsx("div",{className:"field-label",children:"반납시각"}),c.jsxs("div",{className:"select-group",children:[c.jsx("select",{className:"select-form",value:R,onChange:Z=>O(Z.target.value),children:a.map(Z=>c.jsx("option",{value:Z.value,children:Z.label},Z.value))}),c.jsx("select",{className:"select-form",value:j,onChange:Z=>k(Z.target.value),children:i.map(Z=>c.jsx("option",{value:Z,children:Z},Z))})]})]}),c.jsx("hr",{className:"divider"}),c.jsxs("div",{className:"summary",children:["총 ",c.jsxs("strong",{children:[N.days>0&&`${N.days}일 `,N.hours,"시간 ",N.minutes,"분"]})," 이용"]}),c.jsxs("div",{className:"field-row",children:[c.jsx("div",{className:"field-label",children:"탑승 인원"}),c.jsxs("div",{className:"stepper-group","aria-label":"탑승 인원 선택",children:[c.jsx("button",{type:"button",className:"stepper-button","aria-label":"인원 감소",onClick:()=>D(Z=>Math.max(1,Z-1)),disabled:A<=1,children:"-"}),c.jsx("span",{className:"passenger-value-box","aria-live":"polite",children:A}),c.jsx("button",{type:"button",className:"stepper-button","aria-label":"인원 증가",onClick:()=>D(Z=>Z+1),children:"+"})]})]}),c.jsx("button",{className:"confirm-button",disabled:!N.valid,onClick:ue,children:"예약 확인하기"})]})}),c.jsxs(E3,{isOpen:z,onClose:()=>G(!1),children:[c.jsx("h2",{className:"modal-title",children:"예약 내용을 확인해주세요"}),c.jsxs("div",{className:"info-grid",children:[c.jsx("span",{className:"info-label",children:"대여"}),c.jsx("span",{className:"info-value",children:sx(U)}),c.jsx("span",{className:"info-label",children:"반납"}),c.jsx("span",{className:"info-value",children:sx(S)}),c.jsx("span",{className:"info-label",children:"총 이용"}),c.jsxs("span",{className:"info-value",children:[N.days>0&&`${N.days}일 `,N.hours>0&&`${N.hours}시간 `,N.minutes>0&&`${N.minutes}분`]}),c.jsx("span",{className:"info-label",children:"탑승 인원"}),c.jsxs("span",{className:"info-value",children:[A,"명"]})]}),c.jsx("button",{className:"confirm-button",onClick:Te,children:"지도에서 찾기"})]})]})};function Co(n){const a=n.getFullYear(),i=String(n.getMonth()+1).padStart(2,"0"),l=String(n.getDate()).padStart(2,"0");return`${a}-${i}-${l}`}function Es(n){const a=String(n.getHours()).padStart(2,"0"),i=String(n.getMinutes()).padStart(2,"0");return`${a}:${i}`}function lx(n,a){try{const[i,l,s]=n.split("-").map(Number),[d,h]=a.split(":").map(Number);return new Date(i,l-1,s,d,h,0,0)}catch{return new Date(NaN)}}function sx(n){if(isNaN(n.getTime()))return"";const a=new Date;a.setHours(0,0,0,0);const i=new Date(a);i.setDate(a.getDate()+1);const l=new Date(n);l.setHours(0,0,0,0);let s;if(l.getTime()===a.getTime())s="오늘";else if(l.getTime()===i.getTime())s="내일";else{const x=String(n.getMonth()+1).padStart(2,"0"),p=String(n.getDate()).padStart(2,"0");s=`${x}/${p}`}const d=String(n.getHours()).padStart(2,"0"),h=String(n.getMinutes()).padStart(2,"0");return`${s} ${d}:${h}`}var Ny={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cx=ct.createContext&&ct.createContext(Ny),k3=["attr","size","title"];function T3(n,a){if(n==null)return{};var i=R3(n,a),l,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(s=0;s<d.length;s++)l=d[s],!(a.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(i[l]=n[l])}return i}function R3(n,a){if(n==null)return{};var i={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;i[l]=n[l]}return i}function wc(){return wc=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},wc.apply(this,arguments)}function ux(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),i.push.apply(i,l)}return i}function Sc(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?ux(Object(i),!0).forEach(function(l){O3(n,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):ux(Object(i)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(i,l))})}return n}function O3(n,a,i){return a=A3(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function A3(n){var a=D3(n,"string");return typeof a=="symbol"?a:a+""}function D3(n,a){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,a);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function zy(n){return n&&n.map((a,i)=>ct.createElement(a.tag,Sc({key:i},a.attr),zy(a.child)))}function rt(n){return a=>ct.createElement(N3,wc({attr:Sc({},n.attr)},a),zy(n.child))}function N3(n){var a=i=>{var{attr:l,size:s,title:d}=n,h=T3(n,k3),x=s||i.size||"1em",p;return i.className&&(p=i.className),n.className&&(p=(p?p+" ":"")+n.className),ct.createElement("svg",wc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,l,h,{className:p,style:Sc(Sc({color:n.color||i.color},i.style),n.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),d&&ct.createElement("title",null,d),n.children)};return cx!==void 0?ct.createElement(cx.Consumer,null,i=>a(i)):a(Ny)}function z3(n){return rt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(n)}function L3(n){return rt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function B3(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},child:[]}]})(n)}function _3(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"},child:[]}]})(n)}function sp(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"},child:[]}]})(n)}function Oh(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(n)}function $3(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},child:[]}]})(n)}function U3(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"},child:[]}]})(n)}function Ef(n){return rt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},child:[]}]})(n)}const H3=({isOpen:n,onClose:a})=>{const{user:i,logout:l}=St(),s=()=>{l(),a()};return c.jsxs(c.Fragment,{children:[c.jsx(I3,{$isOpen:n,onClick:a}),c.jsxs(V3,{$isOpen:n,children:[c.jsx(P3,{onClick:a,children:"×"}),i&&c.jsxs(q3,{children:[c.jsxs("p",{children:[c.jsx("strong",{children:i.username}),"님, 환영합니다."]}),c.jsxs("p",{children:["(",i.role,")"]})]}),c.jsxs(F3,{children:[!i&&c.jsx("li",{children:c.jsx(Y3,{to:"/login",onClick:a,children:"로그인"})}),c.jsx("li",{children:c.jsx(Ka,{to:"/home",onClick:a,children:"홈"})}),c.jsx("li",{children:c.jsx(Ka,{to:"/reserve",onClick:a,children:"예약하기"})}),c.jsx("li",{children:c.jsx(Ka,{to:"/map",onClick:a,children:"내 주변 찾기"})}),c.jsx("li",{children:c.jsx(Ka,{to:"/notices",onClick:a,children:"공지사항"})}),i&&c.jsxs(c.Fragment,{children:[c.jsx("li",{children:c.jsx(Ka,{to:"/mypage",onClick:a,children:"마이페이지"})}),c.jsx("li",{children:c.jsx(Ka,{to:"/ocr",onClick:a,children:"면허증 등록"})})]}),i?.role==="admin"&&c.jsx("li",{children:c.jsx(Ka,{to:"/admin",onClick:a,children:"관리자 페이지"})})]}),i&&c.jsx(G3,{onClick:s,children:"로그아웃"})]})]})},I3=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({$isOpen:n})=>n?"block":"none"};
  z-index: 999;
`,V3=b.div`
  position: fixed;
  top: 0;
  right: ${({$isOpen:n})=>n?"0":"-300px"};
  width: 280px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,P3=b.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #5d4037;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;

  &:hover {
    background-color: #f5f5f5;
  }
`,q3=b.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #e7e0d9;
  margin-bottom: 16px;
  color: #5d4037;
  p {
    margin: 4px 0;
  }
`,F3=b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`,cp=mn`
  padding: 12px 0;
  cursor: pointer;
  color: #5d4037;
  font-weight: 500;
  border-radius: 8px;
  text-align: left;
  /* width: 100%; */
  display: block;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 1rem;

  &:hover {
    background-color: #f5f5f5;
  }
`,Ka=b(ia)`
  ${cp}
`,Y3=b(ia)`
  ${cp}
  background: linear-gradient(135deg, #5d4037 0%, #795548 100%);
  color: #ffffff !important;
  font-weight: 800;
  margin: 8px 0;
  border-radius: 999px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 4px 12px rgba(93, 64, 55, 0.3);
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, #4a2c20 0%, #5d4037 100%);
    box-shadow: 0 6px 16px rgba(93, 64, 55, 0.4);
    transform: translateY(-1px);
  }
`,G3=b.button`
  ${cp}
  height: 52px;
  margin-top: auto;
  border-radius: 999px;
  font-weight: 800;
  color: #fff;
  background-color: #ff4d4f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  text-align: center;

  &:hover {
    background-color: #d9363e;
  }
`,Z3=""+new URL("MocaLogo-t6DhCB_K.png",import.meta.url).href,Qa="http://localhost:8080/api";class X3{async getNotifications(){const a=localStorage.getItem("accessToken"),i=await fetch(`${Qa}/notifications`,{method:"GET",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error("알림 목록 조회에 실패했습니다.");return await i.json()}async getUnreadCount(){const a=localStorage.getItem("accessToken"),i=await fetch(`${Qa}/notifications/unread-count`,{method:"GET",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error("읽지 않은 알림 개수 조회에 실패했습니다.");return(await i.json()).unreadCount}async markAsRead(a){const i=localStorage.getItem("accessToken"),l=await fetch(`${Qa}/notifications/${a}/read`,{method:"PUT",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}});if(!l.ok)throw new Error("알림 읽음 처리에 실패했습니다.");return await l.text()}async markAllAsRead(){const a=localStorage.getItem("accessToken"),i=await fetch(`${Qa}/notifications/read-all`,{method:"PUT",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error("모든 알림 읽음 처리에 실패했습니다.");return await i.text()}async deleteAllNotifications(){const a=localStorage.getItem("accessToken"),i=await fetch(`${Qa}/notifications/all`,{method:"DELETE",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error("모든 알림 삭제에 실패했습니다.");return await i.text()}async deleteReadNotifications(){const a=localStorage.getItem("accessToken"),i=await fetch(`${Qa}/notifications/read`,{method:"DELETE",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error("읽은 알림 삭제에 실패했습니다.");return await i.text()}async deleteNotification(a){const i=localStorage.getItem("accessToken"),l=await fetch(`${Qa}/notifications/${a}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}});if(!l.ok)throw new Error("알림 삭제에 실패했습니다.");return await l.text()}getNotificationIcon(a){return{RESERVATION_CONFIRMED:"✅",RESERVATION_CANCELLED:"❌",REMINDER_24H:"⏰",REMINDER_1H:"🔔",RETURN_REMINDER:"🚗",PAYMENT_COMPLETED:"💳",LICENSE_APPROVED:"🎉",LICENSE_REJECTED:"❌"}[a]||"📢"}getNotificationColor(a){return{RESERVATION_CONFIRMED:"#22c55e",RESERVATION_CANCELLED:"#ef4444",REMINDER_24H:"#f59e0b",REMINDER_1H:"#3b82f6",RETURN_REMINDER:"#8b5cf6",PAYMENT_COMPLETED:"#06b6d4",LICENSE_APPROVED:"#10b981",LICENSE_REJECTED:"#ef4444"}[a]||"#6b7280"}formatRelativeTime(a){const i=new Date,l=new Date(a),s=i-l,d=Math.floor(s/6e4),h=Math.floor(d/60),x=Math.floor(h/24);return d<1?"방금 전":d<60?`${d}분 전`:h<24?`${h}시간 전`:x<7?`${x}일 전`:l.toLocaleDateString()}}const ea=new X3,K3=()=>{const[n,a]=v.useState([]),[i,l]=v.useState(0),[s,d]=v.useState(!1),[h,x]=v.useState(null),{user:p}=St(),{subscribe:m}=Jh(),g=v.useCallback(async()=>{if(p){d(!0),x(null);try{const k=await ea.getNotifications();a(k)}catch(k){x(k),console.error("알림 조회 실패:",k)}finally{d(!1)}}},[p]),w=v.useCallback(async()=>{if(p)try{const k=await ea.getUnreadCount();l(k)}catch(k){console.error("읽지 않은 알림 개수 조회 실패:",k)}},[p]),C=async k=>{try{await ea.markAsRead(k),a(A=>A.map(D=>D.id===k?{...D,isRead:!0}:D)),l(A=>Math.max(0,A-1)),console.log("알림 읽음 처리 완료:",k)}catch(A){console.error("알림 읽음 처리 실패:",A),g(),w()}},M=async()=>{try{await ea.markAllAsRead(),a(k=>k.map(A=>({...A,isRead:!0}))),l(0),console.log("모든 알림 읽음 처리 완료")}catch(k){console.error("모든 알림 읽음 처리 실패:",k),g(),w()}},R=async()=>{try{await ea.deleteAllNotifications(),a([]),l(0),console.log("모든 알림 삭제 완료")}catch(k){throw console.error("모든 알림 삭제 실패:",k),k}},O=async()=>{try{await ea.deleteReadNotifications(),a(k=>k.filter(D=>!D.isRead)),console.log("읽은 알림 삭제 완료")}catch(k){throw console.error("읽은 알림 삭제 실패:",k),k}},j=async k=>{try{const A=n.find(U=>U.id===k),D=A&&!A.isRead;await ea.deleteNotification(k),a(U=>U.filter(S=>S.id!==k)),D&&l(U=>Math.max(0,U-1)),console.log("알림 삭제 완료:",k)}catch(A){throw console.error("알림 삭제 실패:",A),A}};return v.useEffect(()=>{p?(g(),w()):(a([]),l(0))},[p,g,w]),v.useEffect(()=>{if(!p)return;console.log("WebSocket 이벤트 구독 시작");const k=m("notification",U=>{console.log("새 알림 수신:",U),a(S=>S.some(z=>z.id===U.id)?S:[U,...S]),l(S=>S+1),Notification.permission==="granted"&&new Notification("새 알림",{body:U.message,icon:"/favicon.ico",tag:`notification-${U.id}`})}),A=m("unreadCount",U=>{console.log("WebSocket으로부터 읽지 않은 알림 개수 업데이트:",U),l(U)}),D=m("connection",U=>{console.log("WebSocket 연결 상태:",U),U.type==="CONNECTED"&&(g(),w())});return()=>{console.log("WebSocket 이벤트 구독 해제"),k(),A(),D()}},[p,m,g,w]),v.useEffect(()=>{p&&Notification.permission==="default"&&Notification.requestPermission().then(k=>{console.log("브라우저 알림 권한:",k)})},[p]),v.useEffect(()=>{const k=()=>{p&&(console.log("페이지 포커스, 알림 상태 동기화"),w())},A=()=>{document.visibilityState==="visible"&&p&&(console.log("페이지 가시성 변경, 알림 상태 동기화"),w())};return window.addEventListener("focus",k),document.addEventListener("visibilitychange",A),()=>{window.removeEventListener("focus",k),document.removeEventListener("visibilitychange",A)}},[p,w]),v.useEffect(()=>{if(!p)return;const k=D=>{console.log("🎉 예약 생성 완료 감지:",D.detail),setTimeout(()=>{console.log("🔄 예약 완료로 인한 알림 새로고침"),g(),w()},2e3)},A=D=>{console.log("🔄 알림 새로고침 이벤트 수신:",D.detail),g(),w()};return window.addEventListener("reservationCreated",k),window.addEventListener("refreshNotifications",A),()=>{window.removeEventListener("reservationCreated",k),window.removeEventListener("refreshNotifications",A)}},[p,g,w]),{notifications:n,unreadCount:i,loading:s,error:h,refetch:g,markAsRead:C,markAllAsRead:M,deleteAllNotifications:R,deleteReadNotifications:O,deleteNotification:j}};b.div`
  position: absolute;
  top: calc(100% + 12px); /* 아이콘 아래에 약간의 간격을 둡니다 */
  right: 0;
  width: 320px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #eee;
  z-index: 1000;
  overflow: hidden;
`;b.header`
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
`;b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
`;b.li`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
  opacity: ${n=>n.read?.6:1};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;b.p`
  margin: 0 0 4px 0;
  font-size: 14px;
  color: #333;
`;b.span`
  font-size: 12px;
  color: #888;
`;b.div`
  padding: 40px 16px;
  text-align: center;
  color: #999;
`;b.footer`
  padding: 8px 16px;
  text-align: right;
  border-top: 1px solid #f0f0f0;
  background-color: #fafafa;

  & > button {
    background: none;
    border: none;
    color: #007bff;
    font-size: 13px;
    cursor: pointer;
    padding: 4px 8px;
  }
`;b.div`
  padding: 40px 16px;
  text-align: center;
  color: #666;
`;b.div`
  padding: 40px 16px;
  text-align: center;
  color: #e74c3c;
`;const Q3=({onClose:n,notificationsData:a})=>{const{notifications:i,loading:l,error:s,markAsRead:d,markAllAsRead:h,deleteAllNotifications:x,deleteReadNotifications:p,deleteNotification:m}=a,[g,w]=v.useState(null),C=async D=>{try{await d(D)}catch(U){console.error("알림 읽음 처리 실패:",U),alert("알림 읽음 처리 중 오류가 발생했습니다.")}},M=async()=>{try{await h()}catch(D){console.error("모든 알림 읽음 처리 실패:",D),alert("모든 알림 읽음 처리 중 오류가 발생했습니다.")}},R=async D=>{try{await m(D),w(null)}catch(U){console.error("알림 삭제 실패:",U),alert("알림 삭제 중 오류가 발생했습니다.")}},O=async()=>{if(window.confirm("정말로 모든 알림을 삭제하시겠습니까?"))try{await x(),alert("모든 알림이 삭제되었습니다.")}catch(D){console.error("모든 알림 삭제 실패:",D),alert("알림 삭제 중 오류가 발생했습니다.")}},j=async()=>{if(window.confirm("읽은 알림을 모두 삭제하시겠습니까?"))try{await p(),alert("읽은 알림이 삭제되었습니다.")}catch(D){console.error("읽은 알림 삭제 실패:",D),alert("읽은 알림 삭제 중 오류가 발생했습니다.")}};if(l)return c.jsxs(Mf,{children:[c.jsxs(kf,{children:[c.jsx(Tf,{children:"알림"}),c.jsx(Rf,{onClick:n,children:"×"})]}),c.jsx(n8,{children:"알림을 불러오는 중..."})]});if(s)return c.jsxs(Mf,{children:[c.jsxs(kf,{children:[c.jsx(Tf,{children:"알림"}),c.jsx(Rf,{onClick:n,children:"×"})]}),c.jsx(a8,{children:s.message||"알림을 불러오는데 실패했습니다."})]});const k=i.filter(D=>!D.isRead),A=i.filter(D=>D.isRead);return c.jsxs(Mf,{children:[c.jsxs(kf,{children:[c.jsx(Tf,{children:"알림"}),c.jsxs(J3,{children:[k.length>0&&c.jsxs(W3,{onClick:M,children:[c.jsx(_3,{size:16}),c.jsx("span",{children:"모두 읽음"})," "]}),c.jsx(Rf,{onClick:n,children:"×"})]})]}),i.length>0&&c.jsxs(e8,{children:[A.length>0&&c.jsxs(dx,{onClick:j,variant:"secondary",children:[c.jsx(Ef,{size:14}),"읽은 알림 삭제"]}),c.jsxs(dx,{onClick:O,variant:"danger",children:[c.jsx(Ef,{size:14}),"전체 삭제"]})]}),c.jsx(t8,{children:i.length===0?c.jsx(r8,{children:"새로운 알림이 없습니다."}):i.map(D=>c.jsxs(i8,{isRead:D.isRead,children:[c.jsxs(o8,{onClick:()=>!D.isRead&&C(D.id),children:[c.jsx(s8,{children:ea.getNotificationIcon(D.notificationType)}),c.jsxs(l8,{children:[c.jsx(c8,{isRead:D.isRead,children:D.title}),c.jsx(u8,{children:D.message}),c.jsx(d8,{children:ea.formatRelativeTime(D.createdAt)})]}),!D.isRead&&c.jsx(f8,{})]}),c.jsxs(h8,{children:[c.jsx(p8,{onClick:()=>w(g===D.id?null:D.id),children:c.jsx($3,{size:16})}),g===D.id&&c.jsx(m8,{children:c.jsxs(g8,{onClick:()=>R(D.id),children:[c.jsx(Ef,{size:14}),"삭제"]})})]})]},D.id))})]})},Mf=b.div`
  position: fixed;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  z-index: 1000;
  overflow: hidden;

  /* 데스크탑 */
  @media (min-width: 769px) {
    top: 70px;
    right: 20px;
    width: 400px;
    max-height: 500px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    top: 70px;
    right: 15px;
    width: 350px;
    max-width: calc(100vw - 30px);
    max-height: calc(100vh - 100px);
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    right: 10px;
    width: 320px;
    max-width: calc(100vw - 20px);
  }
`,kf=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;

  /* 모바일에서 패딩 줄이기 */
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`,Tf=b.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`,J3=b.div`
  display: flex;
  align-items: center;
  gap: 12px;

  /* 모바일에서 간격 줄이기 */
  @media (max-width: 768px) {
    gap: 8px;
  }
`,W3=b.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #3b82f6;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background: #eff6ff;
  }

  /* 모바일에서 텍스트 숨기고 아이콘만 표시 */
  @media (max-width: 480px) {
    padding: 6px;
    span {
      display: none;
    }
  }
`,Rf=b.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  &:hover {
    background: #f3f4f6;
  }
`,e8=b.div`
  display: flex;
  gap: 8px;
  padding: 12px 20px;
  border-bottom: 1px solid #f3f4f6;
  background: #fafafa;

  /* 모바일에서 세로 배치 */
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px 16px;
    gap: 6px;
  }
`,dx=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  /* 모바일에서 전체 너비 */
  @media (max-width: 480px) {
    width: 100%;
    padding: 8px 12px;
  }

  ${n=>{switch(n.variant){case"danger":return`
          background-color: #fee2e2;
          color: #dc2626;
          &:hover { background-color: #fecaca; }
        `;case"secondary":return`
          background-color: #f3f4f6;
          color: #6b7280;
          &:hover { background-color: #e5e7eb; }
        `;default:return`
          background-color: #eff6ff;
          color: #3b82f6;
          &:hover { background-color: #dbeafe; }
        `}}}
`,t8=b.div`
  max-height: 400px;
  overflow-y: auto;
`,n8=b.div`
  padding: 40px 20px;
  text-align: center;
  color: #6b7280;
`,a8=b.div`
  padding: 40px 20px;
  text-align: center;
  color: #ef4444;
`,r8=b.div`
  padding: 40px 20px;
  text-align: center;
  color: #6b7280;
`,i8=b.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f3f4f6;
  background: ${n=>n.isRead?"white":"#f8fafc"};
  position: relative;

  &:hover {
    background: ${n=>n.isRead?"#f9fafb":"#f1f5f9"};
  }

  &:last-child {
    border-bottom: none;
  }
`,o8=b.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 20px;
  flex: 1;
  cursor: ${n=>n.isRead?"default":"pointer"};

  /* 모바일에서 패딩 줄이기 */
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`,l8=b.div`
  flex: 1;
`,s8=b.div`
  font-size: 20px;
  margin-right: 12px;
  margin-top: 2px;
`,c8=b.div`
  font-weight: ${n=>n.isRead?"500":"600"};
  color: ${n=>n.isRead?"#6b7280":"#111827"};
  font-size: 14px;
  margin-bottom: 4px;
`,u8=b.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 4px;
`,d8=b.div`
  color: #9ca3af;
  font-size: 11px;
`,f8=b.div`
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  position: absolute;
  top: 16px;
  right: 60px;
`,h8=b.div`
  position: relative;
  padding: 16px 20px 16px 0;

  /* 모바일에서 패딩 줄이기 */
  @media (max-width: 768px) {
    padding: 12px 16px 12px 0;
  }
`,p8=b.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background: #f3f4f6;
    color: #6b7280;
  }
`,m8=b.div`
  position: absolute;
  top: 40px;
  right: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;

  /* 모바일에서 화면 끝에 맞춰 조정 */
  @media (max-width: 768px) {
    right: 16px;
  }

  @media (max-width: 480px) {
    right: 8px;
    left: auto;
    transform: translateX(0);
  }
`,g8=b.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  font-size: 12px;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
    color: #ef4444;
  }
`,x8=({notificationsData:n})=>{const[a,i]=v.useState(!1),{getConnectionStatus:l}=Jh(),s=()=>{i(!a)},d=()=>{i(!1)};return l(),c.jsxs(c.Fragment,{children:[c.jsx(b8,{onClick:s,children:c.jsxs(v8,{children:[c.jsx(B3,{size:22}),n.unreadCount>0&&c.jsx(y8,{})]})}),a&&c.jsx(Q3,{onClose:d,notificationsData:n})]})},b8=b.div`
  position: relative;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`,v8=b.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,y8=b.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  border: 2px solid white;
`,w8=()=>{const n=Je(),a=Tt(),{user:i}=St(),l=K3(),[s,d]=v.useState(!1),[h,x]=v.useState(!1),p=v.useRef(null);v.useEffect(()=>{const g=w=>{p.current&&!p.current.contains(w.target)&&x(!1)};return h&&document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[h]);const m=a.pathname==="/notices"||a.pathname==="/mypage"||a.pathname==="/faq"||a.pathname==="/reserve";return c.jsxs(c.Fragment,{children:[c.jsxs(S8,{children:[c.jsx(j8,{src:Z3,alt:"Moca 로고",onClick:()=>n("/")}),c.jsxs(C8,{children:[i&&c.jsx(x8,{notificationsData:l}),c.jsx(E8,{onClick:()=>d(!0),"aria-label":"메뉴",children:c.jsx(U3,{size:22})})]})]}),c.jsx(H3,{isOpen:s,onClose:()=>d(!1)}),c.jsx(M8,{$noPadding:m,children:c.jsx(Ev,{})})]})},S8=b.header`
  position: relative;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-bottom: 1px solid #e7e0d9; /* Moca: Beige Border */
  width: 100%;
  box-sizing: border-box;
`,j8=b.img`
  height: 50px;
  cursor: pointer;
`,C8=b.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px;
`,E8=b.button`
  --button-size: 40px; /* 버튼 크기를 변수로 관리하여 정사각형을 보장합니다 */
  width: var(--button-size);
  height: var(--button-size);
  display: grid;
  place-items: center;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: #5d4037; /* Moca: Dark Brown */
`,M8=b.main`
  padding: ${({$noPadding:n})=>n?"0":"16px"};
  display: grid;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;

  /* 앱 전체에 일관된 폰트를 적용하여 통일성을 높입니다. */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    sans-serif;
`,ii=typeof window<"u"&&typeof document<"u"?v.useLayoutEffect:v.useEffect,ft=(n,a,i)=>{ii(()=>{if(!n||!i)return;const l=function(){for(var s=arguments.length,d=new Array(s),h=0;h<s;h++)d[h]=arguments[h];return d===void 0?i(n):i(n,...d)};return kakao.maps.event.addListener(n,a,l),()=>{kakao.maps.event.removeListener(n,a,l)}},[n,a,i])},Ly="__react-kakao-maps-sdk__";let Eo=(function(n){return n[n.INITIALIZED=0]="INITIALIZED",n[n.LOADING=1]="LOADING",n[n.SUCCESS=2]="SUCCESS",n[n.FAILURE=3]="FAILURE",n})({});const k8=`${Ly}_Loader`;class Fe{static loadEventCallback=new Set;callbacks=[];done=!1;loading=!1;errors=[];constructor(a){let{appkey:i,id:l=k8,libraries:s=[],nonce:d,retries:h=3,url:x="//dapi.kakao.com/v2/maps/sdk.js"}=a;if(this.id=l,this.appkey=i,this.libraries=s,this.nonce=d,this.retries=h,this.url=x,Fe.instance&&!Fe.equalOptions(this.options,Fe.instance.options)&&!Fe.equalOptions(this.options,Fe.instance.options))switch(Fe.instance.status){case Eo.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(Fe.instance.options,null,2)}`);default:Fe.instance.reset(),Fe.instance=this;break}return Fe.instance||(Fe.instance=this),Fe.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(a){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(a),Fe.loadEventCallback.add(a),a}static removeLoadEventLisnter(a){return Fe.loadEventCallback.delete(a)}load(){return new Promise((a,i)=>{this.loadCallback(l=>{l?i(l):a(window.kakao)})})}get status(){return this.onEvent?Eo.FAILURE:this.done?Eo.SUCCESS:this.loading?Eo.LOADING:Eo.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(a){this.callbacks.push(a),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const a=this.createUrl(),i=document.createElement("script");i.id=this.id,i.type="text/javascript",i.src=a,i.onerror=this.loadErrorCallback.bind(this),i.onload=this.callback.bind(this),i.defer=!0,i.async=!0,this.nonce&&(i.nonce=this.nonce),document.head.appendChild(i)}loadErrorCallback(a){if(this.errors.push(a),this.errors.length<=this.retries){const i=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${i} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},i)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(i=>{i(this.onEvent)}),this.callbacks=[],Fe.loadEventCallback.forEach(i=>{i(this.onEvent)})}createUrl(){let a=this.url;return a+=`?appkey=${this.appkey}`,this.libraries.length&&(a+=`&libraries=${this.libraries.join(",")}`),a+="&autoload=false",a}deleteScript(){const a=document.getElementById(this.id);a&&a.remove()}callback(){kakao.maps.load(()=>{Fe.instance.done=!0,Fe.instance.loading=!1,Fe.instance.callbacks.forEach(a=>{a(Fe.instance.onEvent)}),Fe.instance.callbacks=[],Fe.loadEventCallback.forEach(a=>{a(Fe.instance.onEvent)})})}static equalOptions(a,i){if(a.appkey!==i.appkey||a.id!==i.id||a.libraries.length!==i.libraries.length)return!1;for(let l=0;l<a.libraries.length;++l)if(a.libraries[l]!==i.libraries[l])return!1;return!(a.nonce!==i.nonce||a.retries!==i.retries||a.url!==i.url)}}const Qe=function(n,a){for(var i=arguments.length,l=new Array(i>2?i-2:0),s=2;s<i;s++)l[s-2]=arguments[s];ii(()=>{!n||l.every(d=>typeof d>"u")||n[a].call(n,...l)},[n,a,...l])},By=ct.createContext(void 0),T8=ct.forwardRef(function(a,i){let{id:l,as:s,children:d,center:h,isPanto:x=!1,padding:p=32,disableDoubleClick:m,disableDoubleClickZoom:g,draggable:w,zoomable:C,keyboardShortcuts:M,level:R,maxLevel:O,minLevel:j,mapTypeId:k,projectionId:A,scrollwheel:D,tileAnimation:U,onBoundsChanged:S,onCenterChanged:_,onClick:z,onDoubleClick:G,onDrag:N,onDragEnd:Y,onDragStart:ne,onIdle:ie,onMaptypeidChanged:ue,onMouseMove:Te,onRightClick:Z,onTileLoaded:T,onZoomChanged:I,onZoomStart:J,onCreate:oe,...B}=a;const K=s||"div",[te,re]=v.useState(!1),[ae,xe]=v.useState(),le=v.useRef(null);return ii(()=>{const je=Fe.addLoadEventLisnter(he=>re(!he));return()=>{Fe.removeLoadEventLisnter(je)}},[]),ii(()=>{if(!te)return;const je=le.current;if(!je)return;const he="lat"in h?new kakao.maps.LatLng(h.lat,h.lng):new kakao.maps.Coords(h.x,h.y),Xe=new kakao.maps.Map(je,{center:he,disableDoubleClick:m,disableDoubleClickZoom:g,draggable:w,keyboardShortcuts:M,level:R,mapTypeId:typeof k=="string"?kakao.maps.MapTypeId[k]:k,projectionId:A,scrollwheel:D,tileAnimation:U});return xe(Xe),()=>{je.innerHTML=""}},[te,m,g,U]),v.useImperativeHandle(i,()=>ae,[ae]),ii(()=>{!ae||!oe||oe(ae)},[ae,oe]),ii(()=>{if(!ae)return;let je=ae.getCenter();je instanceof kakao.maps.Coords&&(je=je.toLatLng());const he="lat"in h?new kakao.maps.LatLng(h.lat,h.lng):new kakao.maps.Coords(h.x,h.y);he instanceof kakao.maps.LatLng&&he.equals(je)||he instanceof kakao.maps.Coords&&he.toLatLng().equals(je)||(x?ae.panTo(he,p):ae.setCenter(he))},[ae,h.lat,h.lng,h.x,h.y]),Qe(ae,"setDraggable",w),Qe(ae,"setZoomable",C),Qe(ae,"setKeyboardShortcuts",M),Qe(ae,"setLevel",R),Qe(ae,"setMapTypeId",te?typeof k=="string"?kakao.maps.MapTypeId[k]:k:void 0),Qe(ae,"setProjectionId",A),Qe(ae,"setMinLevel",O),Qe(ae,"setMaxLevel",j),ft(ae,"bounds_changed",S),ft(ae,"center_changed",_),ft(ae,"click",z),ft(ae,"dblclick",G),ft(ae,"drag",N),ft(ae,"dragstart",ne),ft(ae,"dragend",Y),ft(ae,"idle",ie),ft(ae,"maptypeid_changed",ue),ft(ae,"mousemove",Te),ft(ae,"rightclick",Z),ft(ae,"tilesloaded",T),ft(ae,"zoom_changed",I),ft(ae,"zoom_start",J),c.jsxs(c.Fragment,{children:[c.jsx(K,{id:l||`${Ly}_Map`,...B,ref:le}),ae&&c.jsx(By.Provider,{value:ae,children:d})]})}),_y=n=>{const a=v.useContext(By);if(!a)throw new Error(`${n?n+" Component":"useMap"} must exist inside Map Component!`);return a},R8=ct.forwardRef(function(a,i){let{map:l,position:s,marker:d,children:h,altitude:x,disableAutoPan:p,range:m,removable:g,zIndex:w,onCreate:C}=a;const M=v.useMemo(()=>{const O=document.createElement("div");return O.style.display="none",new kakao.maps.InfoWindow({altitude:x,disableAutoPan:p,range:m,removable:g,zIndex:w,content:O,position:s})},[p,g]),R=v.useMemo(()=>M.getContent(),[M]);return v.useImperativeHandle(i,()=>M,[M]),v.useLayoutEffect(()=>(M.open(l,d),()=>{M.close()}),[l,d]),v.useLayoutEffect(()=>{C&&C(M)},[M,C]),Qe(M,"setPosition",s),Qe(M,"setAltitude",x),Qe(M,"setRange",m),Qe(M,"setZIndex",w),zv.createPortal(h,R.parentElement??R)}),$y=ct.createContext(void 0),O8=ct.forwardRef(function(a,i){let{map:l,position:s,children:d,altitude:h,clickable:x,draggable:p,image:m,infoWindowOptions:g,onCreate:w,onClick:C,onDragEnd:M,onDragStart:R,onMouseOut:O,onMouseOver:j,opacity:k,range:A,title:D,zIndex:U}=a;const S=v.useContext($y),_=v.useMemo(()=>m&&new kakao.maps.MarkerImage(m.src,new kakao.maps.Size(m.size.width,m.size.height),{alt:m.options?.alt,coords:m.options?.coords,offset:m.options?.offset&&new kakao.maps.Point(m.options?.offset.x,m.options?.offset.y),shape:m.options?.shape,spriteOrigin:m.options?.spriteOrigin&&new kakao.maps.Point(m.options?.spriteOrigin.x,m.options?.spriteOrigin.y),spriteSize:m.options?.spriteSize&&new kakao.maps.Size(m.options?.spriteSize.width,m.options?.spriteSize.height)}),[JSON.stringify(m)]),z=v.useMemo(()=>new kakao.maps.Marker({altitude:h,clickable:x,draggable:p,image:_,opacity:k,range:A,title:D,zIndex:U,position:s}),[]);return v.useImperativeHandle(i,()=>z,[z]),v.useLayoutEffect(()=>S?(S.addMarker(z,!0),()=>S.removeMarker(z,!0)):(z.setMap(l),()=>z.setMap(null)),[l,S,z]),v.useLayoutEffect(()=>{w&&w(z)},[z,w]),Qe(z,"setPosition",s),Qe(z,"setImage",_),Qe(z,"setAltitude",h),Qe(z,"setClickable",x),Qe(z,"setDraggable",p),Qe(z,"setOpacity",k),Qe(z,"setRange",A),Qe(z,"setTitle",D),Qe(z,"setZIndex",U),ft(z,"click",C),ft(z,"dragstart",R),ft(z,"dragend",M),ft(z,"mouseout",O),ft(z,"mouseover",j),d?c.jsx(R8,{position:s,map:l,marker:z,altitude:g?.altitude,disableAutoPan:g?.disableAutoPan,range:g?.range,removable:g?.removable,zIndex:g?.zIndex,children:d}):null}),A8=ct.forwardRef(function(a,i){let{position:l,...s}=a;const d=_y("MapMarker"),h=v.useMemo(()=>"lat"in l?new kakao.maps.LatLng(l.lat,l.lng):new kakao.maps.Coords(l.x,l.y).toLatLng(),[l.lat,l.lng,l.x,l.y]);return c.jsx(O8,{map:d,position:h,...s,ref:i})}),D8=ct.forwardRef(function(a,i){let{position:l,children:s,clickable:d,xAnchor:h,yAnchor:x,zIndex:p,onCreate:m}=a;const g=v.useContext($y),w=_y("CustomOverlayMap"),C=v.useMemo(()=>new kakao.maps.LatLng(l.lat,l.lng),[l.lat,l.lng]),M=v.useMemo(()=>{const O=document.createElement("div");return O.style.display="none",new kakao.maps.CustomOverlay({clickable:d,xAnchor:h,yAnchor:x,zIndex:p,position:C,content:O})},[d,h,x]),R=v.useMemo(()=>M.getContent(),[M]);return v.useImperativeHandle(i,()=>M,[M]),v.useLayoutEffect(()=>{if(w)return g?g.addMarker(M,!0):M.setMap(w),()=>{g?g.removeMarker(M,!0):M.setMap(null)}},[w,g,M]),v.useLayoutEffect(()=>{m&&m(M)},[M,m]),Qe(M,"setPosition",C),Qe(M,"setZIndex",p),R.parentElement&&zv.createPortal(s,R.parentElement)}),N8=n=>{const[a,i]=v.useState([!0,void 0]);return v.useEffect(()=>{new Fe({...n}).load().then(()=>i([!1,void 0])).catch(l=>{i([!1,l])})},[JSON.stringify(n)]),a};function dr(n){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},dr(n)}function z8(n,a){if(dr(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,a);if(dr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function Uy(n){var a=z8(n,"string");return dr(a)=="symbol"?a:a+""}function Vo(n,a,i){return(a=Uy(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function fx(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);a&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),i.push.apply(i,l)}return i}function fe(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?fx(Object(i),!0).forEach(function(l){Vo(n,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):fx(Object(i)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(i,l))})}return n}function L8(n){if(Array.isArray(n))return n}function B8(n,a){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var l,s,d,h,x=[],p=!0,m=!1;try{if(d=(i=i.call(n)).next,a===0){if(Object(i)!==i)return;p=!1}else for(;!(p=(l=d.call(i)).done)&&(x.push(l.value),x.length!==a);p=!0);}catch(g){m=!0,s=g}finally{try{if(!p&&i.return!=null&&(h=i.return(),Object(h)!==h))return}finally{if(m)throw s}}return x}}function Ah(n,a){(a==null||a>n.length)&&(a=n.length);for(var i=0,l=Array(a);i<a;i++)l[i]=n[i];return l}function Hy(n,a){if(n){if(typeof n=="string")return Ah(n,a);var i={}.toString.call(n).slice(8,-1);return i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set"?Array.from(n):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Ah(n,a):void 0}}function _8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function na(n,a){return L8(n)||B8(n,a)||Hy(n,a)||_8()}function $8(n,a){if(n==null)return{};var i={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;i[l]=n[l]}return i}function oa(n,a){if(n==null)return{};var i,l,s=$8(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)i=d[l],a.indexOf(i)===-1&&{}.propertyIsEnumerable.call(n,i)&&(s[i]=n[i])}return s}var U8=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function H8(n){var a=n.defaultInputValue,i=a===void 0?"":a,l=n.defaultMenuIsOpen,s=l===void 0?!1:l,d=n.defaultValue,h=d===void 0?null:d,x=n.inputValue,p=n.menuIsOpen,m=n.onChange,g=n.onInputChange,w=n.onMenuClose,C=n.onMenuOpen,M=n.value,R=oa(n,U8),O=v.useState(x!==void 0?x:i),j=na(O,2),k=j[0],A=j[1],D=v.useState(p!==void 0?p:s),U=na(D,2),S=U[0],_=U[1],z=v.useState(M!==void 0?M:h),G=na(z,2),N=G[0],Y=G[1],ne=v.useCallback(function(J,oe){typeof m=="function"&&m(J,oe),Y(J)},[m]),ie=v.useCallback(function(J,oe){var B;typeof g=="function"&&(B=g(J,oe)),A(B!==void 0?B:J)},[g]),ue=v.useCallback(function(){typeof C=="function"&&C(),_(!0)},[C]),Te=v.useCallback(function(){typeof w=="function"&&w(),_(!1)},[w]),Z=x!==void 0?x:k,T=p!==void 0?p:S,I=M!==void 0?M:N;return fe(fe({},R),{},{inputValue:Z,menuIsOpen:T,onChange:ne,onInputChange:ie,onMenuClose:Te,onMenuOpen:ue,value:I})}function ge(){return ge=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var l in i)({}).hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},ge.apply(null,arguments)}function I8(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function hx(n,a){for(var i=0;i<a.length;i++){var l=a[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,Uy(l.key),l)}}function V8(n,a,i){return a&&hx(n.prototype,a),i&&hx(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function Dh(n,a){return Dh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,l){return i.__proto__=l,i},Dh(n,a)}function P8(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&Dh(n,a)}function jc(n){return jc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},jc(n)}function Iy(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Iy=function(){return!!n})()}function q8(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function F8(n,a){if(a&&(dr(a)=="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q8(n)}function Y8(n){var a=Iy();return function(){var i,l=jc(n);if(a){var s=jc(this).constructor;i=Reflect.construct(l,arguments,s)}else i=l.apply(this,arguments);return F8(this,i)}}function G8(n){if(Array.isArray(n))return Ah(n)}function Z8(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function X8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function up(n){return G8(n)||Z8(n)||Hy(n)||X8()}function K8(n){if(n.sheet)return n.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===n)return document.styleSheets[a]}function Q8(n){var a=document.createElement("style");return a.setAttribute("data-emotion",n.key),n.nonce!==void 0&&a.setAttribute("nonce",n.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}var J8=(function(){function n(i){var l=this;this._insertTag=function(s){var d;l.tags.length===0?l.insertionPoint?d=l.insertionPoint.nextSibling:l.prepend?d=l.container.firstChild:d=l.before:d=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(s,d),l.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var a=n.prototype;return a.hydrate=function(l){l.forEach(this._insertTag)},a.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Q8(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var d=K8(s);try{d.insertRule(l,d.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(l));this.ctr++},a.flush=function(){this.tags.forEach(function(l){var s;return(s=l.parentNode)==null?void 0:s.removeChild(l)}),this.tags=[],this.ctr=0},n})(),Mt="-ms-",Cc="-moz-",Ne="-webkit-",Vy="comm",dp="rule",fp="decl",W8="@import",Py="@keyframes",eC="@layer",tC=Math.abs,Fc=String.fromCharCode,nC=Object.assign;function aC(n,a){return wt(n,0)^45?(((a<<2^wt(n,0))<<2^wt(n,1))<<2^wt(n,2))<<2^wt(n,3):0}function qy(n){return n.trim()}function rC(n,a){return(n=a.exec(n))?n[0]:n}function ze(n,a,i){return n.replace(a,i)}function Nh(n,a){return n.indexOf(a)}function wt(n,a){return n.charCodeAt(a)|0}function Xo(n,a,i){return n.slice(a,i)}function An(n){return n.length}function hp(n){return n.length}function Ms(n,a){return a.push(n),n}function iC(n,a){return n.map(a).join("")}var Yc=1,fi=1,Fy=0,Ut=0,st=0,vi="";function Gc(n,a,i,l,s,d,h){return{value:n,root:a,parent:i,type:l,props:s,children:d,line:Yc,column:fi,length:h,return:""}}function Mo(n,a){return nC(Gc("",null,null,"",null,null,0),n,{length:-n.length},a)}function oC(){return st}function lC(){return st=Ut>0?wt(vi,--Ut):0,fi--,st===10&&(fi=1,Yc--),st}function Qt(){return st=Ut<Fy?wt(vi,Ut++):0,fi++,st===10&&(fi=1,Yc++),st}function Nn(){return wt(vi,Ut)}function dc(){return Ut}function ol(n,a){return Xo(vi,n,a)}function Ko(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yy(n){return Yc=fi=1,Fy=An(vi=n),Ut=0,[]}function Gy(n){return vi="",n}function fc(n){return qy(ol(Ut-1,zh(n===91?n+2:n===40?n+1:n)))}function sC(n){for(;(st=Nn())&&st<33;)Qt();return Ko(n)>2||Ko(st)>3?"":" "}function cC(n,a){for(;--a&&Qt()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return ol(n,dc()+(a<6&&Nn()==32&&Qt()==32))}function zh(n){for(;Qt();)switch(st){case n:return Ut;case 34:case 39:n!==34&&n!==39&&zh(st);break;case 40:n===41&&zh(n);break;case 92:Qt();break}return Ut}function uC(n,a){for(;Qt()&&n+st!==57;)if(n+st===84&&Nn()===47)break;return"/*"+ol(a,Ut-1)+"*"+Fc(n===47?n:Qt())}function dC(n){for(;!Ko(Nn());)Qt();return ol(n,Ut)}function fC(n){return Gy(hc("",null,null,null,[""],n=Yy(n),0,[0],n))}function hc(n,a,i,l,s,d,h,x,p){for(var m=0,g=0,w=h,C=0,M=0,R=0,O=1,j=1,k=1,A=0,D="",U=s,S=d,_=l,z=D;j;)switch(R=A,A=Qt()){case 40:if(R!=108&&wt(z,w-1)==58){Nh(z+=ze(fc(A),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:z+=fc(A);break;case 9:case 10:case 13:case 32:z+=sC(R);break;case 92:z+=cC(dc()-1,7);continue;case 47:switch(Nn()){case 42:case 47:Ms(hC(uC(Qt(),dc()),a,i),p);break;default:z+="/"}break;case 123*O:x[m++]=An(z)*k;case 125*O:case 59:case 0:switch(A){case 0:case 125:j=0;case 59+g:k==-1&&(z=ze(z,/\f/g,"")),M>0&&An(z)-w&&Ms(M>32?mx(z+";",l,i,w-1):mx(ze(z," ","")+";",l,i,w-2),p);break;case 59:z+=";";default:if(Ms(_=px(z,a,i,m,g,s,x,D,U=[],S=[],w),d),A===123)if(g===0)hc(z,a,_,_,U,d,w,x,S);else switch(C===99&&wt(z,3)===110?100:C){case 100:case 108:case 109:case 115:hc(n,_,_,l&&Ms(px(n,_,_,0,0,s,x,D,s,U=[],w),S),s,S,w,x,l?U:S);break;default:hc(z,_,_,_,[""],S,0,x,S)}}m=g=M=0,O=k=1,D=z="",w=h;break;case 58:w=1+An(z),M=R;default:if(O<1){if(A==123)--O;else if(A==125&&O++==0&&lC()==125)continue}switch(z+=Fc(A),A*O){case 38:k=g>0?1:(z+="\f",-1);break;case 44:x[m++]=(An(z)-1)*k,k=1;break;case 64:Nn()===45&&(z+=fc(Qt())),C=Nn(),g=w=An(D=z+=dC(dc())),A++;break;case 45:R===45&&An(z)==2&&(O=0)}}return d}function px(n,a,i,l,s,d,h,x,p,m,g){for(var w=s-1,C=s===0?d:[""],M=hp(C),R=0,O=0,j=0;R<l;++R)for(var k=0,A=Xo(n,w+1,w=tC(O=h[R])),D=n;k<M;++k)(D=qy(O>0?C[k]+" "+A:ze(A,/&\f/g,C[k])))&&(p[j++]=D);return Gc(n,a,i,s===0?dp:x,p,m,g)}function hC(n,a,i){return Gc(n,a,i,Vy,Fc(oC()),Xo(n,2,-2),0)}function mx(n,a,i,l){return Gc(n,a,i,fp,Xo(n,0,l),Xo(n,l+1,-1),l)}function oi(n,a){for(var i="",l=hp(n),s=0;s<l;s++)i+=a(n[s],s,n,a)||"";return i}function pC(n,a,i,l){switch(n.type){case eC:if(n.children.length)break;case W8:case fp:return n.return=n.return||n.value;case Vy:return"";case Py:return n.return=n.value+"{"+oi(n.children,l)+"}";case dp:n.value=n.props.join(",")}return An(i=oi(n.children,l))?n.return=n.value+"{"+i+"}":""}function mC(n){var a=hp(n);return function(i,l,s,d){for(var h="",x=0;x<a;x++)h+=n[x](i,l,s,d)||"";return h}}function gC(n){return function(a){a.root||(a=a.return)&&n(a)}}var xC=function(a,i,l){for(var s=0,d=0;s=d,d=Nn(),s===38&&d===12&&(i[l]=1),!Ko(d);)Qt();return ol(a,Ut)},bC=function(a,i){var l=-1,s=44;do switch(Ko(s)){case 0:s===38&&Nn()===12&&(i[l]=1),a[l]+=xC(Ut-1,i,l);break;case 2:a[l]+=fc(s);break;case 4:if(s===44){a[++l]=Nn()===58?"&\f":"",i[l]=a[l].length;break}default:a[l]+=Fc(s)}while(s=Qt());return a},vC=function(a,i){return Gy(bC(Yy(a),i))},gx=new WeakMap,yC=function(a){if(!(a.type!=="rule"||!a.parent||a.length<1)){for(var i=a.value,l=a.parent,s=a.column===l.column&&a.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(a.props.length===1&&i.charCodeAt(0)!==58&&!gx.get(l))&&!s){gx.set(a,!0);for(var d=[],h=vC(i,d),x=l.props,p=0,m=0;p<h.length;p++)for(var g=0;g<x.length;g++,m++)a.props[m]=d[p]?h[p].replace(/&\f/g,x[g]):x[g]+" "+h[p]}}},wC=function(a){if(a.type==="decl"){var i=a.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(a.return="",a.value="")}};function Zy(n,a){switch(aC(n,a)){case 5103:return Ne+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ne+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ne+n+Cc+n+Mt+n+n;case 6828:case 4268:return Ne+n+Mt+n+n;case 6165:return Ne+n+Mt+"flex-"+n+n;case 5187:return Ne+n+ze(n,/(\w+).+(:[^]+)/,Ne+"box-$1$2"+Mt+"flex-$1$2")+n;case 5443:return Ne+n+Mt+"flex-item-"+ze(n,/flex-|-self/,"")+n;case 4675:return Ne+n+Mt+"flex-line-pack"+ze(n,/align-content|flex-|-self/,"")+n;case 5548:return Ne+n+Mt+ze(n,"shrink","negative")+n;case 5292:return Ne+n+Mt+ze(n,"basis","preferred-size")+n;case 6060:return Ne+"box-"+ze(n,"-grow","")+Ne+n+Mt+ze(n,"grow","positive")+n;case 4554:return Ne+ze(n,/([^-])(transform)/g,"$1"+Ne+"$2")+n;case 6187:return ze(ze(ze(n,/(zoom-|grab)/,Ne+"$1"),/(image-set)/,Ne+"$1"),n,"")+n;case 5495:case 3959:return ze(n,/(image-set\([^]*)/,Ne+"$1$`$1");case 4968:return ze(ze(n,/(.+:)(flex-)?(.*)/,Ne+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ne+n+n;case 4095:case 3583:case 4068:case 2532:return ze(n,/(.+)-inline(.+)/,Ne+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(n)-1-a>6)switch(wt(n,a+1)){case 109:if(wt(n,a+4)!==45)break;case 102:return ze(n,/(.+:)(.+)-([^]+)/,"$1"+Ne+"$2-$3$1"+Cc+(wt(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~Nh(n,"stretch")?Zy(ze(n,"stretch","fill-available"),a)+n:n}break;case 4949:if(wt(n,a+1)!==115)break;case 6444:switch(wt(n,An(n)-3-(~Nh(n,"!important")&&10))){case 107:return ze(n,":",":"+Ne)+n;case 101:return ze(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ne+(wt(n,14)===45?"inline-":"")+"box$3$1"+Ne+"$2$3$1"+Mt+"$2box$3")+n}break;case 5936:switch(wt(n,a+11)){case 114:return Ne+n+Mt+ze(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ne+n+Mt+ze(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ne+n+Mt+ze(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Ne+n+Mt+n+n}return n}var SC=function(a,i,l,s){if(a.length>-1&&!a.return)switch(a.type){case fp:a.return=Zy(a.value,a.length);break;case Py:return oi([Mo(a,{value:ze(a.value,"@","@"+Ne)})],s);case dp:if(a.length)return iC(a.props,function(d){switch(rC(d,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return oi([Mo(a,{props:[ze(d,/:(read-\w+)/,":"+Cc+"$1")]})],s);case"::placeholder":return oi([Mo(a,{props:[ze(d,/:(plac\w+)/,":"+Ne+"input-$1")]}),Mo(a,{props:[ze(d,/:(plac\w+)/,":"+Cc+"$1")]}),Mo(a,{props:[ze(d,/:(plac\w+)/,Mt+"input-$1")]})],s)}return""})}},jC=[SC],CC=function(a){var i=a.key;if(i==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(O){var j=O.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(O),O.setAttribute("data-s",""))})}var s=a.stylisPlugins||jC,d={},h,x=[];h=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(O){for(var j=O.getAttribute("data-emotion").split(" "),k=1;k<j.length;k++)d[j[k]]=!0;x.push(O)});var p,m=[yC,wC];{var g,w=[pC,gC(function(O){g.insert(O)})],C=mC(m.concat(s,w)),M=function(j){return oi(fC(j),C)};p=function(j,k,A,D){g=A,M(j?j+"{"+k.styles+"}":k.styles),D&&(R.inserted[k.name]=!0)}}var R={key:i,sheet:new J8({key:i,container:h,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:d,registered:{},insert:p};return R.sheet.hydrate(x),R},Of={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function EC(){if(xx)return Le;xx=1;var n=typeof Symbol=="function"&&Symbol.for,a=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,d=n?Symbol.for("react.profiler"):60114,h=n?Symbol.for("react.provider"):60109,x=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,m=n?Symbol.for("react.concurrent_mode"):60111,g=n?Symbol.for("react.forward_ref"):60112,w=n?Symbol.for("react.suspense"):60113,C=n?Symbol.for("react.suspense_list"):60120,M=n?Symbol.for("react.memo"):60115,R=n?Symbol.for("react.lazy"):60116,O=n?Symbol.for("react.block"):60121,j=n?Symbol.for("react.fundamental"):60117,k=n?Symbol.for("react.responder"):60118,A=n?Symbol.for("react.scope"):60119;function D(S){if(typeof S=="object"&&S!==null){var _=S.$$typeof;switch(_){case a:switch(S=S.type,S){case p:case m:case l:case d:case s:case w:return S;default:switch(S=S&&S.$$typeof,S){case x:case g:case R:case M:case h:return S;default:return _}}case i:return _}}}function U(S){return D(S)===m}return Le.AsyncMode=p,Le.ConcurrentMode=m,Le.ContextConsumer=x,Le.ContextProvider=h,Le.Element=a,Le.ForwardRef=g,Le.Fragment=l,Le.Lazy=R,Le.Memo=M,Le.Portal=i,Le.Profiler=d,Le.StrictMode=s,Le.Suspense=w,Le.isAsyncMode=function(S){return U(S)||D(S)===p},Le.isConcurrentMode=U,Le.isContextConsumer=function(S){return D(S)===x},Le.isContextProvider=function(S){return D(S)===h},Le.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===a},Le.isForwardRef=function(S){return D(S)===g},Le.isFragment=function(S){return D(S)===l},Le.isLazy=function(S){return D(S)===R},Le.isMemo=function(S){return D(S)===M},Le.isPortal=function(S){return D(S)===i},Le.isProfiler=function(S){return D(S)===d},Le.isStrictMode=function(S){return D(S)===s},Le.isSuspense=function(S){return D(S)===w},Le.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===l||S===m||S===d||S===s||S===w||S===C||typeof S=="object"&&S!==null&&(S.$$typeof===R||S.$$typeof===M||S.$$typeof===h||S.$$typeof===x||S.$$typeof===g||S.$$typeof===j||S.$$typeof===k||S.$$typeof===A||S.$$typeof===O)},Le.typeOf=D,Le}var bx;function MC(){return bx||(bx=1,Of.exports=EC()),Of.exports}var Af,vx;function kC(){if(vx)return Af;vx=1;var n=MC(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[n.ForwardRef]=l,d[n.Memo]=s;function h(R){return n.isMemo(R)?s:d[R.$$typeof]||a}var x=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,C=Object.prototype;function M(R,O,j){if(typeof O!="string"){if(C){var k=w(O);k&&k!==C&&M(R,k,j)}var A=p(O);m&&(A=A.concat(m(O)));for(var D=h(R),U=h(O),S=0;S<A.length;++S){var _=A[S];if(!i[_]&&!(j&&j[_])&&!(U&&U[_])&&!(D&&D[_])){var z=g(O,_);try{x(R,_,z)}catch{}}}}return R}return Af=M,Af}kC();var TC=!0;function RC(n,a,i){var l="";return i.split(" ").forEach(function(s){n[s]!==void 0?a.push(n[s]+";"):s&&(l+=s+" ")}),l}var Xy=function(a,i,l){var s=a.key+"-"+i.name;(l===!1||TC===!1)&&a.registered[s]===void 0&&(a.registered[s]=i.styles)},OC=function(a,i,l){Xy(a,i,l);var s=a.key+"-"+i.name;if(a.inserted[i.name]===void 0){var d=i;do a.insert(i===d?"."+s:"",d,a.sheet,!0),d=d.next;while(d!==void 0)}};function AC(n){for(var a=0,i,l=0,s=n.length;s>=4;++l,s-=4)i=n.charCodeAt(l)&255|(n.charCodeAt(++l)&255)<<8|(n.charCodeAt(++l)&255)<<16|(n.charCodeAt(++l)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,a=(i&65535)*1540483477+((i>>>16)*59797<<16)^(a&65535)*1540483477+((a>>>16)*59797<<16);switch(s){case 3:a^=(n.charCodeAt(l+2)&255)<<16;case 2:a^=(n.charCodeAt(l+1)&255)<<8;case 1:a^=n.charCodeAt(l)&255,a=(a&65535)*1540483477+((a>>>16)*59797<<16)}return a^=a>>>13,a=(a&65535)*1540483477+((a>>>16)*59797<<16),((a^a>>>15)>>>0).toString(36)}var DC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NC(n){var a=Object.create(null);return function(i){return a[i]===void 0&&(a[i]=n(i)),a[i]}}var zC=/[A-Z]|^ms/g,LC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ky=function(a){return a.charCodeAt(1)===45},yx=function(a){return a!=null&&typeof a!="boolean"},Df=NC(function(n){return Ky(n)?n:n.replace(zC,"-$&").toLowerCase()}),wx=function(a,i){switch(a){case"animation":case"animationName":if(typeof i=="string")return i.replace(LC,function(l,s,d){return Dn={name:s,styles:d,next:Dn},s})}return DC[a]!==1&&!Ky(a)&&typeof i=="number"&&i!==0?i+"px":i};function Qo(n,a,i){if(i==null)return"";var l=i;if(l.__emotion_styles!==void 0)return l;switch(typeof i){case"boolean":return"";case"object":{var s=i;if(s.anim===1)return Dn={name:s.name,styles:s.styles,next:Dn},s.name;var d=i;if(d.styles!==void 0){var h=d.next;if(h!==void 0)for(;h!==void 0;)Dn={name:h.name,styles:h.styles,next:Dn},h=h.next;var x=d.styles+";";return x}return BC(n,a,i)}case"function":{if(n!==void 0){var p=Dn,m=i(n);return Dn=p,Qo(n,a,m)}break}}var g=i;return g}function BC(n,a,i){var l="";if(Array.isArray(i))for(var s=0;s<i.length;s++)l+=Qo(n,a,i[s])+";";else for(var d in i){var h=i[d];if(typeof h!="object"){var x=h;yx(x)&&(l+=Df(d)+":"+wx(d,x)+";")}else if(Array.isArray(h)&&typeof h[0]=="string"&&a==null)for(var p=0;p<h.length;p++)yx(h[p])&&(l+=Df(d)+":"+wx(d,h[p])+";");else{var m=Qo(n,a,h);switch(d){case"animation":case"animationName":{l+=Df(d)+":"+m+";";break}default:l+=d+"{"+m+"}"}}}return l}var Sx=/label:\s*([^\s;{]+)\s*(;|$)/g,Dn;function Qy(n,a,i){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var l=!0,s="";Dn=void 0;var d=n[0];if(d==null||d.raw===void 0)l=!1,s+=Qo(i,a,d);else{var h=d;s+=h[0]}for(var x=1;x<n.length;x++)if(s+=Qo(i,a,n[x]),l){var p=d;s+=p[x]}Sx.lastIndex=0;for(var m="",g;(g=Sx.exec(s))!==null;)m+="-"+g[1];var w=AC(s)+m;return{name:w,styles:s,next:Dn}}var _C=function(a){return a()},$C=y1.useInsertionEffect?y1.useInsertionEffect:!1,UC=$C||_C,Jy=v.createContext(typeof HTMLElement<"u"?CC({key:"css"}):null);Jy.Provider;var HC=function(a){return v.forwardRef(function(i,l){var s=v.useContext(Jy);return a(i,s,l)})},IC=v.createContext({}),pp={}.hasOwnProperty,Lh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",VC=function(a,i){var l={};for(var s in i)pp.call(i,s)&&(l[s]=i[s]);return l[Lh]=a,l},PC=function(a){var i=a.cache,l=a.serialized,s=a.isStringTag;return Xy(i,l,s),UC(function(){return OC(i,l,s)}),null},qC=HC(function(n,a,i){var l=n.css;typeof l=="string"&&a.registered[l]!==void 0&&(l=a.registered[l]);var s=n[Lh],d=[l],h="";typeof n.className=="string"?h=RC(a.registered,d,n.className):n.className!=null&&(h=n.className+" ");var x=Qy(d,void 0,v.useContext(IC));h+=a.key+"-"+x.name;var p={};for(var m in n)pp.call(n,m)&&m!=="css"&&m!==Lh&&(p[m]=n[m]);return p.className=h,i&&(p.ref=i),v.createElement(v.Fragment,null,v.createElement(PC,{cache:a,serialized:x,isStringTag:typeof s=="string"}),v.createElement(s,p))}),FC=qC,de=function(a,i){var l=arguments;if(i==null||!pp.call(i,"css"))return v.createElement.apply(void 0,l);var s=l.length,d=new Array(s);d[0]=FC,d[1]=VC(a,i);for(var h=2;h<s;h++)d[h]=l[h];return v.createElement.apply(null,d)};(function(n){var a;a||(a=n.JSX||(n.JSX={}))})(de||(de={}));function mp(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return Qy(a)}function YC(){var n=mp.apply(void 0,arguments),a="animation-"+n.name;return{name:a,styles:"@keyframes "+a+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function GC(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}const ZC=Math.min,XC=Math.max,Ec=Math.round,ks=Math.floor,Mc=n=>({x:n,y:n});function KC(n){const{x:a,y:i,width:l,height:s}=n;return{width:l,height:s,top:i,left:a,right:a+l,bottom:i+s,x:a,y:i}}function Zc(){return typeof window<"u"}function Wy(n){return t2(n)?(n.nodeName||"").toLowerCase():"#document"}function ra(n){var a;return(n==null||(a=n.ownerDocument)==null?void 0:a.defaultView)||window}function e2(n){var a;return(a=(t2(n)?n.ownerDocument:n.document)||window.document)==null?void 0:a.documentElement}function t2(n){return Zc()?n instanceof Node||n instanceof ra(n).Node:!1}function QC(n){return Zc()?n instanceof Element||n instanceof ra(n).Element:!1}function gp(n){return Zc()?n instanceof HTMLElement||n instanceof ra(n).HTMLElement:!1}function jx(n){return!Zc()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof ra(n).ShadowRoot}const JC=new Set(["inline","contents"]);function n2(n){const{overflow:a,overflowX:i,overflowY:l,display:s}=xp(n);return/auto|scroll|overlay|hidden|clip/.test(a+l+i)&&!JC.has(s)}function WC(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const eE=new Set(["html","body","#document"]);function tE(n){return eE.has(Wy(n))}function xp(n){return ra(n).getComputedStyle(n)}function nE(n){if(Wy(n)==="html")return n;const a=n.assignedSlot||n.parentNode||jx(n)&&n.host||e2(n);return jx(a)?a.host:a}function a2(n){const a=nE(n);return tE(a)?n.ownerDocument?n.ownerDocument.body:n.body:gp(a)&&n2(a)?a:a2(a)}function kc(n,a,i){var l;a===void 0&&(a=[]),i===void 0&&(i=!0);const s=a2(n),d=s===((l=n.ownerDocument)==null?void 0:l.body),h=ra(s);if(d){const x=Bh(h);return a.concat(h,h.visualViewport||[],n2(s)?s:[],x&&i?kc(x):[])}return a.concat(s,kc(s,[],i))}function Bh(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function aE(n){const a=xp(n);let i=parseFloat(a.width)||0,l=parseFloat(a.height)||0;const s=gp(n),d=s?n.offsetWidth:i,h=s?n.offsetHeight:l,x=Ec(i)!==d||Ec(l)!==h;return x&&(i=d,l=h),{width:i,height:l,$:x}}function bp(n){return QC(n)?n:n.contextElement}function Cx(n){const a=bp(n);if(!gp(a))return Mc(1);const i=a.getBoundingClientRect(),{width:l,height:s,$:d}=aE(a);let h=(d?Ec(i.width):i.width)/l,x=(d?Ec(i.height):i.height)/s;return(!h||!Number.isFinite(h))&&(h=1),(!x||!Number.isFinite(x))&&(x=1),{x:h,y:x}}const rE=Mc(0);function iE(n){const a=ra(n);return!WC()||!a.visualViewport?rE:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function oE(n,a,i){return!1}function Ex(n,a,i,l){a===void 0&&(a=!1);const s=n.getBoundingClientRect(),d=bp(n);let h=Mc(1);a&&(h=Cx(n));const x=oE()?iE(d):Mc(0);let p=(s.left+x.x)/h.x,m=(s.top+x.y)/h.y,g=s.width/h.x,w=s.height/h.y;if(d){const C=ra(d),M=l;let R=C,O=Bh(R);for(;O&&l&&M!==R;){const j=Cx(O),k=O.getBoundingClientRect(),A=xp(O),D=k.left+(O.clientLeft+parseFloat(A.paddingLeft))*j.x,U=k.top+(O.clientTop+parseFloat(A.paddingTop))*j.y;p*=j.x,m*=j.y,g*=j.x,w*=j.y,p+=D,m+=U,R=ra(O),O=Bh(R)}}return KC({width:g,height:w,x:p,y:m})}function r2(n,a){return n.x===a.x&&n.y===a.y&&n.width===a.width&&n.height===a.height}function lE(n,a){let i=null,l;const s=e2(n);function d(){var x;clearTimeout(l),(x=i)==null||x.disconnect(),i=null}function h(x,p){x===void 0&&(x=!1),p===void 0&&(p=1),d();const m=n.getBoundingClientRect(),{left:g,top:w,width:C,height:M}=m;if(x||a(),!C||!M)return;const R=ks(w),O=ks(s.clientWidth-(g+C)),j=ks(s.clientHeight-(w+M)),k=ks(g),D={rootMargin:-R+"px "+-O+"px "+-j+"px "+-k+"px",threshold:XC(0,ZC(1,p))||1};let U=!0;function S(_){const z=_[0].intersectionRatio;if(z!==p){if(!U)return h();z?h(!1,z):l=setTimeout(()=>{h(!1,1e-7)},1e3)}z===1&&!r2(m,n.getBoundingClientRect())&&h(),U=!1}try{i=new IntersectionObserver(S,{...D,root:s.ownerDocument})}catch{i=new IntersectionObserver(S,D)}i.observe(n)}return h(!0),d}function sE(n,a,i,l){l===void 0&&(l={});const{ancestorScroll:s=!0,ancestorResize:d=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:x=typeof IntersectionObserver=="function",animationFrame:p=!1}=l,m=bp(n),g=s||d?[...m?kc(m):[],...kc(a)]:[];g.forEach(k=>{s&&k.addEventListener("scroll",i,{passive:!0}),d&&k.addEventListener("resize",i)});const w=m&&x?lE(m,i):null;let C=-1,M=null;h&&(M=new ResizeObserver(k=>{let[A]=k;A&&A.target===m&&M&&(M.unobserve(a),cancelAnimationFrame(C),C=requestAnimationFrame(()=>{var D;(D=M)==null||D.observe(a)})),i()}),m&&!p&&M.observe(m),M.observe(a));let R,O=p?Ex(n):null;p&&j();function j(){const k=Ex(n);O&&!r2(O,k)&&i(),O=k,R=requestAnimationFrame(j)}return i(),()=>{var k;g.forEach(A=>{s&&A.removeEventListener("scroll",i),d&&A.removeEventListener("resize",i)}),w?.(),(k=M)==null||k.disconnect(),M=null,p&&cancelAnimationFrame(R)}}var _h=v.useLayoutEffect,cE=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Tc=function(){};function uE(n,a){return a?a[0]==="-"?n+a:n+"__"+a:n}function dE(n,a){for(var i=arguments.length,l=new Array(i>2?i-2:0),s=2;s<i;s++)l[s-2]=arguments[s];var d=[].concat(l);if(a&&n)for(var h in a)a.hasOwnProperty(h)&&a[h]&&d.push("".concat(uE(n,h)));return d.filter(function(x){return x}).map(function(x){return String(x).trim()}).join(" ")}var Mx=function(a){return yE(a)?a.filter(Boolean):dr(a)==="object"&&a!==null?[a]:[]},i2=function(a){a.className,a.clearValue,a.cx,a.getStyles,a.getClassNames,a.getValue,a.hasValue,a.isMulti,a.isRtl,a.options,a.selectOption,a.selectProps,a.setValue,a.theme;var i=oa(a,cE);return fe({},i)},tt=function(a,i,l){var s=a.cx,d=a.getStyles,h=a.getClassNames,x=a.className;return{css:d(i,a),className:s(l??{},h(i,a),x)}};function Xc(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function fE(n){return Xc(n)?window.innerHeight:n.clientHeight}function o2(n){return Xc(n)?window.pageYOffset:n.scrollTop}function Rc(n,a){if(Xc(n)){window.scrollTo(0,a);return}n.scrollTop=a}function hE(n){var a=getComputedStyle(n),i=a.position==="absolute",l=/(auto|scroll)/;if(a.position==="fixed")return document.documentElement;for(var s=n;s=s.parentElement;)if(a=getComputedStyle(s),!(i&&a.position==="static")&&l.test(a.overflow+a.overflowY+a.overflowX))return s;return document.documentElement}function pE(n,a,i,l){return i*((n=n/l-1)*n*n+1)+a}function Ts(n,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Tc,s=o2(n),d=a-s,h=10,x=0;function p(){x+=h;var m=pE(x,s,d,i);Rc(n,m),x<i?window.requestAnimationFrame(p):l(n)}p()}function kx(n,a){var i=n.getBoundingClientRect(),l=a.getBoundingClientRect(),s=a.offsetHeight/3;l.bottom+s>i.bottom?Rc(n,Math.min(a.offsetTop+a.clientHeight-n.offsetHeight+s,n.scrollHeight)):l.top-s<i.top&&Rc(n,Math.max(a.offsetTop-s,0))}function mE(n){var a=n.getBoundingClientRect();return{bottom:a.bottom,height:a.height,left:a.left,right:a.right,top:a.top,width:a.width}}function Tx(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function gE(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var l2=!1,xE={get passive(){return l2=!0}},Rs=typeof window<"u"?window:{};Rs.addEventListener&&Rs.removeEventListener&&(Rs.addEventListener("p",Tc,xE),Rs.removeEventListener("p",Tc,!1));var bE=l2;function vE(n){return n!=null}function yE(n){return Array.isArray(n)}function Os(n,a,i){return n?a:i}var wE=function(a){for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];var d=Object.entries(a).filter(function(h){var x=na(h,1),p=x[0];return!l.includes(p)});return d.reduce(function(h,x){var p=na(x,2),m=p[0],g=p[1];return h[m]=g,h},{})},SE=["children","innerProps"],jE=["children","innerProps"];function CE(n){var a=n.maxHeight,i=n.menuEl,l=n.minHeight,s=n.placement,d=n.shouldScroll,h=n.isFixedPosition,x=n.controlHeight,p=hE(i),m={placement:"bottom",maxHeight:a};if(!i||!i.offsetParent)return m;var g=p.getBoundingClientRect(),w=g.height,C=i.getBoundingClientRect(),M=C.bottom,R=C.height,O=C.top,j=i.offsetParent.getBoundingClientRect(),k=j.top,A=h?window.innerHeight:fE(p),D=o2(p),U=parseInt(getComputedStyle(i).marginBottom,10),S=parseInt(getComputedStyle(i).marginTop,10),_=k-S,z=A-O,G=_+D,N=w-D-O,Y=M-A+D+U,ne=D+O-S,ie=160;switch(s){case"auto":case"bottom":if(z>=R)return{placement:"bottom",maxHeight:a};if(N>=R&&!h)return d&&Ts(p,Y,ie),{placement:"bottom",maxHeight:a};if(!h&&N>=l||h&&z>=l){d&&Ts(p,Y,ie);var ue=h?z-U:N-U;return{placement:"bottom",maxHeight:ue}}if(s==="auto"||h){var Te=a,Z=h?_:G;return Z>=l&&(Te=Math.min(Z-U-x,a)),{placement:"top",maxHeight:Te}}if(s==="bottom")return d&&Rc(p,Y),{placement:"bottom",maxHeight:a};break;case"top":if(_>=R)return{placement:"top",maxHeight:a};if(G>=R&&!h)return d&&Ts(p,ne,ie),{placement:"top",maxHeight:a};if(!h&&G>=l||h&&_>=l){var T=a;return(!h&&G>=l||h&&_>=l)&&(T=h?_-S:G-S),d&&Ts(p,ne,ie),{placement:"top",maxHeight:T}}return{placement:"bottom",maxHeight:a};default:throw new Error('Invalid placement provided "'.concat(s,'".'))}return m}function EE(n){var a={bottom:"top",top:"bottom"};return n?a[n]:"bottom"}var s2=function(a){return a==="auto"?"bottom":a},ME=function(a,i){var l,s=a.placement,d=a.theme,h=d.borderRadius,x=d.spacing,p=d.colors;return fe((l={label:"menu"},Vo(l,EE(s),"100%"),Vo(l,"position","absolute"),Vo(l,"width","100%"),Vo(l,"zIndex",1),l),i?{}:{backgroundColor:p.neutral0,borderRadius:h,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:x.menuGutter,marginTop:x.menuGutter})},c2=v.createContext(null),kE=function(a){var i=a.children,l=a.minMenuHeight,s=a.maxMenuHeight,d=a.menuPlacement,h=a.menuPosition,x=a.menuShouldScrollIntoView,p=a.theme,m=v.useContext(c2)||{},g=m.setPortalPlacement,w=v.useRef(null),C=v.useState(s),M=na(C,2),R=M[0],O=M[1],j=v.useState(null),k=na(j,2),A=k[0],D=k[1],U=p.spacing.controlHeight;return _h(function(){var S=w.current;if(S){var _=h==="fixed",z=x&&!_,G=CE({maxHeight:s,menuEl:S,minHeight:l,placement:d,shouldScroll:z,isFixedPosition:_,controlHeight:U});O(G.maxHeight),D(G.placement),g?.(G.placement)}},[s,d,h,x,l,g,U]),i({ref:w,placerProps:fe(fe({},a),{},{placement:A||s2(d),maxHeight:R})})},TE=function(a){var i=a.children,l=a.innerRef,s=a.innerProps;return de("div",ge({},tt(a,"menu",{menu:!0}),{ref:l},s),i)},RE=TE,OE=function(a,i){var l=a.maxHeight,s=a.theme.spacing.baseUnit;return fe({maxHeight:l,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:s,paddingTop:s})},AE=function(a){var i=a.children,l=a.innerProps,s=a.innerRef,d=a.isMulti;return de("div",ge({},tt(a,"menuList",{"menu-list":!0,"menu-list--is-multi":d}),{ref:s},l),i)},u2=function(a,i){var l=a.theme,s=l.spacing.baseUnit,d=l.colors;return fe({textAlign:"center"},i?{}:{color:d.neutral40,padding:"".concat(s*2,"px ").concat(s*3,"px")})},DE=u2,NE=u2,zE=function(a){var i=a.children,l=i===void 0?"No options":i,s=a.innerProps,d=oa(a,SE);return de("div",ge({},tt(fe(fe({},d),{},{children:l,innerProps:s}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),s),l)},LE=function(a){var i=a.children,l=i===void 0?"Loading...":i,s=a.innerProps,d=oa(a,jE);return de("div",ge({},tt(fe(fe({},d),{},{children:l,innerProps:s}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),s),l)},BE=function(a){var i=a.rect,l=a.offset,s=a.position;return{left:i.left,position:s,top:l,width:i.width,zIndex:1}},_E=function(a){var i=a.appendTo,l=a.children,s=a.controlElement,d=a.innerProps,h=a.menuPlacement,x=a.menuPosition,p=v.useRef(null),m=v.useRef(null),g=v.useState(s2(h)),w=na(g,2),C=w[0],M=w[1],R=v.useMemo(function(){return{setPortalPlacement:M}},[]),O=v.useState(null),j=na(O,2),k=j[0],A=j[1],D=v.useCallback(function(){if(s){var z=mE(s),G=x==="fixed"?0:window.pageYOffset,N=z[C]+G;(N!==k?.offset||z.left!==k?.rect.left||z.width!==k?.rect.width)&&A({offset:N,rect:z})}},[s,x,C,k?.offset,k?.rect.left,k?.rect.width]);_h(function(){D()},[D]);var U=v.useCallback(function(){typeof m.current=="function"&&(m.current(),m.current=null),s&&p.current&&(m.current=sE(s,p.current,D,{elementResize:"ResizeObserver"in window}))},[s,D]);_h(function(){U()},[U]);var S=v.useCallback(function(z){p.current=z,U()},[U]);if(!i&&x!=="fixed"||!k)return null;var _=de("div",ge({ref:S},tt(fe(fe({},a),{},{offset:k.offset,position:x,rect:k.rect}),"menuPortal",{"menu-portal":!0}),d),l);return de(c2.Provider,{value:R},i?Nv.createPortal(_,i):_)},$E=function(a){var i=a.isDisabled,l=a.isRtl;return{label:"container",direction:l?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},UE=function(a){var i=a.children,l=a.innerProps,s=a.isDisabled,d=a.isRtl;return de("div",ge({},tt(a,"container",{"--is-disabled":s,"--is-rtl":d}),l),i)},HE=function(a,i){var l=a.theme.spacing,s=a.isMulti,d=a.hasValue,h=a.selectProps.controlShouldRenderValue;return fe({alignItems:"center",display:s&&d&&h?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(l.baseUnit/2,"px ").concat(l.baseUnit*2,"px")})},IE=function(a){var i=a.children,l=a.innerProps,s=a.isMulti,d=a.hasValue;return de("div",ge({},tt(a,"valueContainer",{"value-container":!0,"value-container--is-multi":s,"value-container--has-value":d}),l),i)},VE=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},PE=function(a){var i=a.children,l=a.innerProps;return de("div",ge({},tt(a,"indicatorsContainer",{indicators:!0}),l),i)},Rx,qE=["size"],FE=["innerProps","isRtl","size"],YE={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},d2=function(a){var i=a.size,l=oa(a,qE);return de("svg",ge({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:YE},l))},vp=function(a){return de(d2,ge({size:20},a),de("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},f2=function(a){return de(d2,ge({size:20},a),de("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},h2=function(a,i){var l=a.isFocused,s=a.theme,d=s.spacing.baseUnit,h=s.colors;return fe({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:l?h.neutral60:h.neutral20,padding:d*2,":hover":{color:l?h.neutral80:h.neutral40}})},GE=h2,ZE=function(a){var i=a.children,l=a.innerProps;return de("div",ge({},tt(a,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),l),i||de(f2,null))},XE=h2,KE=function(a){var i=a.children,l=a.innerProps;return de("div",ge({},tt(a,"clearIndicator",{indicator:!0,"clear-indicator":!0}),l),i||de(vp,null))},QE=function(a,i){var l=a.isDisabled,s=a.theme,d=s.spacing.baseUnit,h=s.colors;return fe({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:l?h.neutral10:h.neutral20,marginBottom:d*2,marginTop:d*2})},JE=function(a){var i=a.innerProps;return de("span",ge({},i,tt(a,"indicatorSeparator",{"indicator-separator":!0})))},WE=YC(Rx||(Rx=GC([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),e7=function(a,i){var l=a.isFocused,s=a.size,d=a.theme,h=d.colors,x=d.spacing.baseUnit;return fe({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:s,lineHeight:1,marginRight:s,textAlign:"center",verticalAlign:"middle"},i?{}:{color:l?h.neutral60:h.neutral20,padding:x*2})},Nf=function(a){var i=a.delay,l=a.offset;return de("span",{css:mp({animation:"".concat(WE," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:l?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},t7=function(a){var i=a.innerProps,l=a.isRtl,s=a.size,d=s===void 0?4:s,h=oa(a,FE);return de("div",ge({},tt(fe(fe({},h),{},{innerProps:i,isRtl:l,size:d}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),de(Nf,{delay:0,offset:l}),de(Nf,{delay:160,offset:!0}),de(Nf,{delay:320,offset:!l}))},n7=function(a,i){var l=a.isDisabled,s=a.isFocused,d=a.theme,h=d.colors,x=d.borderRadius,p=d.spacing;return fe({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:p.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:l?h.neutral5:h.neutral0,borderColor:l?h.neutral10:s?h.primary:h.neutral20,borderRadius:x,borderStyle:"solid",borderWidth:1,boxShadow:s?"0 0 0 1px ".concat(h.primary):void 0,"&:hover":{borderColor:s?h.primary:h.neutral30}})},a7=function(a){var i=a.children,l=a.isDisabled,s=a.isFocused,d=a.innerRef,h=a.innerProps,x=a.menuIsOpen;return de("div",ge({ref:d},tt(a,"control",{control:!0,"control--is-disabled":l,"control--is-focused":s,"control--menu-is-open":x}),h,{"aria-disabled":l||void 0}),i)},r7=a7,i7=["data"],o7=function(a,i){var l=a.theme.spacing;return i?{}:{paddingBottom:l.baseUnit*2,paddingTop:l.baseUnit*2}},l7=function(a){var i=a.children,l=a.cx,s=a.getStyles,d=a.getClassNames,h=a.Heading,x=a.headingProps,p=a.innerProps,m=a.label,g=a.theme,w=a.selectProps;return de("div",ge({},tt(a,"group",{group:!0}),p),de(h,ge({},x,{selectProps:w,theme:g,getStyles:s,getClassNames:d,cx:l}),m),de("div",null,i))},s7=function(a,i){var l=a.theme,s=l.colors,d=l.spacing;return fe({label:"group",cursor:"default",display:"block"},i?{}:{color:s.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:d.baseUnit*3,paddingRight:d.baseUnit*3,textTransform:"uppercase"})},c7=function(a){var i=i2(a);i.data;var l=oa(i,i7);return de("div",ge({},tt(a,"groupHeading",{"group-heading":!0}),l))},u7=l7,d7=["innerRef","isDisabled","isHidden","inputClassName"],f7=function(a,i){var l=a.isDisabled,s=a.value,d=a.theme,h=d.spacing,x=d.colors;return fe(fe({visibility:l?"hidden":"visible",transform:s?"translateZ(0)":""},h7),i?{}:{margin:h.baseUnit/2,paddingBottom:h.baseUnit/2,paddingTop:h.baseUnit/2,color:x.neutral80})},p2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},h7={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":fe({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},p2)},p7=function(a){return fe({label:"input",color:"inherit",background:0,opacity:a?0:1,width:"100%"},p2)},m7=function(a){var i=a.cx,l=a.value,s=i2(a),d=s.innerRef,h=s.isDisabled,x=s.isHidden,p=s.inputClassName,m=oa(s,d7);return de("div",ge({},tt(a,"input",{"input-container":!0}),{"data-value":l||""}),de("input",ge({className:i({input:!0},p),ref:d,style:p7(x),disabled:h},m)))},g7=m7,x7=function(a,i){var l=a.theme,s=l.spacing,d=l.borderRadius,h=l.colors;return fe({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:h.neutral10,borderRadius:d/2,margin:s.baseUnit/2})},b7=function(a,i){var l=a.theme,s=l.borderRadius,d=l.colors,h=a.cropWithEllipsis;return fe({overflow:"hidden",textOverflow:h||h===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:s/2,color:d.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},v7=function(a,i){var l=a.theme,s=l.spacing,d=l.borderRadius,h=l.colors,x=a.isFocused;return fe({alignItems:"center",display:"flex"},i?{}:{borderRadius:d/2,backgroundColor:x?h.dangerLight:void 0,paddingLeft:s.baseUnit,paddingRight:s.baseUnit,":hover":{backgroundColor:h.dangerLight,color:h.danger}})},m2=function(a){var i=a.children,l=a.innerProps;return de("div",l,i)},y7=m2,w7=m2;function S7(n){var a=n.children,i=n.innerProps;return de("div",ge({role:"button"},i),a||de(vp,{size:14}))}var j7=function(a){var i=a.children,l=a.components,s=a.data,d=a.innerProps,h=a.isDisabled,x=a.removeProps,p=a.selectProps,m=l.Container,g=l.Label,w=l.Remove;return de(m,{data:s,innerProps:fe(fe({},tt(a,"multiValue",{"multi-value":!0,"multi-value--is-disabled":h})),d),selectProps:p},de(g,{data:s,innerProps:fe({},tt(a,"multiValueLabel",{"multi-value__label":!0})),selectProps:p},i),de(w,{data:s,innerProps:fe(fe({},tt(a,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},x),selectProps:p}))},C7=j7,E7=function(a,i){var l=a.isDisabled,s=a.isFocused,d=a.isSelected,h=a.theme,x=h.spacing,p=h.colors;return fe({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:d?p.primary:s?p.primary25:"transparent",color:l?p.neutral20:d?p.neutral0:"inherit",padding:"".concat(x.baseUnit*2,"px ").concat(x.baseUnit*3,"px"),":active":{backgroundColor:l?void 0:d?p.primary:p.primary50}})},M7=function(a){var i=a.children,l=a.isDisabled,s=a.isFocused,d=a.isSelected,h=a.innerRef,x=a.innerProps;return de("div",ge({},tt(a,"option",{option:!0,"option--is-disabled":l,"option--is-focused":s,"option--is-selected":d}),{ref:h,"aria-disabled":l},x),i)},k7=M7,T7=function(a,i){var l=a.theme,s=l.spacing,d=l.colors;return fe({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:d.neutral50,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},R7=function(a){var i=a.children,l=a.innerProps;return de("div",ge({},tt(a,"placeholder",{placeholder:!0}),l),i)},O7=R7,A7=function(a,i){var l=a.isDisabled,s=a.theme,d=s.spacing,h=s.colors;return fe({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:l?h.neutral40:h.neutral80,marginLeft:d.baseUnit/2,marginRight:d.baseUnit/2})},D7=function(a){var i=a.children,l=a.isDisabled,s=a.innerProps;return de("div",ge({},tt(a,"singleValue",{"single-value":!0,"single-value--is-disabled":l}),s),i)},N7=D7,z7={ClearIndicator:KE,Control:r7,DropdownIndicator:ZE,DownChevron:f2,CrossIcon:vp,Group:u7,GroupHeading:c7,IndicatorsContainer:PE,IndicatorSeparator:JE,Input:g7,LoadingIndicator:t7,Menu:RE,MenuList:AE,MenuPortal:_E,LoadingMessage:LE,NoOptionsMessage:zE,MultiValue:C7,MultiValueContainer:y7,MultiValueLabel:w7,MultiValueRemove:S7,Option:k7,Placeholder:O7,SelectContainer:UE,SingleValue:N7,ValueContainer:IE},L7=function(a){return fe(fe({},z7),a.components)},Ox=Number.isNaN||function(a){return typeof a=="number"&&a!==a};function B7(n,a){return!!(n===a||Ox(n)&&Ox(a))}function _7(n,a){if(n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(!B7(n[i],a[i]))return!1;return!0}function $7(n,a){a===void 0&&(a=_7);var i=null;function l(){for(var s=[],d=0;d<arguments.length;d++)s[d]=arguments[d];if(i&&i.lastThis===this&&a(s,i.lastArgs))return i.lastResult;var h=n.apply(this,s);return i={lastResult:h,lastArgs:s,lastThis:this},h}return l.clear=function(){i=null},l}var U7={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},H7=function(a){return de("span",ge({css:U7},a))},Ax=H7,I7={guidance:function(a){var i=a.isSearchable,l=a.isMulti,s=a.tabSelectsValue,d=a.context,h=a.isInitialFocus;switch(d){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(s?", press Tab to select the option and exit the menu":"",".");case"input":return h?"".concat(a["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(l?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(a){var i=a.action,l=a.label,s=l===void 0?"":l,d=a.labels,h=a.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(s,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(d.length>1?"s":""," ").concat(d.join(","),", selected.");case"select-option":return h?"option ".concat(s," is disabled. Select another option."):"option ".concat(s,", selected.");default:return""}},onFocus:function(a){var i=a.context,l=a.focused,s=a.options,d=a.label,h=d===void 0?"":d,x=a.selectValue,p=a.isDisabled,m=a.isSelected,g=a.isAppleDevice,w=function(O,j){return O&&O.length?"".concat(O.indexOf(j)+1," of ").concat(O.length):""};if(i==="value"&&x)return"value ".concat(h," focused, ").concat(w(x,l),".");if(i==="menu"&&g){var C=p?" disabled":"",M="".concat(m?" selected":"").concat(C);return"".concat(h).concat(M,", ").concat(w(s,l),".")}return""},onFilter:function(a){var i=a.inputValue,l=a.resultsMessage;return"".concat(l).concat(i?" for search term "+i:"",".")}},V7=function(a){var i=a.ariaSelection,l=a.focusedOption,s=a.focusedValue,d=a.focusableOptions,h=a.isFocused,x=a.selectValue,p=a.selectProps,m=a.id,g=a.isAppleDevice,w=p.ariaLiveMessages,C=p.getOptionLabel,M=p.inputValue,R=p.isMulti,O=p.isOptionDisabled,j=p.isSearchable,k=p.menuIsOpen,A=p.options,D=p.screenReaderStatus,U=p.tabSelectsValue,S=p.isLoading,_=p["aria-label"],z=p["aria-live"],G=v.useMemo(function(){return fe(fe({},I7),w||{})},[w]),N=v.useMemo(function(){var Z="";if(i&&G.onChange){var T=i.option,I=i.options,J=i.removedValue,oe=i.removedValues,B=i.value,K=function(he){return Array.isArray(he)?null:he},te=J||T||K(B),re=te?C(te):"",ae=I||oe||void 0,xe=ae?ae.map(C):[],le=fe({isDisabled:te&&O(te,x),label:re,labels:xe},i);Z=G.onChange(le)}return Z},[i,G,O,x,C]),Y=v.useMemo(function(){var Z="",T=l||s,I=!!(l&&x&&x.includes(l));if(T&&G.onFocus){var J={focused:T,label:C(T),isDisabled:O(T,x),isSelected:I,options:d,context:T===l?"menu":"value",selectValue:x,isAppleDevice:g};Z=G.onFocus(J)}return Z},[l,s,C,O,G,d,x,g]),ne=v.useMemo(function(){var Z="";if(k&&A.length&&!S&&G.onFilter){var T=D({count:d.length});Z=G.onFilter({inputValue:M,resultsMessage:T})}return Z},[d,M,k,G,A,D,S]),ie=i?.action==="initial-input-focus",ue=v.useMemo(function(){var Z="";if(G.guidance){var T=s?"value":k?"menu":"input";Z=G.guidance({"aria-label":_,context:T,isDisabled:l&&O(l,x),isMulti:R,isSearchable:j,tabSelectsValue:U,isInitialFocus:ie})}return Z},[_,l,s,R,O,j,k,G,x,U,ie]),Te=de(v.Fragment,null,de("span",{id:"aria-selection"},N),de("span",{id:"aria-focused"},Y),de("span",{id:"aria-results"},ne),de("span",{id:"aria-guidance"},ue));return de(v.Fragment,null,de(Ax,{id:m},ie&&Te),de(Ax,{"aria-live":z,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},h&&!ie&&Te))},P7=V7,$h=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],q7=new RegExp("["+$h.map(function(n){return n.letters}).join("")+"]","g"),g2={};for(var zf=0;zf<$h.length;zf++)for(var Lf=$h[zf],Bf=0;Bf<Lf.letters.length;Bf++)g2[Lf.letters[Bf]]=Lf.base;var x2=function(a){return a.replace(q7,function(i){return g2[i]})},F7=$7(x2),Dx=function(a){return a.replace(/^\s+|\s+$/g,"")},Y7=function(a){return"".concat(a.label," ").concat(a.value)},G7=function(a){return function(i,l){if(i.data.__isNew__)return!0;var s=fe({ignoreCase:!0,ignoreAccents:!0,stringify:Y7,trim:!0,matchFrom:"any"},a),d=s.ignoreCase,h=s.ignoreAccents,x=s.stringify,p=s.trim,m=s.matchFrom,g=p?Dx(l):l,w=p?Dx(x(i)):x(i);return d&&(g=g.toLowerCase(),w=w.toLowerCase()),h&&(g=F7(g),w=x2(w)),m==="start"?w.substr(0,g.length)===g:w.indexOf(g)>-1}},Z7=["innerRef"];function X7(n){var a=n.innerRef,i=oa(n,Z7),l=wE(i,"onExited","in","enter","exit","appear");return de("input",ge({ref:a},l,{css:mp({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var K7=function(a){a.cancelable&&a.preventDefault(),a.stopPropagation()};function Q7(n){var a=n.isEnabled,i=n.onBottomArrive,l=n.onBottomLeave,s=n.onTopArrive,d=n.onTopLeave,h=v.useRef(!1),x=v.useRef(!1),p=v.useRef(0),m=v.useRef(null),g=v.useCallback(function(j,k){if(m.current!==null){var A=m.current,D=A.scrollTop,U=A.scrollHeight,S=A.clientHeight,_=m.current,z=k>0,G=U-S-D,N=!1;G>k&&h.current&&(l&&l(j),h.current=!1),z&&x.current&&(d&&d(j),x.current=!1),z&&k>G?(i&&!h.current&&i(j),_.scrollTop=U,N=!0,h.current=!0):!z&&-k>D&&(s&&!x.current&&s(j),_.scrollTop=0,N=!0,x.current=!0),N&&K7(j)}},[i,l,s,d]),w=v.useCallback(function(j){g(j,j.deltaY)},[g]),C=v.useCallback(function(j){p.current=j.changedTouches[0].clientY},[]),M=v.useCallback(function(j){var k=p.current-j.changedTouches[0].clientY;g(j,k)},[g]),R=v.useCallback(function(j){if(j){var k=bE?{passive:!1}:!1;j.addEventListener("wheel",w,k),j.addEventListener("touchstart",C,k),j.addEventListener("touchmove",M,k)}},[M,C,w]),O=v.useCallback(function(j){j&&(j.removeEventListener("wheel",w,!1),j.removeEventListener("touchstart",C,!1),j.removeEventListener("touchmove",M,!1))},[M,C,w]);return v.useEffect(function(){if(a){var j=m.current;return R(j),function(){O(j)}}},[a,R,O]),function(j){m.current=j}}var Nx=["boxSizing","height","overflow","paddingRight","position"],zx={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Lx(n){n.cancelable&&n.preventDefault()}function Bx(n){n.stopPropagation()}function _x(){var n=this.scrollTop,a=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===a&&(this.scrollTop=n-1)}function $x(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ux=!!(typeof window<"u"&&window.document&&window.document.createElement),ko=0,Wr={capture:!1,passive:!1};function J7(n){var a=n.isEnabled,i=n.accountForScrollbars,l=i===void 0?!0:i,s=v.useRef({}),d=v.useRef(null),h=v.useCallback(function(p){if(Ux){var m=document.body,g=m&&m.style;if(l&&Nx.forEach(function(R){var O=g&&g[R];s.current[R]=O}),l&&ko<1){var w=parseInt(s.current.paddingRight,10)||0,C=document.body?document.body.clientWidth:0,M=window.innerWidth-C+w||0;Object.keys(zx).forEach(function(R){var O=zx[R];g&&(g[R]=O)}),g&&(g.paddingRight="".concat(M,"px"))}m&&$x()&&(m.addEventListener("touchmove",Lx,Wr),p&&(p.addEventListener("touchstart",_x,Wr),p.addEventListener("touchmove",Bx,Wr))),ko+=1}},[l]),x=v.useCallback(function(p){if(Ux){var m=document.body,g=m&&m.style;ko=Math.max(ko-1,0),l&&ko<1&&Nx.forEach(function(w){var C=s.current[w];g&&(g[w]=C)}),m&&$x()&&(m.removeEventListener("touchmove",Lx,Wr),p&&(p.removeEventListener("touchstart",_x,Wr),p.removeEventListener("touchmove",Bx,Wr)))}},[l]);return v.useEffect(function(){if(a){var p=d.current;return h(p),function(){x(p)}}},[a,h,x]),function(p){d.current=p}}var W7=function(a){var i=a.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},eM={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function tM(n){var a=n.children,i=n.lockEnabled,l=n.captureEnabled,s=l===void 0?!0:l,d=n.onBottomArrive,h=n.onBottomLeave,x=n.onTopArrive,p=n.onTopLeave,m=Q7({isEnabled:s,onBottomArrive:d,onBottomLeave:h,onTopArrive:x,onTopLeave:p}),g=J7({isEnabled:i}),w=function(M){m(M),g(M)};return de(v.Fragment,null,i&&de("div",{onClick:W7,css:eM}),a(w))}var nM={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},aM=function(a){var i=a.name,l=a.onFocus;return de("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:l,css:nM,value:"",onChange:function(){}})},rM=aM;function yp(n){var a;return typeof window<"u"&&window.navigator!=null?n.test(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.platform)||window.navigator.platform):!1}function iM(){return yp(/^iPhone/i)}function b2(){return yp(/^Mac/i)}function oM(){return yp(/^iPad/i)||b2()&&navigator.maxTouchPoints>1}function lM(){return iM()||oM()}function sM(){return b2()||lM()}var cM=function(a){return a.label},uM=function(a){return a.label},dM=function(a){return a.value},fM=function(a){return!!a.isDisabled},hM={clearIndicator:XE,container:$E,control:n7,dropdownIndicator:GE,group:o7,groupHeading:s7,indicatorsContainer:VE,indicatorSeparator:QE,input:f7,loadingIndicator:e7,loadingMessage:NE,menu:ME,menuList:OE,menuPortal:BE,multiValue:x7,multiValueLabel:b7,multiValueRemove:v7,noOptionsMessage:DE,option:E7,placeholder:T7,singleValue:A7,valueContainer:HE},pM={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},mM=4,v2=4,gM=38,xM=v2*2,bM={baseUnit:v2,controlHeight:gM,menuGutter:xM},_f={borderRadius:mM,colors:pM,spacing:bM},vM={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Tx(),captureMenuScroll:!Tx(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:G7(),formatGroupLabel:cM,getOptionLabel:uM,getOptionValue:dM,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:fM,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!gE(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(a){var i=a.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Hx(n,a,i,l){var s=S2(n,a,i),d=j2(n,a,i),h=w2(n,a),x=Oc(n,a);return{type:"option",data:a,isDisabled:s,isSelected:d,label:h,value:x,index:l}}function pc(n,a){return n.options.map(function(i,l){if("options"in i){var s=i.options.map(function(h,x){return Hx(n,h,a,x)}).filter(function(h){return Vx(n,h)});return s.length>0?{type:"group",data:i,options:s,index:l}:void 0}var d=Hx(n,i,a,l);return Vx(n,d)?d:void 0}).filter(vE)}function y2(n){return n.reduce(function(a,i){return i.type==="group"?a.push.apply(a,up(i.options.map(function(l){return l.data}))):a.push(i.data),a},[])}function Ix(n,a){return n.reduce(function(i,l){return l.type==="group"?i.push.apply(i,up(l.options.map(function(s){return{data:s.data,id:"".concat(a,"-").concat(l.index,"-").concat(s.index)}}))):i.push({data:l.data,id:"".concat(a,"-").concat(l.index)}),i},[])}function yM(n,a){return y2(pc(n,a))}function Vx(n,a){var i=n.inputValue,l=i===void 0?"":i,s=a.data,d=a.isSelected,h=a.label,x=a.value;return(!E2(n)||!d)&&C2(n,{label:h,value:x,data:s},l)}function wM(n,a){var i=n.focusedValue,l=n.selectValue,s=l.indexOf(i);if(s>-1){var d=a.indexOf(i);if(d>-1)return i;if(s<a.length)return a[s]}return null}function SM(n,a){var i=n.focusedOption;return i&&a.indexOf(i)>-1?i:a[0]}var $f=function(a,i){var l,s=(l=a.find(function(d){return d.data===i}))===null||l===void 0?void 0:l.id;return s||null},w2=function(a,i){return a.getOptionLabel(i)},Oc=function(a,i){return a.getOptionValue(i)};function S2(n,a,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(a,i):!1}function j2(n,a,i){if(i.indexOf(a)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(a,i);var l=Oc(n,a);return i.some(function(s){return Oc(n,s)===l})}function C2(n,a,i){return n.filterOption?n.filterOption(a,i):!0}var E2=function(a){var i=a.hideSelectedOptions,l=a.isMulti;return i===void 0?l:i},jM=1,M2=(function(n){P8(i,n);var a=Y8(i);function i(l){var s;if(I8(this,i),s=a.call(this,l),s.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},s.blockOptionHover=!1,s.isComposing=!1,s.commonProps=void 0,s.initialTouchX=0,s.initialTouchY=0,s.openAfterFocus=!1,s.scrollToFocusedOptionOnUpdate=!1,s.userIsDragging=void 0,s.controlRef=null,s.getControlRef=function(p){s.controlRef=p},s.focusedOptionRef=null,s.getFocusedOptionRef=function(p){s.focusedOptionRef=p},s.menuListRef=null,s.getMenuListRef=function(p){s.menuListRef=p},s.inputRef=null,s.getInputRef=function(p){s.inputRef=p},s.focus=s.focusInput,s.blur=s.blurInput,s.onChange=function(p,m){var g=s.props,w=g.onChange,C=g.name;m.name=C,s.ariaOnChange(p,m),w(p,m)},s.setValue=function(p,m,g){var w=s.props,C=w.closeMenuOnSelect,M=w.isMulti,R=w.inputValue;s.onInputChange("",{action:"set-value",prevInputValue:R}),C&&(s.setState({inputIsHiddenAfterUpdate:!M}),s.onMenuClose()),s.setState({clearFocusValueOnUpdate:!0}),s.onChange(p,{action:m,option:g})},s.selectOption=function(p){var m=s.props,g=m.blurInputOnSelect,w=m.isMulti,C=m.name,M=s.state.selectValue,R=w&&s.isOptionSelected(p,M),O=s.isOptionDisabled(p,M);if(R){var j=s.getOptionValue(p);s.setValue(M.filter(function(k){return s.getOptionValue(k)!==j}),"deselect-option",p)}else if(!O)w?s.setValue([].concat(up(M),[p]),"select-option",p):s.setValue(p,"select-option");else{s.ariaOnChange(p,{action:"select-option",option:p,name:C});return}g&&s.blurInput()},s.removeValue=function(p){var m=s.props.isMulti,g=s.state.selectValue,w=s.getOptionValue(p),C=g.filter(function(R){return s.getOptionValue(R)!==w}),M=Os(m,C,C[0]||null);s.onChange(M,{action:"remove-value",removedValue:p}),s.focusInput()},s.clearValue=function(){var p=s.state.selectValue;s.onChange(Os(s.props.isMulti,[],null),{action:"clear",removedValues:p})},s.popValue=function(){var p=s.props.isMulti,m=s.state.selectValue,g=m[m.length-1],w=m.slice(0,m.length-1),C=Os(p,w,w[0]||null);g&&s.onChange(C,{action:"pop-value",removedValue:g})},s.getFocusedOptionId=function(p){return $f(s.state.focusableOptionsWithIds,p)},s.getFocusableOptionsWithIds=function(){return Ix(pc(s.props,s.state.selectValue),s.getElementId("option"))},s.getValue=function(){return s.state.selectValue},s.cx=function(){for(var p=arguments.length,m=new Array(p),g=0;g<p;g++)m[g]=arguments[g];return dE.apply(void 0,[s.props.classNamePrefix].concat(m))},s.getOptionLabel=function(p){return w2(s.props,p)},s.getOptionValue=function(p){return Oc(s.props,p)},s.getStyles=function(p,m){var g=s.props.unstyled,w=hM[p](m,g);w.boxSizing="border-box";var C=s.props.styles[p];return C?C(w,m):w},s.getClassNames=function(p,m){var g,w;return(g=(w=s.props.classNames)[p])===null||g===void 0?void 0:g.call(w,m)},s.getElementId=function(p){return"".concat(s.state.instancePrefix,"-").concat(p)},s.getComponents=function(){return L7(s.props)},s.buildCategorizedOptions=function(){return pc(s.props,s.state.selectValue)},s.getCategorizedOptions=function(){return s.props.menuIsOpen?s.buildCategorizedOptions():[]},s.buildFocusableOptions=function(){return y2(s.buildCategorizedOptions())},s.getFocusableOptions=function(){return s.props.menuIsOpen?s.buildFocusableOptions():[]},s.ariaOnChange=function(p,m){s.setState({ariaSelection:fe({value:p},m)})},s.onMenuMouseDown=function(p){p.button===0&&(p.stopPropagation(),p.preventDefault(),s.focusInput())},s.onMenuMouseMove=function(p){s.blockOptionHover=!1},s.onControlMouseDown=function(p){if(!p.defaultPrevented){var m=s.props.openMenuOnClick;s.state.isFocused?s.props.menuIsOpen?p.target.tagName!=="INPUT"&&p.target.tagName!=="TEXTAREA"&&s.onMenuClose():m&&s.openMenu("first"):(m&&(s.openAfterFocus=!0),s.focusInput()),p.target.tagName!=="INPUT"&&p.target.tagName!=="TEXTAREA"&&p.preventDefault()}},s.onDropdownIndicatorMouseDown=function(p){if(!(p&&p.type==="mousedown"&&p.button!==0)&&!s.props.isDisabled){var m=s.props,g=m.isMulti,w=m.menuIsOpen;s.focusInput(),w?(s.setState({inputIsHiddenAfterUpdate:!g}),s.onMenuClose()):s.openMenu("first"),p.preventDefault()}},s.onClearIndicatorMouseDown=function(p){p&&p.type==="mousedown"&&p.button!==0||(s.clearValue(),p.preventDefault(),s.openAfterFocus=!1,p.type==="touchend"?s.focusInput():setTimeout(function(){return s.focusInput()}))},s.onScroll=function(p){typeof s.props.closeMenuOnScroll=="boolean"?p.target instanceof HTMLElement&&Xc(p.target)&&s.props.onMenuClose():typeof s.props.closeMenuOnScroll=="function"&&s.props.closeMenuOnScroll(p)&&s.props.onMenuClose()},s.onCompositionStart=function(){s.isComposing=!0},s.onCompositionEnd=function(){s.isComposing=!1},s.onTouchStart=function(p){var m=p.touches,g=m&&m.item(0);g&&(s.initialTouchX=g.clientX,s.initialTouchY=g.clientY,s.userIsDragging=!1)},s.onTouchMove=function(p){var m=p.touches,g=m&&m.item(0);if(g){var w=Math.abs(g.clientX-s.initialTouchX),C=Math.abs(g.clientY-s.initialTouchY),M=5;s.userIsDragging=w>M||C>M}},s.onTouchEnd=function(p){s.userIsDragging||(s.controlRef&&!s.controlRef.contains(p.target)&&s.menuListRef&&!s.menuListRef.contains(p.target)&&s.blurInput(),s.initialTouchX=0,s.initialTouchY=0)},s.onControlTouchEnd=function(p){s.userIsDragging||s.onControlMouseDown(p)},s.onClearIndicatorTouchEnd=function(p){s.userIsDragging||s.onClearIndicatorMouseDown(p)},s.onDropdownIndicatorTouchEnd=function(p){s.userIsDragging||s.onDropdownIndicatorMouseDown(p)},s.handleInputChange=function(p){var m=s.props.inputValue,g=p.currentTarget.value;s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange(g,{action:"input-change",prevInputValue:m}),s.props.menuIsOpen||s.onMenuOpen()},s.onInputFocus=function(p){s.props.onFocus&&s.props.onFocus(p),s.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(s.openAfterFocus||s.props.openMenuOnFocus)&&s.openMenu("first"),s.openAfterFocus=!1},s.onInputBlur=function(p){var m=s.props.inputValue;if(s.menuListRef&&s.menuListRef.contains(document.activeElement)){s.inputRef.focus();return}s.props.onBlur&&s.props.onBlur(p),s.onInputChange("",{action:"input-blur",prevInputValue:m}),s.onMenuClose(),s.setState({focusedValue:null,isFocused:!1})},s.onOptionHover=function(p){if(!(s.blockOptionHover||s.state.focusedOption===p)){var m=s.getFocusableOptions(),g=m.indexOf(p);s.setState({focusedOption:p,focusedOptionId:g>-1?s.getFocusedOptionId(p):null})}},s.shouldHideSelectedOptions=function(){return E2(s.props)},s.onValueInputFocus=function(p){p.preventDefault(),p.stopPropagation(),s.focus()},s.onKeyDown=function(p){var m=s.props,g=m.isMulti,w=m.backspaceRemovesValue,C=m.escapeClearsValue,M=m.inputValue,R=m.isClearable,O=m.isDisabled,j=m.menuIsOpen,k=m.onKeyDown,A=m.tabSelectsValue,D=m.openMenuOnFocus,U=s.state,S=U.focusedOption,_=U.focusedValue,z=U.selectValue;if(!O&&!(typeof k=="function"&&(k(p),p.defaultPrevented))){switch(s.blockOptionHover=!0,p.key){case"ArrowLeft":if(!g||M)return;s.focusValue("previous");break;case"ArrowRight":if(!g||M)return;s.focusValue("next");break;case"Delete":case"Backspace":if(M)return;if(_)s.removeValue(_);else{if(!w)return;g?s.popValue():R&&s.clearValue()}break;case"Tab":if(s.isComposing||p.shiftKey||!j||!A||!S||D&&s.isOptionSelected(S,z))return;s.selectOption(S);break;case"Enter":if(p.keyCode===229)break;if(j){if(!S||s.isComposing)return;s.selectOption(S);break}return;case"Escape":j?(s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange("",{action:"menu-close",prevInputValue:M}),s.onMenuClose()):R&&C&&s.clearValue();break;case" ":if(M)return;if(!j){s.openMenu("first");break}if(!S)return;s.selectOption(S);break;case"ArrowUp":j?s.focusOption("up"):s.openMenu("last");break;case"ArrowDown":j?s.focusOption("down"):s.openMenu("first");break;case"PageUp":if(!j)return;s.focusOption("pageup");break;case"PageDown":if(!j)return;s.focusOption("pagedown");break;case"Home":if(!j)return;s.focusOption("first");break;case"End":if(!j)return;s.focusOption("last");break;default:return}p.preventDefault()}},s.state.instancePrefix="react-select-"+(s.props.instanceId||++jM),s.state.selectValue=Mx(l.value),l.menuIsOpen&&s.state.selectValue.length){var d=s.getFocusableOptionsWithIds(),h=s.buildFocusableOptions(),x=h.indexOf(s.state.selectValue[0]);s.state.focusableOptionsWithIds=d,s.state.focusedOption=h[x],s.state.focusedOptionId=$f(d,h[x])}return s}return V8(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&kx(this.menuListRef,this.focusedOptionRef),sM()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(s){var d=this.props,h=d.isDisabled,x=d.menuIsOpen,p=this.state.isFocused;(p&&!h&&s.isDisabled||p&&x&&!s.menuIsOpen)&&this.focusInput(),p&&h&&!s.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!p&&!h&&s.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(kx(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(s,d){this.props.onInputChange(s,d)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(s){var d=this,h=this.state,x=h.selectValue,p=h.isFocused,m=this.buildFocusableOptions(),g=s==="first"?0:m.length-1;if(!this.props.isMulti){var w=m.indexOf(x[0]);w>-1&&(g=w)}this.scrollToFocusedOptionOnUpdate=!(p&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:m[g],focusedOptionId:this.getFocusedOptionId(m[g])},function(){return d.onMenuOpen()})}},{key:"focusValue",value:function(s){var d=this.state,h=d.selectValue,x=d.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var p=h.indexOf(x);x||(p=-1);var m=h.length-1,g=-1;if(h.length){switch(s){case"previous":p===0?g=0:p===-1?g=m:g=p-1;break;case"next":p>-1&&p<m&&(g=p+1);break}this.setState({inputIsHidden:g!==-1,focusedValue:h[g]})}}}},{key:"focusOption",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",d=this.props.pageSize,h=this.state.focusedOption,x=this.getFocusableOptions();if(x.length){var p=0,m=x.indexOf(h);h||(m=-1),s==="up"?p=m>0?m-1:x.length-1:s==="down"?p=(m+1)%x.length:s==="pageup"?(p=m-d,p<0&&(p=0)):s==="pagedown"?(p=m+d,p>x.length-1&&(p=x.length-1)):s==="last"&&(p=x.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:x[p],focusedValue:null,focusedOptionId:this.getFocusedOptionId(x[p])})}}},{key:"getTheme",value:(function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(_f):fe(fe({},_f),this.props.theme):_f})},{key:"getCommonProps",value:function(){var s=this.clearValue,d=this.cx,h=this.getStyles,x=this.getClassNames,p=this.getValue,m=this.selectOption,g=this.setValue,w=this.props,C=w.isMulti,M=w.isRtl,R=w.options,O=this.hasValue();return{clearValue:s,cx:d,getStyles:h,getClassNames:x,getValue:p,hasValue:O,isMulti:C,isRtl:M,options:R,selectOption:m,selectProps:w,setValue:g,theme:this.getTheme()}}},{key:"hasValue",value:function(){var s=this.state.selectValue;return s.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var s=this.props,d=s.isClearable,h=s.isMulti;return d===void 0?h:d}},{key:"isOptionDisabled",value:function(s,d){return S2(this.props,s,d)}},{key:"isOptionSelected",value:function(s,d){return j2(this.props,s,d)}},{key:"filterOption",value:function(s,d){return C2(this.props,s,d)}},{key:"formatOptionLabel",value:function(s,d){if(typeof this.props.formatOptionLabel=="function"){var h=this.props.inputValue,x=this.state.selectValue;return this.props.formatOptionLabel(s,{context:d,inputValue:h,selectValue:x})}else return this.getOptionLabel(s)}},{key:"formatGroupLabel",value:function(s){return this.props.formatGroupLabel(s)}},{key:"startListeningComposition",value:(function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))})},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:(function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))})},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:(function(){var s=this.props,d=s.isDisabled,h=s.isSearchable,x=s.inputId,p=s.inputValue,m=s.tabIndex,g=s.form,w=s.menuIsOpen,C=s.required,M=this.getComponents(),R=M.Input,O=this.state,j=O.inputIsHidden,k=O.ariaSelection,A=this.commonProps,D=x||this.getElementId("input"),U=fe(fe(fe({"aria-autocomplete":"list","aria-expanded":w,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":C,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},w&&{"aria-controls":this.getElementId("listbox")}),!h&&{"aria-readonly":!0}),this.hasValue()?k?.action==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return h?v.createElement(R,ge({},A,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:D,innerRef:this.getInputRef,isDisabled:d,isHidden:j,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:m,form:g,type:"text",value:p},U)):v.createElement(X7,ge({id:D,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Tc,onFocus:this.onInputFocus,disabled:d,tabIndex:m,inputMode:"none",form:g,value:""},U))})},{key:"renderPlaceholderOrValue",value:function(){var s=this,d=this.getComponents(),h=d.MultiValue,x=d.MultiValueContainer,p=d.MultiValueLabel,m=d.MultiValueRemove,g=d.SingleValue,w=d.Placeholder,C=this.commonProps,M=this.props,R=M.controlShouldRenderValue,O=M.isDisabled,j=M.isMulti,k=M.inputValue,A=M.placeholder,D=this.state,U=D.selectValue,S=D.focusedValue,_=D.isFocused;if(!this.hasValue()||!R)return k?null:v.createElement(w,ge({},C,{key:"placeholder",isDisabled:O,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),A);if(j)return U.map(function(G,N){var Y=G===S,ne="".concat(s.getOptionLabel(G),"-").concat(s.getOptionValue(G));return v.createElement(h,ge({},C,{components:{Container:x,Label:p,Remove:m},isFocused:Y,isDisabled:O,key:ne,index:N,removeProps:{onClick:function(){return s.removeValue(G)},onTouchEnd:function(){return s.removeValue(G)},onMouseDown:function(ue){ue.preventDefault()}},data:G}),s.formatOptionLabel(G,"value"))});if(k)return null;var z=U[0];return v.createElement(g,ge({},C,{data:z,isDisabled:O}),this.formatOptionLabel(z,"value"))}},{key:"renderClearIndicator",value:function(){var s=this.getComponents(),d=s.ClearIndicator,h=this.commonProps,x=this.props,p=x.isDisabled,m=x.isLoading,g=this.state.isFocused;if(!this.isClearable()||!d||p||!this.hasValue()||m)return null;var w={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(d,ge({},h,{innerProps:w,isFocused:g}))}},{key:"renderLoadingIndicator",value:function(){var s=this.getComponents(),d=s.LoadingIndicator,h=this.commonProps,x=this.props,p=x.isDisabled,m=x.isLoading,g=this.state.isFocused;if(!d||!m)return null;var w={"aria-hidden":"true"};return v.createElement(d,ge({},h,{innerProps:w,isDisabled:p,isFocused:g}))}},{key:"renderIndicatorSeparator",value:function(){var s=this.getComponents(),d=s.DropdownIndicator,h=s.IndicatorSeparator;if(!d||!h)return null;var x=this.commonProps,p=this.props.isDisabled,m=this.state.isFocused;return v.createElement(h,ge({},x,{isDisabled:p,isFocused:m}))}},{key:"renderDropdownIndicator",value:function(){var s=this.getComponents(),d=s.DropdownIndicator;if(!d)return null;var h=this.commonProps,x=this.props.isDisabled,p=this.state.isFocused,m={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(d,ge({},h,{innerProps:m,isDisabled:x,isFocused:p}))}},{key:"renderMenu",value:function(){var s=this,d=this.getComponents(),h=d.Group,x=d.GroupHeading,p=d.Menu,m=d.MenuList,g=d.MenuPortal,w=d.LoadingMessage,C=d.NoOptionsMessage,M=d.Option,R=this.commonProps,O=this.state.focusedOption,j=this.props,k=j.captureMenuScroll,A=j.inputValue,D=j.isLoading,U=j.loadingMessage,S=j.minMenuHeight,_=j.maxMenuHeight,z=j.menuIsOpen,G=j.menuPlacement,N=j.menuPosition,Y=j.menuPortalTarget,ne=j.menuShouldBlockScroll,ie=j.menuShouldScrollIntoView,ue=j.noOptionsMessage,Te=j.onMenuScrollToTop,Z=j.onMenuScrollToBottom;if(!z)return null;var T=function(re,ae){var xe=re.type,le=re.data,je=re.isDisabled,he=re.isSelected,Xe=re.label,zn=re.value,Jt=O===le,Rt=je?void 0:function(){return s.onOptionHover(le)},yi=je?void 0:function(){return s.selectOption(le)},fr="".concat(s.getElementId("option"),"-").concat(ae),Kc={id:fr,onClick:yi,onMouseMove:Rt,onMouseOver:Rt,tabIndex:-1,role:"option","aria-selected":s.state.isAppleDevice?void 0:he};return v.createElement(M,ge({},R,{innerProps:Kc,data:le,isDisabled:je,isSelected:he,key:fr,label:Xe,type:xe,value:zn,isFocused:Jt,innerRef:Jt?s.getFocusedOptionRef:void 0}),s.formatOptionLabel(re.data,"menu"))},I;if(this.hasOptions())I=this.getCategorizedOptions().map(function(te){if(te.type==="group"){var re=te.data,ae=te.options,xe=te.index,le="".concat(s.getElementId("group"),"-").concat(xe),je="".concat(le,"-heading");return v.createElement(h,ge({},R,{key:le,data:re,options:ae,Heading:x,headingProps:{id:je,data:te.data},label:s.formatGroupLabel(te.data)}),te.options.map(function(he){return T(he,"".concat(xe,"-").concat(he.index))}))}else if(te.type==="option")return T(te,"".concat(te.index))});else if(D){var J=U({inputValue:A});if(J===null)return null;I=v.createElement(w,R,J)}else{var oe=ue({inputValue:A});if(oe===null)return null;I=v.createElement(C,R,oe)}var B={minMenuHeight:S,maxMenuHeight:_,menuPlacement:G,menuPosition:N,menuShouldScrollIntoView:ie},K=v.createElement(kE,ge({},R,B),function(te){var re=te.ref,ae=te.placerProps,xe=ae.placement,le=ae.maxHeight;return v.createElement(p,ge({},R,B,{innerRef:re,innerProps:{onMouseDown:s.onMenuMouseDown,onMouseMove:s.onMenuMouseMove},isLoading:D,placement:xe}),v.createElement(tM,{captureEnabled:k,onTopArrive:Te,onBottomArrive:Z,lockEnabled:ne},function(je){return v.createElement(m,ge({},R,{innerRef:function(Xe){s.getMenuListRef(Xe),je(Xe)},innerProps:{role:"listbox","aria-multiselectable":R.isMulti,id:s.getElementId("listbox")},isLoading:D,maxHeight:le,focusedOption:O}),I)}))});return Y||N==="fixed"?v.createElement(g,ge({},R,{appendTo:Y,controlElement:this.controlRef,menuPlacement:G,menuPosition:N}),K):K}},{key:"renderFormField",value:function(){var s=this,d=this.props,h=d.delimiter,x=d.isDisabled,p=d.isMulti,m=d.name,g=d.required,w=this.state.selectValue;if(g&&!this.hasValue()&&!x)return v.createElement(rM,{name:m,onFocus:this.onValueInputFocus});if(!(!m||x))if(p)if(h){var C=w.map(function(O){return s.getOptionValue(O)}).join(h);return v.createElement("input",{name:m,type:"hidden",value:C})}else{var M=w.length>0?w.map(function(O,j){return v.createElement("input",{key:"i-".concat(j),name:m,type:"hidden",value:s.getOptionValue(O)})}):v.createElement("input",{name:m,type:"hidden",value:""});return v.createElement("div",null,M)}else{var R=w[0]?this.getOptionValue(w[0]):"";return v.createElement("input",{name:m,type:"hidden",value:R})}}},{key:"renderLiveRegion",value:function(){var s=this.commonProps,d=this.state,h=d.ariaSelection,x=d.focusedOption,p=d.focusedValue,m=d.isFocused,g=d.selectValue,w=this.getFocusableOptions();return v.createElement(P7,ge({},s,{id:this.getElementId("live-region"),ariaSelection:h,focusedOption:x,focusedValue:p,isFocused:m,selectValue:g,focusableOptions:w,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var s=this.getComponents(),d=s.Control,h=s.IndicatorsContainer,x=s.SelectContainer,p=s.ValueContainer,m=this.props,g=m.className,w=m.id,C=m.isDisabled,M=m.menuIsOpen,R=this.state.isFocused,O=this.commonProps=this.getCommonProps();return v.createElement(x,ge({},O,{className:g,innerProps:{id:w,onKeyDown:this.onKeyDown},isDisabled:C,isFocused:R}),this.renderLiveRegion(),v.createElement(d,ge({},O,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:C,isFocused:R,menuIsOpen:M}),v.createElement(p,ge({},O,{isDisabled:C}),this.renderPlaceholderOrValue(),this.renderInput()),v.createElement(h,ge({},O,{isDisabled:C}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(s,d){var h=d.prevProps,x=d.clearFocusValueOnUpdate,p=d.inputIsHiddenAfterUpdate,m=d.ariaSelection,g=d.isFocused,w=d.prevWasFocused,C=d.instancePrefix,M=s.options,R=s.value,O=s.menuIsOpen,j=s.inputValue,k=s.isMulti,A=Mx(R),D={};if(h&&(R!==h.value||M!==h.options||O!==h.menuIsOpen||j!==h.inputValue)){var U=O?yM(s,A):[],S=O?Ix(pc(s,A),"".concat(C,"-option")):[],_=x?wM(d,A):null,z=SM(d,U),G=$f(S,z);D={selectValue:A,focusedOption:z,focusedOptionId:G,focusableOptionsWithIds:S,focusedValue:_,clearFocusValueOnUpdate:!1}}var N=p!=null&&s!==h?{inputIsHidden:p,inputIsHiddenAfterUpdate:void 0}:{},Y=m,ne=g&&w;return g&&!ne&&(Y={value:Os(k,A,A[0]||null),options:A,action:"initial-input-focus"},ne=!w),m?.action==="initial-input-focus"&&(Y=null),fe(fe(fe({},D),N),{},{prevProps:s,ariaSelection:Y,prevWasFocused:ne})}}]),i})(v.Component);M2.defaultProps=vM;var CM=v.forwardRef(function(n,a){var i=H8(n);return v.createElement(M2,ge({ref:a},i))}),Px=CM;const EM="http://localhost:8080",MM="data:image/svg+xml;utf8,"+encodeURIComponent(`
<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="14" cy="34" rx="6.5" ry="2" fill="rgba(0,0,0,0.18)"/>
  <path d="M14 0C7.372 0 2 5.372 2 12c0 8.25 9.08 17.57 11.5 20 .27.27.71.27.98 0C16.92 29.57 26 20.25 26 12 26 5.372 20.628 0 14 0z" fill="#a47551"/>
  <circle cx="14" cy="12" r="5" fill="#fff"/>
</svg>
`),kM=()=>{const[n,a]=v.useState([]),[i,l]=v.useState(!0),[s,d]=v.useState(null),{loading:h,error:x}=N8({appkey:"55fedf02ea5c5eeae35d8b505bcb2e7e",libraries:[]}),p=Tt(),m=Je(),g=p.state||{},{start:w,end:C}=v.useMemo(()=>{const N=ie=>ie instanceof Date?ie:ie?new Date(ie):null;let Y=N(g.start),ne=N(g.end);if(!Y||!ne||isNaN(+Y)||isNaN(+ne)||ne<=Y){const ie=new Date;ie.setSeconds(0,0);const ue=new Date(ie.getTime()+270*60*1e3);return{start:ie,end:ue}}return{start:Y,end:ne}},[g.start,g.end]),[M,R]=v.useState(null),[O,j]=v.useState({lat:37.5665,lng:126.978}),k=v.useRef(null);v.useEffect(()=>{(async()=>{try{l(!0);const Y=await fetch(`${EM}/api/locations?stars=5`);if(!Y.ok)throw new Error("Failed to fetch locations");const ie=(await Y.json()).map(ue=>({...ue,id:ue.name.toLowerCase().replace(/\s+/g,"-")}));a(ie)}catch(Y){d(Y)}finally{l(!1)}})()},[]),v.useEffect(()=>{if(n.length>0){const N="포시즌스 호텔 서울",Y=n.find(ne=>ne.name===N);Y?(R(Y.id),j({lat:Y.lat,lng:Y.lng})):(R(n[0].id),j({lat:n[0].lat,lng:n[0].lng}))}},[n]);const A=v.useMemo(()=>{const N=Y=>{const ne=String(Y.getMonth()+1).padStart(2,"0"),ie=String(Y.getDate()).padStart(2,"0"),ue=String(Y.getHours()).padStart(2,"0"),Te=String(Y.getMinutes()).padStart(2,"0"),Z=new Date;Z.setHours(0,0,0,0);const T=new Date(Z);T.setDate(Z.getDate()+1);const I=new Date(Y);I.setHours(0,0,0,0);const J=`${ue}:${Te}`;return I.getTime()===Z.getTime()?`오늘 ${J}`:I.getTime()===T.getTime()?`내일 ${J}`:`${ne}/${ie} ${J}`};return`${N(w)} ~ ${N(C)}`},[w,C]),D=v.useMemo(()=>n.map(N=>({value:N.id,label:N.name})),[n]),U=v.useMemo(()=>({value:"time",label:A}),[A]),S=N=>{const Y=n.find(ne=>ne.id===N?.value);Y&&(R(Y.id),j({lat:Y.lat,lng:Y.lng}))},_=()=>{const N=n.find(Y=>Y.id===M)?.name;m("/cars",{state:{...g,locationName:N}})},z=h||i,G=x||s;return c.jsxs(TM,{children:[c.jsxs(RM,{children:[G&&c.jsxs(qx,{children:["지도를 불러오지 못했어요.",c.jsxs("small",{style:{marginTop:8,color:"#868e96"},children:["(",G.message,")"]})]}),!z&&!G&&c.jsx(T8,{center:O,level:5,style:{width:"100%",height:"100%"},onCreate:N=>k.current=N,children:M&&c.jsxs(c.Fragment,{children:[c.jsx(A8,{position:O,image:{src:MM,size:{width:28,height:36},options:{offset:{x:14,y:36}}}}),c.jsx(D8,{position:O,yAnchor:2.23,zIndex:3,children:c.jsx(NM,{children:n.find(N=>N.id===M)?.name})})]})}),z&&!G&&c.jsx(qx,{children:"지도를 불러오는 중…"})]}),c.jsxs(OM,{children:[c.jsxs(Fx,{children:[c.jsx(Yx,{children:"대여 · 반납"}),c.jsx(Px,{classNamePrefix:"moca-select",isDisabled:z||G,options:D,value:D.find(N=>N.value===M)||null,onChange:S,placeholder:"호텔을 선택하세요",styles:Gx,menuPlacement:"auto",menuPortalTarget:typeof document<"u"?document.body:null})]}),c.jsxs(Fx,{children:[c.jsx(Yx,{children:"이용시간"}),c.jsx(Px,{classNamePrefix:"moca-select",value:U,options:[U],isDisabled:!0,isSearchable:!1,isClearable:!1,menuIsOpen:!1,styles:{...Gx,indicatorsContainer:()=>({display:"none"})}})]}),c.jsx(AM,{children:c.jsx(DM,{onClick:_,disabled:!M,children:"이 위치에서 차량선택"})})]})]})},TM=b.main`
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 50vh 1fr;
    gap: 12px;
    padding: 12px 16px 16px;
    box-sizing: border-box;
`,RM=b.section`
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    background: #f1f3f5;
`,qx=b.div`
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-size: 14px;
    color: #495057;
`,OM=b.section`
    background: #fff;
    border-radius: 20px;
    padding: 16px;
    display: grid;
    gap: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    min-height: 28vh;
`,Fx=b.div`
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 12px;
    align-items: center;
`,Yx=b.div`
    font-size: 14px;
    color: #795548;
`,AM=b.div`
    margin-top: 4px;
`,DM=b.button`
    width: 100%;
    height: 52px;
    border-radius: 999px;
    border: none;
    background: #a47551;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: background-color 0.2s, box-shadow 0.2s;
    box-shadow: 0 10px 24px rgba(164, 117, 81, 0.35);

    &:active {
        transform: scale(0.99);
    }
`,NM=b.div`
    background: #fff;
    border: 1px solid #a47551;
    border-radius: 999px;
    padding: 5px 14px;
    font-size: 13px;
    font-weight: 700;
    color: #5d4037;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
`,Gx={control:(n,a)=>({...n,borderRadius:999,borderColor:a.isFocused?"#a47551":"#e7e0d9",boxShadow:a.isFocused?"0 0 0 3px rgba(164,117,81,0.12)":"0 2px 6px rgba(0,0,0,0.04)",minHeight:44,paddingLeft:4,paddingRight:4,backgroundColor:"#fdfbfa",":hover":{borderColor:"#a47551",backgroundColor:"#fff"}}),valueContainer:n=>({...n,padding:"0 8px"}),singleValue:n=>({...n,color:"#5d4037",fontSize:14,fontWeight:500}),placeholder:n=>({...n,color:"#8d6e63",fontSize:14}),input:n=>({...n,color:"#5d4037",fontSize:14}),indicatorsContainer:n=>({...n,"> div":{color:"#a47551"}}),menu:n=>({...n,borderRadius:16,overflow:"hidden",boxShadow:"0 8px 24px rgba(0,0,0,0.12)",marginTop:8}),menuList:n=>({...n,padding:6,backgroundColor:"#fff"}),option:(n,a)=>({...n,borderRadius:10,padding:"10px 12px",fontSize:14,color:"#5d4037",backgroundColor:a.isFocused?"#f5f1ed":a.isSelected?"#e7e0d9":"#fff",":active":{backgroundColor:"#e7e0d9"},cursor:"pointer"})},zM=({locationName:n="반얀트리 호텔"})=>{const a=Je(),i=Tt(),[l,s]=v.useState([]),[d,h]=v.useState(!0),[x,p]=v.useState(null),[m,g]=v.useState(""),[w,C]=v.useState(""),[M,R]=v.useState(""),[O,j]=v.useState([]),k=v.useMemo(()=>i.state||{},[i.state]);v.useEffect(()=>{(async()=>{try{h(!0);const G=await fetch("http://localhost:8080/api/rental/admin/cars");if(!G.ok)throw new Error(`Server responded with ${G.status}`);const Y=(await G.json()).map(ne=>{const ie=ne.carName.split(" ")[0];let ue;return ne.vehicleTypeCode==="EV"?ue="전기차":ne.vehicleTypeCode==="SUV"?ue="SUV":ue="세단/쿠페",{...ne,brand:ie,type:ue}});s(Y)}catch(G){console.error("Failed to fetch cars:",G),p(G)}finally{h(!1)}})()},[]),v.useEffect(()=>{(async()=>{if(!k.startDate)return;const G=new Date(k.startDate).toISOString().split("T")[0];try{const N=await fetch(`http://localhost:8080/api/reservations/reserved-cars?date=${G}`);if(!N.ok)throw new Error("Failed to fetch reserved cars");const Y=await N.json();j(Y)}catch(N){console.error("Failed to fetch reserved car IDs:",N)}})()},[k.startDate]);const A=z=>{a("/insurance",{state:{...k,car:z}})},{availableCars:D,unavailableCars:U}=v.useMemo(()=>{let z=[...l];m&&(z=z.filter(Y=>Y.brand===m)),w&&(z=z.filter(Y=>Y.type===w)),M==="price_asc"?z.sort((Y,ne)=>Y.rentPricePer10min-ne.rentPricePer10min):M==="price_desc"&&z.sort((Y,ne)=>ne.rentPricePer10min-Y.rentPricePer10min);const G=z.filter(Y=>!O.includes(Y.id)),N=z.filter(Y=>O.includes(Y.id));return{availableCars:G,unavailableCars:N}},[l,m,w,M,O]),S=v.useMemo(()=>[...new Set(l.map(z=>z.brand))],[l]),_=v.useMemo(()=>[...new Set(l.map(z=>z.type))],[l]);return d?c.jsx(Uf,{children:"Loading..."}):x?c.jsxs(Uf,{children:["Error: ",x.message]}):c.jsxs(Uf,{children:[c.jsx(LM,{children:c.jsxs(BM,{children:[c.jsx(UM,{})," ",c.jsx(_M,{children:"대여·반납"}),c.jsx($M,{children:k.locationName||n})]})}),c.jsxs(HM,{children:[c.jsxs(Hf,{onChange:z=>g(z.target.value),children:[c.jsx("option",{value:"",children:"모든 브랜드"}),S.map(z=>c.jsx("option",{value:z,children:z},z))]}),c.jsxs(Hf,{onChange:z=>C(z.target.value),children:[c.jsx("option",{value:"",children:"모든 차종"}),_.map(z=>c.jsx("option",{value:z,children:z},z))]}),c.jsxs(Hf,{onChange:z=>R(z.target.value),children:[c.jsx("option",{value:"",children:"기본 정렬"}),c.jsx("option",{value:"price_asc",children:"가격 낮은 순"}),c.jsx("option",{value:"price_desc",children:"가격 높은 순"})]})]}),c.jsxs(IM,{children:[D.map(z=>c.jsxs(Zx,{onClick:()=>A(z),children:[c.jsx(Xx,{children:c.jsx("img",{src:z.imageUrl,alt:z.carName})}),c.jsxs(Kx,{children:[c.jsx(Uh,{children:z.carName}),c.jsxs(Hh,{children:["10분당 ",z.rentPricePer10min.toLocaleString(),"원"]})]}),c.jsx(Qx,{children:c.jsx(Oh,{size:22})})]},z.id)),U.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(VM,{children:c.jsx("span",{children:"예약 불가 차량"})}),U.map(z=>c.jsxs(Zx,{disabled:!0,children:[c.jsx(Xx,{children:c.jsx("img",{src:z.imageUrl,alt:z.carName})}),c.jsxs(Kx,{children:[c.jsx(Uh,{children:z.carName}),c.jsxs(Hh,{children:["10분당 ",z.rentPricePer10min.toLocaleString(),"원"]})]}),c.jsx(Qx,{children:c.jsx(Oh,{size:22})})]},z.id))]})]})]})},Uf=b.div``,LM=b.div`
    background: #fff;
    border-radius: 16px;
    border: 1px solid #e7e0d9;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    padding: 14px 16px;
    margin-bottom: 14px;
`,BM=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
`,_M=b.span`
    font-size: 12px;
    color: #795548;
    min-width: 60px;
`,$M=b.span`
    font-weight: 600;
    font-size: 14px;
    color: #5d4037;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,UM=b.span`
    width: 6px; height: 6px; border-radius: 50%; background:#a47551; display:inline-block;
`,HM=b.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`,Hf=b.select`
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #e7e0d9;
    background-color: #fff;
    font-size: 14px;
    color: #5d4037;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%235D4037%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 10px top 50%;
    background-size: .65em auto;
`,IM=b.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0; margin: 0; list-style: none;
`,VM=b.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 24px 8px 16px;
    color: #adb5bd;
    font-size: 13px;
    font-weight: 600;

    &::before, &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #e9ecef;
    }

    & > span {
        padding: 0 12px;
    }
`,Zx=b.li`
    display: grid;
    grid-template-columns: 130px 1fr auto;
    align-items: center;
    gap: 16px;
    background: #fff;
    border-radius: 16px;
    border: 1px solid #e7e0d9;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    padding-right: 16px;
    overflow: hidden;
    transition: transform .06s ease, box-shadow .12s ease;
    cursor: pointer;
    &:active { transform: scale(0.995); }

    ${n=>n.disabled&&`
        background: #f8f9fa; // very light grey
        cursor: not-allowed;
        box-shadow: none;

        img {
            filter: grayscale(80%);
        }

        ${Uh}, ${Hh} {
            color: #ced4da; // light grey text
        }

        &:hover {
            transform: none;
            box-shadow: none;
        }
    `}
`,Xx=b.div`
    width: 130px; height: 100px;
    overflow: hidden; background:#f3f3f3;
    img { width: 100%; height: 100%; object-fit: contain; display:block; }
`,Kx=b.div`
    display: flex; flex-direction: column; gap: 4px; min-width: 0;
`,Uh=b.div`
    font-size: 16px; font-weight: 700; color:#5d4037;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`,Hh=b.div`
    font-size: 14px; color: #795548;
`,Qx=b.div`
    width: 28px; height: 28px; border-radius: 999px; border: 1px solid #e7e0d9; background:#fff;
    display: grid; place-items: center;
    color: #adb5bd;
`,PM=[{id:"basic",title:"베이직",price:5e5,features:["면책금: 수리비 20%","보상한도: 100만","단독사고: 이용자 보상"]},{id:"standard",title:"스탠다드",price:8e5,features:["면책금: 면제","보상한도: 300만","단독사고: 이용자 보상"]},{id:"premium",title:"프리미엄",price:12e5,features:["면책금: 면제","보상한도: 무제한","단독사고: 면제"],recommended:!0}],qM=()=>{const n=Je(),a=Tt(),[i,l]=v.useState(null),s=v.useMemo(()=>a.state||{},[a.state]),d=()=>{if(!i)return;const h=typeof s.price=="number"?s.price:0,x=i.price||0,p=h+x;n("/checkout",{state:{...s,insurance:i,payment:{basePrice:h,insurancePrice:x,totalPrice:p}}})};return c.jsxs(FM,{children:[c.jsxs(YM,{children:[c.jsx(GM,{onClick:()=>n(-1),"aria-label":"이전 페이지로",children:c.jsx(sp,{size:24})}),c.jsx(ZM,{children:"보험 선택"})]}),c.jsx(XM,{role:"radiogroup","aria-label":"보험 선택",children:PM.map(h=>{const x=i?.id===h.id;return c.jsxs(KM,{role:"radio","aria-checked":x,tabIndex:0,$active:x,onClick:()=>l(h),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&l(h)},children:[x&&c.jsx(WM,{children:c.jsx(z3,{size:16})}),h.recommended&&c.jsx(ek,{children:"추천"}),c.jsx(QM,{children:h.title}),c.jsx(JM,{children:h.features.map((p,m)=>c.jsx("li",{children:p},m))})]},h.id)})}),c.jsx(tk,{children:c.jsx(nk,{type:"button",disabled:!i,onClick:d,"aria-disabled":!i,children:"결제하기"})})]})},FM=b.div`
    padding: 16px 16px 96px;
`,YM=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
`,GM=b.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #5d4037;
    padding: 0;
    display: grid;
    place-items: center;
`,ZM=b.h2`
    font-size: 20px;
    font-weight: 800;
    color: #5d4037;
    margin: 0;
`,XM=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`,KM=b.div`
    position: relative;
    text-align: left;
    background: #fff;
    border-radius: 16px;
    padding: 16px 14px;
    border: 2px solid ${({$active:n})=>n?"#a47551":"#e7e0d9"}; /* Moca: Primary Brown / Beige */
    box-shadow: ${({$active:n})=>n?"0 10px 24px rgba(164, 117, 81, .18)":"0 6px 18px rgba(0,0,0,.06)"}; /* Moca: Shadow */
    transform: ${({$active:n})=>n?"translateY(-2px)":"none"};
    transition: all .15s ease;
    cursor: pointer;
    outline: none;

    &:hover {
        border-color: #a47551;
    }

    /* Moca: Primary Brown */
`,QM=b.h3`
    font-size: 18px;
    font-weight: 800;
    margin: 2px 0 10px;
    color: #5d4037; /* Moca: Dark Brown */
`,JM=b.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    list-style: none;
`;b.li`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #795548; /* Moca: Medium Brown */
    line-height: 1.35;

    svg {
        color: #a47551; /* Moca: Primary Brown */
        flex-shrink: 0; /* 아이콘이 찌그러지지 않도록 */
    }
`;const WM=b.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: #a47551; /* Moca: Primary Brown */
    color: #fff;
    display: grid;
    place-items: center;
    box-shadow: 0 6px 16px rgba(164, 117, 81, .35); /* Moca: Shadow */
`,ek=b.span`
    position: absolute;
    top: -8px;
    left: 12px;
    background: #5d4037; /* Moca: Dark Brown */
    color: #fff;
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
`,tk=b.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 12px 32px 22px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 30%);
    max-width: 560px;
    margin: 0 auto;
    box-sizing: border-box;
`,nk=b.button`
    width: 100%;
    height: 52px;
    border-radius: 999px;
    border: 0;
    font-weight: 800;
    font-size: 16px;
    color: #fff;
    background: ${({disabled:n})=>n?"#d7ccc8":"#a47551"}; /* Moca: Disabled / Primary */
    box-shadow: ${({disabled:n})=>n?"none":"0 10px 24px rgba(164, 117, 81, .35)"}; /* Moca: Shadow */
    cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
`,If=n=>{try{return Number(n||0).toLocaleString("ko-KR")}catch{return`${n}`}},ak=()=>{const n=Je(),a=Tt(),i=v.useMemo(()=>a.state||{},[a.state]),{car:l,insurance:s}=i;if(!l||!s)return c.jsxs(Jx,{children:[c.jsx("p",{children:"예약 정보가 올바르지 않습니다. 다시 시도해주세요."}),c.jsx("button",{onClick:()=>n("/"),children:"메인으로 돌아가기"})]});const d=v.useMemo(()=>{const m=i.startDate?new Date(i.startDate):null,g=i.endDate?new Date(i.endDate):null,w=l?.rentPricePer10min??0;if(m&&g&&w>0){const M=(g.getTime()-m.getTime())/6e4;return Math.ceil(M/10)*w}const C=i?.payment?.basePrice??i?.price??0;return Number.isFinite(C)?C:0},[i,l]),h=v.useMemo(()=>{const m=s?.price??0;return Number.isFinite(m)?m:0},[s]),x=v.useMemo(()=>{const m=i?.payment?.totalPrice??d+h;return Number.isFinite(m)?m:0},[i,d,h]),p=()=>{n("/payment-options",{state:{...i,payment:{basePrice:d,insurancePrice:h,totalPrice:x}}})};return c.jsxs(Jx,{children:[c.jsxs(rk,{children:[c.jsx(ik,{onClick:()=>n(-1),"aria-label":"이전 페이지로",children:c.jsx(sp,{size:24})}),c.jsx(ok,{children:"예약 및 결제하기"})]}),c.jsxs(lk,{children:[c.jsx(Wx,{children:"예약내역"}),c.jsxs(sk,{children:[c.jsxs(eb,{children:[c.jsx("span",{children:"차량"}),c.jsx(Pf,{children:l.carName})]}),c.jsxs(eb,{children:[c.jsx("span",{children:"보험"}),c.jsx(Pf,{children:s.title})]})]}),c.jsx(Wx,{children:"결제금액"}),c.jsxs(ck,{children:[c.jsxs(Vf,{children:[c.jsx("span",{children:"대여 요금"}),c.jsxs("span",{children:[If(d),"원"]})]}),c.jsxs(Vf,{children:[c.jsx("span",{children:"면책상품 요금"}),c.jsxs("span",{children:[If(h),"원"]})]}),c.jsx(uk,{}),c.jsxs(Vf,{children:[c.jsx("strong",{children:"총 결제금액"}),c.jsxs(Pf,{children:[If(x),"원"]})]})]})]}),c.jsx(dk,{children:c.jsx(fk,{type:"button",onClick:p,children:"결제하기"})})]})},Jx=b.div`
    padding: 16px 16px 96px;
`,rk=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
`,ik=b.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #5d4037;
`,ok=b.h2`
    font-size: 20px;
    font-weight: 800;
    color: #5d4037;
    margin: 0;
`,lk=b.div`
    max-width: 400px;
    margin: 0 auto;
`,Wx=b.h3`
    font-size: 16px;
    font-weight: 700;
    color: #795548;
    margin-bottom: 12px;
`,sk=b.div`
    background: #fff;
    border-radius: 16px;
    padding: 12px 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,eb=b.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #795548;
`,ck=b.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
`,Vf=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #795548;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`,Pf=b.span`
  font-weight: 800;
`,uk=b.hr`
  border: none;
  border-top: 1px dashed #e7e0d9;
  margin: 16px 0;
`;b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  font-weight: 800;
  color: #5d4037;
`;b.span`
  font-size: 20px;
`;const dk=b.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px 32px 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 30%);
  max-width: 560px;
  margin: 0 auto;
  box-sizing: border-box;
`,fk=b.button`
  width: 100%;
  height: 52px;
  border-radius: 999px;
  border: 0;
  font-weight: 800;
  font-size: 16px;
  color: #fff;
  background: #a47551;
  box-shadow: 0 10px 24px rgba(164, 117, 81, 0.35);
  cursor: pointer;
`;function hk(n){return rt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.0743 10.4403l.655.4728-1.6101 2.0192 1.8647 2.2373-.646.5004-2.201-2.6924zm-2.2376 5.102H0V8.5121l.8367-.182zm20.944-4.3837c-.4364 0-.7715.1637-1.0049.4912-.2338.3274-.3505.8064-.3505 1.437 0 .6247.1167 1.096.3505 1.4143.2334.3183.5685.4775 1.0049.4775.4423 0 .7804-.1593 1.0143-.4775.2332-.3182.35-.7896.35-1.4142 0-.6307-.1168-1.1097-.35-1.4371-.234-.3275-.572-.4912-1.0143-.4912m0-.673c.691 0 1.234.2245 1.6277.673.3944.4488.5916 1.0915.5916 1.9283 0 .8244-.1955 1.4583-.5868 1.901-.3909.4422-.9356.6637-1.6325.6637-.691 0-1.234-.2215-1.6277-.6638-.3944-.4426-.5916-1.0765-.5916-1.901 0-.8367.1984-1.4794.5957-1.9282.3973-.4485.9385-.673 1.6236-.673m-5.534 4.4658a1.496 1.496 0 0 0 .3576-.0456 2.8804 2.8804 0 0 0 .3713-.1181 2.0066 2.0066 0 0 0 .3488-.1774 2.0778 2.0778 0 0 0 .2895-.2229v-1.1641h-.8693c-.441 0-.7626.0758-.9645.2274-.2025.1516-.3031.391-.3031.7185 0 .5214.2563.7822.7697.7822m-1.5704-.7458c0-.5032.1682-.887.5045-1.1504.337-.2638.826-.396 1.4691-.396h.964v-.3182c0-.77-.3393-1.155-1.0185-1.155-.2184 0-.447.0304-.6869.091-.2398.0608-.4594.1365-.659.2274l-.2457-.5913c.2487-.1394.517-.2469.8047-.323.2878-.0754.5685-.1136.8414-.1136 1.176 0 1.7646.6276 1.7646 1.8826v3.1833h-.6188l-.1-.5457c-.2488.2001-.5134.3547-.796.464-.2817.1092-.55.1637-.8046.1637-.4429 0-.7899-.1258-1.0416-.3775-.2515-.2517-.3772-.5987-.3772-1.0413m-1.6508-3.7653l.655.4728-1.6095 2.0192 1.864 2.2373-.6454.5004-2.201-2.6924zm-2.237 5.102h-.8367V8.5121l.8368-.182zm-4.4936-.5909c.1148 0 .2339-.0151.3576-.0456a2.8794 2.8794 0 0 0 .3713-.1181 1.9842 1.9842 0 0 0 .3488-.1774 2.0477 2.0477 0 0 0 .29-.2229v-1.1641h-.8698c-.4404 0-.762.0758-.9645.2274-.202.1516-.3031.391-.3031.7185 0 .5214.2563.7822.7697.7822m-1.5704-.7458c0-.5032.1682-.887.5052-1.1504.3363-.2638.826-.396 1.4684-.396h.9646v-.3182c0-.77-.3399-1.155-1.019-1.155-.218 0-.4471.0304-.6863.091-.2398.0608-.4595.1365-.6597.2274l-.2457-.5913c.2487-.1394.517-.2469.8053-.323.2878-.0754.5684-.1136.8408-.1136 1.1766 0 1.7646.6276 1.7646 1.8826v3.1833h-.6182l-.1001-.5457c-.2487.2001-.514.3547-.7958.464-.282.1092-.5501.1637-.8053.1637-.4423 0-.7893-.1258-1.041-.3775-.2516-.2517-.3778-.5987-.3778-1.0413Z"},child:[]}]})(n)}function pk(n){return rt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z"},child:[]}]})(n)}function mk(n){return rt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(n)}function tb(n){return rt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"},child:[]}]})(n)}function gk(n){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"},child:[]}]})(n)}function xk(n){return rt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(n)}const bk=[{id:"bank",name:"계좌이체",supported:!1,benefit:!0,icon:c.jsx(gk,{size:20})},{id:"creditcard",name:"신용/체크카드",supported:!1,benefit:!0,icon:c.jsx(mk,{size:20})}],vk=[{id:"kakaopay",name:"카카오페이",supported:!0,benefit:!0,brand:"kakao"},{id:"kbpay",name:"KB Pay",supported:!1,benefit:!0,brand:"kb"},{id:"payco",name:"PAYCO",supported:!1,benefit:!1,brand:"payco"},{id:"tosspay",name:"toss pay",supported:!1,benefit:!1,brand:"toss"},{id:"naverpay",name:"N pay",supported:!1,benefit:!1,brand:"naver"}],yk=()=>{const n=Je(),a=Tt(),[i,l]=v.useState(!1),[s,d]=v.useState("kakaopay"),h=v.useMemo(()=>a.state||{},[a.state]);v.useEffect(()=>{(!h||!h.payment&&typeof h.price!="number")&&n("/insurance",{replace:!0})},[h,n]);const x=v.useMemo(()=>{const C=(h.price??0)+(h.insurance?.price??0),M=h.payment?.totalPrice??C;return Number.isFinite(M)?M:0},[h]),p=h.car?.name?`MOCA - ${h.car.name}`:"MOCA",m=v.useMemo(()=>/Mobi|Android/i.test(navigator.userAgent),[]),g="http://localhost:8080",w=async C=>{if(d(C.id),!C.supported){alert("해당 결제수단은 추후 지원될 예정입니다.");return}if(C.id==="kakaopay"){if(!x||x<=0){alert("결제 금액이 올바르지 않습니다. 이전 단계로 돌아가 다시 시도해주세요.");return}l(!0);try{const M=await _e.post(`${g}/api/kakaopay/ready`,{partner_order_id:`MOCA-ORDER-${Date.now()}`,partner_user_id:h?.userId??"MOCA-USER-01",item_name:p,quantity:1,total_amount:x,tax_free_amount:0}),R=M?.data?.next_redirect_pc_url,O=M?.data?.next_redirect_mobile_url,j=m?O||R:R||O;j?(sessionStorage.setItem("reservationInfo",JSON.stringify(h)),window.location.assign(j)):alert("결제 페이지로 이동하는 데 실패했습니다. 다시 시도해주세요.")}catch(M){console.error("카카오페이 결제 준비 중 오류:",M),alert("결제에 실패했습니다. 잠시 후 다시 시도해주세요.")}finally{l(!1)}}};return c.jsxs(Sk,{children:[c.jsxs(jk,{children:[c.jsx(Ck,{onClick:()=>n(-1),"aria-label":"이전 페이지로",children:c.jsx(sp,{size:24})}),c.jsx(Ek,{children:"결제 방법"})]}),c.jsxs(nb,{children:[c.jsx(ab,{children:"일반결제"}),c.jsx(rb,{cols:2,children:bk.map(C=>c.jsxs(ib,{role:"button",tabIndex:0,"aria-label":C.name,$selected:s===C.id,$disabled:i,onClick:()=>w(C),onKeyDown:M=>(M.key==="Enter"||M.key===" ")&&w(C),title:C.name,children:[C.benefit&&c.jsx(ob,{children:"혜택"}),c.jsxs(kk,{children:[c.jsx(Tk,{children:C.icon}),c.jsx(Rk,{children:C.name})]}),c.jsx(Ok,{children:c.jsx(Oh,{size:18})})]},C.id))})]}),c.jsx(Mk,{}),c.jsxs(nb,{children:[c.jsx(ab,{children:"간편결제"}),c.jsx(rb,{cols:2,children:vk.map(C=>c.jsxs(ib,{role:"button",tabIndex:0,"aria-label":C.name,$selected:s===C.id,$disabled:i&&C.id==="kakaopay",$iconOnly:!0,onClick:()=>w(C),onKeyDown:M=>(M.key==="Enter"||M.key===" ")&&w(C),title:C.name,children:[C.benefit&&c.jsx(ob,{children:"혜택"}),c.jsx(Ak,{brand:C.brand})]},C.id))})]})]})},wk="clamp(48px, 18vw, 96px)",Sk=b.div`
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    //padding: 16px;
`,jk=b.header`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
`,Ck=b.button`
    background: none;
    border: 0;
    cursor: pointer;
    color: #5d4037;
    display: grid;
    place-items: center;
    touch-action: manipulation;
`,Ek=b.h2`
    font-size: 18px;
    font-weight: 800;
    color: #5d4037;
    margin: 0;
`,nb=b.section`
    margin-top: 8px;
`,ab=b.h3`
    font-size: 14px;
    font-weight: 700;
    color: #5d4037;
    margin: 8px 0 10px;
`,Mk=b.hr`
    border: 0;
    border-top: 1px solid #eee7e1;
    margin: 16px 0;
`,rb=b.div`
    display: grid;
    grid-template-columns: repeat(${n=>n.cols||2}, 1fr);
    gap: 12px; /* 모바일에서 살짝 더 넓게 */
`,ib=b.div`
    position: relative;
    background: #fff;
    border: 1px solid #e7e0d9;
    border-radius: 14px;
    height: ${wk};     /* ← 고정 높이 대신 반응형 */
    padding: 16px;
    cursor: pointer;
    transition: border-color .12s ease, box-shadow .12s ease, transform .06s ease, background .12s ease;

    /* 기본(일반결제): 좌측 콘텐츠 + 우측 화살표 */
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    /* 간편결제(아이콘만): 중앙 정렬 */
    ${n=>n.$iconOnly&&mn`
                grid-template-columns: 1fr;
                place-items: center;
            `}

    &:hover {
        border-color: #cdb6a8;
        box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        transform: translateY(-1px);
        background: #fffefd;
    }

    ${n=>n.$selected&&mn`
                border-color: #3b82f6;
                /* 두께를 올리지 않고 링 효과만 → 높이 흔들림 방지 */
                box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
                background: #ffffff;
            `}

    ${n=>n.$disabled&&mn`
                opacity: 0.6;
                pointer-events: none;
            `}
`,ob=b.span`
    position: absolute;
    top: 6px;            /* ← 기존 -8px에서 안쪽으로 */
    right: 6px;
    font-size: 11px;
    font-weight: 800;
    color: #fff;
    background: #ff6b6b;
    padding: 4px 8px;
    border-radius: 999px;
    box-shadow: 0 4px 10px rgba(255,107,107,.25);
`,kk=b.div`
    display: inline-flex;
    align-items: center;
    gap: 12px;
`,Tk=b.span`
    width: 48px;   /* 모바일에서 아이콘 더 또렷하게 */
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: #fff;
    border: 1px solid #e7e0d9;
    color: #5d4037;
    @media (min-width: 560px) {
        width: 44px;
        height: 44px;
    }
`,Rk=b.span`
    font-size: 15px;
    font-weight: 700;
    color: #5d4037;
`,Ok=b.div`
    color: #b0b7bd;
    display: grid;
    place-items: center;
`,Ak=({brand:n})=>n==="kakao"?c.jsx(To,{bg:"#FFEB00",border:"#f3d900",title:"카카오페이",children:c.jsx(hk,{size:24,color:"#000"})}):n==="naver"?c.jsx(To,{bg:"#E8F8EC",border:"#cfeedd",title:"네이버페이",children:c.jsx(pk,{size:24,color:"#03C75A"})}):n==="kb"?c.jsx(To,{bg:"#FFF4D1",border:"#ffe3a3",title:"KB Pay",children:c.jsx(xk,{size:22,color:"#F1B800"})}):n==="payco"?c.jsx(To,{bg:"#FFE8E8",border:"#ffd1d1",title:"PAYCO",children:c.jsx(tb,{size:22,color:"#FF3B30"})}):n==="toss"?c.jsx(To,{bg:"#E9F1FF",border:"#d4e4ff",title:"toss pay",children:c.jsx(tb,{size:22,color:"#2F80ED"})}):null,To=b.span`
    display: inline-grid;
    place-items: center;
    width: 48px;       /* 모바일에서 시인성 ↑ */
    height: 48px;
    border-radius: 12px;
    background: ${n=>n.bg};
    border: 1px solid ${n=>n.border};
    @media (min-width: 560px) {
        width: 44px;
        height: 44px;
    }
`;function Dk(){const{status:n}=$S(),a=Je(),{user:i,authLoading:l}=St();console.log("User object in PaymentResult:",i),console.log("Auth loading status:",l);const s="http://localhost:8080";v.useEffect(()=>{try{window.top!==window.self&&window.top.location.replace(window.location.href)}catch{}},[]),v.useEffect(()=>{if(!l&&n==="success"){const x=sessionStorage.getItem("reservationInfo");if(x){const p=JSON.parse(x);sessionStorage.removeItem("reservationInfo");const m=p.startDate?new Date(p.startDate):null,g=p.endDate?new Date(p.endDate):null,w={carId:p.car?.id,locationName:p.locationName,startDate:m?.toISOString(),endDate:g?.toISOString(),passengerCount:p.passengerCount,memo:p.memo,totalAmount:p.payment?.totalPrice};(async()=>{if(!i||!i.token){console.error("User not authenticated or token not available. Cannot save reservation.");return}try{const M=await _e.post(`${s}/api/reservations`,w,{headers:{Authorization:`Bearer ${i.token}`}});console.log("Reservation saved successfully!",M.data),window.dispatchEvent(new CustomEvent("reservationCreated",{detail:{reservation:M.data,userId:i.userId,timestamp:new Date().toISOString()}})),window.dispatchEvent(new CustomEvent("refreshNotifications",{detail:{reason:"reservation_created"}})),console.log("✅ 예약 완료 이벤트 발송됨")}catch(M){console.error("Failed to save reservation:",M)}})()}else console.warn("No reservation info found in sessionStorage for successful payment.")}},[n,l,i]);const d={success:{title:"결제가 성공적으로 완료되었습니다.",message:"MOCA와 함께 즐거운 시간 되세요!",icon:"✅"},cancel:{title:"결제가 취소되었습니다.",message:"다시 시도하시려면 홈으로 이동해주세요.",icon:"⚠️"},fail:{title:"결제에 실패했습니다.",message:"문제가 지속되면 고객센터로 문의해주세요.",icon:"❌"}},h=d[n]||d.fail;return c.jsxs(Nk,{children:[c.jsx(zk,{children:h.icon}),c.jsx(Lk,{children:h.title}),c.jsx(Bk,{children:h.message}),c.jsx(_k,{onClick:()=>a("/home"),children:"홈으로 돌아가기"})]})}const Nk=b.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 40px 16px;
  min-height: 100vh;
  text-align: center;
`,zk=b.div`
  font-size: 48px;
`,Lk=b.h1`
  font-size: 20px;
  font-weight: 700;
  color: #5d4037;
`,Bk=b.p`
  font-size: 16px;
  color: #6d4c41;
  margin: 0;
`,_k=b.button`
  margin-top: 16px;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background-color: #a47551;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #a47551;
  }
`,$k=()=>{const[n,a]=v.useState(null),[i,l]=v.useState(null),[s,d]=v.useState(null),[h,x]=v.useState(null),[p,m]=v.useState({}),[g,w]=v.useState({dashboard:!0,monthly:!0,vehicle:!0,region:!0});v.useEffect(()=>{C(),M(),R(),O()},[]);const C=async()=>{try{const S=await fetch("http://localhost:8080/api/rental/admin/dashboard/stats");if(!S.ok)throw new Error("대시보드 통계 로드 실패");const _=await S.json();a(_)}catch(S){m(_=>({..._,dashboard:S.message}))}finally{w(S=>({...S,dashboard:!1}))}},M=async()=>{try{const[S,_]=await Promise.all([fetch("http://localhost:8080/api/rental/admin/stats/monthly-reservations"),fetch("http://localhost:8080/api/rental/admin/stats/revenue")]);if(!S.ok||!_.ok)throw new Error("월별 통계 로드 실패");const z=await S.json(),G=await _.json();l({monthly:z,revenue:G})}catch(S){m(_=>({..._,monthly:S.message}))}finally{w(S=>({...S,monthly:!1}))}},R=async()=>{try{const S=await fetch("http://localhost:8080/api/rental/admin/stats/vehicle-types");if(!S.ok)throw new Error("차량 통계 로드 실패");const _=await S.json();d(_)}catch(S){m(_=>({..._,vehicle:S.message}))}finally{w(S=>({...S,vehicle:!1}))}},O=async()=>{try{const S=await fetch("http://localhost:8080/api/rental/admin/stats/regions");if(!S.ok)throw new Error("지역 통계 로드 실패");const _=await S.json();x(_)}catch(S){m(_=>({..._,region:S.message}))}finally{w(S=>({...S,region:!1}))}},j=S=>({PENDING:"대기중",CONFIRMED:"확정",IN_PROGRESS:"진행중",COMPLETED:"완료",CANCELLED:"취소"})[S]||S,k=S=>({AVAILABLE:"이용가능",RENTED:"대여중",MAINTENANCE:"정비중"})[S]||S,A=S=>({COMPACT:"소형차",MIDSIZE:"중형차",FULLSIZE:"대형차",SUV:"SUV",VAN:"승합차"})[S]||S,D=i?i.monthly.months?.map((S,_)=>({name:S.substring(5),count:i.monthly.counts[_],revenue:i.revenue.revenues?Math.round(i.revenue.revenues[_]/1e4):0})):[],U=s?Object.entries(s).map(([S,_])=>({name:A(S),value:_})):[];return c.jsxs(Hk,{children:[c.jsx(Ik,{children:"MOCA 대시보드"}),c.jsx(Pk,{children:g.dashboard?c.jsxs(c.Fragment,{children:[c.jsx(ar,{}),c.jsx(ar,{}),c.jsx(ar,{}),c.jsx(ar,{})]}):n?c.jsxs(c.Fragment,{children:[c.jsxs(As,{color:"#fff3e0",children:[c.jsx(Ds,{children:"📊"}),c.jsx(Ns,{children:n.totalReservations||0}),c.jsx(zs,{children:"총 예약"})]}),c.jsxs(As,{color:"#e8f5e8",children:[c.jsx(Ds,{children:"🚗"}),c.jsx(Ns,{children:n.totalCars||0}),c.jsx(zs,{children:"총 차량"})]}),c.jsxs(As,{color:"#e3f2fd",children:[c.jsx(Ds,{children:"👥"}),c.jsx(Ns,{children:n.totalUsers||0}),c.jsx(zs,{children:"사용자"})]}),c.jsxs(As,{color:"#fce4ec",children:[c.jsx(Ds,{children:"📍"}),c.jsx(Ns,{children:n.totalLocations||0}),c.jsx(zs,{children:"지점수"})]})]}):p.dashboard?c.jsx(Is,{children:"통계 카드를 불러올 수 없습니다."}):null}),g.monthly?c.jsxs(Ih,{children:[c.jsx(Kn,{children:"월별 예약 현황"}),c.jsx(Vk,{})]}):D.length>0?c.jsxs(Ih,{children:[c.jsx(Kn,{children:"월별 예약 현황"}),c.jsx(qk,{children:c.jsx(Fk,{children:D.map((S,_)=>c.jsxs(Yk,{children:[c.jsx(Gk,{height:S.count*4}),c.jsxs(Zk,{children:[S.name,"월"]}),c.jsx(Xk,{children:S.count})]},_))})})]}):p.monthly?c.jsxs(qf,{children:[c.jsx(Kn,{children:"월별 예약 현황"}),c.jsx(Is,{children:"월별 통계를 불러올 수 없습니다."})]}):null,g.vehicle?c.jsxs(Ls,{children:[c.jsx(Kn,{children:"차량 타입별 현황"}),c.jsx(ar,{})]}):U.length>0?c.jsxs(Ls,{children:[c.jsx(Kn,{children:"차량 타입별 현황"}),c.jsx(Bs,{children:U.map((S,_)=>c.jsxs(_s,{children:[c.jsx(Kk,{color:["#a47551","#795548","#8d6e63","#bcaaa4","#d7ccc8"][_%5]}),c.jsxs($s,{children:[c.jsx(Us,{children:S.name}),c.jsxs(Hs,{children:[S.value,"대"]})]})]},_))})]}):p.vehicle?c.jsxs(qf,{children:[c.jsx(Kn,{children:"차량 타입별 현황"}),c.jsx(Is,{children:"차량 타입 통계를 불러올 수 없습니다."})]}):null,g.dashboard?c.jsxs(Ls,{children:[c.jsx(Kn,{children:"현재 상태 현황"}),c.jsx(ar,{})]}):n?c.jsxs(Ls,{children:[c.jsx(Kn,{children:"현재 상태 현황"}),n.reservationStatusStats&&c.jsxs(Ff,{children:[c.jsx(Yf,{children:"📅 예약 상태"}),c.jsx(Bs,{children:Object.entries(n.reservationStatusStats).map(([S,_])=>c.jsxs(_s,{children:[c.jsx(Qk,{status:S}),c.jsxs($s,{children:[c.jsx(Us,{children:j(S)}),c.jsxs(Hs,{children:[_,"건"]})]})]},S))})]}),n.carStatusStats&&c.jsxs(Ff,{children:[c.jsx(Yf,{children:"🚗 차량 상태"}),c.jsx(Bs,{children:Object.entries(n.carStatusStats).map(([S,_])=>c.jsxs(_s,{children:[c.jsx(Jk,{status:S}),c.jsxs($s,{children:[c.jsx(Us,{children:k(S)}),c.jsxs(Hs,{children:[_,"대"]})]})]},S))})]}),n.licenseStats&&c.jsxs(Ff,{children:[c.jsx(Yf,{children:"📄 면허증 승인"}),c.jsx(Bs,{children:Object.entries(n.licenseStats).map(([S,_])=>c.jsxs(_s,{children:[c.jsx(Wk,{status:S}),c.jsxs($s,{children:[c.jsx(Us,{children:S==="approved"?"승인됨":"대기중"}),c.jsxs(Hs,{children:[_,"건"]})]})]},S))})]})]}):p.dashboard?c.jsxs(qf,{children:[c.jsx(Kn,{children:"현재 상태 현황"}),c.jsx(Is,{children:"상태 현황을 불러올 수 없습니다."})]}):null]})},Uk=N6`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`,Hk=b.div`
  padding: 0;
  background: transparent;
  width: 100%;
`,Ik=b.h1`
  margin: 0 0 20px 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`,ar=b.div`
  height: 80px;
  background: #f5f1ed; /* Moca: Light Brown BG */
  background-image: linear-gradient(
    90deg,
    #f5f1ed 0px,
    #e7e0d9 40px,
    #f5f1ed 80px
  );
  background-size: 200px;
  animation: ${Uk} 1.2s ease-in-out infinite;
  border-radius: 16px;
`,Vk=b(ar)`
  height: 200px;
`,Pk=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`,As=b.div`
  background: ${n=>n.color||"#ffffff"};
  border-radius: 16px;
  padding: 20px 16px;
  text-align: center;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15);
  }
`,Ds=b.div`
  font-size: 1.5rem;
  margin-bottom: 8px;
`,Ns=b.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 4px;
`,zs=b.div`
  font-size: 0.85rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
`,Ih=b.div`
  margin-bottom: 24px;
`,qf=b(Ih)``,Kn=b.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin: 0 0 12px 0;
`,qk=b.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
`,Fk=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 120px;
  gap: 8px;
`,Yk=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`,Gk=b.div`
  width: 100%;
  max-width: 30px;
  background: linear-gradient(
    180deg,
    #a47551,
    #795548
  ); /* Moca: Primary to Medium Brown */
  border-radius: 4px 4px 0 0;
  height: ${n=>Math.max(n.height,10)}px;
  margin-bottom: 8px;
`,Zk=b.div`
  font-size: 0.7rem;
  color: #795548; /* Moca: Medium Brown */
  margin-bottom: 2px;
`,Xk=b.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
`,Ls=b.div`
  margin-bottom: 24px;
`,Ff=b.div`
  margin-bottom: 20px;
`,Yf=b.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin: 0 0 12px 0;
`,Bs=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_s=b.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  display: flex;
  align-items: center;
  gap: 12px;
`,Kk=b.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${n=>n.color};
  flex-shrink: 0;
`,Qk=b.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${n=>{switch(n.status){case"CONFIRMED":return"#10b981";case"PENDING":return"#f59e0b";case"IN_PROGRESS":return"#3b82f6";case"COMPLETED":return"#795548";case"CANCELLED":return"#ef4444";default:return"#795548"}}};
`,Jk=b.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${n=>{switch(n.status){case"AVAILABLE":return"#10b981";case"RENTED":return"#f59e0b";case"MAINTENANCE":return"#ef4444";default:return"#795548"}}};
`,Wk=b.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${n=>{switch(n.status){case"approved":return"#10b981";case"pending":return"#f59e0b";default:return"#795548"}}};
`,$s=b.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Us=b.div`
  font-size: 0.9rem;
  color: #5d4037; /* Moca: Dark Brown */
  font-weight: 500;
`,Hs=b.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #a47551; /* Moca: Primary */
`,Is=b.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #fecaca;
  font-size: 0.9rem;
`,eT=()=>{const[n,a]=v.useState([]),[i,l]=v.useState(!1),[s,d]=v.useState(null),[h,x]=v.useState(""),[p,m]=v.useState("ALL"),[g,w]=v.useState(null),[C,M]=v.useState(!1),[R,O]=v.useState(!1),j=[{value:"ALL",label:"전체"},{value:"PENDING",label:"대기중"},{value:"CONFIRMED",label:"확정"},{value:"IN_PROGRESS",label:"진행중"},{value:"COMPLETED",label:"완료"},{value:"CANCELLED",label:"취소"}],k=N=>{switch(N){case"PENDING":return"#f59e0b";case"CONFIRMED":return"#a47551";case"IN_PROGRESS":return"#10b981";case"COMPLETED":return"#795548";case"CANCELLED":return"#ef4444";default:return"#795548"}},A=async()=>{l(!0),d(null);try{const N=localStorage.getItem("accessToken");if(!N)throw new Error("로그인이 필요합니다.");const Y=p==="ALL"?"http://localhost:8080/api/reservations/admin/all":`http://localhost:8080/api/reservations/admin/all?status=${p}`,ne=await fetch(Y,{method:"GET",headers:{Authorization:`Bearer ${N}`,"Content-Type":"application/json"}});if(!ne.ok)throw ne.status===403?new Error("관리자 권한이 필요합니다."):new Error("예약 목록을 불러오는데 실패했습니다.");const ie=await ne.json();a(ie)}catch(N){d(N.message),console.error("Error fetching reservations:",N)}finally{l(!1)}},D=async(N,Y)=>{try{const ne=localStorage.getItem("accessToken"),ie=await fetch(`http://localhost:8080/api/reservations/admin/${N}/status?status=${Y}`,{method:"PUT",headers:{Authorization:`Bearer ${ne}`,"Content-Type":"application/json"}});if(!ie.ok)throw new Error("상태 변경에 실패했습니다.");const ue=await ie.json();a(Te=>Te.map(Z=>Z.id===N?ue:Z)),g&&g.id===N&&w(ue),O(!1),alert("상태가 성공적으로 변경되었습니다.")}catch(ne){alert(ne.message),console.error("Error updating status:",ne)}},U=async N=>{if(confirm("정말로 이 예약을 삭제하시겠습니까?"))try{const Y=localStorage.getItem("accessToken");if(!(await fetch(`http://localhost:8080/api/reservations/admin/${N}`,{method:"DELETE",headers:{Authorization:`Bearer ${Y}`,"Content-Type":"application/json"}})).ok)throw new Error("예약 삭제에 실패했습니다.");a(ie=>ie.filter(ue=>ue.id!==N)),g&&g.id===N&&(M(!1),w(null)),alert("예약이 성공적으로 삭제되었습니다.")}catch(Y){alert(Y.message),console.error("Error deleting reservation:",Y)}},S=async N=>{try{const Y=localStorage.getItem("accessToken"),ne=await fetch(`http://localhost:8080/api/reservations/admin/${N}`,{method:"GET",headers:{Authorization:`Bearer ${Y}`,"Content-Type":"application/json"}});if(!ne.ok)throw new Error("예약 상세 정보를 불러오는데 실패했습니다.");const ie=await ne.json();w(ie),M(!0)}catch(Y){alert(Y.message),console.error("Error fetching reservation details:",Y)}},_=n.filter(N=>h===""||N.userId?.toLowerCase().includes(h.toLowerCase())||N.locationName?.toLowerCase().includes(h.toLowerCase())||N.car?.carName?.toLowerCase().includes(h.toLowerCase())),z=(N,Y)=>N?`${N} ${Y||""}`.trim():"-",G=N=>N?new Intl.NumberFormat("ko-KR").format(N)+"원":"-";return v.useEffect(()=>{A()},[p]),i?c.jsxs(lb,{children:[c.jsx(sb,{children:c.jsx(cb,{children:"예약 관리"})}),c.jsx(uT,{children:[...Array(4)].map((N,Y)=>c.jsx(dT,{},Y))})]}):c.jsxs(lb,{children:[c.jsxs(sb,{children:[c.jsx(cb,{children:"예약 관리"}),c.jsxs(tT,{children:["총 ",_.length,"건"]})]}),c.jsxs(nT,{children:[c.jsxs(aT,{children:[c.jsx(rT,{children:"🔍"}),c.jsx(iT,{type:"text",placeholder:"사용자ID, 차량명, 지점명으로 검색...",value:h,onChange:N=>x(N.target.value)})]}),c.jsxs(oT,{children:[c.jsx(lT,{children:"📋"}),c.jsx(sT,{value:p,onChange:N=>m(N.target.value),children:j.map(N=>c.jsx("option",{value:N.value,children:N.label},N.value))})]}),c.jsx(cT,{onClick:A,disabled:i,children:"🔄 새로고침"})]}),s&&c.jsxs(RT,{children:["⚠️ ",s]}),c.jsx(fT,{children:_.length===0?c.jsxs(MT,{children:[c.jsx(kT,{children:"📋"}),c.jsx(TT,{children:"조건에 맞는 예약이 없습니다"})]}):_.map(N=>c.jsxs(hT,{children:[c.jsxs(pT,{children:[c.jsxs(mT,{children:[c.jsx(gT,{children:N.userId}),c.jsxs(xT,{children:["예약번호: #",N.id]}),c.jsxs(bT,{children:["📍 ",N.locationName]})]}),c.jsx(ub,{color:k(N.status),children:j.find(Y=>Y.value===N.status)?.label||N.status})]}),c.jsx(vT,{children:c.jsxs(yT,{children:[c.jsx(wT,{children:N.car?.carName||"-"}),c.jsxs(ST,{children:["승객 ",N.passengerCount,"명"]})]})}),c.jsx(db,{children:c.jsxs(fb,{children:[c.jsx(hb,{children:"대여"}),c.jsx(pb,{children:z(N.rentalDate,N.rentalTime)})]})}),c.jsx(db,{children:c.jsxs(fb,{children:[c.jsx(hb,{children:"반납"}),c.jsx(pb,{children:z(N.returnDate,N.returnTime)})]})}),c.jsx(jT,{children:c.jsx(CT,{children:G(N.totalAmount)})}),c.jsxs(ET,{children:[c.jsx(Gf,{onClick:()=>S(N.id),children:"상세"}),c.jsx(Gf,{primary:!0,onClick:()=>{w(N),O(!0)},children:"수정"}),c.jsx(Gf,{danger:!0,onClick:()=>U(N.id),children:"삭제"})]})]},N.id))}),C&&g&&c.jsx(mb,{onClick:()=>M(!1),children:c.jsxs(gb,{onClick:N=>N.stopPropagation(),children:[c.jsxs(xb,{children:[c.jsx(bb,{children:"예약 상세 정보"}),c.jsx(vb,{onClick:()=>M(!1),children:"×"})]}),c.jsx(yb,{children:c.jsxs(OT,{children:[c.jsxs(kn,{children:[c.jsx(Tn,{children:"예약번호"}),c.jsxs(Rn,{children:["#",g.id]})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"사용자ID"}),c.jsx(Rn,{children:g.userId})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"차량"}),c.jsx(Rn,{children:g.car?.carName||"-"})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"대여지점"}),c.jsx(Rn,{children:g.locationName})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"대여일시"}),c.jsx(Rn,{children:z(g.rentalDate,g.rentalTime)})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"반납일시"}),c.jsx(Rn,{children:z(g.returnDate,g.returnTime)})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"승객수"}),c.jsxs(Rn,{children:[g.passengerCount,"명"]})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"상태"}),c.jsx(Rn,{children:c.jsx(ub,{color:k(g.status),children:j.find(N=>N.value===g.status)?.label||g.status})})]}),c.jsxs(kn,{children:[c.jsx(Tn,{children:"총 금액"}),c.jsx(Rn,{children:G(g.totalAmount)})]}),g.memo&&c.jsxs(kn,{className:"full-width",children:[c.jsx(Tn,{children:"메모"}),c.jsx(Rn,{children:g.memo})]})]})})]})}),R&&g&&c.jsx(mb,{onClick:()=>O(!1),children:c.jsxs(gb,{onClick:N=>N.stopPropagation(),children:[c.jsxs(xb,{children:[c.jsx(bb,{children:"예약 상태 변경"}),c.jsx(vb,{onClick:()=>O(!1),children:"×"})]}),c.jsxs(yb,{children:[c.jsxs(AT,{children:["예약 #",g.id,"의 상태를 변경하시겠습니까?"]}),c.jsxs(DT,{children:["현재 상태:"," ",c.jsx("strong",{children:j.find(N=>N.value===g.status)?.label})]}),c.jsxs(NT,{children:[c.jsx(zT,{children:"새로운 상태:"}),c.jsx(LT,{defaultValue:g.status,onChange:N=>{N.target.value!==g.status&&D(g.id,N.target.value)},children:j.filter(N=>N.value!=="ALL").map(N=>c.jsx("option",{value:N.value,children:N.label},N.value))})]})]})]})})]})},lb=b.div`
  padding: 0;
  background: transparent;
  width: 100%;
`,sb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,cb=b.h1`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.5rem;
  font-weight: 700;
`,tT=b.div`
  background: linear-gradient(
    135deg,
    #a47551,
    #795548
  ); /* Moca: Primary to Medium Brown */
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(164, 117, 81, 0.3); /* Moca: Shadow */
`,nT=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`,aT=b.div`
  display: flex;
  align-items: center;
  position: relative;
`,rT=b.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,iT=b.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  font-size: 0.9rem;
  background: white;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,oT=b.div`
  display: flex;
  align-items: center;
  position: relative;
`,lT=b.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,sT=b.select`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  font-size: 0.9rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,cT=b.button`
  padding: 12px 16px;
  background: #a47551; /* Moca: Primary */
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #795548; /* Moca: Medium Brown */
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,uT=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,dT=b.div`
  height: 200px;
  background: linear-gradient(
    90deg,
    #f5f1ed 25%,
    #e7e0d9 50%,
    #f5f1ed 75%
  ); /* Moca: Light Colors */
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 16px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,fT=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,hT=b.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
  }
`,pT=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`,mT=b.div`
  flex: 1;
`,gT=b.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 4px;
`,xT=b.div`
  font-size: 0.75rem;
  color: #a47551; /* Moca: Primary */
  font-weight: 500;
  margin-bottom: 2px;
`,bT=b.div`
  font-size: 0.85rem;
  color: #795548; /* Moca: Medium Brown */
`,ub=b.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${n=>n.color}20;
  color: ${n=>n.color};
  border: 1px solid ${n=>n.color}40;
`,vT=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding: 12px;
  background: #f5f1ed; /* Moca: Light Brown BG */
  border-radius: 12px;
`;b.div`
  font-size: 1.2rem;
`;const yT=b.div`
  flex: 1;
`,wT=b.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 2px;
`,ST=b.div`
  font-size: 0.85rem;
  color: #795548; /* Moca: Medium Brown */
`,db=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;b.div`
  font-size: 1rem;
  width: 20px;
`;const fb=b.div`
  flex: 1;
`,hb=b.div`
  font-size: 0.75rem;
  color: #795548; /* Moca: Medium Brown */
  margin-bottom: 2px;
`,pb=b.div`
  font-size: 0.9rem;
  color: #5d4037; /* Moca: Dark Brown */
  font-weight: 500;
`,jT=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;b.div`
  font-size: 1rem;
`;const CT=b.div`
  font-size: 1rem;
  color: #a47551; /* Moca: Primary */
  font-weight: 700;
`,ET=b.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Gf=b.button`
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  min-width: 80px;

  background: ${n=>n.primary?"#a47551":n.danger?"#ef4444":"#f5f1ed"};

  color: ${n=>n.primary||n.danger?"white":"#5d4037"};

  border: 1px solid
    ${n=>n.primary?"#a47551":n.danger?"#ef4444":"#e7e0d9"};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(164, 117, 81, 0.2); /* Moca: Shadow */

    ${n=>!n.primary&&!n.danger&&`
      background: #e7e0d9;  /* Moca: Beige Border */
    `}
  }

  &:active {
    transform: translateY(0);
  }
`,MT=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background: white;
  border-radius: 16px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
`,kT=b.div`
  font-size: 3rem;
  margin-bottom: 16px;
  opacity: 0.5;
`,TT=b.div`
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,RT=b.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #fecaca;
  font-size: 0.9rem;
  text-align: center;
`,mb=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`,gb=b.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(164, 117, 81, 0.2); /* Moca: Shadow */
`,xb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e7e0d9; /* Moca: Beige Border */
  background: #f5f1ed; /* Moca: Light Brown BG */
`,bb=b.h3`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.1rem;
  font-weight: 700;
`,vb=b.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #795548; /* Moca: Medium Brown */
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: #5d4037; /* Moca: Dark Brown */
    background: #e7e0d9; /* Moca: Beige Border */
  }
`,yb=b.div`
  padding: 24px;
`,OT=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  .full-width {
    grid-column: 1 / -1;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,kn=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Tn=b.span`
  font-size: 0.75rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Rn=b.span`
  font-size: 0.9rem;
  color: #5d4037; /* Moca: Dark Brown */
  font-weight: 500;
`,AT=b.p`
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 12px;
`,DT=b.p`
  color: #795548; /* Moca: Medium Brown */
  margin-bottom: 16px;

  strong {
    color: #a47551; /* Moca: Primary */
  }
`,NT=b.div`
  margin-top: 16px;
`,zT=b.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 0.9rem;
`,LT=b.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  color: #5d4037; /* Moca: Dark Brown */

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,BT=()=>{const[n,a]=v.useState([]),[i,l]=v.useState(!1),[s,d]=v.useState(null),[h,x]=v.useState(""),[p,m]=v.useState("ALL"),[g,w]=v.useState(null),[C,M]=v.useState(!1),[R,O]=v.useState(!1),j=[{value:"ALL",label:"전체"},{value:"admin",label:"관리자"},{value:"user",label:"일반사용자"}],k=N=>{switch(N.toLowerCase()){case"admin":return"#dc2626";case"user":return"#10b981";default:return"#795548"}},A=N=>{switch(N.toLowerCase()){case"admin":return"🛡️";case"user":return"👤";default:return"👤"}},D=()=>[{userId:"admin",userName:"관리자",userRole:"admin"},{userId:"ksy",userName:"곽수영",userRole:"admin"},{userId:"kko",userName:"김건오",userRole:"admin"},{userId:"kdy",userName:"김도연",userRole:"admin"},{userId:"user01",userName:"김철수",userRole:"user"},{userId:"user02",userName:"이영희",userRole:"user"},{userId:"user03",userName:"최민준",userRole:"user"},{userId:"user04",userName:"정수빈",userRole:"user"},{userId:"user05",userName:"윤지우",userRole:"user"},{userId:"user06",userName:"박관리",userRole:"user"},{userId:"user07",userName:"오하은",userRole:"user"},{userId:"kim_cs",userName:"김철수",userRole:"user"},{userId:"lee_yh",userName:"이영희",userRole:"user"},{userId:"park_ms",userName:"박민수",userRole:"user"},{userId:"choi_je",userName:"최지은",userRole:"user"},{userId:"jung_th",userName:"정태호",userRole:"user"},{userId:"kang_sj",userName:"강수진",userRole:"user"},{userId:"yoon_mr",userName:"윤미래",userRole:"user"}],U=async()=>{l(!0),d(null);try{const N=localStorage.getItem("accessToken");try{const ne=await fetch("/api/users/admin/all",{headers:{Authorization:`Bearer ${N}`,"Content-Type":"application/json"}});if(ne.ok){const ie=await ne.json();a(ie);return}}catch(ne){console.log("API 호출 실패, Mock 데이터 사용:",ne)}await new Promise(ne=>setTimeout(ne,500));const Y=D();a(Y)}catch(N){d("사용자 목록을 불러오는데 실패했습니다."),console.error("Error fetching users:",N)}finally{l(!1)}},S=async(N,Y)=>{try{const ne=localStorage.getItem("accessToken");try{if(!(await fetch(`/api/users/admin/${N}/role`,{method:"PUT",headers:{Authorization:`Bearer ${ne}`,"Content-Type":"application/json"},body:JSON.stringify({role:Y})})).ok)throw new Error("역할 변경 API 호출 실패")}catch(ie){console.log("API 호출 실패, 로컬 상태만 업데이트:",ie)}a(ie=>ie.map(ue=>ue.userId===N?{...ue,userRole:Y}:ue)),g&&g.userId===N&&w(ie=>({...ie,userRole:Y})),O(!1),alert("사용자 권한이 성공적으로 변경되었습니다.")}catch(ne){alert("권한 변경에 실패했습니다."),console.error("Error updating role:",ne)}},_=async N=>{if(confirm(`정말로 사용자 '${N}'를 삭제하시겠습니까?`))try{const Y=localStorage.getItem("accessToken");try{if(!(await fetch(`/api/users/admin/${N}`,{method:"DELETE",headers:{Authorization:`Bearer ${Y}`,"Content-Type":"application/json"}})).ok)throw new Error("사용자 삭제 API 호출 실패")}catch(ne){console.log("API 호출 실패, 로컬 상태만 업데이트:",ne)}a(ne=>ne.filter(ie=>ie.userId!==N)),g&&g.userId===N&&(M(!1),w(null)),alert("사용자가 성공적으로 삭제되었습니다.")}catch(Y){alert("사용자 삭제에 실패했습니다."),console.error("Error deleting user:",Y)}},z=N=>{w(N),M(!0)},G=n.filter(N=>{const Y=N.userId.toLowerCase().includes(h.toLowerCase())||N.userName.toLowerCase().includes(h.toLowerCase()),ne=p==="ALL"||N.userRole===p;return Y&&ne});return v.useEffect(()=>{U()},[]),i?c.jsxs(wb,{children:[c.jsx(Sb,{children:c.jsx(jb,{children:"사용자 관리"})}),c.jsx(GT,{children:[...Array(6)].map((N,Y)=>c.jsx(ZT,{},Y))})]}):c.jsxs(wb,{children:[c.jsxs(Sb,{children:[c.jsx(jb,{children:"사용자 관리"}),c.jsxs(_T,{children:["총 ",G.length,"명"]})]}),c.jsxs($T,{children:[c.jsxs(UT,{children:[c.jsx(HT,{children:"🔍"}),c.jsx(IT,{type:"text",placeholder:"사용자ID 또는 이름으로 검색...",value:h,onChange:N=>x(N.target.value)})]}),c.jsxs(VT,{children:[c.jsxs(PT,{children:[c.jsx(qT,{children:"👥"}),c.jsx(FT,{value:p,onChange:N=>m(N.target.value),children:j.map(N=>c.jsx("option",{value:N.value,children:N.label},N.value))})]}),c.jsx(YT,{onClick:U,disabled:i,children:"🔄 새로고침"})]})]}),s&&c.jsxs(iR,{children:["⚠️ ",s]}),c.jsx(XT,{children:G.length===0?c.jsxs(nR,{children:[c.jsx(aR,{children:"👥"}),c.jsx(rR,{children:"조건에 맞는 사용자가 없습니다"})]}):G.map(N=>c.jsxs(KT,{children:[c.jsxs(QT,{children:[c.jsxs(JT,{children:[c.jsx(WT,{children:N.userName}),c.jsxs(eR,{children:["@",N.userId]})]}),c.jsxs(Cb,{color:k(N.userRole),children:[A(N.userRole)," ",j.find(Y=>Y.value===N.userRole)?.label]})]}),c.jsxs(tR,{children:[c.jsx(Zf,{onClick:()=>z(N),children:"상세"}),c.jsx(Zf,{primary:!0,onClick:()=>{w(N),O(!0)},children:"권한수정"}),c.jsx(Zf,{danger:!0,onClick:()=>_(N.userId),children:"삭제"})]})]},N.userId))}),C&&g&&!R&&c.jsx(Eb,{onClick:()=>M(!1),children:c.jsxs(Mb,{onClick:N=>N.stopPropagation(),children:[c.jsxs(kb,{children:[c.jsx(Tb,{children:"사용자 상세 정보"}),c.jsx(Rb,{onClick:()=>M(!1),children:"×"})]}),c.jsx(Ob,{children:c.jsxs(oR,{children:[c.jsxs(Xf,{children:[c.jsx(Kf,{children:"사용자 ID"}),c.jsx(Qf,{children:g.userId})]}),c.jsxs(Xf,{children:[c.jsx(Kf,{children:"사용자 이름"}),c.jsx(Qf,{children:g.userName})]}),c.jsxs(Xf,{children:[c.jsx(Kf,{children:"권한"}),c.jsx(Qf,{children:c.jsxs(Cb,{color:k(g.userRole),children:[A(g.userRole)," ",j.find(N=>N.value===g.userRole)?.label]})})]})]})})]})}),R&&g&&c.jsx(Eb,{onClick:()=>O(!1),children:c.jsxs(Mb,{onClick:N=>N.stopPropagation(),children:[c.jsxs(kb,{children:[c.jsx(Tb,{children:"사용자 권한 변경"}),c.jsx(Rb,{onClick:()=>O(!1),children:"×"})]}),c.jsxs(Ob,{children:[c.jsxs(lR,{children:["사용자 '",g.userName," (@",g.userId,")'의 권한을 변경하시겠습니까?"]}),c.jsxs(sR,{children:["현재 권한:"," ",c.jsxs("strong",{children:[A(g.userRole)," ",j.find(N=>N.value===g.userRole)?.label]})]}),c.jsxs(cR,{children:[c.jsx(uR,{children:"새로운 권한:"}),c.jsx(dR,{defaultValue:g.userRole,onChange:N=>{N.target.value!==g.userRole&&S(g.userId,N.target.value)},children:j.filter(N=>N.value!=="ALL").map(N=>c.jsx("option",{value:N.value,children:N.label},N.value))})]})]})]})})]})},wb=b.div`
  padding: 0;
  background: transparent;
  width: 100%;
`,Sb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,jb=b.h1`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.5rem;
  font-weight: 700;
`,_T=b.div`
  background: linear-gradient(
    135deg,
    #a47551,
    #795548
  ); /* Moca: Primary to Medium Brown */
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(164, 117, 81, 0.3); /* Moca: Shadow */
`,$T=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`,UT=b.div`
  display: flex;
  align-items: center;
  position: relative;
`,HT=b.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,IT=b.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  font-size: 0.9rem;
  background: white;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,VT=b.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,PT=b.div`
  display: flex;
  align-items: center;
  position: relative;
`,qT=b.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,FT=b.select`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  font-size: 0.9rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,YT=b.button`
  padding: 12px 16px;
  background: #f5f1ed; /* Moca: Light Brown BG */
  color: #5d4037; /* Moca: Dark Brown */
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: #e7e0d9; /* Moca: Beige Border */
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,GT=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ZT=b.div`
  height: 100px;
  background: linear-gradient(
    90deg,
    #f5f1ed 25%,
    #e7e0d9 50%,
    #f5f1ed 75%
  ); /* Moca: Light Colors */
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 16px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,XT=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,KT=b.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
  }
`,QT=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,JT=b.div`
  flex: 1;
`,WT=b.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 4px;
`,eR=b.div`
  font-size: 0.85rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
`,Cb=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${n=>n.color}20;
  color: ${n=>n.color};
  border: 1px solid ${n=>n.color}40;
`,tR=b.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Zf=b.button`
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  min-width: 80px;

  background: ${n=>n.primary?"#a47551":n.danger?"#ef4444":"#f5f1ed"};

  color: ${n=>n.primary||n.danger?"white":"#5d4037"};

  border: 1px solid
    ${n=>n.primary?"#a47551":n.danger?"#ef4444":"#e7e0d9"};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(164, 117, 81, 0.2); /* Moca: Shadow */

    ${n=>!n.primary&&!n.danger&&`
      background: #e7e0d9;  /* Moca: Beige Border */
    `}
  }

  &:active {
    transform: translateY(0);
  }
`,nR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background: white;
  border-radius: 16px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
`,aR=b.div`
  font-size: 3rem;
  margin-bottom: 16px;
  opacity: 0.5;
`,rR=b.div`
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,iR=b.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #fecaca;
  font-size: 0.9rem;
  text-align: center;
`,Eb=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`,Mb=b.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(164, 117, 81, 0.2); /* Moca: Shadow */
`,kb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e7e0d9; /* Moca: Beige Border */
  background: #f5f1ed; /* Moca: Light Brown BG */
`,Tb=b.h3`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.1rem;
  font-weight: 700;
`,Rb=b.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #795548; /* Moca: Medium Brown */
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: #5d4037; /* Moca: Dark Brown */
    background: #e7e0d9; /* Moca: Beige Border */
  }
`,Ob=b.div`
  padding: 24px;
`,oR=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`,Xf=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Kf=b.span`
  font-size: 0.75rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Qf=b.span`
  font-size: 0.9rem;
  color: #5d4037; /* Moca: Dark Brown */
  font-weight: 500;
`,lR=b.p`
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 12px;
  line-height: 1.4;
`,sR=b.p`
  color: #795548; /* Moca: Medium Brown */
  margin-bottom: 16px;

  strong {
    color: #a47551; /* Moca: Primary */
  }
`,cR=b.div`
  margin-top: 16px;
`,uR=b.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 0.9rem;
`,dR=b.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  color: #5d4037; /* Moca: Dark Brown */

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,fR=()=>{const[n,a]=v.useState([]),[i,l]=v.useState(!1),[s,d]=v.useState(null),[h,x]=v.useState(""),[p,m]=v.useState("ALL"),[g,w]=v.useState("ALL"),[C,M]=v.useState(null),[R,O]=v.useState(!1),[j,k]=v.useState(!1),[A,D]=v.useState(!1),[U,S]=v.useState({carName:"",carNumber:"",vehicleTypeCode:"FULLSIZE",status:"AVAILABLE",rentPricePer10min:"",imageUrl:""}),_=[{value:"ALL",label:"전체"},{value:"AVAILABLE",label:"이용가능"},{value:"RENTED",label:"대여중"},{value:"MAINTENANCE",label:"정비중"}],z=[{value:"ALL",label:"전체"},{value:"COMPACT",label:"소형차"},{value:"MIDSIZE",label:"중형차"},{value:"FULLSIZE",label:"대형차"},{value:"SUV",label:"SUV"},{value:"VAN",label:"승합차"},{value:"EV",label:"전기차"}],G=T=>{switch(T){case"AVAILABLE":return"#10b981";case"RENTED":return"#f59e0b";case"MAINTENANCE":return"#ef4444";default:return"#795548"}},N=T=>new Intl.NumberFormat("ko-KR").format(T)+"원",Y=async()=>{l(!0),d(null);try{const T=new URLSearchParams;p!=="ALL"&&T.append("status",p),g!=="ALL"&&T.append("type",g),h&&T.append("search",h);const I=`/api/cars${T.toString()?"?"+T.toString():""}`,J=await fetch(I);if(!J.ok)throw new Error("차량 목록 조회에 실패했습니다.");const oe=await J.json();a(oe)}catch(T){d(T.message),console.error("Error fetching vehicles:",T)}finally{l(!1)}},ne=async()=>{try{const T=localStorage.getItem("accessToken"),I=await fetch("/api/cars/admin",{method:"POST",headers:{Authorization:`Bearer ${T}`,"Content-Type":"application/json"},body:JSON.stringify(U)});if(!I.ok){const oe=await I.text();throw new Error(oe)}const J=await I.json();a(oe=>[...oe,J]),k(!1),S({carName:"",carNumber:"",vehicleTypeCode:"FULLSIZE",status:"AVAILABLE",rentPricePer10min:"",imageUrl:""}),alert("차량이 성공적으로 등록되었습니다.")}catch(T){alert(T.message),console.error("Error adding vehicle:",T)}},ie=async(T,I)=>{try{const J=localStorage.getItem("accessToken"),oe=await fetch(`/api/cars/admin/${T}`,{method:"PUT",headers:{Authorization:`Bearer ${J}`,"Content-Type":"application/json"},body:JSON.stringify(I)});if(!oe.ok){const K=await oe.text();throw new Error(K)}const B=await oe.json();a(K=>K.map(te=>te.id===T?B:te)),O(!1),M(null),D(!1),alert("차량 정보가 성공적으로 수정되었습니다.")}catch(J){alert(J.message),console.error("Error updating vehicle:",J)}},ue=async T=>{if(confirm("정말로 이 차량을 삭제하시겠습니까?"))try{const I=localStorage.getItem("accessToken"),J=await fetch(`/api/cars/admin/${T}`,{method:"DELETE",headers:{Authorization:`Bearer ${I}`}});if(!J.ok){const oe=await J.text();throw new Error(oe)}a(oe=>oe.filter(B=>B.id!==T)),O(!1),M(null),alert("차량이 성공적으로 삭제되었습니다.")}catch(I){alert(I.message),console.error("Error deleting vehicle:",I)}},Te=T=>{M(T),O(!0)},Z=n.filter(T=>{const I=T.carName?.toLowerCase().includes(h.toLowerCase())||T.carNumber?.toLowerCase().includes(h.toLowerCase()),J=p==="ALL"||T.status===p,oe=g==="ALL"||T.vehicleTypeCode===g;return I&&J&&oe});return v.useEffect(()=>{Y()},[]),i?c.jsxs(Ab,{children:[c.jsx(Db,{children:c.jsx(Nb,{children:"차량 관리"})}),c.jsx(SR,{children:[...Array(4)].map((T,I)=>c.jsx(jR,{},I))})]}):c.jsxs(Ab,{children:[c.jsxs(Db,{children:[c.jsx(Nb,{children:"차량 관리"}),c.jsxs(hR,{children:["총 ",Z.length,"대"]})]}),c.jsxs(pR,{children:[c.jsxs(mR,{children:[c.jsx(gR,{children:"🔍"}),c.jsx(xR,{type:"text",placeholder:"차량명 또는 번호로 검색...",value:h,onChange:T=>x(T.target.value)})]}),c.jsxs(bR,{children:[c.jsxs(zb,{children:[c.jsx(Lb,{children:"📋"}),c.jsx(Bb,{value:p,onChange:T=>m(T.target.value),children:_.map(T=>c.jsx("option",{value:T.value,children:T.label},T.value))})]}),c.jsxs(zb,{children:[c.jsx(Lb,{children:"🚗"}),c.jsx(Bb,{value:g,onChange:T=>w(T.target.value),children:z.map(T=>c.jsx("option",{value:T.value,children:T.label},T.value))})]})]}),c.jsxs(vR,{children:[c.jsx(yR,{onClick:()=>k(!0),children:"➕ 차량 추가"}),c.jsx(wR,{onClick:Y,disabled:i,children:"🔄 새로고침"})]})]}),s&&c.jsxs(_R,{children:["⚠️ ",s]}),c.jsx(CR,{children:Z.length===0?c.jsxs(zR,{children:[c.jsx(LR,{children:"🚗"}),c.jsx(BR,{children:"조건에 맞는 차량이 없습니다"})]}):Z.map(T=>c.jsxs(ER,{children:[c.jsxs(MR,{children:[c.jsxs(kR,{children:[c.jsx(TR,{children:T.carName}),c.jsx(RR,{children:T.carNumber}),c.jsx(OR,{children:z.find(I=>I.value===T.vehicleTypeCode)?.label})]}),c.jsx(_b,{color:G(T.status),children:_.find(I=>I.value===T.status)?.label})]}),c.jsx(AR,{children:c.jsxs(DR,{children:[N(T.rentPricePer10min)," / 10분"]})}),c.jsxs(NR,{children:[c.jsx(Jf,{onClick:()=>Te(T),children:"상세"}),c.jsx(Jf,{primary:!0,onClick:()=>{M(T),D(!0),O(!0)},children:"수정"}),c.jsx(Jf,{danger:!0,onClick:()=>ue(T.id),children:"삭제"})]})]},T.id))}),R&&C&&c.jsx($b,{onClick:()=>{O(!1),M(null),D(!1)},children:c.jsxs(Ub,{onClick:T=>T.stopPropagation(),children:[c.jsxs(Hb,{children:[c.jsx(Ib,{children:A?"차량 정보 수정":"차량 상세 정보"}),c.jsx(Vb,{onClick:()=>{O(!1),M(null),D(!1)},children:"×"})]}),c.jsx(Pb,{children:A?c.jsxs(qb,{children:[c.jsxs(Qn,{children:[c.jsx(Jn,{children:"차량명"}),c.jsx(ei,{value:C.carName,onChange:T=>M({...C,carName:T.target.value})})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"차량번호"}),c.jsx(ei,{value:C.carNumber,onChange:T=>M({...C,carNumber:T.target.value})})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"차량타입"}),c.jsx(Wf,{value:C.vehicleTypeCode,onChange:T=>M({...C,vehicleTypeCode:T.target.value}),children:z.filter(T=>T.value!=="ALL").map(T=>c.jsx("option",{value:T.value,children:T.label},T.value))})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"상태"}),c.jsx(Wf,{value:C.status,onChange:T=>M({...C,status:T.target.value}),children:_.filter(T=>T.value!=="ALL").map(T=>c.jsx("option",{value:T.value,children:T.label},T.value))})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"요금 (10분당)"}),c.jsx(ei,{type:"number",value:C.rentPricePer10min||C.price||"",onChange:T=>M({...C,rentPricePer10min:T.target.value})})]}),c.jsx(Fb,{onClick:()=>ie(C.id,C),children:"💾 저장"})]}):c.jsxs($R,{children:[c.jsxs(Ro,{children:[c.jsx(Oo,{children:"차량명"}),c.jsx(Ao,{children:C.carName})]}),c.jsxs(Ro,{children:[c.jsx(Oo,{children:"차량번호"}),c.jsx(Ao,{children:C.carNumber})]}),c.jsxs(Ro,{children:[c.jsx(Oo,{children:"차량타입"}),c.jsx(Ao,{children:z.find(T=>T.value===C.vehicleTypeCode)?.label})]}),c.jsxs(Ro,{children:[c.jsx(Oo,{children:"상태"}),c.jsx(Ao,{children:c.jsx(_b,{color:G(C.status),children:_.find(T=>T.value===C.status)?.label})})]}),c.jsxs(Ro,{children:[c.jsx(Oo,{children:"요금"}),c.jsxs(Ao,{children:[N(C.rentPricePer10min)," / 10분"]})]})]})})]})}),j&&c.jsx($b,{onClick:()=>k(!1),children:c.jsxs(Ub,{onClick:T=>T.stopPropagation(),children:[c.jsxs(Hb,{children:[c.jsx(Ib,{children:"새 차량 추가"}),c.jsx(Vb,{onClick:()=>k(!1),children:"×"})]}),c.jsx(Pb,{children:c.jsxs(qb,{children:[c.jsxs(Qn,{children:[c.jsx(Jn,{children:"차량명"}),c.jsx(ei,{value:U.carName,onChange:T=>S({...U,carName:T.target.value}),placeholder:"예: 현대 아반떼"})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"차량번호"}),c.jsx(ei,{value:U.carNumber,onChange:T=>S({...U,carNumber:T.target.value}),placeholder:"예: 12가3456"})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"차량타입"}),c.jsx(Wf,{value:U.vehicleTypeCode,onChange:T=>S({...U,vehicleTypeCode:T.target.value}),children:z.filter(T=>T.value!=="ALL").map(T=>c.jsx("option",{value:T.value,children:T.label},T.value))})]}),c.jsxs(Qn,{children:[c.jsx(Jn,{children:"요금 (10분당)"}),c.jsx(ei,{type:"number",value:U.rentPricePer10min,onChange:T=>S({...U,rentPricePer10min:T.target.value}),placeholder:"예: 5000"})]}),c.jsx(Fb,{onClick:ne,children:"➕ 차량 추가"})]})})]})})]})},Ab=b.div`
  padding: 0;
  background: transparent;
  width: 100%;
`,Db=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Nb=b.h1`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.5rem;
  font-weight: 700;
`,hR=b.div`
  background: linear-gradient(
    135deg,
    #a47551,
    #795548
  ); /* Moca: Primary to Medium Brown */
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(164, 117, 81, 0.3); /* Moca: Shadow */
`,pR=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`,mR=b.div`
  display: flex;
  align-items: center;
  position: relative;
`,gR=b.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,xR=b.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  font-size: 0.9rem;
  background: white;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,bR=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,zb=b.div`
  display: flex;
  align-items: center;
  position: relative;
`,Lb=b.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,Bb=b.select`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  font-size: 0.9rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,vR=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,yR=b.button`
  padding: 12px 16px;
  background: #a47551; /* Moca: Primary */
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #795548; /* Moca: Medium Brown */
    transform: translateY(-1px);
  }
`,wR=b.button`
  padding: 12px 16px;
  background: #f5f1ed; /* Moca: Light Brown BG */
  color: #5d4037; /* Moca: Dark Brown */
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #e7e0d9; /* Moca: Beige Border */
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,SR=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,jR=b.div`
  height: 150px;
  background: linear-gradient(
    90deg,
    #f5f1ed 25%,
    #e7e0d9 50%,
    #f5f1ed 75%
  ); /* Moca: Light Colors */
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 16px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,CR=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ER=b.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
  }
`,MR=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`,kR=b.div`
  flex: 1;
`,TR=b.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 4px;
`,RR=b.div`
  font-size: 0.9rem;
  color: #795548; /* Moca: Medium Brown */
  margin-bottom: 4px;
  font-weight: 500;
`,OR=b.div`
  font-size: 0.85rem;
  color: #a47551; /* Moca: Primary */
  font-weight: 500;
`,_b=b.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${n=>n.color}20;
  color: ${n=>n.color};
  border: 1px solid ${n=>n.color}40;
`,AR=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 12px;
  background: #f5f1ed; /* Moca: Light Brown BG */
  border-radius: 12px;
`;b.div`
  font-size: 1rem;
`;const DR=b.div`
  font-size: 1rem;
  color: #a47551; /* Moca: Primary */
  font-weight: 700;
`,NR=b.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Jf=b.button`
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  min-width: 80px;

  background: ${n=>n.primary?"#a47551":n.danger?"#ef4444":"#f5f1ed"};

  color: ${n=>n.primary||n.danger?"white":"#5d4037"};

  border: 1px solid
    ${n=>n.primary?"#a47551":n.danger?"#ef4444":"#e7e0d9"};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(164, 117, 81, 0.2); /* Moca: Shadow */

    ${n=>!n.primary&&!n.danger&&`
      background: #e7e0d9;  /* Moca: Beige Border */
    `}
  }

  &:active {
    transform: translateY(0);
  }
`,zR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background: white;
  border-radius: 16px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
`,LR=b.div`
  font-size: 3rem;
  margin-bottom: 16px;
  opacity: 0.5;
`,BR=b.div`
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`,_R=b.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #fecaca;
  font-size: 0.9rem;
  text-align: center;
`,$b=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`,Ub=b.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(164, 117, 81, 0.2); /* Moca: Shadow */
`,Hb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e7e0d9; /* Moca: Beige Border */
  background: #f5f1ed; /* Moca: Light Brown BG */
`,Ib=b.h3`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.1rem;
  font-weight: 700;
`,Vb=b.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #795548; /* Moca: Medium Brown */
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: #5d4037; /* Moca: Dark Brown */
    background: #e7e0d9; /* Moca: Beige Border */
  }
`,Pb=b.div`
  padding: 24px;
`,$R=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`,Ro=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Oo=b.span`
  font-size: 0.75rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ao=b.span`
  font-size: 0.9rem;
  color: #5d4037; /* Moca: Dark Brown */
  font-weight: 500;
`,qb=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Qn=b.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Jn=b.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
`,ei=b.input`
  padding: 12px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  color: #5d4037; /* Moca: Dark Brown */

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,Wf=b.select`
  padding: 12px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  color: #5d4037; /* Moca: Dark Brown */
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #a47551; /* Moca: Primary */
    box-shadow: 0 0 0 3px rgba(164, 117, 81, 0.1); /* Moca: Shadow */
  }
`,Fb=b.button`
  padding: 12px 16px;
  background: #a47551; /* Moca: Primary */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
  margin-top: 8px;

  &:hover {
    background: #795548; /* Moca: Medium Brown */
    transform: translateY(-1px);
  }
`,ve={primary:"#a47551",secondary:"#795548",light:"#f7f5f3",ivory:"#faf8f5",sand:"#e7e0d9",white:"#ffffff",text:"#2e1a11",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},eh=b.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${ve.ivory} 0%,
    ${ve.light} 50%,
    #f0e6d6 100%
  );
`,UR=b.div`
  max-width: 1400px;
  margin: 0 auto;

  /* 모바일에서는 최대 너비 제한 없음 */
  @media (max-width: 768px) {
    max-width: none;
  }
`,qo=b.div`
  background: ${ve.white};
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(164, 117, 81, 0.1);
  border: 1px solid ${ve.sand};
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(164, 117, 81, 0.15);
    transform: translateY(-2px);
  }

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    border-radius: 0.5rem;
  }
`,HR=b(qo)`
  margin-bottom: 2rem;
  background: linear-gradient(135deg, ${ve.white} 0%, ${ve.ivory} 100%);

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`,IR=b.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${ve.primary} 0%,
    ${ve.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,VR=b.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
`,Yb=b.div`
  display: grid;
  gap: 1.5rem;

  &.stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 2rem;
  }

  &.main-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin-bottom: 2rem;
  }

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    gap: 1rem;

    &.stats-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin-bottom: 1.5rem;
    }

    &.main-grid {
      grid-template-columns: 1fr;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.75rem;

    &.stats-grid {
      grid-template-columns: 1fr;
      margin-bottom: 1rem;
    }

    &.main-grid {
      margin-bottom: 1rem;
    }
  }
`,Vs=b(qo)`
  border-color: ${n=>n.borderColor};

  &:hover {
    border-color: ${n=>n.hoverColor};
  }
`,Ps=b.div`
  display: flex;
  align-items: center;

  /* 모바일에서 세로 배치 */
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`,qs=b.div`
  width: 3rem;
  height: 3rem;
  background: ${n=>n.gradient};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-right: 1rem;

  span {
    font-size: 1.25rem;
    color: white;
  }

  /* 모바일 최적화 */
  @media (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0;
    margin-bottom: 0.5rem;

    span {
      font-size: 1rem;
    }
  }
`,Fs=b.div`
  flex: 1;
`,Ys=b.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
`,Gs=b.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${ve.text};
  margin: 0.25rem 0;

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`,th=b.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${n=>n.color};
`,Gb=b.div`
  width: 100%;
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  overflow: hidden;
`,Zb=b.div`
  height: 100%;
  background: ${n=>n.gradient};
  border-radius: 0.25rem;
  width: ${n=>n.width}%;
  transition: width 0.5s ease;
`,nh=b.h2`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${ve.text};
  margin-bottom: 1.5rem;

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`,ah=b.span`
  width: 2rem;
  height: 2rem;
  background: ${n=>n.gradient};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
`,Zs=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  ${n=>{const a=n.size==="large"?"1rem":"0.875rem",i=n.size==="large"?"0.875rem 1.5rem":"0.625rem 1rem";return`
      font-size: ${a};
      padding: ${i};
      
      /* 모바일 최적화 */
      @media (max-width: 480px) {
        font-size: ${n.size==="large"?"0.875rem":"0.75rem"};
        padding: ${n.size==="large"?"0.75rem 1.25rem":"0.5rem 0.875rem"};
      }
    `}}

  ${n=>n.fullWidth?"width: 100%;":""}

  ${n=>{if(n.disabled)return`
        background: #f3f4f6;
        color: #9ca3af;
        cursor: not-allowed;
      `;switch(n.variant){case"secondary":return`
          background: ${ve.light};
          color: ${ve.primary};
          border: 1px solid ${ve.sand};
          &:hover { background: ${ve.sand}; }
        `;case"danger":return`
          background: ${ve.error};
          color: white;
          &:hover { background: #dc2626; }
        `;default:return`
          background: linear-gradient(135deg, ${ve.primary} 0%, ${ve.secondary} 100%);
          color: white;
          &:hover { 
            background: linear-gradient(135deg, ${ve.secondary} 0%, #6d4c41 100%);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(164, 117, 81, 0.3);
          }
        `}}}
`,rh=b.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${n=>n.type==="success"?"#d1fae5":n.type==="error"?"#fecaca":"#dbeafe"};
  color: ${n=>n.type==="success"?"#065f46":n.type==="error"?"#991b1b":"#1e40af"};

  /* 모바일 최적화 */
  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
  }
`,PR=b.div`
  overflow-x: auto;
  border-radius: 0.75rem;
  border: 1px solid ${ve.sand};

  /* 모바일 스크롤 개선 */
  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;

    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: ${ve.light};
    }

    &::-webkit-scrollbar-thumb {
      background: ${ve.sand};
      border-radius: 2px;
    }
  }
`,qR=b.table`
  width: 100%;
  border-collapse: collapse;
`,FR=b.thead`
  background: linear-gradient(135deg, ${ve.light} 0%, ${ve.sand} 100%);
`,Do=b.th`
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: 0.75rem;
  }

  &:last-child {
    border-top-right-radius: 0.75rem;
  }

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.625rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.5rem;
  }
`,No=b.td`
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: ${ve.text};

  &.session-id {
    font-family: 'Monaco', 'Menlo', monospace;
    background: ${ve.light};
    border-radius: 0.5rem;
    font-weight: 600;
  }

  /* 모바일 최적화 */
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.625rem;

    &.session-id {
      font-size: 0.5rem;
    }
  }
`,YR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`,GR=b.div`
  width: 4rem;
  height: 4rem;
  border: 4px solid ${ve.sand};
  border-top: 4px solid ${ve.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,ZR=b.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${ve.secondary};
`,XR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`,KR=b.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${ve.error};
`,QR=b.p`
  font-size: 1.125rem;
  color: ${ve.error};
  margin-bottom: 1.5rem;
`,JR=()=>{const[n,a]=v.useState(null),[i,l]=v.useState([]),[s,d]=v.useState(!0),[h,x]=v.useState(!1),[p,m]=v.useState(null),g=async(j,k={})=>{const D=await fetch(`https://moca8.com/${j}`,{timeout:3e4,...k});if(!D.ok)throw new Error(`HTTP error! status: ${D.status}`);return D.json()},w=async()=>{try{d(!0),m(null);const[j,k]=await Promise.all([g("/ml_stats"),g("/sessions")]);a(j),l(k.sessions||[])}catch(j){console.error("데이터 로드 실패:",j),m("데이터를 불러오는 중 오류가 발생했습니다.")}finally{d(!1)}},C=async()=>{try{x(!0);const j=await g("/retrain",{method:"POST",headers:{"Content-Type":"application/json"}});j.status==="retrain completed"?(alert("모델 재훈련이 완료되었습니다!"),w()):alert("재훈련에 실패했습니다: "+j.error)}catch(j){console.error("재훈련 실패:",j),alert("재훈련 중 오류가 발생했습니다.")}finally{x(!1)}};v.useEffect(()=>{w();const j=setInterval(w,3e4);return()=>clearInterval(j)},[]);const M=j=>j?new Date(j).toLocaleString("ko-KR"):"-",R=j=>j>=.8?ve.success:j>=.6?ve.warning:ve.error,O=j=>j>=.8?"linear-gradient(135deg, #10b981 0%, #059669 100%)":j>=.6?"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)":"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";return s?c.jsx(eh,{children:c.jsxs(YR,{children:[c.jsx(GR,{}),c.jsx(ZR,{children:"데이터 로딩 중..."})]})}):p?c.jsx(eh,{children:c.jsxs(XR,{children:[c.jsx(KR,{children:"⚠️"}),c.jsx(QR,{children:p}),c.jsx(Zs,{onClick:w,children:"다시 시도"})]})}):c.jsx(eh,{children:c.jsxs(UR,{children:[c.jsx(HR,{children:c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("div",{children:[c.jsx(IR,{children:"MOCA AutoML 대시보드"}),c.jsx(VR,{children:"챗봇 AI 모델의 성능과 학습 현황을 실시간으로 모니터링합니다."})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsxs("div",{style:{textAlign:"right"},children:[c.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"마지막 업데이트"}),c.jsx("div",{style:{fontSize:"0.875rem",fontWeight:"500",color:ve.text},children:new Date().toLocaleTimeString("ko-KR")})]}),c.jsx(Zs,{onClick:w,title:"새로고침",children:"🔄"})]})]})}),c.jsxs(Yb,{className:"stats-grid",children:[c.jsx(Vs,{borderColor:"#3b82f6",hoverColor:"#2563eb",children:c.jsxs(Ps,{children:[c.jsx(qs,{gradient:"linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",children:c.jsx("span",{children:"📚"})}),c.jsxs(Fs,{children:[c.jsx(Ys,{children:"훈련 데이터"}),c.jsx(Gs,{children:n?.training_data_count||0}),c.jsx(th,{color:"#3b82f6",children:"개 샘플"})]})]})}),c.jsx(Vs,{borderColor:ve.success,hoverColor:"#059669",children:c.jsxs(Ps,{children:[c.jsx(qs,{gradient:"linear-gradient(135deg, #10b981 0%, #059669 100%)",children:c.jsx("span",{children:"🎯"})}),c.jsxs(Fs,{children:[c.jsx(Ys,{children:"예측 정확도"}),c.jsxs(Gs,{color:R(n?.recent_accuracy||0),children:[((n?.recent_accuracy||0)*100).toFixed(1),"%"]}),c.jsx(Gb,{children:c.jsx(Zb,{gradient:O(n?.recent_accuracy||0),width:(n?.recent_accuracy||0)*100})})]})]})}),c.jsx(Vs,{borderColor:"#8b5cf6",hoverColor:"#7c3aed",children:c.jsxs(Ps,{children:[c.jsx(qs,{gradient:"linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",children:c.jsx("span",{children:"💬"})}),c.jsxs(Fs,{children:[c.jsx(Ys,{children:"총 예측 수"}),c.jsx(Gs,{children:n?.prediction_count||0}),c.jsx(th,{color:"#8b5cf6",children:"회 처리"})]})]})}),c.jsx(Vs,{borderColor:"#f59e0b",hoverColor:"#d97706",children:c.jsxs(Ps,{children:[c.jsx(qs,{gradient:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",children:c.jsx("span",{children:"📝"})}),c.jsxs(Fs,{children:[c.jsx(Ys,{children:"피드백 수"}),c.jsx(Gs,{children:n?.feedback_count||0}),c.jsx(th,{color:"#f59e0b",children:"개 수집"})]})]})})]}),c.jsxs(Yb,{className:"main-grid",children:[c.jsxs(qo,{children:[c.jsxs(nh,{children:[c.jsx(ah,{gradient:`linear-gradient(135deg, ${ve.primary} 0%, ${ve.secondary} 100%)`,children:"🤖"}),"모델 상태"]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",background:ve.ivory,borderRadius:"0.75rem",marginBottom:"1rem"},children:[c.jsx("span",{style:{fontWeight:"500",color:ve.text},children:"모델 로드 상태"}),c.jsx(rh,{type:n?.model_loaded?"success":"error",children:n?.model_loaded?"✅ 정상 작동":"❌ 오류"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",background:ve.ivory,borderRadius:"0.75rem"},children:[c.jsx("span",{style:{fontWeight:"500",color:ve.text},children:"벡터라이저 상태"}),c.jsx(rh,{type:n?.vectorizer_loaded?"success":"error",children:n?.vectorizer_loaded?"✅ 정상 작동":"❌ 오류"})]})]}),c.jsx(Zs,{fullWidth:!0,size:"large",onClick:C,disabled:h,children:h?"🔄 재훈련 진행 중...":"🚀 수동 재훈련 시작"})]}),c.jsxs(qo,{children:[c.jsxs(nh,{children:[c.jsx(ah,{gradient:"linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",children:"📊"}),"성능 지표"]}),c.jsxs("div",{style:{marginBottom:"2rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.875rem",marginBottom:"0.5rem"},children:[c.jsx("span",{style:{fontWeight:"500",color:"#6b7280"},children:"최근 정확도"}),c.jsxs("span",{style:{fontWeight:"700",color:R(n?.recent_accuracy||0)},children:[((n?.recent_accuracy||0)*100).toFixed(1),"%"]})]}),c.jsx(Gb,{style:{height:"0.75rem"},children:c.jsx(Zb,{gradient:O(n?.recent_accuracy||0),width:(n?.recent_accuracy||0)*100})})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[c.jsxs("div",{style:{padding:"0.75rem",background:"#d1fae5",borderRadius:"0.75rem",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"700",color:ve.success},children:"80%+"}),c.jsx("div",{style:{fontSize:"0.75rem",fontWeight:"500",color:"#065f46"},children:"우수"})]}),c.jsxs("div",{style:{padding:"0.75rem",background:"#fef3c7",borderRadius:"0.75rem",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"700",color:ve.warning},children:"60-79%"}),c.jsx("div",{style:{fontSize:"0.75rem",fontWeight:"500",color:"#92400e"},children:"보통"})]}),c.jsxs("div",{style:{padding:"0.75rem",background:"#fecaca",borderRadius:"0.75rem",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"700",color:ve.error},children:"<60%"}),c.jsx("div",{style:{fontSize:"0.75rem",fontWeight:"500",color:"#991b1b"},children:"개선필요"})]})]})]})]}),c.jsxs(qo,{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"},children:[c.jsxs(nh,{style:{marginBottom:0},children:[c.jsx(ah,{gradient:"linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",children:"👥"}),"활성 세션 (",i.length,")"]}),c.jsx(Zs,{onClick:w,children:"🔄 새로고침"})]}),i.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"3rem 0"},children:[c.jsx("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:"💤"}),c.jsx("p",{style:{fontSize:"1.125rem",color:"#6b7280"},children:"현재 활성 세션이 없습니다."})]}):c.jsx(PR,{children:c.jsxs(qR,{children:[c.jsx(FR,{children:c.jsxs("tr",{children:[c.jsx(Do,{children:"세션 ID"}),c.jsx(Do,{children:"메시지 수"}),c.jsx(Do,{children:"생성 시간"}),c.jsx(Do,{children:"마지막 활동"}),c.jsx(Do,{children:"상태"})]})}),c.jsx("tbody",{children:i.map(j=>c.jsxs(TableRow,{children:[c.jsxs(No,{className:"session-id",children:[j.session_id.slice(-12),"..."]}),c.jsxs(No,{style:{fontWeight:"600"},children:[j.message_count,"개"]}),c.jsx(No,{style:{color:"#6b7280"},children:M(j.created_at)}),c.jsx(No,{style:{color:"#6b7280"},children:M(j.last_activity)}),c.jsx(No,{children:c.jsx(rh,{type:j.is_expired?"error":"success",children:j.is_expired?"⏰ 만료됨":"🟢 활성"})})]},j.session_id))})]})})]})]})})};function WR(){return c.jsxs(eO,{children:[c.jsxs(tO,{children:[c.jsx(nO,{children:"MOCA 관리자"}),c.jsxs(aO,{children:[c.jsx(zo,{to:"/admin",end:!0,children:"대시보드"}),c.jsx(zo,{to:"/admin/reservations",children:"예약관리"}),c.jsx(zo,{to:"/admin/users",children:"사용자"}),c.jsx(zo,{to:"/admin/vehicles",children:"차량관리"}),c.jsx(zo,{to:"/admin/automl",children:"AutoML"})]})]}),c.jsx(rO,{children:c.jsxs(Mv,{children:[c.jsx(Oe,{index:!0,element:c.jsx($k,{})}),c.jsx(Oe,{path:"reservations",element:c.jsx(eT,{})}),c.jsx(Oe,{path:"users",element:c.jsx(BT,{})}),c.jsx(Oe,{path:"vehicles",element:c.jsx(fR,{})}),c.jsx(Oe,{path:"automl",element:c.jsx(JR,{})})," "]})})]})}const eO=b.div`
  min-height: 100vh;
  background: #f7f5f3; /* Moca: Light Background */
  display: flex;
  flex-direction: column;
`,tO=b.div`
  background: #ffffff;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e7e0d9; /* Moca: Beige Border */
`,nO=b.h1`
  margin: 0 0 16px 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
`,aO=b.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 첫 번째 줄: 2개 */
  grid-template-rows: repeat(3, auto); /* 3줄로 배치 */
  gap: 8px;

  /* 5번째 탭(AutoML)을 중앙에 배치 */
  & > *:nth-child(5) {
    grid-column: 1 / -1; /* 전체 너비 사용 */
    justify-self: center;
    max-width: 200px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr); /* 데스크톱에서는 5개 가로 배치 */
    grid-template-rows: auto;

    & > *:nth-child(5) {
      grid-column: auto;
      justify-self: stretch;
      max-width: none;
    }
  }
`,zo=b(Av)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  color: #795548; /* Moca: Medium Brown */
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background: #f5f1ed; /* Moca: Light Brown BG */
    color: #5d4037; /* Moca: Dark Brown */
    border-color: #e7e0d9; /* Moca: Beige Border */
  }

  &.active {
    background: #a47551; /* Moca: Medium-Dark Brown */
    color: #ffffff;
    border-color: #8d5f3b; /* Moca: Darker Brown */
    box-shadow: 0 2px 8px rgba(164, 117, 81, 0.3);
  }

  &:active {
    transform: translateY(1px);
    transition-duration: 0.05s;
  }
`,rO=b.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: #f7f5f3; /* Moca: Light Background */
`;b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  color: #795548; /* Moca: Medium Brown */

  h2 {
    color: #5d4037; /* Moca: Dark Brown */
    margin-bottom: 16px;
  }

  p {
    color: #8d6e63; /* Moca: Light Brown */
  }
`;const iO=()=>c.jsx(WR,{}),wp=({isOpen:n,onClose:a,children:i})=>{if(!n)return null;const l=s=>{s.target===s.currentTarget&&a()};return c.jsx(oO,{onClick:l,children:c.jsxs(lO,{children:[c.jsx(sO,{onClick:a,children:c.jsx(L3,{size:24})}),i]})})},oO=b.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    z-index: 1000;
    animation: fadeIn 0.2s ease-in-out;
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,lO=b.div`
    background: #f7f5f3;
    padding: 24px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
`,sO=b.button`
    position: absolute;
    top: 12px; right: 12px;
    background: transparent; border: none; cursor: pointer; color: #868e96;
    padding: 4px; border-radius: 50%; display: grid; place-items: center;
    transition: background-color 0.2s;
    &:hover { background-color: #f1f3f5; }
`,k2="http://localhost:8080",gn=_e.create({baseURL:k2,timeout:1e4});let ih=!1,Vh=[];const Xb=(n,a=null)=>{Vh.forEach(i=>{n?i.reject(n):i.resolve(a)}),Vh=[]},cO=async()=>{try{const n=localStorage.getItem("refreshToken");if(!n)throw new Error("Refresh token not found");const a=await _e.post(`${k2}/api/auth/refresh`,{refreshToken:n}),{accessToken:i,refreshToken:l}=a.data;return localStorage.setItem("accessToken",i),l&&localStorage.setItem("refreshToken",l),i}catch(n){throw localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),window.location.href="/",n}};gn.interceptors.request.use(n=>{const a=localStorage.getItem("accessToken");return a&&(n.headers.Authorization=`Bearer ${a}`),n},n=>Promise.reject(n));gn.interceptors.response.use(n=>n,async n=>{const a=n.config;if(n.response?.status===401&&!a._retry){if(ih)return new Promise((i,l)=>{Vh.push({resolve:i,reject:l})}).then(i=>(a.headers.Authorization="Bearer "+i,gn(a))).catch(i=>Promise.reject(i));a._retry=!0,ih=!0;try{const i=await cO();return Xb(null,i),a.headers.Authorization="Bearer "+i,gn(a)}catch(i){return Xb(i,null),Promise.reject(i)}finally{ih=!1}}return Promise.reject(n)});const Jo="/api/my-page",uO=async()=>{const[n,a]=await Promise.all([gn.get(`${Jo}/payments`),gn.get(`${Jo}/licenses`)]);return{payments:n.data,license:a.data.length>0?a.data[0]:null}},dO=n=>gn.post(`${Jo}/payments`,n),fO=n=>gn.post(`${Jo}/licenses`,n),hO=n=>gn.delete(`${Jo}/payments/${n}`),pO={DRIVER_LICENSE:2},Xt={START:"start",CAMERA:"camera",PROCESSING:"processing",RESULT:"result"},mO=n=>{const a={};if(!n)return a;n.resUserName.length<3&&(a.resUserName="이름은 3자 이상으로 입력해주세요."),/^\d{10}$/.test(n.resLicenseNo)||/^\d{12}$/.test(n.resLicenseNo)||(a.resLicenseNo="면허 번호는 10자리 또는 12자리 숫자로 입력해주세요."),/^\d{13}$/.test(n.resUserIdentity)||(a.resUserIdentity="주민등록번호는 13자리 숫자로 입력해주세요.");const i={resIssueDate:"발급일자",commStartDate:"갱신기간 시작일",commEndDate:"갱신기간 종료일"};for(const l in i)/^\d{8}$/.test(n[l])||(a[l]=`${i[l]}는 8자리 숫자로 입력해주세요. (YYYYMMDD)`);return a};function gO(){const[n,a]=v.useState(Xt.START),[i,l]=v.useState(null),[s,d]=v.useState(null),[h,x]=v.useState(""),[p,m]=v.useState(null),[g,w]=v.useState(null),[C,M]=v.useState({}),[R,O]=v.useState(!1),j=v.useRef(null),k=v.useRef(null),A=Tt(),D=Je(),U=A.state?.isEdit||!1,S=Z=>{if(!Z||Z.length!==8)return null;const T=Z.substring(0,4),I=Z.substring(4,6),J=Z.substring(6,8);return`${T}-${I}-${J}`},_=Z=>{const{name:T,value:I}=Z.target;w(J=>({...J,[T]:I.replace(/\D/g,"")}))},z=Z=>{const{name:T,value:I}=Z.target;w(J=>({...J,[T]:I}))},G=async()=>{const Z={name:g.resUserName,licenseNumber:g.resLicenseNo,residentRegistrationNumber:g.resUserIdentity,issueDate:S(g.resIssueDate),renewalStartDate:S(g.commStartDate),renewalEndDate:S(g.commEndDate)};try{await fO(Z),console.log("최종 수정된 데이터:",Z),O(!0)}catch(T){console.error("Failed to add license:",T),x("면허증 등록에 실패했습니다. 다시 시도해주세요.")}},N=()=>{O(!1),D("/payments-licenses")},Y=v.useCallback(()=>{i&&(i.getTracks().forEach(Z=>Z.stop()),l(null))},[i]);v.useEffect(()=>()=>Y(),[Y]),v.useEffect(()=>{if(n===Xt.RESULT&&s){const Z=s.data||{};w({resUserName:Z.resUserName||"",resLicenseNo:(Z.resLicenseNo||"").replace(/\D/g,""),resUserIdentity:(Z.resUserIdentity||"").replace(/\D/g,""),resIssueDate:(Z.resIssueDate||"").replace(/\D/g,""),commStartDate:(Z.commStartDate||"").replace(/\D/g,""),commEndDate:(Z.commEndDate||"").replace(/\D/g,"")})}},[n,s]),v.useEffect(()=>{if(g){const Z=mO(g);M(Z)}},[g]);const ne=async()=>{Y(),x(""),d(null),m(null);try{const Z=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});l(Z),a(Xt.CAMERA)}catch(Z){console.error("Camera access error:",Z),x("카메라에 접근할 수 없습니다. 권한을 확인해주세요."),a(Xt.START)}};v.useEffect(()=>{i&&j.current&&(j.current.srcObject=i)},[i]);const ie=()=>{if(!j.current||!k.current)return;const Z=j.current,T=k.current;T.width=Z.videoWidth,T.height=Z.videoHeight,T.getContext("2d").drawImage(Z,0,0,T.width,T.height);const J=T.toDataURL("image/jpeg");m(J);const oe={base64Data:J.split(",")[1],ocrType:pO.DRIVER_LICENSE};ue(oe),Y(),a(Xt.PROCESSING)},ue=async Z=>{try{const T=await fetch("/api/ocr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z)}),I=await T.json();if(!T.ok)throw new Error(I.error||"서버에서 오류가 발생했습니다.");d(I),a(Xt.RESULT)}catch(T){console.error("OCR 요청 실패:",T),x(T.message),a(Xt.START)}},Te=()=>{if(h)return c.jsxs("div",{className:"error-message",children:[c.jsx("h3",{children:"❌ 오류 발생"}),c.jsx("p",{children:h}),c.jsx("button",{onClick:()=>x(""),className:"button button-red",children:"확인"})]});switch(n){case Xt.CAMERA:return c.jsxs("div",{className:"camera-view-container",children:[c.jsx("video",{ref:j,autoPlay:!0,playsInline:!0,className:"camera-video"}),c.jsxs("div",{className:"guide-overlay",children:[c.jsxs("div",{className:"guide-box",children:[c.jsx("div",{className:"guide-box-corner top-left"}),c.jsx("div",{className:"guide-box-corner top-right"}),c.jsx("div",{className:"guide-box-corner bottom-left"}),c.jsx("div",{className:"guide-box-corner bottom-right"})]}),c.jsx("p",{className:"guide-text",children:"선 안에 운전면허증을 맞춰주세요."})]}),c.jsx("button",{onClick:ie,className:"capture-button",children:"촬영하기"})]});case Xt.PROCESSING:return c.jsxs("div",{className:"processing-view-container",children:[c.jsx("div",{className:"spinner"}),c.jsx("h2",{children:"인식 중..."}),c.jsx("p",{children:"잠시만 기다려주세요."})]});case Xt.RESULT:const Z=!g||Object.keys(C).length>0||Object.values(g).some(T=>T.trim()==="");return c.jsxs("div",{className:"result-view-container",children:[c.jsx("h2",{children:"정보 확인 및 수정"}),c.jsx("p",{className:"result-description",children:"인식된 정보를 확인하고, 잘못된 부분이 있다면 수정해주세요."}),c.jsxs("div",{className:"result-content-wrapper",children:[c.jsxs("div",{className:"result-image-section",children:[c.jsx("h3",{children:"촬영된 이미지"}),p?c.jsx("img",{src:p,alt:"Captured",className:"captured-image"}):c.jsx("div",{className:"image-placeholder",children:"이미지 없음"})]}),c.jsxs("div",{className:"result-form-section",children:[c.jsx("h3",{children:"인식된 정보"}),g?c.jsxs("form",{className:"result-form",onSubmit:T=>T.preventDefault(),children:[c.jsxs("div",{className:`form-field ${C.resUserName?"invalid":""}`,children:[c.jsx("label",{htmlFor:"resUserName",children:"이름"}),c.jsx("input",{type:"text",id:"resUserName",name:"resUserName",value:g.resUserName,onChange:z}),C.resUserName&&c.jsx("p",{className:"error-text",children:C.resUserName})]}),c.jsxs("div",{className:`form-field ${C.resLicenseNo?"invalid":""}`,children:[c.jsx("label",{htmlFor:"resLicenseNo",children:"면허 번호"}),c.jsx("input",{type:"text",id:"resLicenseNo",name:"resLicenseNo",value:g.resLicenseNo,onChange:_,maxLength:"12"}),C.resLicenseNo&&c.jsx("p",{className:"error-text",children:C.resLicenseNo})]}),c.jsxs("div",{className:`form-field ${C.resUserIdentity?"invalid":""}`,children:[c.jsx("label",{htmlFor:"resUserIdentity",children:"주민등록번호"}),c.jsx("input",{type:"text",id:"resUserIdentity",name:"resUserIdentity",value:g.resUserIdentity,onChange:_,maxLength:"13"}),C.resUserIdentity&&c.jsx("p",{className:"error-text",children:C.resUserIdentity})]}),c.jsxs("div",{className:`form-field ${C.resIssueDate?"invalid":""}`,children:[c.jsx("label",{htmlFor:"resIssueDate",children:"발급 일자"}),c.jsx("input",{type:"text",id:"resIssueDate",name:"resIssueDate",value:g.resIssueDate,onChange:_,maxLength:"8"}),C.resIssueDate&&c.jsx("p",{className:"error-text",children:C.resIssueDate})]}),c.jsxs("div",{className:`form-field ${C.commStartDate?"invalid":""}`,children:[c.jsx("label",{htmlFor:"commStartDate",children:"갱신 기간 (시작)"}),c.jsx("input",{type:"text",id:"commStartDate",name:"commStartDate",value:g.commStartDate,onChange:_,maxLength:"8"}),C.commStartDate&&c.jsx("p",{className:"error-text",children:C.commStartDate})]}),c.jsxs("div",{className:`form-field ${C.commEndDate?"invalid":""}`,children:[c.jsx("label",{htmlFor:"commEndDate",children:"갱신 기간 (종료)"}),c.jsx("input",{type:"text",id:"commEndDate",name:"commEndDate",value:g.commEndDate,onChange:_,maxLength:"8"}),C.commEndDate&&c.jsx("p",{className:"error-text",children:C.commEndDate})]})]}):c.jsx("p",{children:"데이터를 불러오는 중입니다..."})]})]}),c.jsxs("div",{className:"button-group",children:[c.jsx("button",{onClick:ne,className:"button button-gray",children:"재촬영"}),c.jsx("button",{onClick:G,className:"button button-blue",disabled:Z,children:"완료"})]})]});case Xt.START:default:return c.jsxs("div",{className:"start-view-container",children:[c.jsx("h1",{className:"start-title",children:"운전면허증 등록"}),c.jsxs("p",{className:"start-description",children:["안전한 차량 대여를 위해",c.jsx("br",{}),"운전면허증을 인증해주세요."]}),c.jsx("button",{onClick:ne,className:"button button-start",children:"시작하기"})]})}};return c.jsxs("div",{className:`ocr-app-container ${n===Xt.CAMERA?"camera-mode":n===Xt.RESULT?"result-mode":""}`,children:[c.jsx("canvas",{ref:k,style:{display:"none"}}),Te(),c.jsx(wp,{isOpen:R,onClose:N,children:c.jsxs("div",{className:"success-modal-content",children:[c.jsx("h3",{children:U?"수정 완료":"등록 완료"}),c.jsx("p",{children:U?"면허정보가 수정되었습니다.":"운전면허증 등록이 완료되었습니다."}),c.jsx("button",{onClick:N,className:"button button-blue",children:"확인"})]})})]})}const xO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAtCAYAAAFjUWbyAAAAAXNSR0IArs4c6QAADKVJREFUeAHtXQl4FEUW/mdyEELIwRViAAFBUFlZECLhPuRWQUW+L6ywuEIWswILn6ImHB6IGlh1F1kXUTlXYQWRUxaFVS5BUBdlVSSCsCISjiTkPmfrdad6ejL3bIb0MK++b6aqq+pVV/39+vXr6levTBCh6iwsFBslmExINRmtUxIcs0y8vwO4ros8qvtY69gf0n3vzK+HxivELbonKHHfMc2UOLFbArJ+DPWpYeNeSsFoh3wakp+JTJafcdBiwe1+Po9XzRvyMmpMT3eiUe5GrVNe4Vtduetw9Q6kwx+q7zi6+waPa+pLcxqNsS+f1k0DJAx59xkAF4ddMCRbOeypATLtBIOUWjJ+4+2r38u5i2KUk768rKHNyWc9F6sdJ93ZDJNnxWnHVyPhkLMIqLNfAOLJXSdh44762nnvGVaMtZsitePbu5Rp6TatKrDiHw2U44ljC7V8fyUcguWvkwV6u2ZzomAgg+p+RgJXeRETeig9EauM1DGj9UUAVWC6Dg35NvTiytg9Db2gDbqqDJYXl9wOLKlfUUzzNv4OFRVW/SS/wK47Hp2+uMTahkcEPlay6V1NBTTtSR9b9ZDsvtTG2PyhqlMlj2qGjv2tb7+lpZ4BQG/HM5+xKqsentqnajZgTRrnUxs+E214/ZJGe+D9C1q628h4LF4RpR3TpJ2cuNMyReJybgjOHjmnz/Jr2m66MEzkHP0IiFXfOPx6cn3jJpM6v03ae8bUK1rRrn0RSBtfoByXlZlw9pcQrWxQSlPMnX4FvbpZtXqt0A8JVh28ANXmNvSCLiirMlheXHazUOMZMDeA0euO8g7N74ZukOJirxEQSt9ufhh6DRsTeIIAi3ZPUOI6XiPgMWPNyQQ6DVB/lObACLhCwOWjUOhfSOzqirxuP5e57pnjUnoRT8tQvzXSi/uyzBy890Ek7h1ehEmPNdKI3lh4GTT1I2c0tu2qj9THY2EWt+KIgSVY+kKOVpcS1/dQTZpk5rjRRXj+iTzs/CQCew7Vk9lKPH9WnhLfNKA58gtMOLozG43jKvFwehxeW2Dbrg1hAB3Yzc7o+37giP7IcXrPQaBfsuMyI+au2xKJ7EtmREdV4emZ+UoXFy2NEgxjwfenQtHlljJ8mxWmdf2uB5tgy/KL2LgjQmOy8xdC8LfVUZhSPWtElekmPLItW6OrH6HONg3pVwL6ydA6OQHEWPRdeGFGHm69qRz3T2mE3eusU3mybiDHLiWWHFjSCOCnGlORfXsAa1+TNQInXrc5EivXR2L7qotap0lijR5ajJZJzXFi73lE1lc/oOollqy8eHkUpj6oTkPKPH08YkITm7b1ZZQuKDQjqoHaftteCTi53wosSTc9E9akDaRjjxhr1nwgc3YgDcu7vlZWmhASokoYPWVRsVljMn0+p90j4BFjuW+GazACtgh4/FZoS8ZHjIBrBPgzhWt8uNQHBJSZd6IT5n6TRfSSeLOxWhX40CCTBDcCio1tApJFbDFZzmKXUFsHBjckPPraRIA+1rPyXpuIclsKAiS5mLGYGfyCAL8V+gVWbpQZi3nALwgwY/kFVm7UI8b6+ltgaArQqrsaH/uOgWMEXCPgVnknZqqosG8kVNhFnDlsnx9oOfqPwvq+O/t+qK9Tm2laxiYtImqz3bpqyyVj9RoFnDrjvGttWgH7NzkvN2KJ3uaKbLHa92mOrH3ncOBIPby1TnVx0O3WMtzYtgK9u5ciPFz9OD1gbFP8fD4EhUUm7Fl/AW2vt95tZB0x42nbVWCnD6pWC7MzbfPv6FOC/smlWPluA6S/GI3hA0pBtl+THosT8bVhi0XX3aU9liumImJ35VTHaIEuIoUFi6OFOwarRUPPbqWgHwXpQ0M5EH+9722Gfe9Zba1uGxGPz7efl8WKkSAZCsrwm6lWg0Fp1CfLlLYFY63aEKnYdy0XdlmXcqwrAGW9QI9dMlagD85R/5PujEeXTmXY+lEE0quXe5IxHxn+lYuV2eeyQ7B3QzZ274/APZMbY9UrOXaPKJJa+rBFLFLWO3h5eZ5qIaqvI9ONYlVbrO+yQlFVZcL6bfXx4FVwAiPPf7Vil4y1+i/A+GnOu0LlgRY+23oev38iDoe2WC02yUKUQvbFEOXxJMe0cdkl5VH44dsX8MjsOMWKtMMNFfhyh1V6ybpjpjSWSSXes96+zolTYejUoVwpJ5PnQ1+GY+sK64JwmwYC/MAlYw3qA2xeAdw90X6UH6wBOt9in2/0nBt6J2D7yotokWDVkajPU56MQ1xMlVM959X5OfjiWDOHJsR3DS4G/Z79czTmiIXszkL7NipTyfL//hyqSboxI4tl9jURu1TeaYRFYrztegIP3AfMnQFhVntNjFsbRDvBaKS81wz0KCTlnWzZt/8romYxmjaqQu8kVSfT+zzTV+zXoxQlDnx2tG5Zqeh30+bGomsnK7NdDb9o+v75M+2WsZYsB3479tpjKAmqM/Nj0n9ogQUH3xBwy1i+NctUwY6ARzPvwQ4Sj997BJixvMeMKTxAgBnLA5C4ivcIMGN5jxlTuEGALEjNtKLCTT0uZgS8Q0AsqDCbEjFIcFiq+DlfN+5ds1w7SBFQbN1pIQWt0iEMLBeQgDKsEbM2A4MUEx42I8AIGBQBRasKxwOmpjhHW1NMFl8tXjdoX7lbjAAjwAgoCCgauxBY+bywnjmCEWAEjI4ATS+YWVgZ/TJx/xgBRoAQIFnFn3OYFxgBRiBgEGCBFTCXijvKCDACLLCYBxgBRiBgEHC5oNDTUZw8LXYW+KtYfLjTPcXdQ4BZaRBOD9zX5RqMACPACOgR+L80rE/F5k20K1jv0Z4JKzoxCTWqT3REz6HuEaDFuuQpx9NAi3hpfyHaQc1ZyMk146tvw5H1YxhKhGsm4wXahj0U5DaqZiCPP7QDGwfjIeCzhnXgMDAm1fcBiRl/3Cd2K1gvLMB6Cp9uHPyDAPmNk+6+5BmOfBWGz78OF7vfWT0wyTKKyWfJx5/W02cp3pbu6F2CeTOcu6TYsD0S0+fFIG1CIYaKHfS6CK8BBYUm7BICjrw1nRC79W1bcREJ8ZU2bcsDEmxXCpw/Q9MyYtG2VSUyM3IlCfYfrofDR8O145qJZe80wNSJBdrOfzs+jsBDj8bh8bR8PHBvseKPZfbCGLRMqMQ7S65Nvyw1MQnkY58F1ndZtTPsY8dZYNUOko5b+UVs1dm+TQUuC43ncq5Jib85EYbh/a1bctakLCo24frEapo8ojPj5OkQDJvtnIYE4x+fisErT+VhzEir67nohhaMHFSs/MY90hjPCTd35K/HUSDBRkLJWSBHpW1b2fri6SXctdDPWXhzbaTiO0iWrxaCs3vnckz7nbpiqH9yJWZOzsfUObGKxpXY3Nb3kKTj2BgI+CywyO3MW2uBk2d8H0hic+ChFN/pmdI9AnQDypuwsMgM2vb1RiHAnn3M1tXg0W/CxE6fEegovMl1vrlMa/jQl/WU/YSXPJerOfCShTv3RCA01IL+wkdThNifeP3SSxj7cGO8K1wTDhYOVvv1KBMe7MyKtrZpZwQaRlnw5iLVP6dsQx9XCQ+HpHmfOWTvS0pfz9N0vtDWSNi2ENqTDH9fnIO5i6LFFroJiIm2IEcI8Vs6VOAT4UxW4iTrcmw8BHwWWCHCB+u+TcCaDcATCyB8aHo3uBfSgQn3e0fDtX1D4PRPoZi1IEbMKYWBXF52bGd18CZb7HxzOYbptK5/ij2p01+MQZuWFcja+4vmMVrWp3hI3xKbfPK9Kj1EU3nyqGZIGVWEjGlXlB/luQqkKZHQ++zf6iseeZM+djwMC2dbXwFDxBvjbcKTtSdh3+FwhIm94nt01de34JlH84SmJjxhJ5WhXWt7LDxpm+vUDQK15mttjJiPOuBgEt0sGOy6eCCpC5AiJtt78XzVVb3S/xE3/H7htn5SSqFTp4Q06Z6Zkad4EqfOrd7QQLi2L7fTqGTHadJ9/PQ4nDqgCrJc8dqYKnwE1ww0TxbfpNJGw6E6v+pYbuee9flXo/G9mOPSh+M/hCJHtG0rcNQaS+bnIvXxWGUuTk/jKn1wU7bQqtQna9teYszptq+vrmi5zBgI1IrA2r1PuLudKr78iVe8P80D+vYwxuC4F54hUFNguaOqKbDc1Tdi+YynY1Febv+FUPaV9iB5aa5Vs5P5HNctArUisOp2CHx2RoARCBYEnH9DDhYEeJyMACMQMAiwwAqYS8UdZQQYARZYzAOMACMQMAiQn2T2uR0wl4s7yggELwKKAz8x/JnBCwGPnBFgBAIIgZnKd13ehCKALhl3lREIMgSEkNqN6k0o/gdIk78Na+euRwAAAABJRU5ErkJggg==",bO=({redirectPath:n="/auth/kakao/callback"})=>{const[a,i]=v.useState(!1),d="https://kauth.kakao.com/oauth/authorize?client_id=8232a2b7504ba934a6dacac363619fa8&redirect_uri=https://one-o-five.github.io/moca/auth/kakao/callback/test&response_type=code",h=()=>{a||(i(!0),window.location.href=d)};return c.jsx(vO,{onClick:h,disabled:a,children:c.jsx("img",{src:xO,alt:"카카오 로그인"})})},vO=b.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    overflow: hidden;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`,Kb=({redirectPath:n})=>{const[a,i]=v.useState(""),[l,s]=v.useState(""),{login:d,loading:h}=St(),x=async p=>{if(p.preventDefault(),!a.trim()){alert("아이디를 입력해주세요.");return}if(!l.trim()){alert("비밀번호를 입력해주세요.");return}await d(a.trim(),l)};return c.jsx(yO,{children:c.jsxs(wO,{onSubmit:x,children:[c.jsx("h2",{children:"로그인"}),c.jsx(Qb,{type:"text",placeholder:"아이디를 입력하세요",value:a,onChange:p=>i(p.target.value),disabled:h,required:!0}),c.jsx(Qb,{type:"password",placeholder:"비밀번호를 입력하세요",value:l,onChange:p=>s(p.target.value),disabled:h,required:!0}),c.jsx(SO,{type:"submit",disabled:h,children:h?"로그인 중...":"로그인"}),c.jsx(jO,{children:"또는"}),c.jsx(bO,{redirectPath:n}),c.jsxs(CO,{children:[c.jsxs(EO,{to:"/signup",children:["아직 계정이 없으신가요? ",c.jsx("strong",{children:"회원가입하기"})]}),c.jsx(MO,{to:"/",children:"메인 페이지로 돌아가기"})]})]})})},yO=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  min-height: 100vh;
  background-color: #f5f1ed;
  box-sizing: border-box;
`,wO=b.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 300px;
  margin: 20px;
`,Qb=b.input`
  height: 52px;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 999px;
  font-size: 16px;
  box-sizing: border-box;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,SO=b.button`
  border: none;
  border-radius: 999px;
  background-color: #5d4037;
  color: white;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #4e342e;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,jO=b.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #aaa;
  font-size: 0.9rem;
  margin: 8px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  &:not(:empty)::before {
    margin-right: .25em;
  }

  &:not(:empty)::after {
    margin-left: .25em;
  }
`,CO=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,EO=b(ia)`
  text-align: center;
  color: #5d4037;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f5f1ed;
    text-decoration: none;
  }

  strong {
    font-weight: 600;
  }
`,MO=b(ia)`
  margin-top: 8px;
  text-align: center;
  color: #aaa;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,kO=()=>{const[n,a]=v.useState({userId:"",password:"",confirmPassword:"",userName:"",birthDate:"",phoneNumber:""}),[i,l]=v.useState(!1),[s,d]=v.useState(!1),[h,x]=v.useState({isValid:!0,message:""}),[p,m]=v.useState(!1),[g,w]=v.useState(""),{register:C,checkUserId:M,loading:R}=St(),O=Je(),j=v.useCallback(S=>{if(S.length!==6)return x({isValid:!0,message:""}),!0;let _=parseInt(S.substring(0,2),10);const z=parseInt(S.substring(2,4),10),G=parseInt(S.substring(4,6),10);_=_>=30?1900+_:2e3+_;const N=new Date(_,z-1,G);if(N.getFullYear()!==_||N.getMonth()!==z-1||N.getDate()!==G)return x({isValid:!1,message:"유효하지 않은 생년월일입니다."}),!1;const Y=new Date,ne=N;let ie=Y.getFullYear()-ne.getFullYear();const ue=Y.getMonth()-ne.getMonth();return(ue<0||ue===0&&Y.getDate()<ne.getDate())&&ie--,ie<18?(x({isValid:!1,message:"만 18세 미만은 회원가입이 불가능합니다."}),!1):(x({isValid:!0,message:""}),!0)},[]),k=S=>{const{name:_,value:z}=S.target;if(_==="phoneNumber"){const G=z.replace(/\D/g,"");let N=G;G.length>3&&G.length<=7?N=`${G.slice(0,3)}-${G.slice(3)}`:G.length>7&&(N=`${G.slice(0,3)}-${G.slice(3,7)}-${G.slice(7,11)}`),a(Y=>({...Y,[_]:N}))}else if(_==="birthDate"){const G=z.replace(/\D/g,"");a(N=>({...N,[_]:G})),j(G)}else a(G=>({...G,[_]:z}));_==="userId"&&(l(!1),d(!1))},A=async()=>{if(!n.userId.trim()){alert("아이디를 입력해주세요.");return}if(n.userId.trim().length<4){alert("아이디는 4자 이상이어야 합니다.");return}try{const S=await M(n.userId.trim());l(!0),d(!S.exists),alert(S.message)}catch{alert("ID 중복 체크 중 오류가 발생했습니다.")}},D=async S=>{S.preventDefault();const{userId:_,password:z,confirmPassword:G,userName:N,birthDate:Y,phoneNumber:ne}=n;if(!_.trim()||!z.trim()||!G.trim()||!N.trim()||!Y.trim()||!ne.trim()){alert("모든 필드를 입력해주세요.");return}if(!h.isValid){alert(h.message);return}if(Y.length!==6){alert("생년월일은 6자리로 입력해주세요.");return}if(!i||!s){alert("아이디 중복 확인을 해주세요.");return}if(z!==G){alert("비밀번호가 일치하지 않습니다.");return}if(z.length<4){alert("비밀번호는 4자 이상이어야 합니다.");return}let ie=parseInt(Y.substring(0,2),10);const ue=Y.substring(2,4),Te=Y.substring(4,6);ie=ie>=30?1900+ie:2e3+ie;const Z=`${ie}-${ue}-${Te}`,T=await C(_.trim(),z,N.trim(),Z,ne.trim());T&&(w(T.username),m(!0))},U=()=>{m(!1),O("/home")};return c.jsxs(c.Fragment,{children:[c.jsx(TO,{children:c.jsxs(RO,{onSubmit:D,children:[c.jsx("h2",{children:"회원가입"}),c.jsxs(Jb,{children:[c.jsxs(OO,{children:[c.jsx(ti,{type:"text",name:"userId",placeholder:"아이디를 입력하세요 (4자 이상)",value:n.userId,onChange:k,disabled:R,required:!0}),c.jsx(AO,{type:"button",onClick:A,disabled:R||!n.userId.trim(),children:"중복확인"})]}),i&&c.jsx(Wb,{$available:s,children:s?"사용 가능한 ID입니다":"이미 사용 중인 ID입니다"})]}),c.jsx(ti,{type:"text",name:"userName",placeholder:"이름을 입력하세요",value:n.userName,onChange:k,disabled:R,required:!0}),c.jsxs(Jb,{children:[c.jsx(ti,{type:"text",name:"birthDate",placeholder:"생년월일 6자리를 입력해주세요 (예: 990101)",value:n.birthDate,onChange:k,maxLength:"6",disabled:R,required:!0}),!h.isValid&&c.jsx(Wb,{$available:!1,children:h.message})]}),c.jsx(ti,{type:"tel",name:"phoneNumber",placeholder:"휴대폰 번호 (010-1234-5678)",value:n.phoneNumber,onChange:k,disabled:R,required:!0}),c.jsx(ti,{type:"password",name:"password",placeholder:"비밀번호를 입력하세요 (4자 이상)",value:n.password,onChange:k,disabled:R,required:!0}),c.jsx(ti,{type:"password",name:"confirmPassword",placeholder:"비밀번호를 다시 입력하세요",value:n.confirmPassword,onChange:k,disabled:R,required:!0}),c.jsx(DO,{type:"submit",disabled:R,children:R?"가입 중...":"회원가입"}),c.jsxs(NO,{children:[c.jsx(ia,{to:"/login",children:"이미 계정이 있으신가요? 로그인하기"}),c.jsx(zO,{to:"/",children:"메인 페이지로 돌아가기"})]})]})}),c.jsxs(wp,{isOpen:p,onClose:U,children:[c.jsxs(LO,{children:[c.jsxs("h3",{children:[g,"님, 환영합니다!"]}),c.jsx("p",{children:"가입이 완료되었습니다."}),c.jsx("p",{children:"실제 차량을 예약하려면 운전면허증 등록이 필요해요."})]}),c.jsxs(BO,{children:[c.jsx(ev,{primary:!0,onClick:()=>O("/ocr"),children:"지금 면허증 등록하기"}),c.jsx(ev,{onClick:U,children:"다음에 할게요"})]})]})]})},TO=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  min-height: 100vh;
  background-color: #f5f1ed;
  box-sizing: border-box;
`,RO=b.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  margin: 20px;
`,Jb=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,OO=b.div`
  display: flex;
  gap: 8px;
`,ti=b.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex: 1;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,AO=b.button`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  background-color: #795548;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: #5d4037;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,Wb=b.p`
  margin: 0;
  font-size: 14px;
  color: ${n=>n.$available?"#4caf50":"#f44336"};
  font-weight: 500;
`,DO=b.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #5d4037;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #4e342e;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,NO=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  
  a {
    text-align: center;
    color: #795548;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,zO=b(ia)`
  color: #aaa !important;
`,LO=b.div`
    text-align: center;
    h3 {
        margin-top: 0;
        margin-bottom: 8px;
        color: #333;
    }
    p {
        margin: 4px 0;
        color: #666;
        font-size: 0.95rem;
    }
`,BO=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
`,ev=b.button`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${({primary:n})=>n?`
        background-color: #795548;
        color: white;
        border-color: #795548;
        &:hover {
            background-color: #5d4037;
            border-color: #5d4037;
        }
    `:`
        background-color: #fff;
        color: #555;
        &:hover {
            background-color: #f1f3f5;
        }
    `}
`,tv=()=>{const n=Tt(),a=Je(),{loginWithToken:i}=St(),[l,s]=v.useState("로그인 처리 중..."),d=v.useRef(!1);return v.useEffect(()=>{if(d.current)return;(async()=>{console.log("test11");const x=new URLSearchParams(n.search).get("code");if(x){d.current=!0;try{const p=await _e.post("http://localhost:8080/api/auth/kakao/login",{code:x}),{accessToken:m}=p.data;if(m)i(m);else throw new Error("액세스 토큰을 받지 못했습니다.")}catch(p){console.error("카카오 로그인 처리 실패:",p),p.response&&p.response.status===429?(s("요청 횟수가 너무 많습니다. 잠시 후 다시 시도해주세요."),alert("요청 횟수가 너무 많습니다. 잠시 후 다시 시도해주세요.")):(s("로그인에 실패했습니다. 다시 시도해주세요."),alert("로그인에 실패했습니다.")),a("/loginTest")}}else alert("카카오 인증 코드를 받지 못했습니다."),a("/loginTest")})()},[n,a,i]),c.jsx("div",{children:c.jsx("h1",{children:l})})};function T2(n){return rt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(n)}function oh(n){return rt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(n)}function _O(n){return rt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"},child:[]}]})(n)}function $O(n){return rt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(n)}function UO(n){return rt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(n)}function HO(n){return rt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(n)}const IO=()=>{const n=Je(),{user:a}=St(),[i,l]=v.useState([]),[s,d]=v.useState("전체"),[h,x]=v.useState(null),p=["전체","안내","신규서비스","업데이트"],m=a?.role==="admin",[g,w]=v.useState(null),[C,M]=v.useState(""),R=()=>{fetch("http://localhost:8080/api/notices").then(S=>{if(!S.ok)throw new Error("네트워크 응답 오류");return S.json()}).then(S=>l(S)).catch(S=>console.error("공지사항 로딩 실패:",S))};v.useEffect(()=>{R()},[]);const O=()=>n("/notices/write"),j=S=>{w(S.id),M(S.content)},k=S=>{fetch(`http://localhost:8080/api/notices/${S.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:S.category,title:S.title,content:C})}).then(_=>{_.ok?(alert("수정되었습니다."),w(null),R()):alert("수정에 실패했습니다.")}).catch(_=>console.error("수정 처리 중 오류 발생:",_))},A=S=>{window.confirm("정말로 이 공지사항을 삭제하시겠습니까?")&&fetch(`http://localhost:8080/api/notices/${S}`,{method:"DELETE"}).then(_=>{_.status===204?(alert("공지사항이 삭제되었습니다."),R()):alert("삭제에 실패했습니다.")}).catch(_=>console.error("삭제 처리 중 오류 발생:",_))},D=S=>{x(h===S?null:S),w(null)},U=[...i].filter(S=>s==="전체"||S.category===s).sort((S,_)=>new Date(_.createdAt)-new Date(S.createdAt));return c.jsxs(VO,{children:[c.jsx(PO,{children:c.jsxs(qO,{children:[c.jsx(FO,{onClick:()=>n(-1),children:"‹"}),c.jsx(YO,{children:"공지사항"})]})}),c.jsxs(ZO,{children:[c.jsx(XO,{children:p.map(S=>c.jsx(KO,{isActive:s===S,onClick:()=>d(S),children:S},S))}),m&&c.jsx(GO,{onClick:O,children:"글쓰기"})]}),c.jsx(QO,{children:U.map(S=>c.jsxs(JO,{children:[c.jsxs(WO,{onClick:()=>D(S.id),children:[c.jsxs(eA,{children:[c.jsxs(tA,{children:[c.jsxs(nA,{children:["[",S.category,"]"]}),S.title]}),c.jsxs(lA,{children:[c.jsx(sA,{children:S.writer}),c.jsx(aA,{children:new Date(S.createdAt).toLocaleDateString("ko-KR")})]})]}),c.jsx(rA,{isExpanded:h===S.id,children:c.jsx(T2,{size:20})})]}),h===S.id&&(g===S.id?c.jsxs(R2,{children:[c.jsx(oA,{value:C,onChange:_=>M(_.target.value),rows:5}),c.jsxs(nv,{children:[c.jsx(Xs,{onClick:()=>w(null),children:"취소"}),c.jsx(Xs,{onClick:()=>k(S),children:"확인"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx(iA,{children:S.content}),m&&c.jsxs(nv,{children:[c.jsx(Xs,{onClick:()=>j(S),children:"수정"}),c.jsx(Xs,{onClick:()=>A(S.id),children:"삭제"})]})]}))]},S.id))})]})},VO=b.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  background-color: #f7f5f3;
`,PO=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  flex-shrink: 0;
`,qO=b.div`
  display: flex;
  align-items: center;
`,FO=b.button`
  background: none;
  border: none;
  font-size: 32px;
  font-weight: bold;
  color: #5d4037;
  cursor: pointer;
  padding: 0 16px 0 0;
  line-height: 1;
`,YO=b.h1`
  font-size: 20px;
  font-weight: 700;
  color: #5d4037;
  margin: 0;
`,GO=b.button`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  ${({isActive:n})=>n?mn`
          background-color: #5d4037;
          color: #ffffff;
          border: 1px solid #5d4037;
        `:mn`
          background-color: #ffffff;
          color: #795548;
          border: 1px solid #e7e0d9;

          &:hover {
            background-color: #f5f1ed;
            border-color: #d7ccc8;
          }
        `}
`,ZO=b.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-shrink: 0;
  overflow-x: auto;
  justify-content: space-between; /* Added this */
`,XO=b.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`,KO=b.button`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  ${({isActive:n})=>n?mn`
          background-color: #5d4037;
          color: #ffffff;
          border: 1px solid #5d4037;
        `:mn`
          background-color: #ffffff;
          color: #795548;
          border: 1px solid #e7e0d9;

          &:hover {
            background-color: #f5f1ed;
            border-color: #d7ccc8;
          }
        `}
`,QO=b.div`
  flex-grow: 1;
  overflow-y: auto;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`,JO=b.div`
  border-bottom: 1px solid #f0ebe5;

  &:last-child {
    border-bottom: none;
  }
`,WO=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
`,eA=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,tA=b.h2`
  font-size: 16px;
  font-weight: 600;
  color: #3e2723;
  margin: 0;
  display: flex;
  align-items: center;
`,nA=b.span`
  font-weight: 700;
  color: #a1887f;
  margin-right: 8px;
`,aA=b.p`
  font-size: 13px;
  color: #a1887f;
  margin: 0;
`,rA=b.div`
  color: #a1887f;
  transition: transform 0.3s ease;
  transform: ${({isExpanded:n})=>n?"rotate(180deg)":"rotate(0deg)"};
`,iA=b.div`
  font-size: 14px;
  line-height: 1.6;
  color: #595959;
  white-space: pre-wrap;
  padding: 0 16px 16px;
`,R2=b.div`
  padding: 0 16px 16px;
`,oA=b.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #d7ccc8;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.6;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #5d4037;
  }
`,nv=b.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 16px 16px;

  ${R2} & {
    padding-top: 10px;
    padding-bottom: 0;
  }
`,Xs=b.button`
  background-color: #f5f1ed;
  border: 1px solid #e7e0d9;
  color: #5d4037;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e7e0d9;
  }
`,lA=b.div`
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: #a1887f;
`,sA=b.span`
  font-weight: 600;
  color: #795548;
`;b.div`
  text-align: center;
  padding: 40px;
  color: #a1887f;
  font-size: 15px;
`;const lh="http://localhost:8080",Ks=(n,a)=>{if(!n||!a)return"";const i=new Date(`${n}T${a}`),l=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),x=String(i.getMinutes()).padStart(2,"0");return`${l}.${s}.${d} ${h}:${x}`},cA=()=>{const n=Je(),{user:a,logout:i}=St(),[l,s]=v.useState([]),[d,h]=v.useState(!0),[x,p]=v.useState(null),[m,g]=v.useState(null);v.useEffect(()=>{(async()=>{if(!a?.userId){h(!1);return}try{const D=await _e.get(`${lh}/api/reservations/my-reservations`,{headers:{Authorization:`Bearer ${a.token}`}});s(D.data),h(!1)}catch(D){p(D),h(!1),console.error("Failed to fetch reservations:",D)}})()},[a]);const w=()=>{i(),n("/")},C=A=>{g(A)},M=()=>{g(null)},R=async A=>{if(window.confirm("정말로 예약을 취소하시겠습니까?"))try{await _e.put(`${lh}/api/reservations/${A}/cancel`,{},{headers:{Authorization:`Bearer ${a.token}`}});const D=l.map(U=>U.id===A?{...U,status:"CANCELLED",displayStatus:"CANCELLED"}:U);s(D),M()}catch(D){console.error("Failed to cancel reservation:",D),alert("예약 취소에 실패했습니다.")}},O=async A=>{if(window.confirm("정말로 반납하시겠습니까?"))try{await _e.put(`${lh}/api/reservations/${A}/complete`,{},{headers:{Authorization:`Bearer ${a.token}`}});const D=l.map(U=>U.id===A?{...U,status:"COMPLETED",displayStatus:"COMPLETED"}:U);s(D),M(),n("/return")}catch(D){console.error("Failed to complete reservation:",D),alert("반납 처리에 실패했습니다.")}},j=a?.username||"게스트",k=a?.role==="admin"?"A":j[0];return c.jsxs(uA,{children:[c.jsxs(dA,{children:[c.jsx(fA,{onClick:()=>n(-1),children:"‹"}),c.jsx(hA,{children:"마이페이지"})]}),c.jsxs(pA,{children:[c.jsx(TA,{children:k}),c.jsx(mA,{children:c.jsxs(gA,{children:[j,"님, ",c.jsx("br",{}),"환영합니다!"]})}),c.jsx(xA,{onClick:()=>n("/profile-edit"),children:"프로필 수정"})]}),c.jsxs(bA,{children:[c.jsx(vA,{children:"나의 예약 내역"}),d&&c.jsx("p",{children:"예약 내역을 불러오는 중..."}),x&&c.jsxs("p",{children:["예약 내역을 불러오는데 실패했습니다: ",x.message]}),!d&&!x&&l.length===0&&c.jsx("p",{children:"예약 내역이 없습니다."}),!d&&!x&&l.length>0&&l.map(A=>{const{status:D,rentalDate:U,rentalTime:S}=A;let _=D;if(D==="CONFIRMED"){const z=new Date(`${U}T${S}`),G=new Date(`${A.returnDate}T${A.returnTime}`),N=new Date;N<z?_="UPCOMING":N>=z&&N<=G?_="IN_USE":_="COMPLETED"}return c.jsxs(yA,{onClick:()=>C({...A,displayStatus:_}),children:[c.jsx(wA,{children:A.car?.carName||"차량 정보 없음"}),c.jsx(SA,{children:A.locationName}),c.jsxs(jA,{children:[Ks(A.rentalDate,A.rentalTime)," ~ ",Ks(A.returnDate,A.returnTime)]}),c.jsx(CA,{status:_,children:_})]},A.id)}),c.jsx(EA,{children:"예약 내역 더보기"})]}),c.jsxs(MA,{children:[c.jsxs(sh,{onClick:()=>n("/payments-licenses"),children:[c.jsx(_O,{size:20}),c.jsx("span",{children:"운전면허증 정보"}),c.jsx(oh,{})]}),c.jsxs(sh,{children:[c.jsx(UO,{size:20}),c.jsx("span",{children:"알림 설정"}),c.jsx(oh,{})]}),c.jsxs(sh,{children:[c.jsx(HO,{size:20}),c.jsx("span",{children:"개인정보 처리방침"}),c.jsx(oh,{})]})]}),c.jsxs(kA,{onClick:w,children:[c.jsx($O,{}),c.jsx("span",{children:"로그아웃"})]}),m&&c.jsxs(wp,{isOpen:!!m,onClose:M,children:[c.jsx(RA,{children:"예약 상세 정보"}),c.jsxs(OA,{children:[c.jsxs(Ja,{children:[c.jsx(Wa,{children:"차량"}),c.jsx(er,{children:m.car?.carName})]}),c.jsxs(Ja,{children:[c.jsx(Wa,{children:"대여/반납 장소"}),c.jsx(er,{children:m.locationName})]}),c.jsxs(Ja,{children:[c.jsx(Wa,{children:"대여 일시"}),c.jsx(er,{children:Ks(m.rentalDate,m.rentalTime)})]}),c.jsxs(Ja,{children:[c.jsx(Wa,{children:"반납 일시"}),c.jsx(er,{children:Ks(m.returnDate,m.returnTime)})]}),c.jsxs(Ja,{children:[c.jsx(Wa,{children:"상태"}),c.jsx(er,{status:m.displayStatus,children:m.displayStatus})]}),c.jsxs(Ja,{children:[c.jsx(Wa,{children:"총 결제 금액"}),c.jsxs(er,{children:[m.totalAmount?.toLocaleString(),"원"]})]}),m.memo&&c.jsxs(Ja,{children:[c.jsx(Wa,{children:"메모"}),c.jsx(er,{children:m.memo})]})]}),m.displayStatus==="IN_USE"&&c.jsx(DA,{onClick:()=>O(m.id),children:"반납하기"}),m.displayStatus==="UPCOMING"&&c.jsx(AA,{onClick:()=>R(m.id),children:"예약 취소"})]})]})},uA=b.div`
  background-color: #f7f5f3;
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
`,dA=b.header`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 12px;
`,fA=b.button`
  background: none;
  border: none;
  font-size: 32px;
  font-weight: bold;
  color: #5d4037;
  cursor: pointer;
  padding: 0 16px 0 0;
`,hA=b.h1`
  font-size: 20px;
  font-weight: 700;
  color: #5d4037;
  margin: 0;
`,pA=b.section`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,mA=b.div`
  flex-grow: 1;
  margin-left: 16px;
`,gA=b.h2`
  font-size: 18px;
  font-weight: 700;
  color: #3e2723;
  margin: 0 0 4px;
`;b.p`
  font-size: 14px;
  color: #a1887f;
  margin: 0;
`;const xA=b.button`
  background: #e7e0d9;
  color: #5d4037;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`,bA=b.section`
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,vA=b.h3`
  font-size: 16px;
  font-weight: 700;
  color: #3e2723;
  margin: 0 0 16px;
`,yA=b.div`
  border: 1px solid #f0ebe5;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto; // Adjust for the new row
  gap: 4px 8px;
`,wA=b.p`
  font-weight: 600;
  color: #5d4037;
  margin: 0;
  grid-column: 1 / 2;
`,SA=b.p`
  font-size: 14px;
  color: #795548; // A slightly different color for distinction
  margin: 0;
  grid-column: 1 / 2;
`,jA=b.p`
  font-size: 13px;
  color: #a1887f;
  margin: 0;
  grid-column: 1 / 2;
`,CA=b.span`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  grid-column: 2 / 3;
  grid-row: 1 / 4; // Span all three rows
  align-self: center;
  color: ${({status:n})=>n==="UPCOMING"?"#4CAF50":n==="IN_USE"?"#2196F3":n==="CANCELLED"?"#F44336":"#757575"};
  background-color: ${({status:n})=>n==="UPCOMING"?"#E8F5E9":n==="IN_USE"?"#E3F2FD":n==="CANCELLED"?"#FFEBEE":"#F5F5F5"};
`,EA=b.button`
  width: 100%;
  text-align: center;
  background: transparent;
  border: none;
  padding-top: 12px;
  color: #795548;
  font-weight: 600;
  cursor: pointer;
`,MA=b.section`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,sh=b.div`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid #f0ebe5;
  cursor: pointer;
  color: #3e2723;
  font-size: 15px;

  &:last-child {
    border-bottom: none;
  }

  & > svg:first-child {
    margin-right: 16px;
    color: #795548;
  }

  & > span {
    flex-grow: 1;
  }

  & > svg:last-child {
    color: #c7b2a5;
  }
`;b.span`
  background-color: #5d4037;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  margin-right: 8px;
`;const kA=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 24px;
  padding: 16px;
  border: none;
  background: #e7e0d9;
  color: #795548;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`,TA=b.div`
  width: 48px;
  height: 48px;
  border-radius: 50%; /* 원형 모양 */
  background-color: #5d4037; /* 배경색 */
  color: #ffffff; /* 글자색 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`,RA=b.h2`
  font-size: 20px;
  font-weight: 700;
  color: #3e2723;
  margin: 0 0 16px;
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0ebe5;
`,OA=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 8px;
`,Ja=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f7f5f3;

  &:last-child {
    border-bottom: none;
  }
`,Wa=b.span`
  font-weight: 600;
  color: #795548;
`,er=b.span`
  color: ${({status:n})=>n==="UPCOMING"?"#4CAF50":n==="IN_USE"?"#2196F3":n==="CANCELLED"?"#F44336":"#5d4037"};
  text-align: right;
  font-weight: 500;
`,AA=b.button`
  background-color: #F44336;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #D32F2F;
  }
`,DA=b.button`
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1976D2;
  }
`,NA=()=>{const{user:n}=St(),a=Je(),[i,l]=v.useState({username:"",birthDate:"",phoneNumber:"",currentPassword:"",newPassword:"",confirmPassword:""}),[s,d]=v.useState({isValid:!0,message:""}),[h,x]=v.useState(!0);v.useEffect(()=>{(async()=>{if(n)try{x(!0);const M=await gn.get("/api/users/profile"),{username:R,birthDate:O,phoneNumber:j}=M.data;l(k=>({...k,username:R||"",birthDate:O||"",phoneNumber:j||""}))}catch(M){console.error("Failed to fetch profile:",M),alert("프로필 정보를 불러오는 데 실패했습니다.")}finally{x(!1)}})()},[n]);const p=v.useCallback(C=>{if(!C||C.length!==6)return d({isValid:!0,message:""}),!0;let M=parseInt(C.substring(0,2),10);const R=parseInt(C.substring(2,4),10),O=parseInt(C.substring(4,6),10);M=M>=30?1900+M:2e3+M;const j=new Date(M,R-1,O);if(j.getFullYear()!==M||j.getMonth()!==R-1||j.getDate()!==O)return d({isValid:!1,message:"유효하지 않은 생년월일입니다."}),!1;const k=new Date,A=j;let D=k.getFullYear()-A.getFullYear();const U=k.getMonth()-A.getMonth();return(U<0||U===0&&k.getDate()<A.getDate())&&D--,D<18?(d({isValid:!1,message:"만 18세 미만은 사용할 수 없습니다."}),!1):(d({isValid:!0,message:""}),!0)},[]),m=C=>{const{name:M,value:R}=C.target;let O=R;if(M==="phoneNumber"){const j=R.replace(/\D/g,"");j.length>3&&j.length<=7?O=`${j.slice(0,3)}-${j.slice(3)}`:j.length>7&&(O=`${j.slice(0,3)}-${j.slice(3,7)}-${j.slice(7,11)}`)}else M==="birthDate"&&(O=R.replace(/\D/g,""),p(O));l(j=>({...j,[M]:O}))},g=async()=>{const{newPassword:C,confirmPassword:M,birthDate:R}=i;if(C&&C!==M){alert("새 비밀번호가 일치하지 않습니다.");return}if(R&&!p(R)){alert(s.message);return}try{const O={...i};delete O.confirmPassword,O.newPassword||(delete O.currentPassword,delete O.newPassword);const j=await gn.put("/api/users/profile",O);alert(j.data.message||"프로필이 성공적으로 업데이트되었습니다."),a("/mypage")}catch(O){console.error("Failed to update profile:",O);const j=O.response?.data?.error||"프로필 업데이트에 실패했습니다.";alert(j)}},w=()=>{a("/mypage")};return h?c.jsx(av,{children:c.jsx("div",{children:"Loading..."})}):c.jsxs(av,{children:[c.jsx(LA,{children:"프로필 수정"}),c.jsxs(rv,{children:[c.jsxs(tr,{children:[c.jsx(nr,{children:"아이디"}),c.jsx(_A,{type:"text",value:n.userId,readOnly:!0})]}),c.jsxs(tr,{children:[c.jsx(nr,{htmlFor:"username",children:"이름"}),c.jsx(rr,{id:"username",name:"username",type:"text",value:i.username,onChange:m})]}),c.jsxs(tr,{children:[c.jsx(nr,{htmlFor:"birthDate",children:"생년월일 (6자리)"}),c.jsx(rr,{id:"birthDate",name:"birthDate",type:"text",value:i.birthDate,onChange:m,maxLength:"6",placeholder:"예: 990101"}),!s.isValid&&c.jsx(zA,{$available:!1,children:s.message})]}),c.jsxs(tr,{children:[c.jsx(nr,{htmlFor:"phoneNumber",children:"휴대폰 번호"}),c.jsx(rr,{id:"phoneNumber",name:"phoneNumber",type:"tel",value:i.phoneNumber,onChange:m,placeholder:"010-1234-5678"})]})]}),c.jsxs(rv,{children:[c.jsx(BA,{children:"비밀번호 변경"}),c.jsxs(tr,{children:[c.jsx(nr,{htmlFor:"currentPassword",children:"현재 비밀번호"}),c.jsx(rr,{id:"currentPassword",name:"currentPassword",type:"password",value:i.currentPassword,onChange:m,placeholder:"비밀번호 변경 시 입력"})]}),c.jsxs(tr,{children:[c.jsx(nr,{htmlFor:"newPassword",children:"새 비밀번호"}),c.jsx(rr,{id:"newPassword",name:"newPassword",type:"password",value:i.newPassword,onChange:m})]}),c.jsxs(tr,{children:[c.jsx(nr,{htmlFor:"confirmPassword",children:"새 비밀번호 확인"}),c.jsx(rr,{id:"confirmPassword",name:"confirmPassword",type:"password",value:i.confirmPassword,onChange:m})]})]}),c.jsxs($A,{children:[c.jsx(iv,{onClick:g,children:"저장"}),c.jsx(iv,{onClick:w,variant:"secondary",children:"취소"})]})]})},zA=b.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: ${n=>n.$available?"#4caf50":"#f44336"};
  font-weight: 500;
`,av=b.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`,LA=b.h1`
    font-size: 24px;
    font-weight: 700;
    color: #5d4037;
    margin-bottom: 8px;
`,rv=b.section`
    margin-bottom: 32px;
`,BA=b.h2`
    font-size: 20px;
    font-weight: 600;
    color: #795548;
    padding-bottom: 8px;
    border-bottom: 1px solid #e7e0d9;
    margin-bottom: 16px;
`,tr=b.div`
    margin-bottom: 16px;
`,nr=b.label`
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #a1887f;
    margin-bottom: 8px;
`,rr=b.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #d7ccc8;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #a47551;
    }
`,_A=b(rr)`
    background-color: #f5f5f5;
    cursor: not-allowed;
`,$A=b.div`
    display: flex;
    gap: 16px;
    justify-content: center;
`,iv=b.button`
    background: ${n=>n.variant==="secondary"?"#f5f1ed":"#a47551"};
    color: ${n=>n.variant==="secondary"?"#5d4037":"white"};
    border: none;
    border-radius: 12px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background: ${n=>n.variant==="secondary"?"#e7e0d9":"#8c6443"};
    }
`,UA=[{id:1,category:"서비스 이용",question:"비대면으로 예약하고 바로 차량을 이용할 수 있나요?",answer:"네, 저희 앱을 통해 예약, 결제, 차량 문 제어까지 모두 비대면으로 가능합니다. 예약 완료 후 앱의 스마트키로 차량을 바로 이용해보세요."},{id:2,category:"결제",question:"자동차 보험은 자동으로 적용되나요? 추가 보험 가입이 필요한가요?",answer:"모든 차량은 자동차 종합보험(대인, 대물, 자손)에 기본으로 가입되어 있습니다. 운행 전, 자기차량손해(자차) 보험 상품을 선택하여 가입하실 수 있으며, 이는 운전자 과실로 인한 차량 수리비를 보장해줍니다."},{id:3,category:"서비스 이용",question:"차량 반납 장소는 어디인가요? 지정된 장소가 있나요?",answer:"대여한 장소에 그대로 반납하는 것이 원칙입니다. 만약 다른 장소에 반납(편도 반납)을 원하시면, 예약 시 편도 가능 차량인지 확인 후 이용해주세요. 지정된 주차 구역(차고지)이 아닌 곳에 반납 시 추가 요금이 발생할 수 있습니다."},{id:4,category:"계정",question:"운전자 등록 조건은 어떻게 되나요? (나이, 운전 경력)",answer:"만 21세 이상, 운전면허 취득일로부터 1년 이상 경과한 고객님만 운전자로 등록하고 서비스를 이용하실 수 있습니다. 일부 고급 차종의 경우 별도의 연령 및 경력 조건이 적용될 수 있습니다."},{id:5,category:"서비스 이용",question:"이용 시간을 연장하고 싶으면 어떻게 하나요?",answer:"반납 시간 이전에 앱 내의 [이용 내역 > 연장하기] 버튼을 통해 연장이 가능합니다. 단, 다음 예약이 있는 차량의 경우 연장이 불가능할 수 있습니다."},{id:6,category:"결제",question:"예약을 취소하면 수수료가 발생하나요?",answer:"예약 취소 시점에 따라 수수료 정책이 다르게 적용됩니다. 대여 시작 24시간 이전에 취소할 경우 전액 환불되며, 그 이후에는 시간대별로 수수료가 차등 부과됩니다. 자세한 내용은 [이용 약관 > 취소 및 환불 규정]을 확인해주세요."},{id:7,category:"서비스 이용",question:"차량 유류비는 어떻게 정산되나요?",answer:"차량 내에 비치된 주유카드를 이용해 주유해주세요. 유류비는 반납 후 실제 주행 거리에 따라 km당 유류비로 계산되어 등록된 카드로 자동 청구됩니다."},{id:8,category:"기타",question:"운행 중 사고가 나거나 차량에 문제가 생기면 어떻게 해야 하나요?",answer:"즉시 운행을 중단하고 안전한 곳으로 차량을 이동시킨 후, 앱 내의 고객센터 또는 긴급출동 버튼을 통해 연락주세요. 24시간 언제든지 신속하게 도와드리겠습니다."},{id:9,category:"기타",question:"차량 내에서 흡연이 가능한가요?",answer:"모든 차량 내에서는 흡연(전자담배 포함)이 엄격히 금지되어 있습니다. 쾌적한 이용 환경을 위해 모든 고객님의 협조를 부탁드리며, 위반 시 페널티 요금 및 실내 클리닝 비용이 부과됩니다."},{id:10,category:"기타",question:"차량에 물건을 두고 내렸어요. 어떻게 찾을 수 있나요?",answer:"고객센터로 연락주시면 분실물 접수를 도와드립니다. 차량 반납 후 24시간 이내에 접수된 건에 한해 최대한 수색을 도와드리지만, 분실물에 대한 보상은 어려우니 내리시기 전에 꼭 확인 부탁드립니다."}],HA=()=>{const n=Je(),[a,i]=v.useState(UA),[l,s]=v.useState("전체"),[d,h]=v.useState(null),x=["전체","계정","결제","서비스 이용","기타"],p=g=>{h(d===g?null:g)},m=a.filter(g=>l==="전체"||g.category===l);return c.jsxs(IA,{children:[c.jsx(VA,{children:c.jsxs(PA,{children:[c.jsx(qA,{onClick:()=>n(-1),children:"‹"}),c.jsx(FA,{children:"고객센터"})]})}),c.jsx(YA,{children:c.jsx(GA,{children:x.map(g=>c.jsx(ZA,{isActive:l===g,onClick:()=>s(g),children:g},g))})}),c.jsx(XA,{children:m.length>0?m.map(g=>c.jsxs(KA,{children:[c.jsxs(QA,{onClick:()=>p(g.id),children:[c.jsx(JA,{children:c.jsxs(WA,{children:[c.jsx(e9,{children:"Q."}),g.question]})}),c.jsx(t9,{isExpanded:d===g.id,children:c.jsx(T2,{size:20})})]}),d===g.id&&c.jsxs(n9,{children:[c.jsx(a9,{children:"A."}),g.answer]})]},g.id)):c.jsx(r9,{children:"등록된 FAQ가 없습니다."})})]})},IA=b.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 16px; /* Added padding */
    box-sizing: border-box;
    background-color: #f7f5f3;
`,VA=b.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    margin-bottom: 16px;
    flex-shrink: 0;
`,PA=b.div`
    display: flex;
    align-items: center;
`,qA=b.button`
    background: none;
    border: none;
    font-size: 32px;
    font-weight: bold;
    color: #5d4037;
    cursor: pointer;
    padding: 0 16px 0 0;
    line-height: 1;
`,FA=b.h1`
    font-size: 20px;
    font-weight: 700;
    color: #5d4037;
    margin: 0;
`,YA=b.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-shrink: 0;
    overflow-x: auto;
    /* Removed horizontal padding */
`,GA=b.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
`,ZA=b.button`
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    background-color: ${({isActive:n})=>n?"#5d4037":"#ffffff"};
    color: ${({isActive:n})=>n?"#ffffff":"#795548"};
    border: 1px solid ${({isActive:n})=>n?"#5d4037":"#e7e0d9"};

    &:hover {
        background-color: ${({isActive:n})=>n?"#5d4037":"#f5f1ed"};
        border-color: ${({isActive:n})=>n?"#5d4037":"#d7ccc8"};
    }
`,XA=b.div`
    flex-grow: 1;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px; // 리스트 상단에도 둥근 모서리 적용
    margin: 0 0 16px; /* Removed horizontal margin */

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`,KA=b.div`
    border-bottom: 1px solid #f0ebe5;

    &:last-child {
        border-bottom: none;
    }
`,QA=b.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    cursor: pointer;
`,JA=b.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,WA=b.h2`
    font-size: 16px;
    font-weight: 600;
    color: #3e2723;
    margin: 0;
    display: flex;
    align-items: center;
`,e9=b.span`
    font-weight: 700;
    color: #a1887f;
    margin-right: 8px;
    font-size: 18px;
`,t9=b.div`
    color: #a1887f;
    transition: transform 0.3s ease;
    transform: ${({isExpanded:n})=>n?"rotate(180deg)":"rotate(0deg)"};
`,n9=b.div`
    font-size: 14px;
    line-height: 1.6;
    color: #595959;
    white-space: pre-wrap;
    padding: 0 16px 16px;
    display: flex;
`,a9=b.span`
    font-weight: 700;
    color: #5d4037;
    margin-right: 8px;
    font-size: 18px;
`,r9=b.div`
    text-align: center;
    padding: 40px;
    color: #a1887f;
    font-size: 15px;
`,i9=()=>{const n=Je(),{user:a}=St(),[i,l]=v.useState("안내"),[s,d]=v.useState(""),[h,x]=v.useState(""),p=a?.username||"관리자",m=()=>{if(!s.trim()){alert("제목을 입력해주세요.");return}if(!h.trim()){alert("내용을 입력해주세요.");return}fetch("http://localhost:8080/api/notices",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:i,title:s,content:h,writer:p})}).then(w=>{w.status===201?(alert("공지사항이 성공적으로 등록되었습니다."),n("/notices")):alert("등록에 실패했습니다.")}).catch(w=>console.error("공지사항 등록 중 오류 발생:",w))};return c.jsxs(o9,{children:[c.jsxs(l9,{children:[c.jsx(s9,{onClick:()=>n(-1),children:"‹"}),c.jsx(c9,{children:"공지사항 작성"})]}),c.jsxs(u9,{children:[c.jsxs(ch,{children:[c.jsx(uh,{children:"카테고리"}),c.jsxs(f9,{value:i,onChange:g=>l(g.target.value),children:[c.jsx("option",{value:"안내",children:"안내"}),c.jsx("option",{value:"신규서비스",children:"신규서비스"}),c.jsx("option",{value:"업데이트",children:"업데이트"})]})]}),c.jsxs(ch,{children:[c.jsx(uh,{children:"제목"}),c.jsx(d9,{type:"text",placeholder:"제목을 입력하세요",value:s,onChange:g=>d(g.target.value)})]}),c.jsxs(p9,{children:["작성자: ",p]}),c.jsxs(ch,{children:[c.jsx(uh,{children:"내용"}),c.jsx(h9,{placeholder:"내용을 입력하세요",rows:15,value:h,onChange:g=>x(g.target.value)})]}),c.jsx(m9,{onClick:m,children:"완료"})]})]})},o9=b.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 16px;
    box-sizing: border-box;
    background-color: #f7f5f3;
`,l9=b.header`
    display: flex;
    align-items: center;
    padding: 8px 0;
    margin-bottom: 24px;
    flex-shrink: 0;
`,s9=b.button`
    background: none;
    border: none;
    font-size: 32px;
    font-weight: bold;
    color: #5d4037;
    cursor: pointer;
    padding: 0 16px 0 0;
    line-height: 1;
`,c9=b.h1`
    font-size: 20px;
    font-weight: 700;
    color: #5d4037;
    margin: 0;
`,u9=b.div`
    background: #ffffff;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 20px;
`,ch=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,uh=b.label`
    font-size: 14px;
    font-weight: 600;
    color: #3e2723;
`,Sp=mn`
    width: 100%;
    padding: 12px;
    border: 1px solid #d7ccc8;
    border-radius: 8px;
    font-size: 15px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #5d4037;
    }
`,d9=b.input`
    ${Sp}
`,f9=b.select`
    ${Sp}
    background-color: white;
`,h9=b.textarea`
    ${Sp}
    resize: vertical;
`,p9=b.div`
    text-align: right;
    font-size: 14px;
    color: #a1887f;
    margin-top: -12px;
`,m9=b.button`
    width: 100%;
    padding: 14px;
    font-size: 16px;
    font-weight: 700;
    background-color: #5d4037;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 12px;

    &:hover {
        background-color: #4e342e;
    }
`,g9=n=>{if(!n)return"";const a=n.replace(/\D/g,"");return a.length===16?`${a.substring(0,4)}-****-****-${a.substring(12,16)}`:a.match(/.{1,4}/g)?.join("-")||a},x9=n=>{if(!n)return"";const a=n.replace(/\D/g,"");return a.length===12?`${a.substring(0,2)}-${a.substring(2,10)}-${a.substring(10,12)}`:a},b9=n=>!n||n.length!==13?n:`${n.substring(0,6)}-${n.substring(6,7)}******`,v9=()=>{const n=Je(),{user:a,authLoading:i}=St(),[l,s]=v.useState([]),[d,h]=v.useState(null),[x,p]=v.useState(!0),m=()=>{a&&(p(!0),uO().then(w=>{s(w.payments||[]),h(w.license)}).catch(w=>{console.error("Failed to fetch payment and license info:",w)}).finally(()=>{p(!1)}))};v.useEffect(()=>{i||(a?m():p(!1))},[a,i]);const g=async w=>{if(window.confirm("정말로 이 결제 수단을 삭제하시겠습니까?"))try{await hO(w),alert("결제 수단이 삭제되었습니다."),m()}catch(C){console.error("Failed to delete payment method:",C),alert("결제 수단 삭제에 실패했습니다.")}};return x?c.jsx(dh,{children:c.jsx("div",{children:"Loading..."})}):a?c.jsxs(dh,{children:[c.jsx(ov,{children:"결제 및 면허 관리"}),c.jsxs(fh,{children:[c.jsx(lv,{children:"결제 수단"}),l&&l.length>0?l.map(w=>c.jsxs(S9,{children:[c.jsxs(sv,{children:[c.jsx(cv,{children:"💳"}),c.jsxs(uv,{children:[c.jsx(dv,{children:w.cardCompany}),c.jsx(Lo,{children:g9(w.cardNumber)})]})]}),c.jsxs(y9,{children:[w.isDefault&&c.jsx(E9,{disabled:!0,children:"대표"}),c.jsx(w9,{onClick:()=>g(w.paymentId),children:"DELETE"})]})]},w.paymentId)):c.jsx(hh,{children:"등록된 결제 수단이 없습니다."}),c.jsx(C9,{onClick:()=>n("/add-payment"),children:"+ 결제수단 추가"})]}),c.jsxs(fh,{children:[c.jsx(lv,{children:"운전면허 정보"}),d?.licenseNumber?c.jsx(j9,{children:c.jsxs(sv,{children:[c.jsx(cv,{children:"🪪"}),c.jsxs(uv,{children:[c.jsxs(dv,{children:[d.name," (",x9(d.licenseNumber),")"]}),c.jsxs(Lo,{children:["주민등록번호: ",b9(d.residentRegistrationNumber)]}),c.jsxs(Lo,{children:["발급일: ",new Date(d.issueDate).toLocaleDateString()]}),c.jsxs(Lo,{children:["갱신 시작일: ",new Date(d.renewalStartDate).toLocaleDateString()]}),c.jsxs(Lo,{children:["갱신 종료일: ",new Date(d.renewalEndDate).toLocaleDateString()]})]})]})}):c.jsx(hh,{children:"등록된 운전면허 정보가 없습니다."}),c.jsx(Ph,{onClick:()=>n("/ocr",{state:{isEdit:!!d?.licenseNumber}}),children:d?.licenseNumber?"면허 정보 수정":"면허 정보 등록"})]})]}):c.jsxs(dh,{children:[c.jsx(ov,{children:"결제 및 면허 관리"}),c.jsxs(fh,{children:[c.jsx(hh,{children:"로그인이 필요한 서비스입니다."}),c.jsx(Ph,{onClick:()=>n("/login"),children:"로그인 페이지로 이동"})]})]})},y9=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,w9=b.button`
    background: #FFEBEE;
    color: #F44336;
    border: none;
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background: #d32f2f;
    }
`,dh=b.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`,ov=b.h1`
    font-size: 24px;
    font-weight: 700;
    color: #5d4037;
    margin-bottom: 8px;
`,fh=b.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,lv=b.h2`
    font-size: 18px;
    font-weight: 600;
    color: #795548;
    padding-bottom: 8px;
    border-bottom: 1px solid #e7e0d9;
`,jp=b.div`
    background: #ffffff;
    border-radius: 24px;
    padding: 24px;
    border: 1px solid #e7e0d9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
`,S9=b(jp)`
    justify-content: space-between;
`,j9=b(jp)``,hh=b(jp)`
    justify-content: center;
    color: #a1887f;
    font-size: 15px;
`,sv=b.div`
    display: flex;
    align-items: center;
    gap: 16px;
`,cv=b.div`
    font-size: 28px;
`,uv=b.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,dv=b.span`
    font-size: 16px;
    font-weight: 500;
    color: #5d4037;
`,Lo=b.span`
    font-size: 14px;
    color: #a1887f;
    vertical-align: middle;
`,Ph=b.button`
    background: #a47551;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
    text-align: center;

    &:hover {
        background: #8c6443;
    }
`,C9=b(Ph)`
    background: #f5f1ed;
    color: #5d4037;

    &:hover {
        background: #e7e0d9;
    }
`,E9=b.button`
    background: #d7ccc8;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: not-allowed;
`,M9=()=>{const n=Je(),{user:a}=St(),[i,l]=v.useState(""),[s,d]=v.useState(""),[h,x]=v.useState(""),[p,m]=v.useState(""),[g,w]=v.useState(""),[C,M]=v.useState(""),R=k=>{const A=k.target.value.replace(/\D/g,""),D=A.match(/.{1,4}/g)?.join("-")||"";A.length<=16&&(x(A),d(D))},O=k=>{const A=k.target.value.replace(/\D/g,"");let D=A;A.length>2&&(D=A.substring(0,2)+"/"+A.substring(2,4)),A.length<=4&&m(D)},j=async k=>{if(k.preventDefault(),M(""),!a){M("로그인이 필요합니다.");return}const A={cardCompany:i,cardNumber:h,cardExpirationDate:p,isDefault:!1,cvc:g};try{await dO(A),alert("카드가 성공적으로 등록되었습니다."),n("/payments-licenses")}catch(D){console.error("Failed to add payment method:",D),M("카드 등록에 실패했습니다. 다시 시도해주세요.")}};return c.jsxs(k9,{children:[c.jsx(T9,{children:"새 결제수단 추가"}),c.jsxs(R9,{onSubmit:j,children:[c.jsxs(Qs,{children:[c.jsx(Js,{htmlFor:"card-company",children:"카드사"}),c.jsx(Ws,{id:"card-company",type:"text",value:i,onChange:k=>l(k.target.value),placeholder:"예: 신한카드",required:!0})]}),c.jsxs(Qs,{children:[c.jsx(Js,{htmlFor:"card-number",children:"카드 번호"}),c.jsx(Ws,{id:"card-number",type:"text",value:s,onChange:R,placeholder:"- 없이 숫자만 입력",maxLength:"19",required:!0})]}),c.jsxs(Qs,{children:[c.jsx(Js,{htmlFor:"expiry-date",children:"만료일 (MM/YY)"}),c.jsx(Ws,{id:"expiry-date",type:"text",value:p,onChange:O,placeholder:"MM/YY",maxLength:"5",required:!0})]}),c.jsxs(Qs,{children:[c.jsx(Js,{htmlFor:"cvc",children:"CVC"}),c.jsx(Ws,{id:"cvc",type:"text",value:g,onChange:k=>w(k.target.value),placeholder:"CVC 3자리",maxLength:"3",required:!0})]}),C&&c.jsx(O9,{children:C}),c.jsx(A9,{type:"submit",children:"등록하기"})]})]})},k9=b.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #f5f1ed;
  height: 100%;
`,T9=b.h1`
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
`,R9=b.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Qs=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Js=b.label`
  font-size: 14px;
  font-weight: 600;
  color: #795548;
`,Ws=b.input`
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #d7ccc8;
  background: #ffffff;
  font-size: 16px;
  color: #5d4037;

  &::placeholder {
    color: #a1887f;
  }

  &:focus {
    outline: none;
    border-color: #a47551;
    box-shadow: 0 0 0 2px rgba(164, 117, 81, 0.2);
  }
`,O9=b.p`
    color: red;
    font-size: 14px;
    text-align: center;
`,A9=b.button`
  background: #a47551;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 16px;

  &:hover {
    background: #8c6443;
  }
`,D9=`
/* Main Widget Container */
.chatbot-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
}

/* Chatbot Toggle Button */
.chatbot-button {
  background-color: #a47551;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.chatbot-button:hover {
  background-color: #8b5a2b;
  transform: scale(1.1);
}

/* Chat Popup Window */
.chatbot-popup {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.chatbot-header {
  background-color: #a47551;
  color: white;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  gap: 8px;
}

.chatbot-header span {
  margin-right: auto;
}

.chatbot-header button.header-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.chatbot-header button.header-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.chatbot-header button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* ML Stats Banner (Dev Mode) */
.ml-stats-banner {
  background-color: #f0f0f0;
  padding: 5px 10px;
  font-size: 11px;
  color: #555;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

/* Messages Area */
.chatbot-messages {
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chatbot-messages::-webkit-scrollbar {
  width: 8px;
}
.chatbot-messages::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.03);
}
.chatbot-messages::-webkit-scrollbar-thumb {
  background: #cbbba9;
  border-radius: 8px;
}

/* General Chat Bubble Style */
.chat-bubble {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 18px;
  word-wrap: break-word;
  position: relative;
  line-height: 1.4;
  font-size: 14px;
}

.chat-bubble .message-content {
    white-space: pre-wrap;
}

/* Bot Message Bubble */
.chat-bubble.bot {
  background-color: #e9e9eb;
  color: #333;
  align-self: flex-start;
  border-bottom-left-radius: 4px;
}

/* User Message Bubble */
.chat-bubble.user {
  background-color: #a47551;
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}

/* System & Error Bubbles */
.chat-bubble.system {
  font-size: 12px;
  color: #666;
  text-align: center;
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  align-self: center;
}

.chat-bubble.error {
  background-color: #fbe2e2;
  color: #b52a2a;
  border: 1px solid #e1b0b0;
  align-self: flex-start;
}

/* Loading Animation */
.chat-bubble.loading {
  padding: 15px;
}

.typing-animation {
  display: flex;
  gap: 2px;
}

.typing-animation span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #999;
  animation: typing 1s infinite ease-in-out;
}
.typing-animation span:nth-child(2) { animation-delay: 0.2s; }
.typing-animation span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* ML Prediction Info (Dev Mode) */
.ml-prediction-info {
  font-size: 10px;
  color: #6c757d;
  margin-top: 8px;
  border-top: 1px solid #ccc;
  padding-top: 5px;
  opacity: 0.8;
}
.user .ml-prediction-info {
  color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.5);
}

/* Feedback Buttons */
.feedback-buttons {
  margin-top: 8px;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}

.feedback-btn {
  background: rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feedback-btn:hover {
  background: rgba(0,0,0,0.1);
}

/* Input Area */
.chatbot-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #fff;
  align-items: center;
}

.chatbot-input input {
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 14px;
  outline: none;
}

.chatbot-input input:focus {
  border-color: #a47551;
}

.chatbot-input input:disabled {
  background: #f8f8f8;
  color: #999;
  cursor: not-allowed;
}

.chatbot-input button {
  background-color: #a47551;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chatbot-input button:hover:not(:disabled) {
  background-color: #8b5a2b;
  transform: scale(1.1);
}

.chatbot-input button:disabled {
  background-color: #c09b82;
  cursor: not-allowed;
  transform: scale(1);
}

.chatbot-input button.rephrase-btn {
    background-color: #6c757d;
    width: 36px;
    height: 36px;
    font-size: 18px;
}

.chatbot-input button.rephrase-btn:hover:not(:disabled) {
    background-color: #545b62;
}

.chatbot-input button.rephrase-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #c09b82 !important;
}

/* Feedback Modal */
.feedback-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.feedback-modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.feedback-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.feedback-header button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feedback-section {
  margin-bottom: 15px;
}

.feedback-section label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.feedback-section p {
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin: 0;
  font-style: italic;
  font-size: 14px;
  color: #666;
  border: 1px solid #e0e0e0;
}

.feedback-section select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background-color: white;
}

.feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn-primary, .btn-secondary {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #a47551;
  color: white;
}

.btn-primary:hover {
  background-color: #8b5a2b;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

/* Responsive Design */
@media (max-width: 420px) {
  .chatbot-popup {
    width: 320px;
    height: 440px;
    bottom: 70px;
    right: 10px;
  }

  .chatbot-widget {
    bottom: 16px;
    right: 16px;
  }

  .chat-bubble {
    max-width: 85%;
    font-size: 13px;
  }
}
`,N9=({isOpen:n,feedbackData:a,onClose:i,onSubmit:l,isDevMode:s})=>{const[d,h]=v.useState("");if(!n||!a)return null;const x=()=>{l(a.text,a.predicted_intent,d,!1),h(""),i()},p=[{value:"",label:"의도를 선택하세요"},{value:"예약_문의",label:"예약 문의"},{value:"요금_문의",label:"요금 문의"},{value:"이용_방법",label:"이용 방법"},{value:"문제_해결",label:"문제 해결"},{value:"계정_관리",label:"계정 관리"},{value:"인사",label:"인사"},{value:"감사",label:"감사"},{value:"기타_문의",label:"기타 문의"}];return c.jsx("div",{className:"feedback-modal-overlay",children:c.jsxs("div",{className:"feedback-modal",children:[c.jsxs("div",{className:"feedback-header",children:[c.jsx("h3",{children:"🤖 피드백 제출"}),c.jsx("button",{onClick:i,title:"닫기",children:"✖"})]}),c.jsxs("div",{className:"feedback-section",children:[c.jsx("label",{children:"메시지:"}),c.jsxs("p",{children:['"',a.text,'"']})]}),s&&c.jsxs("div",{className:"feedback-section",children:[c.jsx("label",{children:"예측된 의도:"}),c.jsx("p",{children:a.predicted_intent})]}),c.jsxs("div",{className:"feedback-section",children:[c.jsx("label",{children:"실제 의도:"}),c.jsx("select",{value:d,onChange:m=>h(m.target.value),children:p.map(m=>c.jsx("option",{value:m.value,children:m.label},m.value))})]}),c.jsxs("div",{className:"feedback-actions",children:[c.jsx("button",{onClick:i,className:"btn-secondary",children:"취소"}),c.jsx("button",{onClick:x,className:"btn-primary",disabled:!d,children:"제출"})]})]})})},z9=({msg:n,isDevMode:a,onOpenFeedback:i,onSubmitFeedback:l})=>{const s=x=>{n.ml_prediction&&l(n.text||"",n.ml_prediction.ml_intent,null,x)},d=()=>{n.ml_prediction&&i({text:n.text||"",predicted_intent:n.ml_prediction.ml_intent,messageId:n.messageId})},h=`chat-bubble ${n.role==="user"?"user":n.role==="error"?"error":n.role==="system"?"system":"bot"}`;return c.jsxs("div",{className:h,children:[c.jsx("div",{className:"message-content",children:n.text}),a&&n.ml_prediction&&c.jsxs("div",{className:"ml-prediction-info",children:["🤖 의도: ",n.ml_prediction.ml_intent," | 신뢰도:"," ",(n.ml_prediction.ml_confidence*100).toFixed(1),"% | 최종:"," ",n.ml_prediction.final_intent," (",n.ml_prediction.prediction_source,")"]}),a&&n.role==="assistant"&&n.ml_prediction&&n.messageId&&c.jsxs("div",{className:"feedback-buttons",children:[c.jsx("button",{onClick:()=>s(!0),className:"feedback-btn",title:"좋음",children:"👍"}),c.jsx("button",{onClick:()=>s(!1),className:"feedback-btn",title:"나쁨",children:"👎"}),c.jsx("button",{onClick:d,className:"feedback-btn",title:"상세 피드백",children:"🔧"})]})]})},L9=({isDevMode:n=!1})=>{const[a,i]=v.useState(!1),[l,s]=v.useState([]),[d,h]=v.useState(""),[x,p]=v.useState(!1),[m,g]=v.useState(!1),[w,C]=v.useState(null),[M,R]=v.useState(null),[O,j]=v.useState(!1),[k,A]=v.useState(null),D=v.useRef(null),U=v.useRef(null),S=v.useRef(!1),_=v.useRef(!1);v.useEffect(()=>{const T="chatbot-styles";if(!document.getElementById(T)){const I=document.createElement("style");I.id=T,I.textContent=D9,document.head.appendChild(I)}},[]),v.useEffect(()=>{U.current?.scrollIntoView({behavior:"smooth"})},[l]);const z=v.useMemo(()=>_e.create({baseURL:"https://moca8.com/",timeout:1e4,headers:{"Content-Type":"application/json"}}),[]),G=v.useCallback(()=>`session_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,[]);v.useEffect(()=>{if(!w){const T=G();C(T),console.log("🆔 New session created:",T)}},[w,G]),v.useEffect(()=>{n&&!M&&(async()=>{try{const I=await z.get("/ml_stats");R(I.data),console.log("📊 ML stats loaded:",I.data)}catch(I){console.error("Failed to load ML stats:",I)}})()},[n]);const N=()=>{i(T=>{const I=!T;return I&&!S.current&&l.length===0&&(s([{role:"assistant",text:`안녕하세요! MOCA 고객지원 챗봇입니다.
차량 예약, 요금 문의, 이용 방법 등 무엇이든 물어보세요.
대화 내용을 기억하고 있으니 편하게 대화하세요! 😊`,timestamp:new Date().toISOString()}]),S.current=!0),I})},Y=v.useCallback(T=>{s(I=>[...I,T])},[]),ne=v.useCallback(async()=>{if(!d.trim()||x||!w)return;const T={role:"user",text:d.trim(),timestamp:new Date().toISOString()};Y(T),h(""),p(!0),console.log("send..");try{const I=await z.post("/get_response",{message:T.text,session_id:w}),J={role:"assistant",text:I.data.response,timestamp:new Date().toISOString(),ml_prediction:I.data.ml_prediction,messageId:Date.now()};Y(J),I.data.session_id&&I.data.session_id!==w&&C(I.data.session_id)}catch(I){console.error("❌ Server error:",I);let J="서버와 연결할 수 없어요. 잠시 후 다시 시도해주세요.";I.response?.status===429?J="요청이 너무 많아요. 잠시 후 다시 시도해주세요.":I.code==="ECONNABORTED"&&(J="응답 시간이 초과되었어요. 다시 시도해주세요."),Y({role:"error",text:J,timestamp:new Date().toISOString()})}finally{p(!1)}},[d,x,w,Y,z]),ie=T=>{T.key==="Enter"&&!T.shiftKey&&!_.current&&(T.preventDefault(),ne())},ue=async()=>{if(!(!d.trim()||m)){g(!0);try{const T=await z.post("/get_response",{message:`다음 문장을 더 정중하고 명확하게 다시 써주세요: "${d}"`,session_id:w});h(T.data.response.replace(/["'"]/g,""))}catch(T){console.error("문장 다듬기 실패:",T)}finally{g(!1)}}},Te=T=>{A(T),j(!0)},Z=async(T,I,J,oe=!0)=>{try{if(await z.post("/feedback",{text:T,predicted_intent:I,actual_intent:J,user_satisfied:oe}),console.log("✅ 피드백 제출 완료"),n)try{const B=await z.get("/ml_stats");R(B.data)}catch(B){console.error("ML 통계 새로고침 실패:",B)}}catch(B){console.error("❌ 피드백 제출 실패:",B)}};return c.jsx(c.Fragment,{children:c.jsxs("div",{className:"chatbot-widget",children:[c.jsx("button",{onClick:N,className:"chatbot-button","aria-label":"챗봇 열기/닫기",children:a?"✖":"💬"}),a&&c.jsxs("div",{className:"chatbot-popup",children:[c.jsxs("div",{className:"chatbot-header",children:[c.jsx("span",{children:"🚗 MOCA 고객지원"}),c.jsx("button",{onClick:N,"aria-label":"챗봇 닫기",className:"header-btn",children:"✖"})]}),n&&M&&c.jsxs("div",{className:"ml-stats-banner",children:["📊 ML: ",M.training_data_count,"개 학습, 정확도:"," ",(M.recent_accuracy*100).toFixed(1),"%",M.model_loaded?" ✅":" ❌"]}),c.jsxs("div",{className:"chatbot-messages",ref:D,children:[l.map((T,I)=>c.jsx(z9,{msg:T,isDevMode:n,onOpenFeedback:Te,onSubmitFeedback:Z},I)),x&&c.jsx("div",{className:"chat-bubble bot loading",children:c.jsxs("div",{className:"typing-animation",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})}),c.jsx("div",{ref:U})]}),c.jsxs("div",{className:"chatbot-input",children:[c.jsx("input",{type:"text",placeholder:"메시지를 입력하세요...",value:d,onChange:T=>h(T.target.value),onKeyDown:ie,onCompositionStart:()=>_.current=!0,onCompositionEnd:()=>_.current=!1,disabled:x||m,"aria-label":"메시지 입력"}),c.jsx("button",{onClick:ue,disabled:m||x||!d.trim(),className:"rephrase-btn",title:"문장 다듬기",children:"✨"}),c.jsx("button",{onClick:ne,disabled:x||!d.trim(),"aria-label":"메시지 전송",children:x?"⏳":"📤"})]})]}),c.jsx(N9,{isOpen:O,feedbackData:k,onClose:()=>j(!1),onSubmit:Z,isDevMode:n})]})})},B9=({selected:n=!1,onClick:a=i=>i})=>c.jsx(H9,{onClick:a,children:n?"★":"☆"}),fv=()=>{const[n,a]=v.useState(0),[i,l]=v.useState(0),[s,d]=v.useState([]),[h,x]=v.useState(""),[p,m]=v.useState(""),g=()=>a(n+1),w=M=>{s.includes(M)?d(s.filter(R=>R!==M)):d([...s,M])},C=()=>{switch(n){case 0:return c.jsxs(Bo,{children:[c.jsx(_o,{children:"반납이 완료되었습니다."}),c.jsx(ec,{children:"이용해주셔서 감사합니다."}),c.jsx($o,{onClick:g,children:"피드백을 남겨주세요"})]});case 1:return c.jsxs(Bo,{children:[c.jsx(_o,{children:"차량 청결도 확인"}),c.jsx(ec,{children:"차량 내부는 깨끗했나요?"}),c.jsx("div",{children:[...Array(5)].map((M,R)=>c.jsx(B9,{selected:R<i,onClick:()=>l(R+1)},R))}),c.jsxs(I9,{children:[c.jsxs(Uo,{children:["🥤 쓰레기 방치",c.jsx("input",{type:"checkbox",onChange:()=>w("쓰레기 방치")})]}),c.jsxs(Uo,{children:["🐾 반려동물 흔적",c.jsx("input",{type:"checkbox",onChange:()=>w("반려동물 흔적")})]}),c.jsxs(Uo,{children:["🚬 흡연 흔적/냄새",c.jsx("input",{type:"checkbox",onChange:()=>w("흡연 흔적/냄새")})]}),c.jsxs(Uo,{children:["☕️ 시트 오염",c.jsx("input",{type:"checkbox",onChange:()=>w("시트 오염")})]}),c.jsxs(Uo,{children:["👜 분실물 발견",c.jsx("input",{type:"checkbox",onChange:()=>w("분실물 발견")})]})]}),c.jsx($o,{onClick:g,children:"다음"})]});case 2:return c.jsxs(Bo,{children:[c.jsx(_o,{children:"차량 상태 및 불편점 확인"}),c.jsx(ec,{children:"이번 이용 중, 기존에 없던 새로운 손상이나 문제가 발생했나요?"}),c.jsxs(U9,{children:[c.jsx($o,{onClick:()=>a(4),children:"아니요, 문제 없었어요"}),c.jsx($o,{onClick:g,children:"네, 새로운 문제가 있어요"})]})]});case 3:return c.jsxs(Bo,{children:[c.jsx(_o,{children:"상세 내용 입력"}),c.jsxs(V9,{value:h,onChange:M=>x(M.target.value),children:[c.jsx("option",{value:"",children:"문제 유형을 선택하세요"}),c.jsx("option",{value:"계기판 경고등",children:"계기판 경고등"}),c.jsx("option",{value:"타이어 문제",children:"타이어 문제"}),c.jsx("option",{value:"외부 스크래치",children:"외부 스크래치"}),c.jsx("option",{value:"내부 파손",children:"내부 파손"}),c.jsx("option",{value:"기타",children:"기타"})]}),c.jsx(P9,{placeholder:"상세 설명을 입력하세요 (선택 사항)",value:p,onChange:M=>m(M.target.value)}),c.jsx($o,{onClick:()=>a(4),children:"제출"})]});case 4:return c.jsxs(Bo,{children:[c.jsx(_o,{children:"소중한 피드백 감사합니다!"}),c.jsx(ec,{children:"다음 운전자가 기분 좋게 이용할 수 있을 거예요."}),c.jsx($9,{to:"/",children:"홈으로 돌아가기"})]});default:return null}};return c.jsx(_9,{children:C()})},_9=b.div`
  font-family: 'Pretendard', sans-serif;
  background-color: #F8F5F2;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`,Bo=b.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 420px;
  text-align: center;
`,_o=b.h1`
  font-size: 22px;
  font-weight: 700;
  color: #5d4037;
  margin: 0;
`,ec=b.p`
  font-size: 16px;
  color: #795548;
  margin: 0;
`,$9=b(ia)`
  margin-top: 4px;
  height: 52px;
  border: none;
  border-radius: 999px; /* Pill shape */
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s;
  background: #a47551; /* Moca: Primary */
  box-shadow: 0 10px 24px rgba(164, 117, 81, .35); /* Moca: Shadow */
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 4px 10px rgba(164, 117, 81, .25);
  }
`,$o=b.button`
  margin-top: 4px;
  height: 52px;
  border: none;
  border-radius: 999px; /* Pill shape */
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s;
  background: #a47551; /* Moca: Primary */
  box-shadow: 0 10px 24px rgba(164, 117, 81, .35); /* Moca: Shadow */
  width: 100%;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 4px 10px rgba(164, 117, 81, .25);
  }

  &:disabled {
    background: #d7ccc8; /* Moca: Disabled */
    cursor: not-allowed;
    box-shadow: none;
  }
`,U9=b.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,H9=b.span`
  cursor: pointer;
  font-size: 2.5rem;
  color: #ffc107;
  margin: 0 5px;
`,I9=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1rem;
  text-align: left;
`,Uo=b.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  color: #5d4037;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #e7e0d9;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:checked {
      background-color: #a47551;
      border-color: #a47551;
    }
  }
`,V9=b.select`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #e7e0d9;
  padding: 0 16px;
  background: #fdfbfa;
  font-size: 16px;
  color: #5d4037;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23795548%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 8px 8px;
  box-sizing: border-box;

  &:focus {
    border-color: #a47551;
    background-color: #fff;
  }
`,P9=b.textarea`
  width: 100%;
  padding: 16px;
  height: 120px;
  border-radius: 12px;
  border: 1px solid #e7e0d9;
  background: #fdfbfa;
  font-size: 16px;
  color: #5d4037;
  resize: vertical;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: #b0a49a;
  }

  &:focus {
    border-color: #a47551;
    background-color: #fff;
  }
`,hv=({adminOnly:n=!1})=>{const{user:a,authLoading:i}=St();return i?null:a?n&&a.role!=="admin"?c.jsx(A1,{to:"/",replace:!0}):c.jsx(Ev,{}):c.jsx(A1,{to:"/login",replace:!0})},q9=({children:n})=>{const{user:a}=St(),{connect:i,disconnect:l}=Jh();return v.useEffect(()=>{console.log("Connected!"),a?i():l()},[a,i,l]),v.useEffect(()=>()=>{l()},[l]),n};function F9(){return c.jsx(D4,{children:c.jsxs(q9,{children:[c.jsxs(Mv,{children:[c.jsxs(Oe,{element:c.jsx(w8,{}),children:[c.jsx(Oe,{path:"/",element:c.jsx(d3,{})}),c.jsx(Oe,{path:"/home",element:c.jsx(v3,{})}),c.jsx(Oe,{path:"/reserve",element:c.jsx(M3,{})}),c.jsx(Oe,{path:"/map",element:c.jsx(kM,{})}),c.jsx(Oe,{path:"/cars",element:c.jsx(zM,{})}),c.jsx(Oe,{path:"/insurance",element:c.jsx(qM,{})}),c.jsx(Oe,{path:"/checkout",element:c.jsx(ak,{})}),c.jsx(Oe,{path:"/payment-options",element:c.jsx(yk,{})}),c.jsx(Oe,{path:"/ocr",element:c.jsx(gO,{})}),c.jsx(Oe,{path:"/payment-result/:status",element:c.jsx(Dk,{})}),c.jsx(Oe,{path:"/notices",element:c.jsx(IO,{})}),c.jsx(Oe,{path:"/notices/write",element:c.jsx(i9,{})}),c.jsx(Oe,{path:"/payments-licenses",element:c.jsx(v9,{})}),c.jsx(Oe,{path:"/add-payment",element:c.jsx(M9,{})}),c.jsx(Oe,{path:"/faq",element:c.jsx(HA,{})}),c.jsx(Oe,{path:"/return",element:c.jsx(fv,{})}),c.jsx(Oe,{path:"/test/return",element:c.jsx(fv,{})}),c.jsxs(Oe,{element:c.jsx(hv,{}),children:[c.jsx(Oe,{path:"/mypage",element:c.jsx(cA,{})}),c.jsx(Oe,{path:"/profile-edit",element:c.jsx(NA,{})})]}),c.jsx(Oe,{element:c.jsx(hv,{adminOnly:!0}),children:c.jsx(Oe,{path:"/admin/*",element:c.jsx(iO,{})})})]}),c.jsx(Oe,{path:"/login",element:c.jsx(Kb,{redirectPath:"/auth/kakao/callback"})}),c.jsx(Oe,{path:"/loginTest",element:c.jsx(Kb,{redirectPath:"/auth/kakao/callback/test"})}),c.jsx(Oe,{path:"/signup",element:c.jsx(kO,{})}),c.jsx(Oe,{path:"/auth/kakao/callback",element:c.jsx(tv,{})}),c.jsx(Oe,{path:"/auth/kakao/callback/test",element:c.jsx(tv,{})})]}),c.jsx(L9,{isDevMode:!0})," "]})})}oS.createRoot(document.getElementById("root")).render(c.jsx(w4,{children:c.jsx(F9,{})}));
