var mapachaval = L.map('contenedor-mapa-achaval').setView([-34.63417413050152, -58.44526864685398], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapachaval)

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

var marcador = L.marker([-34.63417413050152, -58.44526864685398], {icon: greenIcon}).addTo(mapachaval);
marcador.bindPopup("Parque Chacabuco zona de Juegos Achaval")

var circulo = L.marker([-34.63342419128636, -58.445169986897945]).addTo(mapachaval)
circulo.bindPopup("Escuela Primaria Común N° 01 - Chacabuco")



var hospital = L.marker([-34.63136592308513, -58.448835053276454], {icon: redIcon}).addTo(mapachaval);
hospital.bindPopup("Centro Medico Cuinsa")

var comisaria = L.marker([-34.630398428354255, -58.45822978796993], {icon: greyIcon}).addTo(mapachaval);
comisaria.bindPopup("Comisaría Comunal 7")


mapachaval.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapachaval)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapachaval);
}

mapachaval.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapachaval.on('locationerror', onLocationError);
