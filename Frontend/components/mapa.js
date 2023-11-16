var map = L.map('contenedor-mapa').setView([-34.58308875, -58.3935243201024], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5, maxZoom: 16,
    updateWhenIdle: true,
    reuseTiles: true
}).addTo(map)

var marcador = L.marker([-34.593588, -58.388884]).addTo(map);
marcador.bindPopup("Parque Vicente López")

// var circulo = L.circle([-34.5943317, -58.3910046], {
//     radius: 200,
//     color: "green"
// }).addTo(map)
// circulo.bindPopup("Confiteria Las Esclavas")

if(!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, );
}

var marker, circle;

function getPosition(position){
    // console.log(position)
    var lat = position.coords.latitude
    var long = position.coords.longitude
    var accuracy = position.coords.accuracy

    if(marker) {
        map.removeLayer(marker)
    }

    if(circle) {
        map.removeLayer(circle)
    }

    marker = L.marker([lat, long])
    circle = L.circle([lat, long], {radius: accuracy})

    var featureGroup = L.featureGroup([marker, circle]).addTo(map)

    map.fitBounds(featureGroup.getBounds())

    console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
}

const currentZoom = map.getZoom();
map.locate({setView: true, maxZoom:12});