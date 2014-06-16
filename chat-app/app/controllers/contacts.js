// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
                          
// Navigation Bar Variables

var addButton = new steroids.buttons.NavigationBarButton();
    addButton.imagePath = "/icons/add@2x.png";

var editButton = new steroids.buttons.NavigationBarButton();
    editButton.title = "Edit";

// preload view vars
var friendView = new steroids.views.WebView("views/friend/index.html");
    friendView.preload();

var jamesView = new steroids.views.WebView("views/friend/index.html");
    jamesView.preload();

function onDeviceReady () {
  navigationBar();
  buttonClasses();
  segmentedList();
  disableScrolling();
} 

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Contacts",
    overrideBackButton: true,
    buttons: {
      left: [addButton],
      right: [editButton]
    }
  });
}

function buttonClasses() {
  $('.conversation-button').on('singletap', showFriend);
  $('.group_btn').on('singletap', showGroup);
  $('.james-button').on('singletap', showJames);
  $('james-btn').on('singletap', showJames);
}

function disableScrolling() {
  $('body').bind("touchmove", {}, function(event){
      event.preventDefault();
  });
}


editButton.onTap = function() {
  steroids.layers.push( {
    navigationBar: false,
    tabBar: false
  });
}

function showFriend() {
  steroids.layers.push( {
    view: friendView,
    navigationBar: true,
    tabBar: false
  });
}

function showJames() {
  alert("showJames");
  steroids.layers.push( {
    view: jamesView,
    navigationBar: true,
    tabBar: false
  });
}  

/*conversation-button.onTap = function() {
  steroids.layers.push( {
    view: friendView,
    navigationBar: false
  });
}*/

/*function showGroup() {
  steroids.layers.push( {
    view: GroupView,
    navigationBar: true,
    tabBar: false
  });
} */