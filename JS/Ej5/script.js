let menu = `Menu:

Seleccione la operacion a realizar:

S. Suma
R. Resta
M. Multiplicacion
D. Division
`;
let opc = prompt(menu);
let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
switch (opc) {
    case 'S':
    case 's':
        alert(num1 + " mas " + num2 + " da " + (num1 + num2));
        break;
    case 'R':
    case 'r':
        alert(num1 + " menos " + num2 + " da " + (num1 - num2));
        break;
    case 'M':
    case 'm':
        alert(num1 + " por " + num2 + " da " + (num1 * num2));
        break;
    case 'D':
    case 'd':
        if (num2 === 0) {
            alert("No puedo dividir por cero. Me tomo el palo");
        } else {
            alert(num1 + " dividido en " + num2 + " da " + (num1 / num2));
        }
        break;
    default:
        alert("Flasheaste colores, no se q es eso. Me jui");
}