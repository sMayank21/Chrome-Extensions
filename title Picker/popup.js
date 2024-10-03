document.addEventListener('DOMContentLoaded', function() {
  var grabButton = document.getElementById('grabTitle');
  var titleDiv = document.getElementById('title');

  grabButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0];
      titleDiv.textContent = currentTab.title;
    });
  });
});