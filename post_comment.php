<?php 

$template = "post_comment";
$pageTitle = "Commentaire en cours d'envoi";

include 'admin/bdd_connexion.php';

$postInfo = $_POST['data'];

$query = $db->prepare("INSERT INTO `comments` (`content`, `creationDate`, `pseudo`, post_ID) VALUES (?, NOW(), ?, ?);");

// Exécution de la requête
$query->execute([

		//On oublie pas la variable
		substr($postInfo['content'],0,250),
		substr($postInfo['pseudo'],0,40),
		$postInfo['ID']

]);

echo "<div class='modern-separator'>
                <div class='separator'></div>
            </div>

			<article class='comment'>
				<h3>".$postInfo["pseudo"]."a dit :</h3>
				<p>".$postInfo["content"]."<span>Maintenant</span>
				</p>
			</article>";
// //On redirige pour éviter le mattraquage de F5 !!
// header('Location: article.php?ID='.$postID);
// exit();