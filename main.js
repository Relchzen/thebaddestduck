let health = document.getElementById("healthval");
let stamina = document.getElementById("staminaval");
let food = document.getElementById("foodval");
let mental_health = document.getElementById("mental_health");
let level = document.getElementById("levelval");
var leveling = document.getElementById("levelup");
leveling = 0;

function levelup(){
    if(level.value == 1000){
        level.value -=1000;
        leveling +=1;
        document.getElementById("levelup").innerHTML = leveling;
    }
}

<<<<<<< HEAD
=======
// Mendapatkan elemen progress bar HTML
const progressBar = document.querySelector('#health');

// Memeriksa apakah ada checkpoint progress di local storage
const progressCheckpoint = localStorage.getItem('progressCheckpoint');
if (progressCheckpoint) {
  // Jika ada, mengatur nilai progress bar HTML ke nilai checkpoint
  progressBar.value = progressCheckpoint;
}

// Menyimpan nilai progress bar HTML ke local storage setiap kali nilai berubah
progressBar.addEventListener('change', () => {
  localStorage.setItem('progressCheckpoint', progressBar.value);
});



>>>>>>> 118c1cc34f17a035169af6c301e972951963d37c
function incSleep(){
    stamina.value += 19;
    food.value -= 3;
    level.value +=100;
    levelup()
}

function incFood(){
    food.value += 16;
    level.value +=100;
    levelup()
}

function incMed(){
    health.value += 20;
    level.value +=100;
    levelup()
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

    if (min >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    min = min%12;

    //greet
    if(min >= 4 && min <= 10){
        body.style.backgroundImage = "url(./asset/pixelBG.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG.gif)";;
        greet = "Good Morning!";
    }else if(min >= 11 && min <= 14){
        body.style.backgroundImage = "url(./asset/pixelBG3.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG3.gif)";;
        greet = "Good Afternoon";
    }else if(min >= 15 && min <= 19){
        body.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        greet = "Good Evening";
    }else if (min >= 20 || min <= 3){
        body.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        playground.style.backgroundImage = "url(./asset/pixelBG2.gif)";;
        greet = "Good Night";
    }

    //health
    if(sec == 10 || sec == 20 || sec == 30 || sec == 40 || sec == 50 || sec == 60){
        health.value -= 0.4;
    }
    //stamina
    if(sec == 13 || sec == 24 || sec == 35 || sec == 46 || sec == 57 || sec == 8){
        stamina.value -= 0.4;
    }
    //food
    if(sec == 15 || sec == 20 || sec == 30 || sec == 35 || sec == 50 || sec == 55){
        food.value -= 0.3;
    }
    //mental_health
    if(sec == 11 || sec == 22 || sec == 33 || sec == 44 || sec == 55 || sec == 6){
        mental_health.value -= 0.2;
    }

    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('greeting').innerHTML = greet;
}
setInterval(displayTime, 10);
//clockscript  


