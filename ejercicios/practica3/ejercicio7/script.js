var numero = prompt("Escribe un numero");
numero = parseInt(numero);

while(numero != 0){
    document.write(numero + " ");
    numero = prompt("Escribe otro numero (si no quieres seguir escribiendo numeros pon un 0)");
}