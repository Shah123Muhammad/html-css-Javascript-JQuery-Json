$(document).ready(function(){
  
  var currentPosition=0;
  var slideWidth=500;
  
  var createSliderWindow=$("<div id='slideWindow'></div>");
  var createSlide=$("<div id='slide'></div>");
  var createButtons=$("<div id='buttonRight'>&gt</div><div id='buttonLeft'>&lt</div>");
  var createSlidesWrap=$("<div id='slidesWrap'></div>");
  
  
  var slider=$('#slider');
  
  var images=("img/img-1.jpg","img/img-2.jpg","img/img-3.jpg","img/img-4.jpg");
  var numbersOfSlides=images.length;
  
  slider.append(createSliderWindow);
  $("#sliderWindow").append(createButtons);
  $("#sliderWindow").append(createSlide);
  
  for(i=0;i<numbersOfSlides;i++){
    $("#slide").append("<img src='"+images[i]+"' width='500'/>")
  }
  
  $("#slide").wrapAll(createSlidesWrap);
  $("#slidesWrap").css("float","left");
  $("#slidesWrap").css('width',slideWidth*numbersOfSlides);
  
  function moveSlide(){
	 $("slidesWrap").animate({
		 'margin-left':slideWidth*(-currentPosition)
	 }) ;
  }	 
  
  function changePosition(left){
	  
	  if(currentPosition == numbersOfSlides-1 && !left){
	  currentPosition=0;
	}else if(!left){
	  currentPosition++;
	  
	}
	
    if(currentPosition == 0 && left){
	  currentPosition=numbersOfSlides-1;
	}else if(left){
	  currentPosition--;
	  
	}
	moveSlide();
  }
  
  $("#buttonLeft").click(function(){
     changePosition(true);
  });
  
  $("#buttonRight").click(function(){
     changePosition(false);
  });
});