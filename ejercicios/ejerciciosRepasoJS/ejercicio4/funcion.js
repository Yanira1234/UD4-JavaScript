function funcion(){
    var precio = document.getElementById("precio").value;
    var iva = document.getElementById("iva").value;
    precio = parseFloat(precio);

    document.getElementById("p").innerHTML = "El precio total con IVA es: " + (precio + (precio * iva / 100));
}

//No funciona