console.log(`creando array...`);
let arr = new Array();
let dimension = parseInt(prompt(`Ingresa la dimension del array, lo llenare con numeros random`));
for(let i = 0 ; i < dimension ; i++){
    arr[i] = parseInt(Math.random()*100);
}
alert(`Muestro el array en la consola`);
function mostrarElementosArray(elemento, i, arr) {
    console.log("array[" + i + "] = " + elemento);
   }
arr.forEach(mostrarElementosArray);
console.log(`Ahora me cargo los ultimos dos`);
arr.splice((dimension-3),2);
arr.forEach(mostrarElementosArray);