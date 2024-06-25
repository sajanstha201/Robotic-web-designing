

function valid_form (){
    var username=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var DOB=document.getElementById("DOB").value;
    var isValid = true;
if( username==""){
         alert("Input Name");
         isValid=false;
}

if(email==""){
    alert("Enter Email");
    isValid=false;
}

if(password==""){
  alert("Password Required");
  isValid=false;
}else if(password.length<6){
    alert("Password required 6 letter");
    isValid=false;
}
 
if(DOB==""){
    alert("DOB Required");
}else{
    var cdate= new Date();
    var  idate= new Date(DOB);
    if(idate>cdate){
        alert("Invalid Date");
        isValid=false;
    }
}



return isValid;

}

