let valores = [true, 5, false, "hola", "adios", 2];
let i;
let mayor = 0;
let mayorStr = "";
var booleanos = [valores[0], valores[2]];
var res = [];
var num1 = valores[1]; // 5
var num2 = valores[5]; // 2

//A
for (i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'string') {
        if (valores[i].length > mayor) {
            mayorStr = valores[i];
            mayor = valores[i].length;
        }
    }
}
console.log(`El mayor valor string es ${mayorStr} con ${mayor} caracteres`);
//B
res.push(booleanos[0] || booleanos[1]); // Resultado True: true || false => true
res.push(booleanos[0] && booleanos[1]); // Resultado False: true && false => false

console.log("Resultado True:", res[0]);
console.log("Resultado False:", res[1]);
//C
var suma = num1 + num2;      // 5 + 2 = 7
var resta = num1 - num2;     // 5 - 2 = 3
var multiplicacion = num1 * num2; // 5 * 2 = 10
var division = num1 / num2;  // 5 / 2 = 2.5
var modulo = num1 % num2;
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);