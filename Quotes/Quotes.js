const simpleQuotes=[
	{
	  name:"Shah Muhammad",
	  quote:"Do good have good."
	},
	{
	  name:"SM",
	  quote:"Don't trust anyone more than his/her expectations."
	},
	{
	  name:"Shah Muhammad",
	  quote:"Proud on yourself."
	},
	{
	  name:"SM",
	  quote:"Victory is not property of brillinats it is crown of those who only believe only in hardworking."
	},
	{
	  name:"Shah Muhammad",
	  quote:"When there is no enemy within no other enemy can harm you."
	}
	
]


   const quoteBtn=document.querySelector('#quoteBtn');
   const quoteAuthor=document.querySelector('#quoteAuthor');
   const quote=document.querySelector('#quote');
   
   quoteBtn.addEventListener('click',displayQuote);
   
   function displayQuote(){
     
	 let number=Math.floor(Math.random()*simpleQuotes.length);
	 quoteAuthor.innerHTML=simpleQuotes[number].name;
	 quote.innerHTML=simpleQuotes[number].quote;
     	 
   }
