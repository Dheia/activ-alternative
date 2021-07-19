/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/js/modules/toggleMenu.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/js/modules/sendForm.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    Object(_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); \r\n    Object(_modules_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n        selectorsShow: '.navigation__call, .footer__btn',\r\n        selectorsHide: '.contact-form__close, .popup'\r\n    });\r\n    Object(_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./src/js/common.js?");

/***/ }),

/***/ "./src/js/helpers/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createElement = ({ tagName, classList }) => {\r\n    const elem = document.createElement(tagName);\r\n    if (classList) {\r\n        elem.className = classList;\r\n    }\r\n    return elem;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\r\n\n\n//# sourceURL=webpack:///./src/js/helpers/createElement.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst popup = ({ selectorsShow, selectorsHide}) => {\r\n    const triggersShow = document.querySelectorAll(selectorsShow),\r\n        triggersHide = document.querySelectorAll(selectorsHide),\r\n        popupElem = document.querySelector('.popup');\r\n\r\n    const isTrigger = (array, obj) => {\r\n        array = Array.from(array);\r\n        return array.filter(elem => elem === obj)[0];\r\n    }\r\n\r\n    const bindTrigger = (action) => {\r\n        return (trigger, index, array) => {\r\n            trigger.addEventListener('click', e => {\r\n                if (isTrigger(array, e.target)) {\r\n                    popupElem.classList[action]('popup--active');\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    triggersShow.forEach(bindTrigger('add'));\r\n    triggersHide.forEach(bindTrigger('remove'));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/sendForm.js":
/*!************************************!*\
  !*** ./src/js/modules/sendForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/postData */ \"./src/js/services/postData.js\");\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createElement */ \"./src/js/helpers/createElement.js\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ \"./src/js/modules/validator/index.js\");\n\r\n\r\n\r\n\r\nconst sendForm = () => {\r\n    const form = document.querySelector('.contact-form__form');\r\n    const cover = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ tagName: 'div', classList: 'contact-form__cover' });\r\n\r\n    Object(_validator__WEBPACK_IMPORTED_MODULE_2__[\"inputsWatcher\"])(form);\r\n\r\n    const message = {\r\n        loading: `<div class=\"awesome-spinner\"></div>`,\r\n        success: `<div class=\"awesome-fetch-success\">Ваше сообщение успешно отправлено!</div>`,\r\n        error: `<div class=\"awesome-fetch-error\">Извините. Ошибка сервера. Попробуйте повторить попытку позже.</div>`\r\n    }\r\n\r\n    const afterResponse = ({ success }) => {\r\n        cover.innerHTML = success ? message.success : message.error;\r\n        setTimeout(() => {\r\n            form.reset();\r\n            cover.remove();\r\n        }, 3000);\r\n    }\r\n\r\n    form.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        if (Object(_validator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(form)) {\r\n            cover.innerHTML = message.loading;\r\n            form.parentNode.appendChild(cover);\r\n\r\n            const data = new FormData(form);\r\n            Object(_services_postData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/send-mail-api-v1.0', data)\r\n                .then(afterResponse)\r\n                .catch(afterResponse);\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendForm);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/sendForm.js?");

/***/ }),

/***/ "./src/js/modules/toggleMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/toggleMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst toggleMenu = () => {\r\n    const navigation = document.querySelector('.navigation');\r\n    const openBtn = document.querySelector('.navigation__open');\r\n    const coverElem = document.querySelector('.navigation__cover');\r\n    const closeBtn = document.querySelector('.navigation__panel-close');\r\n    const links = navigation.querySelectorAll('.navigation__panel-link');\r\n\r\n    const openMenu = () => {\r\n        navigation.classList.add('_active');\r\n    }\r\n\r\n    const closeMenu = () => {\r\n        navigation.classList.remove('_active');\r\n    }\r\n\r\n    openBtn.addEventListener('click', openMenu);\r\n    coverElem.addEventListener('click', closeMenu);\r\n    closeBtn.addEventListener('click', closeMenu);\r\n    links.forEach(link => link.addEventListener('click', closeMenu));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleMenu);\n\n//# sourceURL=webpack:///./src/js/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/js/modules/validator/conditions.js":
/*!************************************************!*\
  !*** ./src/js/modules/validator/conditions.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst conditions = {\r\n    name: { require: true, minlength: 5, maxlength: 80 },\r\n    phone: { require: true, minlength: 11, maxlength: 11 },\r\n    agree: { require: true }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (conditions);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/validator/conditions.js?");

/***/ }),

