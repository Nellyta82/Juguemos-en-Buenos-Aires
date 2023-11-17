var mapthays = L.map('contenedor-mapa-thays').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapthays)

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

var marcador = L.marker([-34.5847906, -58.3896969], {icon: greenIcon}).addTo(mapthays);
marcador.bindPopup("Parque Thays")

var circulo = L.marker([-34.5841625, -58.390646]).addTo(mapthays)
circulo.bindPopup("Facultad de Derecho")

// var circulo = L.marker([34.5817742, -58.3941235]).addTo(mapthays)
// circulo.bindPopup("Floralis Genérica")

// var circulo = L.marker([-34.5840068,, -58.3931816]).addTo(mapthays)
// circulo.bindPopup("Museo Nacional de Bellas Artes")

// var circulo = L.marker([-34.5865211, -58.3917881]).addTo(mapthays)
// circulo.bindPopup("Centro Cultural de Recoleta")

var hospital = L.marker([-34.5854054, -58.3949945], {icon: redIcon}).addTo(mapthays);
hospital.bindPopup("Sanatorio Agote")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(mapthays);
comisaria.bindPopup("Comisaría Comunal 2")


mapthays.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapthays)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapthays);
}

mapthays.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapthays.on('locationerror', onLocationError);
