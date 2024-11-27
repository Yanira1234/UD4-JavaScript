/*
var contador = 0;

//Si se pone "contador=1" entonces en el "while" habra que poner "contador <= 0"
while (contador < 10){
    document.writeln("Hola Mundo" + "<br>");
    contador++;
}


//Quiero que el usuario meta un numero y que si no esta entre 0 y 10 le vuelva a pedir el numero. ------------------------
var numero = prompt("Escribe un numero entre 0 y 10");

while(numero < 0 || numero > 10){
    numero = prompt("Escribe un numero entre 0 y 10");
}
document.writeln("Su numero es " + numero);


//Suma los numeros del 1 al 5 (1+2+3+4+5) --------------------------------------------------------------------------------
var suma = 0
var i = 1

while(i <= 5){
    suma = suma + i;
    i++;
}
document.write(suma);
//Sin terminar

*/

//USO DEL "for" --------------------------------------------------------------------------------------------------------------------------------------------------------
//Bucle for para sacar por pantalla los numeros del 10 al 0
var numero;
for(numero=10; numero>=0; numero--) {
    document.write(numero + "<br>");
}
