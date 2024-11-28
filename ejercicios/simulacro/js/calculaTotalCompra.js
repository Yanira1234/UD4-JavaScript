var total = 0
var precio = prompt("Introduzca el precio del artículo");
precio = parseInt(precio);

while(precio != 0){
    if(isNaN(precio)){
        alert("Lo siento solo se admiten numeros enteros");
    }else if(precio < 0){
        alert("Lo siento no se permiten números negativos");
    }else{
        total = total + precio;
    }
    precio = prompt("Introduzca el precio del artículo");
    precio = parseInt(precio);
}
document.write("El total de su compra ha sido: " + total);