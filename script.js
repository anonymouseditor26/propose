document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.confetti-container');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        // Apply styles
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.left = `${left}%`;
        confetti.style.animationDuration = `${animationDuration}s`;
        confetti.style.animationDelay = `${delay}s`;
        
        // Random shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        container.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
    
    // Create initial confetti
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfetti, i * 100);
    }
    
    // Continuous confetti
    setInterval(createConfetti, 300);
});
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartTypes = ['❤️', '💖', '💗', '💓', '💘', '💝'];
    
    const heart = document.createElement('span');
    heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    // Random properties
    const left = Math.random() * 100;
    const size = Math.random() * 1.5 + 1;
    const animationDuration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;
    
    // Apply styles
    heart.style.left = `${left}%`;
    heart.style.bottom = '0';
    heart.style.fontSize = `${size}em`;
    heart.style.animationDuration = `${animationDuration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    heartsContainer.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// Create initial hearts
for (let i = 0; i < 20; i++) {
    setTimeout(createHearts, i * 300);
}

// Continuous hearts
setInterval(createHearts, 500);