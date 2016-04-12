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
>>>>>>> parent of 5036996... media/ to img/


}) // Close controller
   
.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('informatieCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
    
