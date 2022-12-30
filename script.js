function myFunction() {
    var fname,lname,email,reason;
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    reason=document.getElementById("reason").value;
    if(fname&&lname&&email&&reason){
        alert("Success");
    }
    
}