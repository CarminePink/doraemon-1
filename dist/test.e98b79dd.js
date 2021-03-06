// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin {\n    background: #93b8ca;\n    height: 100vh;\n    position: relative;\n  }\n  .face1 {\n    position: absolute;\n    border: 2px solid black;\n    height: 380px;\n    width: 380px;\n    border-radius: 50% 50% 50% 50%;\n    background: #1e90ff;\n  }\n  .face1parent {\n    position: absolute;\n    width: 380px;\n    height: 340px;\n    left: 50%;\n    top: 80px;\n    margin-left: -190px;\n    overflow: hidden;\n    background: #93b8ca;\n  }\n  \n  .face2 {\n    width: 340px;\n    height: 300px;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: 70px;\n    margin-left: -170px;\n    border-radius: 240px / 210px;\n    background: #ffffff;\n  }\n  .neck {\n    position: absolute;\n    width: 236px;\n    height: 30px;\n    border: 1px solid red;\n    left: 50%;\n    top: 418px;\n    margin-left: -118px;\n    background: #ff0000;\n  }\n  .neck::before {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    content: \"\";\n    border-radius: 50%;\n    margin-left: -15px;\n    top: -1px;\n    background: #ff0000;\n  }\n  .neck::after {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    content: \"\";\n    border-radius: 50%;\n    right: 0;\n    margin-right: -15px;\n    top: -1px;\n    background: #ff0000;\n  }\n  .eye {\n    position: absolute;\n    width: 75px;\n    height: 90px;\n    border: 2px solid black;\n    left: 50%;\n    top: 120px;\n    margin-left: -40px;\n    border-radius: 60%;\n    z-index: 2;\n    background: #ffffff;\n  }\n  .eye.left {\n    transform: translateX(-37px);\n  }\n  .eye.right {\n    transform: translateX(37px);\n  }\n  .eye.left::before {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 1px solid black;\n    content: \"\";\n    left: 70%;\n    bottom: 20px;\n    border-radius: 50%;\n    background: #000000;\n  }\n  .eye.right::before {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 1px solid black;\n    content: \"\";\n    right: 70%;\n    bottom: 20px;\n    border-radius: 50%;\n    background: #000000;\n  }\n  .nose {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    left: 50%;\n    top: 197px;\n    margin-left: -27px;\n    border-radius: 50%;\n    background: #ff0000;\n  }\n  .nose::before {\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    content: \"\";\n    left: 55%;\n    bottom: 40%;\n    border-radius: 50%;\n    background: #ffffff;\n  }\n  \n  .nose_down {\n    position: absolute;\n    width: 1px;\n    height: 110px;\n    border: 1px solid black;\n    left: 50%;\n    top: 247px;\n    background: black;\n    z-index: 3;\n  }\n  \n  .mouth {\n    position: absolute;\n    width: 220px;\n    height: 80px;\n    left: 50%;\n    top: 320px;\n    margin-left: -110px;\n    overflow: hidden;\n  }\n  .mouth > .lip.up {\n    position: absolute;\n    width: 220px;\n    height: 80px;\n    left: 50%;\n    margin-left: -110px;\n    bottom: 40px;\n    border: 2px solid black;\n    border-radius: 80%;\n    background: #ffffff;\n    z-index: 2;\n  }\n  .lip.down {\n    position: absolute;\n    width: 190px;\n    height: 60px;\n    left: 50%;\n    top: 335px;\n    margin-left: -95px;\n    overflow: hidden;\n  }\n  .lip.down > .yuan1 {\n    position: absolute;\n    width: 200px;\n    height: 800px;\n    left: 50%;\n    margin-left: -100px;\n    bottom: 0;\n    border-radius: 80px / 80px;\n    background: #9b000a;\n  }\n  \n  .lip.down > .tongue {\n    width: 100%;\n    height: 40px;\n    position: absolute;\n    top: 18px;\n    overflow: hidden;\n  }\n  .lip.down > .tongue > .yuan2 {\n    position: absolute;\n    width: 105px;\n    height: 800px;\n    left: 50%;\n    margin-left: -50px;\n    top: 16px;\n    border-radius: 95px /170px;\n    background: #ff4760;\n  }\n  .mustache {\n    position: absolute;\n    width: 120px;\n    height: 100px;\n    left: 50%;\n    top: 220px;\n    margin-left: -60px;\n  }\n  .mustache.left {\n    transform: translateX(-80px);\n  }\n  .mustache.right {\n    transform: translateX(80px);\n  }\n  .mustache.left > .huzi1 {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: black;\n    transform: rotate(20deg);\n    top: 10px;\n  }\n  .mustache.left > .huzi2 {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: black;\n    top: 40px;\n    left: -5px;\n  }\n  .mustache.left > .huzi3 {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: black;\n    transform: rotate(-20deg);\n    top: 70px;\n  }\n  .mustache.right > .huzi4 {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: black;\n    transform: rotate(-20deg);\n    top: 10px;\n    left: 15px;\n  }\n  .mustache.right > .huzi5 {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: black;\n    top: 40px;\n    left: 20px;\n  }\n  .mustache.right > .huzi6 {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: black;\n    transform: rotate(20deg);\n    top: 70px;\n    left: 15px;\n  }\n  .bell {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    border: 2px solid black;\n    left: 50%;\n    top: 430px;\n    margin-left: -20px;\n    border-radius: 50%;\n    background: #ffff00;\n    z-index: 2;\n    overflow: hidden;\n  }\n  .bell > .line1 {\n    position: absolute;\n    width: 40px;\n    height: 20px;\n    left: 50%;\n    margin-left: -20px;\n    border: 2px solid black;\n    top: -5px;\n  }\n  .bell > .line2 {\n    position: absolute;\n    width: 50px;\n    height: 25px;\n    border: 2px solid black;\n    top: -6px;\n    left: 50%;\n    margin-left: -25px;\n  }\n  .bell::before {\n    position: absolute;\n    width: 10px;\n    height: 7px;\n    content: \"\";\n    border: 1px solid green;\n    left: 50%;\n    margin-left: -5px;\n    top: 55%;\n    border-radius: 40%;\n    background: black;\n  }\n  .bell::after {\n    position: absolute;\n    width: 2px;\n    height: 15px;\n    content: \"\";\n    left: 50%;\n    top: 65%;\n    background: black;\n    margin-left: -1px;\n  }";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//模块化 把那一大段css代码放到了css.js文件了 再在这里导入
var n = 0;
demo1.innerText = _css.default.substring(0, n);
demo2.innerHTML = _css.default.substring(0, n);
var time = 100;

var run = function run() {
  n += 1; //console.log(n + "" + string.substring(0, n));

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo1.innerText = _css.default.substring(0, n);
  demo2.innerHTML = _css.default.substring(0, n);
  demo1.scrollTop = demo1.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var slow = function slow() {
  pause();
  time = 300;
  id = play();
};

var normal = function normal() {
  pause();
  time = 100;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast; // id = setInterval(()=>{
//   run()
// }, time)
// 等价于
// id = setInterval(run, time);
},{"./css.js":"css.js"}],"C:/Users/76968/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55079" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/76968/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map