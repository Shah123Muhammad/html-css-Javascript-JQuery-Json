let counter=document.querySelector('.counter');
const addCount=document.querySelector('#addCountBtn');
const lowerCount=document.querySelector('#lowerCountBtn');

let count=0; //This is actually a number we are using for the counting.

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);



function incrementCounter(){
   count++;
   counter.innerHTML=count;
   
   
   if(counter.innerHTML>'0'){
     counter.style.color='green';
   }else if(counter.innerHTML==='0'){
    counter.style.color='white';     
  }
}
function decrementCounter(){
   count--;
   counter.innerHTML=count;
   
      if(counter.innerHTML<'0'){
     counter.style.color='blue';
   }else if(counter.innerHTML==='0'){
    counter.style.color='white';     
  }
}