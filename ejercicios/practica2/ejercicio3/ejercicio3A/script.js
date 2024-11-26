var numero;
numero = prompt("Escribe un numero");

if (isNaN (numero)) {
    alert("Por favor introduzca un numero");
}
else if((numero % 2) == 0) {
    document.writeln("El numero es par");
}
else {
    document.writeln("El numero es impar");
}