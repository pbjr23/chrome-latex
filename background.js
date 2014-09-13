chrome.webRequest.onHeadersReceived.addListener(function(details){
    for(var i = 0; i < details.responseHeaders.length; ++i)
        if(details.responseHeaders[i].name.toLowerCase() == 'content-type')
            details.responseHeaders[i].value = 'text/html';
    return {responseHeaders:details.responseHeaders};
}, {urls: ["http://*/*.tex"]}, ['blocking', 'responseHeaders']);
