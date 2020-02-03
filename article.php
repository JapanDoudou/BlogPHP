<?php
session_start();

$template = 'article';
$postID = $_GET["ID"];

include 'admin/bdd_connexion.php';

$query = $db->prepare("SELECT posts.ID,title,creationDate,content,firstName,lastName,updateDate
	FROM posts
	INNER JOIN authors ON authors.ID = posts.author_ID
	WHERE posts.ID = ? ");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$postID

	]);

	$post =  $query->fetch();

	$query = $db->prepare("SELECT content,creationDate,pseudo
	FROM comments
	WHERE post_ID = ? ");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$postID

	]);

	$comments =  $query->fetchAll();

	$pageTitle = $post['title'];

	/***************** Requête de recherche d'article précédent et suivant***********/

	$query = $db->prepare("SELECT posts.ID,creationDate,title
	FROM posts
	WHERE creationDate > ?
	ORDER BY creationDate ASC
	LIMIT 0,1");


	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$post["creationDate"]

	]);

	$after =  $query->fetch();


	$query = $db->prepare("SELECT posts.ID,creationDate,title
	FROM posts
	WHERE creationDate < ?
	ORDER BY creationDate DESC
	LIMIT 0,1");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$post["creationDate"]

	]);

	$before =  $query->fetch();

	include 'layout.phtml';
