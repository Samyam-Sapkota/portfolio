document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scrollButton');

    // Add click event listener to the button
    scrollButton.addEventListener('click', function() {
        // Scroll down by 100 pixels
        window.scrollBy({
            top: 600, // Scroll down by 100 pixels
            left: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});