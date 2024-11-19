document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el loader y todos los enlaces de navegación
    const loader = document.getElementById('loader');
    const links = document.querySelectorAll('a');

    // Función para mostrar el loader
    function showLoader(event) {
        event.preventDefault(); // Previene la navegación inmediata
        const url = this.href; // Guarda el destino del enlace

        loader.classList.add('active'); // Activa el loader

        // Espera 1 segundo antes de navegar
        setTimeout(() => {
            window.location.href = url; // Navega al destino
        }, 500); // 1 segundo = 1000 ms
    }

    // Asocia la función a cada enlace
    links.forEach(link => {
        link.addEventListener('click', showLoader);
    });
});


