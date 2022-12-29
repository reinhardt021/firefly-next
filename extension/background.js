chrome.action.onClicked.addListener(() => {
  alert('TEST');
  chrome.tabs.create({ url: 'chrome://newtab' });
});
//chrome.runtime.onInstalled.addListener((reason) => {
  //if (reason == chrome.runtime.OnInstalledReason.INSTALL) {
    //chrome.tabs.create({
      //url: 'index.html'
    //});
  //}
//});
