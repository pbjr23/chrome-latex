chrome.webRequest.onBeforeRequest.addListener(
function(details) {
    return {cancel: true};
}, { urls: ["*://*.apple.com/*", "*://*.apple.net/*"] }, ["blocking"]);