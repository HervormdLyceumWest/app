angular.module('app.controllers', [])
  
.controller('plattegrondCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopup, $timeout) {

  // Set HLW logo
  $scope.pageTitle = "<img src=\"img/logo.png\" width=\"110px\" height=\"36px\">";


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


  /////////////////////////////////////////////
  ////////////Floorplan Buttons///////////////
  ///////////////////////////////////////////

    var overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();

    function showFirstFloor(){
      // Load google map
      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Load floorplant overlay
      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(52.362200, 4.82440),
          new google.maps.LatLng(52.362605, 4.825910));
      var srcImage = 'img/2-A.png';
      overlay = new USGSOverlay(bounds, srcImage, map);


    }

    function showSecondFloor(){
      // Load google map
      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Load floorplant overlay
      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(52.362200, 4.82440),
          new google.maps.LatLng(52.362605, 4.825910));
      var srcImage = 'img/smile.png';
      overlay = new USGSOverlay(bounds, srcImage, map);


    }

    function showThirdFloor(){
      // Load google map
      map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Load floorplant overlay
      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(52.362200, 4.82440),
          new google.maps.LatLng(52.362605, 4.825910));
      var srcImage = 'img/bier.jpg';
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


  //////////////////////////////////////////////
  ////////////Image overlay code///////////////
  ////////////////////////////////////////////

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


  //////////////////////////////////////////////////////
  ////////////Show current user position///////////////
  ////////////////////////////////////////////////////

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