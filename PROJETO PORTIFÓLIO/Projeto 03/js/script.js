window.addEventListener("load",() =>{
    const img=document.querySelector(".top-img")    
    img.style.backgroundImage= `url(./img/arvores.jpg)`


    function LoadPhotos(){

        const imgW=img.offsetWidth//largura do elemento
        const imgH=img.offsetHeight//altura do elemento

         fetch(`https://picsum.photos/${imgW}/${imgH}`).then((photo)=>{//consumindo a api q retorna um json
             let image=photo.url //acessando a propriedade url
            //  console.log(image)
            img.style.backgroundImage= `url(${image})`
            img.style.transition= "3s"
            img.style.backgroundRepeat="no-repeat"

            })
    }
   setInterval(LoadPhotos,5000);   

})