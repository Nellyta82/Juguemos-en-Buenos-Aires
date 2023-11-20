var mapbernardo = L.map('contenedor-mapa-bernardo').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapbernardo)

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

var marcador = L.marker([-34.5992486, -58.3983472], {icon: greenIcon}).addTo(mapbernardo);
marcador.bindPopup("Plaza Dr. Bernardo Houssay")

var circulo = L.marker([-34.5993982, -58.3983478]).addTo(mapbernardo)
circulo.bindPopup("Cinepolis Plaza Houssay")

var hospital = L.marker([-34.5993065, -58.400951], {icon: redIcon}).addTo(mapbernardo);
hospital.bindPopup("Hospital de Clínicas")

var comisaria = L.marker([-34.6033366, -58.3949022], {icon: greyIcon}).addTo(mapbernardo);
comisaria.bindPopup("Comisaría Comunal 3-C")


mapbernardo.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapbernardo)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapbernardo);
}

mapbernardo.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapbernardo.on('locationerror', onLocationError);