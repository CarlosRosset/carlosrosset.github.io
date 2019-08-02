const t=window.Ionic.h;import{g as e,h as i}from"./chunk-6d7d2f8c.js";import{GESTURE_CONTROLLER as n}from"./chunk-f56eaea8.js";class s{constructor(){this.lastOnEnd=0,this.blocker=n.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const i=this.contentEl;i&&(void 0!==e&&i.classList.remove(`menu-content-${e}`),i.classList.add(`menu-content-${t}`),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=e(this.win,this.side)}swipeGestureChanged(){this.updateState()}async componentWillLoad(){if(void 0===this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer)return void(this.disabled=!0);const t=this.menuCtrl=await this.lazyMenuCtrl.componentOnReady().then(t=>t._getInstance()),e=this.el.parentNode,i=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]");i&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),this.gesture=(await import("./chunk-f56eaea8.js")).createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}componentDidUnload(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return this.menuCtrl._setOpen(this,t,e)}async _setOpen(t,e=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl._createAnimation(this.type,this))}async startAnimation(t,e){const i=this.animation.reverse(!t);e?await i.playAsync():i.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&(e=t.currentX,i=this.maxEdgeStart,this.isEndSide?e>=this.win.innerWidth-i:e<=i));var e,i}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()}onMove(t){if(!this.isAnimating||!this.animation)return;const e=a(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return;const e=this._isOpen,i=this.isEndSide,n=a(t.deltaX,e,i),s=this.width,o=n/s,r=t.velocityX,l=s/2,d=r>=0&&(r>.2||t.deltaX>l),h=r<=0&&(r<-.2||t.deltaX<-l),c=e?i?d:h:i?h:d;let u=!e&&c;e&&!c&&(u=!0);const m=(c?1-o:o)*s;let p=0;if(m>5){const t=m/Math.abs(r);p=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(u),{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(c,o,p)}beforeAnimation(t){this.el.classList.add(o),this.backdropEl&&this.backdropEl.classList.add(r),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"click",t),t?(this.contentEl&&this.contentEl.classList.add(l),this.ionDidOpen.emit()):(this.el.classList.remove(o),this.contentEl&&this.contentEl.classList.remove(l),this.backdropEl&&this.backdropEl.classList.remove(r),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this)}forceClosing(){this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)}hostData(){const{isEndSide:t,type:e,disabled:i,isPaneVisible:n}=this;return{role:"complementary",class:{[`menu-type-${e}`]:!0,"menu-enabled":!i,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":n}}}render(){return[t("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},t("slot",null)),t("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1})]}static get is(){return"ion-menu"}static get encapsulation(){return"shadow"}static get properties(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionWillOpen",method:"ionWillOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionWillClose",method:"ionWillClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidOpen",method:"ionDidOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidClose",method:"ionDidClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"click",method:"onBackdropClick",capture:!0,disabled:!0}]}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner{left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}static get styleMode(){return"md"}}function a(t,e,i){return Math.max(0,e!==i?-t:t)}const o="show-menu",r="show-backdrop",l="menu-content-open";class d{constructor(){this.autoHide=!0}hostData(){return{class:{button:!0,"ion-activatable":!0}}}render(){const e=this.config.get("menuIcon","menu");return t("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},t("button",{type:"button"},t("slot",null,t("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&t("ion-ripple-effect",{type:"unbounded"})))}static get is(){return"ion-menu-button"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}}static get style(){return":host{color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:none;background:transparent;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button,ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0}ion-icon{padding-top:0;padding-bottom:0;pointer-events:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host{--color:initial}button{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){button{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}ion-icon{font-size:26px}"}static get styleMode(){return"md"}}function h(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}const c=8;function u(t,e,i){let n,s;const a=i.width+c;i.isEndSide?(n=a+"px",s="0px"):(n=-a+"px",s="0px");const o=(new t).addElement(i.menuInnerEl).fromTo("translateX",n,s),r=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.32);return h(t).then(t=>t.add(o).add(r))}function m(t,e,i){let n,s;const a=i.width;i.isEndSide?(n=-a+"px",s=a+"px"):(n=a+"px",s=-a+"px");const o=(new t).addElement(i.menuInnerEl).fromTo("translateX",s,"0px"),r=(new t).addElement(i.contentEl).fromTo("translateX","0px",n),l=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.32);return h(t).then(t=>t.add(o).add(l).add(r))}function p(t,e,i){const n=i.width*(i.isEndSide?-1:1)+"px",s=(new t).addElement(i.contentEl).fromTo("translateX","0px",n);return h(t).then(t=>t.add(s))}class g{constructor(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",p),this.registerAnimation("push",m),this.registerAnimation("overlay",u)}async open(t){const e=await this.get(t);return!!e&&e.open()}async close(t){const e=await(void 0!==t?this.get(t):this.getOpen());return void 0!==e&&e.close()}async toggle(t){const e=await this.get(t);return!!e&&e.toggle()}async enable(t,e){const i=await this.get(e);return i&&(i.disabled=!t),i}async swipeGesture(t,e){const i=await this.get(e);return i&&(i.swipeGesture=t),i}async isOpen(t){if(null!=t){const e=await this.get(t);return void 0!==e&&e.isOpen()}return void 0!==await this.getOpen()}async isEnabled(t){const e=await this.get(t);return!!e&&!e.disabled}async get(t){if(await this.waitUntilReady(),"start"===t||"end"===t){return this.find(e=>e.side===t&&!e.disabled)||this.find(e=>e.side===t)}if(null!=t)return this.find(e=>e.menuId===t);return this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:void 0)}async getOpen(){return await this.waitUntilReady(),this.getOpenSync()}async getMenus(){return await this.waitUntilReady(),this.getMenusSync()}async isAnimating(){return await this.waitUntilReady(),this.isAnimatingSync()}registerAnimation(t,e){this.menuAnimations.set(t,e)}_getInstance(){return Promise.resolve(this)}_register(t){const e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))}_unregister(t){const e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)}_setActiveMenu(t){const e=t.side;this.menus.filter(i=>i.side===e&&i!==t).forEach(t=>t.disabled=!0)}async _setOpen(t,e,i){if(this.isAnimatingSync())return!1;if(e){const e=await this.getOpen();e&&t.el!==e&&await e.setOpen(!1,!1)}return t._setOpen(e,i)}async _createAnimation(t,e){const i=this.menuAnimations.get(t);if(!i)throw new Error("animation not registered");const n=await import("./chunk-b43431d3.js").then(t=>t.create(i,null,e));return this.config.getBoolean("animated",!0)||n.duration(0),n}getOpenSync(){return this.find(t=>t._isOpen)}getMenusSync(){return this.menus.map(t=>t.el)}isAnimatingSync(){return this.menus.some(t=>t.isAnimating)}find(t){const e=this.menus.find(t);if(void 0!==e)return e.el}waitUntilReady(){return Promise.all(Array.from(this.doc.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()))}static get is(){return"ion-menu-controller"}static get properties(){return{_getInstance:{method:!0},close:{method:!0},config:{context:"config"},doc:{context:"document"},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}}static get style(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}}class b{constructor(){this.visible=!1,this.autoHide=!0}componentDidLoad(){return this.updateVisibility()}async onClick(){const t=await y(this.doc);t&&await t.get(this.menu)&&t.toggle(this.menu)}async updateVisibility(){const t=await y(this.doc);if(t){const e=await t.get(this.menu);if(e&&await e.isActive())return void(this.visible=!0)}this.visible=!1}hostData(){const t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}}render(){return t("slot",null)}static get is(){return"ion-menu-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}}static get listeners(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]}static get style(){return":host(.menu-toggle-hidden){display:none}"}}function y(t){const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}export{s as IonMenu,d as IonMenuButton,g as IonMenuController,b as IonMenuToggle};