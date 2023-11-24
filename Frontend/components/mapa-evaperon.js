var mapevaperon=L.map('contenedor-mapa-evaperon').setView([-34.63313613724656, -58.44382700972585], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapevaperon)

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

var marcador = L.marker([-34.63313613724656, -58.44382700972585], {icon: greenIcon}).addTo(mapevaperon);
marcador.bindPopup(" Parque Chacabuco Zona de juegos Eva Perón")

var circulo = L.marker([-34.63275820669257, -58.44472012622663]).addTo(mapevaperon)
circulo.bindPopup("Poliideportivo Chacabuco")


var hospital = L.marker([-34.63362613180164, -58.43964746678254], {icon: redIcon}).addTo(mapevaperon);
hospital.bindPopup("Centro Clinico Parque Chacabuco")

var comisaria = L.marker([-34.62582095213293, -58.447989822883805], {icon: greyIcon}).addTo(mapevaperon);
comisaria.bindPopup("Comisaría Vecinal 7-B")


mapevaperon.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapevaperon)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapevaperon);
}

mapevaperon.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapevaperon.on('locationerror', onLocationError);
