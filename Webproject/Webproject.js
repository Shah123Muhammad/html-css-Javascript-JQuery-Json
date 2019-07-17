const navbarBtn=document.querySelector('.navbar__btn');
const navbarLinks=document.querySelector('.navbar__links');
const imageSlider=document.querySelector('.ImageSlider');


    navbarBtn.addEventListener('click',function(){
     let value=navbarLinks.classList.contains('navbar__collapse');
	 
	 
	 if(value){
	   navbarLinks.classList.remove('navbar__collapse');
	   navbarBtn.classList.remove('change');
	 }else{
	   navbarLinks.classList.add('navbar__collapse');
	   navbarBtn.classList.add('change');
	 }
})

/*
  function onImage(){
   document.getElementById("img1").style.listStyleType='none';
   document.getElementById("img2").style.listStyleType='none';
  }
  function outImage(){
   document.getElementById("img1").style.listStyleType='same';
   document.getElementById("img2").style.listStyleType='same';
  }
*/


var index=1;

function plusIndex(n){
  index=index+n;
  showImage(index);
  
}

showImage(1);

  function showImage(n){
	  imageSlider.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
	  var i;
    var x=document.getElementsByClassName("slides"); 
	

    if(n > x.length){index=1};
     if(n<1){index=x.length};
  
    for(i=0;i<x.length;i++){
	  x[i].style.display="none";
	}
  x[index-1].style.display="block";
} 

  autoSlide();
  
  function autoSlide(){ 
  imageSlider.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
	 	  var i;
    var x=document.getElementsByClassName("slides");
	
	for(i=0;i<x.length;i++){
	  x[i].style.display="none";
	}
	if(index > x.length){index=1};
  x[index-1].style.display="block";
  index++;
	 setTimeout(autoSlide,3000); 
  }

  function mouseOver(){
    document.getElementById('btn1').style.display='block';
	document.getElementById('btn2').style.display='block';
  }
  function mouseLeave(){
    document.getElementById('btn1').style.display='none';
    document.getElementById('btn2').style.display='none';
  }
 

  function Image(){
    document.getElementById('img2').style.padding="5px";
	document.getElementById('img2').style.paddingBottom='8rem';
	document.getElementById('img2').style.border='1px solid lightblue';
	document.getElementById('img2').style.boxShadow="0px 1px 6px  rgb(0,0,0,.6)";

  }
  function ImageFunction(){
    document.getElementById('img2').style.padding='0px 0px 2px';
	document.getElementById('img2').style.paddingBottom='8rem';
	document.getElementById('img2').style.border='none';
	document.getElementById('img2').style.boxShadow='none';

  }

   var i=0; //strat point 
   var images=[];
   var time=2000;
   
   images[0]='image/imgForweb/img-1.jpg';
   images[1]='image/imgForweb/img-2.jpg';
   images[2]='image/imgForweb/img-3.jpg';
   images[3]='image/imgForweb/img-4.jpg';
   images[4]='image/imgForweb/img-5.jpg';
   images[5]='image/imgForweb/img-6.jpg';
   
   
   //Change Image
   function changeImg(){
	   
	  document.slide.src=images[i];   
	   
    if(i <images.length-1){
    i++;
   }else{
	   i=0;
   }
   
  setTimeout("changeImg()",time);  //if we are changing slides with onclick method then we have to ramove the setTimeout function.
   
}
   
   window.onload=changeImg;