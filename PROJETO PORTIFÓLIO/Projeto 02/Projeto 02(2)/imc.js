window.addEventListener("load",()=>{ // se quizer usar o "load" , tem q usar o window no lugar do document
// document.addEventListener("DOMContentLoaded",()=>{  ---->  outra forma de usar


    let tituloIMC=document.querySelector("section.imc-title")
    let resultadoIMC=document.querySelector("section.imc-result")
    let footerIMC=document.querySelector("section.imc-footer")


    const masks ={
        altura(valor){
            return valor.replace(/\D/g,"").replace(/(\d{1})(\d)/, "$1,$2")//primeiro aceitando somente digitos e dps colocando a virgula apos o primeiro digito
        },
        peso(valor){
            if(valor.length > 5){// caso o usuario tenta mais de 100 kg por exemplo
                return valor.replace(/\D/g,"").replace(/(\d{3})(\d)/, "$1,$2")// primeiro replace trocando caracteres por ""
            }else{
                return valor.replace(/\D/g,"").replace(/(\d{2})(\d)/, "$1,$2")//o cifrao serve para que o valor fique identico ao especificado
            }
        }
    }
  


    document.querySelectorAll("input").forEach((input)=>{// ja recuperando os elementos e fazendo o foreach
        const atr = input.dataset.mask// recuperando o valor do atributo customizado pelo NOME q foi definido no html, 
        // console.log("teste" , atr)
        input.addEventListener("keyup",()=>{ // fica escutando o "keyup" (aperta e SOLTAR a tecla)
            input.value=masks[atr](input.value)//o valor do input recebe o retorno da função que ele esta acessando dentro do obj "masks". Obs: esta acessando o metodo do obj atraves da chave "masks[atr]"
        })
        
    })


    document.querySelector("button").addEventListener("click" , ()=>{
        const altura =parseFloat(document.querySelector("input[data-mask='altura']").value.replace(",","."))
        const peso = parseFloat(document.querySelector("input[data-mask='peso']").value.replace(",","."))
        // console.log(inpt1,inpt2)
        
        calcIMC(altura,peso)// chamando a função      
    })   
    


    let h1=document.createElement("h1")// criando um elemento h1
    let input =document.createElement("input")
    let foot=document.createElement("h2")
    input.setAttribute("id", "result-imc")
    input.setAttribute("type", "text")
    input.setAttribute("readonly","true")

    function calcIMC (altura,peso){
        const imc= peso/altura**2
        if(imc <= 18.59){
            tituloIMC.appendChild(h1)//atribuindo h1 como filho da div titulo
            input.value=imc.toFixed(1)
            resultadoIMC.appendChild(input)            
            h1.innerText="Seu IMC é: "
            footerIMC.appendChild(foot)
            foot.innerText=`Você está abaixo do peso. \u{1F633}`
        }
        if(imc >= 18.60 && imc <= 24.99){
            tituloIMC.appendChild(h1)//atribuindo h1 como filho da div titulo
            input.value=imc.toFixed(1)
            resultadoIMC.appendChild(input) 
            h1.innerText="Seu IMC é:"
            footerIMC.appendChild(foot)
            foot.innerText=`Peso ideal, Parabéns. \u{1F604}`
        }
        if(imc >=25 && imc <=29.9){
            tituloIMC.appendChild(h1)//atribuindo h1 como filho da div titulo
            input.value=imc.toFixed(1)
            resultadoIMC.appendChild(input) 
            h1.innerText="Seu IMC é:"
            footerIMC.appendChild(foot)
            foot.innerText=`Você está levemente acima do peso. \u{1F61F}`
        }
        if(imc >=30 && imc<=34.99){
            tituloIMC.appendChild(h1)//atribuindo h1 como filho da div titulo
            input.value=imc.toFixed(1)
            resultadoIMC.appendChild(input) 
            h1.innerText="Seu IMC é: "
            footerIMC.appendChild(foot)
            foot.innerText=`Você está com obesidade grau 1. \u{1F627}`
        }
        if(imc >=35 && imc <=39.99 ){
            tituloIMC.appendChild(h1)//atribuindo h1 como filho da div titulo
            input.value=imc.toFixed(1)
            resultadoIMC.appendChild(input) 
            h1.innerText="Seu IMC é: "
            footerIMC.appendChild(foot)
            foot.innerText=`Você está com obesidade severa. \u{1F630}`
        }
        if(imc >=40){
            tituloIMC.appendChild(h1)//atribuindo h1 como filho da div titulo
            input.value=imc.toFixed(1)
            resultadoIMC.appendChild(input) 
            h1.innerText="Seu IMC é:"
            footerIMC.appendChild(foot)
            foot.innerText=`Você está com obesidade mórbida. \u{1F631} `
        }

    }
})