<?php

// Error reporting
error_reporting(E_ALL^E_NOTICE);

// Including file for the DB connection:
define("INCLUDE_CHECK",1);
require 'connect.php';
require 'functions.php';

// Converting the visitor's IP to a long int:

$ip = ip2long($_SERVER['REMOTE_ADDR']);
$today = date("Y-m-d");  

// Selecting the quotes and LEFT JOIN-ing them to the votes:
   
$result = mysqli_query($link,"
SELECT q.*, IF(v.id,1,0) AS voted
FROM quotes AS q
LEFT JOIN quotes_votes AS v 
ON 	q.id = v.qid
	AND v.ip =".$ip."
	AND v.date_submit = '".$today."'
");

$i=1;
$str='';
$script='';

while($row=mysqli_fetch_assoc($result))
{
	// Looping through all the quotes and generating the list on the right of the page:
	
	$str.= '<div class="thumb" id="q-'.$i.'">'.substr($row['txt'],0,20).
	'<span class="points">...</span><div class="star-rating" id="rating-'.$i.'">';
	
	$row['rating'] = round($row['rating']);
	for($z=0;$z<5;$z++)
	{
		$str.='<input type="radio" name="rate-'.$i.'" value="'.($z+1).'" '.($z+1==$row['rating']?'checked="checked"':'').' disabled="disabled" />';
	}

	$str.='</div></div>';
	
	// Each quote calls the fillData JS function
	$script.="fillData(".formatJSON($row).");".PHP_EOL;
	
	$i++;
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Fancy quotes with jQuery AJAX &amp; CSS | Tutorialzine demo</title>

<link rel="stylesheet" type="text/css" href="star-rating/ui.stars.css" />
<link rel="stylesheet" type="text/css" href="demo.css" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
<script type="text/javascript" src="star-rating/ui.stars.min.js"></script>
<script type="text/javascript" src="q-tip/jquery.qtip-1.0.0-rc3.min.js"></script>

<script src="cufon/cufon-yui.js" type="text/javascript"></script>
<script src="cufon/ChunkFive_400.font.js" type="text/javascript"></script>
<script type="text/javascript">
	Cufon.replace('h1.quote');
</script>

<script type="text/javascript" src="script.js"></script>

<script type="text/javascript">
<!-- Outputting the JS generated on the PHP-side -->
<?php echo $script ?>
</script>

</head>

<body>

<div id="main">
  <div id="box">
  
  <div id="topPart">
  		<div id="quote-content">
            <h1 class="quote"></h1>
            <span id="author"></span>
        </div>
  </div>
  
  <div id="botPart"></div>
  
  <div class="clear"></div>
  </div>
  
  <div id="quotes-list">
  	<div id="quotes-hide">
    	<div id="quotes-slide">
	<?php
	
	// Outputting the mouse scroll-ed quote list
	echo $str;
	
    ?>
    
    	</div>
	  </div>
  </div>
  
  <div class="clear"></div>
  
  <p class="tut">This is a tutorialzine demo. View the <a href="http://tutorialzine.com/2009/11/fancy-quotes/" target="_blank">original tutorial</a>, or download the <a href="demo.zip">source files</a></p>
</div>

</body>
</html>
