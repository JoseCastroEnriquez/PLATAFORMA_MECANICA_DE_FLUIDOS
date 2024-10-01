let cerrar = document.querySelector(".cerrar");
let nav = document.querySelector(".barraNav");

cerrar.addEventListener('click', function(){
  if (nav.getAttribute("hidden") == "true") {
    nav.removeAttribute("hidden");
  }

  else {
    nav.setAttribute("hidden", "true");
  }

  
})

// Grilla dinamica

// Obtenemos el elemento canvas y el contexto 2D
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

// Tamaño del lienzo y de los cuadrados guía
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const gridSize = 50; // Tamaño de los cuadrados guía

// Grosor y opacidad de las líneas
const lineWidth = 0.5;
const lineOpacity = 0.5;

// Dibujamos la grilla
function drawGrid() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Grosor de las líneas de la cuadrícula
    ctx.lineWidth = lineWidth;

    // Opacidad de las líneas de la cuadrícula
    ctx.globalAlpha = lineOpacity;

    // Dibujamos las líneas verticales
    ctx.strokeStyle = "rgba(0, 0, 0, 1)"; // Color de las líneas guía
    for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
    }

    // Dibujamos las líneas horizontales
    for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
    }

    // Restauramos la opacidad predeterminada
    ctx.globalAlpha = 1;
}

// Dibujamos la grilla inicial
drawGrid();


/*********** Sistemas desague*********************/