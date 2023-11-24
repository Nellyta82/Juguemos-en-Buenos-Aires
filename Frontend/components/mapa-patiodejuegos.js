var mappatiodejuegos = L.map('contenedor-mapa-patiodejuegos').setView([-34.61689428954453, -58.44101439103092], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mappatiodejuegos)

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

var marcador = L.marker([-34.61689428954453, -58.44101439103092], {icon: greenIcon}).addTo(mappatiodejuegos);
marcador.bindPopup("Patio de Juegos Para Niños")

var circulo = L.marker([-34.61661027320222, -58.43986220095579]).addTo(mappatiodejuegos)
circulo.bindPopup("Universidad Argentina John F. Kennedy")


var hospital = L.marker([-34.61395925568913, -58.43904613151426], {icon: redIcon}).addTo(mappatiodejuegos);
hospital.bindPopup("Sanatorio Dr Julio Méndez")

var comisaria = L.marker([-34.61879898929357, -58.45334583795984], {icon: greyIcon}).addTo(mappatiodejuegos);
comisaria.bindPopup("Comisaría Vecinal 6-B")


mappatiodejuegos.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapgiordano)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mappatiodejuegos);
}

mappatiodejuegos.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mappatiodejuegos.on('locationerror', onLocationError);