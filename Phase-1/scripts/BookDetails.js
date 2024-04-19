
const bookName = sessionStorage.getItem("name");
const bookImageSrc = sessionStorage.getItem("imageSrc");
const bookPrice = sessionStorage.getItem("price");
const bookAvailability = sessionStorage.getItem("availability");
const bookCategory = sessionStorage.getItem("category");
const bookAuthor = sessionStorage.getItem("author");
const bookDescription = sessionStorage.getItem("description");

document.getElementById("name").textContent = bookName;
document.getElementById("image").src = bookImageSrc;
document.getElementById("price").textContent = bookPrice;
document.getElementById("availability").textContent = bookAvailability;
document.getElementById("category").textContent = ' - ' + bookCategory;
document.getElementById("author").textContent = 'Written By ' + bookAuthor;
document.getElementById("description").textContent = bookDescription;

const ionicon = document.getElementById('ionicon');
if(bookAvailability === 'Available'){
    ionicon.setAttribute('name', 'checkmark-circle-outline')
    ionicon.classList.add('available')
} else {
    ionicon.setAttribute('name', 'close-circle-outline');
    ionicon.classList.add('unavailable')
}

document.body.style.backgroundImage = "url('" + bookImageSrc + "')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

function hideOrShowButton() {
    let isAdmin = false; // will create a method to get is admin later
    if(isAdmin){
        document.getElementById('delButton').style.display = "flex";
        document.getElementById('editButton').style.display = "flex";
    } else {
        document.getElementById('delButton').style.display = "none";
        document.getElementById('editButton').style.display = "none";
    }
}

// the following next funcitons were designed to display borrowed books in profile but was used with last seen 
// will make them seperate and actually add a borrowed books place in profile 

let borrowedBooks = [];

function addBorrowedBook(name, price, imageUrl, author, category, availability, description) {
    if (borrowedBooks.some(book => book.name === name)) {
    } else {
        loadBooksFromLocalStorage();

        let book = {
            name: name,
            price: price,
            imageUrl: imageUrl,
            author: author,
            category: category,
            availability: availability,
            description: description
        };
        borrowedBooks.push(book);
        saveBooksToLocalStorage();
    }
}

function borrowBookFunc() {
    if(bookAvailability === 'Available'){
        document.getElementById("mainButton").textContent = 'Borrow';
    } else {
        document.getElementById("mainButton").textContent = 'Request';
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        addBorrowedBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription);
        removeDuplicatesDirectlyInLocalStorage();
    });
}

function loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('borrowedBooks');
    if (storedBooks) {
        borrowedBooks = JSON.parse(storedBooks);
    }
    return borrowedBooks;
}

function saveBooksToLocalStorage() {
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
}

function removeDuplicatesDirectlyInLocalStorage() {
    const books = loadBooksFromLocalStorage();
    const seenBooks = new Set();
    const uniqueBooks = [];

    books.forEach(book => {
        if (!seenBooks.has(book.name)) {
            seenBooks.add(book.name);
            uniqueBooks.push(book);
        } else {
            console.log('Duplicate found and removed:', book.name);
        }
    });

    localStorage.setItem('borrowedBooks', JSON.stringify(uniqueBooks));
}

hideOrShowButton();
borrowBookFunc();