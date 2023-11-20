var maprodriguez = L.map('contenedor-mapa-rodriguez').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(maprodriguez)

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

var marcador = L.marker([-34.5979303, -58.3923852,], {icon: greenIcon}).addTo(maprodriguez);
marcador.bindPopup("Plaza Rodríguez Peña")

var circulo = L.marker([-34.5960887, -58.3942918]).addTo(maprodriguez)
circulo.bindPopup("El Ateneo Grand Splendid")

var hospital = L.marker([-34.5993065, -58.400951], {icon: redIcon}).addTo(maprodriguez);
hospital.bindPopup(" Hospital de Clínicas")

var comisaria = L.marker([-34.6015255, -58.389897], {icon: greyIcon}).addTo(maprodriguez);
comisaria.bindPopup("Policia de la Ciudad")


maprodriguez.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(maprodriguez)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(maprodriguez);
}

maprodriguez.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

maprodriguez.on('locationerror', onLocationError);