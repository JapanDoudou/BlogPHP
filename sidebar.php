<?php

include 'admin/bdd_connexion.php';

$query = $db->prepare("SELECT title,ID FROM categories ORDER BY title ASC");

	// Exécution de la requête
$query->execute([

		//On oublie pas la variable

]);

$categoriesMenu = $query->fetchAll();

foreach ($categoriesMenu as $categorieMenu){

	echo "<li><a href=categoryresult.php?ID=".$categorieMenu['ID'].">".$categorieMenu['title']."</a></li>";

}

