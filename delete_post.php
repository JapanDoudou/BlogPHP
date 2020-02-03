<?php

$template = "delete";
$pageTitle = "";
$postToDelete = $_GET['ID'];

$db = new PDO('mysql:host=localhost;dbname=blog;charset=utf8','root','3wamysql', [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$query = $db->prepare("DELETE FROM `comments` WHERE `comments`.`post_ID` = ?");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$postToDelete

	]);

$query = $db->prepare("DELETE FROM `posts` WHERE `posts`.`ID` = ?");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$postToDelete

	]);



header('Location: admin.php');
exit();