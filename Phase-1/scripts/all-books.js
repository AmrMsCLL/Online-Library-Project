let library = [
    { name: 'LOTR 1', author: 'lotr', category: 'Fiction', description: 'lotr novel description'  , imageUrl: 'Imgs/Books/ (1).jpg', price: '$15.99', availability: true  },
    { name: 'LOTR 1', author: 'lotr', category: 'Fiction', description: 'lotr novel description'  , imageUrl: 'Imgs/Books/ (1).jpg', price: '$15.99', availability: true  },
    { name: 'LOTR 1', author: 'lotr', category: 'Fiction', description: 'lotr novel description'  , imageUrl: 'Imgs/Books/ (1).jpg', price: '$15.99', availability: true  },
    { name: 'LOTR 1', author: 'lotr', category: 'Fiction', description: 'lotr novel description'  , imageUrl: 'Imgs/Books/ (1).jpg', price: '$15.99', availability: true  },
    { name: 'LOTR 1', author: 'lotr', category: 'Fiction', description: 'lotr novel description'  , imageUrl: 'Imgs/Books/ (1).jpg', price: '$15.99', availability: true  },
    { name: 'LOTR 2', author: 'lotr', category: 'Fiction', description: 'lotr 2 novel description', imageUrl: 'Imgs/Books/ (2).jpg', price: '$17.99', availability: true  },
    { name: 'GOT 1' , author: 'GOT' , category: 'Fiction', description: 'got novel description'   , imageUrl: 'Imgs/Books/ (3).jpg', price: '$19.99', availability: false },
    { name: 'The Art Of War', author: 'Sun Tzu', category: 'Military', description: 'A Dude Explaining The Art Of War', imageUrl: 'Imgs/Books/ (1).jpg'
    , price: '$75.99', availability: true},
];

// export default library;

function filterBooks() {
    const searchText = document.getElementById('search-input').value.toLowerCase();

    if (!searchText) {
        displayBooksByCategory(groupBooksByCategory(library));
        return;
    }

    let filteredBooks = searchText ? library.filter(book => {
        return book.name.toLowerCase().includes(searchText) ||
               book.author.toLowerCase().includes(searchText) ||
               book.category.toLowerCase().includes(searchText) ||
               book.description.toLowerCase().includes(searchText);
    }) : library;

    const booksByCategory = groupBooksByCategory(filteredBooks);
    displayBooksByCategory(booksByCategory);
    
    if (filteredBooks.length === 0){
        const container = document.getElementById('library-container');
        container.innerHTML = '<p class="nobooks">No books found that match your search criteria.</p>';
    }
    else {
        const booksByCategory = groupBooksByCategory(filteredBooks);
        displayBooksByCategory(booksByCategory);
    }
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
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const hash = url.hash;
     
    if (hash) {
        setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        // if (element) {
        //     element.scrollIntoView({ behavior: 'smooth' });
        // }   
        const elementPosition = element.getBoundingClientRect().top; 
        window.scrollBy({
            top: elementPosition - 60,
            behavior: 'smooth'
        });
        }, 350);
    }

    if (searchQuery) {
        document.getElementById('search-input').value = searchQuery;
        filterBooks();
    } 
    else {
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
        section.setAttribute('id', category)

        const header = document.createElement('h2');
        header.textContent = category;
        header.classList.add('section-header')
        section.appendChild(header);

        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-div');

            const img = document.createElement('img');
            img.src = book.imageUrl;
            img.alt = `Cover of ${book.name}`;
            img.classList.add('book-image');

            const link = document.createElement('a');
            link.href = `Book-Details.html?name=${encodeURIComponent(book.name)}&price=${encodeURIComponent(book.price)}`;
            link.setAttribute('name', book.name);
            link.setAttribute('price', book.price);

            link.appendChild(img);
            bookElement.appendChild(link);

            const bookName = document.createElement('h3');
            bookName.textContent = book.name;
            bookName.classList.add('book-name');
            bookElement.appendChild(bookName);

            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ${book.author}`;
            bookAuthor.classList.add('book-author');
            bookElement.appendChild(bookAuthor);

            const bookDescription = document.createElement('p');
            bookDescription.textContent = book.description;
            bookDescription.classList.add('book-description');
            bookElement.appendChild(bookDescription);

            const bookAvailability = document.createElement('p');
            bookAvailability.textContent = `Availability: ${book.availability ? 'Available' : 'UnAvailable'}`;
            bookAvailability.classList.add('book-availability');
            bookElement.appendChild(bookAvailability);

            section.appendChild(bookElement);
        });

        container.appendChild(section);
    }
}
