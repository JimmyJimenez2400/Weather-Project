/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dropDownMenuMaker)
});

;// CONCATENATED MODULE: ./node_modules/dropdown-menu-builder/src/dropdown-menu/dropDownMenuListener.js
function dropDownMenuListener(e) {
  const dropDownMenu = document.getElementById("dropDownMenu");

  const toggleDropDown = function () {
    dropDownMenu.classList.toggle("show");
  };

  e.stopPropagation();
  toggleDropDown();

  document.documentElement.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("show")) {
      toggleDropDown();
    }
  });
}

;// CONCATENATED MODULE: ./node_modules/dropdown-menu-builder/src/dropdown-menu/dropdown-menu.js


function dropDownMenuMaker(words) {
  const dropDownContainer = document.createElement("section");
  dropDownContainer.classList.add("dropDownContainer");

  const dropDownButton = document.createElement("button");
  dropDownButton.classList.add("dropDownButton");
  dropDownButton.setAttribute(
    "style",
    "background-color: white; display: flex; align-items: center; justify-content: flex-start; column-gap: 0.5rem; padding: 0.6rem; border-radius: 5px; border: none; box-shadow: rgba(0,0,0,0.05) 0px 6px 10px 0px, rgba(0, 0,0,0.1) 0px 0px 0px 1px;; position: relative;"
  );
  dropDownButton.setAttribute("id", "dropDownButton");
  dropDownButton.textContent = "Drop Down Menu";

  dropDownButton.addEventListener("click", dropDownMenuListener);

  const dropDownMenu = document.createElement("section");
  dropDownMenu.setAttribute(
    "style",
    "position: absolute; width: 250px;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 10px 0px,rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;; border-radius: 5px; margin-top: 0.3rem; background-color: white; transform: translateY(0.5rem); visibility: hidden; opacity: 1;"
  );
  dropDownMenu.setAttribute("id", "dropDownMenu");
  dropDownMenu.classList.add("dropDownMenu");

  for (let i = 0; i < words.length; i += 1) {
    console.log(words[i]);
    const wordContainer = document.createElement("a");
    wordContainer.classList.add("wordElement");
    wordContainer.setAttribute(
      "style",
      " display: flex; align-items: center; column-gap: 0.5rem; padding: 0.8rem 1rem; text-decoration:  none; color: black;"
    );
    wordContainer.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
      e.target.style.color = "white";

      setTimeout(() => {
        e.target.style.color = "black";
        e.target.style.backgroundColor = "white";
      }, 300);
    });
    wordContainer.href = `#${words[i]}`;
    wordContainer.textContent = words[i];

    dropDownMenu.appendChild(wordContainer);
  }

  dropDownContainer.appendChild(dropDownButton);
  dropDownContainer.appendChild(dropDownMenu);

  return dropDownContainer;
}

// In order to make our drop down menu, we essentially want to take in as many words as possible

// Perhaps an array as argument is better

// We need to create the structure

/* 

[section = "container"]
[][button = "btn"]
[][section = "dropdownMenu"]
[][][]TEXT
[]
*/


/***/ }),

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getLocationInformation(value) {
  const getWeatherLocationData = await value;

  const getLocationData = await getWeatherLocationData.location;

  const information = {
    name: getLocationData.name,
    region: getLocationData.region,
    country: getLocationData.country,
    localtime: getLocationData.localtime,
    id: getLocationData.tz_id,
  };

  return information;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocationInformation);


/***/ }),

/***/ 431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line consistent-return
async function getCurrentWeatherLocationData(location) {
  try {
    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcbc49485145475c855175911231711&q=${location}&days=3`,
      { mode: "cors" }
    );

    if (!weatherResponse.ok) {
      throw new Error("FAILED STATUS");
    }

    const weatherData = await weatherResponse.json();
    console.log(weatherData);

    return weatherData;
  } catch (error) {
    console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeatherLocationData);


/***/ }),

/***/ 138:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _components_Logic_API_getWeatherLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _components_Logic_API_getLocationData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(275);




const dropDownMenu = __webpack_require__(866);

const toggleMenu = document.querySelector(".toggleMenu");

const menu = dropDownMenu(["Home", "Today", "3-Day"]);

toggleMenu.appendChild(menu);

const currentData = (0,_components_Logic_API_getWeatherLocation__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("new york");

const locationData = await (0,_components_Logic_API_getLocationData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(currentData);

console.log(`Get Location name: ${locationData.localtime}`);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(138);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map