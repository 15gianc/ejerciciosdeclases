//ejemplo 2 de switch
let nombre = prompt("Ingresa tu nombre");
let color = prompt("Ingresa tu color favorito");

switch (color) {
    case "amarillo":
        alert("Eres una persona alegre");
        break;
    
    case "verde":
        alert("Eres una persona saludable");
        break;
    
    case "azul":
        alert("Eres una persona tranquila");
        break;

    default:
        alert("Favor Ingresa un color");
        break;
}