let library = [
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', price: '19.99', section: 'Popular', availability: 'Available', imageUrl: '../Imgs/Books/ (1).jpg' },
    { name: 'Little Women', author: 'Louisa May Alcott', price: '18.99', section: 'Sales', availability: 'Available', imageUrl: '../Imgs/Books/ (12).jpg' },
    { name: 'Ulysses', author: 'James Joyce', price: '24.99', section: 'Most_read', availability: 'Available', imageUrl: '../Imgs/Books/ (23).jpg' },
    { name: '1984', author: 'George Orwell', price: '22.99', section: 'Popular', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (2).jpg' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '24.99', section: 'Popular', availability: 'Available', imageUrl: '../Imgs/Books/ (3).jpg' },
    { name: 'Pride and Prejudice', author: 'Jane Austen', price: '18.99', section: 'Popular', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (4).jpg' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee', price: '21.99', section: 'Popular', availability: 'Available', imageUrl: '../Imgs/Books/ (5).jpg' },
    { name: 'The Catcher in the Rye', author: 'J.D. Salinger', price: '20.99', section: 'Popular', availability: 'Available', imageUrl: '../Imgs/Books/ (6).jpg' },
    { name: 'The Hobbit', author: 'J.R.R. Tolkien', price: '22.50', section: 'Popular', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (7).jpg' },
    { name: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', price: '19.99', section: 'Sales', availability: 'Available', imageUrl: '../Imgs/Books/ (18).jpg' },
    { name: 'Invisible Man', author: 'Ralph Ellison', price: '23.99', section: 'Sales', availability: 'Available', imageUrl: '../Imgs/Books/ (19).jpg' },
    { name: 'Don Quixote', author: 'Miguel de Cervantes', price: '25.99', section: 'Sales', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (20).jpg' },
    { name: 'Beloved', author: 'Toni Morrison', price: '27.99', section: 'Sales', availability: 'Available', imageUrl: '../Imgs/Books/ (21).jpg' },
    { name: 'Brave New World', author: 'Aldous Huxley', price: '29.99', section: 'Sales', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (22).jpg' },
    { name: 'Fahrenheit 451', author: 'Ray Bradbury', price: '23.99', section: 'Popular', availability: 'Available', imageUrl: '../Imgs/Books/ (8).jpg' },
    { name: 'Madame Bovary', author: 'Gustave Flaubert', price: '25.99', section: 'Most_read', availability: 'Available', imageUrl: '../Imgs/Books/ (29).jpg' },
    { name: 'The Sun Also Rises', author: 'Ernest Hemingway', price: '27.99', section: 'Most_read', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (30).jpg' },
    { name: 'Wuthering Heights', author: 'Emily Brontë', price: '29.99', section: 'Most_read', availability: 'Available', imageUrl: '../Imgs/Books/ (31).jpg' },
    { name: 'Anna Karenina', author: 'Leo Tolstoy', price: '31.99', section: 'Most_read', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (32).jpg' },
    { name: 'The Trial', author: 'Franz Kafka', price: '33.99', section: 'Most_read', availability: 'Available', imageUrl: '../Imgs/Books/ (33).jpg' },
    { name: 'The Odyssey', author: 'Homer', price: '22.99', section: 'Most_read', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (24).jpg' },
    { name: 'War and Peace', author: 'Leo Tolstoy', price: '18.99', section: 'Most_read', availability: 'Available', imageUrl: '../Imgs/Books/ (25).jpg' },
    { name: 'Jane Eyre', author: 'Charlotte Brontë', price: '16.99', section: 'Sales', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (13).jpg' },
    { name: 'Catch-22', author: 'Joseph Heller', price: '15.99', section: 'Sales', availability: 'Available', imageUrl: '../Imgs/Books/ (14).jpg' },
    { name: 'Lord of the Flies', author: 'William Golding', price: '22.99', section: 'Sales', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (15).jpg' },
    { name: 'The Bell Jar', author: 'Sylvia Plath', price: '18.50', section: 'Sales', availability: 'Available', imageUrl: '../Imgs/Books/ (16).jpg' },
    { name: 'Dune', author: 'Frank Herbert', price: '21.99', section: 'Sales', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (17).jpg' },
    { name: 'Hamlet', author: 'William Shakespeare', price: '19.99', section: 'Most_read', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (26).jpg' },
    { name: 'The Divine Comedy', author: 'Dante Alighieri', price: '21.99', section: 'Most_read', availability: 'Available', imageUrl: '../Imgs/Books/ (27).jpg' },
    { name: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', price: '23.99', section: 'Most_read', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (28).jpg' },
    { name: '1984', author: 'George Orwell', price: '25.99', section: 'Popular', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (9).jpg' },
    { name: 'Moby Dick', author: 'Herman Melville', price: '27.99', section: 'Popular', availability: 'Available', imageUrl: '../Imgs/Books/ (10).jpg' },
    { name: 'The Catcher in the Rye', author: 'J.D. Salinger', price: '29.99', section: 'Popular', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (11).jpg' },
    // None section
    { name: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: '35.99', section: 'None', availability: 'Available', imageUrl: '../Imgs/Books/ (34).jpg' },
    { name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: '37.99', section: 'None', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (35).jpg' },
    { name: 'The Metamorphosis', author: 'Franz Kafka', price: '39.99', section: 'None', availability: 'Available', imageUrl: '../Imgs/Books/ (36).jpg' },
    { name: "Alice's Adventures in Wonderland", author: 'Lewis Carroll', price: '41.99', section: 'None', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (37).jpg' },
    { name: "Gulliver's Travels", author: 'Jonathan Swift', price: '43.99', section: 'None', availability: 'Available', imageUrl: '../Imgs/Books/ (38).jpg' },
    { name: 'Heart of Darkness', author: 'Joseph Conrad', price: '45.99', section: 'None', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (39).jpg' },
    { name: 'Frankenstein', author: 'Mary Shelley', price: '47.99', section: 'None', availability: 'Available', imageUrl: '../Imgs/Books/ (40).jpg' },
    { name: 'Dracula', author: 'Bram Stoker', price: '49.99', section: 'None', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (41).jpg' },
    { name: 'Robinson Crusoe', author: 'Daniel Defoe', price: '51.99', section: 'None', availability: 'Available', imageUrl: '../Imgs/Books/ (42).jpg' },
    { name: 'The Adventures of Tom Sawyer', author: 'Mark Twain', price: '53.99', section: 'None', availability: 'Unavailable', imageUrl: '../Imgs/Books/ (43).jpg' },
    { name: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', price: '55.99', section: 'None', availability: 'Available', imageUrl: '../Imgs/Books/ (44).jpg' }
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

    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = `Cover of ${book.name}`;
    img.setAttribute('name', book.name);
    img.setAttribute('width', '180px');
    img.setAttribute('height', '230px');
    img.setAttribute('price', book.price);
    img.setAttribute('author', book.author);
    img.setAttribute('availability', book.availability);
    img.classList.add('book-image');

    const link = document.createElement('a');
    link.href = `../Book-Details.html`;
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
            iconName = 'trending-up-outline';
        } else if (section === 'Sales') {
            iconName = 'pricetags-outline';
        } else if (section === 'Most_read') {
            iconName = 'book-outline';
        }

        const linkSection = document.createElement('a');
        linkSection.href = "../Book-Details.html";
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
        if (index < array.length - 1) {
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

