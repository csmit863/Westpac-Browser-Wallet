// background.ts

export {}

console.log("Background service worker started.");

// Listen for messages posted to the window
window.addEventListener('message', (event) => {
  // Ensure the message is from a trusted source (optional security check)
  // For example, you can check event.origin
  
  const message = event.data;
  if (message && message.action === 'openPopup') {
    console.log('Message received: openPopup');
    // Perform actions to open your extension popup
    // Example: chrome.runtime.sendMessage({ action: 'openPopup' });
  }
});
