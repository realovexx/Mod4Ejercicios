let limite = parseInt(prompt("Ingresa el valor limite!, Luego sumaremos numeros hasta alcanzarlo"));
if(isNaN(limite)){
    alert("El valor no es valido, es nulo, o da cero");
}
let contador = 0;
let num;
do{
num = parseInt(prompt("Ingresa un numero..."));
contador += num;
}while(contador<=limite);
alert("La suma ha superado el limite en el numero "+contador);