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


     

<<<<<<< HEAD

=======
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }); // Close Cordova Geolocation
  

  //////////////////////////////////////
  ////////////geolocation///////////////
  //////////////////////////////////////

   // Try HTML5 geolocation.
    //http://jsfiddle.net/thinkingstiff/rsp22/
    marker = null;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

   if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position,options) {

          time=setInterval(function(){
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            if(marker == null) {
              marker=new google.maps.Marker({
                position:pos,
                map:map,
                optimized:false,
                icon:'media/Blue_Ball.png'
             })
            }
           marker.setPosition(pos);
          },1000);

        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
<<<<<<< HEAD
>>>>>>> parent of 5036996... media/ to img/
=======
          

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
      
      //////////////////////////////////////
      ////////////overlay//////////////////
      /////////////////////////////////////

    var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(52.362200, 4.82440),
      new google.maps.LatLng(52.362605, 4.825910));

    // The photograph is courtesy of the U.S. Geological Survey.
    var srcImage = 'img/2-A.png';

    // The custom USGSOverlay object contains the USGS image,
    // the bounds of the image, and a reference to the map.
    overlay = new USGSOverlay(bounds, srcImage, map);
    
/** @constructor */
  function USGSOverlay(bounds, image, map) {

    // Initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay.
    this.setMap(map);
  }







>>>>>>> parent of 8b502cb... add all overlay


}) // Close controller
   
.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('informatieCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
    
