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

;// CONCATENATED MODULE: ./src/components/DOM/loadingComponent/loadingComponent.js
async function loadingComponent(GIPHY) {
  const contentContainer = document.querySelector("#content");
  const loadingContainer = document.createElement("div");

  loadingContainer.classList.add("loadingContainer");

  const loadingImage = document.createElement("img");

  loadingImage.src = GIPHY;

  // loadingImage.src = `${GIPHY.data.images.original.url}`;

  const loadingContent = document.createElement("img");

  loadingContent.classList.add("loadingContent");
  loadingContainer.classList.add("show");

  loadingContainer.appendChild(loadingImage);

  loadingContainer.appendChild(loadingContent);

  contentContainer.appendChild(loadingContainer);

  return loadingContainer;
}

function hideLoadingComponent() {
  const getLoadingComponent = document.querySelector(".loadingContainer");
  getLoadingComponent.remove();
}



;// CONCATENATED MODULE: ./src/components/Logic/API/getGIPHYData.js
async function getGIPHYData() {
  try {
    const GIPHYResponse = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=jTqTuwCeo5smFY9bZw2BuQCw1O6Sy89g&s=loading",
      { mode: "cors" }
    );

    if (!GIPHYResponse.ok) {
      throw new Error("FAILED STATUS");
    }

    if (GIPHYResponse.status === 200) {
      const json = await GIPHYResponse.json();
      return json;
    }
  } catch (error) {
    return console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  }
}

/* harmony default export */ const API_getGIPHYData = (getGIPHYData);

;// CONCATENATED MODULE: ./src/components/Logic/API/getWeatherLocation.js




