const apply = (off) => document.documentElement.toggleAttribute('data-grayscale-off', off);

chrome.storage.onChanged.addListener(({ off }) => {
  if (off) apply(off.newValue);
});

(async () => {
  const { off } = await chrome.storage.local.get({ off: false });
  apply(off);
})();
