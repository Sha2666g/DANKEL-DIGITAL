 document.getElementById('comentariosForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const comentario = document.getElementById('comentario').value;


    const nuevoComentario = {
        nombre: nombre,
        correo: correo,
        comentario: comentario,
        fecha: new Date().toLocaleString()
    };


    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentarios.push(nuevoComentario);


    localStorage.setItem('comentarios', JSON.stringify(comentarios));


    document.getElementById('comentariosForm').reset();

    alert('¡Gracias por tu comentario! Se ha guardado correctamente.');
});
