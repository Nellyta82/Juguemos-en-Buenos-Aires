var mapmujica = L.map('contenedor-mapa-mujica').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapmujica)

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

var marcador = L.marker([-34.5895321, -58.3931001], {icon: greenIcon}).addTo(mapmujica);
marcador.bindPopup("Plazoleta Mujica Lainez")

var circulo = L.marker([-34.5865852, -58.3919442]).addTo(mapmujica)
circulo.bindPopup("Centro Cultural de Recoleta")

var hospital = L.marker([-34.5891843, -58.4003513], {icon: redIcon}).addTo(mapmujica);
hospital.bindPopup("Sanatorio Anchorena Recoleta")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(mapmujica);
comisaria.bindPopup("Comisaría Comunal 2")


mapmujica.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapmujica)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapmujica);
}

mapmujica.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapmujica.on('locationerror', onLocationError);