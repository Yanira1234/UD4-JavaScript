function funcion(){
    var precio = document.getElementById("precio").value;
    var iva = document.getElementById("iva").value;
    precio = parseFloat(precio);

    var socio = document.getElementById("socio").checked;

    if(socio == true) {
        document.getElementById("p").innerHTML = "El precio total con IVA es: " + ((precio + (precio * iva / 100)) / 10);
        document.getElementById("p").className = "rojo";
    }else {
        document.getElementById("p").innerHTML = "El precio total con IVA es: " + (precio + (precio * iva / 100));
        document.getElementById("p").className = "azul";
    }
}

//No funciona