"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkember_enterprise"] = self["webpackChunkember_enterprise"] || []).push([["dist_components_ent-button_js"],{

/***/ "../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime-BPCpkOf1.js":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime-BPCpkOf1.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ decorateFieldV2),\n/* harmony export */   b: () => (/* binding */ decorateMethodV1),\n/* harmony export */   c: () => (/* binding */ decorateMethodV2),\n/* harmony export */   d: () => (/* binding */ decorateFieldV1),\n/* harmony export */   e: () => (/* binding */ decorateClass),\n/* harmony export */   f: () => (/* binding */ decoratePOJO),\n/* harmony export */   i: () => (/* binding */ initializeDeferredDecorator),\n/* harmony export */   r: () => (/* binding */ runtime)\n/* harmony export */ });\nconst deferred = /* @__PURE__ */ new WeakMap();\nfunction deferDecorator(proto, prop, desc) {\n  let map = deferred.get(proto);\n  if (!map) {\n    map = /* @__PURE__ */ new Map();\n    deferred.set(proto, map);\n  }\n  map.set(prop, desc);\n}\nfunction findDeferredDecorator(target, prop) {\n  var _a;\n  let cursor = target.prototype;\n  while (cursor) {\n    let desc = (_a = deferred.get(cursor)) == null ? void 0 : _a.get(prop);\n    if (desc) {\n      return desc;\n    }\n    cursor = cursor.prototype;\n  }\n}\nfunction decorateFieldV1(target, prop, decorators, initializer) {\n  return decorateFieldV2(target.prototype, prop, decorators, initializer);\n}\nfunction decorateFieldV2(prototype, prop, decorators, initializer) {\n  let desc = {\n    configurable: true,\n    enumerable: true,\n    writable: true,\n    initializer: null\n  };\n  if (initializer) {\n    desc.initializer = initializer;\n  }\n  for (let decorator of decorators) {\n    desc = decorator(prototype, prop, desc) || desc;\n  }\n  if (desc.initializer === void 0) {\n    Object.defineProperty(prototype, prop, desc);\n  } else {\n    deferDecorator(prototype, prop, desc);\n  }\n}\nfunction decorateMethodV1({ prototype }, prop, decorators) {\n  return decorateMethodV2(prototype, prop, decorators);\n}\nfunction decorateMethodV2(prototype, prop, decorators) {\n  const origDesc = Object.getOwnPropertyDescriptor(prototype, prop);\n  let desc = { ...origDesc };\n  for (let decorator of decorators) {\n    desc = decorator(prototype, prop, desc) || desc;\n  }\n  if (desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(prototype) : void 0;\n    desc.initializer = void 0;\n  }\n  Object.defineProperty(prototype, prop, desc);\n}\nfunction initializeDeferredDecorator(target, prop) {\n  let desc = findDeferredDecorator(target.constructor, prop);\n  if (desc) {\n    Object.defineProperty(target, prop, {\n      enumerable: desc.enumerable,\n      configurable: desc.configurable,\n      writable: desc.writable,\n      value: desc.initializer ? desc.initializer.call(target) : void 0\n    });\n  }\n}\nfunction decorateClass(target, decorators) {\n  return decorators.reduce(\n    (accum, decorator) => decorator(accum) || accum,\n    target\n  );\n}\nfunction decoratePOJO(pojo, decorated) {\n  for (let [type, prop, decorators] of decorated) {\n    if (type === \"field\") {\n      decoratePojoField(pojo, prop, decorators);\n    } else {\n      decorateMethodV2(pojo, prop, decorators);\n    }\n  }\n  return pojo;\n}\nfunction decoratePojoField(pojo, prop, decorators) {\n  let desc = {\n    configurable: true,\n    enumerable: true,\n    writable: true,\n    initializer: () => {\n      var _a;\n      return (_a = Object.getOwnPropertyDescriptor(pojo, prop)) == null ? void 0 : _a.value;\n    }\n  };\n  for (let decorator of decorators) {\n    desc = decorator(pojo, prop, desc) || desc;\n  }\n  if (desc.initializer) {\n    desc.value = desc.initializer.call(pojo);\n    delete desc.initializer;\n  }\n  Object.defineProperty(pojo, prop, desc);\n}\nconst runtime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  c: decorateClass,\n  f: decorateFieldV1,\n  g: decorateFieldV2,\n  i: initializeDeferredDecorator,\n  m: decorateMethodV1,\n  n: decorateMethodV2,\n  p: decoratePOJO\n}, Symbol.toStringTag, { value: \"Module\" }));\n\n//# sourceMappingURL=runtime-BPCpkOf1.js.map\n\n\n//# sourceURL=webpack://ember-enterprise/../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime-BPCpkOf1.js?");

/***/ }),

/***/ "../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime.js":
/*!*****************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   c: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.e),\n/* harmony export */   f: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.d),\n/* harmony export */   g: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.a),\n/* harmony export */   i: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.i),\n/* harmony export */   m: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.b),\n/* harmony export */   n: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.c),\n/* harmony export */   p: () => (/* reexport safe */ _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__.f)\n/* harmony export */ });\n/* harmony import */ var _runtime_BPCpkOf1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime-BPCpkOf1.js */ \"../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime-BPCpkOf1.js\");\n\n\n//# sourceMappingURL=runtime.js.map\n\n\n//# sourceURL=webpack://ember-enterprise/../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime.js?");

