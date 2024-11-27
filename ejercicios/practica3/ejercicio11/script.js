var numero; //Numero que introduce el usuario.
var suma = 0; //Acumula la suma del numero anterior + el siguiente.
var cuenta = 0; //Lleva la cuenta de la cantidad de numeros que se piden.

while(cuenta < 10){
    numero = prompt("Escribe un numero");
    numero = parseInt(numero);
    suma = suma + numero;
    cuenta++;
}
document.write(suma);