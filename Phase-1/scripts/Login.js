// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('.content');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const username = this.querySelector('#user').value;
//         // const email = this.querySelector('#emailid').value;
//         const password = this.querySelector('#pass').value;
//         // const roleAdmin = this.querySelector('#admin').checked;
//         // const roleUser = this.querySelector('#user').checked;
//         // const chkBoxNews = this.querySelector('#chkboxnews').checked;
        
//         let valid = true;
//         let errorMessage = "";

//         if (!username) {
//             valid = false;
//             errorMessage += "Username cannot be empty.\n";
//         }

//         // email fetch function here

//         if (password.length < 8 || password.length > 20) {
//             valid = false;
//             errorMessage += "Password must be between 8 and 20 characters.\n";   
//         }

//         // if function for remember me check box 

//         // forgot password link functionality and rediriction 

//         // hiding login and showing logout when logged handling
//         // showing logout and showing login when not logged handling
        
//         //testing
//         // if (password !== '@theamsCLL2005'){
//         //     valid = false;
//         //     errorMessage = 'Password is not Correct';
//         // }

//         if (valid) {
//             this.submit();
//         } else {
//             alert(errorMessage);
//         }
//     });
// });

function loadRegisteredUsers() {
    const usersJson = localStorage.getItem('RegisteredUsers');
    return usersJson ? JSON.parse(usersJson) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.content');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;
        
        const users = loadRegisteredUsers();
        const isAlrdyReg = users.find(user => user.username === username && user.password === password);

        if (isAlrdyReg) {
            alert('Login Successful!');
            const rememberUser = document.getElementById('remmebx');
            console.log(rememberUser.checked)
            if(rememberUser.checked){
                const isLoggedIn = true;
                localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
            } else {
                const isLoggedIn = true;
                sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
            }
            window.location.href = '../HTML/Home.html';
        } else {
            alert('Invalid Username or Password. If you are not Registered, Please Register First.');
        }
    });
});