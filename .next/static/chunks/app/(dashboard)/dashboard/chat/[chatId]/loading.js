/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["app/(dashboard)/dashboard/chat/[chatId]/loading"],{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=E%3A%5Cmessenger%5Cnode_modules%5Creact-loading-skeleton%5Cdist%5Cindex.js&server=false!":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=E%3A%5Cmessenger%5Cnode_modules%5Creact-loading-skeleton%5Cdist%5Cindex.js&server=false! ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./node_modules/react-loading-skeleton/dist/index.js */ \"(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz1FJTNBJTVDbWVzc2VuZ2VyJTVDbm9kZV9tb2R1bGVzJTVDcmVhY3QtbG9hZGluZy1za2VsZXRvbiU1Q2Rpc3QlNUNpbmRleC5qcyZzZXJ2ZXI9ZmFsc2UhIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/Y2MyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkU6XFxcXG1lc3NlbmdlclxcXFxub2RlX21vZHVsZXNcXFxccmVhY3QtbG9hZGluZy1za2VsZXRvblxcXFxkaXN0XFxcXGluZGV4LmpzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=E%3A%5Cmessenger%5Cnode_modules%5Creact-loading-skeleton%5Cdist%5Cindex.js&server=false!\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SkeletonTheme: function() { return /* binding */ SkeletonTheme; },\n/* harmony export */   \"default\": function() { return /* binding */ Skeleton; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n'use client';\n\n\n/**\n * @internal\n */\nconst SkeletonThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});\n\n/* eslint-disable react/no-array-index-key */\nconst defaultEnableAnimation = true;\n// For performance & cleanliness, don't add any inline styles unless we have to\nfunction styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation, }) {\n    const style = {};\n    if (direction === 'rtl')\n        style['--animation-direction'] = 'reverse';\n    if (typeof duration === 'number')\n        style['--animation-duration'] = `${duration}s`;\n    if (!enableAnimation)\n        style['--pseudo-element-display'] = 'none';\n    if (typeof width === 'string' || typeof width === 'number')\n        style.width = width;\n    if (typeof height === 'string' || typeof height === 'number')\n        style.height = height;\n    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')\n        style.borderRadius = borderRadius;\n    if (circle)\n        style.borderRadius = '50%';\n    if (typeof baseColor !== 'undefined')\n        style['--base-color'] = baseColor;\n    if (typeof highlightColor !== 'undefined')\n        style['--highlight-color'] = highlightColor;\n    return style;\n}\nfunction Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {\n    var _a, _b, _c;\n    const contextStyleOptions = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext);\n    const propsStyleOptions = { ...originalPropsStyleOptions };\n    // DO NOT overwrite style options from the context if `propsStyleOptions`\n    // has properties explicity set to undefined\n    for (const [key, value] of Object.entries(originalPropsStyleOptions)) {\n        if (typeof value === 'undefined') {\n            delete propsStyleOptions[key];\n        }\n    }\n    // Props take priority over context\n    const styleOptions = {\n        ...contextStyleOptions,\n        ...propsStyleOptions,\n        circle,\n    };\n    // `styleProp` has the least priority out of everything\n    const style = {\n        ...styleProp,\n        ...styleOptionsToCssProperties(styleOptions),\n    };\n    let className = 'react-loading-skeleton';\n    if (customClassName)\n        className += ` ${customClassName}`;\n    const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;\n    const elements = [];\n    const countCeil = Math.ceil(count);\n    for (let i = 0; i < countCeil; i++) {\n        let thisStyle = style;\n        if (countCeil > count && i === countCeil - 1) {\n            // count is not an integer and we've reached the last iteration of\n            // the loop, so add a \"fractional\" skeleton.\n            //\n            // For example, if count is 3.5, we've already added 3 full\n            // skeletons, so now we add one more skeleton that is 0.5 times the\n            // original width.\n            const width = (_b = thisStyle.width) !== null && _b !== void 0 ? _b : '100%'; // 100% is the default since that's what's in the CSS\n            const fractionalPart = count % 1;\n            const fractionalWidth = typeof width === 'number'\n                ? width * fractionalPart\n                : `calc(${width} * ${fractionalPart})`;\n            thisStyle = { ...thisStyle, width: fractionalWidth };\n        }\n        const skeletonSpan = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { className: className, style: thisStyle, key: i }, \"\\u200C\"));\n        if (inline) {\n            elements.push(skeletonSpan);\n        }\n        else {\n            // Without the <br />, the skeleton lines will all run together if\n            // `width` is specified\n            elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i },\n                skeletonSpan,\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null)));\n        }\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { className: containerClassName, \"data-testid\": containerTestId, \"aria-live\": \"polite\", \"aria-busy\": (_c = styleOptions.enableAnimation) !== null && _c !== void 0 ? _c : defaultEnableAnimation }, Wrapper\n        ? elements.map((el, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, { key: i }, el))\n        : elements));\n}\n\nfunction SkeletonTheme({ children, ...styleOptions }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SkeletonThemeContext.Provider, { value: styleOptions }, children));\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnREFBbUIsR0FBRzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdJQUFnSTtBQUN2SztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhKQUE4SjtBQUNsTDtBQUNBLGdDQUFnQyw2Q0FBZ0I7QUFDaEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sSUFBSSxlQUFlO0FBQ3BELDBCQUEwQjtBQUMxQjtBQUNBLDhCQUE4QixnREFBbUIsV0FBVyxnREFBZ0Q7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFtQixDQUFDLDJDQUFjLElBQUksUUFBUTtBQUN4RTtBQUNBLGdCQUFnQixnREFBbUI7QUFDbkM7QUFDQTtBQUNBLFlBQVksZ0RBQW1CLFdBQVcsZ01BQWdNO0FBQzFPLGtDQUFrQyxnREFBbUIsWUFBWSxRQUFRO0FBQ3pFO0FBQ0E7O0FBRUEseUJBQXlCLDJCQUEyQjtBQUNwRCxZQUFZLGdEQUFtQixrQ0FBa0MscUJBQXFCO0FBQ3RGOztBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L2luZGV4LmpzP2EzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgU2tlbGV0b25UaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5jb25zdCBkZWZhdWx0RW5hYmxlQW5pbWF0aW9uID0gdHJ1ZTtcbi8vIEZvciBwZXJmb3JtYW5jZSAmIGNsZWFubGluZXNzLCBkb24ndCBhZGQgYW55IGlubGluZSBzdHlsZXMgdW5sZXNzIHdlIGhhdmUgdG9cbmZ1bmN0aW9uIHN0eWxlT3B0aW9uc1RvQ3NzUHJvcGVydGllcyh7IGJhc2VDb2xvciwgaGlnaGxpZ2h0Q29sb3IsIHdpZHRoLCBoZWlnaHQsIGJvcmRlclJhZGl1cywgY2lyY2xlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCBlbmFibGVBbmltYXRpb24gPSBkZWZhdWx0RW5hYmxlQW5pbWF0aW9uLCB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJylcbiAgICAgICAgc3R5bGVbJy0tYW5pbWF0aW9uLWRpcmVjdGlvbiddID0gJ3JldmVyc2UnO1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdudW1iZXInKVxuICAgICAgICBzdHlsZVsnLS1hbmltYXRpb24tZHVyYXRpb24nXSA9IGAke2R1cmF0aW9ufXNgO1xuICAgIGlmICghZW5hYmxlQW5pbWF0aW9uKVxuICAgICAgICBzdHlsZVsnLS1wc2V1ZG8tZWxlbWVudC1kaXNwbGF5J10gPSAnbm9uZSc7XG4gICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJylcbiAgICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICBpZiAodHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicpXG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICBpZiAodHlwZW9mIGJvcmRlclJhZGl1cyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGJvcmRlclJhZGl1cyA9PT0gJ251bWJlcicpXG4gICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IGJvcmRlclJhZGl1cztcbiAgICBpZiAoY2lyY2xlKVxuICAgICAgICBzdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICBpZiAodHlwZW9mIGJhc2VDb2xvciAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHN0eWxlWyctLWJhc2UtY29sb3InXSA9IGJhc2VDb2xvcjtcbiAgICBpZiAodHlwZW9mIGhpZ2hsaWdodENvbG9yICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgc3R5bGVbJy0taGlnaGxpZ2h0LWNvbG9yJ10gPSBoaWdobGlnaHRDb2xvcjtcbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiBTa2VsZXRvbih7IGNvdW50ID0gMSwgd3JhcHBlcjogV3JhcHBlciwgY2xhc3NOYW1lOiBjdXN0b21DbGFzc05hbWUsIGNvbnRhaW5lckNsYXNzTmFtZSwgY29udGFpbmVyVGVzdElkLCBjaXJjbGUgPSBmYWxzZSwgc3R5bGU6IHN0eWxlUHJvcCwgLi4ub3JpZ2luYWxQcm9wc1N0eWxlT3B0aW9ucyB9KSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgY29udGV4dFN0eWxlT3B0aW9ucyA9IFJlYWN0LnVzZUNvbnRleHQoU2tlbGV0b25UaGVtZUNvbnRleHQpO1xuICAgIGNvbnN0IHByb3BzU3R5bGVPcHRpb25zID0geyAuLi5vcmlnaW5hbFByb3BzU3R5bGVPcHRpb25zIH07XG4gICAgLy8gRE8gTk9UIG92ZXJ3cml0ZSBzdHlsZSBvcHRpb25zIGZyb20gdGhlIGNvbnRleHQgaWYgYHByb3BzU3R5bGVPcHRpb25zYFxuICAgIC8vIGhhcyBwcm9wZXJ0aWVzIGV4cGxpY2l0eSBzZXQgdG8gdW5kZWZpbmVkXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3JpZ2luYWxQcm9wc1N0eWxlT3B0aW9ucykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1N0eWxlT3B0aW9uc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFByb3BzIHRha2UgcHJpb3JpdHkgb3ZlciBjb250ZXh0XG4gICAgY29uc3Qgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAuLi5jb250ZXh0U3R5bGVPcHRpb25zLFxuICAgICAgICAuLi5wcm9wc1N0eWxlT3B0aW9ucyxcbiAgICAgICAgY2lyY2xlLFxuICAgIH07XG4gICAgLy8gYHN0eWxlUHJvcGAgaGFzIHRoZSBsZWFzdCBwcmlvcml0eSBvdXQgb2YgZXZlcnl0aGluZ1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAuLi5zdHlsZVByb3AsXG4gICAgICAgIC4uLnN0eWxlT3B0aW9uc1RvQ3NzUHJvcGVydGllcyhzdHlsZU9wdGlvbnMpLFxuICAgIH07XG4gICAgbGV0IGNsYXNzTmFtZSA9ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbiAgICBpZiAoY3VzdG9tQ2xhc3NOYW1lKVxuICAgICAgICBjbGFzc05hbWUgKz0gYCAke2N1c3RvbUNsYXNzTmFtZX1gO1xuICAgIGNvbnN0IGlubGluZSA9IChfYSA9IHN0eWxlT3B0aW9ucy5pbmxpbmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgY29uc3QgY291bnRDZWlsID0gTWF0aC5jZWlsKGNvdW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50Q2VpbDsgaSsrKSB7XG4gICAgICAgIGxldCB0aGlzU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgaWYgKGNvdW50Q2VpbCA+IGNvdW50ICYmIGkgPT09IGNvdW50Q2VpbCAtIDEpIHtcbiAgICAgICAgICAgIC8vIGNvdW50IGlzIG5vdCBhbiBpbnRlZ2VyIGFuZCB3ZSd2ZSByZWFjaGVkIHRoZSBsYXN0IGl0ZXJhdGlvbiBvZlxuICAgICAgICAgICAgLy8gdGhlIGxvb3AsIHNvIGFkZCBhIFwiZnJhY3Rpb25hbFwiIHNrZWxldG9uLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBjb3VudCBpcyAzLjUsIHdlJ3ZlIGFscmVhZHkgYWRkZWQgMyBmdWxsXG4gICAgICAgICAgICAvLyBza2VsZXRvbnMsIHNvIG5vdyB3ZSBhZGQgb25lIG1vcmUgc2tlbGV0b24gdGhhdCBpcyAwLjUgdGltZXMgdGhlXG4gICAgICAgICAgICAvLyBvcmlnaW5hbCB3aWR0aC5cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gKF9iID0gdGhpc1N0eWxlLndpZHRoKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnMTAwJSc7IC8vIDEwMCUgaXMgdGhlIGRlZmF1bHQgc2luY2UgdGhhdCdzIHdoYXQncyBpbiB0aGUgQ1NTXG4gICAgICAgICAgICBjb25zdCBmcmFjdGlvbmFsUGFydCA9IGNvdW50ICUgMTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWN0aW9uYWxXaWR0aCA9IHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICA/IHdpZHRoICogZnJhY3Rpb25hbFBhcnRcbiAgICAgICAgICAgICAgICA6IGBjYWxjKCR7d2lkdGh9ICogJHtmcmFjdGlvbmFsUGFydH0pYDtcbiAgICAgICAgICAgIHRoaXNTdHlsZSA9IHsgLi4udGhpc1N0eWxlLCB3aWR0aDogZnJhY3Rpb25hbFdpZHRoIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2tlbGV0b25TcGFuID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiB0aGlzU3R5bGUsIGtleTogaSB9LCBcIlxcdTIwMENcIikpO1xuICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKHNrZWxldG9uU3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBXaXRob3V0IHRoZSA8YnIgLz4sIHRoZSBza2VsZXRvbiBsaW5lcyB3aWxsIGFsbCBydW4gdG9nZXRoZXIgaWZcbiAgICAgICAgICAgIC8vIGB3aWR0aGAgaXMgc3BlY2lmaWVkXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHsga2V5OiBpIH0sXG4gICAgICAgICAgICAgICAgc2tlbGV0b25TcGFuLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzTmFtZSwgXCJkYXRhLXRlc3RpZFwiOiBjb250YWluZXJUZXN0SWQsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiYXJpYS1idXN5XCI6IChfYyA9IHN0eWxlT3B0aW9ucy5lbmFibGVBbmltYXRpb24pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlZmF1bHRFbmFibGVBbmltYXRpb24gfSwgV3JhcHBlclxuICAgICAgICA/IGVsZW1lbnRzLm1hcCgoZWwsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgeyBrZXk6IGkgfSwgZWwpKVxuICAgICAgICA6IGVsZW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIFNrZWxldG9uVGhlbWUoeyBjaGlsZHJlbiwgLi4uc3R5bGVPcHRpb25zIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2tlbGV0b25UaGVtZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHN0eWxlT3B0aW9ucyB9LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgeyBTa2VsZXRvblRoZW1lLCBTa2VsZXRvbiBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main-app"], function() { return __webpack_exec__("(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=E%3A%5Cmessenger%5Cnode_modules%5Creact-loading-skeleton%5Cdist%5Cindex.js&server=false!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);