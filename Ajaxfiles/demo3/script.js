$(document).ready(function(){
/* Executed on DOM load */

	$(".star-rating").stars();
	/* Converts all the radio groups into star ratings */
	
	$("#quotes-hide").mousemove(function(e){
		/* The scrollable quote container */

		if(!this.hideDiv)
		{
			/* These variables are initialised only the firts time the function is run: */
			
			this.hideDiv = $(this);
			this.scrollDiv = $('#quotes-slide');

			this.pos = this.hideDiv.offset();
			this.pos.top+=20;
			/* Adding a 20px offset, so that the scrolling begins 20px from the top */
			
			
			this.slideHeight = this.scrollDiv.height();
			
			this.height = this.hideDiv.height();
			this.height-=20;
			/* Adding a bottom offset */
						
			this.totScroll = this.slideHeight-this.height;
		}
		
		this.scrollDiv.css({
			/* Remember that this.scrollDiv is a jQuery object, as initilised above */
			
			marginTop:'-'+this.totScroll*(Math.max(e.pageY-this.pos.top,0)/this.height)+'px'
			/* Assigning a negative top margin according to the position of the mouse cursor, passed
			   with e.pageY; It is relative to the page, so we substract the position of the scroll container */
		});
		
	});

	$('.thumb').click(function(e){
		/* Executed once a quote from the list on the right is clicked */
		
		var obj = quotes[parseInt(e.target.id.replace('q-',''))-1];
		/* The e.target.id of the quote corresponds to its position in the quotes array */

		$('#quote-content').fadeOut('fast',function(){
			/* This is a callback function, run once the quote contaier on the left has faded out */

			if(!obj) return false;

			/* Replacing the contents of the quote text and author */

			$(this).find('h1').html(obj.txt);
			$(this).find('span').html(obj.author);
			
			/* Changing the background color */
			
			if(obj.bgc) $('body').stop().animate({backgroundColor:obj.bgc},'slow');

			/* Generating the radio boxes for the tool-tip star rating */

			var tmpstr='';
			for(var z=0;z<5;z++)
			{
				tmpstr+='<input type="radio" name="voteQ" value="'+(z+1)+'" ';

				if(z+1==obj.rating) tmpstr+='checked=checked ';
				if(parseInt(obj.voted)) tmpstr+='disabled="disabled" ';
				
				tmpstr+='/>';
			}
			
			tmpstr='<div id="voteRating">'+tmpstr+'</div>';
			
			/* Updating the content of the tool-tip and converting it to a star rating */
			$('#box').qtip("api").updateContent(tmpstr);

			$('#voteRating').stars({
				cancelShow: false,
				oneVoteOnly: true,
				callback:function(ui, type, value){vote(obj,value);}
			});

			/* Regenerating the cufon text replacement for the new quote text on the left */
			Cufon.refresh();

			/* Show the new quote with a fade-in effect */
			$(this).fadeIn('fast');
		});
	});
	
	/* Creating and configuring the tool-tip with the help of the qtip plugin */
	$('#box').qtip({
		content: {
			text:'This is an active list element',
			title: { text: 'Vote for this quote'},
			prerender:true
		},
		
		show: 'mouseover',
		hide: {
			delay:1000,
			fixed:true,
			when:'mouseout'
		},
		position: {
			corner: {
				target: 'bottomMiddle',
				tooltip: 'topMiddle'
			},
			adjust:{
				y:20
			}
		},
		style: { 
			border: {
				width: 2,
				radius: 6
			},
			name:'light',
			tip: 'topMiddle'
		}
	});
	
	/* After the page has loaded, click the first quote on the right */
	setTimeout(function(){$('#q-1').click();},250);
});

/* The global array holding all the data about the quotes. Filled in on page load. */
var quotes = new Array();
function fillData(obj)
{
	quotes.push(obj);
}

function vote(ob,value)
{
	/* Sending the votes to vote.php */
	$.post('vote.php',{qid:ob.id,vote:value},function(data){
		
		if(data=="1")
		{
			/* If the vote was saved successfully, update the quote data.. */
			ob.voted=1;
			ob.votes=ob.votes+1;
			ob.vsum=ob.vsum+parseInt(value);
			ob.rating = Math.round(ob.vsum/ob.votes);
			
			/* ..and update the star rating */
			$('#rating-'+ob.id).stars("select", ob.rating);
			quotes[ob.id-1]=ob;
		}
	});
}