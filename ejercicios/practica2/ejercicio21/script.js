
var numero1 = prompt("Escribe el primer numero");
numero1 = parseFloat(numero1);

var operacion = prompt("Escribe el simbolo de operacion");

var numero2 = prompt("Escribe el segundo numero");
numero2 = parseFloat(numero2);

if(!isNaN(numero1) && !isNaN(numero2)){
    switch (operacion) {
        case "+":
            alert("El resultado de " + numero1 + " " + operacion + " " + numero2 + " es " + (numero1 + numero2));
            break;
        case "-":
            alert("El resultado de " + numero1 + " " + operacion + " " + numero2 + " es " + (numero1 - numero2));
            break;
        case "*":
            alert("El resultado de " + numero1 + " " + operacion + " " + numero2 + " es " + (numero1 * numero2));
            break;
        case "/":
            if (numero2 == 0) {
                alert("Error: División por cero.");
            }else{
                alert("El resultado de " + numero1 + " " + operacion + " " + numero2 + " es " + (numero1 / numero2));
            }
            break;
        default:
            alert("El simbolo introducido no es valido");
    }
}else{
    alert("Error: uno de los valores introducidos no es valido")
}
