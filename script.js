// Animation des cœurs flottants
function createFloatingHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Différents styles de cœurs SVG
    const heartStyles = [
        '<svg width="30" height="30" viewBox="0 0 100 100"><path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,25 50,35 C55,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z" fill="#ff1744"/></svg>',
        '<svg width="25" height="25" viewBox="0 0 100 100"><path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,25 50,35 C55,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z" fill="#ff6b9d"/></svg>',
        '<svg width="35" height="35" viewBox="0 0 100 100"><path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,25 50,35 C55,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z" fill="#ff80ab"/></svg>',
        '<svg width="28" height="28" viewBox="0 0 100 100"><path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,25 50,35 C55,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z" fill="#ffc3dc"/></svg>'
    ];
    
    heart.innerHTML = heartStyles[Math.floor(Math.random() * heartStyles.length)];
    
    // Position de départ aléatoire
    const startPosition = Math.random() * window.innerWidth;
    heart.style.left = startPosition + 'px';
    
    // Dérive horizontale aléatoire
    const drift = (Math.random() - 0.5) * 200;
    heart.style.setProperty('--drift', drift + 'px');
    
    // Durée d'animation aléatoire
    const duration = 8 + Math.random() * 7;
    heart.style.animationDuration = duration + 's';
    
    // Délai aléatoire
    const delay = Math.random() * 3;
    heart.style.animationDelay = delay + 's';
    
    heartsContainer.appendChild(heart);
    
    // Supprimer le cœur après l'animation
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

// Créer des cœurs en continu
setInterval(createFloatingHeart, 400);

// Créer quelques cœurs au chargement
for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingHeart, i * 300);
}

// Navigation entre les pages
function startQuiz() {
    showPage('question1');
}

function nextQuestion(questionNumber) {
    showPage('question' + questionNumber);
}

function showPage(pageId) {
    // Cacher toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function showFinalPage() {
    showPage('final-page');
    
    // Créer une pluie de cœurs spéciale pour la page finale
    for (let i = 0; i < 30; i++) {
        setTimeout(createFloatingHeart, i * 100);
    }
}

// Effet de particules au clic
document.addEventListener('click', function(e) {
    // Créer des mini-cœurs au clic
    for (let i = 0; i < 3; i++) {
        const miniHeart = document.createElement('div');
        miniHeart.style.position = 'fixed';
        miniHeart.style.left = e.clientX + 'px';
        miniHeart.style.top = e.clientY + 'px';
        miniHeart.style.pointerEvents = 'none';
        miniHeart.style.zIndex = '9999';
        miniHeart.innerHTML = '<svg width="20" height="20" viewBox="0 0 100 100"><path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 45,25 50,35 C55,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z" fill="#ff1744"/></svg>';
        
        const angle = (Math.random() * Math.PI * 2);
        const distance = 50 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance - 50;
        
        miniHeart.style.transition = 'all 1s ease-out';
        miniHeart.style.opacity = '1';
        
        document.body.appendChild(miniHeart);
        
        setTimeout(() => {
            miniHeart.style.transform = `translate(${x}px, ${y}px) scale(0)`;
            miniHeart.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            miniHeart.remove();
        }, 1000);
    }
});
