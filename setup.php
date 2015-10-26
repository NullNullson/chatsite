<?php

$conn = new mysqli('localhost', 'root');

if($conn->connect_error){
	die('Error: something\'s wrong with your server\'s PHP config.');
}

$conn->query('CREATE DATABASE `chattesting`');
$conn->query('USE `chattesting`');
$conn->query('CREATE TABLE messages (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(100) NOT NULL)');

echo 'If all went well, remove this from your server and the chat site should run. Something probably went wrong though. Good luck.';

?>