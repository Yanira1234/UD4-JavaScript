var edad = prompt("Introduce tu edad");
var localidad = prompt("Introduce tu localidad");
//Convierte la cadena a entero, todo lo que viene del prompt son cadenas
edad = parseInt(edad);

if((edad > 25) && (localidad == "zaragoza")) {
    alert("Enhorabuena");
}
//La edad no es necesario ponerla ya que en la anterior ya se especifica por
//lo que si llega al "else if" es porque no tiene mas de 25 años porque sino habria entrado en el if.
else if(/*(edad <= 25) &&*/(localidad = "zaragoza")) {
    alert("Casi te doy la enhorabuena")
}