const card = document.querySelector('.card');
card.addEventListener('click', function() {
    card.classList.toggle('active');
});



var screenWidth = window.innerWidth;
if (screenWidth < 768) {
    var scriptElement = document.querySelector('script[src="./assets/js/glow.js"]');
    scriptElement.parentNode.removeChild(scriptElement);
}