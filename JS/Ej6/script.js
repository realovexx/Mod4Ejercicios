let num = parseInt(prompt("Ingresa un numero!"));
if (isNaN(num)) {
    alert("ingreso invalido.");
} else {
    switch (num) {
        case 0:
            alert("El numero no es par ni impar");
            break;
        default:
            if (num % 2 === 0) {
                alert("El numero " + num + " es par.");
            } else {
                alert("El numero " + num + " es impar.");
            }
    }
}