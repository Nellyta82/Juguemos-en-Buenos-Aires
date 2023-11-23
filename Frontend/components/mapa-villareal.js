var mapvillareal = L.map('contenedor-mapa-villareal').setView([	-34.62759335,  -58.5030691966311], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 15,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(mapvillareal)

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

var marcador = L.marker([-34.6203413, -58.5281554], {icon: greenIcon}).addTo(mapvillareal);
marcador.bindPopup("Parque Villa Real")

var circulo = L.marker([-34.6207472, -58.5264286]).addTo(mapvillareal)
circulo.bindPopup("Fundación Museo del Automóvil")

var hospital = L.marker([-34.6213554, -58.5255753], {icon: redIcon}).addTo(mapvillareal);
hospital.bindPopup(" Centro Médico CEMEV")

var comisaria = L.marker([-34.6296169, -58.5243258], {icon: greyIcon}).addTo(mapvillareal);
comisaria.bindPopup("Comisaría Vecinal 10-B")


mapvillareal.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mapvillareal)
        .bindPopup("Esta es tú ubicación").openPopup();

    L.circle(e.latlng, radius).addTo(mapvillareal);
}

mapvillareal.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mapvillareal.on('locationerror', onLocationError);