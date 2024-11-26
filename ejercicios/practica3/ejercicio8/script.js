var palabra = prompt("Introduce una palabra");

while(palabra != "SALIR"){
    document.writeln(palabra);
    palabra = prompt("Introduce otra palabra o 'SALIR' en mayusculas para terminar");
}