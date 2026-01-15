// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

// Move cursor with mouse
document.addEventListener('mousemove', function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Add a slight delay to the outer circle for smooth effect
    setTimeout(() => {
        cursor2.style.left = (e.clientX - 20) + 'px'; // -20 to center the 40px circle
        cursor2.style.top = (e.clientY - 20) + 'px';
    }, 50);
});

// Hover Effect on Links and Buttons
const clickableElements = document.querySelectorAll('a, button, .category-card');

clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor2.style.transform = "scale(1.5)";
        cursor2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        cursor2.style.borderColor = "transparent";
    });
    
    element.addEventListener('mouseleave', () => {
        cursor2.style.transform = "scale(1)";
        cursor2.style.backgroundColor = "transparent";
        cursor2.style.borderColor = "rgba(255, 255, 255, 0.5)";
    });
});
