//css in gogle maps
//bron: http://jsfiddle.net/doktormolle/nBsh4/
//API key: AIzaSyD1yewLuBGHlX6W1ac9YcxiRI-x3n3h65
/*
function initMap() {
  var index=0;
  var mapOptions = {
     center: {lat: 52.362398, lng: 4.825519},
    zoom: 19,
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
      
  marker=new google.maps.Marker({position:map.getCenter(),
    map:map,
    optimized:false,
    icon:'http://www.google.com/mapfiles/marker.png?i='+(index++)
  })

  google.maps.event.addListener(marker,'mouseover',function(){
    $('img[src="'+this.icon+'"]').stop().animate({opacity:1});
  });
  google.maps.event.addListener(marker,'mouseout',function(){
    $('img[src="'+this.icon+'"]').stop().animate({opacity:.5});
  });
}

  google.maps.event.addDomListener(window, 'load', initialize);

 */


