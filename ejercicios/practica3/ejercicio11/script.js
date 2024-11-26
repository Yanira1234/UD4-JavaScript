var numero;
var suma = 0;
var cuenta = 0;

while(cuenta < 10){
    numero = prompt("Escribe un numero");
    numero = parseInt(numero);
    suma = suma + numero;
    cuenta++;
}
document.write(suma);