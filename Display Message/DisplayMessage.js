const sendBtn=document.querySelector('#sendBtn');
const messageIn=document.querySelector('#messageIn');
const messageOut=document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMessage);

  function sendMessage(){
     let content=messageIn.value;
	 
	 if(content===''){
	   alert('Please enter valid value, current value is empty.');
	 }
	 else{
	   messageOut.innerHTML=content;
	   messageIn.value='';
	 }  	 
}
  