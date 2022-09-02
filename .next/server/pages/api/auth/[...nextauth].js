"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "tailwindcss/lib/util/cloneDeep":
/*!*************************************************!*\
  !*** external "tailwindcss/lib/util/cloneDeep" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("tailwindcss/lib/util/cloneDeep");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_lib_util_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/lib/util/cloneDeep */ \"tailwindcss/lib/util/cloneDeep\");\n/* harmony import */ var tailwindcss_lib_util_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_lib_util_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (profile) {\n                token['userProfile'] = {\n                    followersCount: profile.followers_count,\n                    twitterHandle: profile.screen_name,\n                    followingCount: profile.friends_count,\n                    userID: profile.id\n                };\n            }\n            if (account) {\n                token['credentials'] = {\n                    authToken: account.oauth_token,\n                    authSecret: account.oauth_token_secret\n                };\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            let userData = (0,tailwindcss_lib_util_cloneDeep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(token.userProfile);\n            delete userData.userID;\n            session.twitter = userData;\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        error: '/error'\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDeUI7QUFDRDtBQUV4RCxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3JCLEVBQWlEO0lBQ2pERyxTQUFTLEVBQUUsQ0FBQztRQUNSRixrRUFBZSxDQUFDLENBQUM7WUFDYkcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtZQUNoQ0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csY0FBYztRQUM1QyxDQUFDO0lBRUwsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztjQUNGQyxHQUFHLEVBQUMsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUMsRUFBRSxDQUFDO1lBQ25ELEVBQUUsRUFBRUQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZILEtBQUssQ0FBQyxDQUFhLGdCQUFJLENBQUM7b0JBQ3BCSyxjQUFjLEVBQUVGLE9BQU8sQ0FBQ0csZUFBZTtvQkFDdkNDLGFBQWEsRUFBRUosT0FBTyxDQUFDSyxXQUFXO29CQUNsQ0MsY0FBYyxFQUFFTixPQUFPLENBQUNPLGFBQWE7b0JBQ3JDQyxNQUFNLEVBQUVSLE9BQU8sQ0FBQ1MsRUFBRTtnQkFDdEIsQ0FBQztZQUNMLENBQUM7WUFDRCxFQUFFLEVBQUVWLE9BQU8sRUFBRSxDQUFDO2dCQUNWRixLQUFLLENBQUMsQ0FBYSxnQkFBSSxDQUFDO29CQUNwQmEsU0FBUyxFQUFFWCxPQUFPLENBQUNZLFdBQVc7b0JBQzlCQyxVQUFVLEVBQUViLE9BQU8sQ0FBQ2Msa0JBQWtCO2dCQUMxQyxDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQ2hCLEtBQUs7UUFDaEIsQ0FBQztjQUNLaUIsT0FBTyxFQUFDLENBQUNBLENBQUFBLE9BQU8sR0FBRWpCLEtBQUssR0FBRUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztZQUNuQyxFQUF1RTtZQUN2RSxHQUFHLENBQUNpQixRQUFRLEdBQUc1Qix5RUFBUyxDQUFDVSxLQUFLLENBQUNtQixXQUFXO1lBQzFDLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDUCxNQUFNO1lBQ3RCTSxPQUFPLENBQUNHLE9BQU8sR0FBR0YsUUFBUTtZQUMxQixNQUFNLENBQUNELE9BQU87UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFDREksTUFBTSxFQUFFNUIsT0FBTyxDQUFDQyxHQUFHLENBQUM0QixlQUFlO0lBQ25DQyxLQUFLLEVBQUUsQ0FBQztRQUNKQyxLQUFLLEVBQUUsQ0FBUTtJQUNuQixDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdGVyLXN0YXRzLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBUd2l0dGVyUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvdHdpdHRlclwiXG5pbXBvcnQge2Nsb25lRGVlcH0gZnJvbSBcInRhaWx3aW5kY3NzL2xpYi91dGlsL2Nsb25lRGVlcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUd2l0dGVyUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LlRXSVRURVJfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfU0VDUkVUXG4gICAgICAgIH0pLFxuICAgICAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIGp3dCh7dG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcn0pIHtcbiAgICAgICAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5bJ3VzZXJQcm9maWxlJ10gPSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbGxvd2Vyc0NvdW50OiBwcm9maWxlLmZvbGxvd2Vyc19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZTogcHJvZmlsZS5zY3JlZW5fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93aW5nQ291bnQ6IHByb2ZpbGUuZnJpZW5kc19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklEOiBwcm9maWxlLmlkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgdG9rZW5bJ2NyZWRlbnRpYWxzJ10gPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbjogYWNjb3VudC5vYXV0aF90b2tlbixcbiAgICAgICAgICAgICAgICAgICAgYXV0aFNlY3JldDogYWNjb3VudC5vYXV0aF90b2tlbl9zZWNyZXQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VuLCB1c2VyfSkge1xuICAgICAgICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGNsb25lRGVlcCh0b2tlbi51c2VyUHJvZmlsZSk7XG4gICAgICAgICAgICBkZWxldGUgdXNlckRhdGEudXNlcklEO1xuICAgICAgICAgICAgc2Vzc2lvbi50d2l0dGVyID0gdXNlckRhdGE7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gICAgcGFnZXM6IHtcbiAgICAgICAgZXJyb3I6ICcvZXJyb3InLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJUd2l0dGVyUHJvdmlkZXIiLCJjbG9uZURlZXAiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJUV0lUVEVSX0lEIiwiY2xpZW50U2VjcmV0IiwiVFdJVFRFUl9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsImZvbGxvd2Vyc0NvdW50IiwiZm9sbG93ZXJzX2NvdW50IiwidHdpdHRlckhhbmRsZSIsInNjcmVlbl9uYW1lIiwiZm9sbG93aW5nQ291bnQiLCJmcmllbmRzX2NvdW50IiwidXNlcklEIiwiaWQiLCJhdXRoVG9rZW4iLCJvYXV0aF90b2tlbiIsImF1dGhTZWNyZXQiLCJvYXV0aF90b2tlbl9zZWNyZXQiLCJzZXNzaW9uIiwidXNlckRhdGEiLCJ1c2VyUHJvZmlsZSIsInR3aXR0ZXIiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJwYWdlcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();