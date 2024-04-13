function loadCSS(href, callback){
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = href;
    document.getElementsByTagName("head")[0].appendChild(cssLink);

    cssLink.onload = function() {
        if(callback) callback();
    };
}

function loadNav() {
    fetch('Assets/Side-Bar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('side-bar_reuseable').innerHTML = html;
        initToggleButton(); 
    })
    .catch(error => {
        console.warn('Error loading the nav: ', error);
    });
}

function initToggleButton() {
    const side_bar = document.querySelector('.side-bar');
    const toggle_btn = document.querySelector('.btn');
  
    if (side_bar && toggle_btn) {
      toggle_btn.addEventListener('click', () => {
          side_bar.classList.toggle('active');
      });
    } else {
      console.error('One or more elements not found');
    }
  }

loadCSS('Assets/Assets-Styles/Side-Bar.css', loadNav);