/* Scroll effect */
let nav = document.querySelector('.nav');
window.addEventListener('scroll', () =>{
nav.classList.toggle('sticky', window.scrollY > 0);
});
/* AOS */
AOS.init();
AOS.init({
	once: true
});