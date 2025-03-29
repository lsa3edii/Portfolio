// Get all elements
const cards = document.querySelectorAll('.game img');
const winSound = new Audio('gameAssets/sound.mp3');
const winMessage = document.getElementById('winMessage');
const fireworksContainer = document.getElementById('fireworks');

let firstCard = null;
let matchesFound = 0;
let confettiInterval;
let fireworksTimeouts = [];

// Image pairs
const allImages = [
    'gameAssets/1.png',
    'gameAssets/2.png',
    'gameAssets/3.png',
    'gameAssets/4.png',
    'gameAssets/5.png',
    'gameAssets/6.png'
];

// Initialize game
function initGame() {
    // Clear any ongoing effects
    stopAllEffects();
    
    // Reset game state
    matchesFound = 0;
    firstCard = null;
    winMessage.style.display = 'none';
    
    // Create and shuffle cards
    const gameImages = [...allImages, ...allImages];
    shuffleArray(gameImages);
    
    // Assign to cards
    cards.forEach((card, index) => {
        // card.src = "gameAssets/moon.png";
        card.alt = gameImages[index];
        card.onclick = handleCardClick;
    });
}

// Stop all effects
function stopAllEffects() {
    // Clear confetti
    if (confettiInterval) clearInterval(confettiInterval);
    
    // Clear fireworks
    fireworksTimeouts.forEach(timeout => clearTimeout(timeout));
    fireworksTimeouts = [];
    fireworksContainer.innerHTML = '';
}

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Card click handler
function handleCardClick() {
    if (this.src.includes(this.alt)) return;
    
    this.src = this.alt;
    
    if (!firstCard) {
        firstCard = this;
        return;
    }
    
    if (this.alt === firstCard.alt) {
        this.onclick = null;
        firstCard.onclick = null;
        firstCard = null;
        matchesFound++;
        
        if (matchesFound === allImages.length) {
            celebrateWin();
        }
    } else {
        setTimeout(() => {
            this.src = "gameAssets/moon.png";
            firstCard.src = "gameAssets/moon.png";
            firstCard = null;
        }, 500);
    }
}

// Win celebration
function celebrateWin() {
    // Play sound
    winSound.play();
    
    // Show message
    winMessage.style.display = 'block';
    
    // Start effects
    shootConfetti();
    createFireworks();
    
    // Restart after 5 seconds
    setTimeout(initGame, 5000);
}

// Confetti effect
function shootConfetti() {
    const duration = 3000;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
    
    confettiInterval = setInterval(() => {
        const timeLeft = duration - (performance.now() % duration);
        
        if (timeLeft <= 0) {
            clearInterval(confettiInterval);
            return;
        }
        
        confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: Math.random() * 0.2 + 0.1, y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: Math.random() * 0.2 + 0.7, y: Math.random() - 0.2 }
        });
    }, 250);
}

// Fireworks effect
function createFireworks() {
    fireworksContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const timeout = setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => firework.remove(), 1500);
        }, i * 100);
        
        fireworksTimeouts.push(timeout);
    }
}

// Start game
initGame();
