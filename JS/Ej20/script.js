let arr = [[3],[6],[9],[12],[15]];

for(let i = 0 ; i < arr.length ; i++){
    for(let k = 0; k< arr[i].length ; k++){
        arr[i][k] += 3
    } 
}
alert(arr);