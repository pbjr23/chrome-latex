var _redirectURL = "";
// Register an event listener which 
//traces all requests before being fired
chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (_redirectURL != "") {
        return {
            redirectUrl: "http://www.google.co.in/" /*Redirection URL*/
        };
    }
}, {
    urls: ["*://www.facebook.com/*"] /* List of URL's */
}, ["blocking"]); // Block intercepted requests until this handler has finished
chrome.webRequest.onHeadersReceived.addListener(function (details) {
    if (_redirectURL == "") {
        var secondaryURL = extractSecondaryURL(details);
        _redirectUrl = secondaryURL;
        chrome.tabs.reload();
    }
}, {
    urls: ["http://*/*", "https://*/*"]
}, ["blocking", "responseHeaders"]);
