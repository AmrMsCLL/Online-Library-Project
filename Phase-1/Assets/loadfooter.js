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

function loadFooter() {
    fetch('Assets/Footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer_reuseable').innerHTML = html;
    })
    .catch(error => {
        console.warn('Error loading the Footer: ', error);
    });
}

loadCSS('Assets/Assets-Styles/Footer.css', loadFooter);
