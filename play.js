
let health = document.getElementById("health");
let stamina = document.getElementById("stamina");
let food = document.getElementById("food");
let mental_health = document.getElementById("mental_health");


function getval() {
    health.value -= 5;
    stamina.value -= 10;
    food.value -= 5;
    mental_health.value -= 1;
}

function incVal() {
    health.value += 5;
    stamina.value += 10;
    food.value += 5;
    mental_health.value += 1;
}

function incSleep(){
    sleep.value += 20;
    stamina.value += 10;
    food.value -= 20;
    mental_health.value += 1;
}

function incFood(){
  sleep.value -= 5;
  stamina.value += 10;
  food.value += 10;
  mental_health.value -= 1;
}

function incMed(){
  sleep.value -= 5;
  stamina.value -= 10;
  food.value -= 10;
  mental_health.value += 10;
}

function character(){
  const summon = localStorage.getItem('images');
  const pet = document.getElementById("player");
  pet.createElement("img");
  pet.setAttribute("src", summon);
  pet.setAttribute("id", "char");
}


//ini code maksudnya pas di click play character lgsg masuk ke main page + udah ada gambar pimg sebagai char terpilih
//tapi masih belom muncul gamabrnya, function dah bekerja
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("pimg");
ctx.drawImage(img, 0, 0);
var dataURL = canvas.toDataURL();
localStorage.setItem("pimg", dataURL);

// Page 2
var data = localStorage.getItem("pimg");
var img = document.createElement("img");
img.src = data;
document.body.appendChild(img);

/*function charSelect1() {
    var pimgimg = document.createElement("img");
    pimgimg.src = "./asset/duck-pimg-unscreen.gif";
    var targetDoc = window.open('index.html');
    targetDoc.addEventListener('load', function () {
        var pimg = targetDoc.document.getElementById('pimg');
        pimg.appendChild(pimgimg);
    });

}
function charSelect2() {
    var pimgimg = document.createElement("img");
    pimgimg.src = "./asset/duck-pimg-unscreen.gif";
    var targetDoc = window.open('index.html');
    targetDoc.addEventListener('load', function () {
        var pimg = targetDoc.document.getElementById('pimg');
        pimg.appendChild(pimgimg);
    });
}
function charSelect3() {
    var pimgimg = document.createElement("img");
    pimgimg.setAttribute("src","./asset/Slime.play.gif");
    var targetDoc = window.location.href = "index.html";
    targetDoc.addEventListener('load', function () {
        var pimg = targetDoc.document.getElementById('pimg');
        pimg.appendChild(pimgimg);
    });
}*/

var playground = document.getElementById("sangkar");
var pimg = document.getElementById("pimg");

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = playGround.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  
  function updateGameArea(pimg) {
    playGround.clear();
    pimg.newPos();
    pimg.update();
  }
  
  function moveup() {
    pimg.speedY -= 1;
  }
  
  function movedown() {
    pimg.speedY += 1;
  }
  
  function moveleft() {
    pimg.speedX -= 1;
  }
  
  function moveright() {
    pimg.speedX += 1;
  }

// board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake head

var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];
// food 
var foodX ;
var foodY ;

var gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows *blocksize;
    board.width = cols *blocksize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    //Update();
    setInterval(Update, 1000/10);
}

function Update() {
    if (gameOver){
        return;
    }

    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blocksize, blocksize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length-1; i>0 ; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    for(let i = 0; i<snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }
    //gameover condition
    if (snakeX <0 || snakeX > cols*blocksize || snakeY < 0 || snakeY > rows*blocksize){
        gameOver = true;
        alert("Game Over");
    }
    for (let i = 0; i < snakeBody.length; i++){
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
            alert("Game Over");
        }
    }
}

function changeDirection(e){
    if (e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood(){
    //0-1) *cols -> (0-19.9999) ->(0-19) *25
    foodX = Math.floor(Math.random()* cols) *blocksize;
    foodY = Math.floor(Math.random()* rows) *blocksize;
}