function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        setTimeout(() => {
            const elementPos = element.getBoundingClientRect().top;
            window.scrollBy({
                top: elementPos - 60,
                behavior: 'smooth'
            });
        }, 150);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayHomeSections(groupHomeSections(library));
    initiateswipe();
    hoverEffect();
    
    const availGetStarted = document.getElementById('startedaction');
    if (availGetStarted) {
        availGetStarted.addEventListener('click', function() {
            event.preventDefault();
            scrollToElement('GetStarTed');
        });
    }
});