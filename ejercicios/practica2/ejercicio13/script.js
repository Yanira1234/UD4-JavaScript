var edad = prompt("Introduce tu edad");
edad = parseInt(edad);

if(!isNaN(edad)) {
    if (edad <= 5){
        alert("Debes estar en preescolar");
    }
    else if(edad <= 11) {
        alert("Debes estar en primaria");
    }
    else if(edad <= 16){
        alert("Debes estar en la ESO");
    }
    else if(edad <= 21){
        alert("Debes estar en Bachillerato o Ciclos");
    }
    else {
        alert("Debes estar en la Universidad");
    }
}
else{
    alert("Introduce una edad valida")
}