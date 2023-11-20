var mapmiguel = L.map('contenedor-mapa-miguel').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapmiguel)

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

var marcador = L.marker([-34.5974119, -58.4074833], {icon: greenIcon}).addTo(mapmiguel);
marcador.bindPopup("Plaza Monseñor Miguel de Andrea")

var circulo = L.marker([-34.6017689, -58.4080916]).addTo(mapmiguel)
circulo.bindPopup("Museo Casa Carlos Gardel")

var hospital = L.marker([-34.594611, -58.4112668], {icon: redIcon}).addTo(mapmiguel);
hospital.bindPopup(" Hospital General de Niños R. Gutiérrez")

var comisaria = L.marker([-34.5940479, -58.4068466], {icon: greyIcon}).addTo(mapmiguel);
comisaria.bindPopup("Policía de la Ciudad - Comisaría Vecinal 2-B")


mapmiguel.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapmiguel)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapmiguel);
}

mapmiguel.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapmiguel.on('locationerror', onLocationError);