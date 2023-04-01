const characters = document.querySelectorAll(".charactercard");
let activeCard = null;

// buat pilih karakter
characters.forEach(function(char) {
  char.addEventListener("click", function() {
    const getName = this.getAttribute("name");
    this.classList.add("charactive");

    const image = this.getAttribute("src");
    const desc = this.getAttribute("desc");
    button = document.getElementById("characterbutton");

    button.removeAttribute("hidden");
    
    if (activeCard && activeCard !== this) {
      activeCard.classList.remove("charactive");
    }
    activeCard = this;
    previewChar(image);

    namebox = document.getElementById("charactername");
    namebox.innerHTML = getName;

    descbox = document.getElementById("characterdescription");
    descbox.innerHTML = desc;
  });
});

// buat dikasih liat karakternya
function previewChar(image) {
    preview = document.getElementById("previewImage");

    newImage = document.createElement("img");
    newImage.setAttribute("src", image);
    newImage.setAttribute("id", "characterImage");

    if(!preview.hasChildNodes()) {
        preview.appendChild(newImage);
    } else {
        document.getElementById("characterImage").setAttribute("src", image);
    }
    window.localStorage.setItem("image", image);
}

$("#characterbutton").click(function() {
  const petname = document.getElementById("charactername");
  if(petname.value) {
    window.localStorage.setItem("charactername", petname.value);
  window.location.href="main.html";
  }
});

$("#characterbutton").click(function(){
    const pet = document.getElementById("previewImage");
    if(pet.value){
      window.localStorage.setItem("previewImage", pet.value);
      window.location.href = "main.html";
    }
});
