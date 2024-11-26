var palabra = prompt("Introduce una palabra");

while(palabra != "SALIR" && palabra != "salir"){
    document.writeln(palabra);
    palabra = prompt("Introduce otra palabra o escribe 'SALIR' para terminar");
}