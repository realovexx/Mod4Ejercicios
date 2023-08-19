let ingreso = document.getElementsByName("radio")[0]; // getelements trae un array con todos los elementos "radio", por lo que hay que setear el indice en cero
let boton = document.getElementById("btn");
let resultado = document.getElementsByTagName("p")[0];

let area = function(){
    return ((Math.PI)*(Math.pow(parseFloat(ingreso.value),2)));
}

let circunferencia = function(){
    return (2*(Math.PI)*parseFloat(ingreso.value));
}

boton.onclick = function () {
resultado.innerHTML = `El area de tu circulo da: ${area().toFixed(2)}<br>y<br>La circunferencia da: ${circunferencia().toFixed(2)}`;
}

