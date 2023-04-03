let health = document.getElementById("healthval");
let stamina = document.getElementById("staminaval");
let food = document.getElementById("foodval");
let mental_health = document.getElementById("mental_health");
let xpbar = document.getElementById("levelbar");


function levelup(){
    var levelplayer = document.getElementById("levelplayer");

    var level = Number(levelplayer.getAttribute("level"));
    var maxxp = Number(xpbar.getAttribute("max"));
    var xp = xpbar.value;
    while(xp >= maxxp) {
        xp -= maxxp;
        maxxp += 500;
        level += 1;
        levelplayer.innerHTML = level;
        xpbar.setAttribute("max", maxxp);
        levelplayer.setAttribute("level", level);
        xpbar.value = xp;
        window.localStorage.setItem("xp", xp);
        window.localStorage.setItem("maxxp", maxxp);
        window.localStorage.setItem("level", level);
        
        if(level >= 1 && level <= 5) {
            var summon = window.localStorage.getItem("image");
        } else if(level > 5 && level <= 10) {
            var summon = window.localStorage.getItem("secondform");
        } else if(level > 10) {
            var summon = window.localStorage.getItem("thirdform");
        }
        document.getElementById("player").setAttribute("src", summon);
    }

}

// // Mendapatkan elemen progress bar HTML
// const progressBar = document.querySelector('#health');

// // Memeriksa apakah ada checkpoint progress di local storage
// const progressCheckpoint = localStorage.getItem('progressCheckpoint');
// if (progressCheckpoint) {
//   // Jika ada, mengatur nilai progress bar HTML ke nilai checkpoint
//   progressBar.value = progressCheckpoint;
// }

// // Menyimpan nilai progress bar HTML ke local storage setiap kali nilai berubah
// progressBar.addEventListener('change', () => {
//   localStorage.setItem('progressCheckpoint', progressBar.value);
// });

function incSleep(){
    stamina.value += 190;
    window.localStorage.setItem("stamina", stamina.value);
    food.value -= 30;
    window.localStorage.setItem("food", food.value);
    xpbar.value +=100;
    window.localStorage.setItem("xp", xpbar.value);
    levelup()
}

function incFood(){
    food.value += 160;
    window.localStorage.setItem("food", food.value);

    xpbar.value +=100;
    window.localStorage.setItem("xp", xpbar.value);
    levelup()
}

function incMed(){
    health.value += 200;
    window.localStorage.setItem("health", health.value);
    xpbar.value +=100;
    window.localStorage.setItem("xp", xpbar.value);
    levelup()
}

function incMental(){
    mental_health.value += 200;
    window.localStorage.setItem("mental_health",mental_health.value);
    xpbar.value += 200;
    window.localStorage.setItem("xp", xpbar.value);
    stamina.value -= 100;
    window.localStorage.setItem("stamina", stamina.value);
    food.value -= 100;
    window.localStorage.setItem("food", food.value);
    levelup()
}

function spawnPoop(){
    let poop = document.getElementById("poop");
    poop.setAttribute("img", "assets/money-cash.gif");
}

//clockscript
function displayTime() {
    var dateTime = new Date();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    var greet = document.getElementById('greeting');
    const body = document.body
    const playground = document.getElementById("main")


    min = min%24;

    //greet
    if(min >= 0 && min <= 11){
        session.innerHTML = 'AM';
        body.style.backgroundImage = "url(./asset/pixelBG.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG.gif)";;
        greet = "Good Morning!";
    }else if(min >= 12 && min <= 14){
        session.innerHTML = 'PM';
        body.style.backgroundImage = "url(./asset/pixelBG3.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG3.gif)";;
        greet = "Good Afternoon";
    }else if(min >= 15 && min <= 18){
        session.innerHTML = 'PM';
        body.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        greet = "Good Evening";
    }else if (min >= 19 || min <= 23){
        session.innerHTML = 'PM';
        body.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        greet = "Good Night";
    }

    //health
    if(sec == 10 || sec == 20 || sec == 30 || sec == 40 || sec == 50 || sec == 60){
        health.value -= 0.4;
        window.localStorage.setItem('health', health.value);
    }
    //stamina
    if(sec == 13 || sec == 24 || sec == 35 || sec == 46 || sec == 57 || sec == 8){
        stamina.value -= 0.4;
        window.localStorage.setItem('stamina', stamina.value);
    }
    //food
    if(sec == 15 || sec == 20 || sec == 30 || sec == 35 || sec == 50 || sec == 55){
        food.value -= 0.3;
        window.localStorage.setItem("food", food.value);
    }
    //mental_health
    if(sec == 11 || sec == 22 || sec == 33 || sec == 44 || sec == 55 || sec == 6){
        mental_health.value -= 0.2;
        window.localStorage.setItem('mental_health',mental_health.value);
    }

    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('greeting').innerHTML = greet;
}
setInterval(displayTime, 10);
//clockscript  

