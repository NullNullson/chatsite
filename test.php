<?php

header('Content-Type: text/xml');

$servername = 'localhost';
$username = 'root';

$conn = new mysqli($servername, $username);

if($conn->connect_error){
	die('Connection failed: '.$conn->connect_error);
}

$conn->query('USE `chat`');

if(array_key_exists('q', $_REQUEST)){
	$conn->query('INSERT INTO `messages` (message) VALUES (\''.mysql_real_escape_string($_REQUEST['q']).'\')');
}

$query = $conn->query('SELECT * FROM `messages`');

echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<messages>';
foreach($query as $el){
	$message = $el['message'];
	echo '<message>';
	echo htmlentities($message);
	echo '</message>';
}
echo '</messages>';

$conn->close();

?>