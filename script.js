document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.left-content-area h1');
    const nameText = nameElement.textContent; // Get the full text "Chloé Anthony"
    nameElement.textContent = ''; // Clear the text initially

    let charIndex = 0;
    const typingSpeed = 100; // milliseconds per character

    function typeWriter() {
        if (charIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter(); // Start the typing effect when the page loads
});