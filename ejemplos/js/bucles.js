/*
var contador = 0;

//Si se pone "contador=1" entonces en el "while" habra que poner "contador <= 0"
while (contador < 10){
    document.writeln("Hola Mundo" + "<br>");
    contador++;
}
*/

//Quiero que el usuario meta un numero y que si no esta entre 0 y 10 le vuelva a pedir el numero.
var numero = prompt("Escribe un numero entre 0 y 10");

while(numero < 0 || numero > 10){
    numero = prompt("Escribe un numero entre 0 y 10");
}
document.writeln("Su numero es " + numero);
