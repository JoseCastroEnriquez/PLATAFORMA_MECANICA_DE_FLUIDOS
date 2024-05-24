//######CREACION DE ELMEENTOS COMPONENTES.

let diametroNominalmm, diametroNominalin, pesotu, diametroExteriormm, diametroExteriorin, espesorParedmm, espesorParedin,diametroInternomm, lisDia; // Declaracion de arrays.

diametroNominalmm = [21, 26, 21, 33, 26, 33, 42, 48, 60, 73, 88, 114, 168, 60, 88]; // Diametros nominales.
diametroNominalin = [1/2, 3/4, 1/2, 1, 3/4, 1, 1.1/4, 1.1/2, 2, 2.1/2, 3, 4, 6, 2, 3]; // Diametros nominales.
pesotu = [218, 304, 157, 364, 189, 252, 395, 514, 811, 1185, 1761, 2904, 5835, 655, 1438]
diametroExteriormm = [21.34, 26.67, 31.34, 33.40, 26.7, 33.4, 42.2, 48.3, 60.3, 73.0, 88.9, 114.3, 168.3, 60.3, 88.9]; // Dimetros.
diametroExteriorin = [0.84, 1.05, 0.84, 1.31, 1.05, 1.31, 1.66, 1.90, 2.37, 2.87, 3.50, 4.50, 6.62, 2.37, 3.50];
espesorParedmm = [2.37, 2.43, 1.58, 2.46, 1.52, 1.60, 2.01, 2.29, 2.87, 3.48, 4.24, 5.44, 8.03, 2.31, 3.43]; // Espesores.
espesorParedin = [0.09, 0.09, 0.06, 0.09, 0.06, 0.06, 0.08, 0.09, 0.11, 0.14, 0.17, 0.21, 0.32, 0.09, 0.13];
diametroInternomm = [16.60, 21.81, 18.18, 28.48, 23.63, 30.20, 38.14, 43.68, 54.58, 66.07, 80.42, 103.42, 152.22, 55.70, 82.04]; //Diametro interno.
lisDia = []; // Lista de datos mayores

//#### FUNCIONES ########################
// Pasar a fraccion
function decimalAFraccion(decimal) {
    let precision = 1000000; // Puedes ajustar la precisión según tus necesidades
    let numerador = Math.round(decimal * precision);
    let denominador = precision;
    let gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    let divisorComun = gcd(numerador, denominador);
    return (numerador / divisorComun) + '/' + (denominador / divisorComun);
}

// Crear elemento.
let Creacion = [];

function filas(parametro) {
    Creacion.push(diametroNominalmm[parametro])
    Creacion.push(diametroNominalin[parametro])
    Creacion.push(pesotu[parametro])
    Creacion.push(diametroExteriormm[parametro])
    Creacion.push(diametroExteriorin[parametro])
    Creacion.push(espesorParedmm[parametro])
    Creacion.push(espesorParedin[parametro])
    Creacion.push(diametroInternomm[parametro])
}

// Ciclo.

function ciclo(arra, fun) {
    let j = 0;

    while (j <= arra.length-1) {
        fun(j)
        j++
        
    } 

}

// Creación de filas.

function creaFilas(tamaño) {
    let fila, elemento;
    let m = 0;
    let y = 0;
    let l = 0;
    tamaño = 8;

    while (m <= diametroExteriorin.length-1) {
        fila = document.createElement("tr");
        tabla.appendChild(fila);
        
        while (y <= tamaño-1) {  // Funcion.
            elemento = document.createElement("td");
            elemento.textContent = Creacion[y];
            elemento.className = "termino"
            if (y == l+1) {
                let elem = elemento.textContent;
                elem = elem.trim();
                elem = parseFloat(elem);
                elem = decimalAFraccion(elem);
                elemento.textContent = elem;
            }

            else if (y == l+7) {
                elemento.classList.add("ele");
            }
            fila.appendChild(elemento)
            y++
        } 

        l += 8;
        l = y;
        tamaño += 8;
        m++
    }
}

// Orden del codigo.
let tabla = document.querySelector(".tablaa"); //##################

ciclo (espesorParedin, filas);

creaFilas(8);

