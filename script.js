function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('d-none');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('d-none');
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

//typewriter!
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const text = "I am a general biology major studying at University of California San Diego.";
    let index = 0;
    const typingSpeed = 50; // Faster typing speed (in milliseconds)
    

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    // Start typing effect
    typewriterElement.innerHTML = ''; // Clear any existing text
    type();
});

