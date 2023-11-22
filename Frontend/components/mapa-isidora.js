var mapisidora = L.map('contenedor-mapa-isidora').setView([-34.65362965,  -58.4968158795579], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapisidora)

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

var marcador = L.marker([-34.6421753, -58.5134558], {icon: greenIcon}).addTo(mapisidora);
marcador.bindPopup("Plazoleta de Isidora")

var circulo = L.marker([-34.6425457, -58.5126861]).addTo(mapisidora)
circulo.bindPopup("Plaza Larrazabal")

var hospital = L.marker([-34.6488137, -58.5152112], {icon: redIcon}).addTo(mapisidora);
hospital.bindPopup("Hospital Donación Francisco Santojanni")

var comisaria = L.marker([-34.6425136, -58.5288645], {icon: greyIcon}).addTo(mapisidora);
comisaria.bindPopup("Policía de la Ciudad - Destacamento Terminal Liniers")


mapisidora.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapisidora)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapisidora);
}

mapisidora.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapisidora.on('locationerror', onLocationError);