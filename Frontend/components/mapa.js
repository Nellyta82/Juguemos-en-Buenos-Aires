var map = L.map('contenedor-mapa').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(map)

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var redIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var marcador = L.marker([-34.593588, -58.388884], {icon: greenIcon}).addTo(map);
marcador.bindPopup("Parque Vicente López")

var circulo = L.marker([-34.5943317, -58.3910046]).addTo(map)
circulo.bindPopup("Confiteria Las Esclavas")

var hospital = L.marker([-34.592155, -58.4029055], {icon: redIcon}).addTo(map);
hospital.bindPopup("Hospital Alemán")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(map);
comisaria.bindPopup("Comisaría Comunal 2")

// if(!navigator.geolocation) {
//     console.log("Your browser doesn't support geolocation feature!")
// } else {
//     setInterval(() => {
//         navigator.geolocation.getCurrentPosition(getPosition)
//     }, );
// }

// var marker, circle;

// function getPosition(position){
//     // console.log(position)
//     var lat = position.coords.latitude
//     var long = position.coords.longitude
//     var accuracy = position.coords.accuracy

//     if(marker) {
//         map.removeLayer(marker)
//     }

//     if(circle) {
//         map.removeLayer(circle)
//     }

//     marker = L.marker([lat, long])
//     circle = L.circle([lat, long], {radius: accuracy})

//     var featureGroup = L.featureGroup([marker, circle]).addTo(map)

//     map.fitBounds(featureGroup.getBounds())

//     console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
// }

// const currentZoom = map.getZoom();
// map.locate({setView: true, maxZoom:15});

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);