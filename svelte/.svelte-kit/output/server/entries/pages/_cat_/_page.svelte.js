import { c as create_ssr_component, b as createEventDispatcher, o as onDestroy, d as spread, f as escape_object, h as add_attribute, v as validate_component, i as each, e as escape, a as subscribe, j as set_store_value } from "../../../chunks/ssr.js";
import { i as imgUrl, a as titleString } from "../../../chunks/stores.js";
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
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
var isUndefined = function(value) {
  return typeof value === "undefined";
};
var ComponentEvent = /* @__PURE__ */ function() {
  function ComponentEvent2(eventType, props) {
    var e_1, _a;
    this._canceled = false;
    if (props) {
      try {
        for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          this[key] = props[key];
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    this.eventType = eventType;
  }
  var __proto = ComponentEvent2.prototype;
  __proto.stop = function() {
    this._canceled = true;
  };
  __proto.isCanceled = function() {
    return this._canceled;
  };
  return ComponentEvent2;
}();
var Component = /* @__PURE__ */ function() {
  function Component2() {
    this._eventHandler = {};
  }
  var __proto = Component2.prototype;
  __proto.trigger = function(event) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }
    var eventName = event instanceof ComponentEvent ? event.eventType : event;
    var handlers = __spread(this._eventHandler[eventName] || []);
    if (handlers.length <= 0) {
      return this;
    }
    if (event instanceof ComponentEvent) {
      event.currentTarget = this;
      handlers.forEach(function(handler) {
        handler(event);
      });
    } else {
      handlers.forEach(function(handler) {
        handler.apply(void 0, __spread(params));
      });
    }
    return this;
  };
  __proto.once = function(eventName, handlerToAttach) {
    var _this = this;
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var key in eventHash) {
        this.once(key, eventHash[key]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var listener_1 = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        handlerToAttach.apply(void 0, __spread(args));
        _this.off(eventName, listener_1);
      };
      this.on(eventName, listener_1);
    }
    return this;
  };
  __proto.hasOn = function(eventName) {
    return !!this._eventHandler[eventName];
  };
  __proto.on = function(eventName, handlerToAttach) {
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var name in eventHash) {
        this.on(name, eventHash[name]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var handlerList = this._eventHandler[eventName];
      if (isUndefined(handlerList)) {
        this._eventHandler[eventName] = [];
        handlerList = this._eventHandler[eventName];
      }
      handlerList.push(handlerToAttach);
    }
    return this;
  };
  __proto.off = function(eventName, handlerToDetach) {
    var e_1, _a;
    if (isUndefined(eventName)) {
      this._eventHandler = {};
      return this;
    }
    if (isUndefined(handlerToDetach)) {
      if (typeof eventName === "string") {
        delete this._eventHandler[eventName];
        return this;
      } else {
        var eventHash = eventName;
        for (var name in eventHash) {
          this.off(name, eventHash[name]);
        }
        return this;
      }
    }
    var handlerList = this._eventHandler[eventName];
    if (handlerList) {
      var idx = 0;
      try {
        for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
          var handlerFunction = handlerList_1_1.value;
          if (handlerFunction === handlerToDetach) {
            handlerList.splice(idx, 1);
            if (handlerList.length <= 0) {
              delete this._eventHandler[eventName];
            }
            break;
          }
          idx++;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return))
            _a.call(handlerList_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    return this;
  };
  Component2.VERSION = "3.0.4";
  return Component2;
}();
var ComponentEvent$1 = ComponentEvent;
var PolyMap = /* @__PURE__ */ function() {
  function PolyMap2() {
    this.keys = [];
    this.values = [];
  }
  var __proto = PolyMap2.prototype;
  __proto.get = function(key) {
    return this.values[this.keys.indexOf(key)];
  };
  __proto.set = function(key, value) {
    var keys = this.keys;
    var values = this.values;
    var prevIndex = keys.indexOf(key);
    var index = prevIndex === -1 ? keys.length : prevIndex;
    keys[index] = key;
    values[index] = value;
  };
  return PolyMap2;
}();
var HashMap = /* @__PURE__ */ function() {
  function HashMap2() {
    this.object = {};
  }
  var __proto = HashMap2.prototype;
  __proto.get = function(key) {
    return this.object[key];
  };
  __proto.set = function(key, value) {
    this.object[key] = value;
  };
  return HashMap2;
}();
var SUPPORT_MAP = typeof Map === "function";
var Link = /* @__PURE__ */ function() {
  function Link2() {
  }
  var __proto = Link2.prototype;
  __proto.connect = function(prevLink, nextLink) {
    this.prev = prevLink;
    this.next = nextLink;
    prevLink && (prevLink.next = this);
    nextLink && (nextLink.prev = this);
  };
  __proto.disconnect = function() {
    var prevLink = this.prev;
    var nextLink = this.next;
    prevLink && (prevLink.next = nextLink);
    nextLink && (nextLink.prev = prevLink);
  };
  __proto.getIndex = function() {
    var link = this;
    var index = -1;
    while (link) {
      link = link.prev;
      ++index;
    }
    return index;
  };
  return Link2;
}();
function orderChanged(changed, fixed) {
  var fromLinks = [];
  var toLinks = [];
  changed.forEach(function(_a) {
    var from = _a[0], to = _a[1];
    var link = new Link();
    fromLinks[from] = link;
    toLinks[to] = link;
  });
  fromLinks.forEach(function(link, i) {
    link.connect(fromLinks[i - 1]);
  });
  return changed.filter(function(_, i) {
    return !fixed[i];
  }).map(function(_a, i) {
    var from = _a[0], to = _a[1];
    if (from === to) {
      return [0, 0];
    }
    var fromLink = fromLinks[from];
    var toLink = toLinks[to - 1];
    var fromIndex = fromLink.getIndex();
    fromLink.disconnect();
    if (!toLink) {
      fromLink.connect(void 0, fromLinks[0]);
    } else {
      fromLink.connect(toLink, toLink.next);
    }
    var toIndex = fromLink.getIndex();
    return [fromIndex, toIndex];
  });
}
var Result = /* @__PURE__ */ function() {
  function Result2(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed) {
    this.prevList = prevList;
    this.list = list;
    this.added = added;
    this.removed = removed;
    this.changed = changed;
    this.maintained = maintained;
    this.changedBeforeAdded = changedBeforeAdded;
    this.fixed = fixed;
  }
  var __proto = Result2.prototype;
  Object.defineProperty(__proto, "ordered", {
    get: function() {
      if (!this.cacheOrdered) {
        this.caculateOrdered();
      }
      return this.cacheOrdered;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "pureChanged", {
    get: function() {
      if (!this.cachePureChanged) {
        this.caculateOrdered();
      }
      return this.cachePureChanged;
    },
    enumerable: true,
    configurable: true
  });
  __proto.caculateOrdered = function() {
    var ordered = orderChanged(this.changedBeforeAdded, this.fixed);
    var changed = this.changed;
    var pureChanged = [];
    this.cacheOrdered = ordered.filter(function(_a, i) {
      var from = _a[0], to = _a[1];
      var _b = changed[i], fromBefore = _b[0], toBefore = _b[1];
      if (from !== to) {
        pureChanged.push([fromBefore, toBefore]);
        return true;
      }
    });
    this.cachePureChanged = pureChanged;
  };
  return Result2;
}();
function diff$1(prevList, list, findKeyCallback2) {
  var mapClass = SUPPORT_MAP ? Map : findKeyCallback2 ? HashMap : PolyMap;
  var callback = findKeyCallback2 || function(e) {
    return e;
  };
  var added = [];
  var removed = [];
  var maintained = [];
  var prevKeys = prevList.map(callback);
  var keys = list.map(callback);
  var prevKeyMap = new mapClass();
  var keyMap = new mapClass();
  var changedBeforeAdded = [];
  var fixed = [];
  var removedMap = {};
  var changed = [];
  var addedCount = 0;
  var removedCount = 0;
  prevKeys.forEach(function(key, prevListIndex) {
    prevKeyMap.set(key, prevListIndex);
  });
  keys.forEach(function(key, listIndex) {
    keyMap.set(key, listIndex);
  });
  prevKeys.forEach(function(key, prevListIndex) {
    var listIndex = keyMap.get(key);
    if (typeof listIndex === "undefined") {
      ++removedCount;
      removed.push(prevListIndex);
    } else {
      removedMap[listIndex] = removedCount;
    }
  });
  keys.forEach(function(key, listIndex) {
    var prevListIndex = prevKeyMap.get(key);
    if (typeof prevListIndex === "undefined") {
      added.push(listIndex);
      ++addedCount;
    } else {
      maintained.push([prevListIndex, listIndex]);
      removedCount = removedMap[listIndex] || 0;
      changedBeforeAdded.push([prevListIndex - removedCount, listIndex - addedCount]);
      fixed.push(listIndex === prevListIndex);
      if (prevListIndex !== listIndex) {
        changed.push([prevListIndex, listIndex]);
      }
    }
  });
  removed.reverse();
  return new Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed);
}
var findKeyCallback = typeof Map === "function" ? void 0 : function() {
  var childrenCount = 0;
  return function(el) {
    return el.__DIFF_KEY__ || (el.__DIFF_KEY__ = ++childrenCount);
  };
}();
function diff(prevList, list) {
  return diff$1(prevList, list, findKeyCallback);
}
var extendStatics$1 = function(d, b) {
  extendStatics$1 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics$1(d, b);
};
function __extends$1(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics$1(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
var isWindow = typeof window !== "undefined";
var ua = isWindow ? window.navigator.userAgent : "";
var SUPPORT_COMPUTEDSTYLE = isWindow ? !!("getComputedStyle" in window) : false;
var IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
var SUPPORT_ADDEVENTLISTENER = isWindow ? !!("addEventListener" in document) : false;
var WIDTH = "width";
var HEIGHT = "height";
function getAttribute(el, name) {
  return el.getAttribute(name) || "";
}
function toArray(arr) {
  return [].slice.call(arr);
}
function hasSizeAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "width");
}
function hasLoadingAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return "loading" in target && target.getAttribute("loading") === "lazy" || !!target.getAttribute(prefix + "lazy");
}
function hasSkipAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "skip");
}
function addEvent(element, type, handler) {
  if (SUPPORT_ADDEVENTLISTENER) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}
