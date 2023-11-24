var mapvelasco = L.map('contenedor-mapa-velascoibarra').setView([	-34.62759335,  -58.5030691966311], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapvelasco)

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

var marcador = L.marker([34.6172504,-58.4038444], {icon: greenIcon}).addTo(mapvelasco);
marcador.bindPopup("Plaza Velasco Ibarra")

var circulo = L.marker([-34.6189128,-58.4022503]).addTo(mapvelasco)
circulo.bindPopup("Centro Salamanca Recreativo Cultural y S")

var hospital = L.marker([-34.6178418,-58.4097771], {icon: redIcon}).addTo(mapvelasco);
hospital.bindPopup(" Hospital General de Agudos José María Ramos Mejía")

var comisaria = L.marker([-34.6170128,-58.409249], {icon: greyIcon}).addTo(mapvelasco);
comisaria.bindPopup("Comisaría Vecinal 3-A Anexo")


mapvelasco.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapvelasco)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapvelasco);
}

mapvelasco.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapvelasco.on('locationerror', onLocationError);