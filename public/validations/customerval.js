const access_bookingform=()=>{
const cName = document.bookingform.name;
const cPhone = document.bookingform.phonNum;
const cEmail = document.bookingform.mail;
const cDob = document.bookingform.dob;
const fName = document.bookingform.faname;
const pName = document.bookingform.pname;
const pQuantity = document.bookingform.quantity;
const cDod = document.bookingform.dod;

//validation for name;
const cusName = /^[a-zA-Z ]{5,50}$/
    if (cName.value.match(cusName)){
    //    alert("right input");
    //     cusName.style.border = "2px solid green";
    } else {
       alert("name must be between 5-50 characters");
        cName.style.border = "2px solid red";
        return false;
    };

//validation for phone number
 const cusPh = /^[0-9]{10}$/;
 if (cPhone.value.match(cusPh)){
 //    alert("right input");
 //     fPhon.style.border = "2px solid green";
 } else {
    alert("phone number must be 10 characters and numeric only");
     cPhone.style.border = "2px solid red";
    return false;
 };

 //validation for email
 const cusEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (cEmail.value.match(cusEmail)){
    //  alert("valid email");
    //  userEmail.style.border = "2px solid green";
   } else {
    alert("wrong email");
       cEmail.style.border = "2px solid red";
      return false;
  };

//validation for date of booking
if (cDob.value==''){
    alert('date must be filled in')
    cDob.style.border = "2px solid red";
    return false;
}

//validation for username;
  const fauser = /^[0-9a-z]{5,50}$/;
  if (fName.value.match(fauser)){
      //alert("right input");
      //userName.style.border = "2px solid green";
  } else {
      alert("username must be between 5 and 50 characters and must contain alphanumeric characters ");
      fName.style.border = "2px solid red";
      return false;
  };

  //validation for name;
  const itemName = /^[a-zA-Z]+$/
  if (pName.value.match(itemName)){
  //    alert("right input");
  //     fName.style.border = "2px solid green";
  } else {
     alert("name must be  characters");
      pName.style.border = "2px solid red";
      return false;
  };

  //validate for quantity
  const itemQ= /^[0-9a-z]+$/;
  if (pQuantity.value.match(itemQ)){
   //    alert("right input");
   //     fWard.style.border = "2px solid green";
   } else {
      alert("quantity must be alphanumeric only");
       pQuantity.style.border = "2px solid red";
      return false;
   };

 //validation for deadline of delivery
if (cDod.value==''){
    alert('date must be filled in')
    cDod.style.border = "2px solid red";
   return false;
}

//validations for mode of payment
  let modeofpaymentInput =document.getElementById('modeofpayment')
  let radioarray = modeofpaymentInput.querySelectorAll("input[type='radio']")
  for(let i=0; i<radioarray.length;i++){
      if(radioarray[i].checked){
          break;
         }else if(i+1==radioarray.length){
             alert("modeofpayment should be corrected" )
             modeofpaymentInput.style.border ="2px solid red";
            return false;
         }
  }
  //validations for mode of delivery
  let modeofdeliveryInput =document.getElementById('modeofdelivery')
  let radiosarray = modeofdeliveryInput.querySelectorAll("input[type='radio']")
  for(let i=0; i<radiosarray.length;i++){
      if(radiosarray[i].checked){
          break;
         }else if(i+1==radiosarray.length){
             alert("mode of delivery should be selected")
             modeofdeliveryInput.style.border ="2px solid red";
             return false;
         }
  }
};