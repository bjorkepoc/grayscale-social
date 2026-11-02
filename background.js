const showState = async () => {
  const { off } = await chrome.storage.local.get({ off: false });
  await chrome.action.setBadgeText({ text: off ? 'AV' : '' });
  await chrome.action.setTitle({ title: `Gråtone er ${off ? 'av' : 'på'}` });
};

chrome.action.onClicked.addListener(async () => {
  const { off } = await chrome.storage.local.get({ off: false });
  await chrome.storage.local.set({ off: !off });
  await showState();
});

chrome.runtime.onInstalled.addListener(showState);
chrome.runtime.onStartup.addListener(showState);
