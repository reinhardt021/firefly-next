chrome.action.onClicked.addListener(() => {
  // when clicking the extension icon, a new tab with the extension is open
  chrome.tabs.create({ url: 'index.html' });
});
