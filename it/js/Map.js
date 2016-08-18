// Author: Jonathon Stelling | jonnystelling.com
    
    var player1Photo = "http://graph.facebook.com/1695261896/picture?type=small";
    var player2Photo = "http://graph.facebook.com/100000087952195/picture?type=small";

    var position = new google.maps.LatLng(40.2648,-74.8243);
    var position1 = new google.maps.LatLng(40.2648,-74.8243);
    var position2 = new google.maps.LatLng(40.2670, -74.8220);

    var player1ID = "3a0043001447353236343033";
    var player2ID = "420037001747353236343033";
    var JSaccessToken = "1aa72082a6022b91a5ef7f0b5f6c95d70f936446";
    var varName = "it1";

    var it1;
    var it2;

//-------------------------------------------- Find who is it -------------------------------------------------
        
      window.setInterval(function() {
//Player 1
        var deviceID = player1ID;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 it1=json.result;
                 });
          
//Player 2
        var deviceID = player2ID;
        var varName = "it2";

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 it2=json.result;
                 });
    }, 1000);


function initialize() {

    var position = new google.maps.LatLng(40.2648,-74.8243);
    var position1 = new google.maps.LatLng(40.2648,-74.8243);
    var position2 = new google.maps.LatLng(40.2670, -74.8220);
    var myOptions = {
      zoom: 14,
      center: position,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);
 
    var marker1 = new google.maps.Marker({
        position: position1,
        map: map,
        title:"Player 1",
        icon : player1Photo,
    }); 
    
    var contentString = '<strong>Player 1</strong>';
    var infowindow1 = new google.maps.InfoWindow({
        content: contentString
    });
      
    var marker2 = new google.maps.Marker({
        position: position2,
        map: map,
        title:"Player 2",
        icon : player2Photo
    }); 
    
    var contentString = '<strong>Player 2</strong>';
    var infowindow2 = new google.maps.InfoWindow({
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