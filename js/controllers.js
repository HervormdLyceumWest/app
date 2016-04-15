angular.module('app.controllers', [])
  
.controller('plattegrondCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopup, $timeout) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";


 

  /////////////////////////////////////////////
  ////////////Floorplan Buttons///////////////
  ///////////////////////////////////////////
 
 ////////button 1////////////
 $scope.showFirstFloor = function() {
    var alertPopup = $ionicPopup.alert({
       title: 'showFirstFloor()',
       template: 'Function activated.'
    });
  
   
}//end button 1

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


    

      // Initialize the map and the custom overlay.
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
  }    
      //////////////////////////////////////
      ////////////geolocation///////////////
      /////////////////////////////////////


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
              icon:'img/Blue_Ball.png'
           })
          }
          marker.setPosition(pos);
        },1000);
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
          

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
    



      //////////////////////////////////////
      ////////////overlay//////////////////
      /////////////////////////////////////
 










}) // Close controller
   
.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('informatieCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
    
