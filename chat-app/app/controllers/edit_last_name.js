// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// preload views variables
var someView = new steroids.views.WebView("");
    someView.preload();

// Back and Save buttons
var doneButton = new steroids.buttons.NavigationBarButton();
    doneButton.title = "Done";

var backButton = new steroids.buttons.NavigationBarButton();
    backButton.imagePath = "/icons/back-icon@2x.png";

function onDeviceReady() {
  navigationBar();
  initVisibilityChange();
} 

function navigationBar() {
    steroids.view.navigationBar.show();
    steroids.view.navigationBar.update({
        title: "Edit Last Name",
        overrideBackButton: true,
        buttons: {
            left: [backButton],
            right: [doneButton]
        }
    });
}

function initVisibilityChange() {
  document.addEventListener("visibilitychange", onVisibilityChange, false);
}

function onVisibilityChange() {

  if(!document.hidden) {

    setTimeout(initTextAreaFocus, 600); 
  }
}

function initTextAreaFocus() {

    // Focus on text input when the view is visible
    $(".form-text").focus();
}

backButton.onTap = function() {

    steroids.layers.pop(); 
};

doneButton.onTap = function() {

    steroids.layers.pop(); 
};