//alert("Hola este es mi Javascript");

//let nombre = "Frank";

//var nombre1 = "Frank";

//const nombre2 = "Frank";

//console.log(nombre);

//console.log(nombre1);

//console.log(nombre2);

let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(.logo .fuente);

let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, cuiudad, gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en día de sol. Me encataría aprender a programar para poder ayudar a las personas mostrar lo que hacen.`;
    return contenido;
}
parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

