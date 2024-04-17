function displayHomeSections(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.section]) {
            acc[book.section] = [];
        }
        acc[book. section].push(book);
        return acc;
    }, {});
}

let booksBySections = displayHomeSections();

function displayHomeSections(booksBySections) {
    const container = document.getElementById('home-container');
    container.innerHTML = '';

    for (const [section, books] of Object.entries(booksBySections)) {
        const 
    }

    books.forEach(book => {
        // funciton to filter books depending on status in array status: 
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('Card')

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('book-cover')

        const img = document.createElement('img')
        img.src = book.imageUrl;
        img.alt = `cover of ${book.name}`;
        img.setAttribute('name', book.name);
        img.setAttribute('price', book.price);
        img.setAttribute('availability', varAvailable);
        img.classList.add('book-image');

        const link = document.createElement('a');
        link.href = `Book-Details.html?name=${encodeURIComponent(book.name)}&price=${encodeURIComponent(book.price)}`;
        link.classList.add('link-class')

        link.appendChild(img);
        imgDiv.appendChild(link);
        cardDiv.appendChild(imgDiv);
    })

