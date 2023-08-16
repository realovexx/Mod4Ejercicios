function Circulo(radio){
this.radio = radio
this.nuevoCirculo = nuevoCirculo;
this.calcArea = calcArea;
this.calcPerim = calcPerim;
}

function nuevoCirculo(){
    let radio = parseInt(prompt("Ingrese el radio del circulo"));
    return new Circulo(radio);
}

function calcArea(){
    let area = Math.PI * Math.pow(this.radio, 2);
    return console.log(`El area del circulo da ${area}`);
}

function calcPerim(){
    let perim =  2 * Math.PI * this.radio;
    return console.log(`El perimetro del circulo da ${perim}`);
}

let circulo1 = nuevoCirculo();

circulo1.calcArea();
circulo1.calcPerim();