   function myFormFunction(){
    var get_data=document.getElementById('get_data'); 
	//Form elements
	var myForm=document.myForm1;
	var user=myForm.user;
	var pass=myForm.pass;
	var con_pass=myForm.con_pass;
	var gender=myForm.gender;
	var email=myForm.email;
	var python=myForm.python;
	var java=myForm.java;
	var html=myForm.html;
	var css=myForm.css;
	var javascript=myForm.javascript;
	var country=myForm.country;
	
   //Accessing the Form elements values
	var userVal=myForm.user.value;
	var passVal=myForm.pass.value;
	var con_passVal=myForm.con_pass.value;
	var emailVal=myForm.email.value;
	var countryVal=myForm.country.value;

	
	if(!(passVal=='')){
	//Giving white color to password and confirm password fields if they are not empty 
	    pass.style.backgroundColor='white';
		con_pass.style.backgroundColor='white';
		//Checking whether passfield and confirm pass field are same or not
	    if(passVal==con_passVal){
		//Giving white color to password and confirm password fields if they are not MATCHING 
		    con_pass.style.backgroundColor='white';
		    pass.style.backgroundColor='white';
			//Checking whether user field is empty or not
		    if(!(userVal=='')){
		        user.style.backgroundColor='white';
		        if(!(emailVal=='')){
			    //Checking whether email field is empty or not, This block will not execute untill the user field is filled
		            email.style.backgroundColor='white'; 
		        }else{
		            email.style.backgroundColor='tan';
		        }
		        //This block will execute if doesn't insert any user name
		    }else{
		        alert('Insert a unique user name');
		        user.style.backgroundColor='tan';
		    }
		    //This block is checking the gender
		    if(gender[0].checked){
		        gender_data='Male';
		    }else if(gender[1].checked){
		        gender_data='Female';
		    }else{
		        alert('must select gender');
		    }
/////////////Area of expertise coding has started////////////////
			if(python.checked){
			    python_data='PYTHON<br>';
			}else{
			    python_data='';
			}
			if(java.checked){
			    java_data='JAVA<br>';
			}else{
			    java_data=''; 
			}
			if(html.checked){
			    html_data='HTML<br>';
			}else{
			    html_data='';
			}
			if(css.checked){
			    css_data='CSS<br>';
			}else{
			    css_data='';
			}
			if(javascript.checked){
			    javascript_data='JAVASCRIPT<br>';
			}else{
			    javascript_data='';
			}
/////////////Area of Expertise blok has ended/////////////////
 
 
       //Getting the country name of user//
            if(countryVal=='none'){
			    alert('must select a country');
			}else{
			    country_data=countryVal;
			}
//Getting all the form data in this div element at the top (<div id="get_data">Getting data</div>//
   
            get_data.innerHTML='Dear '+userVal+'! Thanks for filling this form perfectly. According to your given'+ 
                    	' information:<br> your password is '+passVal+'.<br> Your email address is '+emailVal+'.<br> You are'+ 
						' a '+gender_data+'.<br> Your area or expertise are:<br>'+python_data+java_data+
                          html_data+css_data+javascript_data+'<br>You belonged to '+country_data;						

		    // This block will execute if password does'nt match
		}else{
		    alert("Password does't matched");
		    con_pass.style.backgroundColor='tan';
		    pass.style.backgroundColor='tan';
		}
		//If user doesn't any insert any user password
	}else {
	   alert('Insert Password');
	   pass.style.backgroundColor='tan';
	   con_pass.style.backgroundColor='tan';
	}
}