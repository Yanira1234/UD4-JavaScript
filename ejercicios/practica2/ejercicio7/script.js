var numero = prompt("Escribe un numero");
numero = parseInt(numero); //Para que la cadena pase a ser un numero.

//Si el precio es >100 se hace un 15%, si es entre 50 y 100 se hace un 5% y en los demas casos no hay descuento.
if(numero > 100){
    document.writeln("El número con descuento del 15% es " + (numero - numero / 100 * 15));
}else if(numero >= 50){
    document.writeln("El número con descuento del 5% es " + (numero - numero / 100 * 5));
}else {
    document.writeln("No hay descuento");
}