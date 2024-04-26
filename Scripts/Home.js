import { libraryBooksArray } from "../Scripts/LibraryBooks.js";

let library = [];

function loadLibraryFromLocalStorage() {
    const libraryJson = localStorage.getItem('LibraryBooks');
    library = libraryJson ? JSON.parse(libraryJson) : [];
}   

function groupHomeSections(books) {
    const allowedSections = ['Popular', 'Most Read', 'Sale'];
    return books.reduce((acc, book) => {
        if (allowedSections.includes(book.section)) {
            if (!acc[book.section]) {
                acc[book.section] = [];
            }
            acc[book.section].push(book);
        }
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
    img.src = book.imageSrc;
    img.alt = `Cover of ${book.name}`;
    img.setAttribute('name', book.name);
    img.setAttribute('width', '180px');
    img.setAttribute('height', '230px');
    img.setAttribute('price', book.price);
    img.setAttribute('author', book.author);
    img.setAttribute('availability', bookisavailablestring);
    img.setAttribute('category', book.category);
    img.setAttribute('description', book.description)
    img.setAttribute('section', book.section)
    img.classList.add('book-image');

    const link = document.createElement('a');
    link.href = `Book-Details.html`;
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
    
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('Slider_Content', section.replace(' ', ''));

        let iconName = '';
        if (section === 'Popular') {
            sectionDiv.setAttribute('id', 'GetStarTed')
            iconName = 'trending-up-outline';
        } else if (section === 'Sale') {
            iconName = 'pricetags-outline';
        } else if (section === 'Most Read') {
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
                top: elementPos - 60,
                behavior: 'smooth'
            });
        }, 0);
    }
}

function hoverEffect() {
    var Cards = document.querySelectorAll('.Card');

    Cards.forEach(function(card) {
        var imageDiv = card.querySelector('.image');
        var img = imageDiv.querySelector('img');
        var imageName = img.getAttribute('name');

        imageDiv.addEventListener('mouseover', function() {
            var textDiv = document.createElement('div');
            textDiv.className = 'hoverText';
            textDiv.innerText = imageName;
            imageDiv.appendChild(textDiv);
        });

        imageDiv.addEventListener('mouseout', function() {
            var textDiv = imageDiv.querySelector('.hoverText');
            imageDiv.removeChild(textDiv);
        })                                                                                                       ;
    });
}

function handleUserLoginState() {
    const userData = JSON.parse(sessionStorage.getItem('LoggedInUser'));
    const userDataRM = JSON.parse(localStorage.getItem('LoggedInUser'));
    if (userData || userDataRM) {
        const joinButton = document.getElementById('join');
        if (joinButton) {
            joinButton.style.display = 'none';
        }
    }

    if(!userData){
        document.getElementById('profileLink').href = 'Login.html'
    } 

    const availGetStarted = document.getElementById('startedaction');
    if (availGetStarted) {
        availGetStarted.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToElement('GetStarTed');
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    if (!localStorage.getItem('BooksLoaded')) {

        localStorage.setItem('LibraryBooks', JSON.stringify(libraryBooksArray));

        localStorage.setItem('BooksLoaded', 'true');
    }

    document.getElementById('joinButton').addEventListener('click', function() {
        alert('Please Log in through the login page')
        window.location.href = '../HTML/Login.html';
    });

    loadLibraryFromLocalStorage();
    handleUserLoginState();
    displayHomeSections(groupHomeSections(library));
    initiateswipe();
    hoverEffect();
});