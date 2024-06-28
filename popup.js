document.getElementById('clickButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: clickButton,
        args: ['.ytp-ad-skip-button'] 
      });
    });
  });
  
  function clickButton(buttonClass) {
    const button = document.querySelector(buttonClass);
    if (button) {
      button.click();
    } else {
      console.log(`Button with class "${buttonClass}" not found on this page.`);
    }
  }
  