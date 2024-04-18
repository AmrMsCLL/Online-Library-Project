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



function validateForm() { 
    const form = document.querySelector('.content');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = this.querySelector('#userid').value;
        const email = this.querySelector('#emailid').value;
        const password = this.querySelector('#passid').value;
        const confirmPassword = this.querySelectorAll('#conpassid').value;
        const roleAdmin = this.querySelector('#admin').checked;
        const roleUser = this.querySelector('#user').checked;
        const chkBoxNews = this.querySelector('#chkboxnews').checked;
        
        let valid = true;
        let errorMessage = "";

        if (!username) {
            valid = false;
            errorMessage += "Username cannot be empty.\n";
        }

        if (!email.includes('@')) {
            valid = false;
            errorMessage += "Please enter a valid email.\n";
        }

        if (password.length < 8 || password.length > 20) {
            valid = false;
            errorMessage += "Password must be between 8 and 20 characters.\n";
            
        }

        // chr/num/symbol inclusion function here
        // for(pass) chk chr num symbol

        if (password != confirmPassword) {
            valid = false;
            errorMessage += "Passwords do not match.\n";
        }

        if (!roleAdmin && !roleUser) {
            valid = false;
            errorMessage += "Please select a role.\n";
        }

        // if (chkBoxNews){
        //     sendToeEmail(); Doesnt Exist
        // }
        
        // later going to check if email / username are already contained in a db of stored users phase 3 i guess ?

        if (valid) {
            console.log('111');
            this.submit();
        } else {
            alert(errorMessage);
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){
    toggleIcons();  
    validateForm();
});

