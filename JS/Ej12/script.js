let opc = prompt(`Elegi, estoy seguro de que perderas:

a: 420
b: Tas re loco
c: 20 de abril
d: [420, 69, nice]
`);

let dato;

switch (opc) {
    case 'a':
    case 'A':
        dato = 420;
        break;
    case 'b':
    case 'B':
        dato = "Tas re loco";
        break;
    case 'c':
    case 'C':
        dato = new Date(2023, 3, 20);
        break;
    case 'd':
    case 'D':
        dato = [420, 69, "nice"];
        break;
    default:
        alert(`Esa no era una opcion, rompiste todo wacho`);
}
let tipo = (dato) => {
    if (Array.isArray(dato)) {
        return "array";
    }
    return typeof dato;
}
alert(`El tipo de dato es: ${tipo(dato)} `);