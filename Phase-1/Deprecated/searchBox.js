// window.onload = function() {
//     const params = new URLSearchParams(window.location.search);
//     const searchQuery = params.get('search');
//     const searchInput = document.getElementById('searchInput');

//     if (searchQuery) {
//         searchInput.value = searchQuery;
//         searchText();
//     }

//     searchInput.addEventListener('input', function() {
//         searchText();
//         updateURL(searchInput.value);
//     });
// };

// function searchTextnav() {
//     const input = document.getElementById('searchInputnav').value.toLowerCase();
//     const sections = document.querySelectorAll('.dropdown-content'); 

//     sections.forEach(section => {
//         let hasMatch = false;
//         const elements = section.querySelectorAll('li, p'); 

//         for (let i = 0; i < elements.length; i++) {
//             const element = elements[i];
//             let text = element.textContent.toLowerCase();

//             if (element.tagName.toLowerCase() === 'li') {
//                 text = Array.from(element.childNodes).filter(e => e.tagName !== 'B').map(e => e.textContent.toLowerCase()).join('');

//                 const nextElement = (i + 1 <= elements.length && elements[i + 1].tagName.toLowerCase() === 'p') ? elements[i + 1] : null;

//                 if (text.includes(input)) {
//                     element.style.display = 'block';
//                     if (nextElement) {
//                         nextElement.style.display = 'block';
//                     }
//                     hasMatch = true;
//                 }
//                 else {
//                     element.style.display = 'none';
//                     if (nextElement) {
//                         nextElement.style.display = 'none'; 
//                     }
//                 }
//             } 
//             else if (element.tagName.toLowerCase() === 'p') {
//                 const previousElement = (i - 1 >= 0 && elements[i - 1].tagName.toLowerCase() === 'li') ? elements[i - 1] : null;

//                 if (text.includes(input)) {
//                     element.style.display = 'block';
//                     if (previousElement) {
//                         previousElement.style.display = 'block';
//                     }
//                     hasMatch = true;
//                 } 
//                 else {
//                     element.style.display = 'none';
//                 }
//             }
//         }

//         section.parentElement.style.display = hasMatch ? 'block' : 'none';
//     });
// }

// function searchText() {
//     const input = document.getElementById('searchInput').value.toLowerCase();
//     const sections = document.querySelectorAll('.dropdown-content'); 

//     sections.forEach(section => {
//         let hasMatch = false;
//         const elements = section.querySelectorAll('li, p'); 

//         for (let i = 0; i < elements.length; i++) {
//             const element = elements[i];
//             let text = element.textContent.toLowerCase();

//             if (element.tagName.toLowerCase() === 'li') {
//                 text = Array.from(element.childNodes).filter(e => e.tagName !== 'B').map(e => e.textContent.toLowerCase()).join('');

//                 const nextElement = (i + 1 <= elements.length && elements[i + 1].tagName.toLowerCase() === 'p') ? elements[i + 1] : null;

//                 if (text.includes(input)) {
//                     element.style.display = 'block';
//                     if (nextElement) {
//                         nextElement.style.display = 'block';
//                     }
//                     hasMatch = true;
//                 }
//                 else {
//                     element.style.display = 'none';
//                     if (nextElement) {
//                         nextElement.style.display = 'none'; 
//                     }
//                 }
//             } 
//             else if (element.tagName.toLowerCase() === 'p') {
//                 const previousElement = (i - 1 >= 0 && elements[i - 1].tagName.toLowerCase() === 'li') ? elements[i - 1] : null;

//                 if (text.includes(input)) {
//                     element.style.display = 'block';
//                     if (previousElement) {
//                         previousElement.style.display = 'block';
//                     }
//                     hasMatch = true;
//                 } 
//                 else {
//                     element.style.display = 'none';
//                 }
//             }
//         }

//         section.parentElement.style.display = hasMatch ? 'block' : 'none';
//     });
// }

// function searchTextCategories() {
//     const input = document.getElementById('searchInputCategories').value.toLowerCase();
//     const sections = document.querySelectorAll('.dropdown-content'); 

//     sections.forEach(section => {
//         let hasMatch = false;
//         const elements = section.querySelectorAll('li, p'); 

//         for (let i = 0; i < elements.length; i++) {
//             const element = elements[i];
//             let text = element.textContent.toLowerCase();

//             if (element.tagName.toLowerCase() === 'li') {
//                 text = Array.from(element.childNodes).filter(e => e.tagName !== 'B').map(e => e.textContent.toLowerCase()).join('');

//                 const nextElement = (i + 1 <= elements.length && elements[i + 1].tagName.toLowerCase() === 'p') ? elements[i + 1] : null;

//                 if (text.includes(input)) {
//                     element.style.display = 'block';
//                     if (nextElement) {
//                         nextElement.style.display = 'block';
//                     }
//                     hasMatch = true;
//                 }
//                 else {
//                     element.style.display = 'none';
//                     if (nextElement) {
//                         nextElement.style.display = 'none'; 
//                     }
//                 }
//             } 
//             else if (element.tagName.toLowerCase() === 'p') {
//                 const previousElement = (i - 1 >= 0 && elements[i - 1].tagName.toLowerCase() === 'li') ? elements[i - 1] : null;

//                 if (text.includes(input)) {
//                     element.style.display = 'block';
//                     if (previousElement) {
//                         previousElement.style.display = 'block';
//                     }
//                     hasMatch = true;
//                 } 
//                 else {
//                     element.style.display = 'none';
//                 }
//             }
//         }

//         section.parentElement.style.display = hasMatch ? 'block' : 'none';
//     });
// }

// function updateURL(searchTerm) {
//     if (searchTerm) {
//         const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?search=' + encodeURIComponent(searchTerm);
//         window.history.pushState({path:newurl}, '', newurl);
//     } else {
//         const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
//         window.history.pushState({path:newurl}, '', newurl);
//     }
// }
