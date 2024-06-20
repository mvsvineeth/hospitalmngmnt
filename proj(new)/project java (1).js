function val(){

 var count=0;
    
    if(document.myform.r1.value==""){
        if(count==0){
        alert("Please fill the required information")}
        document.getElementById("r1c").style="background-color: red;"
          count++;
    }

    if(document.myform.r2.value==""){
       if(count==0){
        alert("Please fill the required information")}
        document.getElementById("r2c").style="background-color: red;"
        count++;
    }

    if(document.myform.r3.value==""){
        if(count==0){
        alert("Please fill the required information")}
        document.getElementById("r3c").style="background-color: red;"
        count++;

    }

    if(document.myform.r4.value==""){
        if(count==0){
        alert("Please fill the required information")}
        document.getElementById("r4c").style="background-color: red;"
        count++;

    }

   if(document.getElementById("Name3").value.length!=10){
       
        alert("required 10 digits, match requested format! Given number contains : "+ document.getElementById("Name3").value.length)
        document.getElementById("Name3").style="background-color: red;"
    } 
      if(count==0){
    document.getElementById("main").innerHTML="Thanks "+document.myform.Name1.value +" for registering for a vaccine <br> You will recieve a conformation slip shortly <br> Here is the review of your application details <br> Name: "  +document.myform.Name1.value+"<br> Gender: "+document.myform.r4.value+"<br> Email: " +document.myform.Name2.value+"<br> Mobile number: " +document.myform.Name3.value+"<br> Address: " +document.myform.Name4.value+"<br> City: " +document.myform.Name5.value+"<br> State: " +document.myform.Name6.value+"<br> Pincode: " +document.myform.Name7.value

   } 
}


