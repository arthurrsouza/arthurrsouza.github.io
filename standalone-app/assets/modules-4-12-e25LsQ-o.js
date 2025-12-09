import { a8 as registerDestructor$1, a9 as unregisterDestructor$1, aa as assertDestroyablesDestroyed, ab as associateDestroyableChild, ac as destroy, ad as enableDestroyableTracking, ae as isDestroyed, af as isDestroying, ag as getCachedValueFor, ah as guidFor, ai as createCache, aj as getValue, g as get, ak as set, al as deprecate, am as ASYNC_OBSERVERS, an as ComputedDescriptor, ao as ComputedProperty, ap as DEBUG_INJECTION_FUNCTIONS, aq as Libraries, ar as NAMESPACES, as as NAMESPACES_BY_ID, at as PROPERTY_DID_CHANGE, au as PROXY_CONTENT, av as SYNC_OBSERVERS, aw as TrackedDescriptor, ax as _getPath, ay as _getProp, az as _setProp, aA as activateObserver, aB as addArrayObserver, aC as addListener, aD as addNamespace, aE as addObserver, aF as alias, aG as arrayContentDidChange, aH as arrayContentWillChange, aI as autoComputed, aJ as beginPropertyChanges, aK as changeProperties, aL as computed, aM as defineDecorator, aN as defineProperty, aO as defineValue, aP as descriptorForDecorator, aQ as descriptorForProperty, aR as endPropertyChanges, aS as expandProperties, aT as findNamespace, aU as findNamespaces, aV as flushAsyncObservers, aW as getProperties, aX as hasListeners, aY as hasUnknownProperty, aZ as inject, a_ as isClassicDecorator, a$ as isComputed, b0 as isConst, b1 as isElementDescriptor, b2 as isSearchDisabled, b3 as LIBRARIES, b4 as makeComputedDecorator, b5 as markObjectAsDirty, b6 as nativeDescDecorator, b7 as notifyPropertyChange, b8 as objectAt, b9 as on, ba as processAllNamespaces, bb as processNamespace, bc as removeArrayObserver, bd as removeListener, be as removeNamespace, bf as removeObserver, bg as replace, bh as replaceInNativeArray, bi as revalidateObservers, bj as sendEvent, bk as setClassicDecorator, bl as setSearchDisabled, bm as setProperties, bn as setUnprocessedMixins, bo as tagForObject, bp as tagForProperty, bq as tracked, br as trySet, I as Input, T as Textarea, J as componentCapabilities, x as Component, bs as getComponentTemplate, Z as setComponentManager, bt as setComponentTemplate, bu as ActionHandler, bv as Comparable, C as ContainerProxyMixin, bw as MutableEnumerable, R as RSVP$1, n as RegistryProxyMixin, bx as TargetActionSupport, by as ProxyMixin, bz as contentFor, bA as onerrorDefault, bB as ActionManager, bC as ActionSupport, bD as ComponentLookup, bE as CoreView, bF as EventDispatcher, bG as MUTABLE_CELL, bH as states, bI as addChildView, bJ as clearElementView, bK as clearViewElement, bL as constructStyleDeprecationMessage, bM as getChildViews, bN as getElementView, bO as getRootViews, bP as getViewBoundingClientRect, bQ as getViewBounds, bR as getViewClientRects, bS as getViewElement, bT as getViewId, bU as isSimpleClick, bV as setElementView, bW as setViewElement, bX as MutableArray, bY as ENV, bZ as context, b_ as getENV, b$ as getLookup, c0 as global$1, c1 as setLookup, c2 as Meta, c3 as UNDEFINED, c4 as counters, c5 as meta, c6 as peekMeta, c7 as setMeta, c8 as Cache, c9 as GUID_KEY, ca as ROOT, cb as canInvoke, cc as checkHasSuper, cd as makeDictionary, ce as enumerableSymbol, cf as generateGuid, cg as getDebugName$1, ch as getName, ci as intern, cj as isInternalSymbol, ck as isObject, cl as isProxy, cm as lookupDescriptor, cn as observerListenerMetaFor, co as setListeners, cp as setName, cq as setObservers, cr as setProxy, cs as setWithMandatorySetter, ct as setupMandatorySetter, cu as symbol, cv as teardownMandatorySetter, cw as toString, cx as uuid, cy as wrap, cz as EventTarget, cA as Promise$1, cB as all, cC as allSettled, cD as asap, cE as async, cF as cast, cG as configure, cH as RSVP, cI as defer, cJ as denodeify, cK as filter, cL as hash, cM as hashSettled, cN as map, cO as off, cP as on$1, cQ as race, cR as reject, cS as resolve, cT as rethrow } from './app-BOB2PFg0.js';
export { cU as Application, cV as ApplicationNamespace, cW as Array, cX as ArrayProxy, cY as Controller, cZ as Debug, c_ as EmberObject, c$ as EnumerableMutable, da as GlimmerComponent, db as GlimmerManager, dc as GlimmerReference, dd as GlimmerRuntime, de as GlimmerUtil, df as GlimmerValidator, d0 as Instrumentation, c_ as Object, d1 as ObjectCore, d2 as ObjectEvented, d3 as ObjectObservable, d4 as ObjectPromiseProxyMixin, d5 as ObjectProxy, d8 as Owner, d6 as Runloop, d7 as Service, d9 as VERSION } from './app-BOB2PFg0.js';

