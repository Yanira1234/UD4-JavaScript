function funcion() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = document.getElementById("numero2").value;
    numero2 = parseInt(numero2);
    /*El parseInt se puede hacer tanto en el "var" como despues*/
    
    document.getElementById("suma").value = (numero1 + numero2);
}