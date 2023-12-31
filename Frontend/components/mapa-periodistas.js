var mapperiodistas= L.map('contenedor-mapa-periodistas').setView([-34.62153376696705, -58.47319404685467], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapperiodistas)

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

var marcador = L.marker([-34.62153376696705, -58.47319404685467], {icon: greenIcon}).addTo(mapperiodistas);
marcador.bindPopup("Plaza de los Periodistas")

var circulo = L.marker([-34.6158447862359, -58.4669871576766]).addTo(mapperiodistas)
circulo.bindPopup("Centro Cultural La Paternal")



var hospital = L.marker([-34.623737412736446, -58.46963343151366], {icon: redIcon}).addTo(mapperiodistas);
hospital.bindPopup("Hospital General de Agudos Dr. Teodoro Álvarez")


var comisaria = L.marker([-34.61593876281608, -58.464965692877364], {icon: greyIcon}).addTo(mapperiodistas);
comisaria.bindPopup("Comisaría Vecinal 7-C")


mapperiodistas.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapperiodistas)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapperiodistas);
}

mapperiodistas.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapperiodistas.on('locationerror', onLocationError);
