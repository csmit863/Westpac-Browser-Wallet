// content.js

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.digital-wallet-button');

  if (button) {
    button.addEventListener('click', () => {
      // Send a message to the extension's background script
      chrome.runtime.sendMessage({ action: 'openPopup' }, (response) => {
        if (response && response.success) {
          console.log('Popup opened successfully.');
        } else {
          console.error('Failed to open popup.');
        }
      });
    });
  }
});
