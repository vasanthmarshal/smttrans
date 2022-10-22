/*footer*/
document.getElementBy("enquiry").onclick = function () {
        location.href = "https://wa.me/7397106325/?text=urlencodedtext";
    };
/*footer*/


/*geoloction*/
document.getElementByTagName("geo").addEventListener("click",getLocation);
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
/*geoloction*/
