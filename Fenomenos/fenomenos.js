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
/* Declaración y Extracción de Variables */
/* Extracción de variables del DOM*/
let contenedorOlas = document.querySelector(".movedor-olas");            /*  Permite que la animacion de olas se ejecute */
let tamanoTuberia = document.querySelector(".limitador-tuberia");        /* Se usa para modificar el diametro de la sección longitudinal */
let botonesAnimcionCaudal = document.querySelectorAll(".inicio-caudal"); /* Botones para aumentar o restar el diametro de la tuberia */
let diametroTuberia = document.querySelector(".diametro-tuberia");       /* Sección transversal de la tuberia */
let mostradorDiametro = document.querySelectorAll(".diametro-tubo");     /* Mostradores de las diemenciones del diametro */
/* Variables necesarias para el programa */
let olas;           /* Olas del programa */
let iCau = 0;          /* Iteraciones */
let tamanoOlas = 4; /* Tamano de las olas en cm */
let posiOlasCaul = 4;   /* posiOlasCaul de las olas en cm */
/* Variables de la animación */
let alturaTuberia;  /* Obtiene la altura inicial de la tueberia */
let totalAltura = alturaTuberia;                 /* Se usa en la variación de altura de los elementos */
let tiempoCaudal = 20;                                 /* Define el tiempo inicial de la animación */

/* GRAFICO DEL PROGRAMA */
/* DECLARACIÓN Y CREACIÓN DE VARIABLES. */
/* Variables Extraidad del DOM */
/* extracción de lienzo canvas */
let tableroGraficoCaudal = document.querySelector(".lienzo");
let ctxCaudal = tableroGraficoCaudal.getContext("2d");
let mCau = 1;
let numeroRandom;
let coloresGrafico = ["", "blue", "gren", "red"]
/* FUNCIONES DE LA APLICACIÓN */
/* Función con la que se dibuja puntos del grafico */
function dibujarCirculo (x, y, tamano, color) {
    ctxCaudal.beginPath();
    ctxCaudal.arc(x, y, tamano, 0, 2 * Math.PI);
    ctxCaudal.fillStyle = color;
    ctxCaudal.fill();
}
/* Función, para el cambio de funciones##################*/
function Funcionlineal (x, m) {
    /* FUNCIÓN CON LA QUE SE CREA EL DIBUJO#####*/
    y = m * x;
    return y
}
/* Función, para el cambio de funciones##################*/


/* Funcion para dibujar grafico */
function dibujarGrafico(funcion, color, m, incremento) {
    let x = 0;
    /* Mediante lo siguiente se crean puntos en intervalos de 10ms */
    let creacionGrafico = setInterval(function(){
        x += incremento; /* Disminuir si los puntos son muy distantes */ 
        y = funcion(x, m);
        dibujarCirculo(x, y, 2, color);
    }, 0.001)
    
    /* Limita la cantida de intervalos */
    setTimeout(function(){
        clearInterval(creacionGrafico)
    }, 10000) /* Aumentar el tiempo en casos de que no se complete el grafico */
}

/* Ciclo con el que se crean las olas */
while (iCau < 49) {
    olas = document.createElement("div");/* Representa las olas */
    olas.classList.add("olas");          /* Agrega clase con el fin de dar estilo en CSS */
    contenedorOlas.appendChild(olas);    /* Introduce el elemento al contenedor de olas */
    olas.style.left = posiOlasCaul + "cm";   /* Ubica la ola dentro del contenedor de olas */
    posiOlasCaul += tamanoOlas;              /* Acumula las distancias entre elementos (Genera una nueva posicón) */
    iCau++
}

