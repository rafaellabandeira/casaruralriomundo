// Script principal para Cabañas Río Mundo

document.addEventListener('DOMContentLoaded', function() {
  console.log('Sitio web Cabañas Río Mundo cargado');
  
  // Carrusel
  initCarousel();
  
  // Agregar meta viewport para mobile
  if (!document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(meta);
  }
});

function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.parentElement.querySelector('.carousel-button.prev');
  const nextBtn = carousel.parentElement.querySelector('.carousel-button.next');
  const indicators = carousel.parentElement.querySelectorAll('.indicator');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let autoplayInterval;
  
  // Mostrar diapositiva
  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
      indicators[currentSlide].classList.add('active');
    }
  }
  
  // Botones de navegación
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      resetAutoplay();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      resetAutoplay();
    });
  }
  
  // Indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      resetAutoplay();
    });
  });
  
  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }
  
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  // Toques para mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    resetAutoplay();
  });
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Deslizar izquierda → siguiente
      showSlide(currentSlide + 1);
    }
    if (touchEndX > touchStartX + 50) {
      // Deslizar derecha → anterior
      showSlide(currentSlide - 1);
    }
  }
  
  // Iniciar
  showSlide(0);
  startAutoplay();
  
  // Pausar autoplay al pasar el mouse
  carousel.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  carousel.parentElement.addEventListener('mouseleave', () => {
    startAutoplay();
  });
}

// Menú hamburguesa
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Inicializar en carga
document.addEventListener('DOMContentLoaded', function() {
  initHamburger();
});

