angular.module('app.controllers', [])
  
.controller('plattegrondCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopup, $timeout) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

  // Set buttons to change the floorplan view
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

  // Start google map
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
    center: {lat: 52.362398, lng: 4.825519},
    zoom: 19,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.TERRAIN
        ]
      }
    };
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  },
  
  function(error){
    console.log("Could not get location");
      // Show popup
      var alertPopup = $ionicPopup.alert({
         title: 'Geen toegang tot je locatie',
         template: 'Zonder goedkeuring voor het weergeven van je locatie kunnen we niet laten zien waar je bent op de plattegrond.'
      });
  });



}) // Close controller
   
.controller('overCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('inschrijvenCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
    