function loadBooksFromLocalStorage(localStorageName) {
  const storedBooks = localStorage.getItem(localStorageName);
  if (storedBooks) {
    Books = JSON.parse(storedBooks);
    Books.reverse();
  }
  return Books;
}

function displayLastSeen(books) {
  const lastContainer = document.getElementById("lastContainer");
  lastContainer.innerHTML = "";

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title");

  const ionicon = document.createElement("ion-icon");
  ionicon.setAttribute("name", "time-outline");

  titleContainer.appendChild(ionicon);

  const h2Container = document.createElement("h2");
  h2Container.innerHTML = "Last Seen";

  const hr = document.createElement("hr");

  titleContainer.appendChild(h2Container);
  lastContainer.appendChild(titleContainer);
  lastContainer.appendChild(hr);

  for (let i = 0; i < Math.min(books.length, 5); i++) {
    const book = books[i];
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("Card");

    const bookCoverContainer = document.createElement("div");
    bookCoverContainer.classList.add("bookCover");

    const cardLink = document.createElement("a");
    cardLink.href = "../HTML/Book-Details.html";

    const cardImg = document.createElement("img");
    cardImg.alt = `Cover of ${book.name}`;
    cardImg.setAttribute("src", book.imageSrc);
    cardImg.setAttribute("name", book.name);
    cardImg.setAttribute("price", book.price);
    cardImg.setAttribute("availability", book.availability);
    cardImg.setAttribute("category", book.category);
    cardImg.setAttribute("author", book.author);
    cardImg.setAttribute("description", book.description);
    console.log(book.imageSrc);

    cardLink.appendChild(cardImg);
    bookCoverContainer.appendChild(cardLink);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details");

    const detailsName = document.createElement("p");
    const detailsCate = document.createElement("p");
    const detailsAuth = document.createElement("p");
    const detailsDesc = document.createElement("p");
    const detailsAvail = document.createElement("p");
    const detailsPrice = document.createElement("p");

    const alertNoLastSeen = document.createElement("h2");
    if (book.length === 0) {
      alertNoLastSeen.textContent = "Go Check Some Books Out";
    } else {
      alertNoLastSeen.textContent = "";
    }

    detailsName.textContent = `Name: ${book.name}`;
    detailsCate.textContent = `Category: ${book.category}`;
    detailsAuth.textContent = `Author: ${book.author}`;
    detailsDesc.textContent = `Description: ${book.description}`;
    detailsPrice.textContent = `Price: ${book.price}`;
    detailsAvail.textContent = `Availability: ${book.availability}`;

    detailsName.classList.add("detailsPtag");
    detailsCate.classList.add("detailsPtag");
    detailsAuth.classList.add("detailsPtag");
    detailsDesc.classList.add("detailsPtag");
    detailsPrice.classList.add("detailsPtag");
    detailsAvail.classList.add("detailsPtag");

    detailsContainer.appendChild(detailsName);
    detailsContainer.appendChild(detailsCate);
    detailsContainer.appendChild(detailsAuth);
    detailsContainer.appendChild(detailsDesc);
    detailsContainer.appendChild(detailsPrice);
    detailsContainer.appendChild(detailsAvail);

    const hr2 = document.createElement("hr");

    cardContainer.appendChild(bookCoverContainer);
    cardContainer.appendChild(detailsContainer);
    lastContainer.appendChild(cardContainer);
    lastContainer.appendChild(hr2);
  }
}

