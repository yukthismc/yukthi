document.addEventListener('DOMContentLoaded', () => {
    // Update the heading text
    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = 'Yukthi';
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
