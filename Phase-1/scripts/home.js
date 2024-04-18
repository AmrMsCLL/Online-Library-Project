let library = [
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', price: '9.99', section: 'Popular', category: 'Classic Literature', availability: true, category: 'smth', imageUrl: '../Imgs/Books/ (1).jpg' },
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
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '16.99', section: 'None', category: 'Gothic', availability: false, imageUrl: '../Imgs/Books/ (35).jpg' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '10.99', section: 'Popular', category: 'Classic Literature', availability: true, imageUrl: '../Imgs/Books/ (4).jpg' },
    { name: 'War and Peace', author: 'Leo Tolstoy', price: '13.99', section: 'Sales', category: 'Historical Fiction', availability: false, imageUrl: '../Imgs/Books/ (5).jpg' },
    { name: 'Anna Karenina', author: 'Leo Tolstoy', price: '18.99', section: 'Most_read', category: 'Literary Fiction', availability: true, imageUrl: '../Imgs/Books/ (6).jpg' },
    { name: 'The Catcher in the Rye', author: 'J.D. Salinger', price: '11.99', section: 'Popular', category: 'Literary Fiction', availability: false, imageUrl: '../Imgs/Books/ (7).jpg' },
    { name: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', price: '20.99', section: 'Sales', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (8).jpg' },
    { name: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: '15.99', section: 'None', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (34).jpg' },
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '16.99', section: 'None', category: 'Gothic', availability: false, imageUrl: '../Imgs/Books/ (35).jpg' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', price: '9.99', section: 'Popular', category: 'Classic Literature', availability: true, category: 'smth', imageUrl: '../Imgs/Books/ (1).jpg' },
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
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '16.99', section: 'None', category: 'Gothic', availability: false, imageUrl: '../Imgs/Books/ (35).jpg' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '10.99', section: 'Popular', category: 'Classic Literature', availability: true, imageUrl: '../Imgs/Books/ (4).jpg' },
    { name: 'War and Peace', author: 'Leo Tolstoy', price: '13.99', section: 'Sales', category: 'Historical Fiction', availability: false, imageUrl: '../Imgs/Books/ (5).jpg' },
    { name: 'Anna Karenina', author: 'Leo Tolstoy', price: '18.99', section: 'Most_read', category: 'Literary Fiction', availability: true, imageUrl: '../Imgs/Books/ (6).jpg' },
    { name: 'The Catcher in the Rye', author: 'J.D. Salinger', price: '11.99', section: 'Popular', category: 'Literary Fiction', availability: false, imageUrl: '../Imgs/Books/ (7).jpg' },
    { name: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', price: '20.99', section: 'Sales', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (8).jpg' },
    { name: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: '15.99', section: 'None', category: 'Philosophical Novel', availability: true, imageUrl: '../Imgs/Books/ (34).jpg' },
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '16.99', section: 'None', category: 'Gothic', availability: false, imageUrl: '../Imgs/Books/ (35).jpg' },
];

function groupHomeSections(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.section]) {
            acc[book.section] = [];
        }
        acc[book.section].push(book);
        return acc;
    }, {});
}

function createBookCard(book) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('Card');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image');

    let bookisavailablestring;
    if(book.availability){
        bookisavailablestring = "Available";
    } else {
        bookisavailablestring = "Unavailable";
    }

    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = `Cover of ${book.name}`;
    img.setAttribute('name', book.name);
    img.setAttribute('width', '180px');
    img.setAttribute('height', '230px');
    img.setAttribute('price', book.price);
    img.setAttribute('author', book.author);
    img.setAttribute('availability', bookisavailablestring);
    img.setAttribute('category', book.category);
    img.classList.add('book-image');

    const link = document.createElement('a');
    link.href = `Book-Details.html`;
    // ?name=${encodeURIComponent(book.name)}`;
    link.classList.add('link-class');
    link.appendChild(img);

    imgDiv.appendChild(link);
    cardDiv.appendChild(imgDiv);

    return cardDiv;
}

function displayHomeSections(booksBySections) {
    const container = document.getElementById('home-container');
    container.innerHTML = '';
    Object.entries(booksBySections).forEach(([section, books], index, array) => {
        if (section === 'None') {
            return;
        }
    
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('Slider_Content', section.replace(' ', ''));

        let iconName = '';
        if (section === 'Popular') {
            sectionDiv.setAttribute('id', 'GetStarTed')
            iconName = 'trending-up-outline';
        } else if (section === 'Sales') {
            iconName = 'pricetags-outline';
        } else if (section === 'Most_read') {
            iconName = 'book-outline';
        }

        const linkSection = document.createElement('a');
        linkSection.href = `AllBooks.html#${section}`;
        linkSection.innerHTML = `<h2>${section} <ion-icon class="popIcon" name="${iconName}"></ion-icon></h2>`;
        sectionDiv.appendChild(linkSection);

        const buttonPrev = document.createElement('button');
        buttonPrev.classList.add('slider_Button', 'material-symbols-rounded');
        buttonPrev.textContent = "chevron_left";
        buttonPrev.setAttribute('id', 'prev')
        buttonPrev.setAttribute('onclick', 'initiateswipe()')
        sectionDiv.appendChild(buttonPrev);

        const divSlider = document.createElement('div');
        divSlider.classList.add('slider');

        books.forEach(book => {
            const cardDiv = createBookCard(book);   
            divSlider.appendChild(cardDiv);
        });

        sectionDiv.appendChild(divSlider);

        const buttonNext = document.createElement('button');
        buttonNext.classList.add('slider_Button', 'material-symbols-rounded');
        buttonNext.textContent = "chevron_right";
        buttonNext.setAttribute('id', 'next')
        buttonNext.setAttribute('onclick', 'initiateswipe()')
        sectionDiv.appendChild(buttonNext);

        container.appendChild(sectionDiv);
        if (index < array.length - 2) {
            container.appendChild(document.createElement('hr'));
            container.appendChild(document.createElement('br'));
            container.appendChild(document.createElement('br'));
        }
    });
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        setTimeout(() => {
            const elementPos = element.getBoundingClientRect().top;
            window.scrollBy({
                top: elementPos - 100,
                behavior: 'smooth'
            });
        }, 150);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayHomeSections(groupHomeSections(library));
});

