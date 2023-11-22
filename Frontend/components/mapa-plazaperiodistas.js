var mapcentenario= L.map('contenedor-mapa-centenario').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapcentenario)

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

var marcador = L.marker([-34.5847906, -58.3896969], {icon: greenIcon}).addTo(mapcentenario);
marcador.bindPopup("Parque Centenario")

var circulo = L.marker([-34.5841625, -58.390646]).addTo(mapcentenario)
circulo.bindPopup("Leloir Fundacion Instituto Leloir lucha contra el Dengue")

// var circulo = L.marker([34.5817742, -58.3941235]).addTo(maprivadavia)
// circulo.bindPopup("Floralis Genérica")

// var circulo = L.marker([-34.5840068,, -58.3931816]).addTo(maprivadavia)
// circulo.bindPopup("Museo Nacional de Bellas Artes")

// var circulo = L.marker([-34.5865211, -58.3917881]).addTo(maprivadavia)
// circulo.bindPopup("Centro Cultural de Recoleta")

var hospital = L.marker([-34.5854054, -58.3949945], {icon: redIcon}).addTo(mapcentenario);
hospital.bindPopup("Hospital Naval Dr. Pedro Mallo")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(mapcentenario);
comisaria.bindPopup("Comisaría Comunal 6-A")


mapcentenario.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapcentenario)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapcentenario);
}

mapcentenario.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapcentenario.on('locationerror', onLocationError);
