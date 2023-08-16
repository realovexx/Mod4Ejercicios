let palabra = prompt("Ingresa una palabra cualquiera");
let arbalap = palabra => {
    return palabra.split('').reverse().join('');
};
let nuevapalabra = arbalap(palabra);
alert(nuevapalabra);