/***/ "./src/js/modules/validator/error-input.js":
/*!*************************************************!*\
  !*** ./src/js/modules/validator/error-input.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst errorInput = (input, action) => {\r\n    input.parentNode.classList[action]('contact-form__group--error');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (errorInput);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/validator/error-input.js?");

/***/ }),

/***/ "./src/js/modules/validator/index.js":
/*!*******************************************!*\
  !*** ./src/js/modules/validator/index.js ***!
  \*******************************************/
/*! exports provided: default, inputsWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./src/js/modules/validator/validator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _inputs_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs-watcher */ \"./src/js/modules/validator/inputs-watcher.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inputsWatcher\", function() { return _inputs_watcher__WEBPACK_IMPORTED_MODULE_1__[\"inputsWatcher\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/validator/index.js?");

/***/ }),

/***/ "./src/js/modules/validator/inputs-watcher.js":
/*!****************************************************!*\
  !*** ./src/js/modules/validator/inputs-watcher.js ***!
  \****************************************************/
/*! exports provided: inputsWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputsWatcher\", function() { return inputsWatcher; });\n/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditions */ \"./src/js/modules/validator/conditions.js\");\n/* harmony import */ var _error_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-input */ \"./src/js/modules/validator/error-input.js\");\n/* harmony import */ var _validate_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-input */ \"./src/js/modules/validator/validate-input.js\");\n\r\n\r\n\r\n\r\nconst inputsWatcher = (form) => {\r\n    Object.keys(_conditions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach(name => {\r\n        const input = form.querySelector(`[name=\"${name}\"]`);\r\n\r\n        input.addEventListener('input', () => {\r\n            Object(_error_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input, 'remove');\r\n        \r\n            if (!Object(_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, _conditions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name])) {\r\n                Object(_error_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input, 'add');\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/validator/inputs-watcher.js?");

/***/ }),

/***/ "./src/js/modules/validator/validate-input.js":
/*!****************************************************!*\
  !*** ./src/js/modules/validator/validate-input.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst validateInput = (input, { require, minlength, maxlength }) => {\r\n    const value = input.getAttribute('type') == 'checkbox' ? input.checked : input.value.trim();\r\n\r\n    if (require && !value) return false;\r\n    if (minlength && minlength > value.length) return false;\r\n    if (maxlength && maxlength < value.length) return false;\r\n\r\n    return true;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (validateInput);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/validator/validate-input.js?");

/***/ }),

/***/ "./src/js/modules/validator/validator.js":
/*!***********************************************!*\
  !*** ./src/js/modules/validator/validator.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-input */ \"./src/js/modules/validator/error-input.js\");\n/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditions */ \"./src/js/modules/validator/conditions.js\");\n/* harmony import */ var _validate_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-input */ \"./src/js/modules/validator/validate-input.js\");\n\r\n\r\n\r\n\r\nconst validator = (form) => {\r\n    let validateSuccess = true;\r\n    \r\n    Object.keys(_conditions__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).forEach(name => {\r\n        const input = form.querySelector(`[name=\"${name}\"]`);\r\n        \r\n        Object(_error_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, 'remove');\r\n        \r\n        if (!Object(_validate_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, _conditions__WEBPACK_IMPORTED_MODULE_1__[\"default\"][name])) {\r\n            Object(_error_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, 'add');\r\n            validateSuccess = false;\r\n        }\r\n    });\r\n\r\n    return validateSuccess;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (validator);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/validator/validator.js?");

/***/ }),

/***/ "./src/js/services/postData.js":
/*!*************************************!*\
  !*** ./src/js/services/postData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst postData = async (url, data) => {\r\n    const response = await fetch(url, {\r\n        method: 'POST',\r\n        body: data\r\n    });\r\n\r\n    if(!response.ok) {\r\n        throw new Error('error request');\r\n    }\r\n\r\n    return await response.json();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (postData);\r\n\n\n//# sourceURL=webpack:///./src/js/services/postData.js?");

/***/ })

/******/ });