
const list=document.querySelector('#guestlist ul');
    list.addEventListener('click',function(e){
	  if(e.target.className=='remove'){
	    
		const li=e.target.parentElement;
		list.removeChild(li);
	  }
	});


  const addBtn=document.forms['add-guest'];
  addBtn.addEventListener('submit',function(e){
  
      e.preventDefault();
	  
     const value=addBtn.querySelector('input[type="text"]').value;
   


//creating Elements
const li=document.createElement('li');

const guestName=document.createElement('span');

const removeGuest=document.createElement('span');




//addContent

guestName.textContent=value;
removeGuest.textContent='remove';



//addClasses

guestName.classList.add('name');
removeGuest.classList.add('remove');




//append To DOM
li.appendChild(guestName);
li.appendChild(removeGuest);

list.appendChild(li);

});



const searchBar=document.forms['search-guest'].querySelector('#searchinput');
searchBar.addEventListener('keyup',function(e){
  const term=e.target.value.toLowerCase();
  const guests=list.getElementsByTagName('li');
  Array.from(guests).forEach(function(guest){
   const title=guest.firstElementChild.textContent;
   if(title.toLowerCase().indexOf(term)!=-1){
     guest.style.display='block';
   }else{
	guest.style.display='none';
   }
  })
});