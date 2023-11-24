var mapcanaro = L.map('contenedor-mapa-franciscocanaro').setView([-34.61689428954453, -58.44101439103092], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapcanaro)

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

var marcador = L.marker([-34.6242932,-58.3930317], {icon: greenIcon}).addTo(mapcanaro);
marcador.bindPopup("Plaza Francisco Canaro")

var circulo = L.marker([-34.624564,-58.3918194]).addTo(mapcanaro)
circulo.bindPopup("Biblioteca del Docente")


var hospital = L.marker([-34.6308177,-58.3934318], {icon: redIcon}).addTo(mapcanaro);
hospital.bindPopup("Hospital Garrahan")

var comisaria = L.marker([-34.6225499,-58.3914061], {icon: greyIcon}).addTo(mapcanaro);
comisaria.bindPopup("Comisaría Vecinal 1-C")


mapcanaro.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapcanaro)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapcanaro);
}

mapcanaro.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapcanaro.on('locationerror', onLocationError);