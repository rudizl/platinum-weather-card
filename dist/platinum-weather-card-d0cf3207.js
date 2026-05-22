var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function s(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],s=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&s>=t.length&&(t=void 0),{value:t&&t[s++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=window,r=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),c=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(e,t))}return t}toString(){return this.cssText}}const h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,a))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const u=window,_=u.trustedTypes,p=_?_.emptyScript:"",v=u.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g},y="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=n.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;b[y]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:b}),(null!==(d=u.reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.6.3");const x=window,$=x.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,O="?"+E,A=`<${O}>`,N=document,k=()=>N.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,M="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,L=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,R=/"/g,z=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),j=new WeakMap,I=N.createTreeWalker(N,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=F;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===F?"!--"===c[1]?r=P:void 0!==c[1]?r=L:void 0!==c[2]?(z.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=D):void 0!==c[3]&&(r=D):r===D?">"===c[0]?(r=null!=o?o:F,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?D:'"'===c[3]?R:U):r===R||r===U?r=D:r===P||r===L?r=F:(r=D,o=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";n+=r===F?i+A:l>=0?(s.push(a),i.slice(0,l)+"$lit$"+i.slice(l)+E+d):i+E+(-2===l?(s.push(void 0),e):d)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=q(t,e);if(this.el=G.createElement(c,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(E)){const i=l[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(E),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?tt:"@"===e[1]?et:Y})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(z.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),I.nextNode(),a.push({type:2,index:++o});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var o,n,r,a;if(e===H)return e;let c=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const l=C(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=c:i._$Cl=c),void 0!==c&&(e=K(t,c._$AS(t,e.values),c,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(i,!0);I.currentNode=o;let n=I.nextNode(),r=0,a=0,c=s[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new J(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new it(n,this,t)),this._$AV.push(e),c=s[++a]}r!==(null==c?void 0:c.index)&&(n=I.nextNode(),r++)}return I.currentNode=N,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var o;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),C(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new G(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new J(this.k(k()),this.k(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=K(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=K(this,s[i+r],e,r),a===H&&(a=this._$AH[r]),n||(n=!C(a)||a!==this._$AH[r]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const Q=$?$.emptyScript:"";class tt extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class et extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:V)===H)return;const s=this._$AH,o=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=x.litHtmlPolyfillSupport;null==st||st(G,J),(null!==(w=x.litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.8.0");const ot=window,nt=ot.ShadowRoot&&(void 0===ot.ShadyCSS||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),at=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct{constructor(t,e,i){if(this._$cssResult$=!0,i!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(nt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=at.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(e,t))}return t}toString(){return this.cssText}}const lt=t=>new ct("string"==typeof t?t:t+"",void 0,rt),ht=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new ct(i,t,rt)},dt=nt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return lt(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ut;const _t=window,pt=_t.trustedTypes,vt=pt?pt.emptyScript:"",ft=_t.reactiveElementPolyfillSupport,gt={toAttribute(t,e){switch(e){case Boolean:t=t?vt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},mt=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:mt},bt="finalized";class wt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||yt}static finalize(){if(this.hasOwnProperty(bt))return!1;this[bt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(dt(t))}else void 0!==t&&e.push(dt(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{nt?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=ot.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=yt){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:gt).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:gt;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xt,$t;wt[bt]=!0,wt.elementProperties=new Map,wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},null==ft||ft({ReactiveElement:wt}),(null!==(ut=_t.reactiveElementVersions)&&void 0!==ut?ut:_t.reactiveElementVersions=[]).push("1.6.3");class St extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new J(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}St.finalized=!0,St._$litElement$=!0,null===(xt=globalThis.litElementHydrateSupport)||void 0===xt||xt.call(globalThis,{LitElement:St});const Et=globalThis.litElementPolyfillSupport;null==Et||Et({LitElement:St}),(null!==($t=globalThis.litElementVersions)&&void 0!==$t?$t:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,At=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):At(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function kt(t){return Nt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var Tt;const Mt=null!=(null===(Tt=window.HTMLSlotElement)||void 0===Tt?void 0:Tt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function Ft(t){const{slot:e,selector:i}=null!=t?t:{};return Ct({descriptor:s=>({get(){var s;const o="slot"+(e?`[name=${e}]`:":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(o),r=null!=n?Mt(n,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}var Pt,Lt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Pt||(Pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Lt||(Lt={}));var Dt=["closed","locked","off"],Ut=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o},Rt=function(t){Ut(window,"haptic",t)},zt=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Rt("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&Ut(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Ut(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,o=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===o?"homeassistant":o;switch(o){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(n,s,{entity_id:e})})(t,e,Dt.includes(t.states[e].state))}(e,i.entity),Rt("success"));break;case"call-service":if(!s.service)return void Rt("failure");var o=s.service.split(".",2);e.callService(o[0],o[1],s.service_data,s.target),Rt("success");break;case"fire-dom-event":Ut(t,"ll-custom",s)}};function Wt(t){return void 0!==t&&"none"!==t.action}var Ht=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,s){return t[0]===e&&(i=s,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),s=this.__entries__[i];return s&&s[1]},e.prototype.set=function(e,i){var s=t(this.__entries__,e);~s?this.__entries__[s][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,s=t(i,e);~s&&i.splice(s,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];t.call(e,o[1],o[0])}},e}()}(),Vt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,jt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),It="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(jt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Bt=["top","right","bottom","left","width","height","size","weight"],qt="undefined"!=typeof MutationObserver,Gt=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,s=!1,o=0;function n(){i&&(i=!1,t()),s&&a()}function r(){It(n)}function a(){var t=Date.now();if(i){if(t-o<2)return;s=!0}else i=!0,s=!1,setTimeout(r,e);o=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){Vt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),qt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Vt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Bt.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Kt=function(t,e){for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Zt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||jt},Jt=ie(0,0,0,0);function Yt(t){return parseFloat(t)||0}function Xt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Yt(t["border-"+i+"-width"])}),0)}function Qt(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Jt;var s=Zt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,s=["top","right","bottom","left"];i<s.length;i++){var o=s[i],n=t["padding-"+o];e[o]=Yt(n)}return e}(s),n=o.left+o.right,r=o.top+o.bottom,a=Yt(s.width),c=Yt(s.height);if("border-box"===s.boxSizing&&(Math.round(a+n)!==e&&(a-=Xt(s,"left","right")+n),Math.round(c+r)!==i&&(c-=Xt(s,"top","bottom")+r)),!function(t){return t===Zt(t).document.documentElement}(t)){var l=Math.round(a+n)-e,h=Math.round(c+r)-i;1!==Math.abs(l)&&(a-=l),1!==Math.abs(h)&&(c-=h)}return ie(o.left,o.top,a,c)}var te="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Zt(t).SVGGraphicsElement}:function(t){return t instanceof Zt(t).SVGElement&&"function"==typeof t.getBBox};function ee(t){return Vt?te(t)?function(t){var e=t.getBBox();return ie(0,0,e.width,e.height)}(t):Qt(t):Jt}function ie(t,e,i,s){return{x:t,y:e,width:i,height:s}}var se=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ie(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=ee(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),oe=function(t,e){var i=function(t){var e=t.x,i=t.y,s=t.width,o=t.height,n="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,r=Object.create(n.prototype);return Kt(r,{x:e,y:i,width:s,height:o,top:i,right:e+s,bottom:o+i,left:e}),r}(e);Kt(this,{target:t,contentRect:i})},ne=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Ht,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Zt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new se(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Zt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new oe(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),re="undefined"!=typeof WeakMap?new WeakMap:new Ht,ae=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Gt.getInstance(),s=new ne(e,i,this);re.set(this,s)};["observe","unobserve","disconnect"].forEach((function(t){ae.prototype[t]=function(){var e;return(e=re.get(this))[t].apply(e,arguments)}}));var ce=void 0!==jt.ResizeObserver?jt.ResizeObserver:ae;const le=t=>null!=t?t:V,he={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},de=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ue{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const _e="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class pe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:_e?"100px":"50px",height:_e?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Ut(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Ut(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ut(t,"action",{action:"double_tap"})):Ut(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",(t=>{13===t.keyCode&&s(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-weather",pe);const ve=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-weather"))return t.querySelector("action-handler-weather");const e=document.createElement("action-handler-weather");return t.appendChild(e),e})();i&&i.bind(t,e)},fe=de(class extends ue{update(t,[e]){return ve(t.element,e),H}render(t){}});console.info("%c  PLATINUM-WEATHER-CARD-TL  \n%c  Version 1.2.1          ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"platinum-weather-card",name:"Platinum Weather Card",description:"An fully customisable weather card with a GUI configuration"});let ge=class extends St{constructor(){super(...arguments),this._cardWidth=492,this._error=[]}static get properties(){return{_config:{},_forecastEvent:{},hass:{}}}static async getConfigElement(){return await import("./editor-d2dac667.js"),document.createElement("platinum-weather-card-editor")}static getStubConfig(){return{}}getCardSize(){const t=16+this._getCardSizeOverviewSection()+this._getCardSizeExtendedSection()+this._getCardSizeSlotsSection()+this._getCardSizeDailyForecastSection();return Math.ceil(t/50)}setConfig(t){if(!t)throw new Error("Invalid configuration");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Weather"},t)}_needForecastSubscription(){return this._config&&this._config.weather_entity&&this._config.forecast_type&&"legacy"!==this._config.forecast_type}_unsubscribeForecastEvents(){this._subscribed&&(this._subscribed.then((t=>t())),this._subscribed=void 0)}async _subscribeForecastEvents(){var t,e,i,s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._unsubscribeForecastEvents(),this.isConnected&&this.hass&&this._config&&this._needForecastSubscription())&&(this._subscribed=(t=this.hass,e=this._config.weather_entity,i=this._config.forecast_type,s=t=>{this._forecastEvent=t},t.connection.subscribeMessage(s,{type:"weather/subscribe_forecast",forecast_type:i,entity_id:e})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._config&&this.hass&&this._subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeForecastEvents()}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config")||t.has("_forecastEvent"))return!0;if(t.has("hass"))return!0;const e=t.get("hass")||void 0;if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;if(!1===Object.keys(this._config).every((t=>null===t.match(/^entity_/)||e.states[this._config[t]]===this.hass.states[this._config[t]])))return!0;if(this._config.show_section_daily_forecast){const t=this._config.daily_forecast_days||5;for(const s of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1"])if(void 0!==this._config[s]&&null===this._config[s].match("^weather.")){const o=this._config[s].match(/(\d+)(?!.*\d)/g);if(o)for(var i=1;i<t;i++){const t=this._config[s].replace(/(\d+)(?!.*\d)/g,Number(o)+i);if(e.states[t]!==this.hass.states[t])return!0}}}return t.has("config")}updated(t){this.hass&&this._config&&(!t.has("_config")&&this._subscribed||this._subscribeForecastEvents())}firstUpdated(){this._resize(),this._attachObserver()}_attachObserver(){var t;this._resizeObserver||(this._resizeObserver=new ce(function(t,e,i){var s;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),n=this,r=function(){s=null,i||t.apply(n,o)},a=i&&!s;clearTimeout(s),s=setTimeout(r,e),a&&t.apply(n,o)}}((()=>this._resize()),250,!1)));(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card"))&&this._resizeObserver.observe(this)}_resize(){var t;if(!this.isConnected)return;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._cardWidth=e.getBoundingClientRect().width)}_checkForErrors(){this._error=[],Object.keys(this._config).forEach((t=>{null!==t.match(/^entity_/)&&void 0===this.hass.states[this._config[t]]&&this._error.push(`'${t}=${this._config[t]}' not found`)}));for(const t of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1","entity_extended_1","entity_pop","entity_forecast_min","entity_forecast_max"])if(void 0!==this._config[t])if(this._config[t].match("^weather.")){if(void 0===this.hass.states[this._config.weather_entity]){this._error.push("'weather_entity needs to be defined (not found).");break}if(this._config[t]!==this._config.weather_entity){this._error.push(`'${t} needs to be the same as weather_entity.`);break}const e=this.forecast1;if(void 0!==e){const i=new Date;switch(i.setDate(i.getDate()+1),t){case"entity_forecast_icon_1":void 0===this._getForecastPropFromWeather(e,i,"condition")&&this._error.push(`'${t} attribute forecast[1].condition not found`);break;case"entity_forecast_min_1":void 0===this._getForecastPropFromWeather(e,i,"templow")&&this._error.push(`'${t} attribute forecast[1].templow not found`);break;case"entity_forecast_max_1":void 0===this._getForecastPropFromWeather(e,i,"temperature")&&this._error.push(`'${t} attribute forecast[1].temperature not found`);break;case"entity_pop_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation_probability")&&this._error.push(`'${t} attribute forecast[1].precipitation_probability not found`);break;case"entity_pos_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation")&&this._error.push(`'${t} attribute forecast[1].precipitation not found`)}}}else{const e=this._config[t].match(/(\d+)(?!.*\d)/g);if(e){const i=this._config[t].replace(/(\d+)(?!.*\d)/g,Number(e)+1);void 0===this.hass.states[i]&&this._error.push(`'${t}'+'1'=${i}' not found`)}else this._error.push(`'${t}=${this._config[t]}' value needs to have a number`)}return void 0!==this._config.weather_entity&&(void 0!==this._config.forecast_type?["daily","hourly","twice_daily"].includes(this._config.forecast_type)||this._error.push("'forecast_type must be daily, hourly, or twice_daily"):this._error.push("'forecast_type needs to be configured.")),0!==this._error.length}_renderUpdateTime(){if(this._config.entity_update_time&&this.hass.states[this._config.entity_update_time]&&void 0!==this.hass.states[this._config.entity_update_time].state)if(!0===this._config.update_time_use_attr){if(void 0!==this._config.update_time_name_attr){const t=this._config.update_time_name_attr.toLowerCase().split(".").reduce(((t,e)=>void 0!==t?t[e]:void 0),this.hass.states[this._config.entity_update_time].attributes);if(void 0!==t){const e=new Date(`${t}`);switch(this.timeFormat){case"12hour":return W`${e.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+e.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"24hour":return W`${e.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+e.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"system":return W`${e.toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" ","")+", "+e.toLocaleDateString(navigator.language).replace(",","")}`}}}}else{const t=new Date(this.hass.states[this._config.entity_update_time].state);switch(this.timeFormat){case"12hour":return W`${t.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+t.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"24hour":return W`${t.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+t.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"system":return W`${t.toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" ","")+", "+t.toLocaleDateString(navigator.language).replace(",","")}`}}return W`---`}_renderCompleteOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return W``;const i=this._weatherIcon(this.forecastIcon),s=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),o="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,n="unknown"!==i?W``:W`<div class="unknown-forecast">${this.forecastIcon}</div>`,r=W`<div class="big-icon"><img src="${s.href}" width="100%" height="100%" title="${o}"></div>`,a=W`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,c=this.currentApparentTemperature,l=""!=c?W`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${c}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:W``,h=!0===this._config.option_show_overview_separator?W`<hr class=line>`:"",d=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=W`<div class="forecast-text">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:W`<div class="forecast-text">---</div>`:W``;return W`
      <div class="overview-section section">
        ${this._config.text_card_title?W`<div class="card-header">${this._config.text_card_title}</div>`:W``}
        ${this._config.text_card_title_2?W`<div class="card-header">${this._config.text_card_title_2}</div>`:W``}
        ${this._config.entity_update_time?W`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:W``}
        <div class="overview-top">
          <div class="top-left">${r}${n}</div>
          <div class="currentTemps">${a}${l}</div>
        </div>
        ${d}
        ${h}
      </div>
    `}_renderObservationsOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return W``;const e=this._cardWidth>=344?" stacked":"",i=W`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,s=this.currentApparentTemperature,o=""!=s?W`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${s}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:W``,n=!0===this._config.option_show_overview_separator?W`<hr class=line>`:"";return W`
      <div class="overview-section section${e}">
        ${this._config.text_card_title?W`<div class="card-header">${this._config.text_card_title}</div>`:W``}
        ${this._config.text_card_title_2?W`<div class="card-header">${this._config.text_card_title_2}</div>`:W``}
        ${this._config.entity_update_time?W`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:W``}
      </div>
      <div class="overview-section section">
        <div class="overview-top">
          <div class="top-left-obs"></div>
          <div class="currentTemps">${i}${o}</div>
        </div>
        ${n}
      </div>
    `}_renderTitleOnlyOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return W``;const e=!0===this._config.option_show_overview_separator?W`<hr class=line>`:"";return W`
      <div class="overview-section section">
        ${this._config.text_card_title?W`<div class="card-header">${this._config.text_card_title}</div>`:W``}
        ${this._config.text_card_title_2?W`<div class="card-header">${this._config.text_card_title_2}</div>`:W``}
        ${this._config.entity_update_time?W`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:W``}
        ${e}
      </div>
    `}_renderForecastOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return W``;const i=this._weatherIcon(this.forecastIcon),s=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),o="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,n="unknown"!==i?W``:W`<div class="unknown-forecast">${this.forecastIcon}</div>`,r=W`<div class="big-icon"><img src="${s.href}" width="100%" height="100%" title="${o}"></div>`,a=!0===this._config.option_show_overview_separator?W`<hr class=line>`:"",c=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=W`<div class="forecast-text-right">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:W`<div class="forecast-text-right">---</div>`:W``;return W`
      <div class="overview-section section">
        ${this._config.text_card_title?W`<div class="card-header">${this._config.text_card_title}</div>`:W``}
        ${this._config.text_card_title_2?W`<div class="card-header">${this._config.text_card_title_2}</div>`:W``}
        ${this._config.entity_update_time?W`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:W``}
        <div class="overview-top">
          <div class="top-left">${r}${n}</div>
          ${c}
        </div>
        ${a}
      </div>
    `}_getCardSizeOverviewSection(){var t=0;if(!1!==this._config.show_section_overview){if("observations"===this._config.overview_layout)return 76;t=16,t+=void 0!==this._config.text_card_title?20:0,t+=void 0!==this._config.text_card_title_2?20:0,t+=void 0!==this._config.entity_update_time?20:0,"title only"!==this._config.overview_layout&&(t+="forecast"!==this._config.overview_layout&&void 0!==this._config.entity_summary?145:120)}return t}_renderOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return W``;switch(this._config.overview_layout||"complete"){case"observations":return this._renderObservationsOverviewSection();case"forecast":return this._renderForecastOverviewSection();case"title only":return this._renderTitleOnlyOverviewSection();default:return this._renderCompleteOverviewSection()}}_getCardSizeExtendedSection(){var t=0;return!1!==this._config.show_section_extended&&(t+=16,t+=this._config.entity_extended?40:0,t+=void 0!==this._config.entity_todays_uv_forecast||void 0!==this._config.entity_todays_fire_danger?20:0),t}_renderExtendedSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_extended)||void 0===this._config.entity_extended&&void 0===this._config.entity_todays_uv_forecast&&void 0===this._config.entity_todays_fire_danger)return W``;const i=this._config.entity_extended||"";var s=[];if(void 0!==this.hass.states[i])if(null===(e=this._config.entity_extended)||void 0===e?void 0:e.match("^weather.")){const t=this.forecast1;var o;if(void 0!==t)o=void 0,!0===this._config.extended_use_attr?void 0!==this._config.extended_name_attr&&(o=t[0][this._config.extended_name_attr]):o="extended_use_attr: - must be set to true when entity_extended is set to a weather entity",void 0!==o&&s.push(W`${o}`)}else if(!0===this._config.extended_use_attr){if(void 0!==this._config.extended_name_attr){const t=this._config.extended_name_attr.toLowerCase().split(".").reduce(((t,e)=>void 0!==t?t[e]:void 0),this.hass.states[i].attributes);void 0!==t&&s.push(W`${t}`)}}else void 0!==this.hass.states[i]&&s.push(W`${this.hass.states[i].state}`);return s.push(W`${this._config.entity_todays_uv_forecast&&this.hass.states[this._config.entity_todays_uv_forecast]&&"unknown"!==this.hass.states[this._config.entity_todays_uv_forecast].state?" "+this.hass.states[this._config.entity_todays_uv_forecast].state:""}`),s.push(W`${this._config.entity_todays_fire_danger&&this.hass.states[this._config.entity_todays_fire_danger]&&"unknown"!==this.hass.states[this._config.entity_todays_fire_danger].state?" "+this.hass.states[this._config.entity_todays_fire_danger].state:""}`),W`
      <div class="extended-section section">
        <div class="f-extended">
          ${s}
        </div>
      </div>
    `}_getCardSizeSlotsSection(){var t=0;if(!1!==this._config.show_section_slots){var e=("remove"!==this._config.slot_l1?1:0)+("remove"!==this._config.slot_l2?1:0)+("remove"!==this._config.slot_l3?1:0)+("remove"!==this._config.slot_l4?1:0)+("remove"!==this._config.slot_l5?1:0)+(void 0!==this._config.slot_l6&&"remove"!==this._config.slot_l6?1:0)+(void 0!==this._config.slot_l7&&"remove"!==this._config.slot_l7?1:0)+(void 0!==this._config.slot_l8&&"remove"!==this._config.slot_l8?1:0),i=("remove"!==this._config.slot_r1?1:0)+("remove"!==this._config.slot_r2?1:0)+("remove"!==this._config.slot_r3?1:0)+("remove"!==this._config.slot_r4?1:0)+("remove"!==this._config.slot_r5?1:0)+(void 0!==this._config.slot_r6&&"remove"!==this._config.slot_r6?1:0)+(void 0!==this._config.slot_r7&&"remove"!==this._config.slot_r7?1:0)+(void 0!==this._config.slot_r8&&"remove"!==this._config.slot_r8?1:0);t+=16+24*Math.max(e,i)}return t}_renderSlotsSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_slots))return W``;var e=!0===this._config.use_old_column_format?W`
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
    `:W`
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
    `;return W`
      <div class="slot-section section">${e}</div>
    `}_renderHorizontalDailyForecastSection(){var t,e,i,s,o,n,r;const a=[],c=this._config.daily_forecast_days||5;for(var l=0;l<c;l++){const $=new Date;var h,d,u;if($.setDate($.getDate()+l+1),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;var _;if(void 0!==this.forecast1&&(_=this._getForecastPropFromWeather(this.forecast1,$,"condition")),void 0===_)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&_?this._weatherIcon(_):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=W`<li class="f-slot-horiz-icon"><i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i></li>`}else{var p=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;if(void 0===t||void 0===this.hass.states[t])break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=W`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i>`}(null===(e=this._config.entity_forecast_max_1)||void 0===e?void 0:e.match("^weather."))?void 0!==this.forecast1&&(d=this._getForecastPropFromWeather(this.forecast1,$,"temperature")):d=(p=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l))].state:void 0,(null===(i=this._config.entity_forecast_min_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,$,"templow")):u=(p=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l))].state:void 0;const S=W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,E=!0===this._config.old_daily_format?W`
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text highTemp">${d?Math.round(Number(d)):"---"}</div>
              ${S}
            </span>
          </li>
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text lowTemp">${u?Math.round(Number(u)):"---"}</div>
              ${S}
            </span>
          </li>`:"highlow"===this._config.tempformat?W`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text highTemp">${d?Math.round(Number(d)):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text lowTemp">${u?Math.round(Number(u)):"---"}</div>
                ${S}
              </span>
            </li>`:W`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text lowTemp">${u?Math.round(Number(u)):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text highTemp">${d?Math.round(Number(d)):"---"}</div>
                ${S}
              </span>
            </li>
          `;var v,f,g;if(null===(s=this._config.entity_pop_1)||void 0===s?void 0:s.match("^weather.")){const t=this._config.entity_pop_1;var m;void 0!==this.forecast1&&(m=this._getForecastPropFromWeather(this.forecast1,$,"precipitation_probability")),v=t?W`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${this.hass.states[t]&&void 0!==m?Math.round(Number(m)):"---"}</div><div class="unit">%</div></span></li>`:W``}else{const t=(p=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;v=p?W`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></span></li>`:W``}if(null===(o=this._config.entity_pos_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_pos_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,$,"precipitation")),f=t?W`<li class="f-slot-horiz-text"><span><div class="pos">${this.hass.states[t]&&void 0!==y?y:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:W``}else{const t=(p=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;f=p?W`<li class="f-slot-horiz-text"><span><div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:W``}if(null===(n=this._config.entity_summary_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_summary_1;var b;void 0!==this.forecast1&&(b=null!==(r=this._getForecastPropFromWeather(this.forecast1,$,"detailed_description"))&&void 0!==r?r:this._getForecastPropFromWeather(this.forecast1,$,"condition")),g=W`<div class="fcasttooltipblock" id="fcast-summary-${l}" style="width:${100*c}%;left:-${100*l}%;"><div class="fcasttooltiptext">${this.hass.states[t]&&void 0!==b?(w=this.hass.localize,x=b,w(`component.weather.state._.${x}`)||x):"---"}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/c/2+l*(100/c)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}else{const t=(p=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;g=W`<div class="fcasttooltipblock" id="fcast-summary-${l}" style="width:${100*c}%;left:-${100*l}%;"><div class="fcasttooltiptext">${this._config.option_tooltips&&t?this.hass.states[t]?this.hass.states[t].state:"---":""}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/c/2+l*(100/c)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}a.push(W`
        <div class="day-horiz fcasttooltip">
          <ul class="f-slot-horiz">
            <li class="f-slot-horiz-text"><span class="dayname">${$?$.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</span></li>
            ${h}
            ${E}
            ${v}
            ${f}
          </ul>
          ${g}
        </div>
      `)}var w,x;return W`
      <div class="daily-forecast-horiz-section section">
        ${a}
      </div>
    `}_renderVerticalDailyForecastSection(){var t,e,i,s,o,n,r;const a=[],c=this._config.daily_forecast_days||5;for(var l=0;l<c;l++){const c=new Date;var h,d,u,_,p,v;if(c.setDate(c.getDate()+l+1),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;if(void 0!==this.forecast1&&(v=this._getForecastPropFromWeather(this.forecast1,c,"condition")),void 0===v)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&v?this._weatherIcon(v):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=W`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}else{var f=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=f&&this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;if(!t||void 0===this.hass.states[t]||"unknown"===this.hass.states[t].state)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(void 0!==this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=W`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}if(null===(e=this._config.entity_summary_1)||void 0===e?void 0:e.match("^weather.")){void 0!==this.forecast1&&(v=this._getForecastPropFromWeather(this.forecast1,c,"condition"));var g=(f=!0)?W`
          <div class="f-summary-vert">${this.hass.states[this._config.entity_summary_1]?this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary_1],v):"---"}</div>`:""}else{const t=(f=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;g=f?W`
          <div class="f-summary-vert">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:""}(null===(i=this._config.entity_forecast_max_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(d=this._getForecastPropFromWeather(this.forecast1,c,"temperature")):d=(f=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l))].state:void 0,(null===(s=this._config.entity_forecast_min_1)||void 0===s?void 0:s.match("^weather."))?void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,c,"templow")):u=(f=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l))].state:void 0;const S=W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,E=u?W`
        <div class="f-slot-vert">
          <div class="temp-label">Min: </div>
          <div class="low-temp">${Math.round(Number(u))}</div>${S}
        </div>`:W`---`,O=d?W`
        <div class="f-slot-vert">
          <div class="temp-label">Max: </div>
          <div class="high-temp">${Math.round(Number(d))}</div>${S}
        </div>`:W`---`;if(null===(o=this._config.entity_pop_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_pop_1;var m;void 0!==this.forecast1&&(m=this._getForecastPropFromWeather(this.forecast1,c,"precipitation_probability")),_=t?W`<div class="f-slot-vert"><div class="f-label">Chance of rain </div>
        <div class="pop">${this.hass.states[t]&&void 0!==m?Math.round(Number(m)):"---"}</div><div class="unit">%</div></div>`:W``}else{const t=(f=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;_=f?W`
          <div class="f-slot-vert"><div class="f-label">Chance of rain </div>
          <div class="pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></div>`:W``}if(null===(n=this._config.entity_pos_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_pos_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,c,"precipitation")),p=t?W`<div class="f-slot-vert"><div class="f-label">Possible rain </div>
        <div class="pos">${this.hass.states[t]&&void 0!==y?y:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></div>`:W``}else{const t=(f=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;p=f?W`
          <div class="f-slot-vert"><div class="f-label">Possible rain </div>
          <div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>
          <div class="unit">${this.getUOM("precipitation")}</div></div>`:W``}var b,w=W``;if(null===(r=this._config.entity_extended_1)||void 0===r?void 0:r.match("^weather.")){if(void 0!==this.forecast1)b=void 0,!0===this._config.daily_extended_use_attr?void 0!==this._config.daily_extended_name_attr&&(b=this._getForecastPropFromWeather(this.forecast1,c,this._config.daily_extended_name_attr)):b="daily_extended_use_attr: - must be set to true when entity_extended_1 is set to a weather entity",void 0!==b&&(w=b?W`<div class="f-extended">${b}</div>`:W``)}else if(f=!!(this._config.entity_extended_1&&l<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g),l<(this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days:7))if(!0===this._config.daily_extended_use_attr){const t=(f=!!this._config.entity_extended_1&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):this._config.entity_extended_1;if(t&&void 0!==this.hass.states[t]){const e=null==(f=!!(this._config.daily_extended_name_attr&&l<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.daily_extended_name_attr.match(/(\d+)(?!.*\d)/g))&&t&&this._config.daily_extended_name_attr?this.hass.states[t].attributes[this._config.daily_extended_name_attr]:f&&this._config.daily_extended_name_attr&&t?this._config.daily_extended_name_attr.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)).toLowerCase().split(".").reduce(((t,e)=>void 0!==t?t[e]:void 0),this.hass.states[t].attributes):void 0;w=e?W`<div class="f-extended">${e}</div>`:W``}}else{const t=f&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;w=f?W`<div class="f-extended">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:W``}f=!!this._config.entity_fire_danger_1&&this._config.entity_fire_danger_1.match(/(\d+)(?!.*\d)/g);var x=W``;const A=f&&this._config.entity_fire_danger_1?this._config.entity_fire_danger_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;if(f&&A){var $=!1!==this._config.option_daily_color_fire_danger&&this.hass.states[A].attributes.color_fill?`background-color:${this.hass.states[A].attributes.color_fill}; color:${this.hass.states[A].attributes.color_text};`:"";!1===this._config.option_daily_color_fire_danger?x=f&&"unknown"!==this.hass.states[A].state?W`
          <div class="f-firedanger-vert">${A&&this.hass.states[A]?this.hass.states[A].state:"---"}</div>`:W``:(""===$&&($="font-weight:300;"),x=f&&"unknown"!==this.hass.states[A].state?W`
          <div class="f-firedanger-vert">
            <p class="fire-danger-text-color" style="${$}">${A&&this.hass.states[A]?this.hass.states[A].state.toUpperCase():"---"}</p>
          </div>`:W``)}a.push(W`
        <div class="day-vert fcasttooltip">
          <div class="day-vert-top">
            <div class="dayname-vert">${c?c.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</div>
            ${g}
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
              ${p}
            </div>
          </div>
          <div class="day-vert-bottom">
            ${w}
          </div>
        </div>
      `)}return W`
      <div class="daily-forecast-vert-section section">
        ${a}
      </div>
    `}_getForecastPropFromWeather(t,e,i){const s=e.toDateString(),o=t.filter((t=>new Date(t.datetime).toDateString()===s));if(1===o.length)return void 0!==o[0][i]?String(o[0][i]):void 0;if(2===o.length){const t=o.find((t=>!0===t.daytime)),e=o.find((t=>!1===t.daytime));return"templow"===i?e&&void 0!==e.temperature?String(e.temperature):void 0:t&&void 0!==t[i]?String(t[i]):void 0}}_getCardSizeDailyForecastSection(){var t=0;return!1!==this._config.show_section_daily_forecast&&("vertical"!==this._config.daily_forecast_layout?t+=146:(t+=18+87*(this._config.daily_forecast_days||5),0!==this._config.daily_extended_forecast_days&&(t+=48*Math.min(this._config.daily_forecast_days||5,this._config.daily_extended_forecast_days||7)))),t}_renderDailyForecastSection(){var t;return!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_daily_forecast)?W``:"vertical"!==this._config.daily_forecast_layout?this._renderHorizontalDailyForecastSection():this._renderVerticalDailyForecastSection()}render(){var t,e;const i=[];this.hassExtended=this.hass;const s=((t,e)=>{var i,s;if(void 0===e){if(void 0!==(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(i=null==t?void 0:t.forecast)||void 0===i?void 0:i.length)>2)return{forecast:t.forecast,type:null==t?void 0:t.type};e="daily"}if(e===(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(s=null==t?void 0:t.forecast)||void 0===s?void 0:s.length)>2)return{forecast:t.forecast,type:e}})(this._forecastEvent,null===(t=this._config)||void 0===t?void 0:t.forecast_type);this.forecast1=this._config.weather_entity&&(null===(e=null==s?void 0:s.forecast)||void 0===e?void 0:e.length)?s.forecast.slice(0,this._config.daily_forecast_days?this._config.daily_forecast_days:5):void 0,this._checkForErrors()&&i.push(this._showConfigWarning(this._error));const o=[];return void 0!==this._config.section_order&&this._config.section_order.forEach((t=>{switch(t){case"overview":o.push(this._renderOverviewSection());break;case"extended":o.push(this._renderExtendedSection());break;case"slots":o.push(this._renderSlotsSection());break;case"daily_forecast":o.push(this._renderDailyForecastSection())}})),i.push(W`
      <style>
        ${this.styles}
      </style>
      <ha-card class="card"
        @action=${this._handleAction}
        .actionHandler=${fe({hasHold:Wt(this._config.hold_action),hasDoubleClick:Wt(this._config.double_tap_action)})}
        tabindex=${le(Wt(this._config.tap_action)?"0":void 0)}
        ><div class="content">
          ${o}
        </div>
      </ha-card>
    `),W`${i}`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,s){var o;"double_tap"===s&&i.double_tap_action?o=i.double_tap_action:"hold"===s&&i.hold_action?o=i.hold_action:"tap"===s&&i.tap_action&&(o=i.tap_action),zt(t,e,i,o)}(this,this.hass,this._config,t.detail.action)}get slotL1(){return this.slotValue("l1",this._config.slot_l1)}get slotL2(){return this.slotValue("l2",this._config.slot_l2)}get slotL3(){return this.slotValue("l3",this._config.slot_l3)}get slotL4(){return this.slotValue("l4",this._config.slot_l4)}get slotL5(){return this.slotValue("l5",this._config.slot_l5)}get slotL6(){return this.slotValue("l6",this._config.slot_l6)}get slotL7(){return this.slotValue("l7",this._config.slot_l7)}get slotL8(){return this.slotValue("l8",this._config.slot_l8)}get slotR1(){return this.slotValue("r1",this._config.slot_r1)}get slotR2(){return this.slotValue("r2",this._config.slot_r2)}get slotR3(){return this.slotValue("r3",this._config.slot_r3)}get slotR4(){return this.slotValue("r4",this._config.slot_r4)}get slotR5(){return this.slotValue("r5",this._config.slot_r5)}get slotR6(){return this.slotValue("r6",this._config.slot_r6)}get slotR7(){return this.slotValue("r7",this._config.slot_r7)}get slotR8(){return this.slotValue("r8",this._config.slot_r8)}slotValue(t,e){switch(e){case"pop":return this.slotPop;case"popforecast":return this.slotPopForecast;case"possible_today":return this.slotPos;case"possible_tomorrow":return this.slotPossibleTomorrow;case"rainfall":return this.slotRainfall;case"humidity":return this.slotHumidity;case"pressure":return this.slotPressure;case"observed_max":return this.slotObservedMax;case"observed_min":return this.slotObservedMin;case"forecast_max":return this.slotForecastMax;case"forecast_min":return this.slotForecastMin;case"temp_next":return this.slotTempNext;case"temp_following":return this.slotTempFollowing;case"temp_maximums":return this.slotTempMaximums;case"temp_minimums":return this.slotTempMinimums;case"uv_summary":return this.slotUvSummary;case"fire_danger":return this.slotFireDanger;case"wind":return this.slotWind;case"wind_kt":return this.slotWindKt;case"visibility":return this.slotVisibility;case"sun_next":return this.slotSunNext;case"sun_following":return this.slotSunFollowing;case"custom1":return this.slotCustom1;case"custom2":return this.slotCustom2;case"custom3":return this.slotCustom3;case"custom4":return this.slotCustom4;case"empty":return this.slotEmpty;case"remove":return this.slotRemove}switch(t){case"l1":return this.slotForecastMax;case"l2":return this.slotForecastMin;case"l3":return this.slotWind;case"l4":return this.slotPressure;case"l5":return this.slotSunNext;case"l6":case"l7":case"l8":case"r6":case"r7":case"r8":return this.slotRemove;case"r1":return this.slotPopForecast;case"r2":return this.slotHumidity;case"r3":return this.slotUvSummary;case"r4":return this.slotFireDanger;case"r5":return this.slotSunFollowing}return this.slotEmpty}get slotEmpty(){return W`<li>&nbsp;</li>`}get slotRemove(){return W``}get slotPopForecast(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?W`<div class="slot-text unit">%</div>`:W``,s=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,o=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==s?s:"---":"---",n="---"!==o?W`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text">&nbsp;</div>
          <div class="slot-text pop-text-today">${o}</div>${n}
        </div>
      </li>
    `}get slotPop(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?W`<div class="slot-text unit">%</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text"></div>
        </div>
      </li>
    `}get slotPos(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,e=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==t?t:"---":"---",i="---"!==e?W`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosToday}&nbsp;<div class="slot-text possible_today-text">${e}</div>${i}
        </div>
      </li>
    `}get slotPossibleTomorrow(){const t=void 0!==this.forecast1&&this.forecast1.length>1?this.forecast1[1].precipitation:void 0,e=this._config.entity_possible_tomorrow&&void 0!==this.hass.states[this._config.entity_possible_tomorrow]?null===this._config.entity_possible_tomorrow.match("^weather.")?this.hass.states[this._config.entity_possible_tomorrow].state:void 0!==t?t:"---":"---",i="---"!==e?W`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosTomorrow}&nbsp;<div class="slot-text possible_tomorrow-text">${e}</div>${i}
        </div>
      </li>
    `}get slotRainfall(){const t=this.currentRainfall,e="---"!==t?W`<div class="slot-text unit"></span>${this.getUOM("precipitation")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text rainfall-text">${t}</div>${e}
        </div>
      </li>
    `}get slotHumidity(){const t=this.currentHumidity,e="---"!==t?W`<div class="slot-text unit">%</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:water-percent"></ha-icon>
          </div>
          <div class="slot-text humidity-text">${t}</div>${e}
        </div>
      </li>`}get slotPressure(){const t="---"!==this.currentPressure?W`<div class="slot-text unit">${this._config.pressure_units?this._config.pressure_units:this.getUOM("air_pressure")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:gauge"></ha-icon>
          </div>
          <div class="slot-text pressure-text">${this.currentPressure}</div>${t}
        </div>
      </li>
    `}get slotObservedMax(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${i}
        </div>
      </li>
    `}get slotObservedMin(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${i}
        </div>
      </li>
    `}get slotForecastMax(){const t=void 0!==this.forecast1?this.forecast1[0].temperature:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?null===this._config.entity_forecast_max.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",s="---"!==i?W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMax}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${s}
        </div>
      </li>
    `}get slotForecastMin(){const t=void 0!==this.forecast1?this.forecast1[0].templow:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?null===this._config.entity_forecast_min.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",s="---"!==i?W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMin}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${s}
        </div>
      </li>
    `}get slotTempNext(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_next&&void 0!==this.hass.states[this._config.entity_temp_next]?Number(this.hass.states[this._config.entity_temp_next].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state:"",o="---"!==i?W`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-next-text">${s} ${i}</div>
          ${o}
        </div>
      </li>
    `}get slotTempFollowing(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_following&&void 0!==this.hass.states[this._config.entity_temp_following]?Number(this.hass.states[this._config.entity_temp_following].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state:"",o="---"!==i?W`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-following-text">${s} ${i}</div>
          ${o}
        </div>
      </li>
    `}get slotTempMaximums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s="---"!==e?W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
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
    `}get slotTempMinimums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s="---"!==e?W`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:W``;return W`
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
    `}get slotUvSummary(){const t=this._config.entity_uv_alert_summary&&void 0!==this.hass.states[this._config.entity_uv_alert_summary]?"unknown"!==this.hass.states[this._config.entity_uv_alert_summary].state?this.hass.states[this._config.entity_uv_alert_summary].state:"Not Applicable":"---";return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
          </div>
          <div class="slot-text daytime-uv-text">${this.localeTextUVRating} ${t}</div>
        </div>
      </li>
    `}get slotFireDanger(){const t=this._config.entity_fire_danger,e=t&&void 0!==this.hass.states[t]?"unknown"!==this.hass.states[t].state?!1===this._config.option_color_fire_danger?this.hass.states[t].state:this.hass.states[t].state.toLocaleUpperCase():"Not Applicable":"---";var i=t&&!1!==this._config.option_color_fire_danger&&this.hass.states[t].attributes.color_fill?`background-color:${this.hass.states[t].attributes.color_fill}; color:${this.hass.states[t].attributes.color_text};`:"";return!1===this._config.option_color_fire_danger?W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text" style="${i}">${e} </div>
        </div>
      </li>`:(""===i&&(i="font-weight:300; padding-left:0px;"),W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text">
            <p class="fire-danger-text-color" style="${i}">${e}</p>
          </div>
        </div>
      </li>`)}get slotWind(){const t=this._config.entity_wind_speed&&this._config.option_show_beaufort?W`<div class="slot-text">BFT: ${this.currentBeaufort} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?W`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=W`<div class="slot-text unit">${this.getUOM("length")}/h</div>`,s=this._config.entity_wind_speed?W`<div class="slot-text">${this.currentWindSpeed}</div>${i}&nbsp;`:"",o=this._config.entity_wind_gust?W`<div class="slot-text">(${this.localeTextGust} ${this.currentWindGust}</div>${i})`:"";return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${s}${o}
        </div>
      </li>
    `}get slotWindKt(){const t=this._config.entity_wind_speed_kt&&this._config.option_show_beaufort?W`<div class="slot-text">BFT: ${this.currentBeaufortKt} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?W`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=W`<div class="slot-text unit">Kt</div>`,s=this._config.entity_wind_speed_kt?W`<div class="slot-text">${this.currentWindSpeedKt}</div>${i}&nbsp;`:"",o=this._config.entity_wind_gust_kt?W`<div class="slot-text">(${this.localeTextGust} ${this.currentWindGustKt}</div>${i})`:"";return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${s}${o}
        </div>
      </li>
    `}get slotVisibility(){const t=this.currentVisibility,e="---"!==t?this.getUOM("length"):"";return W`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-fog"></ha-icon>
          </div>
          <div class="slot-text visibility-text">${t}</div>
          <div class="slot-text unit">${e}</div>
        </div>
      </li>
    `}get slotSunNext(){return this._config.entity_sun?this.sunSet.next:W``}get slotSunFollowing(){return this._config.entity_sun?this.sunSet.following:W``}get slotCustom1(){var t=this._config.custom1_icon?this._config.custom1_icon:"mdi:help-box",e=this._config.custom1_value&&void 0!==this.hass.states[this._config.custom1_value]?this.hass.states[this._config.custom1_value].state:"unknown",i=this._config.custom1_units?this._config.custom1_units:"";return W`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-1-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom2(){var t=this._config.custom2_icon?this._config.custom2_icon:"mdi:help-box",e=this._config.custom2_value&&void 0!==this.hass.states[this._config.custom2_value]?this.hass.states[this._config.custom2_value].state:"unknown",i=this._config.custom2_units?this._config.custom2_units:"";return W`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-2-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom3(){var t=this._config.custom3_icon?this._config.custom3_icon:"mdi:help-box",e=this._config.custom3_value&&void 0!==this.hass.states[this._config.custom3_value]?this.hass.states[this._config.custom3_value].state:"unknown",i=this._config.custom3_units?this._config.custom3_units:"";return W`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-3-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom4(){var t=this._config.custom4_icon?this._config.custom4_icon:"mdi:help-box",e=this._config.custom4_value&&void 0!==this.hass.states[this._config.custom4_value]?this.hass.states[this._config.custom4_value].state:"unknown",i=this._config.custom4_units?this._config.custom4_units:"";return W`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-4-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get forecastIcon(){const t=this._config.entity_forecast_icon;return t&&this.hass.states[t]?this.hass.states[t].state:"---"}get currentTemperature(){const t=this._config.entity_temperature,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.temperature?Number(this.hass.states[t].attributes.temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---"}get currentApparentTemperature(){const t=this._config.entity_apparent_temp,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.apparent_temperature?Number(this.hass.states[t].attributes.apparent_temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---":""}get currentHumidity(){const t=this._config.entity_humidity;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.humidity?Number(this.hass.states[t].attributes.humidity).toLocaleString(this.locale):"---":"---"}get currentRainfall(){const t=this._config.entity_rainfall,e=!0===this._config.option_today_rainfall_decimals?1:0;return t&&this.hass.states[t]?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---"}get currentPressure(){const t=this._config.entity_pressure;var e=this._config.option_pressure_decimals?Math.max(Math.min(this._config.option_pressure_decimals,3),0):0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.pressure?Number(this.hass.states[t].attributes.pressure).toLocaleString(this.locale):"---":"---"}get currentVisibility(){const t=this._config.entity_visibility;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.visibility?Number(this.hass.states[t].attributes.visibility).toLocaleString(this.locale):"---":"---"}get currentWindBearing(){const t=this._config.entity_wind_bearing;return t&&this.hass.states[t]?null===t.match("^weather.")?isNaN(Number(this.hass.states[t].state))?this.hass.states[t].state:this.windDirections[Math.round(Number(this.hass.states[t].state)/360*16)]:void 0!==this.hass.states[t].attributes.wind_bearing?isNaN(Number(this.hass.states[t].attributes.wind_bearing))?this.hass.states[t].attributes.wind_bearing:this.windDirections[Math.round(Number(this.hass.states[t].attributes.wind_bearing)/360*16)]:"---":"---"}get currentWindSpeed(){const t=this._config.entity_wind_speed;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindGust(){const t=this._config.entity_wind_gust;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_gust_speed?Math.round(Number(this.hass.states[t].attributes.wind_gust_speed)).toLocaleString(this.locale):"---":"---"}get currentWindSpeedKt(){const t=this._config.entity_wind_speed_kt;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindGustKt(){const t=this._config.entity_wind_gust_kt;return t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):"---"}get windDirections(){const t=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"],i=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],s=["N","NNO","NO","ONO","O","OZO","ZO","ZZO","Z","ZZW","ZW","WZW","W","WNW","NW","NNW","N"],o=["צפון","צ-צ-מז","צפון מזרח","מז-צ-מז","מזרח","מז-ד-מז","דרום מזרח","ד-ד-מז","דרום","ד-ד-מע","דרום מערב","מע-ד-מע","מערב","מע-צ-מע","צפון מערב","צ-צ-מע","צפון"],n=["N","NNØ","NØ","ØNØ","Ø","ØSØ","SØ","SSØ","S","SSV","SV","VSV","V","VNV","NV","NNV","N"],r=["С","ССВ","СВ","ВСВ","В","ВЮВ","ЮВ","ЮЮВ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"],a=["С","ССИ","СИ","ИСИ","И","ИЮИ","ЮИ","ЮЮИ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"];switch(this.locale){case"it":case"fr":return e;case"de":return i;case"nl":return s;case"he":return o;case"ru":return r;case"da":return n;case"bg":return a;default:return t}}get currentBeaufort(){const t=this._config.entity_wind_speed;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);switch(this.hass.states[t].attributes.unit_of_measurement){case"mph":return e>=73?"12":e>=64?"11":e>=55?"10":e>=47?"9":e>=39?"8":e>=32?"7":e>=25?"6":e>=19?"5":e>=13?"4":e>=8?"3":e>=4?"2":e>=1?"1":"0";case"m/s":return e>=32.7?"12":e>=28.5?"11":e>=24.5?"10":e>=20.8?"9":e>=17.2?"8":e>=13.9?"7":e>=10.8?"6":e>=8?"5":e>=5.5?"4":e>=3.4?"3":e>=1.6?"2":e>=.5?"1":"0";default:return e>=118?"12":e>=103?"11":e>=89?"10":e>=75?"9":e>=62?"8":e>=50?"7":e>=39?"6":e>=29?"5":e>=20?"4":e>=12?"3":e>=6?"2":e>=2?"1":"0"}}return"---"}get currentBeaufortKt(){const t=this._config.entity_wind_speed_kt;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);return e>=64?"12":e>=56?"11":e>=48?"10":e>=41?"9":e>=34?"8":e>=28?"7":e>=22?"6":e>=17?"5":e>=11?"4":e>=7?"3":e>=4?"2":e>=1?"1":"0"}return"---"}get sunSet(){var t,e;switch(this.timeFormat){case"12hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"";break;case"24hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"";break;case"system":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):""}var i=new Date;return i.setDate(i.getDate()+1),this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?"above_horizon"===this.hass.states[this._config.entity_sun].state?(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,{next:W`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${t}</div>
            </li>`,following:W`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${e}</div>
            </li>`,nextText:t,followingText:e,nextIcon:"mdi:weather-sunset-down",followingIcon:"mdi:weather-sunset-up"}):((new Date).getDate()!=new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).getDate()&&(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,t=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+t),{next:W`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${e}</div>
            </li>`,following:W`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${t}</div>
            </li>`,nextText:e,followingText:t,nextIcon:"mdi:weather-sunset-up",followingIcon:"mdi:weather-sunset-down"}):{next:W``,following:W``,nextText:"",followingText:"",nextIcon:"",followingIcon:""}}get timeFormat(){return this._config.option_time_format?this._config.option_time_format:"system"}_weatherIcon(t){switch(t){case"sunny":case"clear":return this.iconClear;case"mostly-sunny":case"mostly_sunny":return this.iconMostlySunny;case"partly-cloudy":case"partly_cloudy":case"partlycloudy":return this.iconPartlyCloudy;case"cloudy":return this.iconCloudy;case"hazy":case"hazey":case"haze":return this.iconHazy;case"frost":return this.iconFrost;case"light-rain":case"light_rain":return this.iconLightRain;case"wind":case"windy":return this.iconWindy;case"fog":case"foggy":return this.iconFog;case"showers":case"shower":return this.iconShowers;case"rain":case"rainy":return this.iconRain;case"dust":case"dusty":return this.iconDust;case"snow":case"snowy":return this.iconSnow;case"snowy-rainy":case"snowy_rainy":case"snowyrainy":return this.iconSnowRain;case"storm":case"stormy":return this.iconStorm;case"light-showers":case"light-shower":case"light_showers":case"light_shower":return this.iconLightShowers;case"heavy-showers":case"heavy-shower":case"heavy_showers":case"heavy_shower":case"pouring":return this.iconHeavyShowers;case"tropical-cyclone":case"tropical_cyclone":case"tropicalcyclone":return this.iconCyclone;case"clear-day":case"clear_day":return this.iconClearDay;case"clear-night":case"clear_night":return this.iconClearNight;case"sleet":return this.iconSleet;case"partly-cloudy-day":case"partly_cloudy_day":return this.iconPartlyCloudyDay;case"partly-cloudy-night":case"partly_cloudy_night":return this.iconPartlyCloudyNight;case"hail":return this.iconHail;case"lightning":case"lightning-rainy":case"lightning_rainy":case"thunderstorm":return this.iconLightning;case"windy-variant":case"windy_variant":return this.iconWindyVariant}return"unknown"}get dayOrNight(){return this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?{below_horizon:"night",above_horizon:"day"}[this.hass.states[this._config.entity_sun].state]:"day"}get iconClear(){return`clear-${this.dayOrNight}`}get iconMostlySunny(){return`cloudy-1-${this.dayOrNight}`}get iconPartlyCloudy(){return`cloudy-2-${this.dayOrNight}`}get iconCloudy(){return"cloudy"}get iconHazy(){return`haze-${this.dayOrNight}`}get iconFrost(){return`frost-${this.dayOrNight}`}get iconLightRain(){return"rainy-2"}get iconWindy(){return"wind"}get iconFog(){return`fog-${this.dayOrNight}`}get iconShowers(){return`rainy-1-${this.dayOrNight}`}get iconRain(){return"rainy-3"}get iconDust(){return"dust"}get iconSnow(){return"snowy-3"}get iconSnowRain(){return"snow-and-sleet-mix"}get iconStorm(){return`scattered-thunderstorms-${this.dayOrNight}`}get iconLightShowers(){return`rainy-1-${this.dayOrNight}`}get iconHeavyShowers(){return`rainy-2-${this.dayOrNight}`}get iconCyclone(){return"tropical-storm"}get iconClearDay(){return"clear-day"}get iconClearNight(){return"clear-night"}get iconSleet(){return"rain-and-sleet-mix"}get iconPartlyCloudyDay(){return"cloudy-1-day"}get iconPartlyCloudyNight(){return"cloudy-1-night"}get iconHail(){return"hail"}get iconLightning(){return`isolated-thunderstorms-${this.dayOrNight}`}get iconWindyVariant(){return"wind"}get locale(){try{return Intl.NumberFormat(this._config.option_locale),this._config.option_locale}catch(t){return}}get localeTextFeelsLike(){switch(this.locale){case"it":return"Percepito";case"fr":return"Ressenti";case"de":return"Gefühlt";case"nl":return"Voelt als";case"pl":return"Odczuwalne";case"he":return"מרגיש כמו";case"da":return"Føles som";case"ru":return"Ощущается как";case"ua":return"Відчувається як";case"bg":return"Усеща се като";default:return"Feels like"}}get localeTextObservedMax(){return this.locale,"Observed Max"}get localeTextObservedMin(){return this.locale,"Observed Min"}get localeTextObsMax(){return this.locale,"Obs Max"}get localeTextObsMin(){return this.locale,"Obs Min"}get localeTextForecastMax(){switch(this.locale){case"it":return"Max oggi";case"fr":return"Max aujourd'hui";case"de":return"Max heute";case"nl":return"Max vandaag";case"pl":return"Maks Temperatura";case"he":return"מקסימלי היום";case"da":return"Højeste i dag";case"ru":return"Макс сегодня";case"ua":return"Макс сьогодні";case"bg":return"Макс днес";default:return"Forecast Max"}}get localeTextForecastMin(){switch(this.locale){case"it":return"Min oggi";case"fr":return"Min aujourd'hui";case"de":return"Min heute";case"nl":return"Min vandaag";case"pl":return"Min Temperatura";case"he":return"דקות היום";case"da":return"Laveste i dag";case"ru":return"Мин сегодня";case"ua":return"Мін сьогодні";case"bg":return"Мин днес";default:return"Forecast Min"}}get localeTextPosToday(){switch(this.locale){case"it":return"Previsione";case"fr":return"Prévoir";case"de":return"Vorhersage";case"nl":return"Prognose";case"pl":return"Prognoza";case"he":return"תַחֲזִית";case"da":return"Vejrudsigt";case"ru":case"ua":return"Прогноз";case"bg":return"Прогноза";default:return"Forecast"}}get localeTextPosTomorrow(){switch(this.locale){case"it":return"Prev per domani";case"fr":return"Prév demain";case"de":case"nl":return"Prog morgen";case"pl":return"Prog jutro";case"he":return"תחזית מחר";case"da":return"Prog i morgen";case"ru":case"ua":return"Прогноз на завтра";case"bg":return"Прогноза за утре";default:return"Fore Tom"}}get localeTextFore(){switch(this.locale){case"it":return"Prev";case"fr":return"Prév";case"de":case"nl":case"pl":case"da":return"Prog";case"he":return"תַחֲזִית";case"ru":case"ua":return"Прогноз";case"bg":return"Прогноза";default:return"Fore"}}get localeTextUVRating(){switch(this.locale){default:return"UV";case"ru":case"ua":return"УФ"}}get localeTextFireDanger(){switch(this.locale){case"it":return"Fuoco";case"fr":return"Feu";case"de":return"Feuer";case"nl":case"da":return"Brand";case"pl":return"Ogień";case"he":return"אֵשׁ";case"ru":return"Огонь";case"ua":return"Вогонь";case"bg":return"Пожар";default:return"Fire"}}get localeTextGust(){switch(this.locale){case"it":return"Raffica";case"fr":return"Rafale";case"de":return"Böe";case"nl":return"Windstoot";case"pl":return"Poryw";case"he":return"בלת";case"da":return"Vindstød";case"ru":return"Порыв";case"ua":return"Поривистий";case"bg":return"Пориви";default:return"Gust"}}getUOM(t){const e=this.hass.config.unit_system.length;switch(t){case"air_pressure":const i=this._config.entity_pressure;return i&&this.hass.states[i]?null===i.match("^weather.")?void 0!==this.hass.states[i].attributes.unit_of_measurement?this.hass.states[i].attributes.unit_of_measurement:"km"===e?"hPa":"mbar":void 0!==this.hass.states[i].attributes.pressure_unit?this.hass.states[i].attributes.pressure_unit:"--":"--";case"length":return e;case"precipitation":return"km"===e?"mm":"in";case"intensity":return"km"===e?"mm/h":"in/h";default:return this.hass.config.unit_system[t]||""}}_showConfigWarning(t){return W`
      <hui-warning>
        <div>Weather Card</div>
        ${t.map((t=>W`<div>${t}</div>`))}
      </hui-warning>
    `}_showWarning(t){return W`<hui-warning>${t}</hui-warning>`}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),W`${e}`}get styles(){const t=this._config.option_tooltips?"visible":"hidden",e=this._config.temp_font_weight||"300",i=this._config.temp_font_size||"4em",s=this._config.forecast_text_font_size||"21px",o=this._config.forecast_text_alignment||"center";return ht`
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
        font-weight: ${lt(e)};
        font-size: ${lt(i)};
        color: var(--primary-text-color);
        position: relative;
        line-height: 74%;
      }
      .unit-temp-big {
        display: table-cell;
        vertical-align: top;
        font-weight: ${lt(e)};
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
        font-size: ${lt(s)};
        text-align: ${lt(o)};
        line-height: 25px;
      }
      .forecast-text-right {
        font-size: ${lt(s)};
        text-align: ${lt(o)};
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
        visibility: ${lt(t)};
      }
      .fcasttooltiptext {
        padding-left: 8px;
        padding-right: 8px;
      }
    `}};s([kt()],ge.prototype,"_subscribed",void 0),s([kt()],ge.prototype,"_forecastEvent",void 0),s([Nt({attribute:!1})],ge.prototype,"hass",void 0),s([kt()],ge.prototype,"_config",void 0),s([kt()],ge.prototype,"_cardWidth",void 0),ge=s([Ot("platinum-weather-card")],ge);export{V as A,ge as P,H as T,e as _,i as a,s as b,ht as c,kt as d,de as e,le as f,o as g,Ut as h,ue as i,Ot as j,Ft as l,Nt as n,Ct as o,St as s,he as t,W as x};
