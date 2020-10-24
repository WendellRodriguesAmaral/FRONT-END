// tipos de dados
//String ""
//number 01
//object {}
//Boolean true or false
//array  []


const options={ //DEFININDO QUAIS OPÇÕES PARA MEXER NO MAPA    
    touchZoom:false,
    doubleClickZoom:false,
    zoomControl:false
}

//create map
const map = L.map('mapid',options).setView([-19.8201169,-43.951541], 16); // [latitude,longitude] , (zoom)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon=L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize :[50,60],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})


// criando e add um marker
L.marker([-19.8201169,-43.951541],{icon}).addTo(map)
   
/*image galery FAZER AS FOTOS TROCAREM DE LUGAR */

function selectImage(event){
    const button=event.currentTarget  //Criação de uma variavel chamada button, e dizendo que o button do html é o (currentTarget), simplesmente "ligando" um ao outro , quando clicado
    console.log(button.children)

    // remover todas as classes .active
    const buttons =document.querySelectorAll(".images button") //esta lendo todas as classes .images button
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar image clicada
    const image = button.children[0]
    const imageContainer =document.querySelector(".orfanage-details>img")


    //atualizar o container de image
    imageContainer.src=image.src

    //adcionar a classe .active para este botao
    button.classList.add('active') // este botao é o primeiro criado no começo da função
    

}