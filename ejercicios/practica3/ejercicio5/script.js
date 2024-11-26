var numero = prompt("Escribe un numero positivo");
numero = parseInt(numero);
var cuenta = 1;

if(isNaN(numero) || numero < 0){
    alert("Escribe un numero que sea positivo");
}else{
    while(cuenta <= numero){
        document.writeln("<span>" + cuenta + "</span>");
        cuenta++;
    }
}

//Hecho el "if" al reves:
/*
if(!isNaN(numero) && numero >= 0){
    while(cuenta <= numero){
        document.writeln("<span>" + cuenta + "</span>");
        cuenta++;
    }
}else{
    alert("Escribe un numero que sea positivo");
}
*/