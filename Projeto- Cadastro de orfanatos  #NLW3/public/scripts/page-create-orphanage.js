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
})





// create and add marker
let marker; //inicializa a variavel fora da função pra ela guardar a long e lat mesmo dps q clicar


map.on('click' , (event) => { //quando acontece o click
    const lat = event.latlng.lat;//guardando a latitude
    const lng = event.latlng.lng;//guardando a longitudo

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;

     //remove icon
     marker && map.removeLayer(marker)//cada vez que clicar ele verifica se tem algo no marker e remove

    // add icon layer
    marker=L.marker([lat,lng], {icon} )
    .addTo(map) // se o marker estiver vazio, ele adiciona as coordenadas de onde foi clicado

   
})


//add o campo de fotos

function addPhotoField(){
    //pegar o container de fotos #iamges
    const container=document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer= document.querySelectorAll('.new-upload')
    //realizar p clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true) //para começar do valor zero e clonar o que foi capturado

    // verificar se o campo estiver vazio,se sim , nao adicionar ao container
    const input = newFieldContainer.children[0]

    if (input.value ==""){ //verifica se o campo ja foi digitado ou esta vazio , se estiver vazio nao deixa o clone acontecer
        return //so isso ja faz com que o programa encerre (caso o campo esteja vazio)
    }


    //limpar o campo antes de add o container de imagens
    input.value="" //dps de verificar se esta vazio, ele percebe que não esta vazio e limpa antes de clonar


    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}


function deleteField(event){
    const span = event.currentTarget// a cosntante <>span> , guarda um evento -> quando clicar

    const fieldsContainer= document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <=1){
        //limpar o valor do campo
        span.parentNode.children[0].value="" //ao clicar, coloca como " " o primeiro filho do pai

        return
    }else {
        //deletar o campo
        span.parentNode.remove();
    }     

}


//seleção do sim ou não 

function toggleSelect(event){
    //retirar a classe active dos botoes
        document.querySelectorAll('.button-select button') // procurar dentro da classe .button-select , todos os botões que tem la
        .forEach(function(button){ // forEach significa "para cada" , ou seja vai ler cada botao e remover a classe active
            button.classList.remove('active')
        })    

      //colocar a classe active nos botoes
        const button = event.currentTarget
        button.classList.add('active')


      //atualizar meu input hidden com o valor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')

        input.value=button.dataset.value

        console.log(input)

      
}