
const access_farmerregistrationform = () => {
const fName = document.farmerregistrationform.name;
const userName = document.farmerregistrationform.username;
const fPassword = document.farmerregistrationform.password;
const fWard = document.farmerregistrationform.ward;
const fNin = document.farmerregistrationform.nin;
const fPhon = document.farmerregistrationform.phonNum;
// const fDor = document.farmerregistrationform.dor;
const fDob = document.farmerregistrationform.dob;


//validation for name;
const regName = /^[a-zA-Z ]{5,50}$/
    // let regname =/^[a-zA-Z].*(\w\{5,50})+$/
    if (fName.value.match(regName)){
       
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
       alert("name must be between 5-50 characters");
        fName.style.border = "2px solid red";
    };

//validation for date of birth
if (fDob.value==''){
    alert('date must be filled in')
    fDob.style.border = "2px solid red";
}
//validation for username;
const fuserName = /^[0-9a-zA-Z]{5,50}$/;
    if (userName.value.match(fuserName)){
        
        //alert("right input");
        //userName.style.border = "2px solid green";
    } else {
        alert("username must be between 5 and 50 characters and must contain alphanumeric characters ");
        userName.style.border = "2px solid red";
    }


//validate for ward
const userW = /^[0-9a-zA-Z ]+$/;
if (fWard.value.match(userW)){
   
 //    alert("right input");
 //     fWard.style.border = "2px solid green";
 } else {
    alert("ward must be alphanumeric");
     fWard.style.border = "2px solid red";
 };

//validation for password
const userP = /^[0-9a-zA-Z]{4,}$/;
if (fPassword.value.match(userP)){
 //    alert("right input");
 //     fPassword.style.border = "2px solid green";
 } else {
    alert("password must not be less than 4 characters");
     fPassword.style.border = "2px solid red";
 };

 
 //validation for Nin
 const userN = /^[0-9a-zA-Z]{13}+$/;
 if (fNin.value.match(userN)){
   
 //    alert("right input");
 //     fNin.style.border = "2px solid green";
 } else {
    alert("nin must be alphanumeric and 13 characters");
     fNin.style.border = "2px solid red";
 };

 //validation for phone number
 const userPh = /^[0-9]{10}$/;
 if (fPhon.value.match(userPh)){
 //    alert("right input");
 //     fPhon.style.border = "2px solid green";
 } else {
    alert("phone number must be 10 characters and numeric only");
     fPhon.style.border = "2px solid red";
     return false;
 };

 let genderInput =document.getElementById('gender')
 //searching the element fro all input elements that are of type radio
 let radioarray = genderInput.querySelectorAll("input[type='radio']")
 //loop thru the collection of radio buttons
 for(let i=0; i<radioarray.length;i++){
     //test if there is any input element is checked, stop the looping
     if(radioarray[i].checked){
         break;
         //if we reach the end of the array and non is checked, put out the alert message
        }else if(i+1==radioarray.length){
            alert("gender should be selected")
            genderInput.style.border ="2px solid red";
        }

}

let activitiesInput =document.getElementById('activities')
let checkarray = activitiesInput.querySelectorAll("input[type='checkbox']")
for(let i=0; i<checkarray.length;i++){
    if(checkarray[i].checked){
        break;
       }else if(i+1==checkarray.length){
           alert("activities should be selected")
           activitiesInput.style.border ="2px solid red";
       }

}

};


