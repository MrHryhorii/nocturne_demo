// Contact button scrolling
const btnContact = document.getElementById('btn-contact');
const contactForm = document.getElementById('contact-form');

btnContact.addEventListener('click', () => {
    contactForm.scrollIntoView({ behavior: 'smooth' });
});

// Error modal window
const btnViewProjects = document.getElementById('btn-view-projects');
btnViewProjects.addEventListener('click', () => {
    createWindow();
});

const btnSend = document.getElementById('send');
btnSend.addEventListener('click', (e) => {
    // Prevents the form from submitting
    e.preventDefault();
    
    createWindow();
});


// modal window
const modal = document.createElement("div");
modal.id = "modal";
modal.className = "modal";
modal.style.display = "none";
modal.style.zIndex = "1000";

document.body.appendChild(modal);

// function to create modal window
const createWindow = () => {
    modal.innerHTML = renderWindow();
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
const renderWindow = () => {
    return `
        <div class="modal-content">
            <div>
                <p>Error!<p>
            </div>
            <div style="display: flex; justify-content: space-between">
                <button id="close-modal">Close</button>
            </div>
        </div>
        `;
}