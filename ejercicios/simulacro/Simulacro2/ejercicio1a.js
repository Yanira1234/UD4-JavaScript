var edad = prompt("Escribe tu edad");
edad = parseInt(edad);
var horario = prompt("Escribe tu horario (mañana, tarde o completo)");

if(!isNaN(edad) && edad > 0 && (horario == "mañana" || horario == "tarde" || horario == "completo")){
    if(edad < 65){
        switch (horario) {
            case "mañana": alert("Tu cuota mensual es de 25 euros"); break;
            case "tarde": alert("Tu cuota mensual es de 45 euros"); break;
            case "completo": alert("Tu cuota mensual es de 55 euros"); break;
        }
    }else{
        switch (horario) {
            case "mañana": alert("Tu cuota mensual es de " + (25 - (25 * 0.25)) + " euros"); break;
            case "tarde": alert("Tu cuota mensual es de " + (45 - (45 * 0.25)) + " euros"); break;
            case "completo": alert("Tu cuota mensual es de " + (55 - (55 * 0.25)) + " euros"); break;
        }
    }
}else{
    alert("Error: los datos introducidos no son correctos");
}



//Parte 2: para 20 socios (preguntas a 20 y sale el resultado de los 20)

/*no creo hacerlo, no me da tiempo*/