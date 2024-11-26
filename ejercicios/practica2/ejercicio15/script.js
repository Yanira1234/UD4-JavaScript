var hermanos = prompt("Introduce el numero de hermanos que tienes");
hermanos = parseInt(hermanos);
var numero = 100

if(hermanos == 0){
    alert("El precio es " + numero);
}
else if(hermanos < 3){
    alert("El precio con descuento del 5% es " + (numero - (numero / 100 * 5)));
}
else {
    alert("El precio con descuento del 15% es " + (numero - (numero / 100 * 15)));
}