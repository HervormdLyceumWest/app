angular.module('app.controllers', [])
  
.controller('plattegrondCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopup, $timeout) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

  /////////////////////////////////////////////
  ////////////Floorplan Buttons///////////////
  ///////////////////////////////////////////
  $scope.showFirstFloor = function() {
    var alertPopup = $ionicPopup.alert({
       title: 'showFirstFloor()',
       template: 'Function activated.'
    });
  }
  $scope.showSecondFloor = function() {
    var alertPopup = $ionicPopup.alert({
       title: 'showSecondFloor()',
       template: 'Function activated.'
    });
  }
  $scope.showThirdFloor = function() {
    var alertPopup = $ionicPopup.alert({
       title: 'showThirdFloor()',
       template: 'Function activated.'
    });
  }

  ////////////////////////////////////////////////////////
  ////////////Initialise GoogleMaps Canvas///////////////
  //////////////////////////////////////////////////////

  function initMap() {
    var index=0;
    var mapOptions = {
       center: {lat: 52.362398, lng: 4.825519},
      zoom: 12, //19
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: [
          google.maps.MapTypeId.ROADMAP,
          google.maps.MapTypeId.TERRAIN
        ]
      }
    };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
      



google.maps.event.addDomListener(window, 'load', initMap);





}) // Close controller
   
.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('informatieCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
    
