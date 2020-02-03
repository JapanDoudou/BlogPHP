<?php

$template ="register";
$pageTitle ="Nouvel Utilisateur";
$error = " ";
$result;

//Les messages d'erreur;
if (!empty($_GET)){
	$error = $_GET["msg"];
}

include 'admin/bdd_connexion.php';

if (isset($_POST['user'])){

	$register = $_POST;
	var_dump($login);

	//On vérifie que l'utilsateur existe pas déjà

	$query = $db->prepare("
	SELECT email
	FROM users 
	WHERE email = ?
	");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$register["email"]

	]);

	$result = $query->fetch();

	if (!empty($result)){

		//On redirige vers la page de connexion avec un message
		header('Location: login.php?msg=already');
 		exit();

	} else {


	//On vérifie que lle nom d'utilsateur n'existe pas non plus;

	$query = $db->prepare("
	SELECT userName
	FROM users 
	WHERE userName = ?
	");

	// Exécution de la requête
	$query->execute([

		//On oublie pas la variable
		$register["user"]

	]);

	$result = $query->fetch();

		if (!empty($result)){

			//On redirige vers la page de connexion avec un message
			header('Location: register.php?msg=already');
	 		exit();

		}

	}

	if (empty($result)){

		$query = $db->prepare("
		INSERT INTO `users` (`userName`, `email`, `password`) 
		VALUES (?, ?, ?);");

		// Exécution de la requête
		$query->execute([

			//On oublie pas la variable
			substr($register["user"],0,25),
			substr($register["email"],0,150),
			password_hash($register["password"], PASSWORD_BCRYPT)

		]);

		//On redirige pour éviter le mattraquage de F5 !!
		header('Location: index.php');
		 exit();

	}




}

include "layout.phtml";