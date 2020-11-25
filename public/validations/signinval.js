//declare a function access_signupform
const access_signinform = () => {
    const userName = document.signinform.username;
    const userPassword = document.signinform.password;
  
    

    const signinName = /^[0-9a-zA-Z]{5,50}$/;
    if (userName.value.match(signinName)){
        console.log(userName.value);
        //alert("right input");
        //userName.style.border = "2px solid green";
    } else {
        alert("name must be between 5 and 50 characters ");
        userName.style.border = "2px solid red";
        return false;
    }
    
    const signinPassword = /^\w{7,12}$/;
    if (userPassword.value.match(signinPassword)){
        console.log(userPassword.value);
       // alert("right password");
        //userPassword.style.border="2px solid green";
    }else {
        alert("password must be between 7-12 characters");
        userPassword.style.border ="2px solid red";
       return false;
    };
     }


    