/**
  Ember manages the lifecycles and lifetimes of many built in constructs, such
  as components, and does so in a hierarchical way - when a parent component is
  destroyed, all of its children are destroyed as well.

  This destroyables API exposes the basic building blocks for destruction:

  * registering a function to be ran when an object is destroyed
  * checking if an object is in a destroying state
  * associate an object as a child of another so that the child object will be destroyed
    when the associated parent object is destroyed.

  @module @ember/destroyable
  @public
*/

/**
  This function is used to associate a destroyable object with a parent. When the parent
  is destroyed, all registered children will also be destroyed.

  ```js
  class CustomSelect extends Component {
    constructor(...args) {
      super(...args);

      // obj is now a child of the component. When the component is destroyed,
      // obj will also be destroyed, and have all of its destructors triggered.
      this.obj = associateDestroyableChild(this, {});
    }
  }
  ```

  Returns the associated child for convenience.

  @method associateDestroyableChild
  @for @ember/destroyable
  @param {Object|Function} parent the destroyable to entangle the child destroyables lifetime with
  @param {Object|Function} child the destroyable to be entangled with the parents lifetime
  @returns {Object|Function} the child argument
  @static
  @public
*/

/**
 Receives a destroyable, and returns true if the destroyable has begun destroying. Otherwise returns
 false.

  ```js
  let obj = {};
  isDestroying(obj); // false
  destroy(obj);
  isDestroying(obj); // true
  // ...sometime later, after scheduled destruction
  isDestroyed(obj); // true
  isDestroying(obj); // true
  ```

  @method isDestroying
  @for @ember/destroyable
  @param {Object|Function} destroyable the object to check
  @returns {Boolean}
  @static
  @public
*/

/**
  Receives a destroyable, and returns true if the destroyable has finished destroying. Otherwise
  returns false.

  ```js
  let obj = {};

  isDestroyed(obj); // false
  destroy(obj);

  // ...sometime later, after scheduled destruction

  isDestroyed(obj); // true
  ```

  @method isDestroyed
  @for @ember/destroyable
  @param {Object|Function} destroyable the object to check
  @returns {Boolean}
  @static
  @public
*/

/**
  Initiates the destruction of a destroyable object. It runs all associated destructors, and then
  destroys all children recursively.

  ```js
  let obj = {};

  registerDestructor(obj, () => console.log('destroyed!'));

  destroy(obj); // this will schedule the destructor to be called

  // ...some time later, during scheduled destruction

  // destroyed!
  ```

  Destruction via `destroy()` follows these steps:

  1, Mark the destroyable such that `isDestroying(destroyable)` returns `true`
  2, Call `destroy()` on each of the destroyable's associated children
  3, Schedule calling the destroyable's destructors
  4, Schedule setting destroyable such that `isDestroyed(destroyable)` returns `true`

  This results in the entire tree of destroyables being first marked as destroying,
  then having all of their destructors called, and finally all being marked as isDestroyed.
  There won't be any in between states where some items are marked as `isDestroying` while
  destroying, while others are not.

  @method destroy
  @for @ember/destroyable
  @param {Object|Function} destroyable the object to destroy
  @static
  @public
*/

