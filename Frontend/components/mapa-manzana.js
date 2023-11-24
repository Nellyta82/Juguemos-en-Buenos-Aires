var mapmanzana = L.map('contenedor-mapa-manzana66').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapmanzana)

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

var marcador = L.marker([-34.6140586,-58.4059797], {icon: greenIcon}).addTo(mapmanzana);
marcador.bindPopup("Plaza Manzana 66")

var circulo = L.marker([-34.6144848,-58.4049461]).addTo(mapmanzana)
circulo.bindPopup("Via Giovanni-Heladería")

var hospital = L.marker([-34.6175814,-58.4097423], {icon: redIcon}).addTo(mapmanzana);
hospital.bindPopup(" Hospital General de Agudos José María Ramos Mejía")

var comisaria = L.marker([-34.6042344,-58.4159216], {icon: greyIcon}).addTo(mapmanzana);
comisaria.bindPopup("Comisaría Comunal 5")


mapmanzana.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapmanzana)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapmanzana);
}

mapmanzana.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapmanzana.on('locationerror', onLocationError);