//GOOLGLE MAPS API
var myLatlng = new google.maps.LatLng(38.9047, -77.0164)
var mapOptions = {
  zoom: 8,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

var geocoder = new google.maps.Geocoder();

function codeAddress() {
    var address = document.getElementById("sellAddress").value;
    var sellbtn = document.getElementById("sellSubmit");
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        sellbtn.innerHTML = "Success!"
        marker.setMarker(map);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

// This begins section of code that toggles link menus
// This begins section of code that toggles link menus
// This begins section of code that toggles link menus

//Find a spot button functionality
var find = document.getElementById("find");
var closeFindMenuButton = document.getElementById("closeFindMenu");


//Function to show the FIND MENU when the Find Link is clicked

function findClick() {
  var Menu = document.getElementById("findMenu");

  Menu.style.visibility = "visible";
}

//Function to CLOSE the FIND MENU when the FIND MENU CLOSE button is clicked

function closeFindMenu() {
  var Menu = document.getElementById("findMenu");

  Menu.style.visibility = "hidden";
}

//Adding Event Listener to the FIND LINK
find.addEventListener('click', findClick);
//Adding Event Listener to the FIND MENU CLOSE BUTTON
closeFindMenuButton.addEventListener('click', closeFindMenu);

//Sell a spot button functionality
var sellLink = document.getElementById("sell");
var closeSellMenuButton = document.getElementById("closeSellMenu");


//Function that opens the SELL MENU when the Sell Link is clicked
function sellClick() {
  var sellerMenu = document.getElementById("sellMenu");

  sellerMenu.style.visibility = "visible";
}

//Adds Event Listener to the SELL LINK 
sellLink.addEventListener('click', sellClick)

function closeSellMenu() {
  var sellerMenu = document.getElementById("sellMenu");
  var sellbtn = document.getElementById("sellSubmit");
  var inputs = document.getElementsByTagName("input");

  setTimeout(function() {
    sellerMenu.style.visibility = "hidden";
    sellbtn.innerHTML = "Sell This Spot!";
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
  }, 1500)
}

function escapeSellMenu () {
  var sellerMenu = document.getElementById("sellMenu");
  sellerMenu.style.visibility = "hidden";
}


closeSellMenuButton.addEventListener('click', escapeSellMenu);


  var sellBtn = document.getElementById("sellSubmit");
  sellBtn.addEventListener('click', codeAddress);
  sellBtn.addEventListener('click', closeSellMenu);


