


/////////////////Jquery/////////////////////////////
          //Animation
$(document).ready(function(){
  $('li.fields').filter(':nth-child(n+4)').addClass('hide');
  
  $('ul').on('click','li.title',function(){  //on():Attaches an event handler function for one or more events to the selected elements.
    $(this).next().slideDown(200).siblings('li.fields').slideUp(200);
  });
});

//////////////////JavaScript/////////////////////////
       //Validation
function validateForm(){
  for(var i=0;i<myform.elements.length;i++){
   if(myform.elements[i].className == "req" && myform.elements[i].value.length==0){
     alert('please fill in all required fields.');
	 return false;  //it stops the form to be submitted 
   }
  }
  
   var email=document.getElementById('email').value;
   var atpos=email.indexOf('@');
   var dotpos=email.lastIndexOf('.');
   if(atpos < 1 || dotpos < atpos+2 || dotpos+2>=email.length){
     alert('please type a valid email address.');
	 return false;
   }
}