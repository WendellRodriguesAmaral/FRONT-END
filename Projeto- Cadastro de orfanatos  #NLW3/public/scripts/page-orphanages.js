// tipos de dados
//String ""
//number 01
//object {}
//Boolean true or false
//array  []

//create map
const map = L.map('mapid').setView([-19.8201169,-43.951541], 16); // [latitude,longitude] , (zoom)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon=L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize :[50,60],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})


//create popup overlay
const popup=L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth:240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')







// criando e add um marker
L.marker([-19.8201169,-43.951541],{icon}).addTo(map)
.bindPopup(popup)
   
