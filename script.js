document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to feature cards and workflow steps
    const animatedElements = document.querySelectorAll('.feature-card, .step, .cta-box');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Simulate terminal typing effect
    const terminalLines = document.querySelectorAll('.term-body .output');
    let delay = 1000;

    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.3s';
        }, delay);
        delay += 600 + (Math.random() * 400); // Random delay between 600ms and 1000ms
    });

    // Subtly parallax background glow
    const glowBg = document.querySelector('.glow-bg');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        glowBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});
