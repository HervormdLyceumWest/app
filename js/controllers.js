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


  ////////////////////////////////////////////////////////
  ////////////Initialise floorplan overlay///////////////
  //////////////////////////////////////////////////////

    var overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();

    function buildMapWithOverlay(floor){

      // Load google map
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      //showLocation(map);

      // Now load the right image for each floor
      if(floor==1){
        // Load floorplant overlay
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(52.361950, 4.82385),
            new google.maps.LatLng(52.362805, 4.827310));
        var srcImage = 'img/beganegrond.png';
      }

      if (floor==2){
        // Load floorplant overlay
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(52.361950, 4.82385),
            new google.maps.LatLng(52.362805, 4.827310));
        var srcImage = 'img/1e_verdieping.png';
      }

      if (floor==3){
        // Load floorplant overlay
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(52.361950, 4.82385),
            new google.maps.LatLng(52.362805, 4.827310));
        var srcImage = 'img/2e_verdieping.png';
      }

      // Create overlay
      overlay = new USGSOverlay(bounds, srcImage, map);
    }


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


  /////////////////////////////////////////////////
  ////////////Show current user lib///////////////
  ///////////////////////////////////////////////

    function showLocation(map){
      (function(){/*
       geolocation-marker version 2.0.4
       @copyright 2012, 2015 Chad Killingsworth
       @see https://github.com/ChadKillingsworth/geolocation-marker/blob/master/LICENSE.txt
      */
      'use strict';var b,d=this;
      function g(a,c,e){google.maps.MVCObject.call(this);this.a=this.b=null;this.g=-1;var f={clickable:!1,cursor:"pointer",draggable:!1,flat:!0,icon:{url:"https://chadkillingsworth.github.io/geolocation-marker/images/gpsloc.png",size:new google.maps.Size(34,34),scaledSize:new google.maps.Size(17,17),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(8,8)},optimized:!1,position:new google.maps.LatLng(0,0),title:"Current location",zIndex:2};c&&(f=h(f,c));c={clickable:!1,radius:0,strokeColor:"1bb6ff",
      strokeOpacity:.4,fillColor:"61a0bf",fillOpacity:.4,strokeWeight:1,zIndex:1};e&&(c=h(c,e));this.b=new google.maps.Marker(f);this.a=new google.maps.Circle(c);google.maps.MVCObject.prototype.set.call(this,"accuracy",null);google.maps.MVCObject.prototype.set.call(this,"position",null);google.maps.MVCObject.prototype.set.call(this,"map",null);this.set("minimum_accuracy",null);this.set("position_options",{enableHighAccuracy:!0,maximumAge:1E3});this.a.bindTo("map",this.b);a&&this.f(a)}
      (function(){var a=google.maps.MVCObject;function c(){}c.prototype=a.prototype;g.prototype=new c;g.prototype.constructor=g;for(var e in a)if(d.Object.defineProperties){var f=d.Object.getOwnPropertyDescriptor(a,e);void 0!==f&&d.Object.defineProperty(g,e,f)}else g[e]=a[e]})();b=g.prototype;b.set=function(a,c){if(k.test(a))throw"'"+a+"' is a read-only property.";"map"===a?this.f(c):google.maps.MVCObject.prototype.set.call(this,a,c)};b.i=function(){return this.get("map")};b.l=function(){return this.get("position_options")};
      b.w=function(a){this.set("position_options",a)};b.c=function(){return this.get("position")};b.m=function(){return this.get("position")?this.a.getBounds():null};b.j=function(){return this.get("accuracy")};b.h=function(){return this.get("minimum_accuracy")};b.v=function(a){this.set("minimum_accuracy",a)};
      b.f=function(a){google.maps.MVCObject.prototype.set.call(this,"map",a);a?navigator.geolocation&&(this.g=navigator.geolocation.watchPosition(this.A.bind(this),this.o.bind(this),this.l())):(this.b.unbind("position"),this.a.unbind("center"),this.a.unbind("radius"),google.maps.MVCObject.prototype.set.call(this,"accuracy",null),google.maps.MVCObject.prototype.set.call(this,"position",null),navigator.geolocation.clearWatch(this.g),this.g=-1,this.b.setMap(a))};b.u=function(a){this.b.setOptions(h({},a))};
      b.s=function(a){this.a.setOptions(h({},a))};
      b.A=function(a){var c=new google.maps.LatLng(a.coords.latitude,a.coords.longitude),e=null==this.b.getMap();if(e){if(null!=this.h()&&a.coords.accuracy>this.h())return;this.b.setMap(this.i());this.b.bindTo("position",this);this.a.bindTo("center",this,"position");this.a.bindTo("radius",this,"accuracy")}this.j()!=a.coords.accuracy&&google.maps.MVCObject.prototype.set.call(this,"accuracy",a.coords.accuracy);!e&&null!=this.c()&&this.c().equals(c)||google.maps.MVCObject.prototype.set.call(this,"position",
      c)};b.o=function(a){google.maps.event.trigger(this,"geolocation_error",a)};function h(a,c){for(var e in c)!0!==l[e]&&(a[e]=c[e]);return a}var l={map:!0,position:!0,radius:!0},k=/^(?:position|accuracy)$/i;function m(){g.prototype.getAccuracy=g.prototype.j;g.prototype.getBounds=g.prototype.m;g.prototype.getMap=g.prototype.i;g.prototype.getMinimumAccuracy=g.prototype.h;g.prototype.getPosition=g.prototype.c;g.prototype.getPositionOptions=g.prototype.l;g.prototype.setCircleOptions=g.prototype.s;g.prototype.setMap=g.prototype.f;g.prototype.setMarkerOptions=g.prototype.u;g.prototype.setMinimumAccuracy=g.prototype.v;g.prototype.setPositionOptions=g.prototype.w;return g}
      "function"===typeof this.define&&this.define.amd?this.define([],m):"object"===typeof this.exports?this.module.exports=m():this.GeolocationMarker=m();}).call(this)
      //# sourceMappingURL=geolocation-marker.js.map

      
      // Now initialise the geolocation
      var GeoMarker = new GeolocationMarker(map);
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
