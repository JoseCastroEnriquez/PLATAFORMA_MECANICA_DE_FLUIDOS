let elementoLiquido = document.querySelector(".elementoLiquido");
let canica = document.querySelector(".canica");
let checkCanica = document.querySelectorAll(".checkCanica");
let checkLiquido = document.querySelectorAll(".checkLiquido");
let parteLiquida = document.querySelector(".fluido");
let densidadesCanicas = [0.97, 2.5, 2.7, 2.8, 7.85];
let coloresCanicas = ["#07B4FF", "#D4E2E8", "#C5EEFF", "#D0C39D", "gray"]
let densidadesLiquidos = [0.91, 1.0, 1.11, 1.26, 13.6];
let coloresLiquidos = ["#FFD761", "#61C4FF", "#73E6BD", "#E6EFEC", "#A0A0A0"]
let posicion = 0;
let informacion = document.querySelector(".resultado");
let densidadCanica = 0;
let densidadLiquido = 0;
let gravedad = 9.81;
let radio = 0.01;
let altura = 0.3;
let velocidadFinal;
let tiempo;
let boton = document.querySelector(".refrescar");

let hijosGrafico;

// Graficos

let primero = document.querySelector(".primero");
let punto;
let x;
let y;
let numeros = document.querySelectorAll(".numero");
let cont;
let yes = document.querySelectorAll(".y")

function crearPuntoCanica(elemento, color, tamano){
    x = Math.random() * (tiempo/5) * 100;
    y = (altura / x) * 100;

    if (y<= tamano) {
        punto = document.createElement("div");
        punto.classList.add("punto");
        punto.style.backgroundColor = color;
        elemento.appendChild(punto);
        punto.style.left = x + "px";
        punto.style.bottom = y + "px"
    }
}

// Gaficos.

function calculorTiempo (df, dc){
    df = df * 1000;
    dc = dc * 1000;
    velocidadFinal = (Math.sqrt((4*(dc - df)*gravedad*radio)/(3*df))).toFixed(5);
    tiempo = 5 * ((altura).toFixed(4) / velocidadFinal);
}


j = 0;
while(j<=3) {
    j++
    cont = numeros[j].textContent;
    numeros[j].style.transform =  "translateX("+ cont + "px)";
}

m = 0;
while(m<=2) {
    m++
    cont = yes[m].textContent - 15;
    yes[m].style.transform =  "translateY("+ cont + "px)";
}

checkCanica.forEach(chek => {
    chek.addEventListener("change", function(){
        posicion = chek.value;
        densidadCanica = densidadesCanicas[posicion];
        canica.style.backgroundColor = coloresCanicas[posicion];
        console.log(densidadCanica);
    })
});

checkLiquido.forEach(chek => {
    chek.addEventListener("change", function(){
        posicion = chek.value;
        densidadLiquido = densidadesLiquidos[posicion];
        parteLiquida.style.backgroundColor = coloresLiquidos[posicion]
        console.log(densidadLiquido);
    })
});

canica.addEventListener("click", function(){
    if (densidadCanica <= densidadLiquido) {
        calculorTiempo(densidadLiquido, densidadCanica);
        canica.classList.add("animacion");
        canica.style.transition = 0.2 + "s";
        informacion.textContent = "Debido a que la densidad de la canica es MENOR, la FUERZA que ejerce el fluido es MAYOR";
        informacion.classList.add("titilacion");
    }

    else {
        calculorTiempo(densidadLiquido, densidadCanica);
        canica.style.transform = "translateY(" + 220 + "px)";
        canica.style.transition = tiempo + "s";
        informacion.textContent = "El tiempo que tarda la canica en llegar al fondo es: " + (tiempo/5).toFixed(2) + "s";
        informacion.classList.add("titilacion");
        console.log(tiempo);

        

        let i = 0;
        while (i<= 20000){
            i++
            crearPuntoCanica(primero, "blue", 400);
        }
    }
})

