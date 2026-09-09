# Online Library

A nine-page library storefront built with no framework, no build step and no backend — plain HTML,
CSS and ES modules, with `localStorage` standing in for the database. Web Technology course at
FCAI, Cairo University.

## Pages

| Page | What it does |
| :--- | :--- |
| `Home.html` | Landing page with featured shelves — **open this first** |
| `AllBooks.html` | The full catalogue, searchable by title or author |
| `Categories.html` | Browse by category across 17 subjects |
| `Book-Details.html` | Single book — cover, author, price, availability, blurb |
| `AddBook.html` | Add a title to the catalogue |
| `Login.html` / `SignUp.html` | Account creation and sign-in with form validation |
| `Profile.html` | The signed-in user's account |
| `About.html` | Project and team information |

## Catalogue

`Scripts/LibraryBooks.js` exports the whole catalogue as a module — 88 books across 17 categories,
each with a cover, author, price, availability flag and description, grouped into `Popular`,
`Most Read` and `Sale` shelves:

```js
export const libraryBooksArray = [
  {
    section: "Popular",
    name: "The Art Of War",
    author: "Sun Tzu",
    category: "Military",
    price: "$29.99",
    availability: true,
    imageSrc: "../Imgs/Books/(1).jpg",
    description: "...",
  },
];
```

## Running it

`Home.js` is an ES module and the shared chrome is loaded with `fetch`, both of which browsers
block over `file://`. Serve the folder instead of opening the files directly:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000/HTML/Home.html>.

**Start at `Home.html`.** It is the only page that imports the catalogue module, and it seeds
`localStorage["LibraryBooks"]` from it on first load. Every other page reads the catalogue back out
of `localStorage`, so opening one of them first shows an empty library.

> Accounts and any books you add live in `localStorage` too. Clear site data for a clean run, or
> state from a previous session carries over.

## Layout

```
HTML/      the nine pages
Styles/    one stylesheet per page
Scripts/   one script per page, plus LibraryBooks.js (the catalogue)
Assets/    shared sidebar and footer, injected at runtime
Imgs/      91 book covers and page artwork
Deprecated/  earlier drafts, kept for reference
```

Shared chrome lives in `Assets/`: `LoadSide-Bar.js` and `loadfooter.js` fetch the sidebar and
footer fragments and inject them into each page, styles included, so that markup exists in one
place instead of nine.

`Sliderswiper.js` is the shelf carousel — hand-written against `scrollBy` with prev/next buttons
that disable at each end, despite what the filename suggests. No slider library is used.

## Credits

A five-person project:

- Amr Mohamed El-Sheriey — [@AmrMsCLL](https://github.com/AmrMsCLL)
- Ahmed Mohamed Saber
- Omar Mahfouz
- Medhat Ahmed
- Mohamed Gamal
