// Set current date and time for the timestamp hidden field
document.getElementById('timestamp').value = new Date().toISOString();

// Modal Handling
document.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const level = card.closest('.card').getAttribute('data-level');
        document.getElementById(`${level}-modal`).style.display = 'flex';
    });
});

// Close Modal
document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside of modal
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
