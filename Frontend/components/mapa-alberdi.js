var mapalberdi = L.map('contenedor-mapa-alberdi').setView([-34.65362965,  -58.4968158795579], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapalberdi)

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

var marcador = L.marker([-34.6591617, -58.5008839], {icon: greenIcon}).addTo(mapalberdi);
marcador.bindPopup("Parque Alberdi")

var circulo = L.marker([-34.6625148, -58.5001761]).addTo(mapalberdi)
circulo.bindPopup("Feria de Mataderos")

var hospital = L.marker([-34.6557957, -58.506685], {icon: redIcon}).addTo(mapalberdi);
hospital.bindPopup("Ex Hospital Salaberry")

var comisaria = L.marker([-34.6619633, -58.5014985], {icon: greyIcon}).addTo(mapalberdi);
comisaria.bindPopup("Policía de la Ciudad Comisaría Comunal 9A")


mapalberdi.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapalberdi)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapalberdi);
}

mapalberdi.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapalberdi.on('locationerror', onLocationError);