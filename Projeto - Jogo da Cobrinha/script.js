let canvas =document.getElementById("snake")//recuperando o elemento
let context=canvas.getContext("2d")// dizendo q ele é um elemento com contexto 2d
let box =32 //32 pixels
let snake=[]
snake[0]={
    x:8*box,
    y:8*box
}



function criarBG(){
    context.fillStyle="lightgreen"
    context.fillRect(0,0,16*box,16*box) //(x,y,altura,largura)  \\ x=horizontal    y=vertical  
    //                   16*box=512 ou seja 100% do box definido no html
}

function criarCorbrinha(){
    for(i=0;i<snake.length;i++){
        context.fillStyle="green"
        context.fillRect(snake[i].x,snake[i].y,box,box)
    }
}


criarBG();
criarCorbrinha();

