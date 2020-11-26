const access_farmeroneform = () => {
const foName = document.farmeroneform.name;
const foUsername = document.farmeroneform.username;
const uniqueFO = document.farmeroneform.foNum;
const foDob = document.farmeroneform.dob;
const foWard = document.farmeroneform.ward;
const foDor = document.farmeroneform.dor;
const foNin = document.farmeroneform.nin;
const foPassword = document.farmeroneform.password;
const foPhon = document.farmeroneform.phonNum;
const foStay = document.farmeroneform.stayPeriod;
const foResidence = document.farmeroneform.residence;

//validation for name;
const regName = /^[a-zA-Z ]{5,50}$/
    if (foName.value.match(regName)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
       alert("name must be between 5-50 characters");
        foName.style.border = "2px solid red";
    };

 //validation for username;
const foneuserName = /^[0-9a-zA-Z]{5,50}$/;
if (foUsername.value.match(foneuserName)){
    
    //alert("right input");
    //userName.style.border = "2px solid green";
} else {
    alert("username must be between 5 and 50 characters and must contain alphanumeric characters ");
    foUsername.style.border = "2px solid red";
};

//validation for Uniquefonumber
const uniqueNum = /^[0-9a-zA-Z]{5}$/;
if (uniqueFO.value.match(uniqueNum)){
//    alert("right input");
//     fNin.style.border = "2px solid green";
} else {
   alert(" unique farmerone number must be alphanumeric and not less than 5 characters");
    uniqueFO.style.border = "2px solid red";
};

//validation for date of birth
if (foDob.value==''){
    alert('date must be filled in')
    foDob.style.border = "2px solid red";
};

//validate for ward
const wardFO = /^[0-9a-zA-Z ]+$/;
if (foWard.value.match(wardFO)){
 //    alert("right input");
 //     fWard.style.border = "2px solid green";
 } else {
    alert("ward must be alphanumeric");
     foWard.style.border = "2px solid red";
 };

//validation for date of birth
if (foDor.value==''){
    alert('date must be filled in')
    foDor.style.border = "2px solid red";
};

//validation for Nin
const ninFO = /^[0-9a-zA-Z]{13}$/;
if (foNin.value.match(ninFO)){
//    alert("right input");
//     fNin.style.border = "2px solid green";
} else {
   alert("nin must be alphanumeric and 13 characters");
    foNin.style.border = "2px solid red";
};

//validation for password
const Passfo = /^[0-9a-zA-Z]{4,}$/;
if (foPassword.value.match(Passfo)){
 //    alert("right input");
 //     fPassword.style.border = "2px solid green";
 } else {
    alert("password must not be less than 4 characters");
     foPassword.style.border = "2px solid red";
 };

  //validation for phone number
  const Phonefo = /^[0-9]{10}$/;
  if (foPhon.value.match(Phonefo)){
  //    alert("right input");
  //     fPhon.style.border = "2px solid green";
  } else {
     alert("phone number must be 10 characters and numeric only");
      foPhon.style.border = "2px solid red";
  };

//validation for stay period
const Period = /^[0-9]+$/;
if (foStay.value.match(Period)){
//    alert("right input");
//     fPhon.style.border = "2px solid green";
} else {
   alert("stayperiod must be numeric only");
    foStay.style.border = "2px solid red";
};

//validation for residence
const residenceType = /^[a-zA-Z]+$/;
if (foResidence.value.match(residenceType)){
//    alert("right input");
//     fPhon.style.border = "2px solid green";
} else {
   alert("residence type should be recorded");
    foResidence.style.border = "2px solid red";
    return false;
};

//validations for gender
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

//validations for activities
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


