vis =document.getElementById("visor")
but=[...document.querySelectorAll(".btn")]
var calc=""
// console.log (but)



function onoff(event) {
    botao=event
    if(event.value=="OFF"){  // se estiver desligado....
        vis.style.display="inline"
        // console.log(botao)
        event.value="ON"
        botao.style.backgroundColor="green"
        // const BtnPar = but.filter(botao => +botao.value%2===0)
        // // retorna um novo array
        // //"+" converte pra number
        // //se nenhum atender a condição retorna um array vazio   
        but.forEach((botao) =>{
            botao.disabled=false
        })
        // for (let i = 0; i < but.length; i++) {
        //     but[i].disabled=false;            
        // }        
        return
        } 
    if(event.value=="ON"){// se estiver ligado
        vis.style.display="none"
        event.value="OFF"
        botao.style.backgroundColor="red"
        for (let i = 0; i < but.length-1; i++) {
            but[i].disabled=true;            
        }  
        vis.value="0"
        return
    }
}

function reset(){ // reseta o visor
    vis.value="0"
}


function calcular(num){//o calculo que é exibido no visor
    // return num
    if(vis.value=="0"){
        vis.value=""
    }
    calc=vis.value+=num
    // console.log(calc)
}

function resultado(){// executando o calculo de fato
    vis.value=eval(calc).toLocaleString('pt-br')
}

function reseta1(){
        calc=vis.value
        vis.value=calc.substring(0, calc.length-1)//Este método extrai os caracteres em uma string entre "início" e "fim", não incluindo o próprio "fim", ou seja não estou apagando de fato, estou so extraindo oq pedi 
        // console.log(vis.value)      
}