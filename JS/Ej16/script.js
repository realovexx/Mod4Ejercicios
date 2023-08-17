let arr1 = new Array();
let arr2 = new Array();
for (let i = 0; i < 5; i++) {
    arr1[i] = (Math.random() * 100).toFixed(0);
    arr2[i] = (Math.random() * 100).toFixed(0);
}
for (let j = 0; j < 5; j++) {
    console.log(arr1[j]);
}
for (let k = 0; k < 5; k++) {
    console.log(arr2[k]);
}