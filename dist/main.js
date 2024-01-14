// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dlmcN":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "83316172955a111d";
module.bundle.HMR_BUNDLE_ID = "46353b8120c3ff0c"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets /*: {|[string]: boolean|} */ , acceptedAssets /*: {|[string]: boolean|} */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event /*: {data: string, ...} */ ) {
        checkedAssets = {
        } /*: {|[string]: boolean|} */ ;
        acceptedAssets = {
        } /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        if (process.env.PARCEL_BUILD_ENV !== 'test') console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lUIf1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>_configJson
);
parcelHelpers.export(exports, "Minimap", ()=>_minimapDefault.default
);
parcelHelpers.export(exports, "createMinimapElement", ()=>_minimapElement.createMinimapElement
);
parcelHelpers.export(exports, "editorsMinimaps", ()=>editorsMinimaps
);
parcelHelpers.export(exports, "emitter", ()=>emitter
);
parcelHelpers.export(exports, "styleReader", ()=>styleReader
);
/** Activates the minimap package. */ parcelHelpers.export(exports, "activate", ()=>activate
);
/**
 * Returns a {MinimapElement} for the passed-in model if it's a {Minimap}.
 *
 * @param {Minimap} model The model for which returning a view
 * @returns {MinimapElement}
 */ parcelHelpers.export(exports, "minimapViewProvider", ()=>minimapViewProvider
);
/** Deactivates the minimap package. */ parcelHelpers.export(exports, "deactivate", ()=>deactivate
);
parcelHelpers.export(exports, "getConfigSchema", ()=>getConfigSchema
);
/** Toggles the minimap display. */ parcelHelpers.export(exports, "toggle", ()=>toggle
);
/**
 * Registers a callback to listen to the `did-activate` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidActivate", ()=>onDidActivate
);
/**
 * Registers a callback to listen to the `did-deactivate` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidDeactivate", ()=>onDidDeactivate
);
/**
 * Registers a callback to listen to the `did-create-minimap` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidCreateMinimap", ()=>onDidCreateMinimap
);
/**
 * Registers a callback to listen to the `did-add-plugin` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidAddPlugin", ()=>onDidAddPlugin
);
/**
 * Registers a callback to listen to the `did-remove-plugin` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidRemovePlugin", ()=>onDidRemovePlugin
);
/**
 * Registers a callback to listen to the `did-activate-plugin` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidActivatePlugin", ()=>onDidActivatePlugin
);
/**
 * Registers a callback to listen to the `did-deactivate-plugin` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidDeactivatePlugin", ()=>onDidDeactivatePlugin
);
/**
 * Registers a callback to listen to the `did-change-plugin-order` event of the package.
 *
 * @param {function(event:Object):void} callback The callback function
 * @returns {Disposable} A disposable to stop listening to the event
 */ parcelHelpers.export(exports, "onDidChangePluginOrder", ()=>onDidChangePluginOrder
);
/**
 * Returns the `Minimap` class
 *
 * @returns {Function} The `Minimap` class constructor
 */ parcelHelpers.export(exports, "minimapClass", ()=>minimapClass
);
/**
 * Returns the `Minimap` object associated to the passed-in `TextEditorElement`.
 *
 * @param {TextEditorElement} editorElement A text editor element
 * @returns {Minimap} The associated minimap
 */ parcelHelpers.export(exports, "minimapForEditorElement", ()=>minimapForEditorElement
);
/**
 * Returns the `Minimap` object associated to the passed-in `TextEditor`.
 *
 * @param {TextEditor} textEditor A text editor
 * @returns {Minimap} The associated minimap
 */ parcelHelpers.export(exports, "minimapForEditor", ()=>minimapForEditor
);
/**
 * Returns a new stand-alone {Minimap} for the passed-in `TextEditor`.
 *
 * @param {TextEditor} textEditor A text editor instance to create a minimap for
 * @returns {Minimap} A new stand-alone Minimap for the passed-in editor
 */ parcelHelpers.export(exports, "standAloneMinimapForEditor", ()=>standAloneMinimapForEditor
);
/**
 * Returns the `Minimap` associated to the active `TextEditor`.
 *
 * @returns {Minimap} The active Minimap
 */ parcelHelpers.export(exports, "getActiveMinimap", ()=>getActiveMinimap
);
/**
 * Calls a function for each present and future minimaps.
 *
 * @param {function(minimap:Minimap):void} iterator A function to call with the existing and future minimaps
 * @returns {Disposable} A disposable to unregister the observer
 */ parcelHelpers.export(exports, "observeMinimaps", ()=>observeMinimaps
);
/**
 * Returns the Minimap main module instance.
 *
 * @returns {Main} The Minimap main module instance.
 */ parcelHelpers.export(exports, "provideMinimapServiceV1", ()=>provideMinimapServiceV1
);
var _atom = require("atom");
var _minimapElement = require("./minimap-element");
var _minimap = require("./minimap");
var _minimapDefault = parcelHelpers.interopDefault(_minimap);
var _configJson = require("./config.json");
var _pluginManagement = require("./plugin-management");
var _performanceMonitor = require("./performance-monitor");
var _domStyleReader = require("atom-ide-base/commons-ui/dom-style-reader");
var _underscorePlus = require("./deps/underscore-plus");
parcelHelpers.exportAll(_pluginManagement, exports);
"use strict";
/**
 * The `Minimap` package provides an eagle-eye view of text buffers.
 *
 * It also provides API for plugin packages that want to interact with the minimap and be available to the user through
 * the minimap settings.
 */ /**
 * The activation state of the package.
 *
 * @type {boolean}
 * @access private
 */ let active = false;
/**
 * The toggle state of the package.
 *
 * @type {boolean}
 * @access private
 */ let toggled = false;
let editorsMinimaps = null;
/**
 * The composite disposable that stores the package's subscriptions.
 *
 * @type {CompositeDisposable}
 * @access private
 */ let subscriptions = null;
/**
 * The disposable that stores the package's commands subscription.
 *
 * @type {Disposable}
 * @access private
 */ let subscriptionsOfCommands = null;
const emitter = new _atom.Emitter();
let styleReader = null;
function activate() {
    if (active) return;
    subscriptionsOfCommands = atom.commands.add("atom-workspace", {
        "minimap:toggle": ()=>{
            toggle();
        },
        "minimap:generate-coffee-plugin": async ()=>{
            await generatePlugin("coffee");
        },
        "minimap:generate-javascript-plugin": async ()=>{
            await generatePlugin("javascript");
        },
        "minimap:generate-babel-plugin": async ()=>{
            await generatePlugin("babel");
        }
    });
    editorsMinimaps = new Map();
    styleReader = new _domStyleReader.StyleReader();
    subscriptions = new _atom.CompositeDisposable();
    active = true;
    if (atom.config.get("minimap.autoToggle")) toggle();
}
function minimapViewProvider(model) {
    if (model instanceof _minimapDefault.default) {
        let element = model.getMinimapElement();
        if (!element) {
            element = _minimapElement.createMinimapElement();
            element.setModel(model);
        }
        return element;
    }
}
function deactivate() {
    if (!active) return;
    _pluginManagement.deactivateAllPlugins();
    if (editorsMinimaps) {
        editorsMinimaps.forEach((value)=>{
            value.destroy();
        });
        editorsMinimaps.clear();
    }
    subscriptions.dispose();
    subscriptionsOfCommands.dispose();
    styleReader.invalidateDOMStylesCache();
    toggled = false;
    active = false;
}
function getConfigSchema() {
    return _configJson || atom.packages.getLoadedPackage("minimap").metadata.configSchema;
}
function toggle() {
    if (!active) return;
    if (toggled) {
        toggled = false;
        if (editorsMinimaps) {
            editorsMinimaps.forEach((minimap)=>{
                minimap.destroy();
            });
            editorsMinimaps.clear();
        }
        subscriptions.dispose();
        // HACK: this hack forces rerendering editor size which moves the scrollbar to the right once minimap is removed
        const wasMaximized = atom.isMaximized();
        const { width , height  } = atom.getSize();
        atom.setSize(width, height);
        if (wasMaximized) atom.maximize();
    } else {
        toggled = true;
        initSubscriptions();
    }
    styleReader.invalidateDOMStylesCache();
}
/**
 * Opens the plugin generation view.
 *
 * @param {string} template The name of the template to use
 */ async function generatePlugin(template) {
    const { createMinimapPluginGeneratorElement  } = await require("./minimap-plugin-generator-element");
    const view = createMinimapPluginGeneratorElement();
    view.template = template;
    view.attach();
}
function onDidActivate(callback) {
    return emitter.on("did-activate", callback);
}
function onDidDeactivate(callback) {
    return emitter.on("did-deactivate", callback);
}
function onDidCreateMinimap(callback) {
    return emitter.on("did-create-minimap", callback);
}
function onDidAddPlugin(callback) {
    return emitter.on("did-add-plugin", callback);
}
function onDidRemovePlugin(callback) {
    return emitter.on("did-remove-plugin", callback);
}
function onDidActivatePlugin(callback) {
    return emitter.on("did-activate-plugin", callback);
}
function onDidDeactivatePlugin(callback) {
    return emitter.on("did-deactivate-plugin", callback);
}
function onDidChangePluginOrder(callback) {
    return emitter.on("did-change-plugin-order", callback);
}
function minimapClass() {
    return _minimapDefault.default;
}
function minimapForEditorElement(editorElement) {
    if (!editorElement) return;
    return minimapForEditor(editorElement.getModel());
}
function minimapForEditor(textEditor) {
    if (!textEditor) return;
    if (!editorsMinimaps) return;
    let minimap = editorsMinimaps.get(textEditor);
    if (minimap === undefined || minimap.destroyed) {
        minimap = new _minimapDefault.default({
            textEditor
        });
        editorsMinimaps.set(textEditor, minimap);
        const editorSubscription = textEditor.onDidDestroy(()=>{
            if (editorsMinimaps) editorsMinimaps.delete(textEditor);
            if (minimap) // just in case
            minimap.destroy();
            editorSubscription.dispose();
        });
        // dispose the editorSubscription if minimap is deactivated before destroying the editor
        subscriptions.add(editorSubscription);
    }
    return minimap;
}
function standAloneMinimapForEditor(textEditor) {
    if (!textEditor) return;
    return new _minimapDefault.default({
        textEditor,
        standAlone: true
    });
}
function getActiveMinimap() {
    return minimapForEditor(atom.workspace.getActiveTextEditor());
}
function observeMinimaps(iterator) {
    if (!iterator) return;
    if (editorsMinimaps) editorsMinimaps.forEach((minimap)=>{
        iterator(minimap);
    });
    return onDidCreateMinimap((minimap)=>{
        iterator(minimap);
    });
}
/**
 * Registers to the `observeTextEditors` method.
 *
 * @access private
 */ function initSubscriptions() {
    const debounceUpdateStyles = _underscorePlus.debounce(updateStyles, 300);
    subscriptions.add(atom.workspace.observeTextEditors((textEditor)=>{
        const minimap = minimapForEditor(textEditor);
        const minimapElement = minimapViewProvider(minimap);
        emitter.emit("did-create-minimap", minimap);
        minimapElement.attach(textEditor.getElement());
    }), // empty color cache if the theme changes
    atom.themes.onDidChangeActiveThemes(debounceUpdateStyles), atom.styles.onDidUpdateStyleElement(debounceUpdateStyles), atom.styles.onDidAddStyleElement(debounceUpdateStyles), atom.styles.onDidRemoveStyleElement(debounceUpdateStyles), _performanceMonitor.treeSitterWarning());
}
/** Force update styles of minimap */ function updateStyles() {
    styleReader.invalidateDOMStylesCache();
    editorsMinimaps.forEach((minimap)=>{
        atom.views.getView(minimap).requestForcedUpdate();
    });
}
// The public exports included in the service:
const MinimapServiceV1 = {
    minimapViewProvider,
    getConfigSchema,
    onDidActivate,
    onDidDeactivate,
    onDidCreateMinimap,
    onDidAddPlugin,
    onDidRemovePlugin,
    onDidActivatePlugin,
    onDidDeactivatePlugin,
    onDidChangePluginOrder,
    minimapClass,
    minimapForEditorElement,
    minimapForEditor,
    standAloneMinimapForEditor,
    getActiveMinimap,
    observeMinimaps,
    registerPlugin: _pluginManagement.registerPlugin,
    unregisterPlugin: _pluginManagement.unregisterPlugin,
    togglePluginActivation: _pluginManagement.togglePluginActivation,
    deactivateAllPlugins: _pluginManagement.deactivateAllPlugins,
    activatePlugin: _pluginManagement.activatePlugin,
    deactivatePlugin: _pluginManagement.deactivatePlugin,
    getPluginsOrder: _pluginManagement.getPluginsOrder
};
function provideMinimapServiceV1() {
    return MinimapServiceV1;
}

},{"./minimap-element":"eyU6v","./minimap":"hTPeT","./config.json":"7B8RM","./plugin-management":"fyvhj","./performance-monitor":"lWj66","atom-ide-base/commons-ui/dom-style-reader":"cuKHQ","./deps/underscore-plus":"fHACO","./minimap-plugin-generator-element":"aMK8G","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"eyU6v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMinimapElement", ()=>createMinimapElement
);
var _atom = require("atom");
var _atomUtilsPlus = require("atom-utils-plus");
var _elementResizeDetector = require("element-resize-detector");
var _elementResizeDetectorDefault = parcelHelpers.interopDefault(_elementResizeDetector);
var _decorationManagement = require("./decoration-management");
var _decorationManagementDefault = parcelHelpers.interopDefault(_decorationManagement);
var _main = require("./main");
var _canvasDrawer = require("./mixins/canvas-drawer");
var _canvasDrawerDefault = parcelHelpers.interopDefault(_canvasDrawer);
var _include = require("./decorators/include");
var _includeDefault = parcelHelpers.interopDefault(_include);
var _element = require("./decorators/element");
var _elementDefault = parcelHelpers.interopDefault(_element);
var _minimapQuickSettingsElement = require("./minimap-quick-settings-element");
"use strict";
const elementResizeDetector = _elementResizeDetectorDefault.default({
    strategy: "scroll"
});
const SPEC_MODE = atom.inSpecMode();
const TAG_NAME = "atom-text-editor-minimap";
/**
 * Public: The MinimapElement is the view meant to render a {@link Minimap} instance in the DOM.
 *
 * You can retrieve the MinimapElement associated to a Minimap using the `atom.views.getView` method.
 *
 * Note that most interactions with the Minimap package is done through the Minimap model so you should never have to
 * access MinimapElement instances.
 *
 * @example Let minimapElement = atom.views.getView(minimap)
 */ class MinimapElement extends HTMLElement {
    static initClass() {
        _includeDefault.default(this, _canvasDrawerDefault.default, _atomUtilsPlus.EventsDelegation, _atomUtilsPlus.AncestorsMethods);
        _elementDefault.default(this, TAG_NAME);
    }
    //    ##     ##  #######   #######  ##    ##  ######
    //    ##     ## ##     ## ##     ## ##   ##  ##    ##
    //    ##     ## ##     ## ##     ## ##  ##   ##
    //    ######### ##     ## ##     ## #####     ######
    //    ##     ## ##     ## ##     ## ##  ##         ##
    //    ##     ## ##     ## ##     ## ##   ##  ##    ##
    //    ##     ##  #######   #######  ##    ##  ######
    /**
   * DOM callback invoked when a new MinimapElement is created.
   *
   * @access private
   */ createdCallback() {
        // Core properties
        /** @access private */ this.minimap = undefined;
        /** @access private */ this.width = undefined;
        /** @access private */ this.height = undefined;
        // Subscriptions
        /** @access private */ this.subscriptions = new _atom.CompositeDisposable();
        /** @access private */ this.visibleAreaSubscription = undefined;
        /** @access private */ this.quickSettingsSubscription = undefined;
        /** @access private */ this.dragSubscription = undefined;
        /** @access private */ this.openQuickSettingSubscription = undefined;
        // Configs
        /** @access private */ this.minimapScrollIndicator = undefined;
        /** @access private */ this.displayMinimapOnLeft = undefined;
        /** @access private */ this.displayPluginsControls = undefined;
        /** @access private */ this.textOpacity = undefined;
        /** @access private */ this.displayCodeHighlights = undefined;
        /** @access private */ this.adjustToSoftWrap = undefined;
        /** @access private */ this.useHardwareAcceleration = undefined;
        /** @access private */ this.absoluteMode = undefined;
        // Elements
        /** @access private */ this.visibleArea = undefined;
        /** @access private */ this.controls = undefined;
        /** @access private */ this.scrollIndicator = undefined;
        /** @access private */ this.openQuickSettings = undefined;
        /** @access private */ this.quickSettingsElement = undefined;
        this.DecorationManagement = new _decorationManagementDefault.default();
        // States
        /** @access private */ this.attached = undefined;
        /** @access private */ this.attachedToTextEditor = undefined;
        /** @access private */ this.standAlone = undefined;
        /** @access private */ this.wasVisible = undefined;
        // Other
        /** @access private */ this.offscreenFirstRow = undefined;
        /** @access private */ this.offscreenLastRow = undefined;
        /** @access private */ this.frameRequested = undefined;
        /** @access private */ this.flexBasis = undefined;
        this.initializeContent();
        this.subscriptions.add(atom.config.observe("minimap.displayMinimapOnLeft", (displayMinimapOnLeft)=>{
            this.displayMinimapOnLeft = displayMinimapOnLeft;
            this.updateMinimapFlexPosition();
            this.measureHeightAndWidth(true, true);
        }), atom.config.observe("minimap.minimapScrollIndicator", (minimapScrollIndicator)=>{
            this.minimapScrollIndicator = minimapScrollIndicator;
            if (this.minimapScrollIndicator && !(this.scrollIndicator != null) && !this.standAlone) this.initializeScrollIndicator();
            else if (this.scrollIndicator != null) this.disposeScrollIndicator();
            if (this.attached) this.requestUpdate();
        }), atom.config.observe("minimap.displayPluginsControls", (displayPluginsControls)=>{
            this.displayPluginsControls = displayPluginsControls;
            if (this.displayPluginsControls && !(this.openQuickSettings != null) && !this.standAlone) this.initializeOpenQuickSettings();
            else if (this.openQuickSettings != null) this.disposeOpenQuickSettings();
        }), atom.config.observe("minimap.textOpacity", (textOpacity)=>{
            this.textOpacity = textOpacity;
            if (this.attached) this.requestForcedUpdate();
        }), atom.config.observe("minimap.displayCodeHighlights", (displayCodeHighlights)=>{
            this.displayCodeHighlights = displayCodeHighlights;
            if (this.attached) this.requestForcedUpdate();
        }), atom.config.observe("minimap.smoothScrolling", (smoothScrolling)=>{
            this.smoothScrolling = smoothScrolling;
            if (this.attached) {
                if (!this.smoothScrolling) {
                    this.backLayer.canvas.style.cssText = "";
                    this.tokensLayer.canvas.style.cssText = "";
                    this.frontLayer.canvas.style.cssText = "";
                } else this.requestUpdate();
            }
        }), atom.config.observe("minimap.adjustMinimapWidthToSoftWrap", (adjustToSoftWrap)=>{
            this.adjustToSoftWrap = adjustToSoftWrap;
            if (this.attached) this.measureHeightAndWidth();
        }), atom.config.observe("minimap.adjustMinimapWidthOnlyIfSmaller", (adjustOnlyIfSmaller)=>{
            this.adjustOnlyIfSmaller = adjustOnlyIfSmaller;
            if (this.attached) this.measureHeightAndWidth();
        }), atom.config.observe("minimap.useHardwareAcceleration", (useHardwareAcceleration)=>{
            this.useHardwareAcceleration = useHardwareAcceleration;
            if (this.attached) this.requestUpdate();
        }), atom.config.observe("minimap.absoluteMode", (absoluteMode)=>{
            this.absoluteMode = absoluteMode;
            this.classList.toggle("absolute", this.absoluteMode);
        }), atom.config.observe("minimap.adjustAbsoluteModeHeight", (adjustAbsoluteModeHeight)=>{
            this.adjustAbsoluteModeHeight = adjustAbsoluteModeHeight;
            this.classList.toggle("adjust-absolute-height", this.adjustAbsoluteModeHeight);
            if (this.attached) this.measureHeightAndWidth();
        }), atom.config.observe("minimap.ignoreWhitespacesInTokens", (ignoreWhitespacesInTokens)=>{
            this.ignoreWhitespacesInTokens = ignoreWhitespacesInTokens;
            if (this.attached) this.requestForcedUpdate();
        }), atom.config.observe("editor.preferredLineLength", ()=>{
            if (this.attached) this.measureHeightAndWidth();
        }), atom.config.observe("editor.softWrap", ()=>{
            if (this.attached) this.requestUpdate();
        }), atom.config.observe("editor.showInvisibles", ()=>{
            if (this.attached) this.requestUpdate();
        }), atom.config.observe("editor.invisibles", ()=>{
            if (this.attached) this.requestUpdate();
        }), atom.config.observe("editor.softWrapAtPreferredLineLength", ()=>{
            if (this.attached) this.requestUpdate();
        }));
    }
    /**
   * DOM callback invoked when a new MinimapElement is attached to the DOM.
   *
   * @access private
   */ connectedCallback() {
        if (typeof atom.views.pollDocument === "function") this.subscriptions.add(atom.views.pollDocument(()=>{
            this.pollDOM();
        }));
        else {
            this.intersectionObserver = new IntersectionObserver((entries)=>{
                const { intersectionRect  } = entries[entries.length - 1];
                if (intersectionRect.width > 0 || intersectionRect.height > 0) this.measureHeightAndWidth(true, true);
            });
            this.intersectionObserver.observe(this);
            if (this.isVisible()) this.measureHeightAndWidth(true, true);
            const measureDimensions = ()=>{
                this.measureHeightAndWidth(false, false);
            };
            elementResizeDetector.listenTo(this, measureDimensions);
            window.addEventListener("resize", measureDimensions, {
                passive: true
            });
            this.subscriptions.add(new _atom.Disposable(()=>{
                elementResizeDetector.removeListener(this, measureDimensions);
            }), new _atom.Disposable(()=>{
                window.removeEventListener("resize", measureDimensions);
            }));
        }
        this.measureHeightAndWidth();
        this.updateMinimapFlexPosition();
        this.attached = true;
        this.attachedToTextEditor = this.queryParentSelector("atom-text-editor") === this.minimap.getTextEditorElement();
        if (this.attachedToTextEditor) this.minimap.getTextEditorElement().setAttribute("with-minimap", this.displayMinimapOnLeft ? "left" : "right");
        this.subscriptions.add(this.subscribeToMediaQuery());
    }
    /**
   * DOM callback invoked when a new MinimapElement is detached from the DOM.
   *
   * @access private
   */ disconnectedCallback() {
        this.minimap.getTextEditorElement().removeAttribute("with-minimap");
        this.attached = false;
    }
    //       ###    ######## ########    ###     ######  ##     ##
    //      ## ##      ##       ##      ## ##   ##    ## ##     ##
    //     ##   ##     ##       ##     ##   ##  ##       ##     ##
    //    ##     ##    ##       ##    ##     ## ##       #########
    //    #########    ##       ##    ######### ##       ##     ##
    //    ##     ##    ##       ##    ##     ## ##    ## ##     ##
    //    ##     ##    ##       ##    ##     ##  ######  ##     ##
    /**
   * Returns whether the MinimapElement is currently visible on screen or not.
   *
   * The visibility of the minimap is defined by testing the size of the offset width and height of the element.
   *
   * @returns {boolean} Whether the MinimapElement is currently visible or not
   */ isVisible() {
        return this.offsetWidth > 0 || this.offsetHeight > 0;
    }
    /**
   * Attaches the MinimapElement to the DOM.
   *
   * The position at which the element is attached is defined by the `displayMinimapOnLeft` setting.
   *
   * @param {HTMLElement} [parent] The DOM node where attaching the minimap element
   */ attach(parent) {
        if (this.attached) return;
        const container = parent || this.minimap.getTextEditorElement();
        const minimaps = container.querySelectorAll(TAG_NAME);
        if (minimaps.length) Array.prototype.forEach.call(minimaps, (el)=>{
            el.destroy();
            try {
                container.removeChild(el);
            } catch (e) {
            // TODO: ignore for now
            // https://github.com/atom-minimap/minimap/issues/766#issuecomment-762496374
            }
        });
        container.appendChild(this);
    }
    /** Detaches the MinimapElement from the DOM. */ detach() {
        if (!this.attached || this.parentNode == null) return;
        this.parentNode.removeChild(this);
    }
    /**
   * Toggles the minimap left/right position based on the value of the `displayMinimapOnLeft` setting.
   *
   * @access private
   */ updateMinimapFlexPosition() {
        this.classList.toggle("left", this.displayMinimapOnLeft);
        if (this.attachedToTextEditor) this.minimap.getTextEditorElement().setAttribute("with-minimap", this.displayMinimapOnLeft ? "left" : "right");
    }
    /** Destroys this MinimapElement */ destroy() {
        this.DecorationManagement.destroy();
        if (this.quickSettingsElement) this.quickSettingsElement.destroy();
        this.subscriptions.dispose();
        this.detach();
    }
    //     ######   #######  ##    ## ######## ######## ##    ## ########
    //    ##    ## ##     ## ###   ##    ##    ##       ###   ##    ##
    //    ##       ##     ## ####  ##    ##    ##       ####  ##    ##
    //    ##       ##     ## ## ## ##    ##    ######   ## ## ##    ##
    //    ##       ##     ## ##  ####    ##    ##       ##  ####    ##
    //    ##    ## ##     ## ##   ###    ##    ##       ##   ###    ##
    //     ######   #######  ##    ##    ##    ######## ##    ##    ##
    /**
   * Creates the content of the MinimapElement and attaches the mouse control event listeners.
   *
   * @access private
   */ initializeContent() {
        this.initializeCanvas();
        this.attachCanvases(this);
        this.createVisibleArea();
        this.createControls();
        this.subscriptions.add(this.subscribeTo(this, {
            mousewheel: (e)=>{
                if (!this.standAlone && this.minimap.onMouseWheel) this.minimap.onMouseWheel(e);
            }
        }, {
            passive: true
        }), this.subscribeTo(this.getFrontCanvas(), {
            mousedown: (e)=>{
                this.canvasPressed(extractMouseEventData(e));
            },
            touchstart: (e)=>{
                this.canvasPressed(extractTouchEventData(e));
            }
        }, {
            passive: true
        }));
    }
    /**
   * Initializes the visible area div.
   *
   * @access private
   */ createVisibleArea() {
        if (this.visibleArea) return;
        this.visibleArea = document.createElement("div");
        this.visibleArea.classList.add("minimap-visible-area");
        this.appendChild(this.visibleArea);
        this.visibleAreaSubscription = this.subscribeTo(this.visibleArea, {
            mousedown: (e)=>{
                this.startDrag(extractMouseEventData(e));
            },
            touchstart: (e)=>{
                this.startDrag(extractTouchEventData(e));
            }
        }, {
            passive: true
        });
        this.subscriptions.add(this.visibleAreaSubscription);
    }
    /**
   * Removes the visible area div.
   *
   * @access private
   */ removeVisibleArea() {
        if (!this.visibleArea) return;
        this.subscriptions.remove(this.visibleAreaSubscription);
        this.visibleAreaSubscription.dispose();
        this.removeChild(this.visibleArea);
        delete this.visibleArea;
    }
    /**
   * Creates the controls container div.
   *
   * @access private
   */ createControls() {
        if (this.controls || this.standAlone) return;
        this.controls = document.createElement("div");
        this.controls.classList.add("minimap-controls");
        this.appendChild(this.controls);
    }
    /**
   * Removes the controls container div.
   *
   * @access private
   */ removeControls() {
        if (!this.controls) return;
        this.removeChild(this.controls);
        delete this.controls;
    }
    /**
   * Initializes the scroll indicator div when the `minimapScrollIndicator` settings is enabled.
   *
   * @access private
   */ initializeScrollIndicator() {
        if (this.scrollIndicator || this.standAlone) return;
        this.scrollIndicator = document.createElement("div");
        this.scrollIndicator.classList.add("minimap-scroll-indicator");
        this.controls.appendChild(this.scrollIndicator);
    }
    /**
   * Disposes the scroll indicator div when the `minimapScrollIndicator` settings is disabled.
   *
   * @access private
   */ disposeScrollIndicator() {
        if (!this.scrollIndicator) return;
        this.controls.removeChild(this.scrollIndicator);
        delete this.scrollIndicator;
    }
    /**
   * Initializes the quick settings openener div when the `displayPluginsControls` setting is enabled.
   *
   * @access private
   */ initializeOpenQuickSettings() {
        if (this.openQuickSettings || this.standAlone) return;
        this.openQuickSettings = document.createElement("div");
        this.openQuickSettings.classList.add("open-minimap-quick-settings");
        this.controls.appendChild(this.openQuickSettings);
        this.openQuickSettingSubscription = this.subscribeTo(this.openQuickSettings, {
            mousedown: (e)=>{
                e.preventDefault();
                e.stopPropagation();
                if (this.quickSettingsElement != null) {
                    this.quickSettingsElement.destroy();
                    this.quickSettingsSubscription.dispose();
                } else {
                    this.quickSettingsElement = _minimapQuickSettingsElement.createMinimapQuickSettingsElement();
                    this.quickSettingsElement.setModel(this);
                    this.quickSettingsSubscription = this.quickSettingsElement.onDidDestroy(()=>{
                        this.quickSettingsElement = null;
                    });
                    const { top , left , right  } = this.getFrontCanvas().getBoundingClientRect();
                    this.quickSettingsElement.style.top = `${top}px`;
                    this.quickSettingsElement.attach();
                    if (this.displayMinimapOnLeft) this.quickSettingsElement.style.left = `${right}px`;
                    else this.quickSettingsElement.style.left = `${left - this.quickSettingsElement.clientWidth}px`;
                }
            }
        });
    }
    /**
   * Disposes the quick settings openener div when the `displayPluginsControls` setting is disabled.
   *
   * @access private
   */ disposeOpenQuickSettings() {
        if (!this.openQuickSettings) return;
        this.controls.removeChild(this.openQuickSettings);
        this.openQuickSettingSubscription.dispose();
        delete this.openQuickSettings;
    }
    /**
   * Get the DecorationManagement API for minimapElement
   *
   * @returns {DecorationManagement}
   */ getDecorationManagement() {
        return this.DecorationManagement;
    }
    //    ##     ##  #######  ########  ######## ##
    //    ###   ### ##     ## ##     ## ##       ##
    //    #### #### ##     ## ##     ## ##       ##
    //    ## ### ## ##     ## ##     ## ######   ##
    //    ##     ## ##     ## ##     ## ##       ##
    //    ##     ## ##     ## ##     ## ##       ##
    //    ##     ##  #######  ########  ######## ########
    /**
   * Returns the Minimap for which this MinimapElement was created.
   *
   * @returns {Minimap} This element's Minimap
   */ getModel() {
        return this.minimap;
    }
    /**
   * Defines the Minimap model for this MinimapElement instance.
   *
   * @param {Minimap} minimap The Minimap model for this instance.
   * @returns {Minimap} This element's Minimap
   */ setModel(minimap) {
        this.minimap = minimap;
        // set minimapElement for Minimap
        this.minimap.minimapElement = this;
        this.DecorationManagement.initializeDecorations(this.minimap);
        this.subscriptions.add(this.minimap.onDidChangeScrollTop(()=>{
            this.requestUpdate();
        }), this.minimap.onDidChangeScrollLeft(()=>{
            this.requestUpdate();
        }), this.minimap.onDidDestroy(()=>{
            this.destroy();
        }), this.minimap.onDidChangeConfig(()=>{
            if (this.attached) return this.requestForcedUpdate();
        }), this.minimap.onDidChangeStandAlone(()=>{
            this.setStandAlone(this.minimap.isStandAlone());
            this.requestUpdate();
        }), this.minimap.onDidChange((change)=>{
            this.pendingChanges.push(change);
            this.requestUpdate();
        }), this.DecorationManagement.onDidChangeDecorationRange((change)=>{
            const { type  } = change;
            if (type === "line" || type === "highlight-under" || type === "background-custom") this.pendingBackDecorationChanges.push(change);
            else this.pendingFrontDecorationChanges.push(change);
            this.requestUpdate();
        }), _main.onDidChangePluginOrder(()=>{
            this.requestForcedUpdate();
        }));
        this.setStandAlone(this.minimap.isStandAlone());
        if (this.width != null && this.height != null) this.minimap.setScreenHeightAndWidth(this.height, this.width);
        return this.minimap;
    }
    /**
   * Sets the stand-alone mode for this MinimapElement.
   *
   * @param {boolean} standAlone The new mode for this MinimapElement
   */ setStandAlone(standAlone) {
        this.standAlone = standAlone;
        if (this.standAlone) {
            this.setAttribute("stand-alone", true);
            this.disposeScrollIndicator();
            this.disposeOpenQuickSettings();
            this.removeControls();
            this.removeVisibleArea();
        } else {
            this.removeAttribute("stand-alone");
            this.createVisibleArea();
            this.createControls();
            if (this.minimapScrollIndicator) this.initializeScrollIndicator();
            if (this.displayPluginsControls) this.initializeOpenQuickSettings();
        }
    }
    //    ##     ## ########  ########     ###    ######## ########
    //    ##     ## ##     ## ##     ##   ## ##      ##    ##
    //    ##     ## ##     ## ##     ##  ##   ##     ##    ##
    //    ##     ## ########  ##     ## ##     ##    ##    ######
    //    ##     ## ##        ##     ## #########    ##    ##
    //    ##     ## ##        ##     ## ##     ##    ##    ##
    //     #######  ##        ########  ##     ##    ##    ########
    /** Requests an update to be performed on the next frame. */ requestUpdate() {
        if (this.frameRequested) return;
        this.frameRequested = true;
        requestAnimationFrame(()=>{
            this.update();
            this.frameRequested = false;
        });
    }
    /** Requests an update to be performed on the next frame that will completely redraw the minimap. */ requestForcedUpdate() {
        this.offscreenFirstRow = null;
        this.offscreenLastRow = null;
        this.requestUpdate();
    }
    /**
   * Performs the actual MinimapElement update.
   *
   * @access private
   */ update() {
        if (!(this.attached && this.isVisible() && this.minimap)) return;
        const minimap = this.minimap;
        minimap.enableCache();
        const canvas = this.getFrontCanvas();
        const devicePixelRatio = this.minimap.getDevicePixelRatio();
        const visibleAreaLeft = minimap.getTextEditorScaledScrollLeft();
        const visibleAreaTop = minimap.getTextEditorScaledScrollTop() - minimap.getScrollTop();
        const width = Math.min(canvas.width / devicePixelRatio, this.width);
        const visibleWidth = width + visibleAreaLeft;
        if (this.adjustToSoftWrap && this.flexBasis) {
            this.style.flexBasis = `${this.flexBasis}px`;
            this.style.width = `${this.flexBasis}px`;
        } else {
            this.style.flexBasis = null;
            this.style.width = null;
        }
        if (SPEC_MODE) applyStyles(this.visibleArea, {
            width: `${Math.round(visibleWidth)}px`,
            height: `${Math.round(minimap.getTextEditorScaledHeight())}px`,
            top: `${Math.round(visibleAreaTop)}px`,
            "border-left-width": `${Math.round(visibleAreaLeft)}px`
        });
        else applyStyles(this.visibleArea, {
            width: `${Math.round(visibleWidth)}px`,
            height: `${Math.round(minimap.getTextEditorScaledHeight())}px`,
            transform: makeTranslate(0, visibleAreaTop, this.useHardwareAcceleration),
            "border-left-width": `${Math.round(visibleAreaLeft)}px`
        });
        applyStyles(this.controls, {
            width: `${Math.round(width)}px`
        });
        const canvasTop = minimap.getFirstVisibleScreenRow() * minimap.getLineHeight() - minimap.getScrollTop();
        if (this.smoothScrolling) {
            if (SPEC_MODE) {
                applyStyles(this.backLayer.canvas, {
                    top: `${canvasTop}px`
                });
                applyStyles(this.tokensLayer.canvas, {
                    top: `${canvasTop}px`
                });
                applyStyles(this.frontLayer.canvas, {
                    top: `${canvasTop}px`
                });
            } else {
                let canvasTransform = makeTranslate(0, canvasTop, this.useHardwareAcceleration);
                if (devicePixelRatio !== 1) {
                    const scale = 1 / devicePixelRatio;
                    canvasTransform += ` ${makeScale(scale, scale, this.useHardwareAcceleration)}`;
                }
                applyStyles(this.backLayer.canvas, {
                    transform: canvasTransform
                });
                applyStyles(this.tokensLayer.canvas, {
                    transform: canvasTransform
                });
                applyStyles(this.frontLayer.canvas, {
                    transform: canvasTransform
                });
            }
        } else {
            const scale = 1 / devicePixelRatio;
            const canvasTransform = makeScale(scale, scale, this.useHardwareAcceleration);
            applyStyles(this.backLayer.canvas, {
                transform: canvasTransform
            });
            applyStyles(this.tokensLayer.canvas, {
                transform: canvasTransform
            });
            applyStyles(this.frontLayer.canvas, {
                transform: canvasTransform
            });
        }
        if (this.minimapScrollIndicator && !this.scrollIndicator && minimap.canScroll()) this.initializeScrollIndicator();
        if (this.scrollIndicator != null) {
            const minimapScreenHeight = minimap.getScreenHeight();
            const indicatorHeight = minimapScreenHeight * (minimapScreenHeight / minimap.getHeight());
            const indicatorScroll = (minimapScreenHeight - indicatorHeight) * minimap.getScrollRatio();
            if (SPEC_MODE) applyStyles(this.scrollIndicator, {
                height: `${indicatorHeight}px`,
                top: `${indicatorScroll}px`
            });
            else applyStyles(this.scrollIndicator, {
                height: `${indicatorHeight}px`,
                transform: makeTranslate(0, indicatorScroll, this.useHardwareAcceleration)
            });
            if (!minimap.canScroll()) this.disposeScrollIndicator();
        }
        if (this.absoluteMode && this.adjustAbsoluteModeHeight) this.updateCanvasesSize();
        this.updateCanvas();
        minimap.clearCache();
    }
    /**
   * Defines whether to render the code highlights or not.
   *
   * @param {Boolean} displayCodeHighlights Whether to render the code highlights or not
   */ setDisplayCodeHighlights(displayCodeHighlights) {
        this.displayCodeHighlights = displayCodeHighlights;
        if (this.attached) this.requestForcedUpdate();
    }
    /**
   * Polling callback used to detect visibility and size changes.
   *
   * @access private
   */ pollDOM() {
        const visibilityChanged = this.checkForVisibilityChange();
        if (this.isVisible()) {
            if (!this.wasVisible) this.requestForcedUpdate();
            this.measureHeightAndWidth(visibilityChanged, false);
        }
    }
    /**
   * A method that checks for visibility changes in the MinimapElement. The method returns `true` when the visibility
   * changed from visible to hidden or from hidden to visible.
   *
   * @returns {boolean} Whether the visibility changed or not since the last call
   * @access private
   */ checkForVisibilityChange() {
        if (this.isVisible()) {
            if (this.wasVisible) return false;
            else {
                this.wasVisible = true;
                return this.wasVisible;
            }
        } else if (this.wasVisible) {
            this.wasVisible = false;
            return true;
        } else {
            this.wasVisible = false;
            return this.wasVisible;
        }
    }
    /**
   * A method used to measure the size of the MinimapElement and update internal components based on the new size.
   *
   * @param {boolean} visibilityChanged Did the visibility changed since last measurement
   * @param {[type]} [forceUpdate=true] Forces the update even when no changes were detected. Default is `true`
   * @access private
   */ measureHeightAndWidth(visibilityChanged, forceUpdate = true) {
        if (!this.minimap) return;
        const safeFlexBasis = this.style.flexBasis;
        this.style.flexBasis = "";
        const wasResized = this.width !== this.clientWidth || this.height !== this.clientHeight;
        this.height = this.clientHeight;
        this.width = this.clientWidth;
        let canvasWidth = this.width;
        if (this.minimap != null) this.minimap.setScreenHeightAndWidth(this.height, this.width);
        if (wasResized || visibilityChanged || forceUpdate) this.requestForcedUpdate();
        if (!this.isVisible()) return;
        if (wasResized || forceUpdate) {
            if (this.adjustToSoftWrap) {
                const lineLength = atom.config.get("editor.preferredLineLength");
                const softWrap = atom.config.get("editor.softWrap");
                const softWrapAtPreferredLineLength = atom.config.get("editor.softWrapAtPreferredLineLength");
                const width = lineLength * this.minimap.getCharWidth();
                if (softWrap && softWrapAtPreferredLineLength && lineLength && (width <= this.width || !this.adjustOnlyIfSmaller)) {
                    this.flexBasis = width;
                    canvasWidth = width;
                } else delete this.flexBasis;
            } else delete this.flexBasis;
            this.updateCanvasesSize(canvasWidth);
        } else this.style.flexBasis = safeFlexBasis;
    }
    updateCanvasesSize(canvasWidth) {
        const devicePixelRatio = this.minimap.getDevicePixelRatio();
        const maxCanvasHeight = this.height + this.minimap.getLineHeight();
        const newHeight = this.absoluteMode && this.adjustAbsoluteModeHeight ? Math.min(this.minimap.getHeight(), maxCanvasHeight) : maxCanvasHeight;
        const canvas = this.getFrontCanvas();
        if (canvasWidth == null) canvasWidth = canvas.width / devicePixelRatio;
        if (canvasWidth !== canvas.width || newHeight !== canvas.height) {
            this.setCanvasesSize(canvasWidth * devicePixelRatio, newHeight * devicePixelRatio);
            if (this.absoluteMode && this.adjustAbsoluteModeHeight) {
                this.offscreenFirstRow = null;
                this.offscreenLastRow = null;
            }
        }
    }
    //    ######## ##     ## ######## ##    ## ########  ######
    //    ##       ##     ## ##       ###   ##    ##    ##    ##
    //    ##       ##     ## ##       ####  ##    ##    ##
    //    ######   ##     ## ######   ## ## ##    ##     ######
    //    ##        ##   ##  ##       ##  ####    ##          ##
    //    ##         ## ##   ##       ##   ###    ##    ##    ##
    //    ########    ###    ######## ##    ##    ##     ######
    /**
   * Callback triggered when the mouse is pressed on the MinimapElement canvas.
   *
   * @param {number} y The vertical coordinate of the event
   * @param {boolean} isLeftMouse Was the left mouse button pressed?
   * @param {boolean} isMiddleMouse Was the middle mouse button pressed?
   * @access private
   */ canvasPressed({ y , isLeftMouse , isMiddleMouse  }) {
        if (this.minimap.isStandAlone()) return;
        if (isLeftMouse) this.canvasLeftMousePressed(y);
        else if (isMiddleMouse) {
            this.canvasMiddleMousePressed(y);
            const { top , height  } = this.visibleArea.getBoundingClientRect();
            this.startDrag({
                y: top + height / 2,
                isLeftMouse: false,
                isMiddleMouse: true
            });
        }
    }
    /**
   * Callback triggered when the mouse left button is pressed on the MinimapElement canvas.
   *
   * @param {MouseEvent} e The mouse event object
   * @param {number} e.pageY The mouse y position in page
   * @param {HTMLElement} e.target The source of the event
   * @access private
   */ canvasLeftMousePressed(y) {
        const deltaY = y - this.getBoundingClientRect().top;
        const row = Math.floor(deltaY / this.minimap.getLineHeight()) + this.minimap.getFirstVisibleScreenRow();
        const textEditor = this.minimap.getTextEditor();
        const textEditorElement = this.minimap.getTextEditorElement();
        const scrollTop = row * textEditor.getLineHeightInPixels() - this.minimap.getTextEditorHeight() / 2;
        const textEditorScrollTop = textEditorElement.pixelPositionForScreenPosition([
            row,
            0
        ]).top - this.minimap.getTextEditorHeight() / 2;
        if (atom.config.get("minimap.moveCursorOnMinimapClick")) textEditor.setCursorScreenPosition([
            row,
            0
        ]);
        if (atom.config.get("minimap.scrollAnimation")) {
            const duration = atom.config.get("minimap.scrollAnimationDuration");
            const independentScroll = this.minimap.scrollIndependentlyOnMouseWheel();
            const from = this.minimap.getTextEditorScrollTop();
            const to = textEditorScrollTop;
            let step;
            if (independentScroll) {
                const minimapFrom = this.minimap.getScrollTop();
                const minimapTo = Math.min(1, scrollTop / (this.minimap.getTextEditorMaxScrollTop() || 1)) * this.minimap.getMaxScrollTop();
                step = (now, t)=>{
                    if (this.minimap === null) return;
                     // TODO why this happens in the tests?
                    this.minimap.setTextEditorScrollTop(now, true);
                    this.minimap.setScrollTop(minimapFrom + (minimapTo - minimapFrom) * t);
                };
                animate({
                    from,
                    to,
                    duration,
                    step
                });
            } else {
                step = (now)=>{
                    if (this.minimap === null) return;
                     // TODO why this happens in the tests?
                    this.minimap.setTextEditorScrollTop(now);
                };
                animate({
                    from,
                    to,
                    duration,
                    step
                });
            }
        } else this.minimap.setTextEditorScrollTop(textEditorScrollTop);
    }
    /**
   * Callback triggered when the mouse middle button is pressed on the MinimapElement canvas.
   *
   * @param {MouseEvent} e The mouse event object
   * @param {number} e.pageY The mouse y position in page
   * @access private
   */ canvasMiddleMousePressed(y) {
        const { top: offsetTop  } = this.getBoundingClientRect();
        const deltaY = y - offsetTop - this.minimap.getTextEditorScaledHeight() / 2;
        const ratio = deltaY / (this.minimap.getVisibleHeight() - this.minimap.getTextEditorScaledHeight());
        this.minimap.setTextEditorScrollTop(ratio * this.minimap.getTextEditorMaxScrollTop());
    }
    /**
   * Subscribes to a media query for device pixel ratio changes and forces a repaint when it occurs.
   *
   * @returns {Disposable} A disposable to remove the media query listener
   * @access private
   */ subscribeToMediaQuery() {
        const mediaQuery = window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 1.5)");
        const mediaListener = ()=>{
            this.requestForcedUpdate();
        };
        mediaQuery.addEventListener("change", mediaListener);
        return new _atom.Disposable(()=>{
            mediaQuery.removeEventListener("change", mediaListener);
        });
    }
    //    ########    ####    ########
    //    ##     ##  ##  ##   ##     ##
    //    ##     ##   ####    ##     ##
    //    ##     ##  ####     ##     ##
    //    ##     ## ##  ## ## ##     ##
    //    ##     ## ##   ##   ##     ##
    //    ########   ####  ## ########
    /**
   * A method triggered when the mouse is pressed over the visible area that starts the dragging gesture.
   *
   * @param {number} y The vertical coordinate of the event
   * @param {boolean} isLeftMouse Was the left mouse button pressed?
   * @param {boolean} isMiddleMouse Was the middle mouse button pressed?
   * @access private
   */ startDrag({ y , isLeftMouse , isMiddleMouse  }) {
        if (!this.minimap) return;
        if (!isLeftMouse && !isMiddleMouse) return;
        const initial = {
            dragOffset: y - this.visibleArea.getBoundingClientRect().top,
            offsetTop: this.getBoundingClientRect().top
        };
        // TODO can we avoid adding and removing the listeners every time?
        const mousemoveHandler = (e)=>this.drag(extractMouseEventData(e), initial)
        ;
        const dragendHandler = ()=>this.endDrag()
        ;
        const touchmoveHandler = (e)=>this.drag(extractTouchEventData(e), initial)
        ;
        document.body.addEventListener("mousemove", mousemoveHandler, {
            passive: true
        });
        document.body.addEventListener("mouseup", dragendHandler, {
            passive: true
        });
        document.body.addEventListener("mouseleave", dragendHandler, {
            passive: true
        });
        document.body.addEventListener("touchmove", touchmoveHandler, {
            passive: true
        });
        document.body.addEventListener("touchend", dragendHandler, {
            passive: true
        });
        document.body.addEventListener("touchcancel", dragendHandler, {
            passive: true
        });
        this.dragSubscription = new _atom.Disposable(function() {
            document.body.removeEventListener("mousemove", mousemoveHandler);
            document.body.removeEventListener("mouseup", dragendHandler);
            document.body.removeEventListener("mouseleave", dragendHandler);
            document.body.removeEventListener("touchmove", touchmoveHandler);
            document.body.removeEventListener("touchend", dragendHandler);
            document.body.removeEventListener("touchcancel", dragendHandler);
        });
    }
    /**
   * The method called during the drag gesture.
   *
   * @param {number} y The vertical coordinate of the event
   * @param {boolean} isLeftMouse Was the left mouse button pressed?
   * @param {boolean} isMiddleMouse Was the middle mouse button pressed?
   * @param {number} initial.dragOffset The mouse offset within the visible area
   * @param {number} initial.offsetTop The MinimapElement offset at the moment of the drag start
   * @access private
   */ drag({ y , isLeftMouse , isMiddleMouse  }, initial) {
        if (!this.minimap) return;
        if (!isLeftMouse && !isMiddleMouse) return;
        const deltaY = y - initial.offsetTop - initial.dragOffset;
        const ratio = deltaY / (this.minimap.getVisibleHeight() - this.minimap.getTextEditorScaledHeight());
        this.minimap.setTextEditorScrollTop(ratio * this.minimap.getTextEditorMaxScrollTop());
    }
    /**
   * The method that ends the drag gesture.
   *
   * @access private
   */ endDrag() {
        if (!this.minimap) return;
        this.dragSubscription.dispose();
    }
}
MinimapElement.initClass();
function createMinimapElement() {
    const element = document.createElement(TAG_NAME);
    element.createdCallback();
    return element;
}
//    ######## ##     ## ######## ##    ## ########  ######
//    ##       ##     ## ##       ###   ##    ##    ##    ##
//    ##       ##     ## ##       ####  ##    ##    ##
//    ######   ##     ## ######   ## ## ##    ##     ######
//    ##        ##   ##  ##       ##  ####    ##          ##
//    ##         ## ##   ##       ##   ###    ##    ##    ##
//    ########    ###    ######## ##    ##    ##     ######
/**
 * A method that extracts data from a `MouseEvent` which can then be used to process clicks and drags of the minimap.
 *
 * Used together with `extractTouchEventData` to provide a unified interface for `MouseEvent`s and `TouchEvent`s.
 *
 * @param {MouseEvent} mouseEvent The mouse event object
 * @access private
 */ function extractMouseEventData(mouseEvent) {
    return {
        x: mouseEvent.pageX,
        y: mouseEvent.pageY,
        isLeftMouse: mouseEvent.button === 0,
        isMiddleMouse: mouseEvent.button === 1
    };
}
/**
 * A method that extracts data from a `TouchEvent` which can then be used to process clicks and drags of the minimap.
 *
 * Used together with `extractMouseEventData` to provide a unified interface for `MouseEvent`s and `TouchEvent`s.
 *
 * @param {TouchEvent} touchEvent The touch event object
 * @access private
 */ function extractTouchEventData(touchEvent) {
    // Use the first touch on the target area. Other touches will be ignored in
    // case of multi-touch.
    const touch = touchEvent.changedTouches[0];
    return {
        x: touch.pageX,
        y: touch.pageY,
        isLeftMouse: true,
        isMiddleMouse: false
    };
}
//     ######   ######   ######
//    ##    ## ##    ## ##    ##
//    ##       ##       ##
//    ##        ######   ######
//    ##             ##       ##
//    ##    ## ##    ## ##    ##
//     ######   ######   ######
/**
 * Applies the passed-in styles properties to the specified element
 *
 * @param {HTMLElement} element The element onto which apply the styles
 * @param {Object} styles The styles to apply
 * @access private
 */ function applyStyles(element, styles) {
    if (!element) return;
    let cssText = "";
    for(const property in styles)cssText += `${property}: ${styles[property]}; `;
    element.style.cssText = cssText;
}
/**
 * Returns a string with a CSS translation tranform value.
 *
 * @param {number} [x=0] The x offset of the translation. Default is `0`
 * @param {number} [y=0] The y offset of the translation. Default is `0`
 * @param {boolean} [useHardwareAcceleration=false] Use hardware acceleration. Default is `false`
 * @returns {string} The CSS translation string
 * @access private
 */ function makeTranslate(x = 0, y = 0, useHardwareAcceleration = false) {
    if (useHardwareAcceleration) return `translate3d(${x}px, ${y}px, 0)`;
    else return `translate(${x}px, ${y}px)`;
}
/**
 * Returns a string with a CSS scaling tranform value.
 *
 * @param {number} [x=0] The x scaling factor. Default is `0`
 * @param {number} [y=0] The y scaling factor. Default is `0`
 * @param {boolean} [useHardwareAcceleration=false] Use hardware acceleration. Default is `false`
 * @returns {string} The CSS scaling string
 * @access private
 */ function makeScale(x = 0, y = x, useHardwareAcceleration = false) {
    if (useHardwareAcceleration) return `scale3d(${x}, ${y}, 1)`;
    else return `scale(${x}, ${y})`;
}
/**
 * A method that mimic the jQuery `animate` method and used to animate the scroll when clicking on the MinimapElement canvas.
 *
 * @param {Object} param The animation data object
 * @param {[type]} param.from The start value
 * @param {[type]} param.to The end value
 * @param {[type]} param.duration The animation duration
 * @param {[type]} param.step The easing function for the animation
 * @access private
 */ function animate({ from , to , duration , step  }) {
    const start = getTime();
    let progress;
    const update = ()=>{
        const passed = getTime() - start;
        if (duration === 0) progress = 1;
        else progress = passed / duration;
        if (progress > 1) progress = 1;
        const delta = swing(progress);
        const value = from + (to - from) * delta;
        step(value, delta);
        if (progress < 1) requestAnimationFrame(update);
    };
    update();
}
function swing(progress) {
    return 0.5 - Math.cos(progress * Math.PI) / 2;
}
/**
 * A method that return the current time as a Date.
 *
 * That method exist so that we can mock it in tests.
 *
 * @returns {Date} The current time as Date
 * @access private
 */ function getTime() {
    return new Date();
}

},{"atom-utils-plus":"4lKBF","element-resize-detector":"abU85","./decoration-management":"lETdl","./main":"lUIf1","./mixins/canvas-drawer":"6jfaY","./decorators/include":"73QcF","./decorators/element":"dpbCf","./minimap-quick-settings-element":"6CRRj","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"4lKBF":[function(require,module,exports) {
// Generated by CoffeeScript 2.5.1
(function() {
    module.exports = {
        requirePackages: function(...packages) {
            return new Promise(function(resolve, reject) {
                var failures, remains, required, solved;
                required = [];
                failures = [];
                remains = packages.length;
                solved = function() {
                    remains--;
                    if (remains !== 0) return;
                    if (failures.length > 0) return reject(failures);
                    return resolve(required);
                };
                return packages.forEach(function(pkg, i) {
                    var failHandler, promise;
                    failHandler = function(reason) {
                        failures[i] = reason;
                        return solved();
                    };
                    promise = atom.packages.activatePackage(pkg).then(function(activatedPackage) {
                        required[i] = activatedPackage.mainModule;
                        return solved();
                    });
                    if (promise.fail != null) return promise.fail(failHandler);
                    else if (promise.catch != null) return promise.catch(failHandler);
                });
            });
        },
        registerOrUpdateElement: require('./register-or-update-element'),
        Ancestors: require('./mixins/ancestors'),
        AncestorsMethods: require('./mixins/ancestors'),
        DisposableEvents: require('./mixins/disposable-events'),
        EventsDelegation: require('./mixins/events-delegation'),
        SpacePenDSL: require('./mixins/space-pen-dsl')
    };
}).call(this); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsibGliL2F0b20tdXRpbHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxlQUFBLEVBQWlCLFFBQUEsQ0FBQSxHQUFDLFFBQUQsQ0FBQTthQUNmLElBQUksT0FBSixDQUFZLFFBQUEsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUFBO0FBQ2hCLFlBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUE7UUFBTSxRQUFBLEdBQVc7UUFDWCxRQUFBLEdBQVc7UUFDWCxPQUFBLEdBQVUsUUFBUSxDQUFDO1FBRW5CLE1BQUEsR0FBUyxRQUFBLENBQUEsQ0FBQTtVQUNQLE9BQUE7VUFDQSxJQUFjLE9BQUEsS0FBVyxDQUF6QjtBQUFBLG1CQUFBOztVQUNBLElBQTJCLFFBQVEsQ0FBQyxNQUFULEdBQWtCLENBQTdDO0FBQUEsbUJBQU8sTUFBQSxDQUFPLFFBQVAsRUFBUDs7aUJBQ0EsT0FBQSxDQUFRLFFBQVI7UUFKTztlQU1ULFFBQVEsQ0FBQyxPQUFULENBQWlCLFFBQUEsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUFBO0FBQ3ZCLGNBQUEsV0FBQSxFQUFBO1VBQVEsV0FBQSxHQUFjLFFBQUEsQ0FBQyxNQUFELENBQUE7WUFDWixRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWM7bUJBQ2QsTUFBQSxDQUFBO1VBRlk7VUFJZCxPQUFBLEdBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLEdBQTlCLENBQ1YsQ0FBQyxJQURTLENBQ0osUUFBQSxDQUFDLGdCQUFELENBQUE7WUFDSixRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWMsZ0JBQWdCLENBQUM7bUJBQy9CLE1BQUEsQ0FBQTtVQUZJLENBREk7VUFLVixJQUFHLG9CQUFIO21CQUNFLE9BQU8sQ0FBQyxJQUFSLENBQWEsV0FBYixFQURGO1dBQUEsTUFFSyxJQUFHLHFCQUFIO21CQUNILE9BQU8sQ0FBQyxLQUFSLENBQWMsV0FBZCxFQURHOztRQVpVLENBQWpCO01BWFUsQ0FBWjtJQURlLENBQWpCO0lBMkJBLHVCQUFBLEVBQXlCLE9BQUEsQ0FBUSw4QkFBUixDQTNCekI7SUE0QkEsU0FBQSxFQUFXLE9BQUEsQ0FBUSxvQkFBUixDQTVCWDtJQTZCQSxnQkFBQSxFQUFrQixPQUFBLENBQVEsb0JBQVIsQ0E3QmxCO0lBOEJBLGdCQUFBLEVBQWtCLE9BQUEsQ0FBUSw0QkFBUixDQTlCbEI7SUErQkEsZ0JBQUEsRUFBa0IsT0FBQSxDQUFRLDRCQUFSLENBL0JsQjtJQWdDQSxXQUFBLEVBQWEsT0FBQSxDQUFRLHdCQUFSO0VBaENiO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1vZHVsZS5leHBvcnRzID1cbiAgcmVxdWlyZVBhY2thZ2VzOiAocGFja2FnZXMuLi4pIC0+XG4gICAgbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgIHJlcXVpcmVkID0gW11cbiAgICAgIGZhaWx1cmVzID0gW11cbiAgICAgIHJlbWFpbnMgPSBwYWNrYWdlcy5sZW5ndGhcblxuICAgICAgc29sdmVkID0gLT5cbiAgICAgICAgcmVtYWlucy0tXG4gICAgICAgIHJldHVybiB1bmxlc3MgcmVtYWlucyBpcyAwXG4gICAgICAgIHJldHVybiByZWplY3QoZmFpbHVyZXMpIGlmIGZhaWx1cmVzLmxlbmd0aCA+IDBcbiAgICAgICAgcmVzb2x2ZShyZXF1aXJlZClcblxuICAgICAgcGFja2FnZXMuZm9yRWFjaCAocGtnLCBpKSAtPlxuICAgICAgICBmYWlsSGFuZGxlciA9IChyZWFzb24pIC0+XG4gICAgICAgICAgZmFpbHVyZXNbaV0gPSByZWFzb25cbiAgICAgICAgICBzb2x2ZWQoKVxuXG4gICAgICAgIHByb21pc2UgPSBhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZShwa2cpXG4gICAgICAgIC50aGVuIChhY3RpdmF0ZWRQYWNrYWdlKSAtPlxuICAgICAgICAgIHJlcXVpcmVkW2ldID0gYWN0aXZhdGVkUGFja2FnZS5tYWluTW9kdWxlXG4gICAgICAgICAgc29sdmVkKClcblxuICAgICAgICBpZiBwcm9taXNlLmZhaWw/XG4gICAgICAgICAgcHJvbWlzZS5mYWlsKGZhaWxIYW5kbGVyKVxuICAgICAgICBlbHNlIGlmIHByb21pc2UuY2F0Y2g/XG4gICAgICAgICAgcHJvbWlzZS5jYXRjaChmYWlsSGFuZGxlcilcblxuICByZWdpc3Rlck9yVXBkYXRlRWxlbWVudDogcmVxdWlyZSAnLi9yZWdpc3Rlci1vci11cGRhdGUtZWxlbWVudCdcbiAgQW5jZXN0b3JzOiByZXF1aXJlICcuL21peGlucy9hbmNlc3RvcnMnXG4gIEFuY2VzdG9yc01ldGhvZHM6IHJlcXVpcmUgJy4vbWl4aW5zL2FuY2VzdG9ycydcbiAgRGlzcG9zYWJsZUV2ZW50czogcmVxdWlyZSAnLi9taXhpbnMvZGlzcG9zYWJsZS1ldmVudHMnXG4gIEV2ZW50c0RlbGVnYXRpb246IHJlcXVpcmUgJy4vbWl4aW5zL2V2ZW50cy1kZWxlZ2F0aW9uJ1xuICBTcGFjZVBlbkRTTDogcmVxdWlyZSAnLi9taXhpbnMvc3BhY2UtcGVuLWRzbCdcbiJdfQ==
 //# sourceURL=/home/runner/work/atom-utils-plus/atom-utils-plus/lib/atom-utils.coffee

},{"./register-or-update-element":"3QzPW","./mixins/ancestors":"c8dmi","./mixins/disposable-events":"cBmEO","./mixins/events-delegation":"48bk7","./mixins/space-pen-dsl":"cVzTZ"}],"3QzPW":[function(require,module,exports) {
// Generated by CoffeeScript 2.5.1
(function() {
    var callbackProperties, decorateElementClass, decorateElementPrototype, deprecate;
    ({ deprecate  } = require('grim'));
    if (global.__CUSTOM_HTML_ELEMENTS_CLASSES__ != null) {
        global.__ATOM_UTILS_CUSTOM_ELEMENT_CLASSES__ = global.__CUSTOM_HTML_ELEMENTS_CLASSES__;
        delete global.__CUSTOM_HTML_ELEMENTS_CLASSES__;
    } else if (global.__ATOM_UTILS_CUSTOM_ELEMENT_CLASSES__ == null) global.__ATOM_UTILS_CUSTOM_ELEMENT_CLASSES__ = {
    };
    callbackProperties = [
        'createdCallback',
        'attachedCallback',
        'detachedCallback',
        'attributeChangedCallback'
    ];
    decorateElementPrototype = function(target, source) {
        callbackProperties.forEach(function(k) {
            return Object.defineProperty(target, k, {
                value: function() {
                    var ref;
                    return (ref = this[`__${k}`]) != null ? ref.apply(this, arguments) : void 0;
                },
                writable: true,
                enumerable: true,
                configurable: true
            });
        });
        return Object.getOwnPropertyNames(source).forEach(function(k) {
            var descriptor;
            if (k === 'constructor') return;
            descriptor = Object.getOwnPropertyDescriptor(source, k);
            if (callbackProperties.indexOf(k) > -1) return Object.defineProperty(target, `__${k}`, descriptor);
            else return Object.defineProperty(target, k, descriptor);
        });
    };
    decorateElementClass = function(target, source) {
        return Object.getOwnPropertyNames(source).forEach(function(k) {
            var descriptor;
            if (k === 'length' || k === 'name' || k === 'arguments' || k === 'caller' || k === 'prototype') return;
            descriptor = Object.getOwnPropertyDescriptor(source, k);
            return Object.defineProperty(target, k, descriptor);
        });
    };
    module.exports = function(nodeName, options) {
        var elementClass, elementPrototype, klass, proto, ref;
        ({ class: klass  } = options);
        if (klass != null) proto = klass.prototype;
        else proto = (ref = options.prototype) != null ? ref : options;
        if (proto === options) deprecate('Using the prototype as the second argument is deprecated, use the prototype option instead');
        if (__ATOM_UTILS_CUSTOM_ELEMENT_CLASSES__[nodeName]) {
            elementClass = __ATOM_UTILS_CUSTOM_ELEMENT_CLASSES__[nodeName];
            decorateElementPrototype(elementClass.prototype, proto);
            if (klass != null) decorateElementClass(elementClass, klass);
            return elementClass;
        } else {
            elementPrototype = Object.create(HTMLElement.prototype);
            decorateElementPrototype(elementPrototype, proto);
            elementClass = document.registerElement(nodeName, {
                prototype: Object.create(elementPrototype)
            });
            if (klass != null) decorateElementClass(elementClass, klass);
            return __ATOM_UTILS_CUSTOM_ELEMENT_CLASSES__[nodeName] = elementClass;
        }
    };
}).call(this); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItb3ItdXBkYXRlLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImxpYi9yZWdpc3Rlci1vci11cGRhdGUtZWxlbWVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUEsTUFBQSxrQkFBQSxFQUFBLG9CQUFBLEVBQUEsd0JBQUEsRUFBQTs7RUFBQSxDQUFBLENBQUMsU0FBRCxDQUFBLEdBQWMsT0FBQSxDQUFRLE1BQVIsQ0FBZDs7RUFFQSxJQUFHLCtDQUFIO0lBQ0UsTUFBTSxDQUFDLHFDQUFQLEdBQStDLE1BQU0sQ0FBQztJQUN0RCxPQUFPLE1BQU0sQ0FBQyxpQ0FGaEI7R0FBQSxNQUFBOztNQUlFLE1BQU0sQ0FBQyx3Q0FBeUMsQ0FBQTtLQUpsRDs7O0VBTUEsa0JBQUEsR0FBcUIsQ0FDbkIsaUJBRG1CLEVBRW5CLGtCQUZtQixFQUduQixrQkFIbUIsRUFJbkIsMEJBSm1COztFQU9yQix3QkFBQSxHQUEyQixRQUFBLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBQTtJQUN6QixrQkFBa0IsQ0FBQyxPQUFuQixDQUEyQixRQUFBLENBQUMsQ0FBRCxDQUFBO2FBQ3pCLE1BQU0sQ0FBQyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLENBQTlCLEVBQWlDO1FBQy9CLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUFFLGNBQUE7cURBQVksQ0FBRSxLQUFiLENBQW1CLElBQW5CLEVBQXlCLFNBQXpCO1FBQUgsQ0FEd0I7UUFFL0IsUUFBQSxFQUFVLElBRnFCO1FBRy9CLFVBQUEsRUFBWSxJQUhtQjtRQUkvQixZQUFBLEVBQWM7TUFKaUIsQ0FBakM7SUFEeUIsQ0FBM0I7V0FRQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBa0MsQ0FBQyxPQUFuQyxDQUEyQyxRQUFBLENBQUMsQ0FBRCxDQUFBO0FBQzdDLFVBQUE7TUFBSSxJQUFVLE1BQU0sYUFBaEI7QUFBQSxlQUFBOztNQUVBLFVBQUEsR0FBYSxNQUFNLENBQUMsd0JBQVAsQ0FBZ0MsTUFBaEMsRUFBd0MsQ0FBeEM7TUFDYixJQUFHLGtCQUFrQixDQUFDLE9BQW5CLENBQTJCLENBQTNCLENBQUEsR0FBZ0MsQ0FBQyxDQUFwQztlQUNFLE1BQU0sQ0FBQyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLENBQUEsRUFBQSxDQUFBLENBQUssQ0FBTCxDQUFBLENBQTlCLEVBQXdDLFVBQXhDLEVBREY7T0FBQSxNQUFBO2VBR0UsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsQ0FBOUIsRUFBaUMsVUFBakMsRUFIRjs7SUFKeUMsQ0FBM0M7RUFUeUI7O0VBa0IzQixvQkFBQSxHQUF1QixRQUFBLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBQTtXQUNyQixNQUFNLENBQUMsbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBa0MsQ0FBQyxPQUFuQyxDQUEyQyxRQUFBLENBQUMsQ0FBRCxDQUFBO0FBQzdDLFVBQUE7TUFBSSxJQUFVLE1BQU0sWUFBTixNQUFnQixVQUFoQixNQUF3QixlQUF4QixNQUFxQyxZQUFyQyxNQUErQyxXQUF6RDtBQUFBLGVBQUE7O01BRUEsVUFBQSxHQUFhLE1BQU0sQ0FBQyx3QkFBUCxDQUFnQyxNQUFoQyxFQUF3QyxDQUF4QzthQUNiLE1BQU0sQ0FBQyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLENBQTlCLEVBQWlDLFVBQWpDO0lBSnlDLENBQTNDO0VBRHFCOztFQU92QixNQUFNLENBQUMsT0FBUCxHQUFpQixRQUFBLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBQTtBQUNqQixRQUFBLFlBQUEsRUFBQSxnQkFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7SUFBRSxDQUFBO01BQUMsS0FBQSxFQUFPO0lBQVIsQ0FBQSxHQUFpQixPQUFqQjtJQUNBLElBQUcsYUFBSDtNQUNFLEtBQUEsR0FBUSxLQUFLLENBQUMsVUFEaEI7S0FBQSxNQUFBO01BR0UsS0FBQSw2Q0FBNEIsUUFIOUI7O0lBS0EsSUFBRyxLQUFBLEtBQVMsT0FBWjtNQUNFLFNBQUEsQ0FBVSw0RkFBVixFQURGOztJQUlBLElBQUcscUNBQXFDLENBQUMsUUFBRCxDQUF4QztNQUNFLFlBQUEsR0FBZSxxQ0FBcUMsQ0FBQyxRQUFEO01BRXBELHdCQUFBLENBQXlCLFlBQVksQ0FBQyxTQUF0QyxFQUFpRCxLQUFqRDtNQUNBLElBQTZDLGFBQTdDO1FBQUEsb0JBQUEsQ0FBcUIsWUFBckIsRUFBbUMsS0FBbkMsRUFBQTs7YUFFQSxhQU5GO0tBQUEsTUFBQTtNQVFFLGdCQUFBLEdBQW1CLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBVyxDQUFDLFNBQTFCO01BQ25CLHdCQUFBLENBQXlCLGdCQUF6QixFQUEyQyxLQUEzQztNQUVBLFlBQUEsR0FBZSxRQUFRLENBQUMsZUFBVCxDQUF5QixRQUF6QixFQUFtQztRQUFBLFNBQUEsRUFBVyxNQUFNLENBQUMsTUFBUCxDQUFjLGdCQUFkO01BQVgsQ0FBbkM7TUFFZixJQUE2QyxhQUE3QztRQUFBLG9CQUFBLENBQXFCLFlBQXJCLEVBQW1DLEtBQW5DLEVBQUE7O2FBRUEscUNBQXFDLENBQUMsUUFBRCxDQUFyQyxHQUFrRCxhQWZwRDs7RUFYZTtBQXhDakIiLCJzb3VyY2VzQ29udGVudCI6WyJ7ZGVwcmVjYXRlfSA9IHJlcXVpcmUgJ2dyaW0nXG5cbmlmIGdsb2JhbC5fX0NVU1RPTV9IVE1MX0VMRU1FTlRTX0NMQVNTRVNfXz9cbiAgZ2xvYmFsLl9fQVRPTV9VVElMU19DVVNUT01fRUxFTUVOVF9DTEFTU0VTX18gPSBnbG9iYWwuX19DVVNUT01fSFRNTF9FTEVNRU5UU19DTEFTU0VTX19cbiAgZGVsZXRlIGdsb2JhbC5fX0NVU1RPTV9IVE1MX0VMRU1FTlRTX0NMQVNTRVNfX1xuZWxzZVxuICBnbG9iYWwuX19BVE9NX1VUSUxTX0NVU1RPTV9FTEVNRU5UX0NMQVNTRVNfXyA/PSB7fVxuXG5jYWxsYmFja1Byb3BlcnRpZXMgPSBbXG4gICdjcmVhdGVkQ2FsbGJhY2snXG4gICdhdHRhY2hlZENhbGxiYWNrJ1xuICAnZGV0YWNoZWRDYWxsYmFjaydcbiAgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaydcbl1cblxuZGVjb3JhdGVFbGVtZW50UHJvdG90eXBlID0gKHRhcmdldCwgc291cmNlKSAtPlxuICBjYWxsYmFja1Byb3BlcnRpZXMuZm9yRWFjaCAoaykgLT5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGFyZ2V0LCBrLCB7XG4gICAgICB2YWx1ZTogLT4gQFtcIl9fI3trfVwiXT8uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cblxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2ggKGspIC0+XG4gICAgcmV0dXJuIGlmIGsgaW4gWydjb25zdHJ1Y3RvciddXG5cbiAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGspXG4gICAgaWYgY2FsbGJhY2tQcm9wZXJ0aWVzLmluZGV4T2YoaykgPiAtMVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgXCJfXyN7a31cIiwgZGVzY3JpcHRvcilcbiAgICBlbHNlXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrLCBkZXNjcmlwdG9yKVxuXG5kZWNvcmF0ZUVsZW1lbnRDbGFzcyA9ICh0YXJnZXQsIHNvdXJjZSkgLT5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoIChrKSAtPlxuICAgIHJldHVybiBpZiBrIGluIFsnbGVuZ3RoJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2NhbGxlcicsICdwcm90b3R5cGUnXVxuXG4gICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrKVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGssIGRlc2NyaXB0b3IpXG5cbm1vZHVsZS5leHBvcnRzID0gKG5vZGVOYW1lLCBvcHRpb25zKSAtPlxuICB7Y2xhc3M6IGtsYXNzfSA9IG9wdGlvbnNcbiAgaWYga2xhc3M/XG4gICAgcHJvdG8gPSBrbGFzcy5wcm90b3R5cGVcbiAgZWxzZVxuICAgIHByb3RvID0gb3B0aW9ucy5wcm90b3R5cGUgPyBvcHRpb25zXG5cbiAgaWYgcHJvdG8gaXMgb3B0aW9uc1xuICAgIGRlcHJlY2F0ZSgnVXNpbmcgdGhlIHByb3RvdHlwZSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGRlcHJlY2F0ZWQsIHVzZSB0aGUgcHJvdG90eXBlIG9wdGlvbiBpbnN0ZWFkJylcblxuXG4gIGlmIF9fQVRPTV9VVElMU19DVVNUT01fRUxFTUVOVF9DTEFTU0VTX19bbm9kZU5hbWVdXG4gICAgZWxlbWVudENsYXNzID0gX19BVE9NX1VUSUxTX0NVU1RPTV9FTEVNRU5UX0NMQVNTRVNfX1tub2RlTmFtZV1cblxuICAgIGRlY29yYXRlRWxlbWVudFByb3RvdHlwZShlbGVtZW50Q2xhc3MucHJvdG90eXBlLCBwcm90bylcbiAgICBkZWNvcmF0ZUVsZW1lbnRDbGFzcyhlbGVtZW50Q2xhc3MsIGtsYXNzKSBpZiBrbGFzcz9cblxuICAgIGVsZW1lbnRDbGFzc1xuICBlbHNlXG4gICAgZWxlbWVudFByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKVxuICAgIGRlY29yYXRlRWxlbWVudFByb3RvdHlwZShlbGVtZW50UHJvdG90eXBlLCBwcm90bylcblxuICAgIGVsZW1lbnRDbGFzcyA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCBub2RlTmFtZSwgcHJvdG90eXBlOiBPYmplY3QuY3JlYXRlKGVsZW1lbnRQcm90b3R5cGUpXG5cbiAgICBkZWNvcmF0ZUVsZW1lbnRDbGFzcyhlbGVtZW50Q2xhc3MsIGtsYXNzKSBpZiBrbGFzcz9cblxuICAgIF9fQVRPTV9VVElMU19DVVNUT01fRUxFTUVOVF9DTEFTU0VTX19bbm9kZU5hbWVdID0gZWxlbWVudENsYXNzXG4iXX0=
 //# sourceURL=/home/runner/work/atom-utils-plus/atom-utils-plus/lib/register-or-update-element.coffee

},{"grim":"fsP5V"}],"fsP5V":[function(require,module,exports) {
(function() {
    var Deprecation, Emitter, getRawStack, grim;
    Deprecation = require('./deprecation');
    if (global.__grim__ == null) {
        Emitter = require('event-kit').Emitter;
        grim = global.__grim__ = {
            deprecations: {
            },
            emitter: new Emitter,
            includeDeprecatedAPIs: true,
            getDeprecations: function() {
                var deprecation, deprecations, deprecationsByLineNumber, deprecationsByPackage, fileName, lineNumber, packageName, _ref;
                deprecations = [];
                _ref = grim.deprecations;
                for(fileName in _ref){
                    deprecationsByLineNumber = _ref[fileName];
                    for(lineNumber in deprecationsByLineNumber){
                        deprecationsByPackage = deprecationsByLineNumber[lineNumber];
                        for(packageName in deprecationsByPackage){
                            deprecation = deprecationsByPackage[packageName];
                            deprecations.push(deprecation);
                        }
                    }
                }
                return deprecations;
            },
            getDeprecationsLength: function() {
                return this.getDeprecations().length;
            },
            clearDeprecations: function() {
                grim.deprecations = {
                };
            },
            logDeprecations: function() {
                var deprecation, deprecations, _i, _len;
                deprecations = this.getDeprecations();
                deprecations.sort(function(a, b) {
                    return b.getCallCount() - a.getCallCount();
                });
                console.warn("\nCalls to deprecated functions\n-----------------------------");
                for(_i = 0, _len = deprecations.length; _i < _len; _i++){
                    deprecation = deprecations[_i];
                    console.warn("(" + deprecation.getCallCount() + ") " + deprecation.getOriginName() + " : " + deprecation.getMessage(), deprecation);
                }
            },
            deprecate: function(message, metadata) {
                var deprecation, deprecationSite, error, fileName, lineNumber, originalStackTraceLimit, packageName, stack, _base, _base1, _base2, _ref, _ref1;
                originalStackTraceLimit = Error.stackTraceLimit;
                try {
                    Error.stackTraceLimit = 7;
                    error = new Error;
                    stack = (_ref = typeof error.getRawStack === "function" ? error.getRawStack() : void 0) != null ? _ref : getRawStack(error);
                    stack = stack.slice(1);
                } finally{
                    Error.stackTraceLimit = originalStackTraceLimit;
                }
                deprecationSite = stack[0];
                fileName = deprecationSite.getFileName();
                lineNumber = deprecationSite.getLineNumber();
                packageName = (_ref1 = metadata != null ? metadata.packageName : void 0) != null ? _ref1 : "";
                if ((_base = grim.deprecations)[fileName] == null) _base[fileName] = {
                };
                if ((_base1 = grim.deprecations[fileName])[lineNumber] == null) _base1[lineNumber] = {
                };
                if ((_base2 = grim.deprecations[fileName][lineNumber])[packageName] == null) _base2[packageName] = new Deprecation(message);
                deprecation = grim.deprecations[fileName][lineNumber][packageName];
                deprecation.addStack(stack, metadata);
                grim.emitter.emit("updated", deprecation);
            },
            addSerializedDeprecation: function(serializedDeprecation) {
                var deprecation, fileName, lineNumber, message, packageName, stack, stacks, _base, _base1, _base2, _i, _len, _ref, _ref1, _ref2;
                deprecation = Deprecation.deserialize(serializedDeprecation);
                message = deprecation.getMessage();
                fileName = deprecation.fileName, lineNumber = deprecation.lineNumber;
                stacks = deprecation.getStacks();
                packageName = (_ref = (_ref1 = stacks[0]) != null ? (_ref2 = _ref1.metadata) != null ? _ref2.packageName : void 0 : void 0) != null ? _ref : "";
                if ((_base = grim.deprecations)[fileName] == null) _base[fileName] = {
                };
                if ((_base1 = grim.deprecations[fileName])[lineNumber] == null) _base1[lineNumber] = {
                };
                if ((_base2 = grim.deprecations[fileName][lineNumber])[packageName] == null) _base2[packageName] = new Deprecation(message, fileName, lineNumber);
                deprecation = grim.deprecations[fileName][lineNumber][packageName];
                for(_i = 0, _len = stacks.length; _i < _len; _i++){
                    stack = stacks[_i];
                    deprecation.addStack(stack, stack.metadata);
                }
                grim.emitter.emit("updated", deprecation);
            },
            on: function(eventName, callback) {
                return grim.emitter.on(eventName, callback);
            }
        };
    }
    getRawStack = function(error) {
        var originalPrepareStackTrace, result;
        originalPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = function(error1, stack) {
            return stack;
        };
        Error.captureStackTrace(error, getRawStack);
        result = error.stack;
        Error.prepareStackTrace = originalPrepareStackTrace;
        return result;
    };
    module.exports = global.__grim__;
}).call(this);

},{"./deprecation":"6g4Dh","event-kit":"12WST"}],"6g4Dh":[function(require,module,exports) {
(function() {
    var Deprecation1, SourceMapCache;
    SourceMapCache = {
    };
    module.exports = Deprecation1 = (function() {
        Deprecation2.getFunctionNameFromCallsite = function(callsite) {
        };
        Deprecation2.deserialize = function(_arg) {
            var deprecation, fileName, lineNumber, message, stack, stacks, _i, _len;
            message = _arg.message, fileName = _arg.fileName, lineNumber = _arg.lineNumber, stacks = _arg.stacks;
            deprecation = new Deprecation2(message, fileName, lineNumber);
            for(_i = 0, _len = stacks.length; _i < _len; _i++){
                stack = stacks[_i];
                deprecation.addStack(stack, stack.metadata);
            }
            return deprecation;
        };
        function Deprecation2(message, fileName, lineNumber) {
            this.message = message;
            this.fileName = fileName;
            this.lineNumber = lineNumber;
            this.callCount = 0;
            this.stackCount = 0;
            this.stacks = {
            };
            this.stackCallCounts = {
            };
        }
        Deprecation2.prototype.getFunctionNameFromCallsite = function(callsite) {
            var _ref, _ref1, _ref2;
            if (callsite.functionName != null) return callsite.functionName;
            if (callsite.isToplevel()) return (_ref = callsite.getFunctionName()) != null ? _ref : '<unknown>';
            else {
                if (callsite.isConstructor()) return "new " + callsite.getFunctionName();
                else if (callsite.getMethodName() && !callsite.getFunctionName()) return callsite.getMethodName();
                else return "" + callsite.getTypeName() + "." + ((_ref1 = (_ref2 = callsite.getMethodName()) != null ? _ref2 : callsite.getFunctionName()) != null ? _ref1 : '<anonymous>');
            }
        };
        Deprecation2.prototype.getLocationFromCallsite = function(callsite) {
            var column, fileName, line;
            if (callsite == null) return "unknown";
            if (callsite.location != null) return callsite.location;
            if (callsite.isNative()) return "native";
            else if (callsite.isEval()) return "eval at " + this.getLocationFromCallsite(callsite.getEvalOrigin());
            else {
                fileName = callsite.getFileName();
                line = callsite.getLineNumber();
                column = callsite.getColumnNumber();
                return "" + fileName + ":" + line + ":" + column;
            }
        };
        Deprecation2.prototype.getFileNameFromCallSite = function(callsite) {
            var _ref;
            return (_ref = callsite.fileName) != null ? _ref : callsite.getFileName();
        };
        Deprecation2.prototype.getOriginName = function() {
            return this.originName;
        };
        Deprecation2.prototype.getMessage = function() {
            return this.message;
        };
        Deprecation2.prototype.getStacks = function() {
            var location, parsedStack, parsedStacks, stack, _ref;
            parsedStacks = [];
            _ref = this.stacks;
            for(location in _ref){
                stack = _ref[location];
                parsedStack = this.parseStack(stack);
                parsedStack.callCount = this.stackCallCounts[location];
                parsedStack.metadata = stack.metadata;
                parsedStacks.push(parsedStack);
            }
            return parsedStacks;
        };
        Deprecation2.prototype.getStackCount = function() {
            return this.stackCount;
        };
        Deprecation2.prototype.getCallCount = function() {
            return this.callCount;
        };
        Deprecation2.prototype.addStack = function(stack, metadata) {
            var callerLocation, _base, _base1;
            if (this.originName == null) this.originName = this.getFunctionNameFromCallsite(stack[0]);
            if (this.fileName == null) this.fileName = this.getFileNameFromCallSite(stack[0]);
            if (this.lineNumber == null) this.lineNumber = typeof (_base = stack[0]).getLineNumber === "function" ? _base.getLineNumber() : void 0;
            this.callCount++;
            stack.metadata = metadata;
            callerLocation = this.getLocationFromCallsite(stack[1]);
            if (this.stacks[callerLocation] == null) {
                this.stacks[callerLocation] = stack;
                this.stackCount++;
            }
            if ((_base1 = this.stackCallCounts)[callerLocation] == null) _base1[callerLocation] = 0;
            return this.stackCallCounts[callerLocation]++;
        };
        Deprecation2.prototype.parseStack = function(stack) {
            return stack.map(function(_this) {
                return function(callsite) {
                    return {
                        functionName: _this.getFunctionNameFromCallsite(callsite),
                        location: _this.getLocationFromCallsite(callsite),
                        fileName: _this.getFileNameFromCallSite(callsite)
                    };
                };
            }(this));
        };
        Deprecation2.prototype.serialize = function() {
            return {
                message: this.getMessage(),
                lineNumber: this.lineNumber,
                fileName: this.fileName,
                stacks: this.getStacks()
            };
        };
        return Deprecation2;
    })();
}).call(this);

},{}],"12WST":[function(require,module,exports) {
"use strict";
exports.Emitter = require("./emitter");
exports.Disposable = require("./disposable");
exports.CompositeDisposable = require("./composite-disposable");

},{"./emitter":"1XC7K","./disposable":"86TKg","./composite-disposable":"gGWrP"}],"1XC7K":[function(require,module,exports) {
"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Disposable = require("./disposable");
var CompositeDisposable = require("./composite-disposable"); // Essential: Utility class to be used when implementing event-based APIs that
// allows for handlers registered via `::on` to be invoked with calls to
// `::emit`. Instances of this class are intended to be used internally by
// classes that expose an event-based API.
//
// For example:
//
// ```js
// class User {
//   constructor() {
//     this.emitter = new Emitter()
//   }
//
//   onDidChangeName(callback) {
//     this.emitter.on('did-change-name', callback)
//   }
//
//   setName(name) {
//     if (name !== this.name) {
//       this.name = name
//       this.emitter.emit('did-change-name', name)
//     }
//
//     return this.name
//   }
// }
// ```
var Emitter1 = /*#__PURE__*/ function() {
    _createClass(Emitter2, null, [
        {
            key: "onEventHandlerException",
            value: function onEventHandlerException(exceptionHandler) {
                var _this = this;
                if (this.exceptionHandlers.length === 0) this.dispatch = this.exceptionHandlingDispatch;
                this.exceptionHandlers.push(exceptionHandler);
                return new Disposable(function() {
                    _this.exceptionHandlers.splice(_this.exceptionHandlers.indexOf(exceptionHandler), 1);
                    if (_this.exceptionHandlers.length === 0) return _this.dispatch = _this.simpleDispatch;
                });
            }
        },
        {
            key: "simpleDispatch",
            value: function simpleDispatch(handler, value) {
                return handler(value);
            }
        },
        {
            key: "exceptionHandlingDispatch",
            value: function exceptionHandlingDispatch(handler, value) {
                try {
                    return handler(value);
                } catch (exception) {
                    return this.exceptionHandlers.map(function(exceptionHandler) {
                        return exceptionHandler(exception);
                    });
                }
            }
        }
    ]);
    function Emitter2() {
        _classCallCheck(this, Emitter2);
        this.disposed = false;
        this.clear();
    } // Public: Clear out any existing subscribers.
    _createClass(Emitter2, [
        {
            key: "clear",
            value: function clear() {
                if (this.subscriptions != null) this.subscriptions.dispose();
                this.subscriptions = new CompositeDisposable();
                this.handlersByEventName = {
                };
            } // Public: Unsubscribe all handlers.
        },
        {
            key: "dispose",
            value: function dispose() {
                this.subscriptions.dispose();
                this.handlersByEventName = null;
                this.disposed = true;
            }
        },
        {
            key: "on",
            value: function on(eventName, handler, unshift) {
                var _this2 = this;
                if (unshift == null) unshift = false;
                if (this.disposed) throw new Error("Emitter has been disposed");
                if (typeof handler !== "function") throw new Error("Handler must be a function");
                var currentHandlers = this.handlersByEventName[eventName];
                if (currentHandlers) {
                    if (unshift) this.handlersByEventName[eventName].unshift(handler);
                    else this.handlersByEventName[eventName].push(handler);
                } else this.handlersByEventName[eventName] = [
                    handler
                ];
                 // When the emitter is disposed, we want to dispose of all subscriptions.
                // However, we also need to stop tracking disposables when they're disposed
                // from outside, otherwise this class will hold references to all the
                // disposables it created (instead of just the active ones).
                var cleanup = new Disposable(function() {
                    _this2.subscriptions.remove(cleanup);
                    return _this2.off(eventName, handler);
                });
                this.subscriptions.add(cleanup);
                return cleanup;
            } // Public: Register the given handler function to be invoked the next time an
        },
        {
            key: "once",
            value: function once(eventName, handler, unshift) {
                if (unshift == null) unshift = false;
                var wrapped = function wrapped1(value) {
                    disposable.dispose();
                    return handler(value);
                };
                var disposable = this.on(eventName, wrapped, unshift);
                return disposable;
            } // Public: Register the given handler function to be invoked *before* all
        },
        {
            key: "preempt",
            value: function preempt(eventName, handler) {
                return this.on(eventName, handler, true);
            } // Private: Used by the disposable.
        },
        {
            key: "off",
            value: function off(eventName, handlerToRemove) {
                if (this.disposed) return;
                var handlers = this.handlersByEventName[eventName];
                if (handlers) {
                    var handlerIndex = handlers.indexOf(handlerToRemove);
                    if (handlerIndex >= 0) handlers.splice(handlerIndex, 1);
                    if (handlers.length === 0) delete this.handlersByEventName[eventName];
                }
            }
        },
        {
            key: "emit",
            value: function emit(eventName, value) {
                var handlers = this.handlersByEventName && this.handlersByEventName[eventName];
                if (handlers) {
                    // create a copy of `handlers` so that if any handler mutates `handlers`
                    // (e.g. by calling `on` on this same emitter), this does not result in
                    // changing the handlers being called during this same `emit`.
                    var handlersCopy = handlers.slice();
                    for(var i = 0; i < handlersCopy.length; i++)this.constructor.dispatch(handlersCopy[i], value);
                }
            }
        },
        {
            key: "emitAsync",
            value: function emitAsync(eventName, value) {
                var _this3 = this;
                var handlers = this.handlersByEventName && this.handlersByEventName[eventName];
                if (handlers) {
                    var promises = handlers.map(function(handler) {
                        return _this3.constructor.dispatch(handler, value);
                    });
                    return Promise.all(promises).then(function() {
                    });
                }
                return Promise.resolve();
            }
        },
        {
            key: "getEventNames",
            value: function getEventNames() {
                return Object.keys(this.handlersByEventName);
            }
        },
        {
            key: "listenerCountForEventName",
            value: function listenerCountForEventName(eventName) {
                var handlers = this.handlersByEventName[eventName];
                return handlers == null ? 0 : handlers.length;
            }
        },
        {
            key: "getTotalListenerCount",
            value: function getTotalListenerCount() {
                var result = 0;
                var _arr = Object.keys(this.handlersByEventName);
                for(var _i = 0; _i < _arr.length; _i++){
                    var eventName = _arr[_i];
                    result += this.handlersByEventName[eventName].length;
                }
                return result;
            }
        }
    ]);
    return Emitter2;
}();
Emitter1.dispatch = Emitter1.simpleDispatch;
Emitter1.exceptionHandlers = [];
module.exports = Emitter1;

},{"./disposable":"86TKg","./composite-disposable":"gGWrP"}],"86TKg":[function(require,module,exports) {
"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
// Essential: A handle to a resource that can be disposed. For example,
// {Emitter::on} returns disposables representing subscriptions.
module.exports = /*#__PURE__*/ (function() {
    _createClass(Disposable, null, [
        {
            key: "isDisposable",
            // Public: Ensure that `object` correctly implements the `Disposable`
            // contract.
            //
            // * `object` An {Object} you want to perform the check against.
            //
            // Returns a {Boolean} indicating whether `object` is a valid `Disposable`.
            value: function isDisposable(object) {
                return typeof (object != null ? object.dispose : undefined) === "function";
            }
        }
    ]);
    function Disposable(disposalAction) {
        _classCallCheck(this, Disposable);
        this.disposed = false;
        this.disposalAction = disposalAction;
    } // Public: Perform the disposal action, indicating that the resource associated
    // with this disposable is no longer needed.
    //
    // You can call this method more than once, but the disposal action will only
    // be performed the first time.
    _createClass(Disposable, [
        {
            key: "dispose",
            value: function dispose() {
                if (!this.disposed) {
                    this.disposed = true;
                    if (typeof this.disposalAction === "function") this.disposalAction();
                    this.disposalAction = null;
                }
            }
        }
    ]);
    return Disposable;
})();

},{}],"gGWrP":[function(require,module,exports) {
"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var CompositeDisposable;
var Disposable; // Essential: An object that aggregates multiple {Disposable} instances together
// into a single disposable, so they can all be disposed as a group.
//
// These are very useful when subscribing to multiple events.
//
// ## Examples
//
// ```js
// const {CompositeDisposable} = require('atom')
//
// class Something {
//   constructor() {
//     this.disposables = new CompositeDisposable()
//     const editor = atom.workspace.getActiveTextEditor()
//     this.disposables.add(editor.onDidChange(() => {})
//     this.disposables.add(editor.onDidChangePath(() => {})
//   }
//
//   destroy() {
//     this.disposables.dispose();
//   }
// }
// ```
module.exports = /*#__PURE__*/ (function() {
    /*
  Section: Construction and Destruction
  */ // Public: Construct an instance, optionally with one or more disposables
    function CompositeDisposable1() {
        _classCallCheck(this, CompositeDisposable1);
        this.disposed = false;
        this.disposables = new Set();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for(var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var disposable = _step.value;
                this.add(disposable);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
    } // Public: Dispose all disposables added to this composite disposable.
    //
    // If this object has already been disposed, this method has no effect.
    _createClass(CompositeDisposable1, [
        {
            key: "dispose",
            value: function dispose() {
                if (!this.disposed) {
                    this.disposed = true;
                    this.disposables.forEach(function(disposable) {
                        return disposable.dispose();
                    });
                    this.disposables = null;
                }
            }
        },
        {
            key: "add",
            value: function add() {
                if (!this.disposed) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var disposable = _step2.value;
                            assertDisposable(disposable);
                            this.disposables.add(disposable);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) _iterator2.return();
                        } finally{
                            if (_didIteratorError2) throw _iteratorError2;
                        }
                    }
                }
            } // Public: Remove a previously added disposable.
        },
        {
            key: "remove",
            value: function remove(disposable) {
                if (!this.disposed) this.disposables.delete(disposable);
            } // Public: Alias to {CompositeDisposable::remove}
        },
        {
            key: "delete",
            value: function _delete(disposable) {
                this.remove(disposable);
            } // Public: Clear all disposables. They will not be disposed by the next call
        },
        {
            key: "clear",
            value: function clear() {
                if (!this.disposed) this.disposables.clear();
            }
        }
    ]);
    return CompositeDisposable1;
})();
function assertDisposable(disposable) {
    if (Disposable == null) Disposable = require("./disposable");
    if (!Disposable.isDisposable(disposable)) throw new TypeError("Arguments to CompositeDisposable.add must have a .dispose() method");
}

},{"./disposable":"86TKg"}],"c8dmi":[function(require,module,exports) {
// Generated by CoffeeScript 2.5.1
(function() {
    var Ancestors, Mixin;
    Mixin = require('mixto');
    // Public
    module.exports = Ancestors = class Ancestors1 extends Mixin {
        /* Public */ static parents(node, selector = '*') {
            var parents;
            parents = [];
            this.eachParent(node, function(parent) {
                if (typeof parent.matches === "function" ? parent.matches(selector) : void 0) return parents.push(parent);
            });
            return parents;
        }
        static eachParent(node, block) {
            var parent, results;
            parent = node.parentNode;
            if (parent != null) block(parent);
            results = [];
            while(parent = parent.parentNode)if (parent != null) results.push(block(parent));
            else results.push(void 0);
            return results;
        }
        parents(selector = '*') {
            return Ancestors1.parents(this, selector);
        }
        queryParentSelectorAll(selector) {
            if (selector == null) throw new Error('::queryParentSelectorAll requires a valid selector as argument');
            return this.parents(selector);
        }
        queryParentSelector(selector) {
            if (selector == null) throw new Error('::queryParentSelector requires a valid selector as argument');
            return this.queryParentSelectorAll(selector)[0];
        }
        eachParent(block) {
            return Ancestors1.eachParent(this, block);
        }
    };
}).call(this); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jZXN0b3JzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uIiwic291cmNlcyI6WyJsaWIvbWl4aW5zL2FuY2VzdG9ycy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUEsTUFBQSxTQUFBLEVBQUE7O0VBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLEVBQVI7OztFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQ00sWUFBTixNQUFBLFVBQUEsUUFBd0IsTUFBeEIsQ0FBQTs7SUFJWSxPQUFULE9BQVMsQ0FBQyxJQUFELEVBQU8sV0FBUyxHQUFoQixDQUFBO0FBQ1osVUFBQTtNQUFJLE9BQUEsR0FBVTtNQUNWLElBQUMsQ0FBQSxVQUFELENBQVksSUFBWixFQUFrQixRQUFBLENBQUMsTUFBRCxDQUFBO1FBQVksMkNBQXdCLE1BQU0sQ0FBQyxRQUFTLGtCQUF4QztpQkFBQSxPQUFPLENBQUMsSUFBUixDQUFhLE1BQWIsRUFBQTs7TUFBWixDQUFsQjthQUNBO0lBSFE7O0lBS0csT0FBWixVQUFZLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBQTtBQUNmLFVBQUEsTUFBQSxFQUFBO01BQUksTUFBQSxHQUFTLElBQUksQ0FBQztNQUVkLElBQWlCLGNBQWpCO1FBQUEsS0FBQSxDQUFNLE1BQU4sRUFBQTs7QUFDQTthQUFNLE1BQUEsR0FBUyxNQUFNLENBQUMsVUFBdEI7UUFDRSxJQUFpQixjQUFqQjt1QkFBQSxLQUFBLENBQU0sTUFBTixHQUFBO1NBQUEsTUFBQTsrQkFBQTs7TUFERixDQUFBOztJQUpXOztJQU9iLE9BQVMsQ0FBQyxXQUFTLEdBQVYsQ0FBQTthQUFrQixTQUFTLENBQUMsT0FBVixDQUFrQixJQUFsQixFQUF3QixRQUF4QjtJQUFsQjs7SUFFVCxzQkFBd0IsQ0FBQyxRQUFELENBQUE7TUFDdEIsSUFBTyxnQkFBUDtRQUNFLE1BQU0sSUFBSSxLQUFKLENBQVUsZ0VBQVYsRUFEUjs7YUFFQSxJQUFDLENBQUEsT0FBRCxDQUFTLFFBQVQ7SUFIc0I7O0lBS3hCLG1CQUFxQixDQUFDLFFBQUQsQ0FBQTtNQUNuQixJQUFPLGdCQUFQO1FBQ0UsTUFBTSxJQUFJLEtBQUosQ0FBVSw2REFBVixFQURSOzthQUVBLElBQUMsQ0FBQSxzQkFBRCxDQUF3QixRQUF4QixDQUFpQyxDQUFDLENBQUQ7SUFIZDs7SUFLckIsVUFBWSxDQUFDLEtBQUQsQ0FBQTthQUFXLFNBQVMsQ0FBQyxVQUFWLENBQXFCLElBQXJCLEVBQTJCLEtBQTNCO0lBQVg7O0VBNUJkO0FBSkEiLCJzb3VyY2VzQ29udGVudCI6WyJNaXhpbiA9IHJlcXVpcmUgJ21peHRvJ1xuXG4jIFB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgQW5jZXN0b3JzIGV4dGVuZHMgTWl4aW5cblxuICAjIyMgUHVibGljICMjI1xuXG4gIEBwYXJlbnRzOiAobm9kZSwgc2VsZWN0b3I9JyonKSAtPlxuICAgIHBhcmVudHMgPSBbXVxuICAgIEBlYWNoUGFyZW50IG5vZGUsIChwYXJlbnQpIC0+IHBhcmVudHMucHVzaChwYXJlbnQpIGlmIHBhcmVudC5tYXRjaGVzPyhzZWxlY3RvcilcbiAgICBwYXJlbnRzXG5cbiAgQGVhY2hQYXJlbnQ6IChub2RlLCBibG9jaykgLT5cbiAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcblxuICAgIGJsb2NrKHBhcmVudCkgaWYgcGFyZW50P1xuICAgIHdoaWxlIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gICAgICBibG9jayhwYXJlbnQpIGlmIHBhcmVudD9cblxuICBwYXJlbnRzOiAoc2VsZWN0b3I9JyonKSAtPiBBbmNlc3RvcnMucGFyZW50cyh0aGlzLCBzZWxlY3RvcilcblxuICBxdWVyeVBhcmVudFNlbGVjdG9yQWxsOiAoc2VsZWN0b3IpIC0+XG4gICAgdW5sZXNzIHNlbGVjdG9yP1xuICAgICAgdGhyb3cgbmV3IEVycm9yICc6OnF1ZXJ5UGFyZW50U2VsZWN0b3JBbGwgcmVxdWlyZXMgYSB2YWxpZCBzZWxlY3RvciBhcyBhcmd1bWVudCdcbiAgICBAcGFyZW50cyhzZWxlY3RvcilcblxuICBxdWVyeVBhcmVudFNlbGVjdG9yOiAoc2VsZWN0b3IpIC0+XG4gICAgdW5sZXNzIHNlbGVjdG9yP1xuICAgICAgdGhyb3cgbmV3IEVycm9yICc6OnF1ZXJ5UGFyZW50U2VsZWN0b3IgcmVxdWlyZXMgYSB2YWxpZCBzZWxlY3RvciBhcyBhcmd1bWVudCdcbiAgICBAcXVlcnlQYXJlbnRTZWxlY3RvckFsbChzZWxlY3RvcilbMF1cblxuICBlYWNoUGFyZW50OiAoYmxvY2spIC0+IEFuY2VzdG9ycy5lYWNoUGFyZW50KHRoaXMsIGJsb2NrKVxuIl19
 //# sourceURL=/home/runner/work/atom-utils-plus/atom-utils-plus/lib/mixins/ancestors.coffee

},{"mixto":"kH7jF"}],"kH7jF":[function(require,module,exports) {
(function() {
    var ExcludedClassProperties, ExcludedPrototypeProperties, Mixin1, name;
    module.exports = Mixin1 = (function() {
        Mixin2.includeInto = function(constructor) {
            var name1, value, _ref;
            this.extend(constructor.prototype);
            for(name1 in this){
                value = this[name1];
                if (ExcludedClassProperties.indexOf(name1) === -1) {
                    if (!constructor.hasOwnProperty(name1)) constructor[name1] = value;
                }
            }
            return (_ref = this.included) != null ? _ref.call(constructor) : void 0;
        };
        Mixin2.extend = function(object) {
            var name1, _i, _len, _ref, _ref1;
            _ref = Object.getOwnPropertyNames(this.prototype);
            for(_i = 0, _len = _ref.length; _i < _len; _i++){
                name1 = _ref[_i];
                if (ExcludedPrototypeProperties.indexOf(name1) === -1) {
                    if (!object.hasOwnProperty(name1)) object[name1] = this.prototype[name1];
                }
            }
            return (_ref1 = this.prototype.extended) != null ? _ref1.call(object) : void 0;
        };
        function Mixin2() {
            if (typeof this.extended === "function") this.extended();
        }
        return Mixin2;
    })();
    ExcludedClassProperties = [
        '__super__'
    ];
    for(name in Mixin1)ExcludedClassProperties.push(name);
    ExcludedPrototypeProperties = [
        'constructor',
        'extended'
    ];
}).call(this);

},{}],"cBmEO":[function(require,module,exports) {
// Generated by CoffeeScript 2.5.1
(function() {
    var Disposable, DisposableEvents, Mixin;
    Mixin = require('mixto');
    ({ Disposable  } = require('atom'));
    module.exports = DisposableEvents = class DisposableEvents1 extends Mixin {
        addDisposableEventListener(object, event, listener, options) {
            object.addEventListener(event, listener, options);
            return new Disposable(function() {
                return object.removeEventListener(event, listener);
            });
        }
    };
}).call(this); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS1ldmVudHMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4iLCJzb3VyY2VzIjpbImxpYi9taXhpbnMvZGlzcG9zYWJsZS1ldmVudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUFBLE1BQUEsVUFBQSxFQUFBLGdCQUFBLEVBQUE7O0VBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSOztFQUNSLENBQUEsQ0FBQyxVQUFELENBQUEsR0FBZSxPQUFBLENBQVEsTUFBUixDQUFmOztFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ00sbUJBQU4sTUFBQSxpQkFBQSxRQUErQixNQUEvQjtJQUNFLDBCQUE0QixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBQUE7TUFDMUIsTUFBTSxDQUFDLGdCQUFQLENBQXdCLEtBQXhCLEVBQStCLFFBQS9CLEVBQXlDLE9BQXpDO2FBQ0EsSUFBSSxVQUFKLENBQWUsUUFBQSxDQUFBLENBQUE7ZUFBRyxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsS0FBM0IsRUFBa0MsUUFBbEM7TUFBSCxDQUFmO0lBRjBCOztFQUQ5QjtBQUpBIiwic291cmNlc0NvbnRlbnQiOlsiTWl4aW4gPSByZXF1aXJlICdtaXh0bydcbntEaXNwb3NhYmxlfSA9IHJlcXVpcmUgJ2F0b20nXG5cbm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIERpc3Bvc2FibGVFdmVudHMgZXh0ZW5kcyBNaXhpblxuICBhZGREaXNwb3NhYmxlRXZlbnRMaXN0ZW5lcjogKG9iamVjdCwgZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKSAtPlxuICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyIGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9uc1xuICAgIG5ldyBEaXNwb3NhYmxlIC0+IG9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyIGV2ZW50LCBsaXN0ZW5lclxuIl19
 //# sourceURL=/home/runner/work/atom-utils-plus/atom-utils-plus/lib/mixins/disposable-events.coffee

},{"mixto":"kH7jF"}],"48bk7":[function(require,module,exports) {
// Generated by CoffeeScript 2.5.1
(function() {
    var CompositeDisposable, Disposable, DisposableEvents, EventsDelegation, Mixin, NO_SELECTOR, eachPair;
    Mixin = require('mixto');
    DisposableEvents = require('./disposable-events');
    ({ Disposable , CompositeDisposable  } = require('atom'));
    eachPair = function(object, callback) {
        var k, results, v;
        results = [];
        for(k in object){
            v = object[k];
            results.push(callback(k, v));
        }
        return results;
    };
    NO_SELECTOR = '__NONE__';
    module.exports = EventsDelegation = (function() {
        class EventsDelegation1 extends Mixin {
            subscribeTo(object, selector, events, options) {
                var disposablesForObject, eventsForObject;
                if (!(object instanceof HTMLElement)) [object, selector, events, options] = [
                    this,
                    object,
                    selector,
                    events
                ];
                if (typeof selector === 'object') [events, selector, options] = [
                    selector,
                    NO_SELECTOR,
                    events
                ];
                if (this.eventsMap == null) this.eventsMap = new WeakMap();
                if (this.disposablesMap == null) this.disposablesMap = new WeakMap();
                if (this.eventsMap.get(object) == null) this.eventsMap.set(object, {
                });
                if (this.disposablesMap.get(object) == null) this.disposablesMap.set(object, {
                });
                eventsForObject = this.eventsMap.get(object);
                disposablesForObject = this.disposablesMap.get(object);
                eachPair(events, (event, callback)=>{
                    if (eventsForObject[event] == null) {
                        eventsForObject[event] = {
                        };
                        disposablesForObject[event] = this.createEventListener(object, event, options);
                    }
                    return eventsForObject[event][selector] = callback;
                });
                return new Disposable(()=>{
                    return this.unsubscribeFrom(object, selector, events);
                });
            }
            unsubscribeFrom(object, selector, events) {
                var disposablesForObject, event, eventsForObject;
                if (!(object instanceof HTMLElement)) [object, selector, events] = [
                    this,
                    object,
                    selector
                ];
                if (typeof selector === 'object') [events, selector] = [
                    selector,
                    NO_SELECTOR
                ];
                if (!(eventsForObject = this.eventsMap.get(object))) return;
                for(event in events){
                    delete eventsForObject[event][selector];
                    if (Object.keys(eventsForObject[event]).length === 0) {
                        disposablesForObject = this.disposablesMap.get(object);
                        disposablesForObject[event].dispose();
                        delete disposablesForObject[event];
                        delete eventsForObject[event];
                    }
                }
                if (Object.keys(eventsForObject).length === 0) {
                    this.eventsMap.delete(object);
                    return this.disposablesMap.delete(object);
                }
            }
            createEventListener(object, event, options) {
                var listener;
                listener = (e)=>{
                    var eventsForObject, ref, target;
                    if (!(eventsForObject = (ref = this.eventsMap.get(object)) != null ? ref[event] : void 0)) return;
                    ({ target  } = e);
                    this.decorateEvent(e);
                    this.eachSelectorFromTarget(e, target, eventsForObject);
                    if (!e.isPropagationStopped) {
                        if (typeof eventsForObject[NO_SELECTOR] === "function") eventsForObject[NO_SELECTOR](e);
                    }
                    return true;
                };
                return this.addDisposableEventListener(object, event, listener, options);
            }
            eachSelectorFromTarget(event, target, eventsForObject) {
                return this.nodeAndItsAncestors(target, (node)=>{
                    if (event.isPropagationStopped) return;
                    return this.eachSelector(eventsForObject, (selector, callback)=>{
                        var matched;
                        matched = this.targetMatch(node, selector);
                        if (event.isImmediatePropagationStopped || !matched) return;
                        return callback(event);
                    });
                });
            }
            eachSelector(eventsForObject, callback) {
                var i, key, keys, len;
                keys = Object.keys(eventsForObject);
                if (keys.indexOf(NO_SELECTOR) !== -1) keys.splice(keys.indexOf(NO_SELECTOR), 1);
                keys.sort(function(a, b) {
                    return b.split(' ').length - a.split(' ').length;
                });
                for(i = 0, len = keys.length; i < len; i++){
                    key = keys[i];
                    if (callback(key, eventsForObject[key])) return true;
                }
                return false;
            }
            targetMatch(target, selector) {
                var parent;
                if (target.matches(selector)) return true;
                parent = target.parentNode;
                while(parent != null && parent.matches != null){
                    if (parent.matches(selector)) return true;
                    parent = parent.parentNode;
                }
                return false;
            }
            nodeAndItsAncestors(node, callback) {
                var parent, results;
                parent = node.parentNode;
                callback(node);
                results = [];
                while(parent != null && parent.matches != null){
                    callback(parent);
                    results.push(parent = parent.parentNode);
                }
                return results;
            }
            decorateEvent(e) {
                var overriddenStop, overriddenStopImmediate;
                overriddenStop = Event.prototype.stopPropagation;
                e.stopPropagation = function() {
                    this.isPropagationStopped = true;
                    return overriddenStop.apply(this, arguments);
                };
                overriddenStopImmediate = Event.prototype.stopImmediatePropagation;
                return e.stopImmediatePropagation = function() {
                    this.isImmediatePropagationStopped = true;
                    return overriddenStopImmediate.apply(this, arguments);
                };
            }
        }
        DisposableEvents.includeInto(EventsDelegation1);
        return EventsDelegation1;
    }).call(this);
}).call(this); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLWRlbGVnYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4vLi4iLCJzb3VyY2VzIjpbImxpYi9taXhpbnMvZXZlbnRzLWRlbGVnYXRpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUFBLE1BQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsZ0JBQUEsRUFBQSxnQkFBQSxFQUFBLEtBQUEsRUFBQSxXQUFBLEVBQUE7O0VBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSOztFQUNSLGdCQUFBLEdBQW1CLE9BQUEsQ0FBUSxxQkFBUjs7RUFDbkIsQ0FBQSxDQUFDLFVBQUQsRUFBYSxtQkFBYixDQUFBLEdBQW9DLE9BQUEsQ0FBUSxNQUFSLENBQXBDOztFQUNBLFFBQUEsR0FBVyxRQUFBLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBQTtBQUFxQixRQUFBLENBQUEsRUFBQSxPQUFBLEVBQUE7QUFBQztJQUFBLEtBQUEsV0FBQTs7bUJBQUEsUUFBQSxDQUFTLENBQVQsRUFBVyxDQUFYO0lBQUEsQ0FBQTs7RUFBdEI7O0VBRVgsV0FBQSxHQUFjOztFQUVkLE1BQU0sQ0FBQyxPQUFQLEdBQ007SUFBTixNQUFBLGlCQUFBLFFBQStCLE1BQS9CO01BR0UsV0FBYSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLE9BQTNCLENBQUE7QUFDZixZQUFBLG9CQUFBLEVBQUE7UUFBSSxNQUFPLE1BQUEsWUFBa0IsWUFBekI7VUFDRSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLE9BQTNCLENBQUEsR0FBc0MsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLFFBQWYsRUFBeUIsTUFBekIsRUFEeEM7O1FBR0EsSUFBaUUsT0FBTyxRQUFQLEtBQW1CLFFBQXBGO1VBQUEsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixDQUFBLEdBQThCLENBQUMsUUFBRCxFQUFXLFdBQVgsRUFBd0IsTUFBeEIsRUFBOUI7OztVQUVBLElBQUMsQ0FBQSxZQUFhLElBQUksT0FBSixDQUFBOzs7VUFDZCxJQUFDLENBQUEsaUJBQWtCLElBQUksT0FBSixDQUFBOztRQUNuQixJQUFrQyxrQ0FBbEM7VUFBQSxJQUFDLENBQUEsU0FBUyxDQUFDLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLENBQUEsQ0FBdkIsRUFBQTs7UUFDQSxJQUF1Qyx1Q0FBdkM7VUFBQSxJQUFDLENBQUEsY0FBYyxDQUFDLEdBQWhCLENBQW9CLE1BQXBCLEVBQTRCLENBQUEsQ0FBNUIsRUFBQTs7UUFFQSxlQUFBLEdBQWtCLElBQUMsQ0FBQSxTQUFTLENBQUMsR0FBWCxDQUFlLE1BQWY7UUFDbEIsb0JBQUEsR0FBdUIsSUFBQyxDQUFBLGNBQWMsQ0FBQyxHQUFoQixDQUFvQixNQUFwQjtRQUV2QixRQUFBLENBQVMsTUFBVCxFQUFpQixDQUFDLEtBQUQsRUFBUSxRQUFSLENBQUEsR0FBQTtVQUNmLElBQU8sOEJBQVA7WUFDRSxlQUFlLENBQUMsS0FBRCxDQUFmLEdBQXlCLENBQUE7WUFDekIsb0JBQW9CLENBQUMsS0FBRCxDQUFwQixHQUE4QixJQUFDLENBQUEsbUJBQUQsQ0FBcUIsTUFBckIsRUFBNkIsS0FBN0IsRUFBb0MsT0FBcEMsRUFGaEM7O2lCQUlBLGVBQWUsQ0FBQyxLQUFELENBQU8sQ0FBQyxRQUFELENBQXRCLEdBQW1DO1FBTHBCLENBQWpCO2VBT0EsSUFBSSxVQUFKLENBQWUsQ0FBQSxDQUFBLEdBQUE7aUJBQUcsSUFBQyxDQUFBLGVBQUQsQ0FBaUIsTUFBakIsRUFBeUIsUUFBekIsRUFBbUMsTUFBbkM7UUFBSCxDQUFmO01BckJXOztNQXVCYixlQUFpQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLENBQUE7QUFDbkIsWUFBQSxvQkFBQSxFQUFBLEtBQUEsRUFBQTtRQUFJLE1BQU8sTUFBQSxZQUFrQixZQUF6QjtVQUNFLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsTUFBbkIsQ0FBQSxHQUE2QixDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsUUFBZixFQUQvQjs7UUFHQSxJQUFnRCxPQUFPLFFBQVAsS0FBbUIsUUFBbkU7VUFBQSxDQUFDLE1BQUQsRUFBUyxRQUFULENBQUEsR0FBcUIsQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUFyQjs7UUFFQSxLQUFjLENBQUEsZUFBQSxHQUFrQixJQUFDLENBQUEsU0FBUyxDQUFDLEdBQVgsQ0FBZSxNQUFmLENBQWxCLENBQWQ7QUFBQSxpQkFBQTs7UUFFQSxLQUFBLGVBQUE7VUFDRSxPQUFPLGVBQWUsQ0FBQyxLQUFELENBQU8sQ0FBQyxRQUFEO1VBRTdCLElBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxlQUFlLENBQUMsS0FBRCxDQUEzQixDQUFtQyxDQUFDLE1BQXBDLEtBQThDLENBQWpEO1lBQ0Usb0JBQUEsR0FBdUIsSUFBQyxDQUFBLGNBQWMsQ0FBQyxHQUFoQixDQUFvQixNQUFwQjtZQUN2QixvQkFBb0IsQ0FBQyxLQUFELENBQU8sQ0FBQyxPQUE1QixDQUFBO1lBQ0EsT0FBTyxvQkFBb0IsQ0FBQyxLQUFEO1lBQzNCLE9BQU8sZUFBZSxDQUFDLEtBQUQsRUFKeEI7O1FBSEY7UUFTQSxJQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksZUFBWixDQUE0QixDQUFDLE1BQTdCLEtBQXVDLENBQTFDO1VBQ0UsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUFYLENBQWtCLE1BQWxCO2lCQUNBLElBQUMsQ0FBQSxjQUFjLENBQUMsTUFBaEIsQ0FBdUIsTUFBdkIsRUFGRjs7TUFqQmU7O01BcUJqQixtQkFBcUIsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixDQUFBO0FBQ3ZCLFlBQUE7UUFBSSxRQUFBLEdBQVcsQ0FBQyxDQUFELENBQUEsR0FBQTtBQUNmLGNBQUEsZUFBQSxFQUFBLEdBQUEsRUFBQTtVQUFNLEtBQWMsQ0FBQSxlQUFBLG1EQUF3QyxDQUFFLEtBQUYsVUFBeEMsQ0FBZDtBQUFBLG1CQUFBOztVQUVBLENBQUEsQ0FBQyxNQUFELENBQUEsR0FBVyxDQUFYO1VBQ0EsSUFBQyxDQUFBLGFBQUQsQ0FBZSxDQUFmO1VBRUEsSUFBQyxDQUFBLHNCQUFELENBQXdCLENBQXhCLEVBQTJCLE1BQTNCLEVBQW1DLGVBQW5DO1VBQ0EsS0FBd0MsQ0FBQyxDQUFDLG9CQUExQzs7Y0FBQSxlQUFlLENBQUMsV0FBRCxFQUFlO2FBQTlCOztBQUNBLGlCQUFPO1FBUkU7ZUFVWCxJQUFDLENBQUEsMEJBQUQsQ0FBNEIsTUFBNUIsRUFBb0MsS0FBcEMsRUFBMkMsUUFBM0MsRUFBcUQsT0FBckQ7TUFYbUI7O01BYXJCLHNCQUF3QixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLGVBQWhCLENBQUE7ZUFDdEIsSUFBQyxDQUFBLG1CQUFELENBQXFCLE1BQXJCLEVBQTZCLENBQUMsSUFBRCxDQUFBLEdBQUE7VUFDM0IsSUFBVSxLQUFLLENBQUMsb0JBQWhCO0FBQUEsbUJBQUE7O2lCQUNBLElBQUMsQ0FBQSxZQUFELENBQWMsZUFBZCxFQUErQixDQUFDLFFBQUQsRUFBVSxRQUFWLENBQUEsR0FBQTtBQUNyQyxnQkFBQTtZQUFRLE9BQUEsR0FBVSxJQUFDLENBQUEsV0FBRCxDQUFhLElBQWIsRUFBbUIsUUFBbkI7WUFDVixJQUFVLEtBQUssQ0FBQyw2QkFBTixJQUF1QyxDQUFJLE9BQXJEO0FBQUEscUJBQUE7O21CQUNBLFFBQUEsQ0FBUyxLQUFUO1VBSDZCLENBQS9CO1FBRjJCLENBQTdCO01BRHNCOztNQVF4QixZQUFjLENBQUMsZUFBRCxFQUFrQixRQUFsQixDQUFBO0FBQ2hCLFlBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7UUFBSSxJQUFBLEdBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxlQUFaO1FBQ1AsSUFBRyxJQUFJLENBQUMsT0FBTCxDQUFhLFdBQWIsQ0FBQSxLQUErQixDQUFFLENBQXBDO1VBQ0UsSUFBSSxDQUFDLE1BQUwsQ0FBWSxJQUFJLENBQUMsT0FBTCxDQUFhLFdBQWIsQ0FBWixFQUF1QyxDQUF2QyxFQURGOztRQUVBLElBQUksQ0FBQyxJQUFMLENBQVUsUUFBQSxDQUFDLENBQUQsRUFBRyxDQUFILENBQUE7aUJBQVMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxHQUFSLENBQVksQ0FBQyxNQUFiLEdBQXNCLENBQUMsQ0FBQyxLQUFGLENBQVEsR0FBUixDQUFZLENBQUM7UUFBNUMsQ0FBVjtRQUVBLEtBQUEsc0NBQUE7O1VBQ0UsSUFBZSxRQUFBLENBQVMsR0FBVCxFQUFjLGVBQWUsQ0FBQyxHQUFELENBQTdCLENBQWY7QUFBQSxtQkFBTyxLQUFQOztRQURGO0FBRUEsZUFBTztNQVJLOztNQVVkLFdBQWEsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUFBO0FBQ2YsWUFBQTtRQUFJLElBQWUsTUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFmLENBQWY7QUFBQSxpQkFBTyxLQUFQOztRQUVBLE1BQUEsR0FBUyxNQUFNLENBQUM7QUFDaEIsZUFBTSxnQkFBQSxJQUFZLHdCQUFsQjtVQUNFLElBQWUsTUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFmLENBQWY7QUFBQSxtQkFBTyxLQUFQOztVQUNBLE1BQUEsR0FBUyxNQUFNLENBQUM7UUFGbEI7ZUFJQTtNQVJXOztNQVViLG1CQUFxQixDQUFDLElBQUQsRUFBTyxRQUFQLENBQUE7QUFDdkIsWUFBQSxNQUFBLEVBQUE7UUFBSSxNQUFBLEdBQVMsSUFBSSxDQUFDO1FBRWQsUUFBQSxDQUFTLElBQVQ7QUFDQTtlQUFNLGdCQUFBLElBQVksd0JBQWxCO1VBQ0UsUUFBQSxDQUFTLE1BQVQ7dUJBQ0EsTUFBQSxHQUFTLE1BQU0sQ0FBQztRQUZsQixDQUFBOztNQUptQjs7TUFRckIsYUFBZSxDQUFDLENBQUQsQ0FBQTtBQUNqQixZQUFBLGNBQUEsRUFBQTtRQUFJLGNBQUEsR0FBa0IsS0FBSyxDQUFBLFNBQUUsQ0FBQTtRQUN6QixDQUFDLENBQUMsZUFBRixHQUFvQixRQUFBLENBQUEsQ0FBQTtVQUNsQixJQUFDLENBQUEsb0JBQUQsR0FBd0I7aUJBQ3hCLGNBQWMsQ0FBQyxLQUFmLENBQXFCLElBQXJCLEVBQTJCLFNBQTNCO1FBRmtCO1FBSXBCLHVCQUFBLEdBQTJCLEtBQUssQ0FBQSxTQUFFLENBQUE7ZUFDbEMsQ0FBQyxDQUFDLHdCQUFGLEdBQTZCLFFBQUEsQ0FBQSxDQUFBO1VBQzNCLElBQUMsQ0FBQSw2QkFBRCxHQUFpQztpQkFDakMsdUJBQXVCLENBQUMsS0FBeEIsQ0FBOEIsSUFBOUIsRUFBb0MsU0FBcEM7UUFGMkI7TUFQaEI7O0lBaEdqQjs7SUFDRSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixnQkFBN0I7Ozs7O0FBVEYiLCJzb3VyY2VzQ29udGVudCI6WyJNaXhpbiA9IHJlcXVpcmUgJ21peHRvJ1xuRGlzcG9zYWJsZUV2ZW50cyA9IHJlcXVpcmUgJy4vZGlzcG9zYWJsZS1ldmVudHMnXG57RGlzcG9zYWJsZSwgQ29tcG9zaXRlRGlzcG9zYWJsZX0gPSByZXF1aXJlICdhdG9tJ1xuZWFjaFBhaXIgPSAob2JqZWN0LCBjYWxsYmFjaykgLT4gY2FsbGJhY2soayx2KSBmb3Igayx2IG9mIG9iamVjdFxuXG5OT19TRUxFQ1RPUiA9ICdfX05PTkVfXydcblxubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgRXZlbnRzRGVsZWdhdGlvbiBleHRlbmRzIE1peGluXG4gIERpc3Bvc2FibGVFdmVudHMuaW5jbHVkZUludG8odGhpcylcblxuICBzdWJzY3JpYmVUbzogKG9iamVjdCwgc2VsZWN0b3IsIGV2ZW50cywgb3B0aW9ucykgLT5cbiAgICB1bmxlc3Mgb2JqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgIFtvYmplY3QsIHNlbGVjdG9yLCBldmVudHMsIG9wdGlvbnNdID0gW3RoaXMsIG9iamVjdCwgc2VsZWN0b3IsIGV2ZW50c11cblxuICAgIFtldmVudHMsIHNlbGVjdG9yLCBvcHRpb25zXSA9IFtzZWxlY3RvciwgTk9fU0VMRUNUT1IsIGV2ZW50c10gaWYgdHlwZW9mIHNlbGVjdG9yIGlzICdvYmplY3QnXG5cbiAgICBAZXZlbnRzTWFwID89IG5ldyBXZWFrTWFwXG4gICAgQGRpc3Bvc2FibGVzTWFwID89IG5ldyBXZWFrTWFwXG4gICAgQGV2ZW50c01hcC5zZXQob2JqZWN0LCB7fSkgdW5sZXNzIEBldmVudHNNYXAuZ2V0KG9iamVjdCk/XG4gICAgQGRpc3Bvc2FibGVzTWFwLnNldChvYmplY3QsIHt9KSB1bmxlc3MgQGRpc3Bvc2FibGVzTWFwLmdldChvYmplY3QpP1xuXG4gICAgZXZlbnRzRm9yT2JqZWN0ID0gQGV2ZW50c01hcC5nZXQob2JqZWN0KVxuICAgIGRpc3Bvc2FibGVzRm9yT2JqZWN0ID0gQGRpc3Bvc2FibGVzTWFwLmdldChvYmplY3QpXG5cbiAgICBlYWNoUGFpciBldmVudHMsIChldmVudCwgY2FsbGJhY2spID0+XG4gICAgICB1bmxlc3MgZXZlbnRzRm9yT2JqZWN0W2V2ZW50XT9cbiAgICAgICAgZXZlbnRzRm9yT2JqZWN0W2V2ZW50XSA9IHt9XG4gICAgICAgIGRpc3Bvc2FibGVzRm9yT2JqZWN0W2V2ZW50XSA9IEBjcmVhdGVFdmVudExpc3RlbmVyKG9iamVjdCwgZXZlbnQsIG9wdGlvbnMpXG5cbiAgICAgIGV2ZW50c0Zvck9iamVjdFtldmVudF1bc2VsZWN0b3JdID0gY2FsbGJhY2tcblxuICAgIG5ldyBEaXNwb3NhYmxlID0+IEB1bnN1YnNjcmliZUZyb20gb2JqZWN0LCBzZWxlY3RvciwgZXZlbnRzXG5cbiAgdW5zdWJzY3JpYmVGcm9tOiAob2JqZWN0LCBzZWxlY3RvciwgZXZlbnRzKSAtPlxuICAgIHVubGVzcyBvYmplY3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgW29iamVjdCwgc2VsZWN0b3IsIGV2ZW50c10gPSBbdGhpcywgb2JqZWN0LCBzZWxlY3Rvcl1cblxuICAgIFtldmVudHMsIHNlbGVjdG9yXSA9IFtzZWxlY3RvciwgTk9fU0VMRUNUT1JdIGlmIHR5cGVvZiBzZWxlY3RvciBpcyAnb2JqZWN0J1xuXG4gICAgcmV0dXJuIHVubGVzcyBldmVudHNGb3JPYmplY3QgPSBAZXZlbnRzTWFwLmdldChvYmplY3QpXG5cbiAgICBmb3IgZXZlbnQgb2YgZXZlbnRzXG4gICAgICBkZWxldGUgZXZlbnRzRm9yT2JqZWN0W2V2ZW50XVtzZWxlY3Rvcl1cblxuICAgICAgaWYgT2JqZWN0LmtleXMoZXZlbnRzRm9yT2JqZWN0W2V2ZW50XSkubGVuZ3RoIGlzIDBcbiAgICAgICAgZGlzcG9zYWJsZXNGb3JPYmplY3QgPSBAZGlzcG9zYWJsZXNNYXAuZ2V0KG9iamVjdClcbiAgICAgICAgZGlzcG9zYWJsZXNGb3JPYmplY3RbZXZlbnRdLmRpc3Bvc2UoKVxuICAgICAgICBkZWxldGUgZGlzcG9zYWJsZXNGb3JPYmplY3RbZXZlbnRdXG4gICAgICAgIGRlbGV0ZSBldmVudHNGb3JPYmplY3RbZXZlbnRdXG5cbiAgICBpZiBPYmplY3Qua2V5cyhldmVudHNGb3JPYmplY3QpLmxlbmd0aCBpcyAwXG4gICAgICBAZXZlbnRzTWFwLmRlbGV0ZShvYmplY3QpXG4gICAgICBAZGlzcG9zYWJsZXNNYXAuZGVsZXRlKG9iamVjdClcblxuICBjcmVhdGVFdmVudExpc3RlbmVyOiAob2JqZWN0LCBldmVudCwgb3B0aW9ucykgLT5cbiAgICBsaXN0ZW5lciA9IChlKSA9PlxuICAgICAgcmV0dXJuIHVubGVzcyBldmVudHNGb3JPYmplY3QgPSBAZXZlbnRzTWFwLmdldChvYmplY3QpP1tldmVudF1cblxuICAgICAge3RhcmdldH0gPSBlXG4gICAgICBAZGVjb3JhdGVFdmVudChlKVxuXG4gICAgICBAZWFjaFNlbGVjdG9yRnJvbVRhcmdldChlLCB0YXJnZXQsIGV2ZW50c0Zvck9iamVjdClcbiAgICAgIGV2ZW50c0Zvck9iamVjdFtOT19TRUxFQ1RPUl0/KGUpIHVubGVzcyBlLmlzUHJvcGFnYXRpb25TdG9wcGVkXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgQGFkZERpc3Bvc2FibGVFdmVudExpc3RlbmVyIG9iamVjdCwgZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zXG5cbiAgZWFjaFNlbGVjdG9yRnJvbVRhcmdldDogKGV2ZW50LCB0YXJnZXQsIGV2ZW50c0Zvck9iamVjdCkgLT5cbiAgICBAbm9kZUFuZEl0c0FuY2VzdG9ycyB0YXJnZXQsIChub2RlKSA9PlxuICAgICAgcmV0dXJuIGlmIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkXG4gICAgICBAZWFjaFNlbGVjdG9yIGV2ZW50c0Zvck9iamVjdCwgKHNlbGVjdG9yLGNhbGxiYWNrKSA9PlxuICAgICAgICBtYXRjaGVkID0gQHRhcmdldE1hdGNoKG5vZGUsIHNlbGVjdG9yKVxuICAgICAgICByZXR1cm4gaWYgZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgb3Igbm90IG1hdGNoZWRcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpXG5cbiAgZWFjaFNlbGVjdG9yOiAoZXZlbnRzRm9yT2JqZWN0LCBjYWxsYmFjaykgLT5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzRm9yT2JqZWN0KVxuICAgIGlmIGtleXMuaW5kZXhPZihOT19TRUxFQ1RPUikgaXNudCAtIDFcbiAgICAgIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihOT19TRUxFQ1RPUiksIDEpXG4gICAga2V5cy5zb3J0IChhLGIpIC0+IGIuc3BsaXQoJyAnKS5sZW5ndGggLSBhLnNwbGl0KCcgJykubGVuZ3RoXG5cbiAgICBmb3Iga2V5IGluIGtleXNcbiAgICAgIHJldHVybiB0cnVlIGlmIGNhbGxiYWNrKGtleSwgZXZlbnRzRm9yT2JqZWN0W2tleV0pXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgdGFyZ2V0TWF0Y2g6ICh0YXJnZXQsIHNlbGVjdG9yKSAtPlxuICAgIHJldHVybiB0cnVlIGlmIHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKVxuXG4gICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcbiAgICB3aGlsZSBwYXJlbnQ/IGFuZCBwYXJlbnQubWF0Y2hlcz9cbiAgICAgIHJldHVybiB0cnVlIGlmIHBhcmVudC5tYXRjaGVzKHNlbGVjdG9yKVxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcblxuICAgIGZhbHNlXG5cbiAgbm9kZUFuZEl0c0FuY2VzdG9yczogKG5vZGUsIGNhbGxiYWNrKSAtPlxuICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuXG4gICAgY2FsbGJhY2sobm9kZSlcbiAgICB3aGlsZSBwYXJlbnQ/IGFuZCBwYXJlbnQubWF0Y2hlcz9cbiAgICAgIGNhbGxiYWNrKHBhcmVudClcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG5cbiAgZGVjb3JhdGVFdmVudDogKGUpIC0+XG4gICAgb3ZlcnJpZGRlblN0b3AgPSAgRXZlbnQ6OnN0b3BQcm9wYWdhdGlvblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uID0gLT5cbiAgICAgIEBpc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWVcbiAgICAgIG92ZXJyaWRkZW5TdG9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICAgIG92ZXJyaWRkZW5TdG9wSW1tZWRpYXRlID0gIEV2ZW50OjpzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IC0+XG4gICAgICBAaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlXG4gICAgICBvdmVycmlkZGVuU3RvcEltbWVkaWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4iXX0=
 //# sourceURL=/home/runner/work/atom-utils-plus/atom-utils-plus/lib/mixins/events-delegation.coffee

},{"mixto":"kH7jF","./disposable-events":"cBmEO"}],"cVzTZ":[function(require,module,exports) {
// Generated by CoffeeScript 2.5.1
(function() {
    var BabelSpacePenDSL, Builder, Events, Mixin, SelfClosingTags, SpacePenDSL, Tags, Template;
    Mixin = require('mixto');
    Tags = 'a abbr address article aside audio b bdi bdo blockquote body button canvas caption cite code colgroup datalist dd del details dfn dialog div dl dt em fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header html i iframe ins kbd label legend li main map mark menu meter nav noscript object ol optgroup option output p pre progress q rp rt ruby s samp script section select small span strong style sub summary sup table tbody td textarea tfoot th thead time title tr u ul var video area base br col command embed hr img input keygen link meta param source track wbr'.split(/\s+/);
    SelfClosingTags = {
    };
    'area base br col command embed hr img input keygen link meta param source track wbr'.split(/\s+/).forEach(function(tag) {
        return SelfClosingTags[tag] = true;
    });
    Events = 'blur change click dblclick error focus input keydown keypress keyup load mousedown mousemove mouseout mouseover mouseup resize scroll select submit unload'.split(/\s+/);
    BabelSpacePenDSL = class BabelSpacePenDSL1 extends Mixin {
        buildContent() {
            if (this.constructor.content != null) return SpacePenDSL.buildContent(this, this.constructor.content);
        }
    };
    module.exports = SpacePenDSL = (function() {
        class SpacePenDSL1 extends Mixin {
            static includeInto(klass) {
                super.includeInto(klass);
                Object.defineProperty(klass, 'content', {
                    enumerable: false,
                    get: function() {
                        return this.prototype.__content__;
                    },
                    set: function(value) {
                        return this.prototype.__content__ = value;
                    }
                });
                Object.defineProperty(klass.prototype, 'createdCallback', {
                    enumerable: true,
                    get: function() {
                        return this.__create__;
                    },
                    set: function(value) {
                        return this.__createdCallback__ = value;
                    }
                });
                Object.defineProperty(klass.prototype, '__create__', {
                    enumerable: true,
                    value: function() {
                        if (this.__content__ != null) SpacePenDSL1.buildContent(this, this.__content__);
                        if (this.__createdCallback__ != null) return this.__createdCallback__();
                    }
                });
                return klass.useShadowRoot = function() {
                    return klass.prototype.__useShadowRoot__ = true;
                };
            }
            static buildContent(element, content) {
                var html, root, template;
                template = new Template();
                content.call(template);
                [html] = template.buildHtml();
                root = element.__useShadowRoot__ ? root = element.shadowRoot = element.createShadowRoot() : root = element;
                root.innerHTML = html;
                return this.wireOutlets(element, root);
            }
            static wireOutlets(view, root) {
                var element, i, len, outlet, ref;
                ref = root.querySelectorAll('[outlet]');
                for(i = 0, len = ref.length; i < len; i++){
                    element = ref[i];
                    outlet = element.getAttribute('outlet');
                    view[outlet] = element;
                    element.removeAttribute('outlet');
                }
                return void 0;
            }
        }
        SpacePenDSL1.Babel = BabelSpacePenDSL;
        return SpacePenDSL1;
    }).call(this);
    Template = (function() {
        class Template1 {
            constructor(){
                this.currentBuilder = new Builder();
            }
            subview(name, view) {
                return this.currentBuilder.subview(name, view);
            }
            text(string) {
                return this.currentBuilder.text(string);
            }
            tag(tagName, ...args) {
                return this.currentBuilder.tag(tagName, ...args);
            }
            raw(string) {
                return this.currentBuilder.raw(string);
            }
            buildHtml() {
                return this.currentBuilder.buildHtml();
            }
        }
        Tags.forEach(function(tagName) {
            return Template1.prototype[tagName] = function(...args) {
                return this.currentBuilder.tag(tagName, ...args);
            };
        });
        return Template1;
    }).call(this);
    Builder = class Builder1 {
        constructor(){
            this.document = [];
            this.postProcessingSteps = [];
        }
        buildHtml() {
            return [
                this.document.join(''),
                this.postProcessingSteps
            ];
        }
        tag(name, ...args) {
            var options;
            options = this.extractOptions(args);
            this.openTag(name, options.attributes);
            if (SelfClosingTags.hasOwnProperty(name)) {
                if (options.text != null || options.content != null) throw new Error(`Self-closing tag ${name} cannot have text or content`);
            } else {
                if (typeof options.content === "function") options.content();
                if (options.text) this.text(options.text);
                return this.closeTag(name);
            }
        }
        openTag(name, attributes) {
            var attributeName, attributePairs, attributesString, value;
            if (this.document.length === 0) {
                if (attributes == null) attributes = {
                };
            }
            attributePairs = (function() {
                var results;
                results = [];
                for(attributeName in attributes){
                    value = attributes[attributeName];
                    results.push(`${attributeName}=\"${value}\"`);
                }
                return results;
            })();
            attributesString = attributePairs.length ? " " + attributePairs.join(" ") : "";
            return this.document.push(`<${name}${attributesString}>`);
        }
        closeTag(name) {
            return this.document.push(`</${name}>`);
        }
        text(string) {
            var escapedString;
            escapedString = string.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return this.document.push(escapedString);
        }
        raw(string) {
            return this.document.push(string);
        }
        subview(outletName, subview) {
            var subviewId;
            subviewId = `subview-${++idCounter}`;
            this.tag('div', {
                id: subviewId
            });
            return this.postProcessingSteps.push(function(view) {
                view[outletName] = subview;
                subview.parentView = view;
                return view.find(`div#${subviewId}`).replaceWith(subview);
            });
        }
        extractOptions(args) {
            var arg, i, len, options;
            options = {
            };
            for(i = 0, len = args.length; i < len; i++){
                arg = args[i];
                switch(typeof arg){
                    case 'function':
                        options.content = arg;
                        break;
                    case 'string':
                    case 'number':
                        options.text = arg.toString();
                        break;
                    default:
                        options.attributes = arg;
                }
            }
            return options;
        }
    };
}).call(this); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UtcGVuLWRzbC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLiIsInNvdXJjZXMiOlsibGliL21peGlucy9zcGFjZS1wZW4tZHNsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQSxNQUFBLGdCQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsZUFBQSxFQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUE7O0VBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSOztFQUVSLElBQUEsR0FDRSxra0JBTytDLENBQUMsS0FQaEQsQ0FPc0QsS0FQdEQ7O0VBU0YsZUFBQSxHQUFrQixDQUFBOztFQUNsQixxRkFDa0IsQ0FBQyxLQURuQixDQUN5QixLQUR6QixDQUMrQixDQUFDLE9BRGhDLENBQ3dDLFFBQUEsQ0FBQyxHQUFELENBQUE7V0FBUyxlQUFlLENBQUMsR0FBRCxDQUFmLEdBQXVCO0VBQWhDLENBRHhDOztFQUdBLE1BQUEsR0FDRSw0SkFFNEMsQ0FBQyxLQUY3QyxDQUVtRCxLQUZuRDs7RUFJSSxtQkFBTixNQUFBLGlCQUFBLFFBQStCLE1BQS9CO0lBQ0UsWUFBYyxDQUFBLENBQUE7TUFDWixJQUF3RCxnQ0FBeEQ7ZUFBQSxXQUFXLENBQUMsWUFBWixDQUF5QixJQUF6QixFQUErQixJQUFDLENBQUEsV0FBVyxDQUFDLE9BQTVDLEVBQUE7O0lBRFk7O0VBRGhCOztFQUlBLE1BQU0sQ0FBQyxPQUFQLEdBQ007SUFBTixNQUFBLFlBQUEsUUFBMEIsTUFBMUI7TUFHZ0IsT0FBYixXQUFhLENBQUMsS0FBRCxDQUFBO2FBQWIsQ0FBQSxXQUNDLENBQU0sS0FBTjtRQUVBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLEtBQXRCLEVBQTZCLFNBQTdCLEVBQ0U7VUFBQSxVQUFBLEVBQVksS0FBWjtVQUNBLEdBQUEsRUFBSyxRQUFBLENBQUEsQ0FBQTttQkFBRyxJQUFDLENBQUEsU0FBUyxDQUFDO1VBQWQsQ0FETDtVQUVBLEdBQUEsRUFBSyxRQUFBLENBQUMsS0FBRCxDQUFBO21CQUFXLElBQUMsQ0FBQSxTQUFTLENBQUMsV0FBWCxHQUF5QjtVQUFwQztRQUZMLENBREY7UUFLQSxNQUFNLENBQUMsY0FBUCxDQUFzQixLQUFLLENBQUEsU0FBM0IsRUFBK0IsaUJBQS9CLEVBQ0U7VUFBQSxVQUFBLEVBQVksSUFBWjtVQUNBLEdBQUEsRUFBSyxRQUFBLENBQUEsQ0FBQTttQkFBRyxJQUFDLENBQUE7VUFBSixDQURMO1VBRUEsR0FBQSxFQUFLLFFBQUEsQ0FBQyxLQUFELENBQUE7bUJBQVcsSUFBQyxDQUFBLG1CQUFELEdBQXVCO1VBQWxDO1FBRkwsQ0FERjtRQUtBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLEtBQUssQ0FBQSxTQUEzQixFQUErQixZQUEvQixFQUNFO1VBQUEsVUFBQSxFQUFZLElBQVo7VUFDQSxLQUFBLEVBQU8sUUFBQSxDQUFBLENBQUE7WUFDTCxJQUFnRCx3QkFBaEQ7Y0FBQSxXQUFXLENBQUMsWUFBWixDQUF5QixJQUF6QixFQUErQixJQUFDLENBQUEsV0FBaEMsRUFBQTs7WUFFQSxJQUEyQixnQ0FBM0I7cUJBQUcsSUFBQyxDQUFBLHNCQUFKOztVQUhLO1FBRFAsQ0FERjtlQU9BLEtBQUssQ0FBQyxhQUFOLEdBQXNCLFFBQUEsQ0FBQSxDQUFBO2lCQUNwQixLQUFLLENBQUEsU0FBRSxDQUFBLGlCQUFQLEdBQTJCO1FBRFA7TUFwQlY7O01BdUJDLE9BQWQsWUFBYyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQUE7QUFDakIsWUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO1FBQUksUUFBQSxHQUFXLElBQUksUUFBSixDQUFBO1FBRVgsT0FBTyxDQUFDLElBQVIsQ0FBYSxRQUFiO1FBRUEsQ0FBQyxJQUFELENBQUEsR0FBUyxRQUFRLENBQUMsU0FBVCxDQUFBO1FBQ1QsSUFBQSxHQUNHLE9BQU8sQ0FBQyxpQkFBWCxHQUNFLElBQUEsR0FBTyxPQUFPLENBQUMsVUFBUixHQUFxQixPQUFPLENBQUMsZ0JBQVIsQ0FBQSxDQUQ5QixHQUdFLElBQUEsR0FBTztRQUNULElBQUksQ0FBQyxTQUFMLEdBQWlCO2VBRWpCLElBQUMsQ0FBQSxXQUFELENBQWEsT0FBYixFQUFzQixJQUF0QjtNQWJhOztNQWVELE9BQWIsV0FBYSxDQUFDLElBQUQsRUFBTyxJQUFQLENBQUE7QUFDaEIsWUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUE7QUFBSTtRQUFBLEtBQUEscUNBQUE7O1VBQ0UsTUFBQSxHQUFTLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFFBQXJCO1VBQ1QsSUFBSSxDQUFDLE1BQUQsQ0FBSixHQUFlO1VBQ2YsT0FBTyxDQUFDLGVBQVIsQ0FBd0IsUUFBeEI7UUFIRjtlQUtBO01BTlk7O0lBekNoQjs7SUFDRSxXQUFDLENBQUEsS0FBRCxHQUFROzs7Ozs7RUFnREo7SUFBTixNQUFBLFNBQUE7TUFDRSxXQUFhLENBQUEsQ0FBQTtRQUFHLElBQUMsQ0FBQSxjQUFELEdBQWtCLElBQUksT0FBSixDQUFBO01BQXJCOztNQUtiLE9BQVMsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFBO2VBQWdCLElBQUMsQ0FBQSxjQUFjLENBQUMsT0FBaEIsQ0FBd0IsSUFBeEIsRUFBOEIsSUFBOUI7TUFBaEI7O01BRVQsSUFBTSxDQUFDLE1BQUQsQ0FBQTtlQUFZLElBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBcUIsTUFBckI7TUFBWjs7TUFFTixHQUFLLENBQUMsT0FBRCxFQUFBLEdBQVUsSUFBVixDQUFBO2VBQXNCLElBQUMsQ0FBQSxjQUFjLENBQUMsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkIsR0FBQSxJQUE3QjtNQUF0Qjs7TUFFTCxHQUFLLENBQUMsTUFBRCxDQUFBO2VBQVksSUFBQyxDQUFBLGNBQWMsQ0FBQyxHQUFoQixDQUFvQixNQUFwQjtNQUFaOztNQUVMLFNBQVcsQ0FBQSxDQUFBO2VBQUcsSUFBQyxDQUFBLGNBQWMsQ0FBQyxTQUFoQixDQUFBO01BQUg7O0lBZGI7O0lBR0UsSUFBSSxDQUFDLE9BQUwsQ0FBYSxRQUFBLENBQUMsT0FBRCxDQUFBO2FBQ1gsUUFBUSxDQUFBLFNBQUUsQ0FBQyxPQUFELENBQVYsR0FBc0IsUUFBQSxDQUFBLEdBQUMsSUFBRCxDQUFBO2VBQWEsSUFBQyxDQUFBLGNBQWMsQ0FBQyxHQUFoQixDQUFvQixPQUFwQixFQUE2QixHQUFBLElBQTdCO01BQWI7SUFEWCxDQUFiOzs7Ozs7RUFhSSxVQUFOLE1BQUEsUUFBQTtJQUNFLFdBQWEsQ0FBQSxDQUFBO01BQ1gsSUFBQyxDQUFBLFFBQUQsR0FBWTtNQUNaLElBQUMsQ0FBQSxtQkFBRCxHQUF1QjtJQUZaOztJQUliLFNBQVcsQ0FBQSxDQUFBO2FBQ1QsQ0FBQyxJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxFQUFmLENBQUQsRUFBcUIsSUFBQyxDQUFBLG1CQUF0QjtJQURTOztJQUdYLEdBQUssQ0FBQyxJQUFELEVBQUEsR0FBTyxJQUFQLENBQUE7QUFDUCxVQUFBO01BQUksT0FBQSxHQUFVLElBQUMsQ0FBQSxjQUFELENBQWdCLElBQWhCO01BRVYsSUFBQyxDQUFBLE9BQUQsQ0FBUyxJQUFULEVBQWUsT0FBTyxDQUFDLFVBQXZCO01BRUEsSUFBRyxlQUFlLENBQUMsY0FBaEIsQ0FBK0IsSUFBL0IsQ0FBSDtRQUNFLElBQUcsc0JBQUEsSUFBaUIseUJBQXBCO1VBQ0UsTUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFBLGlCQUFBLENBQUEsQ0FBb0IsSUFBcEIsQ0FBQSw0QkFBQSxDQUFWLEVBRFI7U0FERjtPQUFBLE1BQUE7O1VBSUUsT0FBTyxDQUFDOztRQUNSLElBQXVCLE9BQU8sQ0FBQyxJQUEvQjtVQUFBLElBQUMsQ0FBQSxJQUFELENBQU0sT0FBTyxDQUFDLElBQWQsRUFBQTs7ZUFDQSxJQUFDLENBQUEsUUFBRCxDQUFVLElBQVYsRUFORjs7SUFMRzs7SUFhTCxPQUFTLENBQUMsSUFBRCxFQUFPLFVBQVAsQ0FBQTtBQUNYLFVBQUEsYUFBQSxFQUFBLGNBQUEsRUFBQSxnQkFBQSxFQUFBO01BQUksSUFBRyxJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsS0FBb0IsQ0FBdkI7O1VBQ0UsYUFBYyxDQUFBO1NBRGhCOztNQUdBLGNBQUE7O0FBQ0U7UUFBQSxLQUFBLDJCQUFBOzt1QkFDRSxDQUFBLENBQUEsQ0FBRyxhQUFILENBQUEsR0FBQSxDQUFBLENBQXNCLEtBQXRCLENBQUEsRUFBQTtRQURGLENBQUE7OztNQUdGLGdCQUFBLEdBQ0ssY0FBYyxDQUFDLE1BQWxCLEdBQ0UsR0FBQSxHQUFNLGNBQWMsQ0FBQyxJQUFmLENBQW9CLEdBQXBCLENBRFIsR0FHRTthQUVKLElBQUMsQ0FBQSxRQUFRLENBQUMsSUFBVixDQUFlLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSixDQUFBLENBQUEsQ0FBVyxnQkFBWCxDQUFBLENBQUEsQ0FBZjtJQWRPOztJQWdCVCxRQUFVLENBQUMsSUFBRCxDQUFBO2FBQ1IsSUFBQyxDQUFBLFFBQVEsQ0FBQyxJQUFWLENBQWUsQ0FBQSxFQUFBLENBQUEsQ0FBSyxJQUFMLENBQUEsQ0FBQSxDQUFmO0lBRFE7O0lBR1YsSUFBTSxDQUFDLE1BQUQsQ0FBQTtBQUNSLFVBQUE7TUFBSSxhQUFBLEdBQWdCLE1BQ2QsQ0FBQyxPQURhLENBQ0wsSUFESyxFQUNDLE9BREQsQ0FFZCxDQUFDLE9BRmEsQ0FFTCxJQUZLLEVBRUMsUUFGRCxDQUdkLENBQUMsT0FIYSxDQUdMLElBSEssRUFHQyxPQUhELENBSWQsQ0FBQyxPQUphLENBSUwsSUFKSyxFQUlDLE1BSkQsQ0FLZCxDQUFDLE9BTGEsQ0FLTCxJQUxLLEVBS0MsTUFMRDthQU9oQixJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxhQUFmO0lBUkk7O0lBVU4sR0FBSyxDQUFDLE1BQUQsQ0FBQTthQUNILElBQUMsQ0FBQSxRQUFRLENBQUMsSUFBVixDQUFlLE1BQWY7SUFERzs7SUFHTCxPQUFTLENBQUMsVUFBRCxFQUFhLE9BQWIsQ0FBQTtBQUNYLFVBQUE7TUFBSSxTQUFBLEdBQVksQ0FBQSxRQUFBLENBQUEsQ0FBVyxFQUFFLFNBQWIsQ0FBQTtNQUNaLElBQUMsQ0FBQSxHQUFELENBQUssS0FBTCxFQUFZO1FBQUEsRUFBQSxFQUFJO01BQUosQ0FBWjthQUNBLElBQUMsQ0FBQSxtQkFBbUIsQ0FBQyxJQUFyQixDQUEwQixRQUFBLENBQUMsSUFBRCxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFELENBQUosR0FBbUI7UUFDbkIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7ZUFDckIsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFBLElBQUEsQ0FBQSxDQUFPLFNBQVAsQ0FBQSxDQUFWLENBQTZCLENBQUMsV0FBOUIsQ0FBMEMsT0FBMUM7TUFId0IsQ0FBMUI7SUFITzs7SUFRVCxjQUFnQixDQUFDLElBQUQsQ0FBQTtBQUNsQixVQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBO01BQUksT0FBQSxHQUFVLENBQUE7TUFDVixLQUFBLHNDQUFBOztBQUNFLGdCQUFPLE9BQU8sR0FBZDtBQUFBLGVBQ08sVUFEUDtZQUVJLE9BQU8sQ0FBQyxPQUFSLEdBQWtCO0FBRGY7QUFEUCxlQUdPLFFBSFA7QUFBQSxlQUdpQixRQUhqQjtZQUlJLE9BQU8sQ0FBQyxJQUFSLEdBQWUsR0FBRyxDQUFDLFFBQUosQ0FBQTtBQURGO0FBSGpCO1lBTUksT0FBTyxDQUFDLFVBQVIsR0FBcUI7QUFOekI7TUFERjthQVFBO0lBVmM7O0VBN0RsQjtBQTNGQSIsInNvdXJjZXNDb250ZW50IjpbIk1peGluID0gcmVxdWlyZSAnbWl4dG8nXG5cblRhZ3MgPVxuICAnYSBhYmJyIGFkZHJlc3MgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiIGJkaSBiZG8gYmxvY2txdW90ZSBib2R5IGJ1dHRvbiBjYW52YXNcbiAgIGNhcHRpb24gY2l0ZSBjb2RlIGNvbGdyb3VwIGRhdGFsaXN0IGRkIGRlbCBkZXRhaWxzIGRmbiBkaWFsb2cgZGl2IGRsIGR0IGVtXG4gICBmaWVsZHNldCBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgZm9ybSBoMSBoMiBoMyBoNCBoNSBoNiBoZWFkIGhlYWRlciBodG1sIGlcbiAgIGlmcmFtZSBpbnMga2JkIGxhYmVsIGxlZ2VuZCBsaSBtYWluIG1hcCBtYXJrIG1lbnUgbWV0ZXIgbmF2IG5vc2NyaXB0IG9iamVjdFxuICAgb2wgb3B0Z3JvdXAgb3B0aW9uIG91dHB1dCBwIHByZSBwcm9ncmVzcyBxIHJwIHJ0IHJ1YnkgcyBzYW1wIHNjcmlwdCBzZWN0aW9uXG4gICBzZWxlY3Qgc21hbGwgc3BhbiBzdHJvbmcgc3R5bGUgc3ViIHN1bW1hcnkgc3VwIHRhYmxlIHRib2R5IHRkIHRleHRhcmVhIHRmb290XG4gICB0aCB0aGVhZCB0aW1lIHRpdGxlIHRyIHUgdWwgdmFyIHZpZGVvIGFyZWEgYmFzZSBiciBjb2wgY29tbWFuZCBlbWJlZCBociBpbWdcbiAgIGlucHV0IGtleWdlbiBsaW5rIG1ldGEgcGFyYW0gc291cmNlIHRyYWNrIHdicicuc3BsaXQgL1xccysvXG5cblNlbGZDbG9zaW5nVGFncyA9IHt9XG4nYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtXG4gc291cmNlIHRyYWNrIHdicicuc3BsaXQoL1xccysvKS5mb3JFYWNoICh0YWcpIC0+IFNlbGZDbG9zaW5nVGFnc1t0YWddID0gdHJ1ZVxuXG5FdmVudHMgPVxuICAnYmx1ciBjaGFuZ2UgY2xpY2sgZGJsY2xpY2sgZXJyb3IgZm9jdXMgaW5wdXQga2V5ZG93blxuICAga2V5cHJlc3Mga2V5dXAgbG9hZCBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlclxuICAgbW91c2V1cCByZXNpemUgc2Nyb2xsIHNlbGVjdCBzdWJtaXQgdW5sb2FkJy5zcGxpdCAvXFxzKy9cblxuY2xhc3MgQmFiZWxTcGFjZVBlbkRTTCBleHRlbmRzIE1peGluXG4gIGJ1aWxkQ29udGVudDogLT5cbiAgICBTcGFjZVBlbkRTTC5idWlsZENvbnRlbnQodGhpcywgQGNvbnN0cnVjdG9yLmNvbnRlbnQpIGlmIEBjb25zdHJ1Y3Rvci5jb250ZW50P1xuXG5tb2R1bGUuZXhwb3J0cyA9XG5jbGFzcyBTcGFjZVBlbkRTTCBleHRlbmRzIE1peGluXG4gIEBCYWJlbDogQmFiZWxTcGFjZVBlbkRTTFxuXG4gIEBpbmNsdWRlSW50bzogKGtsYXNzKSAtPlxuICAgIHN1cGVyKGtsYXNzKVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IGtsYXNzLCAnY29udGVudCcsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgZ2V0OiAtPiBAcHJvdG90eXBlLl9fY29udGVudF9fXG4gICAgICBzZXQ6ICh2YWx1ZSkgLT4gQHByb3RvdHlwZS5fX2NvbnRlbnRfXyA9IHZhbHVlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkga2xhc3M6OiwgJ2NyZWF0ZWRDYWxsYmFjaycsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICBnZXQ6IC0+IEBfX2NyZWF0ZV9fXG4gICAgICBzZXQ6ICh2YWx1ZSkgLT4gQF9fY3JlYXRlZENhbGxiYWNrX18gPSB2YWx1ZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IGtsYXNzOjosICdfX2NyZWF0ZV9fJyxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIHZhbHVlOiAtPlxuICAgICAgICBTcGFjZVBlbkRTTC5idWlsZENvbnRlbnQodGhpcywgQF9fY29udGVudF9fKSBpZiBAX19jb250ZW50X18/XG5cbiAgICAgICAgZG8gQF9fY3JlYXRlZENhbGxiYWNrX18gaWYgQF9fY3JlYXRlZENhbGxiYWNrX18/XG5cbiAgICBrbGFzcy51c2VTaGFkb3dSb290ID0gLT5cbiAgICAgIGtsYXNzOjpfX3VzZVNoYWRvd1Jvb3RfXyA9IHRydWVcblxuICBAYnVpbGRDb250ZW50OiAoZWxlbWVudCwgY29udGVudCkgLT5cbiAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZVxuXG4gICAgY29udGVudC5jYWxsKHRlbXBsYXRlKVxuXG4gICAgW2h0bWxdID0gdGVtcGxhdGUuYnVpbGRIdG1sKClcbiAgICByb290ID1cbiAgICBpZiBlbGVtZW50Ll9fdXNlU2hhZG93Um9vdF9fXG4gICAgICByb290ID0gZWxlbWVudC5zaGFkb3dSb290ID0gZWxlbWVudC5jcmVhdGVTaGFkb3dSb290KClcbiAgICBlbHNlXG4gICAgICByb290ID0gZWxlbWVudFxuICAgIHJvb3QuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgQHdpcmVPdXRsZXRzKGVsZW1lbnQsIHJvb3QpXG5cbiAgQHdpcmVPdXRsZXRzOiAodmlldywgcm9vdCkgLT5cbiAgICBmb3IgZWxlbWVudCBpbiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tvdXRsZXRdJylcbiAgICAgIG91dGxldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdvdXRsZXQnKVxuICAgICAgdmlld1tvdXRsZXRdID0gZWxlbWVudFxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ291dGxldCcpXG5cbiAgICB1bmRlZmluZWRcblxuY2xhc3MgVGVtcGxhdGVcbiAgY29uc3RydWN0b3I6IC0+IEBjdXJyZW50QnVpbGRlciA9IG5ldyBCdWlsZGVyXG5cbiAgVGFncy5mb3JFYWNoICh0YWdOYW1lKSAtPlxuICAgIFRlbXBsYXRlOjpbdGFnTmFtZV0gPSAoYXJncy4uLikgLT4gQGN1cnJlbnRCdWlsZGVyLnRhZyh0YWdOYW1lLCBhcmdzLi4uKVxuXG4gIHN1YnZpZXc6IChuYW1lLCB2aWV3KSAtPiBAY3VycmVudEJ1aWxkZXIuc3VidmlldyhuYW1lLCB2aWV3KVxuXG4gIHRleHQ6IChzdHJpbmcpIC0+IEBjdXJyZW50QnVpbGRlci50ZXh0KHN0cmluZylcblxuICB0YWc6ICh0YWdOYW1lLCBhcmdzLi4uKSAtPiBAY3VycmVudEJ1aWxkZXIudGFnKHRhZ05hbWUsIGFyZ3MuLi4pXG5cbiAgcmF3OiAoc3RyaW5nKSAtPiBAY3VycmVudEJ1aWxkZXIucmF3KHN0cmluZylcblxuICBidWlsZEh0bWw6IC0+IEBjdXJyZW50QnVpbGRlci5idWlsZEh0bWwoKVxuXG5jbGFzcyBCdWlsZGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBkb2N1bWVudCA9IFtdXG4gICAgQHBvc3RQcm9jZXNzaW5nU3RlcHMgPSBbXVxuXG4gIGJ1aWxkSHRtbDogLT5cbiAgICBbQGRvY3VtZW50LmpvaW4oJycpLCBAcG9zdFByb2Nlc3NpbmdTdGVwc11cblxuICB0YWc6IChuYW1lLCBhcmdzLi4uKSAtPlxuICAgIG9wdGlvbnMgPSBAZXh0cmFjdE9wdGlvbnMoYXJncylcblxuICAgIEBvcGVuVGFnKG5hbWUsIG9wdGlvbnMuYXR0cmlidXRlcylcblxuICAgIGlmIFNlbGZDbG9zaW5nVGFncy5oYXNPd25Qcm9wZXJ0eShuYW1lKVxuICAgICAgaWYgb3B0aW9ucy50ZXh0PyBvciBvcHRpb25zLmNvbnRlbnQ/XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlbGYtY2xvc2luZyB0YWcgI3tuYW1lfSBjYW5ub3QgaGF2ZSB0ZXh0IG9yIGNvbnRlbnRcIilcbiAgICBlbHNlXG4gICAgICBvcHRpb25zLmNvbnRlbnQ/KClcbiAgICAgIEB0ZXh0KG9wdGlvbnMudGV4dCkgaWYgb3B0aW9ucy50ZXh0XG4gICAgICBAY2xvc2VUYWcobmFtZSlcblxuICBvcGVuVGFnOiAobmFtZSwgYXR0cmlidXRlcykgLT5cbiAgICBpZiBAZG9jdW1lbnQubGVuZ3RoIGlzIDBcbiAgICAgIGF0dHJpYnV0ZXMgPz0ge31cblxuICAgIGF0dHJpYnV0ZVBhaXJzID1cbiAgICAgIGZvciBhdHRyaWJ1dGVOYW1lLCB2YWx1ZSBvZiBhdHRyaWJ1dGVzXG4gICAgICAgIFwiI3thdHRyaWJ1dGVOYW1lfT1cXFwiI3t2YWx1ZX1cXFwiXCJcblxuICAgIGF0dHJpYnV0ZXNTdHJpbmcgPVxuICAgICAgaWYgYXR0cmlidXRlUGFpcnMubGVuZ3RoXG4gICAgICAgIFwiIFwiICsgYXR0cmlidXRlUGFpcnMuam9pbihcIiBcIilcbiAgICAgIGVsc2VcbiAgICAgICAgXCJcIlxuXG4gICAgQGRvY3VtZW50LnB1c2ggXCI8I3tuYW1lfSN7YXR0cmlidXRlc1N0cmluZ30+XCJcblxuICBjbG9zZVRhZzogKG5hbWUpIC0+XG4gICAgQGRvY3VtZW50LnB1c2ggXCI8LyN7bmFtZX0+XCJcblxuICB0ZXh0OiAoc3RyaW5nKSAtPlxuICAgIGVzY2FwZWRTdHJpbmcgPSBzdHJpbmdcbiAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXG4gICAgQGRvY3VtZW50LnB1c2ggZXNjYXBlZFN0cmluZ1xuXG4gIHJhdzogKHN0cmluZykgLT5cbiAgICBAZG9jdW1lbnQucHVzaCBzdHJpbmdcblxuICBzdWJ2aWV3OiAob3V0bGV0TmFtZSwgc3VidmlldykgLT5cbiAgICBzdWJ2aWV3SWQgPSBcInN1YnZpZXctI3srK2lkQ291bnRlcn1cIlxuICAgIEB0YWcgJ2RpdicsIGlkOiBzdWJ2aWV3SWRcbiAgICBAcG9zdFByb2Nlc3NpbmdTdGVwcy5wdXNoICh2aWV3KSAtPlxuICAgICAgdmlld1tvdXRsZXROYW1lXSA9IHN1YnZpZXdcbiAgICAgIHN1YnZpZXcucGFyZW50VmlldyA9IHZpZXdcbiAgICAgIHZpZXcuZmluZChcImRpdiMje3N1YnZpZXdJZH1cIikucmVwbGFjZVdpdGgoc3VidmlldylcblxuICBleHRyYWN0T3B0aW9uczogKGFyZ3MpIC0+XG4gICAgb3B0aW9ucyA9IHt9XG4gICAgZm9yIGFyZyBpbiBhcmdzXG4gICAgICBzd2l0Y2ggdHlwZW9mKGFyZylcbiAgICAgICAgd2hlbiAnZnVuY3Rpb24nXG4gICAgICAgICAgb3B0aW9ucy5jb250ZW50ID0gYXJnXG4gICAgICAgIHdoZW4gJ3N0cmluZycsICdudW1iZXInXG4gICAgICAgICAgb3B0aW9ucy50ZXh0ID0gYXJnLnRvU3RyaW5nKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG9wdGlvbnMuYXR0cmlidXRlcyA9IGFyZ1xuICAgIG9wdGlvbnNcbiJdfQ==
 //# sourceURL=/home/runner/work/atom-utils-plus/atom-utils-plus/lib/mixins/space-pen-dsl.coffee

},{"mixto":"kH7jF"}],"abU85":[function(require,module,exports) {
"use strict";
var forEach = require("./collection-utils").forEach;
var elementUtilsMaker = require("./element-utils");
var listenerHandlerMaker = require("./listener-handler");
var idGeneratorMaker = require("./id-generator");
var idHandlerMaker = require("./id-handler");
var reporterMaker = require("./reporter");
var browserDetector = require("./browser-detector");
var batchProcessorMaker = require("batch-processor");
var stateHandler = require("./state-handler");
//Detection strategies.
var objectStrategyMaker = require("./detection-strategy/object.js");
var scrollStrategyMaker = require("./detection-strategy/scroll.js");
function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}
function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function(obj) {
            array.push(obj);
        });
        return array;
    } else return collection;
}
function isElement(obj) {
    return obj && obj.nodeType === 1;
}
/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */ /**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */ /**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */ module.exports = function(options) {
    options = options || {
    };
    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;
    if (options.idHandler) // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
    // so that readonly flag always is true when it's used here. This may be removed next major version bump.
    idHandler = {
        get: function(element) {
            return options.idHandler.get(element, true);
        },
        set: options.idHandler.set
    };
    else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }
    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;
    if (!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }
    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({
        reporter: reporter
    }));
    //Options to be used as default for the listenTo function.
    var globalOptions = {
    };
    globalOptions.callOnAdd = !!getOption(options, "callOnAdd", true);
    globalOptions.debug = !!getOption(options, "debug", false);
    var eventListenerHandler = listenerHandlerMaker(idHandler);
    var elementUtils = elementUtilsMaker({
        stateHandler: stateHandler
    });
    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler,
        important: importantCssRules
    };
    if (desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }
    if (desiredStrategy === "scroll") detectionStrategy = scrollStrategyMaker(strategyOptions);
    else if (desiredStrategy === "object") detectionStrategy = objectStrategyMaker(strategyOptions);
    else throw new Error("Invalid strategy name: " + desiredStrategy);
    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {
    };
    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */ function listenTo(options1, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener1) {
                listener1(element);
            });
        }
        function addListener(callOnAdd, element, listener1) {
            eventListenerHandler.add(element, listener1);
            if (callOnAdd) listener1(element);
        }
        //Options object may be omitted.
        if (!listener) {
            listener = elements;
            elements = options1;
            options1 = {
            };
        }
        if (!elements) throw new Error("At least one element required.");
        if (!listener) throw new Error("Listener required.");
        if (isElement(elements)) // A single element has been passed in.
        elements = [
            elements
        ];
        else if (isCollection(elements)) // Convert collection to array for plugins.
        // TODO: May want to check so that all the elements in the collection are valid elements.
        elements = toArray(elements);
        else return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        var elementsReady = 0;
        var callOnAdd = getOption(options1, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options1, "onReady", function noop() {
        });
        var debug = getOption(options1, "debug", globalOptions.debug);
        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }
            var id = idHandler.get(element);
            debug && reporter.log("Attaching listener to element", id, element);
            if (!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if (elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");
                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;
                        if (elementsReady === elements.length) onReadyCallback();
                    });
                    return;
                }
                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({
                    debug: debug,
                    important: importantCssRules
                }, element, function onElementDetectable(element1) {
                    debug && reporter.log(id, "onElementDetectable");
                    if (stateHandler.getState(element1)) {
                        elementUtils.markAsDetectable(element1);
                        elementUtils.markBusy(element1, false);
                        detectionStrategy.addListener(element1, onResizeCallback);
                        addListener(callOnAdd, element1, listener);
                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element1);
                        if (state && state.startSize) {
                            var width = element1.offsetWidth;
                            var height = element1.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) onResizeCallback(element1);
                        }
                        if (onReadyCallbacks[id]) forEach(onReadyCallbacks[id], function(callback) {
                            callback();
                        });
                    } else // The element has been unisntalled before being detectable.
                    debug && reporter.log(id, "Element uninstalled before being detectable.");
                    delete onReadyCallbacks[id];
                    elementsReady++;
                    if (elementsReady === elements.length) onReadyCallback();
                });
            }
            debug && reporter.log(id, "Already detecable, adding listener.");
            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });
        if (elementsReady === elements.length) onReadyCallback();
    }
    function uninstall(elements) {
        if (!elements) return reporter.error("At least one element is required.");
        if (isElement(elements)) // A single element has been passed in.
        elements = [
            elements
        ];
        else if (isCollection(elements)) // Convert collection to array for plugins.
        // TODO: May want to check so that all the elements in the collection are valid elements.
        elements = toArray(elements);
        else return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        forEach(elements, function(element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }
    function initDocument(targetDocument) {
        detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }
    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall,
        initDocument: initDocument
    };
};
function getOption(options, name, defaultValue) {
    var value = options[name];
    if ((value === undefined || value === null) && defaultValue !== undefined) return defaultValue;
    return value;
}

},{"./collection-utils":"cQx2E","./element-utils":"8xqlY","./listener-handler":"hqtZ4","./id-generator":"a9pA3","./id-handler":"9su1W","./reporter":"eEnRg","./browser-detector":"68zxV","batch-processor":"aSqkS","./state-handler":"f5BmV","./detection-strategy/object.js":"l1yGG","./detection-strategy/scroll.js":"b7gEA"}],"cQx2E":[function(require,module,exports) {
"use strict";
var utils = module.exports = {
};
/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */ utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++){
        var result = callback(collection[i]);
        if (result) return result;
    }
};

},{}],"8xqlY":[function(require,module,exports) {
"use strict";
module.exports = function(options) {
    var getState = options.stateHandler.getState;
    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */ function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }
    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */ function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }
    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */ function isBusy(element) {
        return !!getState(element).busy;
    }
    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */ function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }
    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};

},{}],"hqtZ4":[function(require,module,exports) {
"use strict";
module.exports = function(idHandler) {
    var eventListeners = {
    };
    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */ function getListeners(element) {
        var id = idHandler.get(element);
        if (id === undefined) return [];
        return eventListeners[id] || [];
    }
    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */ function addListener(element, listener) {
        var id = idHandler.get(element);
        if (!eventListeners[id]) eventListeners[id] = [];
        eventListeners[id].push(listener);
    }
    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for(var i = 0, len = listeners.length; i < len; ++i)if (listeners[i] === listener) {
            listeners.splice(i, 1);
            break;
        }
    }
    function removeAllListeners(element) {
        var listeners = getListeners(element);
        if (!listeners) return;
        listeners.length = 0;
    }
    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};

},{}],"a9pA3":[function(require,module,exports) {
"use strict";
module.exports = function() {
    var idCount = 1;
    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */ function generate() {
        return idCount++;
    }
    return {
        generate: generate
    };
};

},{}],"9su1W":[function(require,module,exports) {
"use strict";
module.exports = function(options) {
    var idGenerator = options.idGenerator;
    var getState = options.stateHandler.getState;
    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */ function getId(element) {
        var state = getState(element);
        if (state && state.id !== undefined) return state.id;
        return null;
    }
    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */ function setId(element) {
        var state = getState(element);
        if (!state) throw new Error("setId required the element to have a resize detection state.");
        var id = idGenerator.generate();
        state.id = id;
        return id;
    }
    return {
        get: getId,
        set: setId
    };
};

},{}],"eEnRg":[function(require,module,exports) {
"use strict";
/* global console: false */ /**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */ module.exports = function(quiet) {
    function noop() {
    //Does nothing.
    }
    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };
    if (!quiet && window.console) {
        var attachFunction = function(reporter1, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter1[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) f.apply(console, arguments);
                else for(var i = 0; i < arguments.length; i++)f(arguments[i]);
            };
        };
        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }
    return reporter;
};

},{}],"68zxV":[function(require,module,exports) {
"use strict";
var detector = module.exports = {
};
detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }
    if (!isAnyIeVersion()) return false;
    if (!version) return true;
    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = function() {
        var undef, v = 3, div = document.createElement("div"), all = div.getElementsByTagName("i");
        do div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->";
        while (all[0])
        return v > 4 ? v : undef;
    }();
    return version === ieVersion;
};
detector.isLegacyOpera = function() {
    return !!window.opera;
};

},{}],"aSqkS":[function(require,module,exports) {
"use strict";
var utils = require("./utils");
module.exports = function batchProcessorMaker(options) {
    options = options || {
    };
    var reporter = options.reporter;
    var asyncProcess = utils.getOption(options, "async", true);
    var autoProcess = utils.getOption(options, "auto", true);
    if (autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }
    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;
    function addFunction(level, fn) {
        if (!isProcessing && autoProcess && asyncProcess && batch.size() === 0) // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
        // This needs to be done before, since we're checking the size of the batch to be 0.
        processBatchAsync();
        batch.add(level, fn);
    }
    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while(batch.size()){
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }
    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) return;
        if (localAsyncProcess === undefined) localAsyncProcess = asyncProcess;
        if (asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }
        if (localAsyncProcess) processBatchAsync();
        else processBatch();
    }
    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }
    function clearBatch() {
        batch = {
        };
        batchSize = 0;
        topLevel = 0;
        bottomLevel = 0;
    }
    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }
    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) {
            return setTimeout(fn, 0);
        };
        return raf(callback);
    }
    return {
        add: addFunction,
        force: forceProcessBatch
    };
};
function Batch() {
    var batch = {
    };
    var size = 0;
    var topLevel = 0;
    var bottomLevel = 0;
    function add(level, fn) {
        if (!fn) {
            fn = level;
            level = 0;
        }
        if (level > topLevel) topLevel = level;
        else if (level < bottomLevel) bottomLevel = level;
        if (!batch[level]) batch[level] = [];
        batch[level].push(fn);
        size++;
    }
    function process() {
        for(var level = bottomLevel; level <= topLevel; level++){
            var fns = batch[level];
            for(var i = 0; i < fns.length; i++){
                var fn = fns[i];
                fn();
            }
        }
    }
    function getSize() {
        return size;
    }
    return {
        add: add,
        process: process,
        size: getSize
    };
}

},{"./utils":"fBNeY"}],"fBNeY":[function(require,module,exports) {
"use strict";
var utils = module.exports = {
};
utils.getOption = getOption;
function getOption(options, name, defaultValue) {
    var value = options[name];
    if ((value === undefined || value === null) && defaultValue !== undefined) return defaultValue;
    return value;
}

},{}],"f5BmV":[function(require,module,exports) {
"use strict";
var prop = "_erd";
function initState(element) {
    element[prop] = {
    };
    return getState(element);
}
function getState(element) {
    return element[prop];
}
function cleanState(element) {
    delete element[prop];
}
module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};

},{}],"l1yGG":[function(require,module,exports) {
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */ "use strict";
var browserDetector = require("../browser-detector");
module.exports = function(options) {
    options = options || {
    };
    var reporter = options.reporter;
    var batchProcessor = options.batchProcessor;
    var getState = options.stateHandler.getState;
    if (!reporter) throw new Error("Missing required dependency: reporter.");
    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */ function addListener(element, listener) {
        function listenerProxy() {
            listener(element);
        }
        if (browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);
            if (!object) throw new Error("Element is not detectable by this strategy.");
            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }
    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";
        return (rules.join(seperator) + seperator).trim();
    }
    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */ function makeDetectable(options1, element, callback) {
        if (!callback) {
            callback = element;
            element = options1;
            options1 = null;
        }
        options1 = options1 || {
        };
        var debug = options1.debug;
        function injectObject(element1, callback1) {
            var OBJECT_STYLE = buildCssTextString([
                "display: block",
                "position: absolute",
                "top: 0",
                "left: 0",
                "width: 100%",
                "height: 100%",
                "border: none",
                "padding: 0",
                "margin: 0",
                "opacity: 0",
                "z-index: -1000",
                "pointer-events: none"
            ]);
            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.
            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;
            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element1);
            var width = element1.offsetWidth;
            var height = element1.offsetHeight;
            getState(element1).startSize = {
                width: width,
                height: height
            };
            function mutateDom() {
                function alterPositionStyles() {
                    if (style.position === "static") {
                        element1.style.setProperty("position", "relative", options1.important ? "important" : "");
                        var removeRelativeStyles = function(reporter1, element2, style1, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }
                            var value = style1[property];
                            if (value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter1.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element2);
                                element2.style.setProperty(property, "0", options1.important ? "important" : "");
                            }
                        };
                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element1, style, "top");
                        removeRelativeStyles(reporter, element1, style, "right");
                        removeRelativeStyles(reporter, element1, style, "bottom");
                        removeRelativeStyles(reporter, element1, style, "left");
                    }
                }
                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) alterPositionStyles();
                    /*jshint validthis: true */ function getDocument(element2, callback2) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if (!element2.contentDocument) {
                            var state = getState(element2);
                            if (state.checkForObjectDocumentTimeoutId) window.clearTimeout(state.checkForObjectDocumentTimeoutId);
                            state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                                state.checkForObjectDocumentTimeoutId = 0;
                                getDocument(element2, callback2);
                            }, 100);
                            return;
                        }
                        callback2(element2.contentDocument);
                    }
                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;
                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback1(element1);
                    });
                }
                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }
                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.setAttribute("aria-hidden", "true");
                object.onload = onObjectLoad;
                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if (!browserDetector.isIE()) object.data = "about:blank";
                if (!getState(element1)) // The element has been uninstalled before the actual loading happened.
                return;
                element1.appendChild(object);
                getState(element1).object = object;
                //IE: This must occur after adding the object to the DOM.
                if (browserDetector.isIE()) object.data = "about:blank";
            }
            if (batchProcessor) batchProcessor.add(mutateDom);
            else mutateDom();
        }
        if (browserDetector.isIE(8)) //IE 8 does not support objects properly. Luckily they do support the resize event.
        //So do not inject the object and notify that the element is already ready to be listened to.
        //The event handler for the resize event is attached in the utils.addListener instead.
        callback(element);
        else injectObject(element, callback);
    }
    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */ function getObject(element) {
        return getState(element).object;
    }
    function uninstall(element) {
        if (!getState(element)) return;
        var object = getObject(element);
        if (!object) return;
        if (browserDetector.isIE(8)) element.detachEvent("onresize", object.proxy);
        else element.removeChild(object);
        if (getState(element).checkForObjectDocumentTimeoutId) window.clearTimeout(getState(element).checkForObjectDocumentTimeoutId);
        delete getState(element).object;
    }
    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};

},{"../browser-detector":"68zxV"}],"b7gEA":[function(require,module,exports) {
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */ "use strict";
var forEach = require("../collection-utils").forEach;
module.exports = function(options) {
    options = options || {
    };
    var reporter = options.reporter;
    var batchProcessor = options.batchProcessor;
    var getState = options.stateHandler.getState;
    var hasState = options.stateHandler.hasState;
    var idHandler = options.idHandler;
    if (!batchProcessor) throw new Error("Missing required dependency: batchProcessor");
    if (!reporter) throw new Error("Missing required dependency: reporter.");
    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();
    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";
    function initDocument(targetDocument) {
        // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
        // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
        injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }
    initDocument(window.document);
    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";
        return (rules.join(seperator) + seperator).trim();
    }
    function getScrollbarSizes() {
        var width = 500;
        var height = 500;
        var child = document.createElement("div");
        child.style.cssText = buildCssTextString([
            "position: absolute",
            "width: " + width * 2 + "px",
            "height: " + height * 2 + "px",
            "visibility: hidden",
            "margin: 0",
            "padding: 0"
        ]);
        var container = document.createElement("div");
        container.style.cssText = buildCssTextString([
            "position: absolute",
            "width: " + width + "px",
            "height: " + height + "px",
            "overflow: scroll",
            "visibility: none",
            "top: " + -width * 3 + "px",
            "left: " + -height * 3 + "px",
            "visibility: hidden",
            "margin: 0",
            "padding: 0"
        ]);
        container.appendChild(child);
        document.body.insertBefore(container, document.body.firstChild);
        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;
        document.body.removeChild(container);
        return {
            width: widthSize,
            height: heightSize
        };
    }
    function injectScrollStyle(targetDocument, styleId1, containerClass) {
        function injectStyle(style, method) {
            method = method || function(element) {
                targetDocument.head.appendChild(element);
            };
            var styleElement = targetDocument.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId1;
            method(styleElement);
            return styleElement;
        }
        if (!targetDocument.getElementById(styleId1)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString([
                "display: none"
            ]) + " }\n\n";
            style += "." + containerAnimationActiveClass + " { " + buildCssTextString([
                "-webkit-animation-duration: 0.1s",
                "animation-duration: 0.1s",
                "-webkit-animation-name: " + containerAnimationClass,
                "animation-name: " + containerAnimationClass
            ]) + " }\n";
            style += "@-webkit-keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }
    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }
    function addEvent(el, name, cb) {
        if (el.addEventListener) el.addEventListener(name, cb);
        else if (el.attachEvent) el.attachEvent("on" + name, cb);
        else return reporter.error("[scroll] Don't know how to add event listeners.");
    }
    function removeEvent(el, name, cb) {
        if (el.removeEventListener) el.removeEventListener(name, cb);
        else if (el.detachEvent) el.detachEvent("on" + name, cb);
        else return reporter.error("[scroll] Don't know how to remove event listeners.");
    }
    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }
    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */ function addListener(element, listener) {
        var listeners = getState(element).listeners;
        if (!listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
        getState(element).listeners.push(listener);
    }
    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */ function makeDetectable(options1, element, callback) {
        if (!callback) {
            callback = element;
            element = options1;
            options1 = null;
        }
        options1 = options1 || {
        };
        function debug() {
            if (options1.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) reporter.log.apply(null, args);
                else for(var i = 0; i < args.length; i++)reporter.log(args[i]);
            }
        }
        function isDetached(element1) {
            function isInDocument(element2) {
                var isInShadowRoot = element2.getRootNode && element2.getRootNode().contains(element2);
                return element2 === element2.ownerDocument.body || element2.ownerDocument.body.contains(element2) || isInShadowRoot;
            }
            if (!isInDocument(element1)) return true;
            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element1) === null) return true;
            return false;
        }
        function isUnrendered(element1) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element1).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }
        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle = window.getComputedStyle(element);
            var style = {
            };
            style.position = elementStyle.position;
            style.width = element.offsetWidth;
            style.height = element.offsetHeight;
            style.top = elementStyle.top;
            style.right = elementStyle.right;
            style.bottom = elementStyle.bottom;
            style.left = elementStyle.left;
            style.widthCSS = elementStyle.width;
            style.heightCSS = elementStyle.height;
            return style;
        }
        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }
        function initListeners() {
            getState(element).listeners = [];
        }
        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }
            var style = getStyle();
            getState(element).style = style;
        }
        function storeCurrentSize(element1, width, height) {
            getState(element1).lastWidth = width;
            getState(element1).lastHeight = height;
        }
        function getExpandChildElement(element1) {
            return getExpandElement(element1).childNodes[0];
        }
        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }
        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }
        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }
        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }
        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }
        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }
        function positionScrollbars(element1, width, height) {
            var expand = getExpandElement(element1);
            var shrink = getShrinkElement(element1);
            var expandWidth = getExpandWidth(width);
            var expandHeight = getExpandHeight(height);
            var shrinkWidth = getShrinkWidth(width);
            var shrinkHeight = getShrinkHeight(height);
            expand.scrollLeft = expandWidth;
            expand.scrollTop = expandHeight;
            shrink.scrollLeft = shrinkWidth;
            shrink.scrollTop = shrinkHeight;
        }
        function injectContainerElement() {
            var container = getState(element).container;
            if (!container) {
                container = document.createElement("div");
                container.className = detectionContainerClass;
                container.style.cssText = buildCssTextString([
                    "visibility: hidden",
                    "display: inline",
                    "width: 0px",
                    "height: 0px",
                    "z-index: -1",
                    "overflow: hidden",
                    "margin: 0",
                    "padding: 0"
                ]);
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);
                var onAnimationStart = function() {
                    getState(element).onRendered && getState(element).onRendered();
                };
                addEvent(container, "animationstart", onAnimationStart);
                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }
            return container;
        }
        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;
                if (style.position === "static") {
                    element.style.setProperty("position", "relative", options1.important ? "important" : "");
                    var removeRelativeStyles = function(reporter1, element1, style1, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }
                        var value = style1[property];
                        if (value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter1.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element1);
                            element1.style[property] = 0;
                        }
                    };
                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }
            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = !left ? "0" : left + "px";
                top = !top ? "0" : top + "px";
                bottom = !bottom ? "0" : bottom + "px";
                right = !right ? "0" : right + "px";
                return [
                    "left: " + left,
                    "top: " + top,
                    "right: " + right,
                    "bottom: " + bottom
                ];
            }
            debug("Injecting elements");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }
            alterPositionStyles();
            var rootContainer = getState(element).container;
            if (!rootContainer) rootContainer = injectContainerElement();
            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.
            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.
            var scrollbarWidth = scrollbarSizes.width;
            var scrollbarHeight = scrollbarSizes.height;
            var containerContainerStyle = buildCssTextString([
                "position: absolute",
                "flex: none",
                "overflow: hidden",
                "z-index: -1",
                "visibility: hidden",
                "width: 100%",
                "height: 100%",
                "left: 0px",
                "top: 0px"
            ]);
            var containerStyle = buildCssTextString([
                "position: absolute",
                "flex: none",
                "overflow: hidden",
                "z-index: -1",
                "visibility: hidden"
            ].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
            var expandStyle = buildCssTextString([
                "position: absolute",
                "flex: none",
                "overflow: scroll",
                "z-index: -1",
                "visibility: hidden",
                "width: 100%",
                "height: 100%"
            ]);
            var shrinkStyle = buildCssTextString([
                "position: absolute",
                "flex: none",
                "overflow: scroll",
                "z-index: -1",
                "visibility: hidden",
                "width: 100%",
                "height: 100%"
            ]);
            var expandChildStyle = buildCssTextString([
                "position: absolute",
                "left: 0",
                "top: 0"
            ]);
            var shrinkChildStyle = buildCssTextString([
                "position: absolute",
                "width: 200%",
                "height: 200%"
            ]);
            var containerContainer = document.createElement("div");
            var container = document.createElement("div");
            var expand = document.createElement("div");
            var expandChild = document.createElement("div");
            var shrink = document.createElement("div");
            var shrinkChild = document.createElement("div");
            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir = "ltr";
            containerContainer.style.cssText = containerContainerStyle;
            containerContainer.className = detectionContainerClass;
            container.className = detectionContainerClass;
            container.style.cssText = containerStyle;
            expand.style.cssText = expandStyle;
            expandChild.style.cssText = expandChildStyle;
            shrink.style.cssText = shrinkStyle;
            shrinkChild.style.cssText = shrinkChildStyle;
            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);
            function onExpandScroll() {
                var state = getState(element);
                if (state && state.onExpand) state.onExpand();
                else debug("Aborting expand scroll handler: element has been uninstalled");
            }
            function onShrinkScroll() {
                var state = getState(element);
                if (state && state.onShrink) state.onShrink();
                else debug("Aborting shrink scroll handler: element has been uninstalled");
            }
            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);
            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }
        function registerListenersAndPositionElements() {
            function updateChildSizes(element1, width, height) {
                var expandChild = getExpandChildElement(element1);
                var expandWidth = getExpandWidth(width);
                var expandHeight = getExpandHeight(height);
                expandChild.style.setProperty("width", expandWidth + "px", options1.important ? "important" : "");
                expandChild.style.setProperty("height", expandHeight + "px", options1.important ? "important" : "");
            }
            function updateDetectorElements(done) {
                var width = element.offsetWidth;
                var height = element.offsetHeight;
                // Check whether the size has actually changed since last time the algorithm ran. If not, some steps may be skipped.
                var sizeChanged = width !== getState(element).lastWidth || height !== getState(element).lastHeight;
                debug("Storing current size", width, height);
                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);
                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.
                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!sizeChanged) return;
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }
                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }
                    if (options1.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;
                        if (w !== width || h !== height) reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                    }
                    updateChildSizes(element, width, height);
                });
                batchProcessor.add(1, function updateScrollbars() {
                    // This function needs to be invoked event though the size is unchanged. The element could have been resized very quickly and then
                    // been restored to the original size, which will have changed the scrollbar positions.
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }
                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }
                    positionScrollbars(element, width, height);
                });
                if (sizeChanged && done) batchProcessor.add(2, function() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }
                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }
                    done();
                });
            }
            function areElementsInjected() {
                return !!getState(element).container;
            }
            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }
                debug("notifyListenersIfNeeded invoked");
                var state = getState(element);
                // Don't notify if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) return debug("Not notifying: Size already notified");
                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function(listener) {
                    listener(element);
                });
            }
            function handleRender() {
                debug("startanimation triggered.");
                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }
                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }
            function handleScroll() {
                debug("Scroll detected.");
                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }
                updateDetectorElements(notifyListenersIfNeeded);
            }
            debug("registerListenersAndPositionElements invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }
            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;
            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }
        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }
            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }
        function ready() {
            callback(element);
        }
        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();
            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }
        debug("Making detectable...");
        if (isDetached(element)) {
            debug("Element is detached");
            injectContainerElement();
            debug("Waiting until element is attached...");
            getState(element).onRendered = function() {
                debug("Element is now attached");
                install();
            };
        } else install();
    }
    function uninstall(element) {
        var state = getState(element);
        if (!state) // Uninstall has been called on a non-erd element.
        return;
        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.
        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);
        state.container && element.removeChild(state.container);
    }
    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall,
        initDocument: initDocument
    };
};

},{"../collection-utils":"cQx2E"}],"lETdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _atom = require("atom");
var _underscorePlus = require("./deps/underscore-plus");
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
var _decoration = require("./decoration");
var _decorationDefault = parcelHelpers.interopDefault(_decoration);
"use strict";
class DecorationManagement {
    /** Initializes the decorations related properties. */ initializeDecorations(minimap) {
        this.minimap = minimap;
        if (this.emitter == null) /**
       * The minimap emitter, lazily created if not created yet.
       *
       * @type {Emitter}
       * @access private
       */ this.emitter = new _atom.Emitter();
        else this.emitter = this.minimap.emitter;
        /**
     * A map with the decoration id as key and the decoration as value.
     *
     * @type {Object}
     * @access private
     */ this.decorationsById = new Map();
        /**
     * The decorations stored in an array indexed with their marker id.
     *
     * @type {Object}
     * @access private
     */ this.decorationsByMarkerId = new Map();
        /**
     * The subscriptions to the markers `did-change` event indexed using the marker id.
     *
     * @type {Object}
     * @access private
     */ this.decorationMarkerChangedSubscriptions = new Map();
        /**
     * The subscriptions to the markers `did-destroy` event indexed using the marker id.
     *
     * @type {Object}
     * @access private
     */ this.decorationMarkerDestroyedSubscriptions = new Map();
        /**
     * The subscriptions to the decorations `did-change-properties` event indexed using the decoration id.
     *
     * @type {Object}
     * @access private
     */ this.decorationUpdatedSubscriptions = new Map();
        /**
     * The subscriptions to the decorations `did-destroy` event indexed using the decoration id.
     *
     * @type {Object}
     * @access private
     */ this.decorationDestroyedSubscriptions = new Map();
        // is set to true when a minimapElement is destroyed
        this.destroyed = false;
    }
    /**
   * Returns all the decorations registered in the current `Minimap`.
   *
   * @returns {Decoration[]} All the decorations in this `Minimap`
   */ getDecorations() {
        return [
            ...this.decorationsById.values()
        ];
    }
    /**
   * Registers an event listener to the `did-add-decoration` event.
   *
   * @param {function(event:Object):void} callback A function to call when the event is triggered. the callback will be
   *   called with an event object with the following properties:
   *
   *   - Marker: the marker object that was decorated
   *   - Decoration: the decoration object that was created
   *
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidAddDecoration(callback) {
        return this.emitter.on("did-add-decoration", callback);
    }
    /**
   * Registers an event listener to the `did-remove-decoration` event.
   *
   * @param {function(event:Object):void} callback A function to call when the event is triggered. the callback will be
   *   called with an event object with the following properties:
   *
   *   - Marker: the marker object that was decorated
   *   - Decoration: the decoration object that was created
   *
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidRemoveDecoration(callback) {
        return this.emitter.on("did-remove-decoration", callback);
    }
    /**
   * Registers an event listener to the `did-change-decoration` event.
   *
   * This event is triggered when the marker targeted by the decoration was changed.
   *
   * @param {function(event:Object):void} callback A function to call when the event is triggered. the callback will be
   *   called with an event object with the following properties:
   *
   *   - Marker: the marker object that was decorated
   *   - Decoration: the decoration object that was created
   *
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeDecoration(callback) {
        return this.emitter.on("did-change-decoration", callback);
    }
    /**
   * Registers an event listener to the `did-change-decoration-range` event.
   *
   * This event is triggered when the marker range targeted by the decoration was changed.
   *
   * @param {function(event:Object):void} callback A function to call when the event is triggered. the callback will be
   *   called with an event object with the following properties:
   *
   *   - Marker: the marker object that was decorated
   *   - Decoration: the decoration object that was created
   *
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeDecorationRange(callback) {
        return this.emitter.on("did-change-decoration-range", callback);
    }
    /**
   * Registers an event listener to the `did-update-decoration` event.
   *
   * This event is triggered when the decoration itself is modified.
   *
   * @param {function(decoration:Decoration):void} callback A function to call when the event is triggered
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidUpdateDecoration(callback) {
        return this.emitter.on("did-update-decoration", callback);
    }
    /**
   * Returns the decoration with the passed-in id.
   *
   * @param {number} id The decoration id
   * @returns {Decoration} The decoration with the given id
   */ decorationForId(id) {
        return this.decorationsById.get(id);
    }
    /**
   * Returns all the decorations that intersect the passed-in row range.
   *
   * @param {number} startScreenRow The first row of the range
   * @param {number} endScreenRow The last row of the range
   * @returns {Record<string, Decoration>} The decorations that intersect the passed-in range
   */ decorationsForScreenRowRange(startScreenRow, endScreenRow) {
        const decorationsByMarkerId = {
        };
        const markers = this.findMarkers({
            intersectsScreenRowRange: [
                startScreenRow,
                endScreenRow
            ]
        });
        for(let i = 0, len = markers.length; i < len; i++){
            const marker = markers[i];
            const decorations = this.decorationsByMarkerId.get(marker.id);
            if (decorations !== undefined) decorationsByMarkerId[marker.id] = decorations;
        }
        return decorationsByMarkerId;
    }
    /**
   * Returns the decorations that intersects the passed-in row range in a structured way.
   *
   * At the first level, the keys are the available decoration types. At the second level, the keys are the row index
   * for which there are decorations available. The value is an array containing the decorations that intersects with
   * the corresponding row.
   *
   * @property {Object} line All the line decorations by row
   * @property {Decoration[]} line[row] All the line decorations at a given row
   * @property {Object} highlight-under All the highlight-under decorations by row
   * @property {Decoration[]} highlight-under[row] All the highlight-under decorations at a given row
   * @property {Object} highlight-over All the highlight-over decorations by row
   * @property {Decoration[]} highlight-over[row] All the highlight-over decorations at a given row
   * @property {Object} highlight-outine All the highlight-outine decorations by row
   * @property {Decoration[]} highlight-outine[row] All the highlight-outine decorations at a given row
   * @returns {Object} The decorations grouped by type and then rows
   */ decorationsByTypeThenRows() {
        if (this.decorationsByTypeThenRowsCache != null) return this.decorationsByTypeThenRowsCache;
        const cache = {
        };
        const decorations = this.decorationsById.values();
        for (const decoration of decorations){
            const range = decoration.marker.getScreenRange();
            const type = decoration.getProperties().type;
            if (cache[type] == null) cache[type] = {
            };
            for(let row = range.start.row, len = range.end.row; row <= len; row++){
                if (cache[type][row] == null) cache[type][row] = [];
                cache[type][row].push(decoration);
            }
        }
        /**
     * The grouped decorations cache.
     *
     * @type {Object}
     * @access private
     */ this.decorationsByTypeThenRowsCache = cache;
        return cache;
    }
    /** Invalidates the decoration by screen rows cache. */ invalidateDecorationForScreenRowsCache() {
        this.decorationsByTypeThenRowsCache = null;
    }
    /**
   * Adds a decoration that tracks a `Marker`. When the marker moves, is invalidated, or is destroyed, the decoration
   * will be updated to reflect the marker's state.
   *
   * @fires {did-add-decoration} when The decoration is created successfully
   * @fires {did-change} when The decoration is created successfully
   * @param {Marker} marker The marker you want this decoration to follow
   * @param {Object} decorationParams The decoration properties
   * @param {string} decorationParams.type The decoration type in the following list:
   *
   *   - **line**: Fills the line background with the decoration color.
   *   - **highlight**: Renders a colored rectangle on the minimap. The highlight is rendered above the line's text.
   *   - **highlight-over**: Same as **highlight**.
   *   - **highlight-under**: Renders a colored rectangle on the minimap. The highlight is rendered below the line's text.
   *   - **highlight-outline**: Renders a colored outline on the minimap. The highlight box is rendered above the line's text.
   *   - **foreground-custom**: A decoration type for which you have the control over the render routine. Note that your
   *       routine should implement a render on a per-line basis to avoid any side-effect with the offset bitmap cache
   *       mechanism. These decorations are rendred on the foreground decorations layer.
   *   - **background-custom**: A decoration type for which you have the control over the render routine. Note that your
   *       routine should implement a render on a per-line basis to avoid any side-effect with the offset bitmap cache
   *       mechanism. These decorations are rendred on the background decorations layer.
   *
   * @param {string} [decorationParams.class] The CSS class to use to retrieve the background color of the decoration by
   *   building a scop corresponding to `.minimap .editor <your-class>`
   * @param {string} [decorationParams.scope] The scope to use to retrieve the decoration background. Note that if the
   *   `scope` property is set, the `class` won't be used.
   * @param {string} [decorationParams.color] The CSS color to use to render the decoration. When set, neither `scope`
   *   nor `class` are used.
   * @param {string} [decorationParams.plugin] The name of the plugin that created this decoration. It'll be used to
   *   order the decorations on the same layer and that are overlapping. If the parameter is omitted the Minimap will
   *   attempt to infer the plugin origin from the path of the caller function.
   * @param {function} [decorationParams.render] The render routine for custom decorations. The function receives the
   *   decoration and the render data for the current render pass.
   * @returns {Decoration} The created decoration
   */ decorateMarker(marker, decorationParams) {
        if (this.destroyed || this.minimap.destroyed || marker == null) return;
        const { id  } = marker;
        if (decorationParams.type === "highlight") decorationParams.type = "highlight-over";
        const { type , plugin  } = decorationParams;
        if (plugin == null) decorationParams.plugin = getOriginatorPackageName();
        if (decorationParams.scope == null && decorationParams.class != null) {
            const cls = decorationParams.class.split(" ").join(".");
            decorationParams.scope = `.minimap .${cls}`;
        }
        if (!this.decorationMarkerDestroyedSubscriptions.has(id)) this.decorationMarkerDestroyedSubscriptions.set(id, marker.onDidDestroy(()=>{
            this.removeAllDecorationsForMarker(marker);
        }));
        if (!this.decorationMarkerChangedSubscriptions.has(id)) this.decorationMarkerChangedSubscriptions.set(id, marker.onDidChange((event)=>{
            const decorations = this.decorationsByMarkerId.get(id);
            const screenRange = marker.getScreenRange();
            this.invalidateDecorationForScreenRowsCache();
            if (decorations !== undefined) for(let i = 0, len = decorations.length; i < len; i++){
                const decoration = decorations[i];
                this.emitter.emit("did-change-decoration", {
                    marker,
                    decoration,
                    event
                });
                this.emitDecorationChanges(decoration.type, decoration);
                decoration.screenRange = screenRange;
            }
            let oldStart = event.oldTailScreenPosition;
            let oldEnd = event.oldHeadScreenPosition;
            let newStart = event.newTailScreenPosition;
            let newEnd = event.newHeadScreenPosition;
            if (oldStart.row > oldEnd.row) [oldStart, oldEnd] = [
                oldEnd,
                oldStart
            ];
            if (newStart.row > newEnd.row) [newStart, newEnd] = [
                newEnd,
                newStart
            ];
            const rangesDiffs = computeRangesDiffs(oldStart, oldEnd, newStart, newEnd);
            for(let i1 = 0, len1 = rangesDiffs.length; i1 < len1; i1++){
                const [start, end] = rangesDiffs[i1];
                this.emitRangeChanges(type, {
                    start,
                    end
                }, 0);
            }
        }));
        const decoration = new _decorationDefault.default(marker, this, decorationParams);
        if (!this.decorationsByMarkerId.has(id)) this.decorationsByMarkerId.set(id, []);
        this.decorationsByMarkerId.get(id).push(decoration);
        this.decorationsById.set(decoration.id, decoration);
        if (!this.decorationUpdatedSubscriptions.has(decoration.id)) this.decorationUpdatedSubscriptions.set(decoration.id, decoration.onDidChangeProperties((event)=>{
            this.emitDecorationChanges(type, decoration);
        }));
        this.decorationDestroyedSubscriptions.set(decoration.id, decoration.onDidDestroy(()=>{
            this.removeDecoration(decoration);
        }));
        this.emitDecorationChanges(type, decoration);
        this.emitter.emit("did-add-decoration", {
            marker,
            decoration
        });
        return decoration;
    }
    /**
   * Emits a change in the `Minimap` corresponding to the passed-in decoration.
   *
   * @param {string} type The type of decoration that changed
   * @param {Decoration} decoration The decoration for which emitting an event
   * @access private
   */ emitDecorationChanges(type, decoration) {
        if (this.destroyed || this.minimap.editorDestroyed()) return;
        this.invalidateDecorationForScreenRowsCache();
        const range = decoration.screenRange;
        if (!range.start || !range.end) return;
        this.emitRangeChanges(type, range, 0);
    }
    /**
   * Emits a change for the specified range.
   *
   * @param {string} type The type of decoration that changed
   * @param {Object} range The range where changes occured
   * @param {number} [screenDelta] An optional screen delta for the change object
   * @access private
   */ emitRangeChanges(type, range, screenDelta) {
        const startScreenRow = range.start.row;
        const endScreenRow = range.end.row;
        const lastRenderedScreenRow = this.minimap.getLastVisibleScreenRow();
        const firstRenderedScreenRow = this.minimap.getFirstVisibleScreenRow();
        if (screenDelta == null) screenDelta = lastRenderedScreenRow - firstRenderedScreenRow - (endScreenRow - startScreenRow);
        const changeEvent = {
            start: startScreenRow,
            end: endScreenRow,
            screenDelta,
            type
        };
        this.emitter.emit("did-change-decoration-range", changeEvent);
    }
    /**
   * Removes a `Decoration` from this minimap.
   *
   * @fires {did-change} when The decoration is removed
   * @fires {did-remove-decoration} when The decoration is removed
   * @param {Decoration} decoration The decoration to remove
   */ removeDecoration(decoration) {
        if (decoration == null) return;
        const marker = decoration.marker;
        let subscription;
        this.decorationsById.delete(decoration.id);
        subscription = this.decorationUpdatedSubscriptions.get(decoration.id);
        if (subscription !== undefined) subscription.dispose();
        subscription = this.decorationDestroyedSubscriptions.get(decoration.id);
        if (subscription !== undefined) subscription.dispose();
        this.decorationUpdatedSubscriptions.delete(decoration.id);
        this.decorationDestroyedSubscriptions.delete(decoration.id);
        const decorations = this.decorationsByMarkerId.get(marker.id);
        if (decorations === undefined) return;
        this.emitDecorationChanges(decoration.getProperties().type, decoration);
        const index = decorations.indexOf(decoration);
        if (index > -1) {
            decorations.splice(index, 1);
            this.emitter.emit("did-remove-decoration", {
                marker,
                decoration
            });
            if (decorations.length === 0) this.removedAllMarkerDecorations(marker);
        }
    }
    /**
   * Removes all the decorations registered for the passed-in marker.
   *
   * @fires {did-change} when A decoration have been removed
   * @fires {did-remove-decoration} when A decoration have been removed
   * @param {Marker} marker The marker for which removing its decorations
   */ removeAllDecorationsForMarker(marker) {
        if (marker == null) return;
        const decorations = this.decorationsByMarkerId.get(marker.id);
        if (decorations === undefined) return;
        for(let i = 0, len = decorations.length; i < len; i++){
            const decoration = decorations[i];
            if (!this.destroyed && !this.minimap.editorDestroyed()) this.emitDecorationChanges(decoration.getProperties().type, decoration);
            this.emitter.emit("did-remove-decoration", {
                marker,
                decoration
            });
        }
        this.removedAllMarkerDecorations(marker);
    }
    /**
   * Performs the removal of a decoration for a given marker.
   *
   * @param {Marker} marker The marker for which removing decorations
   * @access private
   */ removedAllMarkerDecorations(marker) {
        if (marker == null) return;
        this.decorationMarkerChangedSubscriptions.get(marker.id).dispose();
        this.decorationMarkerDestroyedSubscriptions.get(marker.id).dispose();
        this.decorationsByMarkerId.delete(marker.id);
        this.decorationMarkerChangedSubscriptions.delete(marker.id);
        this.decorationMarkerDestroyedSubscriptions.delete(marker.id);
    }
    /** Removes all the decorations that was created in the current `Minimap`. */ removeAllDecorations() {
        const decorationMarkerChangedSubscriptionsValues = this.decorationMarkerChangedSubscriptions.values();
        for (const decoration of decorationMarkerChangedSubscriptionsValues)decoration.dispose();
        const decorationMarkerDestroyedSubscriptionsValues = this.decorationMarkerDestroyedSubscriptions.values();
        for (const decoration1 of decorationMarkerDestroyedSubscriptionsValues)decoration1.dispose();
        const decorationUpdatedSubscriptionsValues = this.decorationUpdatedSubscriptions.values();
        for (const decoration2 of decorationUpdatedSubscriptionsValues)decoration2.dispose();
        const decorationDestroyedSubscriptionsValues = this.decorationDestroyedSubscriptions.values();
        for (const decoration3 of decorationDestroyedSubscriptionsValues)decoration3.dispose();
        const decorationsByIdValues = this.decorationsById.values();
        for (const decoration4 of decorationsByIdValues)decoration4.destroy();
        this.decorationsById.clear();
        this.decorationsByMarkerId.clear();
        this.decorationMarkerChangedSubscriptions.clear();
        this.decorationMarkerDestroyedSubscriptions.clear();
        this.decorationUpdatedSubscriptions.clear();
        this.decorationDestroyedSubscriptions.clear();
    }
    destroy() {
        this.removeAllDecorations();
        this.minimap = undefined;
        this.emitter = undefined;
        this.destroyed = true;
    }
}
exports.default = DecorationManagement;
function getOriginatorPackageName() {
    const line = new Error().stack.split("\n")[3];
    const filePath = line.split("(")[1].replace(")", "");
    const re = new RegExp(atom.packages.getPackageDirPaths().join("|") + _underscorePlus.escapeRegExp(_pathDefault.default.sep));
    const plugin = filePath.replace(re, "").split(_pathDefault.default.sep)[0].replace(/minimap-|-minimap/, "");
    return plugin.indexOf(_pathDefault.default.sep) < 0 ? plugin : undefined;
}
/**
 * Given two ranges, it returns an array of ranges representing the differences between them.
 *
 * @param {number} oldStart The row index of the first range start
 * @param {number} oldEnd The row index of the first range end
 * @param {number} newStart The row index of the second range start
 * @param {number} newEnd The row index of the second range end
 * @returns {Object[]} The array of diff ranges
 * @access private
 */ function computeRangesDiffs(oldStart, oldEnd, newStart, newEnd) {
    const diffs = [];
    if (oldStart.isLessThan(newStart)) diffs.push([
        oldStart,
        newStart
    ]);
    else if (newStart.isLessThan(oldStart)) diffs.push([
        newStart,
        oldStart
    ]);
    if (oldEnd.isLessThan(newEnd)) diffs.push([
        oldEnd,
        newEnd
    ]);
    else if (newEnd.isLessThan(oldEnd)) diffs.push([
        newEnd,
        oldEnd
    ]);
    return diffs;
}

},{"./deps/underscore-plus":"fHACO","./decoration":"3VRaj","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"fHACO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp
);
parcelHelpers.export(exports, "dasherize", ()=>dasherize
);
parcelHelpers.export(exports, "debounce", ()=>debounce
);
const regexEscape = /[$()*+./?[\\\]^{|}-]/g;
function escapeRegExp(string) {
    if (string) return string.replace(regexEscape, "\\$&");
    else return "";
}
const regexDaherize = /([A-Z])|(_)/g;
function dasherize(string) {
    if (!string) return "";
    string = `${string[0].toLowerCase()}${string.slice(1)}`;
    return string.replace(regexDaherize, function(m, letter) {
        if (letter) return `-${letter.toLowerCase()}`;
        else return "-";
    });
}
function debounce(callback, wait) {
    let timeoutId;
    return (...args)=>{
        if (timeoutId !== undefined) clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            callback(...args);
        }, wait);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"flFQ0":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3VRaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _atom = require("atom");
"use strict";
let idCounter = 0;
const nextId = function() {
    return idCounter++;
};
class Decoration {
    /**
   * Returns `true` if the passed-in decoration properties matches the specified type.
   *
   * @param {Object} decorationProperties The decoration properties to match
   * @param {string} type The decoration type to match
   * @returns {boolean} Whether the decoration properties match the type
   */ static isType(decorationProperties, type) {
        if (Array.isArray(decorationProperties.type)) {
            if (decorationProperties.type.indexOf(type) >= 0) return true;
            return false;
        } else return type === decorationProperties.type;
    }
    /**
   * Creates a new decoration.
   *
   * @param {Marker} marker The target marker for the decoration
   * @param {Minimap} minimap The Minimap where the decoration will be displayed
   * @param {Object} properties The decoration's properties
   */ constructor(marker, minimap, properties){
        /** @access private */ this.marker = marker;
        /** @access private */ this.minimap = minimap;
        /** @access private */ this.emitter = new _atom.Emitter();
        /** @access private */ this.id = nextId();
        /** @access private */ this.properties = null;
        this.setProperties(properties);
        this.properties.id = this.id;
        /** @access private */ this.destroyed = false;
        /** @access private */ this.markerDestroyDisposable = this.marker.onDidDestroy(()=>{
            this.destroy();
        });
        this.screenRange = marker.getScreenRange();
    }
    /**
   * Destroy this marker.
   *
   * If you own the marker, you should use `Marker#destroy` which will destroy this decoration.
   */ destroy() {
        var ref, ref1;
        if (this.destroyed) return;
        (ref = this.markerDestroyDisposable) === null || ref === void 0 ? void 0 : (ref1 = ref.dispose) === null || ref1 === void 0 ? void 0 : ref1.call(ref);
        this.destroyed = true;
        this.emitter.emit("did-destroy");
        this.emitter.dispose();
    }
    /**
   * Returns whether this decoration is destroyed or not.
   *
   * @returns {boolean} Whether this decoration is destroyed or not
   */ isDestroyed() {
        return this.destroyed;
    }
    /**
   * Registers an event listener to the `did-change-properties` event.
   *
   * This event is triggered when the decoration update method is called.
   *
   * @param {function(change:Object):void} callback A function to call when the event is triggered
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeProperties(callback) {
        if (this.destroyed) return;
        return this.emitter.on("did-change-properties", callback);
    }
    /**
   * Registers an event listener to the `did-destroy` event.
   *
   * @param {function():void} callback A function to call when the event is triggered
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidDestroy(callback) {
        if (this.destroyed) return;
        return this.emitter.on("did-destroy", callback);
    }
    /**
   * An id unique across all Decoration objects.
   *
   * @returns {number} The decoration id
   */ getId() {
        return this.id;
    }
    /**
   * Returns the marker associated with this Decoration.
   *
   * @returns {Marker} The decoration's marker
   */ getMarker() {
        return this.marker;
    }
    /**
   * Check if this decoration is of type `type`.
   *
   * @param {string | Array} type A type like `'line-number'`, `'line'`, etc. `type` can also be an Array of Strings,
   *   where it will return true if the decoration's type matches any in the array.
   * @returns {boolean} Whether this decoration match the passed-in type
   */ isType(type) {
        return Decoration.isType(this.properties, type);
    }
    /**
   * Returns the Decoration's properties.
   *
   * @returns {Object} The decoration's properties
   */ getProperties() {
        return this.properties;
    }
    /**
   * Update the marker with new properties. Allows you to change the decoration's class.
   *
   * @param {Object} newProperties The new properties for the decoration
   */ setProperties(newProperties) {
        if (this.destroyed) return;
        const oldProperties = this.properties;
        this.properties = newProperties;
        this.properties.id = this.id;
        this.emitter.emit("did-change-properties", {
            oldProperties,
            newProperties
        });
    }
}
exports.default = Decoration;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"6jfaY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _underscorePlus = require("../deps/underscore-plus");
var _mixto = require("mixto");
var _mixtoDefault = parcelHelpers.interopDefault(_mixto);
var _main = require("../main");
var _canvasLayer = require("../canvas-layer");
var _canvasLayerDefault = parcelHelpers.interopDefault(_canvasLayer);
"use strict";
const SPEC_MODE = atom.inSpecMode();
// an instance of MinimapElement used for testing and calling spies
let thisSpec;
class CanvasDrawer extends _mixtoDefault.default {
    /** Initializes the canvas elements needed to perform the `Minimap` rendering. */ initializeCanvas() {
        if (SPEC_MODE) {
            // class methods only used for spying the calls
            this.drawLines = (firstLine, lastLine)=>{
                console.log({
                    firstLine,
                    lastLine
                });
            };
            this.drawLineDecoration = drawLineDecoration;
            this.drawGutterDecoration = drawGutterDecoration;
            this.drawHighlightDecoration = drawHighlightDecoration;
            this.drawHighlightOutlineDecoration = drawHighlightOutlineDecoration;
            this.drawCustomDecoration = drawCustomDecoration;
            this.StyleReader = _main.styleReader;
            thisSpec = this;
        }
        /**
     * The main canvas layer where lines are rendered.
     *
     * @type {CanvasLayer}
     */ this.tokensLayer = new _canvasLayerDefault.default();
        /**
     * The canvas layer for decorations below the text.
     *
     * @type {CanvasLayer}
     */ this.backLayer = new _canvasLayerDefault.default();
        /**
     * The canvas layer for decorations above the text.
     *
     * @type {CanvasLayer}
     */ this.frontLayer = new _canvasLayerDefault.default();
        if (!this.pendingChanges) /**
       * Stores the changes from the text editor.
       *
       * @type {Object[]}
       * @access private
       */ this.pendingChanges = [];
        if (!this.pendingBackDecorationChanges) /**
       * Stores the changes from the minimap back decorations.
       *
       * @type {Object[]}
       * @access private
       */ this.pendingBackDecorationChanges = [];
        if (!this.pendingFrontDecorationChanges) /**
       * Stores the changes from the minimap front decorations.
       *
       * @type {Object[]}
       * @access private
       */ this.pendingFrontDecorationChanges = [];
        // the maximum number of tokens to render in one line
        this.maxTokensInOneLine = atom.config.get("minimap.maxTokensInOneLine");
    }
    /**
   * Returns the uppermost canvas in the MinimapElement.
   *
   * @returns {HTMLCanvasElement} The html canvas element
   */ getFrontCanvas() {
        return this.frontLayer.canvas;
    }
    /**
   * Attaches the canvases into the specified container.
   *
   * @param {HTMLElement} parent The canvases' container
   * @access private
   */ attachCanvases(parent) {
        this.backLayer.attach(parent);
        this.tokensLayer.attach(parent);
        this.frontLayer.attach(parent);
    }
    /**
   * Changes the size of all the canvas layers at once.
   *
   * @param {number} width The new width for the three canvases
   * @param {number} height The new height for the three canvases
   * @access private
   */ setCanvasesSize(width, height) {
        this.backLayer.setSize(width, height);
        this.tokensLayer.setSize(width, height);
        this.frontLayer.setSize(width, height);
    }
    /** Performs an update of the rendered `Minimap` based on the changes registered in the instance. */ updateCanvas() {
        const firstRow = this.minimap.getFirstVisibleScreenRow();
        const lastRow = this.minimap.getLastVisibleScreenRow();
        const devicePixelRatio = this.minimap.getDevicePixelRatio();
        const lineHeight = this.minimap.getLineHeight() * devicePixelRatio;
        const charHeight = this.minimap.getCharHeight() * devicePixelRatio;
        const charWidth = this.minimap.getCharWidth() * devicePixelRatio;
        const { width: canvasWidth , height: canvasHeight  } = this.tokensLayer.getSize();
        const editor = this.minimap.getTextEditor();
        const editorElement = this.minimap.getTextEditorElement();
        // TODO avoid closure: https://stackoverflow.com/a/46256398/7910299
        const getTokenColorClosure = this.displayCodeHighlights ? (scopes)=>getTokenColor(scopes, editorElement, this.textOpacity)
         : ()=>getDefaultColor(editorElement, this.textOpacity)
        ;
        updateTokensLayer(this.tokensLayer, firstRow, lastRow, this.offscreenFirstRow, this.offscreenLastRow, this.pendingChanges, lineHeight, charHeight, charWidth, canvasWidth, editor, editor.getScreenLineCount(), getInvisibleRegExp(editor), getTokenColorClosure, this.ignoreWhitespacesInTokens, this.maxTokensInOneLine);
        if (SPEC_MODE) // call the spy for drawLines which is used inside updateTokensLayer
        this.drawLines(firstRow, lastRow);
        const decorations = this.DecorationManagement.decorationsByTypeThenRows(firstRow, lastRow);
        const renderData = {
            context: this.backLayer.context,
            canvasWidth,
            canvasHeight,
            lineHeight,
            charWidth,
            charHeight,
            orders: _main.getPluginsOrder()
        };
        const drawCustomDecorationLambda = (decoration, data, decorationColor)=>drawCustomDecoration(decoration, data, decorationColor, editorElement)
        ;
        backgroundDecorationDispatcher["background-custom"] = drawCustomDecorationLambda;
        frontDecorationDispatcher["foreground-custom"] = drawCustomDecorationLambda;
        updateBackDecorationsLayer(this.backLayer, firstRow, lastRow, this.offscreenFirstRow, this.offscreenLastRow, this.pendingBackDecorationChanges, renderData, lineHeight, editorElement, decorations);
        renderData.context = this.frontLayer.context;
        updateFrontDecorationsLayer(this.frontLayer, firstRow, lastRow, this.offscreenFirstRow, this.offscreenLastRow, this.pendingFrontDecorationChanges, renderData, lineHeight, editorElement, decorations);
        this.pendingChanges = [];
        this.pendingBackDecorationChanges = [];
        this.pendingFrontDecorationChanges = [];
        /**
     * The first row in the last render of the offscreen canvas.
     *
     * @type {number}
     * @access private
     */ this.offscreenFirstRow = firstRow;
        /**
     * The last row in the last render of the offscreen canvas.
     *
     * @type {number}
     * @access private
     */ this.offscreenLastRow = lastRow;
    }
}
exports.default = CanvasDrawer;
//    ########  ########     ###    ##      ##
//    ##     ## ##     ##   ## ##   ##  ##  ##
//    ##     ## ##     ##  ##   ##  ##  ##  ##
//    ##     ## ########  ##     ## ##  ##  ##
//    ##     ## ##   ##   ######### ##  ##  ##
//    ##     ## ##    ##  ##     ## ##  ##  ##
//    ########  ##     ## ##     ##  ###  ###
/**
 * Performs an update of the tokens layer using the pending changes array.
 *
 * @param {CanvasLayer} tokensLayer
 * @param {number} firstRow FirstRow the first row of the range to update
 * @param {number} lastRow LastRow the last row of the range to update
 * @param {number} offscreenFirstRow
 * @param {number} offscreenLastRow
 * @param {Array<>} pendingChanges
 * @param {number} lineHeight This.minimap.getLineHeight() * devicePixelRatio
 * @param {number} charHeight This.minimap.getCharHeight() * devicePixelRatio
 * @param {number} charWidth This.minimap.getCharWidth() * devicePixelRatio
 * @param {number} canvasWidth This.tokensLayer.getSize().width
 * @param {TextEditor} editor This.minimap.getTextEditor()
 * @param {(t: Token) => string} getTokenColorClosure
 * @param {boolean} ignoreWhitespacesInTokens This.ignoreWhitespacesInTokens
 * @param {number} maxTokensInOneLine This.maxTokensInOneLine
 * @access private
 */ function updateTokensLayer(tokensLayer, firstRow, lastRow, offscreenFirstRow, offscreenLastRow, pendingChanges, lineHeight, charHeight, charWidth, canvasWidth, editor, editorScreenLineCount, invisibleRegExp, getTokenColorClosure, ignoreWhitespacesInTokens, maxTokensInOneLine) {
    // NOTE: this method is the hot function of Minimap. Do not refactor. The code is inlined delibarately.
    const intactRanges = computeIntactRanges(firstRow, lastRow, pendingChanges, offscreenFirstRow, offscreenLastRow);
    // redrawRangesOnLayer
    const context = tokensLayer.context;
    tokensLayer.clearCanvas();
    if (intactRanges.length === 0) drawLines(firstRow, lastRow, 0, lineHeight, charHeight, charWidth, canvasWidth, context, editor, editorScreenLineCount, invisibleRegExp, getTokenColorClosure, ignoreWhitespacesInTokens, maxTokensInOneLine);
    else {
        for(let j = 0, len = intactRanges.length; j < len; j++){
            const intact = intactRanges[j];
            tokensLayer.copyPartFromOffscreen(intact.offscreenRow * lineHeight, (intact.start - firstRow) * lineHeight, (intact.end - intact.start) * lineHeight);
        }
        // drawLinesForRanges
        let currentRow = firstRow;
        for(let i = 0, len1 = intactRanges.length; i < len1; i++){
            const range = intactRanges[i];
            drawLines(currentRow, range.start, currentRow - firstRow, lineHeight, charHeight, charWidth, canvasWidth, context, editor, editorScreenLineCount, invisibleRegExp, getTokenColorClosure, ignoreWhitespacesInTokens, maxTokensInOneLine);
            currentRow = range.end;
        }
        if (currentRow <= lastRow) drawLines(currentRow, lastRow, currentRow - firstRow, lineHeight, charHeight, charWidth, canvasWidth, context, editor, editorScreenLineCount, invisibleRegExp, getTokenColorClosure, ignoreWhitespacesInTokens, maxTokensInOneLine);
    }
    tokensLayer.resetOffscreenSize();
    tokensLayer.copyToOffscreen();
}
/**
 * Performs an update of the back decorations layer using the pending back decorations changes arrays.
 *
 * @param {CanvasLayer} backLayer
 * @param {number} firstRow FirstRow the first row of the range to update
 * @param {number} lastRow LastRow the last row of the range to update
 * @param {number} offscreenFirstRow
 * @param {number} offscreenLastRow
 * @param {Array<>} pendingBackDecorationChanges
 * @param {Object} renderData
 * @param {number} lineHeight This.minimap.getLineHeight() * devicePixelRatio
 * @param {TextEditorElement} editorElement This.minimap.getTextEditorElement()
 * @param {Decoration[]} decorations
 * @access private
 */ function updateBackDecorationsLayer(backLayer, firstRow, lastRow, offscreenFirstRow, offscreenLastRow, pendingBackDecorationChanges, renderData, lineHeight, editorElement, decorations) {
    const intactRanges = computeIntactRanges(firstRow, lastRow, pendingBackDecorationChanges, offscreenFirstRow, offscreenLastRow);
    // NOTE: this method is the hot function of Minimap. Do not refactor. The code is inlined delibarately.
    // redrawRangesOnLayer
    backLayer.clearCanvas();
    if (intactRanges.length === 0) drawBackDecorationsForLines(firstRow, lastRow, 0, renderData, lineHeight, editorElement, decorations);
    else {
        for(let j = 0, len = intactRanges.length; j < len; j++){
            const intact = intactRanges[j];
            backLayer.copyPartFromOffscreen(intact.offscreenRow * lineHeight, (intact.start - firstRow) * lineHeight, (intact.end - intact.start) * lineHeight);
        }
        // drawLinesForRanges
        let currentRow = firstRow;
        for(let i = 0, len1 = intactRanges.length; i < len1; i++){
            const range = intactRanges[i];
            drawBackDecorationsForLines(currentRow, range.start, currentRow - firstRow, renderData, lineHeight, editorElement, decorations);
            currentRow = range.end;
        }
        if (currentRow <= lastRow) drawBackDecorationsForLines(currentRow, lastRow, currentRow - firstRow, renderData, lineHeight, editorElement, decorations);
    }
    backLayer.resetOffscreenSize();
    backLayer.copyToOffscreen();
}
/**
 * Performs an update of the front decorations layer using the pending front decorations changes arrays.
 *
 * @param {CanvasLayer} frontLayer
 * @param {number} firstRow FirstRow the first row of the range to update
 * @param {number} lastRow LastRow the last row of the range to update
 * @param {number} offscreenFirstRow
 * @param {number} offscreenLastRow
 * @param {Array<>} pendingFrontDecorationChanges
 * @param {Object} renderData
 * @param {number} lineHeight This.minimap.getLineHeight() * devicePixelRatio
 * @param {TextEditorElement} editorElement This.minimap.getTextEditorElement()
 * @param {Decoration[]} decorations
 * @access private
 */ function updateFrontDecorationsLayer(frontLayer, firstRow, lastRow, offscreenFirstRow, offscreenLastRow, pendingFrontDecorationChanges, renderData, lineHeight, editorElement, decorations) {
    const intactRanges = computeIntactRanges(firstRow, lastRow, pendingFrontDecorationChanges, offscreenFirstRow, offscreenLastRow);
    // NOTE: this method is the hot function of Minimap. Do not refactor. The code is inlined delibarately.
    // redrawRangesOnLayer
    frontLayer.clearCanvas();
    if (intactRanges.length === 0) drawFrontDecorationsForLines(firstRow, lastRow, 0, renderData, lineHeight, editorElement, decorations);
    else {
        for(let j = 0, len = intactRanges.length; j < len; j++){
            const intact = intactRanges[j];
            frontLayer.copyPartFromOffscreen(intact.offscreenRow * lineHeight, (intact.start - firstRow) * lineHeight, (intact.end - intact.start) * lineHeight);
        }
        // drawLinesForRanges
        let currentRow = firstRow;
        for(let i = 0, len1 = intactRanges.length; i < len1; i++){
            const range = intactRanges[i];
            drawFrontDecorationsForLines(currentRow, range.start, currentRow - firstRow, renderData, lineHeight, editorElement, decorations);
            currentRow = range.end;
        }
        if (currentRow <= lastRow) drawFrontDecorationsForLines(currentRow, lastRow, currentRow - firstRow, renderData, lineHeight, editorElement, decorations);
    }
    frontLayer.resetOffscreenSize();
    frontLayer.copyToOffscreen();
}
const whitespaceTokenRegex = /^\s+$/;
const oneOrMoreWhiteSpaceRegexp = /\s+/;
/**
 * Draws a single token on the given context.
 *
 * @param {CanvasRenderingContext2D} context The target canvas context
 * @param {string} text The token's text content
 * @param {string} color The token's CSS color
 * @param {number} x The x position of the token in the line
 * @param {number} y The y position of the line in the minimap
 * @param {number} charWidth The width of a character in the minimap
 * @param {number} charHeight The height of a character in the minimap
 * @returns {number} The x position at the end of the token
 * @access private
 */ function drawToken(context, text, color, x, y, charWidth, charHeight, ignoreWhitespacesInTokens) {
    context.fillStyle = color;
    if (ignoreWhitespacesInTokens) {
        const length = text.length * charWidth;
        context.fillRect(x, y, length, charHeight);
        return x + length;
    } else {
        let chars = 0;
        for(let j = 0, len = text.length; j < len; j++){
            const char = text[j];
            if (char === " ") {
                if (chars > 0) context.fillRect(x - chars * charWidth, y, chars * charWidth, charHeight);
                chars = 0;
            } else chars++;
            x += charWidth;
        }
        if (chars > 0) context.fillRect(x - chars * charWidth, y, chars * charWidth, charHeight);
        return x;
    }
}
/**
 * Draws lines on the corresponding layer.
 *
 * The lines range to draw is specified by the `firstRow` and `lastRow` parameters.
 *
 * @param {number} firstRow The first row to render
 * @param {number} lastRow The last row to render
 * @param {number} offsetRow The relative offset to apply to rows when rendering them
 * @param {number} lineHeight This.minimap.getLineHeight() * devicePixelRatio
 * @param {number} charHeight This.minimap.getCharHeight() * devicePixelRatio
 * @param {number} charWidth This.minimap.getCharWidth() * devicePixelRatio
 * @param {number} canvasWidth This.tokensLayer.getSize().width
 * @param {CanvasRenderingContext2D} context This.tokensLayer.context
 * @param {TextEditor} editor This.minimap.getTextEditor()
 * @param {number} editorScreenLineCount
 * @param {RegExp} invisibleRegExp
 * @param {(t: Token) => string} getTokenColorClosure
 * @param {boolean} ignoreWhitespacesInTokens This.ignoreWhitespacesInTokens
 * @param {number} maxTokensInOneLine This.maxTokensInOneLine
 * @access private
 */ function drawLines(firstRow, lastRow, offsetRow, lineHeight, charHeight, charWidth, canvasWidth, context, editor, editorScreenLineCount, invisibleRegExp, getTokenColorClosure, ignoreWhitespacesInTokens, maxTokensInOneLine) {
    // NOTE: this method is the hot function of Minimap. Do not refactor. The code is inlined delibarately.
    if (firstRow > lastRow) return;
    let lastLine, x;
    let y = offsetRow * lineHeight - lineHeight;
    // eachTokenForScreenRows
    lastRow = Math.min(lastRow, editorScreenLineCount);
    for(let line = firstRow; line < lastRow; line++){
        const editorTokensForScreenRow = editor.tokensForScreenRow(line);
        const numToken = editorTokensForScreenRow.length;
        const numTokenToRender = Math.min(numToken, maxTokensInOneLine);
        for(let iToken = 0; iToken < numTokenToRender; iToken++){
            const token = editorTokensForScreenRow[iToken];
            const tokenText = token.text.replace(invisibleRegExp, " ");
            const tokenScopes = token.scopes;
            if (lastLine !== line) {
                x = 0;
                let lineDiff;
                if (typeof lastLine !== 'number') lineDiff = 1;
                else lineDiff = line - lastLine;
                let yDiff = lineHeight * lineDiff;
                y += yDiff;
                lastLine = line;
                context.clearRect(x, y, canvasWidth, yDiff);
            }
            if (x > canvasWidth) continue;
            if (whitespaceTokenRegex.test(tokenText)) x += tokenText.length * charWidth;
            else x = drawToken(context, tokenText, getTokenColorClosure(tokenScopes), x, y, charWidth, charHeight, ignoreWhitespacesInTokens);
        }
    }
    context.fill();
}
/**
 * Returns the regexp to replace invisibles substitution characters in editor lines.
 *
 * @param {TextEditor} editor
 * @returns {RegExp} The regular expression to match invisible characters
 * @access private
 */ function getInvisibleRegExp(editor) {
    const invisibles = editor.getInvisibles();
    const regexp = [];
    if (invisibles.cr != null) regexp.push(invisibles.cr);
    if (invisibles.eol != null) regexp.push(invisibles.eol);
    if (invisibles.space != null) regexp.push(invisibles.space);
    if (invisibles.tab != null) regexp.push(invisibles.tab);
    if (regexp.length !== 0) return RegExp(regexp.filter((s)=>{
        return typeof s === "string";
    }).map(_underscorePlus.escapeRegExp).join("|"), "g");
    else return null;
}
/**
 * Dispatchers for decoration drawing (custom decoration drawer added dynamically)
 *
 * @param {Object} backgroundDecorationDispatcher An object with the type to render as key and the render method as value
 */ const backgroundDecorationDispatcher = {
    line: drawLineDecoration,
    "highlight-under": drawHighlightDecoration
};
/**
 * Dispatchers for decoration drawing (custom decoration drawer added dynamically)
 *
 * @param {Object} frontDecorationDispatcher An object with the type to render as key and the render method as value
 */ const frontDecorationDispatcher = {
    gutter: drawGutterDecoration,
    "highlight-over": drawHighlightDecoration,
    "highlight-outline": drawHighlightOutlineDecoration
};
/**
 * Draws a line decoration.
 *
 * @param {Decoration} decoration The decoration to render
 * @param {Object} data The data need to perform the render
 * @param {string} decorationColor Decoration color
 * @access private
 */ function drawLineDecoration(decoration, data, decorationColor) {
    const { context , lineHeight , canvasWidth , yRow  } = data;
    context.fillStyle = decorationColor;
    context.fillRect(0, yRow, canvasWidth, lineHeight);
}
/**
 * Draws a gutter decoration.
 *
 * @param {Decoration} decoration The decoration to render
 * @param {Object} data The data need to perform the render
 * @param {string} decorationColor Decoration color
 * @access private
 */ function drawGutterDecoration(decoration, data, decorationColor) {
    const { context , lineHeight , yRow  } = data;
    context.fillStyle = decorationColor;
    context.fillRect(0, yRow, 1, lineHeight);
}
/**
 * Draws a highlight decoration.
 *
 * It renders only the part of the highlight corresponding to the specified row.
 *
 * @param {Decoration} decoration The decoration to render
 * @param {Object} data The data need to perform the render
 * @param {string} decorationColor Decoration color
 * @access private
 */ function drawHighlightDecoration(decoration, data, decorationColor) {
    const { context , lineHeight , charWidth , canvasWidth , screenRow , yRow  } = data;
    const range = decoration.getMarker().getScreenRange();
    const rowSpan = range.end.row - range.start.row;
    context.fillStyle = decorationColor;
    if (rowSpan === 0) {
        const colSpan = range.end.column - range.start.column;
        context.fillRect(range.start.column * charWidth, yRow, colSpan * charWidth, lineHeight);
    } else if (screenRow === range.start.row) {
        const x = range.start.column * charWidth;
        context.fillRect(x, yRow, canvasWidth - x, lineHeight);
    } else if (screenRow === range.end.row) context.fillRect(0, yRow, range.end.column * charWidth, lineHeight);
    else context.fillRect(0, yRow, canvasWidth, lineHeight);
}
/**
 * Draws a highlight outline decoration.
 *
 * It renders only the part of the highlight corresponding to the specified row.
 *
 * @param {Decoration} decoration The decoration to render
 * @param {Object} data The data need to perform the render
 * @param {string} decorationColor Decoration color
 * @access private
 */ function drawHighlightOutlineDecoration(decoration, data, decorationColor) {
    const { context , lineHeight , charWidth , canvasWidth , screenRow , yRow  } = data;
    let bottomWidth, colSpan, width, xBottomStart, xEnd, xStart;
    const range = decoration.getMarker().getScreenRange();
    const rowSpan = range.end.row - range.start.row;
    const yStart = yRow;
    const yEnd = yStart + lineHeight;
    context.fillStyle = decorationColor;
    if (rowSpan === 0) {
        colSpan = range.end.column - range.start.column;
        width = colSpan * charWidth;
        xStart = range.start.column * charWidth;
        xEnd = xStart + width;
        context.fillRect(xStart, yStart, width, 1);
        context.fillRect(xStart, yEnd - 1, width, 1);
        context.fillRect(xStart, yStart, 1, lineHeight);
        context.fillRect(xEnd, yStart, 1, lineHeight);
    } else if (rowSpan === 1) {
        xStart = range.start.column * charWidth;
        xEnd = range.end.column * charWidth;
        if (screenRow === range.start.row) {
            width = canvasWidth - xStart;
            xBottomStart = Math.max(xStart, xEnd);
            bottomWidth = canvasWidth - xBottomStart;
            context.fillRect(xStart, yStart, width, 1);
            context.fillRect(xBottomStart, yEnd - 1, bottomWidth, 1);
            context.fillRect(xStart, yStart, 1, lineHeight);
            context.fillRect(canvasWidth - 1, yStart, 1, lineHeight);
        } else {
            width = canvasWidth - xStart;
            bottomWidth = canvasWidth - xEnd;
            context.fillRect(0, yStart, xStart, 1);
            context.fillRect(0, yEnd - 1, xEnd, 1);
            context.fillRect(0, yStart, 1, lineHeight);
            context.fillRect(xEnd, yStart, 1, lineHeight);
        }
    } else {
        xStart = range.start.column * charWidth;
        xEnd = range.end.column * charWidth;
        if (screenRow === range.start.row) {
            width = canvasWidth - xStart;
            context.fillRect(xStart, yStart, width, 1);
            context.fillRect(xStart, yStart, 1, lineHeight);
            context.fillRect(canvasWidth - 1, yStart, 1, lineHeight);
        } else if (screenRow === range.end.row) {
            width = canvasWidth - xStart;
            context.fillRect(0, yEnd - 1, xEnd, 1);
            context.fillRect(0, yStart, 1, lineHeight);
            context.fillRect(xEnd, yStart, 1, lineHeight);
        } else {
            context.fillRect(0, yStart, 1, lineHeight);
            context.fillRect(canvasWidth - 1, yStart, 1, lineHeight);
            if (screenRow === range.start.row + 1) context.fillRect(0, yStart, xStart, 1);
            if (screenRow === range.end.row - 1) context.fillRect(xEnd, yEnd - 1, canvasWidth - xEnd, 1);
        }
    }
}
/**
 * Draws a custom decoration.
 *
 * It renders only the part of the highlight corresponding to the specified row.
 *
 * @param {Decoration} decoration The decoration to render
 * @param {Object} data The data need to perform the render
 * @param {string} decorationColor Decoration color
 * @param {TextEditorElement} editorElement
 * @access private
 */ function drawCustomDecoration(decoration, data, decorationColor, editorElement) {
    const renderRoutine = decoration.getProperties().render;
    if (renderRoutine) {
        data.color = decorationColor;
        renderRoutine(decoration, data, editorElement);
    }
}
/**
 * Draws the specified decorations for the current `screenRow`.
 *
 * The `decorations` object contains all the decorations grouped by type and then rows.
 *
 * @param {number} screenRow The screen row index for which render decorations
 * @param {Object} decorations The object containing all the decorations
 * @param {Object} renderData The object containing the render data
 * @param {Object} types An object with the type to render as key and the render method as value
 * @param {TextEditorElement} editorElement
 * @access private
 */ function drawDecorations(screenRow, decorations, renderData, types, editorElement) {
    let decorationsToRender = [];
    renderData.context.clearRect(0, renderData.yRow, renderData.canvasWidth, renderData.lineHeight);
    for(const i in types)decorationsToRender = decorationsToRender.concat(decorations[i] != null ? decorations[i][screenRow] || [] : []);
    decorationsToRender.sort((a, b)=>(renderData.orders[a.properties.plugin] || 0) - (renderData.orders[b.properties.plugin] || 0)
    );
    if (decorationsToRender != null ? decorationsToRender.length : undefined) for(let i1 = 0, len = decorationsToRender.length; i1 < len; i1++){
        const decoration = decorationsToRender[i1];
        const decorationDrawer = types[decoration.properties.type];
        if (!SPEC_MODE) decorationDrawer(decoration, renderData, /* decorationColor */ getDecorationColor(decoration, editorElement));
        else {
            // get the real function name from the mangeld Parcel names
            const functionName = decorationDrawer.name.split("$").pop().replace("Lambda", "");
            // call the spy:
            thisSpec[functionName](decoration, renderData, /* decorationColor */ getDecorationColor(decoration, editorElement));
        }
    }
}
/**
 * Draws front decorations on the corresponding layer.
 *
 * The lines range to draw is specified by the `firstRow` and `lastRow` parameters.
 *
 * @param {number} firstRow The first row to render
 * @param {number} lastRow The last row to render
 * @param {number} offsetRow The relative offset to apply to rows when rendering them
 * @param {Object} renderData
 * @param {number} lineHeight This.minimap.getLineHeight() * devicePixelRatio
 * @param {TextEditorElement} editorElement This.minimap.getTextEditorElement()
 * @param {Decoration[]} decorations
 * @access private
 */ function drawFrontDecorationsForLines(firstRow, lastRow, offsetRow, renderData, lineHeight, editorElement, decorations) {
    if (firstRow > lastRow) return;
    for(let screenRow = firstRow; screenRow <= lastRow; screenRow++){
        renderData.row = offsetRow + (screenRow - firstRow);
        renderData.yRow = renderData.row * lineHeight;
        renderData.screenRow = screenRow;
        drawDecorations(screenRow, decorations, renderData, frontDecorationDispatcher, editorElement);
    }
    renderData.context.fill();
}
/**
 * Draws back decorations on the corresponding layer.
 *
 * The lines range to draw is specified by the `firstRow` and `lastRow` parameters.
 *
 * @param {number} firstRow The first row to render
 * @param {number} lastRow The last row to render
 * @param {number} offsetRow The relative offset to apply to rows when rendering them
 * @param {Object} renderData
 * @param {number} lineHeight This.minimap.getLineHeight() * devicePixelRatio
 * @param {TextEditorElement} editorElement This.minimap.getTextEditorElement()
 * @param {Decoration[]} decorations
 * @access private
 */ function drawBackDecorationsForLines(firstRow, lastRow, offsetRow, renderData, lineHeight, editorElement, decorations) {
    if (firstRow > lastRow) return;
    for(let screenRow = firstRow; screenRow <= lastRow; screenRow++){
        renderData.row = offsetRow + (screenRow - firstRow);
        renderData.yRow = renderData.row * lineHeight;
        renderData.screenRow = screenRow;
        drawDecorations(screenRow, decorations, renderData, backgroundDecorationDispatcher, editorElement);
    }
    renderData.context.fill();
}
//     ######   #######  ##        #######  ########   ######
//    ##    ## ##     ## ##       ##     ## ##     ## ##    ##
//    ##       ##     ## ##       ##     ## ##     ## ##
//    ##       ##     ## ##       ##     ## ########   ######
//    ##       ##     ## ##       ##     ## ##   ##         ##
//    ##    ## ##     ## ##       ##     ## ##    ##  ##    ##
//     ######   #######  ########  #######  ##     ##  ######
/**
 * Returns the opacity value to use when rendering the `Minimap` text.
 *
 * @returns {Number} The text opacity value Unused (inlined)
 */ // getTextOpacity () { return this.textOpacity }
/**
 * Returns the default text color for an editor content.
 *
 * The color value is directly read from the `TextEditorView` computed styles.
 *
 * @param {TextEditorElement} editorElement
 * @param {number} textOpacity
 * @returns {string} A CSS color
 */ function getDefaultColor(editorElement, textOpacity) {
    const color = _main.styleReader.retrieveStyleFromDom([
        ".editor"
    ], "color", editorElement, true);
    return transparentize(color, textOpacity);
}
/**
 * Returns the text color for the passed-in scopes
 *
 * The color value is read from the DOM by creating a node structure that match the token `scope` property.
 *
 * @param {string[]} scopes An array of scopes for a `TextEditor` token (token.scopeDescriptor || token.scopes)
 * @param {TextEditorElement} editorElement
 * @param {number} textOpacity
 * @returns {string} The CSS color for the provided token
 */ function getTokenColor(scopes, editorElement, textOpacity) {
    const color = _main.styleReader.retrieveStyleFromDom(scopes, "color", editorElement, true);
    return transparentize(color, textOpacity);
}
/**
 * Converts a `rgb(...)` color into a `rgba(...)` color with the specified opacity.
 *
 * @param {string} color The CSS RGB color to transparentize
 * @param {number} opacity The opacity amount
 * @returns {string} The transparentized CSS color
 * @access private
 */ function transparentize(color, opacity) {
    // assumes that color is in form of `rgb(content)` with no spaces around the given value
    return `rgba(${color.slice(4, -1)}, ${opacity})`;
}
/**
 * Returns the background color for the passed-in `decoration` object.
 *
 * The color value is read from the DOM by creating a node structure that match the decoration `scope` property unless
 * the decoration provides its own `color` property.
 *
 * @param {Decoration} decoration The decoration to get the color for
 * @param {TextEditorElement} editorElement
 * @returns {string} The CSS color for the provided decoration
 */ function getDecorationColor(decoration, editorElement) {
    const properties = decoration.getProperties();
    if (properties.color) return properties.color;
    if (properties.scope) {
        const scopeString = properties.scope.split(oneOrMoreWhiteSpaceRegexp);
        return _main.styleReader.retrieveStyleFromDom(scopeString, "background-color", editorElement, true);
    } else return getDefaultColor(editorElement);
}
//    ########     ###    ##    ##  ######   ########  ######
//    ##     ##   ## ##   ###   ## ##    ##  ##       ##    ##
//    ##     ##  ##   ##  ####  ## ##        ##       ##
//    ########  ##     ## ## ## ## ##   #### ######    ######
//    ##   ##   ######### ##  #### ##    ##  ##             ##
//    ##    ##  ##     ## ##   ### ##    ##  ##       ##    ##
//    ##     ## ##     ## ##    ##  ######   ########  ######
/**
 * Computes the ranges that are not affected by the current pending changes.
 *
 * @param {number} firstRow The first row of the rendered region
 * @param {number} lastRow The last row of the rendered region
 * @param {number | null} offscreenFirstRow CanvasDrawer.offscreenLastRow
 * @param {number | null} offscreenLastRow CanvasDrawer.offscreenLastRow
 * @returns {Object[]} The intact ranges in the rendered region
 * @access private
 */ function computeIntactRanges(firstRow, lastRow, changes, offscreenFirstRow, offscreenLastRow) {
    // TODO when do they get null?
    if (offscreenFirstRow == null && offscreenLastRow == null) return [];
    // At first, the whole range is considered intact
    let intactRanges = [
        {
            start: offscreenFirstRow,
            end: offscreenLastRow,
            offscreenRow: 0
        }, 
    ];
    for(let i = 0, len = changes.length; i < len; i++){
        const change = changes[i];
        const newIntactRanges = [];
        for(let j = 0, intactLen = intactRanges.length; j < intactLen; j++){
            const range = intactRanges[j];
            if (change.end < range.start && change.screenDelta !== 0) // The change is above of the range and lines are either
            // added or removed
            newIntactRanges.push({
                start: range.start + change.screenDelta,
                end: range.end + change.screenDelta,
                offscreenRow: range.offscreenRow
            });
            else if (change.end < range.start || change.start > range.end) // The change is outside the range but didn't add
            // or remove lines
            newIntactRanges.push(range);
            else {
                // The change is within the range, there's one intact range
                // from the range start to the change start
                if (change.start > range.start) newIntactRanges.push({
                    start: range.start,
                    end: change.start - 1,
                    offscreenRow: range.offscreenRow
                });
                if (change.end < range.end) {
                    // The change ends within the range
                    if (change.bufferDelta !== 0) // Lines are added or removed, the intact range starts in the
                    // next line after the change end plus the screen delta
                    newIntactRanges.push({
                        start: change.end + change.screenDelta + 1,
                        end: range.end + change.screenDelta,
                        offscreenRow: range.offscreenRow + change.end + 1 - range.start
                    });
                    else if (change.screenDelta !== 0) // Lines are added or removed in the display buffer, the intact
                    // range starts in the next line after the change end plus the
                    // screen delta
                    newIntactRanges.push({
                        start: change.end + change.screenDelta + 1,
                        end: range.end + change.screenDelta,
                        offscreenRow: range.offscreenRow + change.end + 1 - range.start
                    });
                    else // No lines are added, the intact range starts on the line after
                    // the change end
                    newIntactRanges.push({
                        start: change.end + 1,
                        end: range.end,
                        offscreenRow: range.offscreenRow + change.end + 1 - range.start
                    });
                }
            }
        }
        intactRanges = newIntactRanges;
    }
    return truncateIntactRanges(intactRanges, firstRow, lastRow);
}
/**
 * Truncates the intact ranges so that they doesn't expand past the visible area of the minimap.
 *
 * @param {Object[]} intactRanges The initial array of ranges
 * @param {number} firstRow The first row of the rendered region
 * @param {number} lastRow The last row of the rendered region
 * @returns {Object[]} The array of truncated ranges
 * @access private
 */ function truncateIntactRanges(intactRanges, firstRow, lastRow) {
    let i = 0;
    while(i < intactRanges.length){
        const range = intactRanges[i];
        if (range.start < firstRow) {
            range.offscreenRow += firstRow - range.start;
            range.start = firstRow;
        }
        if (range.end > lastRow) range.end = lastRow;
        if (range.start >= range.end) intactRanges.splice(i--, 1);
        i++;
    }
    return intactRanges.sort((a, b)=>{
        return a.offscreenRow - b.offscreenRow;
    });
}

},{"../deps/underscore-plus":"fHACO","mixto":"kH7jF","../main":"lUIf1","../canvas-layer":"avJpS","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"avJpS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @babel */ "use strict";
class CanvasLayer {
    constructor(){
        /**
     * The onscreen canvas.
     *
     * @type {HTMLCanvasElement}
     */ this.canvas = document.createElement("canvas");
        const desynchronized = false // TODO Electron 9 has color issues #786
        ;
        /**
     * The onscreen canvas context.
     *
     * @type {CanvasRenderingContext2D}
     */ this.context = this.canvas.getContext("2d", {
            desynchronized
        });
        this.canvas.webkitImageSmoothingEnabled = false;
        this.context.imageSmoothingEnabled = false;
        /**
     * The offscreen canvas.
     *
     * @type {HTMLCanvasElement}
     * @access private
     */ this.offscreenCanvas = document.createElement("canvas");
        /**
     * The offscreen canvas context.
     *
     * @type {CanvasRenderingContext2D}
     * @access private
     */ this.offscreenContext = this.offscreenCanvas.getContext("2d", {
            desynchronized
        });
        this.offscreenCanvas.webkitImageSmoothingEnabled = false;
        this.offscreenContext.imageSmoothingEnabled = false;
    }
    attach(parent) {
        if (this.canvas.parentNode) return;
        parent.appendChild(this.canvas);
    }
    setSize(width = 0, height = 0) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.context.imageSmoothingEnabled = false;
        this.resetOffscreenSize();
    }
    getSize() {
        return {
            width: this.canvas.width,
            height: this.canvas.height
        };
    }
    resetOffscreenSize() {
        this.offscreenCanvas.width = this.canvas.width;
        this.offscreenCanvas.height = this.canvas.height;
        this.offscreenContext.imageSmoothingEnabled = false;
    }
    copyToOffscreen() {
        if (this.canvas.width > 0 && this.canvas.height > 0) this.offscreenContext.drawImage(this.canvas, 0, 0);
    }
    copyFromOffscreen() {
        if (this.offscreenCanvas.width > 0 && this.offscreenCanvas.height > 0) this.context.drawImage(this.offscreenCanvas, 0, 0);
    }
    copyPartFromOffscreen(srcY, destY, height) {
        if (this.offscreenCanvas.width > 0 && this.offscreenCanvas.height > 0) this.context.drawImage(this.offscreenCanvas, 0, srcY, this.offscreenCanvas.width, height, 0, destY, this.offscreenCanvas.width, height);
    }
    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
exports.default = CanvasLayer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"73QcF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function include(cls, ...mixins) {
    mixins.forEach((mixin)=>{
        includeMixin(cls, mixin);
    });
}
exports.default = include;
function includeMixin(target, source) {
    Object.getOwnPropertyNames(source).forEach((k)=>{
        if ([
            "length",
            "name",
            "arguments",
            "caller",
            "prototype",
            "includeInto"
        ].indexOf(k) >= 0) return;
        const descriptor = Object.getOwnPropertyDescriptor(source, k);
        Object.defineProperty(target, k, descriptor);
    });
    Object.getOwnPropertyNames(source.prototype).forEach((k)=>{
        if (k === "constructor") return;
        const descriptor = Object.getOwnPropertyDescriptor(source.prototype, k);
        Object.defineProperty(target.prototype, k, descriptor);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"dpbCf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function element(cls, elementName) {
    if (!window.customElements.get(elementName)) window.customElements.define(elementName, cls);
}
exports.default = element;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"6CRRj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMinimapQuickSettingsElement", ()=>createMinimapQuickSettingsElement
);
var _atom = require("atom");
var _atomUtilsPlus = require("atom-utils-plus");
var _main = require("./main");
var _element = require("./decorators/element");
var _elementDefault = parcelHelpers.interopDefault(_element);
var _include = require("./decorators/include");
var _includeDefault = parcelHelpers.interopDefault(_include);
"use strict";
const TAG_NAME = "minimap-quick-settings";
/** @access private */ class MinimapQuickSettingsElement extends HTMLElement {
    static initClass() {
        _includeDefault.default(this, _atomUtilsPlus.EventsDelegation, _atomUtilsPlus.SpacePenDSL.Babel);
        _elementDefault.default(this, TAG_NAME);
    }
    static content() {
        this.div({
            class: "select-list popover-list minimap-quick-settings"
        }, ()=>{
            this.input({
                type: "text",
                class: "hidden-input",
                outlet: "hiddenInput"
            });
            this.ol({
                class: "list-group mark-active",
                outlet: "list"
            }, ()=>{
                this.li({
                    class: "separator",
                    outlet: "separator"
                });
                this.li({
                    class: "code-highlights",
                    outlet: "codeHighlights"
                }, "code-highlights");
                this.li({
                    class: "absolute-mode",
                    outlet: "absoluteMode"
                }, "absolute-mode");
                this.li({
                    class: "adjust-absolute-mode-height",
                    outlet: "adjustAbsoluteModeHeight"
                }, "adjust-absolute-mode-height");
            });
            this.div({
                class: "btn-group"
            }, ()=>{
                this.button({
                    class: "btn btn-default",
                    outlet: "onLeftButton"
                }, "On Left");
                this.button({
                    class: "btn btn-default",
                    outlet: "onRightButton"
                }, "On Right");
            });
        });
    }
    createdCallback() {
        this.buildContent();
    }
    setModel(minimap) {
        this.selectedItem = null;
        this.minimap = minimap;
        this.emitter = new _atom.Emitter();
        this.subscriptions = new _atom.CompositeDisposable();
        this.plugins = {
        };
        this.itemsActions = new WeakMap();
        this.codeHighlights.classList.toggle("active", this.minimap.displayCodeHighlights);
        this.itemsActions.set(this.codeHighlights, ()=>{
            atom.config.set("minimap.displayCodeHighlights", !this.minimap.displayCodeHighlights);
        });
        this.itemsActions.set(this.absoluteMode, ()=>{
            atom.config.set("minimap.absoluteMode", !atom.config.get("minimap.absoluteMode"));
        });
        this.itemsActions.set(this.adjustAbsoluteModeHeight, ()=>{
            atom.config.set("minimap.adjustAbsoluteModeHeight", !atom.config.get("minimap.adjustAbsoluteModeHeight"));
        });
        this.subscriptions.add(_main.onDidAddPlugin(({ name , plugin  })=>{
            return this.addItemFor(name, plugin);
        }), _main.onDidRemovePlugin(({ name , plugin  })=>{
            return this.removeItemFor(name, plugin);
        }), _main.onDidActivatePlugin(({ name , plugin  })=>{
            return this.activateItem(name, plugin);
        }), _main.onDidDeactivatePlugin(({ name , plugin  })=>{
            return this.deactivateItem(name, plugin);
        }), atom.commands.add("minimap-quick-settings", {
            "core:move-up": ()=>{
                this.selectPreviousItem();
            },
            "core:move-down": ()=>{
                this.selectNextItem();
            },
            "core:move-left": ()=>{
                atom.config.set("minimap.displayMinimapOnLeft", true);
            },
            "core:move-right": ()=>{
                atom.config.set("minimap.displayMinimapOnLeft", false);
            },
            "core:cancel": ()=>{
                this.destroy();
            },
            "core:confirm": ()=>{
                this.toggleSelectedItem();
            }
        }), this.subscribeTo(this.codeHighlights, {
            mousedown: (e)=>{
                e.preventDefault();
                atom.config.set("minimap.displayCodeHighlights", !this.minimap.displayCodeHighlights);
            }
        }), this.subscribeTo(this.absoluteMode, {
            mousedown: (e)=>{
                e.preventDefault();
                atom.config.set("minimap.absoluteMode", !atom.config.get("minimap.absoluteMode"));
            }
        }), this.subscribeTo(this.adjustAbsoluteModeHeight, {
            mousedown: (e)=>{
                e.preventDefault();
                atom.config.set("minimap.adjustAbsoluteModeHeight", !atom.config.get("minimap.adjustAbsoluteModeHeight"));
            }
        }), this.subscribeTo(this.hiddenInput, {
            focusout: (e)=>{
                this.destroy();
            }
        }, {
            passive: true
        }), this.subscribeTo(this.onLeftButton, {
            mousedown: (e)=>{
                e.preventDefault();
                atom.config.set("minimap.displayMinimapOnLeft", true);
            }
        }), this.subscribeTo(this.onRightButton, {
            mousedown: (e)=>{
                e.preventDefault();
                atom.config.set("minimap.displayMinimapOnLeft", false);
            }
        }), atom.config.observe("minimap.displayCodeHighlights", (bool)=>{
            this.codeHighlights.classList.toggle("active", bool);
        }), atom.config.observe("minimap.absoluteMode", (bool)=>{
            this.absoluteMode.classList.toggle("active", bool);
        }), atom.config.observe("minimap.adjustAbsoluteModeHeight", (bool)=>{
            this.adjustAbsoluteModeHeight.classList.toggle("active", bool);
        }), atom.config.observe("minimap.displayMinimapOnLeft", (bool)=>{
            this.onLeftButton.classList.toggle("selected", bool);
            this.onRightButton.classList.toggle("selected", !bool);
        }));
        this.initList();
    }
    onDidDestroy(callback) {
        return this.emitter.on("did-destroy", callback);
    }
    attach() {
        const workspaceElement = atom.views.getView(atom.workspace);
        workspaceElement.appendChild(this);
        this.hiddenInput.focus();
    }
    destroy() {
        this.emitter.emit("did-destroy");
        this.subscriptions.dispose();
        this.parentNode.removeChild(this);
    }
    initList() {
        this.itemsDisposables = new WeakMap();
        for(const name in _main.plugins)this.addItemFor(name, _main.plugins[name]);
    }
    toggleSelectedItem() {
        const fn = this.itemsActions.get(this.selectedItem);
        if (typeof fn === "function") fn();
    }
    selectNextItem() {
        this.selectedItem.classList.remove("selected");
        if (this.selectedItem.nextSibling != null) {
            this.selectedItem = this.selectedItem.nextSibling;
            if (this.selectedItem.matches(".separator")) this.selectedItem = this.selectedItem.nextSibling;
        } else this.selectedItem = this.list.firstChild;
        this.selectedItem.classList.add("selected");
    }
    selectPreviousItem() {
        this.selectedItem.classList.remove("selected");
        if (this.selectedItem.previousSibling != null) {
            this.selectedItem = this.selectedItem.previousSibling;
            if (this.selectedItem.matches(".separator")) this.selectedItem = this.selectedItem.previousSibling;
        } else this.selectedItem = this.list.lastChild;
        this.selectedItem.classList.add("selected");
    }
    addItemFor(name, plugin) {
        const item = document.createElement("li");
        const action = ()=>{
            _main.togglePluginActivation(name);
        };
        if (plugin.isActive()) item.classList.add("active");
        item.textContent = name;
        this.itemsActions.set(item, action);
        this.itemsDisposables.set(item, this.addDisposableEventListener(item, "mousedown", (e)=>{
            e.preventDefault();
            action();
        }));
        this.plugins[name] = item;
        this.list.insertBefore(item, this.separator);
        if (!(this.selectedItem != null)) {
            this.selectedItem = item;
            this.selectedItem.classList.add("selected");
        }
    }
    removeItemFor(name, plugin) {
        try {
            this.list.removeChild(this.plugins[name]);
        } catch (error) {
        }
        delete this.plugins[name];
    }
    activateItem(name, plugin) {
        this.plugins[name].classList.add("active");
    }
    deactivateItem(name, plugin) {
        this.plugins[name].classList.remove("active");
    }
}
MinimapQuickSettingsElement.initClass();
function createMinimapQuickSettingsElement() {
    const element = document.createElement(TAG_NAME);
    element.createdCallback();
    return element;
}

},{"atom-utils-plus":"4lKBF","./main":"lUIf1","./decorators/element":"dpbCf","./decorators/include":"73QcF","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"hTPeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _atom = require("atom");
var _decoration = require("./decoration");
var _decorationDefault = parcelHelpers.interopDefault(_decoration);
var _stableAdapter = require("./adapters/stable-adapter");
var _stableAdapterDefault = parcelHelpers.interopDefault(_stableAdapter);
var _main = require("./main");
"use strict";
let nextModelId = 1;
// returned in the decorations API when minimap is destoryed
const disposedDisposable = new _atom.Disposable();
disposedDisposable.dispose();
const markerMock = {
    onDidDestroy: ()=>disposedDisposable
    ,
    getScreenRange: ()=>new Range()
};
const dummyDecoration = new _decorationDefault.default(markerMock, null, {
});
class Minimap {
    /**
   * Creates a new Minimap instance for the given `TextEditor`.
   *
   * @param {Object} options An object with the new Minimap properties
   * @param {TextEditor} options.textEditor The target text editor for the minimap
   * @param {boolean} [options.standAlone] Whether this minimap is in stand-alone mode or not
   * @param {number} [options.width] The minimap width in pixels
   * @param {number} [options.height] The minimap height in pixels
   * @throws {Error} Cannot create a minimap without an editor
   */ constructor(options = {
    }){
        if (!options.textEditor) throw new Error("Cannot create a minimap without an editor");
        /**
     * The Minimap's minimapElement.
     *
     * @type {MinimapElement}
     * @access private
     */ this.minimapElement = undefined;
        // local cache of this.minimapElement.DecorationManagement
        this.DecorationManagement = undefined;
        /**
     * The Minimap's text editor.
     *
     * @type {TextEditor}
     * @access private
     */ this.textEditor = options.textEditor;
        /**
     * The Minimap's text editor element.
     *
     * @access private
     */ this.editorElement = undefined;
        /**
     * The stand-alone state of the current Minimap.
     *
     * @type {boolean}
     * @access private
     */ this.standAlone = options.standAlone;
        /**
     * The width of the current Minimap.
     *
     * @type {number}
     * @access private
     */ this.width = options.width;
        /**
     * The height of the current Minimap.
     *
     * @type {number}
     * @access private
     */ this.height = options.height;
        /**
     * The id of the current Minimap.
     *
     * @type {Number}
     * @access private
     */ this.id = nextModelId++;
        /**
     * The events emitter of the current Minimap.
     *
     * @type {Emitter}
     * @access private
     */ this.emitter = new _atom.Emitter();
        /**
     * The Minimap's subscriptions.
     *
     * @type {CompositeDisposable}
     * @access private
     */ this.subscriptions = new _atom.CompositeDisposable();
        /**
     * The adapter object leverage the access to several properties from the `TextEditor`/`TextEditorElement` to support
     * the different APIs between different version of Atom.
     *
     * @type {Object}
     * @access private
     */ this.adapter = null;
        /**
     * The char height of the current Minimap, will be `undefined` unless `setCharWidth` is called.
     *
     * @type {number}
     * @access private
     */ this.charHeight = null;
        /**
     * The char height from the package's configuration. Will be overriden by the instance value.
     *
     * @type {number}
     * @access private
     */ this.configCharHeight = null;
        /**
     * The char width of the current Minimap, will be `undefined` unless `setCharWidth` is called.
     *
     * @type {number}
     * @access private
     */ this.charWidth = null;
        /**
     * The char width from the package's configuration. Will be overriden by the instance value.
     *
     * @type {number}
     * @access private
     */ this.configCharWidth = null;
        /**
     * The interline of the current Minimap, will be `undefined` unless `setCharWidth` is called.
     *
     * @type {number}
     * @access private
     */ this.interline = null;
        /**
     * The interline from the package's configuration. Will be overriden by the instance value.
     *
     * @type {number}
     * @access private
     */ this.configInterline = null;
        /**
     * The devicePixelRatioRounding of the current Minimap, will be `undefined` unless `setDevicePixelRatioRounding` is called.
     *
     * @type {boolean}
     * @access private
     */ this.devicePixelRatioRounding = null;
        /**
     * The devicePixelRatioRounding from the package's configuration. Will be overriden by the instance value.
     *
     * @type {boolean}
     * @access private
     */ this.configDevicePixelRatioRounding = null;
        /**
     * A number of milliseconds which determines how often the minimap should redraw itself after detecting changes in
     * the text editor. A value of 0 will cause the minimap to redraw immediately.
     *
     * @type {number}
     * @access private
     */ this.redrawDelay = 0;
        /**
     * A boolean value to store whether this Minimap have been destroyed or not.
     *
     * @type {boolean}
     * @access private
     */ this.destroyed = false;
        /**
     * A boolean value to store whether the `scrollPastEnd` setting is enabled or not.
     *
     * @type {boolean}
     * @access private
     */ this.scrollPastEnd = false;
        /**
     * An array of changes registered with textEditor.onDidChange() which have not yet been handled
     *
     * @type {Array}
     * @access private
     */ this.pendingChangeEvents = [];
        /**
     * Timer reference which, once fired, will flush all the pending changes stored in this.pendingChangeEvents array.
     *
     * @type {Timer | null}
     * @access private
     */ this.flushChangesTimer = null;
        if (atom.views.getView(this.textEditor).getScrollTop != null) this.adapter = new _stableAdapterDefault.default(this.textEditor);
        /**
     * When in stand-alone or independent scrolling mode, this value can be used instead of the computed scroll.
     *
     * @type {number}
     * @access private
     */ this.scrollTop = 0;
        let configSubscription = this.subscribeToConfig();
        this.subscriptions.add(configSubscription, this.textEditor.onDidChangeGrammar(()=>{
            this.subscriptions.remove(configSubscription);
            configSubscription.dispose();
            configSubscription = this.subscribeToConfig();
            this.subscriptions.add(configSubscription);
        }), this.adapter.onDidChangeScrollTop(()=>{
            if (!this.standAlone && !this.ignoreTextEditorScroll && !this.inChangeScrollTop) {
                this.inChangeScrollTop = true;
                this.updateScrollTop();
                this.emitter.emit("did-change-scroll-top", this);
                this.inChangeScrollTop = false;
            }
            if (this.ignoreTextEditorScroll) this.ignoreTextEditorScroll = false;
        }), this.adapter.onDidChangeScrollLeft(()=>{
            if (!this.standAlone) this.emitter.emit("did-change-scroll-left", this);
        }), this.textEditor.onDidChange((changes)=>{
            this.scheduleChanges(changes);
        }), this.textEditor.onDidDestroy(()=>{
            if (_main.editorsMinimaps) _main.editorsMinimaps.delete(this.textEditor);
            this.destroy();
        }), /*
      FIXME Some changes occuring during the tokenization produces
      ranges that deceive the canvas rendering by making some
      lines at the end of the buffer intact while they are in fact not,
      resulting in extra lines appearing at the end of the minimap.
      Forcing a whole repaint to fix that bug is suboptimal but works.
      */ this.textEditor.onDidTokenize(()=>{
            this.emitter.emit("did-change-config");
        }));
    }
    /** Destroys the model. */ destroy() {
        if (this.destroyed) return;
        clearTimeout(this.flushChangesTimer);
        this.pendingChangeEvents = [];
        this.subscriptions.dispose();
        this.emitter.emit("did-destroy");
        this.emitter.dispose();
        this.destroyed = true;
    }
    /**
   * Returns `true` when this `Minimap` has benn destroyed.
   *
   * @returns {boolean} Whether this Minimap has been destroyed or not
   */ isDestroyed() {
        return this.destroyed;
    }
    /**
   * Schedule changes from textEditor.onDidChange() to be handled at a later time
   *
   * @param {Array} changes The changes to be scheduled
   * @returns Void
   * @access private
   */ scheduleChanges(changes) {
        this.pendingChangeEvents = this.pendingChangeEvents.concat(changes);
        // Optimisation: If the redraw delay is set to 0, do not even schedule a timer
        if (!this.redrawDelay) this.requestFlushChanges();
        if (!this.flushChangesTimer) // If any changes happened within the timeout's delay, a timeout will already have been
        // scheduled -> no need to schedule again
        this.flushChangesTimer = setTimeout(()=>{
            this.requestFlushChanges();
        }, this.redrawDelay);
    }
    /**
   * Flush all changes which have been scheduled for later processing by this.scheduleChanges()
   *
   * @returns Void
   * @access private
   */ flushChanges() {
        clearTimeout(this.flushChangesTimer);
        this.flushChangesTimer = null;
        this.emitChanges(this.pendingChangeEvents);
        this.pendingChangeEvents = [];
    }
    /**
   * Requests flush changes if not already requested
   *
   * @returns Void
   * @access private
   */ requestFlushChanges() {
        if (!this.requestedFlushChanges) this.requestedFlushChanges = requestAnimationFrame(()=>{
            this.flushChanges();
            if (this.requestedFlushChanges) {
                cancelAnimationFrame(this.requestedFlushChanges);
                this.requestedFlushChanges = null;
            }
        });
    }
    /**
   * Registers an event listener to the `did-change` event.
   *
   * @param {function(event:Object):void} callback A function to call when the event is triggered. the callback will be
   *   called with an event object with the following properties:
   *
   *   - Start: The change's start row number
   *   - End: The change's end row number
   *   - ScreenDelta: the delta in buffer rows between the versions before and after the change
   *
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChange(callback) {
        return this.emitter.on("did-change", callback);
    }
    /**
   * Registers an event listener to the `did-change-config` event.
   *
   * @param {function():void} callback A function to call when the event is triggered.
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeConfig(callback) {
        return this.emitter.on("did-change-config", callback);
    }
    /**
   * Registers an event listener to the `did-change-scroll-top` event.
   *
   * The event is dispatched when the text editor `scrollTop` value have been changed or when the minimap scroll top
   * have been changed in stand-alone mode.
   *
   * @param {function(minimap:Minimap):void} callback A function to call when the event is triggered. The current
   *   Minimap is passed as argument to the callback.
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeScrollTop(callback) {
        return this.emitter.on("did-change-scroll-top", callback);
    }
    /**
   * Registers an event listener to the `did-change-scroll-left` event.
   *
   * @param {function(minimap:Minimap):void} callback A function to call when the event is triggered. The current
   *   Minimap is passed as argument to the callback.
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeScrollLeft(callback) {
        return this.emitter.on("did-change-scroll-left", callback);
    }
    /**
   * Registers an event listener to the `did-change-stand-alone` event.
   *
   * This event is dispatched when the stand-alone of the current Minimap is either enabled or disabled.
   *
   * @param {function(minimap:Minimap):void} callback A function to call when the event is triggered. The current
   *   Minimap is passed as argument to the callback.
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidChangeStandAlone(callback) {
        return this.emitter.on("did-change-stand-alone", callback);
    }
    /**
   * Registers an event listener to the `did-destroy` event.
   *
   * This event is dispatched when this Minimap have been destroyed. It can occurs either because the {@link destroy}
   * method have been called on the Minimap or because the target text editor have been destroyed.
   *
   * @param {function():void} callback A function to call when the event is triggered.
   * @returns {Disposable} A disposable to stop listening to the event
   */ onDidDestroy(callback) {
        return this.emitter.on("did-destroy", callback);
    }
    /**
   * Registers to the config changes for the current editor scope.
   *
   * @returns {Disposable} The disposable to dispose all the registered events
   * @access private
   */ subscribeToConfig() {
        const subs = new _atom.CompositeDisposable();
        const opts = {
            scope: this.textEditor.getRootScopeDescriptor()
        };
        subs.add(atom.config.observe("editor.scrollPastEnd", opts, (scrollPastEnd)=>{
            this.scrollPastEnd = scrollPastEnd;
            this.adapter.scrollPastEnd = this.scrollPastEnd;
            this.emitter.emit("did-change-config");
        }), atom.config.observe("minimap.charHeight", opts, (configCharHeight)=>{
            this.configCharHeight = configCharHeight;
            this.updateScrollTop();
            this.emitter.emit("did-change-config");
        }), atom.config.observe("minimap.charWidth", opts, (configCharWidth)=>{
            this.configCharWidth = configCharWidth;
            this.updateScrollTop();
            this.emitter.emit("did-change-config");
        }), atom.config.observe("minimap.interline", opts, (configInterline)=>{
            this.configInterline = configInterline;
            this.updateScrollTop();
            this.emitter.emit("did-change-config");
        }), atom.config.observe("minimap.independentMinimapScroll", opts, (independentMinimapScroll)=>{
            this.independentMinimapScroll = independentMinimapScroll;
            this.updateScrollTop();
        }), atom.config.observe("minimap.scrollSensitivity", opts, (scrollSensitivity)=>{
            this.scrollSensitivity = scrollSensitivity;
        }), atom.config.observe("minimap.redrawDelay", opts, (redrawDelay)=>{
            this.redrawDelay = redrawDelay;
        }), // cdprr is shorthand for configDevicePixelRatioRounding
        atom.config.observe("minimap.devicePixelRatioRounding", opts, (cdprr)=>{
            this.configDevicePixelRatioRounding = cdprr;
            this.updateScrollTop();
            this.emitter.emit("did-change-config");
        }));
        return subs;
    }
    /**
   * Returns `true` when the current Minimap is a stand-alone minimap.
   *
   * @returns {boolean} Whether this Minimap is in stand-alone mode or not.
   */ isStandAlone() {
        return this.standAlone;
    }
    /**
   * Sets the stand-alone mode for this minimap.
   *
   * @fires {did-change-stand-alone} if The stand-alone mode have been toggled on or off by the call
   * @param {boolean} standAlone The new state of the stand-alone mode for this Minimap
   */ setStandAlone(standAlone) {
        if (standAlone !== this.standAlone) {
            this.standAlone = standAlone;
            this.emitter.emit("did-change-stand-alone", this);
        }
    }
    /** @returns {MinimapElement} Returns the current minimapElement */ getMinimapElement() {
        return this.minimapElement;
    }
    /**
   * Returns the `TextEditor` that this minimap represents.
   *
   * @returns {TextEditor} This Minimap's text editor
   */ getTextEditor() {
        return this.textEditor;
    }
    /**
   * Returns the `TextEditorElement` for the Minimap's `TextEditor`.
   *
   * @returns {TextEditorElement} The minimap's text editor element
   */ getTextEditorElement() {
        if (this.editorElement) return this.editorElement;
        this.editorElement = atom.views.getView(this.getTextEditor());
        return this.editorElement;
    }
    /**
   * Returns the height of the `TextEditor` at the Minimap scale.
   *
   * @returns {number} The scaled height of the text editor
   */ getTextEditorScaledHeight() {
        return this.adapter.getHeight() * this.getVerticalScaleFactor();
    }
    /**
   * Returns the `TextEditor` scroll top value at the Minimap scale.
   *
   * @returns {number} The scaled scroll top of the text editor
   */ getTextEditorScaledScrollTop() {
        return this.adapter.getScrollTop() * this.getVerticalScaleFactor();
    }
    /**
   * Returns the `TextEditor` scroll left value at the Minimap scale.
   *
   * @returns {number} The scaled scroll left of the text editor
   */ getTextEditorScaledScrollLeft() {
        return this.adapter.getScrollLeft() * this.getHorizontalScaleFactor();
    }
    /**
   * Returns the `TextEditor` maximum scroll top value.
   *
   * When the `scrollPastEnd` setting is enabled, the method compensate the extra scroll by removing the same height as
   * added by the editor from the final value.
   *
   * @returns {number} The maximum scroll top of the text editor
   */ getTextEditorMaxScrollTop() {
        return this.adapter.getMaxScrollTop();
    }
    /**
   * Returns the `TextEditor` scroll top value.
   *
   * @returns {number} The scroll top of the text editor
   */ getTextEditorScrollTop() {
        return this.adapter.getScrollTop();
    }
    /**
   * Sets the scroll top of the `TextEditor`.
   *
   * @param {number} scrollTop The new scroll top value
   */ setTextEditorScrollTop(scrollTop, ignoreTextEditorScroll = false) {
        this.ignoreTextEditorScroll = ignoreTextEditorScroll;
        this.adapter.setScrollTop(scrollTop);
    }
    /**
   * Returns the `TextEditor` scroll left value.
   *
   * @returns {number} The scroll left of the text editor
   */ getTextEditorScrollLeft() {
        return this.adapter.getScrollLeft();
    }
    /**
   * Returns the height of the `TextEditor`.
   *
   * @returns {number} The height of the text editor
   */ getTextEditorHeight() {
        return this.adapter.getHeight();
    }
    /**
   * Returns the `TextEditor` scroll as a value normalized between `0` and `1`.
   *
   * When the `scrollPastEnd` setting is enabled the value may exceed `1` as the maximum scroll value used to compute
   * this ratio compensate for the extra height in the editor. **Use {@link getCapedTextEditorScrollRatio} when you need
   * a value that is strictly between `0` and `1`.**
   *
   * @returns {number} The scroll ratio of the text editor
   */ getTextEditorScrollRatio() {
        return this.adapter.getScrollTop() / (this.getTextEditorMaxScrollTop() || 1);
    }
    /**
   * Returns the `TextEditor` scroll as a value normalized between `0` and `1`.
   *
   * The returned value will always be strictly between `0` and `1`.
   *
   * @returns {number} The scroll ratio of the text editor strictly between 0 and 1
   */ getCapedTextEditorScrollRatio() {
        return Math.min(1, this.getTextEditorScrollRatio());
    }
    /**
   * Returns the height of the whole minimap in pixels based on the `minimap` settings.
   *
   * @returns {number} The height of the minimap
   */ getHeight() {
        return this.textEditor.getScreenLineCount() * this.getLineHeight();
    }
    /**
   * Returns the width of the whole minimap in pixels based on the `minimap` settings.
   *
   * @returns {number} The width of the minimap
   */ getWidth() {
        return this.textEditor.getMaxScreenLineLength() * this.getCharWidth();
    }
    /**
   * Returns the height the Minimap content will take on screen.
   *
   * When the Minimap height is greater than the `TextEditor` height, the `TextEditor` height is returned instead.
   *
   * @returns {number} The visible height of the Minimap
   */ getVisibleHeight() {
        return Math.min(this.getScreenHeight(), this.getHeight());
    }
    /**
   * Returns the height the minimap should take once displayed, it's either the height of the `TextEditor` or the
   * provided `height` when in stand-alone mode.
   *
   * @returns {number} The total height of the Minimap
   */ getScreenHeight() {
        if (this.isStandAlone()) {
            if (this.height != null) return this.height;
            else return this.getHeight();
        } else return this.adapter.getHeight();
    }
    /**
   * Returns the width the whole Minimap will take on screen.
   *
   * @returns {number} The width of the Minimap when displayed
   */ getVisibleWidth() {
        return Math.min(this.getScreenWidth(), this.getWidth());
    }
    /**
   * Returns the width the Minimap should take once displayed, it's either the width of the Minimap content or the
   * provided `width` when in standAlone mode.
   *
   * @returns {number} The Minimap screen width
   */ getScreenWidth() {
        if (this.isStandAlone() && this.width != null) return this.width;
        else return this.getWidth();
    }
    /**
   * Sets the preferred height and width when in stand-alone mode.
   *
   * This method is called by the <MinimapElement> for this Minimap so that the model is kept in sync with the view.
   *
   * @param {number} height The new height of the Minimap
   * @param {number} width The new width of the Minimap
   */ setScreenHeightAndWidth(height, width) {
        if (this.width !== width || this.height !== height) {
            this.height = height;
            this.width = width;
            this.updateScrollTop();
        }
    }
    /**
   * Returns the vertical scaling factor when converting coordinates from the `TextEditor` to the Minimap.
   *
   * @returns {number} The Minimap vertical scaling factor
   */ getVerticalScaleFactor() {
        return this.getLineHeight() / this.textEditor.getLineHeightInPixels();
    }
    /**
   * Returns the horizontal scaling factor when converting coordinates from the `TextEditor` to the Minimap.
   *
   * @returns {number} The Minimap horizontal scaling factor
   */ getHorizontalScaleFactor() {
        return this.getCharWidth() / this.textEditor.getDefaultCharWidth();
    }
    /**
   * Returns the height of a line in the Minimap in pixels.
   *
   * @returns {number} A line's height in the Minimap
   */ getLineHeight() {
        return this.getCharHeight() + this.getInterline();
    }
    /**
   * Returns the width of a character in the Minimap in pixels.
   *
   * @returns {number} A character's width in the Minimap
   */ getCharWidth() {
        if (this.charWidth != null) return this.charWidth;
        else return this.configCharWidth;
    }
    /**
   * Sets the char width for this Minimap. This value will override the value from the config for this instance only. A
   * `did-change-config` event is dispatched.
   *
   * @fires {did-change-config} when The value is changed
   * @param {number} charWidth The new width of a char in the Minimap
   */ setCharWidth(charWidth) {
        this.charWidth = Math.floor(charWidth);
        this.emitter.emit("did-change-config");
    }
    /**
   * Returns the height of a character in the Minimap in pixels.
   *
   * @returns {number} A character's height in the Minimap
   */ getCharHeight() {
        if (this.charHeight != null) return this.charHeight;
        else return this.configCharHeight;
    }
    /**
   * Sets the char height for this Minimap. This value will override the value from the config for this instance only. A
   * `did-change-config` event is dispatched.
   *
   * @fires {did-change-config} when The value is changed
   * @param {number} charHeight The new height of a char in the Minimap
   */ setCharHeight(charHeight) {
        this.charHeight = Math.floor(charHeight);
        this.emitter.emit("did-change-config");
    }
    /**
   * Returns the height of an interline in the Minimap in pixels.
   *
   * @returns {number} The interline's height in the Minimap
   */ getInterline() {
        if (this.interline != null) return this.interline;
        else return this.configInterline;
    }
    /**
   * Sets the interline height for this Minimap. This value will override the value from the config for this instance
   * only. A `did-change-config` event is dispatched.
   *
   * @fires {did-change-config} when The value is changed
   * @param {number} interline The new height of an interline in the Minimap
   */ setInterline(interline) {
        this.interline = Math.floor(interline);
        this.emitter.emit("did-change-config");
    }
    /**
   * Returns the status of devicePixelRatioRounding in the Minimap.
   *
   * @returns {boolean} The devicePixelRatioRounding status in the Minimap
   */ getDevicePixelRatioRounding() {
        if (this.devicePixelRatioRounding != null) return this.devicePixelRatioRounding;
        else return this.configDevicePixelRatioRounding;
    }
    /**
   * Sets the devicePixelRatioRounding status for this Minimap. This value will override the value from the config for
   * this instance only. A `did-change-config` event is dispatched.
   *
   * @fires {did-change-config} when The value is changed
   * @param {boolean} devicePixelRatioRounding The new status of devicePixelRatioRounding in the Minimap
   */ setDevicePixelRatioRounding(devicePixelRatioRounding) {
        this.devicePixelRatioRounding = devicePixelRatioRounding;
        this.emitter.emit("did-change-config");
    }
    /**
   * Returns the devicePixelRatio in the Minimap in pixels.
   *
   * @returns {number} The devicePixelRatio in the Minimap
   */ getDevicePixelRatio() {
        if (this.getDevicePixelRatioRounding()) {
            if (devicePixelRatio >= 1) return Math.round(devicePixelRatio);
            else return Math.max(Math.round(devicePixelRatio * 10) / 10, 0.1);
        }
        return devicePixelRatio;
    }
    /**
   * Returns the index of the first visible row in the Minimap.
   *
   * @returns {number} The index of the first visible row
   */ getFirstVisibleScreenRow() {
        return Math.floor(this.getScrollTop() / this.getLineHeight());
    }
    /**
   * Returns the index of the last visible row in the Minimap.
   *
   * @returns {number} The index of the last visible row
   */ getLastVisibleScreenRow() {
        return Math.ceil((this.getScrollTop() + this.getScreenHeight()) / this.getLineHeight());
    }
    /**
   * Returns true when the `independentMinimapScroll` setting have been enabled.
   *
   * @returns {boolean} Whether the minimap can scroll independently
   */ scrollIndependentlyOnMouseWheel() {
        return this.independentMinimapScroll;
    }
    /**
   * Returns the current scroll of the Minimap.
   *
   * The Minimap can scroll only when its height is greater that the height of its `TextEditor`.
   *
   * @returns {number} The scroll top of the Minimap
   */ getScrollTop() {
        return this.standAlone || this.independentMinimapScroll ? this.scrollTop : this.getScrollTopFromEditor();
    }
    /**
   * Sets the minimap scroll top value when in stand-alone mode.
   *
   * @fires {did-change-scroll-top} if The Minimap's stand-alone mode is enabled
   * @param {number} scrollTop The new scroll top for the Minimap
   */ setScrollTop(scrollTop) {
        this.scrollTop = Math.max(0, Math.min(this.getMaxScrollTop(), scrollTop));
        if (this.standAlone || this.independentMinimapScroll) this.emitter.emit("did-change-scroll-top", this);
    }
    /**
   * Returns the minimap scroll as a ration between 0 and 1.
   *
   * @returns {number} The minimap scroll ratio
   */ getScrollRatio() {
        return this.getScrollTop() / this.getMaxScrollTop();
    }
    /**
   * Updates the scroll top value with the one computed from the text editor when the minimap is in the independent
   * scrolling mode.
   *
   * @access private
   */ updateScrollTop() {
        if (this.independentMinimapScroll) {
            try {
                this.setScrollTop(this.getScrollTopFromEditor());
            } catch (err) {
            }
            this.emitter.emit("did-change-scroll-top", this);
        }
    }
    /**
   * Returns the scroll top as computed from the text editor scroll top.
   *
   * @returns {number} The computed scroll top value
   */ getScrollTopFromEditor() {
        return Math.abs(this.getCapedTextEditorScrollRatio() * this.getMaxScrollTop());
    }
    /**
   * Returns the maximum scroll value of the Minimap.
   *
   * @returns {number} The maximum scroll top for the Minimap
   */ getMaxScrollTop() {
        return Math.max(0, this.getHeight() - this.getScreenHeight());
    }
    /**
   * Returns `true` when the Minimap can scroll.
   *
   * @returns {boolean} Whether this Minimap can scroll or not
   */ canScroll() {
        return this.getMaxScrollTop() > 0;
    }
    /**
   * Updates the minimap scroll top value using a mouse event when the independent scrolling mode is enabled
   *
   * @param {MouseEvent} event The mouse wheel event
   * @access private
   */ onMouseWheel(event) {
        if (this.scrollIndependentlyOnMouseWheel()) {
            event.stopPropagation();
            if (!this.canScroll()) return;
            const { wheelDeltaY  } = event;
            const previousScrollTop = this.getScrollTop();
            const updatedScrollTop = previousScrollTop - Math.round(wheelDeltaY * this.scrollSensitivity);
            this.setScrollTop(updatedScrollTop);
        }
    }
    /**
   * Delegates to `TextEditor#getMarker`.
   *
   * @access private
   */ getMarker(id) {
        return this.textEditor.getMarker(id);
    }
    /**
   * Delegates to `TextEditor#findMarkers`.
   *
   * @access private
   */ findMarkers(o) {
        try {
            return this.textEditor.findMarkers(o);
        } catch (error) {
            return [];
        }
    }
    /**
   * Delegates to `TextEditor#markBufferRange`.
   *
   * @access private
   */ markBufferRange(range) {
        return this.textEditor.markBufferRange(range);
    }
    /**
   * Emits a change events with the passed-in changes as data.
   *
   * @param {Object} changes A change to dispatch
   * @access private
   */ emitChanges(changes) {
        this.emitter.emit("did-change", changes);
    }
    /**
   * Enables the cache at the adapter level to avoid consecutive access to the text editor API during a render phase.
   *
   * @access private
   */ enableCache() {
        this.adapter.enableCache();
    }
    /**
   * Disable the adapter cache.
   *
   * @access private
   */ clearCache() {
        this.adapter.clearCache();
    }
    editorDestroyed() {
        this.adapter.editorDestroyed();
    }
    /**
   * Get the DecorationManagement API for the current minimapElement
   *
   * @returns {DecorationManagement | undefined}
   */ getDecorationManagement() {
        var ref;
        if (!this.DecorationManagement) {
            if ((ref = this.minimapElement) === null || ref === void 0 ? void 0 : ref.DecorationManagement) this.DecorationManagement = this.minimapElement.DecorationManagement;
        }
        return this.DecorationManagement;
    }
    // Decoration API duplicated for backward compatibility in the service
    getDecorations() {
        var ref;
        var ref1;
        return (ref1 = (ref = this.getDecorationManagement()) === null || ref === void 0 ? void 0 : ref.getDecorations()) !== null && ref1 !== void 0 ? ref1 : [];
    }
    onDidAddDecoration(...args) {
        var ref5;
        var ref6;
        return (ref6 = (ref5 = this.getDecorationManagement()) === null || ref5 === void 0 ? void 0 : ref5.onDidAddDecoration(...args)) !== null && ref6 !== void 0 ? ref6 : disposedDisposable;
    }
    onDidRemoveDecoration(...args) {
        var ref7;
        var ref8;
        return (ref8 = (ref7 = this.getDecorationManagement()) === null || ref7 === void 0 ? void 0 : ref7.onDidRemoveDecoration(...args)) !== null && ref8 !== void 0 ? ref8 : disposedDisposable;
    }
    onDidChangeDecorationRange(...args) {
        var ref9;
        var ref10;
        return (ref10 = (ref9 = this.getDecorationManagement()) === null || ref9 === void 0 ? void 0 : ref9.onDidChangeDecorationRange(...args)) !== null && ref10 !== void 0 ? ref10 : disposedDisposable;
    }
    onDidUpdateDecoration(...args) {
        var ref11;
        var ref12;
        return (ref12 = (ref11 = this.getDecorationManagement()) === null || ref11 === void 0 ? void 0 : ref11.onDidUpdateDecoration(...args)) !== null && ref12 !== void 0 ? ref12 : disposedDisposable;
    }
    decorationForId(...args) {
        var ref13;
        var ref14;
        return (ref14 = (ref13 = this.getDecorationManagement()) === null || ref13 === void 0 ? void 0 : ref13.decorationForId(...args)) !== null && ref14 !== void 0 ? ref14 : dummyDecoration;
    }
    decorationsForScreenRowRange(...args) {
        var ref15;
        var ref16;
        return (ref16 = (ref15 = this.getDecorationManagement()) === null || ref15 === void 0 ? void 0 : ref15.decorationsForScreenRowRange(...args)) !== null && ref16 !== void 0 ? ref16 : dummyDecoration;
    }
    decorationsByTypeThenRows() {
        var ref17;
        var ref18;
        return (ref18 = (ref17 = this.getDecorationManagement()) === null || ref17 === void 0 ? void 0 : ref17.decorationsByTypeThenRows()) !== null && ref18 !== void 0 ? ref18 : dummyDecoration;
    }
    decorateMarker(...args) {
        var ref19;
        var ref20;
        return (ref20 = (ref19 = this.getDecorationManagement()) === null || ref19 === void 0 ? void 0 : ref19.decorateMarker(...args)) !== null && ref20 !== void 0 ? ref20 : dummyDecoration;
    }
    removeDecoration(...args) {
        var ref21;
        return (ref21 = this.getDecorationManagement()) === null || ref21 === void 0 ? void 0 : ref21.removeDecoration(...args);
    }
    removeAllDecorationsForMarker(...args) {
        var ref22;
        return (ref22 = this.getDecorationManagement()) === null || ref22 === void 0 ? void 0 : ref22.removeAllDecorationsForMarker(...args);
    }
    removeAllDecorations() {
        var ref23;
        return (ref23 = this.getDecorationManagement()) === null || ref23 === void 0 ? void 0 : ref23.removeAllDecorations();
    }
}
exports.default = Minimap;

},{"./decoration":"3VRaj","./adapters/stable-adapter":"kCVPI","./main":"lUIf1","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"kCVPI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class StableAdapter {
    constructor(textEditor){
        this.textEditor = textEditor;
        this.textEditorElement = atom.views.getView(this.textEditor);
    }
    enableCache() {
        this.useCache = true;
    }
    clearCache() {
        this.useCache = false;
        delete this.heightCache;
        delete this.scrollTopCache;
        delete this.scrollLeftCache;
        delete this.maxScrollTopCache;
    }
    onDidChangeScrollTop(callback) {
        return this.textEditorElement.onDidChangeScrollTop(callback);
    }
    onDidChangeScrollLeft(callback) {
        return this.textEditorElement.onDidChangeScrollLeft(callback);
    }
    getHeight() {
        if (this.editorDestroyed()) return 0;
        if (this.useCache) {
            if (!this.heightCache) this.heightCache = this.textEditorElement.getHeight();
            return this.heightCache;
        }
        return this.textEditorElement.getHeight();
    }
    getScrollTop() {
        if (this.editorDestroyed()) return 0;
        if (this.useCache) {
            if (!this.scrollTopCache) this.scrollTopCache = this.computeScrollTop();
            return this.scrollTopCache;
        }
        return this.computeScrollTop();
    }
    computeScrollTop() {
        if (this.editorDestroyed()) return 0;
        const scrollTop = this.textEditorElement.getScrollTop();
        const lineHeight = this.textEditor.getLineHeightInPixels();
        let firstRow = this.textEditorElement.getFirstVisibleScreenRow();
        if (Number.isNaN(firstRow)) // Guard against their being no visible screen row
        return 0;
        let lineTop = this.textEditorElement.pixelPositionForScreenPosition([
            firstRow,
            0
        ]).top;
        if (lineTop > scrollTop) {
            firstRow -= 1;
            lineTop = this.textEditorElement.pixelPositionForScreenPosition([
                firstRow,
                0
            ]).top;
        }
        const lineY = firstRow * lineHeight;
        const offset = Math.min(scrollTop - lineTop, lineHeight);
        return lineY + offset;
    }
    setScrollTop(scrollTop) {
        if (this.editorDestroyed()) return;
        this.textEditorElement.setScrollTop(scrollTop);
    }
    getScrollLeft() {
        if (this.editorDestroyed()) return 0;
        if (this.useCache) {
            if (!this.scrollLeftCache) this.scrollLeftCache = this.textEditorElement.getScrollLeft();
            return this.scrollLeftCache;
        }
        return this.textEditorElement.getScrollLeft();
    }
    getMaxScrollTop() {
        if (this.editorDestroyed()) return 0;
        if (this.maxScrollTopCache != null && this.useCache) return this.maxScrollTopCache;
        let maxScrollTop;
        if (this.textEditorElement.getMaxScrollTop) {
            maxScrollTop = this.textEditorElement.getMaxScrollTop();
            if (parseFloat(atom.getVersion()) >= 1.13) {
                if (this.scrollPastEnd) {
                    const lineHeight = this.textEditor.getLineHeightInPixels();
                    maxScrollTop -= this.getHeight() - 3 * lineHeight;
                }
            }
        } else {
            maxScrollTop = this.textEditorElement.getScrollHeight() - this.getHeight();
            if (this.scrollPastEnd) {
                const lineHeight = this.textEditor.getLineHeightInPixels();
                maxScrollTop -= this.getHeight() - 3 * lineHeight;
            }
        }
        if (this.useCache) this.maxScrollTopCache = maxScrollTop;
        return maxScrollTop;
    }
    editorDestroyed() {
        return !this.textEditor || this.textEditor.isDestroyed() || !this.textEditorElement.component || !this.textEditorElement.getModel() || !this.textEditorElement.parentNode;
    }
}
exports.default = StableAdapter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"7B8RM":[function(require,module,exports) {
module.exports = JSON.parse("{\"plugins\":{\"type\":\"object\",\"properties\":{}},\"autoToggle\":{\"title\":\"Show Minimap On Atom Start\",\"type\":\"boolean\",\"default\":true,\"order\":1},\"displayMinimapOnLeft\":{\"type\":\"boolean\",\"default\":false,\"order\":2},\"displayCodeHighlights\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Toggles the render of the buffer tokens in the minimap.\",\"order\":3},\"displayPluginsControls\":{\"type\":\"boolean\",\"default\":true,\"description\":\"You need to restart Atom for this setting to be effective.\",\"order\":4},\"minimapScrollIndicator\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Toggles the display of a side line showing which part of the buffer is currently displayed by the minimap. This side line will only appear if the minimap is taller than the editor view height.\",\"order\":5},\"adjustMinimapWidthToSoftWrap\":{\"type\":\"boolean\",\"default\":true,\"description\":\"If this option is enabled and Soft Wrap is checked then the Minimap max width is set to the Preferred Line Length value.\",\"order\":6},\"adjustMinimapWidthOnlyIfSmaller\":{\"type\":\"boolean\",\"default\":true,\"description\":\"If this option and `adjustMinimapWidthToSoftWrap` are enabled the minimap width will never go past the limit sets by CSS. On the other hand, when disabled the minimap will expand to honor the preferred line width.\",\"order\":7},\"ignoreWhitespacesInTokens\":{\"type\":\"boolean\",\"default\":false,\"description\":\"When enabled, text editor tokens are rendered as plain blocks, with no regards to the whitespaces they contains.\",\"order\":8},\"charWidth\":{\"type\":\"number\",\"default\":1,\"minimum\":0.5,\"order\":9},\"charHeight\":{\"type\":\"number\",\"default\":2,\"minimum\":0.5,\"order\":10},\"interline\":{\"type\":\"number\",\"default\":1,\"minimum\":0,\"description\":\"The space between lines in the minimap in pixels.\",\"order\":11},\"textOpacity\":{\"type\":\"number\",\"default\":0.6,\"minimum\":0,\"maximum\":1,\"description\":\"The opacity used to render the line's text in the minimap.\",\"order\":12},\"moveCursorOnMinimapClick\":{\"type\":\"boolean\",\"default\":false,\"description\":\"Moves the cursor to the beginning of the target line when clicking on the minimap\",\"order\":13},\"independentMinimapScroll\":{\"type\":\"boolean\",\"title\":\"Independent Minimap Scroll On Mouse Wheel Events\",\"default\":false,\"description\":\"When enabled, using the mouse wheel over the Minimap will make it scroll independently of the text editor. The Minimap will still sync with the editor whenever the editor is scrolled, but it will no longer relay the mouse wheel events to the editor.\",\"order\":14},\"scrollSensitivity\":{\"type\":\"number\",\"default\":0.5,\"description\":\"The scrolling speed when the `Independent Minimap Scroll On Mouse Wheel Events` setting is enabled.\",\"order\":15},\"smoothScrolling\":{\"type\":\"boolean\",\"default\":false,\"description\":\"Whether to offset the minimap canvas when scrolling to keep the scroll smooth. When `true` the minimap canvas will be offseted, resulting in a smoother scroll, but with the side-effect of a blurry minimap when the canvas is placed between pixels. When `false` the canvas will always stay at the same position, and will never look blurry, but the scroll will appear more jagged.\",\"order\":16},\"createPluginInDevMode\":{\"type\":\"boolean\",\"default\":false,\"order\":17},\"absoluteMode\":{\"type\":\"boolean\",\"default\":false,\"description\":\"When enabled the text editor content will be able to flow below the minimap.\",\"order\":18},\"adjustAbsoluteModeHeight\":{\"type\":\"boolean\",\"default\":false,\"description\":\"When enabled and `Absolute Mode` is also enabled, the minimap height will be adjusted to only take the space required by the text editor content, leaving the space below triggering mouse events on the text editor. **Be aware this can have some impact on performances as the minimap canvases will be resized every time a change in the editor make its height change.**\",\"order\":19},\"redrawDelay\":{\"type\":\"number\",\"default\":400,\"minimum\":0,\"maximum\":2000,\"description\":\"Controls how often (in ms) the minimap should redraw itself after changing the text editor's contents. Setting this to 100ms or higher could dramatically improve editor responsiveness when working with large files. A value of 0 will cause the minimap to redraw itself immediately on each change.\",\"order\":20},\"devicePixelRatioRounding\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Toggles the rounding of the devicePixelRatio in the minimap.\",\"order\":21},\"useHardwareAcceleration\":{\"type\":\"boolean\",\"default\":true,\"order\":22},\"scrollAnimation\":{\"type\":\"boolean\",\"default\":false,\"description\":\"Enables animations when scrolling by clicking on the minimap.\",\"order\":23},\"scrollAnimationDuration\":{\"type\":\"integer\",\"default\":300,\"description\":\"The duration of scrolling animations when clicking on the minimap.\",\"order\":24},\"maxTokensInOneLine\":{\"type\":\"integer\",\"default\":160,\"description\":\"The maximum number of tokens that are rendered for each line.\",\"order\":25}}");

},{}],"fyvhj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "plugins", ()=>plugins
);
/**
 * Registers a minimap `plugin` with the given `name`.
 *
 * @fires {did-add-plugin} with The name and a reference to the added plugin.
 * @fires {did-activate-plugin} if The plugin was activated during the registration.
 * @param {string} name The identifying name of the plugin. It will be used as activation settings name as well as the
 *   key to unregister the module.
 * @param {MinimapPlugin} plugin The plugin to register.
 */ parcelHelpers.export(exports, "registerPlugin", ()=>registerPlugin
);
/**
 * Unregisters a plugin from the minimap.
 *
 * @fires {did-remove-plugin} with The name and a reference to the added plugin.
 * @param {string} name The identifying name of the plugin to unregister.
 */ parcelHelpers.export(exports, "unregisterPlugin", ()=>unregisterPlugin
);
/**
 * Toggles the specified plugin activation state.
 *
 * @fires {did-activate-plugin} if The plugin was activated by the call.
 * @fires {did-deactivate-plugin} if The plugin was deactivated by the call.
 * @param {string} name The name of the plugin.
 * @param {boolean} boolean An optional boolean to set the activation state of the plugin. If ommitted the new plugin
 *   state will be the the inverse of its current state.
 */ parcelHelpers.export(exports, "togglePluginActivation", ()=>togglePluginActivation
);
/**
 * Deactivates all the plugins registered in the minimap package so far.
 *
 * @fires {did-deactivate-plugin} for Each plugin deactivated by the call.
 */ parcelHelpers.export(exports, "deactivateAllPlugins", ()=>deactivateAllPlugins
);
parcelHelpers.export(exports, "activatePlugin", ()=>activatePlugin
);
parcelHelpers.export(exports, "deactivatePlugin", ()=>deactivatePlugin
);
/**
 * Returns the plugins display order mapped by name.
 *
 * @returns {Object} The plugins order by name
 */ parcelHelpers.export(exports, "getPluginsOrder", ()=>getPluginsOrder
);
var _atom = require("atom");
var _main = require("./main");
"use strict";
const plugins = {
};
/**
 * The plugins' subscriptions stored using the plugin names as keys.
 *
 * @type {Object}
 * @access private
 */ const pluginsSubscriptions = {
};
/**
 * A map that stores the display order for each plugin
 *
 * @type {Object}
 * @access private
 */ const pluginsOrderMap = {
};
function registerPlugin(name, plugin) {
    plugins[name] = plugin;
    pluginsSubscriptions[name] = new _atom.CompositeDisposable();
    const event = {
        name,
        plugin
    };
    _main.emitter.emit("did-add-plugin", event);
    if (atom.config.get("minimap.displayPluginsControls")) registerPluginControls(name, plugin);
    updatesPluginActivationState(name);
}
function unregisterPlugin(name) {
    const plugin = plugins[name];
    if (atom.config.get("minimap.displayPluginsControls")) unregisterPluginControls(name);
    delete plugins[name];
    const event = {
        name,
        plugin
    };
    _main.emitter.emit("did-remove-plugin", event);
}
function togglePluginActivation(name, boolean) {
    const settingsKey = `minimap.plugins.${name}`;
    if (boolean !== undefined && boolean !== null) atom.config.set(settingsKey, boolean);
    else atom.config.set(settingsKey, !atom.config.get(settingsKey));
    updatesPluginActivationState(name);
}
function deactivateAllPlugins() {
    for (const [name, plugin] of eachPlugin()){
        plugin.deactivatePlugin();
        _main.emitter.emit("did-deactivate-plugin", {
            name,
            plugin
        });
    }
}
/**
 * A generator function to iterate over registered plugins.
 *
 * @returns An iterable that yield the name and reference to every plugin as an array in each iteration.
 */ function* eachPlugin() {
    for(const name in plugins)yield [
        name,
        plugins[name]
    ];
}
/**
 * Updates the plugin activation state according to the current config.
 *
 * @fires {did-activate-plugin} if The plugin was activated by the call.
 * @fires {did-deactivate-plugin} if The plugin was deactivated by the call.
 * @param {string} name The identifying name of the plugin to update.
 * @access private
 */ function updatesPluginActivationState(name) {
    const plugin = plugins[name];
    const pluginActive = plugin.isActive();
    const settingActive = atom.config.get(`minimap.plugins.${name}`);
    if (atom.config.get("minimap.displayPluginsControls")) {
        if (settingActive && !pluginActive) activatePlugin(name, plugin);
        else if (pluginActive && !settingActive) deactivatePlugin(name, plugin);
    } else {
        if (!pluginActive) activatePlugin(name, plugin);
        else if (pluginActive) deactivatePlugin(name, plugin);
    }
}
function activatePlugin(name, plugin) {
    const event = {
        name,
        plugin
    };
    plugin.activatePlugin();
    _main.emitter.emit("did-activate-plugin", event);
}
function deactivatePlugin(name, plugin) {
    const event = {
        name,
        plugin
    };
    plugin.deactivatePlugin();
    _main.emitter.emit("did-deactivate-plugin", event);
}
/**
 * When the `minimap.displayPluginsControls` setting is toggled, this function will register the commands and setting to
 * manage the plugin activation from the minimap settings.
 *
 * @param {string} name The identifying name of the plugin.
 * @param {MinimapPlugin} plugin The plugin instance to register controls for.
 * @listens {minimap.plugins.${name}} listen to the setting to update
 *          the plugin state accordingly.
 * @listens {minimap:toggle-${name}} listen to the command on `atom-workspace`
 *          to toggle the plugin state.
 * @access private
 */ function registerPluginControls(name, plugin) {
    const settingsKey = `minimap.plugins.${name}`;
    const orderSettingsKey = `minimap.plugins.${name}DecorationsZIndex`;
    const config = _main.getConfigSchema();
    config.plugins.properties[name] = {
        type: "boolean",
        title: name,
        description: `Whether the ${name} plugin is activated and displayed in the Minimap.`,
        default: true
    };
    config.plugins.properties[`${name}DecorationsZIndex`] = {
        type: "integer",
        title: `${name} decorations order`,
        description: `The relative order of the ${name} plugin's decorations in the layer into which they are drawn. Note that this order only apply inside a layer, so highlight-over decorations will always be displayed above line decorations as they are rendered in different layers.`,
        default: 0
    };
    if (atom.config.get(settingsKey) === undefined) atom.config.set(settingsKey, true);
    if (atom.config.get(orderSettingsKey) === undefined) atom.config.set(orderSettingsKey, 0);
    pluginsSubscriptions[name].add(atom.config.observe(settingsKey, ()=>{
        updatesPluginActivationState(name);
    }));
    pluginsSubscriptions[name].add(atom.config.observe(orderSettingsKey, (order)=>{
        updatePluginsOrderMap(name);
        const event = {
            name,
            plugin,
            order
        };
        _main.emitter.emit("did-change-plugin-order", event);
    }));
    pluginsSubscriptions[name].add(atom.commands.add("atom-workspace", {
        [`minimap:toggle-${name}`]: ()=>{
            togglePluginActivation(name);
        }
    }));
    updatePluginsOrderMap(name);
}
/**
 * Updates the display order in the map for the passed-in plugin name.
 *
 * @param {string} name The name of the plugin to update
 * @access private
 */ function updatePluginsOrderMap(name) {
    const orderSettingsKey = `minimap.plugins.${name}DecorationsZIndex`;
    pluginsOrderMap[name] = atom.config.get(orderSettingsKey);
}
function getPluginsOrder() {
    return pluginsOrderMap;
}
/**
 * When the `minimap.displayPluginsControls` setting is toggled, this function will unregister the commands and setting
 * that was created previously.
 *
 * @param {string} name The identifying name of the plugin.
 * @access private
 */ function unregisterPluginControls(name) {
    pluginsSubscriptions[name].dispose();
    delete pluginsSubscriptions[name];
    delete _main.getConfigSchema().plugins.properties[name];
}

},{"./main":"lUIf1","@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"lWj66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Functions used to recommend the configurations required for the best performance of Minimap
parcelHelpers.export(exports, "treeSitterWarning", ()=>treeSitterWarning
);
function treeSitterWarning() {
    return observeAndWarn("core.useTreeSitterParsers", true, "Tree-sitter is off (Low Performance Warning).", `You should turn on Atom's tree-sitter parser to experience the best performance Minimap and Atom are designed for.\n    Keeping tree-sitter parser off results in sluggish scrolling and lags in the text editor.`);
}
/* Utility function that observes a config and throws warnings once a day if it is not the recommended value */ function observeAndWarn(configName, recommendedValue, warningTitle, warningDescription) {
    return atom.config.observe(configName, (value)=>{
        if (value !== recommendedValue) {
            const storageName = `Minimap.${configName}`;
            const today = new Date();
            const previousWarning = window.localStorage.getItem(storageName);
            let previousWarningDay = null;
            if (previousWarning) previousWarningDay = new Date(Date.parse(previousWarning)).getDay();
            // throw the warning once a day
            if (!previousWarningDay || typeof previousWarningDay === "number" && previousWarningDay - today.getDay() >= 1) {
                window.localStorage.setItem(storageName, today);
                const notification = atom.notifications.addWarning(warningTitle, {
                    description: warningDescription,
                    dismissable: true,
                    buttons: [
                        {
                            text: `Set to ${recommendedValue} and restart Atom`,
                            onDidClick () {
                                atom.config.set(configName, true);
                                notification.dismiss();
                                window.localStorage.removeItem(storageName);
                                setTimeout(()=>{
                                    atom.reload();
                                }, 1500);
                            }
                        }, 
                    ]
                });
            }
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"flFQ0"}],"cuKHQ":[function(require,module,exports) {
"use strict";
/**
 * This class is used to read the styles informations (e.g. color and background-color) from the DOM to use when
 * rendering canvas. This is used in Minimap and Terminal It attaches a dummyNode to the targetNode, renders them, and
 * finds the computed style back.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyleReader = void 0;
class StyleReader {
    constructor(){
        this.domStylesCache = new Map();
        this.dummyNode = void 0;
        this.targetNode = void 0;
    }
    /** Set to true once tokenized */ // private hasTokenizedOnce = false
    /**
   * Returns the computed values for the given property and scope in the DOM.
   *
   * This function insert a dummy element in the DOM to compute its style, return the specified property, and clear the
   * content of the dummy element.
   *
   * @param scopes A list of classes reprensenting the scope to build
   * @param property The name of the style property to compute
   * @param targetNode
   * @param getFromCache Whether to cache the computed value or not
   * @returns The computed property's value used in CanvasDrawer
   */ retrieveStyleFromDom(scopes, property, targetNode, getFromCache = true) {
        if (scopes.length === 0) return "";
         // no scopes
        const key = scopes.join(" ");
        let cachedData = this.domStylesCache.get(key);
        if (cachedData !== undefined) {
            if (getFromCache) {
                // if should get the value from the cache
                const value = cachedData[property];
                if (value !== undefined) // value exists
                return value;
                 // value not in the cache - get fresh value
            } // don't use cache - get fresh value
        } else // key did not exist. create it
        cachedData = {
        };
        this.ensureDummyNodeExistence(targetNode);
        const dummyNode = this.dummyNode;
        let parent = dummyNode;
        for(let i = 0, len = scopes.length; i < len; i++){
            const scope = scopes[i];
            const node = document.createElement("span");
            node.className = scope.replace(dotRegexp, " "); // TODO why replace is needed?
            parent.appendChild(node);
            parent = node;
        }
        const style = window.getComputedStyle(parent);
        let value = style.getPropertyValue(property); // rotate hue if webkit-filter available
        const filter = style.getPropertyValue("-webkit-filter");
        if (filter.includes("hue-rotate")) value = rotateHue(value, filter);
        if (value !== "") {
            cachedData[property] = value;
            this.domStylesCache.set(key, cachedData);
        }
        dummyNode.innerHTML = "";
        return value;
    }
    /**
   * Creates a DOM node container for all the operations that need to read styles properties from DOM.
   *
   * @param targetNode
   */ ensureDummyNodeExistence(targetNode) {
        if (this.targetNode !== targetNode || this.dummyNode === undefined) {
            this.dummyNode = document.createElement("span");
            this.dummyNode.style.visibility = "hidden"; // attach to the target node
            targetNode.appendChild(this.dummyNode);
            this.targetNode = targetNode;
        }
    }
    /** Invalidates the cache by emptying the cache object. used in MinimapElement */ invalidateDOMStylesCache() {
        this.domStylesCache.clear();
    }
} //    ##     ## ######## ##       ########  ######## ########   ######
//    ##     ## ##       ##       ##     ## ##       ##     ## ##    ##
//    ##     ## ##       ##       ##     ## ##       ##     ## ##
//    ######### ######   ##       ########  ######   ########   ######
//    ##     ## ##       ##       ##        ##       ##   ##         ##
//    ##     ## ##       ##       ##        ##       ##    ##  ##    ##
//    ##     ## ######## ######## ##        ######## ##     ##  ######
exports.StyleReader = StyleReader;
const dotRegexp = /\.+/g;
const rgbExtractRegexp = /rgb(a?)\((\d+), (\d+), (\d+)(, (\d+(\.\d+)?))?\)/;
const hueRegexp = /hue-rotate\((-?\d+)deg\)/;
/**
 * Computes the output color of `value` with a rotated hue defined in `filter`.
 *
 * @param value The CSS color to apply the rotation on
 * @param filter The CSS hue rotate filter declaration
 * @returns The rotated CSS color
 */ function rotateHue(value, filter) {
    const match = value.match(rgbExtractRegexp);
    if (match === null) return "";
    const [, , rStr, gStr, bStr, , aStr] = match;
    const hueMatch = filter.match(hueRegexp);
    if (hueMatch === null) return "";
    const [, hueStr] = hueMatch;
    let [r, g, b, a, hue] = [
        rStr,
        gStr,
        bStr,
        aStr,
        hueStr
    ].map(Number);
    [r, g, b] = rotate(r, g, b, hue);
    if (isNaN(a)) return `rgb(${r}, ${g}, ${b})`;
    else return `rgba(${r}, ${g}, ${b}, ${a})`;
}
/**
 * Computes the hue rotation on the provided `r`, `g` and `b` channels by the amount of `angle`.
 *
 * @param r The red channel of the color to rotate
 * @param g The green channel of the color to rotate
 * @param b The blue channel of the color to rotate
 * @param angle The angle to rotate the hue with
 * @returns The rotated color channels
 */ function rotate(r, g, b, angle) {
    const matrix = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
    ];
    const lumR = 0.2126;
    const lumG = 0.7152;
    const lumB = 0.0722;
    const hueRotateR = 0.143;
    const hueRotateG = 0.14;
    const hueRotateB = 0.283;
    const cos = Math.cos(angle * Math.PI / 180);
    const sin = Math.sin(angle * Math.PI / 180);
    matrix[0] = lumR + (1 - lumR) * cos - lumR * sin;
    matrix[1] = lumG - lumG * cos - lumG * sin;
    matrix[2] = lumB - lumB * cos + (1 - lumB) * sin;
    matrix[3] = lumR - lumR * cos + hueRotateR * sin;
    matrix[4] = lumG + (1 - lumG) * cos + hueRotateG * sin;
    matrix[5] = lumB - lumB * cos - hueRotateB * sin;
    matrix[6] = lumR - lumR * cos - (1 - lumR) * sin;
    matrix[7] = lumG - lumG * cos + lumG * sin;
    matrix[8] = lumB + (1 - lumB) * cos + lumB * sin;
    return [
        clamp(matrix[0] * r + matrix[1] * g + matrix[2] * b),
        clamp(matrix[3] * r + matrix[4] * g + matrix[5] * b),
        clamp(matrix[6] * r + matrix[7] * g + matrix[8] * b)
    ];
}
function clamp(num) {
    return Math.ceil(Math.max(0, Math.min(255, num)));
}

},{}],"aMK8G":[function(require,module,exports) {
module.exports = Promise.resolve(require("./minimap-plugin-generator-element.b78184a4.js")).then(()=>module.bundle.root('f7LQc')
);

},{}]},["dlmcN","lUIf1"], "lUIf1", "parcelRequire7d67")

//# sourceMappingURL=main.js.map
