let frase = prompt("Ingresa una frase cualquiera");
let frase2 = "";
let sub = "";
for (let i = 0; i < frase.length; i++) {
    sub = frase.substring(i, (i + 1)) ;
    frase2 += sub + " ";
}
alert(frase2);