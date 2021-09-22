//operadores logicos

/*
|| operador logico   o 
&& operador logico   y
*/

/*
.tolowercase - para pasar lo que escribe el usuario a minusculas
.touppercase - para pasar lo que escribe el usuario a mayusculas */

let saludo = prompt("Ingresa un saludo").toLowerCase();

if (saludo === "hola" || saludo === "que tal") {
    alert("Bien, gracias por saludar");
    
} else {
    alert("Que mal, primero se saluda");
    
}