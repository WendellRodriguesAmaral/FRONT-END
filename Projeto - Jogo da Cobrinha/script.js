let canvas =document.getElementById("snake")//recuperando o elemento
let context=canvas.getContext("2d")// dizendo q ele é um elemento com contexto 2d
let box =32 //32 pixels
let snake=[]

snake[0]={
    x:8*box,
    y:8*box
}



let direction = "right"
let food={//coordenadas de onde a comida vai aparecer
    x:Math.floor(Math.random()*15+1)*box, //Math.floor retira ponto flutuante do math.random
    y:Math.floor(Math.random()*15 +1)*box
}


let pont=document.getElementsByTagName("span")[0]
// console.log(pont)
let num=0

function criarBG(){
    context.fillStyle="lightgreen"// estilo do contexto criado
    context.fillRect(0,0,16*box,16*box) //(x,y,altura,largura)  \\ x=horizontal    y=vertical  
    //                   16*box=512 ou seja 100% do box definido no html
}

function criarCorbrinha(){
    for(i=0;i<snake.length;i++){
        context.fillStyle="green"
        context.fillRect(snake[i].x,snake[i].y,box,box)
    }
}

function drawFood(){
    context.fillStyle="Red"
    context.fillRect(food.x ,food.y,box,box)
}


document.addEventListener("keydown",update); // esperando o evento de apertar a tecla

function update(event){
    if(event.keyCode ==37 && direction != "right") direction="left";
    if(event.keyCode==38 && direction != "down") direction="up";
    if(event.keyCode==39 && direction != "left") direction="right"
    if(event.keyCode==40 && direction != "up") direction="down"


}

function iniciarJogo(){
    for(i=1;i<snake.length;i++){
        if(snake[0].x== snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo) // parar a variavel "jogo"
            document.location.reload(false)//false recarrega o cache tbm, true recarrega sem o cache
            alert(`Fim de Jogo !\nSua pontuação foi de ${num} pontos.`)
        }
    }

    
    criarBG();
    criarCorbrinha();
    drawFood();
    let snakeX=snake[0].x
    let snakeY=snake[0].y

    if(direction=="right") snakeX+=box; //dependendo do lado, adiciona mais um quadrado, "pedaço do corpo"
    if(direction=="left") snakeX -=box;
    if(direction=="up") snakeY-= box;
    if(direction=="down") snakeY+=box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else {
        food.x=Math.floor(Math.random()*15+1)*box //Math.floor retira ponto flutuante do math.random
        food.y=Math.floor(Math.random()*15 +1)*box
        num+=1
        pont.innerHTML=num
    }
    // snake.pop();

    let newHead={//posição da cabeça da cobra
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead);//o metodo unshift add o elemento a posição 0 de um array

    if(snake[0].x > 15*box && direction=="right") snake[0].x =0; // se a posição horizontal dela passar de 480px, sua posição volta a ser 0
    if(snake[0].x < 0 && direction =="left") snake[0].x=16*box;
    if(snake[0].y > 15*box && direction =="down") snake[0].y=0;
    if(snake[0].y < 0 && direction=="up") snake[0].y=16*box;


}


let jogo= setInterval(iniciarJogo,150) //"atualizar" a cada 150ms, ou seja a cada 100ms executa iniciaJogo



