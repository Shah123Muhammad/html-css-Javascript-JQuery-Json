<?php  


   $conn=mysqli_connect("localhost","root","","ajax");
    

      if(isset($_POST['chat'])){
      	
      	$chatMessage=mysqli_real_escape_string($conn,$_POST['chat']);
        
        if($chatMessage!=""){
        	mysqli_query($conn,"INSERT INTO messages(message) VALUES('$chatMessage')");
        }
      }

      if(isset($_POST['chatUpdate'])){
               $sql="SELECT * FROM messages";
               $run=mysqli_query($conn,$sql);


             while($getData=mysqli_fetch_array($run, MYSQLI_ASSOC)){
             	$chatMessages=$getData['message'];

             	echo $chatMessages."<br/><br/>";
             }

      }


 ?>