var mapantoine = L.map('contenedor-mapa-antoine').setView([-34.62873236479246, -58.4284834315134], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapantoine)

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

var marcador = L.marker([-34.62873236479246, -58.4284834315134], {icon: greenIcon}).addTo(mapantoine);
marcador.bindPopup("Plazoleta Antoine Saint Exupery")

var circulo = L.marker([-34.62869439505528, -58.42642585032439]).addTo(mapantoine)
circulo.bindPopup("Federación Caballito")


var hospital = L.marker([-34.62478138400989, -58.43244571267876], {icon: redIcon}).addTo(mapantoine);
hospital.bindPopup("Hospital Municipal de Quemados")

var comisaria = L.marker([-34.628067254561394, -58.425129874856914], {icon: greyIcon}).addTo(mapantoine);
comisaria.bindPopup("Comisaría Vecinal 5-B")


mapantoine.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapantoine)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapantoine);
}

mapantoine.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapantoine.on('locationerror', onLocationError);
