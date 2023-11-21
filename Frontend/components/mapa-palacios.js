var mappalacios = L.map('contenedor-mapa-palacios').setView([-34.65362965,  -58.4968158795579], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mappalacios)

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

var marcador = L.marker([-34.656823, -58.5222947], {icon: greenIcon}).addTo(mappalacios);
marcador.bindPopup("Plazoleta Alfredo Lorenzo Palacios")

var circulo = L.marker([-34.6570721, -58.5208345]).addTo(mappalacios)
circulo.bindPopup("Plaza La Monito")

var hospital = L.marker([-34.6488717, -58.5155112], {icon: redIcon}).addTo(mappalacios);
hospital.bindPopup("Hospital Donación Francisco Santojanni")

var comisaria = L.marker([-34.6642177, -58.522231], {icon: greyIcon}).addTo(mappalacios);
comisaria.bindPopup("Comisaría La Matanza Oeste 4° Lomas Del Mirador")


mappalacios.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mappalacios)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mappalacios);
}

mappalacios.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mappalacios.on('locationerror', onLocationError);