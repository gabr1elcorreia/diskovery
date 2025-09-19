document.addEventListener('DOMContentLoaded', () => {
    const footerTextElement = document.getElementById('footer-text');
    const textToAnimate = '© 2025 DISKOVERY - TODOS OS DIREITOS RESERVADOS';
    let charIndex = 0;
    let isDeleting = false;

    // Adiciona um listener para bloquear o botão direito
    document.addEventListener('contextmenu', event => event.preventDefault());

    function typeEffect() {
        const currentText = textToAnimate.substring(0, charIndex);
        footerTextElement.textContent = currentText;

        if (!isDeleting && charIndex < textToAnimate.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else if (!isDeleting && charIndex === textToAnimate.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            setTimeout(typeEffect, 500);
        }
    }

    // Define a altura mínima do footer-text para evitar o "salto" da logo
    const footerTextContainer = document.querySelector('.footer .container');
    if (footerTextContainer) {
        footerTextContainer.style.minHeight = '20px'; // Ajuste este valor se necessário
    }
    
    typeEffect();
});