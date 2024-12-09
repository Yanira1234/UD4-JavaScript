
function funcion(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    var imc = (peso / (altura * altura));
    alert(imc);


    if(imc < 18.5) {
        document.getElementById("h3").innerHTML = "Bajo peso";
        document.getElementById("h3").className = "azul";
    }else if(imc < 25) {
        document.getElementById("h3").innerHTML = "Peso normal";
        document.getElementById("h3").className = "verde";
    }else if(imc < 30) {
        document.getElementById("h3").innerHTML = "Sobrepeso";
        document.getElementById("h3").className = "rojo";
    }else {
        document.getElementById("h3").innerHTML = "Obesidad";
        document.getElementById("h3").className = "rojo";
    }



/*NO FUNCIONA
    switch(imc) {
        case imc < 18,5:
            document.getElementById(h3).innerHTML = "Bajo peso";
            document.getElementById(h3).className = "azul";
            break;

        case imc < 25:
            document.getElementById(h3).innerHTML = "Peso normal";
            document.getElementById(h3).className = "verde";
            break;

        case imc < 30:
            document.getElementById(h3).innerHTML = "Sobrepeso";
            document.getElementById(h3).className = "rojo";
            break;

        case imc >= 30:
            document.getElementById(h3).innerHTML = "Obesidad";
            document.getElementById(h3).className = "rojo";
            break;
    }
*/
}