document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

    document.querySelectorAll('.about-section, .why-choose-us-section, .terms-section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.boxShadow = "0 4px 32px rgba(76,175,80,0.15)";
            section.style.transform = "scale(1.01)";
            section.style.transition = "all 0.3s";
        });
        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = "";
            section.style.transform = "scale(1)";
        });
    });
}
);