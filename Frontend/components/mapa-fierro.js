var mapfierro = L.map('contenedor-mapa-martinfierro').setView([-34.61689428954453, -58.44101439103092], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapfierro)

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

var marcador = L.marker([-34.6260103,-58.4079615], {icon: greenIcon}).addTo(mapfierro);
marcador.bindPopup("Plaza Martín Fierro")

var circulo = L.marker([-34.6240192,-58.407022]).addTo(mapfierro)
circulo.bindPopup("Club Gricel Tango Argentina")


var hospital = L.marker([-34.6216266,-58.4078492], {icon: redIcon}).addTo(mapfierro);
hospital.bindPopup("Hospital César Milstein")

var comisaria = L.marker([-34.6362797,-58.4010189], {icon: greyIcon}).addTo(mapfierro);
comisaria.bindPopup("Policía de la Ciudad Comisaría 32")


mapfierro.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapfierro)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapfierro);
}

mapfierro.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapfierro.on('locationerror', onLocationError);