/**
  This function asserts that all objects which have associated destructors or associated children
  have been destroyed at the time it is called. It is meant to be a low level hook that testing
  frameworks can use to hook into and validate that all destroyables have in fact been destroyed.

  This function requires that `enableDestroyableTracking` was called previously, and is only
  available in non-production builds.

  @method assertDestroyablesDestroyed
  @for @ember/destroyable
  @static
  @public
*/

/**
  This function instructs the destroyable system to keep track of all destroyables (their
  children, destructors, etc). This enables a future usage of `assertDestroyablesDestroyed`
  to be used to ensure that all destroyable tasks (registered destructors and associated children)
  have completed when `assertDestroyablesDestroyed` is called.

  @method enableDestroyableTracking
  @for @ember/destroyable
  @static
  @public
*/

/**
  Receives a destroyable object and a destructor function, and associates the
  function with it. When the destroyable is destroyed with destroy, or when its
  parent is destroyed, the destructor function will be called.

  ```js
  import Component from '@glimmer/component';
  import { registerDestructor } from '@ember/destroyable';

  class Modal extends Component {
    @service resize;

    constructor(...args) {
      super(...args);

      this.resize.register(this, this.layout);

      registerDestructor(this, () => this.resize.unregister(this));
    }
  }
  ```

  Multiple destructors can be associated with a given destroyable, and they can be
  associated over time, allowing libraries to dynamically add destructors as needed.
  `registerDestructor` also returns the associated destructor function, for convenience.

  The destructor function is passed a single argument, which is the destroyable itself.
  This allows the function to be reused multiple times for many destroyables, rather
  than creating a closure function per destroyable.

  ```js
  import Component from '@glimmer/component';
  import { registerDestructor } from '@ember/destroyable';

  function unregisterResize(instance) {
    instance.resize.unregister(instance);
  }

  class Modal extends Component {
    @service resize;

    constructor(...args) {
      super(...args);

      this.resize.register(this, this.layout);

      registerDestructor(this, unregisterResize);
    }
  }
  ```

  @method registerDestructor
  @for @ember/destroyable
  @param {Object|Function} destroyable the destroyable to register the destructor function with
  @param {Function} destructor the destructor to run when the destroyable object is destroyed
  @static
  @public
*/
function registerDestructor(destroyable, destructor) {
  return registerDestructor$1(destroyable, destructor);
}

/**
  Receives a destroyable and a destructor function, and de-associates the destructor
  from the destroyable.

  ```js
  import Component from '@glimmer/component';
  import { registerDestructor, unregisterDestructor } from '@ember/destroyable';

  class Modal extends Component {
    @service modals;

    constructor(...args) {
      super(...args);

      this.modals.add(this);

      this.modalDestructor = registerDestructor(this, () => this.modals.remove(this));
    }

    @action pinModal() {
      unregisterDestructor(this, this.modalDestructor);
    }
  }
  ```

  @method unregisterDestructor
  @for @ember/destroyable
  @param {Object|Function} destroyable the destroyable to unregister the destructor function from
  @param {Function} destructor the destructor to remove from the destroyable
  @static
  @public
*/
function unregisterDestructor(destroyable, destructor) {
  return unregisterDestructor$1(destroyable, destructor);
}

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get assertDestroyablesDestroyed () { return assertDestroyablesDestroyed; },
  associateDestroyableChild,
  destroy,
  get enableDestroyableTracking () { return enableDestroyableTracking; },
  isDestroyed,
  isDestroying,
  registerDestructor,
  unregisterDestructor
}, Symbol.toStringTag, { value: 'Module' }));

