var mapemilio = L.map('contenedor-mapa-españa').setView([-34.63333,-58.38333], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapespaña)

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

var marcador = L.marker([-34.5883699, -58.3977807], {icon: greenIcon}).addTo(mapespaña);
marcador.bindPopup("Plaza Teniente General Emilio Mitre")

var circulo = L.marker([-34.5884426, -58.3966635]).addTo(mapemilio)
circulo.bindPopup("Facultad de Ingeniería UBA")

var hospital = L.marker([-34.5891843, -58.4003513], {icon: redIcon}).addTo(mapespaña);
hospital.bindPopup("Sanatorio Anchorena Recoleta")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(mapespaña);
comisaria.bindPopup("Comisaría Comunal 2")


mapespaña.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapespaña)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapespaña);
}

mapespaña.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapespaña.on('locationerror', onLocationError);