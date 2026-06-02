var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};function o(t,e,i,o){var n,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],o=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=window,a=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),l=new WeakMap;class d{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}}const c=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new d("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var h;const u=window,m=u.trustedTypes,p=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:g},b="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{a?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),o=s.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var x;y[b]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:y}),(null!==(h=u.reactiveElementVersions)&&void 0!==h?h:u.reactiveElementVersions=[]).push("1.6.3");const w=window,$=w.trustedTypes,E=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,k="?"+S,I=`<${k}>`,A=document,T=()=>A.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,R="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,N=/>/g,M=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,V=/"/g,z=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),W=new WeakMap,j=A.createTreeWalker(A,129,null,!1);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",a=L;for(let e=0;e<i;e++){const i=t[e];let r,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===L?"!--"===l[1]?a=D:void 0!==l[1]?a=N:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=n?n:L,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?M:'"'===l[3]?V:P):a===V||a===P?a=M:a===D||a===N?a=L:(a=M,n=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";s+=a===L?i+I:d>=0?(o.push(r),i.slice(0,d)+C+i.slice(d)+S+h):i+S+(-2===d?(o.push(void 0),e):h)}return[q(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class X{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const a=t.length-1,r=this.parts,[l,d]=G(t,e);if(this.el=X.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=j.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(C)||e.startsWith(S)){const i=d[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+C).split(S),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?et:"@"===e[1]?it:Q})}else r.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(z.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),j.nextNode(),r.push({type:2,index:++n});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===k)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)r.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,o){var n,s,a,r;if(e===H)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const d=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(r=i)._$Co)&&void 0!==a?a:r._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=Y(t,l._$AS(t,e.values),l,o)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);j.currentNode=n;let s=j.nextNode(),a=0,r=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Z(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new ot(s,this,t)),this._$AV.push(e),l=o[++r]}a!==(null==l?void 0:l.index)&&(s=j.nextNode(),a++)}return j.currentNode=A,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,o){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),O(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>F(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=X.createElement(q(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new K(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}T(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Z(this.k(T()),this.k(T()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,i,o,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=Y(this,t,e,0),s=!O(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else{const o=t;let a,r;for(t=n[0],a=0;a<n.length-1;a++)r=Y(this,o[i+a],e,a),r===H&&(r=this._$AH[a]),s||(s=!O(r)||r!==this._$AH[a]),r===U?t=U:t!==U&&(t+=(null!=r?r:"")+n[a+1]),this._$AH[a]=r}s&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const tt=$?$.emptyScript:"";class et extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class it extends Q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Y(this,t,e,0))&&void 0!==i?i:U)===H)return;const o=this._$AH,n=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==U&&(o===U||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const nt=w.litHtmlPolyfillSupport;null==nt||nt(X,Z),(null!==(x=w.litHtmlVersions)&&void 0!==x?x:w.litHtmlVersions=[]).push("2.8.0");const st=window,at=st.ShadowRoot&&(void 0===st.ShadyCSS||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),lt=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class dt{constructor(t,e,i){if(this._$cssResult$=!0,i!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(at&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=lt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&lt.set(e,t))}return t}toString(){return this.cssText}}const ct=t=>new dt("string"==typeof t?t:t+"",void 0,rt),ht=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new dt(i,t,rt)},ut=at?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ct(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt;const pt=window,ft=pt.trustedTypes,_t=ft?ft.emptyScript:"",gt=pt.reactiveElementPolyfillSupport,vt={toAttribute(t,e){switch(e){case Boolean:t=t?_t:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},bt=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:bt},xt="finalized";class wt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||yt}static finalize(){if(this.hasOwnProperty(xt))return!1;this[xt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ut(t))}else void 0!==t&&e.push(ut(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{at?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),o=st.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=yt){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:vt).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:vt;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||bt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $t,Et;wt[xt]=!0,wt.elementProperties=new Map,wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},null==gt||gt({ReactiveElement:wt}),(null!==(mt=pt.reactiveElementVersions)&&void 0!==mt?mt:pt.reactiveElementVersions=[]).push("1.6.3");class Ct extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=s._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=a=new Z(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}Ct.finalized=!0,Ct._$litElement$=!0,null===($t=globalThis.litElementHydrateSupport)||void 0===$t||$t.call(globalThis,{LitElement:Ct});const St=globalThis.litElementPolyfillSupport;null==St||St({LitElement:Ct}),(null!==(Et=globalThis.litElementVersions)&&void 0!==Et?Et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),It=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):It(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tt(t){return At({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ft(t){return Ot({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(t,e){return Ot({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt(t){return Ot({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dt;const Nt=null!=(null===(Dt=window.HTMLSlotElement)||void 0===Dt?void 0:Dt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Mt(t,e,i){let o,n=t;return"object"==typeof t?(n=t.slot,o=t):o={flatten:e},i?function(t){const{slot:e,selector:i}=null!=t?t:{};return Ot({descriptor:o=>({get(){var o;const n="slot"+(e?`[name=${e}]`:":not([name])"),s=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(n),a=null!=s?Nt(s,t):[];return i?a.filter(t=>t.matches(i)):a},enumerable:!0,configurable:!0})})}({slot:n,flatten:e,selector:i}):Ot({descriptor:t=>({get(){var t,e;const i="slot"+(n?`[name=${n}]`:":not([name])"),s=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==s?void 0:s.assignedNodes(o))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}var Pt,Vt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Pt||(Pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Vt||(Vt={}));var zt=["closed","locked","off"],Bt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},Ht=function(t){Bt(window,"haptic",t)},Ut=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some(function(t){return t.user===e.user.id})||(Ht("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&Bt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Bt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(s,o,{entity_id:e})})(t,e,zt.includes(t.states[e].state))}(e,i.entity),Ht("success"));break;case"call-service":if(!o.service)return void Ht("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data,o.target),Ht("success");break;case"fire-dom-event":Bt(t,"ll-custom",o)}};function Wt(t){return void 0!==t&&"none"!==t.action}var jt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,o){return t[0]===e&&(i=o,!0)}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),o=this.__entries__[i];return o&&o[1]},e.prototype.set=function(e,i){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,o=t(i,e);~o&&i.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,o=this.__entries__;i<o.length;i++){var n=o[i];t.call(e,n[1],n[0])}},e}()}(),qt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Gt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Xt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Gt):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)};var Yt=["top","right","bottom","left","width","height","size","weight"],Kt="undefined"!=typeof MutationObserver,Zt=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,o=!1,n=0;function s(){i&&(i=!1,t()),o&&r()}function a(){Xt(s)}function r(){var t=Date.now();if(i){if(t-n<2)return;o=!0}else i=!0,o=!1,setTimeout(a,e);n=t}return r}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){qt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Kt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){qt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Yt.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Qt=function(t,e){for(var i=0,o=Object.keys(e);i<o.length;i++){var n=o[i];Object.defineProperty(t,n,{value:e[n],enumerable:!1,writable:!1,configurable:!0})}return t},Jt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Gt},te=ae(0,0,0,0);function ee(t){return parseFloat(t)||0}function ie(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce(function(e,i){return e+ee(t["border-"+i+"-width"])},0)}function oe(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return te;var o=Jt(t).getComputedStyle(t),n=function(t){for(var e={},i=0,o=["top","right","bottom","left"];i<o.length;i++){var n=o[i],s=t["padding-"+n];e[n]=ee(s)}return e}(o),s=n.left+n.right,a=n.top+n.bottom,r=ee(o.width),l=ee(o.height);if("border-box"===o.boxSizing&&(Math.round(r+s)!==e&&(r-=ie(o,"left","right")+s),Math.round(l+a)!==i&&(l-=ie(o,"top","bottom")+a)),!function(t){return t===Jt(t).document.documentElement}(t)){var d=Math.round(r+s)-e,c=Math.round(l+a)-i;1!==Math.abs(d)&&(r-=d),1!==Math.abs(c)&&(l-=c)}return ae(n.left,n.top,r,l)}var ne="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Jt(t).SVGGraphicsElement}:function(t){return t instanceof Jt(t).SVGElement&&"function"==typeof t.getBBox};function se(t){return qt?ne(t)?function(t){var e=t.getBBox();return ae(0,0,e.width,e.height)}(t):oe(t):te}function ae(t,e,i,o){return{x:t,y:e,width:i,height:o}}var re=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ae(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=se(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),le=function(t,e){var i=function(t){var e=t.x,i=t.y,o=t.width,n=t.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(s.prototype);return Qt(a,{x:e,y:i,width:o,height:n,top:i,right:e+o,bottom:n+i,left:e}),a}(e);Qt(this,{target:t,contentRect:i})},de=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new jt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Jt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new re(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Jt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new le(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ce="undefined"!=typeof WeakMap?new WeakMap:new jt,he=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Zt.getInstance(),o=new de(e,i,this);ce.set(this,o)};["observe","unobserve","disconnect"].forEach(function(t){he.prototype[t]=function(){var e;return(e=ce.get(this))[t].apply(e,arguments)}});var ue=void 0!==Gt.ResizeObserver?Gt.ResizeObserver:he;const me=(t,e)=>t(`component.weather.entity_component._.state.${e}`)||e,pe=t=>null!=t?t:U,fe=1,_e=2,ge=3,ve=4,be=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ye{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xe extends ye{constructor(t){if(super(t),this.et=U,t.type!==_e)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this.ft=void 0,this.et=t;if(t===H)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}xe.directiveName="unsafeHTML",xe.resultType=1;const we=be(xe),$e="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Ee extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:$e?"100px":"50px",height:$e?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Bt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Bt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Bt(t,"action",{action:"double_tap"})):Bt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",t=>{13===t.keyCode&&o(t)})}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-weather",Ee);const Ce=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-weather"))return t.querySelector("action-handler-weather");const e=document.createElement("action-handler-weather");return t.appendChild(e),e})();i&&i.bind(t,e)},Se=be(class extends ye{update(t,[e]){return Ce(t.element,e),H}render(t){}});console.info("%c  PLATINUM-WEATHER-CARD-TL  \n%c  Version 2.0.0-preview          ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"platinum-weather-card",name:"Platinum Weather Card",description:"An fully customisable weather card with a GUI configuration",getEntitySuggestion:(t,e)=>"weather"!==e.split(".")[0]?null:{config:{type:"custom:platinum-weather-card",weather_entity:e}}});let ke=class extends Ct{constructor(){super(...arguments),this._cardWidth=492,this._error=[]}static get properties(){return{_config:{},_forecastEvent:{},hass:{}}}static async getConfigElement(){return await Promise.resolve().then(function(){return On}),document.createElement("platinum-weather-card-editor")}static getStubConfig(){return{}}getCardSize(){const t=16+this._getCardSizeOverviewSection()+this._getCardSizeExtendedSection()+this._getCardSizeSlotsSection()+this._getCardSizeDailyForecastSection();return Math.ceil(t/50)}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.weather_entity)throw new Error("platinum-weather-card: weather_entity is required. Please set a weather entity in the card configuration.");const e=/^[a-z0-9_]+\.[a-z0-9_]+$/,i=["weather_entity","entity_temperature","entity_apparent_temp","entity_forecast_icon","entity_summary","entity_extended","entity_humidity","entity_pressure","entity_visibility","entity_wind_bearing","entity_wind_speed","entity_wind_gust","entity_wind_speed_kt","entity_wind_gust_kt","entity_temp_next","entity_temp_following","entity_forecast_max","entity_forecast_min","entity_observed_max","entity_observed_min","entity_fire_danger","entity_pop","entity_pos","entity_sun","entity_moon","entity_uv_alert_summary","entity_rainfall","entity_update_time"];for(const o of i){const i=t[o];if(i&&"string"==typeof i&&!e.test(i))throw new Error(`platinum-weather-card: "${o}" has invalid entity ID format: "${i}". Expected format: domain.object_id (e.g. sensor.temperature).`)}const o=["overview","extended","slots","daily_forecast"];if(t.section_order){if(!Array.isArray(t.section_order))throw new Error("platinum-weather-card: section_order must be an array.");for(const e of t.section_order)if(!o.includes(e))throw new Error(`platinum-weather-card: invalid section "${e}" in section_order. Valid values: ${o.join(", ")}.`)}if(void 0!==t.daily_forecast_days){const e=Number(t.daily_forecast_days);if(!Number.isInteger(e)||e<1||e>7)throw new Error(`platinum-weather-card: daily_forecast_days must be an integer between 1 and 7, got "${t.daily_forecast_days}".`)}t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Weather"},t)}_needForecastSubscription(){return this._config&&this._config.weather_entity&&this._config.forecast_type&&"legacy"!==this._config.forecast_type}_unsubscribeForecastEvents(){this._subscribed&&(this._subscribed.then(t=>t()),this._subscribed=void 0)}async _subscribeForecastEvents(){var t,e,i,o;(this._unsubscribeForecastEvents(),this.isConnected&&this.hass&&this._config&&this._needForecastSubscription())&&(this._subscribed=(t=this.hass,e=this._config.weather_entity,i=this._config.forecast_type,o=t=>{this._forecastEvent=t},t.connection.subscribeMessage(o,{type:"weather/subscribe_forecast",forecast_type:i,entity_id:e})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._config&&this.hass&&this._subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeForecastEvents()}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config")||t.has("_forecastEvent"))return!0;if(t.has("hass"))return!0;const e=t.get("hass")||void 0;if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;if(!1===Object.keys(this._config).every(t=>null===t.match(/^entity_/)||e.states[this._config[t]]===this.hass.states[this._config[t]]))return!0;if(this._config.show_section_daily_forecast){const t=this._config.daily_forecast_days||5;for(const o of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1"])if(void 0!==this._config[o]&&null===this._config[o].match("^weather.")){const n=this._config[o].match(/(\d+)(?!.*\d)/g);if(n)for(var i=1;i<t;i++){const t=this._config[o].replace(/(\d+)(?!.*\d)/g,Number(n)+i);if(e.states[t]!==this.hass.states[t])return!0}}}return t.has("config")}updated(t){this.hass&&this._config&&(!t.has("_config")&&this._subscribed||this._subscribeForecastEvents())}firstUpdated(){this._resize(),this._attachObserver()}_attachObserver(){var t;this._resizeObserver||(this._resizeObserver=new ue(function(t,e,i){var o;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),s=this,a=i&&!o;clearTimeout(o),o=setTimeout(function(){o=null,i||t.apply(s,n)},e),a&&t.apply(s,n)}}(()=>this._resize(),250,!1)));(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card"))&&this._resizeObserver.observe(this)}_resize(){var t;if(!this.isConnected)return;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._cardWidth=e.getBoundingClientRect().width)}_checkForErrors(){this._error=[],Object.keys(this._config).forEach(t=>{null!==t.match(/^entity_/)&&void 0===this.hass.states[this._config[t]]&&this._error.push(`'${t}=${this._config[t]}' not found`)});for(const t of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1","entity_extended_1","entity_pop","entity_forecast_min","entity_forecast_max"])if(void 0!==this._config[t])if(this._config[t].match("^weather.")){if(void 0===this.hass.states[this._config.weather_entity]){this._error.push("'weather_entity needs to be defined (not found).");break}if(this._config[t]!==this._config.weather_entity){this._error.push(`'${t} needs to be the same as weather_entity.`);break}const e=this.forecast1;if(void 0!==e){const i=new Date;switch(i.setDate(i.getDate()+1),t){case"entity_forecast_icon_1":void 0===this._getForecastPropFromWeather(e,i,"condition")&&this._error.push(`'${t} attribute forecast[1].condition not found`);break;case"entity_forecast_min_1":void 0===this._getForecastPropFromWeather(e,i,"templow")&&this._error.push(`'${t} attribute forecast[1].templow not found`);break;case"entity_forecast_max_1":void 0===this._getForecastPropFromWeather(e,i,"temperature")&&this._error.push(`'${t} attribute forecast[1].temperature not found`);break;case"entity_pop_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation_probability")&&this._error.push(`'${t} attribute forecast[1].precipitation_probability not found`);break;case"entity_pos_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation")&&this._error.push(`'${t} attribute forecast[1].precipitation not found`)}}}else{this._config[t].match(/(\d+)(?!.*\d)/g)||this._error.push(`'${t}=${this._config[t]}' value needs to have a number`)}return void 0!==this._config.weather_entity&&(void 0!==this._config.forecast_type?["daily","hourly","twice_daily"].includes(this._config.forecast_type)||this._error.push("'forecast_type must be daily, hourly, or twice_daily"):this._error.push("'forecast_type needs to be configured.")),0!==this._error.length}_renderUpdateTime(){if(this._config.entity_update_time&&this.hass.states[this._config.entity_update_time]&&void 0!==this.hass.states[this._config.entity_update_time].state)if(!0===this._config.update_time_use_attr){if(void 0!==this._config.update_time_name_attr){const t=this._config.update_time_name_attr.toLowerCase().split(".").reduce((t,e)=>void 0!==t?t[e]:void 0,this.hass.states[this._config.entity_update_time].attributes);if(void 0!==t){const e=new Date(`${t}`);switch(this.timeFormat){case"12hour":return B`${e.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+this._formatDate(e)}`;case"24hour":return B`${e.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+this._formatDate(e)}`;case"system":return B`${e.toLocaleTimeString(this.locale||navigator.language,{timeStyle:"short"}).replace(" ","")+", "+this._formatDate(e)}`}}}}else{const t=new Date(this.hass.states[this._config.entity_update_time].state);switch(this.timeFormat){case"12hour":return B`${t.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+this._formatDate(t)}`;case"24hour":return B`${t.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+this._formatDate(t)}`;case"system":return B`${t.toLocaleTimeString(this.locale||navigator.language,{timeStyle:"short"}).replace(" ","")+", "+this._formatDate(t)}`}}return B`---`}_renderCompleteOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return B``;const i=this._weatherIcon(this.forecastIcon),o=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),n="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,s="unknown"!==i?B``:B`<div class="unknown-forecast">${this.forecastIcon}</div>`,a=B`<div class="big-icon"><img src="${o.href}" width="100%" height="100%" title="${n}"></div>`,r=B`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,l=this.currentApparentTemperature,d=""!=l?B`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${l}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:B``,c=!0===this._config.option_show_overview_separator?B`<hr class=line>`:"",h=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=B`<div class="forecast-text">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:B`<div class="forecast-text">---</div>`:B``;return B`
      <div class="overview-section section">
        ${this._config.text_card_title?B`<div class="card-header">${this._config.text_card_title}</div>`:B``}
        ${this._config.text_card_title_2?B`<div class="card-header">${this._config.text_card_title_2}</div>`:B``}
        ${this._config.entity_update_time?B`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:B``}
        <div class="overview-top">
          <div class="top-left">${a}${s}</div>
          <div class="currentTemps">${r}${d}</div>
        </div>
        ${h}
        ${c}
      </div>
    `}_renderObservationsOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return B``;const e=this._cardWidth>=344?" stacked":"",i=B`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,o=this.currentApparentTemperature,n=""!=o?B`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${o}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:B``,s=!0===this._config.option_show_overview_separator?B`<hr class=line>`:"";return B`
      <div class="overview-section section${e}">
        ${this._config.text_card_title?B`<div class="card-header">${this._config.text_card_title}</div>`:B``}
        ${this._config.text_card_title_2?B`<div class="card-header">${this._config.text_card_title_2}</div>`:B``}
        ${this._config.entity_update_time?B`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:B``}
      </div>
      <div class="overview-section section">
        <div class="overview-top">
          <div class="top-left-obs"></div>
          <div class="currentTemps">${i}${n}</div>
        </div>
        ${s}
      </div>
    `}_renderTitleOnlyOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return B``;const e=!0===this._config.option_show_overview_separator?B`<hr class=line>`:"";return B`
      <div class="overview-section section">
        ${this._config.text_card_title?B`<div class="card-header">${this._config.text_card_title}</div>`:B``}
        ${this._config.text_card_title_2?B`<div class="card-header">${this._config.text_card_title_2}</div>`:B``}
        ${this._config.entity_update_time?B`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:B``}
        ${e}
      </div>
    `}_renderForecastOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return B``;const i=this._weatherIcon(this.forecastIcon),o=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),n="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,s="unknown"!==i?B``:B`<div class="unknown-forecast">${this.forecastIcon}</div>`,a=B`<div class="big-icon"><img src="${o.href}" width="100%" height="100%" title="${n}"></div>`,r=!0===this._config.option_show_overview_separator?B`<hr class=line>`:"",l=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=B`<div class="forecast-text-right">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:B`<div class="forecast-text-right">---</div>`:B``;return B`
      <div class="overview-section section">
        ${this._config.text_card_title?B`<div class="card-header">${this._config.text_card_title}</div>`:B``}
        ${this._config.text_card_title_2?B`<div class="card-header">${this._config.text_card_title_2}</div>`:B``}
        ${this._config.entity_update_time?B`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:B``}
        <div class="overview-top">
          <div class="top-left">${a}${s}</div>
          ${l}
        </div>
        ${r}
      </div>
    `}_getCardSizeOverviewSection(){var t=0;if(!1!==this._config.show_section_overview){if("observations"===this._config.overview_layout)return 76;t=16,t+=void 0!==this._config.text_card_title?20:0,t+=void 0!==this._config.text_card_title_2?20:0,t+=void 0!==this._config.entity_update_time?20:0,"title only"!==this._config.overview_layout&&(t+="forecast"!==this._config.overview_layout&&void 0!==this._config.entity_summary?145:120)}return t}_renderOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return B``;switch(this._config.overview_layout||"complete"){case"observations":return this._renderObservationsOverviewSection();case"forecast":return this._renderForecastOverviewSection();case"title only":return this._renderTitleOnlyOverviewSection();default:return this._renderCompleteOverviewSection()}}_getCardSizeExtendedSection(){var t=0;return!1!==this._config.show_section_extended&&(t+=16,t+=this._config.entity_extended?40:0,t+=void 0!==this._config.entity_todays_uv_forecast||void 0!==this._config.entity_todays_fire_danger?20:0),t}_renderExtendedSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_extended)||void 0===this._config.entity_extended&&void 0===this._config.entity_todays_uv_forecast&&void 0===this._config.entity_todays_fire_danger)return B``;const i=this._config.entity_extended||"";var o=[];if(void 0!==this.hass.states[i])if(null===(e=this._config.entity_extended)||void 0===e?void 0:e.match("^weather.")){const t=this.forecast1;var n;if(void 0!==t)n=void 0,!0===this._config.extended_use_attr?void 0!==this._config.extended_name_attr&&(n=t[0][this._config.extended_name_attr]):n="extended_use_attr: - must be set to true when entity_extended is set to a weather entity",void 0!==n&&o.push(B`${n}`)}else if(!0===this._config.extended_use_attr){if(void 0!==this._config.extended_name_attr){const t=this._config.extended_name_attr.toLowerCase().split(".").reduce((t,e)=>void 0!==t?t[e]:void 0,this.hass.states[i].attributes);void 0!==t&&o.push(B`${t}`)}}else if(void 0!==this.hass.states[i]){const t=this.hass.states[i].state;"unknown"!==t&&"unavailable"!==t&&o.push(B`${t}`)}return o.push(B`${this._config.entity_todays_uv_forecast&&this.hass.states[this._config.entity_todays_uv_forecast]&&"unknown"!==this.hass.states[this._config.entity_todays_uv_forecast].state?" "+this.hass.states[this._config.entity_todays_uv_forecast].state:""}`),o.push(B`${this._config.entity_todays_fire_danger&&this.hass.states[this._config.entity_todays_fire_danger]&&"unknown"!==this.hass.states[this._config.entity_todays_fire_danger].state?" "+this.hass.states[this._config.entity_todays_fire_danger].state:""}`),B`
      <div class="extended-section section">
        <div class="f-extended">
          ${o}
        </div>
      </div>
    `}_getCardSizeSlotsSection(){var t=0;if(!1!==this._config.show_section_slots){var e=("remove"!==this._config.slot_l1?1:0)+("remove"!==this._config.slot_l2?1:0)+("remove"!==this._config.slot_l3?1:0)+("remove"!==this._config.slot_l4?1:0)+("remove"!==this._config.slot_l5?1:0)+(void 0!==this._config.slot_l6&&"remove"!==this._config.slot_l6?1:0)+(void 0!==this._config.slot_l7&&"remove"!==this._config.slot_l7?1:0)+(void 0!==this._config.slot_l8&&"remove"!==this._config.slot_l8?1:0),i=("remove"!==this._config.slot_r1?1:0)+("remove"!==this._config.slot_r2?1:0)+("remove"!==this._config.slot_r3?1:0)+("remove"!==this._config.slot_r4?1:0)+("remove"!==this._config.slot_r5?1:0)+(void 0!==this._config.slot_r6&&"remove"!==this._config.slot_r6?1:0)+(void 0!==this._config.slot_r7&&"remove"!==this._config.slot_r7?1:0)+(void 0!==this._config.slot_r8&&"remove"!==this._config.slot_r8?1:0);t+=16+24*Math.max(e,i)}return t}_renderSlotsSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_slots))return B``;var e=!0===this._config.use_old_column_format?B`
      <div>
        <ul class="variations-ugly">
          <li>
            <ul class="slot-list">${this.slotL1}${this.slotL2}${this.slotL3}${this.slotL4}${this.slotL5}${this.slotL6}${this.slotL7}${this.slotL8}</ul>
          </li>
          <li>
            <ul class="slot-list">${this.slotR1}${this.slotR2}${this.slotR3}${this.slotR4}${this.slotR5}${this.slotR6}${this.slotR7}${this.slotR8}</ul>
          </li>
        </ul>
      </div>
    `:B`
      <div>
        <ul class="variations">
          <li class="slot-list-item-1">
            <ul class="slot-list">
              ${this.slotL1}${this.slotL2}${this.slotL3}${this.slotL4}${this.slotL5}${this.slotL6}${this.slotL7}${this.slotL8}
            </ul>
          </li>
          <li>
            <ul class="slot-list">
              ${this.slotR1}${this.slotR2}${this.slotR3}${this.slotR4}${this.slotR5}${this.slotR6}${this.slotR7}${this.slotR8}
            </ul>
          </li>
        </ul>
      </div>
    `;return B`
      <div class="slot-section section">${e}</div>
    `}_renderHorizontalDailyForecastSection(){var t,e,i,o,n,s,a;const r=[],l=this._config.daily_forecast_days||5;for(var d=0;d<l;d++){const x=new Date;var c,h,u;if(x.setDate(x.getDate()+d+(this._config.option_show_current_day?0:1)),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;var m;if(void 0!==this.forecast1&&(m=this._getForecastPropFromWeather(this.forecast1,x,"condition")),void 0===m)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&m?this._weatherIcon(m):"unknown")+".svg").replace("-night","-day"),import.meta.url);c=B`<li class="f-slot-horiz-icon"><i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i></li>`}else{var p=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+d)):void 0;if(void 0===t||void 0===this.hass.states[t])break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);c=B`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i>`}(null===(e=this._config.entity_forecast_max_1)||void 0===e?void 0:e.match("^weather."))?void 0!==this.forecast1&&(h=this._getForecastPropFromWeather(this.forecast1,x,"temperature")):h=(p=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+d))].state:void 0,(null===(i=this._config.entity_forecast_min_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,x,"templow")):u=(p=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+d))].state:void 0;const w=B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,$=!0===this._config.old_daily_format?B`
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text highTemp">${h?Number(h).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
              ${w}
            </span>
          </li>
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text lowTemp">${u?Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
              ${w}
            </span>
          </li>`:"highlow"===this._config.tempformat?B`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text highTemp">${h?Number(h).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text lowTemp">${u?Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                ${w}
              </span>
            </li>`:B`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text lowTemp">${u?Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text highTemp">${h?Number(h).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                ${w}
              </span>
            </li>
          `;var f,_,g;if(null===(o=this._config.entity_pop_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_pop_1;var v;void 0!==this.forecast1&&(v=this._getForecastPropFromWeather(this.forecast1,x,"precipitation_probability")),f=t&&!1!==this._config.option_show_forecast_pop?B`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${this.hass.states[t]&&void 0!==v?Math.round(Number(v)):"---"}</div><div class="unit">%</div></span></li>`:B``}else{const t=(p=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+d)):void 0;f=p&&!1!==this._config.option_show_forecast_pop?B`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></span></li>`:B``}if(null===(n=this._config.entity_pos_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_pos_1;var b;void 0!==this.forecast1&&(b=this._getForecastPropFromWeather(this.forecast1,x,"precipitation")),_=t?B`<li class="f-slot-horiz-text"><span><div class="pos">${this.hass.states[t]&&void 0!==b?b:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:B``}else{const t=(p=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+d)):void 0;_=p?B`<li class="f-slot-horiz-text"><span><div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:B``}if(null===(s=this._config.entity_summary_1)||void 0===s?void 0:s.match("^weather.")){const t=this._config.entity_summary_1;var y;void 0!==this.forecast1&&(y=null!==(a=this._getForecastPropFromWeather(this.forecast1,x,"detailed_description"))&&void 0!==a?a:this._getForecastPropFromWeather(this.forecast1,x,"condition")),g=B`<div class="fcasttooltipblock" id="fcast-summary-${d}" style="width:${100*l}%;left:-${100*d}%;"><div class="fcasttooltiptext">${this.hass.states[t]&&void 0!==y?me(this.hass.localize,y):"---"}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/l/2+d*(100/l)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}else{const t=(p=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+d)):void 0;g=B`<div class="fcasttooltipblock" id="fcast-summary-${d}" style="width:${100*l}%;left:-${100*d}%;"><div class="fcasttooltiptext">${this._config.option_tooltips&&t?this.hass.states[t]?this.hass.states[t].state:"---":""}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/l/2+d*(100/l)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}r.push(B`
        <div class="day-horiz fcasttooltip">
          <ul class="f-slot-horiz">
            <li class="f-slot-horiz-text"><span class="dayname">${x?x.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</span></li>
            ${c}
            ${this._config.option_show_temperature_chart?B``:$}
            ${f}
            ${this._config.option_show_precipitation_chart?B``:_}
            ${!0===this._config.option_show_forecast_wind?(()=>{var t;const e=(this._config.option_show_current_day?0:1)+d,i=this.forecast1&&this.forecast1[e];if(!i||void 0===i.wind_speed)return B``;const o=Math.round(Number(i.wind_speed)),n={N:0,NNE:22,NE:45,ENE:67,E:90,ESE:112,SE:135,SSE:157,S:180,SSW:202,SW:225,WSW:247,W:270,WNW:292,NW:315,NNW:337};let s=null;if(void 0!==i.wind_bearing&&null!==i.wind_bearing){const e=Number(i.wind_bearing);if(isNaN(e)){s=null!==(t=n[String(i.wind_bearing).toUpperCase().trim()])&&void 0!==t?t:null}else s=e}return B`<li class="f-slot-horiz-text"><span>${we(null!==s?`<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 10 10" style="transform:rotate(${(s+180)%360}deg);display:inline-block;vertical-align:middle;margin-right:1px;"><polygon points="5,0 8.5,9 5,6.5 1.5,9" fill="currentColor"/></svg>`:"")}${o}</span></li>`})():B``}

          </ul>
          ${g}
        </div>
      `)}return B`
      <div class="daily-forecast-horiz-section section">
        ${r}
      </div>
    `}_renderVerticalDailyForecastSection(){var t,e,i,o,n,s,a;const r=[],l=this._config.daily_forecast_days||5;for(var d=0;d<l;d++){const l=new Date;var c,h,u,m,p,f,_;if(l.setDate(l.getDate()+d+(this._config.option_show_current_day?0:1)),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;if(void 0!==this.forecast1&&(_=this._getForecastPropFromWeather(this.forecast1,l,"condition")),void 0===_)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&_?this._weatherIcon(_):"unknown")+".svg").replace("-night","-day"),import.meta.url);c=B`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}else{var g=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=g&&this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):void 0;if(!t||void 0===this.hass.states[t]||"unknown"===this.hass.states[t].state)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(void 0!==this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);c=B`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}if(null===(e=this._config.entity_summary_1)||void 0===e?void 0:e.match("^weather.")){void 0!==this.forecast1&&(_=this._getForecastPropFromWeather(this.forecast1,l,"condition"));var v=(g=!0)?B`
          <div class="f-summary-vert">${this.hass.states[this._config.entity_summary_1]?this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary_1],_):"---"}</div>`:""}else{const t=(g=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):void 0;v=g?B`
          <div class="f-summary-vert">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:""}(null===(i=this._config.entity_forecast_max_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(h=this._getForecastPropFromWeather(this.forecast1,l,"temperature")):h=(g=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d))].state:void 0,(null===(o=this._config.entity_forecast_min_1)||void 0===o?void 0:o.match("^weather."))?void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,l,"templow")):u=(g=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d))].state:void 0;const E=B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,C=u?B`
        <div class="f-slot-vert">
          <div class="temp-label">Min: </div>
          <div class="low-temp">${Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0})}</div>${E}
        </div>`:B`---`,S=h?B`
        <div class="f-slot-vert">
          <div class="temp-label">Max: </div>
          <div class="high-temp">${Number(h).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0})}</div>${E}
        </div>`:B`---`;if(null===(n=this._config.entity_pop_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_pop_1;var b;void 0!==this.forecast1&&(b=this._getForecastPropFromWeather(this.forecast1,l,"precipitation_probability")),m=t?B`<div class="f-slot-vert"><div class="f-label">Chance of rain </div>
        <div class="pop">${this.hass.states[t]&&void 0!==b?Math.round(Number(b)):"---"}</div><div class="unit">%</div></div>`:B``}else{const t=(g=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):void 0;m=g?B`
          <div class="f-slot-vert"><div class="f-label">Chance of rain </div>
          <div class="pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></div>`:B``}if(null===(s=this._config.entity_pos_1)||void 0===s?void 0:s.match("^weather.")){const t=this._config.entity_pos_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,l,"precipitation")),p=t?B`<div class="f-slot-vert"><div class="f-label">Possible rain </div>
        <div class="pos">${this.hass.states[t]&&void 0!==y?y:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></div>`:B``}else{const t=(g=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):void 0;p=g?B`
          <div class="f-slot-vert"><div class="f-label">Possible rain </div>
          <div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>
          <div class="unit">${this.getUOM("precipitation")}</div></div>`:B``}var x,w=B``;if(null===(a=this._config.entity_extended_1)||void 0===a?void 0:a.match("^weather.")){if(void 0!==this.forecast1)x=void 0,!0===this._config.daily_extended_use_attr?void 0!==this._config.daily_extended_name_attr&&(x=this._getForecastPropFromWeather(this.forecast1,l,this._config.daily_extended_name_attr)):x="daily_extended_use_attr: - must be set to true when entity_extended_1 is set to a weather entity",void 0!==x&&(w=x?B`<div class="f-extended">${x}</div>`:B``)}else if(g=!!(this._config.entity_extended_1&&d<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g),d<(this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days:7))if(!0===this._config.daily_extended_use_attr){const t=(g=!!this._config.entity_extended_1&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):this._config.entity_extended_1;if(t&&void 0!==this.hass.states[t]){const e=null==(g=!!(this._config.daily_extended_name_attr&&d<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.daily_extended_name_attr.match(/(\d+)(?!.*\d)/g))&&t&&this._config.daily_extended_name_attr?this.hass.states[t].attributes[this._config.daily_extended_name_attr]:g&&this._config.daily_extended_name_attr&&t?this._config.daily_extended_name_attr.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)).toLowerCase().split(".").reduce((t,e)=>void 0!==t?t[e]:void 0,this.hass.states[t].attributes):void 0;w=e?B`<div class="f-extended">${e}</div>`:B``}}else{const t=g&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):void 0;w=g?B`<div class="f-extended">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:B``}g=!!this._config.entity_fire_danger_1&&this._config.entity_fire_danger_1.match(/(\d+)(?!.*\d)/g),f=B``;const k=g&&this._config.entity_fire_danger_1?this._config.entity_fire_danger_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+d)):void 0;if(g&&k){var $=!1!==this._config.option_daily_color_fire_danger&&this.hass.states[k].attributes.color_fill?`background-color:${this.hass.states[k].attributes.color_fill}; color:${this.hass.states[k].attributes.color_text};`:"";!1===this._config.option_daily_color_fire_danger?f=g&&"unknown"!==this.hass.states[k].state?B`
          <div class="f-firedanger-vert">${k&&this.hass.states[k]?this.hass.states[k].state:"---"}</div>`:B``:(""===$&&($="font-weight:300;"),f=g&&"unknown"!==this.hass.states[k].state?B`
          <div class="f-firedanger-vert">
            <p class="fire-danger-text-color" style="${$}">${k&&this.hass.states[k]?this.hass.states[k].state.toUpperCase():"---"}</p>
          </div>`:B``)}r.push(B`
        <div class="day-vert fcasttooltip">
          <div class="day-vert-top">
            <div class="dayname-vert">${l?l.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</div>
            ${v}
          </div>
          <div>
            ${f}
          </div>
          <div class="day-vert-middle">
            <div class="day-vert-dayicon">
              ${c}
            </div>
            <div class="day-vert-temps">
              ${C}
              ${S}
            </div>
            <div class="day-vert-rain">
              ${m}
              ${p}
            </div>
          </div>
          <div class="day-vert-bottom">
            ${w}
          </div>
        </div>
      `)}return B`
      <div class="daily-forecast-vert-section section">
        ${r}
      </div>
    `}_getForecastPropFromWeather(t,e,i){const o=e.toDateString(),n=t.filter(t=>new Date(t.datetime).toDateString()===o);if(1===n.length)return void 0!==n[0][i]?String(n[0][i]):void 0;if(2===n.length){const t=n.find(t=>!0===t.daytime),e=n.find(t=>!1===t.daytime);return"templow"===i?e&&void 0!==e.temperature?String(e.temperature):void 0:t&&void 0!==t[i]?String(t[i]):void 0}}_getCardSizeDailyForecastSection(){var t=0;return!1!==this._config.show_section_daily_forecast&&("vertical"!==this._config.daily_forecast_layout?t+=146:(t+=18+87*(this._config.daily_forecast_days||5),0!==this._config.daily_extended_forecast_days&&(t+=48*Math.min(this._config.daily_forecast_days||5,this._config.daily_extended_forecast_days||7)))),t}_renderChartSection(){var t,e,i,o;const n=!0===this._config.option_show_temperature_chart,s=!0===this._config.option_show_precipitation_chart;if(!n&&!s)return B``;if(!this.forecast1||0===this.forecast1.length)return B``;const a=Math.min(this._config.daily_forecast_days||5,this.forecast1.length),r=this._config.option_show_current_day?0:1,l=[];for(let n=0;n<a;n++){const s=this.forecast1[r+n];if(!s)break;l.push({maxT:Number(null!==(t=s.temperature)&&void 0!==t?t:0),minT:Number(null!==(i=null!==(e=s.templow)&&void 0!==e?e:s.temperature)&&void 0!==i?i:0),precip:Number(null!==(o=s.precipitation)&&void 0!==o?o:0)})}if(0===l.length)return B``;const d=n?75:52,c=d+(s?16:0),h=n?l.flatMap(t=>[t.maxT,t.minT]):[],u=n?Math.max(...h):0,m=n?Math.min(...h):0,p=u-m||1,f=d-16,_=t=>16+(u-t)/p*(f-16),g=l.map(t=>{let e=_(t.maxT),i=_(t.minT);const o=i-e;if(o<18){const t=(18-o)/2;e-=t,i+=t}return{maxY:e,minY:i}}),v=100/l.length,b=t=>(t+.5)*v,y=n?(()=>{const t=g.map((t,e)=>`${b(e)},${t.maxY}`).join(" "),e=g.map((t,e)=>`${b(e)},${t.minY}`).join(" ");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 ${c}" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:${c}px;overflow:visible;pointer-events:none;"><polyline points="${t}" fill="none" stroke="rgba(255,152,0,0.9)" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"/><polyline points="${e}" fill="none" stroke="rgba(90,150,210,0.9)" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"/>`+(s?`<line x1="0" y1="${d}" x2="100" y2="${d}" stroke="rgba(115,198,239,0.2)" stroke-width="0.5" vector-effect="non-scaling-stroke"/>`:"")+"</svg>"})():"",x=l.map((t,e)=>{let i="";if(n){const o=g[e].maxY-6.5,n=g[e].minY-6.5;i+=`<div style="position:absolute;top:${o}px;left:50%;transform:translateX(-50%);border:0.8px solid rgba(255,152,0,0.9);border-radius:2.5px;background:rgba(10,14,24,0.85);padding:1px 4px;font-size:8px;color:rgba(255,165,0,1);white-space:nowrap;">${Math.round(t.maxT)}°</div>`,i+=`<div style="position:absolute;top:${n}px;left:50%;transform:translateX(-50%);border:0.8px solid rgba(90,150,210,0.9);border-radius:2.5px;background:rgba(10,14,24,0.85);padding:1px 4px;font-size:8px;color:rgba(120,180,230,1);white-space:nowrap;">${Math.round(t.minT)}°</div>`}if(s){const e=Math.max(...l.map(t=>t.precip),.1),o=.85*d;if(t.precip>0){const n=Math.max(t.precip/e*o,2),s=d-n,a=(t.precip%1==0?String(t.precip):t.precip.toFixed(1))+" мм";i=`<div style="position:absolute;top:${s}px;left:0;right:0;height:${n}px;background:rgba(151,230,255,0.18);border-radius:2px 2px 0 0;z-index:0;"></div>`+i,i+=`<div style="position:absolute;top:${d+2}px;left:50%;transform:translateX(-50%);border:0.8px solid rgba(115,198,239,0.85);border-radius:2.5px;background:rgba(10,14,24,0.9);padding:1px 4px;font-size:8px;color:rgba(151,230,255,1);white-space:nowrap;">${a}</div>`}else i+=`<div style="position:absolute;top:${d-1}px;left:0;right:0;height:2px;background:rgba(151,230,255,0.15);border-radius:1px;"></div>`}return`<div class="day-horiz" style="position:relative;height:${c}px;overflow:visible;">${i}</div>`}).join("");return B`<div class="daily-forecast-horiz-section section"
        style="position:relative;margin-top:4px;margin-bottom:4px;padding-top:0;padding-bottom:0;">
      ${we(y+x)}
    </div>`}_renderDailyForecastSection(){var t;return!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_daily_forecast)?B``:"vertical"!==this._config.daily_forecast_layout?this._renderHorizontalDailyForecastSection():this._renderVerticalDailyForecastSection()}render(){var t,e;const i=[];this.hassExtended=this.hass;const o=((t,e)=>{var i,o;if(void 0===e){if(void 0!==(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(i=null==t?void 0:t.forecast)||void 0===i?void 0:i.length)>2)return{forecast:t.forecast,type:null==t?void 0:t.type};e="daily"}if(e===(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(o=null==t?void 0:t.forecast)||void 0===o?void 0:o.length)>2)return{forecast:t.forecast,type:e}})(this._forecastEvent,null===(t=this._config)||void 0===t?void 0:t.forecast_type);this.forecast1=this._config.weather_entity&&(null===(e=null==o?void 0:o.forecast)||void 0===e?void 0:e.length)?o.forecast.slice(0,this._config.daily_forecast_days?this._config.daily_forecast_days:5):void 0,this._checkForErrors()&&i.push(this._showConfigWarning(this._error));const n=[];return void 0!==this._config.section_order&&this._config.section_order.forEach(t=>{switch(t){case"overview":n.push(this._renderOverviewSection());break;case"extended":n.push(this._renderExtendedSection());break;case"slots":n.push(this._renderSlotsSection());break;case"daily_forecast":n.push(this._renderDailyForecastSection()),n.push(this._renderChartSection())}}),i.push(B`
      <style>
        ${this.styles}
      </style>
      <ha-card class="card"
        @action=${this._handleAction}
        .actionHandler=${Se({hasHold:Wt(this._config.hold_action),hasDoubleClick:Wt(this._config.double_tap_action)})}
        tabindex=${pe(Wt(this._config.tap_action)?"0":void 0)}
        ><div class="content">
          ${n}
        </div>
      </ha-card>
    `),B`${i}`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),Ut(t,e,i,n)}(this,this.hass,this._config,t.detail.action)}get slotL1(){return this.slotValue("l1",this._config.slot_l1)}get slotL2(){return this.slotValue("l2",this._config.slot_l2)}get slotL3(){return this.slotValue("l3",this._config.slot_l3)}get slotL4(){return this.slotValue("l4",this._config.slot_l4)}get slotL5(){return this.slotValue("l5",this._config.slot_l5)}get slotL6(){return this.slotValue("l6",this._config.slot_l6)}get slotL7(){return this.slotValue("l7",this._config.slot_l7)}get slotL8(){return this.slotValue("l8",this._config.slot_l8)}get slotR1(){return this.slotValue("r1",this._config.slot_r1)}get slotR2(){return this.slotValue("r2",this._config.slot_r2)}get slotR3(){return this.slotValue("r3",this._config.slot_r3)}get slotR4(){return this.slotValue("r4",this._config.slot_r4)}get slotR5(){return this.slotValue("r5",this._config.slot_r5)}get slotR6(){return this.slotValue("r6",this._config.slot_r6)}get slotR7(){return this.slotValue("r7",this._config.slot_r7)}get slotR8(){return this.slotValue("r8",this._config.slot_r8)}slotValue(t,e){switch(e){case"pop":return this.slotPop;case"popforecast":return this.slotPopForecast;case"possible_today":return this.slotPos;case"possible_tomorrow":return this.slotPossibleTomorrow;case"rainfall":return this.slotRainfall;case"humidity":return this.slotHumidity;case"pressure":return this.slotPressure;case"observed_max":return this.slotObservedMax;case"observed_min":return this.slotObservedMin;case"forecast_max":return this.slotForecastMax;case"forecast_min":return this.slotForecastMin;case"temp_next":return this.slotTempNext;case"temp_following":return this.slotTempFollowing;case"temp_maximums":return this.slotTempMaximums;case"temp_minimums":return this.slotTempMinimums;case"uv_summary":return this.slotUvSummary;case"fire_danger":return this.slotFireDanger;case"wind":return this.slotWind;case"wind_gust":return this.slotWindGust;case"wind_kt":return this.slotWindKt;case"visibility":return this.slotVisibility;case"sun_next":return this.slotSunNext;case"sun_following":return this.slotSunFollowing;case"moon":return this.slotMoon;case"custom1":return this.slotCustom1;case"custom2":return this.slotCustom2;case"custom3":return this.slotCustom3;case"custom4":return this.slotCustom4;case"empty":return this.slotEmpty;case"remove":return this.slotRemove}switch(t){case"l1":return this.slotForecastMax;case"l2":return this.slotForecastMin;case"l3":return this.slotWind;case"l4":return this.slotPressure;case"l5":return this.slotSunNext;case"l6":case"l7":case"l8":case"r6":case"r7":case"r8":return this.slotRemove;case"r1":return this.slotPopForecast;case"r2":return this.slotHumidity;case"r3":return this.slotUvSummary;case"r4":return this.slotMoon;case"r5":return this.slotSunFollowing}return this.slotEmpty}get slotEmpty(){return B`<li>&nbsp;</li>`}get slotRemove(){return B``}get slotPopForecast(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?"unknown"===this.hass.states[this._config.entity_pop].state||"unavailable"===this.hass.states[this._config.entity_pop].state?"---":Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?B`<div class="slot-text unit">%</div>`:B``,o=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,n=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?"unknown"===this.hass.states[this._config.entity_pos].state||"unavailable"===this.hass.states[this._config.entity_pos].state?"---":this.hass.states[this._config.entity_pos].state:void 0!==o?o:"---":"---",s="---"!==n?B`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text">&nbsp;</div>
          <div class="slot-text pop-text-today">${n}</div>${s}
        </div>
      </li>
    `}get slotPop(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?B`<div class="slot-text unit">%</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text"></div>
        </div>
      </li>
    `}get slotPos(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,e=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==t?t:"---":"---",i="---"!==e?B`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosToday}&nbsp;<div class="slot-text possible_today-text">${e}</div>${i}
        </div>
      </li>
    `}get slotPossibleTomorrow(){const t=void 0!==this.forecast1&&this.forecast1.length>1?this.forecast1[1].precipitation:void 0,e=this._config.entity_possible_tomorrow&&void 0!==this.hass.states[this._config.entity_possible_tomorrow]?null===this._config.entity_possible_tomorrow.match("^weather.")?this.hass.states[this._config.entity_possible_tomorrow].state:void 0!==t?t:"---":"---",i="---"!==e?B`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosTomorrow}&nbsp;<div class="slot-text possible_tomorrow-text">${e}</div>${i}
        </div>
      </li>
    `}get slotRainfall(){const t=this.currentRainfall,e="---"!==t?B`<div class="slot-text unit"></span>${this.getUOM("precipitation")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text rainfall-text">${t}</div>${e}
        </div>
      </li>
    `}get slotHumidity(){const t=this.currentHumidity,e="---"!==t?B`<div class="slot-text unit">%</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:water-percent"></ha-icon>
          </div>
          <div class="slot-text humidity-text">${t}</div>${e}
        </div>
      </li>`}get slotPressure(){const t="---"!==this.currentPressure?B`<div class="slot-text unit">${this._config.pressure_units?this._config.pressure_units:this.getUOM("air_pressure")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:gauge"></ha-icon>
          </div>
          <div class="slot-text pressure-text">${this.currentPressure}</div>${t}
        </div>
      </li>
    `}get slotObservedMax(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${i}
        </div>
      </li>
    `}get slotObservedMin(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${i}
        </div>
      </li>
    `}get slotForecastMax(){const t=void 0!==this.forecast1?this.forecast1[0].temperature:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?null===this._config.entity_forecast_max.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",o="---"!==i?B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMax}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${o}
        </div>
      </li>
    `}get slotForecastMin(){const t=void 0!==this.forecast1?this.forecast1[0].templow:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?null===this._config.entity_forecast_min.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",o="---"!==i?B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMin}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${o}
        </div>
      </li>
    `}get slotTempNext(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_next&&void 0!==this.hass.states[this._config.entity_temp_next]?Number(this.hass.states[this._config.entity_temp_next].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",o=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state:"",n="---"!==i?B`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-next-text">${o} ${i}</div>
          ${n}
        </div>
      </li>
    `}get slotTempFollowing(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_following&&void 0!==this.hass.states[this._config.entity_temp_following]?Number(this.hass.states[this._config.entity_temp_following].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",o=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state:"",n="---"!==i?B`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-following-text">${o} ${i}</div>
          ${n}
        </div>
      </li>
    `}get slotTempMaximums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",o="---"!==e?B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObsMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${o}
          <div class="slot-text">&nbsp;(${this.localeTextFore}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${o}
          <div class="slot-text">)</div>
        </div>
      </li>
    `}get slotTempMinimums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",o="---"!==e?B`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:B``;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObsMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${o}
          <div class="slot-text">&nbsp;(${this.localeTextFore}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${o}
          <div class="slot-text">)</div>
        </div>
      </li>
    `}get slotUvSummary(){const t=this._config.entity_uv_alert_summary&&void 0!==this.hass.states[this._config.entity_uv_alert_summary]?"unknown"!==this.hass.states[this._config.entity_uv_alert_summary].state?this.hass.states[this._config.entity_uv_alert_summary].state:"Not Applicable":"---";return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
          </div>
          <div class="slot-text daytime-uv-text">${this.localeTextUVRating} ${t}</div>
        </div>
      </li>
    `}get slotFireDanger(){const t=this._config.entity_fire_danger,e=t&&void 0!==this.hass.states[t]?"unknown"!==this.hass.states[t].state?!1===this._config.option_color_fire_danger?this.hass.states[t].state:this.hass.states[t].state.toLocaleUpperCase():"Not Applicable":"---";var i=t&&!1!==this._config.option_color_fire_danger&&this.hass.states[t].attributes.color_fill?`background-color:${this.hass.states[t].attributes.color_fill}; color:${this.hass.states[t].attributes.color_text};`:"";return!1===this._config.option_color_fire_danger?B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text" style="${i}">${e} </div>
        </div>
      </li>`:(""===i&&(i="font-weight:300; padding-left:0px;"),B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text">
            <p class="fire-danger-text-color" style="${i}">${e}</p>
          </div>
        </div>
      </li>`)}get slotWind(){const t=this._config.entity_wind_speed&&this._config.option_show_beaufort?B`<div class="slot-text">BFT: ${this.currentBeaufort} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?B`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=B`<div class="slot-text unit">${this.currentWindSpeedUnit}</div>`,o=this._config.entity_wind_speed?B`<div class="slot-text">${this.currentWindSpeed}</div>${i}&nbsp;`:"",n=this._config.entity_wind_gust&&!1!==this._config.option_show_gust_in_wind?B`<div class="slot-text">(${this.localeTextGust} ${this.currentWindGust}</div>${i})`:"";return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${o}${n}
        </div>
      </li>
    `}get slotWindGust(){if(!this._config.entity_wind_gust)return B``;const t=B`<div class="slot-text unit">${this.currentWindSpeedUnit}</div>`;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy-variant"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextGust}&nbsp;</div>
          <div class="slot-text">${this.currentWindGust}</div>${t}
        </div>
      </li>
    `}get slotWindKt(){const t=this._config.entity_wind_speed_kt&&this._config.option_show_beaufort?B`<div class="slot-text">BFT: ${this.currentBeaufortKt} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?B`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=B`<div class="slot-text unit">Kt</div>`,o=this._config.entity_wind_speed_kt?B`<div class="slot-text">${this.currentWindSpeedKt}</div>${i}&nbsp;`:"",n=this._config.entity_wind_gust_kt?B`<div class="slot-text">(${this.localeTextGust} ${this.currentWindGustKt}</div>${i})`:"";return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${o}${n}
        </div>
      </li>
    `}get slotVisibility(){const t=this.currentVisibility,e="---"!==t?this.getUOM("length"):"";return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-fog"></ha-icon>
          </div>
          <div class="slot-text visibility-text">${t}</div>
          <div class="slot-text unit">${e}</div>
        </div>
      </li>
    `}get slotSunNext(){return this._config.entity_sun?this.sunSet.next:B``}get slotSunFollowing(){return this._config.entity_sun?this.sunSet.following:B``}get slotMoon(){if(!this._config.entity_moon)return B``;const t=this.hass.states[this._config.entity_moon];if(!t)return B``;const e=t.state;return B`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${this.moonPhaseIcon(e)}"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextMoonPhase(e)}</div>
        </div>
      </li>
    `}moonPhaseIcon(t){switch(t){case"new_moon":return"mdi:moon-new";case"waxing_crescent":return"mdi:moon-waxing-crescent";case"first_quarter":return"mdi:moon-first-quarter";case"waxing_gibbous":return"mdi:moon-waxing-gibbous";case"full_moon":default:return"mdi:moon-full";case"waning_gibbous":return"mdi:moon-waning-gibbous";case"last_quarter":return"mdi:moon-last-quarter";case"waning_crescent":return"mdi:moon-waning-crescent"}}localeTextMoonPhase(t){switch(this.locale){case"bg":switch(t){case"new_moon":return"Новолуние";case"waxing_crescent":return"Растящ полумесец";case"first_quarter":return"Първа четвърт";case"waxing_gibbous":return"Растяща луна";case"full_moon":return"Пълнолуние";case"waning_gibbous":return"Намаляваща луна";case"last_quarter":return"Последна четвърт";case"waning_crescent":return"Намаляващ полумесец"}break;case"ru":switch(t){case"new_moon":return"Новолуние";case"waxing_crescent":return"Растущий серп";case"first_quarter":return"Первая четверть";case"waxing_gibbous":return"Растущая луна";case"full_moon":return"Полнолуние";case"waning_gibbous":return"Убывающая луна";case"last_quarter":return"Последняя четверть";case"waning_crescent":return"Убывающий серп"}break;case"ua":switch(t){case"new_moon":return"Новий місяць";case"waxing_crescent":return"Молодий місяць";case"first_quarter":return"Перша чверть";case"waxing_gibbous":return"Зростаючий місяць";case"full_moon":return"Повний місяць";case"waning_gibbous":return"Спадаючий місяць";case"last_quarter":return"Остання чверть";case"waning_crescent":return"Старий місяць"}break;case"de":switch(t){case"new_moon":return"Neumond";case"waxing_crescent":return"Zunehmende Sichel";case"first_quarter":return"Erstes Viertel";case"waxing_gibbous":return"Zunehmender Mond";case"full_moon":return"Vollmond";case"waning_gibbous":return"Abnehmender Mond";case"last_quarter":return"Letztes Viertel";case"waning_crescent":return"Abnehmende Sichel"}break;case"fr":switch(t){case"new_moon":return"Nouvelle lune";case"waxing_crescent":return"Croissant";case"first_quarter":return"Premier quartier";case"waxing_gibbous":return"Lune croissante";case"full_moon":return"Pleine lune";case"waning_gibbous":return"Lune décroissante";case"last_quarter":return"Dernier quartier";case"waning_crescent":return"Dernier croissant"}break;case"it":switch(t){case"new_moon":return"Luna nuova";case"waxing_crescent":return"Luna crescente";case"first_quarter":return"Primo quarto";case"waxing_gibbous":return"Luna quasi piena";case"full_moon":return"Luna piena";case"waning_gibbous":return"Luna calante";case"last_quarter":return"Ultimo quarto";case"waning_crescent":return"Falce calante"}break;case"nl":switch(t){case"new_moon":return"Nieuwe maan";case"waxing_crescent":return"Wassende sikkel";case"first_quarter":return"Eerste kwartier";case"waxing_gibbous":return"Wassende maan";case"full_moon":return"Volle maan";case"waning_gibbous":return"Afnemende maan";case"last_quarter":return"Laatste kwartier";case"waning_crescent":return"Afnemende sikkel"}break;case"pl":switch(t){case"new_moon":return"Nów";case"waxing_crescent":return"Sierp rosnący";case"first_quarter":return"Pierwsza kwadra";case"waxing_gibbous":return"Rosnący księżyc";case"full_moon":return"Pełnia";case"waning_gibbous":return"Malejący księżyc";case"last_quarter":return"Ostatnia kwadra";case"waning_crescent":return"Sierp ubywający"}break;case"da":switch(t){case"new_moon":return"Nymåne";case"waxing_crescent":case"waxing_gibbous":return"Voksende måne";case"first_quarter":return"Første kvartal";case"full_moon":return"Fuldmåne";case"waning_gibbous":case"waning_crescent":return"Aftagende måne";case"last_quarter":return"Sidste kvartal"}break;case"es":switch(t){case"new_moon":return"Luna nueva";case"waxing_crescent":return"Creciente";case"first_quarter":return"Cuarto creciente";case"waxing_gibbous":return"Luna creciente";case"full_moon":return"Luna llena";case"waning_gibbous":return"Luna menguante";case"last_quarter":return"Cuarto menguante";case"waning_crescent":return"Menguante"}break;case"he":switch(t){case"new_moon":return"ירח חדש";case"waxing_crescent":return"סהר בגדילה";case"first_quarter":return"רבע ראשון";case"waxing_gibbous":return"ירח גדל";case"full_moon":return"ירח מלא";case"waning_gibbous":return"ירח קטן";case"last_quarter":return"רבע אחרון";case"waning_crescent":return"סהר בקטנה"}}return t.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}get slotCustom1(){var t=this._config.custom1_icon?this._config.custom1_icon:"mdi:help-box",e=this._config.custom1_value&&void 0!==this.hass.states[this._config.custom1_value]?this.hass.states[this._config.custom1_value].state:"unknown",i=this._config.custom1_units?this._config.custom1_units:"",o=this._config.custom1_label?this._config.custom1_label:"";return B`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        ${o?B`<div class="slot-text label-text">${o}</div>`:B``}
        <div class="slot-text custom-1-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom2(){var t=this._config.custom2_icon?this._config.custom2_icon:"mdi:help-box",e=this._config.custom2_value&&void 0!==this.hass.states[this._config.custom2_value]?this.hass.states[this._config.custom2_value].state:"unknown",i=this._config.custom2_units?this._config.custom2_units:"",o=this._config.custom2_label?this._config.custom2_label:"";return B`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        ${o?B`<div class="slot-text label-text">${o}</div>`:B``}
        <div class="slot-text custom-2-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom3(){var t=this._config.custom3_icon?this._config.custom3_icon:"mdi:help-box",e=this._config.custom3_value&&void 0!==this.hass.states[this._config.custom3_value]?this.hass.states[this._config.custom3_value].state:"unknown",i=this._config.custom3_units?this._config.custom3_units:"",o=this._config.custom3_label?this._config.custom3_label:"";return B`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        ${o?B`<div class="slot-text label-text">${o}</div>`:B``}
        <div class="slot-text custom-3-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom4(){var t=this._config.custom4_icon?this._config.custom4_icon:"mdi:help-box",e=this._config.custom4_value&&void 0!==this.hass.states[this._config.custom4_value]?this.hass.states[this._config.custom4_value].state:"unknown",i=this._config.custom4_units?this._config.custom4_units:"",o=this._config.custom4_label?this._config.custom4_label:"";return B`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        ${o?B`<div class="slot-text label-text">${o}</div>`:B``}
        <div class="slot-text custom-4-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get forecastIcon(){const t=this._config.entity_forecast_icon;return t&&this.hass.states[t]?this.hass.states[t].state:"---"}get currentTemperature(){const t=this._config.entity_temperature,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.temperature?Number(this.hass.states[t].attributes.temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---"}get currentApparentTemperature(){const t=this._config.entity_apparent_temp,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.apparent_temperature?Number(this.hass.states[t].attributes.apparent_temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---":""}get currentHumidity(){const t=this._config.entity_humidity;return t&&this.hass.states[t]?null===t.match("^weather.")?"unknown"===this.hass.states[t].state||"unavailable"===this.hass.states[t].state?"---":Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.humidity?Number(this.hass.states[t].attributes.humidity).toLocaleString(this.locale):"---":"---"}get currentRainfall(){const t=this._config.entity_rainfall,e=!0===this._config.option_today_rainfall_decimals?1:0;return t&&this.hass.states[t]?"unknown"===this.hass.states[t].state||"unavailable"===this.hass.states[t].state?"---":Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---"}get currentPressure(){const t=this._config.entity_pressure;var e=this._config.option_pressure_decimals?Math.max(Math.min(this._config.option_pressure_decimals,3),0):0;return t&&this.hass.states[t]?null===t.match("^weather.")?"unknown"===this.hass.states[t].state||"unavailable"===this.hass.states[t].state?"---":Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.pressure?Number(this.hass.states[t].attributes.pressure).toLocaleString(this.locale):"---":"---"}get currentVisibility(){const t=this._config.entity_visibility;return t&&this.hass.states[t]?null===t.match("^weather.")?"unknown"===this.hass.states[t].state||"unavailable"===this.hass.states[t].state?"---":Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.visibility?Number(this.hass.states[t].attributes.visibility).toLocaleString(this.locale):"---":"---"}get currentWindBearing(){const t=this._config.entity_wind_bearing;return t&&this.hass.states[t]?null===t.match("^weather.")?isNaN(Number(this.hass.states[t].state))?this.hass.states[t].state:this.windDirections[Math.round(Number(this.hass.states[t].state)/360*16)]:void 0!==this.hass.states[t].attributes.wind_bearing?isNaN(Number(this.hass.states[t].attributes.wind_bearing))?this.hass.states[t].attributes.wind_bearing:this.windDirections[Math.round(Number(this.hass.states[t].attributes.wind_bearing)/360*16)]:"---":"---"}get currentWindSpeed(){const t=this._config.entity_wind_speed;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindSpeedUnit(){const t=this._config.entity_wind_speed;if(!t||!this.hass.states[t])return this.getUOM("length")+"/h";if(null!==t.match("^weather.")){const e=this.hass.states[t].attributes.wind_speed_unit;return void 0!==e?e:this.getUOM("length")+"/h"}return this.getUOM("length")+"/h"}get currentWindGust(){const t=this._config.entity_wind_gust;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_gust_speed?Math.round(Number(this.hass.states[t].attributes.wind_gust_speed)).toLocaleString(this.locale):"---":"---"}get currentWindSpeedKt(){const t=this._config.entity_wind_speed_kt;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindGustKt(){const t=this._config.entity_wind_gust_kt;return t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):"---"}get windDirections(){const t=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"],i=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],o=["N","NNO","NO","ONO","O","OZO","ZO","ZZO","Z","ZZW","ZW","WZW","W","WNW","NW","NNW","N"],n=["צפון","צ-צ-מז","צפון מזרח","מז-צ-מז","מזרח","מז-ד-מז","דרום מזרח","ד-ד-מז","דרום","ד-ד-מע","דרום מערב","מע-ד-מע","מערב","מע-צ-מע","צפון מערב","צ-צ-מע","צפון"],s=["N","NNØ","NØ","ØNØ","Ø","ØSØ","SØ","SSØ","S","SSV","SV","VSV","V","VNV","NV","NNV","N"],a=["С","ССВ","СВ","ВСВ","В","ВЮВ","ЮВ","ЮЮВ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"],r=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"],l=["С","ССИ","СИ","ИСИ","И","ИЮИ","ЮИ","ЮЮИ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"];switch(this.locale){case"it":case"fr":return e;case"de":return i;case"nl":return o;case"es":return r;case"he":return n;case"ru":return a;case"da":return s;case"bg":return l;default:return t}}get currentBeaufort(){const t=this._config.entity_wind_speed;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);switch(this.hass.states[t].attributes.unit_of_measurement){case"mph":return e>=73?"12":e>=64?"11":e>=55?"10":e>=47?"9":e>=39?"8":e>=32?"7":e>=25?"6":e>=19?"5":e>=13?"4":e>=8?"3":e>=4?"2":e>=1?"1":"0";case"m/s":return e>=32.7?"12":e>=28.5?"11":e>=24.5?"10":e>=20.8?"9":e>=17.2?"8":e>=13.9?"7":e>=10.8?"6":e>=8?"5":e>=5.5?"4":e>=3.4?"3":e>=1.6?"2":e>=.5?"1":"0";default:return e>=118?"12":e>=103?"11":e>=89?"10":e>=75?"9":e>=62?"8":e>=50?"7":e>=39?"6":e>=29?"5":e>=20?"4":e>=12?"3":e>=6?"2":e>=2?"1":"0"}}return"---"}get currentBeaufortKt(){const t=this._config.entity_wind_speed_kt;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);return e>=64?"12":e>=56?"11":e>=48?"10":e>=41?"9":e>=34?"8":e>=28?"7":e>=22?"6":e>=17?"5":e>=11?"4":e>=7?"3":e>=4?"2":e>=1?"1":"0"}return"---"}get sunSet(){var t,e;switch(this.timeFormat){case"12hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"";break;case"24hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"";break;case"system":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):""}var i=new Date;return i.setDate(i.getDate()+1),this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?"above_horizon"===this.hass.states[this._config.entity_sun].state?(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,{next:B`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${t}</div>
            </li>`,following:B`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${e}</div>
            </li>`,nextText:t,followingText:e,nextIcon:"mdi:weather-sunset-down",followingIcon:"mdi:weather-sunset-up"}):((new Date).getDate()!=new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).getDate()&&(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,t=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+t),{next:B`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${e}</div>
            </li>`,following:B`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${t}</div>
            </li>`,nextText:e,followingText:t,nextIcon:"mdi:weather-sunset-up",followingIcon:"mdi:weather-sunset-down"}):{next:B``,following:B``,nextText:"",followingText:"",nextIcon:"",followingIcon:""}}get timeFormat(){var t,e;if(this._config.option_time_format&&"system"!==this._config.option_time_format)return this._config.option_time_format;const i=null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.time_format;return"12"===i?"12hour":"24"===i?"24hour":"system"}_formatDate(t){var e,i;const o=null===(i=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===i?void 0:i.date_format,n=this.locale||navigator.language;switch(o){case"DMY":default:return t.toLocaleDateString(n,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","");case"MDY":return t.toLocaleDateString(n,{weekday:"short",month:"short",day:"numeric",year:"numeric"}).replace(",","");case"YMD":return t.toLocaleDateString(n,{weekday:"short",year:"numeric",month:"short",day:"numeric"}).replace(",","")}}_weatherIcon(t){switch(t){case"sunny":case"clear":return this.iconClear;case"mostly-sunny":case"mostly_sunny":return this.iconMostlySunny;case"partly-cloudy":case"partly_cloudy":case"partlycloudy":return this.iconPartlyCloudy;case"cloudy":return this.iconCloudy;case"hazy":case"hazey":case"haze":return this.iconHazy;case"frost":return this.iconFrost;case"light-rain":case"light_rain":return this.iconLightRain;case"wind":case"windy":return this.iconWindy;case"fog":case"foggy":return this.iconFog;case"showers":case"shower":return this.iconShowers;case"rain":case"rainy":return this.iconRain;case"dust":case"dusty":return this.iconDust;case"snow":case"snowy":return this.iconSnow;case"snowy-rainy":case"snowy_rainy":case"snowyrainy":return this.iconSnowRain;case"storm":case"stormy":return this.iconStorm;case"light-showers":case"light-shower":case"light_showers":case"light_shower":return this.iconLightShowers;case"heavy-showers":case"heavy-shower":case"heavy_showers":case"heavy_shower":case"pouring":return this.iconHeavyShowers;case"tropical-cyclone":case"tropical_cyclone":case"tropicalcyclone":return this.iconCyclone;case"clear-day":case"clear_day":return this.iconClearDay;case"clear-night":case"clear_night":return this.iconClearNight;case"sleet":return this.iconSleet;case"partly-cloudy-day":case"partly_cloudy_day":return this.iconPartlyCloudyDay;case"partly-cloudy-night":case"partly_cloudy_night":return this.iconPartlyCloudyNight;case"hail":return this.iconHail;case"lightning":case"lightning-rainy":case"lightning_rainy":case"thunderstorm":return this.iconLightning;case"windy-variant":case"windy_variant":return this.iconWindyVariant}return"unknown"}get dayOrNight(){return this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?{below_horizon:"night",above_horizon:"day"}[this.hass.states[this._config.entity_sun].state]:"day"}get iconClear(){return`clear-${this.dayOrNight}`}get iconMostlySunny(){return`cloudy-1-${this.dayOrNight}`}get iconPartlyCloudy(){return`cloudy-2-${this.dayOrNight}`}get iconCloudy(){return"cloudy"}get iconHazy(){return`haze-${this.dayOrNight}`}get iconFrost(){return`frost-${this.dayOrNight}`}get iconLightRain(){return"rainy-2"}get iconWindy(){return"wind"}get iconFog(){return`fog-${this.dayOrNight}`}get iconShowers(){return`rainy-1-${this.dayOrNight}`}get iconRain(){return`rainy-3-${this.dayOrNight}`}get iconDust(){return"dust"}get iconSnow(){return"snowy-3"}get iconSnowRain(){return"snow-and-sleet-mix"}get iconStorm(){return`scattered-thunderstorms-${this.dayOrNight}`}get iconLightShowers(){return`rainy-1-${this.dayOrNight}`}get iconHeavyShowers(){return"rainy-3"}get iconCyclone(){return"tropical-storm"}get iconClearDay(){return"clear-day"}get iconClearNight(){return"clear-night"}get iconSleet(){return"rain-and-sleet-mix"}get iconPartlyCloudyDay(){return"cloudy-1-day"}get iconPartlyCloudyNight(){return"cloudy-1-night"}get iconHail(){return"hail"}get iconLightning(){return`isolated-thunderstorms-${this.dayOrNight}`}get iconWindyVariant(){return"wind"}get locale(){try{return Intl.NumberFormat(this._config.option_locale),this._config.option_locale}catch(t){return}}get localeTextFeelsLike(){switch(this.locale){case"it":return"Percepito";case"fr":return"Ressenti";case"de":return"Gefühlt";case"nl":return"Voelt als";case"pl":return"Odczuwalne";case"he":return"מרגיש כמו";case"da":return"Føles som";case"ru":return"Ощущается как";case"es":return"Sensación";case"ua":return"Відчувається як";case"bg":return"Усеща се като";default:return"Feels like"}}get localeTextObservedMax(){switch(this.locale){case"it":return"Osservata Max";case"fr":return"Observé Max";case"de":return"Beobachtet Max";case"nl":return"Opgemerkt Max";case"pl":return"Zaobserwowany Max";case"he":return"נצפה מקסימום";case"da":return"Observeret Max";case"ru":return"Наблюдаемый макс.";case"es":return"Observado Max";case"ua":return"Спостережуваний макс.";case"bg":return"Наблюдавано макс.";default:return"Observed Max"}}get localeTextObservedMin(){switch(this.locale){case"it":return"Osservata Min";case"fr":return"Observé Min";case"de":return"Beobachtet Min";case"nl":return"Opgemerkt Min";case"pl":return"Zaobserwowany Min";case"he":return"נצפה מינימום";case"da":return"Observeret Min";case"ru":return"Наблюдаемый мин.";case"es":return"Observado Min";case"ua":return"Спостережуваний мін.";case"bg":return"Наблюдавано мин.";default:return"Observed Min"}}get localeTextObsMax(){switch(this.locale){case"it":return"Oss Max";case"fr":case"pl":case"da":case"es":default:return"Obs Max";case"de":return"Beob Max";case"nl":return"Opgem Max";case"he":return"נצפה מקס";case"ru":return"Набл макс.";case"ua":return"Спост макс.";case"bg":return"Набл. макс."}}get localeTextObsMin(){switch(this.locale){case"it":return"Oss Min";case"fr":case"pl":case"da":case"es":default:return"Obs Min";case"de":return"Beob Min";case"nl":return"Opgem Min";case"he":return"נצפה מינ";case"ru":return"Набл мин.";case"ua":return"Спост мін.";case"bg":return"Набл. мин."}}get localeTextForecastMax(){switch(this.locale){case"it":return"Max oggi";case"fr":return"Max aujourd'hui";case"de":return"Max heute";case"nl":return"Max vandaag";case"pl":return"Maks Temperatura";case"he":return"מקסימלי היום";case"da":return"Højeste i dag";case"ru":return"Макс сегодня";case"es":return"Máx hoy";case"ua":return"Макс сьогодні";case"bg":return"Макс днес";default:return"Forecast Max"}}get localeTextForecastMin(){switch(this.locale){case"it":return"Min oggi";case"fr":return"Min aujourd'hui";case"de":return"Min heute";case"nl":return"Min vandaag";case"pl":return"Min Temperatura";case"he":return"דקות היום";case"da":return"Laveste i dag";case"ru":return"Мин сегодня";case"es":return"Mín hoy";case"ua":return"Мін сьогодні";case"bg":return"Мин днес";default:return"Forecast Min"}}get localeTextPosToday(){switch(this.locale){case"it":return"Previsione";case"fr":return"Prévoir";case"de":return"Vorhersage";case"nl":return"Prognose";case"pl":return"Prognoza";case"he":return"תַחֲזִית";case"da":return"Vejrudsigt";case"ru":case"ua":return"Прогноз";case"es":return"Previsión";case"bg":return"Прогноза";default:return"Forecast"}}get localeTextPosTomorrow(){switch(this.locale){case"it":return"Prev per domani";case"fr":return"Prév demain";case"de":case"nl":return"Prog morgen";case"pl":return"Prog jutro";case"he":return"תחזית מחר";case"da":return"Prog i morgen";case"ru":case"ua":return"Прогноз на завтра";case"es":return"Prev mañana";case"bg":return"Прогноза за утре";default:return"Fore Tom"}}get localeTextFore(){switch(this.locale){case"it":case"es":return"Prev";case"fr":return"Prév";case"de":case"nl":case"pl":case"da":return"Prog";case"he":return"תַחֲזִית";case"ru":case"ua":return"Прогноз";case"bg":return"Прогноза";default:return"Fore"}}get localeTextUVRating(){switch(this.locale){case"it":case"fr":case"de":case"nl":case"pl":case"he":case"da":case"es":case"bg":default:return"UV";case"ru":case"ua":return"УФ"}}get localeTextFireDanger(){switch(this.locale){case"it":return"Fuoco";case"fr":return"Feu";case"de":return"Feuer";case"nl":case"da":return"Brand";case"pl":return"Ogień";case"he":return"אֵשׁ";case"ru":return"Огонь";case"es":return"Fuego";case"ua":return"Вогонь";case"bg":return"Пожар";default:return"Fire"}}get localeTextGust(){switch(this.locale){case"it":return"Raffica";case"fr":return"Rafale";case"de":return"Böe";case"nl":return"Windstoot";case"pl":return"Poryw";case"he":return"נשיבה";case"da":return"Vindstød";case"ru":return"Порыв";case"es":return"Ráfaga";case"ua":return"Порив";case"bg":return"Пориви";default:return"Gust"}}getUOM(t){const e=this.hass.config.unit_system.length;switch(t){case"air_pressure":const i=this._config.entity_pressure;return i&&this.hass.states[i]?null===i.match("^weather.")?void 0!==this.hass.states[i].attributes.unit_of_measurement?this.hass.states[i].attributes.unit_of_measurement:"km"===e?"hPa":"mbar":void 0!==this.hass.states[i].attributes.pressure_unit?this.hass.states[i].attributes.pressure_unit:"--":"--";case"length":return e;case"precipitation":return"km"===e?"mm":"in";case"intensity":return"km"===e?"mm/h":"in/h";default:return this.hass.config.unit_system[t]||""}}_showConfigWarning(t){return B`
      <hui-warning>
        <div>Weather Card</div>
        ${t.map(t=>B`<div>${t}</div>`)}
      </hui-warning>
    `}_showWarning(t){return B`<hui-warning>${t}</hui-warning>`}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),B`${e}`}get styles(){const t=this._config.option_tooltips?"visible":"hidden",e=this._config.temp_font_weight||"300",i=this._config.temp_font_size||"4em",o=this._config.forecast_text_font_size||"21px",n=this._config.forecast_text_alignment||"center";return ht`
      ha-card {
        cursor: pointer;
      }

      .card {
        padding: 8px 16px 8px 16px;
      }
      .content {
        align-items: center;
      }
      .card-header {
        font-size: 1.5em;
        color: var(--primary-text-color);
      }
      .section {
        margin: -1px;
        border: 1px solid transparent;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .updated {
        font-size: 0.9em;
        font-weight: 300;
        color: var(--primary-text-color);
      }
      .overview-top {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
      .stacked {
        position: absolute;
      }
      .top-left {
        display: flex;
        flex-direction: column;
        height: 120px;
      }
      .top-left-obs {
        display: flex;
        flex-direction: column;
      }
      .big-icon {
        height: 120px;
        width: 140px;
        position: relative;
      }
      .unknown-forecast {
        position: relative;
        top: -30px;
        text-align: center;
      }
      .currentTemps {
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        height: 60px;
      }
      .current-temp {
        display: table-row;
        margin-left: auto;
        padding: 2px 0px;
      }
      .temp {
        display:table-cell;
        font-weight: ${ct(e)};
        font-size: ${ct(i)};
        color: var(--primary-text-color);
        position: relative;
        line-height: 74%;
      }
      .unit-temp-big {
        display: table-cell;
        vertical-align: top;
        font-weight: ${ct(e)};
        font-size: 1.5em;
        color: var(--primary-text-color);
        position: relative;
        line-height: 74%;
      }
      .apparent-temp {
        display: table-row;
        margin-left: auto;
        height: 24px;
      }
      .apparent {
        display: table-cell;
        color: var(--primary-text-color);
        font-weight: 300;
        position: relative;
        line-height: 24px;
      }
      .unit-temp-small {
        display: table-cell;
        vertical-align: top;
        font-size: 10.5px;
        color: var(--primary-text-color);
        position: relative;
        line-height: 14px;
        padding-top: 3.6px;
        padding-left: 1px;
      }
      .line {
        margin-top : 7px;
        margin-bottom: -9px;
        color: var(--primary-text-color);
      }
      .forecast-text {
        font-size: ${ct(o)};
        text-align: ${ct(n)};
        line-height: 25px;
      }
      .forecast-text-right {
        font-size: ${ct(o)};
        text-align: ${ct(n)};
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        line-height: 25px;
        margin-left: -40px;
      }
      .variations {
        display: flex;
        flex-flow: row wrap;
        font-weight: 300;
        color: var(--primary-text-color);
        list-style: none;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 8px;
      }
      .slot-list-item-1 {
        min-width:50%;
        padding-right: 8px;
      }
      .slot-list {
        list-style: none;
        padding: 0;
      }
      .slot-list li {
        height:24px;
      }
      .variations-ugly {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        font-weight: 300;
        color: var(--primary-text-color);
        list-style: none;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 8px;
      }
      .ha-icon {
        height: 24px;
        margin-right: 5px;
        color: var(--paper-item-icon-color);
      }
      .unit {
        font-size: 0.8em;
        display: table-cell;
        padding-left: 1px;
      }
      .slot {
        display: table-row;
      }
      .slot-icon {
        display: table-cell;
        position: relative;
        height: 18px;
        padding-right: 5px;
        color: var(--paper-item-icon-color);
      }
      .slot-text {
        display: table-cell;
        position: relative;
      }
      .label-text {
        display: table-cell;
        position: relative;
        font-size: 0.85em;
        color: var(--secondary-text-color);
        padding-right: 4px;
      }
      .fire-danger-text-color {
        display: inline-block;
        height: 18px;
        line-height: 20px;
        text-align: left;
        vertical-align: middle;
        margin: 0;
        padding-left: 4px;
        font-weight: 600;
        width: 108px;
      }
      .daily-forecast-horiz-section {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        margin: 0;
        clear: both;
      }
      .daily-forecast-horiz-section .day-horiz:nth-last-child(1) {
        border-right: transparent;
      }
      .day-horiz {
        flex: 1;
        float: left;
        text-align: center;
        color: var(--primary-text-color);
        border-right: 0.5px solid rgba(217,217,217,0.25);
        margin-right: -0.5px;
        box-sizing: border-box;
      }
      .daily-forecast-vert-section {
        display: flex;
        flex-flow: column nowrap;
        margin: 0 auto;
        clear: both;
      }
      .day-vert {
        flex: 1;
        color: var(--primary-text-color);
        border-top: 1px solid #d9d9d9;
        line-height: 24px;
        box-sizing: border-box;
        padding-bottom: 8px;
      }
      .day-vert-top {
        display: flex;
        width: 100%;
      }
      .day-vert-middle {
        display: flex;
        float: left;
        width: 100%;
      }
      .day-vert-bottom {
        text-align: left;
        float: left;
      }
      .day-vert-dayicon {
        width: 40px;
        text-align: left;
        float: left;
        margin-bottom: -8px;
      }
      .day-vert-temps {
        flex: 1;
        text-align: left;
        float: left;
        padding-left: 1em;
        padding-top: 0.5em;
      }
      .day-vert-rain {
        flex: 2;
        text-align: left;
        float: left;
        padding-left: 1em;
        padding-top: 0.5em;
      }
      .dayname {
        text-transform: uppercase;
      }
      .dayname-vert {
        min-width: 40px;
        max-width: 40px;
        text-transform: uppercase;
      }
      .icon {
        width: 49px;
        height: 42px;
        margin: auto;
        display: inline-block;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        text-indent: -9999px;
      }
      .f-slot-horiz {
        display: inline-block;
        text-align: center;
        list-style: none;
        overflow: hidden;
        font-weight: 300;
        padding: 0;
        margin-block-start: 0;
        margin-block-end: -12px;
      }
      .f-slot-horiz-text {
        height:20px;
      }
      .f-slot-horiz-icon {
        height:50px;
      }
      .f-summary-vert {
        padding-left: 1em;
        font-weight: 400;
      }
      .f-firedanger-vert {
        text-align: right;
        font-weight: 300;
        margin-top: -24px;
      }
      .f-slot-vert {
        display: table;
        overflow: hidden;
        height: 24px;
        font-weight: 300;
      }
      .f-slot-minmax {
        width: 100%;
      }
      .chart-section {
        padding: 4px 0;
      }
      .f-extended {
        display: inline-table;
        font-size: 13px;
        font-weight: 300;
        padding-top: 8px;
        line-height:20px;
      }
      .extended-section .f-extended {
        padding-top: 0;
      }
      .highTemp {
        display: table-cell;
        font-weight: bold;
      }
      .lowTemp {
        display: table-cell;
        font-weight: 300;
      }
      .slash {
        padding-left: 2px;
        padding-right: 2px;
      }
      .high-temp {
        display: table-cell;
        font-weight: bold;
        width: 21px;
        text-align: right;
      }
      .low-temp {
        display: table-cell;
        font-weight: 300;
        width: 21px;
        text-align: right;
      }
      .temp-label {
        display: table-cell;
        width: 32px;
        font-weight: 300;
      }
      .f-label {
        display: table-cell;
        white-space: nowrap;
        padding-right: 0.2em;
      }
      .pop {
        display: table-cell;
        font-weight: 300;
        color: var(--primary-text-color);
      }
      .pos {
        display: table-cell;
        font-weight: 300;
        color: var(--primary-text-color);
        white-space: nowrap;
      }
      .fcasttooltip {
        position: relative;
        display: inline-block;
      }
      .fcasttooltip .fcasttooltipblock {
        visibility: hidden;
        background-color: #4B9BEF;
        color: #FFFFFF;
        text-align: center;
        border-radius: 6px;
        border-style: solid;
        border-color: #FFA100;
        border-width: 1px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 107%;
        margin-left: -2px;
      }
      .fcasttooltip:hover .fcasttooltipblock {
        visibility: ${ct(t)};
      }
      .fcasttooltiptext {
        padding-left: 8px;
        padding-right: 8px;
      }
    `}};o([Tt()],ke.prototype,"_subscribed",void 0),o([Tt()],ke.prototype,"_forecastEvent",void 0),o([At({attribute:!1})],ke.prototype,"hass",void 0),o([Tt()],ke.prototype,"_config",void 0),o([Tt()],ke.prototype,"_cardWidth",void 0),ke=o([kt("platinum-weather-card")],ke);var Ie="M11 20V22H3C1.9 22 1 21.1 1 20V4C1 2.9 1.9 2 3 2H21C22.1 2 23 2.9 23 4V12.1L22.8 11.9C22.3 11.4 21.7 11.1 21 11.1V6H3V20H11M21.4 13.3L22.7 14.6C22.9 14.8 22.9 15.2 22.7 15.4L21.7 16.4L19.6 14.3L20.6 13.3C20.7 13.2 20.8 13.1 21 13.1C21.2 13.1 21.3 13.2 21.4 13.3M21.1 16.9L15.1 23H13V20.9L19.1 14.8L21.1 16.9Z",Ae="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",Te="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",Oe="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";const Fe=["overview","extended","slots","daily_forecast"];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Re=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),Le={ROOT:"mdc-form-field"},De={LABEL_SELECTOR:".mdc-form-field > label"},Ne=function(t){function o(e){var n=t.call(this,i(i({},o.defaultAdapter),e))||this;return n.click=function(){n.handleClick()},n}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return De},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},o.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},o.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){t.adapter.deactivateInputRipple()})},o}(Re);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Me=t=>t.nodeType===Node.ELEMENT_NODE;function Pe(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}const Ve=()=>{},ze={get passive(){return!1}};document.addEventListener("x",Ve,ze),document.removeEventListener("x",Ve);const Be=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i},He=t=>{const e=Be();if(!e.length)return!1;const i=e[e.length-1],o=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const s=t=>{n=t.composedPath()};return document.body.addEventListener("check-if-focused",s),i.dispatchEvent(o),document.body.removeEventListener("check-if-focused",s),-1!==n.indexOf(t)};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ue extends Ct{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var We,je;const qe=null!==(je=null===(We=window.ShadyDOM)||void 0===We?void 0:We.inUse)&&void 0!==je&&je;class Ge extends Ue{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=t=>{this.disabled||this.setFormData(t.formData)}}findFormElement(){if(!this.shadowRoot||qe)return null;const t=this.getRootNode().querySelectorAll("form");for(const e of Array.from(t))if(e.contains(this))return e;return null}connectedCallback(){var t;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}Ge.shadowRootOptions={mode:"open",delegatesFocus:!0},o([At({type:Boolean})],Ge.prototype,"disabled",void 0);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Xe=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)},Ye=be(class extends ye{constructor(t){var e;if(super(t),t.type!==fe||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const n=t.element.classList;this.it.forEach(t=>{t in e||(n.remove(t),this.it.delete(t))});for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(n.add(t),this.it.add(t)):(n.remove(t),this.it.delete(t)))}return H}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ke extends Ue{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=Ne}createAdapter(){return{registerInteractionHandler:(t,e)=>{this.labelEl.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.labelEl.removeEventListener(t,e)},activateInputRipple:async()=>{const t=this.input;if(t instanceof Ge){const e=await t.ripple;e&&e.startPress()}},deactivateInputRipple:async()=>{const t=this.input;if(t instanceof Ge){const e=await t.ripple;e&&e.endPress()}}}}get input(){var t,e;return null!==(e=null===(t=this.slottedInputs)||void 0===t?void 0:t[0])&&void 0!==e?e:null}render(){const t={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return B`
      <div class="mdc-form-field ${Ye(t)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const t=this.input;t&&(t.focus(),t.click())}}o([At({type:Boolean})],Ke.prototype,"alignEnd",void 0),o([At({type:Boolean})],Ke.prototype,"spaceBetween",void 0),o([At({type:Boolean})],Ke.prototype,"nowrap",void 0),o([At({type:String}),Xe(async function(t){var e;null===(e=this.input)||void 0===e||e.setAttribute("aria-label",t)})],Ke.prototype,"label",void 0),o([Rt(".mdc-form-field")],Ke.prototype,"mdcRoot",void 0),o([Mt("",!0,"*")],Ke.prototype,"slottedInputs",void 0),o([Rt("label")],Ke.prototype,"labelEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ze=ht`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`,Qe={"mwc-formfield":class extends Ke{static get styles(){return Ze}}};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Je="Unknown",ti="Backspace",ei="Enter",ii="Spacebar",oi="PageUp",ni="PageDown",si="End",ai="Home",ri="ArrowLeft",li="ArrowUp",di="ArrowRight",ci="ArrowDown",hi="Delete",ui="Escape",mi="Tab",pi=new Set;pi.add(ti),pi.add(ei),pi.add(ii),pi.add(oi),pi.add(ni),pi.add(si),pi.add(ai),pi.add(ri),pi.add(li),pi.add(di),pi.add(ci),pi.add(hi),pi.add(ui),pi.add(mi);var fi=8,_i=13,gi=32,vi=33,bi=34,yi=35,xi=36,wi=37,$i=38,Ei=39,Ci=40,Si=46,ki=27,Ii=9,Ai=new Map;Ai.set(fi,ti),Ai.set(_i,ei),Ai.set(gi,ii),Ai.set(vi,oi),Ai.set(bi,ni),Ai.set(yi,si),Ai.set(xi,ai),Ai.set(wi,ri),Ai.set($i,li),Ai.set(Ei,di),Ai.set(Ci,ci),Ai.set(Si,hi),Ai.set(ki,ui),Ai.set(Ii,mi);var Ti,Oi,Fi=new Set;function Ri(t){var e=t.key;if(pi.has(e))return e;var i=Ai.get(t.keyCode);return i||Je}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */Fi.add(oi),Fi.add(ni),Fi.add(si),Fi.add(ai),Fi.add(ri),Fi.add(li),Fi.add(di),Fi.add(ci);var Li="mdc-list-item--activated",Di="mdc-list-item",Ni="mdc-list-item--disabled",Mi="mdc-list-item--selected",Pi="mdc-list-item__text",Vi="mdc-list-item__primary-text",zi="mdc-list";(Ti={})[""+Li]="mdc-list-item--activated",Ti[""+Di]="mdc-list-item",Ti[""+Ni]="mdc-list-item--disabled",Ti[""+Mi]="mdc-list-item--selected",Ti[""+Vi]="mdc-list-item__primary-text",Ti[""+zi]="mdc-list";var Bi=((Oi={})[""+Li]="mdc-deprecated-list-item--activated",Oi[""+Di]="mdc-deprecated-list-item",Oi[""+Ni]="mdc-deprecated-list-item--disabled",Oi[""+Mi]="mdc-deprecated-list-item--selected",Oi[""+Pi]="mdc-deprecated-list-item__text",Oi[""+Vi]="mdc-deprecated-list-item__primary-text",Oi[""+zi]="mdc-deprecated-list",Oi),Hi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+Di+" button:not(:disabled),\n    ."+Di+" a,\n    ."+Bi[Di]+" button:not(:disabled),\n    ."+Bi[Di]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+Di+" button:not(:disabled),\n    ."+Di+" a,\n    ."+Di+' input[type="radio"]:not(:disabled),\n    .'+Di+' input[type="checkbox"]:not(:disabled),\n    .'+Bi[Di]+" button:not(:disabled),\n    ."+Bi[Di]+" a,\n    ."+Bi[Di]+' input[type="radio"]:not(:disabled),\n    .'+Bi[Di]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Ui={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},Wi=["input","button","textarea","select"],ji=function(t){var e=t.target;if(e){var i=(""+e.tagName).toLowerCase();-1===Wi.indexOf(i)&&t.preventDefault()}};function qi(t,e){for(var i=new Map,o=0;o<t;o++){var n=e(o).trim();if(n){var s=n[0].toLowerCase();i.has(s)||i.set(s,[]),i.get(s).push({text:n.toLowerCase(),index:o})}}return i.forEach(function(t){t.sort(function(t,e){return t.index-e.index})}),i}function Gi(t,e){var i,o=t.nextChar,n=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,a=t.focusedItemIndex,r=t.skipFocus,l=t.isItemAtIndexDisabled;return clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){!function(t){t.typeaheadBuffer=""}(e)},Ui.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+o,i=1===e.typeaheadBuffer.length?function(t,e,i,o){var n=o.typeaheadBuffer[0],s=t.get(n);if(!s)return-1;if(n===o.currentFirstChar&&s[o.sortedIndexCursor].index===e){o.sortedIndexCursor=(o.sortedIndexCursor+1)%s.length;var a=s[o.sortedIndexCursor].index;if(!i(a))return a}o.currentFirstChar=n;var r,l=-1;for(r=0;r<s.length;r++)if(!i(s[r].index)){l=r;break}for(;r<s.length;r++)if(s[r].index>e&&!i(s[r].index)){l=r;break}if(-1!==l)return o.sortedIndexCursor=l,s[o.sortedIndexCursor].index;return-1}(s,a,l,e):function(t,e,i){var o=i.typeaheadBuffer[0],n=t.get(o);if(!n)return-1;var s=n[i.sortedIndexCursor];if(0===s.text.lastIndexOf(i.typeaheadBuffer,0)&&!e(s.index))return s.index;var a=(i.sortedIndexCursor+1)%n.length,r=-1;for(;a!==i.sortedIndexCursor;){var l=n[a],d=0===l.text.lastIndexOf(i.typeaheadBuffer,0),c=!e(l.index);if(d&&c){r=a;break}a=(a+1)%n.length}if(-1!==r)return i.sortedIndexCursor=r,n[i.sortedIndexCursor].index;return-1}(s,l,e),-1===i||r||n(i),i}function Xi(t){return t.typeaheadBuffer.length>0}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Yi={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},Ki=function(t){function o(e){var n=t.call(this,i(i({},o.defaultAdapter),e))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return Yi},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},o.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},o.prototype.getWidth=function(){return this.adapter.getWidth()},o.prototype.shake=function(t){var e=o.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(e):this.adapter.removeClass(e)},o.prototype.float=function(t){var e=o.cssClasses,i=e.LABEL_FLOAT_ABOVE,n=e.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(n))},o.prototype.setRequired=function(t){var e=o.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},o.prototype.handleShakeAnimationEnd=function(){var t=o.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},o}(Re);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Zi=be(class extends ye{constructor(t){switch(super(t),this.foundation=null,this.previousPart=null,t.type){case fe:case ge:break;default:throw new Error("FloatingLabel directive only support attribute and property parts")}}update(t,[e]){if(t!==this.previousPart){this.foundation&&this.foundation.destroy(),this.previousPart=t;const e=t.element;e.classList.add("mdc-floating-label");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),getWidth:()=>t.scrollWidth,registerInteractionHandler:(e,i)=>{t.addEventListener(e,i)},deregisterInteractionHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e);this.foundation=new Ki(i),this.foundation.init()}return this.render(e)}render(t){return this.foundation}});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qi={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},Ji=function(t){function o(e){var n=t.call(this,i(i({},o.defaultAdapter),e))||this;return n.transitionEndHandler=function(t){n.handleTransitionEnd(t)},n}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return Qi},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},o.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},o.prototype.activate=function(){this.adapter.removeClass(Qi.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Qi.LINE_RIPPLE_ACTIVE)},o.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},o.prototype.deactivate=function(){this.adapter.addClass(Qi.LINE_RIPPLE_DEACTIVATING)},o.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(Qi.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter.removeClass(Qi.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Qi.LINE_RIPPLE_DEACTIVATING))},o}(Re);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const to=be(class extends ye{constructor(t){switch(super(t),this.previousPart=null,this.foundation=null,t.type){case fe:case ge:return;default:throw new Error("LineRipple only support attribute and property parts.")}}update(t,e){if(this.previousPart!==t){this.foundation&&this.foundation.destroy(),this.previousPart=t;const e=t.element;e.classList.add("mdc-line-ripple");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),hasClass:e=>t.classList.contains(e),setStyle:(e,i)=>t.style.setProperty(e,i),registerEventHandler:(e,i)=>{t.addEventListener(e,i)},deregisterEventHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e);this.foundation=new Ji(i),this.foundation.init()}return this.render()}render(){return this.foundation}});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var eo,io,oo={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},no={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},so={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(eo||(eo={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(io||(io={}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ao={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},ro={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},lo={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330},co=function(t){function o(e,n){void 0===n&&(n={});var s=t.call(this,i(i({},o.defaultAdapter),e))||this;return s.disabled=!1,s.isMenuOpen=!1,s.useDefaultValidation=!0,s.customValidity=!0,s.lastSelectedIndex=lo.UNSET_INDEX,s.clickDebounceTimeout=0,s.recentlyClicked=!1,s.leadingIcon=n.leadingIcon,s.helperText=n.helperText,s}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return ao},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return lo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return ro},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),o.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},o.prototype.setSelectedIndex=function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1),t>=this.adapter.getMenuItemCount()||(t===lo.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),e&&this.adapter.closeMenu(),i||this.lastSelectedIndex===t||this.handleChange(),this.lastSelectedIndex=t)},o.prototype.setValue=function(t,e){void 0===e&&(e=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,e)},o.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),e=this.adapter.getMenuItemValues();return t!==lo.UNSET_INDEX?e[t]:""},o.prototype.getDisabled=function(){return this.disabled},o.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(ao.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(ao.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},o.prototype.openMenu=function(){this.adapter.addClass(ao.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},o.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},o.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,e=this.adapter.hasClass(ao.FOCUSED),i=t||e,o=this.adapter.hasClass(ao.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(o)}},o.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(t,!1,!0)},o.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var t=this.getSelectedIndex(),e=t>=0?t:0;this.adapter.focusMenuItemAtIndex(e)}},o.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},o.prototype.handleMenuClosed=function(){this.adapter.removeClass(ao.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},o.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(ao.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},o.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},o.prototype.handleFocus=function(){this.adapter.addClass(ao.FOCUSED),this.layout(),this.adapter.activateBottomLine()},o.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},o.prototype.handleClick=function(t){this.disabled||this.recentlyClicked||(this.setClickDebounceTimeout(),this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(t),this.openMenu()))},o.prototype.handleKeydown=function(t){if(!this.isMenuOpen&&this.adapter.hasClass(ao.FOCUSED)){var e=Ri(t)===ei,i=Ri(t)===ii,o=Ri(t)===li,n=Ri(t)===ci;if(!(t.ctrlKey||t.metaKey)&&(!i&&t.key&&1===t.key.length||i&&this.adapter.isTypeaheadInProgress())){var s=i?" ":t.key,a=this.adapter.typeaheadMatchItem(s,this.getSelectedIndex());return a>=0&&this.setSelectedIndex(a),void t.preventDefault()}(e||i||o||n)&&(o&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):n&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),t.preventDefault())}},o.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var e=this.adapter.hasClass(ao.FOCUSED);if(t){var i=lo.LABEL_SCALE,o=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(o)}else e||this.adapter.closeOutline()}},o.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},o.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},o.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},o.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},o.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(ao.INVALID),this.adapter.removeMenuClass(ao.MENU_INVALID)):(this.adapter.addClass(ao.INVALID),this.adapter.addMenuClass(ao.MENU_INVALID)),this.syncHelperTextValidity(t)},o.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(ao.REQUIRED)&&!this.adapter.hasClass(ao.DISABLED)?this.getSelectedIndex()!==lo.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},o.prototype.setRequired=function(t){t?this.adapter.addClass(ao.REQUIRED):this.adapter.removeClass(ao.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},o.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},o.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(io.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(ao.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(ao.INVALID)),this.layout(),this.layoutOptions()},o.prototype.blur=function(){this.adapter.removeClass(ao.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(ao.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},o.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var e=this.helperText.isVisible(),i=this.helperText.getId();e&&i?this.adapter.setSelectAnchorAttr(ro.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr(ro.ARIA_DESCRIBEDBY)}},o.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},lo.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},o}(Re),ho=co;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const uo=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class mo extends Ge{constructor(){super(...arguments),this.mdcFoundationClass=ho,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.name="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalMenuWidth=!1,this.isUiValid=!0,this.fixedMenuPosition=!1,this.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},this.sortedIndexByFirstChar=new Map,this.menuElement_=null,this.listeners=[],this.onBodyClickBound=()=>{},this._menuUpdateComplete=null,this.valueSetDirectly=!1,this.validityTransform=null,this._validity=uo()}get items(){return this.menuElement_||(this.menuElement_=this.menuElement),this.menuElement_?this.menuElement_.items:[]}get selected(){const t=this.menuElement;return t?t.selected:null}get index(){const t=this.menuElement;return t?t.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){const t={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--filled":!this.outlined,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},e={"mdc-select__menu--invalid":!this.isUiValid},i=this.label?"label":void 0,o=this.shouldRenderHelperText?"helper-text":void 0;return B`
      <div
          class="mdc-select ${Ye(t)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${pe(i)}
            aria-required=${this.required}
            aria-describedby=${pe(o)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined?this.renderOutline():this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${Ye(e)}"
            activatable
            .fullwidth=${!this.fixedMenuPosition&&!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`}renderRipple(){return this.outlined?U:B`
      <span class="mdc-select__ripple"></span>
    `}renderOutline(){return this.outlined?B`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:U}renderLabel(){return this.label?B`
      <span
          .floatingLabelFoundation=${Zi(this.label)}
          id="label">${this.label}</span>
    `:U}renderLeadingIcon(){return this.icon?B`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`:U}renderLineRipple(){return this.outlined?U:B`
      <span .lineRippleFoundation=${to()}></span>
    `}renderHelperText(){if(!this.shouldRenderHelperText)return U;const t=this.validationMessage&&!this.isUiValid;return B`
        <p
          class="mdc-select-helper-text ${Ye({"mdc-select-helper-text--validation-msg":t})}"
          id="helper-text">${t?this.validationMessage:this.helper}</p>`}createAdapter(){return Object.assign(Object.assign({},Pe(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},hasLabel:()=>!!this.label,floatLabel:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(t)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)},hasOutline:()=>this.outlined,notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:t=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}},notifyChange:async t=>{if(!this.valueSetDirectly&&t===this.value)return;this.valueSetDirectly=!1,this.value=t,await this.updateComplete;const e=new Event("change",{bubbles:!0});this.dispatchEvent(e)},setSelectedText:t=>this.selectedText=t,isSelectAnchorFocused:()=>{const t=this.anchorElement;if(!t)return!1;return t.getRootNode().activeElement===t},getSelectAnchorAttr:t=>{const e=this.anchorElement;return e?e.getAttribute(t):null},setSelectAnchorAttr:(t,e)=>{const i=this.anchorElement;i&&i.setAttribute(t,e)},removeSelectAnchorAttr:t=>{const e=this.anchorElement;e&&e.removeAttribute(t)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},addMenuClass:()=>{},removeMenuClass:()=>{},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const t=this.menuElement;t&&(t.corner="BOTTOM_START")},setMenuWrapFocus:t=>{const e=this.menuElement;e&&(e.wrapFocus=t)},focusMenuItemAtIndex:t=>{const e=this.menuElement;if(!e)return;const i=e.items[t];i&&i.focus()},getMenuItemCount:()=>{const t=this.menuElement;return t?t.items.length:0},getMenuItemValues:()=>{const t=this.menuElement;if(!t)return[];return t.items.map(t=>t.value)},getMenuItemTextAtIndex:t=>{const e=this.menuElement;if(!e)return"";const i=e.items[t];return i?i.text:""},getSelectedIndex:()=>this.index,setSelectedIndex:()=>{},isTypeaheadInProgress:()=>Xi(this.typeaheadState),typeaheadMatchItem:(t,e)=>{if(!this.menuElement)return-1;const i={focusItemAtIndex:t=>{this.menuElement.focusItemAtIndex(t)},focusedItemIndex:e||this.menuElement.getFocusedItemIndex(),nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:!1,isItemAtIndexDisabled:t=>this.items[t].disabled},o=Gi(i,this.typeaheadState);return-1!==o&&this.select(o),o}})}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=uo(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e)}return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}async getUpdateComplete(){await this._menuUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){const t=this.menuElement;if(t&&(this._menuUpdateComplete=t.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),!this.selected){!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:!0}).length&&(await new Promise(t=>requestAnimationFrame(t)),await this.layout());const t=this.items.length&&""===this.items[0].value;if(!this.value&&t)return void this.select(0);this.selectByValue(this.value)}this.sortedIndexByFirstChar=qi(this.items.length,t=>this.items[t].text)}onItemsUpdated(){this.sortedIndexByFirstChar=qi(this.items.length,t=>this.items[t].text)}select(t){const e=this.menuElement;e&&e.select(t)}selectByValue(t){let e=-1;for(let i=0;i<this.items.length;i++){if(this.items[i].value===t){e=i;break}}this.valueSetDirectly=!0,this.select(e),this.mdcFoundation.handleChange()}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)t.target.removeEventListener(t.name,t.cb)}focus(){const t=new CustomEvent("focus"),e=this.anchorElement;e&&(e.dispatchEvent(t),e.focus())}blur(){const t=new CustomEvent("blur"),e=this.anchorElement;e&&(e.dispatchEvent(t),e.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const t=this.menuElement;t&&!t.open&&this.reportValidity()}onClick(t){if(this.mdcFoundation){this.focus();const e=t.target.getBoundingClientRect();let i=0;i="touches"in t?t.touches[0].clientX:t.clientX;const o=i-e.left;this.mdcFoundation.handleClick(o)}}onKeydown(t){const e=Ri(t)===li,i=Ri(t)===ci;if(i||e){const o=e&&this.index>0,n=i&&this.index<this.items.length-1;return o?this.select(this.index-1):n&&this.select(this.index+1),t.preventDefault(),void this.mdcFoundation.openMenu()}this.mdcFoundation.handleKeydown(t)}handleTypeahead(t){if(!this.menuElement)return;const e=this.menuElement.getFocusedItemIndex(),i=Me(t.target)?t.target:null,o={event:t,focusItemAtIndex:t=>{this.menuElement.focusItemAtIndex(t)},focusedItemIndex:e,isTargetListItem:!!i&&i.hasAttribute("mwc-list-item"),sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:t=>this.items[t].disabled};!function(t,e){var i=t.event,o=t.isTargetListItem,n=t.focusedItemIndex,s=t.focusItemAtIndex,a=t.sortedIndexByFirstChar,r=t.isItemAtIndexDisabled,l="ArrowLeft"===Ri(i),d="ArrowUp"===Ri(i),c="ArrowRight"===Ri(i),h="ArrowDown"===Ri(i),u="Home"===Ri(i),m="End"===Ri(i),p="Enter"===Ri(i),f="Spacebar"===Ri(i);i.ctrlKey||i.metaKey||l||d||c||h||u||m||p||(f||1!==i.key.length?f&&(o&&ji(i),o&&Xi(e)&&Gi({focusItemAtIndex:s,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:r},e)):(ji(i),Gi({focusItemAtIndex:s,focusedItemIndex:n,nextChar:i.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:r},e)))}(o,this.typeaheadState)}async onSelected(t){this.mdcFoundation||await this.updateComplete,this.mdcFoundation.handleMenuItemAction(t.detail.index);const e=this.items[t.detail.index];e&&(this.value=e.value)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}setFormData(t){this.name&&null!==this.selected&&t.append(this.name,this.value)}async layout(t=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const e=this.menuElement;e&&e.layout(t);const i=this.labelElement;if(!i)return void(this.outlineOpen=!1);const o=!!this.label&&!!this.value;if(i.floatingLabelFoundation.float(o),!this.outlined)return;this.outlineOpen=o,await this.updateComplete;const n=i.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=n)}async layoutOptions(){this.mdcFoundation&&this.mdcFoundation.layoutOptions()}}o([Rt(".mdc-select")],mo.prototype,"mdcRoot",void 0),o([Rt(".formElement")],mo.prototype,"formElement",void 0),o([Rt("slot")],mo.prototype,"slotElement",void 0),o([Rt("select")],mo.prototype,"nativeSelectElement",void 0),o([Rt("input")],mo.prototype,"nativeInputElement",void 0),o([Rt(".mdc-line-ripple")],mo.prototype,"lineRippleElement",void 0),o([Rt(".mdc-floating-label")],mo.prototype,"labelElement",void 0),o([Rt("mwc-notched-outline")],mo.prototype,"outlineElement",void 0),o([Rt(".mdc-menu")],mo.prototype,"menuElement",void 0),o([Rt(".mdc-select__anchor")],mo.prototype,"anchorElement",void 0),o([At({type:Boolean,attribute:"disabled",reflect:!0}),Xe(function(t){this.mdcFoundation&&this.mdcFoundation.setDisabled(t)})],mo.prototype,"disabled",void 0),o([At({type:Boolean}),Xe(function(t,e){void 0!==e&&this.outlined!==e&&this.layout(!1)})],mo.prototype,"outlined",void 0),o([At({type:String}),Xe(function(t,e){void 0!==e&&this.label!==e&&this.layout(!1)})],mo.prototype,"label",void 0),o([Tt()],mo.prototype,"outlineOpen",void 0),o([Tt()],mo.prototype,"outlineWidth",void 0),o([At({type:String}),Xe(function(t){if(this.mdcFoundation){const e=null===this.selected&&!!t,i=this.selected&&this.selected.value!==t;(e||i)&&this.selectByValue(t),this.reportValidity()}})],mo.prototype,"value",void 0),o([At()],mo.prototype,"name",void 0),o([Tt()],mo.prototype,"selectedText",void 0),o([At({type:String})],mo.prototype,"icon",void 0),o([Tt()],mo.prototype,"menuOpen",void 0),o([At({type:String})],mo.prototype,"helper",void 0),o([At({type:Boolean})],mo.prototype,"validateOnInitialRender",void 0),o([At({type:String})],mo.prototype,"validationMessage",void 0),o([At({type:Boolean})],mo.prototype,"required",void 0),o([At({type:Boolean})],mo.prototype,"naturalMenuWidth",void 0),o([Tt()],mo.prototype,"isUiValid",void 0),o([At({type:Boolean})],mo.prototype,"fixedMenuPosition",void 0),o([Ft({capture:!0})],mo.prototype,"handleTypeahead",null);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const po=(t,e)=>t-e,fo=["input","button","textarea","select"];function _o(t){return t instanceof Set}const go=t=>{const e=t===Ui.UNSET_INDEX?new Set:t;return _o(e)?new Set(e):new Set([e])};class vo extends Re{constructor(t){super(Object.assign(Object.assign({},vo.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=Ui.UNSET_INDEX,this.focusedItemIndex_=Ui.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return Hi}static get numbers(){return Ui}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!_o(e)){const t=e===Ui.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(_o(e))if(e.size){const t=Array.from(e).sort(po);this.selectedIndex_=t[0]}else this.selectedIndex_=Ui.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(go(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,-1),setTimeout(()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(t,e,i){const o="ArrowLeft"===Ri(t),n="ArrowUp"===Ri(t),s="ArrowRight"===Ri(t),a="ArrowDown"===Ri(t),r="Home"===Ri(t),l="End"===Ri(t),d="Enter"===Ri(t),c="Spacebar"===Ri(t);if(this.adapter.isRootFocused())return void(n||l?(t.preventDefault(),this.focusLastElement()):(a||r)&&(t.preventDefault(),this.focusFirstElement()));let h,u=this.adapter.getFocusedElementIndex();if(!(-1===u&&(u=i,u<0))){if(this.isVertical_&&a||!this.isVertical_&&s)this.preventDefaultEvent(t),h=this.focusNextElement(u);else if(this.isVertical_&&n||!this.isVertical_&&o)this.preventDefaultEvent(t),h=this.focusPrevElement(u);else if(r)this.preventDefaultEvent(t),h=this.focusFirstElement();else if(l)this.preventDefaultEvent(t),h=this.focusLastElement();else if((d||c)&&e){const e=t.target;if(e&&"A"===e.tagName&&d)return;this.preventDefaultEvent(t),this.setSelectedIndexOnAction_(u,!0)}this.focusedItemIndex_=u,void 0!==h&&(this.setTabindexAtIndex_(h),this.focusedItemIndex_=h)}}handleSingleSelection(t,e,i){t!==Ui.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,i),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent(t){const e=`${t.target.tagName}`.toLowerCase();-1===fo.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==Ui.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const i=((t,e)=>{const i=Array.from(t),o=Array.from(e),n={added:[],removed:[]},s=i.sort(po),a=o.sort(po);let r=0,l=0;for(;r<s.length||l<a.length;){const t=s[r],e=a[l];t!==e?void 0!==t&&(void 0===e||t<e)?(n.removed.push(t),r++):void 0!==e&&(void 0===t||e<t)&&(n.added.push(e),l++):(r++,l++)}return n})(go(this.selectedIndex_),t);if(i.removed.length||i.added.length){for(const t of i.removed)e&&this.adapter.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!1);for(const t of i.added)e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===Ui.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,Hi.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?Hi.ARIA_CURRENT:Hi.ARIA_SELECTED;this.selectedIndex_!==Ui.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const o=e?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(t,i,o)}setTabindexAtIndex_(t){this.focusedItemIndex_===Ui.UNSET_INDEX&&0!==t?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==Ui.UNSET_INDEX?t=this.selectedIndex_:_o(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===Ui.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,i){if(this.adapter.getDisabledStateForElementIndex(t))return;let o=t;if(this.isMulti_&&(o=new Set([t])),this.isIndexValid_(o)){if(this.isMulti_)this.toggleMultiAtIndex(t,i,e);else if(e||i)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(Ui.UNSET_INDEX)}e&&this.adapter.notifyAction(t)}}toggleMultiAtIndex(t,e,i=!0){let o=!1;o=void 0===e?!this.adapter.getSelectedStateForElementIndex(t):e;const n=go(this.selectedIndex_);o?n.add(t):n.delete(t),this.setMultiSelectionAtIndex_(n,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bo=t=>t.hasAttribute("mwc-list-item");function yo(){const t=this.itemsReadyResolver;this.itemsReady=new Promise(t=>this.itemsReadyResolver=t),t()}class xo extends Ue{constructor(){super(),this.mdcAdapter=null,this.mdcFoundationClass=vo,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.itemsReadyResolver=()=>{},this.itemsReady=Promise.resolve([]),this.items_=[];const t=function(t,e=50){let i;return function(o=!0){clearTimeout(i),i=setTimeout(()=>{t(o)},e)}}(this.layout.bind(this));this.debouncedLayout=(e=!0)=>{yo.call(this),t(e)}}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.itemsReady,t}get items(){return this.items_}updateItems(){var t;const e=null!==(t=this.assignedElements)&&void 0!==t?t:[],i=[];for(const t of e)bo(t)&&(i.push(t),t._managingList=this),t.hasAttribute("divider")&&!t.hasAttribute("role")&&t.setAttribute("role","separator");this.items_=i;const o=new Set;if(this.items_.forEach((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&o.add(e)}),this.multi)this.select(o);else{const t=o.size?o.entries().next().value[1]:-1;this.select(t)}const n=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(n)}get selected(){const t=this.index;if(!_o(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return B`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${pe(t)}"
          aria-label="${pe(e)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `}renderPlaceholder(){var t;const e=null!==(t=this.assignedElements)&&void 0!==t?t:[];return void 0!==this.emptyMessage&&0===e.length?B`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,o=bo(i);this.mdcFoundation.handleKeydown(t,o,e)}}onRequestSelected(t){if(this.mdcFoundation){let e=this.getIndexOfTarget(t);if(-1===e&&(this.layout(),e=this.getIndexOfTarget(t),-1===e))return;if(this.items[e].disabled)return;const i=t.detail.selected,o=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===o,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(Me(t)&&bo(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const o=this.items[t];o&&o.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const o=new CustomEvent("selected",i);this.dispatchEvent(o)},isFocusInsideList:()=>He(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0),this.itemsReadyResolver()}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=Be();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(bo(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(t){for(const t of this.items)if(0===t.tabindex){t.tabindex=-1;break}this.items[t].tabindex=0,this.items[t].focus()}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}o([At({type:String})],xo.prototype,"emptyMessage",void 0),o([Rt(".mdc-deprecated-list")],xo.prototype,"mdcRoot",void 0),o([Mt("",!0,"*")],xo.prototype,"assignedElements",void 0),o([Mt("",!0,'[tabindex="0"]')],xo.prototype,"tabbableElements",void 0),o([At({type:Boolean}),Xe(function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)})],xo.prototype,"activatable",void 0),o([At({type:Boolean}),Xe(function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()})],xo.prototype,"multi",void 0),o([At({type:Boolean}),Xe(function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)})],xo.prototype,"wrapFocus",void 0),o([At({type:String}),Xe(function(t,e){void 0!==e&&this.updateItems()})],xo.prototype,"itemRoles",void 0),o([At({type:String})],xo.prototype,"innerRole",void 0),o([At({type:String})],xo.prototype,"innerAriaLabel",void 0),o([At({type:Boolean})],xo.prototype,"rootTabbable",void 0),o([At({type:Boolean,reflect:!0}),Xe(function(t){var e,i;if(t){const t=null!==(i=null===(e=this.tabbableElements)||void 0===e?void 0:e[0])&&void 0!==i?i:null;this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)})],xo.prototype,"noninteractive",void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class wo{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $o extends Ct{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new wo(()=>(this.shouldRenderRipple=!0,this.ripple)),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():B``,i=this.hasMeta?this.renderMeta():B``;return B`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${i}`}renderRipple(){return this.shouldRenderRipple?B`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?B`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const t={multi:this.multipleGraphics};return B`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ye(t)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return B`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return B`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return B`<slot></slot>`}renderTwoline(){return B`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const i=()=>{window.removeEventListener(t,i),this.rippleHandlers.endPress()};window.addEventListener(t,i),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}o([Rt("slot")],$o.prototype,"slotElement",void 0),o([Lt("mwc-ripple")],$o.prototype,"ripple",void 0),o([At({type:String})],$o.prototype,"value",void 0),o([At({type:String,reflect:!0})],$o.prototype,"group",void 0),o([At({type:Number,reflect:!0})],$o.prototype,"tabindex",void 0),o([At({type:Boolean,reflect:!0}),Xe(function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")})],$o.prototype,"disabled",void 0),o([At({type:Boolean,reflect:!0})],$o.prototype,"twoline",void 0),o([At({type:Boolean,reflect:!0})],$o.prototype,"activated",void 0),o([At({type:String,reflect:!0})],$o.prototype,"graphic",void 0),o([At({type:Boolean})],$o.prototype,"multipleGraphics",void 0),o([At({type:Boolean})],$o.prototype,"hasMeta",void 0),o([At({type:Boolean,reflect:!0}),Xe(function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")})],$o.prototype,"noninteractive",void 0),o([At({type:Boolean,reflect:!0}),Xe(function(t){const e=this.getAttribute("role"),i="gridcell"===e||"option"===e||"row"===e||"tab"===e;i&&t?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")})],$o.prototype,"selected",void 0),o([Tt()],$o.prototype,"shouldRenderRipple",void 0),o([Tt()],$o.prototype,"_managingList",void 0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Eo,Co={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},So={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},ko={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(Eo||(Eo={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Io=function(t){function o(e){var n=t.call(this,i(i({},o.defaultAdapter),e))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=io.TOP_START,n.originCorner=io.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return oo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return no},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return so},enumerable:!1,configurable:!0}),Object.defineProperty(o,"Corner",{get:function(){return io},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){var t=o.cssClasses,e=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(e))throw new Error(e+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},o.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},o.prototype.setAnchorCorner=function(t){this.anchorCorner=t},o.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^eo.RIGHT},o.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},o.prototype.setIsHoisted=function(t){this.isHoistedElement=t},o.prototype.setFixedPosition=function(t){this.isFixedPosition=t},o.prototype.isFixed=function(){return this.isFixedPosition},o.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},o.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},o.prototype.setQuickOpen=function(t){this.isQuickOpen=t},o.prototype.setMaxHeight=function(t){this.maxHeight=t},o.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},o.prototype.isOpen=function(){return this.isSurfaceOpen},o.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(o.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(o.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(o.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(o.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},so.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},o.prototype.close=function(t){var e=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(o.cssClasses.OPEN),this.adapter.removeClass(o.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(o.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){e.adapter.removeClass(o.cssClasses.OPEN),e.adapter.removeClass(o.cssClasses.IS_OPEN_BELOW),e.closeAnimationEndTimerId=setTimeout(function(){e.closeAnimationEndTimerId=0,e.adapter.removeClass(o.cssClasses.ANIMATING_CLOSED),e.adapter.notifyClose()},so.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},o.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},o.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},o.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var e=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(e),n=this.hasBit(e,eo.BOTTOM)?"bottom":"top",s=this.hasBit(e,eo.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(e),r=this.getVerticalOriginOffset(e),l=this.measurements,d=l.anchorSize,c=l.surfaceSize,h=((t={})[s]=a,t[n]=r,t);d.width/c.width>so.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(h),this.adapter.setTransformOrigin(s+" "+n),this.adapter.setPosition(h),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(e,eo.BOTTOM)||this.adapter.addClass(o.cssClasses.IS_OPEN_BELOW)},o.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:o}},o.prototype.getoriginCorner=function(){var t,e,i=this.originCorner,n=this.measurements,s=n.viewportDistance,a=n.anchorSize,r=n.surfaceSize,l=o.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,eo.BOTTOM)?(t=s.top-l+this.anchorMargin.bottom,e=s.bottom-l-this.anchorMargin.bottom):(t=s.top-l+this.anchorMargin.top,e=s.bottom-l+a.height-this.anchorMargin.top),!(e-r.height>0)&&t>e+this.openBottomBias&&(i=this.setBit(i,eo.BOTTOM));var d,c,h=this.adapter.isRtl(),u=this.hasBit(this.anchorCorner,eo.FLIP_RTL),m=this.hasBit(this.anchorCorner,eo.RIGHT)||this.hasBit(i,eo.RIGHT),p=!1;(p=h&&u?!m:m)?(d=s.left+a.width+this.anchorMargin.right,c=s.right-this.anchorMargin.right):(d=s.left+this.anchorMargin.left,c=s.right+a.width-this.anchorMargin.left);var f=d-r.width>0,_=c-r.width>0,g=this.hasBit(i,eo.FLIP_RTL)&&this.hasBit(i,eo.RIGHT);return _&&g&&h||!f&&g?i=this.unsetBit(i,eo.RIGHT):(f&&p&&h||f&&!p&&m||!_&&d>=c)&&(i=this.setBit(i,eo.RIGHT)),i},o.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var e=this.measurements.viewportDistance,i=0,n=this.hasBit(t,eo.BOTTOM),s=this.hasBit(this.anchorCorner,eo.BOTTOM),a=o.numbers.MARGIN_TO_EDGE;return n?(i=e.top+this.anchorMargin.top-a,s||(i+=this.measurements.anchorSize.height)):(i=e.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,s&&(i-=this.measurements.anchorSize.height)),i},o.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,eo.RIGHT),o=this.hasBit(this.anchorCorner,eo.RIGHT);if(i){var n=o?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return o?e.width-this.anchorMargin.right:this.anchorMargin.left},o.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,eo.BOTTOM),o=this.hasBit(this.anchorCorner,eo.BOTTOM);return i?o?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?e.height+this.anchorMargin.bottom:this.anchorMargin.top},o.prototype.adjustPositionForHoistedElement=function(t){var e,i,o=this.measurements,s=o.windowScroll,a=o.viewportDistance,r=o.surfaceSize,l=o.viewportSize,d=Object.keys(t);try{for(var c=n(d),h=c.next();!h.done;h=c.next()){var u=h.value,m=t[u]||0;!this.isHorizontallyCenteredOnViewport||"left"!==u&&"right"!==u?(m+=a[u],this.isFixedPosition||("top"===u?m+=s.y:"bottom"===u?m-=s.y:"left"===u?m+=s.x:m-=s.x),t[u]=m):t[u]=(l.width-r.width)/2}}catch(t){e={error:t}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(e)throw e.error}}},o.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),i=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||i)&&setTimeout(function(){t.adapter.restoreFocus()},so.TOUCH_EVENT_WAIT_MS)},o.prototype.hasBit=function(t,e){return Boolean(t&e)},o.prototype.setBit=function(t,e){return t|e},o.prototype.unsetBit=function(t,e){return t^e},o.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},o}(Re),Ao=Io,To=function(t){function o(e){var n=t.call(this,i(i({},o.defaultAdapter),e))||this;return n.closeAnimationEndTimerId=0,n.defaultFocusState=Eo.LIST_ROOT,n.selectedIndex=-1,n}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return Co},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return So},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return ko},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),o.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},o.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter.closeSurface(!0)},o.prototype.handleItemAction=function(t){var e=this,i=this.adapter.getElementIndex(t);if(!(i<0)){this.adapter.notifySelected({index:i});var o="true"===this.adapter.getAttributeFromElementAtIndex(i,So.SKIP_RESTORE_FOCUS);this.adapter.closeSurface(o),this.closeAnimationEndTimerId=setTimeout(function(){var i=e.adapter.getElementIndex(t);i>=0&&e.adapter.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)},Io.numbers.TRANSITION_CLOSE_DURATION)}},o.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Eo.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Eo.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Eo.NONE:break;default:this.adapter.focusListRoot()}},o.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},o.prototype.getSelectedIndex=function(){return this.selectedIndex},o.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,So.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,Co.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Co.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,So.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},o.prototype.setEnabled=function(t,e){this.validatedIndex(t),e?(this.adapter.removeClassFromElementAtIndex(t,Ni),this.adapter.addAttributeToElementAtIndex(t,So.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,Ni),this.adapter.addAttributeToElementAtIndex(t,So.ARIA_DISABLED_ATTR,"true"))},o.prototype.validatedIndex=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},o}(Re),Oo=To;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fo extends Ue{constructor(){super(...arguments),this.mdcFoundationClass=Oo,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.innerAriaLabel=null,this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.stayOpenOnBodyClick=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return B`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!o.selected&&i.toggle(t,!0):o.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&("mdc-menu-item--selected"===e?o.selected&&i.toggle(t,!1):o.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const o=this.listElement;if(!o)return;const n=o.items[t];n&&n.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&o.removeAttribute(e)},getAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return null;const o=i.items[t];return o?o.getAttribute(e):null},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let o=0;o<e.items.length;o++){if(o===t)continue;const n=e.items[o];if(n.selected&&n.group===i.group)return o}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,o=e.items[i];o&&this.mdcFoundation.handleItemAction(o)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async getUpdateComplete(){await this._listUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const t=this.listElement;return t?t.getFocusedItemIndex():-1}focusItemAtIndex(t){const e=this.listElement;e&&e.focusItemAtIndex(t)}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}o([Rt(".mdc-menu")],Fo.prototype,"mdcRoot",void 0),o([Rt("slot")],Fo.prototype,"slotElement",void 0),o([At({type:Object})],Fo.prototype,"anchor",void 0),o([At({type:Boolean,reflect:!0})],Fo.prototype,"open",void 0),o([At({type:Boolean})],Fo.prototype,"quick",void 0),o([At({type:Boolean})],Fo.prototype,"wrapFocus",void 0),o([At({type:String})],Fo.prototype,"innerRole",void 0),o([At({type:String})],Fo.prototype,"innerAriaLabel",void 0),o([At({type:String})],Fo.prototype,"corner",void 0),o([At({type:Number})],Fo.prototype,"x",void 0),o([At({type:Number})],Fo.prototype,"y",void 0),o([At({type:Boolean})],Fo.prototype,"absolute",void 0),o([At({type:Boolean})],Fo.prototype,"multi",void 0),o([At({type:Boolean})],Fo.prototype,"activatable",void 0),o([At({type:Boolean})],Fo.prototype,"fixed",void 0),o([At({type:Boolean})],Fo.prototype,"forceGroupSelection",void 0),o([At({type:Boolean})],Fo.prototype,"fullwidth",void 0),o([At({type:String})],Fo.prototype,"menuCorner",void 0),o([At({type:Boolean})],Fo.prototype,"stayOpenOnBodyClick",void 0),o([At({type:String}),Xe(function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(Eo[t])})],Fo.prototype,"defaultFocus",void 0);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ro="important",Lo=" !"+Ro,Do=be(class extends ye{constructor(t){var e;if(super(t),t.type!==fe||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach(t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const o=e[t];if(null!=o){this.ht.add(t);const e="string"==typeof o&&o.endsWith(Lo);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?Ro:""):i[t]=o}}return H}}),No={TOP_LEFT:io.TOP_LEFT,TOP_RIGHT:io.TOP_RIGHT,BOTTOM_LEFT:io.BOTTOM_LEFT,BOTTOM_RIGHT:io.BOTTOM_RIGHT,TOP_START:io.TOP_START,TOP_END:io.TOP_END,BOTTOM_START:io.BOTTOM_START,BOTTOM_END:io.BOTTOM_END};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Mo extends Ue{constructor(){super(...arguments),this.mdcFoundationClass=Ao,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.stayOpenOnBodyClick=!1,this.bitwiseCorner=io.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},e={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return B`
      <div
          class="mdc-menu-surface ${Ye(t)}"
          style="${Do(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Pe(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyClosing:()=>{const t=new CustomEvent("closing",{bubbles:!0,composed:!0});this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{this.mdcRoot&&(this.styleTransformOrigin=t)},isFocused:()=>He(this),saveFocus:()=>{const t=Be(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.mdcRoot&&(this.styleLeft="left"in t?`${t.left}px`:"",this.styleRight="right"in t?`${t.right}px`:"",this.styleTop="top"in t?`${t.top}px`:"",this.styleBottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:async t=>{this.mdcRoot&&(this.styleMaxHeight=t,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${t})`)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){if(this.stayOpenOnBodyClick)return;-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}close(){this.open=!1}show(){this.open=!0}}o([Rt(".mdc-menu-surface")],Mo.prototype,"mdcRoot",void 0),o([Rt("slot")],Mo.prototype,"slotElement",void 0),o([At({type:Boolean}),Xe(function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)})],Mo.prototype,"absolute",void 0),o([At({type:Boolean})],Mo.prototype,"fullwidth",void 0),o([At({type:Boolean}),Xe(function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(t)})],Mo.prototype,"fixed",void 0),o([At({type:Number}),Xe(function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))})],Mo.prototype,"x",void 0),o([At({type:Number}),Xe(function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))})],Mo.prototype,"y",void 0),o([At({type:Boolean}),Xe(function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)})],Mo.prototype,"quick",void 0),o([At({type:Boolean,reflect:!0}),Xe(function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())})],Mo.prototype,"open",void 0),o([At({type:Boolean})],Mo.prototype,"stayOpenOnBodyClick",void 0),o([Tt(),Xe(function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)})],Mo.prototype,"bitwiseCorner",void 0),o([At({type:String}),Xe(function(t){if(this.mdcFoundation){const e="START"===t||"END"===t,i=null===this.previousMenuCorner,o=!i&&t!==this.previousMenuCorner;e&&(o||i&&"END"===t)&&(this.bitwiseCorner=this.bitwiseCorner^eo.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}})],Mo.prototype,"menuCorner",void 0),o([At({type:String}),Xe(function(t){if(this.mdcFoundation&&t){let e=No[t];"END"===this.menuCorner&&(e^=eo.RIGHT),this.bitwiseCorner=e}})],Mo.prototype,"corner",void 0),o([Tt()],Mo.prototype,"styleTop",void 0),o([Tt()],Mo.prototype,"styleLeft",void 0),o([Tt()],Mo.prototype,"styleRight",void 0),o([Tt()],Mo.prototype,"styleBottom",void 0),o([Tt()],Mo.prototype,"styleMaxHeight",void 0),o([Tt()],Mo.prototype,"styleTransformOrigin",void 0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Po={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Vo={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},zo={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bo=["touchstart","pointerdown","mousedown","keydown"],Ho=["touchend","pointerup","mouseup","contextmenu"],Uo=[],Wo=function(t){function o(e){var n=t.call(this,i(i({},o.defaultAdapter),e))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(t){n.activateImpl(t)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return Po},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return Vo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return zo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var i=o.cssClasses,n=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},o.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(o.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(o.cssClasses.FG_DEACTIVATION));var e=o.cssClasses,i=e.ROOT,n=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(n),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},o.prototype.activate=function(t){this.activateImpl(t)},o.prototype.deactivate=function(){this.deactivateImpl()},o.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},o.prototype.setUnbounded=function(t){var e=o.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},o.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(o.cssClasses.BG_FOCUSED)})},o.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(o.cssClasses.BG_FOCUSED)})},o.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},o.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},o.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var o=n(Bo),s=o.next();!s.done;s=o.next()){var a=s.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},o.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var o=n(Ho),s=o.next();!s.done;s=o.next()){var a=s.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}},o.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=n(Bo),o=i.next();!o.done;o=i.next()){var s=o.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},o.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=n(Ho),o=i.next();!o.done;o=i.next()){var s=o.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},o.prototype.removeCssVars=function(){var t=this,e=o.strings;Object.keys(e).forEach(function(i){0===i.indexOf("VAR_")&&t.adapter.updateCssVariable(e[i],null)})},o.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var o=this.previousActivationEvent;if(!(o&&void 0!==t&&o.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Uo.length>0&&Uo.some(function(t){return e.adapter.containsEventTarget(t)})?this.resetActivationState():(void 0!==t&&(Uo.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Uo=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())}))}}},o.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},o.prototype.animateActivation=function(){var t=this,e=o.strings,i=e.VAR_FG_TRANSLATE_START,n=e.VAR_FG_TRANSLATE_END,s=o.cssClasses,a=s.FG_DEACTIVATION,r=s.FG_ACTIVATION,l=o.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var d="",c="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),u=h.startPoint,m=h.endPoint;d=u.x+"px, "+u.y+"px",c=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(i,d),this.adapter.updateCssVariable(n,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(r),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},o.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var o,n,s=e.x,a=e.y,r=s+i.left,l=a+i.top;if("touchstart"===t.type){var d=t;o=d.changedTouches[0].pageX-r,n=d.changedTouches[0].pageY-l}else{var c=t;o=c.pageX-r,n=c.pageY-l}return{x:o,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:t={x:t.x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},o.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=o.cssClasses.FG_DEACTIVATION,i=this.activationState,n=i.hasDeactivationUXRun,s=i.isActivated;(n||!s)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},zo.FG_DEACTIVATION_MS))},o.prototype.rmBoundedActivationClasses=function(){var t=o.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},o.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},o.numbers.TAP_DELAY_MS)},o.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var o=i({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(o)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(o),t.resetActivationState()}))}},o.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},o.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?e:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+o.numbers.PADDING;var i=Math.floor(e*o.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},o.prototype.updateLayoutCssVars=function(){var t=o.strings,e=t.VAR_FG_SIZE,i=t.VAR_LEFT,n=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},o}(Re),jo=Wo;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qo extends Ue{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=jo}get isActive(){return t=this.parentElement||this,e=":active",(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var t,e}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return B`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ye(i)}"
          style="${Do({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}o([Rt(".mdc-ripple-surface")],qo.prototype,"mdcRoot",void 0),o([At({type:Boolean})],qo.prototype,"primary",void 0),o([At({type:Boolean})],qo.prototype,"accent",void 0),o([At({type:Boolean})],qo.prototype,"unbounded",void 0),o([At({type:Boolean})],qo.prototype,"disabled",void 0),o([At({type:Boolean})],qo.prototype,"activated",void 0),o([At({type:Boolean})],qo.prototype,"selected",void 0),o([At({type:Boolean})],qo.prototype,"internalUseStateLayerCustomProperties",void 0),o([Tt()],qo.prototype,"hovering",void 0),o([Tt()],qo.prototype,"bgFocused",void 0),o([Tt()],qo.prototype,"fgActivation",void 0),o([Tt()],qo.prototype,"fgDeactivation",void 0),o([Tt()],qo.prototype,"fgScale",void 0),o([Tt()],qo.prototype,"fgSize",void 0),o([Tt()],qo.prototype,"translateStart",void 0),o([Tt()],qo.prototype,"translateEnd",void 0),o([Tt()],qo.prototype,"leftPos",void 0),o([Tt()],qo.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Go={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Xo={NOTCH_ELEMENT_PADDING:8},Yo={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Ko=function(t){function o(e){return t.call(this,i(i({},o.defaultAdapter),e))||this}return e(o,t),Object.defineProperty(o,"strings",{get:function(){return Go},enumerable:!1,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return Yo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return Xo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),o.prototype.notch=function(t){var e=o.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Xo.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(e)},o.prototype.closeNotch=function(){var t=o.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},o}(Re);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Zo extends Ue{constructor(){super(...arguments),this.mdcFoundationClass=Ko,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",`${t}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&void 0!==e?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const t=Ye({"mdc-notched-outline--notched":this.open});return B`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}o([Rt(".mdc-notched-outline")],Zo.prototype,"mdcRoot",void 0),o([At({type:Number})],Zo.prototype,"width",void 0),o([At({type:Boolean,reflect:!0})],Zo.prototype,"open",void 0),o([Rt(".mdc-notched-outline__notch")],Zo.prototype,"notchElement",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Qo=ht`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,Jo=ht`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,tn=ht`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,en=ht`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,on=ht`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,nn=ht`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,sn=ht`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`,an={"mwc-select":class extends mo{static get styles(){return Qo}},"mwc-list":class extends xo{static get styles(){return Jo}},"mwc-list-item":class extends $o{static get styles(){return tn}},"mwc-ripple":class extends qo{static get styles(){return en}},"mwc-menu":class extends Fo{static get styles(){return on}},"mwc-menu-surface":class extends Mo{static get styles(){return nn}},"mwc-notched-outline":class extends Zo{static get styles(){return sn}}};function rn(t,e,i){if(void 0!==e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
return function(t,e,i){const o=t.constructor;if(!i){const t=`__${e}`;if(!(i=o.getPropertyDescriptor(e,t)))throw new Error("@ariaProperty must be used after a @property decorator")}const n=i;let s="";if(!n.set)throw new Error(`@ariaProperty requires a setter for ${e}`);if(t.dispatchWizEvent)return i;const a={configurable:!0,enumerable:!0,set(t){if(""===s){const t=o.getPropertyOptions(e);s="string"==typeof t.attribute?t.attribute:e}this.hasAttribute(s)&&this.removeAttribute(s),n.set.call(this,t)}};return n.get&&(a.get=function(){return n.get.call(this)}),a}(t,e,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ln={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},dn={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},cn=function(t){function o(e){return t.call(this,i(i({},o.defaultAdapter),e))||this}return e(o,t),Object.defineProperty(o,"strings",{get:function(){return dn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return ln},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),o.prototype.setChecked=function(t){this.adapter.setNativeControlChecked(t),this.updateAriaChecked(t),this.updateCheckedStyling(t)},o.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(ln.DISABLED):this.adapter.removeClass(ln.DISABLED)},o.prototype.handleChange=function(t){var e=t.target;this.updateAriaChecked(e.checked),this.updateCheckedStyling(e.checked)},o.prototype.updateCheckedStyling=function(t){t?this.adapter.addClass(ln.CHECKED):this.adapter.removeClass(ln.CHECKED)},o.prototype.updateAriaChecked=function(t){this.adapter.setNativeControlAttr(dn.ARIA_CHECKED_ATTR,""+!!t)},o}(Re);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class hn extends Ue{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=cn,this.rippleHandlers=new wo(()=>(this.shouldRenderRipple=!0,this.ripple))}changeHandler(t){this.mdcFoundation.handleChange(t),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},Pe(this.mdcRoot)),{setNativeControlChecked:t=>{this.formElement.checked=t},setNativeControlDisabled:t=>{this.formElement.disabled=t},setNativeControlAttr:(t,e)=>{this.formElement.setAttribute(t,e)}})}renderRipple(){return this.shouldRenderRipple?B`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}focus(){const t=this.formElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.formElement;t&&(this.rippleHandlers.endFocus(),t.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}render(){return B`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${pe(this.ariaLabel)}"
              aria-labelledby="${pe(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([At({type:Boolean}),Xe(function(t){this.mdcFoundation.setChecked(t)})],hn.prototype,"checked",void 0),o([At({type:Boolean}),Xe(function(t){this.mdcFoundation.setDisabled(t)})],hn.prototype,"disabled",void 0),o([rn,At({attribute:"aria-label"})],hn.prototype,"ariaLabel",void 0),o([rn,At({attribute:"aria-labelledby"})],hn.prototype,"ariaLabelledBy",void 0),o([Rt(".mdc-switch")],hn.prototype,"mdcRoot",void 0),o([Rt("input")],hn.prototype,"formElement",void 0),o([Lt("mwc-ripple")],hn.prototype,"ripple",void 0),o([Tt()],hn.prototype,"shouldRenderRipple",void 0),o([Ft({passive:!0})],hn.prototype,"handleRippleMouseDown",null),o([Ft({passive:!0})],hn.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const un=ht`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`,mn={"mwc-switch":class extends hn{static get styles(){return un}},"mwc-ripple":class extends qo{static get styles(){return en}}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pn={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},fn={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},_n={LABEL_SCALE:.75},gn=["pattern","min","max","required","step","minlength","maxlength"],vn=["color","date","datetime-local","month","range","time","week"],bn=["mousedown","touchstart"],yn=["click","keydown"],xn=function(t){function o(e,n){void 0===n&&(n={});var s=t.call(this,i(i({},o.defaultAdapter),e))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=n.helperText,s.characterCounter=n.characterCounter,s.leadingIcon=n.leadingIcon,s.trailingIcon=n.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(t){s.setTransformOrigin(t)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(t){s.handleValidationAttributeChange(t)},s}return e(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return fn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return pn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return _n},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return vn.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){var t,e,i,o;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var s=n(bn),a=s.next();!a.done;a=s.next()){var r=a.value;this.adapter.registerInputInteractionHandler(r,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var l=n(yn),d=l.next();!d.done;d=l.next()){r=d.value;this.adapter.registerTextFieldInteractionHandler(r,this.textFieldInteractionHandler)}}catch(t){i={error:t}}finally{try{d&&!d.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},o.prototype.destroy=function(){var t,e,i,o;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var s=n(bn),a=s.next();!a.done;a=s.next()){var r=a.value;this.adapter.deregisterInputInteractionHandler(r,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var l=n(yn),d=l.next();!d.done;d=l.next()){r=d.value;this.adapter.deregisterTextFieldInteractionHandler(r,this.textFieldInteractionHandler)}}catch(t){i={error:t}}finally{try{d&&!d.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},o.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},o.prototype.handleValidationAttributeChange=function(t){var e=this;t.some(function(t){return gn.indexOf(t)>-1&&(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0)}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},o.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*_n.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},o.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},o.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,i=e?e[0]:t,o=i.target.getBoundingClientRect(),n=i.clientX-o.left;this.adapter.setLineRippleTransformOrigin(n)}},o.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},o.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},o.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},o.prototype.getValue=function(){return this.getNativeInput().value},o.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},o.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},o.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},o.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},o.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},o.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},o.prototype.isDisabled=function(){return this.getNativeInput().disabled},o.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},o.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},o.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},o.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},o.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},o.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},o.prototype.setcharacterCounter=function(t){if(this.characterCounter){var e=this.getNativeInput().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},o.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},o.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},o.prototype.styleValidity=function(t){var e=o.cssClasses.INVALID;if(t?this.adapter.removeClass(e):this.adapter.addClass(e),this.helperText){if(this.helperText.setValidity(t),!this.helperText.isValidation())return;var i=this.helperText.isVisible(),n=this.helperText.getId();i&&n?this.adapter.setInputAttr(pn.ARIA_DESCRIBEDBY,n):this.adapter.removeInputAttr(pn.ARIA_DESCRIBEDBY)}},o.prototype.styleFocused=function(t){var e=o.cssClasses.FOCUSED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},o.prototype.styleDisabled=function(t){var e=o.cssClasses,i=e.DISABLED,n=e.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(n)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},o.prototype.styleFloating=function(t){var e=o.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(e):this.adapter.removeClass(e)},o.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},o}(Re),wn=xn;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $n={},En=be(class extends ye{constructor(t){if(super(t),t.type!==ge&&t.type!==fe&&t.type!==ve)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===U)return e;const i=t.element,o=t.name;if(t.type===ge){if(e===i[o])return H}else if(t.type===ve){if(!!e===i.hasAttribute(o))return H}else if(t.type===fe&&i.getAttribute(o)===e+"")return H;return((t,e=$n)=>{t._$AH=e;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(t),e}}),Cn=["touchstart","touchmove","scroll","mousewheel"],Sn=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class kn extends Ge{constructor(){super(...arguments),this.mdcFoundationClass=wn,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=Sn(),this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const t=new CustomEvent("focus");this.formElement.dispatchEvent(t),this.formElement.focus()}blur(){const t=new CustomEvent("blur");this.formElement.dispatchEvent(t),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(t,e,i){this.formElement.setSelectionRange(t,e,i)}update(t){t.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),t.has("value")&&"string"!=typeof this.value&&(this.value=`${this.value}`),super.update(t)}setFormData(t){this.name&&t.append(this.name,this.value)}render(){const t=this.charCounter&&-1!==this.maxLength,e=!!this.helper||!!this.validationMessage||t,i={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return B`
      <label class="mdc-text-field ${Ye(i)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(e)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e,t)}
    `}updated(t){t.has("value")&&void 0!==t.get("value")&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":B`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?B`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?B`
      <span
          .floatingLabelFoundation=${Zi(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(t,e=!1){return B`<i class="material-icons mdc-text-field__icon ${Ye({"mdc-text-field__icon--leading":!e,"mdc-text-field__icon--trailing":e})}">${t}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(t,e=!1){return B`<span class="mdc-text-field__affix ${Ye({"mdc-text-field__affix--prefix":!e,"mdc-text-field__affix--suffix":e})}">
        ${t}</span>`}renderInput(t){const e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,o=this.autocapitalize?this.autocapitalize:void 0,n=this.validationMessage&&!this.isUiValid,s=this.label?"label":void 0,a=t?"helper-text":void 0,r=this.focused||this.helperPersistent||n?"helper-text":void 0;return B`
      <input
          aria-labelledby=${pe(s)}
          aria-controls="${pe(a)}"
          aria-describedby="${pe(r)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${En(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${pe(e)}"
          maxlength="${pe(i)}"
          pattern="${pe(this.pattern?this.pattern:void 0)}"
          min="${pe(""===this.min?void 0:this.min)}"
          max="${pe(""===this.max?void 0:this.max)}"
          step="${pe(null===this.step?void 0:this.step)}"
          size="${pe(null===this.size?void 0:this.size)}"
          name="${pe(""===this.name?void 0:this.name)}"
          inputmode="${pe(this.inputMode)}"
          autocapitalize="${pe(o)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":B`
      <span .lineRippleFoundation=${to()}></span>
    `}renderHelperText(t,e){const i=this.validationMessage&&!this.isUiValid,o={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":i},n=this.focused||this.helperPersistent||i?void 0:"true",s=i?this.validationMessage:this.helper;return t?B`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${pe(n)}"
             class="mdc-text-field-helper-text ${Ye(o)}"
             >${s}</div>
        ${this.renderCharCounter(e)}
      </div>`:""}renderCharCounter(t){const e=Math.min(this.value.length,this.maxLength);return t?B`
      <span class="mdc-text-field-character-counter"
            >${e} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.mdcFoundation.setValid(t),this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=Sn(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}handleInputChange(){this.value=this.formElement.value}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(t,e)=>this.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(e=>{t((t=>t.map(t=>t.attributeName).filter(t=>t))(e))});return e.observe(this.formElement,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect()},Pe(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(t,e)=>this.formElement.addEventListener(t,e,{passive:t in Cn}),deregisterInputInteractionHandler:(t,e)=>this.formElement.removeEventListener(t,e)}}getLabelAdapterMethods(){return{floatLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(t),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(t),setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}}}async getUpdateComplete(){var t;const e=await super.getUpdateComplete();return await(null===(t=this.outlineElement)||void 0===t?void 0:t.updateComplete),e}firstUpdated(){var t;super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity(),null===(t=this.outlineElement)||void 0===t||t.updateComplete.then(()=>{var t;this.outlineWidth=(null===(t=this.labelElement)||void 0===t?void 0:t.floatingLabelFoundation.getWidth())||0})}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const t=this.labelElement;if(!t)return void(this.outlineOpen=!1);const e=!!this.label&&!!this.value;if(t.floatingLabelFoundation.float(e),!this.outlined)return;this.outlineOpen=e,await this.updateComplete;const i=t.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=i,await this.updateComplete)}}o([Rt(".mdc-text-field")],kn.prototype,"mdcRoot",void 0),o([Rt("input")],kn.prototype,"formElement",void 0),o([Rt(".mdc-floating-label")],kn.prototype,"labelElement",void 0),o([Rt(".mdc-line-ripple")],kn.prototype,"lineRippleElement",void 0),o([Rt("mwc-notched-outline")],kn.prototype,"outlineElement",void 0),o([Rt(".mdc-notched-outline__notch")],kn.prototype,"notchElement",void 0),o([At({type:String})],kn.prototype,"value",void 0),o([At({type:String})],kn.prototype,"type",void 0),o([At({type:String})],kn.prototype,"placeholder",void 0),o([At({type:String}),Xe(function(t,e){void 0!==e&&this.label!==e&&this.layout()})],kn.prototype,"label",void 0),o([At({type:String})],kn.prototype,"icon",void 0),o([At({type:String})],kn.prototype,"iconTrailing",void 0),o([At({type:Boolean,reflect:!0})],kn.prototype,"disabled",void 0),o([At({type:Boolean})],kn.prototype,"required",void 0),o([At({type:Number})],kn.prototype,"minLength",void 0),o([At({type:Number})],kn.prototype,"maxLength",void 0),o([At({type:Boolean,reflect:!0}),Xe(function(t,e){void 0!==e&&this.outlined!==e&&this.layout()})],kn.prototype,"outlined",void 0),o([At({type:String})],kn.prototype,"helper",void 0),o([At({type:Boolean})],kn.prototype,"validateOnInitialRender",void 0),o([At({type:String})],kn.prototype,"validationMessage",void 0),o([At({type:Boolean})],kn.prototype,"autoValidate",void 0),o([At({type:String})],kn.prototype,"pattern",void 0),o([At({type:String})],kn.prototype,"min",void 0),o([At({type:String})],kn.prototype,"max",void 0),o([At({type:String})],kn.prototype,"step",void 0),o([At({type:Number})],kn.prototype,"size",void 0),o([At({type:Boolean})],kn.prototype,"helperPersistent",void 0),o([At({type:Boolean})],kn.prototype,"charCounter",void 0),o([At({type:Boolean})],kn.prototype,"endAligned",void 0),o([At({type:String})],kn.prototype,"prefix",void 0),o([At({type:String})],kn.prototype,"suffix",void 0),o([At({type:String})],kn.prototype,"name",void 0),o([At({type:String})],kn.prototype,"inputMode",void 0),o([At({type:Boolean})],kn.prototype,"readOnly",void 0),o([At({type:String})],kn.prototype,"autocapitalize",void 0),o([Tt()],kn.prototype,"outlineOpen",void 0),o([Tt()],kn.prototype,"outlineWidth",void 0),o([Tt()],kn.prototype,"isUiValid",void 0),o([Tt()],kn.prototype,"focused",void 0),o([Ft({passive:!0})],kn.prototype,"handleInputChange",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const In=ht`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`,An={"mwc-textfield":class extends kn{static get styles(){return In}},"mwc-notched-outline":class extends Zo{static get styles(){return sn}}};let Tn=class extends Ct{constructor(){super(...arguments),this._subElementEditor=void 0,this._initialized=!1,this._config_version=8}setConfig(t){this._config=t;let e=!1;null===this._section_order?(this._config=Object.assign(Object.assign({},this._config),{section_order:Fe}),e=!0):(this._config.section_order.forEach(t=>{var i,o;if(!Fe.includes(t)){const n=null===(i=this._config)||void 0===i?void 0:i.section_order.indexOf(t);void 0!==n&&-1!==n&&(null===(o=this._config)||void 0===o||o.section_order.splice(n,1)),e=!0}}),Fe.forEach(t=>{this._config&&!this._config.section_order.includes(t)&&(this._config.section_order.push(t),e=!0)})),e&&Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}),this.loadCardHelpers()}sortObjectByKeys(t){return Object.keys(t).sort().reduce((e,i)=>(e[i]=t[i],e),{})}_configCleanup(){if(!this._config||!this.hass)return;let t=Object.assign({},this._config);t.static_icons&&(t.option_static_icons=t.static_icons,delete t.static_icons),t.time_format&&(t.option_time_format="12"===t.time_format?"12hour":"24hour",delete t.time_format),t.locale&&(t.option_locale=t.locale,delete t.locale),t.option_today_temperature_decimals&&(t.option_today_temperature_decimals=t.show_today_decimals,delete t.show_today_decimals),t.show_decimals_pressure&&(t.option_pressure_decimals=t.show_decimals_pressure,delete t.show_decimals_pressure),t.tooltips&&(t.option_tooltips=t.tooltips,delete t.tooltips),t.show_beaufort&&(t.option_show_beaufort=t.show_beaufort,delete t.show_beaufort),t.entity_daytime_high&&(t.Entity_forecast_max=t.entity_daytime_high,delete t.entity_daytime_high),t.entity_daytime_low&&(t.entity_forecast_min=t.entity_daytime_low,delete t.entity_daytime_low),t.entity_current_conditions&&(t.entity_forecast_icon=t.entity_current_conditions,delete t.entity_current_conditions),t.entity_current_text&&(t.entity_summary=t.entity_current_text,delete t.entity_current_text),t.entity_daily_summary&&(t.entity_extended=t.entity_daily_summary,delete t.entity_daily_summary),t.entity_forecast_high_temp_1&&(t.entity_forecast_max_1=t.entity_forecast_high_temp_1,delete t.entity_forecast_high_temp_1),t.entity_forecast_low_temp_1&&(t.entity_forecast_min_1=t.entity_forecast_low_temp_1,delete t.entity_forecast_low_temp_1),t.entity_possible_today&&(t.entity_pos=t.entity_possible_today,delete t.entity_possible_today),t.entity_fire_danger_summary&&(t.entity_fire_danger=t.entity_fire_danger_summary,delete t.entity_fire_danger_summary),t.show_decimals&&(t.option_show_overview_decimals=t.show_decimals,delete t.show_decimals),t.show_separator&&(t.option_show_overview_separator=t.show_separator,delete t.show_separator);for(const e of["slot_l1, slot_l2, slot_l3, slot_l4, slot_l5, slot_l6, slot_l7, slot_l8, slot_r1, slot_r2, slot_r3, slot_r4, slot_r5, slot_r6, slot_r7, slot_r8"])"daytime_high"===t[e]&&(t[e]="forecast_max"),"daytime_low"===t[e]&&(t[e]="forecast_min");const e=["type","card_config_version","section_order","show_section_overview","show_section_extended","show_section_slots","show_section_daily_forecast","overview_layout","text_card_title","text_card_title_2","entity_update_time","update_time_use_attr","update_time_name_attr","text_update_time_prefix","entity_temperature","entity_apparent_temp","entity_forecast_icon","entity_summary","option_show_overview_decimals","option_show_overview_separator","entity_extended","extended_use_attr","extended_name_attr","slot_l1","slot_l2","slot_l3","slot_l4","slot_l5","slot_l6","slot_l7","slot_l8","slot_r1","slot_r2","slot_r3","slot_r4","slot_r5","slot_r6","slot_r7","slot_r8","entity_humidity","entity_pressure","entity_visibility","entity_wind_bearing","entity_wind_speed","entity_wind_gust","entity_wind_speed_kt","entity_wind_gust_kt","entity_temp_next","entity_temp_next_label","entity_temp_following","entity_temp_following_label","entity_forecast_max","entity_forecast_min","entity_observed_max","entity_observed_min","entity_fire_danger","entity_pop","entity_pos","entity_sun","entity_moon","entity_uv_alert_summary","entity_rainfall","entity_todays_fire_danger","entity_todays_uv_forecast","custom1_label","custom1_value","custom1_icon","custom1_units","custom2_label","custom2_value","custom2_icon","custom2_units","custom3_label","custom3_value","custom3_icon","custom3_units","custom4_label","custom4_value","custom4_icon","custom4_units","entity_forecast_icon_1","entity_pop_1","entity_pos_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_extended_1","entity_fire_danger_1","daily_forecast_layout","daily_forecast_days","daily_extended_forecast_days","daily_extended_use_attr","daily_extended_name_attr","option_today_temperature_decimals","option_today_rainfall_decimals","option_forecast_decimals","option_show_current_day","option_show_temperature_chart","option_show_precipitation_chart","option_show_gust_in_wind","option_show_forecast_wind","option_show_forecast_pop","option_pressure_decimals","option_color_fire_danger","option_locale","option_static_icons","option_time_format","option_tooltips","old_daily_format","option_show_beaufort","weather_entity","tempformat","entity","tap_action","hold_action","double_tap_action","entity_possible_tomorrow","style","index","view_index"];for(const i in this._config)e.includes(i)||delete t[i];t=Object.assign(Object.assign({},t),{card_config_version:this._config_version}),this._config=t,Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)})}shouldUpdate(){return this._initialized||this._initialize(),!0}get _section_order(){var t;return(null===(t=this._config)||void 0===t?void 0:t.section_order)||null}get _text_card_title(){var t;return(null===(t=this._config)||void 0===t?void 0:t.text_card_title)||""}get _text_card_title_2(){var t;return(null===(t=this._config)||void 0===t?void 0:t.text_card_title_2)||""}get _entity_update_time(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_update_time)||""}get _update_time_use_attr(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.update_time_use_attr)}get _update_time_name_attr(){var t;return(null===(t=this._config)||void 0===t?void 0:t.update_time_name_attr)||""}get _text_update_time_prefix(){var t;return(null===(t=this._config)||void 0===t?void 0:t.text_update_time_prefix)||""}get _overview_layout(){var t;return(null===(t=this._config)||void 0===t?void 0:t.overview_layout)||""}get _entity_temperature(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_temperature)||""}get _entity_apparent_temp(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_apparent_temp)||""}get _entity_forecast_icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_forecast_icon)||""}get _entity_summary(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_summary)||""}get _option_show_overview_decimals(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_show_overview_decimals)}get _option_show_overview_separator(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_show_overview_separator)}get _entity_extended(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_extended)||""}get _extended_use_attr(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.extended_use_attr)}get _extended_name_attr(){var t;return(null===(t=this._config)||void 0===t?void 0:t.extended_name_attr)||""}get _entity_todays_fire_danger(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_todays_fire_danger)||""}get _entity_todays_uv_forecast(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_todays_uv_forecast)||""}get _slot_l1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l1)||""}get _slot_l2(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l2)||""}get _slot_l3(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l3)||""}get _slot_l4(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l4)||""}get _slot_l5(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l5)||""}get _slot_l6(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l6)||""}get _slot_l7(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l7)||""}get _slot_l8(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_l8)||""}get _slot_r1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r1)||""}get _slot_r2(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r2)||""}get _slot_r3(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r3)||""}get _slot_r4(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r4)||""}get _slot_r5(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r5)||""}get _slot_r6(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r6)||""}get _slot_r7(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r7)||""}get _slot_r8(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slot_r8)||""}get _entity_observed_max(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_observed_max)||""}get _entity_observed_min(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_observed_min)||""}get _entity_forecast_max(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_forecast_max)||""}get _entity_forecast_min(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_forecast_min)||""}get _entity_temp_next(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_temp_next)||""}get _entity_temp_next_label(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_temp_next_label)||""}get _entity_temp_following(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_temp_following)||""}get _entity_temp_following_label(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_temp_following_label)||""}get _entity_wind_bearing(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_wind_bearing)||""}get _entity_wind_speed(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_wind_speed)||""}get _entity_wind_gust(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_wind_gust)||""}get _entity_wind_speed_kt(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_wind_speed_kt)||""}get _entity_wind_gust_kt(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_wind_gust_kt)||""}get _entity_visibility(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_visibility)||""}get _entity_sun(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_sun)||""}get _entity_moon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_moon)||""}get _entity_pop(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_pop)||""}get _entity_pos(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_pos)||""}get _entity_possible_tomorrow(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_possible_tomorrow)||""}get _entity_humidity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_humidity)||""}get _entity_pressure(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_pressure)||""}get _entity_uv_alert_summary(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_uv_alert_summary)||""}get _entity_fire_danger(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_fire_danger)||""}get _entity_rainfall(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_rainfall)||""}get _custom1_value(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom1_value)||""}get _custom1_icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom1_icon)||""}get _custom1_label(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom1_label)||""}get _custom1_units(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom1_units)||""}get _custom2_value(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom2_value)||""}get _custom2_icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom2_icon)||""}get _custom2_label(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom2_label)||""}get _custom2_units(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom2_units)||""}get _custom3_value(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom3_value)||""}get _custom3_icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom3_icon)||""}get _custom3_label(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom3_label)||""}get _custom3_units(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom3_units)||""}get _custom4_value(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom4_value)||""}get _custom4_icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom4_icon)||""}get _custom4_label(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom4_label)||""}get _custom4_units(){var t;return(null===(t=this._config)||void 0===t?void 0:t.custom4_units)||""}get _daily_forecast_layout(){var t;return(null===(t=this._config)||void 0===t?void 0:t.daily_forecast_layout)||""}get _daily_forecast_days(){var t;return(null===(t=this._config)||void 0===t?void 0:t.daily_forecast_days)||null}get _daily_extended_forecast_days(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.daily_extended_forecast_days)&&void 0!==e?e:null}get _entity_forecast_icon_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_forecast_icon_1)||""}get _weather_entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.weather_entity)||""}get _forecast_type(){var t;return(null===(t=this._config)||void 0===t?void 0:t.forecast_type)||""}get _entity_summary_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_summary_1)||""}get _entity_forecast_min_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_forecast_min_1)||""}get _entity_forecast_max_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_forecast_max_1)||""}get _entity_pop_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_pop_1)||""}get _entity_pos_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_pos_1)||""}get _entity_extended_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_extended_1)||""}get _entity_fire_danger_1(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity_fire_danger_1)||""}get _daily_extended_use_attr(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.daily_extended_use_attr)}get _daily_extended_name_attr(){var t;return(null===(t=this._config)||void 0===t?void 0:t.daily_extended_name_attr)||""}get _option_today_temperature_decimals(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_today_temperature_decimals)}get _option_today_rainfall_decimals(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_today_rainfall_decimals)}get _option_forecast_decimals(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_forecast_decimals)}get _option_show_gust_in_wind(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.option_show_gust_in_wind)}get _option_show_forecast_wind(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_show_forecast_wind)}get _option_show_forecast_pop(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.option_show_forecast_pop)}get _option_show_current_day(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_show_current_day)}get _option_show_temperature_chart(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_show_temperature_chart)}get _option_show_precipitation_chart(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_show_precipitation_chart)}get _option_pressure_decimals(){var t;return(null===(t=this._config)||void 0===t?void 0:t.option_pressure_decimals)||null}get _option_color_fire_danger(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.option_color_fire_danger)}get _option_daily_color_fire_danger(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.option_daily_color_fire_danger)}get _option_tooltips(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_tooltips)}get _option_static_icons(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.option_static_icons)}get _option_time_format(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.option_time_format)&&void 0!==e?e:null}get _option_locale(){var t;return(null===(t=this._config)||void 0===t?void 0:t.option_locale)||""}get _optional_entities(){var t,e,i,o,n,s,a,r,l,d,c,h,u,m,p,f;const _=new Set;for(const g of[(null===(t=this._config)||void 0===t?void 0:t.slot_l1)||"forecast_max",(null===(e=this._config)||void 0===e?void 0:e.slot_l2)||"forecast_min",(null===(i=this._config)||void 0===i?void 0:i.slot_l3)||"wind",(null===(o=this._config)||void 0===o?void 0:o.slot_l4)||"pressure",(null===(n=this._config)||void 0===n?void 0:n.slot_l5)||"sun_next",(null===(s=this._config)||void 0===s?void 0:s.slot_l6)||"remove",(null===(a=this._config)||void 0===a?void 0:a.slot_l7)||"remove",(null===(r=this._config)||void 0===r?void 0:r.slot_l8)||"remove",(null===(l=this._config)||void 0===l?void 0:l.slot_r1)||"popforecast",(null===(d=this._config)||void 0===d?void 0:d.slot_r2)||"humidity",(null===(c=this._config)||void 0===c?void 0:c.slot_r3)||"uv_summary",(null===(h=this._config)||void 0===h?void 0:h.slot_r4)||"fire_danger",(null===(u=this._config)||void 0===u?void 0:u.slot_r5)||"sun_following",(null===(m=this._config)||void 0===m?void 0:m.slot_r6)||"remove",(null===(p=this._config)||void 0===p?void 0:p.slot_r7)||"remove",(null===(f=this._config)||void 0===f?void 0:f.slot_r8)||"remove"])switch(g){case"observed_max":_.add("entity_observed_max");break;case"observed_min":_.add("entity_observed_min");break;case"forecast_max":_.add("entity_forecast_max");break;case"forecast_min":_.add("entity_forecast_min");break;case"temp_next":_.add("entity_temp_next").add("entity_temp_next_label");break;case"temp_following":_.add("entity_temp_following").add("entity_temp_following_label");break;case"temp_maximums":_.add("entity_forecast_max").add("entity_observed_max");break;case"temp_minimums":_.add("entity_forecast_min").add("entity_observed_min");break;case"wind":_.add("entity_wind_bearing").add("entity_wind_speed").add("entity_wind_gust");break;case"wind_kt":_.add("entity_wind_bearing").add("entity_wind_speed_kt").add("entity_wind_gust_kt");break;case"visibility":_.add("entity_visibility");break;case"sun_next":case"sun_following":_.add("entity_sun");break;case"moon":_.add("entity_moon");break;case"pop":_.add("entity_pop");break;case"popforecast":_.add("entity_pop").add("entity_pos");break;case"humidity":_.add("entity_humidity");break;case"pressure":_.add("entity_pressure");break;case"uv_summary":_.add("entity_uv_alert_summary");break;case"fire_danger":_.add("entity_fire_danger");break;case"possible_today":_.add("entity_pos");break;case"possible_tomorrow":_.add("entity_possible_tomorrow");break;case"rainfall":_.add("entity_rainfall");break;case"custom1":_.add("custom1");break;case"custom2":_.add("custom2");break;case"custom3":_.add("custom3");break;case"custom4":_.add("custom4")}const g=_.has("entity_observed_max")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_observed_max"} .value=${this._entity_observed_max} .includeDomains=${["sensor"]}
          name="entity_observed_max" label="Entity Observed Max" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",v=_.has("entity_observed_min")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_observed_min"} .value=${this._entity_observed_min} .includeDomains=${["sensor"]}
          name="entity_observed_min" label="Entity Observed Min" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",b=_.has("entity_forecast_max")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_forecast_max"} .value=${this._entity_forecast_max} .includeDomains=${["sensor","weather"]}
          name="entity_forecast_max" label="Entity Forecast Max" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",y=_.has("entity_forecast_min")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_forecast_min"} .value=${this._entity_forecast_min} .includeDomains=${["sensor","weather"]}
          name="entity_forecast_min" label="Entity Forecast Min" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",x=_.has("entity_temp_next")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_temp_next"} .value=${this._entity_temp_next} .includeDomains=${["sensor"]}
          name="entity_temp_next" label="Entity Temp Next" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",w=_.has("entity_temp_next_label")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_temp_next_label"} .value=${this._entity_temp_next_label} .includeDomains=${["sensor"]}
          name="entity_temp_next_label" label="Entity Temp Next Label" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",$=_.has("entity_temp_following")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_temp_following"} .value=${this._entity_temp_following} .includeDomains=${["sensor"]}
          name="entity_temp_following" label="Entity Temp Following" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",E=_.has("entity_temp_following_label")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_temp_following_label"} .value=${this._entity_temp_following_label} .includeDomains=${["sensor"]}
          name="entity_temp_following_label" label="Entity Temp Following Label" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",C=_.has("entity_wind_bearing")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_wind_bearing"} .value=${this._entity_wind_bearing} .includeDomains=${["sensor","weather"]}
          name="entity_wind_bearing" label="Entity Wind Bearing" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",S=_.has("entity_wind_speed")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_wind_speed"} .value=${this._entity_wind_speed} .includeDomains=${["sensor","weather"]}
          name="entity_wind_speed" label="Entity Wind Speed" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",k=_.has("entity_wind_gust")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_wind_gust"} .value=${this._entity_wind_gust} .includeDomains=${["sensor","weather"]}
          name="entity_wind_gust" label="Entity Wind Gust" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",I=_.has("entity_wind_speed_kt")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_wind_speed_kt"} .value=${this._entity_wind_speed_kt} .includeDomains=${["sensor","weather"]}
          name="entity_wind_speed_kt" label="Entity Wind Speed Kt" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",A=_.has("entity_wind_gust_kt")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_wind_gust_kt"} .value=${this._entity_wind_gust_kt} .includeDomains=${["sensor"]}
          name="entity_wind_gust_kt" label="Entity Wind Gust Kt" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",T=_.has("entity_visibility")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_visibility"} .value=${this._entity_visibility} .includeDomains=${["sensor","weather"]}
          name="entity_visibility" label="Entity Visibility" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",O=_.has("entity_sun")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_sun"} .value=${this._entity_sun} .includeDomains=${["sun","sensor"]}
          name="entity_sun" label="Entity Sun" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",F=_.has("entity_moon")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_moon"} .value=${this._entity_moon} .includeDomains=${["sensor"]}
          name="entity_moon" label="Moon Phase Entity" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",R=_.has("entity_pop")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_pop"} .value=${this._entity_pop} .includeDomains=${["sensor","weather"]}
          name="entity_pop" label="Chance of Rain" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",L=_.has("entity_pos")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_pos"} .value=${this._entity_pos} .includeDomains=${["sensor","weather"]}
          name="entity_pos" label="Possible Rain Today" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",D=_.has("entity_possible_tomorrow")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_possible_tomorrow"} .value=${this._entity_possible_tomorrow} .includeDomains=${["sensor","weather"]}
          name="entity_possible_tomorrow" label="Possible Rain Tomorrow" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",N=_.has("entity_humidity")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_humidity"} .value=${this._entity_humidity} .includeDomains=${["sensor","weather"]}
          name="entity_humidity" label="Humidity" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",M=_.has("entity_pressure")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_pressure"} .value=${this._entity_pressure} .includeDomains=${["sensor","weather"]}
          name="entity_pressure" label="Atmospheric Pressure" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",P=_.has("entity_uv_alert_summary")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_uv_alert_summary"} .value=${this._entity_uv_alert_summary} .includeDomains=${["sensor"]}
          name="entity_uv_alert_summary" label="UV Alert Summary" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",V=_.has("entity_fire_danger")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_fire_danger"} .value=${this._entity_fire_danger} .includeDomains=${["sensor"]}
          name="entity_fire_danger" label="Fire Danger" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",z=_.has("entity_rainfall")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_rainfall"} .value=${this._entity_rainfall} .includeDomains=${["sensor"]}
          name="entity_rainfall" label="Todays Rain" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:"",H=_.has("custom1")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"custom1_value"} .value=${this._custom1_value} .includeDomains=${["sensor"]}
          name="custom1_value" label="Custom 1 Value" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
        <div class="side-by-side">
          <ha-icon-picker .configValue=${"custom1_icon"} .value=${this._custom1_icon} name="custom1_icon"
            label="Custom 1 Icon" @value-changed=${this._valueChanged}>
          </ha-icon-picker>
          <ha-input label="Custom 1 Units" .value=${this._custom1_units} .configValue=${"custom1_units"} @input=${this._valueChanged}>
          </ha-input>
        </div>
        <ha-input label="Custom 1 Label (optional)" .value=${this._custom1_label} .configValue=${"custom1_label"} @input=${this._valueChanged}>
        </ha-input>
      `:"",U=_.has("custom2")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"custom2_value"} .value=${this._custom2_value} .includeDomains=${["sensor"]}
          name="custom2_value" label="Custom 2 Value" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
        <div class="side-by-side">
          <ha-icon-picker .configValue=${"custom2_icon"} .value=${this._custom2_icon} name="custom2_icon"
            label="Custom 2 Icon" @value-changed=${this._valueChanged}>
          </ha-icon-picker>
          <ha-input label="Custom 2 Units" .value=${this._custom2_units} .configValue=${"custom2_units"} @input=${this._valueChanged}>
          </ha-input>
        </div>
        <ha-input label="Custom 2 Label (optional)" .value=${this._custom2_label} .configValue=${"custom2_label"} @input=${this._valueChanged}>
        </ha-input>
      `:"",W=_.has("custom3")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"custom3_value"} .value=${this._custom3_value} .includeDomains=${["sensor"]}
          name="custom3_value" label="Custom 3 Value" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
        <div class="side-by-side">
          <ha-icon-picker .configValue=${"custom3_icon"} .value=${this._custom3_icon} name="custom3_icon"
            label="Custom 3 Icon" @value-changed=${this._valueChanged}>
          </ha-icon-picker>
          <ha-input label="Custom 3 Units" .value=${this._custom3_units} .configValue=${"custom3_units"} @input=${this._valueChanged}>
          </ha-input>
        </div>
        <ha-input label="Custom 3 Label (optional)" .value=${this._custom3_label} .configValue=${"custom3_label"} @input=${this._valueChanged}>
        </ha-input>
      `:"",j=_.has("custom4")?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"custom4_value"} .value=${this._custom4_value} .includeDomains=${["sensor"]}
          name="custom4_value" label="Custom 4 Value" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
        <div class="side-by-side">
          <ha-icon-picker .configValue=${"custom4_icon"} .value=${this._custom4_icon} name="custom4_icon"
            label="Custom 4 Icon" @value-changed=${this._valueChanged}>
          </ha-icon-picker>
          <ha-input label="Custom 4 Units" .value=${this._custom4_units} .configValue=${"custom4_units"} @input=${this._valueChanged}>
          </ha-input>
        </div>
        <ha-input label="Custom 4 Label (optional)" .value=${this._custom4_label} .configValue=${"custom4_label"} @input=${this._valueChanged}>
        </ha-input>
      `:"";return B`
      ${g}
      ${v}
      ${b}
      ${y}
      ${x}
      ${w}
      ${$}
      ${E}
      ${C}
      ${S}
      ${k}
      ${I}
      ${A}
      ${T}
      ${O}
      ${F}
      ${R}
      ${L}
      ${D}
      ${N}
      ${M}
      ${P}
      ${V}
      ${z}
      ${H}
      ${U}
      ${W}
      ${j}`}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}async firstUpdated(){var t;this._config&&this.hass&&this._config.card_config_version!==this._config_version&&this._configCleanup(),customElements.get("ha-switch")&&(customElements.get("ha-input")||customElements.get("ha-textfield"))&&customElements.get("ha-entity-picker")||null===(t=customElements.get("hui-entities-card"))||void 0===t||t.getConfigElement()}_sectionOverviewEditor(){return B`
      <ha-input label="Card Title Text Line 1" .value=${this._text_card_title} .configValue=${"text_card_title"}
        @input=${this._valueChanged}>
      </ha-input>
      <ha-input label="Card Title Text Line 2" .value=${this._text_card_title_2} .configValue=${"text_card_title_2"}
        @input=${this._valueChanged}>
      </ha-input>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_update_time"} .value=${this._entity_update_time} .includeDomains=${["sensor"]}
        name="entity_update_time" label="Entity Update Time" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      ${""!==this._entity_update_time?B`
      <div class="side-by-side">
        <div>
          <ha-formfield .label=${"Use Attribute"}>
            <ha-switch .checked=${!1!==this._update_time_use_attr} .configValue=${"update_time_use_attr"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        ${""!==this._entity_update_time&&!0===this._update_time_use_attr?B`<ha-selector .hass=${this.hass} .entityId=${this._entity_update_time}
          .selector = ${{attribute:{entity_id:this._entity_update_time}}} .required=${!1}
          .configValue=${"update_time_name_attr"} .value=${this._update_time_name_attr} name="update_time_name_attr" label="Attribute"
          allow-custom-value
          @value-changed=${this._valueChangedPicker}>
        </ha-selector>`:B``}
      </div>`:B``}
      <ha-input label="Update Time Prefix" .value=${this._text_update_time_prefix}
        .configValue=${"text_update_time_prefix"} @input=${this._valueChanged}>
      </ha-input>
      ${"forecast"!==this._overview_layout?B`<ha-entity-picker .hass=${this.hass} .configValue=${"entity_temperature"} .value=${this._entity_temperature} .includeDomains=${["sensor","weather"]}
          name="entity_temperature" label="Entity Current Temperature" allow-custom-entity
          @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_apparent_temp"} .value=${this._entity_apparent_temp} .includeDomains=${["sensor","weather"]}
          name="entity_apparent_temp" label="Entity Apparent Temperature" allow-custom-entity
          @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>`:B``}
      ${"observations"!==this._overview_layout?B`<ha-entity-picker .hass=${this.hass} .configValue=${"entity_forecast_icon"} .value=${this._entity_forecast_icon} .includeDomains=${["sensor","weather"]}
          name="entity_forecast_icon" label="Entity Forecast Icon" allow-custom-entity @value-changed=${this._valueChangedPicker}>
          </ha-entity-picker>
          <ha-entity-picker .hass=${this.hass} .configValue=${"entity_summary"} .value=${this._entity_summary} .includeDomains=${["sensor","weather"]}
            name="entity_summary" label="Entity Forecast Summary" allow-custom-entity @value-changed=${this._valueChangedPicker}>
          </ha-entity-picker>`:B``}
    `}_optionOverviewEditor(){return B`
      <div class="side-by-side">
        <label class='mdc-label'>Overview Layout</label>
        <select class='ha-select-compat' .configValue=${"overview_layout"} .value=${this._overview_layout} @change=${this._valueChanged}>
          <option value=""></option>
          <option value="complete">complete</option>
          <option value="observations">observations</option>
          <option value="forecast">forecast</option>
          <option value="title only">title only</option>
        </select>
        <div></div>
      </div>
      <div class="side-by-side">
        <div>
          <ha-formfield .label=${"Show temperature decimals"}>
            <ha-switch .checked=${!1!==this._option_show_overview_decimals} .configValue=${"option_show_overview_decimals"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div>
          <ha-formfield .label=${"Show separator"}>
            <ha-switch .checked=${!1!==this._option_show_overview_separator} .configValue=${"option_show_overview_separator"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}_sectionExtendedEditor(){return!0===this._extended_use_attr&&(void 0===this.hass||void 0===this.hass.states[this._entity_extended]||this.hass.states[this._entity_extended].attributes),B`
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_extended"} .value=${this._entity_extended} .includeDomains=${["sensor","weather"]}
        name="entity_extended" label="Entity Extended Forecast" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      ${""!==this._entity_extended?B`
        <div class="side-by-side">
          <div>
            <ha-formfield .label=${"Use Attribute"}>
              <ha-switch .checked=${!1!==this._extended_use_attr} .configValue=${"extended_use_attr"}
                @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
          </div>
          ${""!==this._entity_extended&&!0===this._extended_use_attr?B`<ha-selector .hass=${this.hass} .entityId=${this._entity_extended}
            .selector = ${{attribute:{entity_id:this._entity_extended}}} .required=${!1}
            .configValue=${"extended_name_attr"} .value=${this._extended_name_attr} name="extended_name_attr" label="Attribute"
            allow-custom-value
            @value-changed=${this._valueChangedPicker}>
          </ha-selector>`:B``}
        </div>`:B``}
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_todays_uv_forecast"} .value=${this._entity_todays_uv_forecast} .includeDomains=${["sensor"]}
        name="entity_todays_uv_forecast" label="Entity Today's UV Forecast" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_todays_fire_danger"} .value=${this._entity_todays_fire_danger} .includeDomains=${["sensor"]}
        name="entity_todays_fire_danger" label="Entity Today's Fire Danger" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
    `}_slotOptions(t){return B`${[["humidity","Current humidity"],["rainfall","Today's recorded rainfall"],["pressure","Current air pressure"],["wind","Current wind conditions"],["wind_gust","Current wind gust"],["wind_kt","Current wind conditions kts"],["visibility","Current visibility"],["observed_max","Today's observed max"],["observed_min","Today's observed min"],["forecast_max","Today's forecast max"],["forecast_min","Today's forecast min"],["temp_next","Next temp min/max"],["temp_following","Following temp min/max"],["temp_maximums","Observed/forecast max"],["temp_minimums","Observed/forecast min"],["sun_next","Next sun rise/set time"],["sun_following","Following sun rise/set time"],["moon","Moon phase"],["pop","Chance of rain"],["popforecast","Rainfall forecast"],["possible_today","Today's forecast rainfall"],["possible_tomorrow","Tomorrow's forecast rainfall"],["uv_summary","Today's uv forecast"],["fire_danger","Today's fire danger"],["custom1","Custom entity 1"],["custom2","Custom entity 2"],["custom3","Custom entity 3"],["custom4","Custom entity 4"],["empty","Blank slot"],["remove","Remove slot"]].map(([e,i])=>B`<option value="${e}" ?selected=${t===e}>${i}</option>`)}`}_sectionSlotsEditor(){return B`
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 1</label>
        <select class='ha-select-compat' .configValue=${"slot_l1"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l1)}
        </select>
        <label class='mdc-label'>Slot Right 1</label>
        <select class='ha-select-compat' .configValue=${"slot_r1"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r1)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 2</label>
        <select class='ha-select-compat' .configValue=${"slot_l2"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l2)}
        </select>
        <label class='mdc-label'>Slot Right 2</label>
        <select class='ha-select-compat' .configValue=${"slot_r2"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r2)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 3</label>
        <select class='ha-select-compat' .configValue=${"slot_l3"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l3)}
        </select>
        <label class='mdc-label'>Slot Right 3</label>
        <select class='ha-select-compat' .configValue=${"slot_r3"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r3)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 4</label>
        <select class='ha-select-compat' .configValue=${"slot_l4"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l4)}
        </select>
        <label class='mdc-label'>Slot Right 4</label>
        <select class='ha-select-compat' .configValue=${"slot_r4"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r4)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 5</label>
        <select class='ha-select-compat' .configValue=${"slot_l5"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l5)}
        </select>
        <label class='mdc-label'>Slot Right 5</label>
        <select class='ha-select-compat' .configValue=${"slot_r5"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r5)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 6</label>
        <select class='ha-select-compat' .configValue=${"slot_l6"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l6)}
        </select>
        <label class='mdc-label'>Slot Right 6</label>
        <select class='ha-select-compat' .configValue=${"slot_r6"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r6)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 7</label>
        <select class='ha-select-compat' .configValue=${"slot_l7"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l7)}
        </select>
        <label class='mdc-label'>Slot Right 7</label>
        <select class='ha-select-compat' .configValue=${"slot_r7"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r7)}
        </select>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Slot Left 8</label>
        <select class='ha-select-compat' .configValue=${"slot_l8"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_l8)}
        </select>
        <label class='mdc-label'>Slot Right 8</label>
        <select class='ha-select-compat' .configValue=${"slot_r8"} @change=${this._valueChanged}>
          ${this._slotOptions(this._slot_r8)}
        </select>
      </div>
      ${this._optional_entities}
    `}_optionSlotsEditor(){return B`
      <div class="side-by-side">
        <div>
          <ha-formfield .label=${"Todays Temperature Decimals"}>
            <ha-switch .checked=${!1!==this._option_today_temperature_decimals} .configValue=${"option_today_temperature_decimals"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <label class='mdc-label'>Pressure Decimals</label>
        <select class='ha-select-compat' .configValue=${"option_pressure_decimals"} .value=${null!==this._option_pressure_decimals?String(this._option_pressure_decimals):""} @change=${this._valueChanged}>
          <option value=""></option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="side-by-side">
        <div>
          <ha-formfield .label=${"Todays Rainfall Decimals"}>
            <ha-switch .checked=${!1!==this._option_today_rainfall_decimals} .configValue=${"option_today_rainfall_decimals"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div>
          <ha-formfield .label=${"Forecast Temperature Decimals"}>
            <ha-switch .checked=${!1!==this._option_forecast_decimals} .configValue=${"option_forecast_decimals"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
      </div>
      <div class="side-by-side">
        <div>
          <ha-formfield .label=${"Show Precipitation Probability in Forecast"}>
            <ha-switch .checked=${!1!==this._option_show_forecast_pop} .configValue=${"option_show_forecast_pop"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div>
          <ha-formfield .label=${"Show Wind in Forecast"}>
            <ha-switch .checked=${!0===this._option_show_forecast_wind} .configValue=${"option_show_forecast_wind"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div>
          <ha-formfield .label=${"Show Gust in Wind Slot"}>
            <ha-switch .checked=${!1!==this._option_show_gust_in_wind} .configValue=${"option_show_gust_in_wind"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div>
          <ha-formfield .label=${"Colour Fire Danger"}>
            <ha-switch .checked=${!1!==this._option_color_fire_danger} .configValue=${"option_color_fire_danger"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div>
        </div>
      </div>
    `}_sectionDailyForecastEditor(){return!0===this._daily_extended_use_attr&&(void 0===this.hass||void 0===this.hass.states[this._entity_extended_1]||this.hass.states[this._entity_extended_1].attributes),B`
      <ha-entity-picker .hass=${this.hass} .configValue=${"weather_entity"} .value=${this._weather_entity} .includeDomains=${["weather"]}
        name="weather_entity" label="Weather Entity with Forecasts" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <label class='mdc-label'>Forecast Type</label>
      <select class='ha-select-compat' .configValue=${"forecast_type"} .value=${this._forecast_type} @change=${this._valueChanged}>
        <option value=""></option>
        <option value="daily">Daily</option>
        <option value="hourly">Hourly</option>
        <option value="twice_daily">Twice Daily</option>
      </select>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_forecast_icon_1"} .value=${this._entity_forecast_icon_1} .includeDomains=${["sensor","weather"]}
        name="entity_forecast_icon_1" label="Entity Forecast Icon 1" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_summary_1"} .value=${this._entity_summary_1} .includeDomains=${["sensor","weather"]}
        name="entity_summary_1" label="Entity Forecast Summary 1" allow-custom-entity
        @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_forecast_min_1"} .value=${this._entity_forecast_min_1} .includeDomains=${["sensor","weather"]}
        name="entity_forecast_min_1" label="Entity Forecast Min 1" allow-custom-entity @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_forecast_max_1"} .value=${this._entity_forecast_max_1} .includeDomains=${["sensor","weather"]}
        name="entity_forecast_max_1" label="Entity Forecast Max 1" allow-custom-entity @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_pop_1"} .value=${this._entity_pop_1}  .includeDomains=${["sensor","weather"]}
        name="entity_pop_1" label="Entity Forecast Chance of Rain 1" allow-custom-entity @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      <ha-entity-picker .hass=${this.hass} .configValue=${"entity_pos_1"} .value=${this._entity_pos_1}  .includeDomains=${["sensor","weather"]}
        name="entity_pos_1" label="Entity Forecast Possible Rain 1" allow-custom-entity @value-changed=${this._valueChangedPicker}>
      </ha-entity-picker>
      ${"vertical"===this._daily_forecast_layout?B`
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_extended_1"} .value=${this._entity_extended_1} .includeDomains=${["sensor","weather"]}
          name="entity_extended_1" label="Entity Extended Forecast 1" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
        ${""!==this._entity_extended_1?B`
          <div class="side-by-side">
            <div>
              <ha-formfield .label=${"Use Attribute"}>
                <ha-switch .checked=${!1!==this._daily_extended_use_attr} .configValue=${"daily_extended_use_attr"}
                  @change=${this._valueChanged}>
                </ha-switch>
              </ha-formfield>
            </div>
            ${""!==this._entity_extended_1&&!0===this._daily_extended_use_attr?B`
              <ha-selector .hass=${this.hass} .entityId=${this._entity_extended_1} .configValue=${"daily_extended_name_attr"} .value=${this._daily_extended_name_attr} .includeDomains=${["sensor"]}
                .selector = ${{attribute:{entity_id:this._entity_extended_1}}} .required=${!1}
                name="daily_extended_name_attr" label="Attribute" allow-custom-value @value-changed=${this._valueChangedPicker}>
              </ha-selector>`:B``}
          </div>`:B``}
        <ha-entity-picker .hass=${this.hass} .configValue=${"entity_fire_danger_1"} .value=${this._entity_fire_danger_1} .includeDomains=${["sensor"]}
          name="entity_fire_danger_1" label="Entity Fire Danger 1" allow-custom-entity @value-changed=${this._valueChangedPicker}>
        </ha-entity-picker>
      `:""}
    `}_optionDailyForecastEditor(){return B`
      <div class="side-by-side">
        <label class='mdc-label'>Daily Forecast Layout</label>
        <select class='ha-select-compat' .configValue=${"daily_forecast_layout"} .value=${this._daily_forecast_layout} @change=${this._valueChanged}>
          <option value=""></option>
          <option value="horizontal">horizontal</option>
          <option value="vertical">vertical</option>
        </select>
        <div></div>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Daily Forecast Days</label>
        <select class='ha-select-compat' .configValue=${"daily_forecast_days"} .value=${null!==this._daily_forecast_days?String(this._daily_forecast_days):""} @change=${this._valueChanged}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          ${"vertical"===this._daily_forecast_layout?B`
            <option value="6">6</option>
            <option value="7">7</option>`:B``}
        </select>
        ${"vertical"===this._daily_forecast_layout?B`<label class='mdc-label'>Daily Extended Days</label>
          <select class='ha-select-compat' .configValue=${"daily_extended_forecast_days"} @change=${this._valueChangedNumber}>
          <option value=""></option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>`:B`<div></div>`}
      </div>

        <div class="side-by-side">
          <div>
            ${"vertical"!==this._daily_forecast_layout?B`
              <ha-formfield .label=${"Enable forecast tooltips"}>
                <ha-switch .checked = ${!1!==this._option_tooltips} .configValue = ${"option_tooltips"} @change=${this._valueChanged}>
                </ha-switch>
              </ha-formfield>`:B``}
          </div>
          <div>
            <ha-formfield .label=${"Include Today in Forecast"}>
              <ha-switch .checked=${!0===this._option_show_current_day} .configValue=${"option_show_current_day"}
                @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
          </div>
        </div>
        <div class="side-by-side">
          <div>
            <ha-formfield .label=${"Show Temperature Chart"}>
              <ha-switch .checked=${!0===this._option_show_temperature_chart} .configValue=${"option_show_temperature_chart"}
                @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
          </div>
          <div>
            <ha-formfield .label=${"Show Precipitation Chart"}>
              <ha-switch .checked=${!0===this._option_show_precipitation_chart} .configValue=${"option_show_precipitation_chart"}
                @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
          </div>
        </div>
        <div class="side-by-side">
        ${"vertical"===this._daily_forecast_layout?B`<div>
          <ha-formfield .label=${"Colour Fire Danger"}>
            <ha-switch .checked=${!1!==this._option_daily_color_fire_danger} .configValue=${"option_daily_color_fire_danger"}
              @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>`:B``}
        <div>
        </div>
      </div>
    `}_optionGlobalOptionsEditor(){var t;return B`
      <div class="side-by-side">
        <div>
          <ha-formfield .label=${"Show Static Icons"}>
            <ha-switch .checked=${!1!==this._option_static_icons} .configValue=${"option_static_icons"} @change=${this._valueChanged}>
            </ha-switch>
          </ha-formfield>
        </div>
        <div></div>
      </div>
      <div class="side-by-side">
        <label class='mdc-label'>Time Format</label>
        <select class='ha-select-compat' .configValue=${"option_time_format"} .value=${null!==(t=this._option_time_format)&&void 0!==t?t:""} @change=${this._valueChanged}>
          <option value=""></option>
          <option value="system">System</option>
          <option value="12hour">12 hour</option>
          <option value="24hour">24 hour</option>
        </select>
        <ha-input label="Locale" .value=${this._option_locale} .configValue=${"option_locale"} @input=${this._valueChanged}>
        </ha-input>
      </div>
    `}_renderSubElementEditor(){const t=[B`
        <div class="header">
          <div class="back-title">
            <mwc-icon-button @click=${this._goBack}>
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </mwc-icon-button>
          </div>
        </div>
      `];switch(this._subElementEditor){case"section_overview":t.push(this._sectionOverviewEditor());break;case"option_overview":t.push(this._optionOverviewEditor());break;case"section_extended":t.push(this._sectionExtendedEditor());break;case"section_slots":t.push(this._sectionSlotsEditor());break;case"option_slots":t.push(this._optionSlotsEditor());break;case"section_daily_forecast":t.push(this._sectionDailyForecastEditor());break;case"option_daily_forecast":t.push(this._optionDailyForecastEditor());break;case"option_global_options":t.push(this._optionGlobalOptionsEditor())}return B`${t}`}_goBack(){this._subElementEditor=void 0}get _show_section_overview(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.show_section_overview)}get _show_section_extended(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.show_section_extended)}get _show_section_slots(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.show_section_slots)}get _show_section_daily_forecast(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.show_section_daily_forecast)}getConfigBlock(t,e,i){switch(t){case"overview":return B`
          <div class="section-flex edit-overview-section">
            <ha-formfield .label=${"Overview Section"}>
              <ha-switch .checked = ${!1!==this._show_section_overview} .configValue = ${"show_section_overview"} @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
            <div>
              <ha-icon-button class="down-icon" .value=${"overview"} .path=${Ae} .disabled=${i} @click="${this._moveDown}">
              </ha-icon-button>
              <ha-icon-button class="up-icon" .value=${"overview"} .path=${Te} .disabled=${e} @click="${this._moveUp}">
              </ha-icon-button>
              <ha-icon-button class="edit-icon" .value=${"section_overview"} .path=${Oe} @click="${this._editSubmenu}">
              </ha-icon-button>
              <ha-icon-button class="option-icon" .value=${"option_overview"} .path=${Ie} @click="${this._editSubmenu}">
              </ha-icon-button>
            </div>
          </div>
        `;case"extended":return B`
          <div class="section-flex edit-extended-section">
            <ha-formfield .label=${"Extended Section"}>
              <ha-switch .checked=${!1!==this._show_section_extended} .configValue=${"show_section_extended"} @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
            <div>
              <ha-icon-button class="down-icon" .value=${"extended"} .path=${Ae} .disabled=${i} @click="${this._moveDown}">
              </ha-icon-button>
              <ha-icon-button class="up-icon" .value=${"extended"} .path=${Te} .disabled=${e} @click="${this._moveUp}">
              </ha-icon-button>
              <ha-icon-button class="edit-icon" .value=${"section_extended"} .path=${Oe} @click="${this._editSubmenu}">
              </ha-icon-button>
              <div class="no-icon"></div>
            </div>
          </div>
        `;case"slots":return B`
          <div class="section-flex edit-slots-section">
            <ha-formfield .label=${"Slots Section"}>
              <ha-switch .checked = ${!1!==this._show_section_slots} .configValue = ${"show_section_slots"} @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
            <div>
              <ha-icon-button class="down-icon" .value=${"slots"} .path=${Ae} .disabled=${i} @click="${this._moveDown}">
              </ha-icon-button>
              <ha-icon-button class="up-icon" .value=${"slots"} .path=${Te} .disabled=${e} @click="${this._moveUp}">
              </ha-icon-button>
              <ha-icon-button class="edit-icon" .value=${"section_slots"} .path=${Oe} @click="${this._editSubmenu}">
              </ha-icon-button>
              <ha-icon-button class="options-icon" .value=${"option_slots"} .path=${Ie} @click="${this._editSubmenu}">
              </ha-icon-button>
            </div>
          </div>
        `;case"daily_forecast":return B`
          <div class="section-flex edit-daily-forecast-section">
            <ha-formfield .label=${"Daily Forecast Section"}>
              <ha-switch .checked=${!1!==this._show_section_daily_forecast} .configValue=${"show_section_daily_forecast"} @change=${this._valueChanged}>
              </ha-switch>
            </ha-formfield>
            <div>
              <ha-icon-button class="down-icon" .value=${"daily_forecast"} .path=${Ae} .disabled=${i} @click="${this._moveDown}">
              </ha-icon-button>
              <ha-icon-button class="up-icon" .value=${"daily_forecast"} .path=${Te} .disabled=${e} @click="${this._moveUp}">
              </ha-icon-button>
              <ha-icon-button class="edit-icon" .value=${"section_daily_forecast"} .path=${Oe} @click="${this._editSubmenu}">
              </ha-icon-button>
              <ha-icon-button class="options-icon" .value=${"option_daily_forecast"} .path=${Ie} @click="${this._editSubmenu}">
              </ha-icon-button>
            </div>
          </div>
        `;case"global_options":return B`
          <div class="section-flex">
            <ha-formfield class="no-switch" .label=${"Global Options"}>
            </ha-formfield>
            <div>
              <div class="no-icon"></div>
              <ha-icon-button class="edit-icon" .value=${"option_global_options"} .path=${Ie} @click="${this._editSubmenu}">
              </ha-icon-button>
            </div>
          </div>
        `}return B``}render(){if(!this.hass||!this._helpers)return B``;if(this._subElementEditor)return this._renderSubElementEditor();const t=[],e=this._section_order||[];return e.forEach((i,o)=>{t.push(this.getConfigBlock(i,0===o,o+1===e.length))}),t.push(this.getConfigBlock("global_options",!1,!1)),B`${t}`}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChangedPicker(t){if(!this._config||!this.hass)return;const e=t.target,i=t.detail.value;this[`_${e.configValue}`]!==i&&(e.configValue&&(i?this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:i}):(this._config=Object.assign({},this._config),delete this._config[e.configValue])),Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}))}_editSubmenu(t){if(t.currentTarget){const e=t.currentTarget;this._subElementEditor=e.value}}_moveUp(t){if(this._config&&this.hass){if(t.currentTarget){const e=t.currentTarget;if(this._config.section_order){const t=this._config.section_order.findIndex(t=>t===e.value),i=[...this._config.section_order];[i[t],i[t-1]]=[this._config.section_order[t-1],this._config.section_order[t]],this._config=Object.assign(Object.assign({},this._config),{section_order:i})}}Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)})}}_moveDown(t){if(this._config&&this.hass){if(t.currentTarget){const e=t.currentTarget;if(this._config.section_order){const t=this._config.section_order.findIndex(t=>t===e.value),i=[...this._config.section_order];[i[t],i[t+1]]=[this._config.section_order[t+1],this._config.section_order[t]],this._config=Object.assign(Object.assign({},this._config),{section_order:i})}}Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)})}}_valueChanged(t){var e;if(!this._config||!this.hass)return;const i=t.target,o=void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:void 0!==i.checked?i.checked:i.value;if(this[`_${i.configValue}`]!==o){if(i.configValue)if(""===o){const t=Object.assign({},this._config);delete t[i.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[i.configValue]:o});Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)})}}_valueChangedNumber(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value||null===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:Number(e.value)})),Bt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}))}};Tn.elementDefinitions=Object.assign(Object.assign(Object.assign(Object.assign({"ha-card":customElements.get("ha-card")},An),an),mn),Qe),Tn.styles=ht`
    :host {
      display: block;
              /* --mdc-menu-min-width: var(--parentWidth); */
      --mdc-menu-item-height: 36px;
      --mdc-typography-subtitle1-font-size: 13px;
    }
    .ha-select-compat {
      display: block;
      width: 100%;
      padding: 8px;
      font-size: 14px;
      font-family: inherit;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #212121);
      cursor: pointer;
      box-sizing: border-box;
    }
    .ha-select-compat:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }
    label.mdc-label {
      display: block;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-top: 8px;
      margin-bottom: 2px;
    }
    ha-input {
      display: block;
    }
    ha-switch {
      --ha-switch-checked-background-color: var(--primary-color);
      --ha-switch-checked-thumb-background-color: var(--primary-text-color);
    }
    ha-formfield {
      height: 56px;
    }
    .no-icon {
      display: inline-flex;
      width: var(--mds-icon-button-size, 48px);
    }
    /* .option {
      cursor: pointer;
    } */
    /* .row {
      display: flex;
      margin-bottom: -14px;
      pointer-events: none;
    } */
    /* .title {
      padding-left: 16px;
      margin-top: -6px;
      pointer-events: none;
    } */
    /* .secondary {
      padding-left: 40px;
      color: var(--secondary-text-color);
      pointer-events: none;
    } */
    /* .values {
      padding-left: 16px;
      background: var(--secondary-background-color);
    } */
    .section-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
    }
    .side-by-side :not(:last-child) {
      padding-right: 4px;
    }
    .icon-side-by-side {
      display: flex;
    }
    .icon-condition {
      flex-grow: 1;
    }
    .no-switch {
      padding-left: 48px;
    }
    .condition_icon {
      position: relative;
    }
    .condition_icon .condition_icon_big {
      visibility: hidden;
      width: 96px;
      background-color: var(--card-background-color);
      border-radius: 6px;
      border-style: solid;
      border-width: 2px;
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      bottom: -50%;
      left: 60%;
      -webkit-transform: translateX(0%); /* Safari iOS */
      transform: translateX(-40%);
    }
    .condition_icon .condition_icon_big:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
      }
    .condition_icon:hover .condition_icon_big {
      visibility: visible
    }
  `,o([At({attribute:!1})],Tn.prototype,"hass",void 0),o([Tt()],Tn.prototype,"_config",void 0),o([Tt()],Tn.prototype,"_helpers",void 0),o([Tt()],Tn.prototype,"_subElementEditor",void 0),Tn=o([kt("platinum-weather-card-editor")],Tn);var On=Object.freeze({__proto__:null,get WeatherCardEditor(){return Tn}});export{ke as PlatinumWeatherCard};
