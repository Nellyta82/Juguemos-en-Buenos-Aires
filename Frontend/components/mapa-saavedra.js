var mapsaavedra= L.map('contenedor-mapa-saavedra').setView([-34.61806808897534, -58.43366246566414], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapsaavedra)

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

var marcador = L.marker([-34.61806808897534, -58.43366246566414], {icon: greenIcon}).addTo(mapsaavedra);
marcador.bindPopup("Parque Saavedra")

var circulo = L.marker([-34.61813679126228, -58.43521953336043]).addTo(mapsaavedra)
circulo.bindPopup("Escuela Normal Superior N° 4  Estanislao Severo Zeballos")


var hospital = L.marker([-34.60975179821313, -58.43781949103131], {icon: redIcon}).addTo(mapsaavedra);
hospital.bindPopup("Hospital General de Agudos Carlos G Durand")

var comisaria = L.marker([-34.60895810890418, -58.43939667569055], {icon: greyIcon}).addTo(mapsaavedra);
comisaria.bindPopup("Comisaría Vecinal 6-A")


mapsaavedra.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapsaavedra)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapsaavedra);
}

mapsaavedra.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapsaavedra.on('locationerror', onLocationError);
