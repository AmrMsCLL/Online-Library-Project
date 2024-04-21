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
    fetch('../Assets/Assets-HTML/Side-Bar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('side-bar_reuseable').innerHTML = html;
        initToggleButton(); 
        setupLogoutButton();
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

function checkIsLoggedIn() {
    
    // remember me checkbox functionality to be added
    // if (RM) {
    // } else {
    // }
    const userDataJson = sessionStorage.getItem('LoggedInUser');
    
    if (userDataJson) {
        const userData = JSON.parse(userDataJson);
        return userData.loggedin;
    }
    return false;
}

function setupLogoutButton() {
    const loggingButton = document.getElementById('loggingButton'); 
    const userData = checkIsLoggedIn();

    if (userData) {
        loggingButton.innerHTML = '<span><ion-icon name="log-out-outline" class="icon logoutIcon"></ion-icon>logout</span>';
        loggingButton.href = '../../HTML/Home.html'
        loggingButton.addEventListener('click', function() {
            event.preventDefault();
            sessionStorage.removeItem('LoggedInUser');
            window.location.href = '../../HTML/Home.html'
        });
    } else {
        loggingButton.innerHTML = '<span><ion-icon name="log-in-outline" class="icon loginIcon"></ion-icon>login</span>';
        loggingButton.href = '../../HTML/Login.html'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadCSS('../Assets/Assets-Styles/Side-Bar.css', loadNav);  
});

