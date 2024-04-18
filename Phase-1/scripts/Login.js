document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.content');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = this.querySelector('#user').value;
        // const email = this.querySelector('#emailid').value;
        const password = this.querySelector('#pass').value;
        // const roleAdmin = this.querySelector('#admin').checked;
        // const roleUser = this.querySelector('#user').checked;
        // const chkBoxNews = this.querySelector('#chkboxnews').checked;
        
        let valid = true;
        let errorMessage = "";

        if (!username) {
            valid = false;
            errorMessage += "Username cannot be empty.\n";
        }

        // email fetch function here

        if (password.length < 8 || password.length > 20) {
            valid = false;
            errorMessage += "Password must be between 8 and 20 characters.\n";
            
        }

        // pass comparer with passwords stored in db function here // 

        // role check function here

        // if (chkBoxNews){
        //     sendToeEmail(); Doesnt Exist
        // }
        
        // later going to check if email / username are already contained in a db of stored users phase 3 i guess ?

        // if function for remember me check box 

        // forgot password link functionality and rediriction 

        // hiding login and showing logout when logged handling
        // showing logout and showing login when not logged handling
        
        //testing
        if (password !== '@theamsCLL2005'){
            valid = false;
            errorMessage = 'Password is not Correct';
        }

        if (valid) {
            this.submit();
        } else {
            alert(errorMessage);
        }
    });
});
