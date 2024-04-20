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

function addBook(name, price, imageUrl, author, category, availability, description, localStorageName) {

    let Books = loadFromLocalStorage(localStorageName);

    const existingBookIndex = Books.findIndex(book => book.name === name);
    if (existingBookIndex !== -1) {
        Books.splice(existingBookIndex, 1);
    }
    let book = {
        name: name,
        price: price,
        imageUrl: imageUrl,
        author: author,
        category: category,
        availability: availability,
        description: description
    };

    Books.push(book);
    saveToLocalStorage(Books, localStorageName);
}

function borrowBookFunc() {
    // borrowing system
    if(bookAvailability === 'Available'){
        document.getElementById("borrowButton").textContent = 'Borrow';
    } else {
        document.getElementById("borrowButton").textContent = 'Request';
    }

    document.getElementById('readButton').textContent = "Read Now!";
}

function loadFromLocalStorage(localStorageName) {
    const storedBooks = localStorage.getItem(localStorageName);
    return storedBooks ? JSON.parse(storedBooks) : [];
}

function saveToLocalStorage(books, localStorageName) {
    localStorage.setItem(localStorageName, JSON.stringify(books));
}

function rmvDupesInLocalStorage(localStorageName) {
    let books = loadFromLocalStorage(localStorageName);
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
    saveToLocalStorage(uniqueBooks, localStorageName);
}

let isBorrowed = false;

document.addEventListener('DOMContentLoaded', function() {
    addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "LastSeenBooks");
    rmvDupesInLocalStorage("LastSeenBooks");
    if (isBorrowed) {
        document.getElementById('borrowButton').style.display = 'none';
        document.getElementById('readButton').style.display = 'inline-block';
    } else {    
        document.getElementById('borrowButton').style.display = 'inline-block';
        document.getElementById('readButton').style.display = 'none';
    }
});
console.log(isBorrowed);
document.getElementById('borrowButton').addEventListener('click', function() {
    if (bookAvailability === 'Available') {
        addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "BorrowedBooks");
        rmvDupesInLocalStorage("BorrowedBooks");
        alert('Book Has Been Added To Borrowed Books List');
        isBorrowed = true;
    } else {
        addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "ReadBooks");
        alert('Book Has Been Added To Requested Books List');
        isBorrowed = false;
    }
    isBorrowedfunc();
});

function isBorrowedfunc(){
    console.log(isBorrowed);
    if (isBorrowed) {
        document.getElementById('borrowButton').style.display = 'none';
        document.getElementById('readButton').style.display = 'inline-block';
    } else {    
        document.getElementById('borrowButton').style.display = 'inline-block';
        document.getElementById('readButton').style.display = 'none';
    }
}

document.getElementById('readButton').addEventListener('click', function() { 
    // cant read books that are not borrowed so needs editing
    addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "ReadBooks");
    rmvDupesInLocalStorage("ReadBooks");
    alert('No Book Reading Functionality Yet!! SRY')
});

hideOrShowButton();
borrowBookFunc();
