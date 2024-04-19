
document.body.addEventListener("click", function(event) {

    let image = event.target.closest(".Card");
    if (image) {

        event.preventDefault();
        let name = image.querySelector("img").getAttribute("name");
        let url = image.querySelector("a").getAttribute("href");
        let imageSrc = image.querySelector("img").getAttribute("src");
        let price = image.querySelector("img").getAttribute("price");
        let availability = image.querySelector("img").getAttribute("availability");
        let category = image.querySelector("img").getAttribute("category");
        let author = image.querySelector("img").getAttribute("author");
        let description = image.querySelector("img").getAttribute("description");

        sessionStorage.setItem("name", name);
        sessionStorage.setItem("imageSrc", imageSrc);
        sessionStorage.setItem("price",price);
        sessionStorage.setItem("availability", availability)
        sessionStorage.setItem("category", category)
        sessionStorage.setItem("author", author)
        sessionStorage.setItem("description", description)
        window.location.href = url;
    }
});