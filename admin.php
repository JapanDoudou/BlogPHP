<?php
$template = "admin";
$pageTitle = "Administration";
//On démarre la session car on va enregistrer des données utlisateur dedans
session_start();

if (isset($_SESSION['user'])) {

	include 'admin/bdd_connexion.php';

	$query = $db->prepare("SELECT posts.ID,posts.title,LEFT(content,25) AS smallContent,firstName,lastName,categories.title AS category FROM posts 
		INNER JOIN authors ON authors.ID = posts.author_ID
		INNER JOIN categories ON categories.ID = posts.category_ID
		ORDER BY creationDate DESC");

		// Exécution de la requête
		$query->execute([

			//On oublie pas la variable

		]);

		$posts =  $query->fetchAll();

	include "layout.phtml";

} else {

	$template = "error";
	include "layout.phtml";
}

