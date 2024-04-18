function initiateswipe() {
    const sliderContents = document.querySelectorAll(".Slider_Content");

    sliderContents.forEach(sliderContent => {
        const sliderButtons = sliderContent.querySelectorAll(".slider_Button");
        const BooksList = sliderContent.querySelector(".slider");
    
        const maxScrollLeft = BooksList.scrollWidth - BooksList.clientWidth;
    
        sliderButtons.forEach(button => {
            button.addEventListener("click", () => {
                console.log(button);
                const direction = button.id === "prev" ? -1 : 1;
                const scrollAmount = BooksList.clientWidth * direction;
                BooksList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                console.log(BooksList)
                console.log(10)
            });
        });
    
        const handleSliderButtons = () => {
            const limit = 10;
            sliderButtons[0].style.display = BooksList.scrollLeft <= 0 ? "none" : "block";
            sliderButtons[1].style.display = BooksList.scrollLeft >= maxScrollLeft-limit ? "none" : "block";
        };
    
        BooksList.addEventListener("scroll", handleSliderButtons);
    });
}