function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        setTimeout(() => {
            const elementPos = element.getBoundingClientRect().top;
            window.scrollBy({
                top: elementPos - 100,
                behavior: 'smooth'
            });
        }, 150);
    }
  }
  