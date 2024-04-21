const bookName = sessionStorage.getItem("name");
const bookImageSrc = sessionStorage.getItem("imageSrc");
const bookPrice = sessionStorage.getItem("price");
const bookAvailability = sessionStorage.getItem("availability");
const bookCategory = sessionStorage.getItem("category");
const bookAuthor = sessionStorage.getItem("author");
const bookDescription = sessionStorage.getItem("description");
const bookSection = sessionStorage.getItem('section');

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

function loadFromLocalStorage(localStorageName) {
    const storedBooks = localStorage.getItem(localStorageName);
    return storedBooks ? JSON.parse(storedBooks) : [];
}

function saveToLocalStorage(books, localStorageName) {
    localStorage.setItem(localStorageName, JSON.stringify(books));
}

function deleteBookFromLibrary(bookName, localStorageName = 'LibraryBooks') {
    let books = loadFromLocalStorage(localStorageName);

    const index = books.findIndex(book => book.name === bookName);
    if (index !== -1) {
        books.splice(index, 1);
        saveToLocalStorage(books, localStorageName);
        alert(`Book deleted: ${bookName}`);
            window.location.href = '../HTML/Home.html';
    } else {
        alert('Book not found');
    }
}

function getIsAdmin() {
    // if (RM) {
    //     const userDataJson = sessionStorage.getItem('LoggedInUser');
    // } else {
    //     const userDataJson = sessionStorage.getItem('LoggedInUser');
    // }
    const userDataJson = localStorage.getItem('RegisteredUsers');
    
    if (userDataJson) {
        const userData = JSON.parse(userDataJson);
        return userData.role;
    }
    return false;
}

function hideOrShowButton() {

    let isAdmin = getIsAdmin();

    if(!isAdmin){
        document.getElementById('delButton').style.display = "flex";
        document.getElementById('editButton').style.display = "flex";
    } else {
        document.getElementById('delButton').style.display = "none";
        document.getElementById('editButton').style.display = "none";
    }
}

function addBook(name, price, imageSrc, author, category, availability, description, localStorageName) {

    let Books = loadFromLocalStorage(localStorageName);

    const existingBookIndex = Books.findIndex(book => book.name === name);
    if (existingBookIndex !== -1) {
        Books.splice(existingBookIndex, 1);
    }
    let book = {
        name: name,
        price: price,
        imageSrc: imageSrc,
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

function isBookBorrowed(bookName) {
    let borrowedBooks = loadFromLocalStorage("BorrowedBooks");
    return borrowedBooks.some(book => book.name === bookName);
}

let isBorrowed = false;

document.getElementById('borrowButton').addEventListener('click', function() {
    if (bookAvailability === 'Available') {
        addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "BorrowedBooks");
        rmvDupesInLocalStorage("BorrowedBooks");
        alert('Book Has Been Added To Borrowed Books List');
        isBorrowed = true;
    } else {
        addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "RequestedBooks");
        alert('Book Has Been Added To Requested Books List');
        isBorrowed = false;
    }
    isBorrowedfunc();
});

document.getElementById('readButton').addEventListener('click', function() { 
    addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "ReadBooks");
    rmvDupesInLocalStorage("ReadBooks");
    alert('No Book Reading Functionality Yet!! SRY')
});

function isBorrowedfunc(){
    if (isBorrowed) {
        document.getElementById('borrowButton').style.display = 'none';
        document.getElementById('readButton').style.display = 'inline-block';
    } else {    
        document.getElementById('borrowButton').style.display = 'inline-block';
        document.getElementById('readButton').style.display = 'none';
    }
}

hideOrShowButton();
borrowBookFunc();

function editBookDetails() {
    const textContainer = document.getElementById('text-container');
    textContainer.innerHTML = '';

    const fields = ['name', 'author', 'category', 'price', 'availability', 'description', 'section', 'imageSrc'];
    const form = document.createElement('form');
    form.id = 'editForm';

   fields.forEach(field => {
        const label = document.createElement('label');
        label.htmlFor = `${field}-input`;
        label.textContent = `${capitalize(field)}: `;
        label.id = `${field}-input-label`;
        const input = document.createElement(field === 'description' ? 'textarea' : 'input');
        input.id = `${field}-input`;
        input.name = field;
        input.value = sessionStorage.getItem(field);
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    const saveButton = document.getElementById('saveButton');
    saveButton.onclick = saveBookDetails;
    saveButton.style.display = 'flex';

    const cancelButton = document.getElementById('cancelButton');
    cancelButton.style.display = 'flex';
    cancelButton.onclick = () => window.location.reload();
    form.appendChild(saveButton);
    form.appendChild(cancelButton);
    textContainer.appendChild(form);
    
    // document.getElementById('imageSrc-input').style.display =  'none';
    // document.getElementById('imageSrc-input-label').style.display = 'none';
}

function saveBookDetails() {
    const form = document.getElementById('editForm');
    const formData = new FormData(form);
    const updatedBook = {};

    formData.forEach((value, key) => {
        updatedBook[key] = value;
    });

    const books = loadFromLocalStorage('LibraryBooks');
    const bookIndex = books.findIndex(book => book.name === sessionStorage.getItem("name"));
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        books.push(updatedBook);
        saveToLocalStorage(books, 'LibraryBooks');
        alert('Book details updated successfully!');
        window.location.href = '../HTML/Home.html';
    } else {
        alert('Book not found.');
    }
    let img = document.getElementById('image');
    img.setAttribute('src', '../Imgs/Books/ (43).jpg');
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener('DOMContentLoaded', function() {
    addBook(bookName, bookPrice, bookImageSrc, bookAuthor, bookCategory, bookAvailability, bookDescription, "LastSeenBooks");
    rmvDupesInLocalStorage("LastSeenBooks");

    const bookIsBorrowed = isBookBorrowed(bookName);
    if (bookIsBorrowed) {
        document.getElementById('borrowButton').style.display = 'none';
        document.getElementById('readButton').style.display = 'inline-block';
    } else {    
        document.getElementById('borrowButton').style.display = 'inline-block';
        document.getElementById('readButton').style.display = 'none';
    }
    const delButton = document.getElementById('delButton');
    if (delButton) {
        delButton.addEventListener('click', () => {
            const bookName = sessionStorage.getItem("name");
            deleteBookFromLibrary(bookName);
        });
    }
    const editButton = document.getElementById('editButton');
    if (editButton) {
        editButton.addEventListener('click', editBookDetails);
    }
});