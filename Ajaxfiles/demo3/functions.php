<?php

/* Converting a PHP array into a javascript object */
function formatJSON($arr)
{
	$ret = array();
	foreach($arr as $k=>$v)
	{
		if(is_numeric($v))
			$ret[]=$k.':'.$v;
		else
			$ret[]=$k.':"'.htmlspecialchars($v).'"';
	}
	
	return '{'.join(',',$ret).'}';
}

?>