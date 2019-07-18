<?php   
    
	if(isset($_GET['x']) && !empty($_GET['x'])){
	     $x=json_decode($_GET['x']);  //json_decode() converts the JSON text data into string 
		 
		 echo $x->name.'<br/>';
		 echo $x->colors[1]."<br/>";
		 echo $x->records[1]->name."<br>";
	}

?>