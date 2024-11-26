alert ("Hola Mundo")

//Pida por teclado un número entero (la edad) al usuario
//Declarams la variable edad
var edad;
//Pedir por prompt la edad, ahora edad tendrá el valor que el usuario haya escrito
edad = prompt("Escriba su edad:");


var nombre;
nombre = prompt("Escriba su nombre");
alert("Su nombre es " + nombre + " y su edad es " + edad);

//Sacar por pantalla la edad que tendrá el usuario dentro de 3 años
//Ojo edad es una variable de tipo cadena porque el prompt devuelve todo como cadena
//Tengo que convertirla a entero para poder trabajar con operaciones aritmeticas
edad = parseInt(edad) + 3
alert("Su edad dentro de 3 años será... " + edad)

//escribe en la pagina web
document.writeln("hola que tal")

document.writeln("<p>hola que tal1</p>")
document.writeln("<p>hola que tal2</p>")

//Comprobar que el numero introducido es realmente un numero y que salte
//un mensaje de "error" si no es un numero
//if (!isNaN(edad)) es lo mismo que if (isNaN(edad) == false)
if (isNaN (numero)) {
    alert("Por favor introduzca un numero"); 
}
else if((numero % 2) == 0) {
    document.writeln("El numero es par");
}
else {
    document.writeln("El numero es impar");
}

//------------------------------------------------------------------------------------------------------------------------//
//Otro ejemplo de "if()":
var numero = prompt("Escribe un numero");
numero = parseInt(numero); //Para que la cadena pase a ser un numero.

//Si el precio es >100 se hace un 15%, si es entre 50 y 100 se hace un 5% y en los demas casos no hay descuento.
if(numero > 100){
    document.writeln("El número con descuento del 15% es " + (numero - numero / 100 * 15));
}else if(numero >= 50){
    document.writeln("El número con descuento del 5% es " + (numero - numero / 100 * 5));
}else {
    document.writeln("No hay descuento");
}


//----------------------------------------------------------------------------------------------------------------------------//
//Decimales con "parseFloat":
var examen1 = prompt("Nota del primer examen");
var examen2 = prompt("Nota del segundo examen");
var trabajo1 = prompt("Nota del primer ttrabajo");
var trabajo2 = prompt("Nota del segundo trabajo");
//Para convertir un entero o una cadena a un decimal "parseFloat"
//"parseInt" solo convierte las cadenas a enteros, por lo que no toma decimales
examen1 = parseFloat(examen1);
examen2 = parseFloat(examen2);
trabajo1 = parseFloat(trabajo1);
trabajo2 = parseFloat(trabajo2);

if(!isNaN(examen1) && !isNaN(examen2) && !isNaN(trabajo1) && !isNaN(trabajo2)){
    if(examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5){ /*No se como hacer que funcionen los decimales*/
        if(((examen1 + examen2) / 100 * 85) + ((trabajo1 + trabajo2) / 100 * 15) >= 5){
            alert("La asignatura esta aprobada")
        }else {
            alert("Tu media no supera el 5")
        }
    }else{
        alert("Uno de los trabajos o los examenes no supera el 4.5");
    }
}
else{
    alert("Uno de los valores introducidos no es un numero");
}










