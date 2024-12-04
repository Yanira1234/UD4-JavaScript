
//Lo basico, sin parametros
function escribeNombre() {
    var nombre = document.getElementById("nombre").value;

    //Sustituir el alert por el resultado.
    document.getElementById("resultado").innerHTML = "Su nombre es " + nombre;
/*   
    document.getElementById("salida").value;
    Esto me rompe todo y ni sé porque, de hecho ni sé para qué es.
*/

    //Me dice si ha clickado femenino o no.
    var femeninoChecked = document.getElementById("femenino").checked;
    //Me dice si ha clickado masculino o no.
    var masculinoChecked = document.getElementById("masculino").checked;

    if(femeninoChecked == true) {
        alert("Usted ha clicado femenino");
    }
    if(masculinoChecked == true) {
        alert("Usted ha clicado masculino");
    }
}