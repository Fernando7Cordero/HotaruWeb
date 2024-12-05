
// Funcion Para activar barra lateral 

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el div clickeable
    var detonador = document.getElementById('menuResponsive');
  
    // Agrega un evento de clic al div clickeable
    detonador.addEventListener('click', function () {
      // Obtén el div objetivo
      var barralateral = document.getElementById('sideNavBar');
  
      // Inyecta propiedades CSS sobre el div objetivo
      barralateral.style.left = '0px';
      
    });
  });

// Funcion para desactivar barra lateral 

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el div clickeable
    var detonador = document.getElementById('closeNavBar');
  
    // Agrega un evento de clic al div clickeable
    detonador.addEventListener('click', function () {
      // Obtén el div objetivo
      var barralateral = document.getElementById('sideNavBar');
  
      // Inyecta propiedades CSS sobre el div objetivo
      barralateral.style.left = '100vw';
      
    });
  });


let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 0) {
        // Scroll hacia abajo y no en la parte superior de la página
        header.classList.add('header-hidden');
    } else {
        // Scroll hacia arriba o en la parte superior de la página
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});