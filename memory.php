<?php

$template = "memory";
$pageTitle = "MemoryGame";
$i = 1;

//On veut mettre l'utilisateur automatiquement dans le pseudo
session_start();
$session = "";
if (!empty($_SESSION['user'])) { 
	$session = $_SESSION['user']['userName'];
}


include 'admin/bdd_connexion.php';

$query = $db->prepare("SELECT pseudo,score,difficulty,coups,rankingDate 
	FROM leaderboard 
	ORDER BY hiddenScore ASC
	LIMIT 0,10");

// Exécution de la requête
$query->execute([

]);

$users = $query->fetchAll();

include 'layout.phtml';