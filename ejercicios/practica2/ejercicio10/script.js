var estudios = prompt("¿Donde has realizado tus estudios?");
var edad = prompt("Escribe tu edad");
edad = parseInt(edad);

//if (!isNaN(edad)) es lo mismo que if (isNaN(edad) == false)
if (!isNaN(edad)){
    if((estudios = "zaragoza") && (edad >= 15) && (edad <= 18)) {
        alert("Puedes acceder a la Universidad de Zaragoza");
    } else {
        alert("No puedes acceder a la Universidad de Zaragoza");
    }
} else{
    alert("Introduce una edad valida")
}