function innerWidth(el) {
  return getSize(el, "Width");
}
function innerHeight(el) {
  return getSize(el, "Height");
}
function getStyles(el) {
  return (SUPPORT_COMPUTEDSTYLE ? window.getComputedStyle(el) : el.currentStyle) || {};
}
function getSize(el, name) {
  var size = el["client" + name] || el["offset" + name];
  return parseFloat(size || getStyles(el)[name.toLowerCase()]) || 0;
}
function getContentElements(element, tags, prefix) {
  var skipElements = toArray(element.querySelectorAll(__spreadArrays(["[" + prefix + "skip] [" + prefix + "width]"], tags.map(function(tag) {
    return ["[" + prefix + "skip] " + tag, tag + "[" + prefix + "skip]", "[" + prefix + "width] " + tag].join(", ");
  })).join(", ")));
  return toArray(element.querySelectorAll("[" + prefix + "width], " + tags.join(", "))).filter(function(el) {
    return skipElements.indexOf(el) === -1;
  });
}
var elements = [];
function addAutoSizer(element, prefix) {
  !elements.length && addEvent(window, "resize", resizeAllAutoSizers);
  element.__PREFIX__ = prefix;
  elements.push(element);
  resize(element);
}
function removeAutoSizer(element, prefix) {
  var index = elements.indexOf(element);
  if (index < 0) {
    return;
  }
  var fixed = getAttribute(element, prefix + "fixed");
  delete element.__PREFIX__;
  element.style[fixed === HEIGHT ? WIDTH : HEIGHT] = "";
  elements.splice(index, 1);
  !elements.length && removeEvent(window, "resize", resizeAllAutoSizers);
}
function resize(element, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  var elementPrefix = element.__PREFIX__ || prefix;
  var dataWidth = parseInt(getAttribute(element, "" + elementPrefix + WIDTH), 10) || 0;
  var dataHeight = parseInt(getAttribute(element, "" + elementPrefix + HEIGHT), 10) || 0;
  var fixed = getAttribute(element, elementPrefix + "fixed");
  if (fixed === HEIGHT) {
    var size = innerHeight(element) || dataHeight;
    element.style[WIDTH] = dataWidth / dataHeight * size + "px";
  } else {
    var size = innerWidth(element) || dataWidth;
    element.style[HEIGHT] = dataHeight / dataWidth * size + "px";
  }
}
function resizeAllAutoSizers() {
  elements.forEach(function(element) {
    resize(element);
  });
}
var Loader = /* @__PURE__ */ function(_super) {
  __extends$1(Loader2, _super);
  function Loader2(element, options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.isReady = false;
    _this.isPreReady = false;
    _this.hasDataSize = false;
    _this.hasLoading = false;
    _this.isSkip = false;
    _this.onCheck = function(e) {
      _this.clear();
      if (e && e.type === "error") {
        _this.onError(_this.element);
      }
      if (_this.hasLoading && _this.checkElement()) {
        return;
      }
      var withPreReady = !_this.hasDataSize && !_this.hasLoading;
      _this.onReady(withPreReady);
    };
    _this.options = __assign$1({
      prefix: "data-"
    }, options);
    _this.element = element;
    var prefix = _this.options.prefix;
    _this.hasDataSize = hasSizeAttribute(element, prefix);
    _this.isSkip = hasSkipAttribute(element, prefix);
    _this.hasLoading = hasLoadingAttribute(element, prefix);
    return _this;
  }
  var __proto = Loader2.prototype;
  __proto.check = function() {
    if (this.isSkip || !this.checkElement()) {
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
    }
    if (this.hasDataSize || this.hasLoading) {
      this.onAlreadyPreReady();
    }
    return true;
  };
  __proto.addEvents = function() {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function(name) {
      addEvent(element, name, _this.onCheck);
    });
  };
  __proto.clear = function() {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function(name) {
      removeEvent(element, name, _this.onCheck);
    });
    this.removeAutoSizer();
  };
  __proto.destroy = function() {
    this.clear();
    this.off();
  };
  __proto.removeAutoSizer = function() {
    if (this.hasDataSize) {
      var prefix = this.options.prefix;
      removeAutoSizer(this.element, prefix);
    }
  };
  __proto.onError = function(target) {
    this.trigger("error", {
      element: this.element,
      target
    });
  };
  __proto.onPreReady = function() {
    if (this.isPreReady) {
      return;
    }
    this.isPreReady = true;
    this.trigger("preReady", {
      element: this.element,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onReady = function(withPreReady) {
    if (this.isReady) {
      return;
    }
    withPreReady = !this.isPreReady && withPreReady;
    if (withPreReady) {
      this.isPreReady = true;
    }
    this.removeAutoSizer();
    this.isReady = true;
    this.trigger("ready", {
      element: this.element,
      withPreReady,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onAlreadyError = function(target) {
    var _this = this;
    setTimeout(function() {
      _this.onError(target);
    });
  };
  __proto.onAlreadyPreReady = function() {
    var _this = this;
    setTimeout(function() {
      _this.onPreReady();
    });
  };
  __proto.onAlreadyReady = function(withPreReady) {
    var _this = this;
    setTimeout(function() {
      _this.onReady(withPreReady);
    });
  };
  Loader2.EVENTS = [];
  return Loader2;
}(Component);
var ElementLoader = /* @__PURE__ */ function(_super) {
  __extends$1(ElementLoader2, _super);
  function ElementLoader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ElementLoader2.prototype;
  __proto.setHasLoading = function(hasLoading) {
    this.hasLoading = hasLoading;
  };
  __proto.check = function() {
    if (this.isSkip) {
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
      this.onAlreadyPreReady();
    } else {
      this.trigger("requestChildren");
    }
    return true;
  };
  __proto.checkElement = function() {
    return true;
  };
  __proto.destroy = function() {
    this.clear();
    this.trigger("requestDestroy");
    this.off();
  };
  __proto.onAlreadyPreReady = function() {
    _super.prototype.onAlreadyPreReady.call(this);
    this.trigger("reqeustReadyChildren");
  };
  ElementLoader2.EVENTS = [];
  return ElementLoader2;
}(Loader);
var ImReadyManager = /* @__PURE__ */ function(_super) {
  __extends$1(ImReadyManager2, _super);
  function ImReadyManager2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.readyCount = 0;
    _this.preReadyCount = 0;
    _this.totalCount = 0;
    _this.totalErrorCount = 0;
    _this.isPreReadyOver = true;
    _this.elementInfos = [];
    _this.options = __assign$1({
      loaders: {},
      prefix: "data-"
    }, options);
    return _this;
  }
  var __proto = ImReadyManager2.prototype;
  __proto.check = function(elements2) {
    var _this = this;
    var prefix = this.options.prefix;
    this.clear();
    this.elementInfos = toArray(elements2).map(function(element, index) {
      var loader = _this.getLoader(element, {
        prefix
      });
      loader.check();
      loader.on("error", function(e) {
        _this.onError(index, e.target);
      }).on("preReady", function(e) {
        var info = _this.elementInfos[index];
        info.hasLoading = e.hasLoading;
        info.isSkip = e.isSkip;
        var isPreReady = _this.checkPreReady(index);
        _this.onPreReadyElement(index);
        isPreReady && _this.onPreReady();
      }).on("ready", function(_a) {
        var withPreReady = _a.withPreReady, hasLoading = _a.hasLoading, isSkip = _a.isSkip;
        var info = _this.elementInfos[index];
        info.hasLoading = hasLoading;
        info.isSkip = isSkip;
        var isPreReady = withPreReady && _this.checkPreReady(index);
        var isReady = _this.checkReady(index);
        withPreReady && _this.onPreReadyElement(index);
        _this.onReadyElement(index);
        isPreReady && _this.onPreReady();
        isReady && _this.onReady();
      });
      return {
        loader,
        element,
        hasLoading: false,
        hasError: false,
        isPreReady: false,
        isReady: false,
        isSkip: false
      };
    });
    var length = this.elementInfos.length;
    this.totalCount = length;
    if (!length) {
      setTimeout(function() {
        _this.onPreReady();
        _this.onReady();
      });
    }
    return this;
  };
  __proto.getTotalCount = function() {
    return this.totalCount;
  };
  __proto.isPreReady = function() {
    return this.elementInfos.every(function(info) {
      return info.isPreReady;
    });
  };
  __proto.isReady = function() {
    return this.elementInfos.every(function(info) {
      return info.isReady;
    });
  };
  __proto.hasError = function() {
    return this.totalErrorCount > 0;
  };
  __proto.clear = function() {
    this.isPreReadyOver = false;
    this.totalCount = 0;
    this.preReadyCount = 0;
    this.readyCount = 0;
    this.totalErrorCount = 0;
    this.elementInfos.forEach(function(info) {
      if (info.loader) {
        info.loader.destroy();
      }
    });
    this.elementInfos = [];
  };
  __proto.destroy = function() {
    this.clear();
    this.off();
  };
  __proto.getLoader = function(element, options) {
    var _this = this;
    var tagName = element.tagName.toLowerCase();
    var loaders = this.options.loaders;
    var prefix = options.prefix;
    var tags = Object.keys(loaders);
    if (loaders[tagName]) {
      return new loaders[tagName](element, options);
    }
    var loader = new ElementLoader(element, options);
    var children = toArray(element.querySelectorAll(tags.join(", ")));
    loader.setHasLoading(children.some(function(el) {
      return hasLoadingAttribute(el, prefix);
    }));
    var withPreReady = false;
    var childrenImReady = this.clone().on("error", function(e) {
      loader.onError(e.target);
    }).on("ready", function() {
      loader.onReady(withPreReady);
    });
    loader.on("requestChildren", function() {
      var contentElements = getContentElements(element, tags, _this.options.prefix);
      childrenImReady.check(contentElements).on("preReady", function(e) {
        withPreReady = e.isReady;
        if (!withPreReady) {
          loader.onPreReady();
        }
      });
    }).on("reqeustReadyChildren", function() {
      childrenImReady.check(children);
    }).on("requestDestroy", function() {
      childrenImReady.destroy();
    });
    return loader;
  };
  __proto.clone = function() {
    return new ImReadyManager2(__assign$1({}, this.options));
  };
  __proto.checkPreReady = function(index) {
    this.elementInfos[index].isPreReady = true;
    ++this.preReadyCount;
    if (this.preReadyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.checkReady = function(index) {
    this.elementInfos[index].isReady = true;
    ++this.readyCount;
    if (this.readyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.onError = function(index, target) {
    var info = this.elementInfos[index];
    info.hasError = true;
    this.trigger(new ComponentEvent$1("error", {
      element: info.element,
      index,
      target,
      errorCount: this.getErrorCount(),
      totalErrorCount: ++this.totalErrorCount
    }));
  };
  __proto.onPreReadyElement = function(index) {
    var info = this.elementInfos[index];
    this.trigger(new ComponentEvent$1("preReadyElement", {
      element: info.element,
      index,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isSkip: info.isSkip
    }));
  };
  __proto.onPreReady = function() {
    this.isPreReadyOver = true;
    this.trigger(new ComponentEvent$1("preReady", {
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isReady: this.isReady(),
      hasLoading: this.hasLoading()
    }));
  };
  __proto.onReadyElement = function(index) {
    var info = this.elementInfos[index];
    this.trigger(new ComponentEvent$1("readyElement", {
      index,
      element: info.element,
      hasError: info.hasError,
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isPreReadyOver: this.isPreReadyOver,
      isSkip: info.isSkip
    }));
  };
  __proto.onReady = function() {
    this.trigger(new ComponentEvent$1("ready", {
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      totalCount: this.totalCount
    }));
  };
  __proto.getErrorCount = function() {
    return this.elementInfos.filter(function(info) {
      return info.hasError;
    }).length;
  };
  __proto.hasLoading = function() {
    return this.elementInfos.some(function(info) {
      return info.hasLoading;
    });
  };
  return ImReadyManager2;
}(Component);
var ImageLoader = /* @__PURE__ */ function(_super) {
  __extends$1(ImageLoader2, _super);
  function ImageLoader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ImageLoader2.prototype;
  __proto.checkElement = function() {
    var element = this.element;
    var src = element.getAttribute("src");
    if (element.complete) {
      if (src) {
        if (!element.naturalWidth) {
          this.onAlreadyError(element);
        }
        return false;
      } else {
        this.onAlreadyPreReady();
      }
    }
    this.addEvents();
    IS_IE && element.setAttribute("src", src);
    return true;
  };
  ImageLoader2.EVENTS = ["load", "error"];
  return ImageLoader2;
}(Loader);
var VideoLoader = /* @__PURE__ */ function(_super) {
  __extends$1(VideoLoader2, _super);
  function VideoLoader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = VideoLoader2.prototype;
  __proto.checkElement = function() {
    var element = this.element;
    if (element.readyState >= 1) {
      return false;
    }
    if (element.error) {
      this.onAlreadyError(element);
      return false;
    }
    this.addEvents();
    return true;
  };
  VideoLoader2.EVENTS = ["loadedmetadata", "error"];
  return VideoLoader2;
}(Loader);
var ImReady = /* @__PURE__ */ function(_super) {
  __extends$1(ImReady2, _super);
  function ImReady2(options) {
    if (options === void 0) {
      options = {};
    }
    return _super.call(this, __assign$1({
      loaders: {
        img: ImageLoader,
        video: VideoLoader
      }
    }, options)) || this;
  }
  return ImReady2;
}(ImReadyManager);
const ImReady$1 = ImReady;
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
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
}
var DEFAULT_GRID_OPTIONS = {
  horizontal: false,
  useTransform: false,
  percentage: false,
  isEqualSize: false,
  isConstantSize: false,
  gap: 0,
  attributePrefix: "data-grid-",
  resizeDebounce: 100,
  maxResizeDebounce: 0,
  autoResize: true,
  preserveUIOnDestroy: false,
  defaultDirection: "end",
  externalContainerManager: null,
  externalItemRenderer: null,
  renderOnPropertyChange: true,
  useFit: true,
  outlineLength: 0,
  outlineSize: 0,
  useRoundedSize: true,
  useResizeObserver: false,
  observeChildren: false
};
var PROPERTY_TYPE;
(function(PROPERTY_TYPE2) {
  PROPERTY_TYPE2[PROPERTY_TYPE2["PROPERTY"] = 1] = "PROPERTY";
  PROPERTY_TYPE2[PROPERTY_TYPE2["RENDER_PROPERTY"] = 2] = "RENDER_PROPERTY";
})(PROPERTY_TYPE || (PROPERTY_TYPE = {}));
var MOUNT_STATE;
(function(MOUNT_STATE2) {
  MOUNT_STATE2[MOUNT_STATE2["UNCHECKED"] = 1] = "UNCHECKED";
  MOUNT_STATE2[MOUNT_STATE2["UNMOUNTED"] = 2] = "UNMOUNTED";
  MOUNT_STATE2[MOUNT_STATE2["MOUNTED"] = 3] = "MOUNTED";
})(MOUNT_STATE || (MOUNT_STATE = {}));
var UPDATE_STATE;
(function(UPDATE_STATE2) {
  UPDATE_STATE2[UPDATE_STATE2["NEED_UPDATE"] = 1] = "NEED_UPDATE";
  UPDATE_STATE2[UPDATE_STATE2["WAIT_LOADING"] = 2] = "WAIT_LOADING";
  UPDATE_STATE2[UPDATE_STATE2["UPDATED"] = 3] = "UPDATED";
})(UPDATE_STATE || (UPDATE_STATE = {}));
var GRID_PROPERTY_TYPES = {
  gap: PROPERTY_TYPE.RENDER_PROPERTY,
  defaultDirection: PROPERTY_TYPE.PROPERTY,
  renderOnPropertyChange: PROPERTY_TYPE.PROPERTY,
  preserveUIOnDestroy: PROPERTY_TYPE.PROPERTY,
  useFit: PROPERTY_TYPE.PROPERTY,
  outlineSize: PROPERTY_TYPE.RENDER_PROPERTY,
  outlineLength: PROPERTY_TYPE.RENDER_PROPERTY
};
var RECT_NAMES = {
  horizontal: {
    inlinePos: "top",
    contentPos: "left",
    inlineSize: "height",
    contentSize: "width"
  },
  vertical: {
    inlinePos: "left",
    contentPos: "top",
    inlineSize: "width",
    contentSize: "height"
  }
};
function getKeys(obj) {
  return Object.keys(obj);
}
function getUpdatedItems(items, entries) {
  var mountedItems = getMountedItems(items);
  return diff(entries.map(function(entry) {
    return entry.target;
  }), mountedItems.map(function(item) {
    return item.element;
  })).maintained.filter(function(_a) {
    var prevIndex = _a[0], nextIndex = _a[1];
    var entrySize = entries[prevIndex].size;
    var item = items[nextIndex];
    return !item.inlineSize || !item.contentSize || entrySize.inlineSize !== item.computedInlineSize || entrySize.blockSize !== item.computedContentSize;
  }).map(function(_a) {
    var nextIndex = _a[1];
    return items[nextIndex];
  });
}
function getMountedItems(items) {
  return items.filter(function(item) {
    return item.element;
  });
}
function getMountedElements(items) {
  return getMountedItems(items).map(function(item) {
    return item.element;
  });
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function(all, letter) {
    return letter.toUpperCase();
  });
}
function getDataAttributes(element, attributePrefix) {
  var dataAttributes = {};
  var attributes = element.attributes;
  var length = attributes.length;
  for (var i = 0; i < length; ++i) {
    var attribute = attributes[i];
    var name = attribute.name, value = attribute.value;
    if (name.indexOf(attributePrefix) === -1) {
      continue;
    }
    dataAttributes[camelize(name.replace(attributePrefix, ""))] = value;
  }
  return dataAttributes;
}
function GetterSetter(component) {
  var prototype = component.prototype, propertyTypes = component.propertyTypes;
  var _loop_1 = function(name2) {
    var shouldRender = propertyTypes[name2] === PROPERTY_TYPE.RENDER_PROPERTY;
    var descriptor = Object.getOwnPropertyDescriptor(prototype, name2) || {};
    var getter = descriptor.get || function get() {
      return this.options[name2];
    };
    var setter = descriptor.set || function set(value) {
      var options = this.options;
      var prevValue = options[name2];
      if (prevValue === value) {
        return;
      }
      options[name2] = value;
      if (shouldRender && options.renderOnPropertyChange) {
        this.scheduleRender();
      }
    };
    var attributes = {
      enumerable: true,
      configurable: true,
      get: getter,
      set: setter
    };
    Object.defineProperty(prototype, name2, attributes);
  };
  for (var name in propertyTypes) {
    _loop_1(name);
  }
}
function range(length) {
  var arr = [];
  for (var i = 0; i < length; ++i) {
    arr.push(i);
  }
  return arr;
}
var ResizeWatcher = /* @__PURE__ */ function() {
  function ResizeWatcher2(container, options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    this._resizeTimer = 0;
    this._maxResizeDebounceTimer = 0;
    this.rect = {
      width: 0,
      height: 0
    };
    this._updatedEntries = [];
    this._onWindowResize = function() {
      _this._scheduleResize([{
        target: _this.container
      }]);
    };
    this._onObserve = function(entries) {
      var options2 = _this._options;
      var container2 = _this.container;
      var containerRectBox = options2.rectBox;
      var childrenRectBox = options2.childrenRectBox;
      _this._scheduleResize(entries.map(function(entry) {
        var target = entry.target;
        var rectBox = target === container2 ? containerRectBox : childrenRectBox;
        var sizes = rectBox === "border-box" ? entry.borderBoxSize : entry.contentBoxSize;
        if (!sizes) {
          var contentRect = entry.contentRect;
          sizes = [{
            inlineSize: contentRect.width,
            blockSize: contentRect.height
          }];
        }
        return {
          // not array in old browser
          size: sizes[0] || sizes,
          target: entry.target
        };
      }));
    };
    this._scheduleResize = function(entries) {
      var _a = _this._options, resizeDebounce = _a.resizeDebounce, maxResizeDebounce = _a.maxResizeDebounce;
      var updatedEntries = _this._updatedEntries;
      updatedEntries.push.apply(updatedEntries, entries);
      _this._updatedEntries = updatedEntries.filter(function(entry, index) {
        return updatedEntries.lastIndexOf(entry) === index;
      });
      if (!_this._maxResizeDebounceTimer && maxResizeDebounce >= resizeDebounce) {
        _this._maxResizeDebounceTimer = window.setTimeout(_this._onResize, maxResizeDebounce);
      }
      if (_this._resizeTimer) {
        clearTimeout(_this._resizeTimer);
        _this._resizeTimer = 0;
      }
      _this._resizeTimer = window.setTimeout(_this._onResize, resizeDebounce);
    };
    this._onResize = function() {
      clearTimeout(_this._resizeTimer);
      clearTimeout(_this._maxResizeDebounceTimer);
      _this._maxResizeDebounceTimer = 0;
      _this._resizeTimer = 0;
      var updated = _this._updatedEntries;
      var container2 = _this.container;
      var containerEntry;
      var childEntries = updated.filter(function(entry) {
        if (entry.target === container2) {
          containerEntry = entry;
          return false;
        } else {
          return true;
        }
      });
      var isResizeChildren = childEntries.length > 0;
      var isResizeContainer = !!containerEntry;
      if (isResizeContainer) {
        var watchDirection = _this._options.watchDirection;
        var prevRect = _this.rect;
        var containerEntrySize = containerEntry.size;
        if (containerEntrySize) {
          _this.setRect({
            width: containerEntrySize.inlineSize,
            height: containerEntrySize.blockSize
          });
        } else {
          _this.resize();
        }
        var rect = _this.rect;
        var isWatchWidth = watchDirection === "box" || watchDirection === "width";
        var isWatchHeight = watchDirection === "box" || watchDirection === "height";
        isResizeContainer = !watchDirection || isWatchWidth && prevRect.width !== rect.width || isWatchHeight && prevRect.height !== rect.height;
      }
      _this._updatedEntries = [];
      if (isResizeContainer || isResizeChildren) {
        _this._emitter.trigger("resize", {
          isResizeContainer,
          childEntries
        });
      }
    };
    this._options = __assign({
      resizeDebounce: 100,
      maxResizeDebounce: 0,
      useResizeObserver: false,
      useWindowResize: true,
      watchDirection: false,
      rectBox: "content-box",
      childrenRectBox: "border-box"
    }, options);
    this.container = isString(container) ? document.querySelector(container) : container;
    this._init();
  }
  var __proto = ResizeWatcher2.prototype;
  __proto.getRect = function() {
    return this.rect;
  };
  __proto.setRect = function(rect) {
    this.rect = __assign({}, rect);
  };
  __proto.isObserverEnabled = function() {
    return !!this._observer;
  };
  __proto.resize = function() {
    var container = this.container;
    this.setRect(this._options.rectBox === "border-box" ? {
      width: container.offsetWidth,
      height: container.offsetHeight
    } : {
      width: container.clientWidth,
      height: container.clientHeight
    });
  };
  __proto.observeChildren = function(children) {
    var observer = this._observer;
    if (!observer) {
      return;
    }
    var box = this._options.childrenRectBox;
    children.forEach(function(element) {
      observer.observe(element, {
        box
      });
    });
  };
  __proto.unobserveChildren = function(children) {
    var observer = this._observer;
    if (!observer) {
      return;
    }
    children.forEach(function(element) {
      observer.unobserve(element);
    });
  };
  __proto.listen = function(callback) {
    this._emitter.on("resize", callback);
    return this;
  };
  __proto.destroy = function() {
    var _a;
    (_a = this._observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    if (this._options.useWindowResize) {
      window.removeEventListener("resize", this._onWindowResize);
    }
  };
  __proto._init = function() {
    var container = this.container;
    var options = this._options;
    this._emitter = new Component();
    if (options.useResizeObserver && !!window.ResizeObserver) {
      this._observer = new window.ResizeObserver(this._onObserve);
      this._observer.observe(container, {
        box: options.rectBox
      });
    }
    if (options.useWindowResize) {
      window.addEventListener("resize", this._onWindowResize);
    }
    this.resize();
  };
  return ResizeWatcher2;
}();
var ContainerManager = /* @__PURE__ */ function(_super) {
  __extends(ContainerManager2, _super);
  function ContainerManager2(container, options) {
    var _this = _super.call(this) || this;
    _this.container = container;
    _this._onResize = function(e) {
      _this.trigger("resize", e);
    };
    _this.options = __assign({
      horizontal: DEFAULT_GRID_OPTIONS.horizontal,
      autoResize: DEFAULT_GRID_OPTIONS.autoResize,
      resizeDebounce: DEFAULT_GRID_OPTIONS.resizeDebounce,
      maxResizeDebounce: DEFAULT_GRID_OPTIONS.maxResizeDebounce,
      useResizeObserver: DEFAULT_GRID_OPTIONS.useResizeObserver
    }, options);
    _this._init();
    return _this;
  }
  var __proto = ContainerManager2.prototype;
  __proto.resize = function() {
    var container = this.container;
    this.setRect({
      width: container.clientWidth,
      height: container.clientHeight
    });
  };
  __proto.isObserverEnabled = function() {
    return this._watcher.isObserverEnabled();
  };
  __proto.getRect = function() {
    return this._watcher.getRect();
  };
  __proto.observeChildren = function(children) {
    this._watcher.observeChildren(children);
  };
  __proto.unobserveChildren = function(children) {
    this._watcher.unobserveChildren(children);
  };
  __proto.setRect = function(rect) {
    this._watcher.setRect(rect);
  };
  __proto.getInlineSize = function() {
    return this.getRect()[this._names.inlineSize];
  };
  __proto.getContentSize = function() {
    return this.getRect()[this._names.contentSize];
  };
  __proto.getStatus = function() {
    return {
      rect: this._watcher.getRect()
    };
  };
  __proto.setStatus = function(status) {
    this.setRect(status.rect);
    this.setContentSize(this.getContentSize());
  };
  __proto.setContentSize = function(size) {
    var _a;
    var sizeName = this.options.horizontal ? "width" : "height";
    this.setRect(__assign(__assign({}, this.getRect()), (_a = {}, _a[sizeName] = size, _a)));
    this.container.style[sizeName] = size + "px";
  };
  __proto.destroy = function(options) {
    if (options === void 0) {
      options = {};
    }
    this._watcher.destroy();
    if (!options.preserveUI) {
      this.container.style.cssText = this.orgCSSText;
    }
  };
  __proto._init = function() {
    var container = this.container;
    var style = window.getComputedStyle(container);
    this.orgCSSText = container.style.cssText;
    if (style.position === "static") {
      container.style.position = "relative";
    }
    var options = this.options;
    this._watcher = new ResizeWatcher(container, {
      useWindowResize: options.autoResize,
      useResizeObserver: options.useResizeObserver,
      resizeDebounce: options.resizeDebounce,
      maxResizeDebounce: options.maxResizeDebounce,
      watchDirection: options.useResizeObserver ? this._names.inlineSize : false
    }).listen(this._onResize);
  };
  Object.defineProperty(__proto, "_names", {
    get: function() {
      return RECT_NAMES[this.options.horizontal ? "horizontal" : "vertical"];
    },
    enumerable: false,
    configurable: true
  });
  return ContainerManager2;
}(Component);
var ItemRenderer = /* @__PURE__ */ function() {
  function ItemRenderer2(options) {
    this.initialRects = {};
    this.sizePercetage = false;
    this.posPercetage = false;
    this.options = __assign({
      attributePrefix: DEFAULT_GRID_OPTIONS.attributePrefix,
      useTransform: DEFAULT_GRID_OPTIONS.useTransform,
      horizontal: DEFAULT_GRID_OPTIONS.horizontal,
      percentage: DEFAULT_GRID_OPTIONS.percentage,
      isEqualSize: DEFAULT_GRID_OPTIONS.isEqualSize,
      isConstantSize: DEFAULT_GRID_OPTIONS.isConstantSize,
      useRoundedSize: DEFAULT_GRID_OPTIONS.useRoundedSize
    }, options);
    this._init();
  }
  var __proto = ItemRenderer2.prototype;
  __proto.resize = function() {
    this.initialRects = {};
  };
  __proto.renderItems = function(items) {
    var _this = this;
    items.forEach(function(item) {
      _this._renderItem(item);
    });
  };
  __proto.getInlineSize = function() {
    return this.containerRect[this.options.horizontal ? "height" : "width"];
  };
  __proto.setContainerRect = function(rect) {
    this.containerRect = rect;
  };
  __proto.updateEqualSizeItems = function(items, totalItems) {
    var _this = this;
    this.updateItems(items);
    var hasSizeGroup = items.some(function(item) {
      return item.attributes.sizeGroup;
    });
    if (this.options.isEqualSize || hasSizeGroup) {
      var updatedItem = items.some(function(item) {
        return item.updateState === UPDATE_STATE.UPDATED;
      });
      if (updatedItem) {
        totalItems.forEach(function(item) {
          if (items.indexOf(item) === -1) {
            _this.updateItem(item, true);
          }
        });
      }
    }
  };
  __proto.updateItems = function(items) {
    var _this = this;
    items.forEach(function(item) {
      _this.updateItem(item);
    });
  };
  __proto.getStatus = function() {
    return {
      initialRects: this.initialRects
    };
  };
  __proto.setStatus = function(status) {
    this.initialRects = status.initialRects;
  };
  __proto._init = function() {
    var percentage = this.options.percentage;
    var sizePercentage = false;
    var posPercentage = false;
    if (percentage === true) {
      sizePercentage = true;
      posPercentage = true;
    } else if (percentage) {
      if (percentage.indexOf("position") > -1) {
        posPercentage = true;
      }
      if (percentage.indexOf("size") > -1) {
        sizePercentage = true;
      }
    }
    this.posPercetage = posPercentage;
    this.sizePercetage = sizePercentage;
  };
  __proto.updateItem = function(item, checkSizeGroup) {
    var _a;
    var _b = this.options, isEqualSize = _b.isEqualSize, isConstantSize = _b.isConstantSize, useRoundedSize = _b.useRoundedSize;
    var initialRects = this.initialRects;
    var orgRect = item.orgRect, element = item.element;
    var isLoading = item.updateState === UPDATE_STATE.WAIT_LOADING;
    var hasOrgSize = orgRect && orgRect.width && orgRect.height;
    var rect;
    var attributes = element ? getDataAttributes(element, this.options.attributePrefix) : item.attributes;
    var sizeGroup = (_a = attributes.sizeGroup) !== null && _a !== void 0 ? _a : "";
    var isNotEqualSize = attributes.notEqualSize;
    if (sizeGroup !== "" && initialRects[sizeGroup]) {
      rect = initialRects[sizeGroup];
    } else if (isEqualSize && !isNotEqualSize && !sizeGroup && initialRects[""]) {
      rect = initialRects[""];
    } else if (isConstantSize && hasOrgSize && !isLoading) {
      rect = orgRect;
    } else if (checkSizeGroup || !element) {
      return;
    } else {
      rect = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: 0,
        height: 0
      };
      if (useRoundedSize) {
        rect.width = element.offsetWidth;
        rect.height = element.offsetHeight;
      } else {
        var clientRect = element.getBoundingClientRect();
        rect.width = clientRect.width;
        rect.height = clientRect.height;
      }
    }
    item.attributes = attributes;
    item.shouldReupdate = false;
    if (!item.isFirstUpdate || !hasOrgSize) {
      item.orgRect = __assign({}, rect);
    }
    item.rect = __assign({}, rect);
    if (!checkSizeGroup) {
      if (item.element) {
        item.mountState = MOUNT_STATE.MOUNTED;
      }
      if (item.updateState === UPDATE_STATE.NEED_UPDATE) {
        item.updateState = UPDATE_STATE.UPDATED;
        item.isFirstUpdate = true;
      }
      if (!isLoading && !isNotEqualSize && !initialRects[sizeGroup]) {
        initialRects[sizeGroup] = __assign({}, rect);
      }
    }
    return rect;
  };
  __proto._renderItem = function(item) {
    var element = item.element;
    var cssRect = item.cssRect;
    if (!element || !cssRect) {
      return;
    }
    var _a = this.options, horizontal = _a.horizontal, useTransform = _a.useTransform;
    var posPercentage = this.posPercetage;
    var sizePercentage = this.sizePercetage;
    var cssTexts = ["position: absolute;"];
    var _b = RECT_NAMES[horizontal ? "horizontal" : "vertical"], sizeName = _b.inlineSize, posName = _b.inlinePos;
    var inlineSize = this.getInlineSize();
    var keys = getKeys(cssRect);
    if (useTransform) {
      keys = keys.filter(function(key) {
        return key !== "top" && key !== "left";
      });
      cssTexts.push("transform: " + ("translate(" + (cssRect.left || 0) + "px, " + (cssRect.top || 0) + "px);"));
    }
    cssTexts.push.apply(cssTexts, keys.map(function(name) {
      var value = cssRect[name];
      if (name === sizeName && sizePercentage || name === posName && posPercentage) {
        return name + ": " + value / inlineSize * 100 + "%;";
      }
      return name + ": " + value + "px;";
    }));
    element.style.cssText += cssTexts.join("");
  };
  return ItemRenderer2;
}();
var GridItem = /* @__PURE__ */ function() {
  function GridItem2(horizontal, itemStatus) {
    if (itemStatus === void 0) {
      itemStatus = {};
    }
    var _a;
    this.horizontal = horizontal;
    this.isUpdating = false;
    this.shouldReupdate = false;
    this.hasTransition = false;
    this.transitionDuration = "";
    this.isRestoreOrgCSSText = true;
    var element = itemStatus.element;
    var status = __assign({
      key: "",
      orgRect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
      rect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
      cssRect: {},
      attributes: {},
      data: {},
      isFirstUpdate: false,
      mountState: MOUNT_STATE.UNCHECKED,
      updateState: UPDATE_STATE.NEED_UPDATE,
      element: element || null,
      orgCSSText: (_a = element === null || element === void 0 ? void 0 : element.style.cssText) !== null && _a !== void 0 ? _a : "",
      gridData: {}
    }, itemStatus);
    for (var name in status) {
      this[name] = status[name];
    }
  }
  var __proto = GridItem2.prototype;
  Object.defineProperty(__proto, "orgInlineSize", {
    /**
     * The size in inline direction before first rendering. "width" if horizontal is false, "height" otherwise.
     * @ko 첫 렌더링 되기 전의 inline 방향의 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#orgInlineSize
     */
    get: function() {
      var name = this._names.inlineSize;
      return this.orgRect[name] || this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "orgContentSize", {
    /**
     * The size in content direction before first rendering. "height" if horizontal is false, "width" otherwise.
     * @ko 첫 렌더링 되기 전의 content 방향의 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#orgContentSize
     */
    get: function() {
      var name = this._names.contentSize;
      return this.orgRect[name] || this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "inlineSize", {
    /**
     * The size in inline direction. "width" if horizontal is false, "height" otherwise.
     * @ko inline 방향의 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#inlineSize
     */
    get: function() {
      return this.rect[this._names.inlineSize];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "contentSize", {
    /**
     * The size in content direction. "height" if horizontal is false, "width" otherwise.
     * @ko content 방향의 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#contentSize
     */
    get: function() {
      return this.rect[this._names.contentSize];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssInlineSize", {
    /**
     * The CSS size in inline direction applied to the Grid. "width" if horizontal is false, "height" otherwise.
     * @ko Grid에 적용된 inline 방향의 CSS 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#cssInlineSize
     */
    get: function() {
      return this.cssRect[this._names.inlineSize];
    },
    set: function(inlineSize) {
      this.cssRect[this._names.inlineSize] = inlineSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssContentSize", {
    /**
     * The CSS size in content direction applied to the Grid. "height" if horizontal is false, "width" otherwise.
     * @ko Grid에 적용된 content 방향의 CSS 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#cssContentSize
     */
    get: function() {
      return this.cssRect[this._names.contentSize];
    },
    set: function(contentSize) {
      this.cssRect[this._names.contentSize] = contentSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssInlinePos", {
    /**
     * The CSS pos in inline direction applied to the Grid. "left" if horizontal is false, "top" otherwise.
     * @ko Grid에 적용된 inline 방향의 CSS 포지션. horizontal이 false면 "left", 아니면 "top".
     * @member Grid.GridItem#cssInlinePos
     */
    get: function() {
      return this.cssRect[this._names.inlinePos];
    },
    set: function(inlinePos) {
      this.cssRect[this._names.inlinePos] = inlinePos;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssContentPos", {
    /**
     * The CSS pos in content direction applied to the Grid. "top" if horizontal is false, "left" otherwise.
     * @ko Grid에 적용된 content 방향의 CSS 포지션. horizontal이 false면 "top", 아니면 "left".
     * @member Grid.GridItem#cssContentPos
     */
    get: function() {
      return this.cssRect[this._names.contentPos];
    },
    set: function(contentPos) {
      this.cssRect[this._names.contentPos] = contentPos;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedInlineSize", {
    /**
     * Calculated size in the direction of the inline applied to the grid. "width" if horizontal is false, "height" otherwise.
     * @ko Grid에 적용된 inline 방향의 계산된 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#computedInlineSize
     */
    get: function() {
      var name = this._names.inlineSize;
      return this.cssRect[name] || this.rect[name] || this.orgRect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedContentSize", {
    /**
     * Calculated size in the direction of the content applied to the grid. "height" if horizontal is false, "width" otherwise.
     * @ko Grid에 적용된 content 방향의 계산된 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#computedContentSize
     */
    get: function() {
      var name = this._names.contentSize;
      return this.cssRect[name] || this.rect[name] || this.orgRect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedInlinePos", {
    /**
     * Calculated position in the direction of the inline applied to the grid. "left" if horizontal is false, "top" otherwise.
     * @ko Grid에 적용된 content 방향의 계산된 포지션. horizontal이 false면 "left", 아니면 "top".
     * @member Grid.GridItem#computedInlinePos
     */
    get: function() {
      var _a;
      var name = this._names.inlinePos;
      return (_a = this.cssRect[name]) !== null && _a !== void 0 ? _a : this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedContentPos", {
    /**
     * Calculated position in the direction of the content applied to the grid. "top" if horizontal is false, "left" otherwise.
     * @ko Grid에 적용된 content 방향의 계산된 포지션. horizontal이 false면 "top", 아니면 "left".
     * @member Grid.GridItem#computedContentPos
     */
    get: function() {
      var _a;
      var name = this._names.contentPos;
      return (_a = this.cssRect[name]) !== null && _a !== void 0 ? _a : this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  __proto.setCSSGridRect = function(gridRect) {
    var names = RECT_NAMES[this.horizontal ? "horizontal" : "vertical"];
    var rect = {};
    for (var name in gridRect) {
      rect[names[name]] = gridRect[name];
    }
    this.cssRect = rect;
  };
  __proto.getStatus = function() {
    return {
      mountState: this.mountState,
      updateState: this.updateState,
      attributes: this.attributes,
      orgCSSText: this.orgCSSText,
      isFirstUpdate: this.isFirstUpdate,
      element: null,
      key: this.key,
      orgRect: this.orgRect,
      rect: this.rect,
      cssRect: this.cssRect,
      gridData: this.gridData,
      data: this.data
    };
  };
  __proto.getMinimizedStatus = function() {
    var status = {
      orgRect: this.orgRect,
      rect: this.rect,
      cssRect: this.cssRect,
      attributes: this.attributes,
      gridData: this.gridData
    };
    var _a = this, key = _a.key, mountState = _a.mountState, updateState = _a.updateState, isFirstUpdate = _a.isFirstUpdate, orgCSSText = _a.orgCSSText;
    if (typeof key !== "undefined") {
      status.key = key;
    }
    if (mountState !== MOUNT_STATE.UNCHECKED) {
      status.mountState = mountState;
    }
    if (updateState !== UPDATE_STATE.NEED_UPDATE) {
      status.updateState = updateState;
    }
    if (isFirstUpdate) {
      status.isFirstUpdate = true;
    }
    if (orgCSSText) {
      status.orgCSSText = orgCSSText;
    }
    return status;
  };
  Object.defineProperty(__proto, "_names", {
    get: function() {
      return this.horizontal ? RECT_NAMES.horizontal : RECT_NAMES.vertical;
    },
    enumerable: false,
    configurable: true
  });
  return GridItem2;
}();
var Grid$2 = /* @__PURE__ */ function(_super) {
  __extends(Grid2, _super);
  function Grid2(containerElement, options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.items = [];
    _this.outlines = {
      start: [],
      end: []
    };
    _this._renderTimer = 0;
    _this._onResize = function(e) {
      if (e.isResizeContainer) {
        _this._renderItems({
          useResize: true
        }, true);
      } else {
        var updatedItems = getUpdatedItems(_this.items, e.childEntries);
        if (updatedItems.length > 0) {
          _this.updateItems(updatedItems);
        }
      }
    };
    _this.options = __assign(__assign({}, _this.constructor.defaultOptions), options);
    _this.containerElement = isString(containerElement) ? document.querySelector(containerElement) : containerElement;
    var _a = _this.options, isEqualSize = _a.isEqualSize, isConstantSize = _a.isConstantSize, useTransform = _a.useTransform, horizontal = _a.horizontal, percentage = _a.percentage, externalContainerManager = _a.externalContainerManager, externalItemRenderer = _a.externalItemRenderer, resizeDebounce = _a.resizeDebounce, maxResizeDebounce = _a.maxResizeDebounce, autoResize = _a.autoResize, useRoundedSize = _a.useRoundedSize, useResizeObserver = _a.useResizeObserver;
    _this.containerManager = externalContainerManager || new ContainerManager(_this.containerElement, {
      horizontal,
      resizeDebounce,
      maxResizeDebounce,
      autoResize,
      useResizeObserver
    }).on("resize", _this._onResize);
    _this.itemRenderer = externalItemRenderer || new ItemRenderer({
      useTransform,
      isEqualSize,
      isConstantSize,
      percentage,
      useRoundedSize
    });
    _this._init();
    return _this;
  }
  var __proto = Grid2.prototype;
  __proto.getContainerElement = function() {
    return this.containerElement;
  };
  __proto.getItems = function() {
    return this.items;
  };
  __proto.getChildren = function() {
    return [].slice.call(this.containerElement.children);
  };
  __proto.setItems = function(items) {
    var options = this.options;
    if (options.useResizeObserver && options.observeChildren) {
      var containerManager = this.containerManager;
      containerManager.unobserveChildren(getMountedElements(this.items));
      containerManager.observeChildren(getMountedElements(items));
    }
    this.items = items;
    return this;
  };
  __proto.getContainerInlineSize = function() {
    return this.containerManager.getInlineSize();
  };
  __proto.getOutlines = function() {
    return this.outlines;
  };
  __proto.setOutlines = function(outlines) {
    this.outlines = outlines;
    return this;
  };
  __proto.syncElements = function(options) {
    if (options === void 0) {
      options = {};
    }
    var items = this.items;
    var horizontal = this.options.horizontal;
    var elements2 = this.getChildren();
    var _a = diff(this.items.map(function(item) {
      return item.element;
    }), elements2), added = _a.added, maintained = _a.maintained, changed = _a.changed, removed = _a.removed;
    var nextItems = [];
    maintained.forEach(function(_a2) {
      var beforeIndex = _a2[0], afterIndex = _a2[1];
      nextItems[afterIndex] = items[beforeIndex];
    });
    added.forEach(function(index) {
      nextItems[index] = new GridItem(horizontal, {
        element: elements2[index]
      });
    });
    this.setItems(nextItems);
    if (added.length || removed.length || changed.length) {
      this.renderItems(options);
    }
    return this;
  };
  __proto.updateItems = function(items, options) {
    if (items === void 0) {
      items = this.items;
    }
    if (options === void 0) {
      options = {};
    }
    var useOrgResize = options.useOrgResize;
    items.forEach(function(item) {
      if (useOrgResize) {
        var orgRect = item.orgRect;
        orgRect.width = 0;
        orgRect.height = 0;
      }
      item.updateState = UPDATE_STATE.NEED_UPDATE;
    });
    this.checkReady(options);
    return this;
  };
  __proto.renderItems = function(options) {
    if (options === void 0) {
      options = {};
    }
    this._renderItems(options);
    return this;
  };
  __proto.getStatus = function(minimize) {
    return {
      outlines: this.outlines,
      items: this.items.map(function(item) {
        return minimize ? item.getMinimizedStatus() : item.getStatus();
      }),
      containerManager: this.containerManager.getStatus(),
      itemRenderer: this.itemRenderer.getStatus()
    };
  };
  __proto.setStatus = function(status) {
    var _this = this;
    var horizontal = this.options.horizontal;
    var containerManager = this.containerManager;
    var prevInlineSize = containerManager.getInlineSize();
    var children = this.getChildren();
    this.itemRenderer.setStatus(status.itemRenderer);
    containerManager.setStatus(status.containerManager);
    this.outlines = status.outlines;
    this.items = status.items.map(function(item, i) {
      return new GridItem(horizontal, __assign(__assign({}, item), {
        element: children[i]
      }));
    });
    this.itemRenderer.renderItems(this.items);
    if (prevInlineSize !== containerManager.getInlineSize()) {
      this.renderItems({
        useResize: true
      });
    } else {
      window.setTimeout(function() {
        _this._renderComplete({
          direction: _this.defaultDirection,
          mounted: _this.items,
          updated: [],
          isResize: false
        });
      });
    }
    return this;
  };
  __proto.getComputedOutlineSize = function(items) {
    if (items === void 0) {
      items = this.items;
    }
    return this.options.outlineSize || this.getContainerInlineSize();
  };
  __proto.getComputedOutlineLength = function(items) {
    if (items === void 0) {
      items = this.items;
    }
    return this.options.outlineLength || 1;
  };
  __proto.destroy = function(options) {
    var _a;
    if (options === void 0) {
      options = {};
    }
    var _b = options.preserveUI, preserveUI = _b === void 0 ? this.options.preserveUIOnDestroy : _b;
    this.containerManager.destroy({
      preserveUI
    });
    if (!preserveUI) {
      this.items.forEach(function(_a2) {
        var element = _a2.element, orgCSSText = _a2.orgCSSText;
        if (element) {
          element.style.cssText = orgCSSText;
        }
      });
    }
    (_a = this._im) === null || _a === void 0 ? void 0 : _a.destroy();
  };
  __proto.checkReady = function(options) {
    var _this = this;
    var _a;
    if (options === void 0) {
      options = {};
    }
    var items = this.items;
    var updated = items.filter(function(item) {
      var _a2;
      return ((_a2 = item.element) === null || _a2 === void 0 ? void 0 : _a2.parentNode) && item.updateState !== UPDATE_STATE.UPDATED;
    });
    var mounted = items.filter(function(item) {
      var _a2;
      return ((_a2 = item.element) === null || _a2 === void 0 ? void 0 : _a2.parentNode) && item.mountState !== MOUNT_STATE.MOUNTED;
    });
    var moreUpdated = [];
    mounted.filter(function(item) {
      if (item.hasTransition) {
        return true;
      } else {
        var element = item.element;
        var transitionDuration = parseFloat(getComputedStyle(element).transitionDuration);
        if (transitionDuration > 0) {
          item.hasTransition = true;
          item.transitionDuration = element.style.transitionDuration;
          return true;
        }
      }
      return false;
    }).forEach(function(item) {
      item.element.style.transitionDuration = "0s";
    });
    (_a = this._im) === null || _a === void 0 ? void 0 : _a.destroy();
    this._im = new ImReady$1({
      prefix: this.options.attributePrefix
    }).on("preReadyElement", function(e) {
      updated[e.index].updateState = UPDATE_STATE.WAIT_LOADING;
    }).on("preReady", function() {
      updated.forEach(function(item) {
        var hasOrgSize = item.orgRect.width && item.orgRect.height;
        var hasCSSSize = item.cssRect.width || item.cssRect.height;
        if (!hasOrgSize && hasCSSSize) {
          item.element.style.cssText = item.orgCSSText;
        }
      });
      _this._updateItems(updated);
      _this.readyItems(mounted, updated, options);
    }).on("readyElement", function(e) {
      var item = updated[e.index];
      item.updateState = UPDATE_STATE.NEED_UPDATE;
      if (e.isPreReadyOver) {
        if (item.isRestoreOrgCSSText) {
          item.element.style.cssText = item.orgCSSText;
        }
        _this._updateItems([item]);
        _this.readyItems([], [item], options);
      }
    }).on("error", function(e) {
      var item = updated[e.index];
      _this.trigger("contentError", {
        element: e.element,
        target: e.target,
        item,
        update: function() {
          moreUpdated.push(item);
        }
      });
    }).on("ready", function() {
      if (moreUpdated.length) {
        _this.updateItems(moreUpdated);
      }
    }).check(updated.map(function(item) {
      return item.element;
    }));
  };
  __proto.scheduleRender = function() {
    var _this = this;
    this._clearRenderTimer();
    this._renderTimer = window.setTimeout(function() {
      _this.renderItems();
    });
  };
  __proto.fitOutlines = function(useFit) {
    if (useFit === void 0) {
      useFit = this.useFit;
    }
    var outlines = this.outlines;
    var startOutline = outlines.start;
    var endOutline = outlines.end;
    var outlineOffset = startOutline.length ? Math.min.apply(Math, startOutline) : 0;
    if (!useFit && outlineOffset > 0) {
      return;
    }
    outlines.start = startOutline.map(function(point) {
      return point - outlineOffset;
    });
    outlines.end = endOutline.map(function(point) {
      return point - outlineOffset;
    });
    this.items.forEach(function(item) {
      var contentPos = item.cssContentPos;
      if (!isNumber(contentPos)) {
        return;
      }
      item.cssContentPos = contentPos - outlineOffset;
    });
  };
  __proto.readyItems = function(mounted, updated, options) {
    var prevOutlines = this.outlines;
    var direction = options.direction || this.options.defaultDirection;
    var prevOutline = options.outline || prevOutlines[direction === "end" ? "start" : "end"];
    var items = this.items;
    var nextOutlines = {
      start: __spreadArray([], prevOutline),
      end: __spreadArray([], prevOutline)
    };
    mounted.forEach(function(item) {
      item.mountState = MOUNT_STATE.MOUNTED;
    });
    updated.forEach(function(item) {
      item.isUpdating = true;
    });
    if (items.length) {
      nextOutlines = this.applyGrid(this.items, direction, prevOutline);
    }
    updated.forEach(function(item) {
      item.isUpdating = false;
    });
    this.setOutlines(nextOutlines);
    this.fitOutlines();
    this.itemRenderer.renderItems(this.items);
    this._refreshContainerContentSize();
    var transitionMounted = mounted.filter(function(item) {
      return item.hasTransition;
    });
    if (transitionMounted.length) {
      this.containerManager.resize();
      transitionMounted.forEach(function(item) {
        var element = item.element;
        element.style.transitionDuration = item.transitionDuration;
      });
    }
    this._renderComplete({
      direction,
      mounted,
      updated,
      isResize: !!options.useResize
    });
    var shouldReupdateItems = updated.filter(function(item) {
      return item.shouldReupdate;
    });
    if (shouldReupdateItems.length) {
      this.updateItems(shouldReupdateItems);
    }
  };
  __proto._isObserverEnabled = function() {
    return this.containerManager.isObserverEnabled();
  };
  __proto._updateItems = function(items) {
    this.itemRenderer.updateEqualSizeItems(items, this.getItems());
  };
  __proto._renderComplete = function(e) {
    this.trigger("renderComplete", e);
  };
  __proto._clearRenderTimer = function() {
    clearTimeout(this._renderTimer);
    this._renderTimer = 0;
  };
  __proto._refreshContainerContentSize = function() {
    var _a = this.outlines, startOutline = _a.start, endOutline = _a.end;
    var gap2 = this.options.gap;
    var endPoint = endOutline.length ? Math.max.apply(Math, endOutline) : 0;
    var startPoint = startOutline.length ? Math.max.apply(Math, startOutline) : 0;
    var contentSize = Math.max(startPoint, endPoint - gap2);
    this.containerManager.setContentSize(contentSize);
  };
  __proto._resizeContainer = function() {
    this.containerManager.resize();
    this.itemRenderer.setContainerRect(this.containerManager.getRect());
  };
  __proto._init = function() {
    this._resizeContainer();
  };
  __proto._renderItems = function(options, isTrusted) {
    if (options === void 0) {
      options = {};
    }
    this._clearRenderTimer();
    var isResize = options.useResize || options.useOrgResize;
    if (isResize && !isTrusted) {
      this._resizeContainer();
      this.itemRenderer.resize();
    }
    if (!this.getItems().length && this.getChildren().length) {
      this.syncElements(options);
    } else if (isResize) {
      this.updateItems(this.items, options);
    } else {
      this.checkReady(options);
    }
  };
  Grid2.defaultOptions = DEFAULT_GRID_OPTIONS;
  Grid2.propertyTypes = GRID_PROPERTY_TYPES;
  Grid2 = __decorate([GetterSetter], Grid2);
  return Grid2;
}(Component);
function getColumnPoint(outline, columnIndex, columnCount, pointCaculationName) {
  return Math[pointCaculationName].apply(Math, outline.slice(columnIndex, columnIndex + columnCount));
}
function getColumnIndex(outline, columnCount, nearestCalculationName) {
  var length = outline.length - columnCount + 1;
  var pointCaculationName = nearestCalculationName === "max" ? "min" : "max";
  var indexCaculationName = nearestCalculationName === "max" ? "lastIndexOf" : "indexOf";
  var points = range(length).map(function(index) {
    return getColumnPoint(outline, index, columnCount, pointCaculationName);
  });
  return points[indexCaculationName](Math[nearestCalculationName].apply(Math, points));
}
var MasonryGrid = /* @__PURE__ */ function(_super) {
  __extends(MasonryGrid2, _super);
  function MasonryGrid2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = MasonryGrid2.prototype;
  __proto.applyGrid = function(items, direction, outline) {
    items.forEach(function(item) {
      item.isRestoreOrgCSSText = false;
    });
    var columnSize = this.getComputedOutlineSize(items);
    var column = this.getComputedOutlineLength(items);
    var _a = this.options, gap2 = _a.gap, align2 = _a.align, observeChildren = _a.observeChildren, columnSizeRatio = _a.columnSizeRatio;
    var outlineLength = outline.length;
    var itemsLength = items.length;
    var alignPoses = this._getAlignPoses(column, columnSize);
    var isEndDirection = direction === "end";
    var nearestCalculationName = isEndDirection ? "min" : "max";
    var pointCalculationName = isEndDirection ? "max" : "min";
    var startOutline = [0];
    if (outlineLength === column) {
      startOutline = outline.slice();
    } else {
      var point_1 = outlineLength ? Math[pointCalculationName].apply(Math, outline) : 0;
      startOutline = range(column).map(function() {
        return point_1;
      });
    }
    var endOutline = startOutline.slice();
    var columnDist = column > 1 ? alignPoses[1] - alignPoses[0] : 0;
    var isStretch = align2 === "stretch";
    var _loop_1 = function(i2) {
      var item = items[isEndDirection ? i2 : itemsLength - 1 - i2];
      var columnAttribute = parseInt(item.attributes.column || "1", 10);
      var maxColumnAttribute = parseInt(item.attributes.maxColumn || "1", 10);
      var contentSize = item.contentSize;
      var columnCount = Math.min(column, columnAttribute || Math.max(1, Math.ceil((item.inlineSize + gap2) / columnDist)));
      var maxColumnCount = Math.min(column, Math.max(columnCount, maxColumnAttribute));
      var columnIndex = getColumnIndex(endOutline, columnCount, nearestCalculationName);
      var contentPos = getColumnPoint(endOutline, columnIndex, columnCount, pointCalculationName);
      while (columnCount < maxColumnCount) {
        var nextEndColumnIndex = columnIndex + columnCount;
        var nextColumnIndex = columnIndex - 1;
        if (isEndDirection && (nextEndColumnIndex >= column || endOutline[nextEndColumnIndex] > contentPos)) {
          break;
        }
        if (!isEndDirection && (nextColumnIndex < 0 || endOutline[nextColumnIndex] < contentPos)) {
          break;
        }
        if (!isEndDirection) {
          --columnIndex;
        }
        ++columnCount;
      }
      columnIndex = Math.max(0, columnIndex);
      columnCount = Math.min(column - columnIndex, columnCount);
      if (columnAttribute > 0 && columnCount > 1 || isStretch) {
        var nextInlineSize = (columnCount - 1) * columnDist + columnSize;
        if ((!this_1._isObserverEnabled() || !observeChildren) && item.cssInlineSize !== nextInlineSize) {
          item.shouldReupdate = true;
        }
        item.cssInlineSize = nextInlineSize;
      }
      if (columnSizeRatio > 0) {
        contentSize = item.computedInlineSize / columnSizeRatio;
        item.cssContentSize = contentSize;
      }
      var inlinePos = alignPoses[columnIndex];
      contentPos = isEndDirection ? contentPos : contentPos - gap2 - contentSize;
      item.cssInlinePos = inlinePos;
      item.cssContentPos = contentPos;
      var nextOutlinePoint = isEndDirection ? contentPos + contentSize + gap2 : contentPos;
      range(columnCount).forEach(function(indexOffset) {
        endOutline[columnIndex + indexOffset] = nextOutlinePoint;
      });
    };
    var this_1 = this;
    for (var i = 0; i < itemsLength; ++i) {
      _loop_1(i);
    }
    return {
      start: isEndDirection ? startOutline : endOutline,
      end: isEndDirection ? endOutline : startOutline
    };
  };
  __proto.getComputedOutlineSize = function(items) {
    if (items === void 0) {
      items = this.items;
    }
    var _a = this.options, gap2 = _a.gap, align2 = _a.align;
    var containerInlineSize = this.getContainerInlineSize();
    var columnSizeOption = this.columnSize || this.outlineSize;
    var columnOption = this.column || this.outlineLength;
    var column = columnOption || 1;
    var columnSize = 0;
    if (align2 === "stretch") {
      if (!columnOption) {
        var maxStretchColumnSize = this.maxStretchColumnSize || Infinity;
        column = Math.max(1, Math.ceil((containerInlineSize + gap2) / (maxStretchColumnSize + gap2)));
      }
      columnSize = (containerInlineSize + gap2) / (column || 1) - gap2;
    } else if (columnSizeOption) {
      columnSize = columnSizeOption;
    } else if (items.length) {
      var checkedItem = items[0];
      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var attributes = item.attributes;
        var columnAttribute = parseInt(attributes.column || "1", 10);
        var maxColumnAttribute = parseInt(attributes.maxColumn || "1", 10);
        if (item.updateState !== UPDATE_STATE.UPDATED || !item.inlineSize || columnAttribute !== 1 || maxColumnAttribute !== 1) {
          continue;
        }
        checkedItem = item;
        break;
      }
      var inlineSize = checkedItem.inlineSize || 0;
      columnSize = inlineSize;
    } else {
      columnSize = containerInlineSize;
    }
    return columnSize || 0;
  };
  __proto.getComputedOutlineLength = function(items) {
    if (items === void 0) {
      items = this.items;
    }
    var gap2 = this.gap;
    var columnOption = this.column || this.outlineLength;
    var columnCalculationThreshold = this.columnCalculationThreshold;
    var column = 1;
    if (columnOption) {
      column = columnOption;
    } else {
      var columnSize = this.getComputedOutlineSize(items);
      column = Math.min(items.length, Math.max(1, Math.floor((this.getContainerInlineSize() + gap2) / (columnSize - columnCalculationThreshold + gap2))));
    }
    return column;
  };
  __proto._getAlignPoses = function(column, columnSize) {
    var _a = this.options, align2 = _a.align, gap2 = _a.gap;
    var containerSize = this.getContainerInlineSize();
    var indexes = range(column);
    var offset = 0;
    var dist = 0;
    if (align2 === "justify" || align2 === "stretch") {
      var countDist = column - 1;
      dist = countDist ? Math.max((containerSize - columnSize) / countDist, columnSize + gap2) : 0;
      offset = Math.min(0, containerSize / 2 - (countDist * dist + columnSize) / 2);
    } else {
      dist = columnSize + gap2;
      var totalColumnSize = (column - 1) * dist + columnSize;
      if (align2 === "center") {
        offset = (containerSize - totalColumnSize) / 2;
      } else if (align2 === "end") {
        offset = containerSize - totalColumnSize;
      }
    }
    return indexes.map(function(i) {
      return offset + i * dist;
    });
  };
  MasonryGrid2.propertyTypes = __assign(__assign({}, Grid$2.propertyTypes), {
    column: PROPERTY_TYPE.RENDER_PROPERTY,
    columnSize: PROPERTY_TYPE.RENDER_PROPERTY,
    columnSizeRatio: PROPERTY_TYPE.RENDER_PROPERTY,
    align: PROPERTY_TYPE.RENDER_PROPERTY,
    columnCalculationThreshold: PROPERTY_TYPE.RENDER_PROPERTY,
    maxStretchColumnSize: PROPERTY_TYPE.RENDER_PROPERTY
  });
  MasonryGrid2.defaultOptions = __assign(__assign({}, Grid$2.defaultOptions), {
    align: "justify",
    column: 0,
    columnSize: 0,
    columnSizeRatio: 0,
    columnCalculationThreshold: 0.5,
    maxStretchColumnSize: Infinity
  });
  MasonryGrid2 = __decorate([GetterSetter], MasonryGrid2);
  return MasonryGrid2;
}(Grid$2);
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { GridClass } = $$props;
  createEventDispatcher();
  let container;
  let grid;
  let attributes = {};
  onDestroy(() => {
  });
  function getInstance() {
    return grid;
  }
  if ($$props.GridClass === void 0 && $$bindings.GridClass && GridClass !== void 0)
    $$bindings.GridClass(GridClass);
  if ($$props.getInstance === void 0 && $$bindings.getInstance && getInstance !== void 0)
    $$bindings.getInstance(getInstance);
  return `<div${spread([escape_object(attributes)], {})}${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Grid$1 = Grid;
let SvelteMasonryGrid;
if (typeof Grid$1 === "object") {
  SvelteMasonryGrid = Grid$1;
} else {
  SvelteMasonryGrid = class SvelteMasonryGrid extends Grid$1 {
    constructor(options) {
      options.props.GridClass = MasonryGrid;
      super(options);
    }
  };
}
globalThis.matchMedia?.(
  "(prefers-reduced-motion: reduce)"
).matches;
const thumbnails_svelte_svelte_type_style_lang = "";
const masonry_svelte_svelte_type_style_lang = "";
const css = {
  code: ".item.svelte-1a22kle.svelte-1a22kle{width:250px;display:block;color:unset;text-decoration:none;background-attachment:fixed !important;background:var(--surface-4);transition:100ms;display:inline-block;width:250px;padding:0;opacity:1;position:relative}.item.svelte-1a22kle.svelte-1a22kle:hover{box-shadow:var(--shadow-6)}.item-title.svelte-1a22kle.svelte-1a22kle{margin:0;text-align:center;color:var(--text-1);font-size:var(--font-size-2);font-weight:900;position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;padding-inline:10%;background-attachment:fixed !important;background:linear-gradient(210deg, rgba(var(--lavender), 0.8) 0vw, 40vw, rgba(var(--granite), 0.8) 40vw 100vw);opacity:0.01;transition:100ms}.item-title.svelte-1a22kle.svelte-1a22kle:hover{opacity:0.99}.item.svelte-1a22kle img.svelte-1a22kle{width:100%}.masonrygrid.horizontal .item.svelte-1a22kle img.svelte-1a22kle{width:auto}",
  map: null
};
const gap = 10;
const align = "center";
const defaultDirection = "end";
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postcards } = $$props;
  if ($$props.postcards === void 0 && $$bindings.postcards && postcards !== void 0)
    $$bindings.postcards(postcards);
  $$result.css.add(css);
  return `${validate_component(SvelteMasonryGrid, "MasonryGrid").$$render(
    $$result,
    {
      class: "images",
      id: "images",
      align,
      gap,
      defaultDirection
    },
    {},
    {
      default: () => {
        return `${each(postcards, (item) => {
          return ` <a${add_attribute("href", imgUrl(item.image), 0)} class="item svelte-1a22kle"${add_attribute("data-img", imgUrl(item.image), 0)}${add_attribute("data-thumb", imgUrl(item.image, 250), 0)}${add_attribute("data-height", item.height, 0)}${add_attribute("data-width", item.width, 0)}${add_attribute("data-alt", item.title, 0)}><img${add_attribute("src", imgUrl(item.image, 250), 0)}${add_attribute("alt", item.title, 0)} loading="lazy" class="svelte-1a22kle"> <p class="item-title svelte-1a22kle">${escape(item.title.length > 40 ? item.title.substring(0, 35) + "..." : item.title)}</p></a> `;
        })}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $titleString, $$unsubscribe_titleString;
  $$unsubscribe_titleString = subscribe(titleString, (value) => $titleString = value);
  let { data } = $$props;
  const { processedData } = data;
  set_store_value(titleString, $titleString = processedData.title, $titleString);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_titleString();
  return `${validate_component(Masonry, "Masonry").$$render($$result, { postcards: processedData.items }, {}, {})}`;
});
export {
  Page as default
};
