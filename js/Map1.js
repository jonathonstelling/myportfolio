// Author: Jonathon Stelling | jonnystelling.com
    
    var jonathonPhoto = "http://graph.facebook.com/1695261896/picture?type=small";

    var position = new google.maps.LatLng(53.9623,-1.0819);

//-------------------------------------------- Map out -------------------------------------------------
        
      window.setInterval(function() {


function initialize() {

    var position = new google.maps.LatLng(53.9623,-1.0819);
    var myOptions = {
      zoom: 14,
      center: position,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);
 
    var marker1 = new google.maps.Marker({
        position: position,
        map: map,
        title:"Hi!",
        icon : jonathonPhoto,
    }); 
    
    var contentString = '<strong>Hi!</strong>';
    var infowindow1 = new google.maps.InfoWindow({
        content: contentString
    });
    
    google.maps.event.addListener(marker1, 'click', function() {    
      infowindow1.open(map,marker1);
  if (marker1.getAnimation() !== null) {
    marker1.setAnimation(null);
  } else {
    marker1.setAnimation(google.maps.Animation.BOUNCE);
    marker2.setAnimation(null);
  }
    });
    
    google.maps.event.addListener(marker2, 'click', function() {    
      infowindow2.open(map,marker2);
  if (marker2.getAnimation() !== null) {
    marker2.setAnimation(null);
  } else {
    marker2.setAnimation(google.maps.Animation.BOUNCE);
    marker1.setAnimation(null);
  }
    });
}