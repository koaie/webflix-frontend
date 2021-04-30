(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // ../../dist/build/_fallback-592c257e.js
  var require_fallback_592c257e = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => fallback_592c257e_default2
    });
    var fallback_592c257e_default = class extends _t {
      constructor(s4) {
        super(), wt(this, s4, null, null, i2, {});
      }
    };
    var fallback_592c257e_default2 = fallback_592c257e_default;
  });

  // ../../dist/build/shadow-css-4fcc68be.js
  var require_shadow_css_4fcc68be = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      scopeCss: () => S5
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     *
     * This file is a port of shadowCSS from webcomponents.js to TypeScript.
     * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
     * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
     */
    var t7 = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
    var e6 = new RegExp("(-shadowcsshost" + t7, "gim");
    var s4 = new RegExp("(-shadowcsscontext" + t7, "gim");
    var o4 = new RegExp("(-shadowcssslotted" + t7, "gim");
    var r5 = /-shadowcsshost-no-combinator([^\s]*)/;
    var c3 = [/::shadow/g, /::content/g];
    var n4 = /-shadowcsshost/gim;
    var l3 = /:host/gim;
    var a4 = /::slotted/gim;
    var h3 = /:host-context/gim;
    var i3 = /\/\*\s*[\s\S]*?\*\//g;
    var p3 = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
    var d4 = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
    var g3 = /([{}])/g;
    var m4 = (t8, e7) => {
      const s5 = u3(t8);
      let o5 = 0;
      return s5.escapedString.replace(d4, (...t9) => {
        const r6 = t9[2];
        let c4 = "", n5 = t9[4], l4 = "";
        n5 && n5.startsWith("{%BLOCK%") && (c4 = s5.blocks[o5++], n5 = n5.substring("%BLOCK%".length + 1), l4 = "{");
        const a5 = e7({selector: r6, content: c4});
        return `${t9[1]}${a5.selector}${t9[3]}${l4}${a5.content}${n5}`;
      });
    };
    var u3 = (t8) => {
      const e7 = t8.split(g3), s5 = [], o5 = [];
      let r6 = 0, c4 = [];
      for (let t9 = 0; t9 < e7.length; t9++) {
        const n5 = e7[t9];
        n5 === "}" && r6--, r6 > 0 ? c4.push(n5) : (c4.length > 0 && (o5.push(c4.join("")), s5.push("%BLOCK%"), c4 = []), s5.push(n5)), n5 === "{" && r6++;
      }
      c4.length > 0 && (o5.push(c4.join("")), s5.push("%BLOCK%"));
      return {escapedString: s5.join(""), blocks: o5};
    };
    var w4 = (t8, e7, s5) => t8.replace(e7, (...t9) => {
      if (t9[2]) {
        const e8 = t9[2].split(","), o5 = [];
        for (let r6 = 0; r6 < e8.length; r6++) {
          const c4 = e8[r6].trim();
          if (!c4)
            break;
          o5.push(s5("-shadowcsshost-no-combinator", c4, t9[3]));
        }
        return o5.join(",");
      }
      return "-shadowcsshost-no-combinator" + t9[3];
    });
    var f3 = (t8, e7, s5) => t8 + e7.replace("-shadowcsshost", "") + s5;
    var x4 = (t8, e7, s5) => e7.indexOf("-shadowcsshost") > -1 ? f3(t8, e7, s5) : t8 + e7 + s5 + ", " + e7 + " " + t8 + s5;
    var $2 = (t8, e7) => !((t9) => (t9 = t9.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), new RegExp("^(" + t9 + ")([>\\s~+[.,{:][\\s\\S]*)?$", "m")))(e7).test(t8);
    var _3 = (t8, e7, s5) => {
      const o5 = "." + (e7 = e7.replace(/\[is=([^\]]*)\]/g, (t9, ...e8) => e8[0])), c4 = (t9) => {
        let c5 = t9.trim();
        if (!c5)
          return "";
        if (t9.indexOf("-shadowcsshost-no-combinator") > -1)
          c5 = ((t10, e8, s6) => {
            if (n4.lastIndex = 0, n4.test(t10)) {
              const e9 = `.${s6}`;
              return t10.replace(r5, (t11, s7) => s7.replace(/([^:]*)(:*)(.*)/, (t12, s8, o6, r6) => s8 + e9 + o6 + r6)).replace(n4, e9 + " ");
            }
            return e8 + " " + t10;
          })(t9, e7, s5);
        else {
          const e8 = t9.replace(n4, "");
          if (e8.length > 0) {
            const t10 = e8.match(/([^:]*)(:*)(.*)/);
            t10 && (c5 = t10[1] + o5 + t10[2] + t10[3]);
          }
        }
        return c5;
      }, l4 = ((t9) => {
        const e8 = [];
        let s6, o6 = 0;
        return s6 = (t9 = t9.replace(/(\[[^\]]*\])/g, (t10, s7) => {
          const r6 = `__ph-${o6}__`;
          return e8.push(s7), o6++, r6;
        })).replace(/(:nth-[-\w]+)(\([^)]+\))/g, (t10, s7, r6) => {
          const c5 = `__ph-${o6}__`;
          return e8.push(r6), o6++, s7 + c5;
        }), {content: s6, placeholders: e8};
      })(t8);
      let a5, h4 = "", i4 = 0;
      const p4 = /( |>|\+|~(?!=))\s*/g;
      let d5 = !((t8 = l4.content).indexOf("-shadowcsshost-no-combinator") > -1);
      for (; (a5 = p4.exec(t8)) !== null; ) {
        const e8 = a5[1], s6 = t8.slice(i4, a5.index).trim();
        d5 = d5 || s6.indexOf("-shadowcsshost-no-combinator") > -1;
        h4 += `${d5 ? c4(s6) : s6} ${e8} `, i4 = p4.lastIndex;
      }
      const g4 = t8.substring(i4);
      return d5 = d5 || g4.indexOf("-shadowcsshost-no-combinator") > -1, h4 += d5 ? c4(g4) : g4, m5 = l4.placeholders, h4.replace(/__ph-(\d+)__/g, (t9, e8) => m5[+e8]);
      var m5;
    };
    var b5 = (t8, e7, s5, o5, r6) => m4(t8, (t9) => {
      let r7 = t9.selector, c4 = t9.content;
      t9.selector[0] !== "@" ? r7 = ((t10, e8, s6, o6) => t10.split(",").map((t11) => o6 && t11.indexOf("." + o6) > -1 ? t11.trim() : $2(t11, e8) ? _3(t11, e8, s6).trim() : t11.trim()).join(", "))(t9.selector, e7, s5, o5) : (t9.selector.startsWith("@media") || t9.selector.startsWith("@supports") || t9.selector.startsWith("@page") || t9.selector.startsWith("@document")) && (c4 = b5(t9.content, e7, s5, o5));
      return {selector: r7.replace(/\s{2,}/g, " ").trim(), content: c4};
    });
    var O5 = (t8, r6, n5, i4, p4) => {
      const d5 = ((t9, e7) => {
        const s5 = "." + e7 + " > ", r7 = [];
        return t9 = t9.replace(o4, (...t10) => {
          if (t10[2]) {
            const e8 = t10[2].trim(), o5 = t10[3], c4 = s5 + e8 + o5;
            let n6 = "";
            for (let e9 = t10[4] - 1; e9 >= 0; e9--) {
              const s6 = t10[5][e9];
              if (s6 === "}" || s6 === ",")
                break;
              n6 = s6 + n6;
            }
            const l4 = n6 + c4, a5 = `${n6.trimRight()}${c4.trim()}`;
            if (l4.trim() !== a5.trim()) {
              const t11 = `${a5}, ${l4}`;
              r7.push({orgSelector: l4, updatedSelector: t11});
            }
            return c4;
          }
          return "-shadowcsshost-no-combinator" + t10[3];
        }), {selectors: r7, cssText: t9};
      })(t8 = ((t9) => w4(t9, s4, x4))(t8 = ((t9) => w4(t9, e6, f3))(t8 = t8.replace(h3, "-shadowcsscontext").replace(l3, "-shadowcsshost").replace(a4, "-shadowcssslotted"))), i4);
      return t8 = ((t9) => c3.reduce((t10, e7) => t10.replace(e7, " "), t9))(t8 = d5.cssText), r6 && (t8 = b5(t8, r6, n5, i4)), {cssText: (t8 = (t8 = t8.replace(/-shadowcsshost-no-combinator/g, `.${n5}`)).replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ")).trim(), slottedSelectors: d5.selectors};
    };
    var S5 = (t8, e7, s5) => {
      const o5 = e7 + "-h", r6 = e7 + "-s", c4 = t8.match(p3) || [];
      t8 = ((t9) => t9.replace(i3, ""))(t8);
      const n5 = [];
      if (s5) {
        const e8 = (t9) => {
          const e9 = `/*!@___${n5.length}___*/`, s6 = `/*!@${t9.selector}*/`;
          return n5.push({placeholder: e9, comment: s6}), t9.selector = e9 + t9.selector, t9;
        };
        t8 = m4(t8, (t9) => t9.selector[0] !== "@" ? e8(t9) : t9.selector.startsWith("@media") || t9.selector.startsWith("@supports") || t9.selector.startsWith("@page") || t9.selector.startsWith("@document") ? (t9.content = m4(t9.content, e8), t9) : t9);
      }
      const l4 = O5(t8, e7, o5, r6);
      return t8 = [l4.cssText, ...c4].join("\n"), s5 && n5.forEach(({placeholder: e8, comment: s6}) => {
        t8 = t8.replace(e8, s6);
      }), l4.slottedSelectors.forEach((e8) => {
        t8 = t8.replace(e8.orgSelector, e8.updatedSelector);
      }), t8;
    };
  });

  // ../../dist/build/[watch]-f4be74c4.js
  var require_watch_f4be74c4 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => watch_f4be74c4_default2
    });
    var R6 = (e6, t7) => {
      typeof window != "undefined" && !customElements.get(e6) && customElements.define(e6, t7);
    };
    var M3 = (e6, t7, i3) => {
      e6 && (e6[t7] = i3);
    };
    function L6(e6) {
      if (e6.__esModule)
        return e6;
      var t7 = Object.defineProperty({}, "__esModule", {value: true});
      return Object.keys(e6).forEach(function(i3) {
        var n4 = Object.getOwnPropertyDescriptor(e6, i3);
        Object.defineProperty(t7, i3, n4.get ? n4 : {enumerable: true, get: function() {
          return e6[i3];
        }});
      }), t7;
    }
    var I2 = {allRenderFn: false, cmpDidLoad: true, cmpDidUnload: false, cmpDidUpdate: true, cmpDidRender: true, cmpWillLoad: true, cmpWillUpdate: true, cmpWillRender: true, connectedCallback: true, disconnectedCallback: true, element: true, event: true, hasRenderFn: true, lifecycle: true, hostListener: true, hostListenerTargetWindow: true, hostListenerTargetDocument: true, hostListenerTargetBody: true, hostListenerTargetParent: false, hostListenerTarget: true, member: true, method: true, mode: true, observeAttribute: true, prop: true, propMutable: true, reflect: true, scoped: true, shadowDom: true, slot: true, cssAnnotations: true, state: true, style: true, svg: true, updatable: true, vdomAttribute: true, vdomXlink: true, vdomClass: true, vdomFunctional: true, vdomKey: true, vdomListener: true, vdomRef: true, vdomPropOrAttr: true, vdomRender: true, vdomStyle: true, vdomText: true, watchCallback: true, taskQueue: true, hotModuleReplacement: false, isDebug: false, isDev: false, isTesting: false, hydrateServerSide: false, hydrateClientSide: false, lifecycleDOMEvents: false, lazyLoad: false, profile: false, slotRelocation: true, appendChildSlotFix: false, cloneNodeFix: false, hydratedAttribute: false, hydratedClass: true, safari10: false, scriptDataOpts: false, shadowDomShim: false, slotChildNodesFix: false, propBoolean: true, propNumber: true, propString: true, cssVarShim: false, constructableCSS: true, cmpShouldUpdate: true, devTools: false, dynamicImportShim: false, shadowDelegatesFocus: true, initializeNextTick: false, asyncLoading: false, asyncQueue: false, transformTagName: false, attachStyles: true};
    var D4;
    var F6;
    var H7;
    var N7;
    var z5 = 0;
    var O5 = false;
    var _3 = false;
    var Q5 = false;
    var j4 = false;
    var B5 = null;
    var W6 = 0;
    var U5 = false;
    var q7 = typeof window != "undefined" ? window : {};
    var K5 = I2.cssVarShim ? q7.CSS : null;
    var G5 = q7.document || {head: {}};
    var Y4 = q7.HTMLElement || class {
    };
    var J5 = {$flags$: 0, $resourcesUrl$: "", jmp: (e6) => e6(), raf: (e6) => requestAnimationFrame(e6), ael: (e6, t7, i3, n4) => e6.addEventListener(t7, i3, n4), rel: (e6, t7, i3, n4) => e6.removeEventListener(t7, i3, n4), ce: (e6, t7) => new CustomEvent(e6, t7)};
    var X4 = !I2.shadowDomShim || !I2.shadowDom || (() => (G5.head.attachShadow + "").indexOf("[native") > -1)();
    var Z4 = (() => {
      let e6 = false;
      try {
        G5.addEventListener("e", null, Object.defineProperty({}, "passive", {get() {
          e6 = true;
        }}));
      } catch (e7) {
      }
      return e6;
    })();
    var ee3 = (e6) => Promise.resolve(e6);
    var te3 = !!I2.constructableCSS && (() => {
      try {
        return new CSSStyleSheet(), typeof new CSSStyleSheet().replace == "function";
      } catch (e6) {
      }
      return false;
    })();
    var ie3 = {};
    var ne3 = (e6, t7, i3, n4) => {
      I2.hostListener && i3 && (I2.hostListenerTargetParent && (i3 = n4 ? i3.filter(([e7]) => 32 & e7) : i3.filter(([e7]) => !(32 & e7))), i3.map(([i4, n5, s4]) => {
        const o4 = I2.hostListenerTarget ? oe3(e6, i4) : e6, a4 = se3(t7, s4), r5 = ae3(i4);
        J5.ael(o4, n5, a4, r5), (t7.$rmListeners$ = t7.$rmListeners$ || []).push(() => J5.rel(o4, n5, a4, r5));
      }));
    };
    var se3 = (e6, t7) => (i3) => {
      try {
        I2.lazyLoad ? 256 & e6.$flags$ ? e6.$lazyInstance$[t7](i3) : (e6.$queuedListeners$ = e6.$queuedListeners$ || []).push([t7, i3]) : e6.$hostElement$[t7](i3);
      } catch (e7) {
        Lt3(e7);
      }
    };
    var oe3 = (e6, t7) => I2.hostListenerTargetDocument && 4 & t7 ? G5 : I2.hostListenerTargetWindow && 8 & t7 ? q7 : I2.hostListenerTargetBody && 16 & t7 ? G5.body : I2.hostListenerTargetParent && 32 & t7 ? e6.parentElement : e6;
    var ae3 = (e6) => Z4 ? {passive: (1 & e6) != 0, capture: (2 & e6) != 0} : (2 & e6) != 0;
    var re3 = "http://www.w3.org/1999/xlink";
    var le3 = (e6, t7 = "") => {
      if (I2.profile && performance.mark) {
        const i3 = `st:${e6}:${t7}:${z5++}`;
        return performance.mark(i3), () => performance.measure(`[Stencil] ${e6}() <${t7}>`, i3);
      }
      return () => {
      };
    };
    var ce3 = () => {
      if (I2.devTools) {
        const e6 = q7.stencil = q7.stencil || {}, t7 = e6.inspect;
        e6.inspect = (e7) => {
          let i3 = ((e8) => {
            const t8 = At3(e8);
            if (!t8)
              return;
            const i4 = t8.$flags$, n4 = t8.$hostElement$;
            return {renderCount: t8.$renderCount$, flags: {hasRendered: !!(2 & i4), hasConnected: !!(1 & i4), isWaitingForChildren: !!(4 & i4), isConstructingInstance: !!(8 & i4), isQueuedForUpdate: !!(16 & i4), hasInitializedComponent: !!(32 & i4), hasLoadedComponent: !!(64 & i4), isWatchReady: !!(128 & i4), isListenReady: !!(256 & i4), needsRerender: !!(512 & i4)}, instanceValues: t8.$instanceValues$, ancestorComponent: t8.$ancestorComponent$, hostElement: n4, lazyInstance: t8.$lazyInstance$, vnode: t8.$vnode$, modeName: t8.$modeName$, onReadyPromise: t8.$onReadyPromise$, onReadyResolve: t8.$onReadyResolve$, onInstancePromise: t8.$onInstancePromise$, onInstanceResolve: t8.$onInstanceResolve$, onRenderResolve: t8.$onRenderResolve$, queuedListeners: t8.$queuedListeners$, rmListeners: t8.$rmListeners$, "s-id": n4["s-id"], "s-cr": n4["s-cr"], "s-lr": n4["s-lr"], "s-p": n4["s-p"], "s-rc": n4["s-rc"], "s-sc": n4["s-sc"]};
          })(e7);
          return i3 || typeof t7 != "function" || (i3 = t7(e7)), i3;
        };
      }
    };
    var de3 = new WeakMap();
    var he3 = (e6, t7, i3) => {
      let n4 = zt3.get(e6);
      te3 && i3 ? (n4 = n4 || new CSSStyleSheet(), n4.replace(t7)) : n4 = t7, zt3.set(e6, n4);
    };
    var ue3 = (e6, t7, i3, n4) => {
      let s4 = ve3(t7, i3), o4 = zt3.get(s4);
      if (!I2.attachStyles)
        return s4;
      if (e6 = e6.nodeType === 11 ? e6 : G5, o4)
        if (typeof o4 == "string") {
          e6 = e6.head || e6;
          let i4, a4 = de3.get(e6);
          if (a4 || de3.set(e6, a4 = new Set()), !a4.has(s4)) {
            if (I2.hydrateClientSide && e6.host && (i4 = e6.querySelector(`[sty-id="${s4}"]`)))
              i4.innerHTML = o4;
            else {
              if (I2.cssVarShim && J5.$cssShim$) {
                i4 = J5.$cssShim$.createHostStyle(n4, s4, o4, !!(10 & t7.$flags$));
                const e7 = i4["s-sc"];
                e7 && (s4 = e7, a4 = null);
              } else
                i4 = G5.createElement("style"), i4.innerHTML = o4;
              (I2.hydrateServerSide || I2.hotModuleReplacement) && i4.setAttribute("sty-id", s4), e6.insertBefore(i4, e6.querySelector("link"));
            }
            a4 && a4.add(s4);
          }
        } else
          I2.constructableCSS && !e6.adoptedStyleSheets.includes(o4) && (e6.adoptedStyleSheets = [...e6.adoptedStyleSheets, o4]);
      return s4;
    };
    var me3 = (e6) => {
      const t7 = e6.$cmpMeta$, i3 = e6.$hostElement$, n4 = t7.$flags$, s4 = le3("attachStyles", t7.$tagName$), o4 = ue3(I2.shadowDom && X4 && i3.shadowRoot ? i3.shadowRoot : i3.getRootNode(), t7, e6.$modeName$, i3);
      (I2.shadowDom || I2.scoped) && I2.cssAnnotations && 10 & n4 && (i3["s-sc"] = o4, i3.classList.add(o4 + "-h"), I2.scoped && 2 & n4 && i3.classList.add(o4 + "-s")), s4();
    };
    var ve3 = (e6, t7) => "sc-" + (I2.mode && t7 && 32 & e6.$flags$ ? e6.$tagName$ + "-" + t7 : e6.$tagName$);
    var pe3 = (e6) => Ot3.map((t7) => t7(e6)).find((e7) => !!e7);
    var ge3 = {};
    var be3 = (e6) => (e6 = typeof e6) === "object" || e6 === "function";
    var ye3 = (e6, t7, ...i3) => {
      let n4 = null, s4 = null, o4 = null, a4 = false, r5 = false, l3 = [];
      const c3 = (t8) => {
        for (let i4 = 0; i4 < t8.length; i4++)
          n4 = t8[i4], Array.isArray(n4) ? c3(n4) : n4 != null && typeof n4 != "boolean" && ((a4 = typeof e6 != "function" && !be3(n4)) ? n4 = String(n4) : I2.isDev && typeof e6 != "function" && n4.$flags$ === void 0 && Dt3("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."), a4 && r5 ? l3[l3.length - 1].$text$ += n4 : l3.push(a4 ? fe3(null, n4) : n4), r5 = a4);
      };
      if (c3(i3), t7 && (I2.isDev && e6 === "input" && Se3(t7), I2.vdomKey && t7.key && (s4 = t7.key), I2.slotRelocation && t7.name && (o4 = t7.name), I2.vdomClass)) {
        const e7 = t7.className || t7.class;
        e7 && (t7.class = typeof e7 != "object" ? e7 : Object.keys(e7).filter((t8) => e7[t8]).join(" "));
      }
      if (I2.isDev && l3.some(Te3) && Dt3("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."), I2.vdomFunctional && typeof e6 == "function")
        return e6(t7 === null ? {} : t7, l3, Ce3);
      const d4 = fe3(e6, null);
      return d4.$attrs$ = t7, l3.length > 0 && (d4.$children$ = l3), I2.vdomKey && (d4.$key$ = s4), I2.slotRelocation && (d4.$name$ = o4), d4;
    };
    var fe3 = (e6, t7) => {
      const i3 = {$flags$: 0, $tag$: e6, $text$: t7, $elm$: null, $children$: null};
      return I2.vdomAttribute && (i3.$attrs$ = null), I2.vdomKey && (i3.$key$ = null), I2.slotRelocation && (i3.$name$ = null), i3;
    };
    var ke3 = {};
    var Te3 = (e6) => e6 && e6.$tag$ === ke3;
    var Ce3 = {forEach: (e6, t7) => e6.map($e3).forEach(t7), map: (e6, t7) => e6.map($e3).map(t7).map(we3)};
    var $e3 = (e6) => ({vattrs: e6.$attrs$, vchildren: e6.$children$, vkey: e6.$key$, vname: e6.$name$, vtag: e6.$tag$, vtext: e6.$text$});
    var we3 = (e6) => {
      if (typeof e6.vtag == "function") {
        const t8 = Object.assign({}, e6.vattrs);
        return e6.vkey && (t8.key = e6.vkey), e6.vname && (t8.name = e6.vname), ye3(e6.vtag, t8, ...e6.vchildren || []);
      }
      const t7 = fe3(e6.vtag, e6.vtext);
      return t7.$attrs$ = e6.vattrs, t7.$children$ = e6.vchildren, t7.$key$ = e6.vkey, t7.$name$ = e6.vname, t7;
    };
    var Se3 = (e6) => {
      const t7 = Object.keys(e6), i3 = t7.indexOf("type"), n4 = t7.indexOf("min"), s4 = t7.indexOf("max"), o4 = t7.indexOf("min"), a4 = t7.indexOf("value");
      a4 !== -1 && (a4 < i3 || a4 < n4 || a4 < s4 || a4 < o4) && Ft3('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
    };
    var xe3 = (e6, t7, i3, n4, s4, o4) => {
      if (i3 !== n4) {
        let a4 = Mt3(e6, t7), r5 = t7.toLowerCase();
        if (I2.vdomClass && t7 === "class") {
          const t8 = e6.classList, s5 = Pe3(i3), o5 = Pe3(n4);
          t8.remove(...s5.filter((e7) => e7 && !o5.includes(e7))), t8.add(...o5.filter((e7) => e7 && !s5.includes(e7)));
        } else if (I2.vdomStyle && t7 === "style") {
          if (I2.updatable)
            for (const t8 in i3)
              n4 && n4[t8] != null || (!I2.hydrateServerSide && t8.includes("-") ? e6.style.removeProperty(t8) : e6.style[t8] = "");
          for (const t8 in n4)
            i3 && n4[t8] === i3[t8] || (!I2.hydrateServerSide && t8.includes("-") ? e6.style.setProperty(t8, n4[t8]) : e6.style[t8] = n4[t8]);
        } else if (I2.vdomKey && t7 === "key")
          ;
        else if (I2.vdomRef && t7 === "ref")
          n4 && n4(e6);
        else if (!I2.vdomListener || (I2.lazyLoad ? a4 : e6.__lookupSetter__(t7)) || t7[0] !== "o" || t7[1] !== "n") {
          if (I2.vdomPropOrAttr) {
            const l3 = be3(n4);
            if ((a4 || l3 && n4 !== null) && !s4)
              try {
                if (e6.tagName.includes("-"))
                  e6[t7] = n4;
                else {
                  let s5 = n4 == null ? "" : n4;
                  t7 === "list" ? a4 = false : i3 != null && e6[t7] == s5 || (e6[t7] = s5);
                }
              } catch (e7) {
              }
            let c3 = false;
            I2.vdomXlink && r5 !== (r5 = r5.replace(/^xlink\:?/, "")) && (t7 = r5, c3 = true), n4 == null || n4 === false ? n4 === false && e6.getAttribute(t7) !== "" || (I2.vdomXlink && c3 ? e6.removeAttributeNS(re3, t7) : e6.removeAttribute(t7)) : (!a4 || 4 & o4 || s4) && !l3 && (n4 = n4 === true ? "" : n4, I2.vdomXlink && c3 ? e6.setAttributeNS(re3, t7, n4) : e6.setAttribute(t7, n4));
          }
        } else
          t7 = t7[2] === "-" ? t7.slice(3) : Mt3(q7, r5) ? r5.slice(2) : r5[2] + t7.slice(3), i3 && J5.rel(e6, t7, i3, false), n4 && J5.ael(e6, t7, n4, false);
      }
    };
    var Ve3 = /\s/;
    var Pe3 = (e6) => e6 ? e6.split(Ve3) : [];
    var Ee3 = (e6, t7, i3, n4) => {
      const s4 = t7.$elm$.nodeType === 11 && t7.$elm$.host ? t7.$elm$.host : t7.$elm$, o4 = e6 && e6.$attrs$ || ge3, a4 = t7.$attrs$ || ge3;
      if (I2.updatable)
        for (n4 in o4)
          n4 in a4 || xe3(s4, n4, o4[n4], void 0, i3, t7.$flags$);
      for (n4 in a4)
        xe3(s4, n4, o4[n4], a4[n4], i3, t7.$flags$);
    };
    var Ae3 = (e6, t7, i3, n4) => {
      let s4, o4, a4, r5 = t7.$children$[i3], l3 = 0;
      if (I2.slotRelocation && !O5 && (Q5 = true, r5.$tag$ === "slot" && (D4 && n4.classList.add(D4 + "-s"), r5.$flags$ |= r5.$children$ ? 2 : 1)), I2.isDev && r5.$elm$ && Dt3(`The JSX ${r5.$text$ !== null ? `"${r5.$text$}" text` : `"${r5.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`), I2.vdomText && r5.$text$ !== null)
        s4 = r5.$elm$ = G5.createTextNode(r5.$text$);
      else if (I2.slotRelocation && 1 & r5.$flags$)
        s4 = r5.$elm$ = I2.isDebug || I2.hydrateServerSide ? Be3(r5) : G5.createTextNode("");
      else {
        if (I2.svg && !j4 && (j4 = r5.$tag$ === "svg"), s4 = r5.$elm$ = I2.svg ? G5.createElementNS(j4 ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", I2.slotRelocation && 2 & r5.$flags$ ? "slot-fb" : r5.$tag$) : G5.createElement(I2.slotRelocation && 2 & r5.$flags$ ? "slot-fb" : r5.$tag$), I2.svg && j4 && r5.$tag$ === "foreignObject" && (j4 = false), I2.vdomAttribute && Ee3(null, r5, j4), (I2.shadowDom || I2.scoped) && D4 != null && s4["s-si"] !== D4 && s4.classList.add(s4["s-si"] = D4), r5.$children$)
          for (l3 = 0; l3 < r5.$children$.length; ++l3)
            o4 = Ae3(e6, r5, l3, s4), o4 && s4.appendChild(o4);
        I2.svg && (r5.$tag$ === "svg" ? j4 = false : s4.tagName === "foreignObject" && (j4 = true));
      }
      return I2.slotRelocation && (s4["s-hn"] = H7, 3 & r5.$flags$ && (s4["s-sr"] = true, s4["s-cr"] = F6, s4["s-sn"] = r5.$name$ || "", a4 = e6 && e6.$children$ && e6.$children$[i3], a4 && a4.$tag$ === r5.$tag$ && e6.$elm$ && Re3(e6.$elm$, false))), s4;
    };
    var Re3 = (e6, t7) => {
      J5.$flags$ |= 1;
      const i3 = e6.childNodes;
      for (let e7 = i3.length - 1; e7 >= 0; e7--) {
        const n4 = i3[e7];
        n4["s-hn"] !== H7 && n4["s-ol"] && (Fe3(n4).insertBefore(n4, De3(n4)), n4["s-ol"].remove(), n4["s-ol"] = void 0, Q5 = true), t7 && Re3(n4, t7);
      }
      J5.$flags$ &= -2;
    };
    var Me3 = (e6, t7, i3, n4, s4, o4) => {
      let a4, r5 = I2.slotRelocation && e6["s-cr"] && e6["s-cr"].parentNode || e6;
      for (I2.shadowDom && r5.shadowRoot && r5.tagName === H7 && (r5 = r5.shadowRoot); s4 <= o4; ++s4)
        n4[s4] && (a4 = Ae3(null, i3, s4, e6), a4 && (n4[s4].$elm$ = a4, r5.insertBefore(a4, I2.slotRelocation ? De3(t7) : t7)));
    };
    var Le3 = (e6, t7, i3, n4, s4) => {
      for (; t7 <= i3; ++t7)
        (n4 = e6[t7]) && (s4 = n4.$elm$, Qe3(n4), I2.slotRelocation && (_3 = true, s4["s-ol"] ? s4["s-ol"].remove() : Re3(s4, true)), s4.remove());
    };
    var Ie3 = (e6, t7) => e6.$tag$ === t7.$tag$ && (I2.slotRelocation && e6.$tag$ === "slot" ? e6.$name$ === t7.$name$ : !I2.vdomKey || e6.$key$ === t7.$key$);
    var De3 = (e6) => e6 && e6["s-ol"] || e6;
    var Fe3 = (e6) => (e6["s-ol"] ? e6["s-ol"] : e6).parentNode;
    var He3 = (e6, t7) => {
      const i3 = t7.$elm$ = e6.$elm$, n4 = e6.$children$, s4 = t7.$children$, o4 = t7.$tag$, a4 = t7.$text$;
      let r5;
      I2.vdomText && a4 !== null ? I2.vdomText && I2.slotRelocation && (r5 = i3["s-cr"]) ? r5.parentNode.textContent = a4 : I2.vdomText && e6.$text$ !== a4 && (i3.data = a4) : (I2.svg && (j4 = o4 === "svg" || o4 !== "foreignObject" && j4), (I2.vdomAttribute || I2.reflect) && (I2.slot && o4 === "slot" || Ee3(e6, t7, j4)), I2.updatable && n4 !== null && s4 !== null ? ((e7, t8, i4, n5) => {
        let s5, o5, a5 = 0, r6 = 0, l3 = 0, c3 = 0, d4 = t8.length - 1, h3 = t8[0], u3 = t8[d4], m4 = n5.length - 1, v5 = n5[0], p3 = n5[m4];
        for (; a5 <= d4 && r6 <= m4; )
          if (h3 == null)
            h3 = t8[++a5];
          else if (u3 == null)
            u3 = t8[--d4];
          else if (v5 == null)
            v5 = n5[++r6];
          else if (p3 == null)
            p3 = n5[--m4];
          else if (Ie3(h3, v5))
            He3(h3, v5), h3 = t8[++a5], v5 = n5[++r6];
          else if (Ie3(u3, p3))
            He3(u3, p3), u3 = t8[--d4], p3 = n5[--m4];
          else if (Ie3(h3, p3))
            !I2.slotRelocation || h3.$tag$ !== "slot" && p3.$tag$ !== "slot" || Re3(h3.$elm$.parentNode, false), He3(h3, p3), e7.insertBefore(h3.$elm$, u3.$elm$.nextSibling), h3 = t8[++a5], p3 = n5[--m4];
          else if (Ie3(u3, v5))
            !I2.slotRelocation || h3.$tag$ !== "slot" && p3.$tag$ !== "slot" || Re3(u3.$elm$.parentNode, false), He3(u3, v5), e7.insertBefore(u3.$elm$, h3.$elm$), u3 = t8[--d4], v5 = n5[++r6];
          else {
            if (l3 = -1, I2.vdomKey) {
              for (c3 = a5; c3 <= d4; ++c3)
                if (t8[c3] && t8[c3].$key$ !== null && t8[c3].$key$ === v5.$key$) {
                  l3 = c3;
                  break;
                }
            }
            I2.vdomKey && l3 >= 0 ? (o5 = t8[l3], o5.$tag$ !== v5.$tag$ ? s5 = Ae3(t8 && t8[r6], i4, l3, e7) : (He3(o5, v5), t8[l3] = void 0, s5 = o5.$elm$), v5 = n5[++r6]) : (s5 = Ae3(t8 && t8[r6], i4, r6, e7), v5 = n5[++r6]), s5 && (I2.slotRelocation ? Fe3(h3.$elm$).insertBefore(s5, De3(h3.$elm$)) : h3.$elm$.parentNode.insertBefore(s5, h3.$elm$));
          }
        a5 > d4 ? Me3(e7, n5[m4 + 1] == null ? null : n5[m4 + 1].$elm$, i4, n5, r6, m4) : I2.updatable && r6 > m4 && Le3(t8, a5, d4);
      })(i3, n4, t7, s4) : s4 !== null ? (I2.updatable && I2.vdomText && e6.$text$ !== null && (i3.textContent = ""), Me3(i3, null, t7, s4, 0, s4.length - 1)) : I2.updatable && n4 !== null && Le3(n4, 0, n4.length - 1), I2.svg && j4 && o4 === "svg" && (j4 = false));
    };
    var Ne3 = (e6) => {
      let t7, i3, n4, s4, o4, a4, r5 = e6.childNodes;
      for (i3 = 0, n4 = r5.length; i3 < n4; i3++)
        if (t7 = r5[i3], t7.nodeType === 1) {
          if (t7["s-sr"]) {
            for (o4 = t7["s-sn"], t7.hidden = false, s4 = 0; s4 < n4; s4++)
              if (a4 = r5[s4].nodeType, r5[s4]["s-hn"] !== t7["s-hn"] || o4 !== "") {
                if (a4 === 1 && o4 === r5[s4].getAttribute("slot")) {
                  t7.hidden = true;
                  break;
                }
              } else if (a4 === 1 || a4 === 3 && r5[s4].textContent.trim() !== "") {
                t7.hidden = true;
                break;
              }
          }
          Ne3(t7);
        }
    };
    var ze3 = [];
    var Oe3 = (e6) => {
      let t7, i3, n4, s4, o4, a4, r5 = 0, l3 = e6.childNodes, c3 = l3.length;
      for (; r5 < c3; r5++) {
        if (t7 = l3[r5], t7["s-sr"] && (i3 = t7["s-cr"]) && i3.parentNode)
          for (n4 = i3.parentNode.childNodes, s4 = t7["s-sn"], a4 = n4.length - 1; a4 >= 0; a4--)
            i3 = n4[a4], i3["s-cn"] || i3["s-nr"] || i3["s-hn"] === t7["s-hn"] || (_e3(i3, s4) ? (o4 = ze3.find((e7) => e7.$nodeToRelocate$ === i3), _3 = true, i3["s-sn"] = i3["s-sn"] || s4, o4 ? o4.$slotRefNode$ = t7 : ze3.push({$slotRefNode$: t7, $nodeToRelocate$: i3}), i3["s-sr"] && ze3.map((e7) => {
              _e3(e7.$nodeToRelocate$, i3["s-sn"]) && (o4 = ze3.find((e8) => e8.$nodeToRelocate$ === i3), o4 && !e7.$slotRefNode$ && (e7.$slotRefNode$ = o4.$slotRefNode$));
            })) : ze3.some((e7) => e7.$nodeToRelocate$ === i3) || ze3.push({$nodeToRelocate$: i3}));
        t7.nodeType === 1 && Oe3(t7);
      }
    };
    var _e3 = (e6, t7) => e6.nodeType === 1 ? e6.getAttribute("slot") === null && t7 === "" || e6.getAttribute("slot") === t7 : e6["s-sn"] === t7 || t7 === "";
    var Qe3 = (e6) => {
      I2.vdomRef && (e6.$attrs$ && e6.$attrs$.ref && e6.$attrs$.ref(null), e6.$children$ && e6.$children$.map(Qe3));
    };
    var je3 = (e6, t7) => {
      const i3 = e6.$hostElement$, n4 = e6.$cmpMeta$, s4 = e6.$vnode$ || fe3(null, null), o4 = Te3(t7) ? t7 : ye3(null, null, t7);
      if (H7 = i3.tagName, I2.isDev && Array.isArray(t7) && t7.some(Te3))
        throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${H7.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
      if (I2.reflect && n4.$attrsToReflect$ && (o4.$attrs$ = o4.$attrs$ || {}, n4.$attrsToReflect$.map(([e7, t8]) => o4.$attrs$[t8] = i3[e7])), o4.$tag$ = null, o4.$flags$ |= 4, e6.$vnode$ = o4, o4.$elm$ = s4.$elm$ = I2.shadowDom && i3.shadowRoot || i3, (I2.scoped || I2.shadowDom) && (D4 = i3["s-sc"]), I2.slotRelocation && (F6 = i3["s-cr"], O5 = X4 && (1 & n4.$flags$) != 0, _3 = false), He3(s4, o4), I2.slotRelocation) {
        if (J5.$flags$ |= 1, Q5) {
          let e7, t8, i4, n5, s5, a4;
          Oe3(o4.$elm$);
          let r5 = 0;
          for (; r5 < ze3.length; r5++)
            e7 = ze3[r5], t8 = e7.$nodeToRelocate$, t8["s-ol"] || (i4 = I2.isDebug || I2.hydrateServerSide ? We3(t8) : G5.createTextNode(""), i4["s-nr"] = t8, t8.parentNode.insertBefore(t8["s-ol"] = i4, t8));
          for (r5 = 0; r5 < ze3.length; r5++)
            if (e7 = ze3[r5], t8 = e7.$nodeToRelocate$, e7.$slotRefNode$) {
              for (n5 = e7.$slotRefNode$.parentNode, s5 = e7.$slotRefNode$.nextSibling, i4 = t8["s-ol"]; i4 = i4.previousSibling; )
                if (a4 = i4["s-nr"], a4 && a4["s-sn"] === t8["s-sn"] && n5 === a4.parentNode && (a4 = a4.nextSibling, !a4 || !a4["s-nr"])) {
                  s5 = a4;
                  break;
                }
              (!s5 && n5 !== t8.parentNode || t8.nextSibling !== s5) && t8 !== s5 && (!t8["s-hn"] && t8["s-ol"] && (t8["s-hn"] = t8["s-ol"].parentNode.nodeName), n5.insertBefore(t8, s5));
            } else
              t8.nodeType === 1 && (t8.hidden = true);
        }
        _3 && Ne3(o4.$elm$), J5.$flags$ &= -2, ze3.length = 0;
      }
    };
    var Be3 = (e6) => G5.createComment(`<slot${e6.$name$ ? ' name="' + e6.$name$ + '"' : ""}> (host=${H7.toLowerCase()})`);
    var We3 = (e6) => G5.createComment("org-location for " + (e6.localName ? `<${e6.localName}> (host=${e6["s-hn"]})` : `[${e6.textContent}]`));
    var Ue3 = (e6) => I2.lazyLoad ? At3(e6).$hostElement$ : e6;
    var qe3 = (e6, t7, i3) => {
      const n4 = J5.ce(t7, i3);
      return e6.dispatchEvent(n4), n4;
    };
    var Ke3 = (e6, t7) => {
      I2.asyncLoading && t7 && !e6.$onRenderResolve$ && t7["s-p"] && t7["s-p"].push(new Promise((t8) => e6.$onRenderResolve$ = t8));
    };
    var Ge3 = (e6, t7) => {
      if (I2.taskQueue && I2.updatable && (e6.$flags$ |= 16), I2.asyncLoading && 4 & e6.$flags$)
        return void (e6.$flags$ |= 512);
      Ke3(e6, e6.$ancestorComponent$);
      const i3 = () => Ye2(e6, t7);
      return I2.taskQueue ? Yt3(i3) : i3();
    };
    var Ye2 = (e6, t7) => {
      const i3 = e6.$hostElement$, n4 = le3("scheduleUpdate", e6.$cmpMeta$.$tagName$), s4 = I2.lazyLoad ? e6.$lazyInstance$ : i3;
      let o4;
      return t7 ? (I2.lazyLoad && I2.hostListener && (e6.$flags$ |= 256, e6.$queuedListeners$ && (e6.$queuedListeners$.map(([e7, t8]) => it3(s4, e7, t8)), e6.$queuedListeners$ = null)), st4(i3, "componentWillLoad"), I2.cmpWillLoad && (o4 = it3(s4, "componentWillLoad"))) : (st4(i3, "componentWillUpdate"), I2.cmpWillUpdate && (o4 = it3(s4, "componentWillUpdate"))), st4(i3, "componentWillRender"), I2.cmpWillRender && (o4 = nt3(o4, () => it3(s4, "componentWillRender"))), n4(), nt3(o4, () => Je3(e6, s4, t7));
    };
    var Je3 = async (e6, t7, i3) => {
      const n4 = e6.$hostElement$, s4 = le3("update", e6.$cmpMeta$.$tagName$), o4 = n4["s-rc"];
      I2.style && i3 && me3(e6);
      const a4 = le3("render", e6.$cmpMeta$.$tagName$);
      if (I2.isDev && (e6.$flags$ |= 1024), I2.hydrateServerSide ? await Xe2(e6, t7, n4) : Xe2(e6, t7, n4), I2.cssVarShim && J5.$cssShim$ && J5.$cssShim$.updateHost(n4), I2.isDev && (e6.$renderCount$++, e6.$flags$ &= -1025), I2.hydrateServerSide)
        try {
          at3(n4), i3 && (1 & e6.$cmpMeta$.$flags$ ? n4["s-en"] = "" : 2 & e6.$cmpMeta$.$flags$ && (n4["s-en"] = "c"));
        } catch (e7) {
          Lt3(e7, n4);
        }
      if (I2.asyncLoading && o4 && (o4.map((e7) => e7()), n4["s-rc"] = void 0), a4(), s4(), I2.asyncLoading) {
        const t8 = n4["s-p"], i4 = () => Ze2(e6);
        t8.length === 0 ? i4() : (Promise.all(t8).then(i4), e6.$flags$ |= 4, t8.length = 0);
      } else
        Ze2(e6);
    };
    var Xe2 = (e6, t7, i3) => {
      const n4 = !!I2.allRenderFn, s4 = !!I2.lazyLoad, o4 = !!I2.taskQueue, a4 = !!I2.updatable;
      try {
        if (B5 = t7, t7 = (n4 || t7.render) && t7.render(), a4 && o4 && (e6.$flags$ &= -17), (a4 || s4) && (e6.$flags$ |= 2), I2.hasRenderFn || I2.reflect)
          if (I2.vdomRender || I2.reflect) {
            if (I2.hydrateServerSide)
              return Promise.resolve(t7).then((t8) => je3(e6, t8));
            je3(e6, t7);
          } else
            i3.textContent = t7;
      } catch (t8) {
        Lt3(t8, e6.$hostElement$);
      }
      return B5 = null, null;
    };
    var Ze2 = (e6) => {
      const t7 = e6.$cmpMeta$.$tagName$, i3 = e6.$hostElement$, n4 = le3("postUpdate", t7), s4 = I2.lazyLoad ? e6.$lazyInstance$ : i3, o4 = e6.$ancestorComponent$;
      I2.cmpDidRender && (I2.isDev && (e6.$flags$ |= 1024), it3(s4, "componentDidRender"), I2.isDev && (e6.$flags$ &= -1025)), st4(i3, "componentDidRender"), 64 & e6.$flags$ ? (I2.cmpDidUpdate && (I2.isDev && (e6.$flags$ |= 1024), it3(s4, "componentDidUpdate"), I2.isDev && (e6.$flags$ &= -1025)), st4(i3, "componentDidUpdate"), n4()) : (e6.$flags$ |= 64, I2.asyncLoading && I2.cssAnnotations && ot4(i3), I2.cmpDidLoad && (I2.isDev && (e6.$flags$ |= 2048), it3(s4, "componentDidLoad"), I2.isDev && (e6.$flags$ &= -2049)), st4(i3, "componentDidLoad"), n4(), I2.asyncLoading && (e6.$onReadyResolve$(i3), o4 || tt4(t7))), I2.hotModuleReplacement && i3["s-hmr-load"] && i3["s-hmr-load"](), I2.method && I2.lazyLoad && e6.$onInstanceResolve$(i3), I2.asyncLoading && (e6.$onRenderResolve$ && (e6.$onRenderResolve$(), e6.$onRenderResolve$ = void 0), 512 & e6.$flags$ && Kt3(() => Ge3(e6, false)), e6.$flags$ &= -517);
    };
    var et3 = (e6) => {
      if (I2.updatable) {
        const t7 = At3(e6), i3 = t7.$hostElement$.isConnected;
        return i3 && (18 & t7.$flags$) == 2 && Ge3(t7, false), i3;
      }
      return false;
    };
    var tt4 = (e6) => {
      I2.cssAnnotations && ot4(G5.documentElement), I2.asyncQueue && (J5.$flags$ |= 2), Kt3(() => qe3(q7, "appload", {detail: {namespace: "app"}})), I2.profile && performance.measure && performance.measure(`[Stencil] app initial load (by ${e6})`, "st:app:start");
    };
    var it3 = (e6, t7, i3) => {
      if (e6 && e6[t7])
        try {
          return e6[t7](i3);
        } catch (e7) {
          Lt3(e7);
        }
    };
    var nt3 = (e6, t7) => e6 && e6.then ? e6.then(t7) : t7();
    var st4 = (e6, t7) => {
      I2.lifecycleDOMEvents && qe3(e6, "stencil_" + t7, {bubbles: true, composed: true, detail: {namespace: "app"}});
    };
    var ot4 = (e6) => I2.hydratedClass ? e6.classList.add("hydrated") : I2.hydratedAttribute ? e6.setAttribute("hydrated", "") : void 0;
    var at3 = (e6) => {
      const t7 = e6.children;
      if (t7 != null)
        for (let e7 = 0, i3 = t7.length; e7 < i3; e7++) {
          const i4 = t7[e7];
          typeof i4.connectedCallback == "function" && i4.connectedCallback(), at3(i4);
        }
    };
    var rt3 = (e6, t7, i3, n4, s4, o4, a4) => {
      let r5, l3, c3, d4;
      if (o4.nodeType === 1) {
        for (r5 = o4.getAttribute("c-id"), r5 && (l3 = r5.split("."), l3[0] !== a4 && l3[0] !== "0" || (c3 = {$flags$: 0, $hostId$: l3[0], $nodeId$: l3[1], $depth$: l3[2], $index$: l3[3], $tag$: o4.tagName.toLowerCase(), $elm$: o4, $attrs$: null, $children$: null, $key$: null, $name$: null, $text$: null}, t7.push(c3), o4.removeAttribute("c-id"), e6.$children$ || (e6.$children$ = []), e6.$children$[c3.$index$] = c3, e6 = c3, n4 && c3.$depth$ === "0" && (n4[c3.$index$] = c3.$elm$))), d4 = o4.childNodes.length - 1; d4 >= 0; d4--)
          rt3(e6, t7, i3, n4, s4, o4.childNodes[d4], a4);
        if (o4.shadowRoot)
          for (d4 = o4.shadowRoot.childNodes.length - 1; d4 >= 0; d4--)
            rt3(e6, t7, i3, n4, s4, o4.shadowRoot.childNodes[d4], a4);
      } else if (o4.nodeType === 8)
        l3 = o4.nodeValue.split("."), l3[1] !== a4 && l3[1] !== "0" || (r5 = l3[0], c3 = {$flags$: 0, $hostId$: l3[1], $nodeId$: l3[2], $depth$: l3[3], $index$: l3[4], $elm$: o4, $attrs$: null, $children$: null, $key$: null, $name$: null, $tag$: null, $text$: null}, r5 === "t" ? (c3.$elm$ = o4.nextSibling, c3.$elm$ && c3.$elm$.nodeType === 3 && (c3.$text$ = c3.$elm$.textContent, t7.push(c3), o4.remove(), e6.$children$ || (e6.$children$ = []), e6.$children$[c3.$index$] = c3, n4 && c3.$depth$ === "0" && (n4[c3.$index$] = c3.$elm$))) : c3.$hostId$ === a4 && (r5 === "s" ? (c3.$tag$ = "slot", l3[5] ? o4["s-sn"] = c3.$name$ = l3[5] : o4["s-sn"] = "", o4["s-sr"] = true, I2.shadowDom && n4 && (c3.$elm$ = G5.createElement(c3.$tag$), c3.$name$ && c3.$elm$.setAttribute("name", c3.$name$), o4.parentNode.insertBefore(c3.$elm$, o4), o4.remove(), c3.$depth$ === "0" && (n4[c3.$index$] = c3.$elm$)), i3.push(c3), e6.$children$ || (e6.$children$ = []), e6.$children$[c3.$index$] = c3) : r5 === "r" && (I2.shadowDom && n4 ? o4.remove() : I2.slotRelocation && (s4["s-cr"] = o4, o4["s-cn"] = true))));
      else if (e6 && e6.$tag$ === "style") {
        const t8 = fe3(null, o4.textContent);
        t8.$elm$ = o4, t8.$index$ = "0", e6.$children$ = [t8];
      }
    };
    var lt3 = (e6, t7) => {
      if (e6.nodeType === 1) {
        let i3 = 0;
        for (; i3 < e6.childNodes.length; i3++)
          lt3(e6.childNodes[i3], t7);
        if (e6.shadowRoot)
          for (i3 = 0; i3 < e6.shadowRoot.childNodes.length; i3++)
            lt3(e6.shadowRoot.childNodes[i3], t7);
      } else if (e6.nodeType === 8) {
        const i3 = e6.nodeValue.split(".");
        i3[0] === "o" && (t7.set(i3[1] + "." + i3[2], e6), e6.nodeValue = "", e6["s-en"] = i3[3]);
      }
    };
    var ct4 = (e6, t7) => e6 == null || be3(e6) ? e6 : I2.propBoolean && 4 & t7 ? e6 !== "false" && (e6 === "" || !!e6) : I2.propNumber && 2 & t7 ? parseFloat(e6) : I2.propString && 1 & t7 ? String(e6) : e6;
    var dt4 = (e6, t7) => At3(e6).$instanceValues$.get(t7);
    var ht4 = (e6, t7, i3, n4) => {
      const s4 = At3(e6), o4 = I2.lazyLoad ? s4.$hostElement$ : e6, a4 = s4.$instanceValues$.get(t7), r5 = s4.$flags$, l3 = I2.lazyLoad ? s4.$lazyInstance$ : o4;
      if (i3 = ct4(i3, n4.$members$[t7][0]), !(I2.lazyLoad && 8 & r5 && a4 !== void 0 || i3 === a4) && (s4.$instanceValues$.set(t7, i3), I2.isDev && (1024 & s4.$flags$ ? Ft3(`The state/prop "${t7}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, "\nElement", o4, "\nNew value", i3, "\nOld value", a4) : 2048 & s4.$flags$ && Ft3(`The state/prop "${t7}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, "\nElement", o4, "\nNew value", i3, "\nOld value", a4)), !I2.lazyLoad || l3)) {
        if (I2.watchCallback && n4.$watchers$ && 128 & r5) {
          const e7 = n4.$watchers$[t7];
          e7 && e7.map((e8) => {
            try {
              l3[e8](i3, a4, t7);
            } catch (e9) {
              Lt3(e9, o4);
            }
          });
        }
        if (I2.updatable && (18 & r5) == 2) {
          if (I2.cmpShouldUpdate && l3.componentShouldUpdate && l3.componentShouldUpdate(i3, a4, t7) === false)
            return;
          Ge3(s4, false);
        }
      }
    };
    var ut4 = (e6, t7, i3) => {
      if (I2.member && t7.$members$) {
        I2.watchCallback && e6.watchers && (t7.$watchers$ = e6.watchers);
        const n4 = Object.entries(t7.$members$), s4 = e6.prototype;
        if (n4.map(([e7, [n5]]) => {
          (I2.prop || I2.state) && (31 & n5 || (!I2.lazyLoad || 2 & i3) && 32 & n5) ? Object.defineProperty(s4, e7, {get() {
            return dt4(this, e7);
          }, set(s5) {
            if (I2.isDev) {
              const s6 = At3(this);
              (1 & i3) == 0 && (8 & s6.$flags$) == 0 && (31 & n5) != 0 && (1024 & n5) == 0 && Ft3(`@Prop() "${e7}" on <${t7.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`);
            }
            ht4(this, e7, s5, t7);
          }, configurable: true, enumerable: true}) : I2.lazyLoad && I2.method && 1 & i3 && 64 & n5 && Object.defineProperty(s4, e7, {value(...t8) {
            const i4 = At3(this);
            return i4.$onInstancePromise$.then(() => i4.$lazyInstance$[e7](...t8));
          }});
        }), I2.observeAttribute && (!I2.lazyLoad || 1 & i3)) {
          const i4 = new Map();
          s4.attributeChangedCallback = function(e7, t8, n5) {
            J5.jmp(() => {
              const t9 = i4.get(e7);
              this[t9] = (n5 !== null || typeof this[t9] != "boolean") && n5;
            });
          }, e6.observedAttributes = n4.filter(([e7, t8]) => 15 & t8[0]).map(([e7, n5]) => {
            const s5 = n5[1] || e7;
            return i4.set(s5, e7), I2.reflect && 512 & n5[0] && t7.$attrsToReflect$.push([e7, s5]), s5;
          });
        }
      }
      return e6;
    };
    var mt4 = async (e6, t7, i3, n4, s4) => {
      if ((I2.lazyLoad || I2.hydrateServerSide || I2.style) && (32 & t7.$flags$) == 0) {
        if (I2.lazyLoad || I2.hydrateClientSide) {
          if (t7.$flags$ |= 32, (s4 = Nt3(i3, t7, n4)).then) {
            const e8 = (o4 = `st:load:${i3.$tagName$}:${t7.$modeName$}`, a4 = `[Stencil] Load module for <${i3.$tagName$}>`, I2.profile && performance.mark ? (performance.getEntriesByName(o4).length === 0 && performance.mark(o4), () => {
              performance.getEntriesByName(a4).length === 0 && performance.measure(a4, o4);
            }) : () => {
            });
            s4 = await s4, e8();
          }
          if ((I2.isDev || I2.isDebug) && !s4)
            throw new Error(`Constructor for "${i3.$tagName$}#${t7.$modeName$}" was not found`);
          I2.member && !s4.isProxied && (I2.watchCallback && (i3.$watchers$ = s4.watchers), ut4(s4, i3, 2), s4.isProxied = true);
          const e7 = le3("createInstance", i3.$tagName$);
          I2.member && (t7.$flags$ |= 8);
          try {
            new s4(t7);
          } catch (e8) {
            Lt3(e8);
          }
          I2.member && (t7.$flags$ &= -9), I2.watchCallback && (t7.$flags$ |= 128), e7(), vt4(t7.$lazyInstance$);
        } else
          s4 = e6.constructor, t7.$flags$ |= 160;
        if (I2.style && s4.style) {
          let n5 = s4.style;
          I2.mode && typeof n5 != "string" && (n5 = n5[t7.$modeName$ = pe3(e6)], I2.hydrateServerSide && t7.$modeName$ && e6.setAttribute("s-mode", t7.$modeName$));
          const o5 = ve3(i3, t7.$modeName$);
          if (!zt3.has(o5)) {
            const e7 = le3("registerStyles", i3.$tagName$);
            !I2.hydrateServerSide && I2.shadowDom && I2.shadowDomShim && 8 & i3.$flags$ && (n5 = await Promise.resolve().then(() => require_shadow_css_4fcc68be()).then((e8) => e8.scopeCss(n5, o5, false))), he3(o5, n5, !!(1 & i3.$flags$)), e7();
          }
        }
      }
      var o4, a4;
      const r5 = t7.$ancestorComponent$, l3 = () => Ge3(t7, true);
      I2.asyncLoading && r5 && r5["s-rc"] ? r5["s-rc"].push(l3) : l3();
    };
    var vt4 = (e6) => {
      I2.lazyLoad && I2.connectedCallback && it3(e6, "connectedCallback");
    };
    var pt4 = (e6) => {
      if ((1 & J5.$flags$) == 0) {
        const t7 = At3(e6), i3 = t7.$cmpMeta$, n4 = le3("connectedCallback", i3.$tagName$);
        if (I2.hostListenerTargetParent && ne3(e6, t7, i3.$listeners$, true), 1 & t7.$flags$)
          ne3(e6, t7, i3.$listeners$, false), vt4(t7.$lazyInstance$);
        else {
          let n5;
          if (t7.$flags$ |= 1, I2.hydrateClientSide && (n5 = e6.getAttribute("s-id"), n5)) {
            if (I2.shadowDom && X4 && 1 & i3.$flags$) {
              const t8 = I2.mode ? ue3(e6.shadowRoot, i3, e6.getAttribute("s-mode")) : ue3(e6.shadowRoot, i3);
              e6.classList.remove(t8 + "-h", t8 + "-s");
            }
            ((e7, t8, i4, n6) => {
              const s4 = le3("hydrateClient", t8), o4 = e7.shadowRoot, a4 = [], r5 = I2.shadowDom && o4 ? [] : null, l3 = n6.$vnode$ = fe3(t8, null);
              J5.$orgLocNodes$ || lt3(G5.body, J5.$orgLocNodes$ = new Map()), e7["s-id"] = i4, e7.removeAttribute("s-id"), rt3(l3, a4, [], r5, e7, e7, i4), a4.map((e8) => {
                const i5 = e8.$hostId$ + "." + e8.$nodeId$, n7 = J5.$orgLocNodes$.get(i5), s5 = e8.$elm$;
                n7 && X4 && n7["s-en"] === "" && n7.parentNode.insertBefore(s5, n7.nextSibling), o4 || (s5["s-hn"] = t8, n7 && (s5["s-ol"] = n7, s5["s-ol"]["s-nr"] = s5)), J5.$orgLocNodes$.delete(i5);
              }), I2.shadowDom && o4 && r5.map((e8) => {
                e8 && o4.appendChild(e8);
              }), s4();
            })(e6, i3.$tagName$, n5, t7);
          }
          if (I2.slotRelocation && !n5 && (I2.hydrateServerSide || (I2.slot || I2.shadowDom) && 12 & i3.$flags$) && gt3(e6), I2.asyncLoading) {
            let i4 = e6;
            for (; i4 = i4.parentNode || i4.host; )
              if (I2.hydrateClientSide && i4.nodeType === 1 && i4.hasAttribute("s-id") && i4["s-p"] || i4["s-p"]) {
                Ke3(t7, t7.$ancestorComponent$ = i4);
                break;
              }
          }
          I2.prop && I2.lazyLoad && !I2.hydrateServerSide && i3.$members$ && Object.entries(i3.$members$).map(([t8, [i4]]) => {
            if (31 & i4 && e6.hasOwnProperty(t8)) {
              const i5 = e6[t8];
              delete e6[t8], e6[t8] = i5;
            }
          }), I2.initializeNextTick ? Kt3(() => mt4(e6, t7, i3)) : mt4(e6, t7, i3);
        }
        n4();
      }
    };
    var gt3 = (e6) => {
      const t7 = e6["s-cr"] = G5.createComment(I2.isDebug ? `content-ref (host=${e6.localName})` : "");
      t7["s-cn"] = true, e6.insertBefore(t7, e6.firstChild);
    };
    var bt3 = (e6) => {
      if ((1 & J5.$flags$) == 0) {
        const t7 = At3(e6), i3 = I2.lazyLoad ? t7.$lazyInstance$ : e6;
        I2.hostListener && t7.$rmListeners$ && (t7.$rmListeners$.map((e7) => e7()), t7.$rmListeners$ = void 0), I2.cssVarShim && J5.$cssShim$ && J5.$cssShim$.removeHost(e6), I2.lazyLoad && I2.disconnectedCallback && it3(i3, "disconnectedCallback"), I2.cmpDidUnload && it3(i3, "componentDidUnload");
      }
    };
    var yt3 = (e6, t7) => {
      const i3 = {$flags$: t7[0], $tagName$: t7[1]};
      I2.member && (i3.$members$ = t7[2]), I2.hostListener && (i3.$listeners$ = t7[3]), I2.watchCallback && (i3.$watchers$ = e6.$watchers$), I2.reflect && (i3.$attrsToReflect$ = []), I2.shadowDom && !X4 && 1 & i3.$flags$ && (i3.$flags$ |= 8);
      const n4 = e6.prototype.connectedCallback, s4 = e6.prototype.disconnectedCallback;
      return Object.assign(e6.prototype, {__registerHost() {
        Rt3(this, i3);
      }, connectedCallback() {
        pt4(this), I2.connectedCallback && n4 && n4.call(this);
      }, disconnectedCallback() {
        bt3(this), I2.disconnectedCallback && s4 && s4.call(this);
      }}), e6.is = i3.$tagName$, ut4(e6, i3, 3);
    };
    var ft4 = (e6) => {
      const t7 = e6.cloneNode;
      e6.cloneNode = function(e7) {
        const i3 = this, n4 = !!I2.shadowDom && (i3.shadowRoot && X4), s4 = t7.call(i3, !!n4 && e7);
        if (I2.slot && !n4 && e7) {
          let e8, t8, n5 = 0, o4 = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si"];
          for (; n5 < i3.childNodes.length; n5++)
            e8 = i3.childNodes[n5]["s-nr"], t8 = o4.every((e9) => !i3.childNodes[n5][e9]), e8 && (I2.appendChildSlotFix && s4.__appendChild ? s4.__appendChild(e8.cloneNode(true)) : s4.appendChild(e8.cloneNode(true))), t8 && s4.appendChild(i3.childNodes[n5].cloneNode(true));
        }
        return s4;
      };
    };
    var kt3 = (e6) => {
      e6.__appendChild = e6.appendChild, e6.appendChild = function(e7) {
        const t7 = e7["s-sn"] = Ct3(e7), i3 = $t3(this.childNodes, t7);
        if (i3) {
          const n4 = wt3(i3, t7), s4 = n4[n4.length - 1];
          return s4.parentNode.insertBefore(e7, s4.nextSibling);
        }
        return this.__appendChild(e7);
      };
    };
    var Tt3 = (e6, t7) => {
      class i3 extends Array {
        item(e7) {
          return this[e7];
        }
      }
      if (8 & t7.$flags$) {
        const t8 = e6.__lookupGetter__("childNodes");
        Object.defineProperty(e6, "children", {get() {
          return this.childNodes.map((e7) => e7.nodeType === 1);
        }}), Object.defineProperty(e6, "childElementCount", {get: () => e6.children.length}), Object.defineProperty(e6, "childNodes", {get() {
          const e7 = t8.call(this);
          if ((1 & J5.$flags$) == 0 && 2 & At3(this).$flags$) {
            const t9 = new i3();
            for (let i4 = 0; i4 < e7.length; i4++) {
              const n4 = e7[i4]["s-nr"];
              n4 && t9.push(n4);
            }
            return t9;
          }
          return i3.from(e7);
        }});
      }
    };
    var Ct3 = (e6) => e6["s-sn"] || e6.nodeType === 1 && e6.getAttribute("slot") || "";
    var $t3 = (e6, t7) => {
      let i3, n4 = 0;
      for (; n4 < e6.length; n4++) {
        if (i3 = e6[n4], i3["s-sr"] && i3["s-sn"] === t7)
          return i3;
        if (i3 = $t3(i3.childNodes, t7), i3)
          return i3;
      }
      return null;
    };
    var wt3 = (e6, t7) => {
      const i3 = [e6];
      for (; (e6 = e6.nextSibling) && e6["s-sn"] === t7; )
        i3.push(e6);
      return i3;
    };
    var St3 = (e6) => {
      const t7 = new URL(e6, J5.$resourcesUrl$);
      return t7.origin !== q7.location.origin ? t7.href : t7.pathname;
    };
    var xt3 = (e6, t7, i3, n4) => {
      t7 != null && (t7["s-nr"] != null && n4.push(t7), t7.nodeType === 1 && t7.childNodes.forEach((t8) => {
        const s4 = At3(t8);
        if (s4 != null && !i3.staticComponents.has(t8.nodeName.toLowerCase())) {
          const n5 = {nodeIds: 0};
          Vt3(e6, t8, s4.$vnode$, i3, n5);
        }
        xt3(e6, t8, i3, n4);
      }));
    };
    var Vt3 = (e6, t7, i3, n4, s4) => {
      if (i3 != null) {
        const o4 = ++n4.hostIds;
        if (t7.setAttribute("s-id", o4), t7["s-cr"] != null && (t7["s-cr"].nodeValue = `r.${o4}`), i3.$children$ != null) {
          const t8 = 0;
          i3.$children$.forEach((i4, n5) => {
            Pt3(e6, i4, s4, o4, t8, n5);
          });
        }
        if (t7 && i3 && i3.$elm$ && !t7.hasAttribute("c-id")) {
          const e7 = t7.parentElement;
          if (e7 && e7.childNodes) {
            const n5 = Array.from(e7.childNodes), s5 = n5.find((e8) => e8.nodeType === 8 && e8["s-sr"]);
            if (s5) {
              const e8 = n5.indexOf(t7) - 1;
              i3.$elm$.setAttribute("c-id", `${s5["s-host-id"]}.${s5["s-node-id"]}.0.${e8}`);
            }
          }
        }
      }
    };
    var Pt3 = (e6, t7, i3, n4, s4, o4) => {
      const a4 = t7.$elm$;
      if (a4 == null)
        return;
      const r5 = i3.nodeIds++, l3 = `${n4}.${r5}.${s4}.${o4}`;
      if (a4["s-host-id"] = n4, a4["s-node-id"] = r5, a4.nodeType === 1)
        a4.setAttribute("c-id", l3);
      else if (a4.nodeType === 3) {
        const t8 = a4.parentNode, i4 = t8.nodeName;
        if (i4 !== "STYLE" && i4 !== "SCRIPT") {
          const i5 = `t.${l3}`, n5 = e6.createComment(i5);
          t8.insertBefore(n5, a4);
        }
      } else if (a4.nodeType === 8 && a4["s-sr"]) {
        const e7 = `s.${l3}.${a4["s-sn"] || ""}`;
        a4.nodeValue = e7;
      }
      if (t7.$children$ != null) {
        const o5 = s4 + 1;
        t7.$children$.forEach((t8, s5) => {
          Pt3(e6, t8, i3, n4, o5, s5);
        });
      }
    };
    var Et3 = new WeakMap();
    var At3 = (e6) => Et3.get(e6);
    var Rt3 = (e6, t7) => {
      const i3 = {$flags$: 0, $hostElement$: e6, $cmpMeta$: t7, $instanceValues$: new Map()};
      return I2.isDev && (i3.$renderCount$ = 0), I2.method && I2.lazyLoad && (i3.$onInstancePromise$ = new Promise((e7) => i3.$onInstanceResolve$ = e7)), I2.asyncLoading && (i3.$onReadyPromise$ = new Promise((e7) => i3.$onReadyResolve$ = e7), e6["s-p"] = [], e6["s-rc"] = []), ne3(e6, i3, t7.$listeners$, false), Et3.set(e6, i3);
    };
    var Mt3 = (e6, t7) => t7 in e6;
    var Lt3 = (e6, t7) => (N7 || console.error)(e6, t7);
    var It3 = I2.isTesting ? ["STENCIL:"] : ["%cstencil", "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"];
    var Dt3 = (...e6) => console.error(...It3, ...e6);
    var Ft3 = (...e6) => console.warn(...It3, ...e6);
    var Ht3 = new Map();
    var Nt3 = (e6, t7, i3) => {
      const n4 = e6.$tagName$.replace(/-/g, "_"), s4 = e6.$lazyBundleId$;
      if (I2.isDev && typeof s4 != "string")
        return void Dt3(`Trying to lazily load component <${e6.$tagName$}> with style mode "${t7.$modeName$}", but it does not exist.`);
      const o4 = !I2.hotModuleReplacement && Ht3.get(s4);
      return o4 ? o4[n4] : Promise.resolve().then(() => __toModule(require(`./${s4}.entry.js${I2.hotModuleReplacement && i3 ? "?s-hmr=" + i3 : ""}`))).then((e7) => (I2.hotModuleReplacement || Ht3.set(s4, e7), e7[n4]), Lt3);
    };
    var zt3 = new Map();
    var Ot3 = [];
    var _t4 = [];
    var Qt3 = [];
    var jt3 = [];
    var Bt3 = (e6, t7) => (i3) => {
      e6.push(i3), U5 || (U5 = true, t7 && 4 & J5.$flags$ ? Kt3(qt3) : J5.raf(qt3));
    };
    var Wt3 = (e6) => {
      for (let t7 = 0; t7 < e6.length; t7++)
        try {
          e6[t7](performance.now());
        } catch (e7) {
          Lt3(e7);
        }
      e6.length = 0;
    };
    var Ut3 = (e6, t7) => {
      let i3 = 0, n4 = 0;
      for (; i3 < e6.length && (n4 = performance.now()) < t7; )
        try {
          e6[i3++](n4);
        } catch (e7) {
          Lt3(e7);
        }
      i3 === e6.length ? e6.length = 0 : i3 !== 0 && e6.splice(0, i3);
    };
    var qt3 = () => {
      if (I2.asyncQueue && W6++, Wt3(_t4), I2.asyncQueue) {
        const e6 = (6 & J5.$flags$) == 2 ? performance.now() + 14 * Math.ceil(0.1 * W6) : 1 / 0;
        Ut3(Qt3, e6), Ut3(jt3, e6), Qt3.length > 0 && (jt3.push(...Qt3), Qt3.length = 0), (U5 = _t4.length + Qt3.length + jt3.length > 0) ? J5.raf(qt3) : W6 = 0;
      } else
        Wt3(Qt3), (U5 = _t4.length > 0) && J5.raf(qt3);
    };
    var Kt3 = (e6) => ee3().then(e6);
    var Gt3 = Bt3(_t4, false);
    var Yt3 = Bt3(Qt3, true);
    var Jt3 = {isDev: !!I2.isDev, isBrowser: true, isServer: false, isTesting: !!I2.isTesting};
    var Xt3;
    var Zt3;
    var ei = L6(Object.freeze({__proto__: null, Build: Jt3, CSS: K5, Context: ie3, Fragment: (e6, t7) => t7, H: Y4, HTMLElement: Y4, Host: ke3, STENCIL_DEV_MODE: It3, addHostEventListeners: ne3, attachShadow: (e6) => {
      X4 ? e6.attachShadow({mode: "open"}) : e6.shadowRoot = e6;
    }, bootstrapLazy: (e6, t7 = {}) => {
      I2.profile && performance.mark && performance.mark("st:app:start"), ce3();
      const i3 = le3("bootstrapLazy"), n4 = [], s4 = t7.exclude || [], o4 = q7.customElements, a4 = G5.head, r5 = a4.querySelector("meta[charset]"), l3 = G5.createElement("style"), c3 = [], d4 = G5.querySelectorAll("[sty-id]");
      let h3, u3 = true, m4 = 0;
      if (Object.assign(J5, t7), J5.$resourcesUrl$ = new URL(t7.resourcesUrl || "./", G5.baseURI).href, I2.asyncQueue && t7.syncQueue && (J5.$flags$ |= 4), I2.hydrateClientSide && (J5.$flags$ |= 2), I2.hydrateClientSide && I2.shadowDom)
        for (; m4 < d4.length; m4++)
          he3(d4[m4].getAttribute("sty-id"), d4[m4].innerHTML.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{"), true);
      e6.map((e7) => e7[1].map((i4) => {
        const a5 = {$flags$: i4[0], $tagName$: i4[1], $members$: i4[2], $listeners$: i4[3]};
        I2.member && (a5.$members$ = i4[2]), I2.hostListener && (a5.$listeners$ = i4[3]), I2.reflect && (a5.$attrsToReflect$ = []), I2.watchCallback && (a5.$watchers$ = {}), I2.shadowDom && !X4 && 1 & a5.$flags$ && (a5.$flags$ |= 8);
        const r6 = I2.transformTagName && t7.transformTagName ? t7.transformTagName(a5.$tagName$) : a5.$tagName$, l4 = class extends HTMLElement {
          constructor(e8) {
            super(e8), Rt3(e8 = this, a5), I2.shadowDom && 1 & a5.$flags$ && (X4 ? I2.shadowDelegatesFocus ? e8.attachShadow({mode: "open", delegatesFocus: !!(16 & a5.$flags$)}) : e8.attachShadow({mode: "open"}) : I2.hydrateServerSide || "shadowRoot" in e8 || (e8.shadowRoot = e8)), I2.slotChildNodesFix && Tt3(e8, a5);
          }
          connectedCallback() {
            h3 && (clearTimeout(h3), h3 = null), u3 ? c3.push(this) : J5.jmp(() => pt4(this));
          }
          disconnectedCallback() {
            J5.jmp(() => bt3(this));
          }
          componentOnReady() {
            return At3(this).$onReadyPromise$;
          }
        };
        I2.cloneNodeFix && ft4(l4.prototype), I2.appendChildSlotFix && kt3(l4.prototype), I2.hotModuleReplacement && (l4.prototype["s-hmr"] = function(e8) {
          ((e9, t8, i5) => {
            const n5 = At3(e9);
            n5.$flags$ = 1, e9["s-hmr-load"] = () => {
              delete e9["s-hmr-load"];
            }, mt4(e9, n5, t8, i5);
          })(this, a5, e8);
        }), a5.$lazyBundleId$ = e7[0], s4.includes(r6) || o4.get(r6) || (n4.push(r6), o4.define(r6, ut4(l4, a5, 1)));
      })), (I2.hydratedClass || I2.hydratedAttribute) && (l3.innerHTML = n4 + "{visibility:hidden}.hydrated{visibility:inherit}", l3.setAttribute("data-styles", ""), a4.insertBefore(l3, r5 ? r5.nextSibling : a4.firstChild)), u3 = false, c3.length ? c3.map((e7) => e7.connectedCallback()) : I2.profile ? J5.jmp(() => h3 = setTimeout(tt4, 30, "timeout")) : J5.jmp(() => h3 = setTimeout(tt4, 30)), i3();
    }, cmpModules: Ht3, connectedCallback: pt4, consoleDevError: Dt3, consoleDevInfo: (...e6) => console.info(...It3, ...e6), consoleDevWarn: Ft3, consoleError: Lt3, createEvent: (e6, t7, i3) => {
      const n4 = Ue3(e6);
      return {emit: (e7) => (I2.isDev && !n4.isConnected && Ft3(`The "${t7}" event was emitted, but the dispatcher node is no longer connected to the dom.`), qe3(n4, t7, {bubbles: !!(4 & i3), composed: !!(2 & i3), cancelable: !!(1 & i3), detail: e7}))};
    }, defineCustomElement: (e6, t7) => {
      customElements.define(t7[1], yt3(e6, t7));
    }, disconnectedCallback: bt3, doc: G5, forceModeUpdate: (e6) => {
      if (I2.style && I2.mode && !I2.lazyLoad) {
        const t7 = pe3(e6), i3 = At3(e6);
        if (i3.$modeName$ !== t7) {
          const n4 = i3.$cmpMeta$, s4 = e6["s-sc"], o4 = ve3(n4, t7), a4 = e6.constructor.style[t7], r5 = n4.$flags$;
          a4 && (zt3.has(o4) || he3(o4, a4, !!(1 & r5)), i3.$modeName$ = t7, e6.classList.remove(s4 + "-h", s4 + "-s"), me3(i3), et3(e6));
        }
      }
    }, forceUpdate: et3, getAssetPath: St3, getConnect: (e6, t7) => {
      const i3 = () => {
        let e7 = G5.querySelector(t7);
        return e7 || (e7 = G5.createElement(t7), G5.body.appendChild(e7)), typeof e7.componentOnReady == "function" ? e7.componentOnReady() : Promise.resolve(e7);
      };
      return {create: (...e7) => i3().then((t8) => t8.create(...e7)), componentOnReady: i3};
    }, getContext: (e6, t7) => t7 in ie3 ? ie3[t7] : t7 === "window" ? q7 : t7 === "document" ? G5 : t7 === "isServer" || t7 === "isPrerender" ? !!I2.hydrateServerSide : t7 === "isClient" ? !I2.hydrateServerSide : t7 === "resourcesUrl" || t7 === "publicPath" ? St3(".") : t7 === "queue" ? {write: Yt3, read: Gt3, tick: {then: (e7) => Kt3(e7)}} : void 0, getElement: Ue3, getHostRef: At3, getMode: (e6) => At3(e6).$modeName$, getRenderingRef: () => B5, getValue: dt4, h: ye3, insertVdomAnnotations: (e6, t7) => {
      if (e6 != null) {
        const i3 = {hostIds: 0, rootLevelIds: 0, staticComponents: new Set(t7)}, n4 = [];
        xt3(e6, e6.body, i3, n4), n4.forEach((t8) => {
          if (t8 != null) {
            const n5 = t8["s-nr"];
            let s4 = n5["s-host-id"], o4 = n5["s-node-id"], a4 = `${s4}.${o4}`;
            if (s4 == null) {
              if (s4 = 0, i3.rootLevelIds++, o4 = i3.rootLevelIds, a4 = `${s4}.${o4}`, n5.nodeType === 1)
                n5.setAttribute("c-id", a4);
              else if (n5.nodeType === 3) {
                if (s4 === 0) {
                  if (n5.nodeValue.trim() === "")
                    return void t8.remove();
                }
                const i4 = e6.createComment(a4);
                i4.nodeValue = `t.${a4}`, n5.parentNode.insertBefore(i4, n5);
              }
            }
            let r5 = `o.${a4}`;
            const l3 = t8.parentElement;
            l3 && (l3["s-en"] === "" ? r5 += "." : l3["s-en"] === "c" && (r5 += ".c")), t8.nodeValue = r5;
          }
        });
      }
    }, isMemberInElement: Mt3, loadModule: Nt3, modeResolutionChain: Ot3, nextTick: Kt3, parsePropertyValue: ct4, plt: J5, postUpdateComponent: Ze2, promiseResolve: ee3, proxyComponent: ut4, proxyCustomElement: yt3, readTask: Gt3, registerHost: Rt3, registerInstance: (e6, t7) => Et3.set(t7.$lazyInstance$ = e6, t7), renderVdom: je3, setAssetPath: (e6) => J5.$resourcesUrl$ = e6, setErrorHandler: (e6) => N7 = e6, setMode: (e6) => Ot3.push(e6), setPlatformOptions: (e6) => Object.assign(J5, e6), setValue: ht4, styles: zt3, supportsConstructibleStylesheets: te3, supportsListenerOptions: Z4, supportsShadow: X4, win: q7, writeTask: Yt3, BUILD: I2, Env: {}, NAMESPACE: "app"}));
    var ti = (function(e6, t7) {
      function i3(e7, t8) {
        var i4 = Object.keys(e7);
        if (Object.getOwnPropertySymbols) {
          var n5 = Object.getOwnPropertySymbols(e7);
          t8 && (n5 = n5.filter(function(t9) {
            return Object.getOwnPropertyDescriptor(e7, t9).enumerable;
          })), i4.push.apply(i4, n5);
        }
        return i4;
      }
      function n4(e7) {
        for (var t8 = 1; t8 < arguments.length; t8++) {
          var n5 = arguments[t8] != null ? arguments[t8] : {};
          t8 % 2 ? i3(Object(n5), true).forEach(function(t9) {
            s4(e7, t9, n5[t9]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(n5)) : i3(Object(n5)).forEach(function(t9) {
            Object.defineProperty(e7, t9, Object.getOwnPropertyDescriptor(n5, t9));
          });
        }
        return e7;
      }
      function s4(e7, t8, i4) {
        return t8 in e7 ? Object.defineProperty(e7, t8, {value: i4, enumerable: true, configurable: true, writable: true}) : e7[t8] = i4, e7;
      }
      function o4(e7, t8, i4, n5, s5, o5, a5) {
        try {
          var r6 = e7[o5](a5), l4 = r6.value;
        } catch (e8) {
          return void i4(e8);
        }
        r6.done ? t8(l4) : Promise.resolve(l4).then(n5, s5);
      }
      function a4(e7) {
        return function() {
          var t8 = this, i4 = arguments;
          return new Promise(function(n5, s5) {
            var a5 = e7.apply(t8, i4);
            function r6(e8) {
              o4(a5, n5, s5, r6, l4, "next", e8);
            }
            function l4(e8) {
              o4(a5, n5, s5, r6, l4, "throw", e8);
            }
            r6(void 0);
          });
        };
      }
      Object.defineProperty(t7, "__esModule", {value: true}), t7.getComponentFromRegistry = ae4, t7.getPlayerFromRegistry = oe4, t7.isComponentRegistered = se4, t7.watchComponentRegistry = re4, t7.withComponentRegistry = ie4, Object.defineProperty(t7, "setAssetPath", {enumerable: true, get: function() {
        return ei.setAssetPath;
      }}), t7.withPlayerContext = t7.usePlayerContext = t7.isWritableProp = t7.initialState = t7.findPlayer = t7.defineCustomElements = t7.createDispatcher = t7.VmYoutube = t7.VmVolumeControl = t7.VmVimeo = t7.VmVideo = t7.VmUi = t7.VmTooltip = t7.VmTimeProgress = t7.VmTime = t7.VmSubmenu = t7.VmSpinner = t7.VmSlider = t7.VmSkeleton = t7.VmSettingsControl = t7.VmSettings = t7.VmScrubberControl = t7.VmScrim = t7.VmPoster = t7.VmPlayer = t7.VmPlaybackControl = t7.VmPipControl = t7.VmMuteControl = t7.VmMenuRadioGroup = t7.VmMenuRadio = t7.VmMenuItem = t7.VmMenu = t7.VmLoadingScreen = t7.VmLiveIndicator = t7.VmIconLibrary = t7.VmIcon = t7.VmHls = t7.VmFullscreenControl = t7.VmFile = t7.VmEndTime = t7.VmEmbed = t7.VmDefaultUi = t7.VmDefaultSettings = t7.VmDefaultControls = t7.VmDblClickFullscreen = t7.VmDash = t7.VmDailymotion = t7.VmCurrentTime = t7.VmControls = t7.VmControlSpacer = t7.VmControlGroup = t7.VmControl = t7.VmClickToPlay = t7.VmCaptions = t7.VmCaptionControl = t7.VmAudio = t7.ViewType = t7.REGISTRY_KEY = t7.REGISTRATION_KEY = t7.Provider = t7.PLAYER_KEY = t7.MediaType = t7.COMPONENT_NAME_KEY = void 0;
      var r5 = {play: "Play", pause: "Pause", playback: "Playback", scrubber: "Scrubber", scrubberLabel: "{currentTime} of {duration}", played: "Played", duration: "Duration", buffered: "Buffered", close: "Close", currentTime: "Current time", live: "LIVE", volume: "Volume", mute: "Mute", unmute: "Unmute", audio: "Audio", default: "Default", captions: "Captions", subtitlesOrCc: "Subtitles/CC", enableCaptions: "Enable subtitles/captions", disableCaptions: "Disable subtitles/captions", auto: "Auto", fullscreen: "Fullscreen", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", settings: "Settings", seekForward: "Seek forward", seekBackward: "Seek backward", seekTotal: "Seek total", normal: "Normal", none: "None", playbackRate: "Playback Rate", playbackQuality: "Playback Quality", loop: "Loop", disabled: "Disabled", off: "Off", enabled: "Enabled", pip: "Picture-in-Picture", enterPiP: "Miniplayer", exitPiP: "Expand"}, l3 = {theme: void 0, paused: true, playing: false, duration: -1, currentProvider: void 0, mediaTitle: void 0, currentSrc: void 0, currentPoster: void 0, textTracks: [], currentTextTrack: -1, audioTracks: [], currentAudioTrack: -1, isTextTrackVisible: true, shouldRenderNativeTextTracks: true, icons: "vime", currentTime: 0, autoplay: false, ready: false, playbackReady: false, loop: false, muted: false, buffered: 0, playbackRate: 1, playbackRates: [1], playbackQuality: void 0, playbackQualities: [], seeking: false, debug: false, playbackStarted: false, playbackEnded: false, buffering: false, controls: false, isControlsActive: false, volume: 50, isFullscreenActive: false, aspectRatio: "16:9", viewType: void 0, isAudioView: false, isVideoView: false, mediaType: void 0, isAudio: false, isVideo: false, isMobile: false, isTouch: false, isSettingsActive: false, isLive: false, isPiPActive: false, autopause: true, playsinline: false, language: "en", languages: ["en"], translations: {en: r5}, i18n: r5};
      t7.initialState = l3;
      var c3 = new Set(["autoplay", "autopause", "aspectRatio", "controls", "theme", "debug", "paused", "currentTime", "language", "loop", "translations", "playbackQuality", "muted", "playbackRate", "playsinline", "volume", "isSettingsActive", "isControlsActive", "shouldRenderNativeTextTracks"]), d4 = (e7) => c3.has(e7);
      t7.isWritableProp = d4;
      var h3 = new Set(["paused", "currentTime", "duration", "buffered", "seeking", "playing", "buffering", "playbackReady", "textTracks", "currentTextTrack", "audioTracks", "currentAudioTrack", "mediaTitle", "currentSrc", "currentPoster", "playbackRate", "playbackRates", "playbackStarted", "playbackEnded", "playbackQuality", "playbackQualities", "mediaType"]), u3 = (e7) => h3.has(e7), m4 = (e7) => e7 === null, v5 = (e7) => e7 === void 0, p3 = (e7) => m4(e7) || v5(e7), g3 = (e7) => p3(e7) ? void 0 : e7.constructor, b5 = (e7) => g3(e7) === Object, y3 = (e7) => g3(e7) === Number && !Number.isNaN(e7), f3 = (e7) => g3(e7) === String, k5 = (e7) => g3(e7) === Function, T6 = (e7) => Array.isArray(e7), C4 = (e7, t8) => Boolean(e7 && t8 && e7 instanceof t8), $2 = "vmStateChange", w4 = (e7) => (t8, i4) => {
        var n5 = C4(e7, HTMLElement) ? e7 : (0, ei.getElement)(e7), s5 = new CustomEvent($2, {bubbles: true, composed: true, detail: {by: n5, prop: t8, value: i4}});
        n5.dispatchEvent(s5);
      };
      t7.createDispatcher = w4;
      var S5 = function(e7, t8, i4) {
        i4 === void 0 && (i4 = true);
        var n5 = e7.constructor.name === "Function" ? e7.prototype : e7, s5 = n5.componentWillLoad;
        n5.componentWillLoad = function() {
          var e8, n6 = this, o5 = (0, ei.getElement)(this), a5 = {promise: new Promise(function(t9) {
            e8 = t9;
          }), resolve: e8}, r6 = new CustomEvent("openWormhole", {bubbles: true, composed: true, detail: {consumer: this, fields: t8, updater: function(e9, t9) {
            n6[e9] = t9;
          }, onOpen: a5}});
          o5.dispatchEvent(r6);
          var l4 = function() {
            if (s5)
              return s5.call(n6);
          };
          return i4 ? a5.promise.then(function() {
            return l4();
          }) : l4();
        };
      }, x4 = new Map(), V4 = function(e7, t8) {
        var i4 = e7.fields, n5 = e7.updater;
        i4.forEach(function(e8) {
          n5(e8, t8[e8]);
        });
      }, P7 = function(e7, t8) {
        var i4 = (0, ei.getElement)(e7), n5 = new Map(), s5 = {wormholes: n5, state: t8};
        x4.set(e7, s5);
        var o5 = e7.connectedCallback;
        e7.connectedCallback = function() {
          x4.set(e7, s5), o5 && o5.call(e7);
        };
        var a5 = e7.disconnectedCallback;
        e7.disconnectedCallback = function() {
          x4.delete(e7), a5 && a5.call(e7);
        }, i4.addEventListener("openWormhole", function(e8) {
          e8.stopPropagation();
          var t9 = e8.detail, i5 = t9.consumer, o6 = t9.onOpen;
          if (!n5.has(i5)) {
            if (typeof i5 != "symbol") {
              var a6 = i5.connectedCallback, r6 = i5.disconnectedCallback;
              i5.connectedCallback = function() {
                n5.set(i5, e8.detail), a6 && a6.call(i5);
              }, i5.disconnectedCallback = function() {
                n5.delete(i5), r6 && r6.call(i5);
              };
            }
            n5.set(i5, e8.detail), V4(e8.detail, s5.state), o6 == null || o6.resolve(function() {
              n5.delete(i5);
            });
          }
        }), i4.addEventListener("closeWormhole", function(e8) {
          var t9 = e8.detail;
          n5.delete(t9);
        });
      }, E4 = function(e7, t8) {
        var i4 = e7.state, n5 = (0, ei.getRenderingRef)();
        if (x4.has(n5)) {
          var s5 = x4.get(n5);
          s5.state = i4, s5.wormholes.forEach(function(e8) {
            V4(e8, i4);
          });
        }
        return t8;
      };
      function A5(e7, t8, i4, n5) {
        return e7.addEventListener(t8, i4, n5), () => e7.removeEventListener(t8, i4, n5);
      }
      function R7(e7, t8, i4) {
        var n5, s5 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 300, o5 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 10, a5 = 0, r6 = false;
        function l4() {
          r6 || (n5 = setTimeout(() => {
            a5 !== o5 ? (e7.dispatchEvent(t8), a5 += 1, l4()) : i4 == null || i4();
          }, s5));
        }
        return l4(), () => {
          window.clearTimeout(n5), r6 = true;
        };
      }
      var M4 = function(e7, t8) {
        var i4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n5 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s5 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o5 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, a5 = e7.getBoundingClientRect(), r6 = t8.getBoundingClientRect();
        return a5.left + i4 < r6.right + s5 && a5.right + i4 > r6.left + s5 && a5.top + n5 < r6.bottom + o5 && a5.bottom + n5 > r6.top + o5;
      }, L7 = () => {
        var e7, t8;
        return {promise: new Promise((i4, n5) => {
          e7 = i4, t8 = n5;
        }), resolve: e7, reject: t8};
      };
      function I3(e7, t8, i4) {
        var n5 = e7[t8];
        e7[t8] = function() {
          return i4(), n5 ? n5.call(e7) : void 0;
        };
      }
      function D5(e7, t8, i4) {
        var n5 = false;
        v5(t8) || (I3(e7, "componentWillLoad", () => {
          t8(), n5 = true;
        }), I3(e7, "connectedCallback", () => {
          n5 && t8();
        })), v5(i4) || I3(e7, "disconnectedCallback", () => {
          i4();
        });
      }
      var F7 = "vmFindPlayer", H8 = function(e7) {
        var t8, i4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300, n5 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, s5 = C4(e7, HTMLElement) ? e7 : (0, ei.getElement)(e7), o5 = L7(), a5 = new CustomEvent(F7, {bubbles: true, composed: true, detail: (e8) => {
          o5.resolve(e8), t8();
        }});
        return t8 = R7(s5, a5, () => {
          o5.reject("Could not find player for ".concat(s5.nodeName));
        }, i4, n5), o5.promise;
      };
      t7.findPlayer = H8;
      var N8 = new Set(["isFullscreenActive", "isControlsActive", "isTextTrackVisible", "isPiPActive", "isLive", "isTouch", "isAudio", "isVideo", "isAudioView", "isVideoView"]), z6 = new Set(["ready", "playbackStarted", "playbackEnded", "playbackReady"]), O6 = (e7) => N8.has(e7) ? "vm".concat(e7.replace("is", "").replace("Active", ""), "Change") : z6.has(e7) ? "vm".concat(e7.charAt(0).toUpperCase()).concat(e7.slice(1)) : "vm".concat(e7.charAt(0).toUpperCase()).concat(e7.slice(1), "Change");
      function _4(e7, t8, i4, n5) {
        var s5 = [];
        s5.push(new CustomEvent(O6(t8), {detail: i4})), t8 !== "paused" || i4 || s5.push(new CustomEvent("vmPlay")), t8 === "seeking" && n5 && !i4 && s5.push(new CustomEvent("vmSeeked")), s5.forEach((t9) => {
          e7.dispatchEvent(t9);
        });
      }
      var Q6 = (e7, t8) => S5(e7, t8);
      t7.withPlayerContext = Q6;
      var j5, B6, W7, U6 = function() {
        var e7 = a4(function* (e8, t8, i4, n5) {
          var s5 = n5 != null ? n5 : yield H8(e8), o5 = t8.map((e9) => {
            var t9 = O6(e9);
            return A5(s5, t9, () => {
              i4(e9, s5[e9]);
            });
          });
          return () => {
            o5.forEach((e9) => e9());
          };
        });
        return function(t8, i4, n5, s5) {
          return e7.apply(this, arguments);
        };
      }();
      t7.usePlayerContext = U6, t7.ViewType = j5, function(e7) {
        e7.Audio = "audio", e7.Video = "video";
      }(j5 || (t7.ViewType = j5 = {})), t7.MediaType = B6, function(e7) {
        e7.Audio = "audio", e7.Video = "video";
      }(B6 || (t7.MediaType = B6 = {})), t7.Provider = W7, function(e7) {
        e7.Audio = "audio", e7.Video = "video", e7.HLS = "hls", e7.Dash = "dash", e7.YouTube = "youtube", e7.Vimeo = "vimeo", e7.Dailymotion = "dailymotion";
      }(W7 || (t7.Provider = W7 = {}));
      class q8 {
        constructor() {
          var e7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          this.dispose = e7;
        }
        add(e7) {
          this.dispose.push(e7);
        }
        empty() {
          this.dispose.forEach((e7) => e7()), this.dispose = [];
        }
      }
      var K6 = Symbol("vmPlayerKey");
      t7.PLAYER_KEY = K6;
      var G6 = Symbol("vmNameKey");
      t7.COMPONENT_NAME_KEY = G6;
      var Y5 = Symbol("vmRegistryKey");
      t7.REGISTRY_KEY = Y5;
      var J6 = Symbol("vmRegistrationKey");
      t7.REGISTRATION_KEY = J6;
      var X5 = "vmComponentRegister", Z5 = "vmComponentRegistered", ee4 = "vmComponentDeregistered", te4 = (e7) => C4(e7, HTMLElement) ? e7 : (0, ei.getElement)(e7);
      function ie4(e7, t8) {
        var i4 = Symbol("vmRegistryId"), n5 = te4(e7);
        n5[G6] = t8 != null ? t8 : n5.nodeName.toLowerCase(), n5[J6] = i4;
        var s5 = new CustomEvent(X5, {bubbles: true, composed: true, detail: e7});
        D5(e7, () => {
          n5.dispatchEvent(s5);
        });
      }
      function ne4(e7) {
        var t8 = (0, ei.getElement)(e7), i4 = new Map(), n5 = new q8();
        function s5(e8) {
          var n6 = e8.detail, s6 = te4(n6);
          s6[K6] = t8, s6[Y5] = i4, i4.set(s6[J6], s6), t8.dispatchEvent(new CustomEvent(Z5, {detail: s6})), D5(n6, void 0, () => function(e9) {
            delete e9[K6], delete e9[Y5], i4.delete(e9[J6]), t8.dispatchEvent(new CustomEvent(ee4, {detail: e9}));
          }(s6));
        }
        t8[Y5] = i4, D5(e7, () => {
          n5.add(A5(t8, X5, s5));
        }, () => {
          i4.clear(), n5.empty(), delete e7[Y5];
        });
      }
      function se4(e7, t8) {
        var i4, n5 = te4(e7)[Y5];
        return Array.from((i4 = n5 == null ? void 0 : n5.values()) !== null && i4 !== void 0 ? i4 : []).some((e8) => e8[G6] === t8);
      }
      function oe4(e7) {
        return te4(e7)[K6];
      }
      function ae4(e7, t8) {
        var i4, n5, s5 = te4(e7);
        return Array.from((i4 = (n5 = s5[Y5]) === null || n5 === void 0 ? void 0 : n5.values()) !== null && i4 !== void 0 ? i4 : []).filter((e8) => e8[G6] === t8);
      }
      function re4(e7, t8, i4) {
        return le4.apply(this, arguments);
      }
      function le4() {
        return (le4 = a4(function* (e7, t8, i4) {
          var n5, s5 = yield H8(e7), o5 = new q8(), a5 = te4(e7)[Y5];
          function r6(e8) {
            e8.detail[G6] === t8 && (i4 == null || i4(ae4(s5, t8)));
          }
          return Array.from((n5 = a5 == null ? void 0 : a5.values()) !== null && n5 !== void 0 ? n5 : []).forEach((e8) => r6(new CustomEvent("", {detail: e8}))), o5.add(A5(s5, Z5, r6)), o5.add(A5(s5, ee4, r6)), D5(e7, () => {
          }, () => {
            o5.empty();
          }), () => {
            o5.empty();
          };
        })).apply(this, arguments);
      }
      var ce4 = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, de4 = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i, he4 = /\.(m3u8)($|\?)/i, ue4 = /^application\/(x-mpegURL|vnd\.apple\.mpegURL)$/i, me4 = /\.(mpd)($|\?)/i, ve4 = "vmProviderChange", pe4 = (e7) => (t8, i4) => {
        var n5 = C4(e7, HTMLElement) ? e7 : (0, ei.getElement)(e7), s5 = new CustomEvent(ve4, {bubbles: true, composed: true, detail: {by: n5, prop: t8, value: i4}});
        n5.dispatchEvent(s5);
      }, ge4 = new Set(["ready", "playing", "playbackReady", "playbackStarted", "playbackEnded", "seeking", "buffered", "buffering", "duration", "viewType", "mediaTitle", "mediaType", "currentSrc", "currentPoster", "playbackRates", "playbackQualities", "textTracks", "currentTextTrack", "isTextTrackVisible", "audioTracks", "currentAudioTrack", "isPiPActive", "isFullscreenActive"]), be4 = Symbol("vmProviderCache"), ye4 = "vmMediaProviderConnect";
      function fe4(e7, t8) {
        return new CustomEvent(e7, {bubbles: true, composed: true, detail: t8});
      }
      function ke4(e7) {
        var t8 = (0, ei.getElement)(e7), i4 = new q8(), n5 = new Map();
        function s5(i5) {
          i5.stopImmediatePropagation(), Object.keys(e7).forEach((t9) => {
            n5.set(t9, e7[t9]);
          });
          var s6 = i5.detail, o6 = (0, ei.getElement)(i5.detail);
          if (e7.provider !== o6) {
            var r6 = o6 == null ? void 0 : o6.nodeName.toLowerCase().replace("vm-", "");
            (0, ei.writeTask)(a4(function* () {
              e7.provider = o6, e7.currentProvider = Object.values(W7).find((e8) => r6 === e8), D5(s6, void 0, () => {
                (0, ei.writeTask)(a4(function* () {
                  var i6;
                  e7.ready = false, e7.provider = void 0, n5.clear(), (i6 = e7.onProviderDisconnect) === null || i6 === void 0 || i6.call(e7), t8.dispatchEvent(fe4("vmMediaProviderDisconnect"));
                }));
              });
            }));
          }
        }
        function o5(t9) {
          t9.stopImmediatePropagation();
          var i5, {by: s6, prop: o6, value: a5} = t9.detail;
          ((e8) => d4(e8) || ge4.has(e8))(o6) ? (0, ei.writeTask)(() => {
            n5.set(o6, a5), e7[o6] = a5;
          }) : (i5 = e7.logger) === null || i5 === void 0 || i5.warn("".concat(s6.nodeName, " tried to change `").concat(o6, "` but it is readonly."));
        }
        e7[be4] = n5, D5(e7, () => {
          i4.add(A5(t8, ye4, s5)), i4.add(A5(t8, ve4, o5));
        }, () => {
          i4.empty(), n5.clear();
        });
      }
      function Te4(e7) {
        var t8 = fe4(ye4, e7);
        D5(e7, () => {
          (0, ei.getElement)(e7).dispatchEvent(t8);
        });
      }
      var Ce4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), this.willAttach = false, this.preload = "metadata", ie4(this), this.willAttach || Te4(this);
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5 = (t8 = yield (i4 = e7.fileProvider) === null || i4 === void 0 ? void 0 : i4.getAdapter()) !== null && t8 !== void 0 ? t8 : {};
            return n5.canPlay = function() {
              var e8 = a4(function* (e9) {
                return f3(e9) && ce4.test(e9);
              });
              return function(t9) {
                return e8.apply(this, arguments);
              };
            }(), n5;
          })();
        }
        render() {
          return (0, ei.h)("vm-file", {noConnect: true, willAttach: this.willAttach, crossOrigin: this.crossOrigin, preload: this.preload, disableRemotePlayback: this.disableRemotePlayback, mediaTitle: this.mediaTitle, viewType: j5.Audio, ref: (e7) => {
            this.fileProvider = e7;
          }}, (0, ei.h)("slot", null));
        }
      }, $e4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.canToggleCaptionVisibility = false, this.showIcon = "captions-on", this.hideIcon = "captions-off", this.tooltipPosition = "top", this.hideTooltip = false, this.keys = "c", this.i18n = {}, this.playbackReady = false, this.textTracks = [], this.isTextTrackVisible = false, ie4(this), Q6(this, ["i18n", "textTracks", "isTextTrackVisible", "playbackReady"]);
        }
        onTextTracksChange() {
          var e7 = this;
          return a4(function* () {
            var t8, i4 = oe4(e7);
            e7.canToggleCaptionVisibility = e7.textTracks.length > 0 && (t8 = yield i4 == null ? void 0 : i4.canSetTextTrackVisibility()) !== null && t8 !== void 0 && t8;
          })();
        }
        componentDidLoad() {
          this.onTextTracksChange();
        }
        onClick() {
          var e7, t8 = oe4(this);
          t8 == null || (e7 = t8.setTextTrackVisibility) === null || e7 === void 0 || e7.call(t8, !this.isTextTrackVisible);
        }
        render() {
          var e7 = this.isTextTrackVisible ? this.i18n.disableCaptions : this.i18n.enableCaptions, t8 = v5(this.keys) ? e7 : "".concat(e7, " (").concat(this.keys, ")");
          return (0, ei.h)(ei.Host, {hidden: !this.canToggleCaptionVisibility}, (0, ei.h)("vm-control", {label: this.i18n.captions, keys: this.keys, hidden: !this.canToggleCaptionVisibility, pressed: this.isTextTrackVisible, onClick: this.onClick.bind(this)}, (0, ei.h)("vm-icon", {name: this.isTextTrackVisible ? this.showIcon : this.hideIcon, library: this.icons}), (0, ei.h)("vm-tooltip", {hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection}, t8)));
        }
        static get watchers() {
          return {textTracks: ["onTextTracksChange"], playbackReady: ["onTextTracksChange"]};
        }
        static get style() {
          return ":host([hidden]){display:none}";
        }
      }, we4 = new Set(), Se4 = new Set(), xe4 = new Map();
      function Ve4() {
        (0, ei.writeTask)(() => {
          Se4.forEach((e7) => {
            var t8 = parseFloat(window.getComputedStyle(e7).height);
            we4.forEach((i4) => {
              var n5 = xe4.get(i4), s5 = M4(i4, e7), o5 = M4(i4, e7, 0, t8) || M4(i4, e7, 0, -t8);
              n5.set(e7, s5 || o5 ? t8 : 0);
            });
          }), we4.forEach((e7) => {
            var t8 = xe4.get(e7);
            e7.style.setProperty("--vm-controls-height", "".concat(Math.max(0, Math.max(...t8.values())), "px"));
          });
        });
      }
      function Pe4(e7) {
        var t8 = (0, ei.getElement)(e7);
        D5(e7, () => {
          we4.add(t8), xe4.set(t8, new Map()), Ve4();
        }, () => {
          we4.delete(t8), xe4.delete(t8);
        });
      }
      var Ee4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.sizeDisposal = new q8(), this.textDisposal = new q8(), this.isEnabled = false, this.fontSize = "sm", this.hidden = false, this.isControlsActive = false, this.isVideoView = false, this.playbackStarted = false, this.textTracks = [], this.currentTextTrack = -1, this.isTextTrackVisible = true, ie4(this), Pe4(this), Q6(this, ["isVideoView", "playbackStarted", "isControlsActive", "textTracks", "currentTextTrack", "isTextTrackVisible"]);
        }
        onEnabledChange() {
          this.isEnabled = this.playbackStarted && this.isVideoView;
        }
        onTextTracksChange() {
          var e7 = this.textTracks[this.currentTextTrack], t8 = () => {
            var t9, i4 = Array.from((t9 = e7.activeCues) !== null && t9 !== void 0 ? t9 : []);
            this.renderCurrentCue(i4[0]);
          };
          this.textDisposal.empty(), p3(e7) || (t8(), this.textDisposal.add(A5(e7, "cuechange", t8)));
        }
        connectedCallback() {
          this.dispatch = w4(this), this.dispatch("shouldRenderNativeTextTracks", false), this.onTextTracksChange(), this.onPlayerResize();
        }
        disconnectedCallback() {
          this.textDisposal.empty(), this.sizeDisposal.empty(), this.dispatch("shouldRenderNativeTextTracks", true);
        }
        onPlayerResize() {
          var e7 = this;
          return a4(function* () {
            var t8 = yield H8(e7), i4 = yield t8.getContainer();
            new ResizeObserver((t9) => {
              var i5 = t9[0], {width: n5} = i5.contentRect;
              e7.fontSize = n5 >= 1360 ? "xl" : n5 >= 1024 ? "lg" : n5 >= 768 ? "md" : "sm";
            }).observe(i4);
          })();
        }
        renderCurrentCue(e7) {
          if (p3(e7))
            this.cue = "";
          else {
            var t8 = document.createElement("div");
            t8.append(e7.getCueAsHTML()), this.cue = t8.innerHTML.trim();
          }
        }
        render() {
          return (0, ei.h)("div", {style: {transform: "translateY(calc(".concat(this.isControlsActive ? "var(--vm-controls-height)" : "24px", " * -1))")}, class: {captions: true, enabled: this.isEnabled, hidden: this.hidden, fontMd: this.fontSize === "md", fontLg: this.fontSize === "lg", fontXl: this.fontSize === "xl", inactive: !this.isTextTrackVisible}}, (0, ei.h)("span", {class: "cue"}, this.cue));
        }
        static get watchers() {
          return {isVideoView: ["onEnabledChange"], playbackStarted: ["onEnabledChange"], textTracks: ["onTextTracksChange"], currentTextTrack: ["onTextTracksChange"]};
        }
        static get style() {
          return ":host{position:absolute;left:0;bottom:0;width:100%;pointer-events:none;z-index:var(--vm-captions-z-index)}.captions{width:100%;text-align:center;color:var(--vm-captions-text-color);font-size:var(--vm-captions-font-size);padding:$control-spacing;display:none;pointer-events:none;transition:transform 0.4s ease-in-out, opacity 0.3s ease-in-out}.captions.enabled{display:inline-block}.captions.hidden{display:none !important}.captions.inactive{opacity:0;visibility:hidden}.captions.fontMd{font-size:var(--vm-captions-font-size-medium)}.captions.fontLg{font-size:var(--vm-captions-font-size-large)}.captions.fontXl{font-size:var(--vm-captions-font-size-xlarge)}.cue{display:inline-block;background:var(--vm-captions-cue-bg-color);border-radius:var(--vm-captions-cue-border-radius);box-decoration-break:clone;line-height:185%;padding:var(--vm-captions-cue-padding);white-space:pre-wrap;pointer-events:none}.cue>div{display:inline}.cue:empty{display:none}";
        }
      }, Ae4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.useOnMobile = false, this.paused = true, this.isVideoView = false, this.isMobile = false, ie4(this), Q6(this, ["paused", "isVideoView", "isMobile"]);
        }
        connectedCallback() {
          this.dispatch = w4(this);
        }
        forceClick() {
          var e7 = this;
          return a4(function* () {
            e7.onClick();
          })();
        }
        onClick() {
          this.dispatch("paused", !this.paused);
        }
        render() {
          return (0, ei.h)("div", {class: {clickToPlay: true, enabled: this.isVideoView && (!this.isMobile || this.useOnMobile)}, onClick: this.onClick.bind(this)});
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-click-to-play-z-index)}.clickToPlay{display:none;width:100%;height:100%;pointer-events:none}.clickToPlay.enabled{display:inline-block;pointer-events:auto}";
        }
      }, Re4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmInteractionChange = (0, ei.createEvent)(this, "vmInteractionChange", 7), this.vmFocus = (0, ei.createEvent)(this, "vmFocus", 7), this.vmBlur = (0, ei.createEvent)(this, "vmBlur", 7), this.keyboardDisposal = new q8(), this.showTapHighlight = false, this.hidden = false, this.isTouch = false, ie4(this), Q6(this, ["isTouch"]);
        }
        onKeysChange() {
          var e7 = this;
          return a4(function* () {
            if (e7.keyboardDisposal.empty(), !v5(e7.keys)) {
              var t8 = yield H8(e7), i4 = e7.keys.split("/");
              e7.keyboardDisposal.add(A5(t8, "keydown", (t9) => {
                i4.includes(t9.key) && e7.button.click();
              }));
            }
          })();
        }
        connectedCallback() {
          this.findTooltip(), this.onKeysChange();
        }
        componentWillLoad() {
          this.findTooltip();
        }
        disconnectedCallback() {
          this.keyboardDisposal.empty();
        }
        focusControl() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.button) === null || t8 === void 0 || t8.focus();
          })();
        }
        blurControl() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.button) === null || t8 === void 0 || t8.blur();
          })();
        }
        onTouchStart() {
          this.showTapHighlight = true;
        }
        onTouchEnd() {
          setTimeout(() => {
            this.showTapHighlight = false;
          }, 100);
        }
        findTooltip() {
          var e7 = this.host.querySelector("vm-tooltip");
          return m4(e7) || (this.describedBy = e7.id), e7;
        }
        onShowTooltip() {
          var e7 = this.findTooltip();
          m4(e7) || (e7.active = true), this.vmInteractionChange.emit(true);
        }
        onHideTooltip() {
          var e7 = this.findTooltip();
          m4(e7) || (e7.active = false), this.button.blur(), this.vmInteractionChange.emit(false);
        }
        onFocus() {
          this.vmFocus.emit(), this.onShowTooltip();
        }
        onBlur() {
          this.vmBlur.emit(), this.onHideTooltip();
        }
        onMouseEnter() {
          this.onShowTooltip();
        }
        onMouseLeave() {
          this.onHideTooltip();
        }
        render() {
          var e7 = this.expanded ? "true" : "false", t8 = this.pressed ? "true" : "false";
          return (0, ei.h)("button", {class: {hidden: this.hidden, notTouch: !this.isTouch, tapHighlight: this.showTapHighlight}, id: this.identifier, type: "button", "aria-label": this.label, "aria-haspopup": v5(this.menu) ? void 0 : "true", "aria-controls": this.menu, "aria-expanded": v5(this.menu) ? void 0 : e7, "aria-pressed": v5(this.pressed) ? void 0 : t8, "aria-hidden": this.hidden ? "true" : "false", "aria-describedby": this.describedBy, onTouchStart: this.onTouchStart.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onMouseEnter: this.onMouseEnter.bind(this), onMouseLeave: this.onMouseLeave.bind(this), ref: (e8) => {
            this.button = e8;
          }}, (0, ei.h)("slot", null));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {keys: ["onKeysChange"]};
        }
        static get style() {
          return "button{display:flex;align-items:center;flex-direction:row;border:var(--vm-control-border);cursor:pointer;flex-shrink:0;font-size:var(--vm-control-icon-size);color:var(--vm-control-color);background:var(--vm-control-bg, transparent);border-radius:var(--vm-control-border-radius);padding:var(--vm-control-padding);position:relative;pointer-events:auto;transition:all 0.3s ease;transform:scale(var(--vm-control-scale, 1));touch-action:manipulation;box-sizing:border-box}button.hidden{display:none}button:focus{outline:0}button.tapHighlight{background:var(--vm-control-tap-highlight)}button.notTouch:focus,button.notTouch:hover,button.notTouch[aria-expanded='true']{background:var(--vm-control-focus-bg);color:var(--vm-control-focus-color);transform:scale(calc(var(--vm-control-scale, 1) + 0.06))}";
        }
      }, Me4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.space = "none", ie4(this);
        }
        render() {
          return (0, ei.h)("div", {class: {controlGroup: true, spaceTop: this.space !== "none" && this.space !== "bottom", spaceBottom: this.space !== "none" && this.space !== "top"}}, (0, ei.h)("slot", null));
        }
        get host() {
          return this;
        }
        static get style() {
          return ":host{width:100%}.controlGroup{position:relative;width:100%;display:flex;flex-wrap:wrap;flex-direction:inherit;align-items:inherit;justify-content:inherit;box-sizing:border-box}.controlGroup.spaceTop{margin-top:var(--vm-control-group-spacing)}.controlGroup.spaceBottom{margin-bottom:var(--vm-control-group-spacing)}::slotted(*){margin-left:var(--vm-controls-spacing)}::slotted(*:first-child){margin-left:0}";
        }
      }, Le4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), ie4(this);
        }
        static get style() {
          return ":host{flex:1}";
        }
      }, Ie4 = {}, De4 = {}, Fe4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.disposal = new q8(), this.isInteracting = false, this.hidden = false, this.fullWidth = false, this.fullHeight = false, this.direction = "row", this.align = "center", this.justify = "start", this.pin = "bottomLeft", this.activeDuration = 2750, this.waitForPlaybackStart = false, this.hideWhenPaused = false, this.hideOnMouseLeave = false, this.isAudioView = false, this.isSettingsActive = false, this.playbackReady = false, this.isControlsActive = false, this.paused = true, this.playbackStarted = false, ie4(this), function(e7) {
            var t8 = (0, ei.getElement)(e7);
            function i4() {
              return t8.shadowRoot.querySelector(".controls");
            }
            D5(e7, () => {
              var e8 = i4();
              m4(e8) || (Se4.add(e8), Ve4());
            }, () => {
              Se4.delete(i4()), Ve4();
            }), I3(e7, "componentDidLoad", () => {
              Se4.add(i4()), Ve4();
            }), I3(e7, "componentDidRender", Ve4);
          }(this), Q6(this, ["playbackReady", "isAudioView", "isControlsActive", "isSettingsActive", "paused", "playbackStarted"]);
        }
        connectedCallback() {
          this.dispatch = w4(this), this.onControlsChange(), this.setupPlayerListeners();
        }
        componentWillLoad() {
          this.onControlsChange();
        }
        disconnectedCallback() {
          this.disposal.empty(), delete De4[Ie4[this]], delete Ie4[this];
        }
        setupPlayerListeners() {
          var e7 = this;
          return a4(function* () {
            var t8 = yield H8(e7);
            ["focus", "keydown", "click", "touchstart", "mouseleave"].forEach((i4) => {
              e7.disposal.add(A5(t8, i4, e7.onControlsChange.bind(e7)));
            }), e7.disposal.add(A5(t8, "mousemove", function(e8) {
              var t9, i4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3, n5 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
              return function() {
                for (var s5 = arguments.length, o5 = new Array(s5), a5 = 0; a5 < s5; a5++)
                  o5[a5] = arguments[a5];
                var r6 = this, l4 = function() {
                  t9 = void 0, n5 || e8.apply(r6, o5);
                }, c4 = n5 && v5(t9);
                clearTimeout(t9), t9 = setTimeout(l4, i4), c4 && e8.apply(r6, o5);
              };
            }(e7.onControlsChange, 50, true).bind(e7))), Ie4[e7] = t8;
          })();
        }
        show() {
          this.dispatch("isControlsActive", true);
        }
        hide() {
          this.dispatch("isControlsActive", false);
        }
        hideWithDelay() {
          clearTimeout(De4[Ie4[this]]), De4[Ie4[this]] = setTimeout(() => {
            this.hide();
          }, this.activeDuration);
        }
        onControlsChange(e7) {
          if (clearTimeout(De4[Ie4[this]]), !this.hidden && this.playbackReady)
            if (this.isAudioView)
              this.show();
            else if (!this.waitForPlaybackStart || this.playbackStarted)
              if (this.isInteracting || this.isSettingsActive)
                this.show();
              else if (this.hideWhenPaused && this.paused)
                this.hideWithDelay();
              else {
                if (!this.hideOnMouseLeave || this.paused || (e7 == null ? void 0 : e7.type) !== "mouseleave")
                  return this.paused ? void this.show() : (this.show(), void this.hideWithDelay());
                this.hide();
              }
            else
              this.hide();
          else
            this.hide();
        }
        getPosition() {
          if (this.isAudioView)
            return {};
          if (this.pin === "center")
            return {top: "50%", left: "50%", transform: "translate(-50%, -50%)"};
          var e7 = this.pin.split(/(?=[L|R])/).map((e8) => e8.toLowerCase());
          return {[e7[0]]: 0, [e7[1]]: 0};
        }
        onStartInteraction() {
          this.isInteracting = true;
        }
        onEndInteraction() {
          this.isInteracting = false;
        }
        render() {
          return (0, ei.h)(ei.Host, {video: !this.isAudioView}, (0, ei.h)("div", {style: n4(n4({}, this.getPosition()), {}, {flexDirection: this.direction, alignItems: this.align === "center" ? "center" : "flex-".concat(this.align), justifyContent: this.justify}), class: {controls: true, audio: this.isAudioView, hidden: this.hidden, active: this.playbackReady && this.isControlsActive, fullWidth: this.isAudioView || this.fullWidth, fullHeight: !this.isAudioView && this.fullHeight}, onMouseEnter: this.onStartInteraction.bind(this), onMouseLeave: this.onEndInteraction.bind(this), onTouchStart: this.onStartInteraction.bind(this), onTouchEnd: this.onEndInteraction.bind(this)}, (0, ei.h)("slot", null)));
        }
        static get watchers() {
          return {paused: ["onControlsChange"], hidden: ["onControlsChange"], isAudioView: ["onControlsChange"], isInteracting: ["onControlsChange"], isSettingsActive: ["onControlsChange"], hideWhenPaused: ["onControlsChange"], hideOnMouseLeave: ["onControlsChange"], playbackStarted: ["onControlsChange"], waitForPlaybackStart: ["onControlsChange"], playbackReady: ["onControlsChange"]};
        }
        static get style() {
          return ":host{position:relative;width:100%;z-index:var(--vm-controls-z-index)}:host([video]){position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.controls{display:flex;width:100%;position:absolute;flex-wrap:wrap;pointer-events:auto;box-sizing:border-box;background:var(--vm-controls-bg);padding:var(--vm-controls-padding);border-radius:var(--vm-controls-border-radius);opacity:0;visibility:hidden;transition:var(--vm-fade-transition)}.controls.audio{position:relative}.controls.hidden{display:none}.controls.active{opacity:1;visibility:visible}.controls.fullWidth{width:100%}.controls.fullHeight{height:100%}::slotted(*:not(vm-control-group)){margin-left:var(--vm-controls-spacing)}::slotted(*:not(vm-control-group):first-child){margin-left:0}";
        }
      }, He4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.currentTime = 0, this.i18n = {}, this.alwaysShowHours = false, ie4(this), Q6(this, ["currentTime", "i18n"]);
        }
        render() {
          return (0, ei.h)("vm-time", {label: this.i18n.currentTime, seconds: this.currentTime, alwaysShowHours: this.alwaysShowHours});
        }
        static get style() {
          return ":host{display:flex;align-items:center;justify-content:center}";
        }
      }, Ne4 = typeof window != "undefined", ze4 = Ne4 ? window.navigator.userAgent.toLowerCase() : "", Oe4 = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(ze4), _e4 = /android/.test(ze4), Qe4 = Oe4 || _e4, je4 = Ne4 && /(iPhone|iPod)/gi.test(window.navigator.platform);
      /firefox/.test(ze4), Ne4 && (window.safari || Oe4 || /Apple/.test(ze4));
      var Be4 = () => {
        if (!Ne4)
          return false;
        var e7 = document.createElement("video");
        return !!document.pictureInPictureEnabled && !e7.disablePictureInPicture;
      }, We4 = () => {
        if (!Ne4)
          return false;
        var e7 = document.createElement("video");
        return k5(e7.webkitSupportsPresentationMode) && k5(e7.webkitSetPresentationMode) && !je4;
      }, Ue4 = function() {
        var e7 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t8 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
        if (!Ne4)
          return Promise.resolve(false);
        var i4 = document.createElement("video");
        return e7 && (i4.setAttribute("muted", ""), i4.muted = true), t8 && (i4.setAttribute("playsinline", ""), i4.setAttribute("webkit-playsinline", "")), i4.setAttribute("height", "0"), i4.setAttribute("width", "0"), i4.style.position = "fixed", i4.style.top = "0", i4.style.width = "0", i4.style.height = "0", i4.style.opacity = "0", new Promise((e8) => e8(i4.play())).catch(() => {
        }), Promise.resolve(!i4.paused);
      }, qe4 = (e7) => b5(e7) ? e7 : function(e8) {
        if (f3(e8))
          try {
            return JSON.parse(e8);
          } catch (e9) {
            return;
          }
      }(e7), Ke4 = function(e7) {
        var t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return new Promise((i4, n5) => {
          var s5 = new Image(), o5 = () => {
            delete s5.onload, delete s5.onerror, s5.naturalWidth >= t8 ? i4(s5) : n5(s5);
          };
          Object.assign(s5, {onload: o5, onerror: o5, src: e7});
        });
      }, Ge4 = function(e7, t8) {
        var i4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : () => {
        }, n5 = document.createElement("script");
        n5.src = e7, n5.onload = t8, n5.onerror = i4;
        var s5 = document.getElementsByTagName("script")[0];
        s5.parentNode.insertBefore(n5, s5);
      }, Ye3 = (e7) => {
        var t8;
        if (!p3(t8 = e7) && (b5(t8) || f3(t8) && t8.startsWith("{")))
          return qe4(e7);
      }, Je4 = function(e7) {
        var t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        if (!Ne4)
          return t8;
        try {
          return window.decodeURIComponent(e7);
        } catch (e8) {
          return t8;
        }
      }, Xe3 = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g, Ze3 = function(e7) {
        var t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "preconnect", i4 = arguments.length > 2 ? arguments[2] : void 0;
        if (!Ne4)
          return false;
        var n5 = document.createElement("link");
        return n5.rel = t8, n5.href = e7, v5(i4) || (n5.as = i4), n5.crossOrigin = "true", document.head.append(n5), true;
      }, et4 = (e7, t8) => ((e8, t9) => {
        if (v5(t9) || t9.length === 0)
          return e8;
        var i4 = e8.split("?", 2);
        return i4[0] + (v5(i4[1]) ? "?".concat(t9) : "?".concat(i4[1], "&").concat(t9));
      })(e7, b5(t8) ? ((e8) => {
        var t9 = [], i4 = (e9, i5) => {
          t9.push("".concat(encodeURIComponent(e9), "=").concat(encodeURIComponent(i5)));
        };
        return Object.keys(e8).forEach((t10) => {
          var n5 = e8[t10];
          p3(n5) || (T6(n5) ? n5.forEach((e9) => i4(t10, e9)) : i4(t10, n5));
        }), t9.join("&");
      })(t8) : t8), tt5 = (e7) => {
        if (f3(e7))
          return ((e8) => {
            var t8, i4 = Object.create(null);
            if (v5(e8))
              return i4;
            for (; t8 = Xe3.exec(e8); ) {
              var n5 = Je4(t8[1], t8[1]).replace("[]", ""), s5 = f3(t8[2]) ? Je4(t8[2].replace(/\+/g, " "), t8[2]) : "", o5 = i4[n5];
              o5 && !T6(o5) && (i4[n5] = [o5]), o5 ? i4[n5].push(s5) : i4[n5] = s5;
            }
            return i4;
          })(e7);
      }, it4 = {}, nt4 = function(e7, t8, i4) {
        var n5 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : () => true, s5 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : Ge4, o5 = (e8) => v5(window[e8]) ? window.exports && window.exports[e8] ? window.exports[e8] : window.module && window.module.exports && window.module.exports[e8] ? window.module.exports[e8] : void 0 : window[e8], a5 = o5(t8);
        return a5 && n5(a5) ? Promise.resolve(a5) : new Promise((n6, a6) => {
          if (v5(it4[e7])) {
            it4[e7] = [{resolve: n6, reject: a6}];
            var r6 = (t9) => {
              it4[e7].forEach((e8) => e8.resolve(t9));
            };
            if (!v5(i4)) {
              var l4 = window[i4];
              window[i4] = function() {
                v5(l4) || l4(), r6(o5(t8));
              };
            }
            s5(e7, () => {
              v5(i4) && r6(o5(t8));
            }, (t9) => {
              it4[e7].forEach((e8) => {
                e8.reject(t9);
              }), delete it4[e7];
            });
          } else
            it4[e7].push({resolve: n6, reject: a6});
        });
      }, st5 = function(e7) {
        var t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return Q6(e7, ["autoplay", "controls", "language", "muted", "logger", "loop", "aspectRatio", "playsinline", ...t8]);
      }, ot5 = new Map(), at4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.defaultInternalState = {}, this.internalState = {currentTime: 0, volume: 0, muted: false, isAdsPlaying: false, playbackReady: false}, this.embedSrc = "", this.mediaTitle = "", this.shouldAutoplayQueue = false, this.showUpNextQueue = false, this.showShareButtons = false, this.showDailymotionLogo = false, this.showVideoInfo = true, this.language = "en", this.autoplay = false, this.controls = false, this.loop = false, this.muted = false, this.playsinline = false, ie4(this), Te4(this), st5(this);
        }
        onVideoIdChange() {
          this.internalState = n4({}, this.defaultInternalState), this.videoId ? (this.embedSrc = "".concat(this.getOrigin(), "/embed/video/").concat(this.videoId, "?api=1"), this.fetchVideoInfo = this.getVideoInfo(), this.pendingMediaTitleCall = L7()) : this.embedSrc = "";
        }
        onControlsChange() {
          this.internalState.playbackReady && this.remoteControl("controls", this.controls);
        }
        onCustomPosterChange() {
          this.dispatch("currentPoster", this.poster);
        }
        connectedCallback() {
          this.dispatch = pe4(this), this.dispatch("viewType", j5.Video), this.onVideoIdChange(), this.initialMuted = this.muted, this.internalState.muted = this.muted, this.defaultInternalState = n4({}, this.internalState);
        }
        getOrigin() {
          return "https://www.dailymotion.com";
        }
        getPreconnections() {
          return [this.getOrigin(), "https://static1.dmcdn.net"];
        }
        remoteControl(e7, t8) {
          return this.embed.postMessage({command: e7, parameters: t8 ? [t8] : []});
        }
        buildParams() {
          return {autoplay: this.autoplay, mute: this.initialMuted, "queue-autoplay-next": this.shouldAutoplayQueue, "queue-enable": this.showUpNextQueue, "sharing-enable": this.showShareButtons, syndication: this.syndication, "ui-highlight": this.color, "ui-logo": this.showDailymotionLogo, "ui-start-screen-info": this.showVideoInfo};
        }
        getVideoInfo() {
          var e7 = this;
          return a4(function* () {
            return ot5.has(e7.videoId) ? ot5.get(e7.videoId) : window.fetch("".concat("https://api.dailymotion.com", "/video/").concat(e7.videoId, "?fields=duration,thumbnail_1080_url")).then((e8) => e8.json()).then((t8) => {
              var i4 = t8.thumbnail_1080_url, n5 = parseFloat(t8.duration);
              return ot5.set(e7.videoId, {poster: i4, duration: n5}), {poster: i4, duration: n5};
            });
          })();
        }
        onEmbedSrcChange() {
          this.vmLoadStart.emit(), this.dispatch("viewType", j5.Video);
        }
        onEmbedMessage(e7) {
          var t8, i4, n5 = e7.detail;
          switch (n5.event) {
            case "playback_ready":
              this.onControlsChange(), this.dispatch("currentSrc", this.embedSrc), this.dispatch("mediaType", B6.Video), Promise.all([this.fetchVideoInfo, (t8 = this.pendingMediaTitleCall) === null || t8 === void 0 ? void 0 : t8.promise]).then((e8) => {
                var t9, i5, [n6, s5] = e8;
                this.dispatch("duration", (t9 = n6 == null ? void 0 : n6.duration) !== null && t9 !== void 0 ? t9 : -1), this.dispatch("currentPoster", (i5 = this.poster) !== null && i5 !== void 0 ? i5 : n6 == null ? void 0 : n6.poster), this.dispatch("mediaTitle", s5), this.dispatch("playbackReady", true);
              });
              break;
            case "videochange":
              (i4 = this.pendingMediaTitleCall) === null || i4 === void 0 || i4.resolve(n5.title);
              break;
            case "start":
              this.dispatch("paused", false), this.dispatch("playbackStarted", true), this.dispatch("buffering", true);
              break;
            case "video_start":
              this.remoteControl("muted", this.internalState.muted), this.remoteControl("volume", this.internalState.volume), this.internalState.currentTime > 0 && this.remoteControl("seek", this.internalState.currentTime);
              break;
            case "play":
              this.dispatch("paused", false);
              break;
            case "pause":
              this.dispatch("paused", true), this.dispatch("playing", false), this.dispatch("buffering", false);
              break;
            case "playing":
              this.dispatch("playing", true), this.dispatch("buffering", false);
              break;
            case "video_end":
              this.loop ? setTimeout(() => {
                this.remoteControl("play");
              }, 300) : this.dispatch("playbackEnded", true);
              break;
            case "timeupdate":
              this.dispatch("currentTime", parseFloat(n5.time));
              break;
            case "volumechange":
              this.dispatch("muted", n5.muted === "true"), this.dispatch("volume", Math.floor(100 * parseFloat(n5.volume)));
              break;
            case "seeking":
              this.dispatch("currentTime", parseFloat(n5.time)), this.dispatch("seeking", true);
              break;
            case "seeked":
              this.dispatch("currentTime", parseFloat(n5.time)), this.dispatch("seeking", false);
              break;
            case "waiting":
              this.dispatch("buffering", true);
              break;
            case "progress":
              this.dispatch("buffered", parseFloat(n5.time));
              break;
            case "durationchange":
              this.dispatch("duration", parseFloat(n5.duration));
              break;
            case "qualitiesavailable":
              this.dispatch("playbackQualities", n5.qualities.map((e8) => "".concat(e8, "p")));
              break;
            case "qualitychange":
              this.dispatch("playbackQuality", "".concat(n5.quality, "p"));
              break;
            case "fullscreenchange":
              this.dispatch("isFullscreenActive", n5.fullscreen === "true");
              break;
            case "error":
              this.vmError.emit(n5.error);
          }
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5, s5, o5, r6, l4, c4, d5, h4, u4, m5, v6 = /(?:dai\.ly|dailymotion|dailymotion\.com)\/(?:video\/|embed\/|)(?:video\/|)((?:\w)+)/;
            return {getInternalPlayer: (m5 = a4(function* () {
              return e7.embed;
            }), function() {
              return m5.apply(this, arguments);
            }), play: (u4 = a4(function* () {
              e7.remoteControl("play");
            }), function() {
              return u4.apply(this, arguments);
            }), pause: (h4 = a4(function* () {
              e7.remoteControl("pause");
            }), function() {
              return h4.apply(this, arguments);
            }), canPlay: (d5 = a4(function* (e8) {
              return f3(e8) && v6.test(e8);
            }), function(e8) {
              return d5.apply(this, arguments);
            }), setCurrentTime: (c4 = a4(function* (t9) {
              e7.internalState.currentTime = t9, e7.remoteControl("seek", t9);
            }), function(e8) {
              return c4.apply(this, arguments);
            }), setMuted: (l4 = a4(function* (t9) {
              e7.internalState.muted = t9, e7.remoteControl("muted", t9);
            }), function(e8) {
              return l4.apply(this, arguments);
            }), setVolume: (r6 = a4(function* (t9) {
              e7.internalState.volume = t9 / 100, e7.dispatch("volume", t9), e7.remoteControl("volume", t9 / 100);
            }), function(e8) {
              return r6.apply(this, arguments);
            }), canSetPlaybackQuality: (o5 = a4(function* () {
              return true;
            }), function() {
              return o5.apply(this, arguments);
            }), setPlaybackQuality: (s5 = a4(function* (t9) {
              e7.remoteControl("quality", t9.slice(0, -1));
            }), function(e8) {
              return s5.apply(this, arguments);
            }), canSetFullscreen: (n5 = a4(function* () {
              return true;
            }), function() {
              return n5.apply(this, arguments);
            }), enterFullscreen: (i4 = a4(function* () {
              e7.remoteControl("fullscreen", true);
            }), function() {
              return i4.apply(this, arguments);
            }), exitFullscreen: (t8 = a4(function* () {
              e7.remoteControl("fullscreen", false);
            }), function() {
              return t8.apply(this, arguments);
            })};
          })();
        }
        render() {
          return (0, ei.h)("vm-embed", {embedSrc: this.embedSrc, mediaTitle: this.mediaTitle, origin: this.getOrigin(), params: this.buildParams(), decoder: tt5, preconnections: this.getPreconnections(), onVmEmbedMessage: this.onEmbedMessage.bind(this), onVmEmbedSrcChange: this.onEmbedSrcChange.bind(this), ref: (e7) => {
            this.embed = e7;
          }});
        }
        static get watchers() {
          return {videoId: ["onVideoIdChange"], controls: ["onControlsChange"], poster: ["onCustomPosterChange"]};
        }
        static get style() {
          return ":host{z-index:var(--vm-media-z-index)}";
        }
      }, rt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.textTracksDisposal = new q8(), this.hasAttached = false, this.version = "latest", this.config = {}, this.autoplay = false, this.preload = "metadata", this.enableTextTracksByDefault = true, this.shouldRenderNativeTextTracks = true, this.isTextTrackVisible = true, this.currentTextTrack = -1, ie4(this), Te4(this), Q6(this, ["autoplay", "shouldRenderNativeTextTracks", "isTextTrackVisible", "currentTextTrack"]);
        }
        onSrcChange() {
          this.hasAttached && (this.vmLoadStart.emit(), this.dash.attachSource(this.src));
        }
        onShouldRenderNativeTextTracks() {
          var e7;
          this.shouldRenderNativeTextTracks ? this.textTracksDisposal.empty() : this.hideCurrentTextTrack(), (e7 = this.dash) === null || e7 === void 0 || e7.enableForcedTextStreaming(!this.shouldRenderNativeTextTracks);
        }
        onTextTrackChange() {
          if (this.shouldRenderNativeTextTracks && !v5(this.dash) && (this.dash.setTextTrack(this.isTextTrackVisible ? this.currentTextTrack : -1), !this.isTextTrackVisible)) {
            var e7, t8, i4 = Array.from((e7 = (t8 = this.mediaEl) === null || t8 === void 0 ? void 0 : t8.textTracks) !== null && e7 !== void 0 ? e7 : [])[this.currentTextTrack];
            (i4 == null ? void 0 : i4.mode) === "hidden" && this.dispatch("currentTextTrack", -1);
          }
        }
        connectedCallback() {
          this.dispatch = pe4(this), this.mediaEl && this.setupDash();
        }
        disconnectedCallback() {
          this.textTracksDisposal.empty(), this.destroyDash();
        }
        setupDash() {
          var e7 = this;
          return a4(function* () {
            try {
              var t8 = e7.libSrc || "https://cdn.jsdelivr.net/npm/dashjs@".concat(e7.version, "/dist/dash.all.min.js"), i4 = yield nt4(t8, "dashjs");
              e7.dash = i4.MediaPlayer(e7.config).create(), e7.dash.initialize(e7.mediaEl, null, e7.autoplay), e7.dash.setTextDefaultEnabled(e7.enableTextTracksByDefault), e7.dash.enableForcedTextStreaming(!e7.shouldRenderNativeTextTracks), e7.dash.on(i4.MediaPlayer.events.PLAYBACK_METADATA_LOADED, () => {
                e7.dispatch("mediaType", B6.Video), e7.dispatch("currentSrc", e7.src), e7.dispatchLevels(), e7.listenToTextTracksForChanges(), e7.dispatch("playbackReady", true);
              }), e7.dash.on(i4.MediaPlayer.events.TRACK_CHANGE_RENDERED, () => {
                e7.shouldRenderNativeTextTracks || e7.hideCurrentTextTrack();
              }), e7.dash.on(i4.MediaPlayer.events.ERROR, (t9) => {
                e7.vmError.emit(t9);
              }), e7.hasAttached = true;
            } catch (t9) {
              e7.vmError.emit(t9);
            }
          })();
        }
        destroyDash() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.dash) === null || t8 === void 0 || t8.reset(), e7.hasAttached = false;
          })();
        }
        onMediaElChange(e7) {
          var t8 = this;
          return a4(function* () {
            t8.destroyDash(), v5(e7.detail) || (t8.mediaEl = e7.detail, yield t8.setupDash());
          })();
        }
        levelToPlaybackQuality(e7) {
          return e7 === -1 ? "Auto" : "".concat(e7.height, "p");
        }
        findLevelIndexFromQuality(e7) {
          return this.dash.getBitrateInfoListFor("video").findIndex((t8) => this.levelToPlaybackQuality(t8) === e7);
        }
        dispatchLevels() {
          try {
            var e7 = this.dash.getBitrateInfoListFor("video");
            (e7 == null ? void 0 : e7.length) > 0 && (this.dispatch("playbackQualities", ["Auto", ...e7.map(this.levelToPlaybackQuality)]), this.dispatch("playbackQuality", "Auto"));
          } catch (e8) {
            this.vmError.emit(e8);
          }
        }
        listenToTextTracksForChanges() {
          var e7, t8, i4;
          if (this.textTracksDisposal.empty(), !v5(this.mediaEl) && !this.shouldRenderNativeTextTracks) {
            var n5 = (e7 = ((t8 = this.dash) === null || t8 === void 0 || (i4 = t8.getCurrentTrackFor("text")) === null || i4 === void 0 ? void 0 : i4.index) - 1) !== null && e7 !== void 0 ? e7 : -1;
            this.currentTextTrack = n5, this.dispatch("currentTextTrack", n5), this.textTracksDisposal.add(A5(this.mediaEl.textTracks, "change", this.onTextTracksChange.bind(this)));
          }
        }
        getTextTracks() {
          var e7, t8;
          return Array.from((e7 = (t8 = this.mediaEl) === null || t8 === void 0 ? void 0 : t8.textTracks) !== null && e7 !== void 0 ? e7 : []);
        }
        hideCurrentTextTrack() {
          var e7 = this.getTextTracks();
          e7[this.currentTextTrack] && this.isTextTrackVisible && (e7[this.currentTextTrack].mode = "hidden");
        }
        onTextTracksChange() {
          this.hideCurrentTextTrack(), this.dispatch("textTracks", this.getTextTracks()), this.dispatch("isTextTrackVisible", this.isTextTrackVisible), this.dispatch("currentTextTrack", this.currentTextTrack);
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, s5, o5, r6, l4, c4, d5, h4 = (t8 = yield (i4 = e7.videoProvider) === null || i4 === void 0 ? void 0 : i4.getAdapter()) !== null && t8 !== void 0 ? t8 : {}, u4 = h4.canPlay;
            return n4(n4({}, h4), {}, {getInternalPlayer: (d5 = a4(function* () {
              return e7.dash;
            }), function() {
              return d5.apply(this, arguments);
            }), canPlay: (c4 = a4(function* (e8) {
              var t9;
              return f3(e8) && me4.test(e8) || (t9 = u4 == null ? void 0 : u4(e8)) !== null && t9 !== void 0 && t9;
            }), function(e8) {
              return c4.apply(this, arguments);
            }), canSetPlaybackQuality: (l4 = a4(function* () {
              try {
                var t9, i5;
                return ((t9 = e7.dash) === null || t9 === void 0 || (i5 = t9.getBitrateInfoListFor("video")) === null || i5 === void 0 ? void 0 : i5.length) > 0;
              } catch (t10) {
                return e7.vmError.emit(t10), false;
              }
            }), function() {
              return l4.apply(this, arguments);
            }), setPlaybackQuality: (r6 = a4(function* (t9) {
              if (!v5(e7.dash)) {
                var i5 = e7.findLevelIndexFromQuality(t9);
                e7.dash.updateSettings({streaming: {abr: {autoSwitchBitrate: {video: i5 === -1}}}}), i5 >= 0 && e7.dash.setQualityFor("video", i5), e7.dispatch("playbackQuality", t9);
              }
            }), function(e8) {
              return r6.apply(this, arguments);
            }), setCurrentTextTrack: (o5 = a4(function* (t9) {
              var i5;
              e7.shouldRenderNativeTextTracks ? h4.setCurrentTextTrack(t9) : (e7.currentTextTrack = t9, (i5 = e7.dash) === null || i5 === void 0 || i5.setTextTrack(t9), e7.onTextTracksChange());
            }), function(e8) {
              return o5.apply(this, arguments);
            }), setTextTrackVisibility: (s5 = a4(function* (t9) {
              var i5;
              e7.shouldRenderNativeTextTracks ? h4.setTextTrackVisibility(t9) : (e7.isTextTrackVisible = t9, (i5 = e7.dash) === null || i5 === void 0 || i5.enableText(t9), e7.onTextTracksChange());
            }), function(e8) {
              return s5.apply(this, arguments);
            })});
          })();
        }
        render() {
          return (0, ei.h)("vm-video", {willAttach: true, crossOrigin: this.crossOrigin, preload: this.preload, poster: this.poster, controlsList: this.controlsList, autoPiP: this.autoPiP, disablePiP: this.disablePiP, hasCustomTextManager: !this.shouldRenderNativeTextTracks, disableRemotePlayback: this.disableRemotePlayback, mediaTitle: this.mediaTitle, ref: (e7) => {
            this.videoProvider = e7;
          }});
        }
        static get watchers() {
          return {src: ["onSrcChange"], hasAttached: ["onSrcChange"], shouldRenderNativeTextTracks: ["onShouldRenderNativeTextTracks"], isTextTrackVisible: ["onTextTrackChange"], currentTextTrack: ["onTextTrackChange"]};
        }
        static get style() {
          return ":host{z-index:var(--vm-media-z-index)}";
        }
      }, lt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.canSetFullscreen = false, this.useOnMobile = false, this.isFullscreenActive = true, this.isVideoView = false, this.playbackReady = false, this.isMobile = false, this.clicks = 0, ie4(this), Q6(this, ["playbackReady", "isFullscreenActive", "isVideoView", "isMobile"]);
        }
        onPlaybackReadyChange() {
          var e7 = this;
          return a4(function* () {
            var t8 = yield H8(e7);
            e7.canSetFullscreen = yield t8.canSetFullscreen();
          })();
        }
        onTriggerClickToPlay() {
          var e7 = this;
          return a4(function* () {
            var [t8] = ae4(e7, "vm-click-to-play");
            yield t8 == null ? void 0 : t8.forceClick();
          })();
        }
        onToggleFullscreen() {
          var e7 = this;
          return a4(function* () {
            var t8 = yield H8(e7);
            e7.isFullscreenActive ? t8.exitFullscreen() : t8.enterFullscreen();
          })();
        }
        onClick() {
          this.clicks += 1, this.clicks === 1 && setTimeout(() => {
            this.clicks === 1 ? this.onTriggerClickToPlay() : this.onToggleFullscreen(), this.clicks = 0;
          }, 300);
        }
        render() {
          return (0, ei.h)("div", {class: {dblClickFullscreen: true, enabled: this.playbackReady && this.canSetFullscreen && this.isVideoView && (!this.isMobile || this.useOnMobile)}, onClick: this.onClick.bind(this)});
        }
        static get watchers() {
          return {playbackReady: ["onPlaybackReadyChange"]};
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-dbl-click-fullscreen-z-index)}.dblClickFullscreen{display:none;width:100%;height:100%;pointer-events:none}.dblClickFullscreen.enabled{display:inline-block;pointer-events:auto}";
        }
      }, ct5 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.activeDuration = 2750, this.waitForPlaybackStart = false, this.hideWhenPaused = false, this.hideOnMouseLeave = false, this.isMobile = false, this.isLive = false, this.isAudioView = false, this.isVideoView = false, ie4(this), Q6(this, ["theme", "isMobile", "isAudioView", "isVideoView", "isLive"]);
        }
        buildAudioControls() {
          return (0, ei.h)("vm-controls", {fullWidth: true}, (0, ei.h)("vm-playback-control", {tooltipDirection: "right"}), (0, ei.h)("vm-volume-control", null), !this.isLive && (0, ei.h)("vm-current-time", null), this.isLive && (0, ei.h)("vm-control-spacer", null), !this.isLive && (0, ei.h)("vm-scrubber-control", null), this.isLive && (0, ei.h)("vm-live-indicator", null), !this.isLive && (0, ei.h)("vm-end-time", null), !this.isLive && (0, ei.h)("vm-settings-control", {tooltipDirection: "left"}), (0, ei.h)("div", {style: {marginLeft: "0", paddingRight: "2px"}}));
        }
        buildMobileVideoControls() {
          return (0, ei.h)(ei.Fragment, null, (0, ei.h)("vm-scrim", {gradient: "up"}), (0, ei.h)("vm-controls", {pin: "topLeft", fullWidth: true, activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused}, (0, ei.h)("vm-control-spacer", null), (0, ei.h)("vm-volume-control", null), !this.isLive && (0, ei.h)("vm-caption-control", null), !this.isLive && (0, ei.h)("vm-settings-control", null), this.isLive && (0, ei.h)("vm-fullscreen-control", null)), (0, ei.h)("vm-controls", {pin: "center", justify: "center", activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused}, (0, ei.h)("vm-playback-control", {style: {"--vm-control-scale": "1.3"}})), !this.isLive && (0, ei.h)("vm-controls", {pin: "bottomLeft", fullWidth: true, activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused}, (0, ei.h)("vm-control-group", null, (0, ei.h)("vm-current-time", null), (0, ei.h)("vm-control-spacer", null), (0, ei.h)("vm-end-time", null), (0, ei.h)("vm-fullscreen-control", null)), (0, ei.h)("vm-control-group", {space: "top"}, (0, ei.h)("vm-scrubber-control", null))));
        }
        buildDesktopVideoControls() {
          return (0, ei.h)(ei.Fragment, null, this.theme !== "light" && (0, ei.h)("vm-scrim", {gradient: "up"}), (0, ei.h)("vm-controls", {fullWidth: true, pin: "bottomRight", activeDuration: this.activeDuration, waitForPlaybackStart: this.waitForPlaybackStart, hideWhenPaused: this.hideWhenPaused, hideOnMouseLeave: this.hideOnMouseLeave}, !this.isLive && (0, ei.h)("vm-control-group", null, (0, ei.h)("vm-scrubber-control", null)), (0, ei.h)("vm-control-group", {space: this.isLive ? "none" : "top"}, (0, ei.h)("vm-playback-control", {tooltipDirection: "right"}), (0, ei.h)("vm-volume-control", null), !this.isLive && (0, ei.h)("vm-time-progress", null), (0, ei.h)("vm-control-spacer", null), !this.isLive && (0, ei.h)("vm-caption-control", null), this.isLive && (0, ei.h)("vm-live-indicator", null), (0, ei.h)("vm-pip-control", null), !this.isLive && (0, ei.h)("vm-settings-control", null), (0, ei.h)("vm-fullscreen-control", {tooltipDirection: "left"}))));
        }
        render() {
          return this.isAudioView ? this.buildAudioControls() : this.isVideoView && this.isMobile ? this.buildMobileVideoControls() : this.isVideoView ? this.buildDesktopVideoControls() : null;
        }
        static get style() {
          return ":host{display:contents;pointer-events:none;z-index:var(--vm-controls-z-index)}";
        }
      }, dt5 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.textTracksDisposal = new q8(), this.canSetPlaybackRate = false, this.canSetPlaybackQuality = false, this.canSetTextTrack = false, this.canSetAudioTrack = false, this.pin = "bottomRight", this.i18n = {}, this.playbackReady = false, this.playbackRate = 1, this.playbackRates = [1], this.isVideoView = false, this.playbackQualities = [], this.textTracks = [], this.currentTextTrack = -1, this.audioTracks = [], this.currentAudioTrack = -1, this.isTextTrackVisible = true, ie4(this), Q6(this, ["i18n", "playbackReady", "playbackRate", "playbackRates", "playbackQuality", "playbackQualities", "isVideoView", "textTracks", "currentTextTrack", "isTextTrackVisible", "audioTracks", "currentAudioTrack"]);
        }
        onPlaybackReady() {
          var e7 = this;
          return a4(function* () {
            var t8 = yield H8(e7);
            e7.canSetPlaybackQuality = yield t8.canSetPlaybackQuality(), e7.canSetPlaybackRate = yield t8.canSetPlaybackRate();
          })();
        }
        onAudioTracksChange() {
          var e7 = this;
          return a4(function* () {
            var t8, i4 = oe4(e7);
            e7.canSetAudioTrack = (t8 = yield i4 == null ? void 0 : i4.canSetAudioTrack()) !== null && t8 !== void 0 && t8;
          })();
        }
        onTextTracksChange() {
          var e7 = this;
          return a4(function* () {
            var t8, i4 = oe4(e7);
            e7.canSetTextTrack = (t8 = yield i4 == null ? void 0 : i4.canSetTextTrack()) !== null && t8 !== void 0 && t8;
          })();
        }
        connectedCallback() {
          this.dispatch = w4(this);
        }
        componentDidLoad() {
          this.onTextTracksChange();
        }
        disconnectedCallback() {
          this.textTracksDisposal.empty();
        }
        onPlaybackRateSelect(e7) {
          var t8 = e7.target;
          this.dispatch("playbackRate", parseFloat(t8.value));
        }
        buildPlaybackRateSubmenu() {
          if (this.playbackRates.length <= 1 || !this.canSetPlaybackRate)
            return (0, ei.h)("vm-menu-item", {label: this.i18n.playbackRate, hint: this.i18n.normal});
          var e7 = (e8) => e8 === 1 ? this.i18n.normal : "".concat(e8);
          return (0, ei.h)("vm-submenu", {label: this.i18n.playbackRate, hint: e7(this.playbackRate)}, (0, ei.h)("vm-menu-radio-group", {value: "".concat(this.playbackRate), onVmCheck: this.onPlaybackRateSelect.bind(this)}, this.playbackRates.map((t8) => (0, ei.h)("vm-menu-radio", {label: e7(t8), value: "".concat(t8)}))));
        }
        onPlaybackQualitySelect(e7) {
          var t8 = e7.target;
          this.dispatch("playbackQuality", t8.value);
        }
        buildPlaybackQualitySubmenu() {
          var e7;
          if (this.playbackQualities.length <= 1 || !this.canSetPlaybackQuality)
            return (0, ei.h)("vm-menu-item", {label: this.i18n.playbackQuality, hint: (e7 = this.playbackQuality) !== null && e7 !== void 0 ? e7 : this.i18n.auto});
          var t8 = (e8) => {
            var t9 = parseInt(e8.slice(0, -1), 10);
            return t9 >= 2160 ? "UHD" : t9 >= 1080 ? "HD" : void 0;
          };
          return (0, ei.h)("vm-submenu", {label: this.i18n.playbackQuality, hint: this.playbackQuality}, (0, ei.h)("vm-menu-radio-group", {value: this.playbackQuality, onVmCheck: this.onPlaybackQualitySelect.bind(this)}, this.playbackQualities.map((e8) => (0, ei.h)("vm-menu-radio", {label: e8, value: e8, badge: t8(e8)}))));
        }
        onTextTrackSelect(e7) {
          var t8 = e7.target, i4 = parseInt(t8.value, 10), n5 = oe4(this);
          i4 !== -1 ? (n5 == null || n5.setTextTrackVisibility(true), n5 == null || n5.setCurrentTextTrack(i4)) : n5 == null || n5.setTextTrackVisibility(false);
        }
        buildTextTracksSubmenu() {
          var e7, t8, i4;
          return this.textTracks.length <= 1 || !this.canSetTextTrack ? (0, ei.h)("vm-menu-item", {label: this.i18n.subtitlesOrCc, hint: (t8 = (i4 = this.textTracks[this.currentTextTrack]) === null || i4 === void 0 ? void 0 : i4.label) !== null && t8 !== void 0 ? t8 : this.i18n.none}) : (0, ei.h)("vm-submenu", {label: this.i18n.subtitlesOrCc, hint: this.isTextTrackVisible ? (e7 = this.textTracks[this.currentTextTrack]) === null || e7 === void 0 ? void 0 : e7.label : this.i18n.off}, (0, ei.h)("vm-menu-radio-group", {value: "".concat(this.isTextTrackVisible ? this.currentTextTrack : -1), onVmCheck: this.onTextTrackSelect.bind(this)}, [(0, ei.h)("vm-menu-radio", {label: this.i18n.off, value: "-1"})].concat(this.textTracks.map((e8, t9) => (0, ei.h)("vm-menu-radio", {label: e8.label, value: "".concat(t9)})))));
        }
        onAudioTrackSelect(e7) {
          var t8 = e7.target, i4 = parseInt(t8.value, 10), n5 = oe4(this);
          n5 == null || n5.setCurrentAudioTrack(i4);
        }
        buildAudioTracksMenu() {
          var e7, t8, i4;
          return this.audioTracks.length <= 1 || !this.canSetAudioTrack ? (0, ei.h)("vm-menu-item", {label: this.i18n.audio, hint: (t8 = (i4 = this.audioTracks[this.currentAudioTrack]) === null || i4 === void 0 ? void 0 : i4.label) !== null && t8 !== void 0 ? t8 : this.i18n.default}) : (0, ei.h)("vm-submenu", {label: this.i18n.audio, hint: (e7 = this.audioTracks[this.currentAudioTrack]) === null || e7 === void 0 ? void 0 : e7.label}, (0, ei.h)("vm-menu-radio-group", {value: "".concat(this.currentAudioTrack), onVmCheck: this.onAudioTrackSelect.bind(this)}, this.audioTracks.map((e8, t9) => (0, ei.h)("vm-menu-radio", {label: e8.label, value: "".concat(t9)}))));
        }
        render() {
          return (0, ei.h)("vm-settings", {pin: this.pin}, this.buildAudioTracksMenu(), this.buildPlaybackRateSubmenu(), this.buildPlaybackQualitySubmenu(), this.isVideoView && this.buildTextTracksSubmenu(), (0, ei.h)("slot", null));
        }
        static get watchers() {
          return {playbackReady: ["onPlaybackReady", "onAudioTracksChange", "onTextTracksChange"], audioTracks: ["onAudioTracksChange"], textTracks: ["onTextTracksChange"]};
        }
        static get style() {
          return ":host{z-index:var(--vm-menu-z-index)}";
        }
      }, ht5 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.noClickToPlay = false, this.noDblClickFullscreen = false, this.noCaptions = false, this.noPoster = false, this.noSpinner = false, this.noControls = false, this.noSettings = false, this.noLoadingScreen = false, ie4(this);
        }
        render() {
          return (0, ei.h)("vm-ui", null, !this.noClickToPlay && (0, ei.h)("vm-click-to-play", null), !this.noDblClickFullscreen && (0, ei.h)("vm-dbl-click-fullscreen", null), !this.noCaptions && (0, ei.h)("vm-captions", null), !this.noPoster && (0, ei.h)("vm-poster", null), !this.noSpinner && (0, ei.h)("vm-spinner", null), !this.noLoadingScreen && (0, ei.h)("vm-loading-screen", null), !this.noControls && (0, ei.h)("vm-default-controls", null), !this.noSettings && (0, ei.h)("vm-default-settings", null), (0, ei.h)("slot", null));
        }
        static get style() {
          return ":host{display:contents;pointer-events:none}";
        }
      };
      class ut5 {
        constructor(e7, t8, i4) {
          var n5;
          this.el = e7, this.attributes = t8, this.onLoad = i4, this.hasLoaded = false, p3(this.el) || (this.intersectionObs = this.canObserveIntersection() ? new IntersectionObserver(this.onIntersection.bind(this)) : void 0, this.mutationObs = this.canObserveMutations() ? new MutationObserver(this.onMutation.bind(this)) : void 0, (n5 = this.mutationObs) === null || n5 === void 0 || n5.observe(this.el, {childList: true, subtree: true, attributeFilter: this.attributes}), this.lazyLoad());
        }
        didLoad() {
          return this.hasLoaded;
        }
        destroy() {
          var e7, t8;
          (e7 = this.intersectionObs) === null || e7 === void 0 || e7.disconnect(), (t8 = this.mutationObs) === null || t8 === void 0 || t8.disconnect();
        }
        canObserveIntersection() {
          return Ne4 && window.IntersectionObserver;
        }
        canObserveMutations() {
          return Ne4 && window.MutationObserver;
        }
        lazyLoad() {
          var e7;
          this.canObserveIntersection() ? (e7 = this.intersectionObs) === null || e7 === void 0 || e7.observe(this.el) : this.load();
        }
        onIntersection(e7) {
          e7.forEach((e8) => {
            (e8.intersectionRatio > 0 || e8.isIntersecting) && (this.load(), this.intersectionObs.unobserve(e8.target));
          });
        }
        onMutation() {
          this.hasLoaded && this.load();
        }
        getLazyElements() {
          return (p3(this.el.shadowRoot) ? this.el : this.el.shadowRoot).querySelectorAll(".lazy");
        }
        load() {
          window.requestAnimationFrame(() => {
            this.getLazyElements().forEach(this.loadEl.bind(this));
          });
        }
        loadEl(e7) {
          var t8, i4;
          (t8 = this.intersectionObs) === null || t8 === void 0 || t8.unobserve(e7), this.hasLoaded = true, (i4 = this.onLoad) === null || i4 === void 0 || i4.call(this, e7);
        }
      }
      var mt5 = 0, vt5 = new Set(), pt5 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmEmbedSrcChange = (0, ei.createEvent)(this, "vmEmbedSrcChange", 3), this.vmEmbedMessage = (0, ei.createEvent)(this, "vmEmbedMessage", 3), this.vmEmbedLoaded = (0, ei.createEvent)(this, "vmEmbedLoaded", 3), this.srcWithParams = "", this.hasEnteredViewport = false, this.embedSrc = "", this.mediaTitle = "", this.params = "", this.preconnections = [], ie4(this);
        }
        onEmbedSrcChange() {
          this.srcWithParams = f3(this.embedSrc) && this.embedSrc.length > 0 ? et4(this.embedSrc, this.params) : void 0;
        }
        srcWithParamsChange() {
          v5(this.srcWithParams) || this.hasEnteredViewport || vt5.has(this.embedSrc) || Ze3(this.srcWithParams) && vt5.add(this.embedSrc), this.vmEmbedSrcChange.emit(this.srcWithParams);
        }
        preconnectionsChange() {
          this.hasEnteredViewport || this.preconnections.filter((e7) => !vt5.has(e7)).forEach((e7) => {
            Ze3(e7) && vt5.add(e7);
          });
        }
        connectedCallback() {
          this.lazyLoader = new ut5(this.host, ["data-src"], (e7) => {
            var t8 = e7.getAttribute("data-src");
            e7.removeAttribute("src"), m4(t8) || e7.setAttribute("src", t8);
          }), this.onEmbedSrcChange(), this.genIframeId();
        }
        disconnectedCallback() {
          this.lazyLoader.destroy();
        }
        onWindowMessage(e7) {
          var t8, i4, n5;
          if (e7.source === ((t8 = this.iframe) === null || t8 === void 0 ? void 0 : t8.contentWindow) && (!f3(this.origin) || this.origin === e7.origin)) {
            var s5 = (i4 = (n5 = this.decoder) === null || n5 === void 0 ? void 0 : n5.call(this, e7.data)) !== null && i4 !== void 0 ? i4 : e7.data;
            s5 && this.vmEmbedMessage.emit(s5);
          }
        }
        postMessage(e7, t8) {
          var i4 = this;
          return a4(function* () {
            var n5, s5;
            (n5 = i4.iframe) === null || n5 === void 0 || (s5 = n5.contentWindow) === null || s5 === void 0 || s5.postMessage(JSON.stringify(e7), t8 != null ? t8 : "*");
          })();
        }
        onLoad() {
          this.vmEmbedLoaded.emit();
        }
        genIframeId() {
          mt5 += 1, this.id = "vm-iframe-".concat(mt5);
        }
        render() {
          return (0, ei.h)("iframe", {id: this.id, class: "lazy", title: this.mediaTitle, "data-src": this.srcWithParams, allowFullScreen: true, allow: "autoplay; encrypted-media; picture-in-picture;", onLoad: this.onLoad.bind(this), ref: (e7) => {
            this.iframe = e7;
          }});
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {embedSrc: ["onEmbedSrcChange"], params: ["onEmbedSrcChange"], srcWithParams: ["srcWithParamsChange"], preconnections: ["preconnectionsChange"]};
        }
        static get style() {
          return ":host{z-index:var(--vm-media-z-index)}iframe{position:absolute;top:0;left:0;border:0;width:100%;height:100%;user-select:none}";
        }
      }, gt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.duration = -1, this.i18n = {}, this.alwaysShowHours = false, ie4(this), Q6(this, ["duration", "i18n"]);
        }
        render() {
          return (0, ei.h)("vm-time", {label: this.i18n.duration, seconds: Math.max(0, this.duration), alwaysShowHours: this.alwaysShowHours});
        }
        static get style() {
          return ":host{display:flex;align-items:center;justify-content:center}";
        }
      }, bt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.vmMediaElChange = (0, ei.createEvent)(this, "vmMediaElChange", 7), this.vmSrcSetChange = (0, ei.createEvent)(this, "vmSrcSetChange", 7), this.textTracksDisposal = new q8(), this.wasPausedBeforeSeeking = true, this.currentSrcSet = [], this.mediaQueryDisposal = new q8(), this.willAttach = false, this.preload = "metadata", this.playbackRates = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2], this.language = "en", this.autoplay = false, this.controls = false, this.loop = false, this.muted = false, this.playsinline = false, this.noConnect = false, this.paused = true, this.currentTime = 0, this.volume = 0, this.playbackReady = false, this.playbackStarted = false, this.currentTextTrack = -1, this.hasCustomTextManager = false, this.isTextTrackVisible = true, this.shouldRenderNativeTextTracks = true, ie4(this), Te4(this), st5(this, ["playbackReady", "playbackStarted", "currentTime", "volume", "paused", "currentTextTrack", "isTextTrackVisible", "shouldRenderNativeTextTracks"]), re4(this, "vm-poster", (e7) => {
            [this.vmPoster] = e7;
          });
        }
        onMediaTitleChange() {
          this.dispatch("mediaTitle", this.mediaTitle);
        }
        onPosterChange() {
          var e7;
          this.playbackStarted || (e7 = this.mediaEl) === null || e7 === void 0 || e7.load();
        }
        onViewTypeChange() {
          this.dispatch("viewType", this.viewType);
        }
        connectedCallback() {
          this.initLazyLoader(), this.dispatch = pe4(this), this.onViewTypeChange(), this.onPosterChange(), this.onMediaTitleChange();
        }
        componentDidRender() {
          this.prevMediaEl !== this.mediaEl && (this.prevMediaEl = this.mediaEl, this.vmMediaElChange.emit(this.mediaEl));
        }
        componentDidLoad() {
          this.onViewTypeChange();
        }
        disconnectedCallback() {
          var e7;
          this.mediaQueryDisposal.empty(), this.textTracksDisposal.empty(), this.cancelTimeUpdates(), (e7 = this.lazyLoader) === null || e7 === void 0 || e7.destroy(), this.wasPausedBeforeSeeking = true;
        }
        initLazyLoader() {
          this.lazyLoader = new ut5(this.host, ["data-src", "data-poster"], () => {
            if (!p3(this.mediaEl)) {
              var e7 = this.mediaEl.getAttribute("data-poster");
              m4(e7) || this.mediaEl.setAttribute("poster", e7), this.refresh(), this.didSrcSetChange();
            }
          });
        }
        refresh() {
          if (!p3(this.mediaEl))
            for (var {children: e7} = this.mediaEl, t8 = 0; t8 <= e7.length - 1; t8 += 1) {
              var i4 = e7[t8], n5 = i4.getAttribute("data-src") || i4.getAttribute("src") || i4.getAttribute("data-vs");
              i4.removeAttribute("src"), m4(n5) || (i4.setAttribute("data-vs", n5), i4.setAttribute("src", n5));
            }
        }
        didSrcSetChange() {
          if (!p3(this.mediaEl)) {
            var e7 = Array.from(this.mediaEl.querySelectorAll("source")).map((e8) => {
              var t8;
              return {src: e8.getAttribute("data-vs"), media: (t8 = e8.getAttribute("data-media")) !== null && t8 !== void 0 ? t8 : void 0, ref: e8};
            });
            (this.currentSrcSet.length !== e7.length || e7.some((e8, t8) => this.currentSrcSet[t8].src !== e8.src)) && (this.currentSrcSet = e7, this.onSrcSetChange());
          }
        }
        onSrcSetChange() {
          var e7;
          this.textTracksDisposal.empty(), this.mediaQueryDisposal.empty(), this.vmLoadStart.emit(), this.vmSrcSetChange.emit(this.currentSrcSet), this.willAttach || (e7 = this.mediaEl) === null || e7 === void 0 || e7.load();
        }
        hasCustomPoster() {
          return !Oe4 && !v5(this.vmPoster);
        }
        cancelTimeUpdates() {
          y3(this.timeRAF) && window.cancelAnimationFrame(this.timeRAF), this.timeRAF = void 0;
        }
        requestTimeUpdates() {
          var e7, t8;
          this.dispatch("currentTime", (e7 = (t8 = this.mediaEl) === null || t8 === void 0 ? void 0 : t8.currentTime) !== null && e7 !== void 0 ? e7 : 0), this.timeRAF = window.requestAnimationFrame(() => {
            this.requestTimeUpdates();
          });
        }
        getMediaType() {
          var {currentSrc: e7} = this.mediaEl;
          return ce4.test(e7) ? B6.Audio : de4.test(e7) || he4.test(e7) ? B6.Video : void 0;
        }
        onLoadedMetadata() {
          this.mediaEl.volume = this.volume / 100, this.listenToTextTracksForChanges(), this.onTextTracksChange(), this.onProgress(), this.dispatch("currentPoster", this.poster), this.dispatch("duration", this.mediaEl.duration), this.dispatch("playbackRates", this.playbackRates), this.willAttach || (this.dispatch("currentSrc", this.mediaEl.currentSrc), this.dispatch("mediaType", this.getMediaType()), this.dispatch("playbackReady", true));
        }
        onProgress() {
          var {buffered: e7, duration: t8} = this.mediaEl, i4 = e7.length === 0 ? 0 : e7.end(e7.length - 1);
          this.dispatch("buffered", i4 > t8 ? t8 : i4);
        }
        onPlay() {
          this.requestTimeUpdates(), this.dispatch("paused", false), this.playbackStarted || this.dispatch("playbackStarted", true);
        }
        onPause() {
          this.cancelTimeUpdates(), this.dispatch("paused", true), this.dispatch("buffering", false);
        }
        onPlaying() {
          this.dispatch("playing", true), this.dispatch("buffering", false);
        }
        onSeeking() {
          this.wasPausedBeforeSeeking || (this.wasPausedBeforeSeeking = this.mediaEl.paused), this.dispatch("currentTime", this.mediaEl.currentTime), this.dispatch("seeking", true);
        }
        onSeeked() {
          (this.currentTime !== 0 || this.playbackStarted) && (this.dispatch("seeking", false), this.playbackStarted && this.wasPausedBeforeSeeking || this.attemptToPlay(), this.wasPausedBeforeSeeking = true);
        }
        onRateChange() {
          this.dispatch("playbackRate", this.mediaEl.playbackRate);
        }
        onVolumeChange() {
          this.dispatch("muted", this.mediaEl.muted), this.dispatch("volume", 100 * this.mediaEl.volume);
        }
        onDurationChange() {
          this.dispatch("duration", this.mediaEl.duration);
        }
        onWaiting() {
          this.dispatch("buffering", true);
        }
        onSuspend() {
          this.dispatch("buffering", false);
        }
        onEnded() {
          this.loop || this.dispatch("playbackEnded", true);
        }
        onError() {
          this.vmError.emit(this.mediaEl.error);
        }
        attemptToPlay() {
          try {
            var e7;
            (e7 = this.mediaEl) === null || e7 === void 0 || e7.play();
          } catch (e8) {
            this.vmError.emit(e8);
          }
        }
        togglePiPInChrome(e7) {
          var t8;
          return e7 ? (t8 = this.mediaEl) === null || t8 === void 0 ? void 0 : t8.requestPictureInPicture() : document.exitPictureInPicture();
        }
        togglePiPInSafari(e7) {
          var t8, i4, n5 = e7 ? "picture-in-picture" : "inline";
          if ((t8 = this.mediaEl) === null || t8 === void 0 || !t8.webkitSupportsPresentationMode(n5))
            throw new Error("PiP API is not available.");
          return (i4 = this.mediaEl) === null || i4 === void 0 ? void 0 : i4.webkitSetPresentationMode(n5);
        }
        togglePiP(e7) {
          var t8 = this;
          return a4(function* () {
            if (Be4())
              return t8.togglePiPInChrome(e7);
            if (We4())
              return t8.togglePiPInSafari(e7);
            throw new Error("PiP API is not available.");
          })();
        }
        toggleFullscreen(e7) {
          var t8 = this;
          return a4(function* () {
            var i4, n5, s5;
            if ((i4 = t8.mediaEl) === null || i4 === void 0 || !i4.webkitSupportsFullscreen)
              throw new Error("Fullscreen API is not available.");
            return e7 ? (n5 = t8.mediaEl) === null || n5 === void 0 ? void 0 : n5.webkitEnterFullscreen() : (s5 = t8.mediaEl) === null || s5 === void 0 ? void 0 : s5.webkitExitFullscreen();
          })();
        }
        onPresentationModeChange() {
          var e7, t8 = (e7 = this.mediaEl) === null || e7 === void 0 ? void 0 : e7.webkitPresentationMode;
          this.dispatch("isPiPActive", t8 === "picture-in-picture"), this.dispatch("isFullscreenActive", t8 === "fullscreen");
        }
        onEnterPiP() {
          this.dispatch("isPiPActive", true);
        }
        onLeavePiP() {
          this.dispatch("isPiPActive", false);
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            return {getInternalPlayer: (v6 = a4(function* () {
              return e7.mediaEl;
            }), function() {
              return v6.apply(this, arguments);
            }), play: (m5 = a4(function* () {
              var t9;
              return (t9 = e7.mediaEl) === null || t9 === void 0 ? void 0 : t9.play();
            }), function() {
              return m5.apply(this, arguments);
            }), pause: (u4 = a4(function* () {
              var t9;
              return (t9 = e7.mediaEl) === null || t9 === void 0 ? void 0 : t9.pause();
            }), function() {
              return u4.apply(this, arguments);
            }), canPlay: (h4 = a4(function* (e8) {
              return f3(e8) && (ce4.test(e8) || de4.test(e8));
            }), function(e8) {
              return h4.apply(this, arguments);
            }), setCurrentTime: (d5 = a4(function* (t9) {
              e7.mediaEl && (e7.mediaEl.currentTime = t9);
            }), function(e8) {
              return d5.apply(this, arguments);
            }), setMuted: (c4 = a4(function* (t9) {
              e7.mediaEl && (e7.mediaEl.muted = t9);
            }), function(e8) {
              return c4.apply(this, arguments);
            }), setVolume: (l4 = a4(function* (t9) {
              e7.mediaEl && (e7.mediaEl.volume = t9 / 100);
            }), function(e8) {
              return l4.apply(this, arguments);
            }), canSetPlaybackRate: (r6 = a4(function* () {
              return true;
            }), function() {
              return r6.apply(this, arguments);
            }), setPlaybackRate: (o5 = a4(function* (t9) {
              e7.mediaEl && (e7.mediaEl.playbackRate = t9);
            }), function(e8) {
              return o5.apply(this, arguments);
            }), canSetPiP: (s5 = a4(function* () {
              return Be4() || We4();
            }), function() {
              return s5.apply(this, arguments);
            }), enterPiP: () => e7.togglePiP(true), exitPiP: () => e7.togglePiP(false), canSetFullscreen: (n5 = a4(function* () {
              return (() => {
                if (!Ne4)
                  return false;
                var e8 = document.createElement("video");
                return k5(e8.webkitEnterFullscreen);
              })();
            }), function() {
              return n5.apply(this, arguments);
            }), enterFullscreen: () => e7.toggleFullscreen(true), exitFullscreen: () => e7.toggleFullscreen(false), setCurrentTextTrack: (i4 = a4(function* (t9) {
              t9 !== e7.currentTextTrack && e7.toggleTextTrackModes(t9);
            }), function(e8) {
              return i4.apply(this, arguments);
            }), setTextTrackVisibility: (t8 = a4(function* (t9) {
              e7.isTextTrackVisible = t9, e7.toggleTextTrackModes(e7.currentTextTrack);
            }), function(e8) {
              return t8.apply(this, arguments);
            })};
            var t8, i4, n5, s5, o5, r6, l4, c4, d5, h4, u4, m5, v6;
          })();
        }
        onHasCustomTextManagerChange() {
          this.hasCustomTextManager ? this.textTracksDisposal.empty() : this.playbackReady && this.listenToTextTracksForChanges();
        }
        onShouldRenderNativeTextTracksChange() {
          this.hasCustomTextManager || this.toggleTextTrackModes(this.currentTextTrack);
        }
        onProviderConnect(e7) {
          this.noConnect && e7.stopImmediatePropagation();
        }
        onProviderDisconnect(e7) {
          this.noConnect && e7.stopImmediatePropagation();
        }
        getFilteredTextTracks() {
          for (var e7 = [], t8 = Array.from(this.mediaEl.textTracks), i4 = 0; i4 < t8.length; i4 += 1) {
            var n5 = t8[i4];
            n5.kind !== "subtitles" && n5.kind !== "captions" || !n5.label || e7.push(t8[i4]);
          }
          return e7;
        }
        listenToTextTracksForChanges() {
          this.hasCustomTextManager || (this.textTracksDisposal.empty(), v5(this.mediaEl) || this.textTracksDisposal.add(A5(this.mediaEl.textTracks, "change", this.onTextTracksChange.bind(this))));
        }
        onTextTracksChange() {
          for (var e7, t8 = this.getFilteredTextTracks(), i4 = -1, n5 = 0; n5 < t8.length; n5 += 1)
            if (t8[n5].mode === "hidden")
              i4 = n5;
            else if (t8[n5].mode === "showing") {
              i4 = n5;
              break;
            }
          this.shouldRenderNativeTextTracks || ((e7 = t8[i4]) === null || e7 === void 0 ? void 0 : e7.mode) !== "showing" ? (this.shouldRenderNativeTextTracks && (this.isTextTrackVisible = i4 !== -1 && t8[i4].mode === "showing", this.dispatch("isTextTrackVisible", this.isTextTrackVisible)), this.dispatch("textTracks", t8), this.dispatch("currentTextTrack", this.shouldRenderNativeTextTracks && !this.isTextTrackVisible ? -1 : i4)) : t8[i4].mode = "hidden";
        }
        toggleTextTrackModes(e7) {
          if (!p3(this.mediaEl)) {
            var {textTracks: t8} = this.mediaEl;
            if (e7 === -1)
              Array.from(t8).forEach((e8) => {
                e8.mode = "disabled";
              });
            else {
              var i4 = t8[this.currentTextTrack];
              i4 && (i4.mode = "disabled");
            }
            var n5 = t8[e7];
            n5 && (n5.mode = this.isTextTrackVisible && this.shouldRenderNativeTextTracks ? "showing" : "hidden"), this.dispatch("currentTextTrack", this.shouldRenderNativeTextTracks && !this.isTextTrackVisible ? -1 : e7), this.dispatch("isTextTrackVisible", this.isTextTrackVisible);
          }
        }
        render() {
          var e7 = {autoplay: this.autoplay, muted: this.muted, playsinline: this.playsinline, playsInline: this.playsinline, "x5-playsinline": this.playsinline, "webkit-playsinline": this.playsinline, controls: this.controls, crossorigin: this.crossOrigin === "" ? "anonymous" : this.crossOrigin, controlslist: this.controlsList, "data-poster": this.hasCustomPoster() ? void 0 : this.poster, loop: this.loop, preload: this.preload, disablePictureInPicture: this.disablePiP, autoPictureInPicture: this.autoPiP, disableRemotePlayback: this.disableRemotePlayback, "x-webkit-airplay": this.disableRemotePlayback ? "deny" : "allow", ref: (e8) => {
            this.mediaEl = e8;
          }, onLoadedMetadata: this.onLoadedMetadata.bind(this), onProgress: this.onProgress.bind(this), onPlay: this.onPlay.bind(this), onPause: this.onPause.bind(this), onPlaying: this.onPlaying.bind(this), onSeeking: this.onSeeking.bind(this), onSeeked: this.onSeeked.bind(this), onRateChange: this.onRateChange.bind(this), onVolumeChange: this.onVolumeChange.bind(this), onDurationChange: this.onDurationChange.bind(this), onWaiting: this.onWaiting.bind(this), onSuspend: this.onSuspend.bind(this), onEnded: this.onEnded.bind(this), onError: this.onError.bind(this)}, t8 = (0, ei.h)("audio", Object.assign({class: "lazy"}, e7), (0, ei.h)("slot", null), "Your browser does not support the", (0, ei.h)("code", null, "audio"), "element."), i4 = (0, ei.h)("video", Object.assign({class: "lazy"}, e7, {onwebkitpresentationmodechanged: this.onPresentationModeChange.bind(this), onenterpictureinpicture: this.onEnterPiP.bind(this), onleavepictureinpicture: this.onLeavePiP.bind(this)}), (0, ei.h)("slot", null), "Your browser does not support the", (0, ei.h)("code", null, "video"), "element.");
          return this.viewType === j5.Audio ? t8 : i4;
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {mediaTitle: ["onMediaTitleChange"], poster: ["onPosterChange"], viewType: ["onViewTypeChange"], hasCustomTextManager: ["onHasCustomTextManagerChange"], shouldRenderNativeTextTracks: ["onShouldRenderNativeTextTracksChange"]};
        }
        static get style() {
          return "audio.sc-vm-file,video.sc-vm-file{border-radius:inherit;vertical-align:middle;width:100%;outline:0}video.sc-vm-file{position:absolute;top:0;left:0;border:0;height:100%;user-select:none}";
        }
      }, yt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.canSetFullscreen = false, this.enterIcon = "fullscreen-enter", this.exitIcon = "fullscreen-exit", this.tooltipPosition = "top", this.hideTooltip = false, this.keys = "f", this.isFullscreenActive = false, this.i18n = {}, this.playbackReady = false, ie4(this), Q6(this, ["isFullscreenActive", "playbackReady", "i18n"]);
        }
        onPlaybackReadyChange() {
          var e7 = this;
          return a4(function* () {
            var t8, i4 = oe4(e7);
            e7.canSetFullscreen = (t8 = yield i4 == null ? void 0 : i4.canSetFullscreen()) !== null && t8 !== void 0 && t8;
          })();
        }
        componentDidLoad() {
          this.onPlaybackReadyChange();
        }
        onClick() {
          var e7 = oe4(this);
          this.isFullscreenActive ? e7 == null || e7.exitFullscreen() : e7 == null || e7.enterFullscreen();
        }
        render() {
          var e7 = this.isFullscreenActive ? this.i18n.exitFullscreen : this.i18n.enterFullscreen, t8 = v5(this.keys) ? e7 : "".concat(e7, " (").concat(this.keys, ")");
          return (0, ei.h)(ei.Host, {hidden: !this.canSetFullscreen}, (0, ei.h)("vm-control", {label: this.i18n.fullscreen, keys: this.keys, pressed: this.isFullscreenActive, hidden: !this.canSetFullscreen, onClick: this.onClick.bind(this)}, (0, ei.h)("vm-icon", {name: this.isFullscreenActive ? this.exitIcon : this.enterIcon, library: this.icons}), (0, ei.h)("vm-tooltip", {hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection}, t8)));
        }
        static get watchers() {
          return {playbackReady: ["onPlaybackReadyChange"]};
        }
        static get style() {
          return ":host([hidden]){display:none}";
        }
      }, ft5 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.hasAttached = false, this.version = "latest", this.preload = "metadata", this.playbackReady = false, ie4(this), Te4(this), Q6(this, ["playbackReady"]);
        }
        connectedCallback() {
          this.dispatch = pe4(this), this.mediaEl && this.setupHls();
        }
        disconnectedCallback() {
          this.destroyHls();
        }
        get src() {
          if (!p3(this.videoProvider)) {
            var e7 = this.videoProvider.querySelectorAll("source"), t8 = Array.from(e7).find((e8) => he4.test(e8.src) || ue4.test(e8.type));
            return t8 == null ? void 0 : t8.src;
          }
        }
        setupHls() {
          var e7 = this;
          return a4(function* () {
            if (v5(e7.hls))
              try {
                var t8 = e7.libSrc || "https://cdn.jsdelivr.net/npm/hls.js@".concat(e7.version, "/dist/hls.min.js"), i4 = yield nt4(t8, "Hls");
                if (!i4.isSupported())
                  return void e7.vmError.emit("hls.js is not supported");
                e7.hls = new i4(e7.config), e7.hls.on(i4.Events.MEDIA_ATTACHED, () => {
                  e7.hasAttached = true, e7.onSrcChange();
                }), e7.hls.on(i4.Events.AUDIO_TRACKS_UPDATED, () => {
                  e7.dispatch("audioTracks", e7.hls.audioTracks), e7.dispatch("currentAudioTrack", e7.hls.audioTrack);
                }), e7.hls.on(i4.Events.AUDIO_TRACK_SWITCHED, () => {
                  e7.dispatch("currentAudioTrack", e7.hls.audioTrack);
                }), e7.hls.on(i4.Events.ERROR, (t9, n5) => {
                  if (n5.fatal)
                    switch (n5.type) {
                      case i4.ErrorTypes.NETWORK_ERROR:
                        e7.hls.startLoad();
                        break;
                      case i4.ErrorTypes.MEDIA_ERROR:
                        e7.hls.recoverMediaError();
                        break;
                      default:
                        e7.destroyHls();
                    }
                  e7.vmError.emit({event: t9, data: n5});
                }), e7.hls.on(i4.Events.MANIFEST_PARSED, () => {
                  e7.dispatch("mediaType", B6.Video), e7.dispatch("currentSrc", e7.src), e7.dispatchLevels();
                }), e7.hls.on(i4.Events.LEVEL_LOADED, (t9, i5) => {
                  e7.playbackReady || (e7.dispatch("duration", i5.details.totalduration), e7.dispatch("playbackReady", true));
                }), e7.hls.attachMedia(e7.mediaEl);
              } catch (t9) {
                e7.vmError.emit(t9);
              }
          })();
        }
        dispatchLevels() {
          this.hls.levels && this.hls.levels.length !== 0 && (this.dispatch("playbackQualities", ["Auto", ...this.hls.levels.map(this.levelToPlaybackQuality)]), this.dispatch("playbackQuality", "Auto"));
        }
        levelToPlaybackQuality(e7) {
          return e7 === -1 ? "Auto" : "".concat(e7.height, "p");
        }
        findLevelIndexFromQuality(e7) {
          return this.hls.levels.findIndex((t8) => this.levelToPlaybackQuality(t8) === e7);
        }
        destroyHls() {
          var e7;
          (e7 = this.hls) === null || e7 === void 0 || e7.destroy(), this.hasAttached = false;
        }
        onMediaElChange(e7) {
          var t8 = this;
          return a4(function* () {
            t8.destroyHls(), v5(e7.detail) || (t8.mediaEl = e7.detail, setTimeout(a4(function* () {
              yield t8.setupHls();
            }), 50));
          })();
        }
        onSrcChange() {
          var e7 = this;
          return a4(function* () {
            e7.hasAttached && e7.hls.url !== e7.src && (e7.vmLoadStart.emit(), e7.hls.loadSource(e7.src));
          })();
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, s5, o5, r6, l4, c4, d5 = (t8 = yield (i4 = e7.videoProvider) === null || i4 === void 0 ? void 0 : i4.getAdapter()) !== null && t8 !== void 0 ? t8 : {}, h4 = d5.canPlay;
            return n4(n4({}, d5), {}, {getInternalPlayer: (c4 = a4(function* () {
              return e7.hls;
            }), function() {
              return c4.apply(this, arguments);
            }), canPlay: (l4 = a4(function* (e8) {
              var t9;
              return f3(e8) && he4.test(e8) || (t9 = h4 == null ? void 0 : h4(e8)) !== null && t9 !== void 0 && t9;
            }), function(e8) {
              return l4.apply(this, arguments);
            }), canSetPlaybackQuality: (r6 = a4(function* () {
              var t9, i5;
              return ((t9 = e7.hls) === null || t9 === void 0 || (i5 = t9.levels) === null || i5 === void 0 ? void 0 : i5.length) > 0;
            }), function() {
              return r6.apply(this, arguments);
            }), setPlaybackQuality: (o5 = a4(function* (t9) {
              v5(e7.hls) || (e7.hls.currentLevel = e7.findLevelIndexFromQuality(t9), e7.dispatch("playbackQuality", t9));
            }), function(e8) {
              return o5.apply(this, arguments);
            }), setCurrentAudioTrack: (s5 = a4(function* (t9) {
              v5(e7.hls) || (e7.hls.audioTrack = t9);
            }), function(e8) {
              return s5.apply(this, arguments);
            })});
          })();
        }
        render() {
          return (0, ei.h)("vm-video", {willAttach: true, crossOrigin: this.crossOrigin, preload: this.preload, poster: this.poster, controlsList: this.controlsList, autoPiP: this.autoPiP, disablePiP: this.disablePiP, disableRemotePlayback: this.disableRemotePlayback, mediaTitle: this.mediaTitle, ref: (e7) => {
            this.videoProvider = e7;
          }}, (0, ei.h)("slot", null));
        }
      }, kt4 = "https://cdn.jsdelivr.net/npm/@vime/core@latest/icons", Tt4 = new Map(Object.entries({vime: (e7) => "".concat(kt4, "/vime/vm-").concat(e7, ".svg"), material: (e7) => "".concat(kt4, "/material/md-").concat(e7, ".svg")})), Ct4 = new Set(), $t4 = new Map(), wt4 = (e7) => {
        if ($t4.has(e7))
          return $t4.get(e7);
        var t8 = fetch(e7).then(function() {
          var e8 = a4(function* (e9) {
            if (e9.ok) {
              var t9 = document.createElement("div");
              t9.innerHTML = yield e9.text();
              var i4 = t9.firstElementChild;
              return {ok: e9.ok, status: e9.status, svg: i4 && i4.tagName.toLowerCase() === "svg" ? i4.outerHTML : ""};
            }
            return {ok: e9.ok, status: e9.status};
          });
          return function(t9) {
            return e8.apply(this, arguments);
          };
        }());
        return $t4.set(e7, t8), t8;
      }, St4 = new DOMParser(), xt4 = class extends HTMLElement {
        constructor() {
          var e7, t8;
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmLoad = (0, ei.createEvent)(this, "vmLoad", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.icons = "material", ie4(this), e7 = this, t8 = (0, ei.getElement)(e7), D5(e7, () => {
            Ct4.add(t8);
          }, () => {
            Ct4.delete(t8);
          });
        }
        handleChange() {
          this.setIcon();
        }
        connectedCallback() {
          Q6(this, ["icons"]);
        }
        componentDidLoad() {
          this.setIcon();
        }
        redraw() {
          var e7 = this;
          return a4(function* () {
            e7.setIcon();
          })();
        }
        getLabel() {
          var e7 = "";
          return this.label ? e7 = this.label : this.name ? e7 = this.name.replace(/-/g, " ") : this.src && (e7 = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "")), e7;
        }
        setIcon() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5 = (i4 = (t8 = e7.library) !== null && t8 !== void 0 ? t8 : e7.icons, Tt4.get(i4)), s5 = e7.src;
            if (e7.name && n5 && (s5 = n5(e7.name)), s5)
              try {
                var o5 = yield wt4(s5);
                if (o5.ok) {
                  var a5 = St4.parseFromString(o5.svg, "text/html").body.querySelector("svg");
                  a5 ? (e7.svg = a5.outerHTML, e7.vmLoad.emit()) : (e7.svg = "", e7.vmError.emit({status: o5.status}));
                }
              } catch (t9) {
                e7.vmError.emit();
              }
          })();
        }
        render() {
          return (0, ei.h)("div", {class: "icon", role: "img", "aria-label": this.getLabel(), innerHTML: this.svg});
        }
        static get watchers() {
          return {name: ["handleChange"], src: ["handleChange"], library: ["handleChange"], icons: ["handleChange"]};
        }
        static get style() {
          return ":host{display:inline-block;width:1em;height:1em;contain:strict;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%;transition:var(--vm-icon-transition);transform:var(--vm-icon-transform);fill:var(--vm-icon-fill, currentColor);stroke:var(--vm-icon-stroke)}";
        }
      }, Vt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.icons = "material", ie4(this), Q6(this, ["icons"]);
        }
        handleUpdate() {
          this.register();
        }
        connectedCallback() {
          this.register();
        }
        disconnectedCallback() {
          var e7;
          v5(this.name) || (e7 = this.name, Tt4.delete(e7));
        }
        register() {
          var e7, t8, i4;
          t8 = (e7 = this.name) !== null && e7 !== void 0 ? e7 : this.icons, i4 = this.name ? this.resolver : void 0, v5(i4) || Tt4.set(t8, i4), Ct4.forEach((e8) => {
            e8.library === t8 && e8.redraw();
          });
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {name: ["handleUpdate"], resolver: ["handleUpdate"], icons: ["handleUpdate"]};
        }
      }, Pt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.isLive = false, this.i18n = {}, ie4(this), Q6(this, ["isLive", "i18n"]);
        }
        render() {
          return (0, ei.h)("div", {class: {liveIndicator: true, hidden: !this.isLive}}, (0, ei.h)("div", {class: "indicator"}), this.i18n.live);
        }
        static get style() {
          return ".liveIndicator{display:flex;align-items:center;font-size:13px;font-weight:bold;letter-spacing:0.6px;color:var(--vm-control-color)}.liveIndicator.hidden{display:none}.indicator{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;background-color:var(--vm-live-indicator-color, red)}";
        }
      }, Et4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.playbackReady = false, this.hideDots = false, ie4(this), Q6(this, ["playbackReady"]);
        }
        render() {
          return (0, ei.h)("div", {class: {loadingScreen: true, inactive: this.playbackReady}}, (0, ei.h)("slot", null), !this.hideDots && (0, ei.h)("div", {class: "dotPulse"}));
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-loading-screen-z-index);display:flex;align-items:center;justify-content:center}.loadingScreen{opacity:100;transition:var(--vm-fade-transition)}.loadingScreen.inactive{opacity:0}.dotPulse{position:relative;left:-9999px;width:var(--vm-loading-screen-dot-size);height:var(--vm-loading-screen-dot-size);border-radius:calc(var(--vm-loading-screen-dot-size) / 2);background-color:var(--vm-loading-screen-dot-color);color:var(--vm-loading-screen-dot-color);box-shadow:9999px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color);animation:dotPulse var(--vm-loading-screen-pulse-duration) infinite linear;animation-delay:calc(var(--vm-loading-screen-pulse-duration) / 6)}.dotPulse::before,.dotPulse::after{content:'';display:inline-block;position:absolute;top:0;width:var(--vm-loading-screen-dot-size);height:var(--vm-loading-screen-dot-size);border-radius:calc(var(--vm-loading-screen-dot-size) / 2);background-color:var(--vm-loading-screen-dot-color);color:var(--vm-loading-screen-dot-color)}.dotPulse::before{box-shadow:9984px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color);animation:dotPulseBefore var(--vm-loading-screen-pulse-duration) infinite linear;animation-delay:0s}.dotPulse::after{box-shadow:10014px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color);animation:dotPulseAfter var(--vm-loading-screen-pulse-duration) infinite linear;animation-delay:calc(var(--vm-loading-screen-pulse-duration) / 3)}@keyframes dotPulseBefore{0%{box-shadow:9984px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color)}30%{box-shadow:9984px 0 0 2px var(--vm-loading-screen-dot-color)}60%,100%{box-shadow:9984px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color)}}@keyframes dotPulse{0%{box-shadow:9999px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color)}30%{box-shadow:9999px 0 0 2px var(--vm-loading-screen-dot-color)}60%,100%{box-shadow:9999px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color)}}@keyframes dotPulseAfter{0%{box-shadow:10014px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color)}30%{box-shadow:10014px 0 0 2px var(--vm-loading-screen-dot-color)}60%,100%{box-shadow:10014px 0 0 calc(calc(var(--vm-loading-screen-dot-size) / 2) * -1) var(--vm-loading-screen-dot-color)}}";
        }
      };
      function At4(e7) {
        if (v5(e7))
          return [];
        var t8 = ["vm-menu-item", "vm-menu-radio-group", "vm-submenu"];
        return Array.from(e7 != null ? e7 : []).filter((e8) => t8.includes(e8.tagName.toLowerCase())).map((e8) => function(e9) {
          return e9.tagName.toLowerCase() !== "vm-submenu" ? e9 : e9.shadowRoot.querySelector("vm-menu-item");
        }(e8)).map((e8) => function(e9) {
          var t9;
          if (e9.tagName.toLowerCase() !== "vm-menu-radio-group")
            return e9;
          var i4 = e9.shadowRoot.querySelector("slot");
          return Array.from((t9 = i4 == null ? void 0 : i4.assignedElements()) !== null && t9 !== void 0 ? t9 : []).filter((e10) => e10.tagName.toLowerCase() === "vm-menu-radio").map((e10) => e10.shadowRoot.querySelector("vm-menu-item"));
        }(e8)).reduce((e8, t9) => e8.concat(t9), []);
      }
      var Rt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmOpen = (0, ei.createEvent)(this, "vmOpen", 7), this.vmClose = (0, ei.createEvent)(this, "vmClose", 7), this.vmFocus = (0, ei.createEvent)(this, "vmFocus", 7), this.vmBlur = (0, ei.createEvent)(this, "vmBlur", 7), this.vmActiveSubmenuChange = (0, ei.createEvent)(this, "vmActiveSubmenuChange", 7), this.vmActiveMenuItemChange = (0, ei.createEvent)(this, "vmActiveMenuItemChange", 7), this.vmMenuHeightChange = (0, ei.createEvent)(this, "vmMenuHeightChange", 3), this.hasDisconnected = false, this.active = false, ie4(this);
        }
        onActiveMenuitemChange() {
          this.vmActiveMenuItemChange.emit(this.activeMenuItem);
        }
        onActiveSubmenuChange() {
          this.vmActiveSubmenuChange.emit(this.activeSubmenu);
        }
        onActiveChange() {
          var e7;
          this.hasDisconnected || (this.active ? this.vmOpen.emit(this.host) : this.vmClose.emit(this.host), ((e7 = this.controller) === null || e7 === void 0 ? void 0 : e7.tagName.toLowerCase()) === "vm-menu-item" && (this.controller.expanded = true));
        }
        connectedCallback() {
          this.hasDisconnected = false;
        }
        componentDidRender() {
          (0, ei.writeTask)(() => {
            this.hasDisconnected || this.calculateHeight();
          });
        }
        disconnectedCallback() {
          this.controller = void 0, this.hasDisconnected = true;
        }
        focusMenu() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.menu) === null || t8 === void 0 || t8.focus();
          })();
        }
        blurMenu() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.menu) === null || t8 === void 0 || t8.blur();
          })();
        }
        getActiveMenuItem() {
          var e7 = this;
          return a4(function* () {
            return e7.activeMenuItem;
          })();
        }
        setActiveMenuItem(e7) {
          var t8 = this;
          return a4(function* () {
            e7 == null || e7.focusItem(), t8.activeMenuItem = e7;
          })();
        }
        calculateHeight() {
          var e7 = this;
          return a4(function* () {
            var t8 = 0;
            if (e7.activeSubmenu) {
              var i4, n5 = yield e7.activeSubmenu.getMenu();
              t8 = (i4 = yield n5 == null ? void 0 : n5.calculateHeight()) !== null && i4 !== void 0 ? i4 : 0, t8 += yield e7.activeSubmenu.getControllerHeight();
            } else {
              var s5, o5 = (s5 = e7.container) === null || s5 === void 0 ? void 0 : s5.firstChild.assignedElements({flatten: true});
              o5 == null || o5.forEach((e8) => {
                t8 += parseFloat(window.getComputedStyle(e8).height);
              });
            }
            return e7.vmMenuHeightChange.emit(t8), t8;
          })();
        }
        onOpenSubmenu(e7) {
          e7.stopPropagation(), v5(this.activeSubmenu) || (this.activeSubmenu.active = false), this.activeSubmenu = e7.detail, this.getChildren().forEach((e8) => {
            e8 !== this.activeSubmenu && (e8.style.opacity = "0", e8.style.visibility = "hidden");
          }), (0, ei.writeTask)(() => {
            this.activeSubmenu.active = true;
          });
        }
        onCloseSubmenu(e7) {
          e7 == null || e7.stopPropagation(), v5(this.activeSubmenu) || (this.activeSubmenu.active = false), this.getChildren().forEach((e8) => {
            e8 !== this.activeSubmenu && (e8.style.opacity = "", e8.style.visibility = "");
          }), (0, ei.writeTask)(() => {
            this.activeSubmenu = void 0;
          });
        }
        onWindowClick() {
          this.onCloseSubmenu(), this.onClose();
        }
        onWindowKeyDown(e7) {
          this.active && e7.key === "Escape" && (this.onCloseSubmenu(), this.onClose(), this.focusController());
        }
        getChildren() {
          var e7, t8 = (e7 = this.host.shadowRoot.querySelector("slot")) === null || e7 === void 0 ? void 0 : e7.assignedElements({flatten: true});
          return t8 != null ? t8 : [];
        }
        getMenuItems() {
          var e7;
          return At4((e7 = this.host.shadowRoot.querySelector("slot")) === null || e7 === void 0 ? void 0 : e7.assignedElements({flatten: true}));
        }
        focusController() {
          var e7, t8, i4;
          if (v5((e7 = this.controller) === null || e7 === void 0 ? void 0 : e7.focusItem))
            if (v5((t8 = this.controller) === null || t8 === void 0 ? void 0 : t8.focusControl)) {
              var n5;
              (n5 = this.controller) === null || n5 === void 0 || n5.focus();
            } else {
              var s5;
              (s5 = this.controller) === null || s5 === void 0 || s5.focusControl();
            }
          else
            (i4 = this.controller) === null || i4 === void 0 || i4.focusItem();
        }
        triggerMenuItem() {
          var e7;
          v5(this.activeMenuItem) || (this.activeMenuItem.click(), (e7 = this.activeMenuItem.menu) === null || e7 === void 0 || e7.focusMenu());
        }
        onClose() {
          this.activeMenuItem = void 0, this.active = false;
        }
        onClick(e7) {
          e7.stopPropagation();
        }
        onFocus() {
          var e7;
          this.active = true, [this.activeMenuItem] = this.getMenuItems(), (e7 = this.activeMenuItem) === null || e7 === void 0 || e7.focusItem(), this.vmFocus.emit();
        }
        onBlur() {
          this.vmBlur.emit();
        }
        foucsMenuItem(e7, t8) {
          t8 < 0 && (t8 = e7.length - 1), t8 > e7.length - 1 && (t8 = 0), this.activeMenuItem = e7[t8], this.activeMenuItem.focusItem();
        }
        onKeyDown(e7) {
          if (this.active) {
            e7.preventDefault(), e7.stopPropagation();
            var t8 = this.getMenuItems(), i4 = t8.findIndex((e8) => e8 === this.activeMenuItem);
            switch (e7.key) {
              case "Escape":
                this.onClose(), this.focusController();
                break;
              case "ArrowDown":
              case "Tab":
                this.foucsMenuItem(t8, i4 += 1);
                break;
              case "ArrowUp":
                this.foucsMenuItem(t8, i4 -= 1);
                break;
              case "ArrowLeft":
                this.onClose(), this.focusController();
                break;
              case "ArrowRight":
              case "Enter":
              case " ":
                this.triggerMenuItem();
                break;
              case "Home":
              case "PageUp":
                this.foucsMenuItem(t8, 0);
                break;
              case "End":
              case "PageDown":
                this.foucsMenuItem(t8, t8.length - 1);
            }
          }
        }
        render() {
          var e7, t8, i4;
          return (0, ei.h)("div", {id: this.identifier, class: {menu: true, slideIn: !v5(this.slideInDirection), slideInFromLeft: this.slideInDirection === "left", slideInFromRight: this.slideInDirection === "right"}, role: "menu", tabindex: "-1", "aria-labelledby": (e7 = (t8 = this.controller) === null || t8 === void 0 ? void 0 : t8.identifier) !== null && e7 !== void 0 ? e7 : (i4 = this.controller) === null || i4 === void 0 ? void 0 : i4.id, "aria-hidden": this.active ? "false" : "true", onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onClick: this.onClick.bind(this), onKeyDown: this.onKeyDown.bind(this), ref: (e8) => {
            this.menu = e8;
          }}, (0, ei.h)("div", {class: "container", ref: (e8) => {
            this.container = e8;
          }}, (0, ei.h)("slot", null)));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {activeMenuItem: ["onActiveMenuitemChange"], activeSubmenu: ["onActiveSubmenuChange"], active: ["onActiveChange"]};
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;z-index:var(--vm-menu-z-index)}:host([active]){pointer-events:auto;z-index:calc(var(--vm-menu-z-index) + 1)}.menu{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;transition:var(--vm-menu-transition)}.menu.slideIn{transform:translateX(0)}.menu[aria-hidden='true'].slideInFromLeft{transform:translateX(-100%)}.menu[aria-hidden='true'].slideInFromRight{transform:translateX(100%)}.container{display:flex;flex-direction:column;position:relative;text-align:left;width:100%;height:100%;color:var(--vm-menu-color);background:var(--vm-menu-bg);font-size:var(--vm-menu-font-size);font-weight:var(--vm-menu-font-weight)}.menu:focus{outline:0}";
        }
      }, Mt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmFocus = (0, ei.createEvent)(this, "vmFocus", 7), this.vmBlur = (0, ei.createEvent)(this, "vmBlur", 7), this.showTapHighlight = false, this.hidden = false, this.checkIcon = "check", this.isTouch = false, ie4(this), Q6(this, ["isTouch"]);
        }
        focusItem() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.menuItem) === null || t8 === void 0 || t8.focus();
          })();
        }
        blurItem() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.menuItem) === null || t8 === void 0 || t8.blur();
          })();
        }
        getHeight() {
          var e7 = this;
          return a4(function* () {
            return parseFloat(e7.menuItem ? window.getComputedStyle(e7.menuItem).height : "0");
          })();
        }
        onClick() {
          p3(this.menu) || (this.menu.active = !this.expanded);
        }
        onFocus() {
          this.vmFocus.emit();
        }
        onBlur() {
          this.vmBlur.emit();
        }
        onTouchStart() {
          this.showTapHighlight = true;
        }
        onTouchEnd() {
          setTimeout(() => {
            this.showTapHighlight = false;
          }, 100);
        }
        onMouseLeave() {
          var e7;
          (e7 = this.menuItem) === null || e7 === void 0 || e7.blur();
        }
        render() {
          var e7, t8, i4, n5, s5 = !v5(this.checked), o5 = !v5(this.menu), a5 = this.expanded ? "true" : "false", r6 = this.checked ? "true" : "false", l4 = s5 && !v5(this.checkIcon), c4 = o5 && this.expanded, d5 = o5 && !this.expanded, h4 = !(v5(this.hint) || s5 || o5 && this.expanded), u4 = !v5(this.badge) && !h4 && !d5, m5 = h4 || d5;
          return (0, ei.h)("div", {class: {menuItem: true, notTouch: !this.isTouch, tapHighlight: this.showTapHighlight, showDivider: o5 && (e7 = this.expanded) !== null && e7 !== void 0 && e7}, id: this.identifier, role: s5 ? "menuitemradio" : "menuitem", tabindex: "0", "aria-label": this.label, "aria-hidden": this.hidden ? "true" : "false", "aria-haspopup": o5 ? "true" : void 0, "aria-controls": (t8 = (i4 = this.menu) === null || i4 === void 0 ? void 0 : i4.identifier) !== null && t8 !== void 0 ? t8 : (n5 = this.menu) === null || n5 === void 0 ? void 0 : n5.id, "aria-expanded": o5 ? a5 : void 0, "aria-checked": s5 ? r6 : void 0, onClick: this.onClick.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onTouchStart: this.onTouchStart.bind(this), onTouchEnd: this.onTouchEnd.bind(this), onMouseLeave: this.onMouseLeave.bind(this), ref: (e8) => {
            this.menuItem = e8;
          }}, l4 && (0, ei.h)("vm-icon", {name: this.checkIcon, library: this.icons}), c4 && (0, ei.h)("span", {class: "arrow left"}), this.label, m5 && (0, ei.h)("span", {class: "spacer"}), h4 && (0, ei.h)("span", {class: "hint"}, this.hint), u4 && (0, ei.h)("span", {class: "badge"}, this.badge), d5 && (0, ei.h)("span", {class: "arrow right"}));
        }
        get host() {
          return this;
        }
        static get style() {
          return ":host{display:block}.menuItem{display:flex;position:relative;align-items:center;flex-direction:row;cursor:pointer;color:var(--vm-menu-color);background:var(--vm-menu-bg);font-size:var(--vm-menu-font-size);font-weight:var(--vm-menu-font-weight);padding:var(--vm-menu-item-padding);touch-action:manipulation;box-sizing:border-box}.menuItem:focus{outline:0}.menuItem.hidden{display:none}.menuItem.tapHighlight{background:var(--vm-menu-item-tap-highlight)}.menuItem.showDivider{border-bottom:0.5px solid var(--vm-menu-item-divider-color)}.menuItem.notTouch:hover,.menuItem.notTouch:focus{outline:0;color:var(--vm-menu-item-focus-color);background-color:var(--vm-menu-item-focus-bg)}.menuItem[aria-expanded='true']{position:absolute;z-index:2;top:0;width:100%}.menuItem[aria-hidden='true']{display:none}.menuItem[aria-checked='true'] vm-icon{opacity:1;visibility:visible}vm-icon{display:inline-block}vm-icon{fill:currentColor;pointer-events:none;font-size:var(--vm-menu-item-check-icon-size);margin-right:10px;opacity:0;visibility:hidden;transition:var(--vm-fade-transition)}.hint{display:inline-block;margin-left:auto;overflow:hidden;pointer-events:none;margin-right:6px;font-size:var(--vm-menu-item-hint-font-size);opacity:var(--vm-menu-item-hint-opacity);color:var(--vm-menu-item-hint-color)}.badge{display:inline-block;line-height:1;overflow:hidden;pointer-events:none;margin-left:6px;color:var(--vm-menu-item-badge-color);background:var(--vm-menu-item-badge-bg);font-size:var(--vm-menu-item-badge-font-size)}.spacer{flex:1}.arrow{color:var(--vm-menu-item-arrow-color);border:2px solid;padding:2px;display:inline-block;border-width:0 2px 2px 0}.arrow.left{margin-right:6px;transform:rotate(135deg)}.arrow.right{transform:rotate(-45deg);opacity:0.38}";
        }
      }, Lt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmCheck = (0, ei.createEvent)(this, "vmCheck", 7), this.checked = false, this.checkIcon = "check", ie4(this);
        }
        onClick() {
          this.checked = true, this.vmCheck.emit();
        }
        render() {
          return (0, ei.h)("vm-menu-item", {label: this.label, checked: this.checked, badge: this.badge, checkIcon: this.checkIcon, icons: this.icons, onClick: this.onClick.bind(this)});
        }
      }, It4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmCheck = (0, ei.createEvent)(this, "vmCheck", 7), ie4(this);
        }
        onValueChange() {
          var e7;
          (e7 = this.findRadios()) === null || e7 === void 0 || e7.forEach((e8) => {
            e8.checked = e8.value === this.value;
          });
        }
        connectedCallback() {
          this.onValueChange();
        }
        componentDidLoad() {
          this.onValueChange();
        }
        onSelectionChange(e7) {
          var t8 = e7.target;
          this.value = t8.value;
        }
        findRadios() {
          var e7;
          return (e7 = this.host.shadowRoot.querySelector("slot")) === null || e7 === void 0 ? void 0 : e7.assignedElements();
        }
        render() {
          return (0, ei.h)("slot", null);
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {value: ["onValueChange"]};
        }
      }, Dt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmFocus = (0, ei.createEvent)(this, "vmFocus", 7), this.vmBlur = (0, ei.createEvent)(this, "vmBlur", 7), this.lowVolumeIcon = "volume-low", this.highVolumeIcon = "volume-high", this.mutedIcon = "volume-mute", this.tooltipPosition = "top", this.hideTooltip = false, this.keys = "m", this.volume = 50, this.muted = false, this.i18n = {}, ie4(this), Q6(this, ["muted", "volume", "i18n"]);
        }
        connectedCallback() {
          this.dispatch = w4(this);
        }
        getIcon() {
          var e7 = this.volume < 50 ? this.lowVolumeIcon : this.highVolumeIcon;
          return this.muted || this.volume === 0 ? this.mutedIcon : e7;
        }
        onClick() {
          this.dispatch("muted", !this.muted);
        }
        render() {
          var e7 = this.muted ? this.i18n.unmute : this.i18n.mute, t8 = v5(this.keys) ? e7 : "".concat(e7, " (").concat(this.keys, ")");
          return (0, ei.h)("vm-control", {label: this.i18n.mute, pressed: this.muted, keys: this.keys, onClick: this.onClick.bind(this)}, (0, ei.h)("vm-icon", {name: this.getIcon(), library: this.icons}), (0, ei.h)("vm-tooltip", {hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection}, t8));
        }
      }, Ft4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.canSetPiP = false, this.enterIcon = "pip-enter", this.exitIcon = "pip-exit", this.tooltipPosition = "top", this.hideTooltip = false, this.keys = "p", this.isPiPActive = false, this.i18n = {}, this.playbackReady = false, ie4(this), Q6(this, ["isPiPActive", "playbackReady", "i18n"]);
        }
        onPlaybackReadyChange() {
          var e7 = this;
          return a4(function* () {
            var t8, i4 = oe4(e7);
            e7.canSetPiP = (t8 = yield i4 == null ? void 0 : i4.canSetPiP()) !== null && t8 !== void 0 && t8;
          })();
        }
        componentDidLoad() {
          this.onPlaybackReadyChange();
        }
        onClick() {
          var e7 = oe4(this);
          this.isPiPActive ? e7 == null || e7.exitPiP() : e7 == null || e7.enterPiP();
        }
        render() {
          var e7 = this.isPiPActive ? this.i18n.exitPiP : this.i18n.enterPiP, t8 = v5(this.keys) ? e7 : "".concat(e7, " (").concat(this.keys, ")");
          return (0, ei.h)(ei.Host, {hidden: !this.canSetPiP}, (0, ei.h)("vm-control", {label: this.i18n.pip, keys: this.keys, pressed: this.isPiPActive, hidden: !this.canSetPiP, onClick: this.onClick.bind(this)}, (0, ei.h)("vm-icon", {name: this.isPiPActive ? this.exitIcon : this.enterIcon, library: this.icons}), (0, ei.h)("vm-tooltip", {hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection}, t8)));
        }
        static get watchers() {
          return {playbackReady: ["onPlaybackReadyChange"]};
        }
        static get style() {
          return ":host([hidden]){display:none}";
        }
      }, Ht4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.playIcon = "play", this.pauseIcon = "pause", this.tooltipPosition = "top", this.hideTooltip = false, this.keys = "k", this.paused = true, this.i18n = {}, ie4(this), Q6(this, ["paused", "i18n"]);
        }
        connectedCallback() {
          this.dispatch = w4(this);
        }
        onClick() {
          this.dispatch("paused", !this.paused);
        }
        render() {
          var e7 = this.paused ? this.i18n.play : this.i18n.pause, t8 = v5(this.keys) ? e7 : "".concat(e7, " (").concat(this.keys, ")");
          return (0, ei.h)("vm-control", {label: this.i18n.playback, keys: this.keys, pressed: !this.paused, onClick: this.onClick.bind(this)}, (0, ei.h)("vm-icon", {name: this.paused ? this.playIcon : this.pauseIcon, library: this.icons}), (0, ei.h)("vm-tooltip", {hidden: this.hideTooltip, position: this.tooltipPosition, direction: this.tooltipDirection}, t8));
        }
      }, Nt4 = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]];
      class zt4 {
        constructor(e7, t8) {
          this.el = e7, this.listener = t8, this.disposal = new q8(), this.api = (() => {
            for (var e8, t9 = {prefixed: false}, i4 = Nt4[0], n5 = 0; n5 < Nt4.length; n5 += 1)
              if (Nt4[n5][1] in document) {
                e8 = Nt4[n5];
                break;
              }
            if (e8) {
              for (var s5 = 0; s5 < e8.length; s5 += 1)
                t9[i4[s5]] = e8[s5];
              t9.prefixed = e8[0] !== i4[0];
            }
            return t9;
          })(), this.isSupported && (this.disposal.add(A5(this.el, this.api.fullscreenchange, this.onFullscreenChange.bind(this))), document.webkitExitFullscreen && this.disposal.add(A5(this.el, "webkitfullscreenchange", this.onFullscreenChange.bind(this))), document.mozCancelFullScreen && this.disposal.add(A5(this.el, "mozfullscreenchange", this.onFullscreenChange.bind(this))));
        }
        enterFullscreen(e7) {
          var t8 = this;
          return a4(function* () {
            if (!t8.isSupported)
              throw Error("Fullscreen API is not available.");
            return t8.el[t8.api.requestFullscreen](e7);
          })();
        }
        exitFullscreen() {
          var e7 = this;
          return a4(function* () {
            if (!e7.isSupported)
              throw Error("Fullscreen API is not available.");
            if (!e7.isActive)
              throw Error("Player is not currently in fullscreen mode to exit.");
            return document[e7.api.exitFullscreen]();
          })();
        }
        get isActive() {
          if (!this.isSupported)
            return false;
          var e7 = document[this.api.fullscreenElement];
          return this.el === e7 || this.el.matches(":".concat(this.api.fullscreen)) || this.el.contains(e7);
        }
        get isSupported() {
          return !v5(this.api.requestFullscreen);
        }
        onFullscreenChange() {
          this.listener(this.isActive);
        }
        destroy() {
          this.disposal.empty();
        }
      }
      class Ot4 {
        constructor() {
          this.silent = false;
        }
        log() {
          for (var e7 = arguments.length, t8 = new Array(e7), i4 = 0; i4 < e7; i4++)
            t8[i4] = arguments[i4];
          this.silent || v5(console) || console.log("[Vime tip]:", ...t8);
        }
        warn() {
          for (var e7 = arguments.length, t8 = new Array(e7), i4 = 0; i4 < e7; i4++)
            t8[i4] = arguments[i4];
          this.silent || v5(console) || console.error("[Vime warn]:", ...t8);
        }
      }
      var _t5 = new Set();
      function Qt4(e7) {
        var t8 = (0, ei.getElement)(e7), i4 = new Map();
        D5(e7, () => {
          Object.keys(l3).forEach((t9) => {
            i4.set(t9, e7[t9]);
          });
        }, () => {
          i4.clear();
        });
        var {componentDidRender: n5} = e7;
        e7.componentDidRender = function() {
          n5 == null || n5();
          for (var s5 = Array.from(i4.keys()), o5 = 0; o5 < s5.length; o5 += 1) {
            var a5 = s5[o5], r6 = i4.get(a5), l4 = e7[a5];
            r6 !== l4 && (_4(t8, a5, l4, r6), i4.set(a5, l4));
          }
        };
      }
      var jt4 = new Set(["currentTime", "paused"]);
      function Bt4(e7) {
        var t8 = (0, ei.getElement)(e7), i4 = new Map(), n5 = new q8(), s5 = [];
        function o5() {
          return (o5 = a4(function* () {
            var t9 = yield e7.adapter;
            if (!v5(t9)) {
              for (var i5 = 0; i5 < s5.length; i5 += 1)
                yield s5[i5](t9);
              s5 = [];
            }
          })).apply(this, arguments);
        }
        var r6 = false;
        function c4(t9) {
          t9 == null || t9.stopImmediatePropagation(), r6 ? (s5 = [], (0, ei.writeTask)(() => {
            Object.keys(l3).filter(u3).forEach((t10) => {
              e7[t10] = l3[t10];
            });
          })) : r6 = true;
        }
        function h4(e8) {
          return m5.apply(this, arguments);
        }
        function m5() {
          return (m5 = a4(function* (t9) {
            t9.stopImmediatePropagation();
            var {by: i5, prop: n6, value: s6} = t9.detail;
            if (d4(n6)) {
              if (!e7.playbackStarted && jt4.has(n6)) {
                var o6 = yield e7.adapter;
                n6 !== "paused" || s6 || o6 == null || o6.play(), n6 === "currentTime" && (o6 == null || o6.play(), o6 == null || o6.setCurrentTime(s6));
              }
              (0, ei.writeTask)(() => {
                e7[n6] = s6;
              });
            } else {
              var a5;
              (a5 = e7.logger) === null || a5 === void 0 || a5.warn("".concat(i5.nodeName, " tried to change `").concat(n6, "` but it is readonly."));
            }
          })).apply(this, arguments);
        }
        var {onProviderDisconnect: p4} = e7;
        return e7.onProviderDisconnect = function() {
          c4(), p4 && p4.call(e7);
        }, D5(e7, () => {
          Object.keys(l3).forEach((t9) => {
            i4.set(t9, e7[t9]);
          }), n5.add(A5(t8, "vmLoadStart", c4)), n5.add(A5(t8, $2, h4));
        }, () => {
          i4.clear(), n5.empty();
        }), I3(e7, "componentWillRender", a4(function* () {
          e7.playbackReady && s5.length > 0 && (yield function() {
            return o5.apply(this, arguments);
          }());
        })), function() {
          var i5 = a4(function* (i6, n6) {
            if (function(t9, i7) {
              var n7;
              return i7 !== ((n7 = e7[be4]) === null || n7 === void 0 ? void 0 : n7.get(t9));
            }(i6, e7[i6])) {
              var o6 = e7[i6], r7 = function() {
                var e8 = a4(function* (e9) {
                  try {
                    var i7;
                    yield e9 == null || (i7 = e9[n6]) === null || i7 === void 0 ? void 0 : i7.call(e9, o6);
                  } catch (e10) {
                    t8.dispatchEvent(new CustomEvent("vmError", {detail: e10}));
                  }
                });
                return function(t9) {
                  return e8.apply(this, arguments);
                };
              }();
              e7.playbackReady ? yield r7(yield e7.adapter) : s5.push(r7);
            }
          });
          return function(e8, t9) {
            return i5.apply(this, arguments);
          };
        }();
      }
      var Wt4, Ut4 = 0, qt4 = class extends HTMLElement {
        constructor() {
          var e7, t8, i4;
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmThemeChange = (0, ei.createEvent)(this, "vmThemeChange", 7), this.vmPausedChange = (0, ei.createEvent)(this, "vmPausedChange", 7), this.vmPlay = (0, ei.createEvent)(this, "vmPlay", 7), this.vmPlayingChange = (0, ei.createEvent)(this, "vmPlayingChange", 7), this.vmSeekingChange = (0, ei.createEvent)(this, "vmSeekingChange", 7), this.vmSeeked = (0, ei.createEvent)(this, "vmSeeked", 7), this.vmBufferingChange = (0, ei.createEvent)(this, "vmBufferingChange", 7), this.vmDurationChange = (0, ei.createEvent)(this, "vmDurationChange", 7), this.vmCurrentTimeChange = (0, ei.createEvent)(this, "vmCurrentTimeChange", 7), this.vmReady = (0, ei.createEvent)(this, "vmReady", 7), this.vmPlaybackReady = (0, ei.createEvent)(this, "vmPlaybackReady", 7), this.vmPlaybackStarted = (0, ei.createEvent)(this, "vmPlaybackStarted", 7), this.vmPlaybackEnded = (0, ei.createEvent)(this, "vmPlaybackEnded", 7), this.vmBufferedChange = (0, ei.createEvent)(this, "vmBufferedChange", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.vmCurrentProviderChange = (0, ei.createEvent)(this, "vmCurrentProviderChange", 7), this.vmCurrentSrcChange = (0, ei.createEvent)(this, "vmCurrentSrcChange", 7), this.vmCurrentPosterChange = (0, ei.createEvent)(this, "vmCurrentPosterChange", 7), this.vmMediaTitleChange = (0, ei.createEvent)(this, "vmMediaTitleChange", 7), this.vmControlsChange = (0, ei.createEvent)(this, "vmControlsChange", 7), this.vmPlaybackRateChange = (0, ei.createEvent)(this, "vmPlaybackRateChange", 7), this.vmPlaybackRatesChange = (0, ei.createEvent)(this, "vmPlaybackRatesChange", 7), this.vmPlaybackQualityChange = (0, ei.createEvent)(this, "vmPlaybackQualityChange", 7), this.vmPlaybackQualitiesChange = (0, ei.createEvent)(this, "vmPlaybackQualitiesChange", 7), this.vmMutedChange = (0, ei.createEvent)(this, "vmMutedChange", 7), this.vmVolumeChange = (0, ei.createEvent)(this, "vmVolumeChange", 7), this.vmViewTypeChange = (0, ei.createEvent)(this, "vmViewTypeChange", 7), this.vmMediaTypeChange = (0, ei.createEvent)(this, "vmMediaTypeChange", 7), this.vmLiveChange = (0, ei.createEvent)(this, "vmLiveChange", 7), this.vmTouchChange = (0, ei.createEvent)(this, "vmTouchChange", 7), this.vmLanguageChange = (0, ei.createEvent)(this, "vmLanguageChange", 7), this.vmI18nChange = (0, ei.createEvent)(this, "vmI18nChange", 7), this.vmTranslationsChange = (0, ei.createEvent)(this, "vmTranslationsChange", 7), this.vmLanguagesChange = (0, ei.createEvent)(this, "vmLanguagesChange", 7), this.vmFullscreenChange = (0, ei.createEvent)(this, "vmFullscreenChange", 7), this.vmPiPChange = (0, ei.createEvent)(this, "vmPiPChange", 7), this.vmTextTracksChange = (0, ei.createEvent)(this, "vmTextTracksChange", 7), this.vmCurrentTextTrackChange = (0, ei.createEvent)(this, "vmCurrentTextTrackChange", 7), this.vmTextTrackVisibleChange = (0, ei.createEvent)(this, "vmTextTrackVisibleChange", 7), this.vmAudioTracksChange = (0, ei.createEvent)(this, "vmAudioTracksChange", 7), this.vmCurrentAudioTrackChange = (0, ei.createEvent)(this, "vmCurrentAudioTrackChange", 7), this.disposal = new q8(), this.logger = new Ot4(), this.icons = "vime", this.paused = true, this.playing = false, this.duration = -1, this.currentTime = 0, this.autoplay = false, this.ready = false, this.playbackReady = false, this.loop = false, this.muted = false, this.buffered = 0, this.playbackRate = 1, this.lastRateCheck = 1, this.playbackRates = [1], this.playbackQualities = [], this.seeking = false, this.debug = false, this.playbackStarted = false, this.playbackEnded = false, this.buffering = false, this.controls = false, this.isControlsActive = false, this.isSettingsActive = false, this.volume = 50, this.isFullscreenActive = false, this.aspectRatio = "16:9", this.isAudioView = false, this.isVideoView = false, this.isAudio = false, this.isVideo = false, this.isLive = false, this.isMobile = false, this.isTouch = false, this.isPiPActive = false, this.textTracks = [], this.currentTextTrack = -1, this.isTextTrackVisible = true, this.shouldRenderNativeTextTracks = true, this.audioTracks = [], this.currentAudioTrack = -1, this.autopause = true, this.playsinline = false, this.language = "en", this.translations = {en: r5}, this.languages = ["en"], this.i18n = r5, e7 = this, i4 = (0, ei.getElement)(e7), D5(e7, () => {
            t8 = A5(i4, F7, (e8) => {
              e8.stopPropagation(), e8.detail(i4);
            });
          }, () => {
            var e8;
            (e8 = t8) === null || e8 === void 0 || e8();
          }), ne4(this), function(e8) {
            var t9 = (0, ei.getElement)(e8);
            D5(e8, () => {
              _t5.add(t9);
            }, () => {
              _t5.delete(t9);
            });
          }(this), ke4(this), Qt4(this), this.safeAdapterCall = Bt4(this);
        }
        get adapter() {
          var e7;
          return (e7 = this.provider) === null || e7 === void 0 ? void 0 : e7.getAdapter();
        }
        onContainerChange() {
          var e7;
          (e7 = this.fullscreen) === null || e7 === void 0 || e7.destroy(), v5(this.container) || (this.fullscreen = new zt4(this.container, (e8) => {
            this.isFullscreenActive = e8, this.rotateDevice();
          }));
        }
        onPausedChange() {
          var e7, t8;
          this.paused ? this.playing = false : (e7 = this, t8 = (0, ei.getElement)(e7), _t5.forEach((e8) => {
            e8 !== t8 && e8.autopause && (e8.paused = true);
          })), this.safeAdapterCall("paused", this.paused ? "pause" : "play");
        }
        onDurationChange() {
          this.isLive = this.duration === 1 / 0;
        }
        onCurrentTimeChange() {
          var e7 = this.playbackReady ? this.duration : 1 / 0;
          this.currentTime = Math.max(0, Math.min(this.currentTime, e7)), this.safeAdapterCall("currentTime", "setCurrentTime");
        }
        onPlaybackReadyChange() {
          this.ready || (this.ready = true);
        }
        onMutedChange() {
          this.safeAdapterCall("muted", "setMuted");
        }
        onPlaybackRateChange(e7, t8) {
          var i4 = this;
          return a4(function* () {
            var n5, s5;
            if (e7 !== i4.lastRateCheck) {
              if (!(yield (n5 = yield i4.adapter) === null || n5 === void 0 || (s5 = n5.canSetPlaybackRate) === null || s5 === void 0 ? void 0 : s5.call(n5)))
                return i4.logger.log("provider cannot change `playbackRate`."), i4.lastRateCheck = t8, void (i4.playbackRate = t8);
              if (!i4.playbackRates.includes(e7))
                return i4.logger.log("invalid `playbackRate` of ".concat(e7, ", ") + "valid values are [".concat(i4.playbackRates.join(", "), "]")), i4.lastRateCheck = t8, void (i4.playbackRate = t8);
              i4.lastRateCheck = e7, i4.safeAdapterCall("playbackRate", "setPlaybackRate");
            }
          })();
        }
        onPlaybackQualityChange(e7, t8) {
          var i4 = this;
          return a4(function* () {
            var n5, s5;
            if (!v5(e7) && e7 !== i4.lastQualityCheck) {
              if (!(yield (n5 = yield i4.adapter) === null || n5 === void 0 || (s5 = n5.canSetPlaybackQuality) === null || s5 === void 0 ? void 0 : s5.call(n5)))
                return i4.logger.log("provider cannot change `playbackQuality`."), i4.lastQualityCheck = t8, void (i4.playbackQuality = t8);
              if (!i4.playbackQualities.includes(e7))
                return i4.logger.log("invalid `playbackQuality` of ".concat(e7, ", ") + "valid values are [".concat(i4.playbackQualities.join(", "), "]")), i4.lastQualityCheck = t8, void (i4.playbackQuality = t8);
              i4.lastQualityCheck = e7, i4.safeAdapterCall("playbackQuality", "setPlaybackQuality");
            }
          })();
        }
        onDebugChange() {
          this.logger.silent = !this.debug;
        }
        onVolumeChange() {
          var e7 = this;
          return a4(function* () {
            e7.volume = Math.max(0, Math.min(e7.volume, 100)), e7.safeAdapterCall("volume", "setVolume");
          })();
        }
        onViewTypeChange() {
          this.isAudioView = this.viewType === j5.Audio, this.isVideoView = this.viewType === j5.Video;
        }
        onMediaTypeChange() {
          this.isAudio = this.mediaType === B6.Audio, this.isVideo = this.mediaType === B6.Video;
        }
        onLanguageChange(e7, t8) {
          if (!this.languages.includes(this.language))
            return this.logger.log("invalid `language` of ".concat(this.language, ", ") + "valid values are [".concat(this.languages.join(", "), "]")), void (this.language = t8);
          this.i18n = this.translations[this.language];
        }
        onTranslationsChange() {
          Object.assign(this.translations, {en: r5}), this.languages = Object.keys(this.translations), this.i18n = this.translations[this.language];
        }
        onError(e7) {
          this.logger.warn(e7.detail);
        }
        getProvider() {
          var e7 = this;
          return a4(function* () {
            return e7.provider;
          })();
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            return e7.adapter;
          })();
        }
        play() {
          var e7 = this;
          return a4(function* () {
            var t8;
            return (t8 = yield e7.adapter) === null || t8 === void 0 ? void 0 : t8.play();
          })();
        }
        pause() {
          var e7 = this;
          return a4(function* () {
            var t8;
            return (t8 = yield e7.adapter) === null || t8 === void 0 ? void 0 : t8.pause();
          })();
        }
        canPlay(e7) {
          var t8 = this;
          return a4(function* () {
            var i4, n5;
            return (i4 = (n5 = yield t8.adapter) === null || n5 === void 0 ? void 0 : n5.canPlay(e7)) !== null && i4 !== void 0 && i4;
          })();
        }
        canAutoplay() {
          return a4(function* () {
            return Ue4();
          })();
        }
        canMutedAutoplay() {
          return a4(function* () {
            return Ue4(true);
          })();
        }
        canSetPlaybackRate() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5;
            return (t8 = (i4 = yield e7.adapter) === null || i4 === void 0 || (n5 = i4.canSetPlaybackRate) === null || n5 === void 0 ? void 0 : n5.call(i4)) !== null && t8 !== void 0 && t8;
          })();
        }
        canSetPlaybackQuality() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5;
            return (t8 = (i4 = yield e7.adapter) === null || i4 === void 0 || (n5 = i4.canSetPlaybackQuality) === null || n5 === void 0 ? void 0 : n5.call(i4)) !== null && t8 !== void 0 && t8;
          })();
        }
        canSetFullscreen() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5;
            return e7.fullscreen.isSupported || (t8 = (i4 = yield e7.adapter) === null || i4 === void 0 || (n5 = i4.canSetFullscreen) === null || n5 === void 0 ? void 0 : n5.call(i4)) !== null && t8 !== void 0 && t8;
          })();
        }
        enterFullscreen(e7) {
          var t8 = this;
          return a4(function* () {
            var i4, n5, s5, o5;
            if (!t8.isVideoView)
              throw Error("Cannot enter fullscreen on an audio player view.");
            if (t8.fullscreen.isSupported)
              return t8.fullscreen.enterFullscreen(e7);
            if (yield (i4 = yield t8.adapter) === null || i4 === void 0 || (n5 = i4.canSetFullscreen) === null || n5 === void 0 ? void 0 : n5.call(i4))
              return (s5 = yield t8.adapter) === null || s5 === void 0 || (o5 = s5.enterFullscreen) === null || o5 === void 0 ? void 0 : o5.call(s5, e7);
            throw Error("Fullscreen API is not available.");
          })();
        }
        exitFullscreen() {
          var e7 = this;
          return a4(function* () {
            var t8, i4;
            return e7.fullscreen.isSupported ? e7.fullscreen.exitFullscreen() : (t8 = yield e7.adapter) === null || t8 === void 0 || (i4 = t8.exitFullscreen) === null || i4 === void 0 ? void 0 : i4.call(t8);
          })();
        }
        canSetPiP() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5;
            return (t8 = (i4 = yield e7.adapter) === null || i4 === void 0 || (n5 = i4.canSetPiP) === null || n5 === void 0 ? void 0 : n5.call(i4)) !== null && t8 !== void 0 && t8;
          })();
        }
        enterPiP() {
          var e7 = this;
          return a4(function* () {
            var t8, i4;
            if (!e7.isVideoView)
              throw Error("Cannot enter PiP mode on an audio player view.");
            if (!(yield e7.canSetPiP()))
              throw Error("Picture-in-Picture API is not available.");
            return (t8 = yield e7.adapter) === null || t8 === void 0 || (i4 = t8.enterPiP) === null || i4 === void 0 ? void 0 : i4.call(t8);
          })();
        }
        exitPiP() {
          var e7 = this;
          return a4(function* () {
            var t8, i4;
            return (t8 = yield e7.adapter) === null || t8 === void 0 || (i4 = t8.exitPiP) === null || i4 === void 0 ? void 0 : i4.call(t8);
          })();
        }
        canSetAudioTrack() {
          var e7 = this;
          return a4(function* () {
            var t8;
            return !v5((t8 = yield e7.adapter) === null || t8 === void 0 ? void 0 : t8.setCurrentAudioTrack);
          })();
        }
        setCurrentAudioTrack(e7) {
          var t8 = this;
          return a4(function* () {
            var i4, n5;
            (i4 = yield t8.adapter) === null || i4 === void 0 || (n5 = i4.setCurrentAudioTrack) === null || n5 === void 0 || n5.call(i4, e7);
          })();
        }
        canSetTextTrack() {
          var e7 = this;
          return a4(function* () {
            var t8;
            return !v5((t8 = yield e7.adapter) === null || t8 === void 0 ? void 0 : t8.setCurrentTextTrack);
          })();
        }
        setCurrentTextTrack(e7) {
          var t8 = this;
          return a4(function* () {
            var i4, n5;
            (i4 = yield t8.adapter) === null || i4 === void 0 || (n5 = i4.setCurrentTextTrack) === null || n5 === void 0 || n5.call(i4, e7);
          })();
        }
        canSetTextTrackVisibility() {
          var e7 = this;
          return a4(function* () {
            var t8;
            return !v5((t8 = yield e7.adapter) === null || t8 === void 0 ? void 0 : t8.setTextTrackVisibility);
          })();
        }
        setTextTrackVisibility(e7) {
          var t8 = this;
          return a4(function* () {
            var i4, n5;
            (i4 = yield t8.adapter) === null || i4 === void 0 || (n5 = i4.setTextTrackVisibility) === null || n5 === void 0 || n5.call(i4, e7);
          })();
        }
        extendLanguage(e7, t8) {
          var i4 = this;
          return a4(function* () {
            var s5, o5 = n4(n4({}, i4.translations), {}, {[e7]: n4(n4({}, (s5 = i4.translations[e7]) !== null && s5 !== void 0 ? s5 : {}), t8)});
            i4.translations = o5;
          })();
        }
        connectedCallback() {
          var e7;
          this.onPausedChange(), this.onCurrentTimeChange(), this.onVolumeChange(), this.onMutedChange(), this.onDebugChange(), this.onContainerChange(), this.onTranslationsChange(), this.onLanguageChange(this.language, l3.language), this.disposal.add((e7 = (e8) => {
            this.isMobile = e8;
          }, !Ne4 || v5(window.ResizeObserver) ? (e7(Qe4), () => {
          }) : (e7(window.innerWidth <= 480 || Qe4), A5(window, "resize", function() {
            e7(window.innerWidth <= 480 || Qe4);
          })))), this.disposal.add(((e8) => {
            if (!Ne4)
              return () => {
              };
            var t8 = 0, i4 = A5(document, "touchstart", () => {
              t8 = new Date().getTime(), e8(true);
            }, true), n5 = A5(document, "mousemove", () => {
              new Date().getTime() - t8 < 500 || e8(false);
            }, true);
            return () => {
              i4(), n5();
            };
          })((e8) => {
            this.isTouch = e8;
          }));
        }
        componentWillLoad() {
          P7(this, this.getPlayerState());
        }
        disconnectedCallback() {
          var e7;
          (e7 = this.fullscreen) === null || e7 === void 0 || e7.destroy(), this.disposal.empty();
        }
        rotateDevice() {
          var e7 = this;
          return a4(function* () {
            if (e7.isMobile && Ne4 && window.screen.orientation && window.screen.orientation.lock)
              try {
                e7.isFullscreenActive ? yield window.screen.orientation.lock("landscape") : yield window.screen.orientation.unlock();
              } catch (t8) {
                e7.vmError.emit(t8);
              }
          })();
        }
        getPlayerState() {
          for (var e7 = {}, t8 = Object.keys(l3), i4 = 0; i4 < t8.length; i4 += 1)
            e7[t8[i4]] = this[t8[i4]];
          return e7;
        }
        calcAspectRatio() {
          var [e7, t8] = /\d{1,2}:\d{1,2}/.test(this.aspectRatio) ? this.aspectRatio.split(":") : [16, 9];
          return 100 / Number(e7) * Number(t8);
        }
        getContainer() {
          var e7 = this;
          return a4(function* () {
            return e7.container;
          })();
        }
        callAdapter(e7, t8) {
          var i4 = this;
          return a4(function* () {
            return (yield i4.adapter)[e7](t8);
          })();
        }
        hasCustomControls() {
          return se4(this, "vm-controls");
        }
        genId() {
          var e7, t8 = (e7 = this.host) === null || e7 === void 0 ? void 0 : e7.id;
          return f3(t8) && t8.length > 0 ? t8 : "vm-player-".concat(Ut4 += 1);
        }
        render() {
          var e7 = "".concat(this.isAudioView ? "Audio Player" : "Video Player") + "".concat(v5(this.mediaTitle) ? "" : " - ".concat(this.mediaTitle)), t8 = !Oe4 || !this.isVideoView || this.playsinline && !this.isFullscreenActive;
          t8 || (this.controls = true);
          var i4 = t8 && this.hasCustomControls() && this.isVideoView && !this.paused && !this.isControlsActive, n5 = !this.controls && t8 && this.isVideoView;
          return (0, ei.h)(ei.Host, {id: this.genId(), idle: i4, mobile: this.isMobile, touch: this.isTouch, live: this.isLive, audio: this.isAudioView, video: this.isVideoView, pip: this.isPiPActive, fullscreen: this.isFullscreenActive}, (0, ei.h)("div", {"aria-label": e7, "aria-hidden": this.ready ? "false" : "true", "aria-busy": this.playbackReady ? "false" : "true", class: {player: true, idle: i4, audio: this.isAudioView, video: this.isVideoView, fullscreen: this.isFullscreenActive}, style: {paddingBottom: this.isVideoView ? "".concat(this.calcAspectRatio(), "%") : void 0}, ref: (e8) => {
            (0, ei.writeTask)(() => {
              this.container = e8;
            });
          }}, n5 && (0, ei.h)("div", {class: "blocker"}), (0, ei.h)(E4, {state: this.getPlayerState()}, (0, ei.h)("slot", null))));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {container: ["onContainerChange"], paused: ["onPausedChange"], duration: ["onDurationChange"], currentTime: ["onCurrentTimeChange"], playbackReady: ["onPlaybackReadyChange"], muted: ["onMutedChange"], playbackRate: ["onPlaybackRateChange"], playbackQuality: ["onPlaybackQualityChange"], debug: ["onDebugChange"], volume: ["onVolumeChange"], viewType: ["onViewTypeChange"], isAudioView: ["onViewTypeChange"], isVideoView: ["onViewTypeChange"], mediaType: ["onMediaTypeChange"], language: ["onLanguageChange"], translations: ["onTranslationsChange"]};
        }
        static get style() {
          return ".player{box-sizing:border-box;direction:ltr;font-family:var(--vm-player-font-family);-moz-osx-font-smoothing:auto;-webkit-font-smoothing:subpixel-antialiased;-webkit-tap-highlight-color:transparent;font-variant-numeric:tabular-nums;font-weight:500;line-height:1.7;width:100%;display:block;max-width:100%;min-width:275px;min-height:40px;position:relative;text-shadow:none;outline:0;transition:box-shadow 0.3s ease;box-shadow:var(--vm-player-box-shadow);border-radius:var(--vm-player-border-radius)}.player.idle{cursor:none}.player.audio{background-color:transparent !important}.player.video{height:0;overflow:hidden;background-color:var(--vm-player-bg, #000)}.player.fullscreen{margin:0;border-radius:0;width:100%;height:100%;padding-bottom:0 !important}.blocker{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-block;z-index:var(--vm-blocker-z-index)}";
        }
      }, Kt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmLoaded = (0, ei.createEvent)(this, "vmLoaded", 3), this.vmWillShow = (0, ei.createEvent)(this, "vmWillShow", 3), this.vmWillHide = (0, ei.createEvent)(this, "vmWillHide", 3), this.isHidden = true, this.isActive = false, this.hasLoaded = false, this.fit = "cover", this.isVideoView = false, this.playbackStarted = false, this.currentTime = 0, ie4(this), Q6(this, ["mediaTitle", "currentPoster", "playbackStarted", "currentTime", "isVideoView"]);
        }
        onCurrentPosterChange() {
          var e7;
          this.hasLoaded = false, (e7 = this.lazyLoader) === null || e7 === void 0 || e7.onMutation();
        }
        connectedCallback() {
          this.lazyLoader = new ut5(this.host, ["data-src", "src"], (e7) => {
            var t8 = e7.getAttribute("data-src");
            e7.removeAttribute("src"), m4(t8) || e7.setAttribute("src", t8);
          }), this.onEnabledChange(), this.onActiveChange();
        }
        disconnectedCallback() {
          this.lazyLoader.destroy();
        }
        onVisibilityChange() {
          !this.isHidden && this.isActive ? this.vmWillShow.emit() : this.vmWillHide.emit();
        }
        onEnabledChange() {
          this.isHidden = !this.isVideoView, this.onVisibilityChange();
        }
        onActiveChange() {
          this.isActive = !this.playbackStarted || this.currentTime <= 0.1, this.onVisibilityChange();
        }
        onPosterLoad() {
          this.vmLoaded.emit(), this.hasLoaded = true;
        }
        render() {
          return (0, ei.h)("div", {class: {poster: true, hidden: this.isHidden, active: this.isActive && this.hasLoaded}}, (0, ei.h)("img", {class: "lazy", "data-src": this.currentPoster, alt: v5(this.mediaTitle) ? "Media Poster" : "".concat(this.mediaTitle, " Poster"), style: {objectFit: this.fit}, onLoad: this.onPosterLoad.bind(this)}));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {currentPoster: ["onCurrentPosterChange"], isVideoView: ["onEnabledChange"], currentTime: ["onActiveChange"], playbackStarted: ["onActiveChange"]};
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-poster-z-index)}.poster{width:100%;height:100%;background:#000;opacity:0;visibility:hidden;pointer-events:none;transition:var(--vm-fade-transition)}.poster.hidden{display:none}.poster.active{opacity:1;visibility:visible}img{width:100%;height:100%;pointer-events:none}";
        }
      }, Gt4 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.isVideoView = false, this.isControlsActive = false, ie4(this), Q6(this, ["isVideoView", "isControlsActive"]);
        }
        render() {
          return (0, ei.h)("div", {class: {scrim: true, gradient: !v5(this.gradient), gradientUp: this.gradient === "up", gradientDown: this.gradient === "down", hidden: !this.isVideoView, active: this.isControlsActive}});
        }
        static get style() {
          return ':host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-scrim-z-index)}.scrim{position:absolute;width:100%;background:var(--vm-scrim-bg);display:inline-block;opacity:0;visibility:hidden;transition:var(--vm-fade-transition)}.scrim.gradient{height:258px;background:none;background-position:bottom;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAECCAYAAAA/9r2TAAABKklEQVQ4T2XI50cFABiF8dvee++67b33uM17b1MkkSSSSBJJJIkkkkQSSSKJ9Efmeb8cr86HH88JBP4thkfEkiKOFPGkSCCNRE8SKZJJkUIaqZ40UqSTIoMUmaSR5ckmRQ4pckkjz5NPigJSFJKiiDSKPSWkKCVFGWmUeypIUUmKKlJUk0aNJ0iKWlLUkUa9p4EUjaRoIkUzabR4WknRRop20ujwdJKiixTdpOghjV5PHyn6STFAGoOeIVIMk2KEFKOkMeYZJ8UEKUKkMemZIsU0KWZIMUsac54wKSKkiJLGvGeBFIukWCLFMrkCq7AG67ABm7AF27ADu7AH+3AAh3AEx3ACp3AG53ABl3AF13ADt3AH9/AAj/AEz/ACr/AG7/ABn/AF3/ADv39LujSyJPVJ0QAAAABJRU5ErkJggg==")}.scrim.gradientUp{top:unset;bottom:0}.scrim.gradientDown{transform:rotate(180deg)}.scrim.hidden{display:none}.scrim.active{opacity:1;visibility:visible}';
        }
      }, Yt4 = (e7) => Math.trunc(e7 / 60 / 60 % 60), Jt4 = (e7) => Math.trunc(e7 / 60 % 60), Xt4 = (e7) => Math.trunc(e7 % 60), Zt4 = function() {
        var e7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t8 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i4 = (e8) => "0".concat(e8).slice(-2), n5 = Yt4(e7), s5 = Jt4(e7), o5 = Xt4(e7);
        return "".concat(t8 || n5 > 0 ? "".concat(n5, ":") : "").concat(i4(s5), ":").concat(i4(o5));
      }, ti2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.keyboardDisposal = new q8(), this.timestamp = "", this.endTime = 0, this.alwaysShowHours = false, this.hideTooltip = false, this.currentTime = 0, this.duration = -1, this.noKeyboard = false, this.buffering = false, this.buffered = 0, this.i18n = {}, ie4(this), Q6(this, ["i18n", "currentTime", "duration", "buffering", "buffered"]);
        }
        onNoKeyboardChange() {
          var e7 = this;
          return a4(function* () {
            if (e7.keyboardDisposal.empty(), !e7.noKeyboard) {
              var t8 = yield H8(e7);
              e7.keyboardDisposal.add(A5(t8, "keydown", (t9) => {
                if (t9.key === "ArrowLeft" || t9.key === "ArrowRight") {
                  t9.preventDefault();
                  var i4 = t9.key === "ArrowLeft" ? Math.max(0, e7.currentTime - 5) : Math.min(e7.duration, e7.currentTime + 5);
                  e7.dispatch("currentTime", i4);
                }
              }));
            }
          })();
        }
        onDurationChange() {
          this.endTime = Math.max(0, this.duration);
        }
        connectedCallback() {
          this.dispatch = w4(this), this.timestamp = Zt4(this.currentTime, this.alwaysShowHours), this.onNoKeyboardChange();
        }
        disconnectedCallback() {
          this.keyboardDisposal.empty();
        }
        setTooltipPosition(e7) {
          var t8 = this.tooltip.shadowRoot.querySelector(".tooltip").getBoundingClientRect(), i4 = this.slider.getBoundingClientRect(), n5 = parseFloat(window.getComputedStyle(this.slider).getPropertyValue("--vm-slider-thumb-width")), s5 = t8.width / 2 - n5 / 2, o5 = i4.width - t8.width / 2 - n5 / 2, a5 = Math.max(s5, Math.min(e7, o5));
          this.tooltip.style = "--vm-tooltip-left: ".concat(a5, "px");
        }
        onSeek(e7) {
          this.dispatch("currentTime", e7.detail);
        }
        onSeeking(e7) {
          if (!(this.duration < 0 || this.tooltip.hidden)) {
            if (e7.type === "mouseleave")
              return this.getSliderInput().blur(), void (this.tooltip.active = false);
            var t8 = this.host.getBoundingClientRect(), i4 = Math.max(0, Math.min(100, 100 / t8.width * (e7.pageX - t8.left)));
            this.timestamp = Zt4(this.duration / 100 * i4, this.alwaysShowHours), this.setTooltipPosition(i4 / 100 * t8.width), this.tooltip.active || (this.getSliderInput().focus(), this.tooltip.active = true);
          }
        }
        getSliderInput() {
          return this.slider.shadowRoot.querySelector("input");
        }
        render() {
          var e7 = this.i18n.scrubberLabel.replace(/{currentTime}/, Zt4(this.currentTime)).replace(/{duration}/, Zt4(this.endTime));
          return (0, ei.h)("div", {class: "scrubber", onMouseEnter: this.onSeeking.bind(this), onMouseLeave: this.onSeeking.bind(this), onMouseMove: this.onSeeking.bind(this), onTouchMove: () => {
            this.getSliderInput().focus();
          }, onTouchEnd: () => {
            this.getSliderInput().blur();
          }}, (0, ei.h)("vm-slider", {step: 0.01, max: this.endTime, value: this.currentTime, label: this.i18n.scrubber, valueText: e7, onVmValueChange: this.onSeek.bind(this), ref: (e8) => {
            this.slider = e8;
          }}), (0, ei.h)("progress", {class: {loading: this.buffering}, min: 0, max: this.endTime, value: this.buffered, "aria-label": this.i18n.buffered, "aria-valuemin": "0", "aria-valuemax": this.endTime, "aria-valuenow": this.buffered, "aria-valuetext": "".concat((this.endTime > 0 ? this.buffered / this.endTime : 0).toFixed(0), "%")}, "% buffered"), (0, ei.h)("vm-tooltip", {hidden: this.hideTooltip, ref: (e8) => {
            this.tooltip = e8;
          }}, this.timestamp));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {noKeyboard: ["onNoKeyboardChange"], duration: ["onDurationChange"]};
        }
        static get style() {
          return ":host{--vm-tooltip-spacing:var(--vm-scrubber-tooltip-spacing);flex:1;position:relative;cursor:pointer;pointer-events:auto;box-sizing:border-box;left:calc(var(--vm-slider-thumb-width) / 2);margin-right:var(--vm-slider-thumb-width);margin-bottom:var(--vm-slider-track-height)}@keyframes progress{to{background-position:var(--vm-scrubber-loading-stripe-size) 0}}.scrubber{position:relative;width:100%}vm-slider,progress{margin-left:calc(calc(var(--vm-slider-thumb-width) / 2) * -1);margin-right:calc(calc(var(--vm-slider-thumb-width) / 2) * -1);width:calc(100% + var(--vm-slider-thumb-width));height:var(--vm-slider-track-height)}vm-slider:hover,progress:hover{cursor:pointer}vm-slider{position:absolute;top:0;left:0;z-index:3}progress{-webkit-appearance:none;background:transparent;border:0;border-radius:100px;position:absolute;left:0;top:50%;padding:0;color:var(--vm-scrubber-buffered-bg);height:var(--vm-slider-track-height)}progress::-webkit-progress-bar{background:transparent}progress::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:var(--vm-slider-track-height);transition:width 0.2s ease}progress::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:var(--vm-slider-track-height);transition:width 0.2s ease}progress::-ms-fill{border-radius:100px;transition:width 0.2s ease}progress.loading{animation:progress 1s linear infinite;background-image:linear-gradient(-45deg,\n  var(--vm-scrubber-loading-stripe-color) 25%,\n  transparent 25%,\n  transparent 50%,\n  var(--vm-scrubber-loading-stripe-color) 50%,\n  var(--vm-scrubber-loading-stripe-color) 75%,\n  transparent 75%,\n  transparent);background-repeat:repeat-x;background-size:var(--vm-scrubber-loading-stripe-size) var(--vm-scrubber-loading-stripe-size);color:transparent;background-color:transparent}";
        }
      }, ii2 = 0, ni2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.disposal = new q8(), this.menuHeight = 0, this.pin = "bottomRight", this.active = false, this.isMobile = false, this.isAudioView = false, ie4(this), Pe4(this), Q6(this, ["isMobile", "isAudioView"]);
        }
        onActiveChange() {
          this.dispatch("isSettingsActive", this.active), v5(this.controller) || (this.controller.expanded = this.active);
        }
        connectedCallback() {
          this.dispatch = w4(this), ii2 += 1, this.id = "vm-settings-".concat(ii2);
        }
        disconnectedCallback() {
          this.disposal.empty();
        }
        setController(e7) {
          var t8 = this;
          return a4(function* () {
            t8.controller = e7, t8.controller.menu = t8.id, t8.disposal.empty(), t8.disposal.add(A5(t8.controller, "click", () => {
              t8.active = !t8.active;
            })), t8.disposal.add(A5(t8.controller, "keydown", (e8) => {
              e8.key === "Enter" && (t8.active || t8.menu.focusMenu());
            }));
          })();
        }
        getPosition() {
          if (this.isAudioView)
            return {right: "0", bottom: "calc(var(--vm-controls-height, 0) + 4px)"};
          var e7 = this.pin.split(/(?=[L|R])/).map((e8) => e8.toLowerCase());
          return {[e7.includes("top") ? "top" : "bottom"]: "var(--vm-controls-height, 0)", [e7.includes("left") ? "left" : "right"]: "8px"};
        }
        onOpen(e7) {
          var t8;
          ((t8 = e7.detail) === null || t8 === void 0 ? void 0 : t8.identifier) === this.id && (this.active = true);
        }
        onClose(e7) {
          var t8;
          ((t8 = e7.detail) === null || t8 === void 0 ? void 0 : t8.identifier) === this.id && (this.active = false);
        }
        onHeightChange(e7) {
          this.menuHeight = e7.detail;
        }
        render() {
          return (0, ei.h)("div", {style: n4({}, this.getPosition()), class: {settings: true, active: this.active, mobile: this.isMobile}}, (0, ei.h)("div", {class: "container", style: {height: "".concat(this.menuHeight, "px")}}, (0, ei.h)("vm-menu", {identifier: this.id, active: this.active, controller: this.controller, onVmOpen: this.onOpen.bind(this), onVmClose: this.onClose.bind(this), onVmMenuHeightChange: this.onHeightChange.bind(this), ref: (e7) => {
            this.menu = e7;
          }}, (0, ei.h)("slot", null))));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {active: ["onActiveChange"]};
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-menu-z-index)}.settings{position:absolute;opacity:0;pointer-events:auto;overflow-x:hidden;overflow-y:auto;background-color:var(--vm-menu-bg);max-height:var(--vm-settings-max-height);border-radius:var(--vm-settings-border-radius);padding:var(--vm-settings-padding);box-shadow:var(--vm-settings-shadow);box-sizing:border-box;scrollbar-width:thin;scroll-behavior:smooth;scrollbar-color:var(--vm-settings-scroll-thumb-color) var(--vm-settings-scroll-track-color);transform:translateY(8px);transition:var(--vm-settings-transition)}.container{display:block;width:var(--vm-settings-width);height:100%;position:relative;transition:width 0.25s ease-in, height 0.25s ease-in}.settings.hydrated{visibility:hidden !important}.settings::-webkit-scrollbar{width:var(--vm-settings-scroll-width)}.settings::-webkit-scrollbar-track{background:var(--vm-settings-scroll-track-color)}.settings::-webkit-scrollbar-thumb{border-radius:var(--vm-settings-scroll-width);background-color:var(--vm-settings-scroll-thumb-color);border:2px solid var(--vm-menu-bg)}.settings.active{transform:translateY(0);opacity:1;visibility:visible !important}.settings.mobile{position:fixed;top:auto !important;left:0 !important;right:0 !important;bottom:0 !important;width:100%;min-height:56px;max-height:50%;border-radius:0;z-index:2147483647;transform:translateY(100%)}.settings.mobile.active{transform:translateY(0)}.settings.mobile>vm-menu{height:100% !important;overflow:auto !important}";
        }
      }, si2 = 0, oi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.icon = "settings", this.tooltipPosition = "top", this.expanded = false, this.i18n = {}, ie4(this), Q6(this, ["i18n"]);
        }
        onComponentsChange() {
          v5(this.vmSettings) || this.vmSettings.setController(this.host);
        }
        connectedCallback() {
          si2 += 1, this.id = "vm-settings-control-".concat(si2), re4(this, "vm-settings", (e7) => {
            [this.vmSettings] = e7;
          });
        }
        focusControl() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.control) === null || t8 === void 0 || t8.focusControl();
          })();
        }
        blurControl() {
          var e7 = this;
          return a4(function* () {
            var t8;
            (t8 = e7.control) === null || t8 === void 0 || t8.blurControl();
          })();
        }
        render() {
          var e7 = !v5(this.menu);
          return (0, ei.h)("div", {class: {settingsControl: true, hidden: !e7, active: e7 && this.expanded}}, (0, ei.h)("vm-control", {identifier: this.id, menu: this.menu, hidden: !e7, expanded: this.expanded, label: this.i18n.settings, ref: (e8) => {
            this.control = e8;
          }}, (0, ei.h)("vm-icon", {name: this.icon, library: this.icons}), (0, ei.h)("vm-tooltip", {hidden: this.expanded, position: this.tooltipPosition, direction: this.tooltipDirection}, this.i18n.settings)));
        }
        get host() {
          return this;
        }
        static get watchers() {
          return {vmSettings: ["onComponentsChange"]};
        }
        static get style() {
          return ".settingsControl.hidden{display:none}.settingsControl{--vm-icon-transition:transform 0.3s ease}.settingsControl.active{--vm-icon-transform:rotate(90deg)}";
        }
      }, ai2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.hidden = false, this.effect = "sheen", this.ready = false, ie4(this), Q6(this, ["ready"]);
        }
        onReadyChange() {
          this.ready ? setTimeout(() => {
            this.hidden = true;
          }, 500) : this.hidden = false;
        }
        render() {
          return (0, ei.h)("div", {class: {skeleton: true, hidden: this.hidden, sheen: this.effect === "sheen"}}, (0, ei.h)("div", {class: "indicator"}));
        }
        static get watchers() {
          return {ready: ["onReadyChange"]};
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-skeleton-z-index)}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}.skeleton{width:100%;height:100%;display:flex;min-height:1rem;pointer-events:auto}.sheen.hidden{opacity:0;visibility:hidden;transition:var(--vm-fade-transition);pointer-events:none}.indicator{flex:1 1 auto;background:var(--vm-skeleton-color)}.skeleton.sheen .indicator{background:linear-gradient(\n    270deg, \n    var(--vm-skeleton-sheen-color), \n    var(--vm-skeleton-color), \n    var(--vm-skeleton-color), \n    var(--vm-skeleton-sheen-color)\n  );background-size:400% 100%;background-size:400% 100%;animation:sheen 8s ease-in-out infinite}";
        }
      }, ri2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmValueChange = (0, ei.createEvent)(this, "vmValueChange", 7), this.vmFocus = (0, ei.createEvent)(this, "vmFocus", 7), this.vmBlur = (0, ei.createEvent)(this, "vmBlur", 7), this.step = 1, this.min = 0, this.max = 10, this.value = 5, ie4(this);
        }
        getPercentage() {
          return "".concat(this.value / this.max * 100, "%");
        }
        onValueChange(e7) {
          var t8, i4 = parseFloat((t8 = e7.target) === null || t8 === void 0 ? void 0 : t8.value);
          this.vmValueChange.emit(i4);
        }
        calcTouchedValue(e7) {
          var t8, i4 = e7.target, n5 = e7.changedTouches[0], s5 = parseFloat(i4.getAttribute("min")), o5 = parseFloat(i4.getAttribute("max")), a5 = parseFloat(i4.getAttribute("step")), r6 = o5 - s5, l4 = i4.getBoundingClientRect(), c4 = parseFloat(window.getComputedStyle(this.host).getPropertyValue("--vm-slider-thumb-width")), d5 = 100 / l4.width * (c4 / 2) / 100;
          t8 = 100 / l4.width * (n5.clientX - l4.left), (t8 = Math.max(0, Math.min(t8, 100))) < 50 ? t8 -= (100 - 2 * t8) * d5 : t8 > 50 && (t8 += 2 * (t8 - 50) * d5);
          var h4 = r6 * (t8 / 100);
          return a5 >= 1 ? s5 + Math.round(h4 / a5) * a5 : s5 + parseFloat(h4.toFixed(2));
        }
        onTouch(e7) {
          var t8 = e7.target;
          t8.disabled || (e7.preventDefault(), this.value = this.calcTouchedValue(e7), this.vmValueChange.emit(this.value), t8.dispatchEvent(new window.Event(e7.type === "touchend" ? "change" : "input", {bubbles: true})));
        }
        render() {
          var e7;
          return (0, ei.h)("div", {class: "slider", style: {"--vm-value": this.getPercentage()}}, (0, ei.h)("input", {type: "range", step: this.step, min: this.min, max: this.max, value: this.value, autocomplete: "off", "aria-label": this.label, "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value, "aria-valuetext": (e7 = this.valueText) !== null && e7 !== void 0 ? e7 : this.getPercentage(), "aria-orientation": "horizontal", onInput: this.onValueChange.bind(this), onFocus: () => {
            this.vmFocus.emit();
          }, onBlur: () => {
            this.vmBlur.emit();
          }, onTouchStart: this.onTouch.bind(this), onTouchMove: this.onTouch.bind(this), onTouchEnd: this.onTouch.bind(this)}));
        }
        get host() {
          return this;
        }
        static get style() {
          return ":host{width:100%}.slider{width:100%}input{width:100%;-webkit-appearance:none;background:transparent;border:0;outline:0;cursor:pointer;box-sizing:border-box;border-radius:calc(var(--vm-slider-thumb-height) * 2);user-select:none;-webkit-user-select:none;touch-action:manipulation;color:var(--vm-slider-value-color);display:block;height:var(--vm-slider-track-height);margin:0;padding:0;transition:box-shadow 0.3s ease}input::-webkit-slider-runnable-track{background:transparent;border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;background-image:linear-gradient(to right, currentColor var(--vm-value, 0%), transparent var(--vm-value, 0%));background-color:var(--vm-slider-track-color)}input::-webkit-slider-thumb{opacity:0;background:var(--vm-slider-thumb-bg);border:0;border-radius:100%;position:relative;transition:all 0.2s ease;width:var(--vm-slider-thumb-width);height:var(--vm-slider-thumb-height);box-shadow:var(--vm-slider-thumb-shadow);-webkit-appearance:none;margin-top:calc(0px - calc(calc(var(--vm-slider-thumb-height) - var(--vm-slider-track-height)) / 2))}input::-moz-range-track{background:transparent;border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;background-color:var(--vm-slider-track-color)}input::-moz-range-thumb{opacity:0;background:var(--vm-slider-thumb-bg);border:0;border-radius:100%;position:relative;transition:all 0.2s ease;width:var(--vm-slider-thumb-width);height:var(--vm-slider-thumb-height);box-shadow:var(--vm-slider-thumb-shadow)}input::-moz-range-progress{background:currentColor;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height)}input::-ms-track{border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;color:transparent;background-color:var(--vm-slider-track-color)}input::-ms-fill-upper{background:transparent;border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none}input::-ms-fill-lower{border:0;border-radius:calc(var(--vm-slider-track-height) / 2);height:var(--vm-slider-track-height);transition:box-shadow 0.3s ease;user-select:none;background:currentColor}input::-ms-thumb{opacity:0;background:var(--vm-slider-thumb-bg);border:0;border-radius:100%;position:relative;transition:all 0.2s ease;width:var(--vm-slider-thumb-width);height:var(--vm-slider-thumb-height);box-shadow:var(--vm-slider-thumb-shadow);margin-top:0}input::-ms-tooltip{display:none}input:hover::-webkit-slider-runnable-track{height:var(--vm-slider-track-focused-height)}input:hover::-moz-range-track{height:var(--vm-slider-track-focused-height)}input:hover::-ms-track{height:var(--vm-slider-track-focused-height)}input:hover::-ms-fill-upper{height:var(--vm-slider-track-focused-height)}input:hover::-ms-fill-lower{height:var(--vm-slider-track-focused-height)}input:hover::-webkit-slider-thumb{opacity:1}input:hover::-moz-range-thumb{opacity:1}input:hover::-ms-thumb{opacity:1}input:focus{outline:0}input:focus::-webkit-slider-runnable-track{outline:0;height:var(--vm-slider-track-focused-height)}input:focus::-moz-range-track{outline:0;height:var(--vm-slider-track-focused-height)}input:focus::-ms-track{outline:0;height:var(--vm-slider-track-focused-height)}input::-moz-focus-outer{border:0}";
        }
      }, li2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmWillShow = (0, ei.createEvent)(this, "vmWillShow", 3), this.vmWillHide = (0, ei.createEvent)(this, "vmWillHide", 3), this.blacklist = [W7.YouTube], this.isHidden = true, this.isActive = false, this.isVideoView = false, this.showWhenMediaLoading = false, this.playbackReady = false, this.buffering = false, ie4(this), Q6(this, ["isVideoView", "buffering", "playbackReady", "currentProvider"]);
        }
        onVideoViewChange() {
          this.isHidden = !this.isVideoView, this.onVisiblityChange();
        }
        onActiveChange() {
          this.isActive = this.buffering || this.showWhenMediaLoading && !this.playbackReady, this.onVisiblityChange();
        }
        onVisiblityChange() {
          !this.isHidden && this.isActive ? this.vmWillShow.emit() : this.vmWillHide.emit();
        }
        render() {
          return (0, ei.h)("div", {class: {spinner: true, hidden: this.isHidden || this.blacklist.includes(this.currentProvider), active: this.isActive}}, (0, ei.h)("div", {class: {spin: true, active: this.isActive}}, "Loading..."));
        }
        static get watchers() {
          return {isVideoView: ["onVideoViewChange"], buffering: ["onActiveChange"], playbackReady: ["onActiveChange"]};
        }
        static get style() {
          return ":host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--vm-spinner-z-index)}.spinner{width:100%;height:100%;display:flex;justify-content:center;align-items:center;opacity:0;visibility:hidden;pointer-events:none;transition:var(--vm-fade-transition)}.spinner.hidden{display:none}.spinner.active{opacity:1;visibility:visible}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{background:transparent;margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;pointer-events:none;border-top:var(--vm-spinner-thickness) solid var(--vm-spinner-fill-color);border-left:var(--vm-spinner-thickness) solid var(--vm-spinner-fill-color);border-right:var(--vm-spinner-thickness) solid var(--vm-spinner-track-color);border-bottom:var(--vm-spinner-thickness) solid var(--vm-spinner-track-color);transform:translateZ(0)}.spin.active{animation:spin var(--vm-spinner-spin-duration) infinite var(--vm-spinner-spin-timing-func)}.spin,.spin::after{border-radius:50%;width:var(--vm-spinner-width);height:var(--vm-spinner-height)}";
        }
      }, ci2 = 0, di2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmOpenSubmenu = (0, ei.createEvent)(this, "vmOpenSubmenu", 7), this.vmCloseSubmenu = (0, ei.createEvent)(this, "vmCloseSubmenu", 7), this.slideInDirection = "right", this.active = false, ie4(this);
        }
        connectedCallback() {
          this.genId();
        }
        getController() {
          var e7 = this;
          return a4(function* () {
            return e7.controller;
          })();
        }
        getMenu() {
          var e7 = this;
          return a4(function* () {
            return e7.menu;
          })();
        }
        getControllerHeight() {
          var e7 = this;
          return a4(function* () {
            var t8, i4;
            return (t8 = (i4 = e7.controller) === null || i4 === void 0 ? void 0 : i4.getHeight()) !== null && t8 !== void 0 ? t8 : 0;
          })();
        }
        getControllerHeightSync() {
          var e7, t8 = (e7 = this.controller) === null || e7 === void 0 ? void 0 : e7.shadowRoot.querySelector("[role='menuitem']");
          return t8 ? parseFloat(window.getComputedStyle(t8).height) : 0;
        }
        onMenuOpen() {
          this.active = true, this.vmOpenSubmenu.emit(this.host);
        }
        onMenuClose() {
          this.active = false, this.vmCloseSubmenu.emit(this.host);
        }
        genId() {
          ci2 += 1, this.id = "vm-submenu-".concat(ci2);
        }
        getControllerId() {
          return "".concat(this.id, "-controller");
        }
        render() {
          return (0, ei.h)("div", null, (0, ei.h)("vm-menu-item", {identifier: this.getControllerId(), menu: this.menu, label: this.label, hint: this.hint, expanded: this.active, ref: (e7) => {
            (0, ei.writeTask)(() => {
              this.controller = e7;
            });
          }}), (0, ei.h)("vm-menu", {identifier: this.id, controller: this.controller, active: this.active, slideInDirection: this.slideInDirection, onVmOpen: this.onMenuOpen.bind(this), onVmClose: this.onMenuClose.bind(this), ref: (e7) => {
            (0, ei.writeTask)(() => {
              this.menu = e7;
            });
          }, style: {top: "".concat(this.getControllerHeightSync() + 1, "px")}}, (0, ei.h)("slot", null)));
        }
        get host() {
          return this;
        }
      }, hi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.seconds = 0, this.alwaysShowHours = false, ie4(this);
        }
        render() {
          return (0, ei.h)("div", {class: "time", "aria-label": this.label}, Zt4(Math.max(0, this.seconds), this.alwaysShowHours));
        }
        static get style() {
          return ".time{display:flex;align-items:center;color:var(--vm-time-color);font-size:var(--vm-time-font-size);font-weight:var(--vm-time-font-weight)}";
        }
      }, ui2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.separator = "/", this.alwaysShowHours = false, ie4(this);
        }
        render() {
          return (0, ei.h)("div", {class: "timeProgress"}, (0, ei.h)("vm-current-time", {alwaysShowHours: this.alwaysShowHours}), (0, ei.h)("span", {class: "separator"}, this.separator), (0, ei.h)("vm-end-time", {alwaysShowHours: this.alwaysShowHours}));
        }
        static get style() {
          return ".timeProgress{display:flex;width:100%;height:100%;align-items:center;color:var(--vm-time-color)}.separator{margin:0 4px}";
        }
      }, mi2 = 0, vi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.hasLoaded = false, this.hidden = false, this.active = false, this.position = "top", this.isTouch = false, this.isMobile = false, ie4(this), Q6(this, ["isTouch", "isMobile"]);
        }
        componentDidLoad() {
          this.hasLoaded = true;
        }
        getId() {
          var e7 = this.host.id;
          return f3(e7) && e7.length > 0 ? e7 : "vm-tooltip-".concat(mi2 += 1);
        }
        render() {
          return (0, ei.h)("div", {id: this.getId(), role: "tooltip", "aria-hidden": !this.active || this.isTouch || this.isMobile ? "true" : "false", class: {tooltip: true, hidden: !this.hasLoaded || this.hidden, onTop: this.position === "top", onBottom: this.position === "bottom", growLeft: this.direction === "left", growRight: this.direction === "right"}}, (0, ei.h)("slot", null));
        }
        get host() {
          return this;
        }
        static get style() {
          return ":host{display:contents;z-index:var(--vm-tooltip-z-index)}.tooltip{left:var(--vm-tooltip-left, 50%);transform:translateX(-50%);line-height:1.3;pointer-events:none;position:absolute;opacity:0;white-space:nowrap;visibility:hidden;background:var(--vm-tooltip-bg);border-radius:var(--vm-tooltip-border-radius);box-sizing:border-box;box-shadow:var(--vm-tooltip-box-shadow);color:var(--vm-tooltip-color);font-size:var(--vm-tooltip-font-size);padding:var(--vm-tooltip-padding);transition:opacity var(--vm-tooltip-fade-duration) var(--vm-tooltip-fade-timing-func)}.tooltip[aria-hidden='false']{opacity:1;visibility:visible}.tooltip.hidden{display:none}.tooltip.onTop{bottom:100%;margin-bottom:var(--vm-tooltip-spacing)}.tooltip.onBottom{top:100%;margin-top:var(--vm-tooltip-spacing)}.tooltip.growLeft{left:auto;right:0;transform:none}.tooltip.growRight{left:0;transform:none}";
        }
      }, pi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.isVideoView = false, this.playsinline = false, this.isFullscreenActive = false, ie4(this), Q6(this, ["isVideoView", "playsinline", "isFullscreenActive"]);
        }
        render() {
          var e7 = !Oe4 || !this.isVideoView || this.playsinline && !this.isFullscreenActive;
          return (0, ei.h)("div", {class: {ui: true, hidden: !e7, video: this.isVideoView}}, e7 && (0, ei.h)("slot", null));
        }
        static get style() {
          return ":host{z-index:var(--vm-ui-z-index)}.ui{width:100%;pointer-events:none}.ui.hidden{display:none}.ui.video{position:absolute;top:0;left:0;height:100%}";
        }
      }, gi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), this.willAttach = false, this.hasCustomTextManager = false, this.preload = "metadata", ie4(this), Te4(this);
        }
        onProviderConnect(e7) {
          this.willAttach && e7.stopImmediatePropagation();
        }
        onProviderDisconnect(e7) {
          this.willAttach && e7.stopImmediatePropagation();
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8;
            return (t8 = e7.fileProvider) === null || t8 === void 0 ? void 0 : t8.getAdapter();
          })();
        }
        render() {
          return (0, ei.h)("vm-file", {noConnect: true, willAttach: this.willAttach, crossOrigin: this.crossOrigin, poster: this.poster, preload: this.preload, controlsList: this.controlsList, autoPiP: this.autoPiP, disablePiP: this.disablePiP, disableRemotePlayback: this.disableRemotePlayback, hasCustomTextManager: this.hasCustomTextManager, mediaTitle: this.mediaTitle, viewType: j5.Video, ref: (e7) => {
            this.fileProvider = e7;
          }}, (0, ei.h)("slot", null));
        }
      };
      !function(e7) {
        e7.Play = "play", e7.Pause = "pause", e7.Seeking = "seeking", e7.Seeked = "seeked", e7.TimeUpdate = "timeupdate", e7.VolumeChange = "volumechange", e7.DurationChange = "durationchange", e7.FullscreenChange = "fullscreenchange", e7.CueChange = "cuechange", e7.Progress = "progress", e7.Error = "error", e7.PlaybackRateChange = "playbackratechange", e7.Loaded = "loaded", e7.BufferStart = "bufferstart", e7.BufferEnd = "bufferend", e7.TextTrackChange = "texttrackchange", e7.Waiting = "waiting", e7.Ended = "ended";
      }(Wt4 || (Wt4 = {}));
      var bi2 = new Map(), yi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.vmError = (0, ei.createEvent)(this, "vmError", 7), this.defaultInternalState = {}, this.volume = 50, this.hasLoaded = false, this.internalState = {paused: true, playing: false, seeking: false, currentTime: 0, buffered: 0, playbackStarted: false, playRequest: false}, this.embedSrc = "", this.mediaTitle = "", this.byline = true, this.portrait = true, this.noAutoAspectRatio = false, this.cookies = true, this.language = "en", this.aspectRatio = "16:9", this.autoplay = false, this.controls = false, this.loop = false, this.muted = false, this.playsinline = false, ie4(this), Te4(this), st5(this);
        }
        onVideoIdChange() {
          this.cancelTimeUpdates(), this.videoId ? (this.embedSrc = "".concat(this.getOrigin(), "/video/").concat(this.videoId), this.pendingDurationCall = L7(), this.pendingMediaTitleCall = L7(), this.fetchVideoInfo = this.getVideoInfo()) : this.embedSrc = "";
        }
        onCustomPosterChange() {
          this.dispatch("currentPoster", this.poster);
        }
        connectedCallback() {
          this.dispatch = pe4(this), this.dispatch("viewType", j5.Video), this.onVideoIdChange(), this.initialMuted = this.muted, this.defaultInternalState = n4({}, this.internalState);
        }
        disconnectedCallback() {
          this.cancelTimeUpdates(), this.pendingPlayRequest = void 0;
        }
        getOrigin() {
          return "https://player.vimeo.com";
        }
        getPreconnections() {
          return [this.getOrigin(), "https://i.vimeocdn.com", "https://f.vimeocdn.com", "https://fresnel.vimeocdn.com"];
        }
        remoteControl(e7, t8) {
          return this.embed.postMessage({method: e7, value: t8});
        }
        buildParams() {
          return {byline: this.byline, color: this.color, portrait: this.portrait, autopause: false, transparent: false, autoplay: this.autoplay, muted: this.initialMuted, playsinline: this.playsinline, dnt: !this.cookies};
        }
        getVideoInfo() {
          var e7 = this;
          return a4(function* () {
            return bi2.has(e7.videoId) ? bi2.get(e7.videoId) : window.fetch("https://vimeo.com/api/oembed.json?url=".concat(e7.embedSrc)).then((e8) => e8.json()).then((t8) => {
              var i4 = t8 == null ? void 0 : t8.thumbnail_url.match(/vimeocdn\.com\/video\/([0-9]+)/)[1], n5 = {poster: "https://i.vimeocdn.com/video/".concat(i4, "_1920x1080.jpg"), width: t8 == null ? void 0 : t8.width, height: t8 == null ? void 0 : t8.height};
              return bi2.set(e7.videoId, n5), n5;
            });
          })();
        }
        onTimeChange(e7) {
          this.internalState.currentTime !== e7 && (this.dispatch("currentTime", e7), Math.abs(this.internalState.currentTime - e7) > 1.5 && (this.internalState.seeking = true, this.dispatch("seeking", true), this.internalState.playing && this.internalState.buffered < e7 && this.dispatch("buffering", true), window.clearTimeout(this.pendingPlayRequest), this.internalState.paused || (this.internalState.playRequest = true), this.remoteControl(this.internalState.playbackStarted ? "pause" : "play")), this.internalState.currentTime = e7);
        }
        cancelTimeUpdates() {
          y3(this.timeRAF) && window.cancelAnimationFrame(this.timeRAF);
        }
        requestTimeUpdates() {
          this.remoteControl("getCurrentTime"), this.timeRAF = window.requestAnimationFrame(() => {
            this.requestTimeUpdates();
          });
        }
        onSeeked() {
          this.internalState.seeking && (this.dispatch("seeking", false), this.internalState.seeking = false, this.internalState.playRequest && window.setTimeout(() => {
            this.remoteControl("play");
          }, 150));
        }
        onVimeoMethod(e7, t8) {
          var i4, n5;
          switch (e7) {
            case "getCurrentTime":
              this.internalState.seeking || this.onTimeChange(t8);
              break;
            case "getDuration":
              (i4 = this.pendingDurationCall) === null || i4 === void 0 || i4.resolve(t8);
              break;
            case "getVideoTitle":
              (n5 = this.pendingMediaTitleCall) === null || n5 === void 0 || n5.resolve(t8);
          }
        }
        onLoaded() {
          var e7, t8;
          this.hasLoaded || (this.pendingPlayRequest = void 0, this.internalState = n4({}, this.defaultInternalState), this.dispatch("currentSrc", this.embedSrc), this.dispatch("mediaType", B6.Video), this.remoteControl("getDuration"), this.remoteControl("getVideoTitle"), Promise.all([this.fetchVideoInfo, (e7 = this.pendingDurationCall) === null || e7 === void 0 ? void 0 : e7.promise, (t8 = this.pendingMediaTitleCall) === null || t8 === void 0 ? void 0 : t8.promise]).then((e8) => {
            var t9, i4, n5, [s5, o5, a5] = e8;
            this.requestTimeUpdates(), this.dispatch("aspectRatio", "".concat((t9 = s5 == null ? void 0 : s5.width) !== null && t9 !== void 0 ? t9 : 16, ":").concat((i4 = s5 == null ? void 0 : s5.height) !== null && i4 !== void 0 ? i4 : 9)), this.dispatch("currentPoster", (n5 = this.poster) !== null && n5 !== void 0 ? n5 : s5 == null ? void 0 : s5.poster), this.dispatch("duration", o5 != null ? o5 : -1), this.dispatch("mediaTitle", a5), this.dispatch("playbackReady", true);
          }), this.hasLoaded = true);
        }
        onVimeoEvent(e7, t8) {
          switch (e7) {
            case "ready":
              Object.values(Wt4).forEach((e8) => {
                this.remoteControl("addEventListener", e8);
              });
              break;
            case "loaded":
              this.onLoaded();
              break;
            case "play":
              this.onLoaded(), this.internalState.paused = false, this.dispatch("paused", false);
              break;
            case "playProgress":
              this.internalState.playing || (this.dispatch("playing", true), this.internalState.playing = true, this.internalState.playbackStarted = true, this.pendingPlayRequest = window.setTimeout(() => {
                this.internalState.playRequest = false, this.pendingPlayRequest = void 0;
              }, 1e3)), this.dispatch("buffering", false), this.onSeeked();
              break;
            case "pause":
              this.internalState.paused = true, this.internalState.playing = false, this.dispatch("paused", true), this.dispatch("buffering", false);
              break;
            case "loadProgress":
              this.internalState.buffered = t8.seconds, this.dispatch("buffered", t8.seconds);
              break;
            case "bufferstart":
              this.dispatch("buffering", true), this.internalState.paused && (this.internalState.paused = false, this.dispatch("paused", false), this.dispatch("playbackStarted", true));
              break;
            case "bufferend":
              this.dispatch("buffering", false), this.internalState.paused && this.onSeeked();
              break;
            case "volumechange":
              if (t8.volume > 0) {
                var i4 = Math.floor(100 * t8.volume);
                this.dispatch("muted", false), this.volume !== i4 && (this.volume = i4, this.dispatch("volume", this.volume));
              } else
                this.dispatch("muted", true);
              break;
            case "durationchange":
              this.dispatch("duration", t8.duration);
              break;
            case "playbackratechange":
              this.dispatch("playbackRate", t8.playbackRate);
              break;
            case "fullscreenchange":
              this.dispatch("isFullscreenActive", t8.fullscreen);
              break;
            case "finish":
              this.loop ? (this.remoteControl("setCurrentTime", 0), setTimeout(() => {
                this.remoteControl("play");
              }, 200)) : this.dispatch("playbackEnded", true);
              break;
            case "error":
              this.vmError.emit(t8);
          }
        }
        onEmbedSrcChange() {
          this.hasLoaded = false, this.vmLoadStart.emit(), this.dispatch("viewType", j5.Video);
        }
        onEmbedMessage(e7) {
          var t8 = e7.detail;
          v5(t8.event) || this.onVimeoEvent(t8.event, t8.data), v5(t8.method) || this.onVimeoMethod(t8.method, t8.value);
        }
        adjustPosition() {
          var [e7, t8] = this.aspectRatio.split(":").map((e8) => parseInt(e8, 10)), i4 = (240 - 100 / e7 * t8) / 4.8;
          return {paddingBottom: "".concat(240, "%"), transform: "translateY(-".concat(i4 + 0.02, "%)")};
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5, s5, o5, r6, l4, c4, d5, h4 = /vimeo(?:\.com|)\/([0-9]{9,})/, u4 = /vimeo\.com\/external\/[0-9]+\..+/;
            return {getInternalPlayer: (d5 = a4(function* () {
              return e7.embed;
            }), function() {
              return d5.apply(this, arguments);
            }), play: (c4 = a4(function* () {
              e7.remoteControl("play");
            }), function() {
              return c4.apply(this, arguments);
            }), pause: (l4 = a4(function* () {
              e7.remoteControl("pause");
            }), function() {
              return l4.apply(this, arguments);
            }), canPlay: (r6 = a4(function* (e8) {
              return f3(e8) && !u4.test(e8) && h4.test(e8);
            }), function(e8) {
              return r6.apply(this, arguments);
            }), setCurrentTime: (o5 = a4(function* (t9) {
              e7.remoteControl("setCurrentTime", t9);
            }), function(e8) {
              return o5.apply(this, arguments);
            }), setMuted: (s5 = a4(function* (t9) {
              t9 || (e7.volume = e7.volume > 0 ? e7.volume : 30), e7.remoteControl("setVolume", t9 ? 0 : e7.volume / 100);
            }), function(e8) {
              return s5.apply(this, arguments);
            }), setVolume: (n5 = a4(function* (t9) {
              e7.muted ? e7.dispatch("volume", t9) : e7.remoteControl("setVolume", t9 / 100);
            }), function(e8) {
              return n5.apply(this, arguments);
            }), canSetPlaybackRate: (i4 = a4(function* () {
              return false;
            }), function() {
              return i4.apply(this, arguments);
            }), setPlaybackRate: (t8 = a4(function* (t9) {
              e7.remoteControl("setPlaybackRate", t9);
            }), function(e8) {
              return t8.apply(this, arguments);
            })};
          })();
        }
        render() {
          return (0, ei.h)("vm-embed", {class: {hideControls: !this.controls}, style: this.adjustPosition(), embedSrc: this.embedSrc, mediaTitle: this.mediaTitle, origin: this.getOrigin(), params: this.buildParams(), decoder: Ye3, preconnections: this.getPreconnections(), onVmEmbedMessage: this.onEmbedMessage.bind(this), onVmEmbedSrcChange: this.onEmbedSrcChange.bind(this), ref: (e7) => {
            this.embed = e7;
          }});
        }
        static get watchers() {
          return {videoId: ["onVideoIdChange"], poster: ["onCustomPosterChange"]};
        }
        static get style() {
          return ":host{z-index:var(--vm-media-z-index)}vm-embed{position:absolute;top:0;left:0;width:100%;height:100%}vm-embed.hideControls{display:block;width:100%;height:auto;position:relative}";
        }
      }, fi2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.keyboardDisposal = new q8(), this.prevMuted = false, this.currentVolume = 50, this.isSliderActive = false, this.lowVolumeIcon = "volume-low", this.highVolumeIcon = "volume-high", this.mutedIcon = "volume-mute", this.tooltipPosition = "top", this.hideTooltip = false, this.muteKeys = "m", this.noKeyboard = false, this.muted = false, this.volume = 50, this.isMobile = false, this.i18n = {}, ie4(this), Q6(this, ["volume", "muted", "isMobile", "i18n"]);
        }
        onNoKeyboardChange() {
          var e7 = this;
          return a4(function* () {
            if (e7.keyboardDisposal.empty(), !e7.noKeyboard) {
              var t8 = yield H8(e7);
              e7.keyboardDisposal.add(A5(t8, "keydown", (t9) => {
                if (t9.key === "ArrowUp" || t9.key === "ArrowDown") {
                  var i4 = t9.key === "ArrowUp" ? Math.min(100, e7.volume + 5) : Math.max(0, e7.volume - 5);
                  e7.dispatch("volume", parseInt("".concat(i4), 10));
                }
              }));
            }
          })();
        }
        onPlayerVolumeChange() {
          this.currentVolume = this.muted ? 0 : this.volume, !this.muted && this.prevMuted && this.volume === 0 && this.dispatch("volume", 30), this.prevMuted = this.muted;
        }
        connectedCallback() {
          this.prevMuted = this.muted, this.dispatch = w4(this), this.onNoKeyboardChange();
        }
        disconnectedCallback() {
          this.keyboardDisposal.empty();
        }
        onShowSlider() {
          clearTimeout(this.hideSliderTimeout), this.isSliderActive = true;
        }
        onHideSlider() {
          this.hideSliderTimeout = setTimeout(() => {
            this.isSliderActive = false;
          }, 100);
        }
        onVolumeChange(e7) {
          var t8 = e7.detail;
          this.currentVolume = t8, this.dispatch("volume", t8), this.dispatch("muted", t8 === 0);
        }
        onKeyDown(e7) {
          e7.key !== "ArrowLeft" && e7.key !== "ArrowRight" || e7.stopPropagation();
        }
        render() {
          return (0, ei.h)("div", {class: "volumeControl", onMouseEnter: this.onShowSlider.bind(this), onMouseLeave: this.onHideSlider.bind(this)}, (0, ei.h)("vm-mute-control", {keys: this.muteKeys, lowVolumeIcon: this.lowVolumeIcon, highVolumeIcon: this.highVolumeIcon, mutedIcon: this.mutedIcon, icons: this.icons, tooltipPosition: this.tooltipPosition, tooltipDirection: this.tooltipDirection, hideTooltip: this.hideTooltip, onVmFocus: this.onShowSlider.bind(this), onVmBlur: this.onHideSlider.bind(this)}), (0, ei.h)("vm-slider", {class: {hidden: this.isMobile, active: this.isSliderActive}, step: 5, max: 100, value: this.currentVolume, label: this.i18n.volume, onKeyDown: this.onKeyDown.bind(this), onVmFocus: this.onShowSlider.bind(this), onVmBlur: this.onHideSlider.bind(this), onVmValueChange: this.onVolumeChange.bind(this)}));
        }
        static get watchers() {
          return {noKeyboard: ["onNoKeyboardChange"], muted: ["onPlayerVolumeChange"], volume: ["onPlayerVolumeChange"]};
        }
        static get style() {
          return ".volumeControl{align-items:center;display:flex;position:relative;pointer-events:auto;box-sizing:border-box}vm-slider{width:75px;height:100%;margin:0;max-width:0;position:relative;z-index:3;transition:margin 0.2s cubic-bezier(0.4, 0, 1, 1), max-width 0.2s cubic-bezier(0.4, 0, 1, 1);margin-left:calc(var(--vm-control-spacing) / 2) !important;visibility:hidden}vm-slider:hover{cursor:pointer}vm-slider.hidden{display:none}vm-slider.active{max-width:75px;visibility:visible;margin:0 calc(var(--vm-control-spacing) / 2)}";
        }
      }, ki2 = (e7) => {
        switch (e7) {
          case "unknown":
            return;
          case "tiny":
            return "144p";
          case "small":
            return "240p";
          case "medium":
            return "360p";
          case "large":
            return "480p";
          case "hd720":
            return "720p";
          case "hd1080":
            return "1080p";
          case "highres":
            return "1440p";
          case "max":
            return "2160p";
          default:
            return;
        }
      }, Ti2 = new Map(), Ci2 = class extends HTMLElement {
        constructor() {
          super(), this.__registerHost(), (0, ei.attachShadow)(this), this.vmLoadStart = (0, ei.createEvent)(this, "vmLoadStart", 7), this.defaultInternalState = {}, this.internalState = {paused: true, duration: 0, seeking: false, playbackReady: false, playbackStarted: false, currentTime: 0, lastTimeUpdate: 0, playbackRate: 1, state: -1}, this.embedSrc = "", this.mediaTitle = "", this.cookies = false, this.showFullscreenControl = true, this.language = "en", this.autoplay = false, this.controls = false, this.loop = false, this.muted = false, this.playsinline = false, ie4(this), Te4(this), st5(this);
        }
        onVideoIdChange() {
          this.videoId ? (this.embedSrc = "".concat(this.getOrigin(), "/embed/").concat(this.videoId), this.fetchPosterURL = this.findPosterURL()) : this.embedSrc = "";
        }
        onCustomPosterChange() {
          this.dispatch("currentPoster", this.poster);
        }
        connectedCallback() {
          this.dispatch = pe4(this), this.dispatch("viewType", j5.Video), this.onVideoIdChange(), this.initialMuted = this.muted, this.defaultInternalState = n4({}, this.internalState);
        }
        getAdapter() {
          var e7 = this;
          return a4(function* () {
            var t8, i4, n5, s5, o5, r6, l4, c4, d5, h4 = /(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/;
            return {getInternalPlayer: (d5 = a4(function* () {
              return e7.embed;
            }), function() {
              return d5.apply(this, arguments);
            }), play: (c4 = a4(function* () {
              e7.remoteControl("playVideo");
            }), function() {
              return c4.apply(this, arguments);
            }), pause: (l4 = a4(function* () {
              e7.remoteControl("pauseVideo");
            }), function() {
              return l4.apply(this, arguments);
            }), canPlay: (r6 = a4(function* (e8) {
              return f3(e8) && h4.test(e8);
            }), function(e8) {
              return r6.apply(this, arguments);
            }), setCurrentTime: (o5 = a4(function* (t9) {
              e7.remoteControl("seekTo", t9);
            }), function(e8) {
              return o5.apply(this, arguments);
            }), setMuted: (s5 = a4(function* (t9) {
              t9 ? e7.remoteControl("mute") : e7.remoteControl("unMute");
            }), function(e8) {
              return s5.apply(this, arguments);
            }), setVolume: (n5 = a4(function* (t9) {
              e7.remoteControl("setVolume", t9);
            }), function(e8) {
              return n5.apply(this, arguments);
            }), canSetPlaybackRate: (i4 = a4(function* () {
              return true;
            }), function() {
              return i4.apply(this, arguments);
            }), setPlaybackRate: (t8 = a4(function* (t9) {
              e7.remoteControl("setPlaybackRate", t9);
            }), function(e8) {
              return t8.apply(this, arguments);
            })};
          })();
        }
        getOrigin() {
          return this.cookies ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
        }
        getPreconnections() {
          return [this.getOrigin(), "https://www.google.com", "https://googleads.g.doubleclick.net", "https://static.doubleclick.net", "https://s.ytimg.com", "https://i.ytimg.com"];
        }
        remoteControl(e7, t8) {
          return this.embed.postMessage({event: "command", func: e7, args: t8 ? [t8] : void 0});
        }
        buildParams() {
          return {enablejsapi: 1, cc_lang_pref: this.language, hl: this.language, fs: this.showFullscreenControl ? 1 : 0, controls: this.controls ? 1 : 0, disablekb: this.controls ? 0 : 1, iv_load_policy: this.controls ? 1 : 3, mute: this.initialMuted ? 1 : 0, playsinline: this.playsinline ? 1 : 0, autoplay: this.autoplay ? 1 : 0};
        }
        onEmbedSrcChange() {
          this.vmLoadStart.emit(), this.dispatch("viewType", j5.Video);
        }
        onEmbedLoaded() {
          window.setTimeout(() => this.embed.postMessage({event: "listening"}), 100);
        }
        findPosterURL() {
          var e7 = this;
          return a4(function* () {
            if (Ti2.has(e7.videoId))
              return Ti2.get(e7.videoId);
            var t8 = (t9) => "https://i.ytimg.com/vi/".concat(e7.videoId, "/").concat(t9, ".jpg");
            return Ke4(t8("maxresdefault"), 121).catch(() => Ke4(t8("sddefault"), 121)).catch(() => Ke4(t8("hqdefault"), 121)).then((t9) => {
              var i4 = t9.src;
              return Ti2.set(e7.videoId, i4), i4;
            });
          })();
        }
        onCued() {
          this.internalState.playbackReady || (this.internalState = n4({}, this.defaultInternalState), this.dispatch("currentSrc", this.embedSrc), this.dispatch("mediaType", B6.Video), this.fetchPosterURL.then((e7) => {
            var t8;
            this.dispatch("currentPoster", (t8 = this.poster) !== null && t8 !== void 0 ? t8 : e7), this.dispatch("playbackReady", true);
          }), this.internalState.playbackReady = true);
        }
        onPlayerStateChange(e7) {
          if (this.internalState.playbackReady && e7 === -1)
            return this.internalState.paused = true, this.internalState.playbackStarted = false, this.dispatch("buffering", false), this.dispatch("paused", true), void this.dispatch("playbackStarted", false);
          var t8 = e7 === 1, i4 = e7 === 3;
          switch (this.dispatch("buffering", i4), this.internalState.paused && (i4 || t8) && (this.internalState.paused = false, this.dispatch("paused", false), this.internalState.playbackStarted || (this.dispatch("playbackStarted", true), this.internalState.playbackStarted = true)), e7) {
            case 5:
              this.onCued();
              break;
            case 1:
              this.onCued(), this.dispatch("playing", true);
              break;
            case 2:
              this.internalState.paused = true, this.dispatch("paused", true);
              break;
            case 0:
              this.loop ? window.setTimeout(() => {
                this.remoteControl("playVideo");
              }, 150) : (this.dispatch("playbackEnded", true), this.internalState.paused = true, this.dispatch("paused", true));
          }
          this.internalState.state = e7;
        }
        calcCurrentTime(e7) {
          var t8 = e7;
          if (this.internalState.state === 0)
            return this.internalState.duration;
          if (this.internalState.state === 1) {
            var i4 = (Date.now() / 1e3 - this.defaultInternalState.lastTimeUpdate) * this.internalState.playbackRate;
            i4 > 0 && (t8 += Math.min(i4, 1));
          }
          return t8;
        }
        onTimeChange(e7) {
          var t8 = this.calcCurrentTime(e7);
          this.dispatch("currentTime", t8), Math.abs(this.internalState.currentTime - t8) > 1.5 && (this.internalState.seeking = true, this.dispatch("seeking", true)), this.internalState.currentTime = t8;
        }
        onBufferedChange(e7) {
          this.dispatch("buffered", e7), this.internalState.seeking && e7 > this.internalState.currentTime && window.setTimeout(() => {
            this.internalState.seeking = false, this.dispatch("seeking", false);
          }, this.internalState.paused ? 100 : 0);
        }
        onEmbedMessage(e7) {
          var t8, i4 = e7.detail, {info: n5} = i4;
          n5 && (b5(n5.videoData) && this.dispatch("mediaTitle", n5.videoData.title), y3(n5.duration) && (this.internalState.duration = n5.duration, this.dispatch("duration", n5.duration)), T6(n5.availablePlaybackRates) && this.dispatch("playbackRates", n5.availablePlaybackRates), y3(n5.playbackRate) && (this.internalState.playbackRate = n5.playbackRate, this.dispatch("playbackRate", n5.playbackRate)), y3(n5.currentTime) && this.onTimeChange(n5.currentTime), y3(n5.currentTimeLastUpdated) && (this.internalState.lastTimeUpdate = n5.currentTimeLastUpdated), y3(n5.videoLoadedFraction) && this.onBufferedChange(n5.videoLoadedFraction * this.internalState.duration), y3(n5.volume) && this.dispatch("volume", n5.volume), t8 = n5.muted, g3(t8) === Boolean && this.dispatch("muted", n5.muted), T6(n5.availableQualityLevels) && this.dispatch("playbackQualities", n5.availableQualityLevels.map((e8) => ki2(e8))), f3(n5.playbackQuality) && this.dispatch("playbackQuality", ki2(n5.playbackQuality)), y3(n5.playerState) && this.onPlayerStateChange(n5.playerState));
        }
        render() {
          return (0, ei.h)("vm-embed", {embedSrc: this.embedSrc, mediaTitle: this.mediaTitle, origin: this.getOrigin(), params: this.buildParams(), decoder: Ye3, preconnections: this.getPreconnections(), onVmEmbedLoaded: this.onEmbedLoaded.bind(this), onVmEmbedMessage: this.onEmbedMessage.bind(this), onVmEmbedSrcChange: this.onEmbedSrcChange.bind(this), ref: (e7) => {
            this.embed = e7;
          }});
        }
        static get watchers() {
          return {cookies: ["onVideoIdChange"], videoId: ["onVideoIdChange"], poster: ["onCustomPosterChange"]};
        }
        static get style() {
          return ":host{z-index:var(--vm-media-z-index)}";
        }
      }, $i2 = (0, ei.proxyCustomElement)(Ce4, [4, "vm-audio", {willAttach: [4, "will-attach"], crossOrigin: [1, "cross-origin"], preload: [1], disableRemotePlayback: [4, "disable-remote-playback"], mediaTitle: [1, "media-title"]}]);
      t7.VmAudio = $i2;
      var wi2 = (0, ei.proxyCustomElement)($e4, [1, "vm-caption-control", {showIcon: [1, "show-icon"], hideIcon: [1, "hide-icon"], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], hideTooltip: [4, "hide-tooltip"], icons: [1], keys: [1], i18n: [16], playbackReady: [4, "playback-ready"], textTracks: [16], isTextTrackVisible: [4, "is-text-track-visible"], canToggleCaptionVisibility: [32]}]);
      t7.VmCaptionControl = wi2;
      var Si2 = (0, ei.proxyCustomElement)(Ee4, [1, "vm-captions", {hidden: [4], isControlsActive: [4, "is-controls-active"], isVideoView: [4, "is-video-view"], playbackStarted: [4, "playback-started"], textTracks: [16], currentTextTrack: [2, "current-text-track"], isTextTrackVisible: [4, "is-text-track-visible"], isEnabled: [32], cue: [32], fontSize: [32]}]);
      t7.VmCaptions = Si2;
      var xi2 = (0, ei.proxyCustomElement)(Ae4, [1, "vm-click-to-play", {useOnMobile: [4, "use-on-mobile"], paused: [4], isVideoView: [4, "is-video-view"], isMobile: [4, "is-mobile"]}]);
      t7.VmClickToPlay = xi2;
      var Vi2 = (0, ei.proxyCustomElement)(Re4, [1, "vm-control", {keys: [1], identifier: [1], hidden: [4], label: [1], menu: [1], expanded: [4], pressed: [4], isTouch: [4, "is-touch"], describedBy: [32], showTapHighlight: [32]}]);
      t7.VmControl = Vi2;
      var Pi2 = (0, ei.proxyCustomElement)(Me4, [1, "vm-control-group", {space: [1]}]);
      t7.VmControlGroup = Pi2;
      var Ei2 = (0, ei.proxyCustomElement)(Le4, [1, "vm-control-spacer"]);
      t7.VmControlSpacer = Ei2;
      var Ai2 = (0, ei.proxyCustomElement)(Fe4, [1, "vm-controls", {hidden: [4], fullWidth: [4, "full-width"], fullHeight: [4, "full-height"], direction: [1], align: [1], justify: [1], pin: [513], activeDuration: [2, "active-duration"], waitForPlaybackStart: [4, "wait-for-playback-start"], hideWhenPaused: [4, "hide-when-paused"], hideOnMouseLeave: [4, "hide-on-mouse-leave"], isAudioView: [4, "is-audio-view"], isSettingsActive: [4, "is-settings-active"], playbackReady: [4, "playback-ready"], isControlsActive: [4, "is-controls-active"], paused: [4], playbackStarted: [4, "playback-started"], isInteracting: [32]}]);
      t7.VmControls = Ai2;
      var Ri = (0, ei.proxyCustomElement)(He4, [1, "vm-current-time", {currentTime: [2, "current-time"], i18n: [16], alwaysShowHours: [4, "always-show-hours"]}]);
      t7.VmCurrentTime = Ri;
      var Mi = (0, ei.proxyCustomElement)(at4, [1, "vm-dailymotion", {videoId: [1, "video-id"], shouldAutoplayQueue: [4, "should-autoplay-queue"], showUpNextQueue: [4, "show-up-next-queue"], showShareButtons: [4, "show-share-buttons"], color: [1], syndication: [1], showDailymotionLogo: [4, "show-dailymotion-logo"], showVideoInfo: [4, "show-video-info"], language: [1], autoplay: [4], controls: [4], poster: [1], logger: [16], loop: [4], muted: [4], playsinline: [4], embedSrc: [32], mediaTitle: [32]}]);
      t7.VmDailymotion = Mi;
      var Li = (0, ei.proxyCustomElement)(rt4, [1, "vm-dash", {src: [1], version: [1], libSrc: [1, "lib-src"], config: [16], autoplay: [4], crossOrigin: [1, "cross-origin"], preload: [1], poster: [1], controlsList: [1, "controls-list"], autoPiP: [4, "auto-pip"], disablePiP: [4, "disable-pip"], disableRemotePlayback: [4, "disable-remote-playback"], mediaTitle: [1, "media-title"], enableTextTracksByDefault: [4, "enable-text-tracks-by-default"], shouldRenderNativeTextTracks: [4, "should-render-native-text-tracks"], isTextTrackVisible: [4, "is-text-track-visible"], currentTextTrack: [2, "current-text-track"], hasAttached: [32]}, [[0, "vmMediaElChange", "onMediaElChange"]]]);
      t7.VmDash = Li;
      var Ii = (0, ei.proxyCustomElement)(lt4, [1, "vm-dbl-click-fullscreen", {useOnMobile: [4, "use-on-mobile"], isFullscreenActive: [4, "is-fullscreen-active"], isVideoView: [4, "is-video-view"], playbackReady: [4, "playback-ready"], isMobile: [4, "is-mobile"], canSetFullscreen: [32]}]);
      t7.VmDblClickFullscreen = Ii;
      var Di = (0, ei.proxyCustomElement)(ct5, [1, "vm-default-controls", {activeDuration: [2, "active-duration"], waitForPlaybackStart: [4, "wait-for-playback-start"], hideWhenPaused: [4, "hide-when-paused"], hideOnMouseLeave: [4, "hide-on-mouse-leave"], theme: [1], isMobile: [4, "is-mobile"], isLive: [4, "is-live"], isAudioView: [4, "is-audio-view"], isVideoView: [4, "is-video-view"]}]);
      t7.VmDefaultControls = Di;
      var Fi = (0, ei.proxyCustomElement)(dt5, [1, "vm-default-settings", {pin: [513], i18n: [16], playbackReady: [4, "playback-ready"], playbackRate: [2, "playback-rate"], playbackRates: [16], isVideoView: [4, "is-video-view"], playbackQuality: [1, "playback-quality"], playbackQualities: [16], textTracks: [16], currentTextTrack: [2, "current-text-track"], audioTracks: [16], currentAudioTrack: [2, "current-audio-track"], isTextTrackVisible: [4, "is-text-track-visible"], canSetPlaybackRate: [32], canSetPlaybackQuality: [32], canSetTextTrack: [32], canSetAudioTrack: [32]}]);
      t7.VmDefaultSettings = Fi;
      var Hi = (0, ei.proxyCustomElement)(ht5, [1, "vm-default-ui", {noClickToPlay: [4, "no-click-to-play"], noDblClickFullscreen: [4, "no-dbl-click-fullscreen"], noCaptions: [4, "no-captions"], noPoster: [4, "no-poster"], noSpinner: [4, "no-spinner"], noControls: [4, "no-controls"], noSettings: [4, "no-settings"], noLoadingScreen: [4, "no-loading-screen"]}]);
      t7.VmDefaultUi = Hi;
      var Ni = (0, ei.proxyCustomElement)(pt5, [1, "vm-embed", {embedSrc: [1, "embed-src"], mediaTitle: [1, "media-title"], params: [1], origin: [1], preconnections: [16], decoder: [16], srcWithParams: [32], hasEnteredViewport: [32]}, [[8, "message", "onWindowMessage"]]]);
      t7.VmEmbed = Ni;
      var zi = (0, ei.proxyCustomElement)(gt4, [1, "vm-end-time", {duration: [2], i18n: [16], alwaysShowHours: [4, "always-show-hours"]}]);
      t7.VmEndTime = zi;
      var Oi = (0, ei.proxyCustomElement)(bt4, [6, "vm-file", {willAttach: [4, "will-attach"], crossOrigin: [1, "cross-origin"], preload: [1], poster: [1], mediaTitle: [1, "media-title"], controlsList: [1, "controls-list"], autoPiP: [4, "auto-pip"], disablePiP: [4, "disable-pip"], disableRemotePlayback: [4, "disable-remote-playback"], viewType: [1, "view-type"], playbackRates: [16], language: [1], autoplay: [4], controls: [4], logger: [16], loop: [4], muted: [4], playsinline: [4], noConnect: [4, "no-connect"], paused: [4], currentTime: [2, "current-time"], volume: [2], playbackReady: [4, "playback-ready"], playbackStarted: [4, "playback-started"], currentTextTrack: [2, "current-text-track"], hasCustomTextManager: [4, "has-custom-text-manager"], isTextTrackVisible: [4, "is-text-track-visible"], shouldRenderNativeTextTracks: [4, "should-render-native-text-tracks"], vmPoster: [32]}, [[0, "vmMediaProviderConnect", "onProviderConnect"], [0, "vmMediaProviderDisconnect", "onProviderDisconnect"]]]);
      t7.VmFile = Oi;
      var _i = (0, ei.proxyCustomElement)(yt4, [1, "vm-fullscreen-control", {enterIcon: [1, "enter-icon"], exitIcon: [1, "exit-icon"], icons: [1], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], hideTooltip: [4, "hide-tooltip"], keys: [1], isFullscreenActive: [4, "is-fullscreen-active"], i18n: [16], playbackReady: [4, "playback-ready"], canSetFullscreen: [32]}]);
      t7.VmFullscreenControl = _i;
      var Qi = (0, ei.proxyCustomElement)(ft5, [4, "vm-hls", {version: [1], libSrc: [1, "lib-src"], config: [8], crossOrigin: [1, "cross-origin"], preload: [1], poster: [1], controlsList: [1, "controls-list"], autoPiP: [4, "auto-pip"], disablePiP: [4, "disable-pip"], disableRemotePlayback: [4, "disable-remote-playback"], playbackReady: [4, "playback-ready"], mediaTitle: [1, "media-title"], hasAttached: [32]}, [[0, "vmMediaElChange", "onMediaElChange"], [0, "vmSrcSetChange", "onSrcChange"]]]);
      t7.VmHls = Qi;
      var ji = (0, ei.proxyCustomElement)(xt4, [1, "vm-icon", {name: [1], src: [1], label: [1], library: [1], icons: [1], svg: [32]}]);
      t7.VmIcon = ji;
      var Bi = (0, ei.proxyCustomElement)(Vt4, [1, "vm-icon-library", {name: [1], resolver: [16], icons: [1]}]);
      t7.VmIconLibrary = Bi;
      var Wi = (0, ei.proxyCustomElement)(Pt4, [1, "vm-live-indicator", {isLive: [4, "is-live"], i18n: [16]}]);
      t7.VmLiveIndicator = Wi;
      var Ui = (0, ei.proxyCustomElement)(Et4, [1, "vm-loading-screen", {playbackReady: [4, "playback-ready"], hideDots: [4, "hide-dots"]}]);
      t7.VmLoadingScreen = Ui;
      var qi = (0, ei.proxyCustomElement)(Rt4, [1, "vm-menu", {active: [1540], identifier: [1], controller: [16], slideInDirection: [1, "slide-in-direction"], activeMenuItem: [32], activeSubmenu: [32]}, [[0, "vmOpenSubmenu", "onOpenSubmenu"], [0, "vmCloseSubmenu", "onCloseSubmenu"], [8, "click", "onWindowClick"], [8, "keydown", "onWindowKeyDown"]]]);
      t7.VmMenu = qi;
      var Ki = (0, ei.proxyCustomElement)(Mt4, [1, "vm-menu-item", {identifier: [1], hidden: [4], label: [1], menu: [16], expanded: [4], checked: [4], hint: [1], badge: [1], checkIcon: [1, "check-icon"], icons: [1], isTouch: [4, "is-touch"], showTapHighlight: [32]}]);
      t7.VmMenuItem = Ki;
      var Gi = (0, ei.proxyCustomElement)(Lt4, [1, "vm-menu-radio", {label: [1], value: [1], checked: [1028], badge: [1], checkIcon: [1, "check-icon"], icons: [1]}]);
      t7.VmMenuRadio = Gi;
      var Yi = (0, ei.proxyCustomElement)(It4, [1, "vm-menu-radio-group", {value: [1025]}, [[0, "vmCheck", "onSelectionChange"]]]);
      t7.VmMenuRadioGroup = Yi;
      var Ji = (0, ei.proxyCustomElement)(Dt4, [1, "vm-mute-control", {lowVolumeIcon: [1, "low-volume-icon"], highVolumeIcon: [1, "high-volume-icon"], mutedIcon: [1, "muted-icon"], icons: [1], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], hideTooltip: [4, "hide-tooltip"], keys: [1], volume: [2], muted: [4], i18n: [16]}]);
      t7.VmMuteControl = Ji;
      var Xi = (0, ei.proxyCustomElement)(Ft4, [1, "vm-pip-control", {enterIcon: [1, "enter-icon"], exitIcon: [1, "exit-icon"], icons: [1], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], hideTooltip: [4, "hide-tooltip"], keys: [1], isPiPActive: [4, "is-pi-p-active"], i18n: [16], playbackReady: [4, "playback-ready"], canSetPiP: [32]}]);
      t7.VmPipControl = Xi;
      var Zi = (0, ei.proxyCustomElement)(Ht4, [1, "vm-playback-control", {playIcon: [1, "play-icon"], pauseIcon: [1, "pause-icon"], icons: [1], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], hideTooltip: [4, "hide-tooltip"], keys: [1], paused: [4], i18n: [16]}]);
      t7.VmPlaybackControl = Zi;
      var en2 = (0, ei.proxyCustomElement)(qt4, [1, "vm-player", {logger: [16], theme: [513], icons: [513], paused: [1028], playing: [1028], duration: [1026], mediaTitle: [1025, "media-title"], currentProvider: [1025, "current-provider"], currentSrc: [1025, "current-src"], currentPoster: [1025, "current-poster"], currentTime: [1026, "current-time"], autoplay: [4], ready: [1540], playbackReady: [1028, "playback-ready"], loop: [4], muted: [1028], buffered: [1026], playbackRate: [1026, "playback-rate"], playbackRates: [1040], playbackQuality: [1025, "playback-quality"], playbackQualities: [1040], seeking: [1028], debug: [4], playbackStarted: [1028, "playback-started"], playbackEnded: [1028, "playback-ended"], buffering: [1028], controls: [4], isControlsActive: [4, "is-controls-active"], isSettingsActive: [1028, "is-settings-active"], volume: [1026], isFullscreenActive: [1028, "is-fullscreen-active"], aspectRatio: [1025, "aspect-ratio"], viewType: [1025, "view-type"], isAudioView: [1028, "is-audio-view"], isVideoView: [1028, "is-video-view"], mediaType: [1025, "media-type"], isAudio: [1028, "is-audio"], isVideo: [1028, "is-video"], isLive: [1028, "is-live"], isMobile: [1028, "is-mobile"], isTouch: [1028, "is-touch"], isPiPActive: [1028, "is-pi-p-active"], textTracks: [16], currentTextTrack: [2, "current-text-track"], isTextTrackVisible: [4, "is-text-track-visible"], shouldRenderNativeTextTracks: [4, "should-render-native-text-tracks"], audioTracks: [16], currentAudioTrack: [2, "current-audio-track"], autopause: [4], playsinline: [4], language: [1025], translations: [1040], languages: [1040], i18n: [1040], container: [32]}, [[0, "vmError", "onError"]]]);
      t7.VmPlayer = en2;
      var tn2 = (0, ei.proxyCustomElement)(Kt4, [1, "vm-poster", {fit: [1], isVideoView: [4, "is-video-view"], currentPoster: [1, "current-poster"], mediaTitle: [1, "media-title"], playbackStarted: [4, "playback-started"], currentTime: [2, "current-time"], isHidden: [32], isActive: [32], hasLoaded: [32]}]);
      t7.VmPoster = tn2;
      var nn2 = (0, ei.proxyCustomElement)(Gt4, [1, "vm-scrim", {gradient: [1], isVideoView: [4, "is-video-view"], isControlsActive: [4, "is-controls-active"]}]);
      t7.VmScrim = nn2;
      var sn2 = (0, ei.proxyCustomElement)(ti2, [1, "vm-scrubber-control", {alwaysShowHours: [4, "always-show-hours"], hideTooltip: [4, "hide-tooltip"], currentTime: [2, "current-time"], duration: [2], noKeyboard: [4, "no-keyboard"], buffering: [4], buffered: [2], i18n: [16], timestamp: [32], endTime: [32]}]);
      t7.VmScrubberControl = sn2;
      var on2 = (0, ei.proxyCustomElement)(ni2, [1, "vm-settings", {pin: [513], active: [1540], isMobile: [4, "is-mobile"], isAudioView: [4, "is-audio-view"], menuHeight: [32]}]);
      t7.VmSettings = on2;
      var an2 = (0, ei.proxyCustomElement)(oi2, [1, "vm-settings-control", {icon: [1], icons: [1], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], menu: [1], expanded: [4], i18n: [16], vmSettings: [32]}]);
      t7.VmSettingsControl = an2;
      var rn2 = (0, ei.proxyCustomElement)(ai2, [1, "vm-skeleton", {effect: [1], ready: [4], hidden: [32]}]);
      t7.VmSkeleton = rn2;
      var ln2 = (0, ei.proxyCustomElement)(ri2, [1, "vm-slider", {step: [2], min: [2], max: [2], value: [2], valueText: [1, "value-text"], label: [1]}]);
      t7.VmSlider = ln2;
      var cn2 = (0, ei.proxyCustomElement)(li2, [1, "vm-spinner", {isVideoView: [4, "is-video-view"], currentProvider: [1, "current-provider"], showWhenMediaLoading: [4, "show-when-media-loading"], playbackReady: [4, "playback-ready"], buffering: [4], isHidden: [32], isActive: [32]}]);
      t7.VmSpinner = cn2;
      var dn2 = (0, ei.proxyCustomElement)(di2, [1, "vm-submenu", {label: [1], hint: [1], slideInDirection: [1, "slide-in-direction"], active: [1540], menu: [32], controller: [32]}]);
      t7.VmSubmenu = dn2;
      var hn2 = (0, ei.proxyCustomElement)(hi2, [1, "vm-time", {label: [1], seconds: [2], alwaysShowHours: [4, "always-show-hours"]}]);
      t7.VmTime = hn2;
      var un2 = (0, ei.proxyCustomElement)(ui2, [1, "vm-time-progress", {separator: [1], alwaysShowHours: [4, "always-show-hours"]}]);
      t7.VmTimeProgress = un2;
      var mn2 = (0, ei.proxyCustomElement)(vi2, [1, "vm-tooltip", {hidden: [4], active: [4], position: [1], direction: [1], isTouch: [4, "is-touch"], isMobile: [4, "is-mobile"]}]);
      t7.VmTooltip = mn2;
      var vn2 = (0, ei.proxyCustomElement)(pi2, [1, "vm-ui", {isVideoView: [4, "is-video-view"], playsinline: [4], isFullscreenActive: [4, "is-fullscreen-active"]}]);
      t7.VmUi = vn2;
      var pn2 = (0, ei.proxyCustomElement)(gi2, [4, "vm-video", {willAttach: [4, "will-attach"], hasCustomTextManager: [4, "has-custom-text-manager"], crossOrigin: [1, "cross-origin"], preload: [1], poster: [1], controlsList: [1, "controls-list"], autoPiP: [4, "auto-pip"], disablePiP: [4, "disable-pip"], disableRemotePlayback: [4, "disable-remote-playback"], mediaTitle: [1, "media-title"]}, [[0, "vmMediaProviderConnect", "onProviderConnect"], [0, "vmMediaProviderDisconnect", "onProviderDisconnect"]]]);
      t7.VmVideo = pn2;
      var gn2 = (0, ei.proxyCustomElement)(yi2, [1, "vm-vimeo", {videoId: [1, "video-id"], byline: [4], color: [1], portrait: [4], noAutoAspectRatio: [4, "no-auto-aspect-ratio"], poster: [1], cookies: [4], language: [1], aspectRatio: [1, "aspect-ratio"], autoplay: [4], controls: [4], logger: [16], loop: [4], muted: [4], playsinline: [4], embedSrc: [32], mediaTitle: [32]}]);
      t7.VmVimeo = gn2;
      var bn2 = (0, ei.proxyCustomElement)(fi2, [1, "vm-volume-control", {lowVolumeIcon: [1, "low-volume-icon"], highVolumeIcon: [1, "high-volume-icon"], mutedIcon: [1, "muted-icon"], icons: [1], tooltipPosition: [1, "tooltip-position"], tooltipDirection: [1, "tooltip-direction"], hideTooltip: [4, "hide-tooltip"], muteKeys: [1, "mute-keys"], noKeyboard: [4, "no-keyboard"], muted: [4], volume: [2], isMobile: [4, "is-mobile"], i18n: [16], currentVolume: [32], isSliderActive: [32]}]);
      t7.VmVolumeControl = bn2;
      var yn = (0, ei.proxyCustomElement)(Ci2, [1, "vm-youtube", {cookies: [4], videoId: [1, "video-id"], showFullscreenControl: [4, "show-fullscreen-control"], poster: [1], language: [1], autoplay: [4], controls: [4], logger: [16], loop: [4], muted: [4], playsinline: [4], embedSrc: [32], mediaTitle: [32]}]);
      t7.VmYoutube = yn, t7.defineCustomElements = (e7) => {
        typeof customElements != "undefined" && [$i2, wi2, Si2, xi2, Vi2, Pi2, Ei2, Ai2, Ri, Mi, Li, Ii, Di, Fi, Hi, Ni, zi, Oi, _i, Qi, ji, Bi, Wi, Ui, qi, Ki, Gi, Yi, Ji, Xi, Zi, en2, tn2, nn2, sn2, on2, an2, rn2, ln2, cn2, dn2, hn2, un2, mn2, vn2, pn2, gn2, bn2, yn].forEach((t8) => {
          customElements.get(t8.is) || customElements.define(t8.is, t8, e7);
        });
      };
    }(Zt3 = {path: Xt3, exports: {}, require: function(e6, t7) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t7 == null && Zt3.path);
    }}, Zt3.exports), Zt3.exports);
    function ii(e6) {
      let t7, i3;
      const h3 = e6[14].default, u3 = u2(h3, e6, e6[13], null);
      return {c() {
        t7 = x2("vm-default-ui"), u3 && u3.c(), S4(t7, "class", e6[0]), S4(t7, "style", e6[1]), S4(t7, "no-click-to-play", e6[2]), S4(t7, "no-dbl-click-fullscreen", e6[3]), S4(t7, "no-captions", e6[4]), S4(t7, "no-poster", e6[5]), S4(t7, "no-spinner", e6[6]), S4(t7, "no-controls", e6[7]), S4(t7, "no-settings", e6[8]), S4(t7, "no-loading-screen", e6[9]);
      }, m(n4, s4) {
        b2(n4, t7, s4), u3 && u3.m(t7, null), e6[15](t7), i3 = true;
      }, p(e7, [n4]) {
        u3 && u3.p && 8192 & n4 && f2(u3, h3, e7, e7[13], n4, null, null), (!i3 || 1 & n4) && S4(t7, "class", e7[0]), (!i3 || 2 & n4) && S4(t7, "style", e7[1]), (!i3 || 4 & n4) && S4(t7, "no-click-to-play", e7[2]), (!i3 || 8 & n4) && S4(t7, "no-dbl-click-fullscreen", e7[3]), (!i3 || 16 & n4) && S4(t7, "no-captions", e7[4]), (!i3 || 32 & n4) && S4(t7, "no-poster", e7[5]), (!i3 || 64 & n4) && S4(t7, "no-spinner", e7[6]), (!i3 || 128 & n4) && S4(t7, "no-controls", e7[7]), (!i3 || 256 & n4) && S4(t7, "no-settings", e7[8]), (!i3 || 512 & n4) && S4(t7, "no-loading-screen", e7[9]);
      }, i(e7) {
        i3 || (ct(u3, e7), i3 = true);
      }, o(e7) {
        lt(u3, e7), i3 = false;
      }, d(i4) {
        i4 && w2(t7), u3 && u3.d(i4), e6[15](null);
      }};
    }
    function ni(e6, t7, i3) {
      let n4, {$$slots: s4 = {}, $$scope: o4} = t7;
      B4();
      let {class: a4} = t7, {style: r5} = t7, {noClickToPlay: l3 = false} = t7, {noDblClickFullscreen: c3 = false} = t7, {noCaptions: d4 = false} = t7, {noPoster: v5 = false} = t7, {noSpinner: p3 = false} = t7, {noControls: g3 = false} = t7, {noSettings: b5 = false} = t7, {noLoadingScreen: y3 = false} = t7;
      return C2(() => {
      }), e6.$$set = (e7) => {
        "class" in e7 && i3(0, a4 = e7.class), "style" in e7 && i3(1, r5 = e7.style), "noClickToPlay" in e7 && i3(2, l3 = e7.noClickToPlay), "noDblClickFullscreen" in e7 && i3(3, c3 = e7.noDblClickFullscreen), "noCaptions" in e7 && i3(4, d4 = e7.noCaptions), "noPoster" in e7 && i3(5, v5 = e7.noPoster), "noSpinner" in e7 && i3(6, p3 = e7.noSpinner), "noControls" in e7 && i3(7, g3 = e7.noControls), "noSettings" in e7 && i3(8, b5 = e7.noSettings), "noLoadingScreen" in e7 && i3(9, y3 = e7.noLoadingScreen), "$$scope" in e7 && i3(13, o4 = e7.$$scope);
      }, [a4, r5, l3, c3, d4, v5, p3, g3, b5, y3, n4, () => n4, () => n4, o4, s4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          n4 = e7, i3(10, n4);
        });
      }];
    }
    R6("vm-audio", ti.VmAudio), R6("vm-file", ti.VmFile), R6("vm-caption-control", ti.VmCaptionControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-captions", ti.VmCaptions), R6("vm-click-to-play", ti.VmClickToPlay), R6("vm-control", ti.VmControl), R6("vm-control-group", ti.VmControlGroup), R6("vm-control-spacer", ti.VmControlSpacer), R6("vm-controls", ti.VmControls), R6("vm-current-time", ti.VmCurrentTime), R6("vm-time", ti.VmTime), R6("vm-dailymotion", ti.VmDailymotion), R6("vm-embed", ti.VmEmbed), R6("vm-dash", ti.VmDash), R6("vm-file", ti.VmFile), R6("vm-video", ti.VmVideo), R6("vm-dbl-click-fullscreen", ti.VmDblClickFullscreen), R6("vm-default-controls", ti.VmDefaultControls), R6("vm-caption-control", ti.VmCaptionControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-control-group", ti.VmControlGroup), R6("vm-control-spacer", ti.VmControlSpacer), R6("vm-controls", ti.VmControls), R6("vm-current-time", ti.VmCurrentTime), R6("vm-time", ti.VmTime), R6("vm-end-time", ti.VmEndTime), R6("vm-fullscreen-control", ti.VmFullscreenControl), R6("vm-live-indicator", ti.VmLiveIndicator), R6("vm-mute-control", ti.VmMuteControl), R6("vm-pip-control", ti.VmPipControl), R6("vm-playback-control", ti.VmPlaybackControl), R6("vm-scrim", ti.VmScrim), R6("vm-scrubber-control", ti.VmScrubberControl), R6("vm-slider", ti.VmSlider), R6("vm-settings-control", ti.VmSettingsControl), R6("vm-time-progress", ti.VmTimeProgress), R6("vm-volume-control", ti.VmVolumeControl), R6("vm-default-settings", ti.VmDefaultSettings), R6("vm-icon", ti.VmIcon), R6("vm-menu", ti.VmMenu), R6("vm-menu-item", ti.VmMenuItem), R6("vm-menu-radio", ti.VmMenuRadio), R6("vm-menu-radio-group", ti.VmMenuRadioGroup), R6("vm-settings", ti.VmSettings), R6("vm-submenu", ti.VmSubmenu), R6("vm-default-ui", ti.VmDefaultUi), R6("vm-caption-control", ti.VmCaptionControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-captions", ti.VmCaptions), R6("vm-click-to-play", ti.VmClickToPlay), R6("vm-control-group", ti.VmControlGroup), R6("vm-control-spacer", ti.VmControlSpacer), R6("vm-controls", ti.VmControls), R6("vm-current-time", ti.VmCurrentTime), R6("vm-time", ti.VmTime), R6("vm-dbl-click-fullscreen", ti.VmDblClickFullscreen), R6("vm-default-controls", ti.VmDefaultControls), R6("vm-end-time", ti.VmEndTime), R6("vm-fullscreen-control", ti.VmFullscreenControl), R6("vm-live-indicator", ti.VmLiveIndicator), R6("vm-mute-control", ti.VmMuteControl), R6("vm-pip-control", ti.VmPipControl), R6("vm-playback-control", ti.VmPlaybackControl), R6("vm-scrim", ti.VmScrim), R6("vm-scrubber-control", ti.VmScrubberControl), R6("vm-slider", ti.VmSlider), R6("vm-settings-control", ti.VmSettingsControl), R6("vm-time-progress", ti.VmTimeProgress), R6("vm-volume-control", ti.VmVolumeControl), R6("vm-default-settings", ti.VmDefaultSettings), R6("vm-menu", ti.VmMenu), R6("vm-menu-item", ti.VmMenuItem), R6("vm-menu-radio", ti.VmMenuRadio), R6("vm-menu-radio-group", ti.VmMenuRadioGroup), R6("vm-settings", ti.VmSettings), R6("vm-submenu", ti.VmSubmenu), R6("vm-loading-screen", ti.VmLoadingScreen), R6("vm-poster", ti.VmPoster), R6("vm-spinner", ti.VmSpinner), R6("vm-ui", ti.VmUi);
    function si(e6) {
      let t7, i3, h3, u3;
      const m4 = e6[86].default, g3 = u2(m4, e6, e6[85], null);
      return {c() {
        t7 = x2("vm-player"), g3 && g3.c(), S4(t7, "class", e6[0]), S4(t7, "style", e6[1]), S4(t7, "theme", e6[2]), S4(t7, "icons", e6[3]), S4(t7, "paused", e6[4]), S4(t7, "playing", e6[5]), S4(t7, "duration", e6[6]), S4(t7, "media-title", e6[7]), S4(t7, "current-provider", e6[8]), S4(t7, "current-src", e6[9]), S4(t7, "current-poster", e6[10]), S4(t7, "current-time", e6[11]), S4(t7, "autoplay", e6[12]), S4(t7, "ready", e6[13]), S4(t7, "playback-ready", e6[14]), S4(t7, "loop", e6[15]), S4(t7, "muted", e6[16]), S4(t7, "buffered", e6[17]), S4(t7, "playback-rate", e6[18]), S4(t7, "playback-quality", e6[19]), S4(t7, "seeking", e6[20]), S4(t7, "debug", e6[21]), S4(t7, "playback-started", e6[22]), S4(t7, "playback-ended", e6[23]), S4(t7, "buffering", e6[24]), S4(t7, "controls", e6[25]), S4(t7, "is-controls-active", e6[26]), S4(t7, "is-settings-active", e6[27]), S4(t7, "volume", e6[28]), S4(t7, "is-fullscreen-active", e6[29]), S4(t7, "aspect-ratio", e6[30]), S4(t7, "view-type", e6[31]), S4(t7, "is-audio-view", e6[32]), S4(t7, "is-video-view", e6[33]), S4(t7, "media-type", e6[34]), S4(t7, "is-audio", e6[35]), S4(t7, "is-video", e6[36]), S4(t7, "is-live", e6[37]), S4(t7, "is-mobile", e6[38]), S4(t7, "is-touch", e6[39]), S4(t7, "is-pi-p-active", e6[40]), S4(t7, "current-text-track", e6[41]), S4(t7, "is-text-track-visible", e6[42]), S4(t7, "should-render-native-text-tracks", e6[43]), S4(t7, "current-audio-track", e6[44]), S4(t7, "autopause", e6[45]), S4(t7, "playsinline", e6[46]), S4(t7, "language", e6[47]);
      }, m(n4, s4) {
        b2(n4, t7, s4), g3 && g3.m(t7, null), e6[87](t7), i3 = true, h3 || (u3 = [E2(t7, "vmThemeChange", e6[49]), E2(t7, "vmPausedChange", e6[49]), E2(t7, "vmPlay", e6[49]), E2(t7, "vmPlayingChange", e6[49]), E2(t7, "vmSeekingChange", e6[49]), E2(t7, "vmSeeked", e6[49]), E2(t7, "vmBufferingChange", e6[49]), E2(t7, "vmDurationChange", e6[49]), E2(t7, "vmCurrentTimeChange", e6[49]), E2(t7, "vmReady", e6[49]), E2(t7, "vmPlaybackReady", e6[49]), E2(t7, "vmPlaybackStarted", e6[49]), E2(t7, "vmPlaybackEnded", e6[49]), E2(t7, "vmBufferedChange", e6[49]), E2(t7, "vmError", e6[49]), E2(t7, "vmLoadStart", e6[49]), E2(t7, "vmCurrentProviderChange", e6[49]), E2(t7, "vmCurrentSrcChange", e6[49]), E2(t7, "vmCurrentPosterChange", e6[49]), E2(t7, "vmMediaTitleChange", e6[49]), E2(t7, "vmControlsChange", e6[49]), E2(t7, "vmPlaybackRateChange", e6[49]), E2(t7, "vmPlaybackRatesChange", e6[49]), E2(t7, "vmPlaybackQualityChange", e6[49]), E2(t7, "vmPlaybackQualitiesChange", e6[49]), E2(t7, "vmMutedChange", e6[49]), E2(t7, "vmVolumeChange", e6[49]), E2(t7, "vmViewTypeChange", e6[49]), E2(t7, "vmMediaTypeChange", e6[49]), E2(t7, "vmLiveChange", e6[49]), E2(t7, "vmTouchChange", e6[49]), E2(t7, "vmLanguageChange", e6[49]), E2(t7, "vmI18nChange", e6[49]), E2(t7, "vmTranslationsChange", e6[49]), E2(t7, "vmLanguagesChange", e6[49]), E2(t7, "vmFullscreenChange", e6[49]), E2(t7, "vmPiPChange", e6[49]), E2(t7, "vmTextTracksChange", e6[49]), E2(t7, "vmCurrentTextTrackChange", e6[49]), E2(t7, "vmTextTrackVisibleChange", e6[49]), E2(t7, "vmAudioTracksChange", e6[49]), E2(t7, "vmCurrentAudioTrackChange", e6[49])], h3 = true);
      }, p(e7, n4) {
        g3 && g3.p && 8388608 & n4[2] && f2(g3, m4, e7, e7[85], n4, null, null), (!i3 || 1 & n4[0]) && S4(t7, "class", e7[0]), (!i3 || 2 & n4[0]) && S4(t7, "style", e7[1]), (!i3 || 4 & n4[0]) && S4(t7, "theme", e7[2]), (!i3 || 8 & n4[0]) && S4(t7, "icons", e7[3]), (!i3 || 16 & n4[0]) && S4(t7, "paused", e7[4]), (!i3 || 32 & n4[0]) && S4(t7, "playing", e7[5]), (!i3 || 64 & n4[0]) && S4(t7, "duration", e7[6]), (!i3 || 128 & n4[0]) && S4(t7, "media-title", e7[7]), (!i3 || 256 & n4[0]) && S4(t7, "current-provider", e7[8]), (!i3 || 512 & n4[0]) && S4(t7, "current-src", e7[9]), (!i3 || 1024 & n4[0]) && S4(t7, "current-poster", e7[10]), (!i3 || 2048 & n4[0]) && S4(t7, "current-time", e7[11]), (!i3 || 4096 & n4[0]) && S4(t7, "autoplay", e7[12]), (!i3 || 8192 & n4[0]) && S4(t7, "ready", e7[13]), (!i3 || 16384 & n4[0]) && S4(t7, "playback-ready", e7[14]), (!i3 || 32768 & n4[0]) && S4(t7, "loop", e7[15]), (!i3 || 65536 & n4[0]) && S4(t7, "muted", e7[16]), (!i3 || 131072 & n4[0]) && S4(t7, "buffered", e7[17]), (!i3 || 262144 & n4[0]) && S4(t7, "playback-rate", e7[18]), (!i3 || 524288 & n4[0]) && S4(t7, "playback-quality", e7[19]), (!i3 || 1048576 & n4[0]) && S4(t7, "seeking", e7[20]), (!i3 || 2097152 & n4[0]) && S4(t7, "debug", e7[21]), (!i3 || 4194304 & n4[0]) && S4(t7, "playback-started", e7[22]), (!i3 || 8388608 & n4[0]) && S4(t7, "playback-ended", e7[23]), (!i3 || 16777216 & n4[0]) && S4(t7, "buffering", e7[24]), (!i3 || 33554432 & n4[0]) && S4(t7, "controls", e7[25]), (!i3 || 67108864 & n4[0]) && S4(t7, "is-controls-active", e7[26]), (!i3 || 134217728 & n4[0]) && S4(t7, "is-settings-active", e7[27]), (!i3 || 268435456 & n4[0]) && S4(t7, "volume", e7[28]), (!i3 || 536870912 & n4[0]) && S4(t7, "is-fullscreen-active", e7[29]), (!i3 || 1073741824 & n4[0]) && S4(t7, "aspect-ratio", e7[30]), (!i3 || 1 & n4[1]) && S4(t7, "view-type", e7[31]), (!i3 || 2 & n4[1]) && S4(t7, "is-audio-view", e7[32]), (!i3 || 4 & n4[1]) && S4(t7, "is-video-view", e7[33]), (!i3 || 8 & n4[1]) && S4(t7, "media-type", e7[34]), (!i3 || 16 & n4[1]) && S4(t7, "is-audio", e7[35]), (!i3 || 32 & n4[1]) && S4(t7, "is-video", e7[36]), (!i3 || 64 & n4[1]) && S4(t7, "is-live", e7[37]), (!i3 || 128 & n4[1]) && S4(t7, "is-mobile", e7[38]), (!i3 || 256 & n4[1]) && S4(t7, "is-touch", e7[39]), (!i3 || 512 & n4[1]) && S4(t7, "is-pi-p-active", e7[40]), (!i3 || 1024 & n4[1]) && S4(t7, "current-text-track", e7[41]), (!i3 || 2048 & n4[1]) && S4(t7, "is-text-track-visible", e7[42]), (!i3 || 4096 & n4[1]) && S4(t7, "should-render-native-text-tracks", e7[43]), (!i3 || 8192 & n4[1]) && S4(t7, "current-audio-track", e7[44]), (!i3 || 16384 & n4[1]) && S4(t7, "autopause", e7[45]), (!i3 || 32768 & n4[1]) && S4(t7, "playsinline", e7[46]), (!i3 || 65536 & n4[1]) && S4(t7, "language", e7[47]);
      }, i(e7) {
        i3 || (ct(g3, e7), i3 = true);
      }, o(e7) {
        lt(g3, e7), i3 = false;
      }, d(i4) {
        i4 && w2(t7), g3 && g3.d(i4), e6[87](null), h3 = false, r2(u3);
      }};
    }
    function oi(e6, t7, i3) {
      let n4, {$$slots: s4 = {}, $$scope: o4} = t7, a4 = false;
      const r5 = B4();
      let {class: l3} = t7, {style: c3} = t7, {logger: d4} = t7, {theme: v5} = t7, {icons: p3 = "vime"} = t7, {paused: g3 = true} = t7, {playing: b5 = false} = t7, {duration: y3 = -1} = t7, {mediaTitle: f3} = t7, {currentProvider: k5} = t7, {currentSrc: T6} = t7, {currentPoster: C4} = t7, {currentTime: $2 = 0} = t7, {autoplay: w4 = false} = t7, {ready: S5 = false} = t7, {playbackReady: x4 = false} = t7, {loop: V4 = false} = t7, {muted: P7 = false} = t7, {buffered: E4 = 0} = t7, {playbackRate: A5 = 1} = t7, {playbackRates: R7 = [1]} = t7, {playbackQuality: L7} = t7, {playbackQualities: I3 = []} = t7, {seeking: D5 = false} = t7, {debug: F7 = false} = t7, {playbackStarted: H8 = false} = t7, {playbackEnded: N8 = false} = t7, {buffering: z6 = false} = t7, {controls: O6 = false} = t7, {isControlsActive: _4 = false} = t7, {isSettingsActive: Q6 = false} = t7, {volume: j5 = 50} = t7, {isFullscreenActive: B6 = false} = t7, {aspectRatio: W7 = "16:9"} = t7, {viewType: U6} = t7, {isAudioView: q8 = false} = t7, {isVideoView: K6 = false} = t7, {mediaType: G6} = t7, {isAudio: Y5 = false} = t7, {isVideo: J6 = false} = t7, {isLive: X5 = false} = t7, {isMobile: Z5 = false} = t7, {isTouch: ee4 = false} = t7, {isPiPActive: te4 = false} = t7, {textTracks: ie4 = []} = t7, {currentTextTrack: ne4 = -1} = t7, {isTextTrackVisible: se4 = true} = t7, {shouldRenderNativeTextTracks: oe4 = true} = t7, {audioTracks: ae4 = []} = t7, {currentAudioTrack: re4 = -1} = t7, {autopause: le4 = true} = t7, {playsinline: ce4 = false} = t7, {language: de4 = "en"} = t7, {translations: he4} = t7, {languages: ue4 = ["en"]} = t7, {i18n: me4} = t7;
      C2(() => {
        i3(50, d4 = d4 === void 0 ? n4.logger : d4), i3(51, he4 = he4 === void 0 ? n4.translations : he4), i3(52, me4 = me4 === void 0 ? n4.i18n : me4), i3(84, a4 = true);
      });
      return e6.$$set = (e7) => {
        "class" in e7 && i3(0, l3 = e7.class), "style" in e7 && i3(1, c3 = e7.style), "logger" in e7 && i3(50, d4 = e7.logger), "theme" in e7 && i3(2, v5 = e7.theme), "icons" in e7 && i3(3, p3 = e7.icons), "paused" in e7 && i3(4, g3 = e7.paused), "playing" in e7 && i3(5, b5 = e7.playing), "duration" in e7 && i3(6, y3 = e7.duration), "mediaTitle" in e7 && i3(7, f3 = e7.mediaTitle), "currentProvider" in e7 && i3(8, k5 = e7.currentProvider), "currentSrc" in e7 && i3(9, T6 = e7.currentSrc), "currentPoster" in e7 && i3(10, C4 = e7.currentPoster), "currentTime" in e7 && i3(11, $2 = e7.currentTime), "autoplay" in e7 && i3(12, w4 = e7.autoplay), "ready" in e7 && i3(13, S5 = e7.ready), "playbackReady" in e7 && i3(14, x4 = e7.playbackReady), "loop" in e7 && i3(15, V4 = e7.loop), "muted" in e7 && i3(16, P7 = e7.muted), "buffered" in e7 && i3(17, E4 = e7.buffered), "playbackRate" in e7 && i3(18, A5 = e7.playbackRate), "playbackRates" in e7 && i3(53, R7 = e7.playbackRates), "playbackQuality" in e7 && i3(19, L7 = e7.playbackQuality), "playbackQualities" in e7 && i3(54, I3 = e7.playbackQualities), "seeking" in e7 && i3(20, D5 = e7.seeking), "debug" in e7 && i3(21, F7 = e7.debug), "playbackStarted" in e7 && i3(22, H8 = e7.playbackStarted), "playbackEnded" in e7 && i3(23, N8 = e7.playbackEnded), "buffering" in e7 && i3(24, z6 = e7.buffering), "controls" in e7 && i3(25, O6 = e7.controls), "isControlsActive" in e7 && i3(26, _4 = e7.isControlsActive), "isSettingsActive" in e7 && i3(27, Q6 = e7.isSettingsActive), "volume" in e7 && i3(28, j5 = e7.volume), "isFullscreenActive" in e7 && i3(29, B6 = e7.isFullscreenActive), "aspectRatio" in e7 && i3(30, W7 = e7.aspectRatio), "viewType" in e7 && i3(31, U6 = e7.viewType), "isAudioView" in e7 && i3(32, q8 = e7.isAudioView), "isVideoView" in e7 && i3(33, K6 = e7.isVideoView), "mediaType" in e7 && i3(34, G6 = e7.mediaType), "isAudio" in e7 && i3(35, Y5 = e7.isAudio), "isVideo" in e7 && i3(36, J6 = e7.isVideo), "isLive" in e7 && i3(37, X5 = e7.isLive), "isMobile" in e7 && i3(38, Z5 = e7.isMobile), "isTouch" in e7 && i3(39, ee4 = e7.isTouch), "isPiPActive" in e7 && i3(40, te4 = e7.isPiPActive), "textTracks" in e7 && i3(55, ie4 = e7.textTracks), "currentTextTrack" in e7 && i3(41, ne4 = e7.currentTextTrack), "isTextTrackVisible" in e7 && i3(42, se4 = e7.isTextTrackVisible), "shouldRenderNativeTextTracks" in e7 && i3(43, oe4 = e7.shouldRenderNativeTextTracks), "audioTracks" in e7 && i3(56, ae4 = e7.audioTracks), "currentAudioTrack" in e7 && i3(44, re4 = e7.currentAudioTrack), "autopause" in e7 && i3(45, le4 = e7.autopause), "playsinline" in e7 && i3(46, ce4 = e7.playsinline), "language" in e7 && i3(47, de4 = e7.language), "translations" in e7 && i3(51, he4 = e7.translations), "languages" in e7 && i3(57, ue4 = e7.languages), "i18n" in e7 && i3(52, me4 = e7.i18n), "$$scope" in e7 && i3(85, o4 = e7.$$scope);
      }, e6.$$.update = () => {
        655360 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "logger", d4), 4325376 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "playbackRates", R7), 8519680 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "playbackQualities", I3), 16908288 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "textTracks", ie4), 33685504 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "audioTracks", ae4), 1179648 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "translations", he4), 67239936 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "languages", ue4), 2228224 & e6.$$.dirty[1] | 4194304 & e6.$$.dirty[2] && a4 && M3(n4, "i18n", me4);
      }, [l3, c3, v5, p3, g3, b5, y3, f3, k5, T6, C4, $2, w4, S5, x4, V4, P7, E4, A5, L7, D5, F7, H8, N8, z6, O6, _4, Q6, j5, B6, W7, U6, q8, K6, G6, Y5, J6, X5, Z5, ee4, te4, ne4, se4, oe4, re4, le4, ce4, de4, n4, (e7) => {
        e7.stopPropagation(), r5(e7.type, e7.detail);
      }, d4, he4, me4, R7, I3, ie4, ae4, ue4, (...e7) => n4.getProvider(...e7), (...e7) => n4.getAdapter(...e7), (...e7) => n4.play(...e7), (...e7) => n4.pause(...e7), (...e7) => n4.canPlay(...e7), (...e7) => n4.canAutoplay(...e7), (...e7) => n4.canMutedAutoplay(...e7), (...e7) => n4.canSetPlaybackRate(...e7), (...e7) => n4.canSetPlaybackQuality(...e7), (...e7) => n4.canSetFullscreen(...e7), (...e7) => n4.enterFullscreen(...e7), (...e7) => n4.exitFullscreen(...e7), (...e7) => n4.canSetPiP(...e7), (...e7) => n4.enterPiP(...e7), (...e7) => n4.exitPiP(...e7), (...e7) => n4.canSetAudioTrack(...e7), (...e7) => n4.setCurrentAudioTrack(...e7), (...e7) => n4.canSetTextTrack(...e7), (...e7) => n4.setCurrentTextTrack(...e7), (...e7) => n4.canSetTextTrackVisibility(...e7), (...e7) => n4.setTextTrackVisibility(...e7), (...e7) => n4.extendLanguage(...e7), (...e7) => n4.getContainer(...e7), (...e7) => n4.callAdapter(...e7), () => n4, () => n4, a4, o4, s4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          n4 = e7, i3(48, n4);
        });
      }];
    }
    R6("vm-embed", ti.VmEmbed), R6("vm-end-time", ti.VmEndTime), R6("vm-time", ti.VmTime), R6("vm-file", ti.VmFile), R6("vm-fullscreen-control", ti.VmFullscreenControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-hls", ti.VmHls), R6("vm-file", ti.VmFile), R6("vm-video", ti.VmVideo), R6("vm-icon", ti.VmIcon), R6("vm-icon-library", ti.VmIconLibrary), R6("vm-live-indicator", ti.VmLiveIndicator), R6("vm-loading-screen", ti.VmLoadingScreen), R6("vm-menu", ti.VmMenu), R6("vm-menu-item", ti.VmMenuItem), R6("vm-icon", ti.VmIcon), R6("vm-menu-radio", ti.VmMenuRadio), R6("vm-icon", ti.VmIcon), R6("vm-menu-item", ti.VmMenuItem), R6("vm-menu-radio-group", ti.VmMenuRadioGroup), R6("vm-mute-control", ti.VmMuteControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-pip-control", ti.VmPipControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-playback-control", ti.VmPlaybackControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-player", ti.VmPlayer);
    function ai(e6) {
      let t7, i3;
      const h3 = e6[17].default, u3 = u2(h3, e6, e6[16], null);
      return {c() {
        t7 = x2("vm-video"), u3 && u3.c(), S4(t7, "class", e6[0]), S4(t7, "style", e6[1]), S4(t7, "will-attach", e6[2]), S4(t7, "has-custom-text-manager", e6[3]), S4(t7, "cross-origin", e6[4]), S4(t7, "preload", e6[5]), S4(t7, "poster", e6[6]), S4(t7, "controls-list", e6[7]), S4(t7, "auto-pip", e6[8]), S4(t7, "disable-pip", e6[9]), S4(t7, "disable-remote-playback", e6[10]), S4(t7, "media-title", e6[11]);
      }, m(n4, s4) {
        b2(n4, t7, s4), u3 && u3.m(t7, null), e6[18](t7), i3 = true;
      }, p(e7, [n4]) {
        u3 && u3.p && 65536 & n4 && f2(u3, h3, e7, e7[16], n4, null, null), (!i3 || 1 & n4) && S4(t7, "class", e7[0]), (!i3 || 2 & n4) && S4(t7, "style", e7[1]), (!i3 || 4 & n4) && S4(t7, "will-attach", e7[2]), (!i3 || 8 & n4) && S4(t7, "has-custom-text-manager", e7[3]), (!i3 || 16 & n4) && S4(t7, "cross-origin", e7[4]), (!i3 || 32 & n4) && S4(t7, "preload", e7[5]), (!i3 || 64 & n4) && S4(t7, "poster", e7[6]), (!i3 || 128 & n4) && S4(t7, "controls-list", e7[7]), (!i3 || 256 & n4) && S4(t7, "auto-pip", e7[8]), (!i3 || 512 & n4) && S4(t7, "disable-pip", e7[9]), (!i3 || 1024 & n4) && S4(t7, "disable-remote-playback", e7[10]), (!i3 || 2048 & n4) && S4(t7, "media-title", e7[11]);
      }, i(e7) {
        i3 || (ct(u3, e7), i3 = true);
      }, o(e7) {
        lt(u3, e7), i3 = false;
      }, d(i4) {
        i4 && w2(t7), u3 && u3.d(i4), e6[18](null);
      }};
    }
    function ri(e6, t7, i3) {
      let n4, {$$slots: s4 = {}, $$scope: o4} = t7;
      B4();
      let {class: a4} = t7, {style: r5} = t7, {willAttach: l3 = false} = t7, {hasCustomTextManager: c3 = false} = t7, {crossOrigin: d4} = t7, {preload: v5 = "metadata"} = t7, {poster: p3} = t7, {controlsList: g3} = t7, {autoPiP: b5} = t7, {disablePiP: y3} = t7, {disableRemotePlayback: f3} = t7, {mediaTitle: k5} = t7;
      return C2(() => {
      }), e6.$$set = (e7) => {
        "class" in e7 && i3(0, a4 = e7.class), "style" in e7 && i3(1, r5 = e7.style), "willAttach" in e7 && i3(2, l3 = e7.willAttach), "hasCustomTextManager" in e7 && i3(3, c3 = e7.hasCustomTextManager), "crossOrigin" in e7 && i3(4, d4 = e7.crossOrigin), "preload" in e7 && i3(5, v5 = e7.preload), "poster" in e7 && i3(6, p3 = e7.poster), "controlsList" in e7 && i3(7, g3 = e7.controlsList), "autoPiP" in e7 && i3(8, b5 = e7.autoPiP), "disablePiP" in e7 && i3(9, y3 = e7.disablePiP), "disableRemotePlayback" in e7 && i3(10, f3 = e7.disableRemotePlayback), "mediaTitle" in e7 && i3(11, k5 = e7.mediaTitle), "$$scope" in e7 && i3(16, o4 = e7.$$scope);
      }, [a4, r5, l3, c3, d4, v5, p3, g3, b5, y3, f3, k5, n4, (...e7) => n4.getAdapter(...e7), () => n4, () => n4, o4, s4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          n4 = e7, i3(12, n4);
        });
      }];
    }
    R6("vm-poster", ti.VmPoster), R6("vm-scrim", ti.VmScrim), R6("vm-scrubber-control", ti.VmScrubberControl), R6("vm-slider", ti.VmSlider), R6("vm-tooltip", ti.VmTooltip), R6("vm-settings", ti.VmSettings), R6("vm-menu", ti.VmMenu), R6("vm-settings-control", ti.VmSettingsControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-tooltip", ti.VmTooltip), R6("vm-skeleton", ti.VmSkeleton), R6("vm-slider", ti.VmSlider), R6("vm-spinner", ti.VmSpinner), R6("vm-submenu", ti.VmSubmenu), R6("vm-icon", ti.VmIcon), R6("vm-menu", ti.VmMenu), R6("vm-menu-item", ti.VmMenuItem), R6("vm-time", ti.VmTime), R6("vm-time-progress", ti.VmTimeProgress), R6("vm-current-time", ti.VmCurrentTime), R6("vm-time", ti.VmTime), R6("vm-end-time", ti.VmEndTime), R6("vm-tooltip", ti.VmTooltip), R6("vm-ui", ti.VmUi), R6("vm-video", ti.VmVideo), R6("vm-file", ti.VmFile);
    function li(e6) {
      let t7, i3, h3, u3;
      const m4 = e6[20].default, p3 = u2(m4, e6, e6[19], null);
      return {c() {
        t7 = x2("vm-youtube"), p3 && p3.c(), S4(t7, "class", e6[0]), S4(t7, "style", e6[1]), S4(t7, "cookies", e6[2]), S4(t7, "video-id", e6[3]), S4(t7, "show-fullscreen-control", e6[4]), S4(t7, "poster", e6[5]), S4(t7, "language", e6[6]), S4(t7, "autoplay", e6[7]), S4(t7, "controls", e6[8]), S4(t7, "loop", e6[9]), S4(t7, "muted", e6[10]), S4(t7, "playsinline", e6[11]);
      }, m(n4, s4) {
        b2(n4, t7, s4), p3 && p3.m(t7, null), e6[21](t7), i3 = true, h3 || (u3 = E2(t7, "vmLoadStart", e6[13]), h3 = true);
      }, p(e7, [n4]) {
        p3 && p3.p && 524288 & n4 && f2(p3, m4, e7, e7[19], n4, null, null), (!i3 || 1 & n4) && S4(t7, "class", e7[0]), (!i3 || 2 & n4) && S4(t7, "style", e7[1]), (!i3 || 4 & n4) && S4(t7, "cookies", e7[2]), (!i3 || 8 & n4) && S4(t7, "video-id", e7[3]), (!i3 || 16 & n4) && S4(t7, "show-fullscreen-control", e7[4]), (!i3 || 32 & n4) && S4(t7, "poster", e7[5]), (!i3 || 64 & n4) && S4(t7, "language", e7[6]), (!i3 || 128 & n4) && S4(t7, "autoplay", e7[7]), (!i3 || 256 & n4) && S4(t7, "controls", e7[8]), (!i3 || 512 & n4) && S4(t7, "loop", e7[9]), (!i3 || 1024 & n4) && S4(t7, "muted", e7[10]), (!i3 || 2048 & n4) && S4(t7, "playsinline", e7[11]);
      }, i(e7) {
        i3 || (ct(p3, e7), i3 = true);
      }, o(e7) {
        lt(p3, e7), i3 = false;
      }, d(i4) {
        i4 && w2(t7), p3 && p3.d(i4), e6[21](null), h3 = false, u3();
      }};
    }
    function ci(e6, t7, i3) {
      let n4, {$$slots: s4 = {}, $$scope: o4} = t7, a4 = false;
      const r5 = B4();
      let {class: l3} = t7, {style: c3} = t7, {cookies: d4 = false} = t7, {videoId: v5} = t7, {showFullscreenControl: p3 = true} = t7, {poster: g3} = t7, {language: b5 = "en"} = t7, {autoplay: y3 = false} = t7, {controls: f3 = false} = t7, {logger: k5} = t7, {loop: T6 = false} = t7, {muted: C4 = false} = t7, {playsinline: $2 = false} = t7;
      C2(() => {
        i3(18, a4 = true);
      });
      return e6.$$set = (e7) => {
        "class" in e7 && i3(0, l3 = e7.class), "style" in e7 && i3(1, c3 = e7.style), "cookies" in e7 && i3(2, d4 = e7.cookies), "videoId" in e7 && i3(3, v5 = e7.videoId), "showFullscreenControl" in e7 && i3(4, p3 = e7.showFullscreenControl), "poster" in e7 && i3(5, g3 = e7.poster), "language" in e7 && i3(6, b5 = e7.language), "autoplay" in e7 && i3(7, y3 = e7.autoplay), "controls" in e7 && i3(8, f3 = e7.controls), "logger" in e7 && i3(14, k5 = e7.logger), "loop" in e7 && i3(9, T6 = e7.loop), "muted" in e7 && i3(10, C4 = e7.muted), "playsinline" in e7 && i3(11, $2 = e7.playsinline), "$$scope" in e7 && i3(19, o4 = e7.$$scope);
      }, e6.$$.update = () => {
        282624 & e6.$$.dirty && a4 && M3(n4, "logger", k5);
      }, [l3, c3, d4, v5, p3, g3, b5, y3, f3, T6, C4, $2, n4, (e7) => {
        e7.stopPropagation(), r5(e7.type, e7.detail);
      }, k5, (...e7) => n4.getAdapter(...e7), () => n4, () => n4, a4, o4, s4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          n4 = e7, i3(12, n4);
        });
      }];
    }
    R6("vm-vimeo", ti.VmVimeo), R6("vm-embed", ti.VmEmbed), R6("vm-volume-control", ti.VmVolumeControl), R6("vm-control", ti.VmControl), R6("vm-icon", ti.VmIcon), R6("vm-mute-control", ti.VmMuteControl), R6("vm-tooltip", ti.VmTooltip), R6("vm-slider", ti.VmSlider), R6("vm-youtube", ti.VmYoutube), R6("vm-embed", ti.VmEmbed);
    var di = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, ni, ii, i2, {class: 0, style: 1, noClickToPlay: 2, noDblClickFullscreen: 3, noCaptions: 4, noPoster: 5, noSpinner: 6, noControls: 7, noSettings: 8, noLoadingScreen: 9, ref: 11, getWebComponent: 12});
      }
      get ref() {
        return this.$$.ctx[11];
      }
      get getWebComponent() {
        return this.$$.ctx[12];
      }
    };
    var hi = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, oi, si, i2, {class: 0, style: 1, logger: 50, theme: 2, icons: 3, paused: 4, playing: 5, duration: 6, mediaTitle: 7, currentProvider: 8, currentSrc: 9, currentPoster: 10, currentTime: 11, autoplay: 12, ready: 13, playbackReady: 14, loop: 15, muted: 16, buffered: 17, playbackRate: 18, playbackRates: 53, playbackQuality: 19, playbackQualities: 54, seeking: 20, debug: 21, playbackStarted: 22, playbackEnded: 23, buffering: 24, controls: 25, isControlsActive: 26, isSettingsActive: 27, volume: 28, isFullscreenActive: 29, aspectRatio: 30, viewType: 31, isAudioView: 32, isVideoView: 33, mediaType: 34, isAudio: 35, isVideo: 36, isLive: 37, isMobile: 38, isTouch: 39, isPiPActive: 40, textTracks: 55, currentTextTrack: 41, isTextTrackVisible: 42, shouldRenderNativeTextTracks: 43, audioTracks: 56, currentAudioTrack: 44, autopause: 45, playsinline: 46, language: 47, translations: 51, languages: 57, i18n: 52, getProvider: 58, getAdapter: 59, play: 60, pause: 61, canPlay: 62, canAutoplay: 63, canMutedAutoplay: 64, canSetPlaybackRate: 65, canSetPlaybackQuality: 66, canSetFullscreen: 67, enterFullscreen: 68, exitFullscreen: 69, canSetPiP: 70, enterPiP: 71, exitPiP: 72, canSetAudioTrack: 73, setCurrentAudioTrack: 74, canSetTextTrack: 75, setCurrentTextTrack: 76, canSetTextTrackVisibility: 77, setTextTrackVisibility: 78, extendLanguage: 79, getContainer: 80, callAdapter: 81, ref: 82, getWebComponent: 83}, [-1, -1, -1]);
      }
      get getProvider() {
        return this.$$.ctx[58];
      }
      get getAdapter() {
        return this.$$.ctx[59];
      }
      get play() {
        return this.$$.ctx[60];
      }
      get pause() {
        return this.$$.ctx[61];
      }
      get canPlay() {
        return this.$$.ctx[62];
      }
      get canAutoplay() {
        return this.$$.ctx[63];
      }
      get canMutedAutoplay() {
        return this.$$.ctx[64];
      }
      get canSetPlaybackRate() {
        return this.$$.ctx[65];
      }
      get canSetPlaybackQuality() {
        return this.$$.ctx[66];
      }
      get canSetFullscreen() {
        return this.$$.ctx[67];
      }
      get enterFullscreen() {
        return this.$$.ctx[68];
      }
      get exitFullscreen() {
        return this.$$.ctx[69];
      }
      get canSetPiP() {
        return this.$$.ctx[70];
      }
      get enterPiP() {
        return this.$$.ctx[71];
      }
      get exitPiP() {
        return this.$$.ctx[72];
      }
      get canSetAudioTrack() {
        return this.$$.ctx[73];
      }
      get setCurrentAudioTrack() {
        return this.$$.ctx[74];
      }
      get canSetTextTrack() {
        return this.$$.ctx[75];
      }
      get setCurrentTextTrack() {
        return this.$$.ctx[76];
      }
      get canSetTextTrackVisibility() {
        return this.$$.ctx[77];
      }
      get setTextTrackVisibility() {
        return this.$$.ctx[78];
      }
      get extendLanguage() {
        return this.$$.ctx[79];
      }
      get getContainer() {
        return this.$$.ctx[80];
      }
      get callAdapter() {
        return this.$$.ctx[81];
      }
      get ref() {
        return this.$$.ctx[82];
      }
      get getWebComponent() {
        return this.$$.ctx[83];
      }
    };
    var ui = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, ri, ai, i2, {class: 0, style: 1, willAttach: 2, hasCustomTextManager: 3, crossOrigin: 4, preload: 5, poster: 6, controlsList: 7, autoPiP: 8, disablePiP: 9, disableRemotePlayback: 10, mediaTitle: 11, getAdapter: 13, ref: 14, getWebComponent: 15});
      }
      get getAdapter() {
        return this.$$.ctx[13];
      }
      get ref() {
        return this.$$.ctx[14];
      }
      get getWebComponent() {
        return this.$$.ctx[15];
      }
    };
    var mi = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, ci, li, i2, {class: 0, style: 1, cookies: 2, videoId: 3, showFullscreenControl: 4, poster: 5, language: 6, autoplay: 7, controls: 8, logger: 14, loop: 9, muted: 10, playsinline: 11, getAdapter: 15, ref: 16, getWebComponent: 17});
      }
      get getAdapter() {
        return this.$$.ctx[15];
      }
      get ref() {
        return this.$$.ctx[16];
      }
      get getWebComponent() {
        return this.$$.ctx[17];
      }
    };
    var vi = (e6, t7) => {
      typeof window != "undefined" && !customElements.get(e6) && customElements.define(e6, t7);
    };
    function pi(e6) {
      let t7;
      return {c() {
        t7 = x2("source"), L3(t7, "data-src", e6[0]), L3(t7, "type", "video/mp4");
      }, m(e7, i3) {
        b2(e7, t7, i3);
      }, p(e7, i3) {
        1 & i3 && L3(t7, "data-src", e7[0]);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function gi(e6) {
      let t7, i3, n4, s4;
      return t7 = new ui({props: {crossOrigin: true, poster: e6[1], $$slots: {default: [pi]}, $$scope: {ctx: e6}}}), n4 = new di({}), {c() {
        yt(t7.$$.fragment), i3 = P2(), yt(n4.$$.fragment);
      }, m(e7, o4) {
        $t(t7, e7, o4), b2(e7, i3, o4), $t(n4, e7, o4), s4 = true;
      }, p(e7, i4) {
        const n5 = {};
        2 & i4 && (n5.poster = e7[1]), 5 & i4 && (n5.$$scope = {dirty: i4, ctx: e7}), t7.$set(n5);
      }, i(e7) {
        s4 || (ct(t7.$$.fragment, e7), ct(n4.$$.fragment, e7), s4 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(n4.$$.fragment, e7), s4 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(i3), bt(n4, e7);
      }};
    }
    function bi(e6) {
      let t7, i3, n4;
      return i3 = new hi({props: {theme: "dark", style: "--vm-player-theme: #7F91EC;", $$slots: {default: [gi]}, $$scope: {ctx: e6}}}), {c() {
        t7 = x2("div"), yt(i3.$$.fragment), L3(t7, "class", "container svelte-e47we");
      }, m(e7, s4) {
        b2(e7, t7, s4), $t(i3, t7, null), n4 = true;
      }, p(e7, [t8]) {
        const n5 = {};
        7 & t8 && (n5.$$scope = {dirty: t8, ctx: e7}), i3.$set(n5);
      }, i(e7) {
        n4 || (ct(i3.$$.fragment, e7), n4 = true);
      }, o(e7) {
        lt(i3.$$.fragment, e7), n4 = false;
      }, d(e7) {
        e7 && w2(t7), bt(i3);
      }};
    }
    function yi(e6, t7, i3) {
      let {url: n4} = t7, {cover: s4} = t7;
      return e6.$$set = (e7) => {
        "url" in e7 && i3(0, n4 = e7.url), "cover" in e7 && i3(1, s4 = e7.cover);
      }, [n4, s4];
    }
    vi("vm-audio", ti.VmAudio), vi("vm-file", ti.VmFile), vi("vm-caption-control", ti.VmCaptionControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-captions", ti.VmCaptions), vi("vm-click-to-play", ti.VmClickToPlay), vi("vm-control", ti.VmControl), vi("vm-control-group", ti.VmControlGroup), vi("vm-control-spacer", ti.VmControlSpacer), vi("vm-controls", ti.VmControls), vi("vm-current-time", ti.VmCurrentTime), vi("vm-time", ti.VmTime), vi("vm-dailymotion", ti.VmDailymotion), vi("vm-embed", ti.VmEmbed), vi("vm-dash", ti.VmDash), vi("vm-file", ti.VmFile), vi("vm-video", ti.VmVideo), vi("vm-dbl-click-fullscreen", ti.VmDblClickFullscreen), vi("vm-default-controls", ti.VmDefaultControls), vi("vm-caption-control", ti.VmCaptionControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-control-group", ti.VmControlGroup), vi("vm-control-spacer", ti.VmControlSpacer), vi("vm-controls", ti.VmControls), vi("vm-current-time", ti.VmCurrentTime), vi("vm-time", ti.VmTime), vi("vm-end-time", ti.VmEndTime), vi("vm-fullscreen-control", ti.VmFullscreenControl), vi("vm-live-indicator", ti.VmLiveIndicator), vi("vm-mute-control", ti.VmMuteControl), vi("vm-pip-control", ti.VmPipControl), vi("vm-playback-control", ti.VmPlaybackControl), vi("vm-scrim", ti.VmScrim), vi("vm-scrubber-control", ti.VmScrubberControl), vi("vm-slider", ti.VmSlider), vi("vm-settings-control", ti.VmSettingsControl), vi("vm-time-progress", ti.VmTimeProgress), vi("vm-volume-control", ti.VmVolumeControl), vi("vm-default-settings", ti.VmDefaultSettings), vi("vm-icon", ti.VmIcon), vi("vm-menu", ti.VmMenu), vi("vm-menu-item", ti.VmMenuItem), vi("vm-menu-radio", ti.VmMenuRadio), vi("vm-menu-radio-group", ti.VmMenuRadioGroup), vi("vm-settings", ti.VmSettings), vi("vm-submenu", ti.VmSubmenu), vi("vm-default-ui", ti.VmDefaultUi), vi("vm-caption-control", ti.VmCaptionControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-captions", ti.VmCaptions), vi("vm-click-to-play", ti.VmClickToPlay), vi("vm-control-group", ti.VmControlGroup), vi("vm-control-spacer", ti.VmControlSpacer), vi("vm-controls", ti.VmControls), vi("vm-current-time", ti.VmCurrentTime), vi("vm-time", ti.VmTime), vi("vm-dbl-click-fullscreen", ti.VmDblClickFullscreen), vi("vm-default-controls", ti.VmDefaultControls), vi("vm-end-time", ti.VmEndTime), vi("vm-fullscreen-control", ti.VmFullscreenControl), vi("vm-live-indicator", ti.VmLiveIndicator), vi("vm-mute-control", ti.VmMuteControl), vi("vm-pip-control", ti.VmPipControl), vi("vm-playback-control", ti.VmPlaybackControl), vi("vm-scrim", ti.VmScrim), vi("vm-scrubber-control", ti.VmScrubberControl), vi("vm-slider", ti.VmSlider), vi("vm-settings-control", ti.VmSettingsControl), vi("vm-time-progress", ti.VmTimeProgress), vi("vm-volume-control", ti.VmVolumeControl), vi("vm-default-settings", ti.VmDefaultSettings), vi("vm-menu", ti.VmMenu), vi("vm-menu-item", ti.VmMenuItem), vi("vm-menu-radio", ti.VmMenuRadio), vi("vm-menu-radio-group", ti.VmMenuRadioGroup), vi("vm-settings", ti.VmSettings), vi("vm-submenu", ti.VmSubmenu), vi("vm-loading-screen", ti.VmLoadingScreen), vi("vm-poster", ti.VmPoster), vi("vm-spinner", ti.VmSpinner), vi("vm-ui", ti.VmUi), vi("vm-embed", ti.VmEmbed), vi("vm-end-time", ti.VmEndTime), vi("vm-time", ti.VmTime), vi("vm-file", ti.VmFile), vi("vm-fullscreen-control", ti.VmFullscreenControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-hls", ti.VmHls), vi("vm-file", ti.VmFile), vi("vm-video", ti.VmVideo), vi("vm-icon", ti.VmIcon), vi("vm-icon-library", ti.VmIconLibrary), vi("vm-live-indicator", ti.VmLiveIndicator), vi("vm-loading-screen", ti.VmLoadingScreen), vi("vm-menu", ti.VmMenu), vi("vm-menu-item", ti.VmMenuItem), vi("vm-icon", ti.VmIcon), vi("vm-menu-radio", ti.VmMenuRadio), vi("vm-icon", ti.VmIcon), vi("vm-menu-item", ti.VmMenuItem), vi("vm-menu-radio-group", ti.VmMenuRadioGroup), vi("vm-mute-control", ti.VmMuteControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-pip-control", ti.VmPipControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-playback-control", ti.VmPlaybackControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-player", ti.VmPlayer), vi("vm-poster", ti.VmPoster), vi("vm-scrim", ti.VmScrim), vi("vm-scrubber-control", ti.VmScrubberControl), vi("vm-slider", ti.VmSlider), vi("vm-tooltip", ti.VmTooltip), vi("vm-settings", ti.VmSettings), vi("vm-menu", ti.VmMenu), vi("vm-settings-control", ti.VmSettingsControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-tooltip", ti.VmTooltip), vi("vm-skeleton", ti.VmSkeleton), vi("vm-slider", ti.VmSlider), vi("vm-spinner", ti.VmSpinner), vi("vm-submenu", ti.VmSubmenu), vi("vm-icon", ti.VmIcon), vi("vm-menu", ti.VmMenu), vi("vm-menu-item", ti.VmMenuItem), vi("vm-time", ti.VmTime), vi("vm-time-progress", ti.VmTimeProgress), vi("vm-current-time", ti.VmCurrentTime), vi("vm-time", ti.VmTime), vi("vm-end-time", ti.VmEndTime), vi("vm-tooltip", ti.VmTooltip), vi("vm-ui", ti.VmUi), vi("vm-video", ti.VmVideo), vi("vm-file", ti.VmFile), vi("vm-vimeo", ti.VmVimeo), vi("vm-embed", ti.VmEmbed), vi("vm-volume-control", ti.VmVolumeControl), vi("vm-control", ti.VmControl), vi("vm-icon", ti.VmIcon), vi("vm-mute-control", ti.VmMuteControl), vi("vm-tooltip", ti.VmTooltip), vi("vm-slider", ti.VmSlider), vi("vm-youtube", ti.VmYoutube), vi("vm-embed", ti.VmEmbed);
    var fi = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, yi, bi, i2, {url: 0, cover: 1});
      }
    };
    function ki(e6) {
      let t7, i3, n4, s4;
      return t7 = new mi({props: {videoId: e6[0]}}), n4 = new di({}), {c() {
        yt(t7.$$.fragment), i3 = P2(), yt(n4.$$.fragment);
      }, m(e7, o4) {
        $t(t7, e7, o4), b2(e7, i3, o4), $t(n4, e7, o4), s4 = true;
      }, p(e7, i4) {
        const n5 = {};
        1 & i4 && (n5.videoId = e7[0]), t7.$set(n5);
      }, i(e7) {
        s4 || (ct(t7.$$.fragment, e7), ct(n4.$$.fragment, e7), s4 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(n4.$$.fragment, e7), s4 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(i3), bt(n4, e7);
      }};
    }
    function Ti(e6) {
      let t7, i3, n4;
      return i3 = new hi({props: {theme: "dark", style: "--vm-player-theme: #7F91EC;", $$slots: {default: [ki]}, $$scope: {ctx: e6}}}), {c() {
        t7 = x2("div"), yt(i3.$$.fragment), L3(t7, "class", "container svelte-ylngu6");
      }, m(e7, s4) {
        b2(e7, t7, s4), $t(i3, t7, null), n4 = true;
      }, p(e7, [t8]) {
        const n5 = {};
        3 & t8 && (n5.$$scope = {dirty: t8, ctx: e7}), i3.$set(n5);
      }, i(e7) {
        n4 || (ct(i3.$$.fragment, e7), n4 = true);
      }, o(e7) {
        lt(i3.$$.fragment, e7), n4 = false;
      }, d(e7) {
        e7 && w2(t7), bt(i3);
      }};
    }
    function Ci(e6, t7, i3) {
      let {id: n4} = t7;
      return e6.$$set = (e7) => {
        "id" in e7 && i3(0, n4 = e7.id);
      }, [n4];
    }
    var $i = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Ci, Ti, i2, {id: 0});
      }
    };
    function wi(e6) {
      let t7, i3, n4;
      return i3 = new st2({}), {c() {
        t7 = x2("div"), yt(i3.$$.fragment), L3(t7, "class", "flexCentered");
      }, m(e7, s4) {
        b2(e7, t7, s4), $t(i3, t7, null), n4 = true;
      }, p: t3, i(e7) {
        n4 || (ct(i3.$$.fragment, e7), n4 = true);
      }, o(e7) {
        lt(i3.$$.fragment, e7), n4 = false;
      }, d(e7) {
        e7 && w2(t7), bt(i3);
      }};
    }
    function Si(e6) {
      let t7, i3, n4, s4;
      const o4 = [Pi, Vi, xi], r5 = [];
      function h3(e7, t8) {
        return e7[2] ? 0 : e7[0] ? 1 : 2;
      }
      return t7 = h3(e6), i3 = r5[t7] = o4[t7](e6), {c() {
        i3.c(), n4 = k2();
      }, m(e7, i4) {
        r5[t7].m(e7, i4), b2(e7, n4, i4), s4 = true;
      }, p(e7, s5) {
        let a4 = t7;
        t7 = h3(e7), t7 === a4 ? r5[t7].p(e7, s5) : (it(), lt(r5[a4], 1, 1, () => {
          r5[a4] = null;
        }), at(), i3 = r5[t7], i3 ? i3.p(e7, s5) : (i3 = r5[t7] = o4[t7](e7), i3.c()), ct(i3, 1), i3.m(n4.parentNode, n4));
      }, i(e7) {
        s4 || (ct(i3), s4 = true);
      }, o(e7) {
        lt(i3), s4 = false;
      }, d(e7) {
        r5[t7].d(e7), e7 && w2(n4);
      }};
    }
    function xi(e6) {
      let t7, i3, n4;
      return i3 = new st2({}), {c() {
        t7 = x2("div"), yt(i3.$$.fragment), L3(t7, "class", "flexCentered");
      }, m(e7, s4) {
        b2(e7, t7, s4), $t(i3, t7, null), n4 = true;
      }, p: t3, i(e7) {
        n4 || (ct(i3.$$.fragment, e7), n4 = true);
      }, o(e7) {
        lt(i3.$$.fragment, e7), n4 = false;
      }, d(e7) {
        e7 && w2(t7), bt(i3);
      }};
    }
    function Vi(e6) {
      let t7, i3;
      return t7 = new fi({props: {url: e6[0], cover: e6[1]}}), {c() {
        yt(t7.$$.fragment);
      }, m(e7, n4) {
        $t(t7, e7, n4), i3 = true;
      }, p(e7, i4) {
        const n4 = {};
        1 & i4 && (n4.url = e7[0]), 2 & i4 && (n4.cover = e7[1]), t7.$set(n4);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7);
      }};
    }
    function Pi(e6) {
      let t7, i3;
      return t7 = new $i({props: {id: e6[2]}}), {c() {
        yt(t7.$$.fragment);
      }, m(e7, n4) {
        $t(t7, e7, n4), i3 = true;
      }, p(e7, i4) {
        const n4 = {};
        4 & i4 && (n4.id = e7[2]), t7.$set(n4);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7);
      }};
    }
    function Ei(e6) {
      let t7, i3, n4, s4;
      const o4 = [Si, wi], r5 = [];
      function h3(e7, t8) {
        return e7[3].id ? 0 : 1;
      }
      return t7 = h3(e6), i3 = r5[t7] = o4[t7](e6), {c() {
        i3.c(), n4 = k2();
      }, m(e7, i4) {
        r5[t7].m(e7, i4), b2(e7, n4, i4), s4 = true;
      }, p(e7, [s5]) {
        let a4 = t7;
        t7 = h3(e7), t7 === a4 ? r5[t7].p(e7, s5) : (it(), lt(r5[a4], 1, 1, () => {
          r5[a4] = null;
        }), at(), i3 = r5[t7], i3 ? i3.p(e7, s5) : (i3 = r5[t7] = o4[t7](e7), i3.c()), ct(i3, 1), i3.m(n4.parentNode, n4));
      }, i(e7) {
        s4 || (ct(i3), s4 = true);
      }, o(e7) {
        lt(i3), s4 = false;
      }, d(e7) {
        r5[t7].d(e7), e7 && w2(n4);
      }};
    }
    function Ai(e6, t7, i3) {
      let n4, s4, o4;
      l2(e6, r3, (e7) => i3(4, n4 = e7)), l2(e6, oe2, (e7) => i3(3, s4 = e7)), l2(e6, o2, (e7) => i3(5, o4 = e7));
      let {url: a4} = t7, {cover: r5 = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Big_Buck_Bunny_loves_Creative_Commons.png"} = t7, {id: l3 = ""} = t7;
      if (n4.id && s4.id) {
        const e7 = JSON.stringify({id: n4.id, episodeId: s4.id});
        (async () => (await H.post(`${o4}/content/play.php`, e7, {"Content-type": "application/json"}).catch((e8) => {
          console.log(e8);
        })).data[0])();
      }
      return e6.$$set = (e7) => {
        "url" in e7 && i3(0, a4 = e7.url), "cover" in e7 && i3(1, r5 = e7.cover), "id" in e7 && i3(2, l3 = e7.id);
      }, [a4, r5, l3, s4];
    }
    var watch_f4be74c4_default = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Ai, Ei, i2, {url: 0, cover: 1, id: 2});
      }
    };
    var watch_f4be74c4_default2 = watch_f4be74c4_default;
  });

  // ../../dist/build/index-be528fdb.js
  var require_index_be528fdb = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_be528fdb_default2
    });
    function l3(s4) {
      let e6;
      return {c() {
        e6 = x2("div"), e6.textContent = "Home page :)", L3(e6, "class", "flexCentered");
      }, m(s5, t7) {
        b2(s5, e6, t7);
      }, p: t3, i: t3, o: t3, d(s5) {
        s5 && w2(e6);
      }};
    }
    var index_be528fdb_default = class extends _t {
      constructor(s4) {
        super(), wt(this, s4, null, l3, i2, {});
      }
    };
    var index_be528fdb_default2 = index_be528fdb_default;
  });

  // ../../dist/build/login-03936d02.js
  var require_login_03936d02 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => login_03936d02_default2
    });
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
    var gt3 = {animation: {prefixed: "-webkit-animation", standard: "animation"}, transform: {prefixed: "-webkit-transform", standard: "transform"}, transition: {prefixed: "-webkit-transition", standard: "transition"}};
    function vt4(t7, e6) {
      if (function(t8) {
        return Boolean(t8.document) && typeof t8.document.createElement == "function";
      }(t7) && e6 in gt3) {
        var n4 = t7.document.createElement("div"), i3 = gt3[e6], o4 = i3.standard, r5 = i3.prefixed;
        return o4 in n4.style ? o4 : r5;
      }
      return e6;
    }
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
    var $t3 = {ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate", ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked", ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked", ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked", ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked", ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate", BACKGROUND: "mdc-checkbox__background", CHECKED: "mdc-checkbox--checked", CHECKMARK: "mdc-checkbox__checkmark", CHECKMARK_PATH: "mdc-checkbox__checkmark-path", DISABLED: "mdc-checkbox--disabled", INDETERMINATE: "mdc-checkbox--indeterminate", MIXEDMARK: "mdc-checkbox__mixedmark", NATIVE_CONTROL: "mdc-checkbox__native-control", ROOT: "mdc-checkbox", SELECTED: "mdc-checkbox--selected", UPGRADED: "mdc-checkbox--upgraded"};
    var At3 = {ARIA_CHECKED_ATTR: "aria-checked", ARIA_CHECKED_INDETERMINATE_VALUE: "mixed", DATA_INDETERMINATE_ATTR: "data-indeterminate", NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control", TRANSITION_STATE_CHECKED: "checked", TRANSITION_STATE_INDETERMINATE: "indeterminate", TRANSITION_STATE_INIT: "init", TRANSITION_STATE_UNCHECKED: "unchecked"};
    var yt3 = {ANIM_END_LATCH_MS: 250};
    var Ct3 = function(t7) {
      function e6(n4) {
        var i3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
        return i3.currentCheckState_ = At3.TRANSITION_STATE_INIT, i3.currentAnimationClass_ = "", i3.animEndLatchTimer_ = 0, i3.enableAnimationEndHandler_ = false, i3;
      }
      return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
        return $t3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
        return At3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "numbers", {get: function() {
        return yt3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
        return {addClass: function() {
        }, forceLayout: function() {
        }, hasNativeControl: function() {
          return false;
        }, isAttachedToDOM: function() {
          return false;
        }, isChecked: function() {
          return false;
        }, isIndeterminate: function() {
          return false;
        }, removeClass: function() {
        }, removeNativeControlAttr: function() {
        }, setNativeControlAttr: function() {
        }, setNativeControlDisabled: function() {
        }};
      }, enumerable: false, configurable: true}), e6.prototype.init = function() {
        this.currentCheckState_ = this.determineCheckState_(), this.updateAriaChecked_(), this.adapter.addClass($t3.UPGRADED);
      }, e6.prototype.destroy = function() {
        clearTimeout(this.animEndLatchTimer_);
      }, e6.prototype.setDisabled = function(t8) {
        this.adapter.setNativeControlDisabled(t8), t8 ? this.adapter.addClass($t3.DISABLED) : this.adapter.removeClass($t3.DISABLED);
      }, e6.prototype.handleAnimationEnd = function() {
        var t8 = this;
        this.enableAnimationEndHandler_ && (clearTimeout(this.animEndLatchTimer_), this.animEndLatchTimer_ = setTimeout(function() {
          t8.adapter.removeClass(t8.currentAnimationClass_), t8.enableAnimationEndHandler_ = false;
        }, yt3.ANIM_END_LATCH_MS));
      }, e6.prototype.handleChange = function() {
        this.transitionCheckState_();
      }, e6.prototype.transitionCheckState_ = function() {
        if (this.adapter.hasNativeControl()) {
          var t8 = this.currentCheckState_, e7 = this.determineCheckState_();
          if (t8 !== e7) {
            this.updateAriaChecked_();
            var n4 = $t3.SELECTED;
            e7 === At3.TRANSITION_STATE_UNCHECKED ? this.adapter.removeClass(n4) : this.adapter.addClass(n4), this.currentAnimationClass_.length > 0 && (clearTimeout(this.animEndLatchTimer_), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass_)), this.currentAnimationClass_ = this.getTransitionAnimationClass_(t8, e7), this.currentCheckState_ = e7, this.adapter.isAttachedToDOM() && this.currentAnimationClass_.length > 0 && (this.adapter.addClass(this.currentAnimationClass_), this.enableAnimationEndHandler_ = true);
          }
        }
      }, e6.prototype.determineCheckState_ = function() {
        var t8 = At3.TRANSITION_STATE_INDETERMINATE, e7 = At3.TRANSITION_STATE_CHECKED, n4 = At3.TRANSITION_STATE_UNCHECKED;
        return this.adapter.isIndeterminate() ? t8 : this.adapter.isChecked() ? e7 : n4;
      }, e6.prototype.getTransitionAnimationClass_ = function(t8, n4) {
        var i3 = At3.TRANSITION_STATE_INIT, o4 = At3.TRANSITION_STATE_CHECKED, r5 = At3.TRANSITION_STATE_UNCHECKED, a4 = e6.cssClasses, s4 = a4.ANIM_UNCHECKED_CHECKED, c3 = a4.ANIM_UNCHECKED_INDETERMINATE, l3 = a4.ANIM_CHECKED_UNCHECKED, d4 = a4.ANIM_CHECKED_INDETERMINATE, u3 = a4.ANIM_INDETERMINATE_CHECKED, h3 = a4.ANIM_INDETERMINATE_UNCHECKED;
        switch (t8) {
          case i3:
            return n4 === r5 ? "" : n4 === o4 ? u3 : h3;
          case r5:
            return n4 === o4 ? s4 : c3;
          case o4:
            return n4 === r5 ? l3 : d4;
          default:
            return n4 === o4 ? u3 : h3;
        }
      }, e6.prototype.updateAriaChecked_ = function() {
        this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(At3.ARIA_CHECKED_ATTR, At3.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(At3.ARIA_CHECKED_ATTR);
      }, e6;
    }(J2);
    function xt3(t7) {
      let e6, n4, E4, g3, v5, $2, A5, y3, C4, x4, _3, S5, w4, b5, D4, N7, H7 = [{class: E4 = N2({[t7[9]]: true, "mdc-checkbox__native-control": true})}, {type: "checkbox"}, t7[20], {disabled: t7[1]}, {__value: g3 = t7[7] === t7[19] ? t7[6] : t7[7]}, {"data-indeterminate": v5 = t7[0] !== t7[19] && t7[0] ? "true" : null}, t7[16], G3(t7[26], "input$")], I2 = {};
      for (let t8 = 0; t8 < H7.length; t8 += 1)
        I2 = e3(I2, H7[t8]);
      let O5 = [{class: _3 = N2({[t7[3]]: true, "mdc-checkbox": true, "mdc-checkbox--disabled": t7[1], "mdc-checkbox--touch": t7[5], "mdc-data-table__header-row-checkbox": t7[21] === "data-table" && t7[22], "mdc-data-table__row-checkbox": t7[21] === "data-table" && !t7[22], ...t7[14]})}, {style: S5 = Object.entries(t7[15]).map(_t4).concat([t7[4]]).join(" ")}, w3(t7[26], ["input$"])], R6 = {};
      for (let t8 = 0; t8 < O5.length; t8 += 1)
        R6 = e3(R6, O5[t8]);
      return {c() {
        e6 = x2("div"), n4 = x2("input"), A5 = P2(), y3 = x2("div"), y3.innerHTML = '<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> \n    <div class="mdc-checkbox__mixedmark"></div>', C4 = P2(), x4 = x2("div"), I(n4, I2), L3(y3, "class", "mdc-checkbox__background"), L3(x4, "class", "mdc-checkbox__ripple"), I(e6, R6);
      }, m(i3, o4) {
        b2(i3, e6, o4), $(e6, n4), t7[38](n4), n4.checked = t7[12], $(e6, A5), $(e6, y3), $(e6, C4), $(e6, x4), t7[40](e6), D4 || (N7 = [y2($2 = q3.call(null, n4, t7[8])), E2(n4, "change", t7[39]), E2(n4, "change", t7[34]), E2(n4, "input", t7[35]), E2(n4, "blur", t7[36]), E2(n4, "focus", t7[37]), y2(w4 = q3.call(null, e6, t7[2])), y2(t7[18].call(null, e6)), y2(b5 = dt.call(null, e6, {unbounded: true, addClass: t7[23], removeClass: t7[24], addStyle: t7[25], active: t7[17], eventTarget: t7[11]})), E2(e6, "animationend", t7[41])], D4 = true);
      }, p(t8, i3) {
        I(n4, I2 = ht(H7, [512 & i3[0] && E4 !== (E4 = N2({[t8[9]]: true, "mdc-checkbox__native-control": true})) && {class: E4}, {type: "checkbox"}, t8[20], 2 & i3[0] && {disabled: t8[1]}, 192 & i3[0] && g3 !== (g3 = t8[7] === t8[19] ? t8[6] : t8[7]) && {__value: g3}, 1 & i3[0] && v5 !== (v5 = t8[0] !== t8[19] && t8[0] ? "true" : null) && {"data-indeterminate": v5}, 65536 & i3[0] && t8[16], 67108864 & i3[0] && G3(t8[26], "input$")])), $2 && s2($2.update) && 256 & i3[0] && $2.update.call(null, t8[8]), 4096 & i3[0] && (n4.checked = t8[12]), I(e6, R6 = ht(O5, [16426 & i3[0] && _3 !== (_3 = N2({[t8[3]]: true, "mdc-checkbox": true, "mdc-checkbox--disabled": t8[1], "mdc-checkbox--touch": t8[5], "mdc-data-table__header-row-checkbox": t8[21] === "data-table" && t8[22], "mdc-data-table__row-checkbox": t8[21] === "data-table" && !t8[22], ...t8[14]})) && {class: _3}, 32784 & i3[0] && S5 !== (S5 = Object.entries(t8[15]).map(_t4).concat([t8[4]]).join(" ")) && {style: S5}, 67108864 & i3[0] && w3(t8[26], ["input$"])])), w4 && s2(w4.update) && 4 & i3[0] && w4.update.call(null, t8[2]), b5 && s2(b5.update) && 133120 & i3[0] && b5.update.call(null, {unbounded: true, addClass: t8[23], removeClass: t8[24], addStyle: t8[25], active: t8[17], eventTarget: t8[11]});
      }, i: t3, o: t3, d(n5) {
        n5 && w2(e6), t7[38](null), t7[40](null), D4 = false, r2(N7);
      }};
    }
    var _t4 = ([t7, e6]) => `${t7}: ${e6};`;
    function St3(t7, e6, n4) {
      const o4 = ["use", "class", "style", "disabled", "touch", "indeterminate", "group", "checked", "value", "valueKey", "input$use", "input$class", "getId", "getElement"];
      let r5 = h2(e6, o4);
      const a4 = x3(R2());
      let s4, c3, l3, d4 = () => {
      }, {use: u3 = []} = e6, {class: h3 = ""} = e6, {style: p3 = ""} = e6, {disabled: m4 = false} = e6, {touch: f3 = false} = e6, {indeterminate: T6 = d4} = e6, {group: x4 = d4} = e6, {checked: _3 = d4} = e6, {value: S5 = null} = e6, {valueKey: w4 = d4} = e6, {input$use: b5 = []} = e6, {input$class: D4 = ""} = e6, N7 = {}, H7 = {}, I2 = {}, O5 = false, R6 = D2("SMUI:generic:input:props") || {}, P7 = x4 === d4 ? _3 !== d4 && _3 : x4.indexOf(S5) !== -1, k5 = D2("SMUI:checkbox:context"), M3 = D2("SMUI:data-table:row:header"), L6 = _3, B5 = x4 === d4 ? [] : [...x4], W6 = P7;
      function V4(t8) {
        N7[t8] || n4(14, N7[t8] = true, N7);
      }
      function U5(t8) {
        t8 in N7 && !N7[t8] || n4(14, N7[t8] = false, N7);
      }
      function K5(t8, e7) {
        I2[t8] !== e7 && n4(16, I2[t8] = e7, I2);
      }
      function j4(t8) {
        t8 in I2 && I2[t8] == null || n4(16, I2[t8] = void 0, I2);
      }
      function F6() {
        return s4;
      }
      C2(() => {
        n4(10, c3 = new Ct3({addClass: V4, forceLayout: () => s4.offsetWidth, hasNativeControl: () => true, isAttachedToDOM: () => Boolean(s4.parentNode), isChecked: () => P7, isIndeterminate: () => T6 !== d4 && T6, removeClass: U5, removeNativeControlAttr: j4, setNativeControlAttr: K5, setNativeControlDisabled: (t9) => n4(1, m4 = t9)}));
        const t8 = {_smui_checkbox_accessor: true, get element() {
          return F6();
        }, get checked() {
          return P7;
        }, set checked(t9) {
          P7 !== t9 && n4(12, P7 = t9);
        }, get indeterminate() {
          return T6 !== d4 && T6;
        }, set indeterminate(t9) {
          n4(0, T6 = t9);
        }, activateRipple() {
          m4 || n4(17, O5 = true);
        }, deactivateRipple() {
          n4(17, O5 = false);
        }};
        return k3(s4, "SMUI:generic:input:mount", t8), k3(s4, "SMUI:checkbox:mount", t8), c3.init(), () => {
          k3(s4, "SMUI:generic:input:unmount", t8), k3(s4, "SMUI:checkbox:unmount", t8), c3.destroy();
        };
      });
      return t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(26, r5 = h2(e6, o4)), "use" in t8 && n4(2, u3 = t8.use), "class" in t8 && n4(3, h3 = t8.class), "style" in t8 && n4(4, p3 = t8.style), "disabled" in t8 && n4(1, m4 = t8.disabled), "touch" in t8 && n4(5, f3 = t8.touch), "indeterminate" in t8 && n4(0, T6 = t8.indeterminate), "group" in t8 && n4(27, x4 = t8.group), "checked" in t8 && n4(28, _3 = t8.checked), "value" in t8 && n4(6, S5 = t8.value), "valueKey" in t8 && n4(7, w4 = t8.valueKey), "input$use" in t8 && n4(8, b5 = t8.input$use), "input$class" in t8 && n4(9, D4 = t8.input$class);
      }, t7.$$.update = () => {
        if (402660417 & t7.$$.dirty[0] | 7 & t7.$$.dirty[1]) {
          let t8 = false;
          if (x4 !== d4)
            if (W6 !== P7) {
              const e7 = x4.indexOf(S5);
              P7 && e7 === -1 ? (x4.push(S5), n4(27, x4), n4(19, d4), n4(33, W6), n4(12, P7), n4(6, S5), n4(32, B5), n4(28, _3), n4(31, L6), n4(11, l3), n4(0, T6), n4(10, c3)) : P7 || e7 === -1 || (x4.splice(e7, 1), n4(27, x4), n4(19, d4), n4(33, W6), n4(12, P7), n4(6, S5), n4(32, B5), n4(28, _3), n4(31, L6), n4(11, l3), n4(0, T6), n4(10, c3)), t8 = true;
            } else {
              const e7 = B5.indexOf(S5), i3 = x4.indexOf(S5);
              e7 > -1 && i3 === -1 ? (n4(12, P7 = false), t8 = true) : i3 > -1 && e7 === -1 && (n4(12, P7 = true), t8 = true);
            }
          _3 === d4 ? W6 !== P7 && (t8 = true) : _3 !== P7 && (_3 === L6 ? n4(28, _3 = P7) : n4(12, P7 = _3), t8 = true), l3 && (T6 === d4 ? l3.indeterminate && (n4(11, l3.indeterminate = false, l3), t8 = true) : !T6 && l3.indeterminate ? (n4(11, l3.indeterminate = false, l3), t8 = true) : T6 && !l3.indeterminate && (n4(11, l3.indeterminate = true, l3), t8 = true)), n4(31, L6 = _3), n4(32, B5 = x4 === d4 ? [] : [...x4]), n4(33, W6 = P7), t8 && c3 && c3.handleChange();
        }
      }, [T6, m4, u3, h3, p3, f3, S5, w4, b5, D4, c3, l3, P7, s4, N7, H7, I2, O5, a4, d4, R6, k5, M3, V4, U5, function(t8, e7) {
        H7[t8] != e7 && (e7 === "" || e7 == null ? (delete H7[t8], n4(15, H7)) : n4(15, H7[t8] = e7, H7));
      }, r5, x4, _3, function() {
        return R6 && R6.id;
      }, F6, L6, B5, W6, function(e7) {
        H2(t7, e7);
      }, function(e7) {
        H2(t7, e7);
      }, function(e7) {
        H2(t7, e7);
      }, function(e7) {
        H2(t7, e7);
      }, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          l3 = t8, n4(11, l3), n4(27, x4), n4(19, d4), n4(33, W6), n4(12, P7), n4(6, S5), n4(32, B5), n4(28, _3), n4(31, L6), n4(0, T6), n4(10, c3);
        });
      }, function() {
        P7 = this.checked, n4(12, P7), n4(27, x4), n4(19, d4), n4(33, W6), n4(6, S5), n4(32, B5), n4(28, _3), n4(31, L6), n4(11, l3), n4(0, T6), n4(10, c3);
      }, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          s4 = t8, n4(13, s4);
        });
      }, () => c3 && c3.handleAnimationEnd()];
    }
    var wt3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, St3, xt3, i2, {use: 2, class: 3, style: 4, disabled: 1, touch: 5, indeterminate: 0, group: 27, checked: 28, value: 6, valueKey: 7, input$use: 8, input$class: 9, getId: 29, getElement: 30}, [-1, -1]);
      }
      get getId() {
        return this.$$.ctx[29];
      }
      get getElement() {
        return this.$$.ctx[30];
      }
    };
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
    var bt3;
    !function(t7) {
      t7.RICH = "mdc-tooltip--rich", t7.SHOWN = "mdc-tooltip--shown", t7.SHOWING = "mdc-tooltip--showing", t7.SHOWING_TRANSITION = "mdc-tooltip--showing-transition", t7.HIDE = "mdc-tooltip--hide", t7.HIDE_TRANSITION = "mdc-tooltip--hide-transition", t7.MULTILINE_TOOLTIP = "mdc-tooltip--multiline", t7.SURFACE = "mdc-tooltip__surface", t7.TOOLTIP_CARET_TOP = "mdc-tooltip__caret-surface-top", t7.TOOLTIP_CARET_BOTTOM = "mdc-tooltip__caret-surface-bottom";
    }(bt3 || (bt3 = {}));
    var Dt3;
    var Nt3;
    var Ht3;
    var It3 = 4;
    var Ot3 = 8;
    var Rt3 = 8;
    var Pt3 = 600;
    var kt3 = 500;
    var Mt3 = 24;
    var Lt3 = 200;
    var Bt3 = 24;
    var Wt3 = "aria-expanded";
    var Vt3 = "aria-haspopup";
    var Ut3 = "data-mdc-tooltip-persistent";
    var Kt3 = "data-mdc-tooltip-has-caret";
    !function(t7) {
      t7[t7.DETECTED = 0] = "DETECTED", t7[t7.START = 1] = "START", t7[t7.CENTER = 2] = "CENTER", t7[t7.END = 3] = "END";
    }(Dt3 || (Dt3 = {})), function(t7) {
      t7[t7.DETECTED = 0] = "DETECTED", t7[t7.ABOVE = 1] = "ABOVE", t7[t7.BELOW = 2] = "BELOW";
    }(Nt3 || (Nt3 = {})), function(t7) {
      t7[t7.BOUNDED = 0] = "BOUNDED", t7[t7.UNBOUNDED = 1] = "UNBOUNDED";
    }(Ht3 || (Ht3 = {}));
    var jt3;
    var Ft3 = "left";
    var zt3 = "right";
    var Gt3 = "center";
    var Yt3 = "top";
    var qt3 = "bottom";
    !function(t7) {
      t7[t7.DETECTED = 0] = "DETECTED", t7[t7.ABOVE_START = 1] = "ABOVE_START", t7[t7.ABOVE_CENTER = 2] = "ABOVE_CENTER", t7[t7.ABOVE_END = 3] = "ABOVE_END", t7[t7.TOP_SIDE_START = 4] = "TOP_SIDE_START", t7[t7.CENTER_SIDE_START = 5] = "CENTER_SIDE_START", t7[t7.BOTTOM_SIDE_START = 6] = "BOTTOM_SIDE_START", t7[t7.TOP_SIDE_END = 7] = "TOP_SIDE_END", t7[t7.CENTER_SIDE_END = 8] = "CENTER_SIDE_END", t7[t7.BOTTOM_SIDE_END = 9] = "BOTTOM_SIDE_END", t7[t7.BELOW_START = 10] = "BELOW_START", t7[t7.BELOW_CENTER = 11] = "BELOW_CENTER", t7[t7.BELOW_END = 12] = "BELOW_END";
    }(jt3 || (jt3 = {}));
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
    var Xt3;
    var Jt3 = bt3.RICH;
    var Qt3 = bt3.SHOWN;
    var Zt3 = bt3.SHOWING;
    var te3 = bt3.SHOWING_TRANSITION;
    var ee3 = bt3.HIDE;
    var ne3 = bt3.HIDE_TRANSITION;
    var ie3 = bt3.MULTILINE_TOOLTIP;
    !function(t7) {
      t7.POLL_ANCHOR = "poll_anchor";
    }(Xt3 || (Xt3 = {}));
    var oe3 = typeof window != "undefined";
    var re3 = function(t7) {
      function e6(n4) {
        var i3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
        return i3.tooltipShown = false, i3.anchorGap = It3, i3.xTooltipPos = Dt3.DETECTED, i3.yTooltipPos = Nt3.DETECTED, i3.tooltipPositionWithCaret = jt3.DETECTED, i3.minViewportTooltipThreshold = Rt3, i3.hideDelayMs = Pt3, i3.showDelayMs = kt3, i3.anchorRect = null, i3.parentRect = null, i3.frameId = null, i3.hideTimeout = null, i3.showTimeout = null, i3.addAncestorScrollEventListeners = new Array(), i3.removeAncestorScrollEventListeners = new Array(), i3.animFrame = new t4(), i3.anchorBlurHandler = function(t8) {
          i3.handleAnchorBlur(t8);
        }, i3.documentClickHandler = function(t8) {
          i3.handleDocumentClick(t8);
        }, i3.documentKeydownHandler = function(t8) {
          i3.handleKeydown(t8);
        }, i3.richTooltipMouseEnterHandler = function() {
          i3.handleRichTooltipMouseEnter();
        }, i3.richTooltipMouseLeaveHandler = function() {
          i3.handleRichTooltipMouseLeave();
        }, i3.richTooltipFocusOutHandler = function(t8) {
          i3.handleRichTooltipFocusOut(t8);
        }, i3.windowScrollHandler = function() {
          i3.handleWindowChangeEvent();
        }, i3.windowResizeHandler = function() {
          i3.handleWindowChangeEvent();
        }, i3;
      }
      return Y(e6, t7), Object.defineProperty(e6, "defaultAdapter", {get: function() {
        return {getAttribute: function() {
          return null;
        }, setAttribute: function() {
        }, addClass: function() {
        }, hasClass: function() {
          return false;
        }, removeClass: function() {
        }, getComputedStyleProperty: function() {
          return "";
        }, setStyleProperty: function() {
        }, setSurfaceStyleProperty: function() {
        }, getViewportWidth: function() {
          return 0;
        }, getViewportHeight: function() {
          return 0;
        }, getTooltipSize: function() {
          return {width: 0, height: 0};
        }, getAnchorBoundingRect: function() {
          return {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0};
        }, getParentBoundingRect: function() {
          return {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0};
        }, getAnchorAttribute: function() {
          return null;
        }, setAnchorAttribute: function() {
          return null;
        }, isRTL: function() {
          return false;
        }, anchorContainsElement: function() {
          return false;
        }, tooltipContainsElement: function() {
          return false;
        }, focusAnchorElement: function() {
        }, registerEventHandler: function() {
        }, deregisterEventHandler: function() {
        }, registerAnchorEventHandler: function() {
        }, deregisterAnchorEventHandler: function() {
        }, registerDocumentEventHandler: function() {
        }, deregisterDocumentEventHandler: function() {
        }, registerWindowEventHandler: function() {
        }, deregisterWindowEventHandler: function() {
        }, notifyHidden: function() {
        }, getTooltipCaretSize: function() {
          return null;
        }, setTooltipCaretStyle: function() {
        }, clearTooltipCaretStyles: function() {
        }};
      }, enumerable: false, configurable: true}), e6.prototype.init = function() {
        this.richTooltip = this.adapter.hasClass(Jt3), this.persistentTooltip = this.adapter.getAttribute(Ut3) === "true", this.interactiveTooltip = !!this.adapter.getAnchorAttribute(Wt3) && this.adapter.getAnchorAttribute(Vt3) === "dialog", this.hasCaret = this.richTooltip && this.adapter.getAttribute(Kt3) === "true";
      }, e6.prototype.isShown = function() {
        return this.tooltipShown;
      }, e6.prototype.isRich = function() {
        return this.richTooltip;
      }, e6.prototype.isPersistent = function() {
        return this.persistentTooltip;
      }, e6.prototype.handleAnchorMouseEnter = function() {
        var t8 = this;
        this.tooltipShown ? this.show() : (this.clearHideTimeout(), this.showTimeout = setTimeout(function() {
          t8.show();
        }, this.showDelayMs));
      }, e6.prototype.handleAnchorTouchstart = function() {
        var t8 = this;
        this.showTimeout = setTimeout(function() {
          t8.show();
        }, this.showDelayMs), this.adapter.registerWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
      }, e6.prototype.preventContextMenuOnLongTouch = function(t8) {
        t8.preventDefault();
      }, e6.prototype.handleAnchorTouchend = function() {
        this.clearShowTimeout(), this.isShown() || this.adapter.deregisterWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
      }, e6.prototype.handleAnchorFocus = function(t8) {
        var e7 = this, n4 = t8.relatedTarget;
        n4 instanceof HTMLElement && this.adapter.tooltipContainsElement(n4) || (this.showTimeout = setTimeout(function() {
          e7.show();
        }, this.showDelayMs));
      }, e6.prototype.handleAnchorMouseLeave = function() {
        var t8 = this;
        this.clearShowTimeout(), this.hideTimeout = setTimeout(function() {
          t8.hide();
        }, this.hideDelayMs);
      }, e6.prototype.handleAnchorClick = function() {
        this.tooltipShown ? this.hide() : this.show();
      }, e6.prototype.handleDocumentClick = function(t8) {
        var e7 = t8.target instanceof HTMLElement && (this.adapter.anchorContainsElement(t8.target) || this.adapter.tooltipContainsElement(t8.target));
        this.richTooltip && this.persistentTooltip && e7 || this.hide();
      }, e6.prototype.handleKeydown = function(t8) {
        U4(t8) === E3.ESCAPE && (document.activeElement instanceof HTMLElement && this.adapter.tooltipContainsElement(document.activeElement) && this.adapter.focusAnchorElement(), this.hide());
      }, e6.prototype.handleAnchorBlur = function(t8) {
        if (this.richTooltip && (t8.relatedTarget instanceof HTMLElement && this.adapter.tooltipContainsElement(t8.relatedTarget)))
          return;
        this.hide();
      }, e6.prototype.handleRichTooltipMouseEnter = function() {
        this.show();
      }, e6.prototype.handleRichTooltipMouseLeave = function() {
        var t8 = this;
        this.clearShowTimeout(), this.hideTimeout = setTimeout(function() {
          t8.hide();
        }, this.hideDelayMs);
      }, e6.prototype.handleRichTooltipFocusOut = function(t8) {
        t8.relatedTarget instanceof HTMLElement && (this.adapter.anchorContainsElement(t8.relatedTarget) || this.adapter.tooltipContainsElement(t8.relatedTarget)) || this.hide();
      }, e6.prototype.handleWindowChangeEvent = function() {
        var t8 = this;
        this.animFrame.request(Xt3.POLL_ANCHOR, function() {
          t8.repositionTooltipOnAnchorMove();
        });
      }, e6.prototype.show = function() {
        var t8, e7, n4 = this;
        if (this.clearHideTimeout(), this.clearShowTimeout(), !this.tooltipShown) {
          this.tooltipShown = true, this.parseShowTooltipOptions().hideFromScreenreader || this.adapter.setAttribute("aria-hidden", "false"), this.richTooltip && (this.interactiveTooltip && this.adapter.setAnchorAttribute("aria-expanded", "true"), this.adapter.registerEventHandler("focusout", this.richTooltipFocusOutHandler), this.persistentTooltip || (this.adapter.registerEventHandler("mouseenter", this.richTooltipMouseEnterHandler), this.adapter.registerEventHandler("mouseleave", this.richTooltipMouseLeaveHandler))), this.adapter.removeClass(ee3), this.adapter.addClass(Zt3), this.isTooltipMultiline() && !this.richTooltip && this.adapter.addClass(ie3), this.anchorRect = this.adapter.getAnchorBoundingRect(), this.parentRect = this.adapter.getParentBoundingRect(), this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip(), this.hasCaret && this.setCaretPositionStyles(this.tooltipPositionWithCaret), this.adapter.registerAnchorEventHandler("blur", this.anchorBlurHandler), this.adapter.registerDocumentEventHandler("click", this.documentClickHandler), this.adapter.registerDocumentEventHandler("keydown", this.documentKeydownHandler), this.adapter.registerWindowEventHandler("scroll", this.windowScrollHandler), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler);
          try {
            for (var i3 = Q(this.addAncestorScrollEventListeners), o4 = i3.next(); !o4.done; o4 = i3.next()) {
              (0, o4.value)();
            }
          } catch (e8) {
            t8 = {error: e8};
          } finally {
            try {
              o4 && !o4.done && (e7 = i3.return) && e7.call(i3);
            } finally {
              if (t8)
                throw t8.error;
            }
          }
          this.frameId = requestAnimationFrame(function() {
            n4.clearAllAnimationClasses(), n4.adapter.addClass(Qt3), n4.adapter.addClass(te3);
          });
        }
      }, e6.prototype.hide = function() {
        var t8, e7;
        if (this.clearHideTimeout(), this.clearShowTimeout(), this.tooltipShown) {
          this.frameId && cancelAnimationFrame(this.frameId), this.tooltipShown = false, this.adapter.setAttribute("aria-hidden", "true"), this.adapter.deregisterEventHandler("focusout", this.richTooltipFocusOutHandler), this.richTooltip && (this.interactiveTooltip && this.adapter.setAnchorAttribute("aria-expanded", "false"), this.persistentTooltip || (this.adapter.deregisterEventHandler("mouseenter", this.richTooltipMouseEnterHandler), this.adapter.deregisterEventHandler("mouseleave", this.richTooltipMouseLeaveHandler))), this.clearAllAnimationClasses(), this.adapter.addClass(ee3), this.adapter.addClass(ne3), this.adapter.removeClass(Qt3), this.adapter.deregisterAnchorEventHandler("blur", this.anchorBlurHandler), this.adapter.deregisterDocumentEventHandler("click", this.documentClickHandler), this.adapter.deregisterDocumentEventHandler("keydown", this.documentKeydownHandler), this.adapter.deregisterWindowEventHandler("scroll", this.windowScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("contextmenu", this.preventContextMenuOnLongTouch);
          try {
            for (var n4 = Q(this.removeAncestorScrollEventListeners), i3 = n4.next(); !i3.done; i3 = n4.next()) {
              (0, i3.value)();
            }
          } catch (e8) {
            t8 = {error: e8};
          } finally {
            try {
              i3 && !i3.done && (e7 = n4.return) && e7.call(n4);
            } finally {
              if (t8)
                throw t8.error;
            }
          }
        }
      }, e6.prototype.handleTransitionEnd = function() {
        var t8 = this.adapter.hasClass(ee3);
        this.adapter.removeClass(Zt3), this.adapter.removeClass(te3), this.adapter.removeClass(ee3), this.adapter.removeClass(ne3), t8 && this.adapter.notifyHidden();
      }, e6.prototype.clearAllAnimationClasses = function() {
        this.adapter.removeClass(te3), this.adapter.removeClass(ne3);
      }, e6.prototype.setTooltipPosition = function(t8) {
        var e7 = t8.xPos, n4 = t8.yPos, i3 = t8.withCaretPos;
        this.hasCaret && i3 ? this.tooltipPositionWithCaret = i3 : (e7 && (this.xTooltipPos = e7), n4 && (this.yTooltipPos = n4));
      }, e6.prototype.setAnchorBoundaryType = function(t8) {
        t8 === Ht3.UNBOUNDED ? this.anchorGap = Ot3 : this.anchorGap = It3;
      }, e6.prototype.parseShowTooltipOptions = function() {
        return {hideFromScreenreader: Boolean(this.adapter.getAnchorAttribute("data-tooltip-id"))};
      }, e6.prototype.isTooltipMultiline = function() {
        var t8 = this.adapter.getTooltipSize();
        return t8.height > Mt3 && t8.width >= Lt3;
      }, e6.prototype.positionPlainTooltip = function() {
        var t8 = this.calculateTooltipStyles(this.anchorRect), e7 = t8.top, n4 = t8.yTransformOrigin, i3 = t8.left, o4 = t8.xTransformOrigin, r5 = oe3 ? vt4(window, "transform") : "transform";
        this.adapter.setSurfaceStyleProperty(r5 + "-origin", n4 + " " + o4), this.adapter.setStyleProperty("top", e7 + "px"), this.adapter.setStyleProperty("left", i3 + "px");
      }, e6.prototype.positionRichTooltip = function() {
        var t8, e7, n4, i3, o4 = this.adapter.getComputedStyleProperty("width");
        this.adapter.setStyleProperty("width", o4);
        var r5 = this.calculateTooltipStyles(this.anchorRect), a4 = r5.top, s4 = r5.yTransformOrigin, c3 = r5.left, l3 = r5.xTransformOrigin, d4 = oe3 ? vt4(window, "transform") : "transform";
        this.adapter.setSurfaceStyleProperty(d4 + "-origin", s4 + " " + l3);
        var u3 = c3 - ((e7 = (t8 = this.parentRect) === null || t8 === void 0 ? void 0 : t8.left) !== null && e7 !== void 0 ? e7 : 0), h3 = a4 - ((i3 = (n4 = this.parentRect) === null || n4 === void 0 ? void 0 : n4.top) !== null && i3 !== void 0 ? i3 : 0);
        this.adapter.setStyleProperty("top", h3 + "px"), this.adapter.setStyleProperty("left", u3 + "px");
      }, e6.prototype.calculateTooltipStyles = function(t8) {
        if (!t8)
          return {top: 0, left: 0};
        var e7 = this.adapter.getTooltipSize(), n4 = this.calculateYTooltipDistance(t8, e7.height), i3 = this.calculateXTooltipDistance(t8, e7.width);
        return {top: n4.distance, yTransformOrigin: n4.yTransformOrigin, left: i3.distance, xTransformOrigin: i3.xTransformOrigin};
      }, e6.prototype.calculateXTooltipDistance = function(t8, e7) {
        var n4, i3, o4, r5, a4, s4 = !this.adapter.isRTL();
        this.richTooltip ? (n4 = s4 ? t8.left - e7 : t8.right, i3 = s4 ? t8.right : t8.left - e7, r5 = s4 ? zt3 : Ft3, a4 = s4 ? Ft3 : zt3) : (n4 = s4 ? t8.left : t8.right - e7, i3 = s4 ? t8.right - e7 : t8.left, o4 = t8.left + (t8.width - e7) / 2, r5 = s4 ? Ft3 : zt3, a4 = s4 ? zt3 : Ft3);
        var c3 = this.richTooltip ? this.determineValidPositionOptions(n4, i3) : this.determineValidPositionOptions(o4, n4, i3);
        if (this.xTooltipPos === Dt3.START && c3.has(n4))
          return {distance: n4, xTransformOrigin: r5};
        if (this.xTooltipPos === Dt3.END && c3.has(i3))
          return {distance: i3, xTransformOrigin: a4};
        if (this.xTooltipPos === Dt3.CENTER && c3.has(o4))
          return {distance: o4, xTransformOrigin: Gt3};
        var l3 = (this.richTooltip ? [{distance: i3, xTransformOrigin: a4}, {distance: n4, xTransformOrigin: r5}] : [{distance: o4, xTransformOrigin: Gt3}, {distance: n4, xTransformOrigin: r5}, {distance: i3, xTransformOrigin: a4}]).find(function(t9) {
          var e8 = t9.distance;
          return c3.has(e8);
        });
        return l3 || (t8.left < 0 ? {distance: this.minViewportTooltipThreshold, xTransformOrigin: Ft3} : {distance: this.adapter.getViewportWidth() - (e7 + this.minViewportTooltipThreshold), xTransformOrigin: zt3});
      }, e6.prototype.determineValidPositionOptions = function() {
        for (var t8, e7, n4 = [], i3 = 0; i3 < arguments.length; i3++)
          n4[i3] = arguments[i3];
        var o4 = new Set(), r5 = new Set();
        try {
          for (var a4 = Q(n4), s4 = a4.next(); !s4.done; s4 = a4.next()) {
            var c3 = s4.value;
            this.positionHonorsViewportThreshold(c3) ? o4.add(c3) : this.positionDoesntCollideWithViewport(c3) && r5.add(c3);
          }
        } catch (e8) {
          t8 = {error: e8};
        } finally {
          try {
            s4 && !s4.done && (e7 = a4.return) && e7.call(a4);
          } finally {
            if (t8)
              throw t8.error;
          }
        }
        return o4.size ? o4 : r5;
      }, e6.prototype.positionHonorsViewportThreshold = function(t8) {
        var e7 = this.adapter.getViewportWidth();
        return t8 + this.adapter.getTooltipSize().width <= e7 - this.minViewportTooltipThreshold && t8 >= this.minViewportTooltipThreshold;
      }, e6.prototype.positionDoesntCollideWithViewport = function(t8) {
        var e7 = this.adapter.getViewportWidth();
        return t8 + this.adapter.getTooltipSize().width <= e7 && t8 >= 0;
      }, e6.prototype.calculateYTooltipDistance = function(t8, e7) {
        var n4 = t8.bottom + this.anchorGap, i3 = t8.top - (this.anchorGap + e7), o4 = this.determineValidYPositionOptions(i3, n4);
        return this.yTooltipPos === Nt3.ABOVE && o4.has(i3) ? {distance: i3, yTransformOrigin: qt3} : this.yTooltipPos === Nt3.BELOW && o4.has(n4) || o4.has(n4) ? {distance: n4, yTransformOrigin: Yt3} : o4.has(i3) ? {distance: i3, yTransformOrigin: qt3} : {distance: n4, yTransformOrigin: Yt3};
      }, e6.prototype.determineValidYPositionOptions = function(t8, e7) {
        var n4 = new Set(), i3 = new Set();
        return this.yPositionHonorsViewportThreshold(t8) ? n4.add(t8) : this.yPositionDoesntCollideWithViewport(t8) && i3.add(t8), this.yPositionHonorsViewportThreshold(e7) ? n4.add(e7) : this.yPositionDoesntCollideWithViewport(e7) && i3.add(e7), n4.size ? n4 : i3;
      }, e6.prototype.yPositionHonorsViewportThreshold = function(t8) {
        var e7 = this.adapter.getViewportHeight();
        return t8 + this.adapter.getTooltipSize().height + this.minViewportTooltipThreshold <= e7 && t8 >= this.minViewportTooltipThreshold;
      }, e6.prototype.yPositionDoesntCollideWithViewport = function(t8) {
        var e7 = this.adapter.getViewportHeight();
        return t8 + this.adapter.getTooltipSize().height <= e7 && t8 >= 0;
      }, e6.prototype.repositionTooltipOnAnchorMove = function() {
        var t8 = this.adapter.getAnchorBoundingRect();
        t8 && this.anchorRect && (t8.top === this.anchorRect.top && t8.left === this.anchorRect.left && t8.height === this.anchorRect.height && t8.width === this.anchorRect.width || (this.anchorRect = t8, this.parentRect = this.adapter.getParentBoundingRect(), this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip()));
      }, e6.prototype.setCaretPositionStyles = function(t8) {
        var e7 = this.calculateCaretPositionOnTooltip(t8);
        return e7 ? (this.adapter.clearTooltipCaretStyles(), this.adapter.setTooltipCaretStyle(e7.yAlignment, e7.yAxisPx), this.adapter.setTooltipCaretStyle(e7.xAlignment, e7.xAxisPx), this.adapter.setTooltipCaretStyle("transform", "rotate(" + e7.rotation + ")"), this.adapter.setTooltipCaretStyle("transform-origin", e7.yAlignment + " " + e7.xAlignment), {yTransformOrigin: e7.yAxisPx, xTransformOrigin: e7.xAxisPx}) : {yTransformOrigin: 0, xTransformOrigin: 0};
      }, e6.prototype.calculateCaretPositionOnTooltip = function(t8) {
        var e7 = !this.adapter.isRTL(), n4 = this.adapter.getComputedStyleProperty("width"), i3 = this.adapter.getComputedStyleProperty("height"), o4 = this.adapter.getTooltipCaretSize();
        if (n4 && i3 && o4) {
          var r5 = o4.width * Math.sqrt(2), a4 = "calc((" + n4 + " - " + r5 + "px) / 2)", s4 = "calc((" + i3 + " - " + r5 + "px) / 2)", c3 = "0", l3 = Bt3 + "px", d4 = "45deg", u3 = "-45deg";
          switch (t8) {
            case jt3.BELOW_CENTER:
              return {yAlignment: Yt3, xAlignment: Ft3, yAxisPx: c3, xAxisPx: a4, rotation: u3};
            case jt3.BELOW_END:
              return {yAlignment: Yt3, xAlignment: e7 ? zt3 : Ft3, yAxisPx: c3, xAxisPx: l3, rotation: e7 ? d4 : u3};
            case jt3.BELOW_START:
              return {yAlignment: Yt3, xAlignment: e7 ? Ft3 : zt3, yAxisPx: c3, xAxisPx: l3, rotation: e7 ? u3 : d4};
            case jt3.TOP_SIDE_END:
              return {yAlignment: Yt3, xAlignment: e7 ? Ft3 : zt3, yAxisPx: l3, xAxisPx: c3, rotation: e7 ? d4 : u3};
            case jt3.CENTER_SIDE_END:
              return {yAlignment: Yt3, xAlignment: e7 ? Ft3 : zt3, yAxisPx: s4, xAxisPx: c3, rotation: e7 ? d4 : u3};
            case jt3.BOTTOM_SIDE_END:
              return {yAlignment: qt3, xAlignment: e7 ? Ft3 : zt3, yAxisPx: l3, xAxisPx: c3, rotation: e7 ? u3 : d4};
            case jt3.TOP_SIDE_START:
              return {yAlignment: Yt3, xAlignment: e7 ? zt3 : Ft3, yAxisPx: l3, xAxisPx: c3, rotation: e7 ? u3 : d4};
            case jt3.CENTER_SIDE_START:
              return {yAlignment: Yt3, xAlignment: e7 ? zt3 : Ft3, yAxisPx: s4, xAxisPx: c3, rotation: e7 ? u3 : d4};
            case jt3.BOTTOM_SIDE_START:
              return {yAlignment: qt3, xAlignment: e7 ? zt3 : Ft3, yAxisPx: l3, xAxisPx: c3, rotation: e7 ? d4 : u3};
            case jt3.ABOVE_CENTER:
              return {yAlignment: qt3, xAlignment: Ft3, yAxisPx: c3, xAxisPx: a4, rotation: d4};
            case jt3.ABOVE_END:
              return {yAlignment: qt3, xAlignment: e7 ? zt3 : Ft3, yAxisPx: c3, xAxisPx: l3, rotation: e7 ? u3 : d4};
            default:
            case jt3.ABOVE_START:
              return {yAlignment: qt3, xAlignment: e7 ? Ft3 : zt3, yAxisPx: c3, xAxisPx: l3, rotation: e7 ? d4 : u3};
          }
        }
      }, e6.prototype.clearShowTimeout = function() {
        this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = null);
      }, e6.prototype.clearHideTimeout = function() {
        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null);
      }, e6.prototype.attachScrollHandler = function(t8) {
        var e7 = this;
        this.addAncestorScrollEventListeners.push(function() {
          t8("scroll", e7.windowScrollHandler);
        });
      }, e6.prototype.removeScrollHandler = function(t8) {
        var e7 = this;
        this.removeAncestorScrollEventListeners.push(function() {
          t8("scroll", e7.windowScrollHandler);
        });
      }, e6.prototype.destroy = function() {
        var t8, e7;
        this.frameId && (cancelAnimationFrame(this.frameId), this.frameId = null), this.clearHideTimeout(), this.clearShowTimeout(), this.adapter.removeClass(Qt3), this.adapter.removeClass(te3), this.adapter.removeClass(Zt3), this.adapter.removeClass(ee3), this.adapter.removeClass(ne3), this.richTooltip && (this.adapter.deregisterEventHandler("focusout", this.richTooltipFocusOutHandler), this.persistentTooltip || (this.adapter.deregisterEventHandler("mouseenter", this.richTooltipMouseEnterHandler), this.adapter.deregisterEventHandler("mouseleave", this.richTooltipMouseLeaveHandler))), this.adapter.deregisterDocumentEventHandler("click", this.documentClickHandler), this.adapter.deregisterDocumentEventHandler("keydown", this.documentKeydownHandler), this.adapter.deregisterWindowEventHandler("scroll", this.windowScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler);
        try {
          for (var n4 = Q(this.removeAncestorScrollEventListeners), i3 = n4.next(); !i3.done; i3 = n4.next()) {
            (0, i3.value)();
          }
        } catch (e8) {
          t8 = {error: e8};
        } finally {
          try {
            i3 && !i3.done && (e7 = n4.return) && e7.call(n4);
          } finally {
            if (t8)
              throw t8.error;
          }
        }
        this.animFrame.cancelAll();
      }, e6;
    }(J2);
    function ae3(t7) {
      let e6, n4, r5, s4, m4, E4, g3, v5, $2, A5, y3, C4, b5, D4;
      const N7 = t7[28].default, H7 = u2(N7, t7, t7[27], null);
      let I2 = [{class: r5 = N2({[t7[6]]: true, "mdc-tooltip__surface": true, "mdc-tooltip__surface-animation": true})}, {style: s4 = Object.entries(t7[13]).map(ce3).concat([t7[7]]).join(" ")}, G3(t7[18], "surface$")], O5 = {};
      for (let t8 = 0; t8 < I2.length; t8 += 1)
        O5 = e3(O5, I2[t8]);
      let R6 = [{class: m4 = N2({[t7[1]]: true, "mdc-tooltip": true, "mdc-tooltip--rich": t7[17], ...t7[10]})}, {style: E4 = Object.entries(t7[11]).map(le3).concat([t7[2]]).join(" ")}, {role: g3 = t7[17] && t7[5] ? "dialog" : "tooltip"}, {"aria-hidden": "true"}, {id: t7[3]}, {tabindex: v5 = t7[17] && t7[4] ? "-1" : null}, {"data-mdc-tooltip-persist": $2 = t7[17] && t7[4] ? "true" : null}, {"data-mdc-tooltip-persistent": A5 = t7[17] && t7[4] ? "true" : null}, t7[12], w3(t7[18], ["surface$"])], P7 = {};
      for (let t8 = 0; t8 < R6.length; t8 += 1)
        P7 = e3(P7, R6[t8]);
      return {c() {
        e6 = x2("div"), n4 = x2("div"), H7 && H7.c(), I(n4, O5), I(e6, P7);
      }, m(i3, o4) {
        b2(i3, e6, o4), $(e6, n4), H7 && H7.m(n4, null), t7[29](e6), C4 = true, b5 || (D4 = [y2(y3 = q3.call(null, e6, t7[0])), y2(t7[14].call(null, e6)), E2(e6, "transitionend", t7[30])], b5 = true);
      }, p(t8, i3) {
        H7 && H7.p && 134217728 & i3[0] && f2(H7, N7, t8, t8[27], i3, null, null), I(n4, O5 = ht(I2, [(!C4 || 64 & i3[0] && r5 !== (r5 = N2({[t8[6]]: true, "mdc-tooltip__surface": true, "mdc-tooltip__surface-animation": true}))) && {class: r5}, (!C4 || 8320 & i3[0] && s4 !== (s4 = Object.entries(t8[13]).map(ce3).concat([t8[7]]).join(" "))) && {style: s4}, 262144 & i3[0] && G3(t8[18], "surface$")])), I(e6, P7 = ht(R6, [(!C4 || 1026 & i3[0] && m4 !== (m4 = N2({[t8[1]]: true, "mdc-tooltip": true, "mdc-tooltip--rich": t8[17], ...t8[10]}))) && {class: m4}, (!C4 || 2052 & i3[0] && E4 !== (E4 = Object.entries(t8[11]).map(le3).concat([t8[2]]).join(" "))) && {style: E4}, (!C4 || 32 & i3[0] && g3 !== (g3 = t8[17] && t8[5] ? "dialog" : "tooltip")) && {role: g3}, {"aria-hidden": "true"}, (!C4 || 8 & i3[0]) && {id: t8[3]}, (!C4 || 16 & i3[0] && v5 !== (v5 = t8[17] && t8[4] ? "-1" : null)) && {tabindex: v5}, (!C4 || 16 & i3[0] && $2 !== ($2 = t8[17] && t8[4] ? "true" : null)) && {"data-mdc-tooltip-persist": $2}, (!C4 || 16 & i3[0] && A5 !== (A5 = t8[17] && t8[4] ? "true" : null)) && {"data-mdc-tooltip-persistent": A5}, 4096 & i3[0] && t8[12], 262144 & i3[0] && w3(t8[18], ["surface$"])])), y3 && s2(y3.update) && 1 & i3[0] && y3.update.call(null, t8[0]);
      }, i(t8) {
        C4 || (ct(H7, t8), C4 = true);
      }, o(t8) {
        lt(H7, t8), C4 = false;
      }, d(n5) {
        n5 && w2(e6), H7 && H7.d(n5), t7[29](null), b5 = false, r2(D4);
      }};
    }
    var se3 = 0;
    var ce3 = ([t7, e6]) => `${t7}: ${e6};`;
    var le3 = ([t7, e6]) => `${t7}: ${e6};`;
    function de3(t7, e6, n4) {
      const o4 = ["use", "class", "style", "id", "unbounded", "xPos", "yPos", "persistent", "interactive", "surface$class", "surface$style", "attachScrollHandler", "removeScrollHandler", "getElement"];
      let r5, a4, s4 = h2(e6, o4), {$$slots: c3 = {}, $$scope: l3} = e6;
      const d4 = x3(R2());
      let u3, h3, {use: p3 = []} = e6, {class: m4 = ""} = e6, {style: f3 = ""} = e6, {id: T6 = "SMUI-tooltip-" + se3++} = e6, {unbounded: y3 = false} = e6, {xPos: x4 = "detected"} = e6, {yPos: _3 = "detected"} = e6, {persistent: S5 = false} = e6, {interactive: w4 = S5} = e6, {surface$class: H7 = ""} = e6, {surface$style: I2 = ""} = e6, O5 = {setParent(t8) {
        Object.defineProperty(this, "parent", {value: t8});
      }, setNextSibling(t8) {
        Object.defineProperty(this, "nextSibling", {value: t8});
      }}, R6 = {}, P7 = {}, k5 = {}, M3 = {}, L6 = D2("SMUI:tooltip:wrapper:anchor");
      l2(t7, L6, (t8) => n4(26, r5 = t8));
      let B5 = D2("SMUI:tooltip:wrapper:tooltip");
      l2(t7, B5, (t8) => n4(31, a4 = t8));
      const W6 = D2("SMUI:tooltip:rich");
      let V4 = null;
      function U5(t8) {
        t8.removeEventListener("focusout", J5), W6 && S5 ? (t8.removeEventListener("click", Q5), t8.removeEventListener("keydown", Q5)) : (t8.removeEventListener("mouseenter", Z4), t8.removeEventListener("focusin", tt4), t8.removeEventListener("mouseleave", et3), t8.removeEventListener("touchstart", nt3), t8.removeEventListener("touchend", it3)), W6 && w4 ? (t8.removeAttribute("aria-haspopup"), t8.removeAttribute("aria-expanded"), t8.removeAttribute("data-tooltip-id")) : t8.removeAttribute("aria-describedby"), h3.destroy();
      }
      function K5(t8) {
        t8.addEventListener("focusout", J5), W6 && S5 ? (t8.addEventListener("click", Q5), t8.addEventListener("keydown", Q5)) : (t8.addEventListener("mouseenter", Z4), t8.addEventListener("focusin", tt4), t8.addEventListener("mouseleave", et3), t8.addEventListener("touchstart", nt3), t8.addEventListener("touchend", it3)), W6 && w4 ? (t8.setAttribute("aria-haspopup", "dialog"), t8.setAttribute("aria-expanded", "false"), t8.setAttribute("data-tooltip-id", T6)) : t8.setAttribute("aria-describedby", T6), W6 || r5 && document.body !== ot4().parentNode && (O5.setParent(ot4().parentNode), O5.setNextSibling(ot4().nextSibling), document.body.appendChild(ot4())), h3.init();
      }
      function j4(t8) {
        return t8 in R6 ? R6[t8] : ot4().classList.contains(t8);
      }
      function F6(t8) {
        R6[t8] || n4(10, R6[t8] = true, R6);
      }
      function z5(t8) {
        t8 in R6 && !R6[t8] || n4(10, R6[t8] = false, R6);
      }
      function G5(t8, e7) {
        P7[t8] != e7 && (e7 === "" || e7 == null ? (delete P7[t8], n4(11, P7)) : n4(11, P7[t8] = e7, P7));
      }
      function Y4(t8, e7) {
        M3[t8] != e7 && (e7 === "" || e7 == null ? (delete M3[t8], n4(13, M3)) : n4(13, M3[t8] = e7, M3));
      }
      function q7(t8) {
        return t8 in k5 ? k5[t8] : ot4().getAttribute(t8);
      }
      function X4(t8, e7) {
        k5[t8] !== e7 && n4(12, k5[t8] = e7, k5);
      }
      function J5(t8) {
        u3.contains(t8.relatedTarget) || h3 && h3.hide();
      }
      function Q5(t8) {
        t8.type === "keydown" && t8.key !== "Enter" && t8.key !== " " || h3 && h3.handleAnchorClick();
      }
      function Z4() {
        h3 && h3.handleAnchorMouseEnter();
      }
      function tt4(t8) {
        h3 && h3.handleAnchorFocus(t8);
      }
      function et3() {
        h3 && h3.handleAnchorMouseLeave();
      }
      function nt3() {
        h3 && h3.handleAnchorTouchstart();
      }
      function it3() {
        h3 && h3.handleAnchorTouchend();
      }
      function ot4() {
        return u3;
      }
      C2(() => (n4(8, h3 = new re3({getAttribute: q7, setAttribute: X4, addClass: F6, hasClass: j4, removeClass: z5, getComputedStyleProperty: (t8) => {
        const e7 = ot4();
        let n5 = getComputedStyle(e7).getPropertyValue(t8);
        return n5 === "auto" && (e7.classList.add("smui-banner--force-show"), n5 = getComputedStyle(e7).getPropertyValue(t8), e7.classList.remove("smui-banner--force-show")), n5;
      }, setStyleProperty: G5, setSurfaceStyleProperty: Y4, getViewportWidth: () => window.innerWidth, getViewportHeight: () => window.innerHeight, getTooltipSize: () => {
        const t8 = ot4();
        let e7 = {width: t8.offsetWidth, height: t8.offsetHeight};
        return e7.width !== 0 && e7.height !== 0 || (t8.classList.add("smui-banner--force-show"), e7 = {width: t8.offsetWidth, height: t8.offsetHeight}, t8.classList.remove("smui-banner--force-show")), e7;
      }, getAnchorBoundingRect: () => r5 ? r5.getBoundingClientRect() : null, getParentBoundingRect: () => {
        let t8 = ot4().parentNode;
        return W6 || (t8 = document.body), t8.getBoundingClientRect() || null;
      }, getAnchorAttribute: (t8) => r5 ? r5.getAttribute(t8) : null, setAnchorAttribute: (t8, e7) => {
        r5 && r5.setAttribute(t8, e7);
      }, isRTL: () => getComputedStyle(ot4()).direction === "rtl", anchorContainsElement: (t8) => !(!r5 || !r5.contains(t8)), tooltipContainsElement: (t8) => ot4().contains(t8), focusAnchorElement: () => {
        r5 && r5.focus();
      }, registerEventHandler: (t8, e7) => {
        ot4().addEventListener(t8, e7);
      }, deregisterEventHandler: (t8, e7) => {
        ot4().removeEventListener(t8, e7);
      }, registerAnchorEventHandler: (t8, e7) => {
        r5 && r5.addEventListener(t8, e7);
      }, deregisterAnchorEventHandler: (t8, e7) => {
        r5 && r5.removeEventListener(t8, e7);
      }, registerDocumentEventHandler: (t8, e7) => {
        document.body.addEventListener(t8, e7);
      }, deregisterDocumentEventHandler: (t8, e7) => {
        document.body.removeEventListener(t8, e7);
      }, registerWindowEventHandler: (t8, e7) => {
        window.addEventListener(t8, e7, t8 === "scroll" && {capture: true, passive: true});
      }, deregisterWindowEventHandler: (t8, e7) => {
        window.removeEventListener(t8, e7, t8 === "scroll" && {capture: true, passive: true});
      }, notifyHidden: () => {
        k3(ot4(), "MDCTooltip:hidden");
      }})), g2(B5, a4 = u3, a4), () => {
        r5 && U5(r5);
      })), q2(() => {
        !W6 && typeof document != "undefined" && document.body === ot4().parentNode && O5.parent.insertBefore && O5.parent.insertBefore(ot4(), O5.nextSibling);
      });
      return t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(18, s4 = h2(e6, o4)), "use" in t8 && n4(0, p3 = t8.use), "class" in t8 && n4(1, m4 = t8.class), "style" in t8 && n4(2, f3 = t8.style), "id" in t8 && n4(3, T6 = t8.id), "unbounded" in t8 && n4(19, y3 = t8.unbounded), "xPos" in t8 && n4(20, x4 = t8.xPos), "yPos" in t8 && n4(21, _3 = t8.yPos), "persistent" in t8 && n4(4, S5 = t8.persistent), "interactive" in t8 && n4(5, w4 = t8.interactive), "surface$class" in t8 && n4(6, H7 = t8.surface$class), "surface$style" in t8 && n4(7, I2 = t8.surface$style), "$$scope" in t8 && n4(27, l3 = t8.$$scope);
      }, t7.$$.update = () => {
        100663552 & t7.$$.dirty[0] && h3 && V4 !== r5 && (V4 && U5(V4), r5 && K5(r5), n4(25, V4 = r5)), 524544 & t7.$$.dirty[0] && h3 && h3.setAnchorBoundaryType(Ht3[y3 ? "UNBOUNDED" : "BOUNDED"]), 3145984 & t7.$$.dirty[0] && h3 && h3.setTooltipPosition({xPos: Dt3[x4.toUpperCase()], yPos: Nt3[_3.toUpperCase()]});
      }, [p3, m4, f3, T6, S5, w4, H7, I2, h3, u3, R6, P7, k5, M3, d4, L6, B5, W6, s4, y3, x4, _3, function(t8) {
        h3 && h3.attachScrollHandler(t8);
      }, function(t8) {
        h3 && h3.removeScrollHandler(t8);
      }, ot4, V4, r5, l3, c3, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          u3 = t8, n4(9, u3);
        });
      }, () => h3 && h3.handleTransitionEnd()];
    }
    var ue3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, de3, ae3, i2, {use: 0, class: 1, style: 2, id: 3, unbounded: 19, xPos: 20, yPos: 21, persistent: 4, interactive: 5, surface$class: 6, surface$style: 7, attachScrollHandler: 22, removeScrollHandler: 23, getElement: 24}, [-1, -1]);
      }
      get attachScrollHandler() {
        return this.$$.ctx[22];
      }
      get removeScrollHandler() {
        return this.$$.ctx[23];
      }
      get getElement() {
        return this.$$.ctx[24];
      }
    };
    function he3(t7) {
      let e6;
      const n4 = t7[12].default, i3 = u2(n4, t7, t7[11], null);
      return {c() {
        i3 && i3.c();
      }, m(t8, n5) {
        i3 && i3.m(t8, n5), e6 = true;
      }, p(t8, e7) {
        i3 && i3.p && 2048 & e7 && f2(i3, n4, t8, t8[11], e7, null, null);
      }, i(t8) {
        e6 || (ct(i3, t8), e6 = true);
      }, o(t8) {
        lt(i3, t8), e6 = false;
      }, d(t8) {
        i3 && i3.d(t8);
      }};
    }
    function pe3(t7) {
      let e6, n4, r5, s4, l3, u3;
      const m4 = t7[12].default, E4 = u2(m4, t7, t7[11], null);
      let g3 = [{class: n4 = N2({[t7[1]]: true, "mdc-tooltip-wrapper--rich": true})}, t7[7]], v5 = {};
      for (let t8 = 0; t8 < g3.length; t8 += 1)
        v5 = e3(v5, g3[t8]);
      return {c() {
        e6 = x2("div"), E4 && E4.c(), I(e6, v5);
      }, m(n5, i3) {
        b2(n5, e6, i3), E4 && E4.m(e6, null), t7[13](e6), s4 = true, l3 || (u3 = [y2(r5 = q3.call(null, e6, t7[0])), y2(t7[4].call(null, e6))], l3 = true);
      }, p(t8, i3) {
        E4 && E4.p && 2048 & i3 && f2(E4, m4, t8, t8[11], i3, null, null), I(e6, v5 = ht(g3, [(!s4 || 2 & i3 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-tooltip-wrapper--rich": true}))) && {class: n4}, 128 & i3 && t8[7]])), r5 && s2(r5.update) && 1 & i3 && r5.update.call(null, t8[0]);
      }, i(t8) {
        s4 || (ct(E4, t8), s4 = true);
      }, o(t8) {
        lt(E4, t8), s4 = false;
      }, d(n5) {
        n5 && w2(e6), E4 && E4.d(n5), t7[13](null), l3 = false, r2(u3);
      }};
    }
    function me3(t7) {
      let e6, n4, i3, o4;
      const r5 = [pe3, he3], a4 = [];
      function s4(t8, e7) {
        return t8[2] ? 0 : 1;
      }
      return e6 = s4(t7), n4 = a4[e6] = r5[e6](t7), {c() {
        n4.c(), i3 = k2();
      }, m(t8, n5) {
        a4[e6].m(t8, n5), b2(t8, i3, n5), o4 = true;
      }, p(t8, [o5]) {
        let c3 = e6;
        e6 = s4(t8), e6 === c3 ? a4[e6].p(t8, o5) : (it(), lt(a4[c3], 1, 1, () => {
          a4[c3] = null;
        }), at(), n4 = a4[e6], n4 ? n4.p(t8, o5) : (n4 = a4[e6] = r5[e6](t8), n4.c()), ct(n4, 1), n4.m(i3.parentNode, i3));
      }, i(t8) {
        o4 || (ct(n4), o4 = true);
      }, o(t8) {
        lt(n4), o4 = false;
      }, d(t8) {
        a4[e6].d(t8), t8 && w2(i3);
      }};
    }
    function fe3(t7, e6, n4) {
      const o4 = ["use", "class", "rich", "getElement"];
      let r5, a4, s4 = h2(e6, o4), {$$slots: c3 = {}, $$scope: l3} = e6;
      const d4 = x3(R2());
      let u3, {use: h3 = []} = e6, {class: p3 = ""} = e6, {rich: m4 = false} = e6;
      const f3 = Mt(null);
      l2(t7, f3, (t8) => n4(10, a4 = t8));
      const T6 = Mt(null);
      return l2(t7, T6, (t8) => n4(9, r5 = t8)), U2("SMUI:tooltip:wrapper:anchor", f3), U2("SMUI:tooltip:wrapper:tooltip", T6), U2("SMUI:tooltip:rich", m4), t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(7, s4 = h2(e6, o4)), "use" in t8 && n4(0, h3 = t8.use), "class" in t8 && n4(1, p3 = t8.class), "rich" in t8 && n4(2, m4 = t8.rich), "$$scope" in t8 && n4(11, l3 = t8.$$scope);
      }, t7.$$.update = () => {
        1536 & t7.$$.dirty && r5 && !a4 && g2(f3, a4 = r5.previousElementSibling, a4);
      }, [h3, p3, m4, u3, d4, f3, T6, s4, function() {
        return u3;
      }, r5, a4, l3, c3, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          u3 = t8, n4(3, u3);
        });
      }];
    }
    var Te3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, fe3, me3, i2, {use: 0, class: 1, rich: 2, getElement: 8});
      }
      get getElement() {
        return this.$$.ctx[8];
      }
    };
    function Ee3(t7) {
      let e6;
      return {c() {
        e6 = v2("email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function ge3(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [Ee3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, i3) {
        $t(e6, t8, i3), n4 = true;
      }, p(t8, n5) {
        const i3 = {};
        65536 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ve3(t7) {
      let e6;
      return {c() {
        e6 = v2("Invalid email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function $e3(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [ve3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, i3) {
        $t(e6, t8, i3), n4 = true;
      }, p(t8, n5) {
        const i3 = {};
        65536 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Ae3(t7) {
      let e6, n4, i3, o4;
      function r5(e7) {
        t7[5](e7);
      }
      function a4(e7) {
        t7[6](e7);
      }
      let s4 = {type: "email", updateInvalid: true, label: "Email", input$autocomplete: "email", $$slots: {helper: [$e3], leadingIcon: [ge3]}, $$scope: {ctx: t7}};
      return t7[3] !== void 0 && (s4.invalid = t7[3]), t7[0] !== void 0 && (s4.value = t7[0]), e6 = new nn({props: s4}), J.push(() => gt(e6, "invalid", r5)), J.push(() => gt(e6, "value", a4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), o4 = true;
      }, p(t8, o5) {
        const r6 = {};
        65536 & o5 && (r6.$$scope = {dirty: o5, ctx: t8}), !n4 && 8 & o5 && (n4 = true, r6.invalid = t8[3], Y3(() => n4 = false)), !i3 && 1 & o5 && (i3 = true, r6.value = t8[0], Y3(() => i3 = false)), e6.$set(r6);
      }, i(t8) {
        o4 || (ct(e6.$$.fragment, t8), o4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), o4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ye3(t7) {
      let e6;
      return {c() {
        e6 = v2("password");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function Ce3(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [ye3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, i3) {
        $t(e6, t8, i3), n4 = true;
      }, p(t8, n5) {
        const i3 = {};
        65536 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function xe3(t7) {
      let e6;
      return {c() {
        e6 = v2("Invalid password");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function _e3(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [xe3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, i3) {
        $t(e6, t8, i3), n4 = true;
      }, p(t8, n5) {
        const i3 = {};
        65536 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Se3(t7) {
      let e6, n4, i3, o4;
      function r5(e7) {
        t7[7](e7);
      }
      function a4(e7) {
        t7[8](e7);
      }
      let s4 = {type: "password", label: "Password", input$autocomplete: "password", $$slots: {helper: [_e3], leadingIcon: [Ce3]}, $$scope: {ctx: t7}};
      return t7[3] !== void 0 && (s4.invalid = t7[3]), t7[1] !== void 0 && (s4.value = t7[1]), e6 = new nn({props: s4}), J.push(() => gt(e6, "invalid", r5)), J.push(() => gt(e6, "value", a4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), o4 = true;
      }, p(t8, o5) {
        const r6 = {};
        65536 & o5 && (r6.$$scope = {dirty: o5, ctx: t8}), !n4 && 8 & o5 && (n4 = true, r6.invalid = t8[3], Y3(() => n4 = false)), !i3 && 2 & o5 && (i3 = true, r6.value = t8[1], Y3(() => i3 = false)), e6.$set(r6);
      }, i(t8) {
        o4 || (ct(e6.$$.fragment, t8), o4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), o4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function we3(t7) {
      let e6, n4, i3, a4, l3;
      function d4(e7) {
        t7[9](e7);
      }
      let u3 = {};
      return t7[2] !== void 0 && (u3.rememberMe = t7[2]), e6 = new wt3({props: u3}), J.push(() => gt(e6, "rememberMe", d4)), {c() {
        yt(e6.$$.fragment), i3 = P2(), a4 = x2("span"), a4.textContent = "Remember me", L3(a4, "type", "Label");
      }, m(t8, n5) {
        $t(e6, t8, n5), b2(t8, i3, n5), b2(t8, a4, n5), l3 = true;
      }, p(t8, i4) {
        const o4 = {};
        !n4 && 4 & i4 && (n4 = true, o4.rememberMe = t8[2], Y3(() => n4 = false)), e6.$set(o4);
      }, i(t8) {
        l3 || (ct(e6.$$.fragment, t8), l3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), l3 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(i3), t8 && w2(a4);
      }};
    }
    function be3(t7) {
      let e6;
      return {c() {
        e6 = v2("Remember me");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function De3(t7) {
      let e6, n4, i3, o4;
      return e6 = new xn({props: {$$slots: {default: [we3]}, $$scope: {ctx: t7}}}), i3 = new ue3({props: {$$slots: {default: [be3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(i3.$$.fragment);
      }, m(t8, r5) {
        $t(e6, t8, r5), b2(t8, n4, r5), $t(i3, t8, r5), o4 = true;
      }, p(t8, n5) {
        const o5 = {};
        65540 & n5 && (o5.$$scope = {dirty: n5, ctx: t8}), e6.$set(o5);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: t8}), i3.$set(r5);
      }, i(t8) {
        o4 || (ct(e6.$$.fragment, t8), ct(i3.$$.fragment, t8), o4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(i3.$$.fragment, t8), o4 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(i3, t8);
      }};
    }
    function Ne3(t7) {
      let e6, n4;
      return e6 = new Te3({props: {$$slots: {default: [De3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, i3) {
        $t(e6, t8, i3), n4 = true;
      }, p(t8, n5) {
        const i3 = {};
        65540 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function He3(t7) {
      let e6;
      return {c() {
        e6 = v2("Login");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function Ie3(t7) {
      let e6, n4;
      return e6 = new T2({props: {$$slots: {default: [He3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, i3) {
        $t(e6, t8, i3), n4 = true;
      }, p(t8, n5) {
        const i3 = {};
        65536 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Oe3(t7) {
      let e6, n4, i3;
      return n4 = new J3({props: {variant: "outlined", $$slots: {default: [Ie3]}, $$scope: {ctx: t7}}}), n4.$on("click", t7[10]), {c() {
        e6 = x2("div"), yt(n4.$$.fragment), L3(e6, "class", "right svelte-1dmguft");
      }, m(t8, o4) {
        b2(t8, e6, o4), $t(n4, e6, null), i3 = true;
      }, p(t8, e7) {
        const i4 = {};
        65536 & e7 && (i4.$$scope = {dirty: e7, ctx: t8}), n4.$set(i4);
      }, i(t8) {
        i3 || (ct(n4.$$.fragment, t8), i3 = true);
      }, o(t8) {
        lt(n4.$$.fragment, t8), i3 = false;
      }, d(t8) {
        t8 && w2(e6), bt(n4);
      }};
    }
    function Re3(t7) {
      let e6, n4, i3, o4, a4, s4, l3, d4;
      return e6 = new q6({props: {span: 6, $$slots: {default: [Ae3]}, $$scope: {ctx: t7}}}), i3 = new q6({props: {span: 6, $$slots: {default: [Se3]}, $$scope: {ctx: t7}}}), a4 = new q6({props: {span: 6, $$slots: {default: [Ne3]}, $$scope: {ctx: t7}}}), l3 = new q6({props: {span: 6, $$slots: {default: [Oe3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(i3.$$.fragment), o4 = P2(), yt(a4.$$.fragment), s4 = P2(), yt(l3.$$.fragment);
      }, m(t8, r5) {
        $t(e6, t8, r5), b2(t8, n4, r5), $t(i3, t8, r5), b2(t8, o4, r5), $t(a4, t8, r5), b2(t8, s4, r5), $t(l3, t8, r5), d4 = true;
      }, p(t8, n5) {
        const o5 = {};
        65545 & n5 && (o5.$$scope = {dirty: n5, ctx: t8}), e6.$set(o5);
        const r5 = {};
        65546 & n5 && (r5.$$scope = {dirty: n5, ctx: t8}), i3.$set(r5);
        const s5 = {};
        65540 & n5 && (s5.$$scope = {dirty: n5, ctx: t8}), a4.$set(s5);
        const c3 = {};
        65536 & n5 && (c3.$$scope = {dirty: n5, ctx: t8}), l3.$set(c3);
      }, i(t8) {
        d4 || (ct(e6.$$.fragment, t8), ct(i3.$$.fragment, t8), ct(a4.$$.fragment, t8), ct(l3.$$.fragment, t8), d4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(i3.$$.fragment, t8), lt(a4.$$.fragment, t8), lt(l3.$$.fragment, t8), d4 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(i3, t8), t8 && w2(o4), bt(a4, t8), t8 && w2(s4), bt(l3, t8);
      }};
    }
    function Pe3(t7) {
      let e6, n4, i3;
      return n4 = new F4({props: {$$slots: {default: [Re3]}, $$scope: {ctx: t7}}}), {c() {
        e6 = x2("div"), yt(n4.$$.fragment), L3(e6, "class", "container svelte-1dmguft"), L3(e6, "id", "form");
      }, m(t8, o4) {
        b2(t8, e6, o4), $t(n4, e6, null), i3 = true;
      }, p(t8, [e7]) {
        const i4 = {};
        65551 & e7 && (i4.$$scope = {dirty: e7, ctx: t8}), n4.$set(i4);
      }, i(t8) {
        i3 || (ct(n4.$$.fragment, t8), i3 = true);
      }, o(t8) {
        lt(n4.$$.fragment, t8), i3 = false;
      }, d(t8) {
        t8 && w2(e6), bt(n4);
      }};
    }
    function ke3(t7, e6, n4) {
      let i3, o4, r5;
      l2(t7, o2, (t8) => n4(12, i3 = t8)), l2(t7, r3, (t8) => n4(13, o4 = t8)), l2(t7, se, (t8) => n4(14, r5 = t8)), console.log(i3);
      let a4 = null, s4 = null, c3 = false, l3 = false, d4 = null;
      const u3 = async () => {
        d4 = JSON.stringify({email: a4, password: s4}), await (async () => (await H.post(`${i3}/auth/login.php`, d4, {"Content-type": "application/json"}).catch((t8) => {
          console.log(t8);
        })).data)().then((t8) => {
          r3.update((e7) => t8);
        }), o4.id && r5("./shows"), o4.error && n4(3, l3 = true);
      };
      return [a4, s4, c3, l3, u3, function(t8) {
        l3 = t8, n4(3, l3);
      }, function(t8) {
        a4 = t8, n4(0, a4);
      }, function(t8) {
        l3 = t8, n4(3, l3);
      }, function(t8) {
        s4 = t8, n4(1, s4);
      }, function(t8) {
        c3 = t8, n4(2, c3);
      }, () => {
        u3();
      }];
    }
    B2({class: "mdc-tooltip__title", component: v4}), B2({class: "mdc-tooltip__content", component: _t2}), B2({class: "mdc-tooltip__content-link", component: vt}), B2({class: "mdc-tooltip--rich-actions", component: _t2, contexts: {"SMUI:button:context": "tooltip:rich-actions"}});
    var login_03936d02_default = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, ke3, Pe3, i2, {});
      }
    };
    var login_03936d02_default2 = login_03936d02_default;
  });

  // ../../dist/build/logout-53f299cd.js
  var require_logout_53f299cd = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => logout_53f299cd_default2
    });
    function l3(s4, t7, o4) {
      let l4, n4;
      return l2(s4, r3, (s5) => o4(0, l4 = s5)), l2(s4, se, (s5) => o4(1, n4 = s5)), r3.set(null), console.log(l4), n4("./"), [];
    }
    var logout_53f299cd_default = class extends _t {
      constructor(s4) {
        super(), wt(this, s4, l3, null, i2, {});
      }
    };
    var logout_53f299cd_default2 = logout_53f299cd_default;
  });

  // ../../dist/build/register-0b68bf5a.js
  var require_register_0b68bf5a = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => register_0b68bf5a_default2
    });
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
    var Y4 = {CHECKED: "mdc-switch--checked", DISABLED: "mdc-switch--disabled"};
    var J5 = {ARIA_CHECKED_ATTR: "aria-checked", NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control", RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay"};
    var W6 = function(t7) {
      function e6(n4) {
        return t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      }
      return Y(e6, t7), Object.defineProperty(e6, "strings", {get: function() {
        return J5;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "cssClasses", {get: function() {
        return Y4;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
        return {addClass: function() {
        }, removeClass: function() {
        }, setNativeControlChecked: function() {
        }, setNativeControlDisabled: function() {
        }, setNativeControlAttr: function() {
        }};
      }, enumerable: false, configurable: true}), e6.prototype.setChecked = function(t8) {
        this.adapter.setNativeControlChecked(t8), this.updateAriaChecked_(t8), this.updateCheckedStyling_(t8);
      }, e6.prototype.setDisabled = function(t8) {
        this.adapter.setNativeControlDisabled(t8), t8 ? this.adapter.addClass(Y4.DISABLED) : this.adapter.removeClass(Y4.DISABLED);
      }, e6.prototype.handleChange = function(t8) {
        var e7 = t8.target;
        this.updateAriaChecked_(e7.checked), this.updateCheckedStyling_(e7.checked);
      }, e6.prototype.updateCheckedStyling_ = function(t8) {
        t8 ? this.adapter.addClass(Y4.CHECKED) : this.adapter.removeClass(Y4.CHECKED);
      }, e6.prototype.updateAriaChecked_ = function(t8) {
        this.adapter.setNativeControlAttr(J5.ARIA_CHECKED_ATTR, "" + !!t8);
      }, e6;
    }(J2);
    function Z4(t7) {
      let e6, n4, h3, v5, x4, w4, y3, C4, b5, k5, _3, I2, E4, A5, D4, T6, S5, K5 = [{class: C4 = N2({[t7[7]]: true, "mdc-switch__native-control": true})}, {type: "checkbox"}, {role: "switch"}, t7[17], {disabled: t7[0]}, {"aria-checked": b5 = t7[8] ? "true" : "false"}, {__value: k5 = t7[5] === t7[16] ? t7[4] : t7[5]}, t7[13], G3(t7[20], "input$")], N7 = {};
      for (let t8 = 0; t8 < K5.length; t8 += 1)
        N7 = e3(N7, K5[t8]);
      let O5 = [{class: A5 = N2({[t7[2]]: true, "mdc-switch": true, "mdc-switch--disabled": t7[0], "mdc-switch--checked": t7[8], "smui-switch--color-primary": t7[3] === "primary", ...t7[11]})}, w3(t7[20], ["input$"])], j4 = {};
      for (let t8 = 0; t8 < O5.length; t8 += 1)
        j4 = e3(j4, O5[t8]);
      return {c() {
        e6 = x2("div"), n4 = x2("div"), h3 = P2(), v5 = x2("div"), x4 = x2("div"), w4 = P2(), y3 = x2("input"), L3(n4, "class", "mdc-switch__track"), L3(x4, "class", "mdc-switch__thumb"), I(y3, N7), L3(v5, "class", I2 = N2({"mdc-switch__thumb-underlay": true, ...t7[12]})), I(e6, j4);
      }, m(s4, c3) {
        b2(s4, e6, c3), $(e6, n4), $(e6, h3), $(e6, v5), $(v5, x4), $(v5, w4), $(v5, y3), t7[33](y3), y3.checked = t7[8], t7[35](e6), T6 || (S5 = [y2(_3 = q3.call(null, y3, t7[6])), E2(y3, "change", t7[34]), E2(y3, "change", t7[29]), E2(y3, "input", t7[30]), E2(y3, "blur", t7[31]), E2(y3, "focus", t7[32]), y2(E4 = dt.call(null, v5, {unbounded: true, color: t7[3], active: t7[14], addClass: t7[18], removeClass: t7[19], eventTarget: t7[10]})), y2(D4 = q3.call(null, e6, t7[1])), y2(t7[15].call(null, e6))], T6 = true);
      }, p(t8, n5) {
        I(y3, N7 = ht(K5, [128 & n5[0] && C4 !== (C4 = N2({[t8[7]]: true, "mdc-switch__native-control": true})) && {class: C4}, {type: "checkbox"}, {role: "switch"}, t8[17], 1 & n5[0] && {disabled: t8[0]}, 256 & n5[0] && b5 !== (b5 = t8[8] ? "true" : "false") && {"aria-checked": b5}, 48 & n5[0] && k5 !== (k5 = t8[5] === t8[16] ? t8[4] : t8[5]) && {__value: k5}, 8192 & n5[0] && t8[13], 1048576 & n5[0] && G3(t8[20], "input$")])), _3 && s2(_3.update) && 64 & n5[0] && _3.update.call(null, t8[6]), 256 & n5[0] && (y3.checked = t8[8]), 4096 & n5[0] && I2 !== (I2 = N2({"mdc-switch__thumb-underlay": true, ...t8[12]})) && L3(v5, "class", I2), E4 && s2(E4.update) && 17416 & n5[0] && E4.update.call(null, {unbounded: true, color: t8[3], active: t8[14], addClass: t8[18], removeClass: t8[19], eventTarget: t8[10]}), I(e6, j4 = ht(O5, [2317 & n5[0] && A5 !== (A5 = N2({[t8[2]]: true, "mdc-switch": true, "mdc-switch--disabled": t8[0], "mdc-switch--checked": t8[8], "smui-switch--color-primary": t8[3] === "primary", ...t8[11]})) && {class: A5}, 1048576 & n5[0] && w3(t8[20], ["input$"])])), D4 && s2(D4.update) && 2 & n5[0] && D4.update.call(null, t8[1]);
      }, i: t3, o: t3, d(n5) {
        n5 && w2(e6), t7[33](null), t7[35](null), T6 = false, r2(S5);
      }};
    }
    function tt4(t7, e6, n4) {
      const c3 = ["use", "class", "disabled", "color", "group", "checked", "value", "valueKey", "input$use", "input$class", "getId", "getElement"];
      let a4 = h2(e6, c3);
      const o4 = x3(R2());
      let r5, i3, $2, l3 = () => {
      }, {use: u3 = []} = e6, {class: d4 = ""} = e6, {disabled: p3 = false} = e6, {color: f3 = "secondary"} = e6, {group: m4 = l3} = e6, {checked: g3 = l3} = e6, {value: k5 = null} = e6, {valueKey: _3 = l3} = e6, {input$use: I2 = []} = e6, {input$class: E4 = ""} = e6, A5 = {}, D4 = {}, T6 = {}, S5 = false, R6 = D2("SMUI:generic:input:props") || {}, H7 = m4 === l3 ? g3 !== l3 && g3 : m4.indexOf(k5) !== -1, K5 = g3, N7 = m4 === l3 ? [] : [...m4], O5 = H7;
      function j4(t8) {
        A5[t8] || n4(11, A5[t8] = true, A5);
      }
      function M3(t8) {
        t8 in A5 && !A5[t8] || n4(11, A5[t8] = false, A5);
      }
      function L6(t8, e7) {
        T6[t8] !== e7 && n4(13, T6[t8] = e7, T6);
      }
      function P7() {
        return r5;
      }
      return C2(() => {
        n4(25, i3 = new W6({addClass: j4, removeClass: M3, setNativeControlChecked: (t9) => n4(8, H7 = t9), setNativeControlDisabled: (t9) => n4(0, p3 = t9), setNativeControlAttr: L6}));
        const t8 = {get element() {
          return P7();
        }, get checked() {
          return H7;
        }, set checked(t9) {
          H7 !== k5 && n4(8, H7 = k5);
        }, activateRipple() {
          p3 || n4(14, S5 = true);
        }, deactivateRipple() {
          n4(14, S5 = false);
        }};
        return k3(r5, "SMUI:generic:input:mount", t8), i3.init(), () => {
          k3(r5, "SMUI:generic:input:unmount", t8), i3.destroy();
        };
      }), t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(20, a4 = h2(e6, c3)), "use" in t8 && n4(1, u3 = t8.use), "class" in t8 && n4(2, d4 = t8.class), "disabled" in t8 && n4(0, p3 = t8.disabled), "color" in t8 && n4(3, f3 = t8.color), "group" in t8 && n4(21, m4 = t8.group), "checked" in t8 && n4(22, g3 = t8.checked), "value" in t8 && n4(4, k5 = t8.value), "valueKey" in t8 && n4(5, _3 = t8.valueKey), "input$use" in t8 && n4(6, I2 = t8.input$use), "input$class" in t8 && n4(7, E4 = t8.input$class);
      }, t7.$$.update = () => {
        if (509608208 & t7.$$.dirty[0]) {
          let t8 = false;
          if (m4 !== l3)
            if (O5 !== H7) {
              const e7 = m4.indexOf(k5);
              H7 && e7 === -1 ? (m4.push(k5), n4(21, m4), n4(16, l3), n4(28, O5), n4(8, H7), n4(4, k5), n4(27, N7), n4(22, g3), n4(26, K5), n4(25, i3)) : H7 || e7 === -1 || (m4.splice(e7, 1), n4(21, m4), n4(16, l3), n4(28, O5), n4(8, H7), n4(4, k5), n4(27, N7), n4(22, g3), n4(26, K5), n4(25, i3)), t8 = true;
            } else {
              const e7 = N7.indexOf(k5), s4 = m4.indexOf(k5);
              e7 > -1 && s4 === -1 ? (n4(8, H7 = false), t8 = true) : s4 > -1 && e7 === -1 && (n4(8, H7 = true), t8 = true);
            }
          g3 === l3 ? O5 !== H7 && (t8 = true) : g3 !== H7 && (g3 === K5 ? n4(22, g3 = H7) : n4(8, H7 = g3), t8 = true), n4(26, K5 = g3), n4(27, N7 = m4 === l3 ? [] : [...m4]), n4(28, O5 = H7), t8 && i3 && i3.handleChange({target: {checked: H7}});
        }
      }, [p3, u3, d4, f3, k5, _3, I2, E4, H7, r5, $2, A5, D4, T6, S5, o4, l3, R6, function(t8) {
        D4[t8] || n4(12, D4[t8] = true, D4);
      }, function(t8) {
        t8 in D4 && !D4[t8] || n4(12, D4[t8] = false, D4);
      }, a4, m4, g3, function() {
        return R6 && R6.id;
      }, P7, i3, K5, N7, O5, function(e7) {
        H2(t7, e7);
      }, function(e7) {
        H2(t7, e7);
      }, function(e7) {
        H2(t7, e7);
      }, function(e7) {
        H2(t7, e7);
      }, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          $2 = t8, n4(10, $2);
        });
      }, function() {
        H7 = this.checked, n4(8, H7), n4(21, m4), n4(16, l3), n4(28, O5), n4(4, k5), n4(27, N7), n4(22, g3), n4(26, K5), n4(25, i3);
      }, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          r5 = t8, n4(9, r5);
        });
      }];
    }
    var et3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, tt4, Z4, i2, {use: 1, class: 2, disabled: 0, color: 3, group: 21, checked: 22, value: 4, valueKey: 5, input$use: 6, input$class: 7, getId: 23, getElement: 24}, [-1, -1]);
      }
      get getId() {
        return this.$$.ctx[23];
      }
      get getElement() {
        return this.$$.ctx[24];
      }
    };
    function nt3(t7) {
      let e6;
      return {c() {
        e6 = v2("email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function st4(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [nt3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ct4(t7) {
      let e6;
      return {c() {
        e6 = v2("Helper Text");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function at3(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [ct4]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ot4(t7) {
      let e6, n4, s4, c3;
      function a4(e7) {
        t7[3](e7);
      }
      function o4(e7) {
        t7[4](e7);
      }
      let r5 = {type: "email", updateInvalid: true, label: "Email", input$autocomplete: "email", $$slots: {helper: [at3], leadingIcon: [st4]}, $$scope: {ctx: t7}};
      return t7[2] !== void 0 && (r5.invalid = t7[2]), t7[0] !== void 0 && (r5.value = t7[0]), e6 = new nn({props: r5}), J.push(() => gt(e6, "invalid", a4)), J.push(() => gt(e6, "value", o4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), c3 = true;
      }, p(t8, c4) {
        const a5 = {};
        16384 & c4 && (a5.$$scope = {dirty: c4, ctx: t8}), !n4 && 4 & c4 && (n4 = true, a5.invalid = t8[2], Y3(() => n4 = false)), !s4 && 1 & c4 && (s4 = true, a5.value = t8[0], Y3(() => s4 = false)), e6.$set(a5);
      }, i(t8) {
        c3 || (ct(e6.$$.fragment, t8), c3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), c3 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function rt3(t7) {
      let e6;
      return {c() {
        e6 = v2("email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function it3(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [rt3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function $t3(t7) {
      let e6;
      return {c() {
        e6 = v2("Helper Text");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function lt3(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [$t3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ut4(t7) {
      let e6, n4, s4, c3;
      function a4(e7) {
        t7[5](e7);
      }
      function o4(e7) {
        t7[6](e7);
      }
      let r5 = {type: "password", updateInvalid: true, label: "Password", input$autocomplete: "password", $$slots: {helper: [lt3], leadingIcon: [it3]}, $$scope: {ctx: t7}};
      return t7[2] !== void 0 && (r5.invalid = t7[2]), t7[0] !== void 0 && (r5.value = t7[0]), e6 = new nn({props: r5}), J.push(() => gt(e6, "invalid", a4)), J.push(() => gt(e6, "value", o4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), c3 = true;
      }, p(t8, c4) {
        const a5 = {};
        16384 & c4 && (a5.$$scope = {dirty: c4, ctx: t8}), !n4 && 4 & c4 && (n4 = true, a5.invalid = t8[2], Y3(() => n4 = false)), !s4 && 1 & c4 && (s4 = true, a5.value = t8[0], Y3(() => s4 = false)), e6.$set(a5);
      }, i(t8) {
        c3 || (ct(e6.$$.fragment, t8), c3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), c3 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function dt4(t7) {
      let e6;
      return {c() {
        e6 = v2("email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function pt4(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [dt4]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ft4(t7) {
      let e6;
      return {c() {
        e6 = v2("Helper Text");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function mt4(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [ft4]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function gt3(t7) {
      let e6, n4, s4, c3;
      function a4(e7) {
        t7[7](e7);
      }
      function o4(e7) {
        t7[8](e7);
      }
      let r5 = {type: "password", updateInvalid: true, label: "Password", input$autocomplete: "password", $$slots: {helper: [mt4], leadingIcon: [pt4]}, $$scope: {ctx: t7}};
      return t7[2] !== void 0 && (r5.invalid = t7[2]), t7[0] !== void 0 && (r5.value = t7[0]), e6 = new nn({props: r5}), J.push(() => gt(e6, "invalid", a4)), J.push(() => gt(e6, "value", o4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), c3 = true;
      }, p(t8, c4) {
        const a5 = {};
        16384 & c4 && (a5.$$scope = {dirty: c4, ctx: t8}), !n4 && 4 & c4 && (n4 = true, a5.invalid = t8[2], Y3(() => n4 = false)), !s4 && 1 & c4 && (s4 = true, a5.value = t8[0], Y3(() => s4 = false)), e6.$set(a5);
      }, i(t8) {
        c3 || (ct(e6.$$.fragment, t8), c3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), c3 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ht4(t7) {
      let e6;
      return {c() {
        e6 = v2("email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function vt4(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [ht4]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function xt3(t7) {
      let e6;
      return {c() {
        e6 = v2("Helper Text");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function wt3(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [xt3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function yt3(t7) {
      let e6, n4, s4, c3;
      function a4(e7) {
        t7[9](e7);
      }
      function o4(e7) {
        t7[10](e7);
      }
      let r5 = {type: "password", updateInvalid: true, label: "Password", input$autocomplete: "password", $$slots: {helper: [wt3], leadingIcon: [vt4]}, $$scope: {ctx: t7}};
      return t7[2] !== void 0 && (r5.invalid = t7[2]), t7[0] !== void 0 && (r5.value = t7[0]), e6 = new nn({props: r5}), J.push(() => gt(e6, "invalid", a4)), J.push(() => gt(e6, "value", o4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), c3 = true;
      }, p(t8, c4) {
        const a5 = {};
        16384 & c4 && (a5.$$scope = {dirty: c4, ctx: t8}), !n4 && 4 & c4 && (n4 = true, a5.invalid = t8[2], Y3(() => n4 = false)), !s4 && 1 & c4 && (s4 = true, a5.value = t8[0], Y3(() => s4 = false)), e6.$set(a5);
      }, i(t8) {
        c3 || (ct(e6.$$.fragment, t8), c3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), c3 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Ct3(t7) {
      let e6;
      return {c() {
        e6 = v2("email");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function bt3(t7) {
      let e6, n4;
      return e6 = new rn({props: {class: "material-icons", slot: "leadingIcon", $$slots: {default: [Ct3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function kt3(t7) {
      let e6;
      return {c() {
        e6 = v2("Helper Text");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function _t4(t7) {
      let e6, n4;
      return e6 = new pn({props: {validationMsg: true, slot: "helper", $$slots: {default: [kt3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function It3(t7) {
      let e6, n4, s4, c3;
      function a4(e7) {
        t7[11](e7);
      }
      function o4(e7) {
        t7[12](e7);
      }
      let r5 = {type: "password", updateInvalid: true, label: "Password", input$autocomplete: "password", $$slots: {helper: [_t4], leadingIcon: [bt3]}, $$scope: {ctx: t7}};
      return t7[2] !== void 0 && (r5.invalid = t7[2]), t7[0] !== void 0 && (r5.value = t7[0]), e6 = new nn({props: r5}), J.push(() => gt(e6, "invalid", a4)), J.push(() => gt(e6, "value", o4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), c3 = true;
      }, p(t8, c4) {
        const a5 = {};
        16384 & c4 && (a5.$$scope = {dirty: c4, ctx: t8}), !n4 && 4 & c4 && (n4 = true, a5.invalid = t8[2], Y3(() => n4 = false)), !s4 && 1 & c4 && (s4 = true, a5.value = t8[0], Y3(() => s4 = false)), e6.$set(a5);
      }, i(t8) {
        c3 || (ct(e6.$$.fragment, t8), c3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), c3 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Et3(t7) {
      let e6, n4, s4;
      function c3(e7) {
        t7[13](e7);
      }
      let a4 = {color: "primary"};
      return t7[1] !== void 0 && (a4.checked = t7[1]), e6 = new et3({props: a4}), J.push(() => gt(e6, "checked", c3)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), s4 = true;
      }, p(t8, s5) {
        const c4 = {};
        !n4 && 2 & s5 && (n4 = true, c4.checked = t8[1], Y3(() => n4 = false)), e6.$set(c4);
      }, i(t8) {
        s4 || (ct(e6.$$.fragment, t8), s4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), s4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function At3(t7) {
      let e6;
      return {c() {
        e6 = x2("span"), e6.textContent = "I agree to the Terms and Conditions", L3(e6, "slot", "label");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function Dt3(t7) {
      let e6, n4;
      return e6 = new xn({props: {$$slots: {label: [At3], default: [Et3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16386 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Tt3(t7) {
      let e6;
      return {c() {
        e6 = v2("Register");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function St3(t7) {
      let e6, n4;
      return e6 = new T2({props: {$$slots: {default: [Tt3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), n4 = true;
      }, p(t8, n5) {
        const s4 = {};
        16384 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), e6.$set(s4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Rt3(t7) {
      let e6, n4, s4;
      return n4 = new J3({props: {width: 120, variant: "outlined", $$slots: {default: [St3]}, $$scope: {ctx: t7}}}), {c() {
        e6 = x2("div"), yt(n4.$$.fragment), L3(e6, "class", "right svelte-ft7s4q");
      }, m(t8, c3) {
        b2(t8, e6, c3), $t(n4, e6, null), s4 = true;
      }, p(t8, e7) {
        const s5 = {};
        16384 & e7 && (s5.$$scope = {dirty: e7, ctx: t8}), n4.$set(s5);
      }, i(t8) {
        s4 || (ct(n4.$$.fragment, t8), s4 = true);
      }, o(t8) {
        lt(n4.$$.fragment, t8), s4 = false;
      }, d(t8) {
        t8 && w2(e6), bt(n4);
      }};
    }
    function Ht3(t7) {
      let e6, n4, s4, c3, o4, r5, $2, l3, u3, d4, p3, f3, g3, h3;
      return e6 = new q6({props: {span: 6, $$slots: {default: [ot4]}, $$scope: {ctx: t7}}}), s4 = new q6({props: {span: 6, $$slots: {default: [ut4]}, $$scope: {ctx: t7}}}), o4 = new q6({props: {span: 6, $$slots: {default: [gt3]}, $$scope: {ctx: t7}}}), $2 = new q6({props: {span: 6, $$slots: {default: [yt3]}, $$scope: {ctx: t7}}}), u3 = new q6({props: {span: 6, $$slots: {default: [It3]}, $$scope: {ctx: t7}}}), p3 = new q6({props: {span: 12, $$slots: {default: [Dt3]}, $$scope: {ctx: t7}}}), g3 = new q6({props: {span: 12, $$slots: {default: [Rt3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(s4.$$.fragment), c3 = P2(), yt(o4.$$.fragment), r5 = P2(), yt($2.$$.fragment), l3 = P2(), yt(u3.$$.fragment), d4 = P2(), yt(p3.$$.fragment), f3 = P2(), yt(g3.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), b2(t8, n4, a4), $t(s4, t8, a4), b2(t8, c3, a4), $t(o4, t8, a4), b2(t8, r5, a4), $t($2, t8, a4), b2(t8, l3, a4), $t(u3, t8, a4), b2(t8, d4, a4), $t(p3, t8, a4), b2(t8, f3, a4), $t(g3, t8, a4), h3 = true;
      }, p(t8, n5) {
        const c4 = {};
        16389 & n5 && (c4.$$scope = {dirty: n5, ctx: t8}), e6.$set(c4);
        const a4 = {};
        16389 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), s4.$set(a4);
        const r6 = {};
        16389 & n5 && (r6.$$scope = {dirty: n5, ctx: t8}), o4.$set(r6);
        const i3 = {};
        16389 & n5 && (i3.$$scope = {dirty: n5, ctx: t8}), $2.$set(i3);
        const l4 = {};
        16389 & n5 && (l4.$$scope = {dirty: n5, ctx: t8}), u3.$set(l4);
        const d5 = {};
        16386 & n5 && (d5.$$scope = {dirty: n5, ctx: t8}), p3.$set(d5);
        const f4 = {};
        16384 & n5 && (f4.$$scope = {dirty: n5, ctx: t8}), g3.$set(f4);
      }, i(t8) {
        h3 || (ct(e6.$$.fragment, t8), ct(s4.$$.fragment, t8), ct(o4.$$.fragment, t8), ct($2.$$.fragment, t8), ct(u3.$$.fragment, t8), ct(p3.$$.fragment, t8), ct(g3.$$.fragment, t8), h3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(s4.$$.fragment, t8), lt(o4.$$.fragment, t8), lt($2.$$.fragment, t8), lt(u3.$$.fragment, t8), lt(p3.$$.fragment, t8), lt(g3.$$.fragment, t8), h3 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(s4, t8), t8 && w2(c3), bt(o4, t8), t8 && w2(r5), bt($2, t8), t8 && w2(l3), bt(u3, t8), t8 && w2(d4), bt(p3, t8), t8 && w2(f3), bt(g3, t8);
      }};
    }
    function Kt3(t7) {
      let e6, n4, s4;
      return n4 = new F4({props: {$$slots: {default: [Ht3]}, $$scope: {ctx: t7}}}), {c() {
        e6 = x2("div"), yt(n4.$$.fragment), L3(e6, "class", "container svelte-ft7s4q"), L3(e6, "id", "form");
      }, m(t8, c3) {
        b2(t8, e6, c3), $t(n4, e6, null), s4 = true;
      }, p(t8, [e7]) {
        const s5 = {};
        16391 & e7 && (s5.$$scope = {dirty: e7, ctx: t8}), n4.$set(s5);
      }, i(t8) {
        s4 || (ct(n4.$$.fragment, t8), s4 = true);
      }, o(t8) {
        lt(n4.$$.fragment, t8), s4 = false;
      }, d(t8) {
        t8 && w2(e6), bt(n4);
      }};
    }
    function Nt3(t7, e6, n4) {
      let s4 = null, c3 = false, a4 = false;
      return [s4, c3, a4, function(t8) {
        a4 = t8, n4(2, a4);
      }, function(t8) {
        s4 = t8, n4(0, s4);
      }, function(t8) {
        a4 = t8, n4(2, a4);
      }, function(t8) {
        s4 = t8, n4(0, s4);
      }, function(t8) {
        a4 = t8, n4(2, a4);
      }, function(t8) {
        s4 = t8, n4(0, s4);
      }, function(t8) {
        a4 = t8, n4(2, a4);
      }, function(t8) {
        s4 = t8, n4(0, s4);
      }, function(t8) {
        a4 = t8, n4(2, a4);
      }, function(t8) {
        s4 = t8, n4(0, s4);
      }, function(t8) {
        c3 = t8, n4(1, c3);
      }];
    }
    var register_0b68bf5a_default = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, Nt3, Kt3, i2, {});
      }
    };
    var register_0b68bf5a_default2 = register_0b68bf5a_default;
  });

  // ../../dist/build/shows-4413671f.js
  var require_shows_4413671f = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => shows_4413671f_default2
    });
    function yt3(t7) {
      let e6, n4, g3, h3, _3, C4, S5, E4;
      const A5 = t7[17].default, y3 = u2(A5, t7, t7[16], null);
      let O5 = [{class: n4 = N2({[t7[1]]: true, "mdc-card__primary-action": true, "smui-card__primary-action--padded": t7[5], ...t7[8]})}, {style: g3 = Object.entries(t7[9]).map(Ot3).concat([t7[2]]).join(" ")}, {tabindex: t7[6]}, t7[14]], b5 = {};
      for (let t8 = 0; t8 < O5.length; t8 += 1)
        b5 = e3(b5, O5[t8]);
      return {c() {
        e6 = x2("div"), y3 && y3.c(), I(e6, b5);
      }, m(n5, a4) {
        b2(n5, e6, a4), y3 && y3.m(e6, null), t7[18](e6), C4 = true, S5 || (E4 = [y2(h3 = q3.call(null, e6, t7[0])), y2(t7[10].call(null, e6)), y2(_3 = dt.call(null, e6, {ripple: t7[3], unbounded: false, color: t7[4], addClass: t7[11], removeClass: t7[12], addStyle: t7[13]}))], S5 = true);
      }, p(t8, [a4]) {
        y3 && y3.p && 65536 & a4 && f2(y3, A5, t8, t8[16], a4, null, null), I(e6, b5 = ht(O5, [(!C4 || 290 & a4 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-card__primary-action": true, "smui-card__primary-action--padded": t8[5], ...t8[8]}))) && {class: n4}, (!C4 || 516 & a4 && g3 !== (g3 = Object.entries(t8[9]).map(Ot3).concat([t8[2]]).join(" "))) && {style: g3}, (!C4 || 64 & a4) && {tabindex: t8[6]}, 16384 & a4 && t8[14]])), h3 && s2(h3.update) && 1 & a4 && h3.update.call(null, t8[0]), _3 && s2(_3.update) && 24 & a4 && _3.update.call(null, {ripple: t8[3], unbounded: false, color: t8[4], addClass: t8[11], removeClass: t8[12], addStyle: t8[13]});
      }, i(t8) {
        C4 || (ct(y3, t8), C4 = true);
      }, o(t8) {
        lt(y3, t8), C4 = false;
      }, d(n5) {
        n5 && w2(e6), y3 && y3.d(n5), t7[18](null), S5 = false, r2(E4);
      }};
    }
    var Ot3 = ([t7, e6]) => `${t7}: ${e6};`;
    function bt3(t7, e6, n4) {
      const a4 = ["use", "class", "style", "ripple", "color", "padded", "tabindex", "getElement"];
      let s4 = h2(e6, a4), {$$slots: i3 = {}, $$scope: r5} = e6;
      const c3 = x3(R2());
      let l3, {use: d4 = []} = e6, {class: u3 = ""} = e6, {style: p3 = ""} = e6, {ripple: f3 = true} = e6, {color: m4 = null} = e6, {padded: $2 = false} = e6, {tabindex: S5 = "0"} = e6, E4 = {}, A5 = {};
      return t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(14, s4 = h2(e6, a4)), "use" in t8 && n4(0, d4 = t8.use), "class" in t8 && n4(1, u3 = t8.class), "style" in t8 && n4(2, p3 = t8.style), "ripple" in t8 && n4(3, f3 = t8.ripple), "color" in t8 && n4(4, m4 = t8.color), "padded" in t8 && n4(5, $2 = t8.padded), "tabindex" in t8 && n4(6, S5 = t8.tabindex), "$$scope" in t8 && n4(16, r5 = t8.$$scope);
      }, [d4, u3, p3, f3, m4, $2, S5, l3, E4, A5, c3, function(t8) {
        E4[t8] || n4(8, E4[t8] = true, E4);
      }, function(t8) {
        t8 in E4 && !E4[t8] || n4(8, E4[t8] = false, E4);
      }, function(t8, e7) {
        A5[t8] != e7 && (e7 === "" || e7 == null ? (delete A5[t8], n4(9, A5)) : n4(9, A5[t8] = e7, A5));
      }, s4, function() {
        return l3;
      }, r5, i3, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          l3 = t8, n4(7, l3);
        });
      }];
    }
    var vt4 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, bt3, yt3, i2, {use: 0, class: 1, style: 2, ripple: 3, color: 4, padded: 5, tabindex: 6, getElement: 15});
      }
      get getElement() {
        return this.$$.ctx[15];
      }
    };
    function Lt3(t7) {
      let e6, n4, g3, h3, _3, C4;
      const S5 = t7[8].default, E4 = u2(S5, t7, t7[7], null);
      let A5 = [{class: n4 = N2({[t7[1]]: true, "mdc-card__media": true, "mdc-card__media--square": t7[2] === "square", "mdc-card__media--16-9": t7[2] === "16x9"})}, t7[5]], y3 = {};
      for (let t8 = 0; t8 < A5.length; t8 += 1)
        y3 = e3(y3, A5[t8]);
      return {c() {
        e6 = x2("div"), E4 && E4.c(), I(e6, y3);
      }, m(n5, a4) {
        b2(n5, e6, a4), E4 && E4.m(e6, null), t7[9](e6), h3 = true, _3 || (C4 = [y2(g3 = q3.call(null, e6, t7[0])), y2(t7[4].call(null, e6))], _3 = true);
      }, p(t8, [a4]) {
        E4 && E4.p && 128 & a4 && f2(E4, S5, t8, t8[7], a4, null, null), I(e6, y3 = ht(A5, [(!h3 || 6 & a4 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-card__media": true, "mdc-card__media--square": t8[2] === "square", "mdc-card__media--16-9": t8[2] === "16x9"}))) && {class: n4}, 32 & a4 && t8[5]])), g3 && s2(g3.update) && 1 & a4 && g3.update.call(null, t8[0]);
      }, i(t8) {
        h3 || (ct(E4, t8), h3 = true);
      }, o(t8) {
        lt(E4, t8), h3 = false;
      }, d(n5) {
        n5 && w2(e6), E4 && E4.d(n5), t7[9](null), _3 = false, r2(C4);
      }};
    }
    function Tt3(t7, e6, n4) {
      const a4 = ["use", "class", "aspectRatio", "getElement"];
      let s4 = h2(e6, a4), {$$slots: i3 = {}, $$scope: r5} = e6;
      const c3 = x3(R2());
      let l3, {use: d4 = []} = e6, {class: u3 = ""} = e6, {aspectRatio: p3 = null} = e6;
      return t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(5, s4 = h2(e6, a4)), "use" in t8 && n4(0, d4 = t8.use), "class" in t8 && n4(1, u3 = t8.class), "aspectRatio" in t8 && n4(2, p3 = t8.aspectRatio), "$$scope" in t8 && n4(7, r5 = t8.$$scope);
      }, [d4, u3, p3, l3, c3, s4, function() {
        return l3;
      }, r5, i3, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          l3 = t8, n4(3, l3);
        });
      }];
    }
    var It3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, Tt3, Lt3, i2, {use: 0, class: 1, aspectRatio: 2, getElement: 6});
      }
      get getElement() {
        return this.$$.ctx[6];
      }
    };
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
    var Rt3 = {ICON_BUTTON_ON: "mdc-icon-button--on", ROOT: "mdc-icon-button"};
    var Dt3 = {ARIA_LABEL: "aria-label", ARIA_PRESSED: "aria-pressed", DATA_ARIA_LABEL_OFF: "data-aria-label-off", DATA_ARIA_LABEL_ON: "data-aria-label-on", CHANGE_EVENT: "MDCIconButtonToggle:change"};
    var xt3 = function(t7) {
      function e6(n4) {
        var a4 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
        return a4.hasToggledAriaLabel = false, a4;
      }
      return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
        return Rt3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
        return Dt3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
        return {addClass: function() {
        }, hasClass: function() {
          return false;
        }, notifyChange: function() {
        }, removeClass: function() {
        }, getAttr: function() {
          return null;
        }, setAttr: function() {
        }};
      }, enumerable: false, configurable: true}), e6.prototype.init = function() {
        var t8 = this.adapter.getAttr(Dt3.DATA_ARIA_LABEL_ON), e7 = this.adapter.getAttr(Dt3.DATA_ARIA_LABEL_OFF);
        if (t8 && e7) {
          if (this.adapter.getAttr(Dt3.ARIA_PRESSED) !== null)
            throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
          this.hasToggledAriaLabel = true;
        } else
          this.adapter.setAttr(Dt3.ARIA_PRESSED, String(this.isOn()));
      }, e6.prototype.handleClick = function() {
        this.toggle(), this.adapter.notifyChange({isOn: this.isOn()});
      }, e6.prototype.isOn = function() {
        return this.adapter.hasClass(Rt3.ICON_BUTTON_ON);
      }, e6.prototype.toggle = function(t8) {
        if (t8 === void 0 && (t8 = !this.isOn()), t8 ? this.adapter.addClass(Rt3.ICON_BUTTON_ON) : this.adapter.removeClass(Rt3.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
          var e7 = t8 ? this.adapter.getAttr(Dt3.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Dt3.DATA_ARIA_LABEL_OFF);
          this.adapter.setAttr(Dt3.ARIA_LABEL, e7 || "");
        } else
          this.adapter.setAttr(Dt3.ARIA_PRESSED, "" + t8);
      }, e6;
    }(J2);
    function Nt3(t7) {
      let e6;
      const n4 = t7[28].default, o4 = u2(n4, t7, t7[32], null);
      return {c() {
        o4 && o4.c();
      }, m(t8, n5) {
        o4 && o4.m(t8, n5), e6 = true;
      }, p(t8, e7) {
        o4 && o4.p && 2 & e7[1] && f2(o4, n4, t8, t8[32], e7, null, null);
      }, i(t8) {
        e6 || (ct(o4, t8), e6 = true);
      }, o(t8) {
        lt(o4, t8), e6 = false;
      }, d(t8) {
        o4 && o4.d(t8);
      }};
    }
    function wt3(t7) {
      let e6, n4, a4;
      const s4 = [{use: [[dt, {ripple: t7[4], unbounded: true, color: t7[5], disabled: !!t7[24].disabled, addClass: t7[21], removeClass: t7[22], addStyle: t7[23]}], t7[17], ...t7[1]]}, {class: N2({[t7[2]]: true, "mdc-icon-button": true, "mdc-icon-button--on": t7[0] !== t7[18] && t7[0], "mdc-card__action": t7[19] === "card:action", "mdc-card__action--icon": t7[19] === "card:action", "mdc-top-app-bar__navigation-icon": t7[19] === "top-app-bar:navigation", "mdc-top-app-bar__action-item": t7[19] === "top-app-bar:action", "mdc-snackbar__dismiss": t7[19] === "snackbar:actions", "mdc-data-table__pagination-button": t7[19] === "data-table:pagination", "mdc-data-table__sort-icon-button": t7[19] === "data-table:sortable-header-cell", "mdc-dialog__close": t7[19] === "dialog:header" && t7[9] === "close", ...t7[13]})}, {style: Object.entries(t7[14]).map(Ft3).concat([t7[3]]).join(" ")}, {"aria-pressed": t7[0] !== t7[18] ? t7[0] ? "true" : "false" : null}, {"aria-label": t7[0] ? t7[6] : t7[7]}, {"data-aria-label-on": t7[6]}, {"data-aria-label-off": t7[7]}, {"aria-describedby": t7[20]}, {href: t7[8]}, t7[16], t7[15], t7[24]];
      var i3 = t7[10];
      function c3(t8) {
        let e7 = {$$slots: {default: [Nt3]}, $$scope: {ctx: t8}};
        for (let t9 = 0; t9 < s4.length; t9 += 1)
          e7 = e3(e7, s4[t9]);
        return {props: e7};
      }
      return i3 && (e6 = new i3(c3(t7)), t7[29](e6), e6.$on("click", t7[30]), e6.$on("click", t7[31])), {c() {
        e6 && yt(e6.$$.fragment), n4 = k2();
      }, m(t8, o4) {
        e6 && $t(e6, t8, o4), b2(t8, n4, o4), a4 = true;
      }, p(t8, a5) {
        const o4 = 33547263 & a5[0] ? ht(s4, [31588402 & a5[0] && {use: [[dt, {ripple: t8[4], unbounded: true, color: t8[5], disabled: !!t8[24].disabled, addClass: t8[21], removeClass: t8[22], addStyle: t8[23]}], t8[17], ...t8[1]]}, 795141 & a5[0] && {class: N2({[t8[2]]: true, "mdc-icon-button": true, "mdc-icon-button--on": t8[0] !== t8[18] && t8[0], "mdc-card__action": t8[19] === "card:action", "mdc-card__action--icon": t8[19] === "card:action", "mdc-top-app-bar__navigation-icon": t8[19] === "top-app-bar:navigation", "mdc-top-app-bar__action-item": t8[19] === "top-app-bar:action", "mdc-snackbar__dismiss": t8[19] === "snackbar:actions", "mdc-data-table__pagination-button": t8[19] === "data-table:pagination", "mdc-data-table__sort-icon-button": t8[19] === "data-table:sortable-header-cell", "mdc-dialog__close": t8[19] === "dialog:header" && t8[9] === "close", ...t8[13]})}, 16392 & a5[0] && {style: Object.entries(t8[14]).map(Ft3).concat([t8[3]]).join(" ")}, 262145 & a5[0] && {"aria-pressed": t8[0] !== t8[18] ? t8[0] ? "true" : "false" : null}, 193 & a5[0] && {"aria-label": t8[0] ? t8[6] : t8[7]}, 64 & a5[0] && {"data-aria-label-on": t8[6]}, 128 & a5[0] && {"data-aria-label-off": t8[7]}, 1048576 & a5[0] && {"aria-describedby": t8[20]}, 256 & a5[0] && {href: t8[8]}, 65536 & a5[0] && mt(t8[16]), 32768 & a5[0] && mt(t8[15]), 16777216 & a5[0] && mt(t8[24])]) : {};
        if (2 & a5[1] && (o4.$$scope = {dirty: a5, ctx: t8}), i3 !== (i3 = t8[10])) {
          if (e6) {
            it();
            const t9 = e6;
            lt(t9.$$.fragment, 1, 0, () => {
              bt(t9, 1);
            }), at();
          }
          i3 ? (e6 = new i3(c3(t8)), t8[29](e6), e6.$on("click", t8[30]), e6.$on("click", t8[31]), yt(e6.$$.fragment), ct(e6.$$.fragment, 1), $t(e6, n4.parentNode, n4)) : e6 = null;
        } else
          i3 && e6.$set(o4);
      }, i(t8) {
        a4 || (e6 && ct(e6.$$.fragment, t8), a4 = true);
      }, o(t8) {
        e6 && lt(e6.$$.fragment, t8), a4 = false;
      }, d(a5) {
        t7[29](null), a5 && w2(n4), e6 && bt(e6, a5);
      }};
    }
    var Ft3 = ([t7, e6]) => `${t7}: ${e6};`;
    function kt3(t7, e6, n4) {
      let a4;
      const s4 = ["use", "class", "style", "ripple", "color", "toggle", "pressed", "ariaLabelOn", "ariaLabelOff", "href", "action", "component", "getElement"];
      let i3 = h2(e6, s4), {$$slots: r5 = {}, $$scope: c3} = e6;
      const l3 = x3(R2());
      let d4, u3, p3 = () => {
      }, {use: f3 = []} = e6, {class: m4 = ""} = e6, {style: $2 = ""} = e6, {ripple: S5 = true} = e6, {color: E4 = null} = e6, {toggle: A5 = false} = e6, {pressed: y3 = p3} = e6, {ariaLabelOn: O5 = null} = e6, {ariaLabelOff: b5 = null} = e6, {href: v5 = null} = e6, {action: R6 = null} = e6, D4 = {}, x4 = {}, N7 = {}, w4 = D2("SMUI:icon-button:context"), F6 = D2("SMUI:icon-button:aria-describedby"), {component: k5 = v5 == null ? G2 : vt} = e6;
      U2("SMUI:icon:context", "icon-button");
      let M3 = null;
      function B5(t8) {
        return t8 in D4 ? D4[t8] : K5().classList.contains(t8);
      }
      function H7(t8) {
        D4[t8] || n4(13, D4[t8] = true, D4);
      }
      function P7(t8) {
        t8 in D4 && !D4[t8] || n4(13, D4[t8] = false, D4);
      }
      function U5(t8) {
        return t8 in N7 ? N7[t8] : K5().getAttribute(t8);
      }
      function j4(t8, e7) {
        N7[t8] !== e7 && n4(15, N7[t8] = e7, N7);
      }
      function K5() {
        return d4.getElement();
      }
      q2(() => {
        u3 && u3.destroy();
      });
      return t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(24, i3 = h2(e6, s4)), "use" in t8 && n4(1, f3 = t8.use), "class" in t8 && n4(2, m4 = t8.class), "style" in t8 && n4(3, $2 = t8.style), "ripple" in t8 && n4(4, S5 = t8.ripple), "color" in t8 && n4(5, E4 = t8.color), "toggle" in t8 && n4(25, A5 = t8.toggle), "pressed" in t8 && n4(0, y3 = t8.pressed), "ariaLabelOn" in t8 && n4(6, O5 = t8.ariaLabelOn), "ariaLabelOff" in t8 && n4(7, b5 = t8.ariaLabelOff), "href" in t8 && n4(8, v5 = t8.href), "action" in t8 && n4(9, R6 = t8.action), "component" in t8 && n4(10, k5 = t8.component), "$$scope" in t8 && n4(32, c3 = t8.$$scope);
      }, t7.$$.update = () => {
        512 & t7.$$.dirty[0] && n4(16, a4 = (() => {
          if (w4 !== "data-table:pagination")
            return w4 === "dialog:header" ? {"data-mdc-dialog-action": R6} : {action: R6};
          switch (R6) {
            case "first-page":
              return {"data-first-page": "true"};
            case "prev-page":
              return {"data-prev-page": "true"};
            case "next-page":
              return {"data-next-page": "true"};
            case "last-page":
              return {"data-last-page": "true"};
            default:
              return {"data-action": "true"};
          }
        })()), 167778304 & t7.$$.dirty[0] && d4 && K5() && A5 !== M3 && (A5 && !u3 ? (n4(12, u3 = new xt3({addClass: H7, hasClass: B5, notifyChange: (t8) => {
          !function(t9) {
            n4(0, y3 = t9.isOn);
          }(t8), k3(K5(), "MDCIconButtonToggle:change", t8);
        }, removeClass: P7, getAttr: U5, setAttr: j4})), u3.init()) : !A5 && u3 && (u3.destroy(), n4(12, u3 = null), n4(13, D4 = {}), n4(15, N7 = {})), n4(27, M3 = A5)), 4097 & t7.$$.dirty[0] && u3 && u3.isOn() !== y3 && u3.toggle(y3);
      }, [y3, f3, m4, $2, S5, E4, O5, b5, v5, R6, k5, d4, u3, D4, x4, N7, a4, l3, p3, w4, F6, H7, P7, function(t8, e7) {
        x4[t8] != e7 && (e7 === "" || e7 == null ? (delete x4[t8], n4(14, x4)) : n4(14, x4[t8] = e7, x4));
      }, i3, A5, K5, M3, r5, function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          d4 = t8, n4(11, d4);
        });
      }, () => u3 && u3.handleClick(), () => w4 === "top-app-bar:navigation" && k3(d4, "SMUI:top-app-bar:icon-button:nav"), c3];
    }
    var Mt3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, kt3, wt3, i2, {use: 1, class: 2, style: 3, ripple: 4, color: 5, toggle: 25, pressed: 0, ariaLabelOn: 6, ariaLabelOff: 7, href: 8, action: 9, component: 10, getElement: 26}, [-1, -1]);
      }
      get getElement() {
        return this.$$.ctx[26];
      }
    };
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
    var Bt3;
    var Ht3 = {CLOSING: "mdc-dialog--closing", OPEN: "mdc-dialog--open", OPENING: "mdc-dialog--opening", SCROLLABLE: "mdc-dialog--scrollable", SCROLL_LOCK: "mdc-dialog-scroll-lock", STACKED: "mdc-dialog--stacked", FULLSCREEN: "mdc-dialog--fullscreen", SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header", SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer", SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown", SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing", SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding", SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"};
    var Pt3 = {ACTION_ATTRIBUTE: "data-mdc-dialog-action", BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default", BUTTON_SELECTOR: ".mdc-dialog__button", CLOSED_EVENT: "MDCDialog:closed", CLOSE_ACTION: "close", CLOSING_EVENT: "MDCDialog:closing", CONTAINER_SELECTOR: ".mdc-dialog__container", CONTENT_SELECTOR: ".mdc-dialog__content", DESTROY_ACTION: "destroy", INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus", OPENED_EVENT: "MDCDialog:opened", OPENING_EVENT: "MDCDialog:opening", SCRIM_SELECTOR: ".mdc-dialog__scrim", SUPPRESS_DEFAULT_PRESS_SELECTOR: ["textarea", ".mdc-menu .mdc-list-item", ".mdc-menu .mdc-deprecated-list-item"].join(", "), SURFACE_SELECTOR: ".mdc-dialog__surface"};
    var Ut3 = {DIALOG_ANIMATION_CLOSE_TIME_MS: 75, DIALOG_ANIMATION_OPEN_TIME_MS: 150};
    !function(t7) {
      t7.POLL_SCROLL_POS = "poll_scroll_position", t7.POLL_LAYOUT_CHANGE = "poll_layout_change";
    }(Bt3 || (Bt3 = {}));
    var jt3 = function(t7) {
      function e6(n4) {
        var a4 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
        return a4.dialogOpen = false, a4.isFullscreen = false, a4.animationFrame = 0, a4.animationTimer = 0, a4.escapeKeyAction = Pt3.CLOSE_ACTION, a4.scrimClickAction = Pt3.CLOSE_ACTION, a4.autoStackButtons = true, a4.areButtonsStacked = false, a4.suppressDefaultPressSelector = Pt3.SUPPRESS_DEFAULT_PRESS_SELECTOR, a4.animFrame = new t4(), a4.contentScrollHandler = function() {
          a4.handleScrollEvent();
        }, a4.windowResizeHandler = function() {
          a4.layout();
        }, a4.windowOrientationChangeHandler = function() {
          a4.layout();
        }, a4;
      }
      return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
        return Ht3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
        return Pt3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "numbers", {get: function() {
        return Ut3;
      }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
        return {addBodyClass: function() {
        }, addClass: function() {
        }, areButtonsStacked: function() {
          return false;
        }, clickDefaultButton: function() {
        }, eventTargetMatches: function() {
          return false;
        }, getActionFromEvent: function() {
          return "";
        }, getInitialFocusEl: function() {
          return null;
        }, hasClass: function() {
          return false;
        }, isContentScrollable: function() {
          return false;
        }, notifyClosed: function() {
        }, notifyClosing: function() {
        }, notifyOpened: function() {
        }, notifyOpening: function() {
        }, releaseFocus: function() {
        }, removeBodyClass: function() {
        }, removeClass: function() {
        }, reverseButtons: function() {
        }, trapFocus: function() {
        }, registerContentEventHandler: function() {
        }, deregisterContentEventHandler: function() {
        }, isScrollableContentAtTop: function() {
          return false;
        }, isScrollableContentAtBottom: function() {
          return false;
        }, registerWindowEventHandler: function() {
        }, deregisterWindowEventHandler: function() {
        }};
      }, enumerable: false, configurable: true}), e6.prototype.init = function() {
        this.adapter.hasClass(Ht3.STACKED) && this.setAutoStackButtons(false), this.isFullscreen = this.adapter.hasClass(Ht3.FULLSCREEN);
      }, e6.prototype.destroy = function() {
        this.dialogOpen && this.close(Pt3.DESTROY_ACTION), this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
      }, e6.prototype.open = function(t8) {
        var e7 = this;
        this.dialogOpen = true, this.adapter.notifyOpening(), this.adapter.addClass(Ht3.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t8 && t8.isAboveFullscreenDialog && this.adapter.addClass(Ht3.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
          e7.adapter.addClass(Ht3.OPEN), e7.adapter.addBodyClass(Ht3.SCROLL_LOCK), e7.layout(), e7.animationTimer = setTimeout(function() {
            e7.handleAnimationTimerEnd(), e7.adapter.trapFocus(e7.adapter.getInitialFocusEl()), e7.adapter.notifyOpened();
          }, Ut3.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
      }, e6.prototype.close = function(t8) {
        var e7 = this;
        t8 === void 0 && (t8 = ""), this.dialogOpen && (this.dialogOpen = false, this.adapter.notifyClosing(t8), this.adapter.addClass(Ht3.CLOSING), this.adapter.removeClass(Ht3.OPEN), this.adapter.removeBodyClass(Ht3.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
          e7.adapter.releaseFocus(), e7.handleAnimationTimerEnd(), e7.adapter.notifyClosed(t8);
        }, Ut3.DIALOG_ANIMATION_CLOSE_TIME_MS));
      }, e6.prototype.showSurfaceScrim = function() {
        var t8 = this;
        this.adapter.addClass(Ht3.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
          t8.adapter.addClass(Ht3.SURFACE_SCRIM_SHOWN);
        });
      }, e6.prototype.hideSurfaceScrim = function() {
        this.adapter.removeClass(Ht3.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Ht3.SURFACE_SCRIM_HIDING);
      }, e6.prototype.handleSurfaceScrimTransitionEnd = function() {
        this.adapter.removeClass(Ht3.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Ht3.SURFACE_SCRIM_SHOWING);
      }, e6.prototype.isOpen = function() {
        return this.dialogOpen;
      }, e6.prototype.getEscapeKeyAction = function() {
        return this.escapeKeyAction;
      }, e6.prototype.setEscapeKeyAction = function(t8) {
        this.escapeKeyAction = t8;
      }, e6.prototype.getScrimClickAction = function() {
        return this.scrimClickAction;
      }, e6.prototype.setScrimClickAction = function(t8) {
        this.scrimClickAction = t8;
      }, e6.prototype.getAutoStackButtons = function() {
        return this.autoStackButtons;
      }, e6.prototype.setAutoStackButtons = function(t8) {
        this.autoStackButtons = t8;
      }, e6.prototype.getSuppressDefaultPressSelector = function() {
        return this.suppressDefaultPressSelector;
      }, e6.prototype.setSuppressDefaultPressSelector = function(t8) {
        this.suppressDefaultPressSelector = t8;
      }, e6.prototype.layout = function() {
        var t8 = this;
        this.animFrame.request(Bt3.POLL_LAYOUT_CHANGE, function() {
          t8.layoutInternal();
        });
      }, e6.prototype.handleClick = function(t8) {
        if (this.adapter.eventTargetMatches(t8.target, Pt3.SCRIM_SELECTOR) && this.scrimClickAction !== "")
          this.close(this.scrimClickAction);
        else {
          var e7 = this.adapter.getActionFromEvent(t8);
          e7 && this.close(e7);
        }
      }, e6.prototype.handleKeydown = function(t8) {
        var e7 = t8.key === "Enter" || t8.keyCode === 13;
        if (e7 && !this.adapter.getActionFromEvent(t8)) {
          var n4 = t8.composedPath ? t8.composedPath()[0] : t8.target, a4 = !this.suppressDefaultPressSelector || !this.adapter.eventTargetMatches(n4, this.suppressDefaultPressSelector);
          e7 && a4 && this.adapter.clickDefaultButton();
        }
      }, e6.prototype.handleDocumentKeydown = function(t8) {
        (t8.key === "Escape" || t8.keyCode === 27) && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
      }, e6.prototype.handleScrollEvent = function() {
        var t8 = this;
        this.animFrame.request(Bt3.POLL_SCROLL_POS, function() {
          t8.toggleScrollDividerHeader(), t8.toggleScrollDividerFooter();
        });
      }, e6.prototype.layoutInternal = function() {
        this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
      }, e6.prototype.handleAnimationTimerEnd = function() {
        this.animationTimer = 0, this.adapter.removeClass(Ht3.OPENING), this.adapter.removeClass(Ht3.CLOSING);
      }, e6.prototype.runNextAnimationFrame = function(t8) {
        var e7 = this;
        cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
          e7.animationFrame = 0, clearTimeout(e7.animationTimer), e7.animationTimer = setTimeout(t8, 0);
        });
      }, e6.prototype.detectStackedButtons = function() {
        this.adapter.removeClass(Ht3.STACKED);
        var t8 = this.adapter.areButtonsStacked();
        t8 && this.adapter.addClass(Ht3.STACKED), t8 !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t8);
      }, e6.prototype.toggleScrollableClasses = function() {
        this.adapter.removeClass(Ht3.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Ht3.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
      }, e6.prototype.toggleScrollDividerHeader = function() {
        this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Ht3.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Ht3.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Ht3.SCROLL_DIVIDER_HEADER);
      }, e6.prototype.toggleScrollDividerFooter = function() {
        this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Ht3.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Ht3.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Ht3.SCROLL_DIVIDER_FOOTER);
      }, e6;
    }(J2);
    var {document: Kt3, window: Gt3} = ut3;
    var Wt3 = (t7) => ({});
    var qt3 = (t7) => ({});
    function Vt3(t7) {
      let e6, n4, a4;
      return {c() {
        e6 = x2("div"), L3(e6, "class", "mdc-dialog__surface-scrim");
      }, m(o4, s4) {
        b2(o4, e6, s4), n4 || (a4 = E2(e6, "transitionend", t7[31]), n4 = true);
      }, p: t3, d(t8) {
        t8 && w2(e6), n4 = false, a4();
      }};
    }
    function zt3(t7) {
      let e6, n4, g3, h3, _3, C4, S5, E4, A5, y3, O5, b5, v5, L6, T6;
      const I2 = t7[27].default, x4 = u2(I2, t7, t7[26], null);
      let F6 = t7[5] && Vt3(t7), k5 = [{class: C4 = N2({[t7[7]]: true, "mdc-dialog__surface": true})}, {role: "alertdialog"}, {"aria-modal": "true"}, G3(t7[17], "surface$")], M3 = {};
      for (let t8 = 0; t8 < k5.length; t8 += 1)
        M3 = e3(M3, k5[t8]);
      let B5 = [{class: S5 = N2({[t7[6]]: true, "mdc-dialog__container": true})}, G3(t7[17], "container$")], H7 = {};
      for (let t8 = 0; t8 < B5.length; t8 += 1)
        H7 = e3(H7, B5[t8]);
      let P7 = [{class: y3 = N2({[t7[2]]: true, "mdc-dialog": true, "mdc-dialog--stacked": !t7[4], "mdc-dialog--fullscreen": t7[5], "smui-dialog--selection": t7[3], ...t7[10]})}, {role: "alertdialog"}, {"aria-modal": "true"}, w3(t7[17], ["container$", "surface$"])], U5 = {};
      for (let t8 = 0; t8 < P7.length; t8 += 1)
        U5 = e3(U5, P7[t8]);
      const j4 = t7[27].over, K5 = u2(j4, t7, t7[26], qt3);
      return {c() {
        e6 = P2(), n4 = x2("div"), g3 = x2("div"), h3 = x2("div"), x4 && x4.c(), _3 = P2(), F6 && F6.c(), E4 = P2(), A5 = x2("div"), b5 = P2(), K5 && K5.c(), I(h3, M3), I(g3, H7), L3(A5, "class", "mdc-dialog__scrim"), I(n4, U5);
      }, m(a4, o4) {
        b2(a4, e6, o4), b2(a4, n4, o4), $(n4, g3), $(g3, h3), x4 && x4.m(h3, null), $(h3, _3), F6 && F6.m(h3, null), $(n4, E4), $(n4, A5), t7[32](n4), b2(a4, b5, o4), K5 && K5.m(a4, o4), v5 = true, L6 || (T6 = [E2(Gt3, "resize", t7[28]), E2(Gt3, "orientationchange", t7[29]), E2(Kt3.body, "keydown", t7[30]), y2(O5 = q3.call(null, n4, t7[1])), y2(t7[11].call(null, n4)), E2(n4, "MDCDialog:opening", t7[14]), E2(n4, "MDCDialog:opened", t7[15]), E2(n4, "MDCDialog:closed", t7[16]), E2(n4, "click", t7[33]), E2(n4, "keydown", t7[34])], L6 = true);
      }, p(t8, e7) {
        x4 && x4.p && 67108864 & e7[0] && f2(x4, I2, t8, t8[26], e7, null, null), t8[5] ? F6 ? F6.p(t8, e7) : (F6 = Vt3(t8), F6.c(), F6.m(h3, null)) : F6 && (F6.d(1), F6 = null), I(h3, M3 = ht(k5, [(!v5 || 128 & e7[0] && C4 !== (C4 = N2({[t8[7]]: true, "mdc-dialog__surface": true}))) && {class: C4}, {role: "alertdialog"}, {"aria-modal": "true"}, 131072 & e7[0] && G3(t8[17], "surface$")])), I(g3, H7 = ht(B5, [(!v5 || 64 & e7[0] && S5 !== (S5 = N2({[t8[6]]: true, "mdc-dialog__container": true}))) && {class: S5}, 131072 & e7[0] && G3(t8[17], "container$")])), I(n4, U5 = ht(P7, [(!v5 || 1084 & e7[0] && y3 !== (y3 = N2({[t8[2]]: true, "mdc-dialog": true, "mdc-dialog--stacked": !t8[4], "mdc-dialog--fullscreen": t8[5], "smui-dialog--selection": t8[3], ...t8[10]}))) && {class: y3}, {role: "alertdialog"}, {"aria-modal": "true"}, 131072 & e7[0] && w3(t8[17], ["container$", "surface$"])])), O5 && s2(O5.update) && 2 & e7[0] && O5.update.call(null, t8[1]), K5 && K5.p && 67108864 & e7[0] && f2(K5, j4, t8, t8[26], e7, Wt3, qt3);
      }, i(t8) {
        v5 || (ct(x4, t8), ct(K5, t8), v5 = true);
      }, o(t8) {
        lt(x4, t8), lt(K5, t8), v5 = false;
      }, d(a4) {
        a4 && w2(e6), a4 && w2(n4), x4 && x4.d(a4), F6 && F6.d(), t7[32](null), a4 && w2(b5), K5 && K5.d(a4), L6 = false, r2(T6);
      }};
    }
    function Yt3(t7, e6, n4) {
      const a4 = ["use", "class", "open", "selection", "escapeKeyAction", "scrimClickAction", "autoStackButtons", "fullscreen", "container$class", "surface$class", "isOpen", "setOpen", "layout", "getElement"];
      let s4, i3, r5 = h2(e6, a4), {$$slots: c3 = {}, $$scope: l3} = e6;
      const {FocusTrap: d4} = t6, {closest: u3, matches: p3} = et, f3 = x3(R2());
      let m4, $2, S5, {use: E4 = []} = e6, {class: A5 = ""} = e6, {open: y3 = false} = e6, {selection: O5 = false} = e6, {escapeKeyAction: b5 = "close"} = e6, {scrimClickAction: v5 = "close"} = e6, {autoStackButtons: R6 = true} = e6, {fullscreen: D4 = false} = e6, {container$class: x4 = ""} = e6, {surface$class: N7 = ""} = e6, w4 = {}, H7 = Mt(false);
      l2(t7, H7, (t8) => n4(37, s4 = t8));
      let P7, U5 = D2("SMUI:addLayoutListener"), j4 = D2("SMUI:dialog:aboveFullscreen"), K5 = D2("SMUI:dialog:aboveFullscreenShown") || Mt(false);
      l2(t7, K5, (t8) => n4(25, i3 = t8));
      let G5 = [];
      U2("SMUI:dialog:actions:reversed", H7), U2("SMUI:addLayoutListener", (t8) => (G5.push(t8), () => {
        const e7 = G5.indexOf(t8);
        e7 >= 0 && G5.splice(e7, 1);
      })), U2("SMUI:dialog:selection", O5), U2("SMUI:dialog:aboveFullscreen", j4 || D4), U2("SMUI:dialog:aboveFullscreenShown", K5), U5 && (P7 = U5(Q5));
      let W6 = i3;
      function q7(t8) {
        return t8 in w4 ? w4[t8] : X4().classList.contains(t8);
      }
      function V4(t8) {
        w4[t8] || n4(10, w4[t8] = true, w4);
      }
      function z5(t8) {
        t8 in w4 && !w4[t8] || n4(10, w4[t8] = false, w4);
      }
      function Y4() {
        return m4.querySelector(".mdc-dialog__content");
      }
      function J5() {
        return m4.querySelector("[data-mdc-dialog-initial-focus]");
      }
      function Q5() {
        return $2.layout();
      }
      function X4() {
        return m4;
      }
      C2(() => (S5 = new d4(m4, {initialFocusEl: J5()}), n4(8, $2 = new jt3({addBodyClass: (t8) => document.body.classList.add(t8), addClass: V4, areButtonsStacked: () => {
        return t8 = [].slice.call(m4.querySelectorAll(".mdc-dialog__button")), e7 = new Set(), [].forEach.call(t8, function(t9) {
          return e7.add(t9.offsetTop);
        }), e7.size > 1;
        var t8, e7;
      }, clickDefaultButton: () => {
        const t8 = m4.querySelector("[data-mdc-dialog-button-default");
        t8 && t8.click();
      }, eventTargetMatches: (t8, e7) => !!t8 && p3(t8, e7), getActionFromEvent: (t8) => {
        if (!t8.target)
          return "";
        const e7 = u3(t8.target, "[data-mdc-dialog-action]");
        return e7 && e7.getAttribute("data-mdc-dialog-action");
      }, getInitialFocusEl: J5, hasClass: q7, isContentScrollable: () => {
        return !!(t8 = Y4()) && t8.scrollHeight > t8.offsetHeight;
        var t8;
      }, notifyClosed: (t8) => {
        n4(0, y3 = false), k3(X4(), "MDCDialog:closed", t8 ? {action: t8} : {});
      }, notifyClosing: (t8) => k3(X4(), "MDCDialog:closing", t8 ? {action: t8} : {}), notifyOpened: () => k3(X4(), "MDCDialog:opened", {}), notifyOpening: () => k3(X4(), "MDCDialog:opening", {}), releaseFocus: () => S5.releaseFocus(), removeBodyClass: (t8) => document.body.classList.remove(t8), removeClass: z5, reverseButtons: () => {
        g2(H7, s4 = true, s4);
      }, trapFocus: () => S5.trapFocus(), registerContentEventHandler: (t8, e7) => {
        const n5 = Y4();
        n5 instanceof HTMLElement && n5.addEventListener(t8, e7);
      }, deregisterContentEventHandler: (t8, e7) => {
        const n5 = Y4();
        n5 instanceof HTMLElement && n5.removeEventListener(t8, e7);
      }, isScrollableContentAtTop: () => {
        return !!(t8 = Y4()) && t8.scrollTop === 0;
        var t8;
      }, isScrollableContentAtBottom: () => {
        return !!(t8 = Y4()) && Math.ceil(t8.scrollHeight - t8.scrollTop) === t8.clientHeight;
        var t8;
      }, registerWindowEventHandler: (t8, e7) => {
        window.addEventListener(t8, e7);
      }, deregisterWindowEventHandler: (t8, e7) => {
        window.removeEventListener(t8, e7);
      }})), $2.init(), () => {
        $2.destroy();
      })), q2(() => {
        P7 && P7();
      });
      return t7.$$set = (t8) => {
        e6 = e3(e3({}, e6), d2(t8)), n4(17, r5 = h2(e6, a4)), "use" in t8 && n4(1, E4 = t8.use), "class" in t8 && n4(2, A5 = t8.class), "open" in t8 && n4(0, y3 = t8.open), "selection" in t8 && n4(3, O5 = t8.selection), "escapeKeyAction" in t8 && n4(18, b5 = t8.escapeKeyAction), "scrimClickAction" in t8 && n4(19, v5 = t8.scrimClickAction), "autoStackButtons" in t8 && n4(4, R6 = t8.autoStackButtons), "fullscreen" in t8 && n4(5, D4 = t8.fullscreen), "container$class" in t8 && n4(6, x4 = t8.container$class), "surface$class" in t8 && n4(7, N7 = t8.surface$class), "$$scope" in t8 && n4(26, l3 = t8.$$scope);
      }, t7.$$.update = () => {
        262400 & t7.$$.dirty[0] && $2 && $2.getEscapeKeyAction() !== b5 && $2.setEscapeKeyAction(b5), 524544 & t7.$$.dirty[0] && $2 && $2.getScrimClickAction() !== v5 && $2.setScrimClickAction(v5), 272 & t7.$$.dirty[0] && $2 && $2.getAutoStackButtons() !== R6 && $2.setAutoStackButtons(R6), 16 & t7.$$.dirty[0] && (R6 || g2(H7, s4 = true, s4)), 257 & t7.$$.dirty[0] && $2 && $2.isOpen() !== y3 && (y3 ? $2.open({isAboveFullscreenDialog: !!j4}) : $2.close()), 50331936 & t7.$$.dirty[0] && D4 && $2 && W6 !== i3 && (n4(24, W6 = i3), i3 ? $2.showSurfaceScrim() : $2.hideSurfaceScrim());
      }, [y3, E4, A5, O5, R6, D4, x4, N7, $2, m4, w4, f3, H7, K5, function() {
        j4 && g2(K5, i3 = true, i3), requestAnimationFrame(() => {
          G5.forEach((t8) => t8());
        });
      }, function() {
        G5.forEach((t8) => t8());
      }, function() {
        j4 && g2(K5, i3 = false, i3);
      }, r5, b5, v5, function() {
        return y3;
      }, function(t8) {
        n4(0, y3 = t8);
      }, Q5, X4, W6, i3, l3, c3, () => y3 && $2 && $2.layout(), () => y3 && $2 && $2.layout(), (t8) => y3 && $2 && $2.handleDocumentKeydown(t8), () => $2 && $2.handleSurfaceScrimTransitionEnd(), function(t8) {
        J[t8 ? "unshift" : "push"](() => {
          m4 = t8, n4(9, m4);
        });
      }, (t8) => $2 && $2.handleClick(t8), (t8) => $2 && $2.handleKeydown(t8)];
    }
    var Jt3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, Yt3, zt3, i2, {use: 1, class: 2, open: 0, selection: 3, escapeKeyAction: 18, scrimClickAction: 19, autoStackButtons: 4, fullscreen: 5, container$class: 6, surface$class: 7, isOpen: 20, setOpen: 21, layout: 22, getElement: 23}, [-1, -1]);
      }
      get isOpen() {
        return this.$$.ctx[20];
      }
      get setOpen() {
        return this.$$.ctx[21];
      }
      get layout() {
        return this.$$.ctx[22];
      }
      get getElement() {
        return this.$$.ctx[23];
      }
    };
    B2({class: "mdc-dialog__header", component: _t2, contexts: {"SMUI:icon-button:context": "dialog:header"}});
    var Qt3 = B2({class: "mdc-dialog__title", component: v4});
    var Xt3 = B2({class: "mdc-dialog__content", component: _t2});
    var Zt3 = B2({class: "mdc-dialog__actions", component: _t2, classMap: {"smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"}, contexts: {"SMUI:button:context": "dialog:action"}});
    function te3(t7, e6, n4) {
      const a4 = t7.slice();
      return a4[5] = e6[n4], a4;
    }
    function ee3(t7) {
      let e6;
      return {c() {
        e6 = v2(t7[1]);
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, p(t8, n4) {
        2 & n4 && T3(e6, t8[1]);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function ne3(t7) {
      let e6;
      return {c() {
        e6 = v2(t7[2]);
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, p(t8, n4) {
        4 & n4 && T3(e6, t8[2]);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function ae3(t7) {
      let e6, n4 = Array(10), a4 = [];
      for (let e7 = 0; e7 < n4.length; e7 += 1)
        a4[e7] = ne3(te3(t7, n4, e7));
      return {c() {
        for (let t8 = 0; t8 < a4.length; t8 += 1)
          a4[t8].c();
        e6 = k2();
      }, m(t8, n5) {
        for (let e7 = 0; e7 < a4.length; e7 += 1)
          a4[e7].m(t8, n5);
        b2(t8, e6, n5);
      }, p(t8, o4) {
        if (4 & o4) {
          let s4;
          for (n4 = Array(10), s4 = 0; s4 < n4.length; s4 += 1) {
            const i3 = te3(t8, n4, s4);
            a4[s4] ? a4[s4].p(i3, o4) : (a4[s4] = ne3(i3), a4[s4].c(), a4[s4].m(e6.parentNode, e6));
          }
          for (; s4 < a4.length; s4 += 1)
            a4[s4].d(1);
          a4.length = n4.length;
        }
      }, d(t8) {
        _2(a4, t8), t8 && w2(e6);
      }};
    }
    function oe3(t7) {
      let e6;
      return {c() {
        e6 = v2(t7[3]);
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, p(t8, n4) {
        8 & n4 && T3(e6, t8[3]);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function se3(t7) {
      let e6, n4;
      return e6 = new T2({props: {$$slots: {default: [oe3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        264 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function ie3(t7) {
      let e6, n4;
      return e6 = new J3({props: {action: "accept", $$slots: {default: [se3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        264 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function re3(t7) {
      let e6, n4, a4, o4, s4, i3;
      return e6 = new Qt3({props: {id: "large-scroll-title", $$slots: {default: [ee3]}, $$scope: {ctx: t7}}}), a4 = new Xt3({props: {id: "large-scroll-content", $$slots: {default: [ae3]}, $$scope: {ctx: t7}}}), s4 = new Zt3({props: {$$slots: {default: [ie3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(a4.$$.fragment), o4 = P2(), yt(s4.$$.fragment);
      }, m(t8, c3) {
        $t(e6, t8, c3), b2(t8, n4, c3), $t(a4, t8, c3), b2(t8, o4, c3), $t(s4, t8, c3), i3 = true;
      }, p(t8, n5) {
        const o5 = {};
        258 & n5 && (o5.$$scope = {dirty: n5, ctx: t8}), e6.$set(o5);
        const i4 = {};
        260 & n5 && (i4.$$scope = {dirty: n5, ctx: t8}), a4.$set(i4);
        const r5 = {};
        264 & n5 && (r5.$$scope = {dirty: n5, ctx: t8}), s4.$set(r5);
      }, i(t8) {
        i3 || (ct(e6.$$.fragment, t8), ct(a4.$$.fragment, t8), ct(s4.$$.fragment, t8), i3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(a4.$$.fragment, t8), lt(s4.$$.fragment, t8), i3 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(a4, t8), t8 && w2(o4), bt(s4, t8);
      }};
    }
    function ce3(t7) {
      let e6, n4, a4;
      function o4(e7) {
        t7[4](e7);
      }
      let s4 = {"aria-labelledby": "fullscreen-title", "aria-describedby": "fullscreen-content", surface$style: "width: 850px; max-width: calc(100vw - 32px);", $$slots: {default: [re3]}, $$scope: {ctx: t7}};
      return t7[0] !== void 0 && (s4.open = t7[0]), e6 = new Jt3({props: s4}), J.push(() => gt(e6, "open", o4)), {c() {
        yt(e6.$$.fragment);
      }, m(t8, n5) {
        $t(e6, t8, n5), a4 = true;
      }, p(t8, [a5]) {
        const o5 = {};
        270 & a5 && (o5.$$scope = {dirty: a5, ctx: t8}), !n4 && 1 & a5 && (n4 = true, o5.open = t8[0], Y3(() => n4 = false)), e6.$set(o5);
      }, i(t8) {
        a4 || (ct(e6.$$.fragment, t8), a4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), a4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function le3(t7, e6, n4) {
      let {open: a4 = false} = e6, {title: o4 = "title"} = e6, {text: s4 = "text"} = e6, {buttonText: i3 = "Done"} = e6;
      return t7.$$set = (t8) => {
        "open" in t8 && n4(0, a4 = t8.open), "title" in t8 && n4(1, o4 = t8.title), "text" in t8 && n4(2, s4 = t8.text), "buttonText" in t8 && n4(3, i3 = t8.buttonText);
      }, [a4, o4, s4, i3, function(t8) {
        a4 = t8, n4(0, a4);
      }];
    }
    var de3 = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, le3, ce3, i2, {open: 0, title: 1, text: 2, buttonText: 3});
      }
    };
    function ue3(t7, e6, n4) {
      const a4 = t7.slice();
      return a4[9] = e6[n4].title, a4[10] = e6[n4].desc, a4[11] = e6[n4].genres, a4[12] = e6[n4].language, a4;
    }
    function pe3(t7) {
      let e6, n4, a4;
      return n4 = new st2({props: {text: "Whoops, you are not logged in!", icon: "login", direct: "./login", action: "Login"}}), {c() {
        e6 = x2("div"), yt(n4.$$.fragment), L3(e6, "class", "container svelte-19hqmes");
      }, m(t8, o4) {
        b2(t8, e6, o4), $t(n4, e6, null), a4 = true;
      }, p: t3, i(t8) {
        a4 || (ct(n4.$$.fragment, t8), a4 = true);
      }, o(t8) {
        lt(n4.$$.fragment, t8), a4 = false;
      }, d(t8) {
        t8 && w2(e6), bt(n4);
      }};
    }
    function fe3(t7) {
      let e6, n4;
      return e6 = new F4({props: {$$slots: {default: [De3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32775 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function me3(t7) {
      let e6, n4, a4 = t7[1], o4 = [];
      for (let e7 = 0; e7 < a4.length; e7 += 1)
        o4[e7] = Re3(ue3(t7, a4, e7));
      const s4 = (t8) => lt(o4[t8], 1, 1, () => {
        o4[t8] = null;
      });
      return {c() {
        for (let t8 = 0; t8 < o4.length; t8 += 1)
          o4[t8].c();
        e6 = k2();
      }, m(t8, a5) {
        for (let e7 = 0; e7 < o4.length; e7 += 1)
          o4[e7].m(t8, a5);
        b2(t8, e6, a5), n4 = true;
      }, p(t8, n5) {
        if (7 & n5) {
          let i3;
          for (a4 = t8[1], i3 = 0; i3 < a4.length; i3 += 1) {
            const s5 = ue3(t8, a4, i3);
            o4[i3] ? (o4[i3].p(s5, n5), ct(o4[i3], 1)) : (o4[i3] = Re3(s5), o4[i3].c(), ct(o4[i3], 1), o4[i3].m(e6.parentNode, e6));
          }
          for (it(), i3 = a4.length; i3 < o4.length; i3 += 1)
            s4(i3);
          at();
        }
      }, i(t8) {
        if (!n4) {
          for (let t9 = 0; t9 < a4.length; t9 += 1)
            ct(o4[t9]);
          n4 = true;
        }
      }, o(t8) {
        o4 = o4.filter(Boolean);
        for (let t9 = 0; t9 < o4.length; t9 += 1)
          lt(o4[t9]);
        n4 = false;
      }, d(t8) {
        _2(o4, t8), t8 && w2(e6);
      }};
    }
    function $e3(t7) {
      let e6, n4, a4, o4 = t7[9] + "";
      return {c() {
        e6 = x2("div"), n4 = x2("h2"), a4 = v2(o4), L3(n4, "class", "mdc-typography--headline6"), F5(n4, "margin", "0"), F5(e6, "color", "#fff"), F5(e6, "position", "absolute"), F5(e6, "bottom", "16px"), F5(e6, "left", "16px");
      }, m(t8, o5) {
        b2(t8, e6, o5), $(e6, n4), $(n4, a4);
      }, p(t8, e7) {
        2 & e7 && o4 !== (o4 = t8[9] + "") && T3(a4, o4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function ge3(t7) {
      let e6, n4;
      return e6 = new q5({props: {$$slots: {default: [$e3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32770 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function he3(t7) {
      let e6, n4;
      return e6 = new It3({props: {style: "background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);", aspectRatio: "16x9", $$slots: {default: [ge3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32770 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function _e3(t7) {
      let e6;
      return {c() {
        e6 = v2("Trailer");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function Ce3(t7) {
      let e6;
      return {c() {
        e6 = v2("Play");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function Se3(t7) {
      let e6;
      function n4(t8, e7) {
        return t8[2].paid ? Ce3 : _e3;
      }
      let a4 = n4(t7), o4 = a4(t7);
      return {c() {
        o4.c(), e6 = k2();
      }, m(t8, n5) {
        o4.m(t8, n5), b2(t8, e6, n5);
      }, p(t8, s4) {
        a4 !== (a4 = n4(t8)) && (o4.d(1), o4 = a4(t8), o4 && (o4.c(), o4.m(e6.parentNode, e6)));
      }, d(t8) {
        o4.d(t8), t8 && w2(e6);
      }};
    }
    function Ee3(t7) {
      let e6, n4;
      return e6 = new T2({props: {$$slots: {default: [Se3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32772 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Ae3(t7) {
      let e6;
      return {c() {
        e6 = v2("Details");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function ye3(t7) {
      let e6, n4;
      return e6 = new T2({props: {$$slots: {default: [Ae3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32768 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Oe3(t7) {
      let e6, n4, a4, o4;
      return e6 = new J3({props: {$$slots: {default: [Ee3]}, $$scope: {ctx: t7}}}), e6.$on("click", Ne3), a4 = new J3({props: {color: "secondary", $$slots: {default: [ye3]}, $$scope: {ctx: t7}}}), a4.$on("click", t7[5]), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(a4.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), b2(t8, n4, s4), $t(a4, t8, s4), o4 = true;
      }, p(t8, n5) {
        const o5 = {};
        32772 & n5 && (o5.$$scope = {dirty: n5, ctx: t8}), e6.$set(o5);
        const s4 = {};
        32768 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), a4.$set(s4);
      }, i(t8) {
        o4 || (ct(e6.$$.fragment, t8), ct(a4.$$.fragment, t8), o4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(a4.$$.fragment, t8), o4 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(a4, t8);
      }};
    }
    function be3(t7) {
      let e6;
      return {c() {
        e6 = v2("share");
      }, m(t8, n4) {
        b2(t8, e6, n4);
      }, d(t8) {
        t8 && w2(e6);
      }};
    }
    function ve3(t7) {
      let e6, n4;
      return e6 = new Mt3({props: {class: "material-icons", title: "Share", $$slots: {default: [be3]}, $$scope: {ctx: t7}}}), e6.$on("click", we3), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32768 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function Le3(t7) {
      let e6, n4, a4, o4;
      return e6 = new P4({props: {$$slots: {default: [Oe3]}, $$scope: {ctx: t7}}}), a4 = new Q3({props: {$$slots: {default: [ve3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(a4.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), b2(t8, n4, s4), $t(a4, t8, s4), o4 = true;
      }, p(t8, n5) {
        const o5 = {};
        32773 & n5 && (o5.$$scope = {dirty: n5, ctx: t8}), e6.$set(o5);
        const s4 = {};
        32768 & n5 && (s4.$$scope = {dirty: n5, ctx: t8}), a4.$set(s4);
      }, i(t8) {
        o4 || (ct(e6.$$.fragment, t8), ct(a4.$$.fragment, t8), o4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(a4.$$.fragment, t8), o4 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(a4, t8);
      }};
    }
    function Te3(t7) {
      let e6, n4, a4, o4;
      return e6 = new vt4({props: {$$slots: {default: [he3]}, $$scope: {ctx: t7}}}), e6.$on("click", function() {
        return t7[4](t7[9], t7[10], t7[11]);
      }), a4 = new O3({props: {$$slots: {default: [Le3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2(), yt(a4.$$.fragment);
      }, m(t8, s4) {
        $t(e6, t8, s4), b2(t8, n4, s4), $t(a4, t8, s4), o4 = true;
      }, p(n5, o5) {
        t7 = n5;
        const s4 = {};
        32770 & o5 && (s4.$$scope = {dirty: o5, ctx: t7}), e6.$set(s4);
        const i3 = {};
        32773 & o5 && (i3.$$scope = {dirty: o5, ctx: t7}), a4.$set(i3);
      }, i(t8) {
        o4 || (ct(e6.$$.fragment, t8), ct(a4.$$.fragment, t8), o4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(a4.$$.fragment, t8), o4 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4), bt(a4, t8);
      }};
    }
    function Ie3(t7) {
      let e6, n4, a4;
      return e6 = new K3({props: {$$slots: {default: [Te3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment), n4 = P2();
      }, m(t8, o4) {
        $t(e6, t8, o4), b2(t8, n4, o4), a4 = true;
      }, p(t8, n5) {
        const a5 = {};
        32775 & n5 && (a5.$$scope = {dirty: n5, ctx: t8}), e6.$set(a5);
      }, i(t8) {
        a4 || (ct(e6.$$.fragment, t8), a4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), a4 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(n4);
      }};
    }
    function Re3(t7) {
      let e6, n4;
      return e6 = new q6({props: {span: 4, $$slots: {default: [Ie3]}, $$scope: {ctx: t7}}}), {c() {
        yt(e6.$$.fragment);
      }, m(t8, a4) {
        $t(e6, t8, a4), n4 = true;
      }, p(t8, n5) {
        const a4 = {};
        32775 & n5 && (a4.$$scope = {dirty: n5, ctx: t8}), e6.$set(a4);
      }, i(t8) {
        n4 || (ct(e6.$$.fragment, t8), n4 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), n4 = false;
      }, d(t8) {
        bt(e6, t8);
      }};
    }
    function De3(t7) {
      let e6, n4, a4 = t7[1] && me3(t7);
      return {c() {
        a4 && a4.c(), e6 = k2();
      }, m(t8, o4) {
        a4 && a4.m(t8, o4), b2(t8, e6, o4), n4 = true;
      }, p(t8, n5) {
        t8[1] ? a4 ? (a4.p(t8, n5), 2 & n5 && ct(a4, 1)) : (a4 = me3(t8), a4.c(), ct(a4, 1), a4.m(e6.parentNode, e6)) : a4 && (it(), lt(a4, 1, 1, () => {
          a4 = null;
        }), at());
      }, i(t8) {
        n4 || (ct(a4), n4 = true);
      }, o(t8) {
        lt(a4), n4 = false;
      }, d(t8) {
        a4 && a4.d(t8), t8 && w2(e6);
      }};
    }
    function xe3(t7) {
      let e6, n4, a4, o4, s4, i3, c3;
      function l3(e7) {
        t7[3](e7);
      }
      let d4 = {};
      t7[0] !== void 0 && (d4.open = t7[0]), e6 = new de3({props: d4}), J.push(() => gt(e6, "open", l3));
      const u3 = [fe3, pe3], $2 = [];
      function g3(t8, e7) {
        return t8[2].id ? 0 : 1;
      }
      return o4 = g3(t7), s4 = $2[o4] = u3[o4](t7), {c() {
        yt(e6.$$.fragment), a4 = P2(), s4.c(), i3 = k2();
      }, m(t8, n5) {
        $t(e6, t8, n5), b2(t8, a4, n5), $2[o4].m(t8, n5), b2(t8, i3, n5), c3 = true;
      }, p(t8, [a5]) {
        const r5 = {};
        !n4 && 1 & a5 && (n4 = true, r5.open = t8[0], Y3(() => n4 = false)), e6.$set(r5);
        let c4 = o4;
        o4 = g3(t8), o4 === c4 ? $2[o4].p(t8, a5) : (it(), lt($2[c4], 1, 1, () => {
          $2[c4] = null;
        }), at(), s4 = $2[o4], s4 ? s4.p(t8, a5) : (s4 = $2[o4] = u3[o4](t8), s4.c()), ct(s4, 1), s4.m(i3.parentNode, i3));
      }, i(t8) {
        c3 || (ct(e6.$$.fragment, t8), ct(s4), c3 = true);
      }, o(t8) {
        lt(e6.$$.fragment, t8), lt(s4), c3 = false;
      }, d(t8) {
        bt(e6, t8), t8 && w2(a4), $2[o4].d(t8), t8 && w2(i3);
      }};
    }
    var Ne3 = () => {
    };
    var we3 = () => {
    };
    function Fe3(t7, e6, n4) {
      let a4, o4;
      l2(t7, r3, (t8) => n4(2, a4 = t8)), l2(t7, o2, (t8) => n4(6, o4 = t8));
      let s4 = false, i3 = null;
      const r5 = JSON.stringify({id: a4.id});
      a4.id && (async () => {
        let t8;
        await H.post(`${o4}/content/view.php`, r5, {"Content-type": "application/json"}).then((e7) => {
          t8 = e7, n4(1, i3 = e7.data), console.log(e7.data);
        }).catch((t9) => {
          console.log(t9);
        });
      })();
      return [s4, i3, a4, function(t8) {
        s4 = t8, n4(0, s4);
      }, (t8, e7, a5) => {
        console.log(t8, e7, a5), n4(0, s4 = true);
      }, () => {
        n4(0, s4 = true);
      }];
    }
    var shows_4413671f_default = class extends _t {
      constructor(t7) {
        super(), wt(this, t7, Fe3, xe3, i2, {});
      }
    };
    var shows_4413671f_default2 = shows_4413671f_default;
  });

  // ../../dist/build/_layout-aad02031.js
  var require_layout_aad02031 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_aad02031_default2
    });
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
    var de3;
    var ue3;
    var pe3 = {LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated", LIST_ITEM_CLASS: "mdc-list-item", LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled", LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected", LIST_ITEM_TEXT_CLASS: "mdc-list-item__text", LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text", ROOT: "mdc-list"};
    (de3 = {})["" + pe3.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", de3["" + pe3.LIST_ITEM_CLASS] = "mdc-list-item", de3["" + pe3.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", de3["" + pe3.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", de3["" + pe3.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", de3["" + pe3.ROOT] = "mdc-list";
    var me3 = ((ue3 = {})["" + pe3.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ue3["" + pe3.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ue3["" + pe3.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ue3["" + pe3.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ue3["" + pe3.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ue3["" + pe3.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ue3["" + pe3.ROOT] = "mdc-deprecated-list", ue3);
    var fe3 = {ACTION_EVENT: "MDCList:action", ARIA_CHECKED: "aria-checked", ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]', ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]', ARIA_CURRENT: "aria-current", ARIA_DISABLED: "aria-disabled", ARIA_ORIENTATION: "aria-orientation", ARIA_ORIENTATION_HORIZONTAL: "horizontal", ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]', ARIA_SELECTED: "aria-selected", ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]', ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]', CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]', CHECKBOX_SELECTOR: 'input[type="checkbox"]', CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + pe3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + pe3.LIST_ITEM_CLASS + " a,\n    ." + me3[pe3.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + me3[pe3.LIST_ITEM_CLASS] + " a\n  ", DEPRECATED_SELECTOR: ".mdc-deprecated-list", FOCUSABLE_CHILD_ELEMENTS: "\n    ." + pe3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + pe3.LIST_ITEM_CLASS + " a,\n    ." + pe3.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + pe3.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + me3[pe3.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + me3[pe3.LIST_ITEM_CLASS] + " a,\n    ." + me3[pe3.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + me3[pe3.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ', RADIO_SELECTOR: 'input[type="radio"]', SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'};
    var $e3 = {UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300};
    var he3 = ["input", "button", "textarea", "select"];
    var Ie3 = function(e6) {
      var t7 = e6.target;
      if (t7) {
        var n4 = ("" + t7.tagName).toLowerCase();
        he3.indexOf(n4) === -1 && e6.preventDefault();
      }
    };
    function ge3(e6, t7) {
      var n4, s4 = e6.nextChar, i3 = e6.focusItemAtIndex, r5 = e6.sortedIndexByFirstChar, a4 = e6.focusedItemIndex, o4 = e6.skipFocus, c3 = e6.isItemAtIndexDisabled;
      return clearTimeout(t7.bufferClearTimeout), t7.bufferClearTimeout = setTimeout(function() {
        xe3(t7);
      }, $e3.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), t7.typeaheadBuffer = t7.typeaheadBuffer + s4, (n4 = t7.typeaheadBuffer.length === 1 ? function(e7, t8, n5, s5) {
        var i4 = s5.typeaheadBuffer[0], r6 = e7.get(i4);
        if (!r6)
          return -1;
        if (i4 === s5.currentFirstChar && r6[s5.sortedIndexCursor].index === t8) {
          s5.sortedIndexCursor = (s5.sortedIndexCursor + 1) % r6.length;
          var a5 = r6[s5.sortedIndexCursor].index;
          if (!n5(a5))
            return a5;
        }
        s5.currentFirstChar = i4;
        var o5, c4 = -1;
        for (o5 = 0; o5 < r6.length; o5++)
          if (!n5(r6[o5].index)) {
            c4 = o5;
            break;
          }
        for (; o5 < r6.length; o5++)
          if (r6[o5].index > t8 && !n5(r6[o5].index)) {
            c4 = o5;
            break;
          }
        if (c4 !== -1)
          return s5.sortedIndexCursor = c4, r6[s5.sortedIndexCursor].index;
        return -1;
      }(r5, a4, c3, t7) : function(e7, t8, n5) {
        var s5 = n5.typeaheadBuffer[0], i4 = e7.get(s5);
        if (!i4)
          return -1;
        var r6 = i4[n5.sortedIndexCursor];
        if (r6.text.lastIndexOf(n5.typeaheadBuffer, 0) === 0 && !t8(r6.index))
          return r6.index;
        var a5 = (n5.sortedIndexCursor + 1) % i4.length, o5 = -1;
        for (; a5 !== n5.sortedIndexCursor; ) {
          var c4 = i4[a5], l3 = c4.text.lastIndexOf(n5.typeaheadBuffer, 0) === 0, d4 = !t8(c4.index);
          if (l3 && d4) {
            o5 = a5;
            break;
          }
          a5 = (a5 + 1) % i4.length;
        }
        if (o5 !== -1)
          return n5.sortedIndexCursor = o5, i4[n5.sortedIndexCursor].index;
        return -1;
      }(r5, c3, t7)) === -1 || o4 || i3(n4), n4;
    }
    function _e3(e6) {
      return e6.typeaheadBuffer.length > 0;
    }
    function xe3(e6) {
      e6.typeaheadBuffer = "";
    }
    function Se3(e6, t7) {
      var n4 = e6.event, s4 = e6.isTargetListItem, i3 = e6.focusedItemIndex, r5 = e6.focusItemAtIndex, a4 = e6.sortedIndexByFirstChar, o4 = e6.isItemAtIndexDisabled, c3 = U4(n4) === "ArrowLeft", l3 = U4(n4) === "ArrowUp", d4 = U4(n4) === "ArrowRight", u3 = U4(n4) === "ArrowDown", p3 = U4(n4) === "Home", m4 = U4(n4) === "End", f3 = U4(n4) === "Enter", $2 = U4(n4) === "Spacebar";
      return n4.ctrlKey || n4.metaKey || c3 || l3 || d4 || u3 || p3 || m4 || f3 ? -1 : $2 || n4.key.length !== 1 ? $2 ? (s4 && Ie3(n4), s4 && _e3(t7) ? ge3({focusItemAtIndex: r5, focusedItemIndex: i3, nextChar: " ", sortedIndexByFirstChar: a4, skipFocus: false, isItemAtIndexDisabled: o4}, t7) : -1) : -1 : (Ie3(n4), ge3({focusItemAtIndex: r5, focusedItemIndex: i3, nextChar: n4.key.toLowerCase(), sortedIndexByFirstChar: a4, skipFocus: false, isItemAtIndexDisabled: o4}, t7));
    }
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
    var Ee3 = function(e6) {
      function t7(n4) {
        var s4 = e6.call(this, Z(Z({}, t7.defaultAdapter), n4)) || this;
        return s4.wrapFocus_ = false, s4.isVertical_ = true, s4.isSingleSelectionList_ = false, s4.selectedIndex_ = $e3.UNSET_INDEX, s4.focusedItemIndex = $e3.UNSET_INDEX, s4.useActivatedClass_ = false, s4.useSelectedAttr_ = false, s4.ariaCurrentAttrValue_ = null, s4.isCheckboxList_ = false, s4.isRadioList_ = false, s4.hasTypeahead = false, s4.typeaheadState = {bufferClearTimeout: 0, currentFirstChar: "", sortedIndexCursor: 0, typeaheadBuffer: ""}, s4.sortedIndexByFirstChar = new Map(), s4;
      }
      return Y(t7, e6), Object.defineProperty(t7, "strings", {get: function() {
        return fe3;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "cssClasses", {get: function() {
        return pe3;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "numbers", {get: function() {
        return $e3;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "defaultAdapter", {get: function() {
        return {addClassForElementIndex: function() {
        }, focusItemAtIndex: function() {
        }, getAttributeForElementIndex: function() {
          return null;
        }, getFocusedElementIndex: function() {
          return 0;
        }, getListItemCount: function() {
          return 0;
        }, hasCheckboxAtIndex: function() {
          return false;
        }, hasRadioAtIndex: function() {
          return false;
        }, isCheckboxCheckedAtIndex: function() {
          return false;
        }, isFocusInsideList: function() {
          return false;
        }, isRootFocused: function() {
          return false;
        }, listItemAtIndexHasClass: function() {
          return false;
        }, notifyAction: function() {
        }, removeClassForElementIndex: function() {
        }, setAttributeForElementIndex: function() {
        }, setCheckedCheckboxOrRadioAtIndex: function() {
        }, setTabIndexForListItemChildren: function() {
        }, getPrimaryTextAtIndex: function() {
          return "";
        }};
      }, enumerable: false, configurable: true}), t7.prototype.layout = function() {
        this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList_ = true : this.adapter.hasRadioAtIndex(0) ? this.isRadioList_ = true : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
      }, t7.prototype.setWrapFocus = function(e7) {
        this.wrapFocus_ = e7;
      }, t7.prototype.setVerticalOrientation = function(e7) {
        this.isVertical_ = e7;
      }, t7.prototype.setSingleSelection = function(e7) {
        this.isSingleSelectionList_ = e7, e7 && this.maybeInitializeSingleSelection();
      }, t7.prototype.maybeInitializeSingleSelection = function() {
        for (var e7 = this.adapter.getListItemCount(), t8 = 0; t8 < e7; t8++) {
          var n4 = this.adapter.listItemAtIndexHasClass(t8, pe3.LIST_ITEM_SELECTED_CLASS), s4 = this.adapter.listItemAtIndexHasClass(t8, pe3.LIST_ITEM_ACTIVATED_CLASS);
          if (n4 || s4)
            return s4 && this.setUseActivatedClass(true), this.isSingleSelectionList_ = true, void (this.selectedIndex_ = t8);
        }
      }, t7.prototype.setHasTypeahead = function(e7) {
        this.hasTypeahead = e7, e7 && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
      }, t7.prototype.isTypeaheadInProgress = function() {
        return this.hasTypeahead && _e3(this.typeaheadState);
      }, t7.prototype.setUseActivatedClass = function(e7) {
        this.useActivatedClass_ = e7;
      }, t7.prototype.setUseSelectedAttribute = function(e7) {
        this.useSelectedAttr_ = e7;
      }, t7.prototype.getSelectedIndex = function() {
        return this.selectedIndex_;
      }, t7.prototype.setSelectedIndex = function(e7) {
        this.isIndexValid_(e7) && (this.isCheckboxList_ ? this.setCheckboxAtIndex_(e7) : this.isRadioList_ ? this.setRadioAtIndex_(e7) : this.setSingleSelectionAtIndex_(e7));
      }, t7.prototype.handleFocusIn = function(e7, t8) {
        t8 >= 0 && (this.focusedItemIndex = t8, this.adapter.setAttributeForElementIndex(t8, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t8, "0"));
      }, t7.prototype.handleFocusOut = function(e7, t8) {
        var n4 = this;
        t8 >= 0 && (this.adapter.setAttributeForElementIndex(t8, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t8, "-1")), setTimeout(function() {
          n4.adapter.isFocusInsideList() || n4.setTabindexToFirstSelectedOrFocusedItem();
        }, 0);
      }, t7.prototype.handleKeydown = function(e7, t8, n4) {
        var s4 = this, i3 = U4(e7) === "ArrowLeft", r5 = U4(e7) === "ArrowUp", a4 = U4(e7) === "ArrowRight", o4 = U4(e7) === "ArrowDown", c3 = U4(e7) === "Home", l3 = U4(e7) === "End", d4 = U4(e7) === "Enter", u3 = U4(e7) === "Spacebar", p3 = e7.key === "A" || e7.key === "a";
        if (this.adapter.isRootFocused()) {
          r5 || l3 ? (e7.preventDefault(), this.focusLastElement()) : (o4 || c3) && (e7.preventDefault(), this.focusFirstElement()), this.hasTypeahead && Se3({event: e7, focusItemAtIndex: function(e8) {
            s4.focusItemAtIndex(e8);
          }, focusedItemIndex: -1, isTargetListItem: t8, sortedIndexByFirstChar: this.sortedIndexByFirstChar, isItemAtIndexDisabled: function(e8) {
            return s4.adapter.listItemAtIndexHasClass(e8, pe3.LIST_ITEM_DISABLED_CLASS);
          }}, this.typeaheadState);
        } else {
          var m4 = this.adapter.getFocusedElementIndex();
          if (!(m4 === -1 && (m4 = n4) < 0)) {
            if (this.isVertical_ && o4 || !this.isVertical_ && a4)
              Ie3(e7), this.focusNextElement(m4);
            else if (this.isVertical_ && r5 || !this.isVertical_ && i3)
              Ie3(e7), this.focusPrevElement(m4);
            else if (c3)
              Ie3(e7), this.focusFirstElement();
            else if (l3)
              Ie3(e7), this.focusLastElement();
            else if (p3 && e7.ctrlKey && this.isCheckboxList_)
              e7.preventDefault(), this.toggleAll(this.selectedIndex_ === $e3.UNSET_INDEX ? [] : this.selectedIndex_);
            else if ((d4 || u3) && t8) {
              var f3 = e7.target;
              if (f3 && f3.tagName === "A" && d4)
                return;
              if (Ie3(e7), this.adapter.listItemAtIndexHasClass(m4, pe3.LIST_ITEM_DISABLED_CLASS))
                return;
              this.isTypeaheadInProgress() || (this.isSelectableList_() && this.setSelectedIndexOnAction_(m4), this.adapter.notifyAction(m4));
            }
            if (this.hasTypeahead)
              Se3({event: e7, focusItemAtIndex: function(e8) {
                s4.focusItemAtIndex(e8);
              }, focusedItemIndex: this.focusedItemIndex, isTargetListItem: t8, sortedIndexByFirstChar: this.sortedIndexByFirstChar, isItemAtIndexDisabled: function(e8) {
                return s4.adapter.listItemAtIndexHasClass(e8, pe3.LIST_ITEM_DISABLED_CLASS);
              }}, this.typeaheadState);
          }
        }
      }, t7.prototype.handleClick = function(e7, t8) {
        e7 !== $e3.UNSET_INDEX && (this.adapter.listItemAtIndexHasClass(e7, pe3.LIST_ITEM_DISABLED_CLASS) || (this.isSelectableList_() && this.setSelectedIndexOnAction_(e7, t8), this.adapter.notifyAction(e7)));
      }, t7.prototype.focusNextElement = function(e7) {
        var t8 = e7 + 1;
        if (t8 >= this.adapter.getListItemCount()) {
          if (!this.wrapFocus_)
            return e7;
          t8 = 0;
        }
        return this.focusItemAtIndex(t8), t8;
      }, t7.prototype.focusPrevElement = function(e7) {
        var t8 = e7 - 1;
        if (t8 < 0) {
          if (!this.wrapFocus_)
            return e7;
          t8 = this.adapter.getListItemCount() - 1;
        }
        return this.focusItemAtIndex(t8), t8;
      }, t7.prototype.focusFirstElement = function() {
        return this.focusItemAtIndex(0), 0;
      }, t7.prototype.focusLastElement = function() {
        var e7 = this.adapter.getListItemCount() - 1;
        return this.focusItemAtIndex(e7), e7;
      }, t7.prototype.focusInitialElement = function() {
        var e7 = this.getFirstSelectedOrFocusedItemIndex();
        return this.focusItemAtIndex(e7), e7;
      }, t7.prototype.setEnabled = function(e7, t8) {
        this.isIndexValid_(e7) && (t8 ? (this.adapter.removeClassForElementIndex(e7, pe3.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e7, fe3.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(e7, pe3.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e7, fe3.ARIA_DISABLED, "true")));
      }, t7.prototype.setSingleSelectionAtIndex_ = function(e7) {
        if (this.selectedIndex_ !== e7) {
          var t8 = pe3.LIST_ITEM_SELECTED_CLASS;
          this.useActivatedClass_ && (t8 = pe3.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex_ !== $e3.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex_, t8), this.setAriaForSingleSelectionAtIndex_(e7), this.setTabindexAtIndex(e7), e7 !== $e3.UNSET_INDEX && this.adapter.addClassForElementIndex(e7, t8), this.selectedIndex_ = e7;
        }
      }, t7.prototype.setAriaForSingleSelectionAtIndex_ = function(e7) {
        this.selectedIndex_ === $e3.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e7, fe3.ARIA_CURRENT));
        var t8 = this.ariaCurrentAttrValue_ !== null, n4 = t8 ? fe3.ARIA_CURRENT : fe3.ARIA_SELECTED;
        if (this.selectedIndex_ !== $e3.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n4, "false"), e7 !== $e3.UNSET_INDEX) {
          var s4 = t8 ? this.ariaCurrentAttrValue_ : "true";
          this.adapter.setAttributeForElementIndex(e7, n4, s4);
        }
      }, t7.prototype.getSelectionAttribute = function() {
        return this.useSelectedAttr_ ? fe3.ARIA_SELECTED : fe3.ARIA_CHECKED;
      }, t7.prototype.setRadioAtIndex_ = function(e7) {
        var t8 = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(e7, true), this.selectedIndex_ !== $e3.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, t8, "false"), this.adapter.setAttributeForElementIndex(e7, t8, "true"), this.selectedIndex_ = e7;
      }, t7.prototype.setCheckboxAtIndex_ = function(e7) {
        for (var t8 = this.getSelectionAttribute(), n4 = 0; n4 < this.adapter.getListItemCount(); n4++) {
          var s4 = false;
          e7.indexOf(n4) >= 0 && (s4 = true), this.adapter.setCheckedCheckboxOrRadioAtIndex(n4, s4), this.adapter.setAttributeForElementIndex(n4, t8, s4 ? "true" : "false");
        }
        this.selectedIndex_ = e7;
      }, t7.prototype.setTabindexAtIndex = function(e7) {
        this.focusedItemIndex === $e3.UNSET_INDEX && e7 !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== e7 && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), this.selectedIndex_ instanceof Array || this.selectedIndex_ === e7 || this.adapter.setAttributeForElementIndex(this.selectedIndex_, "tabindex", "-1"), e7 !== $e3.UNSET_INDEX && this.adapter.setAttributeForElementIndex(e7, "tabindex", "0");
      }, t7.prototype.isSelectableList_ = function() {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
      }, t7.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
        var e7 = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(e7);
      }, t7.prototype.getFirstSelectedOrFocusedItemIndex = function() {
        var e7 = this.focusedItemIndex >= 0 ? this.focusedItemIndex : 0;
        return this.isSelectableList_() && (typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== $e3.UNSET_INDEX ? e7 = this.selectedIndex_ : this.selectedIndex_ instanceof Array && this.selectedIndex_.length > 0 && (e7 = this.selectedIndex_.reduce(function(e8, t8) {
          return Math.min(e8, t8);
        }))), e7;
      }, t7.prototype.isIndexValid_ = function(e7) {
        var t8 = this;
        if (e7 instanceof Array) {
          if (!this.isCheckboxList_)
            throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
          return e7.length === 0 || e7.some(function(e8) {
            return t8.isIndexInRange_(e8);
          });
        }
        if (typeof e7 == "number") {
          if (this.isCheckboxList_)
            throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e7);
          return this.isIndexInRange_(e7) || this.isSingleSelectionList_ && e7 === $e3.UNSET_INDEX;
        }
        return false;
      }, t7.prototype.isIndexInRange_ = function(e7) {
        var t8 = this.adapter.getListItemCount();
        return e7 >= 0 && e7 < t8;
      }, t7.prototype.setSelectedIndexOnAction_ = function(e7, t8) {
        t8 === void 0 && (t8 = true), this.isCheckboxList_ ? this.toggleCheckboxAtIndex_(e7, t8) : this.setSelectedIndex(e7);
      }, t7.prototype.toggleCheckboxAtIndex_ = function(e7, t8) {
        var n4 = this.getSelectionAttribute(), s4 = this.adapter.isCheckboxCheckedAtIndex(e7);
        t8 && (s4 = !s4, this.adapter.setCheckedCheckboxOrRadioAtIndex(e7, s4)), this.adapter.setAttributeForElementIndex(e7, n4, s4 ? "true" : "false");
        var i3 = this.selectedIndex_ === $e3.UNSET_INDEX ? [] : this.selectedIndex_.slice();
        s4 ? i3.push(e7) : i3 = i3.filter(function(t9) {
          return t9 !== e7;
        }), this.selectedIndex_ = i3;
      }, t7.prototype.focusItemAtIndex = function(e7) {
        this.adapter.focusItemAtIndex(e7), this.focusedItemIndex = e7;
      }, t7.prototype.toggleAll = function(e7) {
        var t8 = this.adapter.getListItemCount();
        if (e7.length === t8)
          this.setCheckboxAtIndex_([]);
        else {
          for (var n4 = [], s4 = 0; s4 < t8; s4++)
            (!this.adapter.listItemAtIndexHasClass(s4, pe3.LIST_ITEM_DISABLED_CLASS) || e7.indexOf(s4) > -1) && n4.push(s4);
          this.setCheckboxAtIndex_(n4);
        }
      }, t7.prototype.typeaheadMatchItem = function(e7, t8, n4) {
        var s4 = this;
        return n4 === void 0 && (n4 = false), ge3({focusItemAtIndex: function(e8) {
          s4.focusItemAtIndex(e8);
        }, focusedItemIndex: t8 || this.focusedItemIndex, nextChar: e7, sortedIndexByFirstChar: this.sortedIndexByFirstChar, skipFocus: n4, isItemAtIndexDisabled: function(e8) {
          return s4.adapter.listItemAtIndexHasClass(e8, pe3.LIST_ITEM_DISABLED_CLASS);
        }}, this.typeaheadState);
      }, t7.prototype.typeaheadInitSortedIndex = function() {
        return function(e7, t8) {
          for (var n4 = new Map(), s4 = 0; s4 < e7; s4++) {
            var i3 = t8(s4).trim();
            if (i3) {
              var r5 = i3[0].toLowerCase();
              n4.has(r5) || n4.set(r5, []), n4.get(r5).push({text: i3.toLowerCase(), index: s4});
            }
          }
          return n4.forEach(function(e8) {
            e8.sort(function(e9, t9) {
              return e9.index - t9.index;
            });
          }), n4;
        }(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
      }, t7.prototype.clearTypeaheadBuffer = function() {
        xe3(this.typeaheadState);
      }, t7;
    }(J2);
    var Ae3 = {ANIMATE: "mdc-drawer--animate", CLOSING: "mdc-drawer--closing", DISMISSIBLE: "mdc-drawer--dismissible", MODAL: "mdc-drawer--modal", OPEN: "mdc-drawer--open", OPENING: "mdc-drawer--opening", ROOT: "mdc-drawer"};
    var Ce3 = {APP_CONTENT_SELECTOR: ".mdc-drawer-app-content", CLOSE_EVENT: "MDCDrawer:closed", OPEN_EVENT: "MDCDrawer:opened", SCRIM_SELECTOR: ".mdc-drawer-scrim", LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list", LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};
    var ye3 = function(e6) {
      function t7(n4) {
        var s4 = e6.call(this, Z(Z({}, t7.defaultAdapter), n4)) || this;
        return s4.animationFrame_ = 0, s4.animationTimer_ = 0, s4;
      }
      return Y(t7, e6), Object.defineProperty(t7, "strings", {get: function() {
        return Ce3;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "cssClasses", {get: function() {
        return Ae3;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "defaultAdapter", {get: function() {
        return {addClass: function() {
        }, removeClass: function() {
        }, hasClass: function() {
          return false;
        }, elementHasClass: function() {
          return false;
        }, notifyClose: function() {
        }, notifyOpen: function() {
        }, saveFocus: function() {
        }, restoreFocus: function() {
        }, focusActiveNavigationItem: function() {
        }, trapFocus: function() {
        }, releaseFocus: function() {
        }};
      }, enumerable: false, configurable: true}), t7.prototype.destroy = function() {
        this.animationFrame_ && cancelAnimationFrame(this.animationFrame_), this.animationTimer_ && clearTimeout(this.animationTimer_);
      }, t7.prototype.open = function() {
        var e7 = this;
        this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(Ae3.OPEN), this.adapter.addClass(Ae3.ANIMATE), this.runNextAnimationFrame_(function() {
          e7.adapter.addClass(Ae3.OPENING);
        }), this.adapter.saveFocus());
      }, t7.prototype.close = function() {
        !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(Ae3.CLOSING);
      }, t7.prototype.isOpen = function() {
        return this.adapter.hasClass(Ae3.OPEN);
      }, t7.prototype.isOpening = function() {
        return this.adapter.hasClass(Ae3.OPENING) || this.adapter.hasClass(Ae3.ANIMATE);
      }, t7.prototype.isClosing = function() {
        return this.adapter.hasClass(Ae3.CLOSING);
      }, t7.prototype.handleKeydown = function(e7) {
        var t8 = e7.keyCode;
        (e7.key === "Escape" || t8 === 27) && this.close();
      }, t7.prototype.handleTransitionEnd = function(e7) {
        var t8 = Ae3.OPENING, n4 = Ae3.CLOSING, s4 = Ae3.OPEN, i3 = Ae3.ANIMATE, r5 = Ae3.ROOT;
        this.isElement_(e7.target) && this.adapter.elementHasClass(e7.target, r5) && (this.isClosing() ? (this.adapter.removeClass(s4), this.closed_(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened_(), this.adapter.notifyOpen()), this.adapter.removeClass(i3), this.adapter.removeClass(t8), this.adapter.removeClass(n4));
      }, t7.prototype.opened_ = function() {
      }, t7.prototype.closed_ = function() {
      }, t7.prototype.runNextAnimationFrame_ = function(e7) {
        var t8 = this;
        cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function() {
          t8.animationFrame_ = 0, clearTimeout(t8.animationTimer_), t8.animationTimer_ = setTimeout(e7, 0);
        });
      }, t7.prototype.isElement_ = function(e7) {
        return Boolean(e7.classList);
      }, t7;
    }(J2);
    var Te3 = function(e6) {
      function t7() {
        return e6 !== null && e6.apply(this, arguments) || this;
      }
      return Y(t7, e6), t7.prototype.handleScrimClick = function() {
        this.close();
      }, t7.prototype.opened_ = function() {
        this.adapter.trapFocus();
      }, t7.prototype.closed_ = function() {
        this.adapter.releaseFocus();
      }, t7;
    }(ye3);
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
    function Le3(e6) {
      let t7, n4, I2, g3, _3, x4;
      const S5 = e6[15].default, E4 = u2(S5, e6, e6[14], null);
      let A5 = [{class: n4 = N2({[e6[1]]: true, "mdc-drawer": true, "mdc-drawer--dismissible": e6[2] === "dismissible", "mdc-drawer--modal": e6[2] === "modal", "smui-drawer__absolute": e6[2] === "modal" && !e6[3], ...e6[6]})}, e6[8]], C4 = {};
      for (let e7 = 0; e7 < A5.length; e7 += 1)
        C4 = e3(C4, A5[e7]);
      return {c() {
        t7 = x2("aside"), E4 && E4.c(), I(t7, C4);
      }, m(n5, s4) {
        b2(n5, t7, s4), E4 && E4.m(t7, null), e6[16](t7), g3 = true, _3 || (x4 = [y2(I2 = q3.call(null, t7, e6[0])), y2(e6[7].call(null, t7)), E2(t7, "keydown", e6[17]), E2(t7, "transitionend", e6[18])], _3 = true);
      }, p(e7, [s4]) {
        E4 && E4.p && 16384 & s4 && f2(E4, S5, e7, e7[14], s4, null, null), I(t7, C4 = ht(A5, [(!g3 || 78 & s4 && n4 !== (n4 = N2({[e7[1]]: true, "mdc-drawer": true, "mdc-drawer--dismissible": e7[2] === "dismissible", "mdc-drawer--modal": e7[2] === "modal", "smui-drawer__absolute": e7[2] === "modal" && !e7[3], ...e7[6]}))) && {class: n4}, 256 & s4 && e7[8]])), I2 && s2(I2.update) && 1 & s4 && I2.update.call(null, e7[0]);
      }, i(e7) {
        g3 || (ct(E4, e7), g3 = true);
      }, o(e7) {
        lt(E4, e7), g3 = false;
      }, d(n5) {
        n5 && w2(t7), E4 && E4.d(n5), e6[16](null), _3 = false, r2(x4);
      }};
    }
    function ve3(e6, t7, n4) {
      const s4 = ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7;
      const {FocusTrap: c3} = t6, l3 = x3(R2());
      let d4, u3, p3, m4, {use: f3 = []} = t7, {class: $2 = ""} = t7, {variant: h3 = null} = t7, {open: C4 = false} = t7, {fixed: y3 = true} = t7, T6 = {}, L6 = false;
      U2("SMUI:list:nav", true), U2("SMUI:list:item:nav", true), U2("SMUI:list:wrapFocus", true);
      let v5 = h3;
      function b5() {
        L6 && L6.removeEventListener("SMUI:drawer:scrim:click", M3), h3 === "modal" && (L6 = d4.parentNode.querySelector(".mdc-drawer-scrim"), L6 && L6.addEventListener("SMUI:drawer:scrim:click", M3));
        const e7 = {dismissible: ye3, modal: Te3}[h3];
        return e7 ? new e7({addClass: O5, removeClass: k5, hasClass: w4, elementHasClass: (e8, t8) => e8.classList.contains(t8), saveFocus: () => p3 = document.activeElement, restoreFocus: () => {
          p3 && p3.focus && d4.contains(document.activeElement) && p3.focus();
        }, focusActiveNavigationItem: () => {
          const e8 = d4.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
          e8 && e8.focus();
        }, notifyClose: () => {
          n4(9, C4 = false), k3(d4, "MDCDrawer:closed");
        }, notifyOpen: () => {
          n4(9, C4 = true), k3(d4, "MDCDrawer:opened");
        }, trapFocus: () => m4.trapFocus(), releaseFocus: () => m4.releaseFocus()}) : void 0;
      }
      function w4(e7) {
        return e7 in T6 ? T6[e7] : F6().classList.contains(e7);
      }
      function O5(e7) {
        T6[e7] || n4(6, T6[e7] = true, T6);
      }
      function k5(e7) {
        e7 in T6 && !T6[e7] || n4(6, T6[e7] = false, T6);
      }
      function M3() {
        u3 && u3.handleScrimClick();
      }
      function F6() {
        return d4;
      }
      C2(() => {
        m4 = new c3(d4, {skipInitialFocus: true}), n4(4, u3 = b5()), u3 && u3.init();
      }), q2(() => {
        u3 && u3.destroy(), L6 && L6.removeEventListener("SMUI:drawer:scrim:click", M3);
      });
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(8, r5 = h2(t7, s4)), "use" in e7 && n4(0, f3 = e7.use), "class" in e7 && n4(1, $2 = e7.class), "variant" in e7 && n4(2, h3 = e7.variant), "open" in e7 && n4(9, C4 = e7.open), "fixed" in e7 && n4(3, y3 = e7.fixed), "$$scope" in e7 && n4(14, o4 = e7.$$scope);
      }, e6.$$.update = () => {
        8212 & e6.$$.dirty && v5 !== h3 && (n4(13, v5 = h3), u3 && u3.destroy(), n4(6, T6 = {}), n4(4, u3 = b5()), u3 && u3.init()), 528 & e6.$$.dirty && u3 && u3.isOpen() !== C4 && (C4 ? u3.open() : u3.close());
      }, [f3, $2, h3, y3, u3, d4, T6, l3, r5, C4, function(e7) {
        n4(9, C4 = e7);
      }, function() {
        return C4;
      }, F6, v5, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(5, d4);
        });
      }, (e7) => u3 && u3.handleKeydown(e7), (e7) => u3 && u3.handleTransitionEnd(e7)];
    }
    var be3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, ve3, Le3, i2, {use: 0, class: 1, variant: 2, open: 9, fixed: 3, setOpen: 10, isOpen: 11, getElement: 12});
      }
      get setOpen() {
        return this.$$.ctx[10];
      }
      get isOpen() {
        return this.$$.ctx[11];
      }
      get getElement() {
        return this.$$.ctx[12];
      }
    };
    B2({class: "mdc-drawer-app-content", component: _t2});
    var we3 = B2({class: "mdc-drawer__content", component: _t2});
    var Oe3 = B2({class: "mdc-drawer__header", component: _t2});
    function ke3(e6) {
      let t7, n4, l3, I2, g3;
      const _3 = e6[6].default, x4 = u2(_3, e6, e6[5], null);
      let S5 = [e6[3]], E4 = {};
      for (let e7 = 0; e7 < S5.length; e7 += 1)
        E4 = e3(E4, S5[e7]);
      return {c() {
        t7 = x2("h1"), x4 && x4.c(), I(t7, E4);
      }, m(s4, i3) {
        b2(s4, t7, i3), x4 && x4.m(t7, null), e6[7](t7), l3 = true, I2 || (g3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], I2 = true);
      }, p(e7, [s4]) {
        x4 && x4.p && 32 & s4 && f2(x4, _3, e7, e7[5], s4, null, null), I(t7, E4 = ht(S5, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]);
      }, i(e7) {
        l3 || (ct(x4, e7), l3 = true);
      }, o(e7) {
        lt(x4, e7), l3 = false;
      }, d(n5) {
        n5 && w2(t7), x4 && x4.d(n5), e6[7](null), I2 = false, r2(g3);
      }};
    }
    function Me3(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    var Fe3 = B2({class: "mdc-drawer__title", component: class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Me3, ke3, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    }});
    var De3 = B2({class: "mdc-drawer__subtitle", component: v4});
    function Re3(e6) {
      let t7, n4, l3, I2, g3;
      const _3 = e6[6].default, x4 = u2(_3, e6, e6[5], null);
      let S5 = [e6[3]], E4 = {};
      for (let e7 = 0; e7 < S5.length; e7 += 1)
        E4 = e3(E4, S5[e7]);
      return {c() {
        t7 = x2("ul"), x4 && x4.c(), I(t7, E4);
      }, m(s4, i3) {
        b2(s4, t7, i3), x4 && x4.m(t7, null), e6[7](t7), l3 = true, I2 || (g3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], I2 = true);
      }, p(e7, [s4]) {
        x4 && x4.p && 32 & s4 && f2(x4, _3, e7, e7[5], s4, null, null), I(t7, E4 = ht(S5, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]);
      }, i(e7) {
        l3 || (ct(x4, e7), l3 = true);
      }, o(e7) {
        lt(x4, e7), l3 = false;
      }, d(n5) {
        n5 && w2(t7), x4 && x4.d(n5), e6[7](null), I2 = false, r2(g3);
      }};
    }
    function Ne3(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    var Be3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Ne3, Re3, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    };
    function Pe3(e6) {
      let t7, n4, l3, I2, g3;
      const _3 = e6[6].default, x4 = u2(_3, e6, e6[5], null);
      let S5 = [e6[3]], E4 = {};
      for (let e7 = 0; e7 < S5.length; e7 += 1)
        E4 = e3(E4, S5[e7]);
      return {c() {
        t7 = x2("nav"), x4 && x4.c(), I(t7, E4);
      }, m(s4, i3) {
        b2(s4, t7, i3), x4 && x4.m(t7, null), e6[7](t7), l3 = true, I2 || (g3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], I2 = true);
      }, p(e7, [s4]) {
        x4 && x4.p && 32 & s4 && f2(x4, _3, e7, e7[5], s4, null, null), I(t7, E4 = ht(S5, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]);
      }, i(e7) {
        l3 || (ct(x4, e7), l3 = true);
      }, o(e7) {
        lt(x4, e7), l3 = false;
      }, d(n5) {
        n5 && w2(t7), x4 && x4.d(n5), e6[7](null), I2 = false, r2(g3);
      }};
    }
    function Ue3(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    var He3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Ue3, Pe3, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    };
    function Ve3(e6) {
      let t7;
      const n4 = e6[38].default, i3 = u2(n4, e6, e6[44], null);
      return {c() {
        i3 && i3.c();
      }, m(e7, n5) {
        i3 && i3.m(e7, n5), t7 = true;
      }, p(e7, t8) {
        i3 && i3.p && 8192 & t8[1] && f2(i3, n4, e7, e7[44], t8, null, null);
      }, i(e7) {
        t7 || (ct(i3, e7), t7 = true);
      }, o(e7) {
        lt(i3, e7), t7 = false;
      }, d(e7) {
        i3 && i3.d(e7);
      }};
    }
    function je3(e6) {
      let t7, n4, s4;
      const r5 = [{use: [e6[17], ...e6[0]]}, {class: N2({[e6[1]]: true, "mdc-deprecated-list": true, "mdc-deprecated-list--non-interactive": e6[2], "mdc-deprecated-list--dense": e6[3], "mdc-deprecated-list--textual-list": e6[4], "mdc-deprecated-list--avatar-list": e6[5] || e6[18], "mdc-deprecated-list--icon-list": e6[6], "mdc-deprecated-list--image-list": e6[7], "mdc-deprecated-list--thumbnail-list": e6[8], "mdc-deprecated-list--video-list": e6[9], "mdc-deprecated-list--two-line": e6[10], "smui-list--three-line": e6[11] && !e6[10]})}, {role: e6[15]}, e6[23]];
      var a4 = e6[12];
      function c3(e7) {
        let t8 = {$$slots: {default: [Ve3]}, $$scope: {ctx: e7}};
        for (let e8 = 0; e8 < r5.length; e8 += 1)
          t8 = e3(t8, r5[e8]);
        return {props: t8};
      }
      return a4 && (t7 = new a4(c3(e6)), e6[39](t7), t7.$on("keydown", e6[40]), t7.$on("focusin", e6[41]), t7.$on("focusout", e6[42]), t7.$on("click", e6[43]), t7.$on("SMUI:list:item:mount", e6[19]), t7.$on("SMUI:list:item:unmount", e6[20]), t7.$on("SMUI:action", e6[21])), {c() {
        t7 && yt(t7.$$.fragment), n4 = k2();
      }, m(e7, i3) {
        t7 && $t(t7, e7, i3), b2(e7, n4, i3), s4 = true;
      }, p(e7, s5) {
        const i3 = 8818687 & s5[0] ? ht(r5, [131073 & s5[0] && {use: [e7[17], ...e7[0]]}, 266238 & s5[0] && {class: N2({[e7[1]]: true, "mdc-deprecated-list": true, "mdc-deprecated-list--non-interactive": e7[2], "mdc-deprecated-list--dense": e7[3], "mdc-deprecated-list--textual-list": e7[4], "mdc-deprecated-list--avatar-list": e7[5] || e7[18], "mdc-deprecated-list--icon-list": e7[6], "mdc-deprecated-list--image-list": e7[7], "mdc-deprecated-list--thumbnail-list": e7[8], "mdc-deprecated-list--video-list": e7[9], "mdc-deprecated-list--two-line": e7[10], "smui-list--three-line": e7[11] && !e7[10]})}, 32768 & s5[0] && {role: e7[15]}, 8388608 & s5[0] && mt(e7[23])]) : {};
        if (8192 & s5[1] && (i3.$$scope = {dirty: s5, ctx: e7}), a4 !== (a4 = e7[12])) {
          if (t7) {
            it();
            const e8 = t7;
            lt(e8.$$.fragment, 1, 0, () => {
              bt(e8, 1);
            }), at();
          }
          a4 ? (t7 = new a4(c3(e7)), e7[39](t7), t7.$on("keydown", e7[40]), t7.$on("focusin", e7[41]), t7.$on("focusout", e7[42]), t7.$on("click", e7[43]), t7.$on("SMUI:list:item:mount", e7[19]), t7.$on("SMUI:list:item:unmount", e7[20]), t7.$on("SMUI:action", e7[21]), yt(t7.$$.fragment), ct(t7.$$.fragment, 1), $t(t7, n4.parentNode, n4)) : t7 = null;
        } else
          a4 && t7.$set(i3);
      }, i(e7) {
        s4 || (t7 && ct(t7.$$.fragment, e7), s4 = true);
      }, o(e7) {
        t7 && lt(t7.$$.fragment, e7), s4 = false;
      }, d(s5) {
        e6[39](null), s5 && w2(n4), t7 && bt(t7, s5);
      }};
    }
    function Xe2(e6, t7, n4) {
      const s4 = ["use", "class", "nonInteractive", "dense", "textualList", "avatarList", "iconList", "imageList", "thumbnailList", "videoList", "twoLine", "threeLine", "vertical", "wrapFocus", "singleSelection", "selectedIndex", "radioList", "checkList", "hasTypeahead", "radiolist", "checklist", "component", "layout", "setEnabled", "getTypeaheadInProgress", "getSelectedIndex", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7;
      const {closest: c3, matches: l3} = et, d4 = x3(R2());
      let {use: u3 = []} = t7, {class: p3 = ""} = t7, {nonInteractive: m4 = false} = t7, {dense: f3 = false} = t7, {textualList: $2 = false} = t7, {avatarList: h3 = false} = t7, {iconList: C4 = false} = t7, {imageList: y3 = false} = t7, {thumbnailList: T6 = false} = t7, {videoList: L6 = false} = t7, {twoLine: v5 = false} = t7, {threeLine: b5 = false} = t7, {vertical: w4 = true} = t7, {wrapFocus: k5 = D2("SMUI:list:wrapFocus") || false} = t7, {singleSelection: M3 = false} = t7, {selectedIndex: F6 = -1} = t7, {radioList: D4 = false} = t7, {checkList: R6 = false} = t7, {hasTypeahead: N7 = false} = t7, {radiolist: B5 = false} = t7;
      B5 && (D4 = true);
      let P7, U5, {checklist: H7 = false} = t7;
      H7 && (R6 = true);
      let V4 = [], j4 = D2("SMUI:list:role"), X4 = D2("SMUI:list:nav");
      const z5 = new WeakMap();
      let Y4, K5 = D2("SMUI:dialog:selection"), G5 = D2("SMUI:addLayoutListener"), {component: q7 = X4 ? He3 : Be3} = t7;
      function W6() {
        return [...de4().children].map((e7) => z5.get(e7)).filter((e7) => e7 && e7._smui_list_item_accessor);
      }
      function Q5(e7) {
        const t8 = W6()[e7];
        t8 && t8.element.focus();
      }
      function ee3(e7, t8) {
        const n5 = W6()[e7];
        return n5 && n5.hasClass(t8);
      }
      function ne3(e7, t8) {
        const n5 = W6()[e7];
        n5 && n5.addClass(t8);
      }
      function se3(e7, t8) {
        const n5 = W6()[e7];
        n5 && n5.removeClass(t8);
      }
      function ie3(e7, t8, n5) {
        const s5 = W6()[e7];
        s5 && s5.addAttr(t8, n5);
      }
      function re3(e7, t8) {
        const n5 = W6()[e7];
        n5 && n5.removeAttr(t8);
      }
      function ae3(e7) {
        const t8 = W6()[e7];
        return t8 && t8.getPrimaryText();
      }
      function oe3(e7) {
        const t8 = c3(e7, ".mdc-deprecated-list-item, .mdc-deprecated-list");
        return t8 && l3(t8, ".mdc-deprecated-list-item") ? W6().map((e8) => e8.element).indexOf(t8) : -1;
      }
      function ce3() {
        return U5.layout();
      }
      function le3() {
        return U5.getSelectedIndex();
      }
      function de4() {
        return P7.getElement();
      }
      U2("SMUI:list:nonInteractive", m4), U2("SMUI:separator:context", "list"), j4 || (M3 ? (j4 = "listbox", U2("SMUI:list:item:role", "option")) : D4 ? (j4 = "radiogroup", U2("SMUI:list:item:role", "radio")) : R6 ? (j4 = "group", U2("SMUI:list:item:role", "checkbox")) : (j4 = "list", U2("SMUI:list:item:role", void 0))), G5 && (Y4 = G5(ce3)), C2(() => (n4(13, U5 = new Ee3({addClassForElementIndex: ne3, focusItemAtIndex: Q5, getAttributeForElementIndex: (e7, t8) => W6()[e7].getAttr(t8), getFocusedElementIndex: () => W6().map((e7) => e7.element).indexOf(document.activeElement), getListItemCount: () => V4.length, getPrimaryTextAtIndex: ae3, hasCheckboxAtIndex: (e7) => W6()[e7].hasCheckbox, hasRadioAtIndex: (e7) => W6()[e7].hasRadio, isCheckboxCheckedAtIndex: (e7) => {
        const t8 = W6()[e7];
        return t8.hasCheckbox && t8.checked;
      }, isFocusInsideList: () => de4() !== document.activeElement && de4().contains(document.activeElement), isRootFocused: () => document.activeElement === de4(), listItemAtIndexHasClass: ee3, notifyAction: (e7) => {
        n4(24, F6 = e7), k3(P7, "MDCList:action", {index: e7});
      }, removeClassForElementIndex: se3, setAttributeForElementIndex: ie3, setCheckedCheckboxOrRadioAtIndex: (e7, t8) => {
        W6()[e7].checked = t8;
      }, setTabIndexForListItemChildren: (e7, t8) => {
        const n5 = W6()[e7];
        Array.prototype.forEach.call(n5.element.querySelectorAll("button:not(:disabled), a"), (e8) => {
          e8.setAttribute("tabindex", t8);
        });
      }})), k3(P7, "SMUI:list:mount", {get element() {
        return de4();
      }, get items() {
        return V4;
      }, get typeaheadInProgress() {
        return U5.isTypeaheadInProgress();
      }, typeaheadMatchItem: (e7, t8) => U5.typeaheadMatchItem(e7, t8, true), getOrderedList: W6, focusItemAtIndex: Q5, addClassForElementIndex: ne3, removeClassForElementIndex: se3, setAttributeForElementIndex: ie3, removeAttributeForElementIndex: re3, getPrimaryTextAtIndex: ae3}), U5.init(), () => {
        U5.destroy();
      })), q2(() => {
        Y4 && Y4();
      });
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(23, r5 = h2(t7, s4)), "use" in e7 && n4(0, u3 = e7.use), "class" in e7 && n4(1, p3 = e7.class), "nonInteractive" in e7 && n4(2, m4 = e7.nonInteractive), "dense" in e7 && n4(3, f3 = e7.dense), "textualList" in e7 && n4(4, $2 = e7.textualList), "avatarList" in e7 && n4(5, h3 = e7.avatarList), "iconList" in e7 && n4(6, C4 = e7.iconList), "imageList" in e7 && n4(7, y3 = e7.imageList), "thumbnailList" in e7 && n4(8, T6 = e7.thumbnailList), "videoList" in e7 && n4(9, L6 = e7.videoList), "twoLine" in e7 && n4(10, v5 = e7.twoLine), "threeLine" in e7 && n4(11, b5 = e7.threeLine), "vertical" in e7 && n4(27, w4 = e7.vertical), "wrapFocus" in e7 && n4(28, k5 = e7.wrapFocus), "singleSelection" in e7 && n4(29, M3 = e7.singleSelection), "selectedIndex" in e7 && n4(24, F6 = e7.selectedIndex), "radioList" in e7 && n4(25, D4 = e7.radioList), "checkList" in e7 && n4(26, R6 = e7.checkList), "hasTypeahead" in e7 && n4(30, N7 = e7.hasTypeahead), "radiolist" in e7 && n4(31, B5 = e7.radiolist), "checklist" in e7 && n4(32, H7 = e7.checklist), "component" in e7 && n4(12, q7 = e7.component), "$$scope" in e7 && n4(44, o4 = e7.$$scope);
      }, e6.$$.update = () => {
        134225920 & e6.$$.dirty[0] && U5 && U5.setVerticalOrientation(w4), 268443648 & e6.$$.dirty[0] && U5 && U5.setWrapFocus(k5), 1073750016 & e6.$$.dirty[0] && U5 && U5.setHasTypeahead(N7), 536879104 & e6.$$.dirty[0] && U5 && U5.setSingleSelection(M3), 553656320 & e6.$$.dirty[0] && U5 && M3 && le3() !== F6 && U5.setSelectedIndex(F6);
      }, [u3, p3, m4, f3, $2, h3, C4, y3, T6, L6, v5, b5, q7, U5, P7, j4, l3, d4, K5, function(e7) {
        V4.push(e7.detail), z5.set(e7.detail.element, e7.detail), M3 && e7.detail.selected && n4(24, F6 = oe3(e7.detail.element)), e7.stopPropagation();
      }, function(e7) {
        const t8 = V4.indexOf(e7.detail);
        t8 !== -1 && (V4.splice(t8, 1), V4 = V4), z5.delete(e7.detail.element), e7.stopPropagation();
      }, function(e7) {
        if (D4 || R6) {
          const t8 = oe3(e7.target);
          if (t8 !== -1) {
            const e8 = W6()[t8];
            (D4 && !e8.checked || R6) && (e8.checked = !e8.checked, e8.activateRipple(), window.requestAnimationFrame(() => {
              e8.deactivateRipple();
            }));
          }
        }
      }, oe3, r5, F6, D4, R6, w4, k5, M3, N7, B5, H7, ce3, function(...e7) {
        return U5.setEnabled(...e7);
      }, function() {
        return U5.isTypeaheadInProgress();
      }, le3, de4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          P7 = e7, n4(14, P7);
        });
      }, (e7) => U5 && U5.handleKeydown(e7, e7.target.classList.contains("mdc-deprecated-list-item"), oe3(e7.target)), (e7) => U5 && U5.handleFocusIn(e7, oe3(e7.target)), (e7) => U5 && U5.handleFocusOut(e7, oe3(e7.target)), (e7) => U5 && U5.handleClick(oe3(e7.target), !l3(e7.target, 'input[type="checkbox"], input[type="radio"]')), o4];
    }
    var ze3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Xe2, je3, i2, {use: 0, class: 1, nonInteractive: 2, dense: 3, textualList: 4, avatarList: 5, iconList: 6, imageList: 7, thumbnailList: 8, videoList: 9, twoLine: 10, threeLine: 11, vertical: 27, wrapFocus: 28, singleSelection: 29, selectedIndex: 24, radioList: 25, checkList: 26, hasTypeahead: 30, radiolist: 31, checklist: 32, component: 12, layout: 33, setEnabled: 34, getTypeaheadInProgress: 35, getSelectedIndex: 36, getElement: 37}, [-1, -1]);
      }
      get layout() {
        return this.$$.ctx[33];
      }
      get setEnabled() {
        return this.$$.ctx[34];
      }
      get getTypeaheadInProgress() {
        return this.$$.ctx[35];
      }
      get getSelectedIndex() {
        return this.$$.ctx[36];
      }
      get getElement() {
        return this.$$.ctx[37];
      }
    };
    function Ye2(e6) {
      let t7, n4, l3, I2, g3;
      const _3 = e6[6].default, x4 = u2(_3, e6, e6[5], null);
      let S5 = [e6[3]], E4 = {};
      for (let e7 = 0; e7 < S5.length; e7 += 1)
        E4 = e3(E4, S5[e7]);
      return {c() {
        t7 = x2("li"), x4 && x4.c(), I(t7, E4);
      }, m(s4, i3) {
        b2(s4, t7, i3), x4 && x4.m(t7, null), e6[7](t7), l3 = true, I2 || (g3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], I2 = true);
      }, p(e7, [s4]) {
        x4 && x4.p && 32 & s4 && f2(x4, _3, e7, e7[5], s4, null, null), I(t7, E4 = ht(S5, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]);
      }, i(e7) {
        l3 || (ct(x4, e7), l3 = true);
      }, o(e7) {
        lt(x4, e7), l3 = false;
      }, d(n5) {
        n5 && w2(t7), x4 && x4.d(n5), e6[7](null), I2 = false, r2(g3);
      }};
    }
    function Ke3(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    var Ge3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Ke3, Ye2, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    };
    function qe3(e6) {
      let t7;
      return {c() {
        t7 = x2("span"), L3(t7, "class", "mdc-deprecated-list-item__ripple");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function We3(e6) {
      let t7, n4, i3 = e6[6] && qe3();
      const r5 = e6[30].default, a4 = u2(r5, e6, e6[34], null);
      return {c() {
        i3 && i3.c(), t7 = k2(), a4 && a4.c();
      }, m(e7, s4) {
        i3 && i3.m(e7, s4), b2(e7, t7, s4), a4 && a4.m(e7, s4), n4 = true;
      }, p(e7, n5) {
        e7[6] ? i3 || (i3 = qe3(), i3.c(), i3.m(t7.parentNode, t7)) : i3 && (i3.d(1), i3 = null), a4 && a4.p && 8 & n5[1] && f2(a4, r5, e7, e7[34], n5, null, null);
      }, i(e7) {
        n4 || (ct(a4, e7), n4 = true);
      }, o(e7) {
        lt(a4, e7), n4 = false;
      }, d(e7) {
        i3 && i3.d(e7), e7 && w2(t7), a4 && a4.d(e7);
      }};
    }
    function Ze2(e6) {
      let t7, n4, s4;
      const r5 = [{use: [...e6[5] ? [] : [[dt, {ripple: !e6[12], unbounded: false, color: (e6[7] || e6[0]) && e6[4] == null ? "primary" : e6[4], disabled: e6[9], addClass: e6[20], removeClass: e6[21], addStyle: e6[22]}]], e6[18], ...e6[1]]}, {class: N2({[e6[2]]: true, "mdc-deprecated-list-item": true, "mdc-deprecated-list-item--activated": e6[7], "mdc-deprecated-list-item--selected": e6[0], "mdc-deprecated-list-item--disabled": e6[9], "mdc-menu-item--selected": !e6[19] && e6[8] === "menuitem" && e6[0], "smui-menu-item--non-interactive": e6[5], ...e6[14]})}, {style: Object.entries(e6[15]).map(Qe3).concat([e6[3]]).join(" ")}, e6[19] && e6[7] ? {"aria-current": "page"} : {}, e6[19] ? {} : {role: e6[8]}, e6[19] || e6[8] !== "option" ? {} : {"aria-selected": e6[0] ? "true" : "false"}, e6[19] || e6[8] !== "radio" && e6[8] !== "checkbox" ? {} : {"aria-checked": e6[12] && e6[12].checked ? "true" : "false"}, e6[19] ? {} : {"aria-disabled": e6[9] ? "true" : "false"}, {tabindex: e6[17]}, {href: e6[10]}, e6[16], e6[25]];
      var a4 = e6[11];
      function c3(e7) {
        let t8 = {$$slots: {default: [We3]}, $$scope: {ctx: e7}};
        for (let e8 = 0; e8 < r5.length; e8 += 1)
          t8 = e3(t8, r5[e8]);
        return {props: t8};
      }
      return a4 && (t7 = new a4(c3(e6)), e6[31](t7), t7.$on("click", e6[23]), t7.$on("keydown", e6[24]), t7.$on("SMUI:generic:input:mount", e6[32]), t7.$on("SMUI:generic:input:unmount", e6[33])), {c() {
        t7 && yt(t7.$$.fragment), n4 = k2();
      }, m(e7, i3) {
        t7 && $t(t7, e7, i3), b2(e7, n4, i3), s4 = true;
      }, p(e7, s5) {
        const i3 = 41932735 & s5[0] ? ht(r5, [7606963 & s5[0] && {use: [...e7[5] ? [] : [[dt, {ripple: !e7[12], unbounded: false, color: (e7[7] || e7[0]) && e7[4] == null ? "primary" : e7[4], disabled: e7[9], addClass: e7[20], removeClass: e7[21], addStyle: e7[22]}]], e7[18], ...e7[1]]}, 541605 & s5[0] && {class: N2({[e7[2]]: true, "mdc-deprecated-list-item": true, "mdc-deprecated-list-item--activated": e7[7], "mdc-deprecated-list-item--selected": e7[0], "mdc-deprecated-list-item--disabled": e7[9], "mdc-menu-item--selected": !e7[19] && e7[8] === "menuitem" && e7[0], "smui-menu-item--non-interactive": e7[5], ...e7[14]})}, 32776 & s5[0] && {style: Object.entries(e7[15]).map(Qe3).concat([e7[3]]).join(" ")}, 524416 & s5[0] && mt(e7[19] && e7[7] ? {"aria-current": "page"} : {}), 524544 & s5[0] && mt(e7[19] ? {} : {role: e7[8]}), 524545 & s5[0] && mt(e7[19] || e7[8] !== "option" ? {} : {"aria-selected": e7[0] ? "true" : "false"}), 528640 & s5[0] && mt(e7[19] || e7[8] !== "radio" && e7[8] !== "checkbox" ? {} : {"aria-checked": e7[12] && e7[12].checked ? "true" : "false"}), 524800 & s5[0] && mt(e7[19] ? {} : {"aria-disabled": e7[9] ? "true" : "false"}), 131072 & s5[0] && {tabindex: e7[17]}, 1024 & s5[0] && {href: e7[10]}, 65536 & s5[0] && mt(e7[16]), 33554432 & s5[0] && mt(e7[25])]) : {};
        if (64 & s5[0] | 8 & s5[1] && (i3.$$scope = {dirty: s5, ctx: e7}), a4 !== (a4 = e7[11])) {
          if (t7) {
            it();
            const e8 = t7;
            lt(e8.$$.fragment, 1, 0, () => {
              bt(e8, 1);
            }), at();
          }
          a4 ? (t7 = new a4(c3(e7)), e7[31](t7), t7.$on("click", e7[23]), t7.$on("keydown", e7[24]), t7.$on("SMUI:generic:input:mount", e7[32]), t7.$on("SMUI:generic:input:unmount", e7[33]), yt(t7.$$.fragment), ct(t7.$$.fragment, 1), $t(t7, n4.parentNode, n4)) : t7 = null;
        } else
          a4 && t7.$set(i3);
      }, i(e7) {
        s4 || (t7 && ct(t7.$$.fragment, e7), s4 = true);
      }, o(e7) {
        t7 && lt(t7.$$.fragment, e7), s4 = false;
      }, d(s5) {
        e6[31](null), s5 && w2(n4), t7 && bt(t7, s5);
      }};
    }
    var Je3 = 0;
    var Qe3 = ([e6, t7]) => `${e6}: ${t7};`;
    function et3(e6, t7, n4) {
      let s4;
      const r5 = ["use", "class", "style", "color", "nonInteractive", "ripple", "activated", "role", "selected", "disabled", "tabindex", "inputId", "href", "component", "getPrimaryText", "getElement"];
      let a4 = h2(t7, r5), {$$slots: o4 = {}, $$scope: c3} = t7;
      const l3 = x3(R2());
      let d4 = () => {
      }, {use: u3 = []} = t7, {class: p3 = ""} = t7, {style: m4 = ""} = t7, {color: f3 = null} = t7, {nonInteractive: $2 = D2("SMUI:list:nonInteractive")} = t7;
      U2("SMUI:list:nonInteractive", void 0);
      let {ripple: h3 = !$2} = t7, {activated: C4 = false} = t7, {role: y3 = D2("SMUI:list:item:role")} = t7;
      U2("SMUI:list:item:role", void 0);
      let T6, L6, v5, {selected: b5 = false} = t7, {disabled: w4 = false} = t7, {tabindex: k5 = d4} = t7, {inputId: M3 = "SMUI-form-field-list-" + Je3++} = t7, {href: F6 = null} = t7, D4 = {}, R6 = {}, N7 = {}, B5 = D2("SMUI:list:item:nav"), {component: P7 = B5 ? F6 ? vt : v3 : Ge3} = t7;
      function U5(e7) {
        return e7 in D4 ? D4[e7] : q7().classList.contains(e7);
      }
      function H7(e7) {
        D4[e7] || n4(14, D4[e7] = true, D4);
      }
      function V4(e7) {
        e7 in D4 && !D4[e7] || n4(14, D4[e7] = false, D4);
      }
      function j4(e7) {
        return e7 in N7 ? N7[e7] : q7().getAttribute(e7);
      }
      function X4(e7, t8) {
        N7[e7] !== t8 && n4(16, N7[e7] = t8, N7);
      }
      function z5(e7) {
        e7 in N7 && N7[e7] == null || n4(16, N7[e7] = void 0, N7);
      }
      function Y4() {
        let e7 = true, t8 = T6;
        for (; t8.nextSibling; )
          if (t8 = t8.nextSibling, t8.nodeType === 1 && t8.classList.contains("mdc-deprecated-list-item") && t8.attributes.tabindex && t8.attributes.tabindex.value === "0") {
            e7 = false;
            break;
          }
        e7 && n4(17, s4 = "0");
      }
      function K5(e7) {
        w4 || k3(T6, "SMUI:action", e7);
      }
      function G5() {
        const e7 = q7(), t8 = e7.querySelector(".mdc-deprecated-list-item__primary-text");
        if (t8)
          return t8.textContent;
        const n5 = e7.querySelector(".mdc-deprecated-list-item__text");
        return n5 ? n5.textContent : e7.textContent;
      }
      function q7() {
        return T6.getElement();
      }
      U2("SMUI:generic:input:props", {id: M3}), U2("SMUI:separator:context", void 0), C2(() => {
        if (!b5 && !$2) {
          let e8 = true, t8 = T6;
          for (; t8.previousSibling; )
            if (t8 = t8.previousSibling, t8.nodeType === 1 && t8.classList.contains("mdc-deprecated-list-item") && !t8.classList.contains("mdc-deprecated-list-item--disabled")) {
              e8 = false;
              break;
            }
          e8 && (v5 = window.requestAnimationFrame(Y4));
        }
        const e7 = {_smui_list_item_accessor: true, get element() {
          return q7();
        }, get selected() {
          return b5;
        }, set selected(e8) {
          n4(0, b5 = e8);
        }, hasClass: U5, addClass: H7, removeClass: V4, getAttr: j4, addAttr: X4, removeAttr: z5, getPrimaryText: G5, get checked() {
          return L6 && L6.checked;
        }, set checked(e8) {
          L6 && n4(12, L6.checked = e8, L6);
        }, get hasCheckbox() {
          return !(!L6 || !L6._smui_checkbox_accessor);
        }, get hasRadio() {
          return !(!L6 || !L6._smui_radio_accessor);
        }, activateRipple() {
          L6 && L6.activateRipple();
        }, deactivateRipple() {
          L6 && L6.deactivateRipple();
        }, getValue: () => a4.value};
        return k3(T6, "SMUI:list:item:mount", e7), () => {
          k3(T6, "SMUI:list:item:unmount", e7);
        };
      }), q2(() => {
        v5 && window.cancelAnimationFrame(v5);
      });
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(25, a4 = h2(t7, r5)), "use" in e7 && n4(1, u3 = e7.use), "class" in e7 && n4(2, p3 = e7.class), "style" in e7 && n4(3, m4 = e7.style), "color" in e7 && n4(4, f3 = e7.color), "nonInteractive" in e7 && n4(5, $2 = e7.nonInteractive), "ripple" in e7 && n4(6, h3 = e7.ripple), "activated" in e7 && n4(7, C4 = e7.activated), "role" in e7 && n4(8, y3 = e7.role), "selected" in e7 && n4(0, b5 = e7.selected), "disabled" in e7 && n4(9, w4 = e7.disabled), "tabindex" in e7 && n4(26, k5 = e7.tabindex), "inputId" in e7 && n4(27, M3 = e7.inputId), "href" in e7 && n4(10, F6 = e7.href), "component" in e7 && n4(11, P7 = e7.component), "$$scope" in e7 && n4(34, c3 = e7.$$scope);
      }, e6.$$.update = () => {
        67113505 & e6.$$.dirty[0] && n4(17, s4 = k5 == d4 ? $2 || w4 || !(b5 || L6 && L6.checked) ? "-1" : "0" : k5);
      }, [b5, u3, p3, m4, f3, $2, h3, C4, y3, w4, F6, P7, L6, T6, D4, R6, N7, s4, l3, B5, H7, V4, function(e7, t8) {
        R6[e7] != t8 && (t8 === "" || t8 == null ? (delete R6[e7], n4(15, R6)) : n4(15, R6[e7] = t8, R6));
      }, K5, function(e7) {
        const t8 = e7.key === "Enter" || e7.keyCode === 13, n5 = e7.key === "Space" || e7.keyCode === 32;
        (t8 || n5) && K5(e7);
      }, a4, k5, M3, G5, q7, o4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          T6 = e7, n4(13, T6);
        });
      }, (e7) => n4(12, L6 = e7.detail), () => n4(12, L6 = void 0), c3];
    }
    var tt4 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, et3, Ze2, i2, {use: 1, class: 2, style: 3, color: 4, nonInteractive: 5, ripple: 6, activated: 7, role: 8, selected: 0, disabled: 9, tabindex: 26, inputId: 27, href: 10, component: 11, getPrimaryText: 28, getElement: 29}, [-1, -1]);
      }
      get getPrimaryText() {
        return this.$$.ctx[28];
      }
      get getElement() {
        return this.$$.ctx[29];
      }
    };
    var nt3 = B2({class: "mdc-deprecated-list-item__text", component: v3});
    function st4(e6) {
      let t7, n4, l3, I2, g3, _3;
      const x4 = e6[8].default, S5 = u2(x4, e6, e6[7], null);
      let E4 = [{class: n4 = N2({[e6[1]]: true, "mdc-deprecated-list-item__graphic": true, "mdc-menu__selection-group-icon": e6[4]})}, e6[5]], A5 = {};
      for (let e7 = 0; e7 < E4.length; e7 += 1)
        A5 = e3(A5, E4[e7]);
      return {c() {
        t7 = x2("span"), S5 && S5.c(), I(t7, A5);
      }, m(n5, s4) {
        b2(n5, t7, s4), S5 && S5.m(t7, null), e6[9](t7), I2 = true, g3 || (_3 = [y2(l3 = q3.call(null, t7, e6[0])), y2(e6[3].call(null, t7))], g3 = true);
      }, p(e7, [s4]) {
        S5 && S5.p && 128 & s4 && f2(S5, x4, e7, e7[7], s4, null, null), I(t7, A5 = ht(E4, [(!I2 || 2 & s4 && n4 !== (n4 = N2({[e7[1]]: true, "mdc-deprecated-list-item__graphic": true, "mdc-menu__selection-group-icon": e7[4]}))) && {class: n4}, 32 & s4 && e7[5]])), l3 && s2(l3.update) && 1 & s4 && l3.update.call(null, e7[0]);
      }, i(e7) {
        I2 || (ct(S5, e7), I2 = true);
      }, o(e7) {
        lt(S5, e7), I2 = false;
      }, d(n5) {
        n5 && w2(t7), S5 && S5.d(n5), e6[9](null), g3 = false, r2(_3);
      }};
    }
    function it3(e6, t7, n4) {
      const s4 = ["use", "class", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7;
      const c3 = x3(R2());
      let l3, {use: d4 = []} = t7, {class: u3 = ""} = t7, p3 = D2("SMUI:list:graphic:menu-selection-group");
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(5, r5 = h2(t7, s4)), "use" in e7 && n4(0, d4 = e7.use), "class" in e7 && n4(1, u3 = e7.class), "$$scope" in e7 && n4(7, o4 = e7.$$scope);
      }, [d4, u3, l3, c3, p3, r5, function() {
        return l3;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          l3 = e7, n4(2, l3);
        });
      }];
    }
    B2({class: "mdc-deprecated-list-item__primary-text", component: v3}), B2({class: "mdc-deprecated-list-item__secondary-text", component: v3});
    var rt3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, it3, st4, i2, {use: 0, class: 1, getElement: 6});
      }
      get getElement() {
        return this.$$.ctx[6];
      }
    };
    function at3(e6) {
      let t7, n4, l3, I2, g3;
      const _3 = e6[6].default, x4 = u2(_3, e6, e6[5], null);
      let S5 = [e6[3]], E4 = {};
      for (let e7 = 0; e7 < S5.length; e7 += 1)
        E4 = e3(E4, S5[e7]);
      return {c() {
        t7 = x2("h3"), x4 && x4.c(), I(t7, E4);
      }, m(s4, i3) {
        b2(s4, t7, i3), x4 && x4.m(t7, null), e6[7](t7), l3 = true, I2 || (g3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], I2 = true);
      }, p(e7, [s4]) {
        x4 && x4.p && 32 & s4 && f2(x4, _3, e7, e7[5], s4, null, null), I(t7, E4 = ht(S5, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]);
      }, i(e7) {
        l3 || (ct(x4, e7), l3 = true);
      }, o(e7) {
        lt(x4, e7), l3 = false;
      }, d(n5) {
        n5 && w2(t7), x4 && x4.d(n5), e6[7](null), I2 = false, r2(g3);
      }};
    }
    function ot4(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    B2({class: "mdc-deprecated-list-item__meta", component: v3}), B2({class: "mdc-deprecated-list-group", component: _t2});
    var ct4 = B2({class: "mdc-deprecated-list-group__subheader", component: class extends _t {
      constructor(e6) {
        super(), wt(this, e6, ot4, at3, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    }});
    function lt3(e6) {
      let t7, n4, l3, I2, g3, _3, x4 = [e6[3]], S5 = {};
      for (let e7 = 0; e7 < x4.length; e7 += 1)
        S5 = e3(S5, x4[e7]);
      const E4 = e6[6].default, A5 = u2(E4, e6, e6[5], null);
      return {c() {
        t7 = x2("hr"), l3 = P2(), A5 && A5.c(), I(t7, S5);
      }, m(s4, i3) {
        b2(s4, t7, i3), e6[7](t7), b2(s4, l3, i3), A5 && A5.m(s4, i3), I2 = true, g3 || (_3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], g3 = true);
      }, p(e7, [s4]) {
        I(t7, S5 = ht(x4, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]), A5 && A5.p && 32 & s4 && f2(A5, E4, e7, e7[5], s4, null, null);
      }, i(e7) {
        I2 || (ct(A5, e7), I2 = true);
      }, o(e7) {
        lt(A5, e7), I2 = false;
      }, d(n5) {
        n5 && w2(t7), e6[7](null), n5 && w2(l3), A5 && A5.d(n5), g3 = false, r2(_3);
      }};
    }
    function dt4(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    var ut4 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, dt4, lt3, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    };
    function pt4(e6) {
      let t7, n4, s4;
      const r5 = [{use: [e6[9], ...e6[0]]}, {class: N2({[e6[1]]: true, "mdc-deprecated-list-divider": true, "mdc-deprecated-list-divider--padded": e6[2], "mdc-deprecated-list-divider--inset": e6[3], "mdc-deprecated-list-divider--inset-leading": e6[4], "mdc-deprecated-list-divider--inset-trailing": e6[5], "mdc-deprecated-list-divider--inset-padding": e6[6]})}, {role: "separator"}, e6[10]];
      var a4 = e6[7];
      function c3(e7) {
        let t8 = {};
        for (let e8 = 0; e8 < r5.length; e8 += 1)
          t8 = e3(t8, r5[e8]);
        return {props: t8};
      }
      return a4 && (t7 = new a4(c3()), e6[12](t7)), {c() {
        t7 && yt(t7.$$.fragment), n4 = k2();
      }, m(e7, i3) {
        t7 && $t(t7, e7, i3), b2(e7, n4, i3), s4 = true;
      }, p(e7, [s5]) {
        const i3 = 1663 & s5 ? ht(r5, [513 & s5 && {use: [e7[9], ...e7[0]]}, 126 & s5 && {class: N2({[e7[1]]: true, "mdc-deprecated-list-divider": true, "mdc-deprecated-list-divider--padded": e7[2], "mdc-deprecated-list-divider--inset": e7[3], "mdc-deprecated-list-divider--inset-leading": e7[4], "mdc-deprecated-list-divider--inset-trailing": e7[5], "mdc-deprecated-list-divider--inset-padding": e7[6]})}, r5[2], 1024 & s5 && mt(e7[10])]) : {};
        if (a4 !== (a4 = e7[7])) {
          if (t7) {
            it();
            const e8 = t7;
            lt(e8.$$.fragment, 1, 0, () => {
              bt(e8, 1);
            }), at();
          }
          a4 ? (t7 = new a4(c3()), e7[12](t7), yt(t7.$$.fragment), ct(t7.$$.fragment, 1), $t(t7, n4.parentNode, n4)) : t7 = null;
        } else
          a4 && t7.$set(i3);
      }, i(e7) {
        s4 || (t7 && ct(t7.$$.fragment, e7), s4 = true);
      }, o(e7) {
        t7 && lt(t7.$$.fragment, e7), s4 = false;
      }, d(s5) {
        e6[12](null), s5 && w2(n4), t7 && bt(t7, s5);
      }};
    }
    function mt4(e6, t7, n4) {
      const s4 = ["use", "class", "padded", "inset", "insetLeading", "insetTrailing", "insetPadding", "component", "getElement"];
      let r5 = h2(t7, s4);
      const a4 = x3(R2());
      let o4, {use: c3 = []} = t7, {class: l3 = ""} = t7, {padded: d4 = false} = t7, {inset: u3 = false} = t7, {insetLeading: p3 = false} = t7, {insetTrailing: m4 = false} = t7, {insetPadding: f3 = false} = t7, $2 = D2("SMUI:list:item:nav"), h3 = D2("SMUI:separator:context"), {component: _3 = $2 || h3 !== "list" ? ut4 : Ge3} = t7;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(10, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "class" in e7 && n4(1, l3 = e7.class), "padded" in e7 && n4(2, d4 = e7.padded), "inset" in e7 && n4(3, u3 = e7.inset), "insetLeading" in e7 && n4(4, p3 = e7.insetLeading), "insetTrailing" in e7 && n4(5, m4 = e7.insetTrailing), "insetPadding" in e7 && n4(6, f3 = e7.insetPadding), "component" in e7 && n4(7, _3 = e7.component);
      }, [c3, l3, d4, u3, p3, m4, f3, _3, o4, a4, r5, function() {
        return o4.getElement();
      }, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          o4 = e7, n4(8, o4);
        });
      }];
    }
    var ft4 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, mt4, pt4, i2, {use: 0, class: 1, padded: 2, inset: 3, insetLeading: 4, insetTrailing: 5, insetPadding: 6, component: 7, getElement: 11});
      }
      get getElement() {
        return this.$$.ctx[11];
      }
    };
    function $t3(e6) {
      let t7, n4, l3, I2, g3;
      const _3 = e6[6].default, x4 = u2(_3, e6, e6[5], null);
      let S5 = [e6[3]], E4 = {};
      for (let e7 = 0; e7 < S5.length; e7 += 1)
        E4 = e3(E4, S5[e7]);
      return {c() {
        t7 = x2("h6"), x4 && x4.c(), I(t7, E4);
      }, m(s4, i3) {
        b2(s4, t7, i3), x4 && x4.m(t7, null), e6[7](t7), l3 = true, I2 || (g3 = [y2(n4 = q3.call(null, t7, e6[0])), y2(e6[2].call(null, t7))], I2 = true);
      }, p(e7, [s4]) {
        x4 && x4.p && 32 & s4 && f2(x4, _3, e7, e7[5], s4, null, null), I(t7, E4 = ht(S5, [8 & s4 && e7[3]])), n4 && s2(n4.update) && 1 & s4 && n4.update.call(null, e7[0]);
      }, i(e7) {
        l3 || (ct(x4, e7), l3 = true);
      }, o(e7) {
        lt(x4, e7), l3 = false;
      }, d(n5) {
        n5 && w2(t7), x4 && x4.d(n5), e6[7](null), I2 = false, r2(g3);
      }};
    }
    function ht4(e6, t7, n4) {
      const s4 = ["use", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7, {use: c3 = []} = t7;
      const l3 = x3(R2());
      let d4 = null;
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(3, r5 = h2(t7, s4)), "use" in e7 && n4(0, c3 = e7.use), "$$scope" in e7 && n4(5, o4 = e7.$$scope);
      }, [c3, d4, l3, r5, function() {
        return d4;
      }, o4, a4, function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          d4 = e7, n4(1, d4);
        });
      }];
    }
    var It3 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, ht4, $t3, i2, {use: 0, getElement: 4});
      }
      get getElement() {
        return this.$$.ctx[4];
      }
    };
    function gt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new Fe3({props: {$$slots: {default: [xt3]}, $$scope: {ctx: e6}}}), s4 = new De3({props: {$$slots: {default: [St3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function _t4(e6) {
      let t7, n4, s4, i3;
      return t7 = new Fe3({props: {$$slots: {default: [Et3]}, $$scope: {ctx: e6}}}), s4 = new De3({props: {$$slots: {default: [At3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65540 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65540 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function xt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Hello!");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function St3(e6) {
      let t7;
      return {c() {
        t7 = v2("please login :)");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Et3(e6) {
      let t7, n4, s4, i3 = e6[2].name + "", r5 = e6[2].surname + "";
      return {c() {
        t7 = v2(i3), n4 = P2(), s4 = v2(r5);
      }, m(e7, i4) {
        b2(e7, t7, i4), b2(e7, n4, i4), b2(e7, s4, i4);
      }, p(e7, n5) {
        4 & n5 && i3 !== (i3 = e7[2].name + "") && T3(t7, i3), 4 & n5 && r5 !== (r5 = e7[2].surname + "") && T3(s4, r5);
      }, d(e7) {
        e7 && w2(t7), e7 && w2(n4), e7 && w2(s4);
      }};
    }
    function At3(e6) {
      let t7, n4 = e6[2].email + "";
      return {c() {
        t7 = v2(n4);
      }, m(e7, n5) {
        b2(e7, t7, n5);
      }, p(e7, s4) {
        4 & s4 && n4 !== (n4 = e7[2].email + "") && T3(t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Ct3(e6) {
      let t7, n4, s4, i3;
      const r5 = [_t4, gt3], a4 = [];
      function c3(e7, t8) {
        return e7[2] ? 0 : 1;
      }
      return t7 = c3(e6), n4 = a4[t7] = r5[t7](e6), {c() {
        n4.c(), s4 = k2();
      }, m(e7, n5) {
        a4[t7].m(e7, n5), b2(e7, s4, n5), i3 = true;
      }, p(e7, i4) {
        let o4 = t7;
        t7 = c3(e7), t7 === o4 ? a4[t7].p(e7, i4) : (it(), lt(a4[o4], 1, 1, () => {
          a4[o4] = null;
        }), at(), n4 = a4[t7], n4 ? n4.p(e7, i4) : (n4 = a4[t7] = r5[t7](e7), n4.c()), ct(n4, 1), n4.m(s4.parentNode, s4));
      }, i(e7) {
        i3 || (ct(n4), i3 = true);
      }, o(e7) {
        lt(n4), i3 = false;
      }, d(e7) {
        a4[t7].d(e7), e7 && w2(s4);
      }};
    }
    function yt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "TV Shows", $$slots: {default: [vt4]}, $$scope: {ctx: e6}}}), t7.$on("click", e6[6]), s4 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Movies", $$slots: {default: [Ot3]}, $$scope: {ctx: e6}}}), s4.$on("click", e6[7]), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        2 & n5 && (i4.activated = e7[1] === "TV Shows"), 65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        2 & n5 && (r5.activated = e7[1] === "Movies"), 65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function Tt3(e6) {
      let t7;
      return {c() {
        t7 = v2("live_tv");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Lt3(e6) {
      let t7;
      return {c() {
        t7 = v2("TV Shows");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function vt4(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [Tt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [Lt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function bt3(e6) {
      let t7;
      return {c() {
        t7 = v2("movie");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function wt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Movies");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Ot3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [bt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [wt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function kt3(e6) {
      let t7, n4, s4, i3, r5, a4, c3, l3;
      return t7 = new ft4({}), s4 = new ct4({props: {component: It3, $$slots: {default: [Mt3]}, $$scope: {ctx: e6}}}), r5 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Player", $$slots: {default: [Rt3]}, $$scope: {ctx: e6}}}), r5.$on("click", e6[8]), c3 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Youtube Player", $$slots: {default: [Pt3]}, $$scope: {ctx: e6}}}), c3.$on("click", e6[9]), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment), i3 = P2(), yt(r5.$$.fragment), a4 = P2(), yt(c3.$$.fragment);
      }, m(e7, d4) {
        $t(t7, e7, d4), b2(e7, n4, d4), $t(s4, e7, d4), b2(e7, i3, d4), $t(r5, e7, d4), b2(e7, a4, d4), $t(c3, e7, d4), l3 = true;
      }, p(e7, t8) {
        const n5 = {};
        65536 & t8 && (n5.$$scope = {dirty: t8, ctx: e7}), s4.$set(n5);
        const i4 = {};
        2 & t8 && (i4.activated = e7[1] === "Player"), 65536 & t8 && (i4.$$scope = {dirty: t8, ctx: e7}), r5.$set(i4);
        const a5 = {};
        2 & t8 && (a5.activated = e7[1] === "Youtube Player"), 65536 & t8 && (a5.$$scope = {dirty: t8, ctx: e7}), c3.$set(a5);
      }, i(e7) {
        l3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), ct(r5.$$.fragment, e7), ct(c3.$$.fragment, e7), l3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), lt(r5.$$.fragment, e7), lt(c3.$$.fragment, e7), l3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7), e7 && w2(i3), bt(r5, e7), e7 && w2(a4), bt(c3, e7);
      }};
    }
    function Mt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Labels");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Ft3(e6) {
      let t7;
      return {c() {
        t7 = v2("tv");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Dt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Player");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Rt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [Ft3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [Dt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function Nt3(e6) {
      let t7;
      return {c() {
        t7 = v2("tv");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Bt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Youtube Player");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Pt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [Nt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [Bt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function Ut3(e6) {
      let t7, n4, s4, i3;
      return t7 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Login", $$slots: {default: [Xt3]}, $$scope: {ctx: e6}}}), t7.$on("click", e6[13]), s4 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Register", $$slots: {default: [Kt3]}, $$scope: {ctx: e6}}}), s4.$on("click", e6[14]), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        2 & n5 && (i4.activated = e7[1] === "Login"), 65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        2 & n5 && (r5.activated = e7[1] === "Register"), 65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function Ht3(e6) {
      let t7, n4, s4, i3, r5, a4;
      return t7 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Logout", align: "bottom", $$slots: {default: [Wt3]}, $$scope: {ctx: e6}}}), t7.$on("click", e6[10]), s4 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Profile", $$slots: {default: [Qt3]}, $$scope: {ctx: e6}}}), s4.$on("click", e6[11]), r5 = new tt4({props: {href: "javascript:void(0)", activated: e6[1] === "Settings", $$slots: {default: [nn2]}, $$scope: {ctx: e6}}}), r5.$on("click", e6[12]), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment), i3 = P2(), yt(r5.$$.fragment);
      }, m(e7, c3) {
        $t(t7, e7, c3), b2(e7, n4, c3), $t(s4, e7, c3), b2(e7, i3, c3), $t(r5, e7, c3), a4 = true;
      }, p(e7, n5) {
        const i4 = {};
        2 & n5 && (i4.activated = e7[1] === "Logout"), 65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const a5 = {};
        2 & n5 && (a5.activated = e7[1] === "Profile"), 65536 & n5 && (a5.$$scope = {dirty: n5, ctx: e7}), s4.$set(a5);
        const o4 = {};
        2 & n5 && (o4.activated = e7[1] === "Settings"), 65536 & n5 && (o4.$$scope = {dirty: n5, ctx: e7}), r5.$set(o4);
      }, i(e7) {
        a4 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), ct(r5.$$.fragment, e7), a4 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), lt(r5.$$.fragment, e7), a4 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7), e7 && w2(i3), bt(r5, e7);
      }};
    }
    function Vt3(e6) {
      let t7;
      return {c() {
        t7 = v2("login");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function jt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Login");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Xt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [Vt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [jt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function zt3(e6) {
      let t7;
      return {c() {
        t7 = v2("history_edu");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Yt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Register");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Kt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [zt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [Yt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function Gt3(e6) {
      let t7;
      return {c() {
        t7 = v2("logout");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function qt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Logout");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Wt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [Gt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [qt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function Zt3(e6) {
      let t7;
      return {c() {
        t7 = v2("manage_accounts");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Jt3(e6) {
      let t7;
      return {c() {
        t7 = v2("Profile");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function Qt3(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [Zt3]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [Jt3]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function en2(e6) {
      let t7;
      return {c() {
        t7 = v2("settings");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function tn2(e6) {
      let t7;
      return {c() {
        t7 = v2("Settings");
      }, m(e7, n4) {
        b2(e7, t7, n4);
      }, d(e7) {
        e7 && w2(t7);
      }};
    }
    function nn2(e6) {
      let t7, n4, s4, i3;
      return t7 = new rt3({props: {class: "material-icons", "aria-hidden": "true", $$slots: {default: [en2]}, $$scope: {ctx: e6}}}), s4 = new nt3({props: {$$slots: {default: [tn2]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65536 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65536 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function sn2(e6) {
      let t7, n4, s4, i3, r5, a4, c3, l3, d4 = e6[2] && yt3(e6), u3 = e6[2].admin && kt3(e6);
      s4 = new ft4({});
      const p3 = [Ht3, Ut3], h3 = [];
      function I2(e7, t8) {
        return e7[2].id ? 0 : 1;
      }
      return r5 = I2(e6), a4 = h3[r5] = p3[r5](e6), {c() {
        d4 && d4.c(), t7 = P2(), u3 && u3.c(), n4 = P2(), yt(s4.$$.fragment), i3 = P2(), a4.c(), c3 = k2();
      }, m(e7, a5) {
        d4 && d4.m(e7, a5), b2(e7, t7, a5), u3 && u3.m(e7, a5), b2(e7, n4, a5), $t(s4, e7, a5), b2(e7, i3, a5), h3[r5].m(e7, a5), b2(e7, c3, a5), l3 = true;
      }, p(e7, s5) {
        e7[2] ? d4 ? (d4.p(e7, s5), 4 & s5 && ct(d4, 1)) : (d4 = yt3(e7), d4.c(), ct(d4, 1), d4.m(t7.parentNode, t7)) : d4 && (it(), lt(d4, 1, 1, () => {
          d4 = null;
        }), at()), e7[2].admin ? u3 ? (u3.p(e7, s5), 4 & s5 && ct(u3, 1)) : (u3 = kt3(e7), u3.c(), ct(u3, 1), u3.m(n4.parentNode, n4)) : u3 && (it(), lt(u3, 1, 1, () => {
          u3 = null;
        }), at());
        let i4 = r5;
        r5 = I2(e7), r5 === i4 ? h3[r5].p(e7, s5) : (it(), lt(h3[i4], 1, 1, () => {
          h3[i4] = null;
        }), at(), a4 = h3[r5], a4 ? a4.p(e7, s5) : (a4 = h3[r5] = p3[r5](e7), a4.c()), ct(a4, 1), a4.m(c3.parentNode, c3));
      }, i(e7) {
        l3 || (ct(d4), ct(u3), ct(s4.$$.fragment, e7), ct(a4), l3 = true);
      }, o(e7) {
        lt(d4), lt(u3), lt(s4.$$.fragment, e7), lt(a4), l3 = false;
      }, d(e7) {
        d4 && d4.d(e7), e7 && w2(t7), u3 && u3.d(e7), e7 && w2(n4), bt(s4, e7), e7 && w2(i3), h3[r5].d(e7), e7 && w2(c3);
      }};
    }
    function rn2(e6) {
      let t7, n4;
      return t7 = new ze3({props: {$$slots: {default: [sn2]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment);
      }, m(e7, s4) {
        $t(t7, e7, s4), n4 = true;
      }, p(e7, n5) {
        const s4 = {};
        65550 & n5 && (s4.$$scope = {dirty: n5, ctx: e7}), t7.$set(s4);
      }, i(e7) {
        n4 || (ct(t7.$$.fragment, e7), n4 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), n4 = false;
      }, d(e7) {
        bt(t7, e7);
      }};
    }
    function an2(e6) {
      let t7, n4, s4, i3;
      return t7 = new Oe3({props: {$$slots: {default: [Ct3]}, $$scope: {ctx: e6}}}), s4 = new we3({props: {$$slots: {default: [rn2]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment), n4 = P2(), yt(s4.$$.fragment);
      }, m(e7, r5) {
        $t(t7, e7, r5), b2(e7, n4, r5), $t(s4, e7, r5), i3 = true;
      }, p(e7, n5) {
        const i4 = {};
        65540 & n5 && (i4.$$scope = {dirty: n5, ctx: e7}), t7.$set(i4);
        const r5 = {};
        65550 & n5 && (r5.$$scope = {dirty: n5, ctx: e7}), s4.$set(r5);
      }, i(e7) {
        i3 || (ct(t7.$$.fragment, e7), ct(s4.$$.fragment, e7), i3 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), lt(s4.$$.fragment, e7), i3 = false;
      }, d(e7) {
        bt(t7, e7), e7 && w2(n4), bt(s4, e7);
      }};
    }
    function on2(e6) {
      let t7, n4, s4;
      function i3(t8) {
        e6[15](t8);
      }
      let r5 = {variant: "modal", $$slots: {default: [an2]}, $$scope: {ctx: e6}};
      return e6[0] !== void 0 && (r5.open = e6[0]), t7 = new be3({props: r5}), J.push(() => gt(t7, "open", i3)), {c() {
        yt(t7.$$.fragment);
      }, m(e7, n5) {
        $t(t7, e7, n5), s4 = true;
      }, p(e7, [s5]) {
        const i4 = {};
        65550 & s5 && (i4.$$scope = {dirty: s5, ctx: e7}), !n4 && 1 & s5 && (n4 = true, i4.open = e7[0], Y3(() => n4 = false)), t7.$set(i4);
      }, i(e7) {
        s4 || (ct(t7.$$.fragment, e7), s4 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), s4 = false;
      }, d(e7) {
        bt(t7, e7);
      }};
    }
    function cn2(e6, t7, n4) {
      let s4, i3;
      l2(e6, r3, (e7) => n4(2, s4 = e7)), l2(e6, se, (e7) => n4(3, i3 = e7));
      let {open: r5 = false} = t7, {desktop: a4 = false} = t7, {active: o4 = ""} = t7;
      function c3(e7) {
        n4(1, o4 = e7), a4 || n4(0, r5 = false);
      }
      console.log(s4);
      return e6.$$set = (e7) => {
        "open" in e7 && n4(0, r5 = e7.open), "desktop" in e7 && n4(5, a4 = e7.desktop), "active" in e7 && n4(1, o4 = e7.active);
      }, [r5, o4, s4, i3, c3, a4, () => {
        c3("TV Shows"), i3("./shows");
      }, () => c3("Movies"), () => {
        c3("Player"), i3("./watch");
      }, () => {
        c3("Youtube Player"), i3("./watch");
      }, () => {
        c3("Logout"), i3("./logout");
      }, () => c3("Profile"), () => c3("Settings"), () => {
        c3("Login"), i3("./login");
      }, () => {
        c3("Register"), i3("./register");
      }, function(e7) {
        r5 = e7, n4(0, r5);
      }];
    }
    var ln2 = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, cn2, on2, i2, {open: 0, desktop: 5, active: 1});
      }
    };
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
    var dn2 = {FIXED_CLASS: "mdc-top-app-bar--fixed", FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled", SHORT_CLASS: "mdc-top-app-bar--short", SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed", SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"};
    var un2 = {DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100, MAX_TOP_APP_BAR_HEIGHT: 128};
    var pn2 = {ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item", NAVIGATION_EVENT: "MDCTopAppBar:nav", NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon", ROOT_SELECTOR: ".mdc-top-app-bar", TITLE_SELECTOR: ".mdc-top-app-bar__title"};
    var mn2 = function(e6) {
      function t7(n4) {
        return e6.call(this, Z(Z({}, t7.defaultAdapter), n4)) || this;
      }
      return Y(t7, e6), Object.defineProperty(t7, "strings", {get: function() {
        return pn2;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "cssClasses", {get: function() {
        return dn2;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "numbers", {get: function() {
        return un2;
      }, enumerable: false, configurable: true}), Object.defineProperty(t7, "defaultAdapter", {get: function() {
        return {addClass: function() {
        }, removeClass: function() {
        }, hasClass: function() {
          return false;
        }, setStyle: function() {
        }, getTopAppBarHeight: function() {
          return 0;
        }, notifyNavigationIconClicked: function() {
        }, getViewportScrollY: function() {
          return 0;
        }, getTotalActionItems: function() {
          return 0;
        }};
      }, enumerable: false, configurable: true}), t7.prototype.handleTargetScroll = function() {
      }, t7.prototype.handleWindowResize = function() {
      }, t7.prototype.handleNavigationClick = function() {
        this.adapter.notifyNavigationIconClicked();
      }, t7;
    }(J2);
    var fn2 = function(e6) {
      function t7(t8) {
        var n4 = e6.call(this, t8) || this;
        return n4.wasDocked_ = true, n4.isDockedShowing_ = true, n4.currentAppBarOffsetTop_ = 0, n4.isCurrentlyBeingResized_ = false, n4.resizeThrottleId_ = 0, n4.resizeDebounceId_ = 0, n4.lastScrollPosition_ = n4.adapter.getViewportScrollY(), n4.topAppBarHeight_ = n4.adapter.getTopAppBarHeight(), n4;
      }
      return Y(t7, e6), t7.prototype.destroy = function() {
        e6.prototype.destroy.call(this), this.adapter.setStyle("top", "");
      }, t7.prototype.handleTargetScroll = function() {
        var e7 = Math.max(this.adapter.getViewportScrollY(), 0), t8 = e7 - this.lastScrollPosition_;
        this.lastScrollPosition_ = e7, this.isCurrentlyBeingResized_ || (this.currentAppBarOffsetTop_ -= t8, this.currentAppBarOffsetTop_ > 0 ? this.currentAppBarOffsetTop_ = 0 : Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_ && (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_), this.moveTopAppBar_());
      }, t7.prototype.handleWindowResize = function() {
        var e7 = this;
        this.resizeThrottleId_ || (this.resizeThrottleId_ = setTimeout(function() {
          e7.resizeThrottleId_ = 0, e7.throttledResizeHandler_();
        }, un2.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized_ = true, this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_), this.resizeDebounceId_ = setTimeout(function() {
          e7.handleTargetScroll(), e7.isCurrentlyBeingResized_ = false, e7.resizeDebounceId_ = 0;
        }, un2.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      }, t7.prototype.checkForUpdate_ = function() {
        var e7 = -this.topAppBarHeight_, t8 = this.currentAppBarOffsetTop_ < 0, n4 = this.currentAppBarOffsetTop_ > e7, s4 = t8 && n4;
        if (s4)
          this.wasDocked_ = false;
        else {
          if (!this.wasDocked_)
            return this.wasDocked_ = true, true;
          if (this.isDockedShowing_ !== n4)
            return this.isDockedShowing_ = n4, true;
        }
        return s4;
      }, t7.prototype.moveTopAppBar_ = function() {
        if (this.checkForUpdate_()) {
          var e7 = this.currentAppBarOffsetTop_;
          Math.abs(e7) >= this.topAppBarHeight_ && (e7 = -un2.MAX_TOP_APP_BAR_HEIGHT), this.adapter.setStyle("top", e7 + "px");
        }
      }, t7.prototype.throttledResizeHandler_ = function() {
        var e7 = this.adapter.getTopAppBarHeight();
        this.topAppBarHeight_ !== e7 && (this.wasDocked_ = false, this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - e7, this.topAppBarHeight_ = e7), this.handleTargetScroll();
      }, t7;
    }(mn2);
    var $n2 = function(e6) {
      function t7() {
        var t8 = e6 !== null && e6.apply(this, arguments) || this;
        return t8.wasScrolled_ = false, t8;
      }
      return Y(t7, e6), t7.prototype.handleTargetScroll = function() {
        this.adapter.getViewportScrollY() <= 0 ? this.wasScrolled_ && (this.adapter.removeClass(dn2.FIXED_SCROLLED_CLASS), this.wasScrolled_ = false) : this.wasScrolled_ || (this.adapter.addClass(dn2.FIXED_SCROLLED_CLASS), this.wasScrolled_ = true);
      }, t7;
    }(fn2);
    var hn2 = function(e6) {
      function t7(t8) {
        var n4 = e6.call(this, t8) || this;
        return n4.isCollapsed_ = false, n4.isAlwaysCollapsed_ = false, n4;
      }
      return Y(t7, e6), Object.defineProperty(t7.prototype, "isCollapsed", {get: function() {
        return this.isCollapsed_;
      }, enumerable: false, configurable: true}), t7.prototype.init = function() {
        e6.prototype.init.call(this), this.adapter.getTotalActionItems() > 0 && this.adapter.addClass(dn2.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter.hasClass(dn2.SHORT_COLLAPSED_CLASS));
      }, t7.prototype.setAlwaysCollapsed = function(e7) {
        this.isAlwaysCollapsed_ = !!e7, this.isAlwaysCollapsed_ ? this.collapse_() : this.maybeCollapseBar_();
      }, t7.prototype.getAlwaysCollapsed = function() {
        return this.isAlwaysCollapsed_;
      }, t7.prototype.handleTargetScroll = function() {
        this.maybeCollapseBar_();
      }, t7.prototype.maybeCollapseBar_ = function() {
        this.isAlwaysCollapsed_ || (this.adapter.getViewportScrollY() <= 0 ? this.isCollapsed_ && this.uncollapse_() : this.isCollapsed_ || this.collapse_());
      }, t7.prototype.uncollapse_ = function() {
        this.adapter.removeClass(dn2.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = false;
      }, t7.prototype.collapse_ = function() {
        this.adapter.addClass(dn2.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = true;
      }, t7;
    }(mn2);
    var {window: In2} = ut3;
    function gn2(e6) {
      let t7, n4, I2, g3, _3, x4, S5;
      const E4 = e6[22].default, A5 = u2(E4, e6, e6[21], null);
      let C4 = [{class: n4 = N2({[e6[2]]: true, "mdc-top-app-bar": true, "mdc-top-app-bar--short": e6[4] === "short", "mdc-top-app-bar--short-collapsed": e6[0], "mdc-top-app-bar--fixed": e6[4] === "fixed", "smui-top-app-bar--static": e6[4] === "static", "smui-top-app-bar--color-secondary": e6[5] === "secondary", "mdc-top-app-bar--prominent": e6[6], "mdc-top-app-bar--dense": e6[7], ...e6[11]})}, {style: I2 = Object.entries(e6[12]).map(_n).concat([e6[3]]).join(" ")}, e6[15]], y3 = {};
      for (let e7 = 0; e7 < C4.length; e7 += 1)
        y3 = e3(y3, C4[e7]);
      return {c() {
        t7 = x2("header"), A5 && A5.c(), I(t7, y3);
      }, m(n5, s4) {
        b2(n5, t7, s4), A5 && A5.m(t7, null), e6[25](t7), _3 = true, x4 || (S5 = [E2(In2, "resize", e6[23]), E2(In2, "scroll", e6[24]), y2(g3 = q3.call(null, t7, e6[1])), y2(e6[13].call(null, t7)), E2(t7, "SMUI:top-app-bar:icon-button:nav", e6[26])], x4 = true);
      }, p(e7, s4) {
        A5 && A5.p && 2097152 & s4[0] && f2(A5, E4, e7, e7[21], s4, null, null), I(t7, y3 = ht(C4, [(!_3 || 2293 & s4[0] && n4 !== (n4 = N2({[e7[2]]: true, "mdc-top-app-bar": true, "mdc-top-app-bar--short": e7[4] === "short", "mdc-top-app-bar--short-collapsed": e7[0], "mdc-top-app-bar--fixed": e7[4] === "fixed", "smui-top-app-bar--static": e7[4] === "static", "smui-top-app-bar--color-secondary": e7[5] === "secondary", "mdc-top-app-bar--prominent": e7[6], "mdc-top-app-bar--dense": e7[7], ...e7[11]}))) && {class: n4}, (!_3 || 4104 & s4[0] && I2 !== (I2 = Object.entries(e7[12]).map(_n).concat([e7[3]]).join(" "))) && {style: I2}, 32768 & s4[0] && e7[15]])), g3 && s2(g3.update) && 2 & s4[0] && g3.update.call(null, e7[1]);
      }, i(e7) {
        _3 || (ct(A5, e7), _3 = true);
      }, o(e7) {
        lt(A5, e7), _3 = false;
      }, d(n5) {
        n5 && w2(t7), A5 && A5.d(n5), e6[25](null), x4 = false, r2(S5);
      }};
    }
    var _n = ([e6, t7]) => `${e6}: ${t7};`;
    function xn2(e6, t7, n4) {
      const s4 = ["use", "class", "style", "variant", "color", "collapsed", "prominent", "dense", "scrollTarget", "getPropStore", "getElement"];
      let r5 = h2(t7, s4), {$$slots: a4 = {}, $$scope: o4} = t7;
      const c3 = x3(R2());
      let l3, d4, u3 = () => {
      }, {use: p3 = []} = t7, {class: m4 = ""} = t7, {style: f3 = ""} = t7, {variant: $2 = "standard"} = t7, {color: h3 = "primary"} = t7, {collapsed: _3 = u3} = t7, {prominent: S5 = false} = t7, {dense: C4 = false} = t7, {scrollTarget: y3 = null} = t7, T6 = {}, L6 = {};
      const v5 = _3 !== u3 && !!_3;
      let b5;
      _3 === u3 && (_3 = false);
      let w4 = At({variant: $2, prominent: S5, dense: C4}, (e7) => {
        n4(18, b5 = e7);
      }), O5 = null, k5 = $2;
      function M3() {
        return new ({static: mn2, short: hn2, fixed: $n2}[$2] || fn2)({hasClass: F6, addClass: D4, removeClass: R6, setStyle: N7, getTopAppBarHeight: () => l3.clientHeight, notifyNavigationIconClicked: () => k3(l3, "MDCTopAppBar:nav"), getViewportScrollY: () => y3 == null ? window.pageYOffset : y3.scrollTop, getTotalActionItems: () => l3.querySelectorAll(".mdc-top-app-bar__action-item").length});
      }
      function F6(e7) {
        return e7 in T6 ? T6[e7] : P7().classList.contains(e7);
      }
      function D4(e7) {
        T6[e7] || n4(11, T6[e7] = true, T6);
      }
      function R6(e7) {
        e7 in T6 && !T6[e7] || n4(11, T6[e7] = false, T6);
      }
      function N7(e7, t8) {
        L6[e7] != t8 && (t8 === "" || t8 == null ? (delete L6[e7], n4(12, L6), n4(20, k5), n4(4, $2), n4(9, d4)) : n4(12, L6[e7] = t8, L6));
      }
      function B5() {
        d4 && (d4.handleTargetScroll(), $2 === "short" && n4(0, _3 = d4.isCollapsed));
      }
      function P7() {
        return l3;
      }
      C2(() => (n4(9, d4 = M3()), d4.init(), () => {
        d4.destroy();
      }));
      return e6.$$set = (e7) => {
        t7 = e3(e3({}, t7), d2(e7)), n4(15, r5 = h2(t7, s4)), "use" in e7 && n4(1, p3 = e7.use), "class" in e7 && n4(2, m4 = e7.class), "style" in e7 && n4(3, f3 = e7.style), "variant" in e7 && n4(4, $2 = e7.variant), "color" in e7 && n4(5, h3 = e7.color), "collapsed" in e7 && n4(0, _3 = e7.collapsed), "prominent" in e7 && n4(6, S5 = e7.prominent), "dense" in e7 && n4(7, C4 = e7.dense), "scrollTarget" in e7 && n4(8, y3 = e7.scrollTarget), "$$scope" in e7 && n4(21, o4 = e7.$$scope);
      }, e6.$$.update = () => {
        262352 & e6.$$.dirty[0] && b5 && b5({variant: $2, prominent: S5, dense: C4}), 1049104 & e6.$$.dirty[0] && k5 !== $2 && d4 && (n4(20, k5 = $2), d4.destroy(), n4(11, T6 = {}), n4(12, L6 = {}), n4(9, d4 = M3()), d4.init()), 528 & e6.$$.dirty[0] && d4 && $2 === "short" && d4.setAlwaysCollapsed(v5), 524544 & e6.$$.dirty[0] && O5 !== y3 && (O5 && O5.removeEventListener("scroll", B5), y3 && y3.addEventListener("scroll", B5), n4(19, O5 = y3));
      }, [_3, p3, m4, f3, $2, h3, S5, C4, y3, d4, l3, T6, L6, c3, B5, r5, function() {
        return w4;
      }, P7, b5, O5, k5, o4, a4, () => $2 !== "short" && $2 !== "fixed" && d4 && d4.handleWindowResize(), () => y3 == null && B5(), function(e7) {
        J[e7 ? "unshift" : "push"](() => {
          l3 = e7, n4(10, l3);
        });
      }, () => d4 && d4.handleNavigationClick()];
    }
    var Sn = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, xn2, gn2, i2, {use: 1, class: 2, style: 3, variant: 4, color: 5, collapsed: 0, prominent: 6, dense: 7, scrollTarget: 8, getPropStore: 16, getElement: 17}, [-1, -1]);
      }
      get getPropStore() {
        return this.$$.ctx[16];
      }
      get getElement() {
        return this.$$.ctx[17];
      }
    };
    function En(e6) {
      let t7, n4, s4, i3, a4, c3, d4, u3, p3, m4, f3, I2;
      return {c() {
        t7 = x2("div"), n4 = x2("div"), s4 = x2("div"), i3 = x2("button"), i3.innerHTML = '<i class="material-icons" style="font-size: 48px;">menu</i>', a4 = P2(), c3 = x2("div"), d4 = P2(), u3 = x2("div"), p3 = x2("h1"), m4 = x2("label"), m4.textContent = "webflix", F5(i3, "background-color", "transparent"), F5(i3, "border", "none"), F5(i3, "color", "white"), L3(s4, "class", "flexCentered"), L3(n4, "class", "clickable mobileOnly"), L3(c3, "class", "desktopOnly="), L3(m4, "class", "svelte-1su2swo"), L3(u3, "class", "logo svelte-1su2swo"), L3(t7, "class", "headerContainer svelte-1su2swo");
      }, m(r5, $2) {
        b2(r5, t7, $2), $(t7, n4), $(n4, s4), $(s4, i3), $(t7, a4), $(t7, c3), $(t7, d4), $(t7, u3), $(u3, p3), $(p3, m4), f3 || (I2 = [E2(i3, "click", e6[1]), E2(m4, "click", e6[2])], f3 = true);
      }, p: t3, d(e7) {
        e7 && w2(t7), f3 = false, r2(I2);
      }};
    }
    function An(e6) {
      let t7, n4;
      return t7 = new Sn({props: {style: "--mdc-theme-primary: #151515;", variant: "static", $$slots: {default: [En]}, $$scope: {ctx: e6}}}), {c() {
        yt(t7.$$.fragment);
      }, m(e7, s4) {
        $t(t7, e7, s4), n4 = true;
      }, p(e7, [n5]) {
        const s4 = {};
        9 & n5 && (s4.$$scope = {dirty: n5, ctx: e7}), t7.$set(s4);
      }, i(e7) {
        n4 || (ct(t7.$$.fragment, e7), n4 = true);
      }, o(e7) {
        lt(t7.$$.fragment, e7), n4 = false;
      }, d(e7) {
        bt(t7, e7);
      }};
    }
    function Cn(e6, t7, n4) {
      let s4;
      l2(e6, se, (e7) => n4(0, s4 = e7));
      return [s4, function() {
        t2.update((e7) => !e7);
      }, () => s4("./")];
    }
    B2({class: "mdc-top-app-bar__row", component: _t2}), B2({class: "mdc-top-app-bar__title", component: v3});
    var yn = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Cn, An, i2, {});
      }
    };
    function Tn(e6) {
      let t7, n4, i3, a4, c3, u3, p3, h3, I2, g3, _3, x4, S5, E4, A5;
      i3 = new yn({}), u3 = new ln2({props: {desktop: true, open: true}}), I2 = new ln2({props: {open: e6[0]}}), I2.$on("click", e6[2]);
      const y3 = e6[4].default, L6 = u2(y3, e6, e6[3], null);
      return {c() {
        t7 = x2("div"), n4 = x2("div"), yt(i3.$$.fragment), a4 = P2(), c3 = x2("div"), yt(u3.$$.fragment), p3 = P2(), h3 = x2("div"), yt(I2.$$.fragment), g3 = P2(), _3 = x2("div"), x4 = x2("div"), L6 && L6.c(), L3(n4, "id", "header"), L3(n4, "class", "flexCentered bgPrimary svelte-am5asm"), L3(c3, "class", "desktopOnly sidebar svelte-am5asm"), L3(_3, "class", "page svelte-am5asm"), L3(h3, "id", "pageContent"), L3(h3, "class", "svelte-am5asm"), L3(t7, "class", "layout svelte-am5asm");
      }, m(s4, r5) {
        b2(s4, t7, r5), $(t7, n4), $t(i3, n4, null), $(t7, a4), $(t7, c3), $t(u3, c3, null), $(t7, p3), $(t7, h3), $t(I2, h3, null), $(h3, g3), $(h3, _3), $(_3, x4), L6 && L6.m(x4, null), S5 = true, E4 || (A5 = E2(x4, "click", e6[5]), E4 = true);
      }, p(e7, [t8]) {
        const n5 = {};
        1 & t8 && (n5.open = e7[0]), I2.$set(n5), L6 && L6.p && 8 & t8 && f2(L6, y3, e7, e7[3], t8, null, null);
      }, i(e7) {
        S5 || (ct(i3.$$.fragment, e7), ct(u3.$$.fragment, e7), ct(I2.$$.fragment, e7), ct(L6, e7), S5 = true);
      }, o(e7) {
        lt(i3.$$.fragment, e7), lt(u3.$$.fragment, e7), lt(I2.$$.fragment, e7), lt(L6, e7), S5 = false;
      }, d(e7) {
        e7 && w2(t7), bt(i3), bt(u3), bt(I2), L6 && L6.d(e7), E4 = false, A5();
      }};
    }
    function Ln(e6, t7, n4) {
      let {$$slots: s4 = {}, $$scope: i3} = t7, r5 = false;
      m2.subscribe((e7) => {
      }), t2.subscribe((e7) => {
        n4(0, r5 = e7);
      });
      const a4 = () => {
        r5 && t2.update((e7) => false);
      };
      return e6.$$set = (e7) => {
        "$$scope" in e7 && n4(3, i3 = e7.$$scope);
      }, [r5, a4, function() {
        n4(0, r5 = !r5);
      }, i3, s4, () => a4()];
    }
    var layout_aad02031_default = class extends _t {
      constructor(e6) {
        super(), wt(this, e6, Ln, Tn, i2, {});
      }
    };
    var layout_aad02031_default2 = layout_aad02031_default;
  });

  // ../../dist/build/main.js
  function t3() {
  }
  function e3(t7, e6) {
    for (const n4 in e6)
      t7[n4] = e6[n4];
    return t7;
  }
  function n3(t7) {
    return t7();
  }
  function o3() {
    return Object.create(null);
  }
  function r2(t7) {
    t7.forEach(n3);
  }
  function s2(t7) {
    return typeof t7 == "function";
  }
  function i2(t7, e6) {
    return t7 != t7 ? e6 == e6 : t7 !== e6 || t7 && typeof t7 == "object" || typeof t7 == "function";
  }
  function a3(e6, ...n4) {
    if (e6 == null)
      return t3;
    const o4 = e6.subscribe(...n4);
    return o4.unsubscribe ? () => o4.unsubscribe() : o4;
  }
  function c2(t7) {
    let e6;
    return a3(t7, (t8) => e6 = t8)(), e6;
  }
  function l2(t7, e6, n4) {
    t7.$$.on_destroy.push(a3(e6, n4));
  }
  function u2(t7, e6, n4, o4) {
    if (t7) {
      const r5 = p2(t7, e6, n4, o4);
      return t7[0](r5);
    }
  }
  function p2(t7, n4, o4, r5) {
    return t7[1] && r5 ? e3(o4.ctx.slice(), t7[1](r5(n4))) : o4.ctx;
  }
  function f2(t7, e6, n4, o4, r5, s4, i3) {
    const a4 = function(t8, e7, n5, o5) {
      if (t8[2] && o5) {
        const r6 = t8[2](o5(n5));
        if (e7.dirty === void 0)
          return r6;
        if (typeof r6 == "object") {
          const t9 = [], n6 = Math.max(e7.dirty.length, r6.length);
          for (let o6 = 0; o6 < n6; o6 += 1)
            t9[o6] = e7.dirty[o6] | r6[o6];
          return t9;
        }
        return e7.dirty | r6;
      }
      return e7.dirty;
    }(e6, o4, r5, s4);
    if (a4) {
      const r6 = p2(e6, n4, o4, i3);
      t7.p(r6, a4);
    }
  }
  function d2(t7) {
    const e6 = {};
    for (const n4 in t7)
      n4[0] !== "$" && (e6[n4] = t7[n4]);
    return e6;
  }
  function h2(t7, e6) {
    const n4 = {};
    e6 = new Set(e6);
    for (const o4 in t7)
      e6.has(o4) || o4[0] === "$" || (n4[o4] = t7[o4]);
    return n4;
  }
  function m3(t7) {
    const e6 = {};
    for (const n4 in t7)
      e6[n4] = true;
    return e6;
  }
  function g2(t7, e6, n4 = e6) {
    return t7.set(n4), e6;
  }
  function y2(e6) {
    return e6 && s2(e6.destroy) ? e6.destroy : t3;
  }
  function $(t7, e6) {
    t7.appendChild(e6);
  }
  function b2(t7, e6, n4) {
    t7.insertBefore(e6, n4 || null);
  }
  function w2(t7) {
    t7.parentNode.removeChild(t7);
  }
  function _2(t7, e6) {
    for (let n4 = 0; n4 < t7.length; n4 += 1)
      t7[n4] && t7[n4].d(e6);
  }
  function x2(t7) {
    return document.createElement(t7);
  }
  function v2(t7) {
    return document.createTextNode(t7);
  }
  function P2() {
    return v2(" ");
  }
  function k2() {
    return v2("");
  }
  function E2(t7, e6, n4, o4) {
    return t7.addEventListener(e6, n4, o4), () => t7.removeEventListener(e6, n4, o4);
  }
  function j2(t7) {
    return function(e6) {
      return e6.preventDefault(), t7.call(this, e6);
    };
  }
  function O2(t7) {
    return function(e6) {
      return e6.stopPropagation(), t7.call(this, e6);
    };
  }
  function L3(t7, e6, n4) {
    n4 == null ? t7.removeAttribute(e6) : t7.getAttribute(e6) !== n4 && t7.setAttribute(e6, n4);
  }
  function I(t7, e6) {
    const n4 = Object.getOwnPropertyDescriptors(t7.__proto__);
    for (const o4 in e6)
      e6[o4] == null ? t7.removeAttribute(o4) : o4 === "style" ? t7.style.cssText = e6[o4] : o4 === "__value" ? t7.value = t7[o4] = e6[o4] : n4[o4] && n4[o4].set ? t7[o4] = e6[o4] : L3(t7, o4, e6[o4]);
  }
  function S4(t7, e6, n4) {
    e6 in t7 ? t7[e6] = n4 : L3(t7, e6, n4);
  }
  function T3(t7, e6) {
    e6 = "" + e6, t7.wholeText !== e6 && (t7.data = e6);
  }
  function N5(t7, e6) {
    t7.value = e6 == null ? "" : e6;
  }
  function F5(t7, e6, n4, o4) {
    t7.style.setProperty(e6, n4, o4 ? "important" : "");
  }
  var A4;
  function M2(t7) {
    A4 = t7;
  }
  function R2() {
    if (!A4)
      throw new Error("Function called outside component initialization");
    return A4;
  }
  function C2(t7) {
    R2().$$.on_mount.push(t7);
  }
  function q2(t7) {
    R2().$$.on_destroy.push(t7);
  }
  function B4() {
    const t7 = R2();
    return (e6, n4) => {
      const o4 = t7.$$.callbacks[e6];
      if (o4) {
        const r5 = function(t8, e7) {
          const n5 = document.createEvent("CustomEvent");
          return n5.initCustomEvent(t8, false, false, e7), n5;
        }(e6, n4);
        o4.slice().forEach((e7) => {
          e7.call(t7, r5);
        });
      }
    };
  }
  function U2(t7, e6) {
    R2().$$.context.set(t7, e6);
  }
  function D2(t7) {
    return R2().$$.context.get(t7);
  }
  function H2(t7, e6) {
    const n4 = t7.$$.callbacks[e6.type];
    n4 && n4.slice().forEach((t8) => t8(e6));
  }
  var K4 = [];
  var J = [];
  var W5 = [];
  var z4 = [];
  var G4 = Promise.resolve();
  var Q4 = false;
  function V3() {
    Q4 || (Q4 = true, G4.then(nt2));
  }
  function Z3() {
    return V3(), G4;
  }
  function X3(t7) {
    W5.push(t7);
  }
  function Y3(t7) {
    z4.push(t7);
  }
  var tt3 = false;
  var et2 = new Set();
  function nt2() {
    if (!tt3) {
      tt3 = true;
      do {
        for (let t7 = 0; t7 < K4.length; t7 += 1) {
          const e6 = K4[t7];
          M2(e6), ot3(e6.$$);
        }
        for (M2(null), K4.length = 0; J.length; )
          J.pop()();
        for (let t7 = 0; t7 < W5.length; t7 += 1) {
          const e6 = W5[t7];
          et2.has(e6) || (et2.add(e6), e6());
        }
        W5.length = 0;
      } while (K4.length);
      for (; z4.length; )
        z4.pop()();
      Q4 = false, tt3 = false, et2.clear();
    }
  }
  function ot3(t7) {
    if (t7.fragment !== null) {
      t7.update(), r2(t7.before_update);
      const e6 = t7.dirty;
      t7.dirty = [-1], t7.fragment && t7.fragment.p(t7.ctx, e6), t7.after_update.forEach(X3);
    }
  }
  var rt2 = new Set();
  var st3;
  function it() {
    st3 = {r: 0, c: [], p: st3};
  }
  function at() {
    st3.r || r2(st3.c), st3 = st3.p;
  }
  function ct(t7, e6) {
    t7 && t7.i && (rt2.delete(t7), t7.i(e6));
  }
  function lt(t7, e6, n4, o4) {
    if (t7 && t7.o) {
      if (rt2.has(t7))
        return;
      rt2.add(t7), st3.c.push(() => {
        rt2.delete(t7), o4 && (n4 && t7.d(1), o4());
      }), t7.o(e6);
    }
  }
  var ut3 = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
  function pt3(t7, e6) {
    t7.d(1), e6.delete(t7.key);
  }
  function ft3(t7, e6) {
    lt(t7, 1, 1, () => {
      e6.delete(t7.key);
    });
  }
  function dt3(t7, e6, n4, o4, r5, s4, i3, a4, c3, l3, u3, p3) {
    let f3 = t7.length, d4 = s4.length, h3 = f3;
    const m4 = {};
    for (; h3--; )
      m4[t7[h3].key] = h3;
    const g3 = [], y3 = new Map(), $2 = new Map();
    for (h3 = d4; h3--; ) {
      const t8 = p3(r5, s4, h3), a5 = n4(t8);
      let c4 = i3.get(a5);
      c4 ? o4 && c4.p(t8, e6) : (c4 = l3(a5, t8), c4.c()), y3.set(a5, g3[h3] = c4), a5 in m4 && $2.set(a5, Math.abs(h3 - m4[a5]));
    }
    const b5 = new Set(), w4 = new Set();
    function _3(t8) {
      ct(t8, 1), t8.m(a4, u3), i3.set(t8.key, t8), u3 = t8.first, d4--;
    }
    for (; f3 && d4; ) {
      const e7 = g3[d4 - 1], n5 = t7[f3 - 1], o5 = e7.key, r6 = n5.key;
      e7 === n5 ? (u3 = e7.first, f3--, d4--) : y3.has(r6) ? !i3.has(o5) || b5.has(o5) ? _3(e7) : w4.has(r6) ? f3-- : $2.get(o5) > $2.get(r6) ? (w4.add(o5), _3(e7)) : (b5.add(r6), f3--) : (c3(n5, i3), f3--);
    }
    for (; f3--; ) {
      const e7 = t7[f3];
      y3.has(e7.key) || c3(e7, i3);
    }
    for (; d4; )
      _3(g3[d4 - 1]);
    return g3;
  }
  function ht(t7, e6) {
    const n4 = {}, o4 = {}, r5 = {$$scope: 1};
    let s4 = t7.length;
    for (; s4--; ) {
      const i3 = t7[s4], a4 = e6[s4];
      if (a4) {
        for (const t8 in i3)
          t8 in a4 || (o4[t8] = 1);
        for (const t8 in a4)
          r5[t8] || (n4[t8] = a4[t8], r5[t8] = 1);
        t7[s4] = a4;
      } else
        for (const t8 in i3)
          r5[t8] = 1;
    }
    for (const t8 in o4)
      t8 in n4 || (n4[t8] = void 0);
    return n4;
  }
  function mt(t7) {
    return typeof t7 == "object" && t7 !== null ? t7 : {};
  }
  function gt(t7, e6, n4) {
    const o4 = t7.$$.props[e6];
    o4 !== void 0 && (t7.$$.bound[o4] = n4, n4(t7.$$.ctx[o4]));
  }
  function yt(t7) {
    t7 && t7.c();
  }
  function $t(t7, e6, o4, i3) {
    const {fragment: a4, on_mount: c3, on_destroy: l3, after_update: u3} = t7.$$;
    a4 && a4.m(e6, o4), i3 || X3(() => {
      const e7 = c3.map(n3).filter(s2);
      l3 ? l3.push(...e7) : r2(e7), t7.$$.on_mount = [];
    }), u3.forEach(X3);
  }
  function bt(t7, e6) {
    const n4 = t7.$$;
    n4.fragment !== null && (r2(n4.on_destroy), n4.fragment && n4.fragment.d(e6), n4.on_destroy = n4.fragment = null, n4.ctx = []);
  }
  function wt(e6, n4, s4, i3, a4, c3, l3 = [-1]) {
    const u3 = A4;
    M2(e6);
    const p3 = e6.$$ = {fragment: null, ctx: null, props: c3, update: t3, not_equal: a4, bound: o3(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(u3 ? u3.$$.context : n4.context || []), callbacks: o3(), dirty: l3, skip_bound: false};
    let f3 = false;
    if (p3.ctx = s4 ? s4(e6, n4.props || {}, (t7, n5, ...o4) => {
      const r5 = o4.length ? o4[0] : n5;
      return p3.ctx && a4(p3.ctx[t7], p3.ctx[t7] = r5) && (!p3.skip_bound && p3.bound[t7] && p3.bound[t7](r5), f3 && function(t8, e7) {
        t8.$$.dirty[0] === -1 && (K4.push(t8), V3(), t8.$$.dirty.fill(0)), t8.$$.dirty[e7 / 31 | 0] |= 1 << e7 % 31;
      }(e6, t7)), n5;
    }) : [], p3.update(), f3 = true, r2(p3.before_update), p3.fragment = !!i3 && i3(p3.ctx), n4.target) {
      if (n4.hydrate) {
        const t7 = function(t8) {
          return Array.from(t8.childNodes);
        }(n4.target);
        p3.fragment && p3.fragment.l(t7), t7.forEach(w2);
      } else
        p3.fragment && p3.fragment.c();
      n4.intro && ct(e6.$$.fragment), $t(e6, n4.target, n4.anchor, n4.customElement), nt2();
    }
    M2(u3);
  }
  var _t = class {
    $destroy() {
      bt(this, 1), this.$destroy = t3;
    }
    $on(t7, e6) {
      const n4 = this.$$.callbacks[t7] || (this.$$.callbacks[t7] = []);
      return n4.push(e6), () => {
        const t8 = n4.indexOf(e6);
        t8 !== -1 && n4.splice(t8, 1);
      };
    }
    $set(t7) {
      var e6;
      this.$$set && (e6 = t7, Object.keys(e6).length !== 0) && (this.$$.skip_bound = true, this.$$set(t7), this.$$.skip_bound = false);
    }
  };
  var xt2 = {queryHandler: {parse: (t7) => {
    return e6 = new URLSearchParams(t7), [...e6].reduce((t8, [e7, n4]) => (t8[e7] = n4, t8), {});
    var e6;
  }, stringify: (t7) => "?" + new URLSearchParams(t7).toString()}, urlTransform: {apply: (t7) => t7, remove: (t7) => t7}, useHash: false};
  var vt3 = RegExp(/\:([^/()]+)/g);
  function Pt2(t7, e6) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    e6 && kt2(t7), function() {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      const {hash: t8} = window.location;
      if (t8) {
        if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t8.substring(1))) {
          const e7 = document.querySelector(t8);
          e7 && e7.scrollIntoView();
        }
      }
    }();
  }
  function kt2(t7) {
    t7 && t7.scrollTo && t7.dataset.routify !== "scroll-lock" && t7.dataset["routify-scroll"] !== "lock" && (t7.style["scroll-behavior"] = "auto", t7.scrollTo({top: 0, behavior: "auto"}), t7.style["scroll-behavior"] = "", kt2(t7.parentElement));
  }
  var Et2 = (t7) => {
    const e6 = [];
    let n4;
    for (; n4 = vt3.exec(t7); )
      e6.push(n4[1]);
    return e6;
  };
  function jt2(t7, e6) {
    jt2._console = jt2._console || {log: console.log, warn: console.warn};
    const {_console: n4} = jt2, o4 = t7.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t7.component.shortPath.split("/").pop()).replace(/^./, (t8) => t8.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r5 = [`<${o4}> received an unexpected slot "default".`, `<${o4}> was created with unknown prop 'scoped'`, `<${o4}> was created with unknown prop 'scopedSync'`];
    for (const t8 of ["log", "warn"])
      console[t8] = (...e7) => {
        r5.includes(e7[0]) || n4[t8](...e7);
      }, e6().then(() => {
        console[t8] = n4[t8];
      });
  }
  function Ot2() {
    let t7 = window.location.pathname + window.location.search + window.location.hash;
    const {url: e6, options: n4} = function(t8) {
      const [e7, n5] = t8.split("__[[routify_url_options]]__"), o4 = JSON.parse(decodeURIComponent(n5 || "") || "{}");
      return window.routify = window.routify || {}, window.routify.prefetched = o4.prefetch, {url: e7, options: o4};
    }(t7);
    return {...Lt2(e6), options: n4};
  }
  function Lt2(t7) {
    xt2.useHash && (t7 = t7.replace(/.*#(.+)/, "$1"));
    const e6 = t7.startsWith("/") ? window.location.origin : void 0, n4 = new URL(t7, e6);
    return {url: n4, fullpath: n4.pathname + n4.search + n4.hash};
  }
  function It2(t7, e6, n4) {
    const o4 = xt2.useHash ? "#" : "";
    let r5;
    return r5 = function(t8, e7, n5) {
      const o5 = Object.assign({}, n5, e7), r6 = function(t9, e8) {
        if (!xt2.queryHandler)
          return "";
        const n6 = Et2(t9), o6 = {};
        e8 && Object.entries(e8).forEach(([t10, e9]) => {
          n6.includes(t10) || (o6[t10] = e9);
        });
        return xt2.queryHandler.stringify(o6).replace(/\?$/, "");
      }(t8, e7);
      for (const [e8, n6] of Object.entries(o5))
        t8 = t8.replace(`:${e8}`, n6);
      return `${t8}${r6}`;
    }(t7, e6, n4), r5 = xt2.urlTransform.apply(r5), r5 = o4 + r5, r5;
  }
  function St2(t7) {
    let e6;
    const n4 = t7[2].default, o4 = u2(n4, t7, t7[1], null);
    return {c() {
      o4 && o4.c();
    }, m(t8, n5) {
      o4 && o4.m(t8, n5), e6 = true;
    }, p(t8, [e7]) {
      o4 && o4.p && 2 & e7 && f2(o4, n4, t8, t8[1], e7, null, null);
    }, i(t8) {
      e6 || (ct(o4, t8), e6 = true);
    }, o(t8) {
      lt(o4, t8), e6 = false;
    }, d(t8) {
      o4 && o4.d(t8);
    }};
  }
  function Tt2(t7, e6, n4) {
    let {$$slots: o4 = {}, $$scope: r5} = e6, {scoped: s4 = {}} = e6;
    return t7.$$set = (t8) => {
      "scoped" in t8 && n4(0, s4 = t8.scoped), "$$scope" in t8 && n4(1, r5 = t8.$$scope);
    }, [s4, r5, o4];
  }
  var Nt2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, Tt2, St2, i2, {scoped: 0});
    }
  };
  var Ft2 = [];
  function At(t7, e6) {
    return {subscribe: Mt(t7, e6).subscribe};
  }
  function Mt(e6, n4 = t3) {
    let o4;
    const r5 = [];
    function s4(t7) {
      if (i2(e6, t7) && (e6 = t7, o4)) {
        const t8 = !Ft2.length;
        for (let t9 = 0; t9 < r5.length; t9 += 1) {
          const n5 = r5[t9];
          n5[1](), Ft2.push(n5, e6);
        }
        if (t8) {
          for (let t9 = 0; t9 < Ft2.length; t9 += 2)
            Ft2[t9][0](Ft2[t9 + 1]);
          Ft2.length = 0;
        }
      }
    }
    return {set: s4, update: function(t7) {
      s4(t7(e6));
    }, subscribe: function(i3, a4 = t3) {
      const c3 = [i3, a4];
      return r5.push(c3), r5.length === 1 && (o4 = n4(s4) || t3), i3(e6), () => {
        const t7 = r5.indexOf(c3);
        t7 !== -1 && r5.splice(t7, 1), r5.length === 0 && (o4(), o4 = null);
      };
    }};
  }
  function Rt2(e6, n4, o4) {
    const i3 = !Array.isArray(e6), c3 = i3 ? [e6] : e6, l3 = n4.length < 2;
    return At(o4, (e7) => {
      let o5 = false;
      const u3 = [];
      let p3 = 0, f3 = t3;
      const d4 = () => {
        if (p3)
          return;
        f3();
        const o6 = n4(i3 ? u3[0] : u3, e7);
        l3 ? e7(o6) : f3 = s2(o6) ? o6 : t3;
      }, h3 = c3.map((t7, e8) => a3(t7, (t8) => {
        u3[e8] = t8, p3 &= ~(1 << e8), o5 && d4();
      }, () => {
        p3 |= 1 << e8;
      }));
      return o5 = true, d4(), function() {
        r2(h3), f3();
      };
    });
  }
  window.routify = window.routify || {};
  var Ct2 = Mt(null);
  var qt2 = Mt([]);
  qt2.subscribe((t7) => window.routify.routes = t7);
  var Bt2 = Mt({component: {params: {}}});
  var Ut2 = Mt(null);
  var Dt2 = Mt(true);
  function Ht2(t7, e6 = false) {
    t7 = xt2.urlTransform.remove(t7);
    let {pathname: n4, search: o4} = Lt2(t7).url;
    const r5 = c2(qt2), s4 = r5.find((t8) => n4 === t8.meta.name) || r5.find((t8) => n4.match(t8.regex));
    if (!s4)
      throw new Error(`Route could not be found for "${n4}".`);
    const i3 = e6 ? Object.create(s4) : s4, {route: a4, redirectPath: l3, rewritePath: u3} = Kt2(i3, r5);
    return u3 && ({pathname: n4, search: o4} = Lt2(It2(u3, a4.params)).url, l3 && (a4.redirectTo = It2(l3, a4.params || {}))), xt2.queryHandler && (a4.params = Object.assign({}, xt2.queryHandler.parse(o4))), function(t8, e7) {
      if (t8.paramKeys) {
        const n5 = function(t9) {
          const e8 = [];
          return t9.forEach((t10) => {
            e8[t10.path.split("/").filter(Boolean).length - 1] = t10;
          }), e8;
        }(t8.layouts), o5 = e7.split("/").filter(Boolean);
        (function(t9) {
          return t9.split("/").filter(Boolean).map((t10) => t10.match(/\:(.+)/)).map((t10) => t10 && t10[1]);
        })(t8.path).forEach((e8, r6) => {
          e8 && (t8.params[e8] = o5[r6], n5[r6] ? n5[r6].param = {[e8]: o5[r6]} : t8.param = {[e8]: o5[r6]});
        });
      }
    }(a4, n4), a4.leftover = t7.replace(new RegExp(a4.regex), ""), a4;
  }
  function Kt2(t7, e6, n4, o4) {
    const {redirect: r5, rewrite: s4} = t7.meta;
    if (r5 || s4) {
      n4 = r5 ? r5.path || r5 : n4, o4 = s4 ? s4.path || s4 : n4;
      const i3 = r5 && r5.params, a4 = s4 && s4.params, c3 = e6.find((t8) => t8.path === o4);
      return c3 === t7 && console.error(`${o4} is redirecting to itself`), c3 || console.error(`${t7.path} is redirecting to non-existent path: ${o4}`), (i3 || a4) && (c3.params = Object.assign({}, c3.params, i3, a4)), Kt2(c3, e6, n4, o4);
    }
    return {route: t7, redirectPath: n4, rewritePath: o4};
  }
  function Jt2(t7, e6, n4) {
    const o4 = t7.slice();
    return o4[1] = e6[n4], o4;
  }
  function Wt2(t7, e6) {
    let n4, o4;
    return {key: t7, first: null, c() {
      n4 = x2("iframe"), n4.src !== (o4 = e6[1].url) && L3(n4, "src", o4), L3(n4, "frameborder", "0"), L3(n4, "title", "routify prefetcher"), this.first = n4;
    }, m(t8, e7) {
      b2(t8, n4, e7);
    }, p(t8, r5) {
      e6 = t8, 1 & r5 && n4.src !== (o4 = e6[1].url) && L3(n4, "src", o4);
    }, d(t8) {
      t8 && w2(n4);
    }};
  }
  function zt2(e6) {
    let n4, o4 = [], r5 = new Map(), s4 = e6[0];
    const i3 = (t7) => t7[1].options.prefetch;
    for (let t7 = 0; t7 < s4.length; t7 += 1) {
      let n5 = Jt2(e6, s4, t7), a4 = i3(n5);
      r5.set(a4, o4[t7] = Wt2(a4, n5));
    }
    return {c() {
      n4 = x2("div");
      for (let t7 = 0; t7 < o4.length; t7 += 1)
        o4[t7].c();
      L3(n4, "id", "__routify_iframes"), F5(n4, "display", "none");
    }, m(t7, e7) {
      b2(t7, n4, e7);
      for (let t8 = 0; t8 < o4.length; t8 += 1)
        o4[t8].m(n4, null);
    }, p(t7, [e7]) {
      1 & e7 && (s4 = t7[0], o4 = dt3(o4, e7, i3, 1, t7, s4, r5, n4, pt3, Wt2, null, Jt2));
    }, i: t3, o: t3, d(t7) {
      t7 && w2(n4);
      for (let t8 = 0; t8 < o4.length; t8 += 1)
        o4[t8].d();
    }};
  }
  var Gt2 = Mt([]);
  var Qt2 = Rt2(Gt2, (t7) => t7.slice(0, 2));
  function Vt2(t7) {
    const e6 = t7.data ? t7.data.prefetchId : t7;
    if (!e6)
      return null;
    const n4 = c2(Gt2).find((t8) => t8 && t8.options.prefetch == e6);
    if (n4) {
      const {gracePeriod: t8} = n4.options, o4 = new Promise((e7) => setTimeout(e7, t8)), r5 = new Promise((e7) => {
        window.requestIdleCallback ? window.requestIdleCallback(e7) : setTimeout(e7, t8 + 1e3);
      });
      Promise.all([o4, r5]).then(() => {
        Gt2.update((t9) => t9.filter((t10) => t10.options.prefetch != e6));
      });
    }
  }
  function Zt2(t7, e6, n4) {
    let o4;
    return l2(t7, Qt2, (t8) => n4(0, o4 = t8)), [o4];
  }
  Qt2.subscribe((t7) => t7.forEach(({options: t8}) => {
    setTimeout(() => Vt2(t8.prefetch), t8.timeout);
  })), addEventListener("message", Vt2, false);
  var Xt2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, Zt2, zt2, i2, {});
    }
  };
  function Yt2() {
    return D2("routify") || Bt2;
  }
  var te2 = {_hooks: [(t7) => Dt2.set(false)], subscribe: ne2};
  var ee2 = {_hooks: [], subscribe: ne2};
  function ne2(t7) {
    const e6 = this._hooks, n4 = e6.length;
    return t7((t8) => {
      e6[n4] = t8;
    }), () => delete e6[n4];
  }
  var oe2 = {subscribe: (t7) => Rt2(Yt2(), (t8) => t8.route.params).subscribe(t7)};
  var re2 = {subscribe(t7) {
    const e6 = Yt2(), {route: n4, routes: o4} = c2(e6);
    return Rt2(e6, (t8) => {
      return e7 = t8, r5 = n4, s4 = o4, function(t9, n5 = {}, o5) {
        const {component: i3} = e7, a4 = Object.assign({}, r5.params, i3.params);
        let c3 = t9 && t9.nodeType && t9;
        c3 && (t9 = t9.getAttribute("href")), t9 = t9 ? p3(t9) : i3.shortPath;
        const l3 = s4.find((e8) => [e8.shortPath || "/", e8.path].includes(t9));
        if (l3 && l3.meta.preload === "proximity" && window.requestIdleCallback) {
          const t10 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l3.api.preload());
          }, t10);
        }
        o5 && o5.strict !== false || (t9 = t9.replace(/index$/, ""));
        let u3 = It2(t9, n5, a4);
        return c3 ? (c3.href = u3, {update(e8) {
          c3.href = It2(t9, e8, a4);
        }}) : u3;
        function p3(t10) {
          if (t10.match(/^\.\.?\//)) {
            let [, e8, n6] = t10.match(/^([\.\/]+)(.*)/), o6 = i3.path.replace(/\/$/, "");
            const r6 = e8.match(/\.\.\//g) || [];
            i3.isPage && r6.push(null), r6.forEach(() => o6 = o6.replace(/\/[^\/]+\/?$/, "")), t10 = (t10 = `${o6}/${n6}`.replace(/\/$/, "")) || "/";
          } else if (t10.match(/^\//))
            ;
          else {
            const e8 = s4.find((e9) => e9.meta.name === t10);
            e8 && (t10 = e8.shortPath);
          }
          return t10;
        }
      };
      var e7, r5, s4;
    }).subscribe(t7);
  }};
  var se = {subscribe(t7) {
    const e6 = D2("routifyupdatepage");
    return Rt2(re2, (t8) => function(n4, o4, r5, s4) {
      const i3 = t8(n4, o4);
      r5 ? e6(i3, s4) : history.pushState({}, null, i3);
    }).subscribe(t7);
  }};
  var ie2 = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t7, e6) => [t7, (ie2.getLongest(ie2.templates, t7) || ((t8) => t8))(e6)]}, {name: "createMeta", condition: () => true, action(t7, e6) {
    ie2.writeMeta(t7, e6);
  }}, {name: "createOG", condition: (t7) => !t7.match(":"), action(t7, e6) {
    ie2.writeMeta(`og:${t7}`, e6);
  }}, {name: "createTitle", condition: (t7) => t7 === "title", action(t7, e6) {
    document.title = e6;
  }}], getLongest(t7, e6) {
    const n4 = t7[e6];
    if (n4) {
      const o4 = c2(Ct2).path;
      return n4[Object.keys(t7[e6]).filter((t8) => o4.includes(t8)).sort((t8, e7) => e7.length - t8.length)[0]];
    }
  }, writeMeta(t7, e6) {
    const n4 = document.getElementsByTagName("head")[0], o4 = t7.match(/(.+)\:/), r5 = o4 && o4[1] || "plain", {propField: s4, valueField: i3} = ae2.services[r5] || ae2.services.plain, a4 = document.querySelector(`meta[${s4}='${t7}']`);
    a4 && a4.remove();
    const c3 = document.createElement("meta");
    c3.setAttribute(s4, t7), c3.setAttribute(i3, e6), c3.setAttribute("data-origin", "routify"), n4.appendChild(c3);
  }, set(t7, e6) {
    ie2.plugins.forEach((n4) => {
      n4.condition(t7, e6) && ([t7, e6] = n4.action(t7, e6) || [t7, e6]);
    });
  }, clear() {
    const t7 = document.querySelector("meta");
    t7 && t7.remove();
  }, template(t7, e6) {
    const n4 = ie2.getOrigin();
    ie2.templates[t7] = ie2.templates[t7] || {}, ie2.templates[t7][n4] = e6;
  }, update() {
    Object.keys(ie2.props).forEach((t7) => {
      let e6 = ie2.getLongest(ie2.props, t7);
      ie2.plugins.forEach((n4) => {
        n4.condition(t7, e6) && ([t7, e6] = n4.action(t7, e6) || [t7, e6]);
      });
    });
  }, batchedUpdate() {
    ie2._pendingUpdate || (ie2._pendingUpdate = true, setTimeout(() => {
      ie2._pendingUpdate = false, this.update();
    }));
  }, _updateQueued: false, getOrigin() {
    const t7 = Yt2();
    return t7 && c2(t7).path || "/";
  }, _pendingUpdate: false};
  var ae2 = new Proxy(ie2, {set(t7, e6, n4, o4) {
    const {props: r5, getOrigin: s4} = t7;
    return Reflect.has(t7, e6) ? Reflect.set(t7, e6, n4, o4) : (r5[e6] = r5[e6] || {}, r5[e6][s4()] = n4), window.routify.appLoaded && t7.batchedUpdate(), true;
  }});
  function ce2(t7, e6, n4) {
    const o4 = t7.slice();
    return o4[21] = e6[n4].component, o4[22] = e6[n4].componentFile, o4[2] = e6[n4].decorator, o4[1] = e6[n4].nodes, o4;
  }
  function le2(t7) {
    let e6, n4, o4 = [], r5 = new Map(), s4 = [t7[4]];
    const i3 = (t8) => t8[6];
    for (let e7 = 0; e7 < 1; e7 += 1) {
      let n5 = ce2(t7, s4, e7), a4 = i3(n5);
      r5.set(a4, o4[e7] = de2(a4, n5));
    }
    return {c() {
      for (let t8 = 0; t8 < 1; t8 += 1)
        o4[t8].c();
      e6 = k2();
    }, m(t8, r6) {
      for (let e7 = 0; e7 < 1; e7 += 1)
        o4[e7].m(t8, r6);
      b2(t8, e6, r6), n4 = true;
    }, p(t8, n5) {
      33554557 & n5 && (s4 = [t8[4]], it(), o4 = dt3(o4, n5, i3, 1, t8, s4, r5, e6.parentNode, ft3, de2, e6, ce2), at());
    }, i(t8) {
      if (!n4) {
        for (let t9 = 0; t9 < 1; t9 += 1)
          ct(o4[t9]);
        n4 = true;
      }
    }, o(t8) {
      for (let t9 = 0; t9 < 1; t9 += 1)
        lt(o4[t9]);
      n4 = false;
    }, d(t8) {
      for (let e7 = 0; e7 < 1; e7 += 1)
        o4[e7].d(t8);
      t8 && w2(e6);
    }};
  }
  function ue2(t7) {
    let e6, n4;
    return e6 = new ge2({props: {decorator: t7[2], nodes: t7[1], scoped: {...t7[0], ...t7[25]}}}), {c() {
      yt(e6.$$.fragment);
    }, m(t8, o4) {
      $t(e6, t8, o4), n4 = true;
    }, p(t8, n5) {
      const o4 = {};
      4 & n5 && (o4.decorator = t8[2]), 16 & n5 && (o4.nodes = t8[1]), 33554433 & n5 && (o4.scoped = {...t8[0], ...t8[25]}), e6.$set(o4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(t8) {
      bt(e6, t8);
    }};
  }
  function pe2(t7) {
    let e6, n4, o4 = t7[21] && t7[1].length && ue2(t7);
    return {c() {
      o4 && o4.c(), e6 = k2();
    }, m(t8, r5) {
      o4 && o4.m(t8, r5), b2(t8, e6, r5), n4 = true;
    }, p(t8, n5) {
      t8[21] && t8[1].length ? o4 ? (o4.p(t8, n5), 16 & n5 && ct(o4, 1)) : (o4 = ue2(t8), o4.c(), ct(o4, 1), o4.m(e6.parentNode, e6)) : o4 && (it(), lt(o4, 1, 1, () => {
        o4 = null;
      }), at());
    }, i(t8) {
      n4 || (ct(o4), n4 = true);
    }, o(t8) {
      lt(o4), n4 = false;
    }, d(t8) {
      o4 && o4.d(t8), t8 && w2(e6);
    }};
  }
  function fe2(t7) {
    let n4, o4, r5;
    const s4 = [{scoped: t7[0]}, {scopedSync: t7[5]}, t7[3].param || {}];
    var i3 = t7[22];
    function a4(t8) {
      let n5 = {$$slots: {default: [pe2, ({scoped: t9, decorator: e6}) => ({25: t9, 2: e6}), ({scoped: t9, decorator: e6}) => (t9 ? 33554432 : 0) | (e6 ? 4 : 0)]}, $$scope: {ctx: t8}};
      for (let t9 = 0; t9 < s4.length; t9 += 1)
        n5 = e3(n5, s4[t9]);
      return {props: n5};
    }
    return i3 && (n4 = new i3(a4(t7))), {c() {
      n4 && yt(n4.$$.fragment), o4 = P2();
    }, m(t8, e6) {
      n4 && $t(n4, t8, e6), b2(t8, o4, e6), r5 = true;
    }, p(t8, e6) {
      const r6 = 41 & e6 ? ht(s4, [1 & e6 && {scoped: t8[0]}, 32 & e6 && {scopedSync: t8[5]}, 8 & e6 && mt(t8[3].param || {})]) : {};
      if (100663317 & e6 && (r6.$$scope = {dirty: e6, ctx: t8}), i3 !== (i3 = t8[22])) {
        if (n4) {
          it();
          const t9 = n4;
          lt(t9.$$.fragment, 1, 0, () => {
            bt(t9, 1);
          }), at();
        }
        i3 ? (n4 = new i3(a4(t8)), yt(n4.$$.fragment), ct(n4.$$.fragment, 1), $t(n4, o4.parentNode, o4)) : n4 = null;
      } else
        i3 && n4.$set(r6);
    }, i(t8) {
      r5 || (n4 && ct(n4.$$.fragment, t8), r5 = true);
    }, o(t8) {
      n4 && lt(n4.$$.fragment, t8), r5 = false;
    }, d(t8) {
      n4 && bt(n4, t8), t8 && w2(o4);
    }};
  }
  function de2(t7, e6) {
    let n4, o4, r5, s4;
    var i3 = e6[2];
    function a4(t8) {
      return {props: {scoped: t8[0], $$slots: {default: [fe2]}, $$scope: {ctx: t8}}};
    }
    return i3 && (o4 = new i3(a4(e6))), {key: t7, first: null, c() {
      n4 = k2(), o4 && yt(o4.$$.fragment), r5 = k2(), this.first = n4;
    }, m(t8, e7) {
      b2(t8, n4, e7), o4 && $t(o4, t8, e7), b2(t8, r5, e7), s4 = true;
    }, p(t8, n5) {
      e6 = t8;
      const s5 = {};
      if (1 & n5 && (s5.scoped = e6[0]), 67108925 & n5 && (s5.$$scope = {dirty: n5, ctx: e6}), i3 !== (i3 = e6[2])) {
        if (o4) {
          it();
          const t9 = o4;
          lt(t9.$$.fragment, 1, 0, () => {
            bt(t9, 1);
          }), at();
        }
        i3 ? (o4 = new i3(a4(e6)), yt(o4.$$.fragment), ct(o4.$$.fragment, 1), $t(o4, r5.parentNode, r5)) : o4 = null;
      } else
        i3 && o4.$set(s5);
    }, i(t8) {
      s4 || (o4 && ct(o4.$$.fragment, t8), s4 = true);
    }, o(t8) {
      o4 && lt(o4.$$.fragment, t8), s4 = false;
    }, d(t8) {
      t8 && w2(n4), t8 && w2(r5), o4 && bt(o4, t8);
    }};
  }
  function he2(t7) {
    let e6, n4, o4, r5, s4, i3 = t7[4] && le2(t7);
    return {c() {
      i3 && i3.c(), e6 = P2(), n4 = x2("span");
    }, m(a4, c3) {
      i3 && i3.m(a4, c3), b2(a4, e6, c3), b2(a4, n4, c3), o4 = true, r5 || (s4 = y2(t7[9].call(null, n4)), r5 = true);
    }, p(t8, [n5]) {
      t8[4] ? i3 ? (i3.p(t8, n5), 16 & n5 && ct(i3, 1)) : (i3 = le2(t8), i3.c(), ct(i3, 1), i3.m(e6.parentNode, e6)) : i3 && (it(), lt(i3, 1, 1, () => {
        i3 = null;
      }), at());
    }, i(t8) {
      o4 || (ct(i3), o4 = true);
    }, o(t8) {
      lt(i3), o4 = false;
    }, d(t8) {
      i3 && i3.d(t8), t8 && w2(e6), t8 && w2(n4), r5 = false, s4();
    }};
  }
  function me2(t7, e6, n4) {
    let o4, r5, s4, i3, a4;
    l2(t7, Ct2, (t8) => n4(15, i3 = t8)), l2(t7, qt2, (t8) => n4(16, a4 = t8));
    let c3, {nodes: u3 = []} = e6, {scoped: p3 = {}} = e6, {decorator: f3} = e6, d4 = null, h3 = null, m4 = {}, y3 = 1;
    const $2 = Mt(null);
    l2(t7, $2, (t8) => n4(4, r5 = t8));
    const b5 = D2("routify") || Bt2;
    l2(t7, b5, (t8) => n4(14, s4 = t8));
    U2("routify", $2);
    let w4 = [];
    function _3(t8) {
      n4(5, m4 = {...p3});
      const e7 = {...r5, nodes: h3, decorator: f3 || Nt2, layout: d4.isLayout ? d4 : s4.layout, component: d4, route: i3, routes: a4, componentFile: t8, parentNode: c3 || s4.parentNode};
      $2.set(e7), g2(b5, s4.child = d4, s4), h3.length === 0 && async function() {
        await new Promise((t10) => setTimeout(t10));
        const t9 = r5.component.path === i3.path;
        !window.routify.stopAutoReady && t9 && async function({page: t10, metatags: e8, afterPageLoad: n5, parentNode: o5}) {
          const r6 = t10.last !== t10;
          setTimeout(() => Pt2(o5, r6));
          const {path: s5} = t10, {options: i4} = Ot2(), a5 = i4.prefetch;
          for (const e9 of n5._hooks)
            e9 && await e9(t10.api);
          e8.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: s5, prefetchId: a5}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
        }({page: r5.component, metatags: ae2, afterPageLoad: te2, parentNode: c3});
      }();
    }
    return t7.$$set = (t8) => {
      "nodes" in t8 && n4(1, u3 = t8.nodes), "scoped" in t8 && n4(0, p3 = t8.scoped), "decorator" in t8 && n4(2, f3 = t8.decorator);
    }, t7.$$.update = () => {
      3074 & t7.$$.dirty && w4 !== u3 && (n4(11, w4 = u3), n4(3, [d4, ...h3] = [...u3], d4), n4(3, d4.api.reset = () => n4(10, y3++, y3), d4)), 8 & t7.$$.dirty && function(t8) {
        let e7 = t8.component();
        e7 instanceof Promise ? e7.then(_3) : _3(e7);
      }(d4), 1040 & t7.$$.dirty && n4(6, o4 = r5 && y3 && function({meta: t8, path: e7, param: n5, params: o5}) {
        return JSON.stringify({path: e7, invalidate: y3, param: (t8["param-is-page"] || t8["slug-is-page"]) && n5, queryParams: t8["query-params-is-page"] && o5});
      }(r5.component)), 16 & t7.$$.dirty && r5 && jt2(r5, Z3);
    }, [p3, u3, f3, d4, r5, m4, o4, $2, b5, (t8) => c3 = t8.parentNode, y3, w4];
  }
  var ge2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, me2, he2, i2, {nodes: 1, scoped: 0, decorator: 2});
    }
  };
  function ye2(t7, e6) {
    let n4 = false;
    function o4(o5, r6) {
      const s4 = Ht2(o5 || Ot2().fullpath);
      s4.redirectTo && (history.replaceStateNative({}, null, s4.redirectTo), delete s4.redirectTo);
      const i3 = [...(r6 && Ht2(Ot2().fullpath, t7) || s4).layouts, s4];
      n4 && delete n4.last, s4.last = n4, n4 = s4, o5 || Ut2.set(s4), Ct2.set(s4), s4.api.preload().then(() => {
        Dt2.set(true), e6(i3);
      });
    }
    const r5 = function(t8) {
      ["pushState", "replaceState"].forEach((t9) => {
        history[t9 + "Native"] || (history[t9 + "Native"] = history[t9]), history[t9] = async function(e8 = {}, n6, o5) {
          if (o5 === location.pathname + location.search + location.hash)
            return false;
          const {id: r6, path: s4, params: i3} = c2(Ct2);
          e8 = {id: r6, path: s4, params: i3, ...e8};
          const a4 = new Event(t9.toLowerCase());
          Object.assign(a4, {state: e8, title: n6, url: o5});
          return await be2(a4, o5) ? (history[t9 + "Native"].apply(this, [e8, n6, o5]), dispatchEvent(a4)) : void 0;
        };
      });
      let e7 = false;
      const n5 = {click: $e2, pushstate: () => t8(), replacestate: () => t8(), popstate: async (n6) => {
        e7 ? e7 = false : await be2(n6, Ot2().fullpath) ? t8() : (e7 = true, n6.preventDefault(), history.go(1));
      }};
      Object.entries(n5).forEach((t9) => addEventListener(...t9));
      return () => {
        Object.entries(n5).forEach((t9) => removeEventListener(...t9));
      };
    }(o4);
    return {updatePage: o4, destroy: r5};
  }
  function $e2(t7) {
    const e6 = t7.target.closest("a"), n4 = e6 && e6.href;
    if (t7.ctrlKey || t7.metaKey || t7.altKey || t7.shiftKey || t7.button || t7.defaultPrevented)
      return;
    if (!n4 || e6.target || e6.host !== location.host)
      return;
    const o4 = new URL(n4), r5 = o4.pathname + o4.search + o4.hash;
    t7.preventDefault(), history.pushState({}, "", r5);
  }
  async function be2(t7, e6) {
    const n4 = Ht2(e6).api;
    for (const o4 of ee2._hooks.filter(Boolean)) {
      if (!await o4(t7, n4, {url: e6}))
        return false;
    }
    return true;
  }
  function we2(t7) {
    let e6, n4;
    return e6 = new ge2({props: {nodes: t7[0]}}), {c() {
      yt(e6.$$.fragment);
    }, m(t8, o4) {
      $t(e6, t8, o4), n4 = true;
    }, p(t8, n5) {
      const o4 = {};
      1 & n5 && (o4.nodes = t8[0]), e6.$set(o4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(t8) {
      bt(e6, t8);
    }};
  }
  function _e2(t7) {
    let e6, n4, o4, r5 = t7[0] && t7[1] !== null && we2(t7);
    return n4 = new Xt2({}), {c() {
      r5 && r5.c(), e6 = P2(), yt(n4.$$.fragment);
    }, m(t8, s4) {
      r5 && r5.m(t8, s4), b2(t8, e6, s4), $t(n4, t8, s4), o4 = true;
    }, p(t8, [n5]) {
      t8[0] && t8[1] !== null ? r5 ? (r5.p(t8, n5), 3 & n5 && ct(r5, 1)) : (r5 = we2(t8), r5.c(), ct(r5, 1), r5.m(e6.parentNode, e6)) : r5 && (it(), lt(r5, 1, 1, () => {
        r5 = null;
      }), at());
    }, i(t8) {
      o4 || (ct(r5), ct(n4.$$.fragment, t8), o4 = true);
    }, o(t8) {
      lt(r5), lt(n4.$$.fragment, t8), o4 = false;
    }, d(t8) {
      r5 && r5.d(t8), t8 && w2(e6), bt(n4, t8);
    }};
  }
  function xe2(t7, e6, n4) {
    let o4;
    l2(t7, Ct2, (t8) => n4(1, o4 = t8));
    let r5, s4, {routes: i3} = e6, {config: a4 = {}} = e6;
    window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(xt2, a4);
    U2("routifyupdatepage", (...t8) => s4 && s4.updatePage(...t8));
    const c3 = (t8) => n4(0, r5 = t8), u3 = () => {
      s4 && (s4.destroy(), s4 = null);
    };
    let p3 = null;
    return q2(u3), t7.$$set = (t8) => {
      "routes" in t8 && n4(2, i3 = t8.routes), "config" in t8 && n4(3, a4 = t8.config);
    }, t7.$$.update = () => {
      4 & t7.$$.dirty && i3 && (clearTimeout(p3), p3 = setTimeout(() => {
        u3(), s4 = ye2(i3, c3), qt2.set(i3), s4.updatePage();
      }));
    }, [r5, o4, i3, a4];
  }
  var ve2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, xe2, _e2, i2, {routes: 2, config: 3});
    }
  };
  function Pe2(t7) {
    const e6 = async function(e7) {
      return await ke2(t7, {file: e7.tree, state: {treePayload: e7}, scope: {}});
    };
    return e6.sync = function(e7) {
      return Ee2(t7, {file: e7.tree, state: {treePayload: e7}, scope: {}});
    }, e6;
  }
  async function ke2(t7, e6) {
    const n4 = await t7(e6);
    if (n4 === false)
      return false;
    const o4 = n4 || e6.file;
    if (o4.children) {
      const n5 = await Promise.all(o4.children.map(async (n6) => ke2(t7, {state: e6.state, scope: je2(e6.scope || {}), parent: e6.file, file: await n6})));
      o4.children = n5.filter(Boolean);
    }
    return o4;
  }
  function Ee2(t7, e6) {
    const n4 = t7(e6);
    if (n4 === false)
      return false;
    const o4 = n4 || e6.file;
    if (o4.children) {
      const n5 = o4.children.map((n6) => Ee2(t7, {state: e6.state, scope: je2(e6.scope || {}), parent: e6.file, file: n6}));
      o4.children = n5.filter(Boolean);
    }
    return o4;
  }
  function je2(t7) {
    return JSON.parse(JSON.stringify(t7));
  }
  var Oe2 = Pe2(({file: t7}) => {
    (t7.isPage || t7.isFallback) && (t7.regex = ((t8, e6) => {
      const n4 = e6 ? "" : "/?$";
      return `^${t8 = (t8 = (t8 = t8.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(vt3, "([^/]+)") + n4}`;
    })(t7.path, t7.isFallback));
  });
  var Le2 = Pe2(({file: t7}) => {
    t7.paramKeys = Et2(t7.path);
  });
  var Ie2 = Pe2(({file: t7}) => {
    t7.isFallback || t7.isIndex ? t7.shortPath = t7.path.replace(/\/[^/]+$/, "") : t7.shortPath = t7.path;
  });
  var Se2 = Pe2(({file: t7}) => {
    t7.ranking = (({path: t8}) => t8.split("/").filter(Boolean).map((t9) => t9 === "_fallback" ? "A" : t9.startsWith(":") ? "B" : "C").join(""))(t7);
  });
  var Te2 = Pe2(({file: t7}) => {
    const e6 = t7, n4 = t7.meta && t7.meta.children || [];
    n4.length && (e6.children = e6.children || [], e6.children.push(...n4.map((t8) => ({isMeta: true, ...t8, meta: t8}))));
  });
  var Ne2 = Pe2((t7) => {
    const {file: e6} = t7, {isFallback: n4, meta: o4} = e6, r5 = e6.path.match("/:"), s4 = e6.path.endsWith("/index"), i3 = o4.index || o4.index === 0, a4 = o4.index === false;
    e6.isIndexable = i3 || !n4 && !r5 && !s4 && !a4, e6.isNonIndexable = !e6.isIndexable;
  });
  var Fe2 = Pe2(({file: t7, parent: e6}) => {
    Object.defineProperty(t7, "parent", {get: () => e6}), Object.defineProperty(t7, "nextSibling", {get: () => Me2(t7, 1)}), Object.defineProperty(t7, "prevSibling", {get: () => Me2(t7, -1)}), Object.defineProperty(t7, "lineage", {get: () => Ae2(e6)});
  });
  function Ae2(t7, e6 = []) {
    return t7 && (e6.unshift(t7), Ae2(t7.parent, e6)), e6;
  }
  function Me2(t7, e6) {
    if (!t7.root) {
      const n4 = t7.parent.children.filter((t8) => t8.isIndexable), o4 = n4.indexOf(t7);
      return n4[o4 + e6];
    }
  }
  var Re2 = Pe2(({file: t7, parent: e6}) => {
    t7.isIndex && Object.defineProperty(e6, "index", {get: () => t7});
  });
  var Ce2 = Pe2(({file: t7, scope: e6}) => {
    function n4(t8) {
      if (!t8.isLayout && t8.meta.reset)
        return [];
      const {parent: e7} = t8, o4 = e7 && e7.component && e7, r5 = o4 && (o4.isReset || o4.meta.reset), s4 = e7 && !r5 && n4(e7) || [];
      return o4 && s4.push(o4), s4;
    }
    Object.defineProperty(t7, "layouts", {get: () => n4(t7)});
  });
  var qe2 = Pe2(({file: t7}) => {
    const e6 = t7.root ? function() {
    } : t7.children ? (t7.isPage, function() {
    }) : (t7.isReset || t7.isLayout || t7.isFallback, function() {
    });
    Object.setPrototypeOf(t7, e6.prototype);
  });
  var Be2 = Object.freeze({__proto__: null, setRegex: Oe2, setParamKeys: Le2, setShortPath: Ie2, setRank: Se2, addMetaChildren: Te2, setIsIndexable: Ne2, assignRelations: Fe2, assignIndex: Re2, assignLayout: Ce2, createFlatList: (t7) => {
    Pe2((t8) => {
      (t8.file.isPage || t8.file.isFallback) && t8.state.treePayload.routes.push(t8.file);
    }).sync(t7), t7.routes.sort((t8, e6) => t8.ranking >= e6.ranking ? -1 : 1);
  }, setPrototype: qe2});
  var Ue2 = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
  function De2(t7) {
    return Object.entries(Ue2).forEach(([e6, n4]) => {
      t7[e6] === void 0 && (t7[e6] = n4);
    }), t7.children && (t7.children = t7.children.map(De2)), t7;
  }
  var He2 = Pe2(({file: t7}) => {
    t7.api = new Ke2(t7);
  });
  var Ke2 = class {
    constructor(t7) {
      this.__file = t7, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t7.isMeta, this.path = t7.path, this.title = function(t8) {
        return t8.meta.title !== void 0 ? t8.meta.title : (t8.shortPath || t8.path).split("/").pop().replace(/-/g, " ");
      }(t7), this.meta = t7.meta;
    }
    get parent() {
      return !this.__file.root && this.__file.parent.api;
    }
    get children() {
      return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t7) => !t7.isNonIndexable).sort((t7, e6) => t7.isMeta && e6.isMeta ? 0 : (t7 = (t7.meta.index || t7.meta.title || t7.path).toString(), e6 = (e6.meta.index || e6.meta.title || e6.path).toString(), t7.localeCompare(e6, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t7}) => t7);
    }
    get next() {
      return Je2(this, 1);
    }
    get prev() {
      return Je2(this, -1);
    }
    async preload() {
      const t7 = [...this.__file.layouts, this.__file, this.index && this.index.__file].filter(Boolean).map((t8) => t8.component());
      await Promise.all(t7);
    }
    get component() {
      return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
    }
    get componentWithIndex() {
      return new Promise((t7) => Promise.all([this.component, this.index && this.index.component]).then((e6) => t7(e6)));
    }
    get index() {
      const t7 = this.__file.children && this.__file.children.find((t8) => t8.isIndex);
      return t7 && t7.api;
    }
  };
  function Je2(t7, e6) {
    if (!t7.__file.root) {
      const n4 = t7.parent.children.indexOf(t7);
      return t7.parent.children[n4 + e6];
    }
  }
  var We2 = {...Be2, restoreDefaults: ({tree: t7}) => De2(t7), assignAPI: He2};

  // ../../dist/build/index-c53cf667.js
  var e = function(e6, t7) {
    return function() {
      for (var n4 = new Array(arguments.length), r5 = 0; r5 < n4.length; r5++)
        n4[r5] = arguments[r5];
      return e6.apply(t7, n4);
    };
  };
  var t = Object.prototype.toString;
  function n(e6) {
    return t.call(e6) === "[object Array]";
  }
  function r(e6) {
    return e6 === void 0;
  }
  function o(e6) {
    return e6 !== null && typeof e6 == "object";
  }
  function i(e6) {
    if (t.call(e6) !== "[object Object]")
      return false;
    var n4 = Object.getPrototypeOf(e6);
    return n4 === null || n4 === Object.prototype;
  }
  function a(e6) {
    return t.call(e6) === "[object Function]";
  }
  function s(e6, t7) {
    if (e6 != null)
      if (typeof e6 != "object" && (e6 = [e6]), n(e6))
        for (var r5 = 0, o4 = e6.length; r5 < o4; r5++)
          t7.call(null, e6[r5], r5, e6);
      else
        for (var i3 in e6)
          Object.prototype.hasOwnProperty.call(e6, i3) && t7.call(null, e6[i3], i3, e6);
  }
  var u = {isArray: n, isArrayBuffer: function(e6) {
    return t.call(e6) === "[object ArrayBuffer]";
  }, isBuffer: function(e6) {
    return e6 !== null && !r(e6) && e6.constructor !== null && !r(e6.constructor) && typeof e6.constructor.isBuffer == "function" && e6.constructor.isBuffer(e6);
  }, isFormData: function(e6) {
    return typeof FormData != "undefined" && e6 instanceof FormData;
  }, isArrayBufferView: function(e6) {
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? ArrayBuffer.isView(e6) : e6 && e6.buffer && e6.buffer instanceof ArrayBuffer;
  }, isString: function(e6) {
    return typeof e6 == "string";
  }, isNumber: function(e6) {
    return typeof e6 == "number";
  }, isObject: o, isPlainObject: i, isUndefined: r, isDate: function(e6) {
    return t.call(e6) === "[object Date]";
  }, isFile: function(e6) {
    return t.call(e6) === "[object File]";
  }, isBlob: function(e6) {
    return t.call(e6) === "[object Blob]";
  }, isFunction: a, isStream: function(e6) {
    return o(e6) && a(e6.pipe);
  }, isURLSearchParams: function(e6) {
    return typeof URLSearchParams != "undefined" && e6 instanceof URLSearchParams;
  }, isStandardBrowserEnv: function() {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && (typeof window != "undefined" && typeof document != "undefined");
  }, forEach: s, merge: function e2() {
    var t7 = {};
    function r5(r6, o5) {
      i(t7[o5]) && i(r6) ? t7[o5] = e2(t7[o5], r6) : i(r6) ? t7[o5] = e2({}, r6) : n(r6) ? t7[o5] = r6.slice() : t7[o5] = r6;
    }
    for (var o4 = 0, a4 = arguments.length; o4 < a4; o4++)
      s(arguments[o4], r5);
    return t7;
  }, extend: function(t7, n4, r5) {
    return s(n4, function(n5, o4) {
      t7[o4] = r5 && typeof n5 == "function" ? e(n5, r5) : n5;
    }), t7;
  }, trim: function(e6) {
    return e6.replace(/^\s*/, "").replace(/\s*$/, "");
  }, stripBOM: function(e6) {
    return e6.charCodeAt(0) === 65279 && (e6 = e6.slice(1)), e6;
  }};
  function c(e6) {
    return encodeURIComponent(e6).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var f = function(e6, t7, n4) {
    if (!t7)
      return e6;
    var r5;
    if (n4)
      r5 = n4(t7);
    else if (u.isURLSearchParams(t7))
      r5 = t7.toString();
    else {
      var o4 = [];
      u.forEach(t7, function(e7, t8) {
        e7 != null && (u.isArray(e7) ? t8 += "[]" : e7 = [e7], u.forEach(e7, function(e8) {
          u.isDate(e8) ? e8 = e8.toISOString() : u.isObject(e8) && (e8 = JSON.stringify(e8)), o4.push(c(t8) + "=" + c(e8));
        }));
      }), r5 = o4.join("&");
    }
    if (r5) {
      var i3 = e6.indexOf("#");
      i3 !== -1 && (e6 = e6.slice(0, i3)), e6 += (e6.indexOf("?") === -1 ? "?" : "&") + r5;
    }
    return e6;
  };
  function p() {
    this.handlers = [];
  }
  p.prototype.use = function(e6, t7) {
    return this.handlers.push({fulfilled: e6, rejected: t7}), this.handlers.length - 1;
  }, p.prototype.eject = function(e6) {
    this.handlers[e6] && (this.handlers[e6] = null);
  }, p.prototype.forEach = function(e6) {
    u.forEach(this.handlers, function(t7) {
      t7 !== null && e6(t7);
    });
  };
  var d = p;
  var l = function(e6, t7, n4) {
    return u.forEach(n4, function(n5) {
      e6 = n5(e6, t7);
    }), e6;
  };
  var h = function(e6) {
    return !(!e6 || !e6.__CANCEL__);
  };
  var m = function(e6, t7) {
    u.forEach(e6, function(n4, r5) {
      r5 !== t7 && r5.toUpperCase() === t7.toUpperCase() && (e6[t7] = n4, delete e6[r5]);
    });
  };
  var g = function(e6, t7, n4, r5, o4) {
    return function(e7, t8, n5, r6, o5) {
      return e7.config = t8, n5 && (e7.code = n5), e7.request = r6, e7.response = o5, e7.isAxiosError = true, e7.toJSON = function() {
        return {message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code};
      }, e7;
    }(new Error(e6), t7, n4, r5, o4);
  };
  var y = u.isStandardBrowserEnv() ? {write: function(e6, t7, n4, r5, o4, i3) {
    var a4 = [];
    a4.push(e6 + "=" + encodeURIComponent(t7)), u.isNumber(n4) && a4.push("expires=" + new Date(n4).toGMTString()), u.isString(r5) && a4.push("path=" + r5), u.isString(o4) && a4.push("domain=" + o4), i3 === true && a4.push("secure"), document.cookie = a4.join("; ");
  }, read: function(e6) {
    var t7 = document.cookie.match(new RegExp("(^|;\\s*)(" + e6 + ")=([^;]*)"));
    return t7 ? decodeURIComponent(t7[3]) : null;
  }, remove: function(e6) {
    this.write(e6, "", Date.now() - 864e5);
  }} : {write: function() {
  }, read: function() {
    return null;
  }, remove: function() {
  }};
  var v = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  var w = u.isStandardBrowserEnv() ? function() {
    var e6, t7 = /(msie|trident)/i.test(navigator.userAgent), n4 = document.createElement("a");
    function r5(e7) {
      var r6 = e7;
      return t7 && (n4.setAttribute("href", r6), r6 = n4.href), n4.setAttribute("href", r6), {href: n4.href, protocol: n4.protocol ? n4.protocol.replace(/:$/, "") : "", host: n4.host, search: n4.search ? n4.search.replace(/^\?/, "") : "", hash: n4.hash ? n4.hash.replace(/^#/, "") : "", hostname: n4.hostname, port: n4.port, pathname: n4.pathname.charAt(0) === "/" ? n4.pathname : "/" + n4.pathname};
    }
    return e6 = r5(window.location.href), function(t8) {
      var n5 = u.isString(t8) ? r5(t8) : t8;
      return n5.protocol === e6.protocol && n5.host === e6.host;
    };
  }() : function() {
    return true;
  };
  var b = function(e6) {
    return new Promise(function(t7, n4) {
      var r5 = e6.data, o4 = e6.headers;
      u.isFormData(r5) && delete o4["Content-Type"];
      var i3 = new XMLHttpRequest();
      if (e6.auth) {
        var a4 = e6.auth.username || "", s4 = e6.auth.password ? unescape(encodeURIComponent(e6.auth.password)) : "";
        o4.Authorization = "Basic " + btoa(a4 + ":" + s4);
      }
      var c3, p3, d4 = (c3 = e6.baseURL, p3 = e6.url, c3 && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(p3) ? function(e7, t8) {
        return t8 ? e7.replace(/\/+$/, "") + "/" + t8.replace(/^\/+/, "") : e7;
      }(c3, p3) : p3);
      if (i3.open(e6.method.toUpperCase(), f(d4, e6.params, e6.paramsSerializer), true), i3.timeout = e6.timeout, i3.onreadystatechange = function() {
        if (i3 && i3.readyState === 4 && (i3.status !== 0 || i3.responseURL && i3.responseURL.indexOf("file:") === 0)) {
          var r6, o5, a5, s5, c4, f3 = "getAllResponseHeaders" in i3 ? (r6 = i3.getAllResponseHeaders(), c4 = {}, r6 ? (u.forEach(r6.split("\n"), function(e7) {
            if (s5 = e7.indexOf(":"), o5 = u.trim(e7.substr(0, s5)).toLowerCase(), a5 = u.trim(e7.substr(s5 + 1)), o5) {
              if (c4[o5] && v.indexOf(o5) >= 0)
                return;
              c4[o5] = o5 === "set-cookie" ? (c4[o5] ? c4[o5] : []).concat([a5]) : c4[o5] ? c4[o5] + ", " + a5 : a5;
            }
          }), c4) : c4) : null, p4 = {data: e6.responseType && e6.responseType !== "text" ? i3.response : i3.responseText, status: i3.status, statusText: i3.statusText, headers: f3, config: e6, request: i3};
          !function(e7, t8, n5) {
            var r7 = n5.config.validateStatus;
            n5.status && r7 && !r7(n5.status) ? t8(g("Request failed with status code " + n5.status, n5.config, null, n5.request, n5)) : e7(n5);
          }(t7, n4, p4), i3 = null;
        }
      }, i3.onabort = function() {
        i3 && (n4(g("Request aborted", e6, "ECONNABORTED", i3)), i3 = null);
      }, i3.onerror = function() {
        n4(g("Network Error", e6, null, i3)), i3 = null;
      }, i3.ontimeout = function() {
        var t8 = "timeout of " + e6.timeout + "ms exceeded";
        e6.timeoutErrorMessage && (t8 = e6.timeoutErrorMessage), n4(g(t8, e6, "ECONNABORTED", i3)), i3 = null;
      }, u.isStandardBrowserEnv()) {
        var l3 = (e6.withCredentials || w(d4)) && e6.xsrfCookieName ? y.read(e6.xsrfCookieName) : void 0;
        l3 && (o4[e6.xsrfHeaderName] = l3);
      }
      if ("setRequestHeader" in i3 && u.forEach(o4, function(e7, t8) {
        r5 === void 0 && t8.toLowerCase() === "content-type" ? delete o4[t8] : i3.setRequestHeader(t8, e7);
      }), u.isUndefined(e6.withCredentials) || (i3.withCredentials = !!e6.withCredentials), e6.responseType)
        try {
          i3.responseType = e6.responseType;
        } catch (t8) {
          if (e6.responseType !== "json")
            throw t8;
        }
      typeof e6.onDownloadProgress == "function" && i3.addEventListener("progress", e6.onDownloadProgress), typeof e6.onUploadProgress == "function" && i3.upload && i3.upload.addEventListener("progress", e6.onUploadProgress), e6.cancelToken && e6.cancelToken.promise.then(function(e7) {
        i3 && (i3.abort(), n4(e7), i3 = null);
      }), r5 || (r5 = null), i3.send(r5);
    });
  };
  var E = {"Content-Type": "application/x-www-form-urlencoded"};
  function x(e6, t7) {
    !u.isUndefined(e6) && u.isUndefined(e6["Content-Type"]) && (e6["Content-Type"] = t7);
  }
  var C;
  var S = {adapter: ((typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (C = b), C), transformRequest: [function(e6, t7) {
    return m(t7, "Accept"), m(t7, "Content-Type"), u.isFormData(e6) || u.isArrayBuffer(e6) || u.isBuffer(e6) || u.isStream(e6) || u.isFile(e6) || u.isBlob(e6) ? e6 : u.isArrayBufferView(e6) ? e6.buffer : u.isURLSearchParams(e6) ? (x(t7, "application/x-www-form-urlencoded;charset=utf-8"), e6.toString()) : u.isObject(e6) ? (x(t7, "application/json;charset=utf-8"), JSON.stringify(e6)) : e6;
  }], transformResponse: [function(e6) {
    if (typeof e6 == "string")
      try {
        e6 = JSON.parse(e6);
      } catch (e7) {
      }
    return e6;
  }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, validateStatus: function(e6) {
    return e6 >= 200 && e6 < 300;
  }};
  S.headers = {common: {Accept: "application/json, text/plain, */*"}}, u.forEach(["delete", "get", "head"], function(e6) {
    S.headers[e6] = {};
  }), u.forEach(["post", "put", "patch"], function(e6) {
    S.headers[e6] = u.merge(E);
  });
  var R = S;
  function j(e6) {
    e6.cancelToken && e6.cancelToken.throwIfRequested();
  }
  var A = function(e6) {
    return j(e6), e6.headers = e6.headers || {}, e6.data = l(e6.data, e6.headers, e6.transformRequest), e6.headers = u.merge(e6.headers.common || {}, e6.headers[e6.method] || {}, e6.headers), u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t7) {
      delete e6.headers[t7];
    }), (e6.adapter || R.adapter)(e6).then(function(t7) {
      return j(e6), t7.data = l(t7.data, t7.headers, e6.transformResponse), t7;
    }, function(t7) {
      return h(t7) || (j(e6), t7 && t7.response && (t7.response.data = l(t7.response.data, t7.response.headers, e6.transformResponse))), Promise.reject(t7);
    });
  };
  var O = function(e6, t7) {
    t7 = t7 || {};
    var n4 = {}, r5 = ["url", "method", "data"], o4 = ["headers", "auth", "proxy", "params"], i3 = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"], a4 = ["validateStatus"];
    function s4(e7, t8) {
      return u.isPlainObject(e7) && u.isPlainObject(t8) ? u.merge(e7, t8) : u.isPlainObject(t8) ? u.merge({}, t8) : u.isArray(t8) ? t8.slice() : t8;
    }
    function c3(r6) {
      u.isUndefined(t7[r6]) ? u.isUndefined(e6[r6]) || (n4[r6] = s4(void 0, e6[r6])) : n4[r6] = s4(e6[r6], t7[r6]);
    }
    u.forEach(r5, function(e7) {
      u.isUndefined(t7[e7]) || (n4[e7] = s4(void 0, t7[e7]));
    }), u.forEach(o4, c3), u.forEach(i3, function(r6) {
      u.isUndefined(t7[r6]) ? u.isUndefined(e6[r6]) || (n4[r6] = s4(void 0, e6[r6])) : n4[r6] = s4(void 0, t7[r6]);
    }), u.forEach(a4, function(r6) {
      r6 in t7 ? n4[r6] = s4(e6[r6], t7[r6]) : r6 in e6 && (n4[r6] = s4(void 0, e6[r6]));
    });
    var f3 = r5.concat(o4).concat(i3).concat(a4), p3 = Object.keys(e6).concat(Object.keys(t7)).filter(function(e7) {
      return f3.indexOf(e7) === -1;
    });
    return u.forEach(p3, c3), n4;
  };
  function N(e6) {
    this.defaults = e6, this.interceptors = {request: new d(), response: new d()};
  }
  N.prototype.request = function(e6) {
    typeof e6 == "string" ? (e6 = arguments[1] || {}).url = arguments[0] : e6 = e6 || {}, (e6 = O(this.defaults, e6)).method ? e6.method = e6.method.toLowerCase() : this.defaults.method ? e6.method = this.defaults.method.toLowerCase() : e6.method = "get";
    var t7 = [A, void 0], n4 = Promise.resolve(e6);
    for (this.interceptors.request.forEach(function(e7) {
      t7.unshift(e7.fulfilled, e7.rejected);
    }), this.interceptors.response.forEach(function(e7) {
      t7.push(e7.fulfilled, e7.rejected);
    }); t7.length; )
      n4 = n4.then(t7.shift(), t7.shift());
    return n4;
  }, N.prototype.getUri = function(e6) {
    return e6 = O(this.defaults, e6), f(e6.url, e6.params, e6.paramsSerializer).replace(/^\?/, "");
  }, u.forEach(["delete", "get", "head", "options"], function(e6) {
    N.prototype[e6] = function(t7, n4) {
      return this.request(O(n4 || {}, {method: e6, url: t7, data: (n4 || {}).data}));
    };
  }), u.forEach(["post", "put", "patch"], function(e6) {
    N.prototype[e6] = function(t7, n4, r5) {
      return this.request(O(r5 || {}, {method: e6, url: t7, data: n4}));
    };
  });
  var U = N;
  function B(e6) {
    this.message = e6;
  }
  B.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, B.prototype.__CANCEL__ = true;
  var T = B;
  function L(e6) {
    if (typeof e6 != "function")
      throw new TypeError("executor must be a function.");
    var t7;
    this.promise = new Promise(function(e7) {
      t7 = e7;
    });
    var n4 = this;
    e6(function(e7) {
      n4.reason || (n4.reason = new T(e7), t7(n4.reason));
    });
  }
  L.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, L.source = function() {
    var e6;
    return {token: new L(function(t7) {
      e6 = t7;
    }), cancel: e6};
  };
  var P = L;
  function k(t7) {
    var n4 = new U(t7), r5 = e(U.prototype.request, n4);
    return u.extend(r5, U.prototype, n4), u.extend(r5, n4), r5;
  }
  var q = k(R);
  q.Axios = U, q.create = function(e6) {
    return k(O(q.defaults, e6));
  }, q.Cancel = T, q.CancelToken = P, q.isCancel = h, q.all = function(e6) {
    return Promise.all(e6);
  }, q.spread = function(e6) {
    return function(t7) {
      return e6.apply(null, t7);
    };
  }, q.isAxiosError = function(e6) {
    return typeof e6 == "object" && e6.isAxiosError === true;
  };
  var D = q;
  var F = q;
  D.default = F;
  var H = D;

  // ../../dist/build/Div-f3ae89ff.js
  var F2 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
  var V = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
  function x3(i3) {
    let r5, s4 = [];
    const o4 = i3.$on;
    function c3(t7) {
      H2(i3, t7);
    }
    return i3.$on = (t7, ...e6) => {
      let n4 = t7, a4 = () => {
      };
      r5 ? a4 = r5(n4) : s4.push(n4);
      const c4 = n4.match(F2), u3 = n4.match(V), l3 = c4 || u3;
      if (c4 && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', n4), l3) {
        const t8 = n4.split(c4 ? ":" : "$");
        n4 = t8[0];
      }
      const d4 = o4.call(i3, n4, ...e6);
      return (...t8) => (a4(), d4(...t8));
    }, (a4) => {
      const i4 = [];
      r5 = (r6) => {
        let s5 = r6, o5 = c3, u3 = false;
        const l3 = s5.match(F2), d4 = s5.match(V);
        if (l3 || d4) {
          const t7 = s5.split(l3 ? ":" : "$");
          s5 = t7[0], u3 = Object.fromEntries(t7.slice(1).map((t8) => [t8, true])), u3.nonpassive && (u3.passive = false, delete u3.nonpassive), u3.preventDefault && (o5 = j2(o5), delete u3.preventDefault), u3.stopPropagation && (o5 = O2(o5), delete u3.stopPropagation);
        }
        const p3 = E2(a4, s5, o5, u3), f3 = () => {
          p3();
          const t7 = i4.indexOf(f3);
          t7 > -1 && i4.splice(t7, 1);
        };
        return i4.push(f3), f3;
      };
      for (let t7 = 0; t7 < s4.length; t7++)
        r5(s4[t7]);
      return {destroy: () => {
        for (let t7 = 0; t7 < i4.length; t7++)
          i4[t7]();
      }};
    };
  }
  function N2(t7) {
    return Object.entries(t7).filter(([t8, e6]) => t8 !== "" && e6).map(([t8]) => t8).join(" ");
  }
  function U3(t7) {
    let e6;
    const n4 = t7[10].default, a4 = u2(n4, t7, t7[12], null);
    return {c() {
      a4 && a4.c();
    }, m(t8, n5) {
      a4 && a4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      a4 && a4.p && 4096 & e7 && f2(a4, n4, t8, t8[12], e7, null, null);
    }, i(t8) {
      e6 || (ct(a4, t8), e6 = true);
    }, o(t8) {
      lt(a4, t8), e6 = false;
    }, d(t8) {
      a4 && a4.d(t8);
    }};
  }
  function L2(t7) {
    let e6, n4, a4;
    const i3 = [{use: [t7[7], ...t7[0]]}, {class: N2({[t7[1]]: true, [t7[5]]: true, ...t7[4]})}, t7[6], t7[8]];
    var r5 = t7[2];
    function s4(t8) {
      let e7 = {$$slots: {default: [U3]}, $$scope: {ctx: t8}};
      for (let t9 = 0; t9 < i3.length; t9 += 1)
        e7 = e3(e7, i3[t9]);
      return {props: e7};
    }
    return r5 && (e6 = new r5(s4(t7)), t7[11](e6)), {c() {
      e6 && yt(e6.$$.fragment), n4 = k2();
    }, m(t8, i4) {
      e6 && $t(e6, t8, i4), b2(t8, n4, i4), a4 = true;
    }, p(t8, [a5]) {
      const c3 = 499 & a5 ? ht(i3, [129 & a5 && {use: [t8[7], ...t8[0]]}, 50 & a5 && {class: N2({[t8[1]]: true, [t8[5]]: true, ...t8[4]})}, 64 & a5 && mt(t8[6]), 256 & a5 && mt(t8[8])]) : {};
      if (4096 & a5 && (c3.$$scope = {dirty: a5, ctx: t8}), r5 !== (r5 = t8[2])) {
        if (e6) {
          it();
          const t9 = e6;
          lt(t9.$$.fragment, 1, 0, () => {
            bt(t9, 1);
          }), at();
        }
        r5 ? (e6 = new r5(s4(t8)), t8[11](e6), yt(e6.$$.fragment), ct(e6.$$.fragment, 1), $t(e6, n4.parentNode, n4)) : e6 = null;
      } else
        r5 && e6.$set(c3);
    }, i(t8) {
      a4 || (e6 && ct(e6.$$.fragment, t8), a4 = true);
    }, o(t8) {
      e6 && lt(e6.$$.fragment, t8), a4 = false;
    }, d(a5) {
      t7[11](null), a5 && w2(n4), e6 && bt(e6, a5);
    }};
  }
  var M = {component: null, class: "", classMap: {}, contexts: {}, props: {}};
  function j3(t7, e6, n4) {
    const a4 = ["use", "class", "component", "getElement"];
    let i3, r5 = h2(e6, a4), {$$slots: s4 = {}, $$scope: o4} = e6, {use: c3 = []} = e6, {class: u3 = ""} = e6;
    const l3 = M.class, d4 = {}, p3 = [], f3 = M.contexts, v5 = M.props;
    let {component: h3 = M.component} = e6;
    Object.entries(M.classMap).forEach(([t8, e7]) => {
      const a5 = D2(e7);
      a5 && "subscribe" in a5 && p3.push(a5.subscribe((e8) => {
        n4(4, d4[t8] = e8, d4);
      }));
    });
    const m4 = x3(R2());
    for (let t8 in f3)
      f3.hasOwnProperty(t8) && U2(t8, f3[t8]);
    return q2(() => {
      for (const t8 of p3)
        t8();
    }), t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(8, r5 = h2(e6, a4)), "use" in t8 && n4(0, c3 = t8.use), "class" in t8 && n4(1, u3 = t8.class), "component" in t8 && n4(2, h3 = t8.component), "$$scope" in t8 && n4(12, o4 = t8.$$scope);
    }, [c3, u3, h3, i3, d4, l3, v5, m4, r5, function() {
      return i3.getElement();
    }, s4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        i3 = t8, n4(3, i3);
      });
    }, o4];
  }
  var z = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, j3, L2, i2, {use: 0, class: 1, component: 2, getElement: 9});
    }
    get getElement() {
      return this.$$.ctx[9];
    }
  };
  var G = {...M};
  function B2(t7) {
    function e6(...e7) {
      return Object.assign(M, G, t7), new z(...e7);
    }
    return e6.prototype = z, z.$$render && (e6.$$render = (...e7) => Object.assign(M, G, t7) && z.$$render(...e7)), z.render && (e6.render = (...e7) => Object.assign(M, G, t7) && z.render(...e7)), e6;
  }
  function k3(t7, e6, n4 = {}, a4 = {bubbles: true}) {
    if (typeof Event != "undefined" && t7) {
      const i3 = new Event(e6, a4);
      i3.detail = n4;
      return ("getElement" in t7 ? t7.getElement() : t7).dispatchEvent(i3), i3;
    }
  }
  function q3(t7, e6) {
    let n4 = [];
    if (e6)
      for (let a4 = 0; a4 < e6.length; a4++) {
        const i3 = Array.isArray(e6[a4]), r5 = i3 ? e6[a4][0] : e6[a4];
        i3 && e6[a4].length > 1 ? n4.push(r5(t7, e6[a4][1])) : n4.push(r5(t7));
      }
    return {update(t8) {
      if ((t8 && t8.length || 0) != n4.length)
        throw new Error("You must not change the length of an actions array.");
      if (t8) {
        for (let e7 = 0; e7 < t8.length; e7++)
          if (n4[e7] && "update" in n4[e7]) {
            Array.isArray(t8[e7]) && t8[e7].length > 1 ? n4[e7].update(t8[e7][1]) : n4[e7].update();
          }
      }
    }, destroy() {
      for (let t8 = 0; t8 < n4.length; t8++)
        n4[t8] && "destroy" in n4[t8] && n4[t8].destroy();
    }};
  }
  var X;
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var W = function(t7, e6) {
    return (W = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(t8, e7) {
      t8.__proto__ = e7;
    } || function(t8, e7) {
      for (var n4 in e7)
        Object.prototype.hasOwnProperty.call(e7, n4) && (t8[n4] = e7[n4]);
    })(t7, e6);
  };
  function Y(t7, e6) {
    if (typeof e6 != "function" && e6 !== null)
      throw new TypeError("Class extends value " + String(e6) + " is not a constructor or null");
    function n4() {
      this.constructor = t7;
    }
    W(t7, e6), t7.prototype = e6 === null ? Object.create(e6) : (n4.prototype = e6.prototype, new n4());
  }
  var Z = function() {
    return (Z = Object.assign || function(t7) {
      for (var e6, n4 = 1, a4 = arguments.length; n4 < a4; n4++)
        for (var i3 in e6 = arguments[n4])
          Object.prototype.hasOwnProperty.call(e6, i3) && (t7[i3] = e6[i3]);
      return t7;
    }).apply(this, arguments);
  };
  function Q(t7) {
    var e6 = typeof Symbol == "function" && Symbol.iterator, n4 = e6 && t7[e6], a4 = 0;
    if (n4)
      return n4.call(t7);
    if (t7 && typeof t7.length == "number")
      return {next: function() {
        return t7 && a4 >= t7.length && (t7 = void 0), {value: t7 && t7[a4++], done: !t7};
      }};
    throw new TypeError(e6 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
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
  var J2 = function() {
    function t7(t8) {
      t8 === void 0 && (t8 = {}), this.adapter = t8;
    }
    return Object.defineProperty(t7, "cssClasses", {get: function() {
      return {};
    }, enumerable: false, configurable: true}), Object.defineProperty(t7, "strings", {get: function() {
      return {};
    }, enumerable: false, configurable: true}), Object.defineProperty(t7, "numbers", {get: function() {
      return {};
    }, enumerable: false, configurable: true}), Object.defineProperty(t7, "defaultAdapter", {get: function() {
      return {};
    }, enumerable: false, configurable: true}), t7.prototype.init = function() {
    }, t7.prototype.destroy = function() {
    }, t7;
  }();
  /**
   * @license
   * Copyright 2019 Google Inc.
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
  var K = Object.freeze({__proto__: null, applyPassive: function(t7) {
    return t7 === void 0 && (t7 = window), !!function(t8) {
      t8 === void 0 && (t8 = window);
      var e6 = false;
      try {
        var n4 = {get passive() {
          return e6 = true, false;
        }}, a4 = function() {
        };
        t8.document.addEventListener("test", a4, n4), t8.document.removeEventListener("test", a4, n4);
      } catch (t9) {
        e6 = false;
      }
      return e6;
    }(t7) && {passive: true};
  }});
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
  function tt(t7, e6) {
    return (t7.matches || t7.webkitMatchesSelector || t7.msMatchesSelector).call(t7, e6);
  }
  var et = Object.freeze({__proto__: null, closest: function(t7, e6) {
    if (t7.closest)
      return t7.closest(e6);
    for (var n4 = t7; n4; ) {
      if (tt(n4, e6))
        return n4;
      n4 = n4.parentElement;
    }
    return null;
  }, matches: tt, estimateScrollWidth: function(t7) {
    var e6 = t7;
    if (e6.offsetParent !== null)
      return e6.scrollWidth;
    var n4 = e6.cloneNode(true);
    n4.style.setProperty("position", "absolute"), n4.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n4);
    var a4 = n4.scrollWidth;
    return document.documentElement.removeChild(n4), a4;
  }});
  var nt = {BG_FOCUSED: "mdc-ripple-upgraded--background-focused", FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation", FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation", ROOT: "mdc-ripple-upgraded", UNBOUNDED: "mdc-ripple-upgraded--unbounded"};
  var at2 = {VAR_FG_SCALE: "--mdc-ripple-fg-scale", VAR_FG_SIZE: "--mdc-ripple-fg-size", VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end", VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start", VAR_LEFT: "--mdc-ripple-left", VAR_TOP: "--mdc-ripple-top"};
  var it2 = {DEACTIVATION_TIMEOUT_MS: 225, FG_DEACTIVATION_MS: 150, INITIAL_ORIGIN_SCALE: 0.6, PADDING: 10, TAP_DELAY_MS: 300};
  var rt = ["touchstart", "pointerdown", "mousedown", "keydown"];
  var st = ["touchend", "pointerup", "mouseup", "contextmenu"];
  var ot = [];
  var ct2 = function(t7) {
    function e6(n4) {
      var a4 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      return a4.activationAnimationHasEnded_ = false, a4.activationTimer_ = 0, a4.fgDeactivationRemovalTimer_ = 0, a4.fgScale_ = "0", a4.frame_ = {width: 0, height: 0}, a4.initialSize_ = 0, a4.layoutFrame_ = 0, a4.maxRadius_ = 0, a4.unboundedCoords_ = {left: 0, top: 0}, a4.activationState_ = a4.defaultActivationState_(), a4.activationTimerCallback_ = function() {
        a4.activationAnimationHasEnded_ = true, a4.runDeactivationUXLogicIfReady_();
      }, a4.activateHandler_ = function(t8) {
        return a4.activate_(t8);
      }, a4.deactivateHandler_ = function() {
        return a4.deactivate_();
      }, a4.focusHandler_ = function() {
        return a4.handleFocus();
      }, a4.blurHandler_ = function() {
        return a4.handleBlur();
      }, a4.resizeHandler_ = function() {
        return a4.layout();
      }, a4;
    }
    return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
      return nt;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
      return at2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "numbers", {get: function() {
      return it2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {addClass: function() {
      }, browserSupportsCssVars: function() {
        return true;
      }, computeBoundingRect: function() {
        return {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0};
      }, containsEventTarget: function() {
        return true;
      }, deregisterDocumentInteractionHandler: function() {
      }, deregisterInteractionHandler: function() {
      }, deregisterResizeHandler: function() {
      }, getWindowPageOffset: function() {
        return {x: 0, y: 0};
      }, isSurfaceActive: function() {
        return true;
      }, isSurfaceDisabled: function() {
        return true;
      }, isUnbounded: function() {
        return true;
      }, registerDocumentInteractionHandler: function() {
      }, registerInteractionHandler: function() {
      }, registerResizeHandler: function() {
      }, removeClass: function() {
      }, updateCssVariable: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.init = function() {
      var t8 = this, n4 = this.supportsPressRipple_();
      if (this.registerRootHandlers_(n4), n4) {
        var a4 = e6.cssClasses, i3 = a4.ROOT, r5 = a4.UNBOUNDED;
        requestAnimationFrame(function() {
          t8.adapter.addClass(i3), t8.adapter.isUnbounded() && (t8.adapter.addClass(r5), t8.layoutInternal_());
        });
      }
    }, e6.prototype.destroy = function() {
      var t8 = this;
      if (this.supportsPressRipple_()) {
        this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter.removeClass(e6.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter.removeClass(e6.cssClasses.FG_DEACTIVATION));
        var n4 = e6.cssClasses, a4 = n4.ROOT, i3 = n4.UNBOUNDED;
        requestAnimationFrame(function() {
          t8.adapter.removeClass(a4), t8.adapter.removeClass(i3), t8.removeCssVars_();
        });
      }
      this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_();
    }, e6.prototype.activate = function(t8) {
      this.activate_(t8);
    }, e6.prototype.deactivate = function() {
      this.deactivate_();
    }, e6.prototype.layout = function() {
      var t8 = this;
      this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function() {
        t8.layoutInternal_(), t8.layoutFrame_ = 0;
      });
    }, e6.prototype.setUnbounded = function(t8) {
      var n4 = e6.cssClasses.UNBOUNDED;
      t8 ? this.adapter.addClass(n4) : this.adapter.removeClass(n4);
    }, e6.prototype.handleFocus = function() {
      var t8 = this;
      requestAnimationFrame(function() {
        return t8.adapter.addClass(e6.cssClasses.BG_FOCUSED);
      });
    }, e6.prototype.handleBlur = function() {
      var t8 = this;
      requestAnimationFrame(function() {
        return t8.adapter.removeClass(e6.cssClasses.BG_FOCUSED);
      });
    }, e6.prototype.supportsPressRipple_ = function() {
      return this.adapter.browserSupportsCssVars();
    }, e6.prototype.defaultActivationState_ = function() {
      return {activationEvent: void 0, hasDeactivationUXRun: false, isActivated: false, isProgrammatic: false, wasActivatedByPointer: false, wasElementMadeActive: false};
    }, e6.prototype.registerRootHandlers_ = function(t8) {
      var e7 = this;
      t8 && (rt.forEach(function(t9) {
        e7.adapter.registerInteractionHandler(t9, e7.activateHandler_);
      }), this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler_)), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_);
    }, e6.prototype.registerDeactivationHandlers_ = function(t8) {
      var e7 = this;
      t8.type === "keydown" ? this.adapter.registerInteractionHandler("keyup", this.deactivateHandler_) : st.forEach(function(t9) {
        e7.adapter.registerDocumentInteractionHandler(t9, e7.deactivateHandler_);
      });
    }, e6.prototype.deregisterRootHandlers_ = function() {
      var t8 = this;
      rt.forEach(function(e7) {
        t8.adapter.deregisterInteractionHandler(e7, t8.activateHandler_);
      }), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler_);
    }, e6.prototype.deregisterDeactivationHandlers_ = function() {
      var t8 = this;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler_), st.forEach(function(e7) {
        t8.adapter.deregisterDocumentInteractionHandler(e7, t8.deactivateHandler_);
      });
    }, e6.prototype.removeCssVars_ = function() {
      var t8 = this, n4 = e6.strings;
      Object.keys(n4).forEach(function(e7) {
        e7.indexOf("VAR_") === 0 && t8.adapter.updateCssVariable(n4[e7], null);
      });
    }, e6.prototype.activate_ = function(t8) {
      var e7 = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n4 = this.activationState_;
        if (!n4.isActivated) {
          var a4 = this.previousActivationEvent_;
          if (!(a4 && t8 !== void 0 && a4.type !== t8.type))
            n4.isActivated = true, n4.isProgrammatic = t8 === void 0, n4.activationEvent = t8, n4.wasActivatedByPointer = !n4.isProgrammatic && (t8 !== void 0 && (t8.type === "mousedown" || t8.type === "touchstart" || t8.type === "pointerdown")), t8 !== void 0 && ot.length > 0 && ot.some(function(t9) {
              return e7.adapter.containsEventTarget(t9);
            }) ? this.resetActivationState_() : (t8 !== void 0 && (ot.push(t8.target), this.registerDeactivationHandlers_(t8)), n4.wasElementMadeActive = this.checkElementMadeActive_(t8), n4.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame(function() {
              ot = [], n4.wasElementMadeActive || t8 === void 0 || t8.key !== " " && t8.keyCode !== 32 || (n4.wasElementMadeActive = e7.checkElementMadeActive_(t8), n4.wasElementMadeActive && e7.animateActivation_()), n4.wasElementMadeActive || (e7.activationState_ = e7.defaultActivationState_());
            }));
        }
      }
    }, e6.prototype.checkElementMadeActive_ = function(t8) {
      return t8 === void 0 || t8.type !== "keydown" || this.adapter.isSurfaceActive();
    }, e6.prototype.animateActivation_ = function() {
      var t8 = this, n4 = e6.strings, a4 = n4.VAR_FG_TRANSLATE_START, i3 = n4.VAR_FG_TRANSLATE_END, r5 = e6.cssClasses, s4 = r5.FG_DEACTIVATION, o4 = r5.FG_ACTIVATION, c3 = e6.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal_();
      var u3 = "", l3 = "";
      if (!this.adapter.isUnbounded()) {
        var d4 = this.getFgTranslationCoordinates_(), p3 = d4.startPoint, f3 = d4.endPoint;
        u3 = p3.x + "px, " + p3.y + "px", l3 = f3.x + "px, " + f3.y + "px";
      }
      this.adapter.updateCssVariable(a4, u3), this.adapter.updateCssVariable(i3, l3), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter.removeClass(s4), this.adapter.computeBoundingRect(), this.adapter.addClass(o4), this.activationTimer_ = setTimeout(function() {
        return t8.activationTimerCallback_();
      }, c3);
    }, e6.prototype.getFgTranslationCoordinates_ = function() {
      var t8, e7 = this.activationState_, n4 = e7.activationEvent;
      return {startPoint: t8 = {x: (t8 = e7.wasActivatedByPointer ? function(t9, e8, n5) {
        if (!t9)
          return {x: 0, y: 0};
        var a4, i3, r5 = e8.x, s4 = e8.y, o4 = r5 + n5.left, c3 = s4 + n5.top;
        if (t9.type === "touchstart") {
          var u3 = t9;
          a4 = u3.changedTouches[0].pageX - o4, i3 = u3.changedTouches[0].pageY - c3;
        } else {
          var l3 = t9;
          a4 = l3.pageX - o4, i3 = l3.pageY - c3;
        }
        return {x: a4, y: i3};
      }(n4, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : {x: this.frame_.width / 2, y: this.frame_.height / 2}).x - this.initialSize_ / 2, y: t8.y - this.initialSize_ / 2}, endPoint: {x: this.frame_.width / 2 - this.initialSize_ / 2, y: this.frame_.height / 2 - this.initialSize_ / 2}};
    }, e6.prototype.runDeactivationUXLogicIfReady_ = function() {
      var t8 = this, n4 = e6.cssClasses.FG_DEACTIVATION, a4 = this.activationState_, i3 = a4.hasDeactivationUXRun, r5 = a4.isActivated;
      (i3 || !r5) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter.addClass(n4), this.fgDeactivationRemovalTimer_ = setTimeout(function() {
        t8.adapter.removeClass(n4);
      }, it2.FG_DEACTIVATION_MS));
    }, e6.prototype.rmBoundedActivationClasses_ = function() {
      var t8 = e6.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t8), this.activationAnimationHasEnded_ = false, this.adapter.computeBoundingRect();
    }, e6.prototype.resetActivationState_ = function() {
      var t8 = this;
      this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout(function() {
        return t8.previousActivationEvent_ = void 0;
      }, e6.numbers.TAP_DELAY_MS);
    }, e6.prototype.deactivate_ = function() {
      var t8 = this, e7 = this.activationState_;
      if (e7.isActivated) {
        var n4 = Z({}, e7);
        e7.isProgrammatic ? (requestAnimationFrame(function() {
          return t8.animateDeactivation_(n4);
        }), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame(function() {
          t8.activationState_.hasDeactivationUXRun = true, t8.animateDeactivation_(n4), t8.resetActivationState_();
        }));
      }
    }, e6.prototype.animateDeactivation_ = function(t8) {
      var e7 = t8.wasActivatedByPointer, n4 = t8.wasElementMadeActive;
      (e7 || n4) && this.runDeactivationUXLogicIfReady_();
    }, e6.prototype.layoutInternal_ = function() {
      var t8 = this;
      this.frame_ = this.adapter.computeBoundingRect();
      var n4 = Math.max(this.frame_.height, this.frame_.width);
      this.maxRadius_ = this.adapter.isUnbounded() ? n4 : Math.sqrt(Math.pow(t8.frame_.width, 2) + Math.pow(t8.frame_.height, 2)) + e6.numbers.PADDING;
      var a4 = Math.floor(n4 * e6.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a4 % 2 != 0 ? this.initialSize_ = a4 - 1 : this.initialSize_ = a4, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_();
    }, e6.prototype.updateLayoutCssVars_ = function() {
      var t8 = e6.strings, n4 = t8.VAR_FG_SIZE, a4 = t8.VAR_LEFT, i3 = t8.VAR_TOP, r5 = t8.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n4, this.initialSize_ + "px"), this.adapter.updateCssVariable(r5, this.fgScale_), this.adapter.isUnbounded() && (this.unboundedCoords_ = {left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2), top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)}, this.adapter.updateCssVariable(a4, this.unboundedCoords_.left + "px"), this.adapter.updateCssVariable(i3, this.unboundedCoords_.top + "px"));
    }, e6;
  }(J2);
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
  var {applyPassive: ut} = K;
  var {matches: lt2} = et;
  function dt(t7, {ripple: e6 = true, surface: n4 = false, unbounded: a4 = false, disabled: i3 = false, color: r5 = null, active: s4 = null, eventTarget: o4 = null, activeTarget: c3 = null, addClass: u3 = (e7) => t7.classList.add(e7), removeClass: l3 = (e7) => t7.classList.remove(e7), addStyle: d4 = (e7, n5) => t7.style.setProperty(e7, n5), initPromise: p3 = Promise.resolve()} = {}) {
    let f3, v5, h3 = D2("SMUI:addLayoutListener"), m4 = s4, _3 = o4, g3 = c3;
    function y3() {
      n4 && (u3("mdc-ripple-surface"), r5 === "primary" ? (u3("smui-ripple-surface--primary"), l3("smui-ripple-surface--secondary")) : r5 === "secondary" ? (l3("smui-ripple-surface--primary"), u3("smui-ripple-surface--secondary")) : (l3("smui-ripple-surface--primary"), l3("smui-ripple-surface--secondary"))), f3 && m4 !== s4 && (m4 = s4, s4 ? f3.activate() : s4 === false && f3.deactivate()), e6 && !f3 ? (f3 = new ct2({addClass: u3, browserSupportsCssVars: () => function(t8, e7) {
        e7 === void 0 && (e7 = false);
        var n5, a5 = t8.CSS;
        if (typeof X == "boolean" && !e7)
          return X;
        if (!a5 || typeof a5.supports != "function")
          return false;
        var i4 = a5.supports("--css-vars", "yes"), r6 = a5.supports("(--css-vars: yes)") && a5.supports("color", "#00000000");
        return n5 = i4 || r6, e7 || (X = n5), n5;
      }(window), computeBoundingRect: () => t7.getBoundingClientRect(), containsEventTarget: (e7) => t7.contains(e7), deregisterDocumentInteractionHandler: (t8, e7) => document.documentElement.removeEventListener(t8, e7, ut()), deregisterInteractionHandler: (e7, n5) => (o4 || t7).removeEventListener(e7, n5, ut()), deregisterResizeHandler: (t8) => window.removeEventListener("resize", t8), getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}), isSurfaceActive: () => s4 == null ? lt2(c3 || t7, ":active") : s4, isSurfaceDisabled: () => !!i3, isUnbounded: () => !!a4, registerDocumentInteractionHandler: (t8, e7) => document.documentElement.addEventListener(t8, e7, ut()), registerInteractionHandler: (e7, n5) => (o4 || t7).addEventListener(e7, n5, ut()), registerResizeHandler: (t8) => window.addEventListener("resize", t8), removeClass: l3, updateCssVariable: d4}), p3.then(() => {
        f3.init(), f3.setUnbounded(a4);
      })) : f3 && !e6 && p3.then(() => {
        f3.destroy(), f3 = null;
      }), !f3 || _3 === o4 && g3 === c3 || (_3 = o4, g3 = c3, f3.destroy(), requestAnimationFrame(() => {
        f3 && (f3.init(), f3.setUnbounded(a4));
      })), !e6 && a4 && u3("mdc-ripple-upgraded--unbounded");
    }
    return y3(), h3 && (v5 = h3(function() {
      f3 && f3.layout();
    })), {update(f4) {
      ({ripple: e6, surface: n4, unbounded: a4, disabled: i3, color: r5, active: s4, eventTarget: o4, activeTarget: c3, addClass: u3, removeClass: l3, addStyle: d4, initPromise: p3} = {ripple: true, surface: false, unbounded: false, disabled: false, color: null, active: null, eventTarget: null, activeTarget: null, addClass: (e7) => t7.classList.add(e7), removeClass: (e7) => t7.classList.remove(e7), addStyle: (e7, n5) => t7.style.setProperty(e7, n5), initPromise: Promise.resolve(), ...f4}), y3();
    }, destroy() {
      f3 && (f3.destroy(), f3 = null, l3("mdc-ripple-surface"), l3("smui-ripple-surface--primary"), l3("smui-ripple-surface--secondary")), v5 && v5();
    }};
  }
  function pt(t7) {
    let e6, n4, a4, i3, r5;
    const s4 = t7[7].default, o4 = u2(s4, t7, t7[6], null);
    let c3 = [{href: t7[0]}, t7[4]], u3 = {};
    for (let t8 = 0; t8 < c3.length; t8 += 1)
      u3 = e3(u3, c3[t8]);
    return {c() {
      e6 = x2("a"), o4 && o4.c(), I(e6, u3);
    }, m(s5, c4) {
      b2(s5, e6, c4), o4 && o4.m(e6, null), t7[8](e6), a4 = true, i3 || (r5 = [y2(n4 = q3.call(null, e6, t7[1])), y2(t7[3].call(null, e6))], i3 = true);
    }, p(t8, [i4]) {
      o4 && o4.p && 64 & i4 && f2(o4, s4, t8, t8[6], i4, null, null), I(e6, u3 = ht(c3, [(!a4 || 1 & i4) && {href: t8[0]}, 16 & i4 && t8[4]])), n4 && s2(n4.update) && 2 & i4 && n4.update.call(null, t8[1]);
    }, i(t8) {
      a4 || (ct(o4, t8), a4 = true);
    }, o(t8) {
      lt(o4, t8), a4 = false;
    }, d(n5) {
      n5 && w2(e6), o4 && o4.d(n5), t7[8](null), i3 = false, r2(r5);
    }};
  }
  function ft(t7, e6, n4) {
    const a4 = ["href", "use", "getElement"];
    let i3 = h2(e6, a4), {$$slots: r5 = {}, $$scope: s4} = e6, {href: o4 = "javascript:void(0);"} = e6, {use: c3 = []} = e6;
    const u3 = x3(R2());
    let l3 = null;
    return t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(4, i3 = h2(e6, a4)), "href" in t8 && n4(0, o4 = t8.href), "use" in t8 && n4(1, c3 = t8.use), "$$scope" in t8 && n4(6, s4 = t8.$$scope);
    }, [o4, c3, l3, u3, i3, function() {
      return l3;
    }, s4, r5, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        l3 = t8, n4(2, l3);
      });
    }];
  }
  var vt = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, ft, pt, i2, {href: 0, use: 1, getElement: 5});
    }
    get getElement() {
      return this.$$.ctx[5];
    }
  };
  function ht2(t7) {
    let e6, n4, a4, i3, r5;
    const s4 = t7[6].default, o4 = u2(s4, t7, t7[5], null);
    let c3 = [t7[3]], u3 = {};
    for (let t8 = 0; t8 < c3.length; t8 += 1)
      u3 = e3(u3, c3[t8]);
    return {c() {
      e6 = x2("div"), o4 && o4.c(), I(e6, u3);
    }, m(s5, c4) {
      b2(s5, e6, c4), o4 && o4.m(e6, null), t7[7](e6), a4 = true, i3 || (r5 = [y2(n4 = q3.call(null, e6, t7[0])), y2(t7[2].call(null, e6))], i3 = true);
    }, p(t8, [a5]) {
      o4 && o4.p && 32 & a5 && f2(o4, s4, t8, t8[5], a5, null, null), I(e6, u3 = ht(c3, [8 & a5 && t8[3]])), n4 && s2(n4.update) && 1 & a5 && n4.update.call(null, t8[0]);
    }, i(t8) {
      a4 || (ct(o4, t8), a4 = true);
    }, o(t8) {
      lt(o4, t8), a4 = false;
    }, d(n5) {
      n5 && w2(e6), o4 && o4.d(n5), t7[7](null), i3 = false, r2(r5);
    }};
  }
  function mt2(t7, e6, n4) {
    const a4 = ["use", "getElement"];
    let i3 = h2(e6, a4), {$$slots: r5 = {}, $$scope: s4} = e6, {use: o4 = []} = e6;
    const c3 = x3(R2());
    let u3 = null;
    return t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(3, i3 = h2(e6, a4)), "use" in t8 && n4(0, o4 = t8.use), "$$scope" in t8 && n4(5, s4 = t8.$$scope);
    }, [o4, u3, c3, i3, function() {
      return u3;
    }, s4, r5, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        u3 = t8, n4(1, u3);
      });
    }];
  }
  var _t2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, mt2, ht2, i2, {use: 0, getElement: 4});
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };

  // ../../dist/build/CommonLabel-6caef000.js
  function q4(t7) {
    let a4, n4, f3, $2, g3;
    const h3 = t7[6].default, y3 = u2(h3, t7, t7[5], null);
    let x4 = [t7[3]], v5 = {};
    for (let t8 = 0; t8 < x4.length; t8 += 1)
      v5 = e3(v5, x4[t8]);
    return {c() {
      a4 = x2("button"), y3 && y3.c(), I(a4, v5);
    }, m(e6, c3) {
      b2(e6, a4, c3), y3 && y3.m(a4, null), t7[7](a4), f3 = true, $2 || (g3 = [y2(n4 = q3.call(null, a4, t7[0])), y2(t7[2].call(null, a4))], $2 = true);
    }, p(t8, [e6]) {
      y3 && y3.p && 32 & e6 && f2(y3, h3, t8, t8[5], e6, null, null), I(a4, v5 = ht(x4, [8 & e6 && t8[3]])), n4 && s2(n4.update) && 1 & e6 && n4.update.call(null, t8[0]);
    }, i(t8) {
      f3 || (ct(y3, t8), f3 = true);
    }, o(t8) {
      lt(y3, t8), f3 = false;
    }, d(n5) {
      n5 && w2(a4), y3 && y3.d(n5), t7[7](null), $2 = false, r2(g3);
    }};
  }
  function F3(t7, a4, n4) {
    const e6 = ["use", "getElement"];
    let l3 = h2(a4, e6), {$$slots: o4 = {}, $$scope: s4} = a4, {use: i3 = []} = a4;
    const r5 = x3(R2());
    let d4 = null;
    return t7.$$set = (t8) => {
      a4 = e3(e3({}, a4), d2(t8)), n4(3, l3 = h2(a4, e6)), "use" in t8 && n4(0, i3 = t8.use), "$$scope" in t8 && n4(5, s4 = t8.$$scope);
    }, [i3, d4, r5, l3, function() {
      return d4;
    }, s4, o4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        d4 = t8, n4(1, d4);
      });
    }];
  }
  var G2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, F3, q4, i2, {use: 0, getElement: 4});
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  function H3(t7) {
    let a4;
    return {c() {
      a4 = x2("div"), L3(a4, "class", "mdc-button__touch");
    }, m(t8, n4) {
      b2(t8, a4, n4);
    }, d(t8) {
      t8 && w2(a4);
    }};
  }
  function P3(t7) {
    let a4, n4, c3, o4;
    const i3 = t7[26].default, d4 = u2(i3, t7, t7[28], null);
    let u3 = t7[6] && H3();
    return {c() {
      a4 = x2("div"), n4 = P2(), d4 && d4.c(), u3 && u3.c(), c3 = k2(), L3(a4, "class", "mdc-button__ripple");
    }, m(t8, e6) {
      b2(t8, a4, e6), b2(t8, n4, e6), d4 && d4.m(t8, e6), u3 && u3.m(t8, e6), b2(t8, c3, e6), o4 = true;
    }, p(t8, a5) {
      d4 && d4.p && 268435456 & a5 && f2(d4, i3, t8, t8[28], a5, null, null), t8[6] ? u3 || (u3 = H3(), u3.c(), u3.m(c3.parentNode, c3)) : u3 && (u3.d(1), u3 = null);
    }, i(t8) {
      o4 || (ct(d4, t8), o4 = true);
    }, o(t8) {
      lt(d4, t8), o4 = false;
    }, d(t8) {
      t8 && w2(a4), t8 && w2(n4), d4 && d4.d(t8), u3 && u3.d(t8), t8 && w2(c3);
    }};
  }
  function Q2(t7) {
    let a4, n4, e6;
    const l3 = [{use: [[dt, {ripple: t7[3], unbounded: false, color: t7[4], disabled: !!t7[22].disabled, addClass: t7[18], removeClass: t7[19], addStyle: t7[20]}], t7[16], ...t7[0]]}, {class: N2({[t7[1]]: true, "mdc-button": true, "mdc-button--raised": t7[5] === "raised", "mdc-button--unelevated": t7[5] === "unelevated", "mdc-button--outlined": t7[5] === "outlined", "smui-button--color-secondary": t7[4] === "secondary", "mdc-button--touch": t7[6], "mdc-card__action": t7[17] === "card:action", "mdc-card__action--button": t7[17] === "card:action", "mdc-dialog__button": t7[17] === "dialog:action", "mdc-top-app-bar__navigation-icon": t7[17] === "top-app-bar:navigation", "mdc-top-app-bar__action-item": t7[17] === "top-app-bar:action", "mdc-snackbar__action": t7[17] === "snackbar:actions", "mdc-banner__secondary-action": t7[17] === "banner" && t7[8], "mdc-banner__primary-action": t7[17] === "banner" && !t7[8], "mdc-tooltip__action": t7[17] === "tooltip:rich-actions", ...t7[11]})}, {style: Object.entries(t7[12]).map(R3).concat([t7[2]]).join(" ")}, t7[13], t7[14], t7[15], {href: t7[7]}, t7[22]];
    var o4 = t7[9];
    function i3(t8) {
      let a5 = {$$slots: {default: [P3]}, $$scope: {ctx: t8}};
      for (let t9 = 0; t9 < l3.length; t9 += 1)
        a5 = e3(a5, l3[t9]);
      return {props: a5};
    }
    return o4 && (a4 = new o4(i3(t7)), t7[27](a4), a4.$on("click", t7[21])), {c() {
      a4 && yt(a4.$$.fragment), n4 = k2();
    }, m(t8, c3) {
      a4 && $t(a4, t8, c3), b2(t8, n4, c3), e6 = true;
    }, p(t8, [e7]) {
      const c3 = 6289919 & e7 ? ht(l3, [6094873 & e7 && {use: [[dt, {ripple: t8[3], unbounded: false, color: t8[4], disabled: !!t8[22].disabled, addClass: t8[18], removeClass: t8[19], addStyle: t8[20]}], t8[16], ...t8[0]]}, 133490 & e7 && {class: N2({[t8[1]]: true, "mdc-button": true, "mdc-button--raised": t8[5] === "raised", "mdc-button--unelevated": t8[5] === "unelevated", "mdc-button--outlined": t8[5] === "outlined", "smui-button--color-secondary": t8[4] === "secondary", "mdc-button--touch": t8[6], "mdc-card__action": t8[17] === "card:action", "mdc-card__action--button": t8[17] === "card:action", "mdc-dialog__button": t8[17] === "dialog:action", "mdc-top-app-bar__navigation-icon": t8[17] === "top-app-bar:navigation", "mdc-top-app-bar__action-item": t8[17] === "top-app-bar:action", "mdc-snackbar__action": t8[17] === "snackbar:actions", "mdc-banner__secondary-action": t8[17] === "banner" && t8[8], "mdc-banner__primary-action": t8[17] === "banner" && !t8[8], "mdc-tooltip__action": t8[17] === "tooltip:rich-actions", ...t8[11]})}, 4100 & e7 && {style: Object.entries(t8[12]).map(R3).concat([t8[2]]).join(" ")}, 8192 & e7 && mt(t8[13]), 16384 & e7 && mt(t8[14]), 32768 & e7 && mt(t8[15]), 128 & e7 && {href: t8[7]}, 4194304 & e7 && mt(t8[22])]) : {};
      if (268435520 & e7 && (c3.$$scope = {dirty: e7, ctx: t8}), o4 !== (o4 = t8[9])) {
        if (a4) {
          it();
          const t9 = a4;
          lt(t9.$$.fragment, 1, 0, () => {
            bt(t9, 1);
          }), at();
        }
        o4 ? (a4 = new o4(i3(t8)), t8[27](a4), a4.$on("click", t8[21]), yt(a4.$$.fragment), ct(a4.$$.fragment, 1), $t(a4, n4.parentNode, n4)) : a4 = null;
      } else
        o4 && a4.$set(c3);
    }, i(t8) {
      e6 || (a4 && ct(a4.$$.fragment, t8), e6 = true);
    }, o(t8) {
      a4 && lt(a4.$$.fragment, t8), e6 = false;
    }, d(e7) {
      t7[27](null), e7 && w2(n4), a4 && bt(a4, e7);
    }};
  }
  var R3 = ([t7, a4]) => `${t7}: ${a4};`;
  function z2(t7, a4, n4) {
    let e6, l3, o4;
    const s4 = ["use", "class", "style", "ripple", "color", "variant", "touch", "href", "action", "default", "secondary", "component", "getElement"];
    let i3 = h2(a4, s4), {$$slots: r5 = {}, $$scope: d4} = a4;
    const u3 = x3(R2());
    let b5, {use: m4 = []} = a4, {class: p3 = ""} = a4, {style: _3 = ""} = a4, {ripple: y3 = true} = a4, {color: x4 = "primary"} = a4, {variant: v5 = "text"} = a4, {touch: k5 = false} = a4, {href: E4 = null} = a4, {action: S5 = "close"} = a4, {default: C4 = false} = a4, {secondary: M3 = false} = a4, U5 = {}, w4 = {}, B5 = D2("SMUI:button:context"), {component: D4 = E4 == null ? G2 : vt} = a4;
    function q7() {
      return b5.getElement();
    }
    return U2("SMUI:label:context", "button"), U2("SMUI:icon:context", "button"), t7.$$set = (t8) => {
      n4(29, a4 = e3(e3({}, a4), d2(t8))), n4(22, i3 = h2(a4, s4)), "use" in t8 && n4(0, m4 = t8.use), "class" in t8 && n4(1, p3 = t8.class), "style" in t8 && n4(2, _3 = t8.style), "ripple" in t8 && n4(3, y3 = t8.ripple), "color" in t8 && n4(4, x4 = t8.color), "variant" in t8 && n4(5, v5 = t8.variant), "touch" in t8 && n4(6, k5 = t8.touch), "href" in t8 && n4(7, E4 = t8.href), "action" in t8 && n4(23, S5 = t8.action), "default" in t8 && n4(24, C4 = t8.default), "secondary" in t8 && n4(8, M3 = t8.secondary), "component" in t8 && n4(9, D4 = t8.component), "$$scope" in t8 && n4(28, d4 = t8.$$scope);
    }, t7.$$.update = () => {
      n4(13, e6 = B5 === "dialog:action" && S5 != null ? {"data-mdc-dialog-action": S5} : {action: a4.action}), n4(14, l3 = B5 === "dialog:action" && C4 ? {"data-mdc-dialog-button-default": ""} : {default: a4.default}), n4(15, o4 = B5 === "banner" ? {} : {secondary: a4.secondary});
    }, a4 = d2(a4), [m4, p3, _3, y3, x4, v5, k5, E4, M3, D4, b5, U5, w4, e6, l3, o4, u3, B5, function(t8) {
      U5[t8] || n4(11, U5[t8] = true, U5);
    }, function(t8) {
      t8 in U5 && !U5[t8] || n4(11, U5[t8] = false, U5);
    }, function(t8, a5) {
      w4[t8] != a5 && (a5 === "" || a5 == null ? (delete w4[t8], n4(12, w4)) : n4(12, w4[t8] = a5, w4));
    }, function() {
      B5 === "banner" && k3(q7(), M3 ? "SMUI:banner:button:secondaryActionClick" : "SMUI:banner:button:primaryActionClick");
    }, i3, S5, C4, q7, r5, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        b5 = t8, n4(10, b5);
      });
    }, d4];
  }
  var J3 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, z2, Q2, i2, {use: 0, class: 1, style: 2, ripple: 3, color: 4, variant: 5, touch: 6, href: 7, action: 23, default: 24, secondary: 8, component: 9, getElement: 25});
    }
    get getElement() {
      return this.$$.ctx[25];
    }
  };
  function K2(t7) {
    let a4, n4, f3, $2, g3, h3;
    const y3 = t7[9].default, x4 = u2(y3, t7, t7[8], null);
    let v5 = [{class: n4 = N2({[t7[1]]: true, "mdc-button__label": t7[4] === "button", "mdc-fab__label": t7[4] === "fab", "mdc-tab__text-label": t7[4] === "tab", "mdc-image-list__label": t7[4] === "image-list", "mdc-snackbar__label": t7[4] === "snackbar", "mdc-banner__text": t7[4] === "banner", "mdc-segmented-button__label": t7[4] === "segmented-button", "mdc-data-table__pagination-rows-per-page-label": t7[4] === "data-table:pagination", "mdc-data-table__header-cell-label": t7[4] === "data-table:sortable-header-cell"})}, t7[4] === "snackbar" ? {"aria-atomic": "false"} : {}, {tabindex: t7[5]}, t7[6]], k5 = {};
    for (let t8 = 0; t8 < v5.length; t8 += 1)
      k5 = e3(k5, v5[t8]);
    return {c() {
      a4 = x2("span"), x4 && x4.c(), I(a4, k5);
    }, m(n5, e6) {
      b2(n5, a4, e6), x4 && x4.m(a4, null), t7[10](a4), $2 = true, g3 || (h3 = [y2(f3 = q3.call(null, a4, t7[0])), y2(t7[3].call(null, a4))], g3 = true);
    }, p(t8, [e6]) {
      x4 && x4.p && 256 & e6 && f2(x4, y3, t8, t8[8], e6, null, null), I(a4, k5 = ht(v5, [(!$2 || 2 & e6 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-button__label": t8[4] === "button", "mdc-fab__label": t8[4] === "fab", "mdc-tab__text-label": t8[4] === "tab", "mdc-image-list__label": t8[4] === "image-list", "mdc-snackbar__label": t8[4] === "snackbar", "mdc-banner__text": t8[4] === "banner", "mdc-segmented-button__label": t8[4] === "segmented-button", "mdc-data-table__pagination-rows-per-page-label": t8[4] === "data-table:pagination", "mdc-data-table__header-cell-label": t8[4] === "data-table:sortable-header-cell"}))) && {class: n4}, t8[4] === "snackbar" ? {"aria-atomic": "false"} : {}, {tabindex: t8[5]}, 64 & e6 && t8[6]])), f3 && s2(f3.update) && 1 & e6 && f3.update.call(null, t8[0]);
    }, i(t8) {
      $2 || (ct(x4, t8), $2 = true);
    }, o(t8) {
      lt(x4, t8), $2 = false;
    }, d(n5) {
      n5 && w2(a4), x4 && x4.d(n5), t7[10](null), g3 = false, r2(h3);
    }};
  }
  function L4(t7, a4, n4) {
    const e6 = ["use", "class", "getElement"];
    let l3 = h2(a4, e6), {$$slots: o4 = {}, $$scope: s4} = a4;
    const i3 = x3(R2());
    let r5, {use: d4 = []} = a4, {class: u3 = ""} = a4;
    const b5 = D2("SMUI:label:context"), m4 = D2("SMUI:label:tabindex");
    return t7.$$set = (t8) => {
      a4 = e3(e3({}, a4), d2(t8)), n4(6, l3 = h2(a4, e6)), "use" in t8 && n4(0, d4 = t8.use), "class" in t8 && n4(1, u3 = t8.class), "$$scope" in t8 && n4(8, s4 = t8.$$scope);
    }, [d4, u3, r5, i3, b5, m4, l3, function() {
      return r5;
    }, s4, o4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        r5 = t8, n4(2, r5);
      });
    }];
  }
  var T2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, L4, K2, i2, {use: 0, class: 1, getElement: 7});
    }
    get getElement() {
      return this.$$.ctx[7];
    }
  };

  // ../../dist/build/action-13692ce5.js
  function H4(t7) {
    let s4, e6, g3, x4, _3, h3;
    const v5 = t7[9].default, w4 = u2(v5, t7, t7[8], null);
    let b5 = [{class: e6 = N2({[t7[1]]: true, "mdc-card": true, "mdc-card--outlined": t7[2] === "outlined", "smui-card--padded": t7[3]})}, t7[6]], B5 = {};
    for (let t8 = 0; t8 < b5.length; t8 += 1)
      B5 = e3(B5, b5[t8]);
    return {c() {
      s4 = x2("div"), w4 && w4.c(), I(s4, B5);
    }, m(e7, n4) {
      b2(e7, s4, n4), w4 && w4.m(s4, null), t7[10](s4), x4 = true, _3 || (h3 = [y2(g3 = q3.call(null, s4, t7[0])), y2(t7[5].call(null, s4))], _3 = true);
    }, p(t8, [n4]) {
      w4 && w4.p && 256 & n4 && f2(w4, v5, t8, t8[8], n4, null, null), I(s4, B5 = ht(b5, [(!x4 || 14 & n4 && e6 !== (e6 = N2({[t8[1]]: true, "mdc-card": true, "mdc-card--outlined": t8[2] === "outlined", "smui-card--padded": t8[3]}))) && {class: e6}, 64 & n4 && t8[6]])), g3 && s2(g3.update) && 1 & n4 && g3.update.call(null, t8[0]);
    }, i(t8) {
      x4 || (ct(w4, t8), x4 = true);
    }, o(t8) {
      lt(w4, t8), x4 = false;
    }, d(e7) {
      e7 && w2(s4), w4 && w4.d(e7), t7[10](null), _3 = false, r2(h3);
    }};
  }
  function J4(t7, s4, e6) {
    const n4 = ["use", "class", "variant", "padded", "getElement"];
    let a4 = h2(s4, n4), {$$slots: l3 = {}, $$scope: o4} = s4;
    const r5 = x3(R2());
    let d4, {use: u3 = []} = s4, {class: i3 = ""} = s4, {variant: $2 = "raised"} = s4, {padded: m4 = false} = s4;
    return t7.$$set = (t8) => {
      s4 = e3(e3({}, s4), d2(t8)), e6(6, a4 = h2(s4, n4)), "use" in t8 && e6(0, u3 = t8.use), "class" in t8 && e6(1, i3 = t8.class), "variant" in t8 && e6(2, $2 = t8.variant), "padded" in t8 && e6(3, m4 = t8.padded), "$$scope" in t8 && e6(8, o4 = t8.$$scope);
    }, [u3, i3, $2, m4, d4, r5, a4, function() {
      return d4;
    }, o4, l3, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        d4 = t8, e6(4, d4);
      });
    }];
  }
  var K3 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, J4, H4, i2, {use: 0, class: 1, variant: 2, padded: 3, getElement: 7});
    }
    get getElement() {
      return this.$$.ctx[7];
    }
  };
  var W2 = B2({class: "smui-card__content", component: _t2});
  var q5 = B2({class: "mdc-card__media-content", component: _t2});
  function z3(t7) {
    let s4, e6, g3, x4, _3, h3;
    const v5 = t7[8].default, w4 = u2(v5, t7, t7[7], null);
    let b5 = [{class: e6 = N2({[t7[1]]: true, "mdc-card__actions": true, "mdc-card__actions--full-bleed": t7[2]})}, t7[5]], B5 = {};
    for (let t8 = 0; t8 < b5.length; t8 += 1)
      B5 = e3(B5, b5[t8]);
    return {c() {
      s4 = x2("div"), w4 && w4.c(), I(s4, B5);
    }, m(e7, n4) {
      b2(e7, s4, n4), w4 && w4.m(s4, null), t7[9](s4), x4 = true, _3 || (h3 = [y2(g3 = q3.call(null, s4, t7[0])), y2(t7[4].call(null, s4))], _3 = true);
    }, p(t8, [n4]) {
      w4 && w4.p && 128 & n4 && f2(w4, v5, t8, t8[7], n4, null, null), I(s4, B5 = ht(b5, [(!x4 || 6 & n4 && e6 !== (e6 = N2({[t8[1]]: true, "mdc-card__actions": true, "mdc-card__actions--full-bleed": t8[2]}))) && {class: e6}, 32 & n4 && t8[5]])), g3 && s2(g3.update) && 1 & n4 && g3.update.call(null, t8[0]);
    }, i(t8) {
      x4 || (ct(w4, t8), x4 = true);
    }, o(t8) {
      lt(w4, t8), x4 = false;
    }, d(e7) {
      e7 && w2(s4), w4 && w4.d(e7), t7[9](null), _3 = false, r2(h3);
    }};
  }
  function N3(t7, s4, e6) {
    const n4 = ["use", "class", "fullBleed", "getElement"];
    let a4 = h2(s4, n4), {$$slots: l3 = {}, $$scope: o4} = s4;
    const r5 = x3(R2());
    let d4, {use: u3 = []} = s4, {class: i3 = ""} = s4, {fullBleed: $2 = false} = s4;
    return U2("SMUI:button:context", "card:action"), U2("SMUI:icon-button:context", "card:action"), t7.$$set = (t8) => {
      s4 = e3(e3({}, s4), d2(t8)), e6(5, a4 = h2(s4, n4)), "use" in t8 && e6(0, u3 = t8.use), "class" in t8 && e6(1, i3 = t8.class), "fullBleed" in t8 && e6(2, $2 = t8.fullBleed), "$$scope" in t8 && e6(7, o4 = t8.$$scope);
    }, [u3, i3, $2, d4, r5, a4, function() {
      return d4;
    }, o4, l3, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        d4 = t8, e6(3, d4);
      });
    }];
  }
  var O3 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, N3, z3, i2, {use: 0, class: 1, fullBleed: 2, getElement: 6});
    }
    get getElement() {
      return this.$$.ctx[6];
    }
  };
  var P4 = B2({class: "mdc-card__action-buttons", component: _t2});
  var Q3 = B2({class: "mdc-card__action-icons", component: _t2});
  function R4(t7) {
    let s4;
    return {c() {
      s4 = v2(t7[0]);
    }, m(t8, e6) {
      b2(t8, s4, e6);
    }, p(t8, e6) {
      1 & e6 && T3(s4, t8[0]);
    }, d(t8) {
      t8 && w2(s4);
    }};
  }
  function T4(t7) {
    let s4;
    return {c() {
      s4 = v2(t7[3]);
    }, m(t8, e6) {
      b2(t8, s4, e6);
    }, p(t8, e6) {
      8 & e6 && T3(s4, t8[3]);
    }, d(t8) {
      t8 && w2(s4);
    }};
  }
  function V2(t7) {
    let s4, e6, n4, c3, l3;
    return s4 = new T2({props: {$$slots: {default: [T4]}, $$scope: {ctx: t7}}}), {c() {
      yt(s4.$$.fragment), e6 = P2(), n4 = x2("i"), c3 = v2(t7[1]), L3(n4, "class", "material-icons"), L3(n4, "aria-hidden", "true");
    }, m(t8, a4) {
      $t(s4, t8, a4), b2(t8, e6, a4), b2(t8, n4, a4), $(n4, c3), l3 = true;
    }, p(t8, e7) {
      const n5 = {};
      72 & e7 && (n5.$$scope = {dirty: e7, ctx: t8}), s4.$set(n5), (!l3 || 2 & e7) && T3(c3, t8[1]);
    }, i(t8) {
      l3 || (ct(s4.$$.fragment, t8), l3 = true);
    }, o(t8) {
      lt(s4.$$.fragment, t8), l3 = false;
    }, d(t8) {
      bt(s4, t8), t8 && w2(e6), t8 && w2(n4);
    }};
  }
  function X2(t7) {
    let s4, e6;
    return s4 = new J3({props: {$$slots: {default: [V2]}, $$scope: {ctx: t7}}}), s4.$on("click", t7[5]), {c() {
      yt(s4.$$.fragment);
    }, m(t8, n4) {
      $t(s4, t8, n4), e6 = true;
    }, p(t8, e7) {
      const n4 = {};
      74 & e7 && (n4.$$scope = {dirty: e7, ctx: t8}), s4.$set(n4);
    }, i(t8) {
      e6 || (ct(s4.$$.fragment, t8), e6 = true);
    }, o(t8) {
      lt(s4.$$.fragment, t8), e6 = false;
    }, d(t8) {
      bt(s4, t8);
    }};
  }
  function Y2(t7) {
    let s4, e6, n4, c3;
    return s4 = new W2({props: {$$slots: {default: [R4]}, $$scope: {ctx: t7}}}), n4 = new O3({props: {fullBleed: true, $$slots: {default: [X2]}, $$scope: {ctx: t7}}}), {c() {
      yt(s4.$$.fragment), e6 = P2(), yt(n4.$$.fragment);
    }, m(t8, a4) {
      $t(s4, t8, a4), b2(t8, e6, a4), $t(n4, t8, a4), c3 = true;
    }, p(t8, e7) {
      const c4 = {};
      65 & e7 && (c4.$$scope = {dirty: e7, ctx: t8}), s4.$set(c4);
      const a4 = {};
      94 & e7 && (a4.$$scope = {dirty: e7, ctx: t8}), n4.$set(a4);
    }, i(t8) {
      c3 || (ct(s4.$$.fragment, t8), ct(n4.$$.fragment, t8), c3 = true);
    }, o(t8) {
      lt(s4.$$.fragment, t8), lt(n4.$$.fragment, t8), c3 = false;
    }, d(t8) {
      bt(s4, t8), t8 && w2(e6), bt(n4, t8);
    }};
  }
  function Z2(t7) {
    let s4, e6;
    return s4 = new K3({props: {$$slots: {default: [Y2]}, $$scope: {ctx: t7}}}), {c() {
      yt(s4.$$.fragment);
    }, m(t8, n4) {
      $t(s4, t8, n4), e6 = true;
    }, p(t8, [e7]) {
      const n4 = {};
      95 & e7 && (n4.$$scope = {dirty: e7, ctx: t8}), s4.$set(n4);
    }, i(t8) {
      e6 || (ct(s4.$$.fragment, t8), e6 = true);
    }, o(t8) {
      lt(s4.$$.fragment, t8), e6 = false;
    }, d(t8) {
      bt(s4, t8);
    }};
  }
  function tt2(t7, s4, e6) {
    let n4;
    l2(t7, se, (t8) => e6(4, n4 = t8));
    let {text: c3 = "Whoops something went wrong!"} = s4, {icon: a4 = "arrow_forward"} = s4, {direct: l3 = "./"} = s4, {action: o4 = "Go back"} = s4;
    return t7.$$set = (t8) => {
      "text" in t8 && e6(0, c3 = t8.text), "icon" in t8 && e6(1, a4 = t8.icon), "direct" in t8 && e6(2, l3 = t8.direct), "action" in t8 && e6(3, o4 = t8.action);
    }, [c3, a4, l3, o4, n4, () => {
      n4(l3);
    }];
  }
  var st2 = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, tt2, Z2, i2, {text: 0, icon: 1, direct: 2, action: 3});
    }
  };

  // ../../dist/build/stores-e517b31b.js
  var t2 = Mt(false);
  var o2 = At("https://koala.stream");
  var m2 = Mt(false);
  var r3 = Mt(false);

  // ../../dist/build/Cell-b58ca746.js
  function w3(l3, n4) {
    let e6 = Object.getOwnPropertyNames(l3);
    const s4 = {};
    for (let t7 = 0; t7 < e6.length; t7++) {
      const c3 = e6[t7], u3 = c3.indexOf("$");
      u3 !== -1 && n4.indexOf(c3.substring(0, u3 + 1)) !== -1 || n4.indexOf(c3) === -1 && (s4[c3] = l3[c3]);
    }
    return s4;
  }
  function G3(l3, n4) {
    let e6 = Object.getOwnPropertyNames(l3);
    const s4 = {};
    for (let t7 = 0; t7 < e6.length; t7++) {
      const c3 = e6[t7];
      c3.substring(0, n4.length) === n4 && (s4[c3.substring(n4.length)] = l3[c3]);
    }
    return s4;
  }
  function W3(l3) {
    let n4, e6, m4, p3, f3, h3;
    const _3 = l3[6].default, y3 = u2(_3, l3, l3[5], null);
    return {c() {
      n4 = x2("div"), y3 && y3.c(), L3(n4, "class", e6 = N2({[l3[1]]: true, "mdc-layout-grid__inner": true}));
    }, m(e7, s4) {
      b2(e7, n4, s4), y3 && y3.m(n4, null), l3[7](n4), p3 = true, f3 || (h3 = [y2(m4 = q3.call(null, n4, l3[0])), y2(l3[3].call(null, n4))], f3 = true);
    }, p(l4, [s4]) {
      y3 && y3.p && 32 & s4 && f2(y3, _3, l4, l4[5], s4, null, null), (!p3 || 2 & s4 && e6 !== (e6 = N2({[l4[1]]: true, "mdc-layout-grid__inner": true}))) && L3(n4, "class", e6), m4 && s2(m4.update) && 1 & s4 && m4.update.call(null, l4[0]);
    }, i(l4) {
      p3 || (ct(y3, l4), p3 = true);
    }, o(l4) {
      lt(y3, l4), p3 = false;
    }, d(e7) {
      e7 && w2(n4), y3 && y3.d(e7), l3[7](null), f3 = false, r2(h3);
    }};
  }
  function P5(l3, n4, e6) {
    let {$$slots: s4 = {}, $$scope: t7} = n4;
    const c3 = x3(R2());
    let u3, {use: a4 = []} = n4, {class: i3 = ""} = n4;
    return l3.$$set = (l4) => {
      "use" in l4 && e6(0, a4 = l4.use), "class" in l4 && e6(1, i3 = l4.class), "$$scope" in l4 && e6(5, t7 = l4.$$scope);
    }, [a4, i3, u3, c3, function() {
      return u3;
    }, t7, s4, function(l4) {
      J[l4 ? "unshift" : "push"](() => {
        u3 = l4, e6(2, u3);
      });
    }];
  }
  var N4 = class extends _t {
    constructor(l3) {
      super(), wt(this, l3, P5, W3, i2, {use: 0, class: 1, getElement: 4});
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  function k4(l3) {
    let n4;
    const e6 = l3[8].default, t7 = u2(e6, l3, l3[10], null);
    return {c() {
      t7 && t7.c();
    }, m(l4, e7) {
      t7 && t7.m(l4, e7), n4 = true;
    }, p(l4, n5) {
      t7 && t7.p && 1024 & n5 && f2(t7, e6, l4, l4[10], n5, null, null);
    }, i(l4) {
      n4 || (ct(t7, l4), n4 = true);
    }, o(l4) {
      lt(t7, l4), n4 = false;
    }, d(l4) {
      t7 && t7.d(l4);
    }};
  }
  function A2(l3) {
    let n4, e6, s4, c3, i3, m4, p3;
    const b5 = [G3(l3[6], "innerGrid$")];
    let j4 = {$$slots: {default: [k4]}, $$scope: {ctx: l3}};
    for (let l4 = 0; l4 < b5.length; l4 += 1)
      j4 = e3(j4, b5[l4]);
    e6 = new N4({props: j4});
    let D4 = [{class: s4 = N2({[l3[1]]: true, "mdc-layout-grid": true, "mdc-layout-grid--fixed-column-width": l3[2], ["mdc-layout-grid--align-" + l3[3]]: l3[3] != null})}, w3(l3[6], ["innerGrid$"])], W6 = {};
    for (let l4 = 0; l4 < D4.length; l4 += 1)
      W6 = e3(W6, D4[l4]);
    return {c() {
      n4 = x2("div"), yt(e6.$$.fragment), I(n4, W6);
    }, m(s5, t7) {
      b2(s5, n4, t7), $t(e6, n4, null), l3[9](n4), i3 = true, m4 || (p3 = [y2(c3 = q3.call(null, n4, l3[0])), y2(l3[5].call(null, n4))], m4 = true);
    }, p(l4, [t7]) {
      const u3 = 64 & t7 ? ht(b5, [mt(G3(l4[6], "innerGrid$"))]) : {};
      1024 & t7 && (u3.$$scope = {dirty: t7, ctx: l4}), e6.$set(u3), I(n4, W6 = ht(D4, [(!i3 || 14 & t7 && s4 !== (s4 = N2({[l4[1]]: true, "mdc-layout-grid": true, "mdc-layout-grid--fixed-column-width": l4[2], ["mdc-layout-grid--align-" + l4[3]]: l4[3] != null}))) && {class: s4}, 64 & t7 && w3(l4[6], ["innerGrid$"])])), c3 && s2(c3.update) && 1 & t7 && c3.update.call(null, l4[0]);
    }, i(l4) {
      i3 || (ct(e6.$$.fragment, l4), i3 = true);
    }, o(l4) {
      lt(e6.$$.fragment, l4), i3 = false;
    }, d(s5) {
      s5 && w2(n4), bt(e6), l3[9](null), m4 = false, r2(p3);
    }};
  }
  function B3(l3, n4, e6) {
    const s4 = ["use", "class", "fixedColumnWidth", "align", "getElement"];
    let t7 = h2(n4, s4), {$$slots: c3 = {}, $$scope: u3} = n4;
    const a4 = x3(R2());
    let i3, {use: r5 = []} = n4, {class: o4 = ""} = n4, {fixedColumnWidth: d4 = false} = n4, {align: g3 = null} = n4;
    return l3.$$set = (l4) => {
      n4 = e3(e3({}, n4), d2(l4)), e6(6, t7 = h2(n4, s4)), "use" in l4 && e6(0, r5 = l4.use), "class" in l4 && e6(1, o4 = l4.class), "fixedColumnWidth" in l4 && e6(2, d4 = l4.fixedColumnWidth), "align" in l4 && e6(3, g3 = l4.align), "$$scope" in l4 && e6(10, u3 = l4.$$scope);
    }, [r5, o4, d4, g3, i3, a4, t7, function() {
      return i3;
    }, c3, function(l4) {
      J[l4 ? "unshift" : "push"](() => {
        i3 = l4, e6(4, i3);
      });
    }, u3];
  }
  var F4 = class extends _t {
    constructor(l3) {
      super(), wt(this, l3, B3, A2, i2, {use: 0, class: 1, fixedColumnWidth: 2, align: 3, getElement: 7});
    }
    get getElement() {
      return this.$$.ctx[7];
    }
  };
  function H5(l3) {
    let n4, e6, c3, m4, p3, h3;
    const y3 = l3[11].default, E4 = u2(y3, l3, l3[10], null);
    let O5 = [{class: e6 = N2({[l3[1]]: true, "mdc-layout-grid__cell": true, ["mdc-layout-grid__cell--align-" + l3[2]]: l3[2] != null, ["mdc-layout-grid__cell--order-" + l3[3]]: l3[3] != null, ["mdc-layout-grid__cell--span-" + l3[4]]: l3[4] != null, ...Object.fromEntries(Object.entries(l3[5]).map(L5))})}, l3[8]], b5 = {};
    for (let l4 = 0; l4 < O5.length; l4 += 1)
      b5 = e3(b5, O5[l4]);
    return {c() {
      n4 = x2("div"), E4 && E4.c(), I(n4, b5);
    }, m(e7, s4) {
      b2(e7, n4, s4), E4 && E4.m(n4, null), l3[12](n4), m4 = true, p3 || (h3 = [y2(c3 = q3.call(null, n4, l3[0])), y2(l3[7].call(null, n4))], p3 = true);
    }, p(l4, [s4]) {
      E4 && E4.p && 1024 & s4 && f2(E4, y3, l4, l4[10], s4, null, null), I(n4, b5 = ht(O5, [(!m4 || 62 & s4 && e6 !== (e6 = N2({[l4[1]]: true, "mdc-layout-grid__cell": true, ["mdc-layout-grid__cell--align-" + l4[2]]: l4[2] != null, ["mdc-layout-grid__cell--order-" + l4[3]]: l4[3] != null, ["mdc-layout-grid__cell--span-" + l4[4]]: l4[4] != null, ...Object.fromEntries(Object.entries(l4[5]).map(L5))}))) && {class: e6}, 256 & s4 && l4[8]])), c3 && s2(c3.update) && 1 & s4 && c3.update.call(null, l4[0]);
    }, i(l4) {
      m4 || (ct(E4, l4), m4 = true);
    }, o(l4) {
      lt(E4, l4), m4 = false;
    }, d(e7) {
      e7 && w2(n4), E4 && E4.d(e7), l3[12](null), p3 = false, r2(h3);
    }};
  }
  var L5 = ([l3, n4]) => [`mdc-layout-grid__cell--span-${n4}-${l3}`, true];
  function S2(l3, n4, e6) {
    const s4 = ["use", "class", "align", "order", "span", "spanDevices", "getElement"];
    let t7 = h2(n4, s4), {$$slots: c3 = {}, $$scope: u3} = n4;
    const a4 = x3(R2());
    let i3, {use: r5 = []} = n4, {class: o4 = ""} = n4, {align: d4 = null} = n4, {order: g3 = null} = n4, {span: $2 = null} = n4, {spanDevices: h3 = {}} = n4;
    return l3.$$set = (l4) => {
      n4 = e3(e3({}, n4), d2(l4)), e6(8, t7 = h2(n4, s4)), "use" in l4 && e6(0, r5 = l4.use), "class" in l4 && e6(1, o4 = l4.class), "align" in l4 && e6(2, d4 = l4.align), "order" in l4 && e6(3, g3 = l4.order), "span" in l4 && e6(4, $2 = l4.span), "spanDevices" in l4 && e6(5, h3 = l4.spanDevices), "$$scope" in l4 && e6(10, u3 = l4.$$scope);
    }, [r5, o4, d4, g3, $2, h3, i3, a4, t7, function() {
      return i3;
    }, u3, c3, function(l4) {
      J[l4 ? "unshift" : "push"](() => {
        i3 = l4, e6(6, i3);
      });
    }];
  }
  var q6 = class extends _t {
    constructor(l3) {
      super(), wt(this, l3, S2, H5, i2, {use: 0, class: 1, align: 2, order: 3, span: 4, spanDevices: 5, getElement: 9});
    }
    get getElement() {
      return this.$$.ctx[9];
    }
  };

  // ../../dist/build/Span-af0eca88.js
  function S3(s4) {
    let t7, e6, h3, g3, E4;
    const x4 = s4[6].default, D4 = u2(x4, s4, s4[5], null);
    let S5 = [s4[3]], b5 = {};
    for (let s5 = 0; s5 < S5.length; s5 += 1)
      b5 = e3(b5, S5[s5]);
    return {c() {
      t7 = x2("span"), D4 && D4.c(), I(t7, b5);
    }, m(l3, n4) {
      b2(l3, t7, n4), D4 && D4.m(t7, null), s4[7](t7), h3 = true, g3 || (E4 = [y2(e6 = q3.call(null, t7, s4[0])), y2(s4[2].call(null, t7))], g3 = true);
    }, p(s5, [l3]) {
      D4 && D4.p && 32 & l3 && f2(D4, x4, s5, s5[5], l3, null, null), I(t7, b5 = ht(S5, [8 & l3 && s5[3]])), e6 && s2(e6.update) && 1 & l3 && e6.update.call(null, s5[0]);
    }, i(s5) {
      h3 || (ct(D4, s5), h3 = true);
    }, o(s5) {
      lt(D4, s5), h3 = false;
    }, d(e7) {
      e7 && w2(t7), D4 && D4.d(e7), s4[7](null), g3 = false, r2(E4);
    }};
  }
  function b3(s4, t7, e6) {
    const l3 = ["use", "getElement"];
    let a4 = h2(t7, l3), {$$slots: u3 = {}, $$scope: c3} = t7, {use: o4 = []} = t7;
    const r5 = x3(R2());
    let i3 = null;
    return s4.$$set = (s5) => {
      t7 = e3(e3({}, t7), d2(s5)), e6(3, a4 = h2(t7, l3)), "use" in s5 && e6(0, o4 = s5.use), "$$scope" in s5 && e6(5, c3 = s5.$$scope);
    }, [o4, i3, r5, a4, function() {
      return i3;
    }, c3, u3, function(s5) {
      J[s5 ? "unshift" : "push"](() => {
        i3 = s5, e6(1, i3);
      });
    }];
  }
  var v3 = class extends _t {
    constructor(s4) {
      super(), wt(this, s4, b3, S3, i2, {use: 0, getElement: 4});
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };

  // ../../dist/build/FormField-b5175173.js
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
  var ot2 = {LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above", LABEL_REQUIRED: "mdc-floating-label--required", LABEL_SHAKE: "mdc-floating-label--shake", ROOT: "mdc-floating-label"};
  var dt2 = function(t7) {
    function e6(n4) {
      var i3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      return i3.shakeAnimationEndHandler_ = function() {
        return i3.handleShakeAnimationEnd_();
      }, i3;
    }
    return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
      return ot2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {addClass: function() {
      }, removeClass: function() {
      }, getWidth: function() {
        return 0;
      }, registerInteractionHandler: function() {
      }, deregisterInteractionHandler: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_);
    }, e6.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_);
    }, e6.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e6.prototype.shake = function(t8) {
      var n4 = e6.cssClasses.LABEL_SHAKE;
      t8 ? this.adapter.addClass(n4) : this.adapter.removeClass(n4);
    }, e6.prototype.float = function(t8) {
      var n4 = e6.cssClasses, i3 = n4.LABEL_FLOAT_ABOVE, l3 = n4.LABEL_SHAKE;
      t8 ? this.adapter.addClass(i3) : (this.adapter.removeClass(i3), this.adapter.removeClass(l3));
    }, e6.prototype.setRequired = function(t8) {
      var n4 = e6.cssClasses.LABEL_REQUIRED;
      t8 ? this.adapter.addClass(n4) : this.adapter.removeClass(n4);
    }, e6.prototype.handleShakeAnimationEnd_ = function() {
      var t8 = e6.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t8);
    }, e6;
  }(J2);
  var ut2 = {LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active", LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"};
  var ct3 = function(t7) {
    function e6(n4) {
      var i3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      return i3.transitionEndHandler_ = function(t8) {
        return i3.handleTransitionEnd(t8);
      }, i3;
    }
    return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
      return ut2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {addClass: function() {
      }, removeClass: function() {
      }, hasClass: function() {
        return false;
      }, setStyle: function() {
      }, registerEventHandler: function() {
      }, deregisterEventHandler: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler_);
    }, e6.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler_);
    }, e6.prototype.activate = function() {
      this.adapter.removeClass(ut2.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ut2.LINE_RIPPLE_ACTIVE);
    }, e6.prototype.setRippleCenter = function(t8) {
      this.adapter.setStyle("transform-origin", t8 + "px center");
    }, e6.prototype.deactivate = function() {
      this.adapter.addClass(ut2.LINE_RIPPLE_DEACTIVATING);
    }, e6.prototype.handleTransitionEnd = function(t8) {
      var e7 = this.adapter.hasClass(ut2.LINE_RIPPLE_DEACTIVATING);
      t8.propertyName === "opacity" && e7 && (this.adapter.removeClass(ut2.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ut2.LINE_RIPPLE_DEACTIVATING));
    }, e6;
  }(J2);
  var pt2 = {NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"};
  var ft2 = {NOTCH_ELEMENT_PADDING: 8};
  var ht3 = {NO_LABEL: "mdc-notched-outline--no-label", OUTLINE_NOTCHED: "mdc-notched-outline--notched", OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"};
  var mt3 = function(t7) {
    function e6(n4) {
      return t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
    }
    return Y(e6, t7), Object.defineProperty(e6, "strings", {get: function() {
      return pt2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "cssClasses", {get: function() {
      return ht3;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "numbers", {get: function() {
      return ft2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {addClass: function() {
      }, removeClass: function() {
      }, setNotchWidthProperty: function() {
      }, removeNotchWidthProperty: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.notch = function(t8) {
      var n4 = e6.cssClasses.OUTLINE_NOTCHED;
      t8 > 0 && (t8 += ft2.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t8), this.adapter.addClass(n4);
    }, e6.prototype.closeNotch = function() {
      var t8 = e6.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t8), this.adapter.removeNotchWidthProperty();
    }, e6;
  }(J2);
  var gt2 = {ARIA_CONTROLS: "aria-controls", ARIA_DESCRIBEDBY: "aria-describedby", INPUT_SELECTOR: ".mdc-text-field__input", LABEL_SELECTOR: ".mdc-floating-label", LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading", LINE_RIPPLE_SELECTOR: ".mdc-line-ripple", OUTLINE_SELECTOR: ".mdc-notched-outline", PREFIX_SELECTOR: ".mdc-text-field__affix--prefix", SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix", TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"};
  var $t2 = {DISABLED: "mdc-text-field--disabled", FOCUSED: "mdc-text-field--focused", HELPER_LINE: "mdc-text-field-helper-line", INVALID: "mdc-text-field--invalid", LABEL_FLOATING: "mdc-text-field--label-floating", NO_LABEL: "mdc-text-field--no-label", OUTLINED: "mdc-text-field--outlined", ROOT: "mdc-text-field", TEXTAREA: "mdc-text-field--textarea", WITH_LEADING_ICON: "mdc-text-field--with-leading-icon", WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"};
  var vt2 = {LABEL_SCALE: 0.75};
  var bt2 = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"];
  var It = ["color", "date", "datetime-local", "month", "range", "time", "week"];
  var xt = ["mousedown", "touchstart"];
  var _t3 = ["click", "keydown"];
  var yt2 = function(t7) {
    function e6(n4, i3) {
      i3 === void 0 && (i3 = {});
      var l3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      return l3.isFocused_ = false, l3.receivedUserInput_ = false, l3.isValid_ = true, l3.useNativeValidation_ = true, l3.validateOnValueChange_ = true, l3.helperText_ = i3.helperText, l3.characterCounter_ = i3.characterCounter, l3.leadingIcon_ = i3.leadingIcon, l3.trailingIcon_ = i3.trailingIcon, l3.inputFocusHandler_ = function() {
        return l3.activateFocus();
      }, l3.inputBlurHandler_ = function() {
        return l3.deactivateFocus();
      }, l3.inputInputHandler_ = function() {
        return l3.handleInput();
      }, l3.setPointerXOffset_ = function(t8) {
        return l3.setTransformOrigin(t8);
      }, l3.textFieldInteractionHandler_ = function() {
        return l3.handleTextFieldInteraction();
      }, l3.validationAttributeChangeHandler_ = function(t8) {
        return l3.handleValidationAttributeChange(t8);
      }, l3;
    }
    return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
      return $t2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
      return gt2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "numbers", {get: function() {
      return vt2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6.prototype, "shouldAlwaysFloat_", {get: function() {
      var t8 = this.getNativeInput_().type;
      return It.indexOf(t8) >= 0;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6.prototype, "shouldFloat", {get: function() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    }, enumerable: false, configurable: true}), Object.defineProperty(e6.prototype, "shouldShake", {get: function() {
      return !this.isFocused_ && !this.isValid() && !!this.getValue();
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {addClass: function() {
      }, removeClass: function() {
      }, hasClass: function() {
        return true;
      }, setInputAttr: function() {
      }, removeInputAttr: function() {
      }, registerTextFieldInteractionHandler: function() {
      }, deregisterTextFieldInteractionHandler: function() {
      }, registerInputInteractionHandler: function() {
      }, deregisterInputInteractionHandler: function() {
      }, registerValidationAttributeChangeHandler: function() {
        return new MutationObserver(function() {
        });
      }, deregisterValidationAttributeChangeHandler: function() {
      }, getNativeInput: function() {
        return null;
      }, isFocused: function() {
        return false;
      }, activateLineRipple: function() {
      }, deactivateLineRipple: function() {
      }, setLineRippleTransformOrigin: function() {
      }, shakeLabel: function() {
      }, floatLabel: function() {
      }, setLabelRequired: function() {
      }, hasLabel: function() {
        return false;
      }, getLabelWidth: function() {
        return 0;
      }, hasOutline: function() {
        return false;
      }, notchOutline: function() {
      }, closeOutline: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.init = function() {
      var t8 = this;
      this.adapter.hasLabel() && this.getNativeInput_().required && this.adapter.setLabelRequired(true), this.adapter.isFocused() ? this.inputFocusHandler_() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(true), this.adapter.floatLabel(true), this.styleFloating_(true)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler_), xt.forEach(function(e7) {
        t8.adapter.registerInputInteractionHandler(e7, t8.setPointerXOffset_);
      }), _t3.forEach(function(e7) {
        t8.adapter.registerTextFieldInteractionHandler(e7, t8.textFieldInteractionHandler_);
      }), this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length);
    }, e6.prototype.destroy = function() {
      var t8 = this;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler_), xt.forEach(function(e7) {
        t8.adapter.deregisterInputInteractionHandler(e7, t8.setPointerXOffset_);
      }), _t3.forEach(function(e7) {
        t8.adapter.deregisterTextFieldInteractionHandler(e7, t8.textFieldInteractionHandler_);
      }), this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    }, e6.prototype.handleTextFieldInteraction = function() {
      var t8 = this.adapter.getNativeInput();
      t8 && t8.disabled || (this.receivedUserInput_ = true);
    }, e6.prototype.handleValidationAttributeChange = function(t8) {
      var e7 = this;
      t8.some(function(t9) {
        return bt2.indexOf(t9) > -1 && (e7.styleValidity_(true), e7.adapter.setLabelRequired(e7.getNativeInput_().required), true);
      }), t8.indexOf("maxlength") > -1 && this.setCharacterCounter_(this.getValue().length);
    }, e6.prototype.notchOutline = function(t8) {
      if (this.adapter.hasOutline() && this.adapter.hasLabel())
        if (t8) {
          var e7 = this.adapter.getLabelWidth() * vt2.LABEL_SCALE;
          this.adapter.notchOutline(e7);
        } else
          this.adapter.closeOutline();
    }, e6.prototype.activateFocus = function() {
      this.isFocused_ = true, this.styleFocused_(this.isFocused_), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), !this.helperText_ || !this.helperText_.isPersistent() && this.helperText_.isValidation() && this.isValid_ || this.helperText_.showToScreenReader();
    }, e6.prototype.setTransformOrigin = function(t8) {
      if (!this.isDisabled() && !this.adapter.hasOutline()) {
        var e7 = t8.touches, n4 = e7 ? e7[0] : t8, i3 = n4.target.getBoundingClientRect(), l3 = n4.clientX - i3.left;
        this.adapter.setLineRippleTransformOrigin(l3);
      }
    }, e6.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length);
    }, e6.prototype.autoCompleteFocus = function() {
      this.receivedUserInput_ || this.activateFocus();
    }, e6.prototype.deactivateFocus = function() {
      this.isFocused_ = false, this.adapter.deactivateLineRipple();
      var t8 = this.isValid();
      this.styleValidity_(t8), this.styleFocused_(this.isFocused_), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = false);
    }, e6.prototype.getValue = function() {
      return this.getNativeInput_().value;
    }, e6.prototype.setValue = function(t8) {
      if (this.getValue() !== t8 && (this.getNativeInput_().value = t8), this.setCharacterCounter_(t8.length), this.validateOnValueChange_) {
        var e7 = this.isValid();
        this.styleValidity_(e7);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.validateOnValueChange_ && this.adapter.shakeLabel(this.shouldShake));
    }, e6.prototype.isValid = function() {
      return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
    }, e6.prototype.setValid = function(t8) {
      this.isValid_ = t8, this.styleValidity_(t8);
      var e7 = !t8 && !this.isFocused_ && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(e7);
    }, e6.prototype.setValidateOnValueChange = function(t8) {
      this.validateOnValueChange_ = t8;
    }, e6.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange_;
    }, e6.prototype.setUseNativeValidation = function(t8) {
      this.useNativeValidation_ = t8;
    }, e6.prototype.isDisabled = function() {
      return this.getNativeInput_().disabled;
    }, e6.prototype.setDisabled = function(t8) {
      this.getNativeInput_().disabled = t8, this.styleDisabled_(t8);
    }, e6.prototype.setHelperTextContent = function(t8) {
      this.helperText_ && this.helperText_.setContent(t8);
    }, e6.prototype.setLeadingIconAriaLabel = function(t8) {
      this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t8);
    }, e6.prototype.setLeadingIconContent = function(t8) {
      this.leadingIcon_ && this.leadingIcon_.setContent(t8);
    }, e6.prototype.setTrailingIconAriaLabel = function(t8) {
      this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t8);
    }, e6.prototype.setTrailingIconContent = function(t8) {
      this.trailingIcon_ && this.trailingIcon_.setContent(t8);
    }, e6.prototype.setCharacterCounter_ = function(t8) {
      if (this.characterCounter_) {
        var e7 = this.getNativeInput_().maxLength;
        if (e7 === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter_.setCounterValue(t8, e7);
      }
    }, e6.prototype.isBadInput_ = function() {
      return this.getNativeInput_().validity.badInput || false;
    }, e6.prototype.isNativeInputValid_ = function() {
      return this.getNativeInput_().validity.valid;
    }, e6.prototype.styleValidity_ = function(t8) {
      var n4 = e6.cssClasses.INVALID;
      if (t8 ? this.adapter.removeClass(n4) : this.adapter.addClass(n4), this.helperText_) {
        if (this.helperText_.setValidity(t8), !this.helperText_.isValidation())
          return;
        var i3 = this.helperText_.isVisible(), l3 = this.helperText_.getId();
        i3 && l3 ? this.adapter.setInputAttr(gt2.ARIA_DESCRIBEDBY, l3) : this.adapter.removeInputAttr(gt2.ARIA_DESCRIBEDBY);
      }
    }, e6.prototype.styleFocused_ = function(t8) {
      var n4 = e6.cssClasses.FOCUSED;
      t8 ? this.adapter.addClass(n4) : this.adapter.removeClass(n4);
    }, e6.prototype.styleDisabled_ = function(t8) {
      var n4 = e6.cssClasses, i3 = n4.DISABLED, l3 = n4.INVALID;
      t8 ? (this.adapter.addClass(i3), this.adapter.removeClass(l3)) : this.adapter.removeClass(i3), this.leadingIcon_ && this.leadingIcon_.setDisabled(t8), this.trailingIcon_ && this.trailingIcon_.setDisabled(t8);
    }, e6.prototype.styleFloating_ = function(t8) {
      var n4 = e6.cssClasses.LABEL_FLOATING;
      t8 ? this.adapter.addClass(n4) : this.adapter.removeClass(n4);
    }, e6.prototype.getNativeInput_ = function() {
      return (this.adapter ? this.adapter.getNativeInput() : null) || {disabled: false, maxLength: -1, required: false, type: "input", validity: {badInput: false, valid: true}, value: ""};
    }, e6;
  }(J2);
  var Et = {HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent", HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg", ROOT: "mdc-text-field-helper-text"};
  var Ct = {ARIA_HIDDEN: "aria-hidden", ROLE: "role", ROOT_SELECTOR: "." + Et.ROOT};
  var Lt = function(t7) {
    function e6(n4) {
      return t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
    }
    return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
      return Et;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
      return Ct;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {addClass: function() {
      }, removeClass: function() {
      }, hasClass: function() {
        return false;
      }, getAttr: function() {
        return null;
      }, setAttr: function() {
      }, removeAttr: function() {
      }, setContent: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e6.prototype.isVisible = function() {
      return this.adapter.getAttr(Ct.ARIA_HIDDEN) !== "true";
    }, e6.prototype.setContent = function(t8) {
      this.adapter.setContent(t8);
    }, e6.prototype.isPersistent = function() {
      return this.adapter.hasClass(Et.HELPER_TEXT_PERSISTENT);
    }, e6.prototype.setPersistent = function(t8) {
      t8 ? this.adapter.addClass(Et.HELPER_TEXT_PERSISTENT) : this.adapter.removeClass(Et.HELPER_TEXT_PERSISTENT);
    }, e6.prototype.isValidation = function() {
      return this.adapter.hasClass(Et.HELPER_TEXT_VALIDATION_MSG);
    }, e6.prototype.setValidation = function(t8) {
      t8 ? this.adapter.addClass(Et.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Et.HELPER_TEXT_VALIDATION_MSG);
    }, e6.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Ct.ARIA_HIDDEN);
    }, e6.prototype.setValidity = function(t8) {
      var e7 = this.adapter.hasClass(Et.HELPER_TEXT_PERSISTENT), n4 = this.adapter.hasClass(Et.HELPER_TEXT_VALIDATION_MSG) && !t8;
      n4 ? (this.showToScreenReader(), this.adapter.setAttr(Ct.ROLE, "alert")) : this.adapter.removeAttr(Ct.ROLE), e7 || n4 || this.hide_();
    }, e6.prototype.hide_ = function() {
      this.adapter.setAttr(Ct.ARIA_HIDDEN, "true");
    }, e6;
  }(J2);
  var At2 = {ICON_EVENT: "MDCTextField:icon", ICON_ROLE: "button"};
  var Ot = {ROOT: "mdc-text-field__icon"};
  var Tt = ["click", "keydown"];
  var Nt = function(t7) {
    function e6(n4) {
      var i3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      return i3.savedTabIndex_ = null, i3.interactionHandler_ = function(t8) {
        return i3.handleInteraction(t8);
      }, i3;
    }
    return Y(e6, t7), Object.defineProperty(e6, "strings", {get: function() {
      return At2;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "cssClasses", {get: function() {
      return Ot;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {getAttr: function() {
        return null;
      }, setAttr: function() {
      }, removeAttr: function() {
      }, setContent: function() {
      }, registerInteractionHandler: function() {
      }, deregisterInteractionHandler: function() {
      }, notifyIconAction: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.init = function() {
      var t8 = this;
      this.savedTabIndex_ = this.adapter.getAttr("tabindex"), Tt.forEach(function(e7) {
        t8.adapter.registerInteractionHandler(e7, t8.interactionHandler_);
      });
    }, e6.prototype.destroy = function() {
      var t8 = this;
      Tt.forEach(function(e7) {
        t8.adapter.deregisterInteractionHandler(e7, t8.interactionHandler_);
      });
    }, e6.prototype.setDisabled = function(t8) {
      this.savedTabIndex_ && (t8 ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex_), this.adapter.setAttr("role", At2.ICON_ROLE)));
    }, e6.prototype.setAriaLabel = function(t8) {
      this.adapter.setAttr("aria-label", t8);
    }, e6.prototype.setContent = function(t8) {
      this.adapter.setContent(t8);
    }, e6.prototype.handleInteraction = function(t8) {
      var e7 = t8.key === "Enter" || t8.keyCode === 13;
      (t8.type === "click" || e7) && (t8.preventDefault(), this.adapter.notifyIconAction());
    }, e6;
  }(J2);
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
  function Rt(t7) {
    let e6;
    const n4 = t7[4].default, s4 = u2(n4, t7, t7[3], null);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, [e7]) {
      s4 && s4.p && 8 & e7 && f2(s4, n4, t8, t8[3], e7, null, null);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function St(t7, e6, n4) {
    let i3, {$$slots: l3 = {}, $$scope: a4} = e6, {key: r5} = e6, {value: p3} = e6;
    const f3 = Mt(p3);
    return l2(t7, f3, (t8) => n4(5, i3 = t8)), U2(r5, f3), q2(() => {
      f3.set(void 0);
    }), t7.$$set = (t8) => {
      "key" in t8 && n4(1, r5 = t8.key), "value" in t8 && n4(2, p3 = t8.value), "$$scope" in t8 && n4(3, a4 = t8.$$scope);
    }, t7.$$.update = () => {
      4 & t7.$$.dirty && g2(f3, i3 = p3, i3);
    }, [f3, r5, p3, a4, l3];
  }
  var Ht = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, St, Rt, i2, {key: 1, value: 2});
    }
  };
  function Vt(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3;
    const h3 = t7[22].default, m4 = u2(h3, t7, t7[21], null);
    let $2 = [{class: n4 = N2({[t7[3]]: true, "mdc-floating-label": true, "mdc-floating-label--float-above": t7[0], "mdc-floating-label--required": t7[1], ...t7[8]})}, {style: s4 = Object.entries(t7[9]).map(wt2).concat([t7[4]]).join(" ")}, {for: o4 = t7[5] || (t7[11] ? t7[11].id : null)}, t7[12]], v5 = {};
    for (let t8 = 0; t8 < $2.length; t8 += 1)
      v5 = e3(v5, $2[t8]);
    return {c() {
      e6 = x2("label"), m4 && m4.c(), I(e6, v5);
    }, m(n5, i3) {
      b2(n5, e6, i3), m4 && m4.m(e6, null), t7[24](e6), u3 = true, c3 || (p3 = [y2(d4 = q3.call(null, e6, t7[2])), y2(t7[10].call(null, e6))], c3 = true);
    }, p(t8, i3) {
      m4 && m4.p && 2097152 & i3 && f2(m4, h3, t8, t8[21], i3, null, null), I(e6, v5 = ht($2, [(!u3 || 267 & i3 && n4 !== (n4 = N2({[t8[3]]: true, "mdc-floating-label": true, "mdc-floating-label--float-above": t8[0], "mdc-floating-label--required": t8[1], ...t8[8]}))) && {class: n4}, (!u3 || 528 & i3 && s4 !== (s4 = Object.entries(t8[9]).map(wt2).concat([t8[4]]).join(" "))) && {style: s4}, (!u3 || 32 & i3 && o4 !== (o4 = t8[5] || (t8[11] ? t8[11].id : null))) && {for: o4}, 4096 & i3 && t8[12]])), d4 && s2(d4.update) && 4 & i3 && d4.update.call(null, t8[2]);
    }, i(t8) {
      u3 || (ct(m4, t8), u3 = true);
    }, o(t8) {
      lt(m4, t8), u3 = false;
    }, d(n5) {
      n5 && w2(e6), m4 && m4.d(n5), t7[24](null), c3 = false, r2(p3);
    }};
  }
  function Pt(t7) {
    let e6, n4, s4, o4, d4, u3, c3;
    const p3 = t7[22].default, h3 = u2(p3, t7, t7[21], null);
    let m4 = [{class: n4 = N2({[t7[3]]: true, "mdc-floating-label": true, "mdc-floating-label--float-above": t7[0], "mdc-floating-label--required": t7[1], ...t7[8]})}, {style: s4 = Object.entries(t7[9]).map(Dt).concat([t7[4]]).join(" ")}, t7[12]], $2 = {};
    for (let t8 = 0; t8 < m4.length; t8 += 1)
      $2 = e3($2, m4[t8]);
    return {c() {
      e6 = x2("span"), h3 && h3.c(), I(e6, $2);
    }, m(n5, i3) {
      b2(n5, e6, i3), h3 && h3.m(e6, null), t7[23](e6), d4 = true, u3 || (c3 = [y2(o4 = q3.call(null, e6, t7[2])), y2(t7[10].call(null, e6))], u3 = true);
    }, p(t8, i3) {
      h3 && h3.p && 2097152 & i3 && f2(h3, p3, t8, t8[21], i3, null, null), I(e6, $2 = ht(m4, [(!d4 || 267 & i3 && n4 !== (n4 = N2({[t8[3]]: true, "mdc-floating-label": true, "mdc-floating-label--float-above": t8[0], "mdc-floating-label--required": t8[1], ...t8[8]}))) && {class: n4}, (!d4 || 528 & i3 && s4 !== (s4 = Object.entries(t8[9]).map(Dt).concat([t8[4]]).join(" "))) && {style: s4}, 4096 & i3 && t8[12]])), o4 && s2(o4.update) && 4 & i3 && o4.update.call(null, t8[2]);
    }, i(t8) {
      d4 || (ct(h3, t8), d4 = true);
    }, o(t8) {
      lt(h3, t8), d4 = false;
    }, d(n5) {
      n5 && w2(e6), h3 && h3.d(n5), t7[23](null), u3 = false, r2(c3);
    }};
  }
  function Ft(t7) {
    let e6, n4, i3, l3;
    const s4 = [Pt, Vt], o4 = [];
    function d4(t8, e7) {
      return t8[6] ? 0 : 1;
    }
    return e6 = d4(t7), n4 = o4[e6] = s4[e6](t7), {c() {
      n4.c(), i3 = k2();
    }, m(t8, n5) {
      o4[e6].m(t8, n5), b2(t8, i3, n5), l3 = true;
    }, p(t8, [l4]) {
      let u3 = e6;
      e6 = d4(t8), e6 === u3 ? o4[e6].p(t8, l4) : (it(), lt(o4[u3], 1, 1, () => {
        o4[u3] = null;
      }), at(), n4 = o4[e6], n4 ? n4.p(t8, l4) : (n4 = o4[e6] = s4[e6](t8), n4.c()), ct(n4, 1), n4.m(i3.parentNode, i3));
    }, i(t8) {
      l3 || (ct(n4), l3 = true);
    }, o(t8) {
      lt(n4), l3 = false;
    }, d(t8) {
      o4[e6].d(t8), t8 && w2(i3);
    }};
  }
  var Dt = ([t7, e6]) => `${t7}: ${e6};`;
  var wt2 = ([t7, e6]) => `${t7}: ${e6};`;
  function Mt2(t7, e6, n4) {
    const i3 = ["use", "class", "style", "for", "floatAbove", "required", "wrapped", "shake", "float", "setRequired", "getWidth", "getElement"];
    let l3 = h2(e6, i3), {$$slots: a4 = {}, $$scope: r5} = e6;
    const {estimateScrollWidth: s4} = et, o4 = x3(R2());
    let d4, u3, {use: c3 = []} = e6, {class: p3 = ""} = e6, {style: f3 = ""} = e6, {for: h3 = null} = e6, {floatAbove: m4 = false} = e6, {required: g3 = false} = e6, {wrapped: E4 = false} = e6, C4 = {}, L6 = {}, A5 = D2("SMUI:generic:input:props") || {}, O5 = m4, T6 = g3;
    function N7(t8) {
      C4[t8] || n4(8, C4[t8] = true, C4);
    }
    function R6(t8) {
      t8 in C4 && !C4[t8] || n4(8, C4[t8] = false, C4);
    }
    function S5(t8, e7) {
      L6[t8] != e7 && (e7 === "" || e7 == null ? (delete L6[t8], n4(9, L6)) : n4(9, L6[t8] = e7, L6));
    }
    function H7(t8) {
      t8 in L6 && (delete L6[t8], n4(9, L6));
    }
    function V4() {
      return d4;
    }
    return C2(() => {
      n4(18, u3 = new dt2({addClass: N7, removeClass: R6, getWidth: () => s4(V4()), registerInteractionHandler: (t9, e7) => V4().addEventListener(t9, e7), deregisterInteractionHandler: (t9, e7) => V4().removeEventListener(t9, e7)}));
      const t8 = {get element() {
        return V4();
      }, addStyle: S5, removeStyle: H7};
      return k3(d4, "SMUI:floating-label:mount", t8), u3.init(), () => {
        k3(d4, "SMUI:floating-label:unmount", t8), u3.destroy();
      };
    }), t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(12, l3 = h2(e6, i3)), "use" in t8 && n4(2, c3 = t8.use), "class" in t8 && n4(3, p3 = t8.class), "style" in t8 && n4(4, f3 = t8.style), "for" in t8 && n4(5, h3 = t8.for), "floatAbove" in t8 && n4(0, m4 = t8.floatAbove), "required" in t8 && n4(1, g3 = t8.required), "wrapped" in t8 && n4(6, E4 = t8.wrapped), "$$scope" in t8 && n4(21, r5 = t8.$$scope);
    }, t7.$$.update = () => {
      786433 & t7.$$.dirty && O5 !== m4 && (n4(19, O5 = m4), u3.float(m4)), 1310722 & t7.$$.dirty && T6 !== g3 && (n4(20, T6 = g3), u3.setRequired(g3));
    }, [m4, g3, c3, p3, f3, h3, E4, d4, C4, L6, o4, A5, l3, function(t8) {
      u3.shake(t8);
    }, function(t8) {
      n4(0, m4 = t8);
    }, function(t8) {
      n4(1, g3 = t8);
    }, function() {
      return u3.getWidth();
    }, V4, u3, O5, T6, r5, a4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        d4 = t8, n4(7, d4);
      });
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        d4 = t8, n4(7, d4);
      });
    }];
  }
  var Ut = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, Mt2, Ft, i2, {use: 2, class: 3, style: 4, for: 5, floatAbove: 0, required: 1, wrapped: 6, shake: 13, float: 14, setRequired: 15, getWidth: 16, getElement: 17});
    }
    get shake() {
      return this.$$.ctx[13];
    }
    get float() {
      return this.$$.ctx[14];
    }
    get setRequired() {
      return this.$$.ctx[15];
    }
    get getWidth() {
      return this.$$.ctx[16];
    }
    get getElement() {
      return this.$$.ctx[17];
    }
  };
  function jt(t7) {
    let e6, n4, i3, l3, a4, r5, s4 = [{class: n4 = N2({[t7[1]]: true, "mdc-line-ripple": true, "mdc-line-ripple--active": t7[3], ...t7[5]})}, {style: i3 = Object.entries(t7[6]).map(kt).concat([t7[2]]).join(" ")}, t7[8]], o4 = {};
    for (let t8 = 0; t8 < s4.length; t8 += 1)
      o4 = e3(o4, s4[t8]);
    return {c() {
      e6 = x2("div"), I(e6, o4);
    }, m(n5, i4) {
      b2(n5, e6, i4), t7[13](e6), a4 || (r5 = [y2(l3 = q3.call(null, e6, t7[0])), y2(t7[7].call(null, e6))], a4 = true);
    }, p(t8, [a5]) {
      I(e6, o4 = ht(s4, [42 & a5 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-line-ripple": true, "mdc-line-ripple--active": t8[3], ...t8[5]})) && {class: n4}, 68 & a5 && i3 !== (i3 = Object.entries(t8[6]).map(kt).concat([t8[2]]).join(" ")) && {style: i3}, 256 & a5 && t8[8]])), l3 && s2(l3.update) && 1 & a5 && l3.update.call(null, t8[0]);
    }, i: t3, o: t3, d(n5) {
      n5 && w2(e6), t7[13](null), a4 = false, r2(r5);
    }};
  }
  var kt = ([t7, e6]) => `${t7}: ${e6};`;
  function qt(t7, e6, n4) {
    const i3 = ["use", "class", "style", "active", "activate", "deactivate", "setRippleCenter", "getElement"];
    let l3 = h2(e6, i3);
    const a4 = x3(R2());
    let r5, s4, {use: o4 = []} = e6, {class: d4 = ""} = e6, {style: u3 = ""} = e6, {active: c3 = false} = e6, p3 = {}, f3 = {};
    function h3(t8) {
      return t8 in p3 ? p3[t8] : E4().classList.contains(t8);
    }
    function m4(t8) {
      p3[t8] || n4(5, p3[t8] = true, p3);
    }
    function g3(t8) {
      t8 in p3 && !p3[t8] || n4(5, p3[t8] = false, p3);
    }
    function b5(t8, e7) {
      f3[t8] != e7 && (e7 === "" || e7 == null ? (delete f3[t8], n4(6, f3)) : n4(6, f3[t8] = e7, f3));
    }
    function E4() {
      return r5;
    }
    return C2(() => (s4 = new ct3({addClass: m4, removeClass: g3, hasClass: h3, setStyle: b5, registerEventHandler: (t8, e7) => E4().addEventListener(t8, e7), deregisterEventHandler: (t8, e7) => E4().removeEventListener(t8, e7)}), s4.init(), () => {
      s4.destroy();
    })), t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(8, l3 = h2(e6, i3)), "use" in t8 && n4(0, o4 = t8.use), "class" in t8 && n4(1, d4 = t8.class), "style" in t8 && n4(2, u3 = t8.style), "active" in t8 && n4(3, c3 = t8.active);
    }, [o4, d4, u3, c3, r5, p3, f3, a4, l3, function() {
      s4.activate();
    }, function() {
      s4.deactivate();
    }, function(t8) {
      s4.setRippleCenter(t8);
    }, E4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        r5 = t8, n4(4, r5);
      });
    }];
  }
  var Bt = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, qt, jt, i2, {use: 0, class: 1, style: 2, active: 3, activate: 9, deactivate: 10, setRippleCenter: 11, getElement: 12});
    }
    get activate() {
      return this.$$.ctx[9];
    }
    get deactivate() {
      return this.$$.ctx[10];
    }
    get setRippleCenter() {
      return this.$$.ctx[11];
    }
    get getElement() {
      return this.$$.ctx[12];
    }
  };
  function Wt(t7) {
    let e6, n4, s4;
    const o4 = t7[14].default, d4 = u2(o4, t7, t7[13], null);
    return {c() {
      e6 = x2("div"), d4 && d4.c(), L3(e6, "class", "mdc-notched-outline__notch"), L3(e6, "style", n4 = Object.entries(t7[7]).map(Xt).join(" "));
    }, m(t8, n5) {
      b2(t8, e6, n5), d4 && d4.m(e6, null), s4 = true;
    }, p(t8, i3) {
      d4 && d4.p && 8192 & i3 && f2(d4, o4, t8, t8[13], i3, null, null), (!s4 || 128 & i3 && n4 !== (n4 = Object.entries(t8[7]).map(Xt).join(" "))) && L3(e6, "style", n4);
    }, i(t8) {
      s4 || (ct(d4, t8), s4 = true);
    }, o(t8) {
      lt(d4, t8), s4 = false;
    }, d(t8) {
      t8 && w2(e6), d4 && d4.d(t8);
    }};
  }
  function Gt(t7) {
    let e6, n4, i3, l3, s4, o4, d4, u3, c3, p3, $2 = !t7[3] && Wt(t7), v5 = [{class: o4 = N2({[t7[1]]: true, "mdc-notched-outline": true, "mdc-notched-outline--notched": t7[2], "mdc-notched-outline--no-label": t7[3], ...t7[6]})}, t7[9]], b5 = {};
    for (let t8 = 0; t8 < v5.length; t8 += 1)
      b5 = e3(b5, v5[t8]);
    return {c() {
      e6 = x2("div"), n4 = x2("div"), i3 = P2(), $2 && $2.c(), l3 = P2(), s4 = x2("div"), L3(n4, "class", "mdc-notched-outline__leading"), L3(s4, "class", "mdc-notched-outline__trailing"), I(e6, b5);
    }, m(a4, r5) {
      b2(a4, e6, r5), $(e6, n4), $(e6, i3), $2 && $2.m(e6, null), $(e6, l3), $(e6, s4), t7[15](e6), u3 = true, c3 || (p3 = [y2(d4 = q3.call(null, e6, t7[0])), y2(t7[8].call(null, e6)), E2(e6, "SMUI:floating-label:mount", t7[16]), E2(e6, "SMUI:floating-label:unmount", t7[17])], c3 = true);
    }, p(t8, [n5]) {
      t8[3] ? $2 && (it(), lt($2, 1, 1, () => {
        $2 = null;
      }), at()) : $2 ? ($2.p(t8, n5), 8 & n5 && ct($2, 1)) : ($2 = Wt(t8), $2.c(), ct($2, 1), $2.m(e6, l3)), I(e6, b5 = ht(v5, [(!u3 || 78 & n5 && o4 !== (o4 = N2({[t8[1]]: true, "mdc-notched-outline": true, "mdc-notched-outline--notched": t8[2], "mdc-notched-outline--no-label": t8[3], ...t8[6]}))) && {class: o4}, 512 & n5 && t8[9]])), d4 && s2(d4.update) && 1 & n5 && d4.update.call(null, t8[0]);
    }, i(t8) {
      u3 || (ct($2), u3 = true);
    }, o(t8) {
      lt($2), u3 = false;
    }, d(n5) {
      n5 && w2(e6), $2 && $2.d(), t7[15](null), c3 = false, r2(p3);
    }};
  }
  var Xt = ([t7, e6]) => `${t7}: ${e6};`;
  function zt(t7, e6, n4) {
    const i3 = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
    let l3 = h2(e6, i3), {$$slots: a4 = {}, $$scope: r5} = e6;
    const s4 = x3(R2());
    let o4, d4, u3, {use: c3 = []} = e6, {class: p3 = ""} = e6, {notched: f3 = false} = e6, {noLabel: h3 = false} = e6, m4 = {}, g3 = {};
    function b5(t8) {
      m4[t8] || n4(6, m4[t8] = true, m4);
    }
    function E4(t8) {
      t8 in m4 && !m4[t8] || n4(6, m4[t8] = false, m4);
    }
    C2(() => (d4 = new mt3({addClass: b5, removeClass: E4, setNotchWidthProperty: (t8) => {
      return i4 = t8 + "px", void (g3[e7 = "width"] != i4 && (i4 === "" || i4 == null ? (delete g3[e7], n4(7, g3)) : n4(7, g3[e7] = i4, g3)));
      var e7, i4;
    }, removeNotchWidthProperty: () => {
      var t8;
      (t8 = "width") in g3 && (delete g3[t8], n4(7, g3));
    }}), d4.init(), () => {
      d4.destroy();
    }));
    return t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(9, l3 = h2(e6, i3)), "use" in t8 && n4(0, c3 = t8.use), "class" in t8 && n4(1, p3 = t8.class), "notched" in t8 && n4(2, f3 = t8.notched), "noLabel" in t8 && n4(3, h3 = t8.noLabel), "$$scope" in t8 && n4(13, r5 = t8.$$scope);
    }, t7.$$.update = () => {
      16 & t7.$$.dirty && (u3 ? (u3.addStyle("transition-duration", "0s"), b5("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
        u3.removeStyle("transition-duration");
      })) : E4("mdc-notched-outline--upgraded"));
    }, [c3, p3, f3, h3, u3, o4, m4, g3, s4, l3, function(t8) {
      d4.notch(t8);
    }, function() {
      d4.closeNotch();
    }, function() {
      return o4;
    }, r5, a4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        o4 = t8, n4(5, o4);
      });
    }, (t8) => n4(4, u3 = t8.detail), () => n4(4, u3 = void 0)];
  }
  var Kt = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, zt, Gt, i2, {use: 0, class: 1, notched: 2, noLabel: 3, notch: 10, closeNotch: 11, getElement: 12});
    }
    get notch() {
      return this.$$.ctx[10];
    }
    get closeNotch() {
      return this.$$.ctx[11];
    }
    get getElement() {
      return this.$$.ctx[12];
    }
  };
  var Yt = B2({class: "mdc-text-field-helper-line", component: _t2});
  var Qt = B2({class: "mdc-text-field__affix mdc-text-field__affix--prefix", component: v3});
  var Zt = B2({class: "mdc-text-field__affix mdc-text-field__affix--suffix", component: v3});
  function Jt(t7) {
    let e6, n4, i3, l3, a4, r5 = [{class: n4 = N2({[t7[1]]: true, "mdc-text-field__input": true})}, {type: t7[2]}, {placeholder: t7[3]}, t7[4], t7[6], t7[10]], s4 = {};
    for (let t8 = 0; t8 < r5.length; t8 += 1)
      s4 = e3(s4, r5[t8]);
    return {c() {
      e6 = x2("input"), I(e6, s4);
    }, m(n5, r6) {
      b2(n5, e6, r6), t7[21](e6), l3 || (a4 = [y2(i3 = q3.call(null, e6, t7[0])), y2(t7[7].call(null, e6)), E2(e6, "change", t7[22]), E2(e6, "input", t7[23]), E2(e6, "change", t7[9])], l3 = true);
    }, p(t8, [l4]) {
      I(e6, s4 = ht(r5, [2 & l4 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-text-field__input": true})) && {class: n4}, 4 & l4 && {type: t8[2]}, 8 & l4 && {placeholder: t8[3]}, 16 & l4 && t8[4], 64 & l4 && t8[6], 1024 & l4 && t8[10]])), i3 && s2(i3.update) && 1 & l4 && i3.update.call(null, t8[0]);
    }, i: t3, o: t3, d(n5) {
      n5 && w2(e6), t7[21](null), l3 = false, r2(a4);
    }};
  }
  function te(t7, e6, n4) {
    const i3 = ["use", "class", "type", "placeholder", "value", "files", "dirty", "invalid", "updateInvalid", "getAttr", "addAttr", "removeAttr", "focus", "getElement"];
    let l3 = h2(e6, i3);
    const a4 = x3(R2());
    let r5, {use: s4 = []} = e6, {class: o4 = ""} = e6, {type: d4 = "text"} = e6, {placeholder: u3 = " "} = e6, {value: c3 = ""} = e6, {files: p3} = e6, {dirty: f3 = false} = e6, {invalid: h3 = false} = e6, {updateInvalid: m4 = true} = e6, g3 = {}, b5 = {};
    function E4(t8) {
      switch (d4) {
        case "number":
        case "range":
          n4(11, c3 = function(t9) {
            if (t9 === "") {
              const t10 = new Number(Number.NaN);
              return t10.length = 0, t10;
            }
            return +t9;
          }(t8.target.value));
          break;
        case "file":
          n4(12, p3 = t8.target.files);
        default:
          n4(11, c3 = t8.target.value);
      }
    }
    function C4() {
      return r5;
    }
    C2(() => {
      m4 && n4(14, h3 = r5.matches(":invalid"));
    });
    return t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(10, l3 = h2(e6, i3)), "use" in t8 && n4(0, s4 = t8.use), "class" in t8 && n4(1, o4 = t8.class), "type" in t8 && n4(2, d4 = t8.type), "placeholder" in t8 && n4(3, u3 = t8.placeholder), "value" in t8 && n4(11, c3 = t8.value), "files" in t8 && n4(12, p3 = t8.files), "dirty" in t8 && n4(13, f3 = t8.dirty), "invalid" in t8 && n4(14, h3 = t8.invalid), "updateInvalid" in t8 && n4(15, m4 = t8.updateInvalid);
    }, t7.$$.update = () => {
      2068 & t7.$$.dirty && (d4 === "file" ? (delete b5.value, n4(4, b5), n4(2, d4), n4(11, c3)) : n4(4, b5.value = c3 == null ? "" : c3, b5));
    }, [s4, o4, d4, u3, b5, r5, g3, a4, E4, function(t8) {
      n4(13, f3 = true), m4 && n4(14, h3 = r5.matches(":invalid"));
    }, l3, c3, p3, f3, h3, m4, function(t8) {
      return t8 in g3 ? g3[t8] : C4().getAttribute(t8);
    }, function(t8, e7) {
      g3[t8] !== e7 && n4(6, g3[t8] = e7, g3);
    }, function(t8) {
      t8 in g3 && g3[t8] == null || n4(6, g3[t8] = void 0, g3);
    }, function() {
      C4().focus();
    }, C4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        r5 = t8, n4(5, r5);
      });
    }, (t8) => (d4 === "file" || d4 === "range") && E4(t8), (t8) => d4 !== "file" && E4(t8)];
  }
  var ee = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, te, Jt, i2, {use: 0, class: 1, type: 2, placeholder: 3, value: 11, files: 12, dirty: 13, invalid: 14, updateInvalid: 15, getAttr: 16, addAttr: 17, removeAttr: 18, focus: 19, getElement: 20});
    }
    get getAttr() {
      return this.$$.ctx[16];
    }
    get addAttr() {
      return this.$$.ctx[17];
    }
    get removeAttr() {
      return this.$$.ctx[18];
    }
    get focus() {
      return this.$$.ctx[19];
    }
    get getElement() {
      return this.$$.ctx[20];
    }
  };
  function ne(t7) {
    let e6, n4, i3, l3, a4, r5, s4 = [{class: n4 = N2({[t7[2]]: true, "mdc-text-field__input": true})}, {style: i3 = `${t7[4] ? "" : "resize: none; "}${t7[3]}`}, t7[6], t7[9]], o4 = {};
    for (let t8 = 0; t8 < s4.length; t8 += 1)
      o4 = e3(o4, s4[t8]);
    return {c() {
      e6 = x2("textarea"), I(e6, o4);
    }, m(n5, i4) {
      b2(n5, e6, i4), t7[18](e6), N5(e6, t7[0]), a4 || (r5 = [y2(l3 = q3.call(null, e6, t7[1])), y2(t7[7].call(null, e6)), E2(e6, "change", t7[8]), E2(e6, "input", t7[19])], a4 = true);
    }, p(t8, [a5]) {
      I(e6, o4 = ht(s4, [4 & a5 && n4 !== (n4 = N2({[t8[2]]: true, "mdc-text-field__input": true})) && {class: n4}, 24 & a5 && i3 !== (i3 = `${t8[4] ? "" : "resize: none; "}${t8[3]}`) && {style: i3}, 64 & a5 && t8[6], 512 & a5 && t8[9]])), l3 && s2(l3.update) && 2 & a5 && l3.update.call(null, t8[1]), 1 & a5 && N5(e6, t8[0]);
    }, i: t3, o: t3, d(n5) {
      n5 && w2(e6), t7[18](null), a4 = false, r2(r5);
    }};
  }
  function ie(t7, e6, n4) {
    const i3 = ["use", "class", "style", "value", "dirty", "invalid", "updateInvalid", "resizable", "getAttr", "addAttr", "removeAttr", "focus", "getElement"];
    let l3 = h2(e6, i3);
    const a4 = x3(R2());
    let r5, {use: s4 = []} = e6, {class: o4 = ""} = e6, {style: d4 = ""} = e6, {value: u3 = ""} = e6, {dirty: c3 = false} = e6, {invalid: p3 = false} = e6, {updateInvalid: f3 = true} = e6, {resizable: h3 = true} = e6, m4 = {};
    function g3() {
      return r5;
    }
    return C2(() => {
      f3 && n4(11, p3 = r5.matches(":invalid"));
    }), t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(9, l3 = h2(e6, i3)), "use" in t8 && n4(1, s4 = t8.use), "class" in t8 && n4(2, o4 = t8.class), "style" in t8 && n4(3, d4 = t8.style), "value" in t8 && n4(0, u3 = t8.value), "dirty" in t8 && n4(10, c3 = t8.dirty), "invalid" in t8 && n4(11, p3 = t8.invalid), "updateInvalid" in t8 && n4(12, f3 = t8.updateInvalid), "resizable" in t8 && n4(4, h3 = t8.resizable);
    }, [u3, s4, o4, d4, h3, r5, m4, a4, function() {
      n4(10, c3 = true), f3 && n4(11, p3 = r5.matches(":invalid"));
    }, l3, c3, p3, f3, function(t8) {
      return t8 in m4 ? m4[t8] : g3().getAttribute(t8);
    }, function(t8, e7) {
      m4[t8] !== e7 && n4(6, m4[t8] = e7, m4);
    }, function(t8) {
      t8 in m4 && m4[t8] == null || n4(6, m4[t8] = void 0, m4);
    }, function() {
      g3().focus();
    }, g3, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        r5 = t8, n4(5, r5);
      });
    }, function() {
      u3 = this.value, n4(0, u3);
    }];
  }
  var le = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, ie, ne, i2, {use: 1, class: 2, style: 3, value: 0, dirty: 10, invalid: 11, updateInvalid: 12, resizable: 4, getAttr: 13, addAttr: 14, removeAttr: 15, focus: 16, getElement: 17});
    }
    get getAttr() {
      return this.$$.ctx[13];
    }
    get addAttr() {
      return this.$$.ctx[14];
    }
    get removeAttr() {
      return this.$$.ctx[15];
    }
    get focus() {
      return this.$$.ctx[16];
    }
    get getElement() {
      return this.$$.ctx[17];
    }
  };
  var ae = (t7) => ({});
  var re = (t7) => ({});
  var se2 = (t7) => ({});
  var oe = (t7) => ({});
  var de = (t7) => ({});
  var ue = (t7) => ({});
  var ce = (t7) => ({});
  var pe = (t7) => ({});
  var fe = (t7) => ({});
  var he = (t7) => ({});
  var me = (t7) => ({});
  var ge = (t7) => ({});
  var $e = (t7) => ({});
  var ve = (t7) => ({});
  var be = (t7) => ({});
  var Ie = (t7) => ({});
  var xe = (t7) => ({});
  var _e = (t7) => ({});
  var ye = (t7) => ({});
  var Ee = (t7) => ({});
  var Ce = (t7) => ({});
  var Le = (t7) => ({});
  var Ae = (t7) => ({});
  var Oe = (t7) => ({});
  function Te(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3, h3, m4, $2, v5, b5, I2;
    const _3 = t7[46].label, y3 = u2(_3, t7, t7[85], he);
    s4 = new Ht({props: {key: "SMUI:textfield:icon:leading", value: true, $$slots: {default: [Re]}, $$scope: {ctx: t7}}});
    const N7 = t7[46].default, R6 = u2(N7, t7, t7[85], null);
    u3 = new Ht({props: {key: "SMUI:textfield:icon:leading", value: false, $$slots: {default: [Se]}, $$scope: {ctx: t7}}});
    const P7 = t7[46].ripple, w4 = u2(P7, t7, t7[85], oe);
    let U5 = [{class: p3 = N2({[t7[9]]: true, "mdc-text-field": true, "mdc-text-field--disabled": t7[12], "mdc-text-field--textarea": t7[14], "mdc-text-field--filled": t7[15] === "filled", "mdc-text-field--outlined": t7[15] === "outlined", "smui-text-field--standard": t7[15] === "standard" && !t7[14], "mdc-text-field--no-label": t7[16] || !t7[38].label, "mdc-text-field--with-leading-icon": t7[38].leadingIcon, "mdc-text-field--with-trailing-icon": t7[38].trailingIcon, "mdc-text-field--invalid": t7[2] !== t7[33] && t7[2], ...t7[23]})}, {style: h3 = Object.entries(t7[24]).map(tn).concat([t7[10]]).join(" ")}, w3(t7[39], ["input$", "label$", "ripple$", "outline$", "helperLine$"])], j4 = {};
    for (let t8 = 0; t8 < U5.length; t8 += 1)
      j4 = e3(j4, U5[t8]);
    return {c() {
      e6 = x2("div"), y3 && y3.c(), n4 = P2(), yt(s4.$$.fragment), o4 = P2(), R6 && R6.c(), d4 = P2(), yt(u3.$$.fragment), c3 = P2(), w4 && w4.c(), I(e6, j4);
    }, m(i3, l3) {
      b2(i3, e6, l3), y3 && y3.m(e6, null), $(e6, n4), $t(s4, e6, null), $(e6, o4), R6 && R6.m(e6, null), $(e6, d4), $t(u3, e6, null), $(e6, c3), w4 && w4.m(e6, null), t7[75](e6), v5 = true, b5 || (I2 = [y2(m4 = dt.call(null, e6, {ripple: t7[11], unbounded: false, addClass: t7[35], removeClass: t7[36], addStyle: t7[37]})), y2($2 = q3.call(null, e6, t7[8])), y2(t7[32].call(null, e6)), E2(e6, "SMUI:textfield:leading-icon:mount", t7[76]), E2(e6, "SMUI:textfield:leading-icon:unmount", t7[77]), E2(e6, "SMUI:textfield:trailing-icon:mount", t7[78]), E2(e6, "SMUI:textfield:trailing-icon:unmount", t7[79])], b5 = true);
    }, p(t8, n5) {
      y3 && y3.p && 8388608 & n5[2] && f2(y3, _3, t8, t8[85], n5, fe, he);
      const i3 = {};
      8388608 & n5[2] && (i3.$$scope = {dirty: n5, ctx: t8}), s4.$set(i3), R6 && R6.p && 8388608 & n5[2] && f2(R6, N7, t8, t8[85], n5, null, null);
      const a4 = {};
      8388608 & n5[2] && (a4.$$scope = {dirty: n5, ctx: t8}), u3.$set(a4), w4 && w4.p && 8388608 & n5[2] && f2(w4, P7, t8, t8[85], n5, se2, oe), I(e6, j4 = ht(U5, [(!v5 || 8507908 & n5[0] | 128 & n5[1] && p3 !== (p3 = N2({[t8[9]]: true, "mdc-text-field": true, "mdc-text-field--disabled": t8[12], "mdc-text-field--textarea": t8[14], "mdc-text-field--filled": t8[15] === "filled", "mdc-text-field--outlined": t8[15] === "outlined", "smui-text-field--standard": t8[15] === "standard" && !t8[14], "mdc-text-field--no-label": t8[16] || !t8[38].label, "mdc-text-field--with-leading-icon": t8[38].leadingIcon, "mdc-text-field--with-trailing-icon": t8[38].trailingIcon, "mdc-text-field--invalid": t8[2] !== t8[33] && t8[2], ...t8[23]}))) && {class: p3}, (!v5 || 16778240 & n5[0] && h3 !== (h3 = Object.entries(t8[24]).map(tn).concat([t8[10]]).join(" "))) && {style: h3}, 256 & n5[1] && w3(t8[39], ["input$", "label$", "ripple$", "outline$", "helperLine$"])])), m4 && s2(m4.update) && 2048 & n5[0] && m4.update.call(null, {ripple: t8[11], unbounded: false, addClass: t8[35], removeClass: t8[36], addStyle: t8[37]}), $2 && s2($2.update) && 256 & n5[0] && $2.update.call(null, t8[8]);
    }, i(t8) {
      v5 || (ct(y3, t8), ct(s4.$$.fragment, t8), ct(R6, t8), ct(u3.$$.fragment, t8), ct(w4, t8), v5 = true);
    }, o(t8) {
      lt(y3, t8), lt(s4.$$.fragment, t8), lt(R6, t8), lt(u3.$$.fragment, t8), lt(w4, t8), v5 = false;
    }, d(n5) {
      n5 && w2(e6), y3 && y3.d(n5), bt(s4), R6 && R6.d(n5), bt(u3), w4 && w4.d(n5), t7[75](null), b5 = false, r2(I2);
    }};
  }
  function Ne(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3, $2, v5, b5, I2, _3, y3, N7, R6, P7, w4, U5, j4 = !t7[14] && t7[15] !== "outlined" && He(t7), k5 = (t7[14] || t7[15] === "outlined") && De(t7);
    o4 = new Ht({props: {key: "SMUI:textfield:icon:leading", value: true, $$slots: {default: [je]}, $$scope: {ctx: t7}}});
    const q7 = t7[46].default, B5 = u2(q7, t7, t7[85], null), W6 = [qe, ke], G5 = [];
    function X4(t8, e7) {
      return t8[14] ? 0 : 1;
    }
    c3 = X4(t7), p3 = G5[c3] = W6[c3](t7), v5 = new Ht({props: {key: "SMUI:textfield:icon:leading", value: false, $$slots: {default: [ze]}, $$scope: {ctx: t7}}});
    let z5 = !t7[14] && t7[15] !== "outlined" && t7[11] && Ke(t7), K5 = [{class: I2 = N2({[t7[9]]: true, "mdc-text-field": true, "mdc-text-field--disabled": t7[12], "mdc-text-field--textarea": t7[14], "mdc-text-field--filled": t7[15] === "filled", "mdc-text-field--outlined": t7[15] === "outlined", "smui-text-field--standard": t7[15] === "standard" && !t7[14], "mdc-text-field--no-label": t7[16] || t7[17] == null && !t7[38].label, "mdc-text-field--label-floating": t7[0] != null && t7[0] !== "", "mdc-text-field--with-leading-icon": t7[38].leadingIcon, "mdc-text-field--with-trailing-icon": t7[38].trailingIcon, "mdc-text-field--with-internal-counter": t7[14] && t7[38].internalCounter, "mdc-text-field--invalid": t7[2] !== t7[33] && t7[2], ...t7[23]})}, {style: _3 = Object.entries(t7[24]).map(Je).concat([t7[10]]).join(" ")}, {for: y3 = null}, w3(t7[39], ["input$", "label$", "ripple$", "outline$", "helperLine$"])], Y4 = {};
    for (let t8 = 0; t8 < K5.length; t8 += 1)
      Y4 = e3(Y4, K5[t8]);
    return {c() {
      e6 = x2("label"), j4 && j4.c(), n4 = P2(), k5 && k5.c(), s4 = P2(), yt(o4.$$.fragment), d4 = P2(), B5 && B5.c(), u3 = P2(), p3.c(), $2 = P2(), yt(v5.$$.fragment), b5 = P2(), z5 && z5.c(), I(e6, Y4);
    }, m(i3, l3) {
      b2(i3, e6, l3), j4 && j4.m(e6, null), $(e6, n4), k5 && k5.m(e6, null), $(e6, s4), $t(o4, e6, null), $(e6, d4), B5 && B5.m(e6, null), $(e6, u3), G5[c3].m(e6, null), $(e6, $2), $t(v5, e6, null), $(e6, b5), z5 && z5.m(e6, null), t7[68](e6), P7 = true, w4 || (U5 = [y2(N7 = dt.call(null, e6, {ripple: !t7[14] && t7[15] === "filled", unbounded: false, addClass: t7[35], removeClass: t7[36], addStyle: t7[37], eventTarget: t7[31], activeTarget: t7[31], initPromise: t7[34]})), y2(R6 = q3.call(null, e6, t7[8])), y2(t7[32].call(null, e6)), E2(e6, "SMUI:textfield:leading-icon:mount", t7[69]), E2(e6, "SMUI:textfield:leading-icon:unmount", t7[70]), E2(e6, "SMUI:textfield:trailing-icon:mount", t7[71]), E2(e6, "SMUI:textfield:trailing-icon:unmount", t7[72]), E2(e6, "SMUI:textfield:character-counter:mount", t7[73]), E2(e6, "SMUI:textfield:character-counter:unmount", t7[74])], w4 = true);
    }, p(t8, i3) {
      t8[14] || t8[15] === "outlined" ? j4 && (it(), lt(j4, 1, 1, () => {
        j4 = null;
      }), at()) : j4 ? (j4.p(t8, i3), 49152 & i3[0] && ct(j4, 1)) : (j4 = He(t8), j4.c(), ct(j4, 1), j4.m(e6, n4)), t8[14] || t8[15] === "outlined" ? k5 ? (k5.p(t8, i3), 49152 & i3[0] && ct(k5, 1)) : (k5 = De(t8), k5.c(), ct(k5, 1), k5.m(e6, s4)) : k5 && (it(), lt(k5, 1, 1, () => {
        k5 = null;
      }), at());
      const d5 = {};
      8388608 & i3[2] && (d5.$$scope = {dirty: i3, ctx: t8}), o4.$set(d5), B5 && B5.p && 8388608 & i3[2] && f2(B5, q7, t8, t8[85], i3, null, null);
      let u4 = c3;
      c3 = X4(t8), c3 === u4 ? G5[c3].p(t8, i3) : (it(), lt(G5[u4], 1, 1, () => {
        G5[u4] = null;
      }), at(), p3 = G5[c3], p3 ? p3.p(t8, i3) : (p3 = G5[c3] = W6[c3](t8), p3.c()), ct(p3, 1), p3.m(e6, $2));
      const f3 = {};
      8388608 & i3[2] && (f3.$$scope = {dirty: i3, ctx: t8}), v5.$set(f3), !t8[14] && t8[15] !== "outlined" && t8[11] ? z5 ? (z5.p(t8, i3), 51200 & i3[0] && ct(z5, 1)) : (z5 = Ke(t8), z5.c(), ct(z5, 1), z5.m(e6, null)) : z5 && (it(), lt(z5, 1, 1, () => {
        z5 = null;
      }), at()), I(e6, Y4 = ht(K5, [(!P7 || 8638981 & i3[0] | 128 & i3[1] && I2 !== (I2 = N2({[t8[9]]: true, "mdc-text-field": true, "mdc-text-field--disabled": t8[12], "mdc-text-field--textarea": t8[14], "mdc-text-field--filled": t8[15] === "filled", "mdc-text-field--outlined": t8[15] === "outlined", "smui-text-field--standard": t8[15] === "standard" && !t8[14], "mdc-text-field--no-label": t8[16] || t8[17] == null && !t8[38].label, "mdc-text-field--label-floating": t8[0] != null && t8[0] !== "", "mdc-text-field--with-leading-icon": t8[38].leadingIcon, "mdc-text-field--with-trailing-icon": t8[38].trailingIcon, "mdc-text-field--with-internal-counter": t8[14] && t8[38].internalCounter, "mdc-text-field--invalid": t8[2] !== t8[33] && t8[2], ...t8[23]}))) && {class: I2}, (!P7 || 16778240 & i3[0] && _3 !== (_3 = Object.entries(t8[24]).map(Je).concat([t8[10]]).join(" "))) && {style: _3}, {for: null}, 256 & i3[1] && w3(t8[39], ["input$", "label$", "ripple$", "outline$", "helperLine$"])])), N7 && s2(N7.update) && 49152 & i3[0] | 1 & i3[1] && N7.update.call(null, {ripple: !t8[14] && t8[15] === "filled", unbounded: false, addClass: t8[35], removeClass: t8[36], addStyle: t8[37], eventTarget: t8[31], activeTarget: t8[31], initPromise: t8[34]}), R6 && s2(R6.update) && 256 & i3[0] && R6.update.call(null, t8[8]);
    }, i(t8) {
      P7 || (ct(j4), ct(k5), ct(o4.$$.fragment, t8), ct(B5, t8), ct(p3), ct(v5.$$.fragment, t8), ct(z5), P7 = true);
    }, o(t8) {
      lt(j4), lt(k5), lt(o4.$$.fragment, t8), lt(B5, t8), lt(p3), lt(v5.$$.fragment, t8), lt(z5), P7 = false;
    }, d(n5) {
      n5 && w2(e6), j4 && j4.d(), k5 && k5.d(), bt(o4), B5 && B5.d(n5), G5[c3].d(), bt(v5), z5 && z5.d(), t7[68](null), w4 = false, r2(U5);
    }};
  }
  function Re(t7) {
    let e6;
    const n4 = t7[46].leadingIcon, s4 = u2(n4, t7, t7[85], pe);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      s4 && s4.p && 8388608 & e7[2] && f2(s4, n4, t8, t8[85], e7, ce, pe);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function Se(t7) {
    let e6;
    const n4 = t7[46].trailingIcon, s4 = u2(n4, t7, t7[85], ue);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      s4 && s4.p && 8388608 & e7[2] && f2(s4, n4, t8, t8[85], e7, de, ue);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function He(t7) {
    let e6, n4, i3, l3 = t7[15] === "filled" && Ve(), s4 = !t7[16] && (t7[17] != null || t7[38].label) && Pe(t7);
    return {c() {
      l3 && l3.c(), e6 = P2(), s4 && s4.c(), n4 = k2();
    }, m(t8, a4) {
      l3 && l3.m(t8, a4), b2(t8, e6, a4), s4 && s4.m(t8, a4), b2(t8, n4, a4), i3 = true;
    }, p(t8, i4) {
      t8[15] === "filled" ? l3 || (l3 = Ve(), l3.c(), l3.m(e6.parentNode, e6)) : l3 && (l3.d(1), l3 = null), t8[16] || t8[17] == null && !t8[38].label ? s4 && (it(), lt(s4, 1, 1, () => {
        s4 = null;
      }), at()) : s4 ? (s4.p(t8, i4), 196608 & i4[0] | 128 & i4[1] && ct(s4, 1)) : (s4 = Pe(t8), s4.c(), ct(s4, 1), s4.m(n4.parentNode, n4));
    }, i(t8) {
      i3 || (ct(s4), i3 = true);
    }, o(t8) {
      lt(s4), i3 = false;
    }, d(t8) {
      l3 && l3.d(t8), t8 && w2(e6), s4 && s4.d(t8), t8 && w2(n4);
    }};
  }
  function Ve(t7) {
    let e6;
    return {c() {
      e6 = x2("span"), L3(e6, "class", "mdc-text-field__ripple");
    }, m(t8, n4) {
      b2(t8, e6, n4);
    }, d(t8) {
      t8 && w2(e6);
    }};
  }
  function Pe(t7) {
    let e6, n4;
    const i3 = [{floatAbove: t7[0] != null && t7[0] !== ""}, {required: t7[13]}, {wrapped: true}, G3(t7[39], "label$")];
    let l3 = {$$slots: {default: [Fe]}, $$scope: {ctx: t7}};
    for (let t8 = 0; t8 < i3.length; t8 += 1)
      l3 = e3(l3, i3[t8]);
    return e6 = new Ut({props: l3}), t7[47](e6), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i4) {
      $t(e6, t8, i4), n4 = true;
    }, p(t8, n5) {
      const l4 = 8193 & n5[0] | 256 & n5[1] ? ht(i3, [1 & n5[0] && {floatAbove: t8[0] != null && t8[0] !== ""}, 8192 & n5[0] && {required: t8[13]}, i3[2], 256 & n5[1] && mt(G3(t8[39], "label$"))]) : {};
      131072 & n5[0] | 8388608 & n5[2] && (l4.$$scope = {dirty: n5, ctx: t8}), e6.$set(l4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(n5) {
      t7[47](null), bt(e6, n5);
    }};
  }
  function Fe(t7) {
    let e6, n4, s4 = (t7[17] == null ? "" : t7[17]) + "";
    const o4 = t7[46].label, d4 = u2(o4, t7, t7[85], Oe);
    return {c() {
      e6 = v2(s4), d4 && d4.c();
    }, m(t8, i3) {
      b2(t8, e6, i3), d4 && d4.m(t8, i3), n4 = true;
    }, p(t8, i3) {
      (!n4 || 131072 & i3[0]) && s4 !== (s4 = (t8[17] == null ? "" : t8[17]) + "") && T3(e6, s4), d4 && d4.p && 8388608 & i3[2] && f2(d4, o4, t8, t8[85], i3, Ae, Oe);
    }, i(t8) {
      n4 || (ct(d4, t8), n4 = true);
    }, o(t8) {
      lt(d4, t8), n4 = false;
    }, d(t8) {
      t8 && w2(e6), d4 && d4.d(t8);
    }};
  }
  function De(t7) {
    let e6, n4;
    const i3 = [{noLabel: t7[16] || t7[17] == null && !t7[38].label}, G3(t7[39], "outline$")];
    let l3 = {$$slots: {default: [Ue]}, $$scope: {ctx: t7}};
    for (let t8 = 0; t8 < i3.length; t8 += 1)
      l3 = e3(l3, i3[t8]);
    return e6 = new Kt({props: l3}), t7[49](e6), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i4) {
      $t(e6, t8, i4), n4 = true;
    }, p(t8, n5) {
      const l4 = 196608 & n5[0] | 384 & n5[1] ? ht(i3, [196608 & n5[0] | 128 & n5[1] && {noLabel: t8[16] || t8[17] == null && !t8[38].label}, 256 & n5[1] && mt(G3(t8[39], "outline$"))]) : {};
      204833 & n5[0] | 384 & n5[1] | 8388608 & n5[2] && (l4.$$scope = {dirty: n5, ctx: t8}), e6.$set(l4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(n5) {
      t7[49](null), bt(e6, n5);
    }};
  }
  function we(t7) {
    let e6, n4;
    const i3 = [{floatAbove: t7[0] != null && t7[0] !== ""}, {required: t7[13]}, {wrapped: true}, G3(t7[39], "label$")];
    let l3 = {$$slots: {default: [Me]}, $$scope: {ctx: t7}};
    for (let t8 = 0; t8 < i3.length; t8 += 1)
      l3 = e3(l3, i3[t8]);
    return e6 = new Ut({props: l3}), t7[48](e6), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i4) {
      $t(e6, t8, i4), n4 = true;
    }, p(t8, n5) {
      const l4 = 8193 & n5[0] | 256 & n5[1] ? ht(i3, [1 & n5[0] && {floatAbove: t8[0] != null && t8[0] !== ""}, 8192 & n5[0] && {required: t8[13]}, i3[2], 256 & n5[1] && mt(G3(t8[39], "label$"))]) : {};
      131072 & n5[0] | 8388608 & n5[2] && (l4.$$scope = {dirty: n5, ctx: t8}), e6.$set(l4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(n5) {
      t7[48](null), bt(e6, n5);
    }};
  }
  function Me(t7) {
    let e6, n4, s4 = (t7[17] == null ? "" : t7[17]) + "";
    const o4 = t7[46].label, d4 = u2(o4, t7, t7[85], Le);
    return {c() {
      e6 = v2(s4), d4 && d4.c();
    }, m(t8, i3) {
      b2(t8, e6, i3), d4 && d4.m(t8, i3), n4 = true;
    }, p(t8, i3) {
      (!n4 || 131072 & i3[0]) && s4 !== (s4 = (t8[17] == null ? "" : t8[17]) + "") && T3(e6, s4), d4 && d4.p && 8388608 & i3[2] && f2(d4, o4, t8, t8[85], i3, Ce, Le);
    }, i(t8) {
      n4 || (ct(d4, t8), n4 = true);
    }, o(t8) {
      lt(d4, t8), n4 = false;
    }, d(t8) {
      t8 && w2(e6), d4 && d4.d(t8);
    }};
  }
  function Ue(t7) {
    let e6, n4, i3 = !t7[16] && (t7[17] != null || t7[38].label) && we(t7);
    return {c() {
      i3 && i3.c(), e6 = k2();
    }, m(t8, l3) {
      i3 && i3.m(t8, l3), b2(t8, e6, l3), n4 = true;
    }, p(t8, n5) {
      t8[16] || t8[17] == null && !t8[38].label ? i3 && (it(), lt(i3, 1, 1, () => {
        i3 = null;
      }), at()) : i3 ? (i3.p(t8, n5), 196608 & n5[0] | 128 & n5[1] && ct(i3, 1)) : (i3 = we(t8), i3.c(), ct(i3, 1), i3.m(e6.parentNode, e6));
    }, i(t8) {
      n4 || (ct(i3), n4 = true);
    }, o(t8) {
      lt(i3), n4 = false;
    }, d(t8) {
      i3 && i3.d(t8), t8 && w2(e6);
    }};
  }
  function je(t7) {
    let e6;
    const n4 = t7[46].leadingIcon, s4 = u2(n4, t7, t7[85], Ee);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      s4 && s4.p && 8388608 & e7[2] && f2(s4, n4, t8, t8[85], e7, ye, Ee);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function ke(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3, $2, v5;
    const b5 = t7[46].prefix, I2 = u2(b5, t7, t7[85], Ie);
    let _3 = t7[19] != null && Be(t7);
    const E4 = [{type: t7[18]}, {disabled: t7[12]}, {required: t7[13]}, {updateInvalid: t7[21]}, {"aria-controls": t7[25]}, {"aria-describedby": t7[25]}, t7[16] && t7[17] != null ? {placeholder: t7[17]} : {}, G3(t7[39], "input$")];
    function C4(e7) {
      t7[59](e7);
    }
    function L6(e7) {
      t7[60](e7);
    }
    function O5(e7) {
      t7[61](e7);
    }
    function T6(e7) {
      t7[62](e7);
    }
    let N7 = {};
    for (let t8 = 0; t8 < E4.length; t8 += 1)
      N7 = e3(N7, E4[t8]);
    t7[0] !== void 0 && (N7.value = t7[0]), t7[1] !== void 0 && (N7.files = t7[1]), t7[4] !== void 0 && (N7.dirty = t7[4]), t7[2] !== void 0 && (N7.invalid = t7[2]), s4 = new ee({props: N7}), t7[58](s4), J.push(() => gt(s4, "value", C4)), J.push(() => gt(s4, "files", L6)), J.push(() => gt(s4, "dirty", O5)), J.push(() => gt(s4, "invalid", T6)), s4.$on("change", t7[63]), s4.$on("input", t7[64]), s4.$on("blur", t7[65]), s4.$on("focus", t7[66]);
    let R6 = t7[20] != null && Ge(t7);
    const H7 = t7[46].suffix, V4 = u2(H7, t7, t7[85], ve);
    return {c() {
      I2 && I2.c(), e6 = P2(), _3 && _3.c(), n4 = P2(), yt(s4.$$.fragment), p3 = P2(), R6 && R6.c(), $2 = P2(), V4 && V4.c();
    }, m(t8, i3) {
      I2 && I2.m(t8, i3), b2(t8, e6, i3), _3 && _3.m(t8, i3), b2(t8, n4, i3), $t(s4, t8, i3), b2(t8, p3, i3), R6 && R6.m(t8, i3), b2(t8, $2, i3), V4 && V4.m(t8, i3), v5 = true;
    }, p(t8, e7) {
      I2 && I2.p && 8388608 & e7[2] && f2(I2, b5, t8, t8[85], e7, be, Ie), t8[19] != null ? _3 ? (_3.p(t8, e7), 524288 & e7[0] && ct(_3, 1)) : (_3 = Be(t8), _3.c(), ct(_3, 1), _3.m(n4.parentNode, n4)) : _3 && (it(), lt(_3, 1, 1, () => {
        _3 = null;
      }), at());
      const i3 = 36122624 & e7[0] | 256 & e7[1] ? ht(E4, [262144 & e7[0] && {type: t8[18]}, 4096 & e7[0] && {disabled: t8[12]}, 8192 & e7[0] && {required: t8[13]}, 2097152 & e7[0] && {updateInvalid: t8[21]}, 33554432 & e7[0] && {"aria-controls": t8[25]}, 33554432 & e7[0] && {"aria-describedby": t8[25]}, 196608 & e7[0] && mt(t8[16] && t8[17] != null ? {placeholder: t8[17]} : {}), 256 & e7[1] && mt(G3(t8[39], "input$"))]) : {};
      !o4 && 1 & e7[0] && (o4 = true, i3.value = t8[0], Y3(() => o4 = false)), !d4 && 2 & e7[0] && (d4 = true, i3.files = t8[1], Y3(() => d4 = false)), !u3 && 16 & e7[0] && (u3 = true, i3.dirty = t8[4], Y3(() => u3 = false)), !c3 && 4 & e7[0] && (c3 = true, i3.invalid = t8[2], Y3(() => c3 = false)), s4.$set(i3), t8[20] != null ? R6 ? (R6.p(t8, e7), 1048576 & e7[0] && ct(R6, 1)) : (R6 = Ge(t8), R6.c(), ct(R6, 1), R6.m($2.parentNode, $2)) : R6 && (it(), lt(R6, 1, 1, () => {
        R6 = null;
      }), at()), V4 && V4.p && 8388608 & e7[2] && f2(V4, H7, t8, t8[85], e7, $e, ve);
    }, i(t8) {
      v5 || (ct(I2, t8), ct(_3), ct(s4.$$.fragment, t8), ct(R6), ct(V4, t8), v5 = true);
    }, o(t8) {
      lt(I2, t8), lt(_3), lt(s4.$$.fragment, t8), lt(R6), lt(V4, t8), v5 = false;
    }, d(i3) {
      I2 && I2.d(i3), i3 && w2(e6), _3 && _3.d(i3), i3 && w2(n4), t7[58](null), bt(s4, i3), i3 && w2(p3), R6 && R6.d(i3), i3 && w2($2), V4 && V4.d(i3);
    }};
  }
  function qe(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3;
    const h3 = [{disabled: t7[12]}, {required: t7[13]}, {updateInvalid: t7[21]}, {"aria-controls": t7[25]}, {"aria-describedby": t7[25]}, G3(t7[39], "input$")];
    function m4(e7) {
      t7[51](e7);
    }
    function $2(e7) {
      t7[52](e7);
    }
    function v5(e7) {
      t7[53](e7);
    }
    let b5 = {};
    for (let t8 = 0; t8 < h3.length; t8 += 1)
      b5 = e3(b5, h3[t8]);
    t7[0] !== void 0 && (b5.value = t7[0]), t7[4] !== void 0 && (b5.dirty = t7[4]), t7[2] !== void 0 && (b5.invalid = t7[2]), n4 = new le({props: b5}), t7[50](n4), J.push(() => gt(n4, "value", m4)), J.push(() => gt(n4, "dirty", $2)), J.push(() => gt(n4, "invalid", v5)), n4.$on("change", t7[54]), n4.$on("input", t7[55]), n4.$on("blur", t7[56]), n4.$on("focus", t7[57]);
    const I2 = t7[46].internalCounter, _3 = u2(I2, t7, t7[85], _e);
    return {c() {
      e6 = x2("span"), yt(n4.$$.fragment), u3 = P2(), _3 && _3.c(), L3(e6, "class", c3 = N2({"mdc-text-field__resizer": !("input$resizable" in t7[39]) || t7[39].input$resizable}));
    }, m(t8, i3) {
      b2(t8, e6, i3), $t(n4, e6, null), $(e6, u3), _3 && _3.m(e6, null), p3 = true;
    }, p(t8, i3) {
      const a4 = 35663872 & i3[0] | 256 & i3[1] ? ht(h3, [4096 & i3[0] && {disabled: t8[12]}, 8192 & i3[0] && {required: t8[13]}, 2097152 & i3[0] && {updateInvalid: t8[21]}, 33554432 & i3[0] && {"aria-controls": t8[25]}, 33554432 & i3[0] && {"aria-describedby": t8[25]}, 256 & i3[1] && mt(G3(t8[39], "input$"))]) : {};
      !s4 && 1 & i3[0] && (s4 = true, a4.value = t8[0], Y3(() => s4 = false)), !o4 && 16 & i3[0] && (o4 = true, a4.dirty = t8[4], Y3(() => o4 = false)), !d4 && 4 & i3[0] && (d4 = true, a4.invalid = t8[2], Y3(() => d4 = false)), n4.$set(a4), _3 && _3.p && 8388608 & i3[2] && f2(_3, I2, t8, t8[85], i3, xe, _e), (!p3 || 256 & i3[1] && c3 !== (c3 = N2({"mdc-text-field__resizer": !("input$resizable" in t8[39]) || t8[39].input$resizable}))) && L3(e6, "class", c3);
    }, i(t8) {
      p3 || (ct(n4.$$.fragment, t8), ct(_3, t8), p3 = true);
    }, o(t8) {
      lt(n4.$$.fragment, t8), lt(_3, t8), p3 = false;
    }, d(i3) {
      i3 && w2(e6), t7[50](null), bt(n4), _3 && _3.d(i3);
    }};
  }
  function Be(t7) {
    let e6, n4;
    return e6 = new Qt({props: {$$slots: {default: [We]}, $$scope: {ctx: t7}}}), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i3) {
      $t(e6, t8, i3), n4 = true;
    }, p(t8, n5) {
      const i3 = {};
      524288 & n5[0] | 8388608 & n5[2] && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(t8) {
      bt(e6, t8);
    }};
  }
  function We(t7) {
    let e6;
    return {c() {
      e6 = v2(t7[19]);
    }, m(t8, n4) {
      b2(t8, e6, n4);
    }, p(t8, n4) {
      524288 & n4[0] && T3(e6, t8[19]);
    }, d(t8) {
      t8 && w2(e6);
    }};
  }
  function Ge(t7) {
    let e6, n4;
    return e6 = new Zt({props: {$$slots: {default: [Xe]}, $$scope: {ctx: t7}}}), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i3) {
      $t(e6, t8, i3), n4 = true;
    }, p(t8, n5) {
      const i3 = {};
      1048576 & n5[0] | 8388608 & n5[2] && (i3.$$scope = {dirty: n5, ctx: t8}), e6.$set(i3);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(t8) {
      bt(e6, t8);
    }};
  }
  function Xe(t7) {
    let e6;
    return {c() {
      e6 = v2(t7[20]);
    }, m(t8, n4) {
      b2(t8, e6, n4);
    }, p(t8, n4) {
      1048576 & n4[0] && T3(e6, t8[20]);
    }, d(t8) {
      t8 && w2(e6);
    }};
  }
  function ze(t7) {
    let e6;
    const n4 = t7[46].trailingIcon, s4 = u2(n4, t7, t7[85], ge);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      s4 && s4.p && 8388608 & e7[2] && f2(s4, n4, t8, t8[85], e7, me, ge);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function Ke(t7) {
    let e6, n4;
    const i3 = [G3(t7[39], "ripple$")];
    let l3 = {};
    for (let t8 = 0; t8 < i3.length; t8 += 1)
      l3 = e3(l3, i3[t8]);
    return e6 = new Bt({props: l3}), t7[67](e6), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i4) {
      $t(e6, t8, i4), n4 = true;
    }, p(t8, n5) {
      const l4 = 256 & n5[1] ? ht(i3, [mt(G3(t8[39], "ripple$"))]) : {};
      e6.$set(l4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(n5) {
      t7[67](null), bt(e6, n5);
    }};
  }
  function Ye(t7) {
    let e6, n4;
    const i3 = [G3(t7[39], "helperLine$")];
    let l3 = {$$slots: {default: [Qe]}, $$scope: {ctx: t7}};
    for (let t8 = 0; t8 < i3.length; t8 += 1)
      l3 = e3(l3, i3[t8]);
    return e6 = new Yt({props: l3}), e6.$on("SMUI:textfield:helper-text:id", t7[80]), e6.$on("SMUI:textfield:helper-text:mount", t7[81]), e6.$on("SMUI:textfield:helper-text:unmount", t7[82]), e6.$on("SMUI:textfield:character-counter:mount", t7[83]), e6.$on("SMUI:textfield:character-counter:unmount", t7[84]), {c() {
      yt(e6.$$.fragment);
    }, m(t8, i4) {
      $t(e6, t8, i4), n4 = true;
    }, p(t8, n5) {
      const l4 = 256 & n5[1] ? ht(i3, [mt(G3(t8[39], "helperLine$"))]) : {};
      8388608 & n5[2] && (l4.$$scope = {dirty: n5, ctx: t8}), e6.$set(l4);
    }, i(t8) {
      n4 || (ct(e6.$$.fragment, t8), n4 = true);
    }, o(t8) {
      lt(e6.$$.fragment, t8), n4 = false;
    }, d(t8) {
      bt(e6, t8);
    }};
  }
  function Qe(t7) {
    let e6;
    const n4 = t7[46].helper, s4 = u2(n4, t7, t7[85], re);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      s4 && s4.p && 8388608 & e7[2] && f2(s4, n4, t8, t8[85], e7, ae, re);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function Ze(t7) {
    let e6, n4, i3, l3, s4;
    const o4 = [Ne, Te], d4 = [];
    function u3(t8, e7) {
      return t8[30] ? 0 : 1;
    }
    e6 = u3(t7), n4 = d4[e6] = o4[e6](t7);
    let c3 = t7[38].helper && Ye(t7);
    return {c() {
      n4.c(), i3 = P2(), c3 && c3.c(), l3 = k2();
    }, m(t8, n5) {
      d4[e6].m(t8, n5), b2(t8, i3, n5), c3 && c3.m(t8, n5), b2(t8, l3, n5), s4 = true;
    }, p(t8, s5) {
      let p3 = e6;
      e6 = u3(t8), e6 === p3 ? d4[e6].p(t8, s5) : (it(), lt(d4[p3], 1, 1, () => {
        d4[p3] = null;
      }), at(), n4 = d4[e6], n4 ? n4.p(t8, s5) : (n4 = d4[e6] = o4[e6](t8), n4.c()), ct(n4, 1), n4.m(i3.parentNode, i3)), t8[38].helper ? c3 ? (c3.p(t8, s5), 128 & s5[1] && ct(c3, 1)) : (c3 = Ye(t8), c3.c(), ct(c3, 1), c3.m(l3.parentNode, l3)) : c3 && (it(), lt(c3, 1, 1, () => {
        c3 = null;
      }), at());
    }, i(t8) {
      s4 || (ct(n4), ct(c3), s4 = true);
    }, o(t8) {
      lt(n4), lt(c3), s4 = false;
    }, d(t8) {
      d4[e6].d(t8), t8 && w2(i3), c3 && c3.d(t8), t8 && w2(l3);
    }};
  }
  var Je = ([t7, e6]) => `${t7}: ${e6};`;
  var tn = ([t7, e6]) => `${t7}: ${e6};`;
  function en(t7, e6, n4) {
    let i3, l3;
    const a4 = ["use", "class", "style", "ripple", "disabled", "required", "textarea", "variant", "noLabel", "label", "type", "value", "files", "dirty", "invalid", "prefix", "suffix", "updateInvalid", "validateOnValueChange", "useNativeValidation", "input", "floatingLabel", "lineRipple", "notchedOutline", "focus", "layout", "getElement"];
    let r5 = h2(e6, a4), {$$slots: s4 = {}, $$scope: o4} = e6;
    const u3 = m3(s4), {applyPassive: c3} = K, p3 = x3(R2());
    let f3, h3, m4, g3, E4, C4, L6, A5, O5, T6 = () => {
    }, {use: N7 = []} = e6, {class: R6 = ""} = e6, {style: S5 = ""} = e6, {ripple: H7 = true} = e6, {disabled: V4 = false} = e6, {required: P7 = false} = e6, {textarea: F6 = false} = e6, {variant: D4 = F6 ? "outlined" : "standard"} = e6, {noLabel: w4 = false} = e6, {label: M3 = null} = e6, {type: q7 = "text"} = e6, {value: B5 = T6} = e6, {files: W6 = T6} = e6, {dirty: G5 = false} = e6, {invalid: X4 = T6} = e6, {prefix: z5 = null} = e6, {suffix: K5 = null} = e6, {updateInvalid: Q5 = X4 === T6} = e6, {validateOnValueChange: Z4 = Q5} = e6, {useNativeValidation: J5 = Q5} = e6, {input: tt4} = e6, {floatingLabel: et3} = e6, {lineRipple: nt3} = e6, {notchedOutline: it3} = e6, at3 = {}, rt3 = {}, st4 = D2("SMUI:addLayoutListener"), ot4 = new Promise((t8) => E4 = t8);
    function dt4(t8) {
      return t8 in at3 ? at3[t8] : ft4().classList.contains(t8);
    }
    function ut4(t8) {
      at3[t8] || n4(23, at3[t8] = true, at3);
    }
    function ct4(t8) {
      t8 in at3 && !at3[t8] || n4(23, at3[t8] = false, at3);
    }
    function pt4() {
      h3.layout();
    }
    function ft4() {
      return f3;
    }
    st4 && (g3 = st4(pt4)), C2(() => (n4(45, h3 = new yt2({addClass: ut4, removeClass: ct4, hasClass: dt4, registerTextFieldInteractionHandler: (t8, e7) => ft4().addEventListener(t8, e7), deregisterTextFieldInteractionHandler: (t8, e7) => ft4().removeEventListener(t8, e7), registerValidationAttributeChangeHandler: (t8) => {
      const e7 = new MutationObserver((e8) => t8(((t9) => t9.map((t10) => t10.attributeName).filter((t10) => t10))(e8)));
      return e7.observe(tt4.getElement(), {attributes: true}), e7;
    }, deregisterValidationAttributeChangeHandler: (t8) => {
      t8.disconnect();
    }, getNativeInput: () => tt4.getElement(), setInputAttr: (t8, e7) => {
      tt4.addAttr(t8, e7);
    }, removeInputAttr: (t8) => {
      tt4.removeAttr(t8);
    }, isFocused: () => document.activeElement === tt4.getElement(), registerInputInteractionHandler: (t8, e7) => {
      tt4.getElement().addEventListener(t8, e7, c3());
    }, deregisterInputInteractionHandler: (t8, e7) => {
      tt4.getElement().removeEventListener(t8, e7, c3());
    }, floatLabel: (t8) => et3 && et3.float(t8), getLabelWidth: () => et3 ? et3.getWidth() : 0, hasLabel: () => !!et3, shakeLabel: (t8) => et3 && et3.shake(t8), setLabelRequired: (t8) => et3 && et3.setRequired(t8), activateLineRipple: () => nt3 && nt3.activate(), deactivateLineRipple: () => nt3 && nt3.deactivate(), setLineRippleTransformOrigin: (t8) => nt3 && nt3.setRippleCenter(t8), closeOutline: () => it3 && it3.closeNotch(), hasOutline: () => !!it3, notchOutline: (t8) => it3 && it3.notch(t8)}, {get helperText() {
      return A5;
    }, get characterCounter() {
      return O5;
    }, get leadingIcon() {
      return C4;
    }, get trailingIcon() {
      return L6;
    }})), i3 ? h3.init() : Z3().then(() => {
      h3.init();
    }), E4(), () => {
      h3.destroy();
    })), q2(() => {
      g3 && g3();
    });
    return t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(39, r5 = h2(e6, a4)), "use" in t8 && n4(8, N7 = t8.use), "class" in t8 && n4(9, R6 = t8.class), "style" in t8 && n4(10, S5 = t8.style), "ripple" in t8 && n4(11, H7 = t8.ripple), "disabled" in t8 && n4(12, V4 = t8.disabled), "required" in t8 && n4(13, P7 = t8.required), "textarea" in t8 && n4(14, F6 = t8.textarea), "variant" in t8 && n4(15, D4 = t8.variant), "noLabel" in t8 && n4(16, w4 = t8.noLabel), "label" in t8 && n4(17, M3 = t8.label), "type" in t8 && n4(18, q7 = t8.type), "value" in t8 && n4(0, B5 = t8.value), "files" in t8 && n4(1, W6 = t8.files), "dirty" in t8 && n4(4, G5 = t8.dirty), "invalid" in t8 && n4(2, X4 = t8.invalid), "prefix" in t8 && n4(19, z5 = t8.prefix), "suffix" in t8 && n4(20, K5 = t8.suffix), "updateInvalid" in t8 && n4(21, Q5 = t8.updateInvalid), "validateOnValueChange" in t8 && n4(40, Z4 = t8.validateOnValueChange), "useNativeValidation" in t8 && n4(41, J5 = t8.useNativeValidation), "input" in t8 && n4(3, tt4 = t8.input), "floatingLabel" in t8 && n4(5, et3 = t8.floatingLabel), "lineRipple" in t8 && n4(6, nt3 = t8.lineRipple), "notchedOutline" in t8 && n4(7, it3 = t8.notchedOutline), "$$scope" in t8 && n4(85, o4 = t8.$$scope);
    }, t7.$$.update = () => {
      3 & t7.$$.dirty[0] && n4(30, i3 = B5 !== T6 || W6 !== T6), 8 & t7.$$.dirty[0] && n4(31, l3 = tt4 && tt4.getElement()), 2097156 & t7.$$.dirty[0] | 16384 & t7.$$.dirty[1] && h3 && h3.isValid() !== !X4 && (Q5 ? n4(2, X4 = !h3.isValid()) : h3.setValid(!X4)), 16896 & t7.$$.dirty[1] && h3 && h3.getValidateOnValueChange() !== Z4 && h3.setValidateOnValueChange(Z4 !== T6 && Z4), 17408 & t7.$$.dirty[1] && h3 && h3.setUseNativeValidation(J5), 4096 & t7.$$.dirty[0] | 16384 & t7.$$.dirty[1] && h3 && h3.setDisabled(V4);
    }, [B5, W6, X4, tt4, G5, et3, nt3, it3, N7, R6, S5, H7, V4, P7, F6, D4, w4, M3, q7, z5, K5, Q5, f3, at3, rt3, m4, C4, L6, A5, O5, i3, l3, p3, T6, ot4, ut4, ct4, function(t8, e7) {
      rt3[t8] != e7 && (e7 === "" || e7 == null ? (delete rt3[t8], n4(24, rt3)) : n4(24, rt3[t8] = e7, rt3));
    }, u3, r5, Z4, J5, function() {
      tt4.focus();
    }, pt4, ft4, h3, s4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        et3 = t8, n4(5, et3);
      });
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        et3 = t8, n4(5, et3);
      });
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        it3 = t8, n4(7, it3);
      });
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        tt4 = t8, n4(3, tt4);
      });
    }, function(t8) {
      B5 = t8, n4(0, B5);
    }, function(t8) {
      G5 = t8, n4(4, G5);
    }, function(t8) {
      X4 = t8, n4(2, X4), n4(45, h3), n4(21, Q5);
    }, function(e7) {
      H2(t7, e7);
    }, function(e7) {
      H2(t7, e7);
    }, function(e7) {
      H2(t7, e7);
    }, function(e7) {
      H2(t7, e7);
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        tt4 = t8, n4(3, tt4);
      });
    }, function(t8) {
      B5 = t8, n4(0, B5);
    }, function(t8) {
      W6 = t8, n4(1, W6);
    }, function(t8) {
      G5 = t8, n4(4, G5);
    }, function(t8) {
      X4 = t8, n4(2, X4), n4(45, h3), n4(21, Q5);
    }, function(e7) {
      H2(t7, e7);
    }, function(e7) {
      H2(t7, e7);
    }, function(e7) {
      H2(t7, e7);
    }, function(e7) {
      H2(t7, e7);
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        nt3 = t8, n4(6, nt3);
      });
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        f3 = t8, n4(22, f3);
      });
    }, (t8) => n4(26, C4 = t8.detail), () => n4(26, C4 = void 0), (t8) => n4(27, L6 = t8.detail), () => n4(27, L6 = void 0), (t8) => n4(29, O5 = t8.detail), () => n4(29, O5 = void 0), function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        f3 = t8, n4(22, f3);
      });
    }, (t8) => n4(26, C4 = t8.detail), () => n4(26, C4 = void 0), (t8) => n4(27, L6 = t8.detail), () => n4(27, L6 = void 0), (t8) => n4(25, m4 = t8.detail), (t8) => n4(28, A5 = t8.detail), () => {
      n4(25, m4 = void 0), n4(28, A5 = void 0);
    }, (t8) => n4(29, O5 = t8.detail), () => n4(29, O5 = void 0), o4];
  }
  var nn = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, en, Ze, i2, {use: 8, class: 9, style: 10, ripple: 11, disabled: 12, required: 13, textarea: 14, variant: 15, noLabel: 16, label: 17, type: 18, value: 0, files: 1, dirty: 4, invalid: 2, prefix: 19, suffix: 20, updateInvalid: 21, validateOnValueChange: 40, useNativeValidation: 41, input: 3, floatingLabel: 5, lineRipple: 6, notchedOutline: 7, focus: 42, layout: 43, getElement: 44}, [-1, -1, -1]);
    }
    get focus() {
      return this.$$.ctx[42];
    }
    get layout() {
      return this.$$.ctx[43];
    }
    get getElement() {
      return this.$$.ctx[44];
    }
  };
  function ln(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3;
    const h3 = t7[13].default, m4 = u2(h3, t7, t7[12], null);
    let $2 = [{class: n4 = N2({[t7[1]]: true, "mdc-text-field__icon": true, "mdc-text-field__icon--leading": t7[9], "mdc-text-field__icon--trailing": !t7[9]})}, {tabindex: t7[3]}, {"aria-hidden": s4 = t7[3] === "-1" ? "true" : "false"}, {"aria-disabled": o4 = t7[2] === "button" ? t7[4] ? "true" : "false" : null}, {role: t7[2]}, t7[6], t7[10]], v5 = {};
    for (let t8 = 0; t8 < $2.length; t8 += 1)
      v5 = e3(v5, $2[t8]);
    return {c() {
      e6 = x2("i"), m4 && m4.c(), I(e6, v5);
    }, m(n5, i3) {
      b2(n5, e6, i3), m4 && m4.m(e6, null), t7[14](e6), u3 = true, c3 || (p3 = [y2(d4 = q3.call(null, e6, t7[0])), y2(t7[7].call(null, e6))], c3 = true);
    }, p(t8, [i3]) {
      m4 && m4.p && 4096 & i3 && f2(m4, h3, t8, t8[12], i3, null, null), I(e6, v5 = ht($2, [(!u3 || 2 & i3 && n4 !== (n4 = N2({[t8[1]]: true, "mdc-text-field__icon": true, "mdc-text-field__icon--leading": t8[9], "mdc-text-field__icon--trailing": !t8[9]}))) && {class: n4}, (!u3 || 8 & i3) && {tabindex: t8[3]}, (!u3 || 8 & i3 && s4 !== (s4 = t8[3] === "-1" ? "true" : "false")) && {"aria-hidden": s4}, (!u3 || 20 & i3 && o4 !== (o4 = t8[2] === "button" ? t8[4] ? "true" : "false" : null)) && {"aria-disabled": o4}, (!u3 || 4 & i3) && {role: t8[2]}, 64 & i3 && t8[6], 1024 & i3 && t8[10]])), d4 && s2(d4.update) && 1 & i3 && d4.update.call(null, t8[0]);
    }, i(t8) {
      u3 || (ct(m4, t8), u3 = true);
    }, o(t8) {
      lt(m4, t8), u3 = false;
    }, d(n5) {
      n5 && w2(e6), m4 && m4.d(n5), t7[14](null), c3 = false, r2(p3);
    }};
  }
  function an(t7, e6, n4) {
    const i3 = ["use", "class", "role", "tabindex", "disabled", "getElement"];
    let l3, a4 = h2(e6, i3), {$$slots: r5 = {}, $$scope: o4} = e6;
    const d4 = x3(R2());
    let u3, c3, {use: p3 = []} = e6, {class: f3 = ""} = e6, {role: h3 = null} = e6, {tabindex: m4 = h3 === "button" ? "0" : "-1"} = e6, {disabled: g3 = false} = e6, E4 = {};
    const C4 = D2("SMUI:textfield:icon:leading");
    l2(t7, C4, (t8) => n4(16, l3 = t8));
    const L6 = l3;
    function A5(t8) {
      return t8 in E4 ? E4[t8] : N7().getAttribute(t8);
    }
    function O5(t8, e7) {
      E4[t8] !== e7 && n4(6, E4[t8] = e7, E4);
    }
    function T6(t8) {
      t8 in E4 && E4[t8] == null || n4(6, E4[t8] = void 0, E4);
    }
    function N7() {
      return u3;
    }
    return C2(() => (c3 = new Nt({getAttr: A5, setAttr: O5, removeAttr: T6, setContent: (t8) => {
      content = t8;
    }, registerInteractionHandler: (t8, e7) => N7().addEventListener(t8, e7), deregisterInteractionHandler: (t8, e7) => N7().removeEventListener(t8, e7), notifyIconAction: () => k3(N7(), "MDCTextField:icon")}), k3(N7(), L6 ? "SMUI:textfield:leading-icon:mount" : "SMUI:textfield:trailing-icon:mount", c3), c3.init(), () => {
      k3(N7(), L6 ? "SMUI:textfield:leading-icon:unmount" : "SMUI:textfield:trailing-icon:unmount", c3), c3.destroy();
    })), t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(10, a4 = h2(e6, i3)), "use" in t8 && n4(0, p3 = t8.use), "class" in t8 && n4(1, f3 = t8.class), "role" in t8 && n4(2, h3 = t8.role), "tabindex" in t8 && n4(3, m4 = t8.tabindex), "disabled" in t8 && n4(4, g3 = t8.disabled), "$$scope" in t8 && n4(12, o4 = t8.$$scope);
    }, [p3, f3, h3, m4, g3, u3, E4, d4, C4, L6, a4, N7, o4, r5, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        u3 = t8, n4(5, u3);
      });
    }];
  }
  var rn = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, an, ln, i2, {use: 0, class: 1, role: 2, tabindex: 3, disabled: 4, getElement: 11});
    }
    get getElement() {
      return this.$$.ctx[11];
    }
  };
  function sn(t7) {
    let e6;
    return {c() {
      e6 = v2(t7[8]);
    }, m(t8, n4) {
      b2(t8, e6, n4);
    }, p(t8, n4) {
      256 & n4 && T3(e6, t8[8]);
    }, i: t3, o: t3, d(t8) {
      t8 && w2(e6);
    }};
  }
  function on(t7) {
    let e6;
    const n4 = t7[13].default, s4 = u2(n4, t7, t7[12], null);
    return {c() {
      s4 && s4.c();
    }, m(t8, n5) {
      s4 && s4.m(t8, n5), e6 = true;
    }, p(t8, e7) {
      s4 && s4.p && 4096 & e7 && f2(s4, n4, t8, t8[12], e7, null, null);
    }, i(t8) {
      e6 || (ct(s4, t8), e6 = true);
    }, o(t8) {
      lt(s4, t8), e6 = false;
    }, d(t8) {
      s4 && s4.d(t8);
    }};
  }
  function dn(t7) {
    let e6, n4, i3, l3, s4, o4, d4, u3, c3;
    const p3 = [on, sn], $2 = [];
    function v5(t8, e7) {
      return t8[8] == null ? 0 : 1;
    }
    n4 = v5(t7), i3 = $2[n4] = p3[n4](t7);
    let b5 = [{class: l3 = N2({[t7[1]]: true, "mdc-text-field-helper-text": true, "mdc-text-field-helper-text--persistent": t7[3], "mdc-text-field-helper-text--validation-msg": t7[4], ...t7[6]})}, {"aria-hidden": s4 = t7[3] ? null : "true"}, {id: t7[2]}, t7[7], t7[10]], I2 = {};
    for (let t8 = 0; t8 < b5.length; t8 += 1)
      I2 = e3(I2, b5[t8]);
    return {c() {
      e6 = x2("div"), i3.c(), I(e6, I2);
    }, m(i4, l4) {
      b2(i4, e6, l4), $2[n4].m(e6, null), t7[14](e6), d4 = true, u3 || (c3 = [y2(o4 = q3.call(null, e6, t7[0])), y2(t7[9].call(null, e6))], u3 = true);
    }, p(t8, [u4]) {
      let c4 = n4;
      n4 = v5(t8), n4 === c4 ? $2[n4].p(t8, u4) : (it(), lt($2[c4], 1, 1, () => {
        $2[c4] = null;
      }), at(), i3 = $2[n4], i3 ? i3.p(t8, u4) : (i3 = $2[n4] = p3[n4](t8), i3.c()), ct(i3, 1), i3.m(e6, null)), I(e6, I2 = ht(b5, [(!d4 || 90 & u4 && l3 !== (l3 = N2({[t8[1]]: true, "mdc-text-field-helper-text": true, "mdc-text-field-helper-text--persistent": t8[3], "mdc-text-field-helper-text--validation-msg": t8[4], ...t8[6]}))) && {class: l3}, (!d4 || 8 & u4 && s4 !== (s4 = t8[3] ? null : "true")) && {"aria-hidden": s4}, (!d4 || 4 & u4) && {id: t8[2]}, 128 & u4 && t8[7], 1024 & u4 && t8[10]])), o4 && s2(o4.update) && 1 & u4 && o4.update.call(null, t8[0]);
    }, i(t8) {
      d4 || (ct(i3), d4 = true);
    }, o(t8) {
      lt(i3), d4 = false;
    }, d(i4) {
      i4 && w2(e6), $2[n4].d(), t7[14](null), u3 = false, r2(c3);
    }};
  }
  var un = 0;
  function cn(t7, e6, n4) {
    const i3 = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
    let l3 = h2(e6, i3), {$$slots: a4 = {}, $$scope: r5} = e6;
    const s4 = x3(R2());
    let o4, d4, {use: u3 = []} = e6, {class: c3 = ""} = e6, {id: p3 = "SMUI-textfield-helper-text-" + un++} = e6, {persistent: f3 = false} = e6, {validationMsg: h3 = false} = e6, m4 = {}, g3 = {}, b5 = null;
    function E4(t8) {
      return t8 in m4 ? m4[t8] : N7().classList.contains(t8);
    }
    function C4(t8) {
      m4[t8] || n4(6, m4[t8] = true, m4);
    }
    function L6(t8) {
      t8 in m4 && !m4[t8] || n4(6, m4[t8] = false, m4);
    }
    function A5(t8) {
      return t8 in g3 ? g3[t8] : N7().getAttribute(t8);
    }
    function O5(t8, e7) {
      g3[t8] !== e7 && n4(7, g3[t8] = e7, g3);
    }
    function T6(t8) {
      t8 in g3 && g3[t8] == null || n4(7, g3[t8] = void 0, g3);
    }
    function N7() {
      return o4;
    }
    return C2(() => (d4 = new Lt({addClass: C4, removeClass: L6, hasClass: E4, getAttr: A5, setAttr: O5, removeAttr: T6, setContent: (t8) => {
      n4(8, b5 = t8);
    }}), p3.startsWith("SMUI-textfield-helper-text-") && k3(N7(), "SMUI:textfield:helper-text:id", p3), k3(N7(), "SMUI:textfield:helper-text:mount", d4), d4.init(), () => {
      k3(N7(), "SMUI:textfield:helper-text:unmount", d4), d4.destroy();
    })), t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(10, l3 = h2(e6, i3)), "use" in t8 && n4(0, u3 = t8.use), "class" in t8 && n4(1, c3 = t8.class), "id" in t8 && n4(2, p3 = t8.id), "persistent" in t8 && n4(3, f3 = t8.persistent), "validationMsg" in t8 && n4(4, h3 = t8.validationMsg), "$$scope" in t8 && n4(12, r5 = t8.$$scope);
    }, [u3, c3, p3, f3, h3, o4, m4, g3, b5, s4, l3, N7, r5, a4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        o4 = t8, n4(5, o4);
      });
    }];
  }
  var pn = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, cn, dn, i2, {use: 0, class: 1, id: 2, persistent: 3, validationMsg: 4, getElement: 11});
    }
    get getElement() {
      return this.$$.ctx[11];
    }
  };
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
  var fn = {ROOT: "mdc-form-field"};
  var hn = {LABEL_SELECTOR: ".mdc-form-field > label"};
  var mn = function(t7) {
    function e6(n4) {
      var i3 = t7.call(this, Z(Z({}, e6.defaultAdapter), n4)) || this;
      return i3.click = function() {
        i3.handleClick();
      }, i3;
    }
    return Y(e6, t7), Object.defineProperty(e6, "cssClasses", {get: function() {
      return fn;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "strings", {get: function() {
      return hn;
    }, enumerable: false, configurable: true}), Object.defineProperty(e6, "defaultAdapter", {get: function() {
      return {activateInputRipple: function() {
      }, deactivateInputRipple: function() {
      }, deregisterInteractionHandler: function() {
      }, registerInteractionHandler: function() {
      }};
    }, enumerable: false, configurable: true}), e6.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e6.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e6.prototype.handleClick = function() {
      var t8 = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        t8.adapter.deactivateInputRipple();
      });
    }, e6;
  }(J2);
  var gn = (t7) => ({});
  var $n = (t7) => ({});
  function vn(t7) {
    let e6, n4, s4, o4, d4, u3, c3, p3, h3;
    const m4 = t7[13].default, $2 = u2(m4, t7, t7[12], null), v5 = t7[13].label, b5 = u2(v5, t7, t7[12], $n);
    let I2 = [{for: t7[4]}, G3(t7[10], "label$")], _3 = {};
    for (let t8 = 0; t8 < I2.length; t8 += 1)
      _3 = e3(_3, I2[t8]);
    let y3 = [{class: d4 = N2({[t7[1]]: true, "mdc-form-field": true, "mdc-form-field--align-end": t7[2] === "end", "mdc-form-field--nowrap": t7[3]})}, w3(t7[10], ["label$"])], N7 = {};
    for (let t8 = 0; t8 < y3.length; t8 += 1)
      N7 = e3(N7, y3[t8]);
    return {c() {
      e6 = x2("div"), $2 && $2.c(), n4 = P2(), s4 = x2("label"), b5 && b5.c(), I(s4, _3), I(e6, N7);
    }, m(i3, l3) {
      b2(i3, e6, l3), $2 && $2.m(e6, null), $(e6, n4), $(e6, s4), b5 && b5.m(s4, null), t7[14](s4), t7[15](e6), c3 = true, p3 || (h3 = [y2(o4 = q3.call(null, s4, t7[5])), y2(u3 = q3.call(null, e6, t7[0])), y2(t7[9].call(null, e6)), E2(e6, "SMUI:generic:input:mount", t7[16]), E2(e6, "SMUI:generic:input:unmount", t7[17])], p3 = true);
    }, p(t8, [n5]) {
      $2 && $2.p && 4096 & n5 && f2($2, m4, t8, t8[12], n5, null, null), b5 && b5.p && 4096 & n5 && f2(b5, v5, t8, t8[12], n5, gn, $n), I(s4, _3 = ht(I2, [(!c3 || 16 & n5) && {for: t8[4]}, 1024 & n5 && G3(t8[10], "label$")])), o4 && s2(o4.update) && 32 & n5 && o4.update.call(null, t8[5]), I(e6, N7 = ht(y3, [(!c3 || 14 & n5 && d4 !== (d4 = N2({[t8[1]]: true, "mdc-form-field": true, "mdc-form-field--align-end": t8[2] === "end", "mdc-form-field--nowrap": t8[3]}))) && {class: d4}, 1024 & n5 && w3(t8[10], ["label$"])])), u3 && s2(u3.update) && 1 & n5 && u3.update.call(null, t8[0]);
    }, i(t8) {
      c3 || (ct($2, t8), ct(b5, t8), c3 = true);
    }, o(t8) {
      lt($2, t8), lt(b5, t8), c3 = false;
    }, d(n5) {
      n5 && w2(e6), $2 && $2.d(n5), b5 && b5.d(n5), t7[14](null), t7[15](null), p3 = false, r2(h3);
    }};
  }
  var bn = 0;
  function In(t7, e6, n4) {
    const i3 = ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"];
    let l3 = h2(e6, i3), {$$slots: a4 = {}, $$scope: r5} = e6;
    const s4 = x3(R2());
    let d4, u3, c3, p3, {use: f3 = []} = e6, {class: h3 = ""} = e6, {align: m4 = "start"} = e6, {noWrap: g3 = false} = e6, {inputId: b5 = "SMUI-form-field-" + bn++} = e6, {label$use: E4 = []} = e6;
    U2("SMUI:generic:input:props", {id: b5}), C2(() => (u3 = new mn({activateInputRipple: () => {
      p3 && p3.activateRipple();
    }, deactivateInputRipple: () => {
      p3 && p3.deactivateRipple();
    }, deregisterInteractionHandler: (t8, e7) => {
      c3.removeEventListener(t8, e7);
    }, registerInteractionHandler: (t8, e7) => {
      c3.addEventListener(t8, e7);
    }}), u3.init(), () => {
      u3.destroy();
    }));
    return t7.$$set = (t8) => {
      e6 = e3(e3({}, e6), d2(t8)), n4(10, l3 = h2(e6, i3)), "use" in t8 && n4(0, f3 = t8.use), "class" in t8 && n4(1, h3 = t8.class), "align" in t8 && n4(2, m4 = t8.align), "noWrap" in t8 && n4(3, g3 = t8.noWrap), "inputId" in t8 && n4(4, b5 = t8.inputId), "label$use" in t8 && n4(5, E4 = t8.label$use), "$$scope" in t8 && n4(12, r5 = t8.$$scope);
    }, [f3, h3, m4, g3, b5, E4, d4, c3, p3, s4, l3, function() {
      return d4;
    }, r5, a4, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        c3 = t8, n4(7, c3);
      });
    }, function(t8) {
      J[t8 ? "unshift" : "push"](() => {
        d4 = t8, n4(6, d4);
      });
    }, (t8) => n4(8, p3 = t8.detail), () => n4(8, p3 = void 0)];
  }
  var xn = class extends _t {
    constructor(t7) {
      super(), wt(this, t7, In, vn, i2, {use: 0, class: 1, align: 2, noWrap: 3, inputId: 4, label$use: 5, getElement: 11});
    }
    get getElement() {
      return this.$$.ctx[11];
    }
  };

  // ../../dist/build/animationframe-5701646e.js
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
  var t4 = function() {
    function t7() {
      this.rafIDs = new Map();
    }
    return t7.prototype.request = function(t8, e6) {
      var n4 = this;
      this.cancel(t8);
      var r5 = requestAnimationFrame(function(r6) {
        n4.rafIDs.delete(t8), e6(r6);
      });
      this.rafIDs.set(t8, r5);
    }, t7.prototype.cancel = function(t8) {
      var e6 = this.rafIDs.get(t8);
      e6 && (cancelAnimationFrame(e6), this.rafIDs.delete(t8));
    }, t7.prototype.cancelAll = function() {
      var t8 = this;
      this.rafIDs.forEach(function(e6, n4) {
        t8.cancel(n4);
      });
    }, t7.prototype.getQueue = function() {
      var t8 = [];
      return this.rafIDs.forEach(function(e6, n4) {
        t8.push(n4);
      }), t8;
    }, t7;
  }();

  // ../../dist/build/keyboard-f4ed035d.js
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
  var E3 = {UNKNOWN: "Unknown", BACKSPACE: "Backspace", ENTER: "Enter", SPACEBAR: "Spacebar", PAGE_UP: "PageUp", PAGE_DOWN: "PageDown", END: "End", HOME: "Home", ARROW_LEFT: "ArrowLeft", ARROW_UP: "ArrowUp", ARROW_RIGHT: "ArrowRight", ARROW_DOWN: "ArrowDown", DELETE: "Delete", ESCAPE: "Escape", TAB: "Tab"};
  var d3 = new Set();
  d3.add(E3.BACKSPACE), d3.add(E3.ENTER), d3.add(E3.SPACEBAR), d3.add(E3.PAGE_UP), d3.add(E3.PAGE_DOWN), d3.add(E3.END), d3.add(E3.HOME), d3.add(E3.ARROW_LEFT), d3.add(E3.ARROW_UP), d3.add(E3.ARROW_RIGHT), d3.add(E3.ARROW_DOWN), d3.add(E3.DELETE), d3.add(E3.ESCAPE), d3.add(E3.TAB);
  var A3 = 8;
  var R5 = 13;
  var a2 = 32;
  var e4 = 33;
  var O4 = 34;
  var P6 = 35;
  var W4 = 36;
  var t5 = 37;
  var _ = 38;
  var N6 = 39;
  var r4 = 40;
  var s3 = 46;
  var D3 = 27;
  var T5 = 9;
  var n2 = new Map();
  n2.set(A3, E3.BACKSPACE), n2.set(R5, E3.ENTER), n2.set(a2, E3.SPACEBAR), n2.set(e4, E3.PAGE_UP), n2.set(O4, E3.PAGE_DOWN), n2.set(P6, E3.END), n2.set(W4, E3.HOME), n2.set(t5, E3.ARROW_LEFT), n2.set(_, E3.ARROW_UP), n2.set(N6, E3.ARROW_RIGHT), n2.set(r4, E3.ARROW_DOWN), n2.set(s3, E3.DELETE), n2.set(D3, E3.ESCAPE), n2.set(T5, E3.TAB);
  var C3 = new Set();
  function U4(A5) {
    var R6 = A5.key;
    if (d3.has(R6))
      return R6;
    var a4 = n2.get(A5.keyCode);
    return a4 || E3.UNKNOWN;
  }
  C3.add(E3.PAGE_UP), C3.add(E3.PAGE_DOWN), C3.add(E3.END), C3.add(E3.HOME), C3.add(E3.ARROW_LEFT), C3.add(E3.ARROW_UP), C3.add(E3.ARROW_RIGHT), C3.add(E3.ARROW_DOWN);

  // ../../dist/build/H2-6e54ac9e.js
  function H6(s4) {
    let t7, e6, h3, g3, E4;
    const x4 = s4[6].default, D4 = u2(x4, s4, s4[5], null);
    let H7 = [s4[3]], b5 = {};
    for (let s5 = 0; s5 < H7.length; s5 += 1)
      b5 = e3(b5, H7[s5]);
    return {c() {
      t7 = x2("h2"), D4 && D4.c(), I(t7, b5);
    }, m(l3, n4) {
      b2(l3, t7, n4), D4 && D4.m(t7, null), s4[7](t7), h3 = true, g3 || (E4 = [y2(e6 = q3.call(null, t7, s4[0])), y2(s4[2].call(null, t7))], g3 = true);
    }, p(s5, [l3]) {
      D4 && D4.p && 32 & l3 && f2(D4, x4, s5, s5[5], l3, null, null), I(t7, b5 = ht(H7, [8 & l3 && s5[3]])), e6 && s2(e6.update) && 1 & l3 && e6.update.call(null, s5[0]);
    }, i(s5) {
      h3 || (ct(D4, s5), h3 = true);
    }, o(s5) {
      lt(D4, s5), h3 = false;
    }, d(e7) {
      e7 && w2(t7), D4 && D4.d(e7), s4[7](null), g3 = false, r2(E4);
    }};
  }
  function b4(s4, t7, e6) {
    const l3 = ["use", "getElement"];
    let a4 = h2(t7, l3), {$$slots: u3 = {}, $$scope: c3} = t7, {use: o4 = []} = t7;
    const r5 = x3(R2());
    let i3 = null;
    return s4.$$set = (s5) => {
      t7 = e3(e3({}, t7), d2(s5)), e6(3, a4 = h2(t7, l3)), "use" in s5 && e6(0, o4 = s5.use), "$$scope" in s5 && e6(5, c3 = s5.$$scope);
    }, [o4, i3, r5, a4, function() {
      return i3;
    }, c3, u3, function(s5) {
      J[s5 ? "unshift" : "push"](() => {
        i3 = s5, e6(1, i3);
      });
    }];
  }
  var v4 = class extends _t {
    constructor(s4) {
      super(), wt(this, s4, b4, H6, i2, {use: 0, getElement: 4});
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };

  // ../../dist/build/focus-trap-5424b3cd.js
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
  var e5 = function() {
    function e6(e7, t7) {
      t7 === void 0 && (t7 = {}), this.root = e7, this.options = t7, this.elFocusedBeforeTrapFocus = null;
    }
    return e6.prototype.trapFocus = function() {
      var e7 = this.getFocusableElements(this.root);
      if (e7.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e7, this.options.initialFocusEl);
    }, e6.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll(".mdc-dom-focus-sentinel")).forEach(function(e7) {
        e7.parentElement.removeChild(e7);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, e6.prototype.wrapTabFocus = function(e7) {
      var t7 = this, o4 = this.createSentinel(), n4 = this.createSentinel();
      o4.addEventListener("focus", function() {
        var o5 = t7.getFocusableElements(e7);
        o5.length > 0 && o5[o5.length - 1].focus();
      }), n4.addEventListener("focus", function() {
        var o5 = t7.getFocusableElements(e7);
        o5.length > 0 && o5[0].focus();
      }), e7.insertBefore(o4, e7.children[0]), e7.appendChild(n4);
    }, e6.prototype.focusInitialElement = function(e7, t7) {
      var o4 = 0;
      t7 && (o4 = Math.max(e7.indexOf(t7), 0)), e7[o4].focus();
    }, e6.prototype.getFocusableElements = function(e7) {
      return [].slice.call(e7.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter(function(e8) {
        var t7 = e8.getAttribute("aria-disabled") === "true" || e8.getAttribute("disabled") != null || e8.getAttribute("hidden") != null || e8.getAttribute("aria-hidden") === "true", o4 = e8.tabIndex >= 0 && e8.getBoundingClientRect().width > 0 && !e8.classList.contains("mdc-dom-focus-sentinel") && !t7, n4 = false;
        if (o4) {
          var i3 = getComputedStyle(e8);
          n4 = i3.display === "none" || i3.visibility === "hidden";
        }
        return o4 && !n4;
      });
    }, e6.prototype.createSentinel = function() {
      var e7 = document.createElement("div");
      return e7.setAttribute("tabindex", "0"), e7.setAttribute("aria-hidden", "true"), e7.classList.add("mdc-dom-focus-sentinel"), e7;
    }, e6;
  }();
  var t6 = Object.freeze({__proto__: null, FocusTrap: e5});

  // ../../dist/build/main.js
  var ze2 = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => require_fallback_592c257e()).then((t7) => t7.default)}, {isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/:watch", id: "__watch", component: () => Promise.resolve().then(() => require_watch_f4be74c4()).then((t7) => t7.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => require_index_be528fdb()).then((t7) => t7.default)}, {isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/login", id: "_login", component: () => Promise.resolve().then(() => require_login_03936d02()).then((t7) => t7.default)}, {isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/logout", id: "_logout", component: () => Promise.resolve().then(() => require_logout_53f299cd()).then((t7) => t7.default)}, {isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/register", id: "_register", component: () => Promise.resolve().then(() => require_register_0b68bf5a()).then((t7) => t7.default)}, {isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/shows", id: "_shows", component: () => Promise.resolve().then(() => require_shows_4413671f()).then((t7) => t7.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => require_layout_aad02031()).then((t7) => t7.default)};
  var {tree: Ge2, routes: Qe2} = function(t7) {
    const e6 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n4 = {tree: t7, routes: []};
    for (let t8 of e6) {
      (We2[t8].sync || We2[t8])(n4);
    }
    return n4;
  }(ze2);
  function Ve2(e6) {
    let n4, o4;
    return n4 = new ve2({props: {routes: Qe2}}), {c() {
      yt(n4.$$.fragment);
    }, m(t7, e7) {
      $t(n4, t7, e7), o4 = true;
    }, p: t3, i(t7) {
      o4 || (ct(n4.$$.fragment, t7), o4 = true);
    }, o(t7) {
      lt(n4.$$.fragment, t7), o4 = false;
    }, d(t7) {
      bt(n4, t7);
    }};
  }
  !function(t7, e6 = {target: document.body}, n4 = "hmr", o4 = "app-loaded") {
    const r5 = document.getElementById(n4), s4 = document.createElement("div");
    function i3() {
      removeEventListener(o4, i3), r5 && r5.remove(), s4.style.visibility = null, s4.setAttribute("id", n4);
    }
    s4.style.visibility = "hidden", e6.target.appendChild(s4), r5 ? addEventListener(o4, i3) : i3(), new t7({...e6, target: s4});
  }(class extends _t {
    constructor(t7) {
      super(), wt(this, t7, null, Ve2, i2, {});
    }
  }, {target: document.body}, "routify-app");
})();
