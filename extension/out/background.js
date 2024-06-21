chrome.action.onClicked.addListener((tab) => {
    // Log the current tab's URL
    console.log("tab.url: ", tab.url);
  });

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     console.log("url: " + url);
//     // use `url` here inside the callback because it's asynchronous!
// });
// console.log("kkkkkkk");