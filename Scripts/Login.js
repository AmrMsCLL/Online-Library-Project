function loadRegisteredUsers() {
  const usersJson = localStorage.getItem("RegisteredUsers");
  return usersJson ? JSON.parse(usersJson) : [];
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".content");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    const users = loadRegisteredUsers();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert("Login Successful!");
      const rememberUser = document.getElementById("remmebx");

      const loggedInUser = {
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        loggedin: "true",
      };

      if (rememberUser.checked) {
        localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
      } else {
        sessionStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
      }
      window.location.href = "../HTML/index.html";
    } else {
      alert(
        "Invalid Username or Password. If you are not Registered, Please Register First."
      );
    }
  });
});
