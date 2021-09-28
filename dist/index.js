(()=>{"use strict";var t={273:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(645),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".tinyslide-ready{--tinyslide-size:1;--tinyslide-autoplay:3s;--tinyslide-speed:1s;--tinyslide-gutter:0px;--tinyslide-overflow-size:0px;--tinyslide-overflow-opacity:0.3;--tinyslide-btn-width:0px;--tinyslide-btn-height:100%;--tinyslide-btn-fontsize:3em;--tinyslide-btn-pad-h:0px;--tinyslide-btn-pad-v:0px;--tinyslide-btn-background:#fff;--tinyslide-btn-color:#000;--tinyslide-btn-opacity:0.5;--tinyslide-btn-hover-speed:.25s;--tinyslide-btn-hover-background:var(--tinyslide-btn-background);--tinyslide-btn-hover-color:var(--tinyslide-btn-color);--tinyslide-btn-hover-opacity:1;--tinyslide-private-flex-item-extra:2;--tinyslide-private-flex-item-count:0;--tinyslide-private-flex-width: calc( 100% * var(--tinyslide-private-flex-item-count) / var(--tinyslide-size) - 2 * var(--tinyslide-private-flex-item-count) * var(--tinyslide-overflow-size) / var(--tinyslide-size) + 1 * var(--tinyslide-private-flex-item-count) * var(--tinyslide-gutter) / var(--tinyslide-size) );--tinyslide-private-flex-item-width: calc(100% / var(--tinyslide-private-flex-item-count));--tinyslide-private-flex-delta: calc(-1 * var(--tinyslide-gutter) / 2 + var(--tinyslide-overflow-size));width:100% !important;box-sizing:border-box;position:relative;padding:0}.tinyslide-ready .tinyslide-wrapper{display:block;width:100%;padding:0;margin:0;overflow:hidden}.tinyslide-ready .tinyslide-slider{width:var(--tinyslide-private-flex-width);transform:translateX(calc(-1 * var(--tinyslide-private-flex-item-extra) * var(--tinyslide-private-flex-item-width) + var(--tinyslide-private-flex-delta)));display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;overflow:hidden}.tinyslide-ready .tinyslide-slider>*{flex:1 !important;position:relative;margin:0 calc(var(--tinyslide-gutter) / 2) !important;width:calc(100% / var(--tinyslide-size)) !important;opacity:1;transition:opacity ease var(--tinyslide-speed)}.tinyslide-ready .tinyslide-slider>.out{opacity:var(--tinyslide-overflow-opacity)}.tinyslide-ready.anim-next .tinyslide-slider>.in-first{opacity:var(--tinyslide-overflow-opacity)}.tinyslide-ready.anim-next .tinyslide-slider>.out-after{opacity:1}.tinyslide-ready.anim-prev .tinyslide-slider>.in-last{opacity:var(--tinyslide-overflow-opacity)}.tinyslide-ready.anim-prev .tinyslide-slider>.out-before{opacity:1}.tinyslide-ready.anim-next .tinyslide-slider,.tinyslide-ready.anim-prev .tinyslide-slider{transition:transform ease var(--tinyslide-speed)}.tinyslide-ready.anim-next .tinyslide-slider{transform:translateX(calc(-1 * calc(var(--tinyslide-private-flex-item-extra) + 1) * var(--tinyslide-private-flex-item-width) + var(--tinyslide-private-flex-delta)))}.tinyslide-ready.anim-prev .tinyslide-slider{transform:translateX(calc(-1 * calc(var(--tinyslide-private-flex-item-extra) - 1) * var(--tinyslide-private-flex-item-width) + var(--tinyslide-private-flex-delta)))}.tinyslide-ready .tinyslide-control{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev,.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next{pointer-events:all;position:absolute;align-items:center;align-content:center;text-align:center;outline:none;cursor:pointer;border:none;transition:all ease var(--tinyslide-btn-hover-speed);opacity:var(--tinyslide-btn-opacity);--tinyslide-private-btn-height: min(100%, var(--tinyslide-btn-height), calc(100% - 2 * var(--tinyslide-btn-pad-v)));top:calc(calc(100% - var(--tinyslide-private-btn-height)) / 2);height:var(--tinyslide-private-btn-height);width:var(--tinyslide-btn-width);background:var(--tinyslide-btn-background);display:flex;align-items:center;justify-content:center;overflow:hidden}.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev span,.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next span{transition:all ease .5s;font-size:var(--tinyslide-btn-fontsize);color:var(--tinyslide-btn-color)}.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev:hover,.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next:hover{opacity:var(--tinyslide-btn-hover-opacity);background:var(--tinyslide-btn-hover-background)}.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev:hover span,.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next:hover span{color:var(--tinyslide-btn-hover-color)}.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev{left:var(--tinyslide-btn-pad-h)}.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next{right:var(--tinyslide-btn-pad-h)}.tinyslide-ready.hide-out-items .out{opacity:0}.tinyslide-ready.hide-out-items .tinyslide-control{display:none}",""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(s[r]=!0)}for(var o=0;o<t.length;o++){var d=[].concat(t[o]);n&&s[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),e.push(d))}},e}},669:(t,e,i)=>{i.r(e),i.d(e,{default:()=>f});var n=i(379),s=i.n(n),a=i(795),r=i.n(a),o=i(569),d=i.n(o),l=i(565),c=i.n(l),y=i(216),m=i.n(y),p=i(589),u=i.n(p),h=i(273),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=d().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=m(),s()(h.Z,v);const f=h.Z&&h.Z.locals?h.Z.locals:void 0},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var a={},r=[],o=0;o<t.length;o++){var d=t[o],l=n.base?d[0]+n.base:d[0],c=a[l]||0,y="".concat(l," ").concat(c);a[l]=c+1;var m=i(y),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(e[m].references++,e[m].updater(p)):e.push({identifier:y,updater:s(p,n),references:1}),r.push(y)}return r}function s(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i.update(t=e)}else i.remove()}}t.exports=function(t,s){var a=n(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var o=i(a[r]);e[o].references--}for(var d=n(t,s),l=0;l<a.length;l++){var c=i(a[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=d}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n=i.css,s=i.media,a=i.sourceMap;s?t.setAttribute("media",s):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,i),a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{i(669);const t={index:0,instances:{}};window.TINYSLIDE_GLOBALS=t;class e{static AutomaticBuild(){var t;t=function(){document.querySelectorAll(".tinyslide").forEach((function(t){e.Build(t)})),window.addEventListener("resize",(function(){e.GetInstances().forEach((function([t,e]){e.redraw()}))}))},"interactive"!==document.readyState&&"complete"!==document.readyState||t(),document.addEventListener("DOMContentLoaded",t)}static GetInstances(){return Object.entries(t.instances)}static GetInstance(e){return t.instances[e]||void 0}static Build(t,i){if("string"==typeof t)return Object.entries(document.querySelectorAll(t)).map((([t,n])=>{e.Build(n,i)}));const n=new e(t,i);return n.init(),n}constructor(i,n){if(i.dataset.tinyslideID>0)return e.GetInstance(i.dataset.tinyslideID);{let e=++t.index;i.dataset.tinyslideID=e,this.state={ID:e,init:!1,index:0,animation:{mode:null,timeout:null},autoplay:{mode:!0,timeout:null},domSource:i,domWrapper:null,domSlider:null,domControls:null,domControlPrev:null,domControlNext:null,domItems:[],style:n?.style||{},itemDecorator:n?.itemDecorator||null}}}getId(){return this.state.ID}init(){void 0===t.instances[this.getId()]&&(t.instances[this.getId()]=this),this.state.init||(this.state.init=!0,this.__init_clone_original_item(),this.__init_build_dom(),this.__init_apply_style()),this.redraw()}destroy(){clearTimeout(this.state.animation.timeout),clearTimeout(this.state.autoplay.timeout),this.state.domSource.innerHTML="",this.state.domSource.classList.remove("tinyslide-ready"),this.state.domItems.forEach((t=>this.state.domSource.appendChild(t))),delete t.instances[this.getId()]}redraw(){if(document.body.contains(this.state.domSource)){var t=parseInt(this.getCssProperty("size"));this.state.domItems.length<=t?(this.autoplay(!1),this.state.index=0,t=this.state.domItems.length,this.state.domSource.classList.add("hide-out-items"),this.state.domSource.style.setProperty("--tinyslide-size",t)):this.state.domSource.classList.remove("hide-out-items");let s=2,a=Math.max(3*t+s,this.state.domItems.length);this.state.domSource.style.setProperty("--tinyslide-private-flex-item-extra",s),this.state.domSource.style.setProperty("--tinyslide-private-flex-item-count",a),this.state.domSlider.innerHTML="";for(var e=0;e<a;e++){var i=(this.state.index+e-s)%this.state.domItems.length;i=i>=0?i:i+this.state.domItems.length,i%=this.state.domItems.length;var n=this.state.domItems[i].cloneNode(!0);e<s||e>t+s-1?n.classList.add("out"):n.classList.add("in"),e==s-1&&n.classList.add("out-before"),e==s&&n.classList.add("in-first"),e==t+s&&n.classList.add("out-after"),e==t+(s-1)&&n.classList.add("in-last"),this.state.domSlider.appendChild(n)}}this.play()}play(){if(null===this.state.animation.mode){var t=this.getCssProperty("autoplay","timing");t>0&&!0===this.state.autoplay.mode&&(clearTimeout(this.state.autoplay.timeout),this.state.autoplay.timeout=setTimeout((()=>{this.next()}),t))}}autoplay(t){clearTimeout(this.state.autoplay.timeout),"clear"!==t&&(this.state.autoplay.mode=!!t),this.state.autoplay.mode&&this.play()}anim_reset(){this.autoplay("clear"),clearTimeout(this.state.animation.timeout),this.state.domSource.classList.remove("anim-prev"),this.state.domSource.classList.remove("anim-next"),this.state.animation.mode=null}next(){"next"!==this.state.animation.mode&&(this.anim_reset(),this.state.animation.mode="next",this.state.domSource.classList.add("anim-next"),this.state.animation.timeout=setTimeout((()=>{this.state.index++,this.anim_reset(),this.redraw()}),this.getCssProperty("speed","timing")))}prev(){"prev"!==this.state.animation.mode&&(this.anim_reset(),this.state.animation.mode="prev",this.state.domSource.classList.add("anim-prev"),this.state.animation.timeout=setTimeout((()=>{this.state.index--,this.anim_reset(),this.redraw()}),this.getCssProperty("speed","timing")))}getCssProperty(t,e=null){let i=getComputedStyle(this.state.domSource).getPropertyValue("--tinyslide-"+t);return"timing"==e&&(i=i.match(/^[0-9.]+s$/)?1e3*i.replaceAll(/[^0-9.]/g,""):i.replaceAll(/[^0-9.]/g,"")),i}__init_clone_original_item(){window.test=this.state.domSource,this.state.domItems=Object.entries(this.state.domSource.children).map((function([t,e]){return e.cloneNode(!0)}))}__init_build_dom(){this.state.domSource.innerHTML="",this.state.domWrapper=document.createElement("div"),this.state.domWrapper.classList.add("tinyslide-wrapper"),this.state.domWrapper.addEventListener("mousemove",(()=>this.autoplay(!1)),!0),this.state.domWrapper.addEventListener("mouseout",(()=>this.autoplay(!0)),!0),this.state.domSlider=document.createElement("div"),this.state.domSlider.classList.add("tinyslide-slider"),this.state.domWrapper.appendChild(this.state.domSlider),this.state.domControls=document.createElement("div"),this.state.domControls.classList.add("tinyslide-control"),this.state.domControlPrev=document.createElement("div"),this.state.domControlPrev.classList.add("tinyslide-ctrl-prev"),this.state.domControlPrev.innerHTML="<span>◄</span>",this.state.domControlPrev.addEventListener("click",(()=>this.prev()),!0),this.state.domControls.appendChild(this.state.domControlPrev),this.state.domControlNext=document.createElement("div"),this.state.domControlNext.classList.add("tinyslide-ctrl-next"),this.state.domControlNext.innerHTML="<span>►</span>",this.state.domControlNext.addEventListener("click",(()=>this.next()),!0),this.state.domControls.appendChild(this.state.domControlNext),this.state.domWrapper.appendChild(this.state.domControls),this.state.domSource.appendChild(this.state.domWrapper),this.state.domSource.classList.add("tinyslide-ready")}__init_apply_style(){Object.entries(this.state.style).forEach((([t,e])=>{this.state.domSource.style.setProperty("--tinyslide-"+t,e)}))}__helper_wrap(t,e){return t.parentNode.insertBefore(e,t),e.appendChild(t),e}}const n=e;window.Tinyslide=n})()})();