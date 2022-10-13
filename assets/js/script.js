const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    this.scrollY > 20 ? nav.classList.add('active') : nav.classList.remove('active');
})