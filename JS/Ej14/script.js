function Libro(isbn, titulo, autor, pags){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.pags = pags;
    this.mostrarLibro = function(){
        console.log(this);
     }
    this.nuevoLibro = nuevoLibro;
}

function nuevoLibro(){
    let isbn = parseInt(prompt("Ingrese el ISBN del libro"));
    let titulo = prompt("Ingrese el título del libro");
    let autor = prompt("Ingrese el nombre del autor");
    let pags = parseInt(prompt("Ingrese la cantidad de paginas"));
    let l = new Libro(isbn, titulo, autor, pags);
    return l;
}

let libro1 = nuevoLibro();

libro1.mostrarLibro();