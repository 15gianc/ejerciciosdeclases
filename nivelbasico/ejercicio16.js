//DOM - Document Object Model (Estructura del documento HTML)
//Obtener elemento del HTML - manipula los elementos del documento html
//ej: cambiar el nombre de perfil de mi redes
/*javascript puede acceder al DOM y a traves de el puede modificar la pagina, 
de hecho puede modificar todos los estilos de CSS, eliminar o añadir elementos
 y atributos relacionados con la pagina. Ademas, reacciona a todos los eventos
 de la pagina. */

let datos = document.getElementById("datos");

//Funcion
const nombreUsuario = () =>{
    let nombre = prompt("Ingrese su nombre");
    alert(" Tu nombre es:  " + nombre);

}

//Funcon vacia
//Eventos onclick dede javascript

datos.onclick = function () {
    nombreUsuario();

}