// Inject web3 into the webpage
(function() {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('web3.min.js');
  script.onload = function() {
    this.remove();
    // Initialize web3 and set provider
    const web3 = new Web3(window.ethereum);
    window.web3 = web3;

    // Notify the webpage that web3 is injected
    const event = new Event('web3Injected');
    window.dispatchEvent(event);
  };
  (document.head || document.documentElement).appendChild(script);
})();

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'sendTransaction') {
    // Handle transaction sending logic here
    web3.eth.sendTransaction(request.txData)
      .on('receipt', (receipt) => {
        sendResponse({ success: true, receipt: receipt });
      })
      .on('error', (error) => {
        sendResponse({ success: false, error: error });
      });
    return true; // Indicates that sendResponse will be called asynchronously
  }
});

// content.js
window.addEventListener('message', (event) => {
  if (event.source !== window || !event.data || !event.data.type) {
    return;
  }

  if (event.data.type === 'eth_requestAccounts') {
    chrome.runtime.sendMessage({ action: 'eth_requestAccounts' }, (response) => {
      window.postMessage({ type: 'eth_accounts', accounts: response.accounts }, '*');
    });
  }
});

