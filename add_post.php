<?php
session_start();
$template = "add_post";
$pageTitle = "Rajouter un article";

include 'admin/bdd_connexion.php';

/*********** Requête pour récupérer les menus déroulants *******/

if (isset($_SESSION['user'])) {

	if (empty($_POST)){
	
		$query = $db->prepare("SELECT ID,title FROM categories ORDER BY title ASC");
	
		// Exécution de la requête
		$query->execute([
	
			//On oublie pas la variable
	
		]);
	
		$categories = $query->fetchAll();
	
		$query = $db->prepare("SELECT ID,lastName,firstName FROM authors ORDER BY lastName ASC");
	
		// Exécution de la requête
		$query->execute([
	
		//On oublie pas la variable
	
		]);
	
		$authors = $query->fetchAll();
	
	}
	
	
	
	
	/****************************************************************/
	
	
	
	/************ Requête pour poster l'article ****************/
	
	if (!empty($_POST)){
	
		$postInfo = $_POST;
	
		$query = $db->prepare("INSERT INTO `posts` (`title`, `creationDate`, `author_ID`, `content`, `category_ID`) VALUES (?, NOW(), ?, ?, ?);");
	
		// Exécution de la requête
		$query->execute([
	
			//On oublie pas la variable
			substr($postInfo["title"],0,150),
			$postInfo["author"],
			$postInfo["content"],
			$postInfo["category"]
	
		]);
	
		//On redirige pour éviter le mattraquage de F5 !!
		header('Location: index.php');
	  	exit();
	}
	
	
	/********************************************************************/
	
	include "layout.phtml";

} else {

	$template = "error";
	include "layout.phtml";
}