let library = [
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', price: '9.99', section: 'Popular', category: 'Classic Literature', availability: true, imageUrl: '../Imgs/Books/ (1).jpg' },
    { name: '1984', author: 'George Orwell', price: '14.99', section: 'Sales', category: 'Dystopian', availability: false, imageUrl: '../Imgs/Books/ (2).jpg' },
    { name: 'Pride and Prejudice', author: 'Jane Austen', price: '12.99', section: 'Most_read', category: 'Classic Romance', availability: true, imageUrl: '../Imgs/Books/ (3).jpg' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', price: '9.99', section: 'Popular', category: 'Classic', availability: true, imageUrl: '../Imgs/Books/ (1).jpg' },
    { name: '1984', author: 'George Orwell', price: '14.99', section: 'Sales', category: 'Dystopian', availability: false, imageUrl: '../Imgs/Books/ (2).jpg' },
    { name: 'Pride and Prejudice', author: 'Jane Austen', price: '12.99', section: 'Most_read', category: 'Classic Romance', availability: true, imageUrl: '../Imgs/Books/ (3).jpg' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '15.99', section: 'Popular', category: 'Classic', availability: false, imageUrl: '../Imgs/Books/ (4).jpg' },
    { name: 'Catcher in the Rye', author: 'J.D. Salinger', price: '11.99', section: 'Sales', category: 'Literary Fiction', availability: true, imageUrl: '../Imgs/Books/ (5).jpg' },
    { name: 'The Hobbit', author: 'J.R.R. Tolkien', price: '10.99', section: 'Most_read', category: 'Fantasy', availability: false, imageUrl: '../Imgs/Books/ (6).jpg' },
    { name: 'The Alchemist', author: 'Paulo Coelho', price: '18.99', section: 'Popular', category: 'Philosophical Fiction', availability: true, imageUrl: '../Imgs/Books/ (7).jpg' },
    { name: 'The Little Prince', author: 'Antoine de Saint-Exupéry', price: '16.99', section: 'Sales', category: 'Children\'s Literature', availability: false, imageUrl: '../Imgs/Books/ (8).jpg' },
    { name: 'Wuthering Heights', author: 'Emily Brontë', price: '13.99', section: 'Most_read', category: 'Classic Fiction', availability: true, imageUrl: '../Imgs/Books/ (9).jpg' },
    { name: 'Jane Eyre', author: 'Charlotte Brontë', price: '17.99', section: 'Popular', category: 'Gothic Fiction', availability: false, imageUrl: '../Imgs/Books/ (10).jpg' },
    { name: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: '15.99', section: 'None', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (34).jpg' },
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '16.99', section: 'None', category: 'Sales', availability: false, imageUrl: '../Imgs/Books/ (35).jpg' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '10.99', section: 'Popular', category: 'Popular', availability: true, imageUrl: '../Imgs/Books/ (4).jpg' },
    { name: 'War and Peace', author: 'Leo Tolstoy', price: '13.99', section: 'Sales', category: 'Historical Fiction', availability: false, imageUrl: '../Imgs/Books/ (5).jpg' },
    { name: 'Anna Karenina', author: 'Leo Tolstoy', price: '18.99', section: 'Most_read', category: 'Most_read', availability: true, imageUrl: '../Imgs/Books/ (6).jpg' },
    { name: 'The Catcher in the Rye', author: 'J.D. Salinger', price: '11.99', section: 'Popular', category: 'Literary Fiction', availability: false, imageUrl: '../Imgs/Books/ (7).jpg' },
    { name: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', price: '20.99', section: 'Sales', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (8).jpg' },
    { name: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: '15.99', section: 'None', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (34).jpg' },
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '16.99', section: 'None', category: 'Gothic', availability: false, imageUrl: '../Imgs/Books/ (35).jpg' },
    
];

function displayNoBooksFound() {
    const container = document.getElementById('library-container');
    container.innerHTML = '<p class="nobooks">No books found that match your search criteria.</p>';
}

function filterAvailableBooks() {
    let availableBooks = library.filter(book => book.availability);

    const booksByCategory = groupBooksByCategory(availableBooks);
    displayBooksByCategory(booksByCategory);

    if (availableBooks.length === 0) {
        updateUrlAndSearch();
        displayNoBooksFound();
    }
}

document.getElementById('available-only-checkbox').addEventListener('change', () => {
    if (document.getElementById('available-only-checkbox').checked) {
        filterAvailableBooks();
    } else {
        updateUrlAndSearch();
        displayBooksByCategory(groupBooksByCategory(library));
    }
});

function filterBooks() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const showAvailableOnly = document.getElementById('available-only-checkbox').checked;

    if (!searchText) {
        if (showAvailableOnly) {
            filterAvailableBooks();
        } else {
            displayBooksByCategory(groupBooksByCategory(library));
            return;
        }
    }

    let filteredBooks = library.filter(book => {
        const matchesSearchText = searchText ? 
            book.name.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText) ||
            book.category.toLowerCase().includes(searchText) : true;
            // book.description.toLowerCase().includes(searchText) 
        
        const matchesAvailability = showAvailableOnly ? book.availability : true;

        return matchesSearchText && matchesAvailability;
    });

    const booksByCategory = groupBooksByCategory(filteredBooks);
    displayBooksByCategory(booksByCategory);

    if (filteredBooks.length === 0){
        displayNoBooksFound();
    } else {
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
      
        const elementPosition = element.getBoundingClientRect().top; 
        window.scrollBy({
            top: elementPosition - 160,
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
    // container.classList.add('Card')
    container.innerHTML = '';

    for (const [category, books] of Object.entries(booksByCategory)) {
        const section = document.createElement('section');
        section.classList.add('category-section');
        section.setAttribute('id', category)

        const header = document.createElement('h2');
        header.textContent = category;
        header.classList.add('section-header')
        container.appendChild(header);

        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-div');
            bookElement.classList.add('Card');

            let varAvailable;
            function checkAvailabilitystatus(){
                if(book.availability){
                    varAvailable = "Available"
                } else {
                    varAvailable = "Unavailable"
                }
            }
            checkAvailabilitystatus();

            const img = document.createElement('img');
            img.src = book.imageUrl;
            img.alt = `Cover of ${book.name}`;
            img.setAttribute('name', book.name);
            img.setAttribute('price', book.price);
            img.setAttribute('availability', varAvailable);
            img.classList.add('book-image');
            
            const link = document.createElement('a');
            link.href = `Book-Details.html?name=${encodeURIComponent(book.name)}&price=${encodeURIComponent(book.price)}`;
            link.classList.add('link-class')

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

            // const bookDescription = document.createElement('p');
            // bookDescription.textContent = book.description;
            // bookDescription.classList.add('book-description');
            // bookElement.appendChild(bookDescription);

            const bookAvailability = document.createElement('p');
            bookAvailability.textContent = ` Status: ${book.availability ? 'Available' : 'Unavailable'}`;
            if(book.availability){
                bookAvailability.classList.add('available-true');
            } else {
                bookAvailability.classList.add('available-false');
            }
            bookElement.appendChild(bookAvailability);

            section.appendChild(bookElement);
        }
    );
        container.appendChild(section);
    }
}