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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/objects.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ \"./src/js/modules/validate.js\");\n\r\n\r\nconst popup = () => {\r\n    const popup = document.getElementById('popup');\r\n    const btn = document.querySelectorAll('.btn');\r\n    const close = document.getElementById('popup__close');\r\n\r\n    for (let i = 0; i < btn.length; i++) {\r\n        btn[i].onclick = function () {\r\n            popup.style.display = \"block\";\r\n            document.getElementsByTagName(\"body\")[0].style.overflow=\"hidden\";\r\n        }\r\n    }\r\n\r\n    close.onclick = function () {\r\n        popup.style.display = \"none\";\r\n        document.getElementsByTagName(\"body\")[0].style.overflow=\"auto\";\r\n    }\r\n\r\n    window.addEventListener('click', (event) => {\r\n        if (event.target == popup) {\r\n            popup.style.display = \"none\";\r\n            document.getElementsByTagName(\"body\")[0].style.overflow=\"auto\";\r\n        }\r\n    });\r\n    \r\n};\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/sliderSwipe.js":
/*!***************************************!*\
  !*** ./src/js/modules/sliderSwipe.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sliderSwipe = () => \r\n    {\r\n        const galleryThumbs = new Swiper('.object__slider-thumbs', {\r\n            spaceBetween: 5,\r\n            slidesPerView: 5,\r\n            freeMode: true,\r\n            watchSlidesVisibility: true,\r\n            watchSlidesProgress: true,\r\n          });\r\n          \r\n          new Swiper('.object__slider-top', {\r\n            loop: true,\r\n            loopedSlides: 5, //looped slides should be the same\r\n            navigation: {\r\n              nextEl: '.swiper-button-next',\r\n              prevEl: '.swiper-button-prev',\r\n            },\r\n            thumbs: {\r\n              swiper: galleryThumbs,\r\n            },\r\n          });\r\n        \r\n          \r\n    }\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderSwipe);\n\n//# sourceURL=webpack:///./src/js/modules/sliderSwipe.js?");

/***/ }),

/***/ "./src/js/modules/validate.js":
/*!************************************!*\
  !*** ./src/js/modules/validate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst validate = () => {\r\n    const form = document.getElementById('form'),\r\n        name = document.querySelector('[name=\"name\"]'),\r\n        phone = document.querySelector('[name=\"phone\"]'),\r\n        com = document.querySelector('.input-comment'),\r\n        inputs = document.querySelectorAll('[name]'),\r\n        check = document.querySelectorAll('.form-check');\r\n\r\n    const regExpPhone = /^([+]?[0-9\\s-\\(\\)]{3,25})*$/i;\r\n\r\n    const setError = (elem, message) => {\r\n        elem.style.border = '1px solid red';\r\n        elem.nextElementSibling.textContent = message;\r\n        elem.nextElementSibling.classList.add('_active');\r\n    }\r\n\r\n    const setSuccess = (elem) => {\r\n        elem.nextElementSibling.classList.remove('_active');\r\n    }\r\n\r\n    const resetStyling = (elem) => {\r\n        elem.style.border = '1px solid green';\r\n        elem.nextElementSibling.classList.remove('_active');\r\n    }\r\n\r\n    const nameValidate = () => {\r\n\r\n        const value = name.value;\r\n\r\n        if (!value.trim().length) {\r\n            setError(name, 'поле не должно быть пустым');\r\n            return;\r\n        }\r\n\r\n        if (value.trim().length < 3) {\r\n            setError(name, 'слишком короткое имя');\r\n            return;\r\n        }\r\n\r\n        setSuccess(name);\r\n        return true;\r\n    }\r\n\r\n    const phoneValidate = () => {\r\n\r\n        const value = phone.value;\r\n\r\n        if (!value.trim().length) {\r\n            setError(phone, 'поле не должно быть пустым');\r\n            return;\r\n        }\r\n\r\n        if (!regExpPhone.test(value.trim())) {\r\n            setError(phone, 'телефон не валиден');\r\n            return;\r\n        }\r\n\r\n        setSuccess(phone);\r\n        return true;\r\n    }\r\n\r\n    const comValidate = () => {\r\n\r\n        const value = com.value;\r\n\r\n        if (!value.trim().length) {\r\n            setError(com, 'поле не должно быть пустым');\r\n            return;\r\n        }\r\n\r\n        if (value.trim().length < 5) {\r\n            setError(com, 'слишком короткое сообщение');\r\n            return;\r\n        }\r\n\r\n        setSuccess(com);\r\n        return true;\r\n    }\r\n\r\n    const fieldsValidate = () => {\r\n        let valide = true;\r\n        if (!nameValidate()) {\r\n            valide = false;\r\n        }\r\n        if (!phoneValidate()) {\r\n            valide = false;\r\n        }\r\n        if (!comValidate()) {\r\n            valide = false;\r\n        }\r\n\r\n        return valide;\r\n    }\r\n\r\n    name.addEventListener('input', () => resetStyling(name));\r\n    phone.addEventListener('input', () => resetStyling(phone));\r\n    com.addEventListener('input', () => resetStyling(com));\r\n\r\n    name.addEventListener('blur', nameValidate);\r\n    phone.addEventListener('blur', phoneValidate);\r\n    com.addEventListener('blur', comValidate);\r\n\r\n\r\n    const getMessage = {\r\n        loading: 'Загрузка...',\r\n        success: 'Валидация пройдена, отправка данных на почту!',\r\n        failure: 'Что-то пошло не так...'\r\n    };\r\n\r\n    const postData = async (url, data) => {\r\n        document.querySelector('.status').textContent = getMessage.loading;\r\n        let res = await fetch(url, {\r\n            method: 'POST',\r\n            body: data\r\n        });\r\n\r\n        return await res.text();\r\n    };\r\n\r\n    const closePopup = () => {\r\n        popup.style.display = \"none\";\r\n        document.getElementsByTagName(\"body\")[0].style.overflow = \"auto\";\r\n    }\r\n\r\n\r\n    const clearInputs = () => {\r\n        inputs.forEach(item => {\r\n            item.value = '';\r\n            item.style.border = '';\r\n        })\r\n    }\r\na\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (fieldsValidate()) {\r\n\r\n            let statusMessage = document.createElement('div');\r\n            statusMessage.classList.add('status');\r\n            form.appendChild(statusMessage);\r\n\r\n            const formData = new FormData(form);\r\n\r\n            postData('server.php', formData)\r\n                .then(res => {\r\n                    console.log(res);\r\n                    statusMessage.textContent = getMessage.success\r\n                })\r\n                .catch(() => statusMessage.textContent = getMessage.failure)\r\n                .finally(() => {\r\n\r\n                    setTimeout(() => {\r\n                        closePopup();\r\n                        statusMessage.remove();\r\n                        clearInputs();\r\n                    }, 5000);\r\n                })\r\n\r\n\r\n            console.log('Валидация пройдена, отправка данных на сервер');\r\n        } else {\r\n            console.log('Валидация не пройдена!')\r\n        }\r\n\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);\n\n//# sourceURL=webpack:///./src/js/modules/validate.js?");

/***/ }),

/***/ "./src/js/objects.js":
/*!***************************!*\
  !*** ./src/js/objects.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validate */ \"./src/js/modules/validate.js\");\n/* harmony import */ var _modules_sliderSwipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderSwipe */ \"./src/js/modules/sliderSwipe.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function(){\r\n    Object(_modules_sliderSwipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    Object(_modules_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_modules_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./src/js/objects.js?");

/***/ })

/******/ });