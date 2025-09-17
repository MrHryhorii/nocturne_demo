// Contact button scrolling
const btnContact = document.getElementById('btn-contact');
const contactForm = document.getElementById('contact-form');

btnContact.addEventListener('click', () => {
    contactForm.scrollIntoView({ behavior: 'smooth' });
});

// Error modal window
const btnViewProjects = document.getElementById('btn-view-projects');
btnViewProjects.addEventListener('click', () => {
    createWindow("All good. But we do not have a content to show.", "alert-good");
});

const btnSend = document.getElementById('send');
btnSend.addEventListener('click', (e) => {
    // Prevents the form from submitting
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let text = document.getElementById('message').value;
    
    name = name.trim();
    email = email.trim();
    text = text.trim();

    if(!name || !email || !text){
        createWindow("Warnings. Check input values.", "alert-warn");
    }
    else{
        createWindow("Error. Try again or change your message.", "alert-error");
    }

});


// modal window
const modal = document.createElement("div");
modal.id = "modal";
modal.className = "modal";
modal.style.display = "none";
modal.style.zIndex = "1000";

document.body.appendChild(modal);

// function to create modal window
const createWindow = (message, type) => {
    modal.innerHTML = renderWindow(message, type);
    modal.style.display = "flex";

    document.getElementById("close-modal").onclick = () => {
        modal.classList.add('hide');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('hide');
        }, 500);
    };
};
// helper to render
const renderWindow = (message, type = "alert-good") => {
    return `
        <div class="modal-content">
            <div class="${type}">
                <p>${message}<p>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 16px;">
                <button id="close-modal">Close</button>
            </div>
        </div>
        `;
}