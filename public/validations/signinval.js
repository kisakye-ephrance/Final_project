//declare a function access_signupform
const access_signinform = () => {

    //console.log(e)
    //e.preventdefault();
    //const signin = document.signinform;
  
    const userName = document.signinform.name;
    const userPassword = document.signinform.password;
    const userEmail = document.signinform.email;
    

    const signinName = /^[a-zA-Z].*[\s\.]*$/;
    if (userName.value.match(signinName)){
        console.log(userName.value);
        //alert("right input");
        //userName.style.border = "2px solid green";
    } else {
        alert("wrong input");
        userName.style.border = "2px solid red";
    }
    
    const signinPassword = /^\w{7,12}$/;
    if (userPassword.value.match(signinPassword)){
        console.log(userPassword.value);
       // alert("right password");
        //userPassword.style.border="2px solid green";
    }else {
        alert("password must be between 7-12 characters");
        userPassword.style.border ="2px solid purple";
       return false;
    };
    
    const signinEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail.value.match(signinEmail)){
       console.log(userEmail.value);
        //alert("valid email");
        //userEmail.style.border = "2px solid green";
      } else {
       alert("wrong email");
          userEmail.style.border = "2px solid red";
     };
    // signin.addEventListener('submit',(event)=>{e.preventdefault(); return false},false);
    }


    //function mySubmitFunction(e) { e.preventDefault(); someBug(); return false; }
