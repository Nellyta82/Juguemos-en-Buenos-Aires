var mapmontecastro = L.map('contenedor-mapa-montecastro').setView([	-34.62759335,  -58.5030691966311], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapmontecastro)

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

var marcador = L.marker([-34.6181473,-58.4976305], {icon: greenIcon}).addTo(mapmontecastro);
marcador.bindPopup("Plaza Monte Castro")

var circulo = L.marker([-34.6169296,-58.4980506]).addTo(mapmontecastro)
circulo.bindPopup("Estadio Islas Malvinas")

var hospital = L.marker([-34.6184679,-58.5017256], {icon: redIcon}).addTo(mapmontecastro);
hospital.bindPopup(" Hospital de Rehabilitación Manuel Rocca")

var comisaria = L.marker([-34.6288923,-58.4840728], {icon: greyIcon}).addTo(mapmontecastro);
comisaria.bindPopup("Comisaría Comunal 10")


mapmontecastro.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapmontecastro)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapmontecastro);
}

mapmontecastro.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapmontecastro.on('locationerror', onLocationError);