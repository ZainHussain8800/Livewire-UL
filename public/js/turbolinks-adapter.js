/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/turbolinks-adapter.js":
/*!********************************************!*\
  !*** ./resources/js/turbolinks-adapter.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {\n   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(function () {\n  'use strict';\n\n  if (typeof window.livewire === 'undefined') {\n    throw 'Livewire Turbolinks Plugin: window.Livewire is undefined. Make sure @livewireScripts is placed above this script include';\n  }\n\n  var firstTime = true;\n\n  function wireTurboAfterFirstVisit() {\n    // We only want this handler to run AFTER the first load.\n    if (firstTime) {\n      firstTime = false;\n      return;\n    }\n\n    window.Livewire.restart();\n    window.Alpine && window.Alpine.flushAndStopDeferringMutations && window.Alpine.flushAndStopDeferringMutations();\n  }\n\n  function wireTurboBeforeCache() {\n    document.querySelectorAll('[wire\\\\:id]').forEach(function (el) {\n      var component = el.__livewire;\n      var dataObject = {\n        fingerprint: component.fingerprint,\n        serverMemo: component.serverMemo,\n        effects: component.effects\n      };\n      el.setAttribute('wire:initial-data', JSON.stringify(dataObject));\n    });\n    window.Alpine && window.Alpine.deferMutations && window.Alpine.deferMutations();\n  }\n\n  document.addEventListener(\"turbo:load\", wireTurboAfterFirstVisit);\n  document.addEventListener(\"turbo:before-cache\", wireTurboBeforeCache);\n  document.addEventListener(\"turbolinks:load\", wireTurboAfterFirstVisit);\n  document.addEventListener(\"turbolinks:before-cache\", wireTurboBeforeCache);\n  Livewire.hook('beforePushState', function (state) {\n    if (!state.turbolinks) state.turbolinks = {};\n  });\n  Livewire.hook('beforeReplaceState', function (state) {\n    if (!state.turbolinks) state.turbolinks = {};\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdHVyYm9saW5rcy1hZGFwdGVyLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFDLDZFQUFVQSxPQUFWLEVBQW1CO0FBQ2hCLFVBQTZDQyxvQ0FBT0QsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUFuRCxHQUNJQSxDQURKO0FBRUgsQ0FIQSxFQUdFLFlBQVk7QUFBRTs7QUFFYixNQUFJLE9BQU9HLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixXQUEvQixFQUE0QztBQUN4QyxVQUFNLDBIQUFOO0FBQ0g7O0FBRUQsTUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUVBLFdBQVNDLHdCQUFULEdBQW9DO0FBQ2hDO0FBQ0EsUUFBSUQsU0FBSixFQUFlO0FBQ1hBLE1BQUFBLFNBQVMsR0FBRyxLQUFaO0FBQ0E7QUFDSDs7QUFFREYsSUFBQUEsTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxPQUFoQjtBQUNBTCxJQUFBQSxNQUFNLENBQUNNLE1BQVAsSUFBaUJOLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyw4QkFBL0IsSUFBaUVQLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyw4QkFBZCxFQUFqRTtBQUNIOztBQUVELFdBQVNDLG9CQUFULEdBQWdDO0FBQzVCQyxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDQyxPQUF6QyxDQUFpRCxVQUFVQyxFQUFWLEVBQWM7QUFDM0QsVUFBTUMsU0FBUyxHQUFHRCxFQUFFLENBQUNFLFVBQXJCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLFFBQUFBLFdBQVcsRUFBRUgsU0FBUyxDQUFDRyxXQURSO0FBRWZDLFFBQUFBLFVBQVUsRUFBRUosU0FBUyxDQUFDSSxVQUZQO0FBR2ZDLFFBQUFBLE9BQU8sRUFBRUwsU0FBUyxDQUFDSztBQUhKLE9BQW5CO0FBS0FOLE1BQUFBLEVBQUUsQ0FBQ08sWUFBSCxDQUFnQixtQkFBaEIsRUFBcUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixVQUFmLENBQXJDO0FBQ0gsS0FSRDtBQVNBZixJQUFBQSxNQUFNLENBQUNNLE1BQVAsSUFBaUJOLE1BQU0sQ0FBQ00sTUFBUCxDQUFjZ0IsY0FBL0IsSUFBaUR0QixNQUFNLENBQUNNLE1BQVAsQ0FBY2dCLGNBQWQsRUFBakQ7QUFDSDs7QUFFRGIsRUFBQUEsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q3BCLHdCQUF4QztBQUNBTSxFQUFBQSxRQUFRLENBQUNjLGdCQUFULENBQTBCLG9CQUExQixFQUFnRGYsb0JBQWhEO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDcEIsd0JBQTdDO0FBQ0FNLEVBQUFBLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIseUJBQTFCLEVBQXFEZixvQkFBckQ7QUFDQUosRUFBQUEsUUFBUSxDQUFDb0IsSUFBVCxDQUFjLGlCQUFkLEVBQWlDLFVBQUFDLEtBQUssRUFBSTtBQUN0QyxRQUFJLENBQUNBLEtBQUssQ0FBQ0MsVUFBWCxFQUF1QkQsS0FBSyxDQUFDQyxVQUFOLEdBQW1CLEVBQW5CO0FBQzFCLEdBRkQ7QUFHQXRCLEVBQUFBLFFBQVEsQ0FBQ29CLElBQVQsQ0FBYyxvQkFBZCxFQUFvQyxVQUFBQyxLQUFLLEVBQUk7QUFDekMsUUFBSSxDQUFDQSxLQUFLLENBQUNDLFVBQVgsRUFBdUJELEtBQUssQ0FBQ0MsVUFBTixHQUFtQixFQUFuQjtBQUMxQixHQUZEO0FBSUgsQ0E5Q0EsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy90dXJib2xpbmtzLWFkYXB0ZXIuanM/NzViMCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgICAgICBmYWN0b3J5KCk7XG59KChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2Ygd2luZG93LmxpdmV3aXJlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyAnTGl2ZXdpcmUgVHVyYm9saW5rcyBQbHVnaW46IHdpbmRvdy5MaXZld2lyZSBpcyB1bmRlZmluZWQuIE1ha2Ugc3VyZSBAbGl2ZXdpcmVTY3JpcHRzIGlzIHBsYWNlZCBhYm92ZSB0aGlzIHNjcmlwdCBpbmNsdWRlJztcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIHdpcmVUdXJib0FmdGVyRmlyc3RWaXNpdCgpIHtcbiAgICAgICAgLy8gV2Ugb25seSB3YW50IHRoaXMgaGFuZGxlciB0byBydW4gQUZURVIgdGhlIGZpcnN0IGxvYWQuXG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LkxpdmV3aXJlLnJlc3RhcnQoKTtcbiAgICAgICAgd2luZG93LkFscGluZSAmJiB3aW5kb3cuQWxwaW5lLmZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyAmJiB3aW5kb3cuQWxwaW5lLmZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdpcmVUdXJib0JlZm9yZUNhY2hlKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbd2lyZVxcXFw6aWRdJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsLl9fbGl2ZXdpcmU7XG4gICAgICAgICAgICBjb25zdCBkYXRhT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBjb21wb25lbnQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgc2VydmVyTWVtbzogY29tcG9uZW50LnNlcnZlck1lbW8sXG4gICAgICAgICAgICAgICAgZWZmZWN0czogY29tcG9uZW50LmVmZmVjdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3dpcmU6aW5pdGlhbC1kYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YU9iamVjdCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LkFscGluZSAmJiB3aW5kb3cuQWxwaW5lLmRlZmVyTXV0YXRpb25zICYmIHdpbmRvdy5BbHBpbmUuZGVmZXJNdXRhdGlvbnMoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCB3aXJlVHVyYm9BZnRlckZpcnN0VmlzaXQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpiZWZvcmUtY2FjaGVcIiwgd2lyZVR1cmJvQmVmb3JlQ2FjaGUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJib2xpbmtzOmxvYWRcIiwgd2lyZVR1cmJvQWZ0ZXJGaXJzdFZpc2l0KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm9saW5rczpiZWZvcmUtY2FjaGVcIiwgd2lyZVR1cmJvQmVmb3JlQ2FjaGUpO1xuICAgIExpdmV3aXJlLmhvb2soJ2JlZm9yZVB1c2hTdGF0ZScsIHN0YXRlID0+IHtcbiAgICAgICAgaWYgKCFzdGF0ZS50dXJib2xpbmtzKSBzdGF0ZS50dXJib2xpbmtzID0ge307XG4gICAgfSk7XG4gICAgTGl2ZXdpcmUuaG9vaygnYmVmb3JlUmVwbGFjZVN0YXRlJywgc3RhdGUgPT4ge1xuICAgICAgICBpZiAoIXN0YXRlLnR1cmJvbGlua3MpIHN0YXRlLnR1cmJvbGlua3MgPSB7fTtcbiAgICB9KTtcblxufSkpKTtcbiJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwibGl2ZXdpcmUiLCJmaXJzdFRpbWUiLCJ3aXJlVHVyYm9BZnRlckZpcnN0VmlzaXQiLCJMaXZld2lyZSIsInJlc3RhcnQiLCJBbHBpbmUiLCJmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMiLCJ3aXJlVHVyYm9CZWZvcmVDYWNoZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImNvbXBvbmVudCIsIl9fbGl2ZXdpcmUiLCJkYXRhT2JqZWN0IiwiZmluZ2VycHJpbnQiLCJzZXJ2ZXJNZW1vIiwiZWZmZWN0cyIsInNldEF0dHJpYnV0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWZlck11dGF0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJob29rIiwic3RhdGUiLCJ0dXJib2xpbmtzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/turbolinks-adapter.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/turbolinks-adapter.js");
/******/ 	
/******/ })()
;