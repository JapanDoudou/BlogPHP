<?php
session_start();
$categoryID = $_GET['ID'];
$template = "categoryresult";


include 'admin/bdd_connexion.php';

if (empty($_GET['ID']))
{

	//On redirige vers une page d'erreur
	header('Location: error.php');
	exit();

} else {

	$query = $db ->prepare("SELECT title FROM categories WHERE ID = ?");

	$query->execute([

		$categoryID

	]);

	$category=$query->fetch();

	// 1. Récupérer le nombre d'articles */
	$query = $db->prepare("SELECT COUNT(ID) AS totalPosts
	                        FROM posts
	                        WHERE category_ID = ?");

	$query->execute([

		$categoryID

	]);

	$results = $query->fetch();

	$totalPosts = $results['totalPosts'];

	// 2. Récupérer le nombre de pages
	$resultsPerPage = 5;
	$pages = ceil($totalPosts / $resultsPerPage);
	// 3. Récupérer la page sur laquelle on est
	if (array_key_exists('page', $_GET)) {
	    $page = $_GET['page'];
	} else {
	    // Page par défaut
	    $page = 1;
	}
	$start = ($page - 1) * $resultsPerPage;
	$query = $db->prepare("SELECT posts.ID,title,creationDate,LEFT(content,50) AS smallContent,firstName,lastName  FROM posts 
							INNER JOIN authors ON authors.ID = posts.author_ID
							WHERE category_ID = ?
							ORDER BY creationDate DESC
	                        LIMIT $start, $resultsPerPage");
	$query->execute([

		$categoryID

	]);

	$posts = $query->fetchAll();

	$pageTitle = $category['title'];

	include 'layout.phtml';

}