const internals = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  cacheFor: getCachedValueFor,
  guidFor
}, Symbol.toStringTag, { value: 'Module' }));

// NOTE: copied from: https://github.com/glimmerjs/glimmer.js/pull/358
// Both glimmerjs/glimmer.js and emberjs/ember.js have the exact same implementation
// of @cached, so any changes made to one should also be made to the other

const cached = (...args) => {
  const [target, key, descriptor] = args;

  // Error on `@cached()`, `@cached(...args)`, and `@cached propName = value;`
  if (target === undefined) throwCachedExtraneousParens();
  if ((typeof target !== 'object' || typeof key !== 'string' || typeof descriptor !== 'object' || args.length !== 3)) {
    throwCachedInvalidArgsError(args);
  }
  if ((!('get' in descriptor) || typeof descriptor.get !== 'function')) {
    throwCachedGetterOnlyError(key);
  }
  const caches = new WeakMap();
  const getter = descriptor.get;
  descriptor.get = function () {
    if (!caches.has(this)) {
      caches.set(this, createCache(getter.bind(this)));
    }
    return getValue(caches.get(this));
  };
};
function throwCachedExtraneousParens() {
  throw new Error('You attempted to use @cached(), which is not necessary nor supported. Remove the parentheses and you will be good to go!');
}
function throwCachedGetterOnlyError(key) {
  throw new Error(`The @cached decorator must be applied to getters. '${key}' is not a getter.`);
}
function throwCachedInvalidArgsError(args = []) {
  throw new Error(`You attempted to use @cached on with ${args.length > 1 ? 'arguments' : 'an argument'} ( @cached(${args.map(d => `'${d}'`).join(', ')}), which is not supported. Dependencies are automatically tracked, so you can just use ${'`@cached`'}`);
}

/**
@module ember
*/

function deprecateProperty(object, deprecatedKey, newKey, options) {
  function _deprecate() {
    deprecate(`Usage of \`${deprecatedKey}\` is deprecated, use \`${newKey}\` instead.`, false, options);
  }
  Object.defineProperty(object, deprecatedKey, {
    configurable: true,
    enumerable: false,
    set(value) {
      _deprecate();
      set(this, newKey, value);
    },
    get() {
      _deprecate();
      return get(this, newKey);
    }
  });
}
const EACH_PROXIES = new WeakMap();
function eachProxyArrayWillChange(array, idx, removedCnt, addedCnt) {
  let eachProxy = EACH_PROXIES.get(array);
  if (eachProxy !== undefined) {
    eachProxy.arrayWillChange(array, idx, removedCnt, addedCnt);
  }
}
function eachProxyArrayDidChange(array, idx, removedCnt, addedCnt) {
  let eachProxy = EACH_PROXIES.get(array);
  if (eachProxy !== undefined) {
    eachProxy.arrayDidChange(array, idx, removedCnt, addedCnt);
  }
}

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ASYNC_OBSERVERS,
  ComputedDescriptor,
  ComputedProperty,
  get DEBUG_INJECTION_FUNCTIONS () { return DEBUG_INJECTION_FUNCTIONS; },
  Libraries,
  NAMESPACES,
  NAMESPACES_BY_ID,
  PROPERTY_DID_CHANGE,
  PROXY_CONTENT,
  SYNC_OBSERVERS,
  TrackedDescriptor,
  _getPath,
  _getProp,
  _setProp,
  activateObserver,
  addArrayObserver,
  addListener,
  addNamespace,
  addObserver,
  alias,
  arrayContentDidChange,
  arrayContentWillChange,
  autoComputed,
  beginPropertyChanges,
  cached,
  changeProperties,
  computed,
  createCache,
  defineDecorator,
  defineProperty,
  defineValue,
  deprecateProperty,
  descriptorForDecorator,
  descriptorForProperty,
  eachProxyArrayDidChange,
  eachProxyArrayWillChange,
  endPropertyChanges,
  expandProperties,
  findNamespace,
  findNamespaces,
  flushAsyncObservers,
  get,
  getCachedValueFor,
  getProperties,
  getValue,
  hasListeners,
  hasUnknownProperty,
  inject,
  isClassicDecorator,
  isComputed,
  isConst,
  isElementDescriptor,
  isNamespaceSearchDisabled: isSearchDisabled,
  libraries: LIBRARIES,
  makeComputedDecorator,
  markObjectAsDirty,
  nativeDescDecorator,
  notifyPropertyChange,
  objectAt,
  on,
  processAllNamespaces,
  processNamespace,
  removeArrayObserver,
  removeListener,
  removeNamespace,
  removeObserver,
  replace,
  replaceInNativeArray,
  revalidateObservers,
  sendEvent,
  set,
  setClassicDecorator,
  setNamespaceSearchDisabled: setSearchDisabled,
  setProperties,
  setUnprocessedMixins,
  tagForObject,
  tagForProperty,
  tracked,
  trySet
}, Symbol.toStringTag, { value: 'Module' }));

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Input,
  Textarea,
  capabilities: componentCapabilities,
  default: Component,
  getComponentTemplate,
  setComponentManager,
  setComponentTemplate
}, Symbol.toStringTag, { value: 'Module' }));

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ActionHandler,
  Comparable,
  ContainerProxyMixin,
  MutableEnumerable,
  RSVP: RSVP$1,
  RegistryProxyMixin,
  TargetActionSupport,
  _ProxyMixin: ProxyMixin,
  _contentFor: contentFor,
  onerrorDefault
}, Symbol.toStringTag, { value: 'Module' }));

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ActionManager,
  ActionSupport,
  ComponentLookup,
  CoreView,
  EventDispatcher,
  MUTABLE_CELL,
  ViewStates: states,
  addChildView,
  clearElementView,
  clearViewElement,
  constructStyleDeprecationMessage,
  getChildViews,
  getElementView,
  getRootViews,
  getViewBoundingClientRect,
  getViewBounds,
  getViewClientRects,
  getViewElement,
  getViewId,
  isSimpleClick,
  setElementView,
  setViewElement
}, Symbol.toStringTag, { value: 'Module' }));

