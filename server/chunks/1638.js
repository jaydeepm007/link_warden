"use strict";
exports.id = 1638;
exports.ids = [1638];
exports.modules = {

/***/ 4157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function TextInput({ autoFocus, value, type, placeholder, onChange, onKeyDown, className, spellCheck, "data-testid": dataTestId }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        "data-testid": dataTestId,
        spellCheck: spellCheck,
        autoFocus: autoFocus,
        type: type ? type : "text",
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        onKeyDown: onKeyDown,
        className: `w-full rounded-md p-2 border-neutral-content border-solid border outline-none focus:border-primary duration-100 ${className || ""}`
    });
}


/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ getLogins)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9369);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);

function handler(req, res) {
    res.json(getLogins());
}
function getLogins() {
    const buttonAuths = [];
    // 42 School
    if (false) {}
    // Apple
    if (false) {}
    // Atlassian
    if (false) {}
    // Auth0
    if (false) {}
    // Authentik
    if (false) {}
    // Azure AD B2C
    if (false) {}
    // Azure AD
    if (false) {}
    // Battle.net
    if (false) {}
    // Box
    if (false) {}
    // Cognito
    if (false) {}
    // Coinbase
    if (false) {}
    // Discord
    if (false) {}
    // Dropbox
    if (false) {}
    // Duende IdentityServer6
    if (false) {}
    // EVE Online
    if (false) {}
    // Facebook
    if (false) {}
    // FACEIT
    if (false) {}
    // Foursquare
    if (false) {}
    // Freshbooks
    if (false) {}
    // FusionAuth
    if (false) {}
    // GitHub
    if (false) {}
    // GitLab
    if (false) {}
    // Google
    if (false) {}
    // HubSpot
    if (false) {}
    // IdentityServer4
    if (false) {}
    // Kakao
    if (false) {}
    // Keycloak
    if (false) {}
    // LINE
    if (false) {}
    // LinkedIn
    if (false) {}
    // MailChimp
    if (false) {}
    // Mail.ru
    if (false) {}
    // Naver
    if (false) {}
    // Netlify
    if (false) {}
    // Okta
    if (false) {}
    // OneLogin
    if (false) {}
    // Osso
    if (false) {}
    // osu!
    if (false) {}
    // Patreon
    if (false) {}
    // Pinterest
    if (false) {}
    // Pipedrive
    if (false) {}
    // Reddit
    if (false) {}
    // Salesforce
    if (false) {}
    // Slack
    if (false) {}
    // Spotify
    if (false) {}
    // Strava
    if (false) {}
    // Todoist
    if (false) {}
    // Twitch
    if (false) {}
    // United Effects
    if (false) {}
    // VK
    if (false) {}
    // Wikimedia
    if (false) {}
    // Wordpress.com
    if (false) {}
    // Yandex
    if (false) {}
    // Zitadel
    if (false) {}
    // Zoho
    if (false) {}
    // Zoom
    if (false) {}
    // Authelia
    if (false) {}
    return {
        credentialsEnabled:  true ? "true" : 0,
        emailEnabled:  false ? 0 : "false",
        registrationDisabled:  false ? 0 : "false",
        buttonAuths: buttonAuths
    };
}


/***/ })

};
;