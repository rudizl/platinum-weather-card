var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};function s(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],s=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&s>=t.length&&(t=void 0),{value:t&&t[s++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),c=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(e,t))}return t}toString(){return this.cssText}}const h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,a))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var d;const u=window,_=u.trustedTypes,g=_?_.emptyScript:"",f=u.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},y="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),s=o.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;b[y]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:b}),(null!==(d=u.reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.6.3");const x=window,$=x.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,N="?"+O,A=`<${N}>`,k=document,M=()=>k.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,T="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,D=/>/g,U=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,z=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),q=new WeakMap,I=k.createTreeWalker(k,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===P?"!--"===c[1]?r=L:void 0!==c[1]?r=D:void 0!==c[2]?(W.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=U):void 0!==c[3]&&(r=U):r===U?">"===c[0]?(r=null!=n?n:P,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?U:'"'===c[3]?z:R):r===z||r===R?r=U:r===L||r===D?r=P:(r=U,n=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";o+=r===P?i+A:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+O+d):i+O+(-2===l?(s.push(void 0),e):d)}return[B(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=K.createElement(c,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(E)||e.startsWith(O)){const i=l[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+E).split(O),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?et:"@"===e[1]?it:X})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(W.test(s.tagName)){const t=s.textContent.split(O),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),I.nextNode(),a.push({type:2,index:++n});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===N)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(O,t+1));)a.push({type:7,index:n}),t+=O.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var n,o,r,a;if(e===H)return e;let c=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=F(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=c:i._$Cl=c),void 0!==c&&(e=Z(t,c._$AS(t,e.values),c,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);I.currentNode=n;let o=I.nextNode(),r=0,a=0,c=s[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new J(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new st(o,this,t)),this._$AV.push(e),c=s[++a]}r!==(null==c?void 0:c.index)&&(o=I.nextNode(),r++)}return I.currentNode=k,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),F(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&F(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new Y(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new J(this.k(M()),this.k(M()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Z(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Z(this,s[i+r],e,r),a===H&&(a=this._$AH[r]),o||(o=!F(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const tt=$?$.emptyScript:"";class et extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class it extends X{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:j)===H)return;const s=this._$AH,n=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==j&&(s===j||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=x.litHtmlPolyfillSupport;null==nt||nt(K,J),(null!==(w=x.litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.8.0");const ot=window,rt=ot.ShadowRoot&&(void 0===ot.ShadyCSS||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),ct=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt{constructor(t,e,i){if(this._$cssResult$=!0,i!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=ct.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(e,t))}return t}toString(){return this.cssText}}const ht=t=>new lt("string"==typeof t?t:t+"",void 0,at),dt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new lt(i,t,at)},ut=rt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ht(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const gt=window,ft=gt.trustedTypes,pt=ft?ft.emptyScript:"",vt=gt.reactiveElementPolyfillSupport,mt={toAttribute(t,e){switch(e){case Boolean:t=t?pt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},yt=(t,e)=>e!==t&&(e==e||t==t),bt={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:yt},wt="finalized";class xt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||bt}static finalize(){if(this.hasOwnProperty(wt))return!1;this[wt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ut(t))}else void 0!==t&&e.push(ut(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{rt?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),s=ot.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=bt){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:mt).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:mt;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $t,St;xt[wt]=!0,xt.elementProperties=new Map,xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},null==vt||vt({ReactiveElement:xt}),(null!==(_t=gt.reactiveElementVersions)&&void 0!==_t?_t:gt.reactiveElementVersions=[]).push("1.6.3");class Et extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new J(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}Et.finalized=!0,Et._$litElement$=!0,null===($t=globalThis.litElementHydrateSupport)||void 0===$t||$t.call(globalThis,{LitElement:Et});const Ot=globalThis.litElementPolyfillSupport;null==Ot||Ot({LitElement:Et}),(null!==(St=globalThis.litElementVersions)&&void 0!==St?St:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),At=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):At(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt(t){return kt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct;const Tt=null!=(null===(Ct=window.HTMLSlotElement)||void 0===Ct?void 0:Ct.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function Pt(t){const{slot:e,selector:i}=null!=t?t:{};return Ft({descriptor:s=>({get(){var s;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(n),r=null!=o?Tt(o,t):[];return i?r.filter(t=>t.matches(i)):r},enumerable:!0,configurable:!0})})}var Lt,Dt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Lt||(Lt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Dt||(Dt={}));var Ut=["closed","locked","off"],Rt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},zt=function(t){Rt(window,"haptic",t)},Wt=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some(function(t){return t.user===e.user.id})||(zt("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&Rt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Rt(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,n=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(o,s,{entity_id:e})})(t,e,Ut.includes(t.states[e].state))}(e,i.entity),zt("success"));break;case"call-service":if(!s.service)return void zt("failure");var n=s.service.split(".",2);e.callService(n[0],n[1],s.service_data,s.target),zt("success");break;case"fire-dom-event":Rt(t,"ll-custom",s)}};function Vt(t){return void 0!==t&&"none"!==t.action}var Ht=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,s){return t[0]===e&&(i=s,!0)}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),s=this.__entries__[i];return s&&s[1]},e.prototype.set=function(e,i){var s=t(this.__entries__,e);~s?this.__entries__[s][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,s=t(i,e);~s&&i.splice(s,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,s=this.__entries__;i<s.length;i++){var n=s[i];t.call(e,n[1],n[0])}},e}()}(),jt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,qt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),It="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(qt):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)};var Bt=["top","right","bottom","left","width","height","size","weight"],Gt="undefined"!=typeof MutationObserver,Kt=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,s=!1,n=0;function o(){i&&(i=!1,t()),s&&a()}function r(){It(o)}function a(){var t=Date.now();if(i){if(t-n<2)return;s=!0}else i=!0,s=!1,setTimeout(r,e);n=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){jt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Gt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){jt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Bt.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Zt=function(t,e){for(var i=0,s=Object.keys(e);i<s.length;i++){var n=s[i];Object.defineProperty(t,n,{value:e[n],enumerable:!1,writable:!1,configurable:!0})}return t},Yt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||qt},Jt=se(0,0,0,0);function Xt(t){return parseFloat(t)||0}function Qt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce(function(e,i){return e+Xt(t["border-"+i+"-width"])},0)}function te(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Jt;var s=Yt(t).getComputedStyle(t),n=function(t){for(var e={},i=0,s=["top","right","bottom","left"];i<s.length;i++){var n=s[i],o=t["padding-"+n];e[n]=Xt(o)}return e}(s),o=n.left+n.right,r=n.top+n.bottom,a=Xt(s.width),c=Xt(s.height);if("border-box"===s.boxSizing&&(Math.round(a+o)!==e&&(a-=Qt(s,"left","right")+o),Math.round(c+r)!==i&&(c-=Qt(s,"top","bottom")+r)),!function(t){return t===Yt(t).document.documentElement}(t)){var l=Math.round(a+o)-e,h=Math.round(c+r)-i;1!==Math.abs(l)&&(a-=l),1!==Math.abs(h)&&(c-=h)}return se(n.left,n.top,a,c)}var ee="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Yt(t).SVGGraphicsElement}:function(t){return t instanceof Yt(t).SVGElement&&"function"==typeof t.getBBox};function ie(t){return jt?ee(t)?function(t){var e=t.getBBox();return se(0,0,e.width,e.height)}(t):te(t):Jt}function se(t,e,i,s){return{x:t,y:e,width:i,height:s}}var ne=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=se(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=ie(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),oe=function(t,e){var i=function(t){var e=t.x,i=t.y,s=t.width,n=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,r=Object.create(o.prototype);return Zt(r,{x:e,y:i,width:s,height:n,top:i,right:e+s,bottom:n+i,left:e}),r}(e);Zt(this,{target:t,contentRect:i})},re=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Ht,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Yt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new ne(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Yt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new oe(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ae="undefined"!=typeof WeakMap?new WeakMap:new Ht,ce=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Kt.getInstance(),s=new re(e,i,this);ae.set(this,s)};["observe","unobserve","disconnect"].forEach(function(t){ce.prototype[t]=function(){var e;return(e=ae.get(this))[t].apply(e,arguments)}});var le=void 0!==qt.ResizeObserver?qt.ResizeObserver:ce;const he=(t,e)=>t(`component.weather.entity_component._.state.${e}`)||e,de=t=>null!=t?t:j,ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_e=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const fe="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class pe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:fe?"100px":"50px",height:fe?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Rt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Rt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Rt(t,"action",{action:"double_tap"})):Rt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",t=>{13===t.keyCode&&s(t)})}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-weather",pe);const ve=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-weather"))return t.querySelector("action-handler-weather");const e=document.createElement("action-handler-weather");return t.appendChild(e),e})();i&&i.bind(t,e)},me=_e(class extends ge{update(t,[e]){return ve(t.element,e),H}render(t){}});console.info("%c  PLATINUM-WEATHER-CARD-TL  \n%c  Version 1.3.0-beta.4          ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"platinum-weather-card",name:"Platinum Weather Card",description:"An fully customisable weather card with a GUI configuration"});let ye=class extends Et{constructor(){super(...arguments),this._cardWidth=492,this._error=[]}static get properties(){return{_config:{},_forecastEvent:{},hass:{}}}static async getConfigElement(){return await import("./editor-22cd65da.js"),document.createElement("platinum-weather-card-editor")}static getStubConfig(){return{}}getCardSize(){const t=16+this._getCardSizeOverviewSection()+this._getCardSizeExtendedSection()+this._getCardSizeSlotsSection()+this._getCardSizeDailyForecastSection();return Math.ceil(t/50)}setConfig(t){if(!t)throw new Error("Invalid configuration");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Weather"},t)}_needForecastSubscription(){return this._config&&this._config.weather_entity&&this._config.forecast_type&&"legacy"!==this._config.forecast_type}_unsubscribeForecastEvents(){this._subscribed&&(this._subscribed.then(t=>t()),this._subscribed=void 0)}async _subscribeForecastEvents(){var t,e,i,s;(this._unsubscribeForecastEvents(),this.isConnected&&this.hass&&this._config&&this._needForecastSubscription())&&(this._subscribed=(t=this.hass,e=this._config.weather_entity,i=this._config.forecast_type,s=t=>{this._forecastEvent=t},t.connection.subscribeMessage(s,{type:"weather/subscribe_forecast",forecast_type:i,entity_id:e})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._config&&this.hass&&this._subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeForecastEvents()}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config")||t.has("_forecastEvent"))return!0;if(t.has("hass"))return!0;const e=t.get("hass")||void 0;if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;if(!1===Object.keys(this._config).every(t=>null===t.match(/^entity_/)||e.states[this._config[t]]===this.hass.states[this._config[t]]))return!0;if(this._config.show_section_daily_forecast){const t=this._config.daily_forecast_days||5;for(const s of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1"])if(void 0!==this._config[s]&&null===this._config[s].match("^weather.")){const n=this._config[s].match(/(\d+)(?!.*\d)/g);if(n)for(var i=1;i<t;i++){const t=this._config[s].replace(/(\d+)(?!.*\d)/g,Number(n)+i);if(e.states[t]!==this.hass.states[t])return!0}}}return t.has("config")}updated(t){this.hass&&this._config&&(!t.has("_config")&&this._subscribed||this._subscribeForecastEvents())}firstUpdated(){this._resize(),this._attachObserver()}_attachObserver(){var t;this._resizeObserver||(this._resizeObserver=new le(function(t,e,i){var s;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),o=this,r=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||t.apply(o,n)},e),r&&t.apply(o,n)}}(()=>this._resize(),250,!1)));(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card"))&&this._resizeObserver.observe(this)}_resize(){var t;if(!this.isConnected)return;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._cardWidth=e.getBoundingClientRect().width)}_checkForErrors(){this._error=[],Object.keys(this._config).forEach(t=>{null!==t.match(/^entity_/)&&void 0===this.hass.states[this._config[t]]&&this._error.push(`'${t}=${this._config[t]}' not found`)});for(const t of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1","entity_extended_1","entity_pop","entity_forecast_min","entity_forecast_max"])if(void 0!==this._config[t])if(this._config[t].match("^weather.")){if(void 0===this.hass.states[this._config.weather_entity]){this._error.push("'weather_entity needs to be defined (not found).");break}if(this._config[t]!==this._config.weather_entity){this._error.push(`'${t} needs to be the same as weather_entity.`);break}const e=this.forecast1;if(void 0!==e){const i=new Date;switch(i.setDate(i.getDate()+1),t){case"entity_forecast_icon_1":void 0===this._getForecastPropFromWeather(e,i,"condition")&&this._error.push(`'${t} attribute forecast[1].condition not found`);break;case"entity_forecast_min_1":void 0===this._getForecastPropFromWeather(e,i,"templow")&&this._error.push(`'${t} attribute forecast[1].templow not found`);break;case"entity_forecast_max_1":void 0===this._getForecastPropFromWeather(e,i,"temperature")&&this._error.push(`'${t} attribute forecast[1].temperature not found`);break;case"entity_pop_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation_probability")&&this._error.push(`'${t} attribute forecast[1].precipitation_probability not found`);break;case"entity_pos_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation")&&this._error.push(`'${t} attribute forecast[1].precipitation not found`)}}}else{const e=this._config[t].match(/(\d+)(?!.*\d)/g);if(e){const i=this._config[t].replace(/(\d+)(?!.*\d)/g,Number(e)+1);void 0===this.hass.states[i]&&this._error.push(`'${t}'+'1'=${i}' not found`)}else this._error.push(`'${t}=${this._config[t]}' value needs to have a number`)}return void 0!==this._config.weather_entity&&(void 0!==this._config.forecast_type?["daily","hourly","twice_daily"].includes(this._config.forecast_type)||this._error.push("'forecast_type must be daily, hourly, or twice_daily"):this._error.push("'forecast_type needs to be configured.")),0!==this._error.length}_renderUpdateTime(){if(this._config.entity_update_time&&this.hass.states[this._config.entity_update_time]&&void 0!==this.hass.states[this._config.entity_update_time].state)if(!0===this._config.update_time_use_attr){if(void 0!==this._config.update_time_name_attr){const t=this._config.update_time_name_attr.toLowerCase().split(".").reduce((t,e)=>void 0!==t?t[e]:void 0,this.hass.states[this._config.entity_update_time].attributes);if(void 0!==t){const e=new Date(`${t}`);switch(this.timeFormat){case"12hour":return V`${e.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+this._formatDate(e)}`;case"24hour":return V`${e.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+this._formatDate(e)}`;case"system":return V`${e.toLocaleTimeString(this.locale||navigator.language,{timeStyle:"short"}).replace(" ","")+", "+this._formatDate(e)}`}}}}else{const t=new Date(this.hass.states[this._config.entity_update_time].state);switch(this.timeFormat){case"12hour":return V`${t.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+this._formatDate(t)}`;case"24hour":return V`${t.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+this._formatDate(t)}`;case"system":return V`${t.toLocaleTimeString(this.locale||navigator.language,{timeStyle:"short"}).replace(" ","")+", "+this._formatDate(t)}`}}return V`---`}_renderCompleteOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return V``;const i=this._weatherIcon(this.forecastIcon),s=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),n="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,o="unknown"!==i?V``:V`<div class="unknown-forecast">${this.forecastIcon}</div>`,r=V`<div class="big-icon"><img src="${s.href}" width="100%" height="100%" title="${n}"></div>`,a=V`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,c=this.currentApparentTemperature,l=""!=c?V`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${c}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:V``,h=!0===this._config.option_show_overview_separator?V`<hr class=line>`:"",d=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=V`<div class="forecast-text">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:V`<div class="forecast-text">---</div>`:V``;return V`
      <div class="overview-section section">
        ${this._config.text_card_title?V`<div class="card-header">${this._config.text_card_title}</div>`:V``}
        ${this._config.text_card_title_2?V`<div class="card-header">${this._config.text_card_title_2}</div>`:V``}
        ${this._config.entity_update_time?V`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:V``}
        <div class="overview-top">
          <div class="top-left">${r}${o}</div>
          <div class="currentTemps">${a}${l}</div>
        </div>
        ${d}
        ${h}
      </div>
    `}_renderObservationsOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return V``;const e=this._cardWidth>=344?" stacked":"",i=V`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,s=this.currentApparentTemperature,n=""!=s?V`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${s}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:V``,o=!0===this._config.option_show_overview_separator?V`<hr class=line>`:"";return V`
      <div class="overview-section section${e}">
        ${this._config.text_card_title?V`<div class="card-header">${this._config.text_card_title}</div>`:V``}
        ${this._config.text_card_title_2?V`<div class="card-header">${this._config.text_card_title_2}</div>`:V``}
        ${this._config.entity_update_time?V`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:V``}
      </div>
      <div class="overview-section section">
        <div class="overview-top">
          <div class="top-left-obs"></div>
          <div class="currentTemps">${i}${n}</div>
        </div>
        ${o}
      </div>
    `}_renderTitleOnlyOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return V``;const e=!0===this._config.option_show_overview_separator?V`<hr class=line>`:"";return V`
      <div class="overview-section section">
        ${this._config.text_card_title?V`<div class="card-header">${this._config.text_card_title}</div>`:V``}
        ${this._config.text_card_title_2?V`<div class="card-header">${this._config.text_card_title_2}</div>`:V``}
        ${this._config.entity_update_time?V`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:V``}
        ${e}
      </div>
    `}_renderForecastOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return V``;const i=this._weatherIcon(this.forecastIcon),s=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),n="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,o="unknown"!==i?V``:V`<div class="unknown-forecast">${this.forecastIcon}</div>`,r=V`<div class="big-icon"><img src="${s.href}" width="100%" height="100%" title="${n}"></div>`,a=!0===this._config.option_show_overview_separator?V`<hr class=line>`:"",c=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=V`<div class="forecast-text-right">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:V`<div class="forecast-text-right">---</div>`:V``;return V`
      <div class="overview-section section">
        ${this._config.text_card_title?V`<div class="card-header">${this._config.text_card_title}</div>`:V``}
        ${this._config.text_card_title_2?V`<div class="card-header">${this._config.text_card_title_2}</div>`:V``}
        ${this._config.entity_update_time?V`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:V``}
        <div class="overview-top">
          <div class="top-left">${r}${o}</div>
          ${c}
        </div>
        ${a}
      </div>
    `}_getCardSizeOverviewSection(){var t=0;if(!1!==this._config.show_section_overview){if("observations"===this._config.overview_layout)return 76;t=16,t+=void 0!==this._config.text_card_title?20:0,t+=void 0!==this._config.text_card_title_2?20:0,t+=void 0!==this._config.entity_update_time?20:0,"title only"!==this._config.overview_layout&&(t+="forecast"!==this._config.overview_layout&&void 0!==this._config.entity_summary?145:120)}return t}_renderOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return V``;switch(this._config.overview_layout||"complete"){case"observations":return this._renderObservationsOverviewSection();case"forecast":return this._renderForecastOverviewSection();case"title only":return this._renderTitleOnlyOverviewSection();default:return this._renderCompleteOverviewSection()}}_getCardSizeExtendedSection(){var t=0;return!1!==this._config.show_section_extended&&(t+=16,t+=this._config.entity_extended?40:0,t+=void 0!==this._config.entity_todays_uv_forecast||void 0!==this._config.entity_todays_fire_danger?20:0),t}_renderExtendedSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_extended)||void 0===this._config.entity_extended&&void 0===this._config.entity_todays_uv_forecast&&void 0===this._config.entity_todays_fire_danger)return V``;const i=this._config.entity_extended||"";var s=[];if(void 0!==this.hass.states[i])if(null===(e=this._config.entity_extended)||void 0===e?void 0:e.match("^weather.")){const t=this.forecast1;var n;if(void 0!==t)n=void 0,!0===this._config.extended_use_attr?void 0!==this._config.extended_name_attr&&(n=t[0][this._config.extended_name_attr]):n="extended_use_attr: - must be set to true when entity_extended is set to a weather entity",void 0!==n&&s.push(V`${n}`)}else if(!0===this._config.extended_use_attr){if(void 0!==this._config.extended_name_attr){const t=this._config.extended_name_attr.toLowerCase().split(".").reduce((t,e)=>void 0!==t?t[e]:void 0,this.hass.states[i].attributes);void 0!==t&&s.push(V`${t}`)}}else void 0!==this.hass.states[i]&&s.push(V`${this.hass.states[i].state}`);return s.push(V`${this._config.entity_todays_uv_forecast&&this.hass.states[this._config.entity_todays_uv_forecast]&&"unknown"!==this.hass.states[this._config.entity_todays_uv_forecast].state?" "+this.hass.states[this._config.entity_todays_uv_forecast].state:""}`),s.push(V`${this._config.entity_todays_fire_danger&&this.hass.states[this._config.entity_todays_fire_danger]&&"unknown"!==this.hass.states[this._config.entity_todays_fire_danger].state?" "+this.hass.states[this._config.entity_todays_fire_danger].state:""}`),V`
      <div class="extended-section section">
        <div class="f-extended">
          ${s}
        </div>
      </div>
    `}_getCardSizeSlotsSection(){var t=0;if(!1!==this._config.show_section_slots){var e=("remove"!==this._config.slot_l1?1:0)+("remove"!==this._config.slot_l2?1:0)+("remove"!==this._config.slot_l3?1:0)+("remove"!==this._config.slot_l4?1:0)+("remove"!==this._config.slot_l5?1:0)+(void 0!==this._config.slot_l6&&"remove"!==this._config.slot_l6?1:0)+(void 0!==this._config.slot_l7&&"remove"!==this._config.slot_l7?1:0)+(void 0!==this._config.slot_l8&&"remove"!==this._config.slot_l8?1:0),i=("remove"!==this._config.slot_r1?1:0)+("remove"!==this._config.slot_r2?1:0)+("remove"!==this._config.slot_r3?1:0)+("remove"!==this._config.slot_r4?1:0)+("remove"!==this._config.slot_r5?1:0)+(void 0!==this._config.slot_r6&&"remove"!==this._config.slot_r6?1:0)+(void 0!==this._config.slot_r7&&"remove"!==this._config.slot_r7?1:0)+(void 0!==this._config.slot_r8&&"remove"!==this._config.slot_r8?1:0);t+=16+24*Math.max(e,i)}return t}_renderSlotsSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_slots))return V``;var e=!0===this._config.use_old_column_format?V`
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
    `:V`
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
    `;return V`
      <div class="slot-section section">${e}</div>
    `}_renderHorizontalDailyForecastSection(){var t,e,i,s,n,o,r;const a=[],c=this._config.daily_forecast_days||5;for(var l=0;l<c;l++){const w=new Date;var h,d,u;if(w.setDate(w.getDate()+l+1),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;var _;if(void 0!==this.forecast1&&(_=this._getForecastPropFromWeather(this.forecast1,w,"condition")),void 0===_)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&_?this._weatherIcon(_):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=V`<li class="f-slot-horiz-icon"><i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i></li>`}else{var g=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+l)):void 0;if(void 0===t||void 0===this.hass.states[t])break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=V`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i>`}(null===(e=this._config.entity_forecast_max_1)||void 0===e?void 0:e.match("^weather."))?void 0!==this.forecast1&&(d=this._getForecastPropFromWeather(this.forecast1,w,"temperature")):d=(g=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+l))].state:void 0,(null===(i=this._config.entity_forecast_min_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,w,"templow")):u=(g=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+l))].state:void 0;const x=V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,$=!0===this._config.old_daily_format?V`
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text highTemp">${d?Number(d).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
              ${x}
            </span>
          </li>
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text lowTemp">${u?Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
              ${x}
            </span>
          </li>`:"highlow"===this._config.tempformat?V`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text highTemp">${d?Number(d).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text lowTemp">${u?Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                ${x}
              </span>
            </li>`:V`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text lowTemp">${u?Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text highTemp">${d?Number(d).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0}):"---"}</div>
                ${x}
              </span>
            </li>
          `;var f,p,v;if(null===(s=this._config.entity_pop_1)||void 0===s?void 0:s.match("^weather.")){const t=this._config.entity_pop_1;var m;void 0!==this.forecast1&&(m=this._getForecastPropFromWeather(this.forecast1,w,"precipitation_probability")),f=t&&!1!==this._config.option_show_forecast_pop?V`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${this.hass.states[t]&&void 0!==m?Math.round(Number(m)):"---"}</div><div class="unit">%</div></span></li>`:V``}else{const t=(g=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+l)):void 0;f=g&&!1!==this._config.option_show_forecast_pop?V`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></span></li>`:V``}if(null===(n=this._config.entity_pos_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_pos_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,w,"precipitation")),p=t?V`<li class="f-slot-horiz-text"><span><div class="pos">${this.hass.states[t]&&void 0!==y?y:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:V``}else{const t=(g=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+l)):void 0;p=g?V`<li class="f-slot-horiz-text"><span><div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:V``}if(null===(o=this._config.entity_summary_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_summary_1;var b;void 0!==this.forecast1&&(b=null!==(r=this._getForecastPropFromWeather(this.forecast1,w,"detailed_description"))&&void 0!==r?r:this._getForecastPropFromWeather(this.forecast1,w,"condition")),v=V`<div class="fcasttooltipblock" id="fcast-summary-${l}" style="width:${100*c}%;left:-${100*l}%;"><div class="fcasttooltiptext">${this.hass.states[t]&&void 0!==b?he(this.hass.localize,b):"---"}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/c/2+l*(100/c)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}else{const t=(g=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(g)+l)):void 0;v=V`<div class="fcasttooltipblock" id="fcast-summary-${l}" style="width:${100*c}%;left:-${100*l}%;"><div class="fcasttooltiptext">${this._config.option_tooltips&&t?this.hass.states[t]?this.hass.states[t].state:"---":""}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/c/2+l*(100/c)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}a.push(V`
        <div class="day-horiz fcasttooltip">
          <ul class="f-slot-horiz">
            <li class="f-slot-horiz-text"><span class="dayname">${w?w.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</span></li>
            ${h}
            ${$}
            ${f}
            ${p}
          </ul>
          ${v}
        </div>
      `)}return V`
      <div class="daily-forecast-horiz-section section">
        ${a}
      </div>
    `}_renderVerticalDailyForecastSection(){var t,e,i,s,n,o,r;const a=[],c=this._config.daily_forecast_days||5;for(var l=0;l<c;l++){const c=new Date;var h,d,u,_,g,f;if(c.setDate(c.getDate()+l+1),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;if(void 0!==this.forecast1&&(f=this._getForecastPropFromWeather(this.forecast1,c,"condition")),void 0===f)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&f?this._weatherIcon(f):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=V`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}else{var p=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=p&&this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;if(!t||void 0===this.hass.states[t]||"unknown"===this.hass.states[t].state)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(void 0!==this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=V`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}if(null===(e=this._config.entity_summary_1)||void 0===e?void 0:e.match("^weather.")){void 0!==this.forecast1&&(f=this._getForecastPropFromWeather(this.forecast1,c,"condition"));var v=(p=!0)?V`
          <div class="f-summary-vert">${this.hass.states[this._config.entity_summary_1]?this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary_1],f):"---"}</div>`:""}else{const t=(p=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;v=p?V`
          <div class="f-summary-vert">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:""}(null===(i=this._config.entity_forecast_max_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(d=this._getForecastPropFromWeather(this.forecast1,c,"temperature")):d=(p=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l))].state:void 0,(null===(s=this._config.entity_forecast_min_1)||void 0===s?void 0:s.match("^weather."))?void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,c,"templow")):u=(p=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l))].state:void 0;const S=V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,E=u?V`
        <div class="f-slot-vert">
          <div class="temp-label">Min: </div>
          <div class="low-temp">${Number(u).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0})}</div>${S}
        </div>`:V`---`,O=d?V`
        <div class="f-slot-vert">
          <div class="temp-label">Max: </div>
          <div class="high-temp">${Number(d).toLocaleString(this.locale,{minimumFractionDigits:this._config.option_forecast_decimals?1:0,maximumFractionDigits:this._config.option_forecast_decimals?1:0})}</div>${S}
        </div>`:V`---`;if(null===(n=this._config.entity_pop_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_pop_1;var m;void 0!==this.forecast1&&(m=this._getForecastPropFromWeather(this.forecast1,c,"precipitation_probability")),_=t?V`<div class="f-slot-vert"><div class="f-label">Chance of rain </div>
        <div class="pop">${this.hass.states[t]&&void 0!==m?Math.round(Number(m)):"---"}</div><div class="unit">%</div></div>`:V``}else{const t=(p=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;_=p?V`
          <div class="f-slot-vert"><div class="f-label">Chance of rain </div>
          <div class="pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></div>`:V``}if(null===(o=this._config.entity_pos_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_pos_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,c,"precipitation")),g=t?V`<div class="f-slot-vert"><div class="f-label">Possible rain </div>
        <div class="pos">${this.hass.states[t]&&void 0!==y?y:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></div>`:V``}else{const t=(p=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;g=p?V`
          <div class="f-slot-vert"><div class="f-label">Possible rain </div>
          <div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>
          <div class="unit">${this.getUOM("precipitation")}</div></div>`:V``}var b,w=V``;if(null===(r=this._config.entity_extended_1)||void 0===r?void 0:r.match("^weather.")){if(void 0!==this.forecast1)b=void 0,!0===this._config.daily_extended_use_attr?void 0!==this._config.daily_extended_name_attr&&(b=this._getForecastPropFromWeather(this.forecast1,c,this._config.daily_extended_name_attr)):b="daily_extended_use_attr: - must be set to true when entity_extended_1 is set to a weather entity",void 0!==b&&(w=b?V`<div class="f-extended">${b}</div>`:V``)}else if(p=!!(this._config.entity_extended_1&&l<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g),l<(this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days:7))if(!0===this._config.daily_extended_use_attr){const t=(p=!!this._config.entity_extended_1&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):this._config.entity_extended_1;if(t&&void 0!==this.hass.states[t]){const e=null==(p=!!(this._config.daily_extended_name_attr&&l<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.daily_extended_name_attr.match(/(\d+)(?!.*\d)/g))&&t&&this._config.daily_extended_name_attr?this.hass.states[t].attributes[this._config.daily_extended_name_attr]:p&&this._config.daily_extended_name_attr&&t?this._config.daily_extended_name_attr.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)).toLowerCase().split(".").reduce((t,e)=>void 0!==t?t[e]:void 0,this.hass.states[t].attributes):void 0;w=e?V`<div class="f-extended">${e}</div>`:V``}}else{const t=p&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;w=p?V`<div class="f-extended">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:V``}p=!!this._config.entity_fire_danger_1&&this._config.entity_fire_danger_1.match(/(\d+)(?!.*\d)/g);var x=V``;const N=p&&this._config.entity_fire_danger_1?this._config.entity_fire_danger_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;if(p&&N){var $=!1!==this._config.option_daily_color_fire_danger&&this.hass.states[N].attributes.color_fill?`background-color:${this.hass.states[N].attributes.color_fill}; color:${this.hass.states[N].attributes.color_text};`:"";!1===this._config.option_daily_color_fire_danger?x=p&&"unknown"!==this.hass.states[N].state?V`
          <div class="f-firedanger-vert">${N&&this.hass.states[N]?this.hass.states[N].state:"---"}</div>`:V``:(""===$&&($="font-weight:300;"),x=p&&"unknown"!==this.hass.states[N].state?V`
          <div class="f-firedanger-vert">
            <p class="fire-danger-text-color" style="${$}">${N&&this.hass.states[N]?this.hass.states[N].state.toUpperCase():"---"}</p>
          </div>`:V``)}a.push(V`
        <div class="day-vert fcasttooltip">
          <div class="day-vert-top">
            <div class="dayname-vert">${c?c.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</div>
            ${v}
          </div>
          <div>
            ${x}
          </div>
          <div class="day-vert-middle">
            <div class="day-vert-dayicon">
              ${h}
            </div>
            <div class="day-vert-temps">
              ${E}
              ${O}
            </div>
            <div class="day-vert-rain">
              ${_}
              ${g}
            </div>
          </div>
          <div class="day-vert-bottom">
            ${w}
          </div>
        </div>
      `)}return V`
      <div class="daily-forecast-vert-section section">
        ${a}
      </div>
    `}_getForecastPropFromWeather(t,e,i){const s=e.toDateString(),n=t.filter(t=>new Date(t.datetime).toDateString()===s);if(1===n.length)return void 0!==n[0][i]?String(n[0][i]):void 0;if(2===n.length){const t=n.find(t=>!0===t.daytime),e=n.find(t=>!1===t.daytime);return"templow"===i?e&&void 0!==e.temperature?String(e.temperature):void 0:t&&void 0!==t[i]?String(t[i]):void 0}}_getCardSizeDailyForecastSection(){var t=0;return!1!==this._config.show_section_daily_forecast&&("vertical"!==this._config.daily_forecast_layout?t+=146:(t+=18+87*(this._config.daily_forecast_days||5),0!==this._config.daily_extended_forecast_days&&(t+=48*Math.min(this._config.daily_forecast_days||5,this._config.daily_extended_forecast_days||7)))),t}_renderDailyForecastSection(){var t;return!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_daily_forecast)?V``:"vertical"!==this._config.daily_forecast_layout?this._renderHorizontalDailyForecastSection():this._renderVerticalDailyForecastSection()}render(){var t,e;const i=[];this.hassExtended=this.hass;const s=((t,e)=>{var i,s;if(void 0===e){if(void 0!==(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(i=null==t?void 0:t.forecast)||void 0===i?void 0:i.length)>2)return{forecast:t.forecast,type:null==t?void 0:t.type};e="daily"}if(e===(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(s=null==t?void 0:t.forecast)||void 0===s?void 0:s.length)>2)return{forecast:t.forecast,type:e}})(this._forecastEvent,null===(t=this._config)||void 0===t?void 0:t.forecast_type);this.forecast1=this._config.weather_entity&&(null===(e=null==s?void 0:s.forecast)||void 0===e?void 0:e.length)?s.forecast.slice(0,this._config.daily_forecast_days?this._config.daily_forecast_days:5):void 0,this._checkForErrors()&&i.push(this._showConfigWarning(this._error));const n=[];return void 0!==this._config.section_order&&this._config.section_order.forEach(t=>{switch(t){case"overview":n.push(this._renderOverviewSection());break;case"extended":n.push(this._renderExtendedSection());break;case"slots":n.push(this._renderSlotsSection());break;case"daily_forecast":n.push(this._renderDailyForecastSection())}}),i.push(V`
      <style>
        ${this.styles}
      </style>
      <ha-card class="card"
        @action=${this._handleAction}
        .actionHandler=${me({hasHold:Vt(this._config.hold_action),hasDoubleClick:Vt(this._config.double_tap_action)})}
        tabindex=${de(Vt(this._config.tap_action)?"0":void 0)}
        ><div class="content">
          ${n}
        </div>
      </ha-card>
    `),V`${i}`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),Wt(t,e,i,n)}(this,this.hass,this._config,t.detail.action)}get slotL1(){return this.slotValue("l1",this._config.slot_l1)}get slotL2(){return this.slotValue("l2",this._config.slot_l2)}get slotL3(){return this.slotValue("l3",this._config.slot_l3)}get slotL4(){return this.slotValue("l4",this._config.slot_l4)}get slotL5(){return this.slotValue("l5",this._config.slot_l5)}get slotL6(){return this.slotValue("l6",this._config.slot_l6)}get slotL7(){return this.slotValue("l7",this._config.slot_l7)}get slotL8(){return this.slotValue("l8",this._config.slot_l8)}get slotR1(){return this.slotValue("r1",this._config.slot_r1)}get slotR2(){return this.slotValue("r2",this._config.slot_r2)}get slotR3(){return this.slotValue("r3",this._config.slot_r3)}get slotR4(){return this.slotValue("r4",this._config.slot_r4)}get slotR5(){return this.slotValue("r5",this._config.slot_r5)}get slotR6(){return this.slotValue("r6",this._config.slot_r6)}get slotR7(){return this.slotValue("r7",this._config.slot_r7)}get slotR8(){return this.slotValue("r8",this._config.slot_r8)}slotValue(t,e){switch(e){case"pop":return this.slotPop;case"popforecast":return this.slotPopForecast;case"possible_today":return this.slotPos;case"possible_tomorrow":return this.slotPossibleTomorrow;case"rainfall":return this.slotRainfall;case"humidity":return this.slotHumidity;case"pressure":return this.slotPressure;case"observed_max":return this.slotObservedMax;case"observed_min":return this.slotObservedMin;case"forecast_max":return this.slotForecastMax;case"forecast_min":return this.slotForecastMin;case"temp_next":return this.slotTempNext;case"temp_following":return this.slotTempFollowing;case"temp_maximums":return this.slotTempMaximums;case"temp_minimums":return this.slotTempMinimums;case"uv_summary":return this.slotUvSummary;case"fire_danger":return this.slotFireDanger;case"wind":return this.slotWind;case"wind_kt":return this.slotWindKt;case"visibility":return this.slotVisibility;case"sun_next":return this.slotSunNext;case"sun_following":return this.slotSunFollowing;case"moon":return this.slotMoon;case"custom1":return this.slotCustom1;case"custom2":return this.slotCustom2;case"custom3":return this.slotCustom3;case"custom4":return this.slotCustom4;case"empty":return this.slotEmpty;case"remove":return this.slotRemove}switch(t){case"l1":return this.slotForecastMax;case"l2":return this.slotForecastMin;case"l3":return this.slotWind;case"l4":return this.slotPressure;case"l5":return this.slotSunNext;case"l6":case"l7":case"l8":case"r6":case"r7":case"r8":return this.slotRemove;case"r1":return this.slotPopForecast;case"r2":return this.slotHumidity;case"r3":return this.slotUvSummary;case"r4":return this.slotMoon;case"r5":return this.slotSunFollowing}return this.slotEmpty}get slotEmpty(){return V`<li>&nbsp;</li>`}get slotRemove(){return V``}get slotPopForecast(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?V`<div class="slot-text unit">%</div>`:V``,s=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,n=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==s?s:"---":"---",o="---"!==n?V`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text">&nbsp;</div>
          <div class="slot-text pop-text-today">${n}</div>${o}
        </div>
      </li>
    `}get slotPop(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?V`<div class="slot-text unit">%</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text"></div>
        </div>
      </li>
    `}get slotPos(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,e=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==t?t:"---":"---",i="---"!==e?V`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosToday}&nbsp;<div class="slot-text possible_today-text">${e}</div>${i}
        </div>
      </li>
    `}get slotPossibleTomorrow(){const t=void 0!==this.forecast1&&this.forecast1.length>1?this.forecast1[1].precipitation:void 0,e=this._config.entity_possible_tomorrow&&void 0!==this.hass.states[this._config.entity_possible_tomorrow]?null===this._config.entity_possible_tomorrow.match("^weather.")?this.hass.states[this._config.entity_possible_tomorrow].state:void 0!==t?t:"---":"---",i="---"!==e?V`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosTomorrow}&nbsp;<div class="slot-text possible_tomorrow-text">${e}</div>${i}
        </div>
      </li>
    `}get slotRainfall(){const t=this.currentRainfall,e="---"!==t?V`<div class="slot-text unit"></span>${this.getUOM("precipitation")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text rainfall-text">${t}</div>${e}
        </div>
      </li>
    `}get slotHumidity(){const t=this.currentHumidity,e="---"!==t?V`<div class="slot-text unit">%</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:water-percent"></ha-icon>
          </div>
          <div class="slot-text humidity-text">${t}</div>${e}
        </div>
      </li>`}get slotPressure(){const t="---"!==this.currentPressure?V`<div class="slot-text unit">${this._config.pressure_units?this._config.pressure_units:this.getUOM("air_pressure")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:gauge"></ha-icon>
          </div>
          <div class="slot-text pressure-text">${this.currentPressure}</div>${t}
        </div>
      </li>
    `}get slotObservedMax(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${i}
        </div>
      </li>
    `}get slotObservedMin(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${i}
        </div>
      </li>
    `}get slotForecastMax(){const t=void 0!==this.forecast1?this.forecast1[0].temperature:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?null===this._config.entity_forecast_max.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",s="---"!==i?V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMax}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${s}
        </div>
      </li>
    `}get slotForecastMin(){const t=void 0!==this.forecast1?this.forecast1[0].templow:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?null===this._config.entity_forecast_min.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",s="---"!==i?V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMin}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${s}
        </div>
      </li>
    `}get slotTempNext(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_next&&void 0!==this.hass.states[this._config.entity_temp_next]?Number(this.hass.states[this._config.entity_temp_next].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state:"",n="---"!==i?V`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-next-text">${s} ${i}</div>
          ${n}
        </div>
      </li>
    `}get slotTempFollowing(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_following&&void 0!==this.hass.states[this._config.entity_temp_following]?Number(this.hass.states[this._config.entity_temp_following].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state:"",n="---"!==i?V`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-following-text">${s} ${i}</div>
          ${n}
        </div>
      </li>
    `}get slotTempMaximums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s="---"!==e?V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObsMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${s}
          <div class="slot-text">&nbsp;(${this.localeTextFore}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${s}
          <div class="slot-text">)</div>
        </div>
      </li>
    `}get slotTempMinimums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s="---"!==e?V`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:V``;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObsMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${s}
          <div class="slot-text">&nbsp;(${this.localeTextFore}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${s}
          <div class="slot-text">)</div>
        </div>
      </li>
    `}get slotUvSummary(){const t=this._config.entity_uv_alert_summary&&void 0!==this.hass.states[this._config.entity_uv_alert_summary]?"unknown"!==this.hass.states[this._config.entity_uv_alert_summary].state?this.hass.states[this._config.entity_uv_alert_summary].state:"Not Applicable":"---";return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
          </div>
          <div class="slot-text daytime-uv-text">${this.localeTextUVRating} ${t}</div>
        </div>
      </li>
    `}get slotFireDanger(){const t=this._config.entity_fire_danger,e=t&&void 0!==this.hass.states[t]?"unknown"!==this.hass.states[t].state?!1===this._config.option_color_fire_danger?this.hass.states[t].state:this.hass.states[t].state.toLocaleUpperCase():"Not Applicable":"---";var i=t&&!1!==this._config.option_color_fire_danger&&this.hass.states[t].attributes.color_fill?`background-color:${this.hass.states[t].attributes.color_fill}; color:${this.hass.states[t].attributes.color_text};`:"";return!1===this._config.option_color_fire_danger?V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text" style="${i}">${e} </div>
        </div>
      </li>`:(""===i&&(i="font-weight:300; padding-left:0px;"),V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text">
            <p class="fire-danger-text-color" style="${i}">${e}</p>
          </div>
        </div>
      </li>`)}get slotWind(){const t=this._config.entity_wind_speed&&this._config.option_show_beaufort?V`<div class="slot-text">BFT: ${this.currentBeaufort} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?V`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=V`<div class="slot-text unit">${this.currentWindSpeedUnit}</div>`,s=this._config.entity_wind_speed?V`<div class="slot-text">${this.currentWindSpeed}</div>${i}&nbsp;`:"",n=this._config.entity_wind_gust?V`<div class="slot-text">(${this.localeTextGust} ${this.currentWindGust}</div>${i})`:"";return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${s}${n}
        </div>
      </li>
    `}get slotWindKt(){const t=this._config.entity_wind_speed_kt&&this._config.option_show_beaufort?V`<div class="slot-text">BFT: ${this.currentBeaufortKt} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?V`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=V`<div class="slot-text unit">Kt</div>`,s=this._config.entity_wind_speed_kt?V`<div class="slot-text">${this.currentWindSpeedKt}</div>${i}&nbsp;`:"",n=this._config.entity_wind_gust_kt?V`<div class="slot-text">(${this.localeTextGust} ${this.currentWindGustKt}</div>${i})`:"";return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${s}${n}
        </div>
      </li>
    `}get slotVisibility(){const t=this.currentVisibility,e="---"!==t?this.getUOM("length"):"";return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-fog"></ha-icon>
          </div>
          <div class="slot-text visibility-text">${t}</div>
          <div class="slot-text unit">${e}</div>
        </div>
      </li>
    `}get slotSunNext(){return this._config.entity_sun?this.sunSet.next:V``}get slotSunFollowing(){return this._config.entity_sun?this.sunSet.following:V``}get slotMoon(){if(!this._config.entity_moon)return V``;const t=this.hass.states[this._config.entity_moon];if(!t)return V``;const e=t.state;return V`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${this.moonPhaseIcon(e)}"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextMoonPhase(e)}</div>
        </div>
      </li>
    `}moonPhaseIcon(t){switch(t){case"new_moon":return"mdi:moon-new";case"waxing_crescent":return"mdi:moon-waxing-crescent";case"first_quarter":return"mdi:moon-first-quarter";case"waxing_gibbous":return"mdi:moon-waxing-gibbous";case"full_moon":default:return"mdi:moon-full";case"waning_gibbous":return"mdi:moon-waning-gibbous";case"last_quarter":return"mdi:moon-last-quarter";case"waning_crescent":return"mdi:moon-waning-crescent"}}localeTextMoonPhase(t){switch(this.locale){case"bg":switch(t){case"new_moon":return"Новолуние";case"waxing_crescent":return"Растяща сърповидна";case"first_quarter":return"Първа четвърт";case"waxing_gibbous":return"Растяща гърбица";case"full_moon":return"Пълнолуние";case"waning_gibbous":return"Намаляваща гърбица";case"last_quarter":return"Последна четвърт";case"waning_crescent":return"Намаляваща сърповидна"}break;case"ru":switch(t){case"new_moon":return"Новолуние";case"waxing_crescent":return"Растущий серп";case"first_quarter":return"Первая четверть";case"waxing_gibbous":return"Растущая луна";case"full_moon":return"Полнолуние";case"waning_gibbous":return"Убывающая луна";case"last_quarter":return"Последняя четверть";case"waning_crescent":return"Убывающий серп"}break;case"ua":switch(t){case"new_moon":return"Новий місяць";case"waxing_crescent":return"Молодий місяць";case"first_quarter":return"Перша чверть";case"waxing_gibbous":return"Зростаючий місяць";case"full_moon":return"Повний місяць";case"waning_gibbous":return"Спадаючий місяць";case"last_quarter":return"Остання чверть";case"waning_crescent":return"Старий місяць"}break;case"de":switch(t){case"new_moon":return"Neumond";case"waxing_crescent":return"Zunehmende Sichel";case"first_quarter":return"Erstes Viertel";case"waxing_gibbous":return"Zunehmender Mond";case"full_moon":return"Vollmond";case"waning_gibbous":return"Abnehmender Mond";case"last_quarter":return"Letztes Viertel";case"waning_crescent":return"Abnehmende Sichel"}break;case"fr":switch(t){case"new_moon":return"Nouvelle lune";case"waxing_crescent":return"Premier croissant";case"first_quarter":return"Premier quartier";case"waxing_gibbous":return"Gibbeuse croissante";case"full_moon":return"Pleine lune";case"waning_gibbous":return"Gibbeuse décroissante";case"last_quarter":return"Dernier quartier";case"waning_crescent":return"Dernier croissant"}break;case"it":switch(t){case"new_moon":return"Luna nuova";case"waxing_crescent":return"Luna crescente";case"first_quarter":return"Primo quarto";case"waxing_gibbous":return"Gibbosa crescente";case"full_moon":return"Luna piena";case"waning_gibbous":return"Gibbosa calante";case"last_quarter":return"Ultimo quarto";case"waning_crescent":return"Falce calante"}break;case"nl":switch(t){case"new_moon":return"Nieuwe maan";case"waxing_crescent":return"Wassende sikkel";case"first_quarter":return"Eerste kwartier";case"waxing_gibbous":return"Wassende maan";case"full_moon":return"Volle maan";case"waning_gibbous":return"Afnemende maan";case"last_quarter":return"Laatste kwartier";case"waning_crescent":return"Afnemende sikkel"}break;case"pl":switch(t){case"new_moon":return"Nów";case"waxing_crescent":return"Sierp rosnący";case"first_quarter":return"Pierwsza kwadra";case"waxing_gibbous":return"Przybywający";case"full_moon":return"Pełnia";case"waning_gibbous":return"Ubywający";case"last_quarter":return"Ostatnia kwadra";case"waning_crescent":return"Sierp ubywający"}break;case"da":switch(t){case"new_moon":return"Nymåne";case"waxing_crescent":return"Voksende måne";case"first_quarter":return"Første kvartal";case"waxing_gibbous":return"Voksende knold";case"full_moon":return"Fuldmåne";case"waning_gibbous":return"Aftagende knold";case"last_quarter":return"Sidste kvartal";case"waning_crescent":return"Aftagende måne"}break;case"es":switch(t){case"new_moon":return"Luna nueva";case"waxing_crescent":return"Creciente";case"first_quarter":return"Cuarto creciente";case"waxing_gibbous":return"Gibosa creciente";case"full_moon":return"Luna llena";case"waning_gibbous":return"Gibosa menguante";case"last_quarter":return"Cuarto menguante";case"waning_crescent":return"Menguante"}break;case"he":switch(t){case"new_moon":return"ירח חדש";case"waxing_crescent":return"סהר בגדילה";case"first_quarter":return"רבע ראשון";case"waxing_gibbous":return"כמעט מלא (גדל)";case"full_moon":return"ירח מלא";case"waning_gibbous":return"כמעט מלא (קטן)";case"last_quarter":return"רבע אחרון";case"waning_crescent":return"סהר בקטנה"}}return t.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}get slotCustom1(){var t=this._config.custom1_icon?this._config.custom1_icon:"mdi:help-box",e=this._config.custom1_value&&void 0!==this.hass.states[this._config.custom1_value]?this.hass.states[this._config.custom1_value].state:"unknown",i=this._config.custom1_units?this._config.custom1_units:"";return V`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-1-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom2(){var t=this._config.custom2_icon?this._config.custom2_icon:"mdi:help-box",e=this._config.custom2_value&&void 0!==this.hass.states[this._config.custom2_value]?this.hass.states[this._config.custom2_value].state:"unknown",i=this._config.custom2_units?this._config.custom2_units:"";return V`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-2-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom3(){var t=this._config.custom3_icon?this._config.custom3_icon:"mdi:help-box",e=this._config.custom3_value&&void 0!==this.hass.states[this._config.custom3_value]?this.hass.states[this._config.custom3_value].state:"unknown",i=this._config.custom3_units?this._config.custom3_units:"";return V`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-3-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom4(){var t=this._config.custom4_icon?this._config.custom4_icon:"mdi:help-box",e=this._config.custom4_value&&void 0!==this.hass.states[this._config.custom4_value]?this.hass.states[this._config.custom4_value].state:"unknown",i=this._config.custom4_units?this._config.custom4_units:"";return V`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-4-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get forecastIcon(){const t=this._config.entity_forecast_icon;return t&&this.hass.states[t]?this.hass.states[t].state:"---"}get currentTemperature(){const t=this._config.entity_temperature,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.temperature?Number(this.hass.states[t].attributes.temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---"}get currentApparentTemperature(){const t=this._config.entity_apparent_temp,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.apparent_temperature?Number(this.hass.states[t].attributes.apparent_temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---":""}get currentHumidity(){const t=this._config.entity_humidity;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.humidity?Number(this.hass.states[t].attributes.humidity).toLocaleString(this.locale):"---":"---"}get currentRainfall(){const t=this._config.entity_rainfall,e=!0===this._config.option_today_rainfall_decimals?1:0;return t&&this.hass.states[t]?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---"}get currentPressure(){const t=this._config.entity_pressure;var e=this._config.option_pressure_decimals?Math.max(Math.min(this._config.option_pressure_decimals,3),0):0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.pressure?Number(this.hass.states[t].attributes.pressure).toLocaleString(this.locale):"---":"---"}get currentVisibility(){const t=this._config.entity_visibility;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.visibility?Number(this.hass.states[t].attributes.visibility).toLocaleString(this.locale):"---":"---"}get currentWindBearing(){const t=this._config.entity_wind_bearing;return t&&this.hass.states[t]?null===t.match("^weather.")?isNaN(Number(this.hass.states[t].state))?this.hass.states[t].state:this.windDirections[Math.round(Number(this.hass.states[t].state)/360*16)]:void 0!==this.hass.states[t].attributes.wind_bearing?isNaN(Number(this.hass.states[t].attributes.wind_bearing))?this.hass.states[t].attributes.wind_bearing:this.windDirections[Math.round(Number(this.hass.states[t].attributes.wind_bearing)/360*16)]:"---":"---"}get currentWindSpeed(){const t=this._config.entity_wind_speed;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindSpeedUnit(){const t=this._config.entity_wind_speed;if(!t||!this.hass.states[t])return this.getUOM("length")+"/h";if(null!==t.match("^weather.")){const e=this.hass.states[t].attributes.wind_speed_unit;return void 0!==e?e:this.getUOM("length")+"/h"}return this.getUOM("length")+"/h"}get currentWindGust(){const t=this._config.entity_wind_gust;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_gust_speed?Math.round(Number(this.hass.states[t].attributes.wind_gust_speed)).toLocaleString(this.locale):"---":"---"}get currentWindSpeedKt(){const t=this._config.entity_wind_speed_kt;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindGustKt(){const t=this._config.entity_wind_gust_kt;return t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):"---"}get windDirections(){const t=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"],i=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],s=["N","NNO","NO","ONO","O","OZO","ZO","ZZO","Z","ZZW","ZW","WZW","W","WNW","NW","NNW","N"],n=["צפון","צ-צ-מז","צפון מזרח","מז-צ-מז","מזרח","מז-ד-מז","דרום מזרח","ד-ד-מז","דרום","ד-ד-מע","דרום מערב","מע-ד-מע","מערב","מע-צ-מע","צפון מערב","צ-צ-מע","צפון"],o=["N","NNØ","NØ","ØNØ","Ø","ØSØ","SØ","SSØ","S","SSV","SV","VSV","V","VNV","NV","NNV","N"],r=["С","ССВ","СВ","ВСВ","В","ВЮВ","ЮВ","ЮЮВ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"],a=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"],c=["С","ССИ","СИ","ИСИ","И","ИЮИ","ЮИ","ЮЮИ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"];switch(this.locale){case"it":case"fr":return e;case"de":return i;case"nl":return s;case"es":return a;case"he":return n;case"ru":return r;case"da":return o;case"bg":return c;default:return t}}get currentBeaufort(){const t=this._config.entity_wind_speed;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);switch(this.hass.states[t].attributes.unit_of_measurement){case"mph":return e>=73?"12":e>=64?"11":e>=55?"10":e>=47?"9":e>=39?"8":e>=32?"7":e>=25?"6":e>=19?"5":e>=13?"4":e>=8?"3":e>=4?"2":e>=1?"1":"0";case"m/s":return e>=32.7?"12":e>=28.5?"11":e>=24.5?"10":e>=20.8?"9":e>=17.2?"8":e>=13.9?"7":e>=10.8?"6":e>=8?"5":e>=5.5?"4":e>=3.4?"3":e>=1.6?"2":e>=.5?"1":"0";default:return e>=118?"12":e>=103?"11":e>=89?"10":e>=75?"9":e>=62?"8":e>=50?"7":e>=39?"6":e>=29?"5":e>=20?"4":e>=12?"3":e>=6?"2":e>=2?"1":"0"}}return"---"}get currentBeaufortKt(){const t=this._config.entity_wind_speed_kt;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);return e>=64?"12":e>=56?"11":e>=48?"10":e>=41?"9":e>=34?"8":e>=28?"7":e>=22?"6":e>=17?"5":e>=11?"4":e>=7?"3":e>=4?"2":e>=1?"1":"0"}return"---"}get sunSet(){var t,e;switch(this.timeFormat){case"12hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"";break;case"24hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"";break;case"system":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):""}var i=new Date;return i.setDate(i.getDate()+1),this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?"above_horizon"===this.hass.states[this._config.entity_sun].state?(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,{next:V`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${t}</div>
            </li>`,following:V`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${e}</div>
            </li>`,nextText:t,followingText:e,nextIcon:"mdi:weather-sunset-down",followingIcon:"mdi:weather-sunset-up"}):((new Date).getDate()!=new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).getDate()&&(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,t=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+t),{next:V`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${e}</div>
            </li>`,following:V`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${t}</div>
            </li>`,nextText:e,followingText:t,nextIcon:"mdi:weather-sunset-up",followingIcon:"mdi:weather-sunset-down"}):{next:V``,following:V``,nextText:"",followingText:"",nextIcon:"",followingIcon:""}}get timeFormat(){var t,e;if(this._config.option_time_format&&"system"!==this._config.option_time_format)return this._config.option_time_format;const i=null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.time_format;return"12"===i?"12hour":"24"===i?"24hour":"system"}_formatDate(t){var e,i;const s=null===(i=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===i?void 0:i.date_format,n=this.locale||navigator.language;switch(s){case"DMY":default:return t.toLocaleDateString(n,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","");case"MDY":return t.toLocaleDateString(n,{weekday:"short",month:"short",day:"numeric",year:"numeric"}).replace(",","");case"YMD":return t.toLocaleDateString(n,{weekday:"short",year:"numeric",month:"short",day:"numeric"}).replace(",","")}}_weatherIcon(t){switch(t){case"sunny":case"clear":return this.iconClear;case"mostly-sunny":case"mostly_sunny":return this.iconMostlySunny;case"partly-cloudy":case"partly_cloudy":case"partlycloudy":return this.iconPartlyCloudy;case"cloudy":return this.iconCloudy;case"hazy":case"hazey":case"haze":return this.iconHazy;case"frost":return this.iconFrost;case"light-rain":case"light_rain":return this.iconLightRain;case"wind":case"windy":return this.iconWindy;case"fog":case"foggy":return this.iconFog;case"showers":case"shower":return this.iconShowers;case"rain":case"rainy":return this.iconRain;case"dust":case"dusty":return this.iconDust;case"snow":case"snowy":return this.iconSnow;case"snowy-rainy":case"snowy_rainy":case"snowyrainy":return this.iconSnowRain;case"storm":case"stormy":return this.iconStorm;case"light-showers":case"light-shower":case"light_showers":case"light_shower":return this.iconLightShowers;case"heavy-showers":case"heavy-shower":case"heavy_showers":case"heavy_shower":case"pouring":return this.iconHeavyShowers;case"tropical-cyclone":case"tropical_cyclone":case"tropicalcyclone":return this.iconCyclone;case"clear-day":case"clear_day":return this.iconClearDay;case"clear-night":case"clear_night":return this.iconClearNight;case"sleet":return this.iconSleet;case"partly-cloudy-day":case"partly_cloudy_day":return this.iconPartlyCloudyDay;case"partly-cloudy-night":case"partly_cloudy_night":return this.iconPartlyCloudyNight;case"hail":return this.iconHail;case"lightning":case"lightning-rainy":case"lightning_rainy":case"thunderstorm":return this.iconLightning;case"windy-variant":case"windy_variant":return this.iconWindyVariant}return"unknown"}get dayOrNight(){return this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?{below_horizon:"night",above_horizon:"day"}[this.hass.states[this._config.entity_sun].state]:"day"}get iconClear(){return`clear-${this.dayOrNight}`}get iconMostlySunny(){return`cloudy-1-${this.dayOrNight}`}get iconPartlyCloudy(){return`cloudy-2-${this.dayOrNight}`}get iconCloudy(){return"cloudy"}get iconHazy(){return`haze-${this.dayOrNight}`}get iconFrost(){return`frost-${this.dayOrNight}`}get iconLightRain(){return"rainy-2"}get iconWindy(){return"wind"}get iconFog(){return`fog-${this.dayOrNight}`}get iconShowers(){return`rainy-1-${this.dayOrNight}`}get iconRain(){return`rainy-3-${this.dayOrNight}`}get iconDust(){return"dust"}get iconSnow(){return"snowy-3"}get iconSnowRain(){return"snow-and-sleet-mix"}get iconStorm(){return`scattered-thunderstorms-${this.dayOrNight}`}get iconLightShowers(){return`rainy-1-${this.dayOrNight}`}get iconHeavyShowers(){return"rainy-3"}get iconCyclone(){return"tropical-storm"}get iconClearDay(){return"clear-day"}get iconClearNight(){return"clear-night"}get iconSleet(){return"rain-and-sleet-mix"}get iconPartlyCloudyDay(){return"cloudy-1-day"}get iconPartlyCloudyNight(){return"cloudy-1-night"}get iconHail(){return"hail"}get iconLightning(){return`isolated-thunderstorms-${this.dayOrNight}`}get iconWindyVariant(){return"wind"}get locale(){try{return Intl.NumberFormat(this._config.option_locale),this._config.option_locale}catch(t){return}}get localeTextFeelsLike(){switch(this.locale){case"it":return"Percepito";case"fr":return"Ressenti";case"de":return"Gefühlt";case"nl":return"Voelt als";case"pl":return"Odczuwalne";case"he":return"מרגיש כמו";case"da":return"Føles som";case"ru":return"Ощущается как";case"es":return"Sensación";case"ua":return"Відчувається як";case"bg":return"Усеща се като";default:return"Feels like"}}get localeTextObservedMax(){switch(this.locale){case"it":return"Osservata Max";case"fr":return"Observé Max";case"de":return"Beobachtet Max";case"nl":return"Opgemerkt Max";case"pl":return"Zaobserwowany Max";case"he":return"נצפה מקסימום";case"da":return"Observeret Max";case"ru":return"Наблюдаемый макс.";case"es":return"Observado Max";case"ua":return"Спостережуваний макс.";case"bg":return"Наблюдавано макс.";default:return"Observed Max"}}get localeTextObservedMin(){switch(this.locale){case"it":return"Osservata Min";case"fr":return"Observé Min";case"de":return"Beobachtet Min";case"nl":return"Opgemerkt Min";case"pl":return"Zaobserwowany Min";case"he":return"נצפה מינימום";case"da":return"Observeret Min";case"ru":return"Наблюдаемый мин.";case"es":return"Observado Min";case"ua":return"Спостережуваний мін.";case"bg":return"Наблюдавано мин.";default:return"Observed Min"}}get localeTextObsMax(){switch(this.locale){case"it":return"Oss Max";case"fr":case"pl":case"da":case"es":default:return"Obs Max";case"de":return"Beob Max";case"nl":return"Opgem Max";case"he":return"נצפה מקס";case"ru":return"Набл макс.";case"ua":return"Спост макс.";case"bg":return"Набл. макс."}}get localeTextObsMin(){switch(this.locale){case"it":return"Oss Min";case"fr":case"pl":case"da":case"es":default:return"Obs Min";case"de":return"Beob Min";case"nl":return"Opgem Min";case"he":return"נצפה מינ";case"ru":return"Набл мин.";case"ua":return"Спост мін.";case"bg":return"Набл. мин."}}get localeTextForecastMax(){switch(this.locale){case"it":return"Max oggi";case"fr":return"Max aujourd'hui";case"de":return"Max heute";case"nl":return"Max vandaag";case"pl":return"Maks Temperatura";case"he":return"מקסימלי היום";case"da":return"Højeste i dag";case"ru":return"Макс сегодня";case"es":return"Máx hoy";case"ua":return"Макс сьогодні";case"bg":return"Макс днес";default:return"Forecast Max"}}get localeTextForecastMin(){switch(this.locale){case"it":return"Min oggi";case"fr":return"Min aujourd'hui";case"de":return"Min heute";case"nl":return"Min vandaag";case"pl":return"Min Temperatura";case"he":return"דקות היום";case"da":return"Laveste i dag";case"ru":return"Мин сегодня";case"es":return"Mín hoy";case"ua":return"Мін сьогодні";case"bg":return"Мин днес";default:return"Forecast Min"}}get localeTextPosToday(){switch(this.locale){case"it":return"Previsione";case"fr":return"Prévoir";case"de":return"Vorhersage";case"nl":return"Prognose";case"pl":return"Prognoza";case"he":return"תַחֲזִית";case"da":return"Vejrudsigt";case"ru":case"ua":return"Прогноз";case"es":return"Previsión";case"bg":return"Прогноза";default:return"Forecast"}}get localeTextPosTomorrow(){switch(this.locale){case"it":return"Prev per domani";case"fr":return"Prév demain";case"de":case"nl":return"Prog morgen";case"pl":return"Prog jutro";case"he":return"תחזית מחר";case"da":return"Prog i morgen";case"ru":case"ua":return"Прогноз на завтра";case"es":return"Prev mañana";case"bg":return"Прогноза за утре";default:return"Fore Tom"}}get localeTextFore(){switch(this.locale){case"it":case"es":return"Prev";case"fr":return"Prév";case"de":case"nl":case"pl":case"da":return"Prog";case"he":return"תַחֲזִית";case"ru":case"ua":return"Прогноз";case"bg":return"Прогноза";default:return"Fore"}}get localeTextUVRating(){switch(this.locale){case"it":case"fr":case"de":case"nl":case"pl":case"he":case"da":case"es":case"bg":default:return"UV";case"ru":case"ua":return"УФ"}}get localeTextFireDanger(){switch(this.locale){case"it":return"Fuoco";case"fr":return"Feu";case"de":return"Feuer";case"nl":case"da":return"Brand";case"pl":return"Ogień";case"he":return"אֵשׁ";case"ru":return"Огонь";case"es":return"Fuego";case"ua":return"Вогонь";case"bg":return"Пожар";default:return"Fire"}}get localeTextGust(){switch(this.locale){case"it":return"Raffica";case"fr":return"Rafale";case"de":return"Böe";case"nl":return"Windstoot";case"pl":return"Poryw";case"he":return"נשיבה";case"da":return"Vindstød";case"ru":return"Порыв";case"es":return"Ráfaga";case"ua":return"Порив";case"bg":return"Пориви";default:return"Gust"}}getUOM(t){const e=this.hass.config.unit_system.length;switch(t){case"air_pressure":const i=this._config.entity_pressure;return i&&this.hass.states[i]?null===i.match("^weather.")?void 0!==this.hass.states[i].attributes.unit_of_measurement?this.hass.states[i].attributes.unit_of_measurement:"km"===e?"hPa":"mbar":void 0!==this.hass.states[i].attributes.pressure_unit?this.hass.states[i].attributes.pressure_unit:"--":"--";case"length":return e;case"precipitation":return"km"===e?"mm":"in";case"intensity":return"km"===e?"mm/h":"in/h";default:return this.hass.config.unit_system[t]||""}}_showConfigWarning(t){return V`
      <hui-warning>
        <div>Weather Card</div>
        ${t.map(t=>V`<div>${t}</div>`)}
      </hui-warning>
    `}_showWarning(t){return V`<hui-warning>${t}</hui-warning>`}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),V`${e}`}get styles(){const t=this._config.option_tooltips?"visible":"hidden",e=this._config.temp_font_weight||"300",i=this._config.temp_font_size||"4em",s=this._config.forecast_text_font_size||"21px",n=this._config.forecast_text_alignment||"center";return dt`
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
        font-weight: ${ht(e)};
        font-size: ${ht(i)};
        color: var(--primary-text-color);
        position: relative;
        line-height: 74%;
      }
      .unit-temp-big {
        display: table-cell;
        vertical-align: top;
        font-weight: ${ht(e)};
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
        font-size: ${ht(s)};
        text-align: ${ht(n)};
        line-height: 25px;
      }
      .forecast-text-right {
        font-size: ${ht(s)};
        text-align: ${ht(n)};
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
        border-right: 1px solid #d9d9d9;
        margin-right: -1px;
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
        visibility: ${ht(t)};
      }
      .fcasttooltiptext {
        padding-left: 8px;
        padding-right: 8px;
      }
    `}};s([Mt()],ye.prototype,"_subscribed",void 0),s([Mt()],ye.prototype,"_forecastEvent",void 0),s([kt({attribute:!1})],ye.prototype,"hass",void 0),s([Mt()],ye.prototype,"_config",void 0),s([Mt()],ye.prototype,"_cardWidth",void 0),ye=s([Nt("platinum-weather-card")],ye);export{j as A,ye as P,H as T,e as _,i as a,s as b,dt as c,Mt as d,_e as e,de as f,n as g,Rt as h,ge as i,Nt as j,Pt as l,kt as n,Ft as o,Et as s,ue as t,V as x};
