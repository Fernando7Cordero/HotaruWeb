document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll('.banner_element');
    let currentIndex = 0;

    function showNextBanner() {
        banners[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].classList.add('active');
    }

    setInterval(showNextBanner, 5000);

    // Inicializar la primera imagen como activa
    banners[currentIndex].classList.add('active');

    // Animación de texto dinámico
    const dynamicText = document.getElementById('dynamic-text');
    const textOptions = ['de la cultura', 'del arte', 'del deporte', 'del idioma'];
    let textIndex = 0;

    function typeText(text, callback) {
        let i = 0;
        dynamicText.innerHTML = '';
        const interval = setInterval(() => {
            if (i < text.length) {
                dynamicText.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(callback, 2000); // Espera 2 segundos antes de borrar el texto
            }
        }, 100);
    }

    function deleteText(callback) {
        const interval = setInterval(() => {
            if (dynamicText.innerHTML.length > 0) {
                dynamicText.innerHTML = dynamicText.innerHTML.slice(0, -1);
            } else {
                clearInterval(interval);
                callback();
            }
        }, 50);
    }

    function loopText() {
        typeText(textOptions[textIndex], () => {
            deleteText(() => {
                textIndex = (textIndex + 1) % textOptions.length;
                loopText();
            });
        });
    }

    loopText();
});