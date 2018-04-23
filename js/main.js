function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat: 42.3601,
      lng: -71.0589
    }
  })
  .then(function(response){
    console.log(response);
  });
  .catch(function(error){
    console.log(error);
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
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
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
