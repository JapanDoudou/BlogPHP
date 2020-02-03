<?php


include 'admin/bdd_connexion.php';

if (empty($_POST)){

	//On redirige pour éviter le mattraquage de F5 !!
	header('Location: error.php');
  	exit();

} else {

	$postInfo = $_POST;

	$query = $db->prepare("
						INSERT INTO `leaderboard` (`pseudo`, `score`, `difficulty`, coups, rankingDate,hiddenScore) 
						VALUES (?, ? , ?, ?, NOW(), ?);
						");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		substr($postInfo["pseudo"],0,20),
		$postInfo["score"],
		substr($postInfo["difficulty"],0,20),
		$postInfo["coups"],
		$postInfo["hiddenScore"]

	]);

	//On redirige pour éviter le mattraquage de F5 !!
	header('Location: memory.php');
  	exit();

}