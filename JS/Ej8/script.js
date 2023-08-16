let num;
let suma = 0;
let max = 0;
let cont = 0;
let min = Number.MAX_VALUE;
do {
    num = parseInt(prompt("Ingresa un numero cualquiera, o 0 para salir"));
    if (num !== 0) {
        suma += num;
        cont++;
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
} while (num !== 0);

alert(`Has presionado 0. Los resultados son:

El numero maximo es: ${max}
El numero minimo es: ${min}
El promedio final es: ${suma / cont}
`);