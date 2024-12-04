function funcion() {
    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if(edad >= 18) {
        document.getElementById("h1").innerHTML = "Eres mayor de edad";
    }else {
        document.getElementById("h1").innerHTML = "Eres menor de edad";
    }
}