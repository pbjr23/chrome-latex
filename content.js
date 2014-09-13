var osmde = "http://en.wikipedia.org"

var newurl

if (window.location.href.match(osmde))  // redirect from osm.de to openstreetmap.de

    {

      newurl = "http://news.ycombinator.com";

    }

chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
