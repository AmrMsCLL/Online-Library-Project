fetch('Assets/Footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer_placeholder').innerHTML = html;
  })
  .catch(error => {
    console.warn('Error loading the footer: ', error);
  });
