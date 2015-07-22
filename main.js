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


var find = document.getElementById("find");

function findClick() {
  var Menu = document.getElementById("findMenu")
  console.log("click");
  Menu.style.visibility = "visible";
}

find.addEventListener('click', findClick);

var findClose = document.getElementById("close");

function close() {
   var Menu = document.getElementById("findMenu")
  Menu.style.visibility = "hidden";
}

findClose.addEventListener('click', close);

