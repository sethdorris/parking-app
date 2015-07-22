var geocoder; 

//GOOGLE MAPS FUNCTION
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(38.9047, -77.0164),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
          }
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var startPosition = new google.maps.Marker({
          position: pinLocation,
          map: map,
          title: 'Parking Spot: $15/Day',
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 4
          }
  })
}
      google.maps.event.addDomListener(window, 'load', initialize);

var pinLocation = new google.maps.LatLng(38.9047, -77.0164);

console.log(google.maps.marker);


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


