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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/catalog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validate */ \"./src/js/modules/validate.js\");\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function(){\r\n    Object(_modules_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_modules_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./src/js/catalog.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst popup = () => {\n    const popup = document.getElementById('popup');\n    const btns = document.querySelectorAll('.popup-btn-trigger');\n    const close = document.getElementById('popup__close');\n\n    btns.forEach(function(btn) {\n        btn.onclick = function () {\n            popup.style.display = \"block\";\n            document.getElementsByTagName(\"body\")[0].style.overflow=\"hidden\";\n        }\n    });\n\n    close.onclick = function () {\n        popup.style.display = \"none\";\n        document.getElementsByTagName(\"body\")[0].style.overflow=\"auto\";\n    }\n\n    window.addEventListener('click', (event) => {\n        if (event.target == popup) {\n            popup.style.display = \"none\";\n            document.getElementsByTagName(\"body\")[0].style.overflow=\"auto\";\n        }\n    });\n\n};\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/validate.js":
/*!************************************!*\
  !*** ./src/js/modules/validate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst validate = () => {\n        const form = document.getElementById('form'),\n              name = document.querySelector('[name=\"name\"]'),\n              phone = document.querySelector('[name=\"phone\"]'),\n              com = document.querySelector('.input-comment'),\n              inputs = document.querySelectorAll('[name]'),\n              check = document.querySelectorAll('.form-check');\n\n\n\n              \n        const regExpPhone = /^([+]?[0-9\\s-\\(\\)]{3,25})*$/i;\n\n        const setError = (elem, message) => {\n            elem.style.border = '1px solid red';\n            elem.nextElementSibling.textContent = message;\n            elem.nextElementSibling.classList.add('_active');\n        } \n\n        const setSuccess = (elem) => {\n            elem.nextElementSibling.classList.remove('_active');\n        }\n\n        const resetStyling = (elem) => {\n            elem.style.border = '1px solid green';\n            elem.nextElementSibling.classList.remove('_active');\n        }\n\n        const nameValidate = () => {\n                \n            const value = name.value;\n\n            if(!value.trim().length){\n                setError(name, 'поле не должно быть пустым');\n                return;\n            }\n\n            if(value.trim().length < 3){\n                setError(name, 'слишком короткое имя');\n                return;\n            }\n\n            setSuccess(name);\n            return true;\n        }\n\n        const phoneValidate = () => {\n\n            const value = phone.value;\n\n            if(!value.trim().length){\n                setError(phone, 'поле не должно быть пустым');\n                return;\n            }\n\n            if(!regExpPhone.test(value.trim())){\n                setError(phone, 'телефон не валиден');\n                return;\n            }\n\n            setSuccess(phone);\n            return true;\n        }\n\n        const comValidate = () => {\n\n            const value = com.value;\n\n            if(!value.trim().length){\n                setError(com, 'поле не должно быть пустым');\n                return;\n            }\n            \n            if(value.trim().length < 5){\n                setError(com, 'слишком короткое сообщение');\n                return;\n            }\n\n            setSuccess(com);\n            return true;\n        }\n\n\n        \n\n        const fieldsValidate = () => {\n            let valide = true;\n            if(!nameValidate()) {\n                valide = false;\n            }\n            if(!phoneValidate()) {\n                valide = false;\n            }\n            if(!comValidate()) {\n                valide = false;\n            }\n\n            return valide;\n        }\n\n\n        name.addEventListener('input', () => resetStyling(name));\n        phone.addEventListener('input', () => resetStyling(phone));\n        com.addEventListener('input', () => resetStyling(com));\n\n        name.addEventListener('blur', nameValidate);\n        phone.addEventListener('blur', phoneValidate);\n        com.addEventListener('blur', comValidate);\n        \n \n        const getMessage = {\n            loading: 'Загрузка...',\n            success: 'Валидация пройдена, отправка данных на почту!',\n            failure: 'Что-то пошло не так...'\n        };\n\n        const postData = async (url, data) => {\n            document.querySelectorAll('.status').textContent = getMessage.loading;\n            let res = await fetch(url, {\n                method: 'POST',\n                body: data\n            });\n\n            return await res.text();\n        };\n\n        const closePopup = () => {\n            popup.style.display = \"none\";\n            document.getElementsByTagName(\"body\")[0].style.overflow=\"auto\";\n        }\n        \n\n       const clearInputs = () => {\n            inputs.forEach(item => {\n                item.value = '';\n                item.style.border = '';\n            })\n       }\n\n        \n\n        form.addEventListener('submit', (e) => {\n                e.preventDefault();\n\n                if(fieldsValidate()) {\n                \n                let statusMessage = document.createElement('div');\n                statusMessage.classList.add('status');\n                form.appendChild(statusMessage);\n\n                const formData = new FormData(form);\n\n                postData('/send-mail-api-v1.0', formData)\n                    .then(res => {\n                        console.log(res);\n                        statusMessage.textContent = getMessage.success\n                    })\n                    .catch(() => statusMessage.textContent = getMessage.failure)\n                    .finally( () => {\n                        setTimeout(() => {\n                            closePopup();\n                            statusMessage.remove();\n                            clearInputs();\n                        }, 3000);\n                    })\n\n                    \n                    console.log('Валидация пройдена, отправка данных на сервер');\n                } else {\n                    console.log('Валидация не пройдена!')\n                }\n\n        });\n         \n\n\n        \n\n            \n\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);\n\n//# sourceURL=webpack:///./src/js/modules/validate.js?");

/***/ })

/******/ });