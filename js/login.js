function validate(){

    var email=document.getElementById("email").nodeValue;
    var password=document.getElementById("password").nodeValue;

    if(email == "noobmaster69" && password == "iamnoob"){
        alert("login succesful");
        return false;
    }
    else{
        alert("login failed"); 
    }
  
}