angular.module('app.controllers', [])

.controller('startCtrl', function($scope, $location) {

  // Set HLW logo
  $scope.pageTitle = "<a href=\"#/page1/start\"><img src=\"img/logo.png\" width=\"110px\" height=\"36px\"><a>";

})

.controller('plattegrondCtrl', function($scope, $state, $ionicPopup, $timeout) {

  // Set HLW logo
  $scope.pageTitle = "<a href=\"#/page1/start\"><img src=\"img/logo.png\" width=\"110px\" height=\"36px\"><a>";

  ////////////////////////////////////////////////////////
  ////////////Initialise GoogleMaps Canvas///////////////
  //////////////////////////////////////////////////////

  /*
  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      }); // Close Cordova Geolocation
*/




  ////////////////////////////////////////////////////////
  ////////////Initialise floorplan overlay///////////////
  //////////////////////////////////////////////////////

    var overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();

    function buildMapWithOverlay(floor){

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

      // Initialize google map (step 1/3)
      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Set image vars that is being used for the overlay
      if(floor==1){
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(52.361950, 4.82385),
            new google.maps.LatLng(52.362805, 4.827310));
        var srcImage = 'img/beganegrond.png';
      }

      if (floor==2){
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(52.361950, 4.82385),
            new google.maps.LatLng(52.362805, 4.827310));
        var srcImage = 'img/1e_verdieping.png';
      }

      if (floor==3){
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(52.361950, 4.82385),
            new google.maps.LatLng(52.362805, 4.827310));
        var srcImage = 'img/2e_verdieping.png';
      }

      // Create floorplan overlay (step 2/3)
      overlay = new USGSOverlay(bounds, srcImage, map);

      // Step 3: geolocation (WORKING BUT DISABLED)
      // Uncomment following code to enable geolocation


    } // Close buildMapWithOverlay


    // Initiliaze
    new buildMapWithOverlay(floor=1);


    // Buttons
    $scope.showFirstFloor = function() {
      buildMapWithOverlay(floor=1);
    }
    $scope.showSecondFloor = function() {
      buildMapWithOverlay(floor=2);
    }
    $scope.showThirdFloor = function() {
      buildMapWithOverlay(floor=3);
    }


  ////////////////////////////////////////////
  ////////////Image overlay lib///////////////
  ///////////////////////////////////////////

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

      /**
       * onAdd is called when the map's panes are ready and the overlay has been
       * added to the map.
       */
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


}) // Close controller

.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<a href=\"#/page1/start\"><img src=\"img/logo.png\" width=\"110px\" height=\"36px\"><a>";

})

.controller('informatieCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<a href=\"#/page1/start\"><img src=\"img/logo.png\" width=\"110px\" height=\"36px\"><a>";

})
