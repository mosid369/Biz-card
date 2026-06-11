// Add flip functionality to the card
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    if (card) {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    }
});