// ###### FUNCIONALIDAD DE EL PROGRAMA.
let listaEle = document.querySelectorAll(".ele");
let diametro = 0;
let caudal = document.querySelector(".caudal");
let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    caudal = caudal.textContent;
    caudal = parseFloat(caudal);

    diametro = (Math.sqrt(((caudal/1000)*4)/(2*Math.PI)))*1000;

    for (let i in diametroInternomm) {
        if (diametroInternomm[i] >= diametro)  {
            lisDia.push(diametroInternomm[i]);
        }
    }
    
    lisDia.sort((a, b) => a - b);
    let diametroFinal = lisDia[0];
    
    console.log("Su diametro es de: " + diametroFinal);
     
    // Posicion elemento.
    
    let DiametroNomi = diametroNominalin[diametroInternomm.indexOf(diametroFinal)];
    let espesor = espesorParedmm[diametroInternomm.indexOf(diametroFinal)];
    let diametroExter = diametroExteriormm[diametroInternomm.indexOf(diametroFinal)];

    console.error(diametroFinal)
    // Pasar a fracción
    let fracción = decimalAFraccion(DiametroNomi);
    
    let listaEle = document.querySelectorAll(".ele");
    
    let diaU = 0;
    let k = 0;
    while (k <= diametroExteriorin.length-1) {

        diaU = listaEle[k];

        console.log(diaU)

        let otro = diaU.textContent;
        console.log(typeof(otro))
        if (otro == diametroFinal.toString()) {
            let padre = diaU.parentElement;
            console.log(padre)
            padre.className = "color";
            console.log(padre);
        }

        k++;
    }

    let especificaciones = document.querySelector(".especificaciones");
    let alma = document.querySelector(".boton2");

    alma.setAttribute("style", "display: block")
    // AGREGAR CLASE PARA LA ANIMACION.

    especificaciones.classList.add("tii");
    especificaciones.innerHTML = `<h2 class="especificaciones-titulo">Especificaciones: </h2>
    Diametro Nominal(in): ${fracción} <br>
    Diametro Interno Promedio (mm): ${diametroFinal} <br>
    Espesor Pared Minimo (mm): ${espesor}<br>
    Diametro Exterior Promedio (mm): ${diametroExter} <br>`     
}, { once: false });

// Refrescar pantalla
let refrecar = document.querySelector(".refresh");
refrecar.addEventListener('click', function(){
    window.location.reload()
})

// Cerrar nav

let nav = document.querySelector(".barraNav");
let cierre = document.querySelector(".cerrarNav");
let instancia = nav.getAttribute("class");

console.log(instancia);

cierre.addEventListener('click', function(){
    var mostrado = true;

    if (mostrado) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block'; // O el valor que corresponda según tu diseño
    }
    // Alternamos el estado
    mostrado = !mostrado;
})


/********** PROGRAMA PARA LA SELECCION DE ELEMENTO ********/

let botonesParaElementos = document.querySelectorAll(".link");
let camposDeMuestraElementos = document.querySelectorAll(".muestra");
let zIndex = 0;
let clasesElementos = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let claseElemento = "";
let elementoMostrar = "";
let elementoAnterior = document.querySelector(".codos");
// Función para la asignación de clase en los diferentes elementos.

for (let i = 0; i < botonesParaElementos.length; i++) {
    botonesParaElementos[i].classList.add(clasesElementos[i]);
    camposDeMuestraElementos[i].classList.add(clasesElementos[i]);
}



console.log(botonesParaElementos)
console.log(camposDeMuestraElementos)

camposDeMuestraElementos[2].style.zIndex = 25

botonesParaElementos.forEach(function(boton) {
boton.addEventListener("click", function(){
        zIndex += 30;
        claseElemento = boton.classList.item(1);
        
        for (let elemento of camposDeMuestraElementos) {
            if (elemento.classList.item(2) == claseElemento) {
                elementoAnterior.setAttribute("hidden", "true");
                console.log("es la clase: " + zIndex);
                elementoAnterior = elemento;
                elemento.removeAttribute("hidden");
                elemento.setAttribute("id", "ini");
                elemento.style.zIndex = zIndex;
            }
        }
    });
});



