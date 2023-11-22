var mapbanff = L.map('contenedor-mapa-banff').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapbanff)

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

var marcador = L.marker([-34.6284895,-58.5212847], {icon: greenIcon}).addTo(mapbanff);
marcador.bindPopup("Plaza Ciudad de Banff")

var circulo = L.marker([-34.62585,-58.5225933]).addTo(mapbanff)
circulo.bindPopup("Ateneo Popular de Versailles")

var hospital = L.marker([-34.6253337,-58.5079123], {icon: redIcon}).addTo(mapbanff);
hospital.bindPopup("Hospital General de Agudos Dalmacio Vélez Sarsfield")

var comisaria = L.marker([-34.6295819,-58.5243601], {icon: greyIcon}).addTo(mapbanff);
comisaria.bindPopup("Comisaría Vecinal 10-B")


mapbanff.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapbanff)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapbanff);
}

mapbanff.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapbanff.on('locationerror', onLocationError);