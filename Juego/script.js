var numeroAdivinar = 3
var intentos = 1;
var numero = prompt("Adivina el numero");
numero = parseInt(numero);


while(numero != numeroAdivinar && intentos < 3) {
    if(numero < numeroAdivinar) {
        alert("El numero es mas grande");
    }else {
        alert("El numero es mas pequeño");
    }
    intentos++;
    numero = prompt("Prueba otra vez");
}
if(numero == numeroAdivinar) {
    alert("Enorhabuena, lo has adivinado en el intento " + intentos);
}else {
    alert("Game Over");
}

//Sin terminar