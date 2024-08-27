document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});
