document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('is-active'); // Para la animación de la hamburguesa a X
            navLinks.classList.toggle('active'); // Para mostrar/ocultar los enlaces de navegación
        });

        navLinks.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Solo en dispositivos móviles
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
        })

        // Opcional: Cerrar el menú cuando se hace clic en un enlace (para SPA-like navigation)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Solo en dispositivos móviles
                    mobileMenu.classList.remove('is-active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});