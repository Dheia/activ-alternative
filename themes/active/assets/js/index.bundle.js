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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validate */ \"./src/js/modules/validate.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function(){\r\n    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_modules_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    Object(_modules_validate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

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

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst slider = () => {\n    'use strict';\n    var slideShow = (function () {\n      return function (selector, config) {\n        var\n          _slider = document.querySelector(selector),\n          _sliderContainer = _slider.querySelector('.slider__items'), \n          _sliderItems = _slider.querySelectorAll('.slider__item'),\n          _sliderControls = _slider.querySelectorAll('.slider__control'), \n          _currentPosition = 0, \n          _transformValue = 0, \n          _transformStep = 100,\n          _itemsArray = [],\n          _timerId,\n          _indicatorItems,\n          _indicatorIndex = 0,\n          _indicatorIndexMax = _sliderItems.length - 1,\n          _stepTouch = 50,\n          _config = {\n            isAutoplay: false,\n            directionAutoplay: 'next',\n            delayAutoplay: 5000,\n            isPauseOnHover: true\n          };\n\n        for (var key in config) {\n          if (key in _config) {\n            _config[key] = config[key];\n          }\n        }\n\n        for (var i = 0, length = _sliderItems.length; i < length; i++) {\n          _itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });\n        }\n\n        var position = {\n          getItemIndex: function (mode) {\n            var index = 0;\n            for (var i = 0, length = _itemsArray.length; i < length; i++) {\n              if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {\n                index = i;\n              }\n            }\n            return index;\n          },\n          getItemPosition: function (mode) {\n            return _itemsArray[position.getItemIndex(mode)].position;\n          }\n        };\n\n        var _move = function (direction) {\n          var nextItem, currentIndicator = _indicatorIndex;;\n          if (direction === 'next') {\n            _currentPosition++;\n            if (_currentPosition > position.getItemPosition('max')) {\n              nextItem = position.getItemIndex('min');\n              _itemsArray[nextItem].position = position.getItemPosition('max') + 1;\n              _itemsArray[nextItem].transform += _itemsArray.length * 100;\n              _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';\n            }\n            _transformValue -= _transformStep;\n            _indicatorIndex = _indicatorIndex + 1;\n            if (_indicatorIndex > _indicatorIndexMax) {\n              _indicatorIndex = 0;\n            }\n          } else {\n            _currentPosition--;\n            if (_currentPosition < position.getItemPosition('min')) {\n              nextItem = position.getItemIndex('max');\n              _itemsArray[nextItem].position = position.getItemPosition('min') - 1;\n              _itemsArray[nextItem].transform -= _itemsArray.length * 100;\n              _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';\n            }\n            _transformValue += _transformStep;\n            _indicatorIndex = _indicatorIndex - 1;\n            if (_indicatorIndex < 0) {\n              _indicatorIndex = _indicatorIndexMax;\n            }\n          }\n          _sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';\n          _indicatorItems[currentIndicator].classList.remove('active');\n          _indicatorItems[_indicatorIndex].classList.add('active');\n        };\n\n        var _moveTo = function (index) {\n          var i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';\n          while (index !== _indicatorIndex && i <= _indicatorIndexMax) {\n            _move(direction);\n            i++;\n          }\n        };\n\n        var _startAutoplay = function () {\n          if (!_config.isAutoplay) {\n            return;\n          }\n          _stopAutoplay();\n          _timerId = setInterval(function () {\n            _move(_config.directionAutoplay);\n          }, _config.delayAutoplay);\n        };\n\n        var _stopAutoplay = function () {\n          clearInterval(_timerId);\n        };\n\n        var _addIndicators = function () {\n          var indicatorsContainer = document.createElement('ol');\n          indicatorsContainer.classList.add('slider__indicators');\n          for (var i = 0, length = _sliderItems.length; i < length; i++) {\n            var sliderIndicatorsItem = document.createElement('li');\n            if (i === 0) {\n              sliderIndicatorsItem.classList.add('active');\n            }\n            sliderIndicatorsItem.setAttribute(\"data-slide-to\", i);\n            indicatorsContainer.appendChild(sliderIndicatorsItem);\n          }\n          _slider.appendChild(indicatorsContainer);\n          _indicatorItems = _slider.querySelectorAll('.slider__indicators > li')\n        };\n\n        var _isTouchDevice = function () {\n          return !!('ontouchstart' in window || navigator.maxTouchPoints);\n        };\n\n        var _setUpListeners = function () {\n          var _startX = 0;\n          if (_isTouchDevice()) {\n            _slider.addEventListener('touchstart', function (e) {\n              _startX = e.changedTouches[0].clientX;\n              _startAutoplay();\n            });\n            _slider.addEventListener('touchend', function (e) {\n              var\n                _endX = e.changedTouches[0].clientX,\n                _deltaX = _endX - _startX;\n              if (_deltaX > _stepTouch) {\n                _move('prev');\n              } else if (_deltaX < -_stepTouch) {\n                _move('next');\n              }\n              _startAutoplay();\n            });\n          } else {\n            for (var i = 0, length = _sliderControls.length; i < length; i++) {\n              _sliderControls[i].classList.add('slider__control_show');\n            }\n          }\n          _slider.addEventListener('click', function (e) {\n            if (e.target.classList.contains('slider__control')) {\n              e.preventDefault();\n              _move(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');\n              _startAutoplay();\n            } else if (e.target.getAttribute('data-slide-to')) {\n              e.preventDefault();\n              _moveTo(parseInt(e.target.getAttribute('data-slide-to')));\n              _startAutoplay();\n            }\n          });\n          document.addEventListener('visibilitychange', function () {\n            if (document.visibilityState === \"hidden\") {\n              _stopAutoplay();\n            } else {\n              _startAutoplay();\n            }\n          }, false);\n          if (_config.isPauseOnHover && _config.isAutoplay) {\n            _slider.addEventListener('mouseenter', function () {\n              _stopAutoplay();\n            });\n            _slider.addEventListener('mouseleave', function () {\n              _startAutoplay();\n            });\n          }\n        };\n\n        _addIndicators();\n        _setUpListeners();\n        _startAutoplay();\n\n        return {\n          next: function () {\n            _move('next');\n          },     \n          left: function () {\n            _move('prev');\n          },\n          stop: function () {\n            _config.isAutoplay = false;\n            _stopAutoplay();\n          },\n          cycle: function () {\n            _config.isAutoplay = true;\n            _startAutoplay();\n          }\n        }\n      }\n    }());\n\n    slideShow('.slider', {\n      isAutoplay: true\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n\n\n//# sourceURL=webpack:///./src/js/modules/slider.js?");

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