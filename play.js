// Mendapatkan elemen progress bar HTML
const progressBar = document.querySelector('#health');

// Memeriksa apakah ada checkpoint progress di local storage
const progressCheckpoint = localStorage.getItem('progressCheckpoint');
if (progressCheckpoint) {
  // Jika ada, mengatur nilai progress bar HTML ke nilai checkpoint
  progressBar.value = progressCheckpoint;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

function update(){
    ctx.fillRect(0, 0, 50, 50);
    requestAnimationFrame(update);
}
update()

