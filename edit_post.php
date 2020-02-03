<?php

$template = "edit_post";
$pageTitle = "";
$postToEdit = $_GET['ID'];

session_start();

if (isset($_SESSION['user'])) {
	
include 'admin/bdd_connexion.php';


	if (empty($_POST)){
	
		$query = $db->prepare("SELECT ID,title,content FROM `posts` WHERE ID = ?");
	
		// Exécution de la requête
		$query->execute([
	
			//On oublie pas la variable
			$postToEdit
	
		]);
	
		$oldPost = $query->fetch();
	
		$query = $db ->prepare("SELECT ID,title FROM categories");
	
		$query->execute([
	
		]);
	
		$categories=$query->fetchAll();
	
	
	
	
	} else {
	
		$postInfo = $_POST;
	
		$query = $db->prepare("UPDATE `posts`
			SET title = ?,
				content = ?, 
				category_ID = ?,
				updateDate = NOW()
				WHERE ID = ?");
	
		// Exécution de la requête
		$query->execute([
	
			//On oublie pas la variable
			$postInfo["title"],
			$postInfo["content"],
			$postInfo["category"],
			$postInfo["ID"]
	
		]);
	
	
		header('Location: admin.php');
		exit();
	}
	
	include 'layout.phtml';

} else {
	
	$template = "error";
	include "layout.phtml";
	
}
