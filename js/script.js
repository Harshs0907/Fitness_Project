document.addEventListener("DOMContentLoaded", function() {
    console.log("Fitness website loaded successfully!");
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        let navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