// eslint-disable-next-line consistent-return
async function getCurrentWeatherLocationData(location) {
  // CALL GIPHYAPI
  const GIPHYData = API_getGIPHYData().then(
    (result) => result.data.images.original.url
  );

  const response = await GIPHYData;

  await loadingComponent(response);

  
  try {
    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcbc49485145475c855175911231711&q=${location}&days=3`,
      { mode: "cors" }
    );

    if (!weatherResponse.ok) {
      throw new Error("FAILED STATUS");
    }

    const weatherData = await weatherResponse.json();

    return weatherData;
  } catch (error) {
    console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  } finally {
    // hide loader
    hideLoadingComponent();
  }
}

/* harmony default export */ const getWeatherLocation = (getCurrentWeatherLocationData);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/searchElement.js
// eslint-disable-next-line import/no-cycle


function displaySearchElement() {
  const searchContainer = document.createElement("section");

  searchContainer.classList.add("searchContainer");

  const inputElement = document.createElement("input");
  inputElement.id = "search";
  inputElement.type = "text";
  inputElement.autocomplete = "off";
  inputElement.placeholder = "Enter City";

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search!";

  searchBtn.classList.add("btnSearch");

  searchBtn.addEventListener("click", () => {
    const inputValue = inputElement.value;
    newPage(inputValue);
  });

  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(searchBtn);

  return searchContainer;
}

/* harmony default export */ const display_location_information_searchElement = (displaySearchElement);

;// CONCATENATED MODULE: ./src/components/Logic/changeTemperature.js
function changeCurrentTemperature(currentData) {
  const currentTemperature = document.querySelectorAll(".temperature_c");

  for (let i = 0; i < currentTemperature.length; i += 1) {
    const currentTemperatureAttribute =
      currentTemperature[i].getAttribute("currenttemp");
    if (currentTemperatureAttribute === "c") {
      currentTemperature[i].setAttribute("currenttemp", "f");
      currentTemperature[0].textContent = `${currentData.temp_f}℉
      `;
      currentTemperature[1].textContent = `Feels Like ${currentData.feelslike_f}℉`;
    } else if (currentTemperatureAttribute === "f") {
      currentTemperature[i].setAttribute("currenttemp", "c");
      currentTemperature[0].textContent = `${currentData.temp_c}°C
      `;
      currentTemperature[1].textContent = `Feels Like ${currentData.feelslike_c}°C`;
    }
  }
}

function changeHourTemperature(forecast) {
  const getAllForecastElements = document.querySelectorAll(".hourTemperature");

  const forecastElements = Array.from(getAllForecastElements);

  for (let i = 0; i < forecast.length; i += 1) {
    const celciusTemp = forecast[i].temp_c;
    const fahrenheitTemp = forecast[i].temp_f;
    const getCurrentStatus = forecastElements[i].getAttribute("currenttemp");

    if (getCurrentStatus === "c") {
      forecastElements[i].setAttribute("currenttemp", "f");
      forecastElements[i].textContent = `${fahrenheitTemp} ℉`;
    } else if (getCurrentStatus === "f") {
      forecastElements[i].setAttribute("currenttemp", "c");
      forecastElements[i].textContent = `${celciusTemp} °C`;
    }
  }
}


function changeTemperature(forecast, currentData) {
  changeCurrentTemperature(currentData);
  changeHourTemperature(forecast);
}

/* harmony default export */ const Logic_changeTemperature = (changeTemperature);

;// CONCATENATED MODULE: ./src/components/Logic/convert24Hto12H.js
function convert24Hoursto12HoursFormat(time) {
  const splitArr = time.split(" ");
  // check if its correct
  const getTime = splitArr[1];

  const splitTime = getTime.split(":");

  // convert 23 to 11 time

  console.log(splitTime);
  const hourTime = splitTime[0];
  console.log(hourTime);
  const minuteTime = splitTime[1];

  if (hourTime > 12) {
    console.log("GREATER THAN 12");
    const convert24to12 = hourTime - 12;
    return `${convert24to12}:${minuteTime} PM`;
  }
  // eslint-disable-next-line no-else-return
  else if (Number(hourTime) === 0) {
    console.log("IT EQUALS TO 0");
    const hourTime12 = 12;
    return `${hourTime12}:${minuteTime} AM`;
  }

  return `${hourTime}:${minuteTime} AM`;
}

/* harmony default export */ const convert24Hto12H = (convert24Hoursto12HoursFormat);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/displayLocationInfo.js
/* eslint-disable import/no-cycle */






function displayLocationInfo(location, currentData, todayForecast) {
  const displayLocationInfoContainer = document.createElement("section");
  displayLocationInfoContainer.classList.add("display-location-info");

  const locationInfoContainer = document.createElement("section");
  locationInfoContainer.classList.add("locationInfoContainer");

  const countryDisplayContainer = document.createElement("section");
  countryDisplayContainer.classList.add("countryDisplayContainer");

  const countryDisplayTitle = document.createElement("h2");
  countryDisplayTitle.classList.add("countryDisplayTitle");

  countryDisplayTitle.textContent = `${location.country}`;

  countryDisplayContainer.appendChild(countryDisplayTitle);

  const regionDisplayContainer = document.createElement("section");
  regionDisplayContainer.classList.add("regionDisplayContainer");

  const regionDisplayTitle = document.createElement("h3");

  regionDisplayTitle.textContent = `${location.region}`;

  regionDisplayContainer.appendChild(regionDisplayTitle);

  const currentTimeDisplayContainer = document.createElement("section");
  const currentTimeDisplay = document.createElement("h3");
  currentTimeDisplay.textContent = `${convert24Hto12H(
    location.localtime
  )}`;
  currentTimeDisplay.setAttribute("currentTemp", "c");

  currentTimeDisplayContainer.appendChild(currentTimeDisplay);

  const searchElement = display_location_information_searchElement();

  const changeTemperatureButton = document.createElement("p");
  changeTemperatureButton.classList.add("changeTemperatureBtn");

  const cTemp = document.createElement("span");

  cTemp.textContent = "C";
  cTemp.classList.add("currentActive");
  cTemp.classList.add("cTemp");

  changeTemperatureButton.appendChild(cTemp);

  const splitter = document.createElement("span");
  splitter.textContent = "/";

  changeTemperatureButton.appendChild(splitter);

  const fTemp = document.createElement("span");

  fTemp.textContent = "F";
  fTemp.classList.add("fTemp");

  changeTemperatureButton.appendChild(fTemp);

  changeTemperatureButton.addEventListener("click", () => {
    Logic_changeTemperature(todayForecast, currentData);
  });

  locationInfoContainer.appendChild(countryDisplayContainer);
  locationInfoContainer.appendChild(regionDisplayContainer);
  locationInfoContainer.appendChild(currentTimeDisplayContainer);
  locationInfoContainer.appendChild(searchElement);
  locationInfoContainer.appendChild(changeTemperatureButton);

  displayLocationInfoContainer.appendChild(locationInfoContainer);

  const todayTemperatureContainer = document.createElement("section");
  todayTemperatureContainer.classList.add("todayTemperatureContainer");

  const todayTemperatureTitle = document.createElement("h1");
  todayTemperatureTitle.classList.add("temperature_c");
  todayTemperatureTitle.setAttribute("currentTemp", "c");

  todayTemperatureTitle.textContent = `${currentData.temp_c}°C.`; // We should make this an object property, status.current_temperature which will be C but when button pressed, it would be F

  const todayTemperatureIcon = document.createElement("img");
  todayTemperatureIcon.alt = `${currentData.condition.icon}`;

  const settingWeatherIcon = document.createElement("img");
  settingWeatherIcon.alt = `${currentData.condition.icon}`;

  const feelsLikeTitle = document.createElement("h4");
  feelsLikeTitle.classList.add("temperature_c");
  feelsLikeTitle.textContent = `Feels like ${currentData.feelslike_c}°C`;
  feelsLikeTitle.setAttribute("currentTemp", "c");

  const airType = document.createElement("h4");
  airType.textContent = `${currentData.condition.text}`;
  airType.setAttribute("currentTemp", "c");

  todayTemperatureContainer.appendChild(todayTemperatureTitle);
  todayTemperatureContainer.appendChild(todayTemperatureIcon);
  todayTemperatureContainer.appendChild(settingWeatherIcon);
  todayTemperatureContainer.appendChild(feelsLikeTitle);
  todayTemperatureContainer.appendChild(airType);

  displayLocationInfoContainer.appendChild(todayTemperatureContainer);

  return displayLocationInfoContainer;
}

/* harmony default export */ const display_location_information_displayLocationInfo = (displayLocationInfo);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/displayTodayForecast.js


function displayTodayForecast(forecastArr) {
  // Will display every hour of today's date
  const todayForeCastContainer = document.createElement("section");

  todayForeCastContainer.classList.add("todayForeCastContainer");

  for (let i = 0; i < forecastArr.length; i += 1) {
    const itemContainer = document.createElement("article");

    const temperatureDisplay = document.createElement("h4");
    temperatureDisplay.classList.add("hourTemperature");
    temperatureDisplay.textContent = `${forecastArr[i].temp_c}°C`;
    temperatureDisplay.setAttribute("currentTemp", "c");

    const timeDisplay = document.createElement("h5");
    timeDisplay.textContent = `${convert24Hto12H(
      forecastArr[i].time
    )}`;

    const imgDisplay = document.createElement("img");
    imgDisplay.src = `${forecastArr[i].condition.icon}`;
    imgDisplay.alt = "DUMMY IMAGE";

    itemContainer.appendChild(temperatureDisplay);

    itemContainer.appendChild(imgDisplay);

    itemContainer.appendChild(timeDisplay);

    todayForeCastContainer.appendChild(itemContainer);
  }

  return todayForeCastContainer;
}

/* harmony default export */ const display_location_information_displayTodayForecast = (displayTodayForecast);

;// CONCATENATED MODULE: ./src/components/DOM/display_location_information/displayLocationPage.js
/* eslint-disable import/no-cycle */






function displayLocationPage(locationData, todayForecast, currentData) {
  const displayLocationContainer = document.createElement("section");

  // const displayLocationInfo = document.querySelector(".display-location-info");

  displayLocationContainer.id = "displayLocationContainer";

  displayLocationContainer.appendChild(
    display_location_information_displayLocationInfo(locationData, currentData, todayForecast)
  );

  displayLocationContainer.appendChild(display_location_information_displayTodayForecast(todayForecast));

  return displayLocationContainer;
}

/* harmony default export */ const display_location_information_displayLocationPage = (displayLocationPage);

;// CONCATENATED MODULE: ./src/components/Logic/getLocationData.js
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

  console.log("THIS IS LOCATION DATA, OBJECt INFORMATION:");
  console.log(information);

  return information;
}

/* harmony default export */ const getLocationData = (getLocationInformation);

;// CONCATENATED MODULE: ./src/components/Logic/getForecastHour.js
async function getTodayForecastHours(value) {
  const weatherLocationData = await value;

  console.log(weatherLocationData);

  const { forecast } = weatherLocationData;

  const foreCastArr = forecast.forecastday;

  const todayForecast = foreCastArr[0].hour;

  console.log("THIS IS TODAY FORECAST HOUR");
  console.log(todayForecast);

  return todayForecast;
}

/* harmony default export */ const getForecastHour = (getTodayForecastHours);

;// CONCATENATED MODULE: ./src/components/Logic/getCurrentData.js
async function getCurrentData(value) {
  const getWeatherLocationData = await value;

  const currentData = await getWeatherLocationData.current;

  console.log("THIS IS CURRENT DATA:");
  console.log(currentData);

  return currentData;
}

/* harmony default export */ const Logic_getCurrentData = (getCurrentData);

;// CONCATENATED MODULE: ./src/components/flowControl/flowControl.js
// Flow control will handle how the status of the current temperature (c/f), this will also execute both dom and api calls











async function homePageListener(value) {
  const jsonData = await getWeatherLocation(value);

  const locationData = await getLocationData(jsonData);

  const todayForecastHours = await getForecastHour(jsonData);

  const currentData = await Logic_getCurrentData(jsonData);

  const content = document.querySelector("#content");

  const welcomeScreen = document.querySelector("#welcomeScreen");
  welcomeScreen.remove();

  content.appendChild(
    display_location_information_displayLocationPage(locationData, todayForecastHours, currentData)
  );
}

async function newPage(value) {
  const jsonData = await getWeatherLocation(value);

  const locationData = await getLocationData(jsonData);

  const todayForecastHours = await getForecastHour(jsonData);

  const currentData = await Logic_getCurrentData(jsonData);

  const content = document.querySelector("#content");

  const oldPage = document.querySelector("#displayLocationContainer");
  oldPage.remove();

  content.appendChild(
    display_location_information_displayLocationPage(locationData, todayForecastHours, currentData)
  );
}



;// CONCATENATED MODULE: ./src/index.js




const searchButton = document.querySelector(".searchBtn");

const inputValue = document.querySelector("#location");

searchButton.addEventListener("click", () => {
  const getUserInputValue = inputValue.value;
  console.log(getUserInputValue);
  homePageListener(getUserInputValue);
});

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map