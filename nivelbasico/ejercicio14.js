//validar tipo de variable y valor



/*operadores relacionales - 
> mayor que
>= mayor igual que
< menor que
<= menor igual
== igual que (valor interno)
!= diferente o distinto que
=== igual interno y tambien tipo de dato
!== diferente valor y tipo de dato
*/


let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

if (edad === 18) {
    alert("tienes acceso al catalogo de peliculas de terror");

} else {
    alert("Debes ser mayor de 18 años para acceder al catalogo");
    
}