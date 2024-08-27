document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Get the target section based on the href attribute
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Check if the target section exists
        if (targetSection) {
            targetSection.style.display = 'block';
        } else {
            console.error('Target section not found:', this.getAttribute('href'));
        }
    });
});