/* Eventos del Programa */
/* Aumento del diametro */
botonesAnimcionCaudal[0].addEventListener("click", function() {

    /* Forma en la que se hacen variar los colores */
    numeroRandom = Math.trunc(Math.random() * 4); 
    console.log(numeroRandom);


    alturaTuberia = tamanoTuberia.offsetHeight;               /* Extrae la altura de la sección */
    totalAltura = alturaTuberia + 20;                          /* Suma y acumula 5px */
    tamanoTuberia.style.height = totalAltura + "px";          /* Asigna la nueva altura ala sección longitudinal */
    diametroTuberia.style.height = totalAltura + "px";        /* Asigna la altura a la sección transversal */
    diametroTuberia.style.width = totalAltura + "px";         /* Ya que es un circulo, el ancho es el mismo*/
    mostradorDiametro[0].innerHTML = totalAltura;             /* Muestra el diametro en la sección longitudinal */
    mostradorDiametro[1].innerHTML = totalAltura;             /* Muestra el diametro en la sección transversal */
    contenedorOlas.classList.add("comienzoAnimacionCaudal");  /* Mediante esta clase se inicializa la animación de CSS */
    tiempoCaudal += 3;                                              /* Agrega y acumula 3s a el tiempo inicial */
    contenedorOlas.style.animationDuration = tiempoCaudal + "s";    /* Aplica el tiempo a la animación */
    dibujarGrafico(Funcionlineal, coloresGrafico[numeroRandom], mCau, 0.5)
    mCau -= 0.5
})

/* Disminución del diametro */
botonesAnimcionCaudal[1].addEventListener("click", function() {
    /* Forma en la que se hacen variar los colores */
    numeroRandom = Math.trunc(Math.random() * 4); 

    alturaTuberia = tamanoTuberia.offsetHeight;               /* Extrae la altura de la sección */
    totalAltura = alturaTuberia - 20;                          /* Resta y acumula 5px */
    tamanoTuberia.style.height = totalAltura + "px";          /* Asigna la nueva altura ala sección longitudinal */
    diametroTuberia.style.height = totalAltura + "px";        /* Asigna la altura a la sección transversal */
    diametroTuberia.style.width = totalAltura + "px";         /* Ya que es un circulo, el ancho es el mismo*/
    mostradorDiametro[0].innerHTML = totalAltura;             /* Muestra el diametro en la sección longitudinal */
    mostradorDiametro[1].innerHTML = totalAltura;             /* Muestra el diametro en la sección transversal */
    contenedorOlas.classList.add("comienzoAnimacionCaudal");  /* Mediante esta clase se inicializa la animación de CSS */
    tiempoCaudal -= 3;                                              /* Resta y acumula 3s a el tiempo inicial */
    contenedorOlas.style.animationDuration = tiempoCaudal + "s";    /* Aplica el tiempo a la animación */
    dibujarGrafico(Funcionlineal, coloresGrafico[numeroRandom], mCau, 0.5)
    mCau += 0.5
})

/* Para y recetea la animación */
botonesAnimcionCaudal[2].addEventListener("click", function() {
    contenedorOlas.classList.remove("comienzoAnimacionCaudal"); /* Remueve la clase, lo cual detien la animación */
});


/* ANIMACIÓN PARTICULAS */

/* PARTICULAS Y ANIMACIÓN DE ESTAS####################### */
/* Funcionamiento del Termometro */
let barraMercurio = document.querySelector(".barra-mercurio");
let posicionInicialMer = 27;
let tiempoInicialPar = 1500;
let contenedorMoleculas = document.querySelector(".contenedor-particulas");
let boquillaGlobo = document.querySelector(".boquilla-globo");
let hiloGlobo = document.querySelector(".hilo-globo")
let anchoIniGlobo = 27;
let altoIniGlobo = 34;
let topIniBoquilla = 33.8;
let topIniHilo = 33.8;
let leftBoquilla = 10;
let leftHilo = 13;

let incremento = 0;
let incrementoX = 0;

let botonesPar = document.querySelectorAll(".boton"); /* Provivional */


