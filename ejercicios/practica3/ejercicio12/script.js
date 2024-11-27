var numero = prompt("Escribe un numero");
numero = parseInt(numero);
var i = 0
/*
while(i <= 10){
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    i++;
}*/

for(; i <= 10; i++){
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}