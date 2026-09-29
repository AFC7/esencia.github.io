/* ================= SHOW Y HIDDEN DEL MENÚ MÓVIL ================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validar si existe el botón de abrir */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Validar si existe el botón de cerrar */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ================= REMOVER MENÚ EN MÓVIL AL HACER CLICK EN UN ENLACE ================= */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos click en cada nav__link, removemos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================= CAMBIO DE COLOR DEL HEADER AL HACER SCROLL ================= */
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    else nav.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)';
}
window.addEventListener('scroll', scrollHeader)