let molecula = document.querySelector(".molecula");
/* Contenedor de particulas */ /* ----- Ajustar */
let cilindroParticulas = document.querySelector(".contenedor-particulas");
// Genera movimiento aleatorio de cualquier elemento
function moverMoleculas (molecula, intervalo, tamX, tamY) {
    /* Crea una nueva posición despues de un tiempo (intervalo) */
    setInterval(function(){
        /* Variables para el posicionamiento en los dos ejes */
        let movX;
        let movY;
        /* Crea posición en los ejes, pero sin salirce del contenedor */
        movX = Math.random() * tamX;
        movY = Math.random() * tamY;
        /* Ubica el elemento en base a la posición creada */
        molecula.style.left = movX + "px";
        molecula.style.top = movY + "px";
    }, intervalo)

    console.log("dentroAnimacion: " + intervalo)
}

// Crea el numero de particulas para el contenedor en base a numParticulas
function crearParticulas (numParticulas, contenedor) {
    let iPar = 0;
    /* Se ejecuta hasta  */
    while (iPar <= numParticulas - 1) {
        /* Clona la molecula previamente creada */
        let nuevo = molecula.cloneNode(true);
        /* Introduce la molecula en el contenedor */
        contenedor.appendChild(nuevo);
        iPar++
    }
}

// Es la ultima función y con la que se usa para crear y animar.
function crearAnimarMoleculas (numeroMoleculas, intervaloTiempo, contenedor) {
    /* Toma la funcion, para crear las particulas necesarias */
    crearParticulas(numeroMoleculas, contenedor);
    /* Selecciona todas las moleculas */
    let moleculas = document.querySelectorAll(".molecula");
    /* Genera los limitantes en X, Y */
    let tamX = contenedor.offsetWidth;
    let tamY = contenedor.offsetHeight;
    /* Genera movimientos aleatorios a cada una de las particulas */
    for (jPar of moleculas) {
        moverMoleculas(jPar, intervaloTiempo, tamX, tamY);
    }
}
/* ################################################## */


function aumentarTemperatura(disOaum) {
    if (disOaum == "aum") {
        posicionInicialMer -= 3;
    }

    else if (disOaum == "dism") {
        posicionInicialMer += 3
    }
    
    barraMercurio.style.transform = "translateY(" + posicionInicialMer + "vh)"
}

function aumenDimensionGlobo(disOaum) {
    if (disOaum == "aum") {
        incremento += 1;
        incrementoX += 0.5;
    }

    else if (disOaum == "dism") {
        incremento -= 1;
        incrementoX -= 0.5;
    }
    contenedorMoleculas.style.width = (incremento + anchoIniGlobo) + "vh";
    contenedorMoleculas.style.height = (incremento + altoIniGlobo) + "vh";
    boquillaGlobo.style.top = (incremento + topIniBoquilla) + "vh";
    hiloGlobo.style.top = "calc(" + (incremento + topIniHilo) + "vh + 10px)";
    boquillaGlobo.style.left = (leftBoquilla + incrementoX) + "vh";
    hiloGlobo.style.left = (leftHilo + incrementoX) + "vh";
}

botonesPar[0].addEventListener("click", function(){
    console.log("Inicio" + tiempoInicialPar);
    aumentarTemperatura("aum");
    crearAnimarMoleculas(10, tiempoInicialPar, cilindroParticulas);
    aumenDimensionGlobo("aum");
    tiempoInicialPar -= 200;
    console.log(tiempoInicialPar);
    let part = document.querySelectorAll(".molecula");
    console.log("Num Particulas: " + part.length);
})

botonesPar[1].addEventListener("click", function(){
    console.log("Inicio" + tiempoInicialPar);
    aumentarTemperatura("dism");
    crearAnimarMoleculas(10, tiempoInicialPar, cilindroParticulas);
    aumenDimensionGlobo("dism");
    tiempoInicialPar += 200;
    console.log(tiempoInicialPar);
    let part = document.querySelectorAll(".molecula");
    console.log("Num Particulas: " + part.length);
})

