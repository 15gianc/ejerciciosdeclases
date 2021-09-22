/* Variable let- se usa para que funcione solo dentro de 
un bloque de codigo y que en caso de que se pueda reemplazar
sea dentro de este mismo. Es mas usa y recomendado
porque es mas seguro a la hora de que mis datos
no puedan ser reemplazados libremente en todo el codigo
algo que con var es mas probable*/ 

/*no deja declarar la misma variable varias veces */

let nombre = "Pepa";

//para reemplazar la variable let dentro de un mismo bloque
nombre = "Pepita";

console.log(nombre);