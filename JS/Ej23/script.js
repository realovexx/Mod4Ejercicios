let pe = document.getElementById("coso");
let pa = pe.textContent.split(" ");

window.onload = function(){
    for(let i = 0 ; i < pa.length; i++){
        if( pa[i].length > 8){
            pa[i] = `<span style='background-color: yellow;'>${pa[i]}</span>`;
        }
    }
    pe.innerHTML = pa.join(" ");
}