<?php

include 'admin/bdd_connexion.php';

$query = $db->prepare("SELECT title,ID
	FROM posts 
	ORDER BY creationDate DESC 
	LIMIT 0,5");

	// Exécution de la requête
$query->execute([

		//On oublie pas la variable

]);

$timedPosts = $query->fetchAll();

foreach ($timedPosts as $timedPost){

	echo "<li><a href="."article.php?ID=".$timedPost['ID'].">".substr($timedPost["title"],0,25)."</a></li>";

}