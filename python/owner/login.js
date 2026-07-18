function login(){

let user=

document.getElementById("username").value;

let pass=

document.getElementById("password").value;

if(

user==="admin"

&&

pass==="123456"

){

localStorage.setItem("admin","true");

window.location.href="dashboard.html";

}

else{

alert("Wrong Username Or Password");

}

}