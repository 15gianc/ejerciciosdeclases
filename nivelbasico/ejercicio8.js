//Tipos de datos
//variables primitivas

let nombre ="Pepa";  //tipo string
let edad =  25;  //tipo entero (int)
let sueldo =  25.5; // tipo float - decimal
let hijos = false;  //tipo boolean
let cedula = "123456789"; //Estos datos siempre se ponen tipo string
// no se hacen operaciones matematicas con estos datos
// son mas livianos que por ejemplo un entero
let celular = "123456789";
//camelCase
let fechaRegistro = new Date();//Saca la fecha completa (d,m,a,h)
//new saca la fecha en tiempo real- en el momento


/*para mirara los datos en mi consola */

//para concatenar : unir se usa +

console.log(" Hola: " + nombre + 
" Tu edad es: " + edad + 
" Tu sueldo es: " + sueldo +
 " tienes hijos: " + hijos +
 " Tu fecha de registro: " + fechaRegistro );