/***/ }),

/***/ "../node_modules/.pnpm/ember-source@5.12.0_@glimmer+component@2.0.0_@glint+template@1.5.0_rsvp@4.8.5_webpack@5.98.0_webpack-cli@6.0.1_/node_modules/ember-source/dist/packages/@ember/template-compilation/index.js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/ember-source@5.12.0_@glimmer+component@2.0.0_@glint+template@1.5.0_rsvp@4.8.5_webpack@5.98.0_webpack-cli@6.0.1_/node_modules/ember-source/dist/packages/@ember/template-compilation/index.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __emberTemplateCompiler: () => (/* binding */ __emberTemplateCompiler),\n/* harmony export */   __registerTemplateCompiler: () => (/* binding */ __registerTemplateCompiler),\n/* harmony export */   compileTemplate: () => (/* binding */ compileTemplate),\n/* harmony export */   precompileTemplate: () => (/* binding */ precompileTemplate)\n/* harmony export */ });\n/* harmony import */ var _embroider_macros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @embroider/macros */ \"../node_modules/.pnpm/@embroider+macros@1.16.10_@glint+template@1.5.0/node_modules/@embroider/macros/src/index.js\");\n\n\n// it is emitted as part of Ember's build!), so we define it as having the type\n// which makes that work. However, in practice it is supplied by the build,\n// *for* the build, and will *not* be present at runtime, so the actual value\n// here is `undefined` in prod; in dev it is a function which throws a somewhat\n// nicer error. This is janky, but... here we are.\nlet __emberTemplateCompiler;\nconst compileTemplate = (...args) => {\n  if (!__emberTemplateCompiler) {\n    throw new Error('Attempted to call `compileTemplate` without first loading the runtime template compiler.');\n  }\n  return __emberTemplateCompiler.compile(...args);\n};\nlet precompileTemplate;\nif ((0,_embroider_macros__WEBPACK_IMPORTED_MODULE_0__.isDevelopingApp)()) {\n  precompileTemplate = () => {\n    throw new Error('Attempted to call `precompileTemplate` at runtime, but this API is meant to be used at compile time. You should use `compileTemplate` instead.');\n  };\n}\nfunction __registerTemplateCompiler(c) {\n  __emberTemplateCompiler = c;\n}\n\n\n\n\n//# sourceURL=webpack://ember-enterprise/../node_modules/.pnpm/ember-source@5.12.0_@glimmer+component@2.0.0_@glint+template@1.5.0_rsvp@4.8.5_webpack@5.98.0_webpack-cli@6.0.1_/node_modules/ember-source/dist/packages/@ember/template-compilation/index.js?");

/***/ }),

/***/ "./dist/components/ent-button.js":
/*!***************************************!*\
  !*** ./dist/components/ent-button.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EntButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glimmer/component */ \"webpack/sharing/consume/default/@glimmer/component/@glimmer/component\");\n/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_glimmer_component__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/object */ \"webpack/sharing/consume/default/@ember/object/@ember/object\");\n/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ember_template_compilation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/template-compilation */ \"../node_modules/.pnpm/ember-source@5.12.0_@glimmer+component@2.0.0_@glint+template@1.5.0_rsvp@4.8.5_webpack@5.98.0_webpack-cli@6.0.1_/node_modules/ember-source/dist/packages/@ember/template-compilation/index.js\");\n/* harmony import */ var decorator_transforms_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decorator-transforms/runtime */ \"../node_modules/.pnpm/decorator-transforms@2.3.0_@babel+core@7.26.0/node_modules/decorator-transforms/dist/runtime.js\");\n/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/component */ \"../node_modules/.pnpm/ember-source@5.12.0_@glimmer+component@2.0.0_@glint+template@1.5.0_rsvp@4.8.5_webpack@5.98.0_webpack-cli@6.0.1_/node_modules/ember-source/dist/packages/@ember/component/index.js\");\n\n\n\n\n\n\nvar TEMPLATE = (0,_ember_template_compilation__WEBPACK_IMPORTED_MODULE_2__.precompileTemplate)(\"<button class=\\\"ent-button\\\" {{on \\'click\\' this.onClick}}>\\n  {{yield}}\\n</button>\\n\");\n\nclass EntButtonComponent extends (_glimmer_component__WEBPACK_IMPORTED_MODULE_0___default()) {\n  onClick() {\n    console.log('Enterprise DS - Button clicked');\n    this.args.onClick?.();\n  }\n  static {\n    (0,decorator_transforms_runtime__WEBPACK_IMPORTED_MODULE_3__.n)(this.prototype, \"onClick\", [_ember_object__WEBPACK_IMPORTED_MODULE_1__.action]);\n  }\n}\n(0,_ember_component__WEBPACK_IMPORTED_MODULE_4__.setComponentTemplate)(TEMPLATE, EntButtonComponent);\n\n\n//# sourceMappingURL=ent-button.js.map\n\n\n//# sourceURL=webpack://ember-enterprise/./dist/components/ent-button.js?");

/***/ })

}]);