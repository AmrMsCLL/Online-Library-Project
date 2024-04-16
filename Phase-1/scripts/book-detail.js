document.body.addEventListener("click", function(event) {
    var image = event.target.closest(".sliderCard");
    if (image) {
        event.preventDefault();
        var name = image.querySelector("img").getAttribute("name");
        var url = image.querySelector("a").getAttribute("href");
        var imageSrc = image.querySelector("img").getAttribute("src");
        var price=image.querySelector("img").getAttribute("price");
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("imageSrc", imageSrc);
        sessionStorage.setItem("price",price);
        window.location.href = url;
    }
});