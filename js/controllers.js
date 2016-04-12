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
  time=setInterval(function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position,options) {

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
  },3000);
<<<<<<< HEAD


<<<<<<< HEAD
   if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position,options) {

          time=setInterval(function(){
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            if(marker == null) {
              marker=new google.maps.Marker({
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
<<<<<<< HEAD
      
=======
>>>>>>> parent of 79d82a8... delete all overlay code
      //////////////////////////////////////
      ////////////overlay//////////////////
      /////////////////////////////////////

<<<<<<< HEAD
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


=======
>>>>>>> parent of f758d9d... Update getposition to watchposition





>>>>>>> parent of 8b502cb... add all overlay
=======
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
>>>>>>> parent of 79d82a8... delete all overlay code

      USGSOverlay.prototype.onAdd = function() {

        var div = document.createElement('div');
        div.style.borderStyle = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        // Create the img element and attach it to the div.
        var img = document.createElement('img');
        img.src = this.image_;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.position = 'absolute';
        div.appendChild(img);

        this.div_ = div;

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
      };

      USGSOverlay.prototype.draw = function() {

        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

        // Resize the image's div to fit the indicated dimensions.
        var div = this.div_;
        div.style.left = sw.x + 'px';
        div.style.top = ne.y + 'px';
        div.style.width = (ne.x - sw.x) + 'px';
        div.style.height = (sw.y - ne.y) + 'px';
      };

      // The onRemove() method will be called automatically from the API if
      // we ever set the overlay's map property to 'null'.
      USGSOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      };
=======


>>>>>>> parent of f758d9d... Update getposition to watchposition

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
    
