var numero1;
var numero2;

numero1 = prompt("Escribe el primer numero");
numero2 = prompt("Escribe el segundo numero");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

document.writeln("<p>La suma es " + (numero1 + numero2) + "</p>"); //No funciona
document.writeln("<p>La resta es " + (numero1 - numero2) + "</p>"); //No funciona
document.writeln("<p>La multiplicacion es " + (numero1 * numero2) + "</p>");
document.writeln("<p>El cociente es " + (numero1 / numero2) + "</p>");
document.writeln("<p>El resto es " + (numero1 % numero2) + "</p>");