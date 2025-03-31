window.onscroll = function () {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block"; // Show button when user scrolls down
    } else {
    btn.style.display = "none"; // Hide button when user is at the top
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}


    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach((link) => {
            link.addEventListener('click', function () {
                // Collapse the navbar when a link is clicked
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            });
        });
    });
