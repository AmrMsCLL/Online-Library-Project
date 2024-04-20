function toggleIcons() {
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling.previousElementSibling; // Assumes input is two siblings before (because of the lock icon)
            if (input.type === 'password') {
                input.type = 'text';
                this.name = 'eye'; // Change the icon to 'eye'
            } else {
                input.type = 'password';
                this.name = 'eye-off'; // Change the icon back to 'eye-off'
            }
        });
    });
}

function loadUserData() {
    const data = localStorage.getItem('RegisteredUsers');
    return data ? JSON.parse(data) : [];
}

function saveUserData(data) {
    localStorage.setItem('RegisteredUsers', JSON.stringify(data));
}

function handleSubmit() {
    const form = document.querySelector('.content');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('userid').value.trim();
        const email = document.getElementById('emailid').value.trim();
        const password = document.getElementById('passid').value;
        const confirmPassword = document.getElementById('conpassid').value;
        const isAdmin = document.getElementById('admin').checked;
        const isUser = document.getElementById('user').checked;

        let errorMessage = "";
        if (!username) {
            errorMessage += "Username cannot be empty.\n";
        }
        if (!email.includes('@')) {
            errorMessage += "Please enter a valid email.\n";
        }

        
        // chr/num/symbol inclusion function here
        // for(pass) chk chr num symbol

        if (password.length < 8 || password.length > 20) {
            errorMessage += "Password must be between 8 and 20 characters.\n";
        }
        if (password !== confirmPassword) {
            errorMessage += "Passwords do not match.\n";
        }
        if (!isAdmin && !isUser) {
            errorMessage += "Please select a role (Admin or User).\n";
        }
        
        // if (chkBoxNews){
        //     sendToeEmail(); Doesnt Exist
        // }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        const userData = loadUserData();
        const isAlrdyReg = userData.some(user => user.username === username || user.email === email);
        if (isAlrdyReg) {
            alert('A user with the same username or email already exists.');
            return;
        }

        const newUser = {
            username,
            email,
            password,
            role: isAdmin ? 'Admin' : 'User'
        };

        userData.push(newUser);
        saveUserData(userData);
        alert('User registered successfully.');
        window.location.replace('../HTML/Login.html');
    });
}

document.addEventListener('DOMContentLoaded', function(){
    toggleIcons();
    handleSubmit(); 
});

