let library = [
    { name: 'LOTR 1', author: 'lotr', category: 'Fiction', description: 'lotr novel description' , imageUrl:'Imgs/Books/ (1).jpg'},
    { name: 'LOTR 2', author: 'lotr', category: 'Fiction', description: 'lotr 2 novel description' , imageUrl:'Imgs/Books/ (2).jpg'},
    { name: 'GOT 1', author: 'GOT', category: 'Fiction', description: 'got novel description' , imageUrl:'Imgs/Books/ (3).jpg'},
    { name: 'Science 1', author: 'Science prof', category: 'Science', description: 'Description 3' , imageUrl:'Imgs/Books/ (4).jpg'},
    { name: 'Scinece 2', author: 'Science prof', category: 'Science', description: 'Description 3' , imageUrl:'Imgs/Books/ (5).jpg'},
    { name: 'Science 3', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl:'Imgs/Books/ (6).jpg'},
    { name: 'Math 1', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (7).jpg' },
    { name: 'Math 2', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (8).jpg'},
    { name: 'Math 3', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (9).jpg'},
    { name: 'GOT 1', author: 'GOT', category: 'Fiction', description: 'got novel description' , imageUrl:'Imgs/Books/ (3).jpg'},
    { name: 'GOT 1', author: 'GOT', category: 'Fiction', description: 'got novel description' , imageUrl:'Imgs/Books/ (3).jpg'},
    { name: 'GOT 1', author: 'GOT', category: 'Fiction', description: 'got novel description' , imageUrl:'Imgs/Books/ (3).jpg'},
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Scinece 2', author: 'Science prof', category: 'Science', description: 'Description 3' , imageUrl:'Imgs/Books/ (5).jpg'},
    { name: 'Scinece 2', author: 'Science prof', category: 'Science', description: 'Description 3' , imageUrl:'Imgs/Books/ (5).jpg'},
    { name: 'Scinece 2', author: 'Science prof', category: 'Science', description: 'Description 3' , imageUrl:'Imgs/Books/ (5).jpg'},
    { name: 'Scinece 2', author: 'Science prof', category: 'Science', description: 'Description 3' , imageUrl:'Imgs/Books/ (5).jpg'},
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
    { name: 'Math 3', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (9).jpg'},
    { name: 'Math 3', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (9).jpg'},
    { name: 'Math 3', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (9).jpg'},
    { name: 'Math 3', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (9).jpg'},
    { name: 'Math 3', author: 'math prof', category: 'Math', description: 'Description 2', imageUrl:'Imgs/Books/ (9).jpg'},
    { name: 'Science 4', author: 'Science prof', category: 'Science', description: 'Description 3', imageUrl: 'Imgs/Books/ (10).jpg' },
];

function filterBooks() {
    const searchText = document.getElementById('search-input').value.toLowerCase();

    let filteredBooks = searchText ? library.filter(book => {
        return book.name.toLowerCase().includes(searchText) ||
               book.author.toLowerCase().includes(searchText) ||
               book.category.toLowerCase().includes(searchText) ||
               book.description.toLowerCase().includes(searchText);
    }) : library;

    const booksByCategory = groupBooksByCategory(filteredBooks);
    displayBooksByCategory(booksByCategory);
}

function updateUrlAndSearch() {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    if (history.pushState) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('search', searchText);
        history.pushState({ path: newUrl.toString() }, '', newUrl.toString());
    }

    filterBooks(searchText);
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        document.getElementById('search-input').value = searchQuery;
        filterBooks();
    } else {
        displayBooksByCategory(groupBooksByCategory(library))
    }
};

function groupBooksByCategory(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.category]) {
            acc[book.category] = [];
        }
        acc[book.category].push(book);
        return acc;
    }, {});
}

let booksByCategory = groupBooksByCategory();

function displayBooksByCategory(booksByCategory) {
    const container = document.getElementById('library-container');
    container.innerHTML = '';

    for (const [category, books] of Object.entries(booksByCategory)) {
        const section = document.createElement('section');
        section.classList.add('category-section');

        const header = document.createElement('h2');
        header.textContent = category;
        section.appendChild(header);

        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');

            const img = document.createElement('img');
            img.src = book.imageUrl;
            img.alt = `Cover of ${book.name}`;
            img.classList.add('book-image');
            bookElement.appendChild(img);

            const bookName = document.createElement('h3');
            bookName.textContent = book.name;
            bookElement.appendChild(bookName);

            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ${book.author}`;
            bookElement.appendChild(bookAuthor);

            const bookDescription = document.createElement('p');
            bookDescription.textContent = book.description;
            bookElement.appendChild(bookDescription);

            section.appendChild(bookElement);
        });

        container.appendChild(section);
    }
}
displayBooksByCategory();
