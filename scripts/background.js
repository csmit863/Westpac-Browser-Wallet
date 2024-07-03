chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ balance: 0, address: null });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "createAccount") {
    // Generate a new Ethereum account (simplified)
    const account = { address: "0x123456...", privateKey: "0xabcdef..." };
    chrome.storage.local.set({ address: account.address });
    sendResponse({ address: account.address });
  } else if (request.action === "getBalance") {
    // Fetch balance (dummy value for now)
    chrome.storage.local.get("balance", (result) => {
      sendResponse({ balance: result.balance });
    });
    return true; // Indicates that sendResponse will be called asynchronously
  }
});

