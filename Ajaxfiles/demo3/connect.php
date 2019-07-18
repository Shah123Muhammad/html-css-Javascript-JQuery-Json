<?php

if(!defined('INCLUDE_CHECK')) die('You are not allowed to execute this file directly');


/* Database config */

$db_host		= 'localhost';
$db_user		= 'root';
$db_pass		= '';
$db_database	= 'ajax'; 

/* End config */



$link = mysqli_connect($db_host,$db_user,$db_pass,$db_database) or die('Unable to establish a DB connection');

mysqli_query($link,"SET names UTF8");

?>