const mutable = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MutableArray
}, Symbol.toStringTag, { value: 'Module' }));

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ENV,
  context,
  getENV,
  getLookup,
  global: global$1,
  setLookup
}, Symbol.toStringTag, { value: 'Module' }));

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Meta,
  UNDEFINED,
  get counters () { return counters; },
  meta,
  peekMeta,
  setMeta
}, Symbol.toStringTag, { value: 'Module' }));

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Cache,
  GUID_KEY,
  ROOT,
  canInvoke,
  checkHasSuper,
  dictionary: makeDictionary,
  enumerableSymbol,
  generateGuid,
  getDebugName: getDebugName$1,
  getName,
  guidFor,
  intern,
  isInternalSymbol,
  isObject,
  isProxy,
  lookupDescriptor,
  observerListenerMetaFor,
  setListeners,
  setName,
  setObservers,
  setProxy,
  get setWithMandatorySetter () { return setWithMandatorySetter; },
  get setupMandatorySetter () { return setupMandatorySetter; },
  symbol,
  get teardownMandatorySetter () { return teardownMandatorySetter; },
  toString,
  uuid,
  wrap
}, Symbol.toStringTag, { value: 'Module' }));

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  EventTarget,
  Promise: Promise$1,
  all,
  allSettled,
  asap,
  async,
  cast,
  configure,
  default: RSVP,
  defer,
  denodeify,
  filter,
  hash,
  hashSettled,
  map,
  off,
  on: on$1,
  race,
  reject,
  resolve,
  rethrow
}, Symbol.toStringTag, { value: 'Module' }));

export { mutable as ArrayMutable, index$6 as Component, index$8 as EmberDestroyable, index$3 as InternalsEnvironment, index$2 as InternalsMeta, index$7 as InternalsMetal, index$5 as InternalsRuntime, index$1 as InternalsUtils, index$4 as InternalsViews, internals as ObjectInternals, index as RSVP };
//# sourceMappingURL=modules-4-12-e25LsQ-o.js.map
