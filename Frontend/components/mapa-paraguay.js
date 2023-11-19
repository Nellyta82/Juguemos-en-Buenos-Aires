var mapparaguay = L.map('contenedor-mapa-paraguay').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapparaguay)

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

var marcador = L.marker([-34.5886955, -58.3986415], {icon: greenIcon}).addTo(mapparaguay);
marcador.bindPopup("Plaza República del Paraguay")

var circulo = L.marker([-34.5883699, -58.3977807]).addTo(mapparaguay)
circulo.bindPopup("Plaza Teniente General Emilio Mitre")

var hospital = L.marker([-34.5891131, -58.399917], {icon: redIcon}).addTo(mapparaguay);
hospital.bindPopup("Sanatorio Anchorena Recoleta")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(mapparaguay);
comisaria.bindPopup("Comisaría Comunal 2")


mapparaguay.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapparaguay)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapparaguay);
}

mapparaguay.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapparaguay.on('locationerror', onLocationError);