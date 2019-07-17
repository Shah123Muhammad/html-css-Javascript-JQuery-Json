   function myFunction(){
   
    var getData=document.getElementById('get-data');
   //Login Form Elements	
	var myForm=document.myForm1;
	var user=myForm.user;
	var pass=myForm.pass;
	
	//Accessing the Form values
	var userVal=myForm.user.value;
	var passVal=myForm.pass.value;
	
	if(!(userVal=='') || !(passVal=='')){
	    if(!(userVal=='')){
			user.style.backgroundColor='white';
			if(!(passVal=='')){
			    pass.style.backgroundColor='white';
			}else{
			    alert('please fill the passval');
				pass.style.backgroundColor='lightblue';
			}
			

		}else{
		    alert('please fill the user name');
			user.style.backgroundColor='lightblue';
		}
	}else{
	    alert('please fill the form first');
		}
		
 getData.innerHTML='Dear user according to your given information:<br> your name is:'+userVal+'.<br>your password is:'+passVal'.';
	

}