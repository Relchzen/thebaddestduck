let health = document.getElementById("health");
let stamina = document.getElementById("stamina");
let food = document.getElementById("food");
let mental_health = document.getElementById("mental_health");


function getval(){
    health.value -= 5;
    stamina.value -= 10;
    food.value -= 5;
    mental_health.value -= 1;
}

function incVal(){
    health.value += 5;
    stamina.value += 10;
    food.value += 5;
    mental_health.value += 1;
}