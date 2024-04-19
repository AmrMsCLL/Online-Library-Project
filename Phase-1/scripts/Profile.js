function loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('borrowedBooks');
    if (storedBooks) {
        borrowedBooks = JSON.parse(storedBooks);
    }
    return borrowedBooks;
}

console.log(loadBooksFromLocalStorage())

