/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(495);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

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

;// CONCATENATED MODULE: ./src/components/DOM/pageLoad.js


function pageLoad() {
  const toggleMenu = document.querySelector(".toggleMenu");

  toggleMenu.appendChild(dropDownMenuMaker(["Home", "Today", "3-Day"]));
}

/* harmony default export */ const DOM_pageLoad = (pageLoad);

;// CONCATENATED MODULE: ./src/components/Logic/API/getWeatherLocation.js
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
    console.log("THIS IS THE WEATHER DATA:");
    console.log(weatherData);

    return weatherData;
  } catch (error) {
    console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  }
}

/* harmony default export */ const getWeatherLocation = (getCurrentWeatherLocationData);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/searchElement.js
function displaySearchElement() {
  const searchContainer = document.createElement("section");

  searchContainer.classList.add("searchContainer");

  const inputElement = document.createElement("input");
  inputElement.id = "search";
  inputElement.type = "text";
  inputElement.placeholder = "Enter City";

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search!";

  searchBtn.classList.add("btnSearch");

  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(searchBtn);

  return searchContainer;
}

/* harmony default export */ const searchElement = (displaySearchElement);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/displayLocationInfo.js


function displayLocationInfo() {
  const displayLocationInfoContainer = document.createElement("section");
  displayLocationInfoContainer.classList.add("display-location-info");

  const countryDisplayContainer = document.createElement("section");
  countryDisplayContainer.classList.add("countryDisplayContainer");

  const countryDisplayTitle = document.createElement("h2");
  countryDisplayTitle.classList.add("countryDisplayTitle");

  countryDisplayTitle.textContent = "United States of America";

  countryDisplayContainer.appendChild(countryDisplayTitle);

  const regionDisplayContainer = document.createElement("section");
  regionDisplayContainer.classList.add("regionDisplayContainer");

  const regionDisplayTitle = document.createElement("h3");

  regionDisplayTitle.textContent = "New York";

  const locationInfoContainer = document.createElement("section");
  locationInfoContainer.classList.add("locationInfoContainer");

  regionDisplayContainer.appendChild(regionDisplayTitle);

  locationInfoContainer.appendChild(countryDisplayContainer);
  locationInfoContainer.appendChild(regionDisplayContainer);

  displayLocationInfoContainer.appendChild(searchElement());
  displayLocationInfoContainer.appendChild(locationInfoContainer);

  return displayLocationInfoContainer;
}

/* harmony default export */ const display_location_information_displayLocationInfo = (displayLocationInfo);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/displayTodayForecast.js
function displayTodayForecast(lengthOfData) {
  // Will display every hour of today's date
  const todayForeCastContainer = document.createElement("section");

  todayForeCastContainer.classList.add("todayForeCastContainer");

  for (let i = 0; i < lengthOfData; i += 1) {
    const itemContainer = document.createElement("article");

    const temperatureDisplay = document.createElement("h4");
    temperatureDisplay.textContent = "DUMMY TITLE";

    const timeDisplay = document.createElement("h5");
    timeDisplay.textContent = "TIME DUMMY";

    const imgDisplay = document.createElement("img");
    imgDisplay.alt = "DUMMY IMAGE";

    itemContainer.appendChild(temperatureDisplay);

    itemContainer.appendChild(timeDisplay);

    itemContainer.appendChild(imgDisplay);

    todayForeCastContainer.appendChild(itemContainer);
  }

  return todayForeCastContainer;
}

/* harmony default export */ const display_location_information_displayTodayForecast = (displayTodayForecast);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/displayLocationPage.js




function displayLocationPage() {
  const displayLocationContainer = document.createElement("section");

  // const displayLocationInfo = document.querySelector(".display-location-info");

  displayLocationContainer.id = "displayLocationContainer";

  displayLocationContainer.appendChild(display_location_information_displayLocationInfo());

  displayLocationContainer.appendChild(display_location_information_displayTodayForecast(4));

  return displayLocationContainer;
}

/* harmony default export */ const display_location_information_displayLocationPage = (displayLocationPage);

;// CONCATENATED MODULE: ./src/index.js







DOM_pageLoad();

const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  const content = document.querySelector("#content");
  // get input value
  const getInput = document.querySelector("#location");
  const getInputValue = getInput.value;

  console.log(getInputValue);

  getWeatherLocation(getInputValue);

  const welcomeScreen = document.querySelector("#welcomeScreen");
  welcomeScreen.remove();

  content.appendChild(display_location_information_displayLocationPage());

  // once we have the data, we'll remove the initial page and load in the new one

  // pass input value to function
  // remove this page and grab the other
});

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map