mapboxgl.accessToken =
  'pk.eyJ1IjoianV2ZXJpYS1tYW56YXIiLCJhIjoiY2tuM2Y4bm9mMHVqbTJ2b3VxaHRxMG9rNSJ9.rt843IoDhZ27nsKVIJNSEQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 10,
  center: [77.328010,28.609770]
});

var stores = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.338966,
          28.578440
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 234-7336",
        "phone": "2022347336",
        "store":"Myntra Store",
        "address": "Logix City Center Lower Ground Floor, ANCHOR NO. -3, Plot No.- BW-58 Sector 32",
        "city": "Noida",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Uttar Pradesh"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.095580,
          28.716030
        ]
      },
      "properties": {
        "phoneFormatted": "(011) 4755-5316",
        "phone": "01147555316",
        "store":"Myntra Mall",
        "address": "PN 1B3, 1st & 2nd Flr, City Center Mall Rohini, opposite Ambedkar Hospital, Sector 10",
        "city": "Delhi",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "New Delhi"
      }
    }
  ]
};

stores.features.forEach(function(store, i){
  store.properties.id = i;
});

// Load map with stores
map.on('load', function() {
  map.addSource('places', {
    type: 'geojson',
    data: stores
  });
  addMarkers();
  buildLocationList(stores);
  var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: true, // Use the geocoder's default marker style
    bbox: [35.947266,7.536764,95.229492,34.198173] // Set the bounding box coordinates
  });
  
  map.addControl(geocoder, 'top-left');
  geocoder.on('result', function(ev) {
    var searchResult = ev.result.geometry;
    var options = { units: 'kilometers' };
    stores.features.forEach(function(store) {
      Object.defineProperty(store.properties, 'distance', {
      value: turf.distance(searchResult, store.geometry, options),
      writable: true,
      enumerable: true,
      configurable: true
    });
    stores.features.sort(function(a, b) {
      if (a.properties.distance > b.properties.distance) {
        return 1;
      }
      if (a.properties.distance < b.properties.distance) {
        return -1;
      }
      return 0; // a must be equal to b
    });
    var listings = document.getElementById('listings');
    while (listings.firstChild) {
      listings.removeChild(listings.firstChild);
    }
    buildLocationList(stores);
});
  });
});

function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  stores.features.forEach(function(marker) {
    /* Create a div element for the marker. */
    var el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = "marker-" + marker.properties.id;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';
    
    /**
     * Create a marker using the div element
     * defined above and add it to the map.
    **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
      el.addEventListener('click', function(e){
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + marker.properties.id);
        listing.classList.add('active');
      });
  });
}


function buildLocationList(data) {
  data.features.forEach(function(store, i){
    var prop = store.properties;
    var listings = document.getElementById('listings');

    var listing = listings.appendChild(document.createElement('div'));
    listing.id = "listing-" + data.features[i].properties.id;

    listing.className = 'item';
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = "link-" + prop.id;
    link.innerHTML = prop.store;

    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city;
    if (prop.phone) {
      details.innerHTML += ' · ' + prop.phoneFormatted;
    }
    if (prop.distance) {
      var roundedDistance = Math.round(prop.distance * 100) / 100;
      details.innerHTML +=
        '<p><strong>' + roundedDistance + ' kilometers away</strong></p>';
    }
    // map.fitBounds()
    link.addEventListener('click', function(e){
      for (var i = 0; i < data.features.length; i++) {
        if (this.id === "link-" + data.features[i].properties.id) {
          var clickedListing = data.features[i];
          flyToStore(clickedListing);
          createPopUp(clickedListing);
        }
      }  
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  });
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 13
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>Myntra Stores</h3>' +
      '<h4>' + currentFeature.properties.address + '</h4>')
    .addTo(map);
}
