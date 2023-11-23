var mapangel = L.map('contenedor-mapa-angel').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapangel)

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

var marcador = L.marker([-34.5847906, -58.3896969], {icon: greenIcon}).addTo(mapangel);
marcador.bindPopup("Plaza-del-angel")

var circulo = L.marker([-34.5841625, -58.390646]).addTo(mapangel)
circulo.bindPopup("Escuela Primaria Común N° 25 - República de Guatemala")


var hospital = L.marker([-34.5854054, -58.3949945], {icon: redIcon}).addTo(mapangel);
hospital.bindPopup("Clínica de la Trinidad Ramos Mejias")

var comisaria = L.marker([-34.5910623, -58.3929271], {icon: greyIcon}).addTo(mapangel);
comisaria.bindPopup("Comisaría Comunal 6")


mapangel.locate({setView: true, maxZoom: 16});


function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapplazadelangel)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapangel);
}

mapangel.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapangel.on('locationerror', onLocationError);
