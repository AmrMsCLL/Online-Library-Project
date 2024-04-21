function loadFromLocalStorage(localStorageName) {
    const storedBooks = localStorage.getItem(localStorageName);
    return storedBooks ? JSON.parse(storedBooks) : [];
}

function saveToLocalStorage(books, localStorageName) {
    localStorage.setItem(localStorageName, JSON.stringify(books));
}

function addBook(name, price, imageSrc, author, category, availability, description, section, localStorageName) {
    let books = loadFromLocalStorage(localStorageName);
    const existingBookIndex = books.findIndex(book => book.name === name);

    if (existingBookIndex !== -1) {
        alert("book already exists")
        return
    }

    let book = {
        name,
        price,
        imageSrc,
        author,
        category,
        availability,
        description,
        section
    };

    books.push(book);
    saveToLocalStorage(books, localStorageName);
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

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const price = document.getElementById('price-input').value;
        // const imageSrc = document.getElementById('imageSrc-input').value;
        const imageSrc = "../../Imgs/Books/ (43).jpg";
        const author = document.getElementById('author-input').value;
        const category = document.getElementById('category-input').value;
        const availability = document.getElementById('availability-input').value;
        const description = document.getElementById('description-input').value;
        const section = document.getElementById('section-input').value;

        addBook(name, price, imageSrc, author, category, availability, description, section, 'LibraryBooks');

        alert('Book added successfully');
        form.reset();
    });
});

