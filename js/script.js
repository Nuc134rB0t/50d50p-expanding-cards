// Selecciona todos los div con la clase panel
const panels = document.querySelectorAll('.panel');

// Recorre los div con la clase panel y les agrega el evento clic
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Comprueba si el panel ya está activo para evitar ejecutar las instrucciones innecesariamente
        if (!panel.classList.contains('active')) { // Modificación del ejercicio original
            removeActiveClasses();
            panel.classList.add('active');
        };
    });
});

// Define cómo eliminar la clase `active` de los div con la clase panel
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};