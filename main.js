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
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
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

function findClick() {
  var Menu = document.getElementById("findMenu");

  Menu.style.visibility = "visible";
}

function closeFindMenu() {
  var Menu = document.getElementById("findMenu");

  Menu.style.visibility = "hidden";
}

find.addEventListener('click', findClick);
closeFindMenuButton.addEventListener('click', closeFindMenu);

//Sell a spot button functionality
var sellLink = document.getElementById("sell");
var closeSellMenuButton = document.getElementById("closeSellMenu");

function sellClick() {
  var sellerMenu = document.getElementById("sellMenu");

  sellerMenu.style.visibility = "visible";
}

sellLink.addEventListener('click', sellClick)

function closeSellMenu() {
  var sellerMenu = document.getElementById("sellMenu");

  sellerMenu.style.visibility = "hidden";
}

closeSellMenuButton.addEventListener('click', closeSellMenu);


  var sellBtn = document.getElementById("sellSubmit");
  sellBtn.addEventListener('click', codeAddress);
  sellBtn.addEventListener('click', closeSellMenu);


