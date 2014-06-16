// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Preloading view variables
var editProfileView = new steroids.views.WebView("views/edit_profile/index.html");
    editProfileView.preload();

// Edit button
var editButton = new steroids.buttons.NavigationBarButton();
    editButton.title = "Edit";

var GroupView = new steroids.views.WebView("views/conversations-group/index.html");
    GroupView.preload();

var chatView = new steroids.views.WebView("views/conversations/index.html");
    chatView.preload();

// onDeviceReady function
function onDeviceReady() {
  navigationBar();
  // disableScrolling();
  initChuiSheet();
  buttonClasses();
}

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Profile",
    overrideBackButton: false,
    buttons: {
      right: [editButton],
    }
  });
}

function buttonClasses() {
  $('.chat-button').on('singletap', showChat);
  $('.group-button').on('singletap', showGroup);
}

function executeAnimation() {
  var animation = new steroids.Animation({
      transition: "slideFromRight",
      duration: 0.3 
  });
  steroids.layers.push({
      view: editProfileView,
      animation: animation,
      tabBar: false
  });
}

// Nav button listeners
editButton.onTap = function() {
  // Opens view
  executeAnimation();
};


function showChat() {
  steroids.layers.push( {
    view: chatView,
    navigationBar: true,
    tabBar: false
  });
} 

function showGroup() {
  steroids.layers.push( {
    view: GroupView,
    navigationBar: true,
    tabBar: false
  });
} 
