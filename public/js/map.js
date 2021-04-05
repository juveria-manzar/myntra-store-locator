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
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.1361022,
          28.6993636
        ]
      },
      "properties": {
        "phoneFormatted": "(011) 4755-5316",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "3rd Floor, 15 Vaishali, above Karur Vysya Bank, opposite Metro Pillar Number 347, Pitam Pura, New Delhi, Delhi 110034",
        "city": "Delhi",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "New Delhi"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0982906,
          28.627836
        ]
      },
      "properties": {
        "phoneFormatted": "(011) 4755-5316",
        "phone": "01147555316",
        "store":"Myntra Mall",
        "address": "Jail Rd, Pocket UB, Asha Park, Fateh Nagar, New Delhi, Delhi 110018",
        "city": "Delhi",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "New Delhi"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.2166312,
          28.7012037
        ]
      },
      "properties": {
        "phoneFormatted": "(011) 4755-5316",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "Banarsi Das Estate, Timarpur Delhi, 110054",
        "city": "Delhi",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "New Delhi"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          75.790292,
          26.9029448
        ]
      },
      "properties": {
        "phoneFormatted": "(067) 4755-5316",
        "phone": "01147555316",
        "store":"Myntra Mall",
        "address": "Commercial Plot No 1, Sardar Patel Marg, Rajasthan 302001",
        "city": "Jaipur",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Rajasthan"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.9331519,
          26.8456697
        ]
      },
      "properties": {
        "phoneFormatted": "(0123) 4755-5316",
        "phone": "01147555316",
        "store":"Myntra Mall",
        "address": "24, Cantonment Rd, Kaiserbagh Officer's Colony, Qaisar Bagh, Lucknow, Uttar Pradesh 226001",
        "city": "Lucknow",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "UP"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.3139655,
          9.9902607
        ]
      },
      "properties": {
        "phoneFormatted": "(0111) 4755-5388",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "33/1739 A Chakkaraparambu Junction, National Highway Bypass, Vennala, Kochi, Kerala 682028",
        "city": "Cochin",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Kerela"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.759357,
          18.5808521
        ]
      },
      "properties": {
        "phoneFormatted": "(0124) 4755-5388",
        "phone": "01147555316",
        "store":"Myntra Mall",
        "address": "Patil Nagar, Balewadi, Pune, Maharashtra 411045",
        "city": "Pune",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Maharashtra"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8849996,
          19.1029211
        ]
      },
      "properties": {
        "phoneFormatted": "(044) 4755-5388",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "Sakinaka Junction, Andheri - Kurla Rd, Andheri East, Mumbai, Maharashtra 400072",
        "city": "Mumbai",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Maharashtra"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          75.8298382,
          30.459333
        ]
      },
      "properties": {
        "phoneFormatted": "(911) 4745-5356",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "Uttarkashi - Gangotri Rd, Chamba, Uttarakhand 249145",
        "city": "Chamba",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Uttarakhand"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.5678784,
          30.0084955
        ]
      },
      "properties": {
        "phoneFormatted": "(014) 5555-5388",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "Patnitop, Jammu and Kashmir 182142",
        "city": "Patnitop",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Jammu and Kashmir"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.8693153,
          30.6890855
        ]
      },
      "properties": {
        "phoneFormatted": "(012) 4755-5388",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "City Centre, Sector 3, Panchkula, Haryana 134109",
        "city": "Panchkula",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Haryana"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.430617,
          23.2271076
        ]
      },
      "properties": {
        "phoneFormatted": "(011) 4755-5388",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "HIG 34 Habibganj Road Opp. MP Nagar Zone 2 , Near Jain Mandir Shivaji Nagar, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462016",
        "city": "Mumbai",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Maharashtra"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          85.7371301,
          25.8611047
        ]
      },
      "properties": {
        "phoneFormatted": "(011) 4755-5388",
        "phone": "01147555316",
        "store":"Myntra Store",
        "address": "B-113 Buddha colony near Hospito India Patna Bihar 800014 IN, Buddha Colony, Patna, Bihar 800001",
        "city": "Patna",
        "country": "India",
        "crossStreet": "at 15th St NW",
        "postalCode": "201301",
        "state": "Bihar"
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
