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