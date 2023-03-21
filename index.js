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

//ini code maksudnya pas di click play character lgsg masuk ke main page + udah ada gambar player sebagai char terpilih
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

function charSelect1() {
    var playerimg = document.createElement("img");
    playerimg.src = "./asset/duck-player-unscreen.gif";
    var targetDoc = window.open('index.html');
    targetDoc.addEventListener('load', function () {
        var player = targetDoc.document.getElementById('player');
        player.appendChild(playerimg);
    });

}
function charSelect2() {
    var playerimg = document.createElement("img");
    playerimg.src = "./asset/duck-player-unscreen.gif";
    var targetDoc = window.open('index.html');
    targetDoc.addEventListener('load', function () {
        var player = targetDoc.document.getElementById('player');
        player.appendChild(playerimg);
    });
}
function charSelect3() {
    var playerimg = document.createElement("img");
    playerimg.setAttribute("src","./asset/Slime.play.gif");
    var targetDoc = window.location.href = "index.html";
    targetDoc.addEventListener('load', function () {
        var player = targetDoc.document.getElementById('player');
        player.appendChild(playerimg);
    });
}