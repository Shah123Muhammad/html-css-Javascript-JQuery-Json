  function displaynum(n1){
if(calcform.input_value.value==null || calcform.input_value.value=="0"){
     calcform.input_value.value=n1;
   }else{
  calcform.input_value.value+=n1;
}
}


    function deleteChar(n1){
  	calcform.input_value.value=calcform.input_value.value.substring(0,calcform.input_value.value.length-1);
  }
  function changeSign(n1){
  	if(calcform.input_value.value.substring(0,1)=="-")
  		  calcform.input_value.value=calcform.input_value.value.substring(1,calcform.input_value.value.length);
  		else
  			calcform.input_value.value="-"+calcform.input_value.value;
  }


