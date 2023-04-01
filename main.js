function character(){
    const summon = localStorage.getItem('images');
    const pet = document.getElementById("player");
    pet.createElement("img");
    pet.setAttribute("src", summon);
    pet.setAttribute("id", "char");
  }