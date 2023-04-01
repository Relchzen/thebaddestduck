let health = document.getElementById("healthval");
let stamina = document.getElementById("staminaval");
let food = document.getElementById("foodval");
let mental_health = document.getElementById("mental_health");

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

    if(sec == 10 || sec == 20 || sec == 30 || sec == 40 || sec == 50){
        health.value -= 1;
        stamina.value -= 1;
        food.value -= 1;
        mental_health.value--;
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
