let health = document.getElementById("healthval");
let stamina = document.getElementById("staminaval");
let food = document.getElementById("foodval");
let mental_health = document.getElementById("mental_health");

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

    if (min >= 12 && min <= 23) {
        min = min - 12;
    } else if (min >= 24 && min <= 35) {
        min = min - 24;
    } else if (min >= 36 && min <= 47) {
        min = min - 36;
    } else if (min >= 48 && min <= 59) {
        min = min - 48;
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
}
setInterval(displayTime, 10);
//clockscript  
function character() {
    const summon = localStorage.getItem('images');
    const pet = document.getElementById("player");
    pet.createElement("img");
    pet.setAttribute("src", summon);
    pet.setAttribute("id", "char");
 
}

