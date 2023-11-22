var mapavellaneda = L.map('contenedor-mapa-avellaneda').setView([-34.65362965,  -58.4968158795579], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapavellaneda)

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

var marcador = L.marker([-34.6443848, -58.4806732], {icon: greenIcon}).addTo(mapavellaneda);
marcador.bindPopup("Parque Avellaneda")

var circulo = L.marker([-34.6459499, -58.4743995]).addTo(mapavellaneda)
circulo.bindPopup("Polideportivo Nicolás Avellaneda")

var hospital = L.marker([-34.6487604, -58.4890118,], {icon: redIcon}).addTo(mapavellaneda);
hospital.bindPopup("Hospital San Cayetano")

var comisaria = L.marker([-34.6414421, -58.4765116], {icon: greyIcon}).addTo(mapavellaneda);
comisaria.bindPopup("Comisaría vecinal 9-C")


mapavellaneda.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapavellaneda)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapavellaneda);
}

mapavellaneda.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapavellaneda.on('locationerror', onLocationError);