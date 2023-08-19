class Persona{
    constructor(nombre, edad, sexo, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    }
}
let arr = [];
let chabon = new Persona('Jorge', 37, 'H', 110.5, 168);
for (let a in chabon) {
    let v = chabon[a];
    arr.push(v);
}
alert(arr);
