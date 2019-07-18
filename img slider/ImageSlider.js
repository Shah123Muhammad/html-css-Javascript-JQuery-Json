 var $overLay=$("<div id='overlay'></div>");
 
$("body").append($overLay);

var $image=$('<img>');

$overLay.append($image);

var $close=$("<img id='closeImage'>");

$overLay.append($close);

$("#imageGallery a").click(function(event){
	                            //PreventDefault()  works for two reasons
   event.preventDefault();  //Clicking on a "Submit" button, prevent it from submitting a form
                             //Clicking on a link, prevent the link from following the URL
   
   var imageSource=$(this).attr("href");
   $image.attr("src",imageSource);
   $close.attr('src','img/closeimg.png');
   
   $overLay.show();
   
});

  $close.click(function(){
    $($overLay).hide();
	
});