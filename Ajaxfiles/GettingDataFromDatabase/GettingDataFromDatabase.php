<?php include_once 'connection.php';  ?>
<!DOCTYPE html>
<html>
<head>
	<title></title>

	<script src="jquery.js"></script>

	<script type="text/javascript">
		$(document).ready(function(){
			var commentCount=2;
			$("button").click(function(){
				commentCount=commentCount+2;
				//load is Jquery Ajax function
                $("#comments").load("load-comments.php",{
                        commentNewCount:commentCount
                });
			});
		});
	</script>
</head>
<body>

	<div id="comments">
   
   <?php   

         $sql="Select * from comments LIMIT 2";
         $result=mysqli_query($conn,$sql);
         if(mysqli_num_rows($result)>0){
            while($row=mysqli_fetch_assoc($result)){
            	echo "<p>";
            	echo $row['author'];
            	echo "<br>";
            	echo $row['message'];
            	echo "</p>";
            }
         }else{
         	echo "There are no comments";
         }

       ?>
		
	</div>


<button>Show more comments</button>
</body>
</html>