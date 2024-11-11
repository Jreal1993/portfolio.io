// Smooth scroll to section when clicking on "Learn More" button
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // Adjust for header height
        behavior: "smooth"
    });
}

// Toggle the navigation menu on mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Form submission (for demo, you can replace with real API or email service)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    document.getElementById("contact-form").reset();
});

