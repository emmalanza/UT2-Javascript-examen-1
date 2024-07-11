/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio
var sign = window.prompt("Introduzca + - x o /:");

if(sign === "+"){
    console.log("Sumar");
}else if(sign === "-"){
    console.log("Restar")
}else if(sign === "x") {
    console.log("Mutiplicar")
}else if(sign === "/"){
    console.log("Dividir");
}else {
    console.log("No conozco esa operación")
}
