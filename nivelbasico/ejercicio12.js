//condicionales - switch
/*funcionan similar a las condicionales , solo que a diferencia de la condicion normal
if/else la condicional switch solo se puede validar una sola condicion entre varios
cases y es utilizada cuando no necesitamos comparar , igualar o negar una condicion
y otra */

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa yu edad");


switch (edad) {
    case "18":
        alert("Tienes acceso al catalogo de peliculas violentas");    
        break;

    case "25":
        alert("Tienes acceso al catalogo de peliculas violentas");   
        break

    default:
        alert("Debes ser mayor de 18 años para acceder al catalogo");
        break;
}