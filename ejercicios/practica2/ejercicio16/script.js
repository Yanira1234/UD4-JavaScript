
var examen1 = prompt("Nota del primer examen");
var examen2 = prompt("Nota del segundo examen");
var trabajo1 = prompt("Nota del primer ttrabajo");
var trabajo2 = prompt("Nota del segundo trabajo");
//Para convertir un entero o una cadena a un decimal "parseFloat"
//"parseInt" solo convierte las cadenas a enteros, por lo que no toma decimales, por eso no me funcionaban los decimales antes
examen1 = parseFloat(examen1);
examen2 = parseFloat(examen2);
trabajo1 = parseFloat(trabajo1);
trabajo2 = parseFloat(trabajo2);

if(!isNaN(examen1) && !isNaN(examen2) && !isNaN(trabajo1) && !isNaN(trabajo2)){
    if(examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5){
        if((((examen1 + examen2) / 2 * 0.85) + ((trabajo1 + trabajo2) / 2 * 0.15)) >= 5){
            alert("La asignatura esta aprobada");
        }else {
            alert("Tu media no supera el 5");
        }
    }else{
        alert("Uno de los trabajos o los examenes no supera el 4.5");
    }
}
else{
    alert("Uno de los valores introducidos no es un numero");
}