function displayBorrowed(books) {
  const borrowedContainer = document.getElementById("borrowedContainer");
  borrowedContainer.innerHTML = "";

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title");

  const ionicon = document.createElement("ion-icon");
  ionicon.setAttribute("name", "book-outline");

  titleContainer.appendChild(ionicon);

  const h2Container = document.createElement("h2");
  h2Container.innerHTML = "Borrowed Books";

  const hr = document.createElement("hr");

  titleContainer.appendChild(h2Container);
  borrowedContainer.appendChild(titleContainer);
  borrowedContainer.appendChild(hr);

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("Card");

    const bookCoverContainer = document.createElement("div");
    bookCoverContainer.classList.add("bookCover");

    const cardLink = document.createElement("a");
    cardLink.href = "../HTML/Book-Details.html";

    const cardImg = document.createElement("img");
    cardImg.alt = `Cover of ${book.name}`;
    cardImg.setAttribute("src", book.imageSrc);
    cardImg.setAttribute("name", book.name);
    cardImg.setAttribute("price", book.price);
    cardImg.setAttribute("availability", book.availability);
    cardImg.setAttribute("category", book.category);
    cardImg.setAttribute("author", book.author);
    cardImg.setAttribute("description", book.description);

    cardLink.appendChild(cardImg);
    bookCoverContainer.appendChild(cardLink);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details");

    const detailsName = document.createElement("p");
    const detailsCate = document.createElement("p");
    const detailsAuth = document.createElement("p");
    const detailsDesc = document.createElement("p");
    const detailsAvail = document.createElement("p");
    const detailsPrice = document.createElement("p");

    detailsName.textContent = `Name: ${book.name}`;
    detailsCate.textContent = `Category: ${book.category}`;
    detailsAuth.textContent = `Author: ${book.author}`;
    detailsDesc.textContent = `Description: ${book.description}`;
    detailsPrice.textContent = `Price: ${book.price}`;
    detailsAvail.textContent = `Availability: ${book.availability}`;

    detailsName.classList.add("detailsPtag");
    detailsCate.classList.add("detailsPtag");
    detailsAuth.classList.add("detailsPtag");
    detailsDesc.classList.add("detailsPtag");
    detailsPrice.classList.add("detailsPtag");
    detailsAvail.classList.add("detailsPtag");

    detailsContainer.appendChild(detailsName);
    detailsContainer.appendChild(detailsCate);
    detailsContainer.appendChild(detailsAuth);
    detailsContainer.appendChild(detailsDesc);
    detailsContainer.appendChild(detailsPrice);
    detailsContainer.appendChild(detailsAvail);

    const hr2 = document.createElement("hr");

    cardContainer.appendChild(bookCoverContainer);
    cardContainer.appendChild(detailsContainer);
    borrowedContainer.appendChild(cardContainer);
    borrowedContainer.appendChild(hr2);
  }
}

function getUserData() {
  const userDataJson = sessionStorage.getItem("LoggedInUser");
  if (userDataJson) {
    const userData = JSON.parse(userDataJson);
    return {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    };
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  const userDataArr = getUserData();

  console.log(userDataArr);

  document.getElementById(
    "usernameText"
  ).innerHTML = `Username: ${userDataArr.username}`;
  document.getElementById(
    "emailText"
  ).innerHTML = `Email: ${userDataArr.email}`;
  document.getElementById(
    "roleText"
  ).innerHTML = `Password: ${userDataArr.password}`;
  document.getElementById(
    "passwordText"
  ).innerHTML = `Role: ${userDataArr.role}`;

  document
    .getElementById("editProfileButton")
    .addEventListener("click", function () {
      alert("Unfortuneatly there is no Edit Functionality Currently");
    });

  const latestBooks = loadBooksFromLocalStorage("LastSeenBooks");
  displayLastSeen(latestBooks);

  const borrowedBooks = loadBooksFromLocalStorage("BorrowedBooks");
  displayBorrowed(borrowedBooks);

  document.getElementById("borrowNum").textContent = borrowedBooks.length;

  const readBooks = loadBooksFromLocalStorage("ReadBooks");
  document.getElementById("readNum").textContent = readBooks.length;

  const pointsPerReadBook = 2.5;
  const pointsPerBorrowedBook = 4.5;
  const recentActivityBonus = latestBooks.length * 1.5;

  const rp =
    15 *
    (readBooks.length * pointsPerReadBook +
      borrowedBooks.length * pointsPerBorrowedBook +
      recentActivityBonus);

  document.getElementById("rewardPoints").textContent = rp;
});
