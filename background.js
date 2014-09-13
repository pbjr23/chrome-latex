chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: "http://www.yahoo.com/"};
  },
  {
    urls: [
      "http://*/*.tex"
    ]
  },
  ["blocking"]);
