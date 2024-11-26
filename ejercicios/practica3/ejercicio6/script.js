var numero = prompt("Escribe un numero");
numero = parseInt(numero);
var cuenta = 1;

if(!isNaN(numero)){
    while(cuenta <= numero){
        document.writeln(cuenta);
        cuenta++;
    }
    while(cuenta >= numero){
        document.writeln(cuenta);
        cuenta--;
    }
}else{
    alert("Escribe un numero valido");
}