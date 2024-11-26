
var mes = prompt("Escribe el nombre de un mes");

if(mes == "febrero"){
    alert("Ese mes tiene 29 dias en un año bisiesto y 28 en los demas");
}else if(mes == "noviembre" || mes == "abril" || mes == "junio" || mes == "septiembre"){
    alert("Ese mes tiene 30 dias");
}else if(mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre"){
    alert("Ese mes tiene 31 dias");
}else{
    alert("Ese mes no existe");
}

//Otra forma de hacerlo
/*
switch (mes) {
    case "febrero": alert("Ese mes tiene 29 dias en un año bisiesto y 28 en los demas"); break;
    
    case "noviembre":
    case "abril":
    case "junio":
    case "septiembre": alert("Ese mes tiene 30 dias"); break;
   
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre": alert("Ese mes tiene 31 dias"); break;
    
    default: alert("Ese mes no existe"); break;
}
*/