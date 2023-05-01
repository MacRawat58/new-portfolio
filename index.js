const contactBtn = document.querySelector('#contact-btn');
const contactModal = document.querySelector('.contact-modal');
const contactModalClose = document.querySelector('.contact-modal-close');

contactBtn.addEventListener('click', () => {
    contactModal.classList.add('show');
});

contactModalClose.addEventListener('click', () => {
    contactModal.classList.remove('show');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    contactModal.classList.remove('show');
});