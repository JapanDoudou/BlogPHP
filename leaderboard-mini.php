<?php
$j = 1;
include 'admin/bdd_connexion.php';

$query = $db->prepare("SELECT pseudo,score,difficulty,coups,rankingDate 
	FROM leaderboard 
	ORDER BY hiddenScore ASC
	LIMIT 0,5");

// Exécution de la requête
$query->execute([

]);

$tops = $query->fetchAll();

include 'leaderboard-mini.phtml';