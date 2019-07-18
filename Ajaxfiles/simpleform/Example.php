<?php  

  $conn=mysqli_connect("localhost","root","","ajax");

    $name=$_POST['name'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];


    $sql="Select * from users where email='$email'";
    $result=mysqli_query($conn,$sql);

    $check=mysqli_num_rows($result);

     if($check==1){
     	  echo "<h2>This email is already registered! please try another</h2>";
     	  exit();
     }else{
     	$insert="insert into users(name,password,email) values('$name','$pass','$email');";
     	$run_insert=mysqli_query($conn,$insert);


     	  if($run_insert){
     	  	echo "<h2>Registration Successfull, thanks!!</h2>";
     	  }
     }

?>