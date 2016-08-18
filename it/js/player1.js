// Author: Jonathon Stelling | jonnystelling.com
//---------- Reading/sorting Particle Photon data from the cloud -------//
        
    var player1ID = "3a0043001447353236343033";
    var player2ID = "420037001747353236343033";
    var JSaccessToken = "1aa72082a6022b91a5ef7f0b5f6c95d70f936446";
    var varNamePlayer = "player";
    var varNameTag = "tag";
    var playerNonPhoto = "images/logo_1.jpg";
    var player1Photo = "http://graph.facebook.com/1695261896/picture?type=large";
    var player2Photo = "http://graph.facebook.com/100000087952195/picture?type=large";
  
    var status1;
    var status2;
        
    var player1;
    var player2;
        
    var tag1;
    var tag2;
        
    var it1;
    var it2;
    var it3;
    var it4;
        
    var ip1;
    var ip2;
    var lat1;
    var lng1;
    var lat2;
    var lng2;
        
//Player 1
        
//---------- Core Info ------->

      window.setInterval(function() {

        var deviceID = player1ID;
        var accessToken = JSaccessToken;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
            
            //---------- If Player is Online ------->
            
            if (json.connected==true){
                status1="Online";
                document.getElementById("status1s").className = "opacity100";
            }
            else{
                status1="Offline";
                document.getElementById("status1s").className = "opacity50";
            }
            document.getElementById("status1").innerHTML = "Status: " + status1;
            
            //---------- Find where players are ------->
            
            ip1=json.last_ip_address;

            document.getElementById("ipAddress1").innerHTML = "IP Address: " + ip1;
                 });  

//---------- Find Player ------------>

        var varName = varNamePlayer;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 player1=json.result;
                 document.getElementById("player1").innerHTML = "Player " + player1;
                 });
        
//---------- Tag Count ------------>       

        var varName = varNameTag;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 tag1=json.result;
                 document.getElementById("tag1").innerHTML = "Times tagged: " + tag1;
                 });       
  
        $.getJSON("http://ipinfo.io/" + ip1, function(json) {
                 lat1=json.loc.split(',')[0];
                 lng1=json.loc.split(',')[1];
                 document.getElementById("lat1").innerHTML = "Lat: " + lat1;
                 document.getElementById("lng1").innerHTML = "Lng: " + lng1;
                 });
          

//-------------------------------------------- Find who is it -------------------------------------------------
        
//Player 1

        var varName = "it1";

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 it1=json.result;
                 document.getElementById("it1").innerHTML = "Player " + it1 + " is it";
                 });
        
        if (it1==1){
                 document.getElementById("player1it").className = "pulse2";
                 document.getElementById("player2it").className = "";
                 document.getElementById('audiotag1').play();
      }
          
//Player 2
        var deviceID = player2ID;
        var varName = "it2";

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 it2=json.result;
                 document.getElementById("it1").innerHTML = "Player " + it2 + " is it";
                 });
        
        if (it2==1){
                 document.getElementById("player2it").className = "pulse2";
                 document.getElementById("player1it").className = "";
                 document.getElementById('audiotag1').play();
      }
    }, 1000);

        
