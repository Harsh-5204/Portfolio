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

    const roleText = document.getElementById("role-text");
  const roles = ["React Developer", "Web Developer"];
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (typing) {
      if (charIndex < currentRole.length) {
        roleText.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        typing = false;
        setTimeout(typeEffect, 1500); // Wait before starting to delete
      }
    } else {
      if (charIndex > 0) {
        roleText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300); // Wait before typing next word
      }
    }
  }

  typeEffect();


  
 

  const cursor = document.querySelector(".cursor");
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;
  requestAnimationFrame(animate);
}
animate();

// document.querySelectorAll('a, button').forEach(el => {
//   el.addEventListener('mouseenter', () => cursor.classList.add('active'));
//   el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
// });