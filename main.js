document.addEventListener('DOMContentLoaded', function () {
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    window.addEventListener('scroll', function () {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });

    // Scroll animation for sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Launch dialog functionality
    const launchBtn = document.getElementById('launchBtn');
    const launchDialog = document.getElementById('launchDialog');
    const closeDialog = document.querySelector('.close-dialog');

    launchBtn.addEventListener('click', function () {
        launchDialog.classList.add('active');
    });

    closeDialog.addEventListener('click', function () {
        launchDialog.classList.remove('active');
    });

    // Close dialog when clicking outside
    launchDialog.addEventListener('click', function (e) {
        if (e.target === launchDialog) {
            launchDialog.classList.remove('active');
        }
    });

    // Display static launch message
    const countdownContainer = document.getElementById('countdown-timer');
    if (countdownContainer) {
        countdownContainer.innerHTML = '<div>Launching Soon</div>';
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
