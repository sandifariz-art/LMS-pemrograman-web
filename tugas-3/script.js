// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 15, 30, 0.98)';
        nav.style.boxShadow = '0 5px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(15, 15, 30, 0.95)';
        nav.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
    }
});

// Animate progress rings on scroll
const animateProgressRings = () => {
    const rings = document.querySelectorAll('.progress-ring .progress');
    rings.forEach(ring => {
        const progress = ring.getAttribute('data-progress');
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (progress / 100) * circumference;
        
        const rect = ring.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            ring.style.strokeDashoffset = offset;
        }
    });
};

window.addEventListener('scroll', animateProgressRings);
window.addEventListener('load', animateProgressRings);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-item, .stat-box, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dynamic text typing effect
const heroSubtitle = document.querySelector('.hero .subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let charIndex = 0;

    function typeText() {
        if (charIndex < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 30);
        }
    }

    setTimeout(typeText, 1000);
}

// Add gradient to progress rings
document.querySelectorAll('.progress-ring').forEach((ring, index) => {
    const svg = ring;
    const defs = svg.querySelector('defs');
    
    if (!defs) {
        const newDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', `gradient${index + 1}`);
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '0%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#6C63FF;stop-opacity:1');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#00d4ff;stop-opacity:1');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        newDefs.appendChild(gradient);
        svg.insertBefore(newDefs, svg.firstChild);
        
        const progressCircle = svg.querySelector('.progress');
        if (progressCircle) {
            progressCircle.setAttribute('stroke', `url(#gradient${index + 1})`);
        }
    }
});

// Mobile menu toggle
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        const menuToggle = document.createElement('div');
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = 'font-size: 28px; cursor: pointer; position: absolute; right: 20px; top: 20px;';
        
        const nav = document.querySelector('nav');
        nav.appendChild(menuToggle);
        
        const navUl = document.querySelector('nav ul');
        navUl.style.display = 'none';
        
        menuToggle.addEventListener('click', () => {
            if (navUl.style.display === 'none') {
                navUl.style.display = 'block';
            } else {
                navUl.style.display = 'none';
            }
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Add cursor trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(108,99,255,0.6) 0%, transparent 70%);
        pointer-events: none;
        left: ${e.clientX - 5}px;
        top: ${e.clientY - 5}px;
        z-index: 9999;
        animation: fadeOut 1s ease forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 1000);
});

// Add fadeOut animation style dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(style);

// Stats counter animation
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseFloat(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !stat.classList.contains('animated')) {
            stat.classList.add('animated');
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target % 1 === 0 ? target : target.toFixed(2);
                    clearInterval(timer);
                } else {
                    stat.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(2);
                }
            }, 30);
        }
    });
};

window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// Add active state to navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.background = '';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.background = 'linear-gradient(45deg, #6C63FF, #FF6584)';
        }
    });
});

console.log('CV Website Loaded Successfully! 🚀');