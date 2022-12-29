chrome.action.onClicked.addListener(() => {
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
