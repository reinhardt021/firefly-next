chrome.runtime.onInstalled.addListener((reason) => {
  //alert('INSTALLED');
  console.log('INSTALLED');
  if (reason == chrome.runtime.OnInstalledReason.INSTALL) {
    console.log('reasone match');
    chrome.tabs.create({ url: 'index.html' });
  }
});
chrome.action.onClicked.addListener(() => {
  //alert('CLICKED'); // gets hers but erros
  console.log('CLICKED'); 
  //chrome.tabs.create({ url: 'chrome://newtab' });
  // when clicking the extension icon, a new tab with the extension is open
  chrome.tabs.create({ url: 'index.html' });
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //alert('MESSAGE');
  console.log('MESSAGE');
  if (request.message == 'open_new_tab') {
  chrome.tabs.create({ url: 'index.html' });
  }
});
