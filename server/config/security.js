
function setupBrowserPolicy(BrowserPolicy){
  BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
  BrowserPolicy.content.allowOriginForAll("*.gstatic.com");
  BrowserPolicy.content.allowOriginForAll("*.bootstrapcdn.com");
  BrowserPolicy.content.allowFontDataUrl();
}

export default setupBrowserPolicy;
