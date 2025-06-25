// Mobile menu toggle
document.getElementById('menu').addEventListener('click', function() {
    this.classList.toggle('bx-menu-wider');
    this.classList.toggle('bx-x');
    document.querySelector('.links').classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('bx-x');
        document.getElementById('menu').classList.add('bx-menu-wider');
        document.querySelector('.links').classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});