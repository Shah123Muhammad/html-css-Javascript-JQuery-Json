const navbarBtn=document.querySelector('.navbar__btn');
const navbarLinks=document.querySelector('.navbar__links');


   navbarBtn.addEventListener('click',function(){
   let value=navbarLinks.classList.contains('navbar__collapse');      /*classList indicates that do the navbarLinks contains
                                                                        the navbar__collpase or not*/

	if(value){
	navbarLinks.classList.remove('navbar__collapse');
	navbarBtn.classList.remove('change');
	
	}else{
	navbarLinks.classList.add('navbar__collapse');
    navbarBtn.classList.add('change');

	}																				
})