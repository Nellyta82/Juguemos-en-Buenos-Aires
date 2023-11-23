var mapteran = L.map('contenedor-mapa-teran').setView([	-34.62759335,  -58.5030691966311], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapteran)

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

var marcador = L.marker([-34.6206776, -58.5196433], {icon: greenIcon}).addTo(mapteran);
marcador.bindPopup("Parque Dr. Juan B.Terán")

var circulo = L.marker([-34.6196569, -58.5181555]).addTo(mapteran)
circulo.bindPopup("Bonafide")

var hospital = L.marker([-34.6253441, -58.5079185], {icon: redIcon}).addTo(mapteran);
hospital.bindPopup(" Hospital General de Agudos Dalmacio Vélez Sarsfield")

var comisaria = L.marker([-34.6296169, -58.5243258], {icon: greyIcon}).addTo(mapteran);
comisaria.bindPopup("Comisaría Vecinal 10-B")


mapteran.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapteran)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapvillareal);
}

mapteran.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapteran.on('locationerror', onLocationError);