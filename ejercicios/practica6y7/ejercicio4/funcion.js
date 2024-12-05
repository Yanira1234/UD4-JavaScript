function funcion() {
    // Obtener los valores de los inputs
    var texto1 = document.getElementById("texto1").value;
    var texto2 = document.getElementById("texto2").value;

    // Mostrar el resultado en el input de resultado
    document.getElementById("texto3").value = (texto1 + " " + texto2);
}