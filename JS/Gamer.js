// Ejemplo básico de interacción
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Función en desarrollo. ¡Gracias por tu paciencia!');
        });
    });
});
