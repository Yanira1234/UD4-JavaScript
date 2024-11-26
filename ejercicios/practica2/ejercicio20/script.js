
var numero = prompt("Escribe un numero");
numero = parseInt(numero);

if(!isNaN(numero)){
    if(numero % 2 == 0) {
        alert("El numero es par");
    }else {
        alert("El numero es impar");
    }

    if(numero % 3 == 0){
        alert("El numero es multiplo de 3");
    }else {
        alert("El numero no es multiplo de 3");
    }

    if(numero % 5 == 0){
        alert("El numero es multiplo de 5");
    }else {
        alert("El numero no es multiplo de 5");
    }

    if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0){
        alert("El numero es multiplo de 5, de 3 y de 2 simultaneamente");
    }
}else {
    alert("Introduce un numero valido");
}