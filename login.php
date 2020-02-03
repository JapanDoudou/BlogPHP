<?php

//On démarre la session car on va enregistrer des données utlisateur dedans
session_start();

$template ="login";
$pageTitle ="Connexion";
$error = " ";

if (!empty($_GET)){
	$error = $_GET["msg"];
}

include 'admin/bdd_connexion.php';

if (isset($_POST['user'])){

$login = $_POST;
var_dump($login);


	$query = $db->prepare("
	SELECT ID,userName,password 
	FROM users 
	WHERE userName = ?
	");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$login["user"],
	]);

	$user = $query->fetch();
	var_dump($user);
	if (!empty($user)){

		if (password_verify($login["password"], $user['password'])){
			//On redirige vers une page qui dit OK

			$_SESSION['user'] = [
				'id' => $user['ID'],
				'userName' => $user['userName']
			];
			var_dump($_SESSION);

			header('Location: admin.php?connecté');
	 		exit();
		} else {

		//On redirige vers la page de connexion avec un message
		header('Location: login.php?msg=error');
 		exit(); }

	} else{

		//On redirige vers la page de connexion avec un message
		header('Location: login.php?msg=error');
 		exit(); 

	}
}

include "layout.phtml";