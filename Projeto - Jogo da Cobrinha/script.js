let canvas =document.getElementById("snake")//recuperando o elemento
let context=canvas.getContext("2d")// dizendo q ele é um elemento com contexto 2d
let box =32 //32 pixels
let snake=[]
snake[0]={
    x:8*box,
    y:8*box
}
let direction = "right"




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


function iniciarJogo(){
    criarBG();
    criarCorbrinha();
    let snakeX=snake[0].x
    let snakeY=snake[0].y

    if(direction=="right") snakeX+=box;
    if(direction=="left") snakeX -=box;
    if(direction=="up") snakeY-= box;
    if(direction=="down") snakeY+=box;

    snake.pop();

    let newHead={
        x:snakeX,
        y:snakeY
    }

    snake.unshift(newHead);//o metodo unshift add o elemento a posição 0 de um array
    
}

let jogo= setInterval(iniciarJogo,100) //"atualizar" a cada 100ms


