let nombre = document.getElementsByName("nombre")[0];
let apellido = document.getElementsByName("apellido")[0];
function getFormValores() {
    return alert(`Se llama ${nombre.value} ${apellido.value}`);
}