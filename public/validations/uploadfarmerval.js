const access_uploadufarmer =()=>{
const proName = document.uploadufarmer.pname;
const proWard = document.uploadufarmer.ward;
const proDate = document.uploadufarmer.dou;
const proPrice = document.uploadufarmer.price;
const proQuantity = document.uploadufarmer.quantity;
const proEmail = document.uploadufarmer.mail;
const proPhon = document.uploadufarmer.phonNum;
const proUser = document.uploadufarmer.username;

//validation for name;
    const itemName = /^[a-zA-Z]+$/
    if (proName.value.match(itemName)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
       alert("name must be  characters");
        proName.style.border = "2px solid red";
        return false;
    };

    //validate for ward
    const itemW = /^[0-9a-zA-Z ]+$/;
    if (proWard.value.match(itemW)){
       
     //    alert("right input");
     //     fWard.style.border = "2px solid green";
     } else {
        alert("ward must be alphanumeric");
         proWard.style.border = "2px solid red";
        //  return false;
     };

    //validation for uploaddate
    if (proDate.value==''){
        alert('date must be filled in')
        proDate.style.border = "2px solid red";
        return false;
    }

     //validate for price
    const itemP = /^[0-9a-z]+$/;
    if (proPrice.value.match(itemP)){
     //    alert("right input");
     //     fWard.style.border = "2px solid green";
     } else {
        alert("price must be alphanumeric only and must not have any special characters");
         proPrice.style.border = "2px solid red";
        //  return false;
     };
    
    //validate for quantity
    const itemQ= /^[0-9a-z]+$/;
    if (proQuantity.value.match(itemQ)){
     //    alert("right input");
     //     fWard.style.border = "2px solid green";
     } else {
        alert("quantity must be alphanumeric only");
         proQuantity.style.border = "2px solid red";
        //  return false;
     };

     //validation for email
     const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (proEmail.value.match(validEmail)){
        //  alert("valid email");
        //  userEmail.style.border = "2px solid green";
       } else {
        alert("wrong email");
           proEmail.style.border = "2px solid red";
        //    return false;
      };

       //validation for username;
    const fauser = /^[0-9a-zA-Z]{5,50}$/;
    if (proUser.value.match(fauser)){
        //alert("right input");
        //userName.style.border = "2px solid green";
    } else {
        alert("username must be between 5 and 50 characters and must contain alphanumeric characters ");
        proUser.style.border = "2px solid red";
        return false;
    };
     
     //validation for phone number
    const userPh = /^[0-9]{10}$/;
    if (proPhon.value.match(userPh)){
    //    alert("right input");
    //     fPhon.style.border = "2px solid green";
    } else {
        alert("phone number must be 10 characters and numeric only");
        proPhon.style.border = "2px solid red";
        return false;
    };

    //validation for modeofpayment
     let modeofpaymentInput =document.getElementById('modeofpayment')
     let checkarray = modeofpaymentInput.querySelectorAll("input[type='checkbox']")
     for(let i=0; i<checkarray.length;i++){
     if(checkarray[i].checked){
        break;
       }else if(i+1==checkarray.length){
           alert("modeofpayment should be selected")
           modeofpaymentInput.style.border ="2px solid red";
           return false;
       }

}

//validation for modeofdelivery
    let modeofdeliveryInput =document.getElementById('modeofdelivery')
     let checksarray = modeofdeliveryInput.querySelectorAll("input[type='checkbox']")
     for(let i=0; i<checksarray.length;i++){
     if(checksarray[i].checked){
        break;
       }else if(i+1==checksarray.length){
           alert("modeofdelivery should be selected")
           modeofdeliveryInput.style.border ="2px solid red";
       }

}

    //validations for product type
let producttypeInput =document.getElementById('producttype')
let radioarray = producttypeInput.querySelectorAll("input[type='radio']")
for(let i=0; i<radioarray.length;i++){
    if(radioarray[i].checked){
        break;
       }else if(i+1==radioarray.length){
           alert("productype should be selected")
           producttypeInput.style.border ="2px solid red";
           return false;
       }
}

//validations for availability
let availabilityInput =document.getElementById('availability')
let radiosarray = availabilityInput.querySelectorAll("input[type='radio']")
for(let i=0; i<radiosarray.length;i++){
    if(radiosarray[i].checked){
        break;
       }else if(i+1==radiosarray.length){
           alert("availability status should be selected")
           availabilityInput.style.border ="2px solid red";
           return false;
       }
       
}
};