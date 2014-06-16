document.addEventListener("deviceready", onDeviceReady, false);
                          
// Navigation Bar Variables
var addButton = new steroids.buttons.NavigationBarButton();
    addButton.imagePath = "/icons/compose-message@2x.png";

// Preload Web Views
/*var addView = new steroids.views.WebView("views/add/index.html");
    addView.preload();*/

var groupView = new steroids.views.WebView("views/conversations-group/index.html");
    groupView.preload();

var chatView = new steroids.views.WebView("views/conversations/index.html");
    chatView.preload();

function onDeviceReady () {
  navigationBar();
  buttonClasses();
  segmentedList();
} 

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Chats",
    overrideBackButton: true,
    buttons: {
      right: [addButton]
    }
  });
}

function buttonClasses() {
  $('.chat-button').on('singletap', showChat);
  $('.group-button').on('singletap', showGroup);
}

// Helper functions
function segmentedList () {

  // chocloate-chip UI - segmented list
  var segmentedOptions = {
    id: 'mySegmented',
    labels : ['Individual','Groups'],
    selected: 0
   };

  var segmentedComponent = $.UICreateSegmented(segmentedOptions);

  $('#segmentedPanel').append(segmentedComponent);
  $('.segmented').UISegmented({callback:onSegmentSelected});
  $('.segmented').UIPanelToggle('#toggle-panels',function(){$.noop;});     
}

function onSegmentSelected(e) {
  event.stopPropagation();

  onTabClicked($('.segmented').find('.selected').index());
 }

// To implement later
/*addButton.onTap = function() {
  steroids.layers.push( {
    view: addView,
    navigationBar: false,
    tabBar: false
  });
}*/

function showChat() {
  steroids.layers.push( {
    view: chatView,
    navigationBar: true,
    tabBar: false
  });
} 

function showGroup() {
  steroids.layers.push( {
    view: groupView,
    navigationBar: true,
    tabBar: false
  });
} 