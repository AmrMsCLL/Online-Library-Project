function loadCSS(href, callback) {
  var cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";
  cssLink.href = href;
  document.getElementsByTagName("head")[0].appendChild(cssLink);

  cssLink.onload = function () {
    if (callback) callback();
  };
}

function loadNav() {
  fetch("../Assets/Assets-HTML/Side-Bar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("side-bar_reuseable").innerHTML = html;
      initToggleButton();
      setupLogoutButton();
    })
    .catch((error) => {
      console.warn("Error loading the nav: ", error);
    });
}

function initToggleButton() {
  const side_bar = document.querySelector(".side-bar");
  const toggle_btn = document.querySelector(".btn");

  if (side_bar && toggle_btn) {
    toggle_btn.addEventListener("click", () => {
      side_bar.classList.toggle("active");
    });
  } else {
    console.error("One or more elements not found");
  }
}

function checkIsLoggedIn() {
  const userDataJson = sessionStorage.getItem("LoggedInUser");

  if (userDataJson) {
    const userData = JSON.parse(userDataJson);
    return userData.loggedin;
  }
  return false;
}
function checkIsAdmin() {
  const userDataJson = sessionStorage.getItem("LoggedInUser");

  if (userDataJson) {
    const userData = JSON.parse(userDataJson);
    return userData.role;
  }
  return false;
}

function getUsername() {
  const userDataJson = sessionStorage.getItem("LoggedInUser");

  if (userDataJson) {
    const userData = JSON.parse(userDataJson);
    return userData.username;
  }
}

function setupLogoutButton() {
  const loggingButton = document.getElementById("loggingButton");
  const isLoggedIn = checkIsLoggedIn();
  const isAdmin = checkIsAdmin();
  const username = getUsername();

  if (isAdmin === 'Admin') {
    document.getElementById("addBook").style.display = "flex";
  } else {
    document.getElementById("addBook").style.display = "none";
  }

  if (isLoggedIn) {
    loggingButton.innerHTML = '<span><ion-icon name="log-out-outline" class="icon logoutIcon"></ion-icon>logout</span>';
    loggingButton.href = "../../HTML/Home.html";
    document.getElementById("profileText").innerHTML = `<a href="../../HTML/Profile.html">Hello, ${username}</a><img src="../../Imgs/user-profile.png">`;

    loggingButton.addEventListener("click", function () {
      event.preventDefault();
      sessionStorage.removeItem("LoggedInUser");
      window.location.href = "../../HTML/Home.html";
    });
  } else {
    const profileLink = document.getElementById('profileLink');
    profileLink.href = '../../HTML/Login.html'

    loggingButton.innerHTML =
      '<span><ion-icon name="log-in-outline" class="icon loginIcon"></ion-icon>login</span>';
    document.getElementById("profileText").style.display = "none";
    loggingButton.href = "../../HTML/Login.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadCSS("../Assets/Assets-Styles/Side-Bar.css", loadNav);
});
