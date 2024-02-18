// JavaScript code to toggle navigation menu visibility
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});
