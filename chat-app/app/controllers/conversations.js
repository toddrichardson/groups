// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Variables
var friendView = new steroids.views.WebView("views/friend/index.html");
    friendView.preload();

// Friend's profile button
var friendButton = new steroids.buttons.NavigationBarButton();
    friendButton.imagePath = "/icons/convo-contact@2x.png";


function onDeviceReady() {
  // initSheetButtons();
  navigationBar();
  // buttonClasses();
  disableScrolling();
  // enableScrolling();
  // initChuiSheet();
  // initGesture();
} 

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "James Adams",
    overrideBackButton: false,
    buttons: {
      right: [friendButton],
    }
  });
}

/*function buttonClasses() {
  $('.chat-button').on('singletap', showChat);
  $('.group_btn').on('singletap', showGroup);
}*/

/*
function initSheetButtons() {
    $('.action-sheet-button').on('singletap', closeLogoutControls);
}

function closeLogoutControls() {
    
    steroids.tabBar.show();
    $('.action-sheet').removeClass('in');
}*/

// Credit - http://www.sitepoint.com/forums/showthread.php?673175-iphone-gt-safari-gt-Lock-viewport-scrolling
function disableScrolling() {
  $('body').bind("touchmove", {}, function(event){
      event.preventDefault();
  });
}
/*
function enableScrolling() {
  // http://www.sitepoint.com/forums/showthread.php?673175-iphone-gt-safari-gt-Lock-viewport-scrolling
  $('.messages').bind("touchstart", {}, function(event){
      // event.preventDefault();
  });
}
*/
function executeAnimation() {
  
  var animation = new steroids.Animation({
    transition: "slideFromRight",
    duration: 0.3 
  });
  
  steroids.layers.push({
    view: friendView,
    animation: animation
  });
}

friendButton.onTap = function() {
  steroids.layers.push( {
    view: friendView,
    navigationBar: false
  });
}

function showFriend() {
  steroids.layers.push( {
    view: friendView,
    navigationBar: true
  });
}
// logOutButton.onTap = function() {
    
//     $('.action-sheet').addClass('in');
//     steroids.tabBar.hide();
// }