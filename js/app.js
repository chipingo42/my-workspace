const menuicon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuicon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})