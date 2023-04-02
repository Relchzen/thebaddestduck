let health = document.getElementById("healthval");
let stamina = document.getElementById("staminaval");
let food = document.getElementById("foodval");
let mental_health = document.getElementById("mental_health");

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



function incSleep(){
    stamina.value += 9;
    food.value -= 30;
    health.value += 6;
    mental_health.value += 2;
}

function incFood(){
    stamina.value += 3;
    food.value += 16;
    health.value -=6;
    mental_health.value += 1;
}

function incMed(){
    stamina.value -= 10;
    food.value -= 10;
    health.value += 20;
    mental_health.value -= 6;
}

//clockscript
function displayTime() {
    var dateTime = new Date();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if (min >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    min = min%12;

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
}
setInterval(displayTime, 10);
//clockscript  


