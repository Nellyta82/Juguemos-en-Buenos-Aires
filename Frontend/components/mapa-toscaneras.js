var maptoscaneras = L.map('contenedor-mapa-toscaneras').setView([	-34.62759335,  -58.5030691966311], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(maptoscaneras)

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

var marcador = L.marker([-34.6165236, -58.5253909], {icon: greenIcon}).addTo(maptoscaneras);
marcador.bindPopup("Plaza Las Toscaneras de Villa Real")

var circulo = L.marker([-34.6181952, -58.5269378]).addTo(maptoscaneras)
circulo.bindPopup("Natatorio C.N.I.")

var hospital = L.marker([-34.6213554, -58.5255753], {icon: redIcon}).addTo(maptoscaneras);
hospital.bindPopup(" Centro Médico CEMEV")

var comisaria = L.marker([-34.6296169, -58.5243258], {icon: greyIcon}).addTo(maptoscaneras);
comisaria.bindPopup("Comisaría Vecinal 10-B")


maptoscaneras.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(maptoscaneras)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(maptoscaneras);
}

maptoscaneras.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

maptoscaneras.on('locationerror', onLocationError);