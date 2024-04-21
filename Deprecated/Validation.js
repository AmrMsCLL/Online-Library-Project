var isAdmin = false;
var isEmpty = true;
const loginWIndow = document.querySelector(".content")
 function btnClick(){
    const Admin = document.querySelector('input[name="radioName"]:checked').value;
    const userName = document.getElementById("user").value;

    console.log(Admin);
    console.log(userName);
 }