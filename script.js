// Get the modal and its components
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close');

// Function to open the modal and populate it with data
function openModal(fcName, links) {
    // Populate the modal with FC Name and links
    modal.querySelector('.modal-fc-name').textContent = fcName;
    
    // Clear previous links and add new ones
    const modalLinks = modal.querySelector('.modal-links');
    modalLinks.innerHTML = ''; // Clear previous links
    links.forEach(link => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
        modalLinks.appendChild(listItem);
    });

    // Show the modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener to close the modal when the close button is clicked
closeModalButton.addEventListener('click', closeModal);

// Close modal if clicked outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Add event listeners to each card's image and FC name
document.querySelectorAll('.card').forEach(card => {
    const fcName = card.querySelector('.fc-name').textContent;
    const links = [
        { name: 'GIF Pack 1', url: '#' },
        { name: 'GIF Pack 2', url: '#' },
        // Add other links as necessary
    ];

    // Open modal when the image or FC name is clicked
    card.querySelector('img').addEventListener('click', () => openModal(fcName, links));
    card.querySelector('.fc-name').addEventListener('click', () => openModal(fcName, links));
});