boton.addEventListener("click", function(){
    while(primero.firstChild) {
        let condicion = primero.firstChild.className;
        if (condicion == "numero" || condicion == "y" || condicion == "ejex" || condicion == "ejey"){
            continue
        }

        else {
            primero.removeChild(primero.firstChild);
        }
    }
})


// ANIMACION CUBO
let enfrente = document.querySelector(".enfrente");
let abajo = document.querySelector(".abajo");
let izquierda = document.querySelector(".izquierda");
let lienzo1 = document.querySelector(".lienzo1");
let ctx1 = lienzo1.getContext("2d"); 
let lienzo2 = document.querySelector(".lienzo2");
let ctx2 = lienzo2.getContext("2d"); 
let lienzo3 = document.querySelector(".lienzo3");
let ctx3 = lienzo3.getContext("2d"); 
let lienzo4 = document.querySelector(".lienzo4");
let ctx4 = lienzo4.getContext("2d"); 
let lienzo5 = document.querySelector(".lienzo5");
let ctx5 = lienzo5.getContext("2d"); 
let lienzo6 = document.querySelector(".lienzo6");
let ctx6 = lienzo6.getContext("2d"); 
let aleatorioUno;
let aleatorioDos;
let seleccion = document.querySelector(".seleccionMaterial");
let nomElementos = ["Aire", "Agua", "Aceite", "Aluminio", "Mármol", "Concreto", "Hierro", "Cobre", "Plomo", "Oro", "Plata", "Platino"];
let densidadElementos = [0.0012, 1.0, 0.91, 2.7, 2.7, 2.4, 7.87, 8.96, 11.34, 19.32, 10.49, 21.45];
let coloresParticulas = ["#A9A9A9", "#00BFFF", "#FFD700", "#B0C4DE", "#8B4513", "#808080", "#000000", "#FF4500", "#708090", "#FFD700", "#C0C0C0", "#D3D3D3"]
let contenedor;
let check;
let label;
let checks;
let numeroElemento;

let condicion = 0;

let primeroCubo = document.querySelector(".primeroCubo");
let puntoCubo;
let xCubo;
let yCubo;
let numerosCubo = document.querySelectorAll(".numeroCubo");
let yesCubo = document.querySelectorAll(".yCubo")

function creacionParticulas(ctx, color) {
    if (condicion == 0) {
        ctx.fillStyle = color;
        aleatorioUno = Math.random() * 400;
        aleatorioDos = Math.random() * 400;
        ctx.fillRect(aleatorioDos, aleatorioUno, 3, 3);
    }

    else {
        ctx.clearRect(0, 0, 200, 200)
        condicion == 0
    }
    
}

function crearElemento() {
    elementoInsertar = document.createElement("div");
    elementoCheck = document.createElement("input");
}

function crearPunto(elemento, color, tamano, densidad){
    xCubo = Math.random() * 400;
    yCubo = densidad *  xCubo;

    if (yCubo<= tamano) {
        puntoCubo = document.createElement("div");
        puntoCubo.classList.add("punto");
        puntoCubo.style.border = "solid 2px " + color;
        elemento.appendChild(puntoCubo);
        puntoCubo.style.left = xCubo + "px";
        puntoCubo.style.bottom = yCubo + "px"
    }
}


j = 0;
while(j<=3) {
    j++
    cont = numerosCubo[j].textContent;
    numerosCubo[j].style.transform =  "translateX("+ cont + "px)";
}

m = 0;
while(m<=2) {
    m++
    cont = yesCubo[m].textContent - 15;
    yesCubo[m].style.transform =  "translateY("+ cont + "px)";
}

for (j in nomElementos) {
    contenedor = document.createElement("div");
    check = document.createElement("input");
    check.type = "checkbox";
    check.value = j;
    check.classList.add("check");
    label = document.createElement("label");
    label.textContent = nomElementos[j] + " (" + densidadElementos[j] + "g/cm3)";
    label.style.color = "#fff"
    contenedor.appendChild(check);
    contenedor.appendChild(label);
    seleccion.appendChild(contenedor);
}

