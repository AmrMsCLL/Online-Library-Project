let name = sessionStorage.getItem("name");
let imageSrc = sessionStorage.getItem("imageSrc");
let price = sessionStorage.getItem("price");
let availability = sessionStorage.getItem("availability");
let category = sessionStorage.getItem("category");
let author = sessionStorage.getItem("author");
// let description = sessionStorage.getItem("description");

document.getElementById("name").textContent = name;
document.getElementById("image").src = imageSrc;
document.getElementById("price").textContent = price;
document.getElementById("availability").textContent = availability;
document.getElementById("category").textContent = ' - ' + category;
document.getElementById("author").textContent = 'Written By ' + author;
// document.getElementById("desciption").textContent = description;

const ionicon = document.getElementById('ionicon');
if(availability === 'Available'){
    ionicon.setAttribute('name', 'checkmark-circle-outline')
    ionicon.classList.add('available')
} else {
    ionicon.setAttribute('name', 'close-circle-outline');
    ionicon.classList.add('unavailable')
}

document.body.style.backgroundImage = "url('" + imageSrc + "')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

function hideOrShowButton() {
    let isAdmin = false; // will create a method to get is admin later
    if(isAdmin){
        document.getElementById('del').style.display = "flex";
        document.getElementById('edit').style.display = "flex";
    } else {
        document.getElementById('del').style.display = "none";
        document.getElementById('edit').style.display = "none";
    }
    
}

function borrowBookFunc() {
    // borrowing functionality or changing text or issuing a request // later
    if(availability === 'Available'){
        document.getElementById("borrowButton").textContent = 'Borrow';
    } else {
        document.getElementById("borrowButton").textContent = 'Request';
    }
}

hideOrShowButton();
borrowBookFunc();

