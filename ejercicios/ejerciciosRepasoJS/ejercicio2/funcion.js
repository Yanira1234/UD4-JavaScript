function escribeNombre(){
    //Obtiene el value del input cuyo id es nombre.
    var nombre = document.getElementById("nombre").value;
    //Obtiene el value del input cuyo id es edad.
    var edad = document.getElementById("edad").value;
    if(edad > 18){
        alert("Su nombre es " + nombre + " y usted es mayor de edad.");
    }else{
        alert("Su nombre es " + nombre + " y usted es menor de edad.");
    }
    /*Los numeros introducidos en el input se concadenan asi que habria que
    declarar que son enteros
    alert(edad + 1);
    */
}