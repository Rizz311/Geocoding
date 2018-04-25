function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {
      lat: 42.3601,
      lng: -71.0589
    }
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
  document.getElementById("floating-panel").addEventListener("submit", function(e){
    geocodeAddress(geocoder, map);
        e.preventDefault();

    });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    //  alert(results[0].geometry.location.lat());
      var lat = results[0].geometry.location.lat()
      var lng = results[0].geometry.location.lng()
      var longAddress = results[0].formatted_address
      document.getElementById('lat').innerHTML = 'latitude: ' + lat
      document.getElementById('lng').innerHTML = 'longitude: ' + lng
      document.getElementById('longAddress').innerHTML = 'Address: ' + longAddress
      document.getElementById('results').style='display:block;';
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
