<?php

// Error reporting
error_reporting(E_ALL^E_NOTICE);

define("INCLUDE_CHECK",1);
require "connect.php";

if(!$_POST['qid'] || !$_POST['vote']) die('0');

/* Converting the visitor's IP into a long int: */
$ip = ip2long($_SERVER['REMOTE_ADDR']);

/* Converting the parameters to int will prevent any malpractices */
$qid = (int)$_POST['qid'];
$v = (int)$_POST['vote'];

/* Inserting the vote in the votes DB */
mysql_query('	INSERT INTO quotes_votes (qid,ip,vote,date_submit)
				VALUES ('.$qid.','.$ip.','.$v.',CURDATE())');

/* There is an unique index set up that prevents duplicate votes */
if(mysql_affected_rows($link)==1)
{
	mysql_query("UPDATE quotes SET votes=votes+1, vsum=vsum+".$v.", rating=vsum/votes WHERE id=".$qid);
	echo'1';
}
else echo '0';
?>