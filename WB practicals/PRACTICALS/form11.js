// function validateForm() {
//     let x = document.forms["myform"]["fname","lname","father","mother","course","Country","State","District"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

function validateForm(){
    var a = document.getElementById("fname","lname","father","mother","course","Country","State","District").value;
    var b = document.getElementById("rg.no").value;
    var c = document.getElementById("pass").value;
    var d = document.getElementById("passcnf").value;
    var e = document.getElementById("mobile number").value;
    var f = document.getElementById("email").value;

    if(a==""||b==""||c==""||d==""||e==""||f=="")
    {
        alert("all field must be mandatory");
        return false;
    }
    else if(b.length<13||b.length>13){
        alert("registration number should be right")
        return false;
    }
    else if(isNaN(c)){
        alert("only numbers are allowed")
        return false;
    }
    else if(c!=d){
        alert("plz enter same password in")
        return false;
    }
    else if(e.length<10||e.length>10){
        alert("enter valid 10 digit number")
        return false;
    }
    else if(f!=/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-zA-Z]$/){
        alert("number should contain @ with letter")
        return false;
    }
    else
    {
        true
    }
}


