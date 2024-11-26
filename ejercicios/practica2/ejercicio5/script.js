var edad = prompt("Escribe tu edad");
edad = parseInt(edad);

if(isNaN (edad)){
    alert("Error: Introduzca un NUMERO")
}
else if(edad >= 18){
    document.writeln("Eres mayor de edad");
    alert("Eres mayor de edad");
}
else{
    document.writeln("No eres mayor de edad");
    alert("No eres mayor de edad");
}









