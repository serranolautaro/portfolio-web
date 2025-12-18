/**
 * ============================================
 * PORTFOLIO - SCRIPT PRINCIPAL
 * ============================================
 * Este archivo maneja:
 * - Navegación móvil (menú hamburguesa)
 * - Animaciones al hacer scroll
 * - Header con efecto al hacer scroll
 * - Generación de estrellas titilantes
 * - Año actual en el footer
 */

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initMobileMenu();
    initScrollAnimations();
    initHeaderScroll();
    initCurrentYear();
});

// ============================================
// GENERACIÓN DE ESTRELLAS TITILANTES
// ============================================
/**
 * Crea estrellas dinámicamente en el fondo con animaciones de parpadeo
 */
function initStars() {
    const starsContainer = document.getElementById('stars-background');
    
    if (!starsContainer) return;
    
    // Número de estrellas a crear
    const numStars = 200;
    
    // Crear estrellas
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Asignar tamaño aleatorio (small, medium, large)
        const size = Math.random();
        if (size < 0.6) {
            star.classList.add('small');
        } else if (size < 0.9) {
            star.classList.add('medium');
        } else {
            star.classList.add('large');
        }
        
        // Posición aleatoria
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Duración de animación aleatoria (entre 2 y 5 segundos)
        const duration = 2 + Math.random() * 3;
        star.style.animationDuration = duration + 's';
        
        // Delay aleatorio para que no todas parpadeen al mismo tiempo
        const delay = Math.random() * 2;
        star.style.animationDelay = delay + 's';
        
        starsContainer.appendChild(star);
    }
}

// ============================================
// MENÚ MÓVIL (HAMBURGUESA)
// ============================================
/**
 * Inicializa el menú móvil con funcionalidad de toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !nav) return;
    
    // Toggle del menú al hacer clic en el botón
    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
    });
    
    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
        });
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
        }
    });
}

// ============================================
// ANIMACIONES AL HACER SCROLL
// ============================================
/**
 * Inicializa las animaciones de fade-in y slide-up
 * que se activan cuando los elementos entran en el viewport
 */
function initScrollAnimations() {
    // Seleccionar todos los elementos con la clase slide-up
    const elementsToAnimate = document.querySelectorAll('.slide-up');
    
    // Crear un Intersection Observer para detectar cuando los elementos entran en el viewport
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Si el elemento está visible en el viewport
            if (entry.isIntersecting) {
                // Agregar la clase 'visible' para activar la animación
                entry.target.classList.add('visible');
                // Dejar de observar este elemento para mejorar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Opciones del observer:
        // threshold: 0.1 significa que se activa cuando el 10% del elemento es visible
        threshold: 0.1,
        // rootMargin agrega un margen al viewport para activar la animación un poco antes
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar cada elemento con la clase slide-up
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// HEADER CON EFECTO AL HACER SCROLL
// ============================================
/**
 * Agrega una clase al header cuando se hace scroll
 * para cambiar su apariencia (sombra más pronunciada)
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    // Función que se ejecuta al hacer scroll
    function handleScroll() {
        // Si el scroll es mayor a 50px, agregar la clase 'scrolled'
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Escuchar el evento scroll
    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar una vez al cargar para verificar la posición inicial
    handleScroll();
}

// ============================================
// AÑO ACTUAL EN EL FOOTER
// ============================================
/**
 * Actualiza el año en el footer automáticamente
 */
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    
    if (yearElement) {
        // Obtener el año actual y actualizar el elemento
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

// ============================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ============================================
/**
 * Mejora el smooth scroll para navegación interna
 * (el CSS ya tiene scroll-behavior: smooth, pero esto lo mejora)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        
        // Solo procesar si es un hash válido (no solo "#")
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            
            if (target) {
                event.preventDefault();
                
                // Calcular la posición considerando el header fijo
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Hacer scroll suave hasta el elemento
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});


