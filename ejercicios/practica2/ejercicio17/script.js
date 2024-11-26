
var dias = prompt("Escribe el numero de dias del mes", "30");
dias = parseInt(dias);

if(!isNaN(dias)){
    if(dias > 31 || dias < 28){
        alert("Ningun mes tiene ese numero de dias");
    }else if(dias == 28){
        alert("Mes con 28 dias: Febrero en año no bisiesto");
    }else if(dias == 29){
        alert("Mes con 29 dias: Febrero en año bisiesto");
    }else if(dias == 30){
        alert("Meses con 30 dias: Abril, Junio, Septiembre y Noviembre");
    }else{
        alert("Meses con 31 dias: Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre");
    }
}else {
    alert("Debes introducir un numero");
}


//Otra forma de hacerlo
/*
var meses;
switch (dias) {
    case 28:
        meses = "Febrero en año no bisiesto";
        break;
    case 29:
        meses = "Febrero en año bisiesto";
        break;
    case 30:
        meses = "Abril, Junio, Septiembre y Noviembre";
        break;
    case 31:
        meses = "Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre";
        break;
    default:
        meses = "Ningun mes tiene ese numero de dias";
}
//esta sin terminar
*/