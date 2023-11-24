var mapmayo = L.map('contenedor-mapa-primerodemayo').setView([-34.61806808897534, -58.43366246566414], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapmayo)

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

var marcador = L.marker([-34.6113528,-58.3985749], {icon: greenIcon}).addTo(mapmayo);
marcador.bindPopup("Plaza Primero de Mayo")

var circulo = L.marker([-34.6099145,-58.392693]).addTo(mapmayo)
circulo.bindPopup("Congreso de la Nación Argentina")


var hospital = L.marker([-34.6142715,-58.3910188], {icon: redIcon}).addTo(mapmayo);
hospital.bindPopup("F. Favaloro A. Solis")

var comisaria = L.marker([-34.6032961,-58.3950396], {icon: greyIcon}).addTo(mapmayo);
comisaria.bindPopup("Comisaría Comunal 3-C")


mapmayo.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapmayo)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapmayo);
}

mapmayo.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapmayo.on('locationerror', onLocationError);