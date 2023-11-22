var maplatinoamericana = L.map('contenedor-mapa-latinoamericana').setView([-34.65362965,  -58.4968158795579], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(maplatinoamericana)

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

var marcador = L.marker([-34.6540383, -58.4779734,], {icon: greenIcon}).addTo(maplatinoamericana);
marcador.bindPopup("Plazoleta Latinoamericana")

var circulo = L.marker([-34.6549608, -58.4744367]).addTo(maplatinoamericana)
circulo.bindPopup("Canchas de Fútbol")

var hospital = L.marker([-34.6487604, -58.4890118], {icon: redIcon}).addTo(maplatinoamericana);
hospital.bindPopup("Hospital San Cayetano")

var comisaria = L.marker([-34.6432553, -58.4619964], {icon: greyIcon}).addTo(maplatinoamericana);
comisaria.bindPopup("Policia De La Ciudad Buenos Aires Ciudad")


maplatinoamericana.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(maplatinoamericana)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(maplatinoamericana);
}

maplatinoamericana.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

maplatinoamericana.on('locationerror', onLocationError);