checks = document.querySelectorAll(".check");

checks.forEach(check => {
    check.addEventListener("change", function(){
        numeroElemento = check.value;
        console.log(numeroElemento)
        let i = 0;
        while (i <= 3000 * densidadElementos[numeroElemento]){
            creacionParticulas(ctx1, coloresParticulas[numeroElemento]);
            creacionParticulas(ctx2, coloresParticulas[numeroElemento]);
            creacionParticulas(ctx3, coloresParticulas[numeroElemento]);
            creacionParticulas(ctx4, coloresParticulas[numeroElemento]);
            creacionParticulas(ctx5, coloresParticulas[numeroElemento]);
            creacionParticulas(ctx6, coloresParticulas[numeroElemento]);
            i++
            if (i == 3000 * densidadElementos[numeroElemento]){
                condicion == 1;
            }
        }

        let j = 0;
        while (j<= 20000){
            j++
            crearPunto(primeroCubo, coloresParticulas[numeroElemento], 400, densidadElementos[numeroElemento]);
        }
    });
});

// PRENSA
// Animación para el movimiento de la prensa.
let fuerza = document.querySelector(".img-flecha");
let palancaDos = document.querySelector(".palancaUno");
let enboloUno = document.querySelector(".enboloUno");
let fluidoUno = document.querySelector(".fluidoUno");
let fluidoDos = document.querySelector(".fluidoDos");
let enboloDos = document.querySelector(".enboloDos");
let palancaTres = document.querySelector(".palancaTres");
let plataforam = document.querySelector(".plataformaDeElementos");
let entradaFuerza = document.querySelector(".fuerza");
let diametros = document.querySelectorAll(".entradaDiametro");
let play = document.querySelector(".play");

function calcFuerzaDos (f1, D1, D2) {
    f2 = (((Math.PI / 4)*(D2**2))* f1) / ((Math.PI / 4)*(D1**2));
    return f2;
}

function animarPrensa() {
    // Bajar el enbolo.
    fuerza.style.top = "197px";
    palancaDos.style.top = "15px";
    enboloUno.style.top = "110px";
    fluidoUno.style.top = "140px";
    fluidoUno.style.height = "160px";
    // Subir el enbolo.
    plataforam.style.transform = "translateY(-260px) translateX(-25px)";
    palancaTres.style.top = "-80px";
    enboloDos.style.top = "40px";
    fluidoDos.style.height = "230px";
    fluidoDos.style.top = "70px"    
}

play.addEventListener("click", function(){
    animarPrensa();
    let resultado = calcFuerzaDos(entradaFuerza.value, diametros[0].value, diametros[1].value).toFixed(2);
    plataforam.textContent = resultado + " KN";
})

// ANIMACIÓN CAUDAL #############.

let olas = document.querySelectorAll(".ola");
let olasDos = document.querySelectorAll(".olaDos");
let contenedorOlasUno = document.querySelector(".contenedorOlasUno");
let contenedorOlasDos = document.querySelector(".contenedorOlasDos");
let tamanoContenedor = olas.length * olas[0].offsetWidth;

contenedorOlasUno.style.width = tamanoContenedor + "px"
console.log(tamanoContenedor)
//FUNCIÓN Ordenar Olas.

console.log()

function ubicarOlas (elementos, tamano, cuad) {
    let it = 0;
    while (it <= elementos.length - cuad){ 
        it++;
        let distaciaX = -tamano*(it);
        if (it <= cuad) {
            distaciaX = tamano*(it);
            elementos[it].style.left = distaciaX + "px";
        }

        else {
            distaciaX = -tamano*(it-cuad);
            elementos[it].style.left = distaciaX + "px" ;
        }
    }
}

ubicarOlas(olas, 150, 2);
ubicarOlas(olasDos, 100, 3);