// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Add hover effect to cursor when hovering over links
const links = document.querySelectorAll('a, button');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor2.style.transform = "scale(2)";
        cursor2.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });
    link.addEventListener('mouseleave', () => {
        cursor2.style.transform = "scale(1)";
        cursor2.style.backgroundColor = "rgba(0, 210, 255, 0.3)";
    });
});
