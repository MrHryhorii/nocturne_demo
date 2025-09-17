const btnContact = document.getElementById('btn-contact');
const contactForm = document.getElementById('contact-form');

btnContact.addEventListener('click', () => {
    contactForm.scrollIntoView({ behavior: 'smooth' });
});