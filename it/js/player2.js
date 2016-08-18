// Author: Jonathon Stelling | jonnystelling.com
//---------- Reading/sorting Particle Photon data from the cloud -------//
        
    var player1ID = "3a0043001447353236343033";
    var player2ID = "420037001747353236343033";
    var JSaccessToken = "1aa72082a6022b91a5ef7f0b5f6c95d70f936446";
    var varNamePlayer = "player";
    var varNameTag = "tag";
    var playerNonPhoto = "images/logo_1.jpg";
    var player2Photo = "http://graph.facebook.com/100000087952195/picture?type=large";
    var status2;
    var player2;
    var tag2;   
    var it2;       
    var ip2;
    var lat2;
    var lng2;
        
//Player 2
        
//---------- Core Info ------->

      window.setInterval(function() {

        var deviceID = player2ID;
        var accessToken = JSaccessToken;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
            
            //---------- If Player is Online ------->
            
            if (json.connected==true){
                status2 = "Online";
                document.getElementById("status1s").className = "opacity100";
            }
            else{
                status2 = "Offline";
                document.getElementById("status2s").className = "opacity50";
            }
            document.getElementById("status2").innerHTML = "Status: " + status2;
            
            //---------- Find where players are ------->
            
            ip2=json.last_ip_address;

            document.getElementById("ipAddress2").innerHTML = "IP Address: " + ip2;
                 });

//---------- Find Player ------------>

        var varName = varNamePlayer;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 player2 = json.result;
                 document.getElementById("player2").innerHTML = "Player " + player2;
                 });
        
//---------- Tag Count ------------>       

        var varName = varNameTag;

        requestURL = "https://api.particle.io/v1/devices/" + deviceID + "/" + varName + "/?access_token=" + accessToken;
        $.getJSON(requestURL, function(json) {
                 tag2 = json.result;
                 document.getElementById("tag2").innerHTML = "Times tagged: " + tag2;
                 });
    }, 1000);

                 