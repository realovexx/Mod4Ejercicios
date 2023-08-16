let frase = prompt("Ingrese una frase cualquiera");
let busca = function(frase){
    let arr = frase.split(' '); //es necesario agregar el espacio para que splitee a partir de este
    let max = 0;
    let palabra = "";
    arr.forEach(a => {
        if(a.length>max){
            max = a.length; //es necesario actualizar el length maximo en cada iteracion
            palabra = a;
        }
    });
    alert(palabra);
} ;
busca(frase); //para que funcione, hay q llamar a la funcion