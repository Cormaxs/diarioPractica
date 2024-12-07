// gay el que lee
const menuToggle = document.querySelector('.liser-menu-toggle');
const menuList = document.querySelector('.liser-menu ul');
const navMenu = document.querySelector('.liser-menu');
const menuOffsetTop = navMenu.offsetTop;

// Evento para abrir y cerrar el menu en el celular
menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuToggle.setAttribute(
        'aria-expanded',
        menuList.classList.contains('active')
    );
});

// Evento para sticky solo en pantallas grandes
window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        if (window.scrollY > menuOffsetTop) {
            navMenu.classList.add('sticky');
        } else {
            navMenu.classList.remove('sticky');
        }
    } else {
        navMenu.classList.remove('sticky');
    }
});