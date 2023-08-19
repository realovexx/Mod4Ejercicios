console.log(`Creando array A`);
let arrA = [];
let i;
for(i=0;i<50;i++){
    arrA[i]=parseInt(Math.random() * 100);
}
console.log(arrA);
console.log(`Creando array B`);
let arrB = arrA.slice(0,10);
arrB.sort(function(a, b) {
    return a - b;
});
arrB = arrB.concat(new Array(10).fill(0.5));
console.log(arrB);

