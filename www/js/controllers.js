angular.module('app.controllers', [])
  
.controller('plattegrondCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopup, $timeout) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

  /////////////////////////////////////////////
  ////////////Floorplan Buttons///////////////
  ///////////////////////////////////////////
 





  ////////////////////////////////////////////////////////
  ////////////Initialise GoogleMaps Canvas///////////////
  //////////////////////////////////////////////////////

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

    
    var overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();



    function showFirstFloor(){
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(52.362200, 4.82440),
          new google.maps.LatLng(52.362605, 4.825910));
      var srcImage = 'img/2-A.png';
      overlay = new USGSOverlay(bounds, srcImage, map);

    }

    function showSecondFloor(){
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(52.362200, 4.82440),
          new google.maps.LatLng(52.362605, 4.825910));

      // The photograph is courtesy of the U.S. Geological Survey.
      var srcImage = 'img/smile.png';

      // The custom USGSOverlay object contains the USGS image,
      // the bounds of the image, and a reference to the map.
      overlay = new USGSOverlay(bounds, srcImage, map);

    }

    function showThirdFloor(){
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(52.362200, 4.82440),
          new google.maps.LatLng(52.362605, 4.825910));

      // The photograph is courtesy of the U.S. Geological Survey.
      var srcImage = 'img/bier.jpg';

      // The custom USGSOverlay object contains the USGS image,
      // the bounds of the image, and a reference to the map.
      overlay = new USGSOverlay(bounds, srcImage, map);

    }

    new showFirstFloor();


 $scope.showFirstFloor = function() {
    showFirstFloor();
  }
  $scope.showSecondFloor = function() {
    showSecondFloor();
  }
  $scope.showThirdFloor = function() {
    showThirdFloor();
  }




      // START PART 2: IMAGE OVERLAY
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
      // END PART2: IMAGE OVERLAY




  }); // Close Cordova Geolocation




}) // Close controller
   
.controller('agendaCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})
   
.controller('informatieCtrl', function($scope) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";

})