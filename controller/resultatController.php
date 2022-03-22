<?php

include("models/User.php");
$player = new User();
$msgResultatScore = "";


if (isset($_SESSION["id"])) {
$player1 = $player->getAllInfo($_SESSION["id"]); 
// var_dump($player1['id']);
// var_dump($player1['nom']);
// var_dump($player1['score']);

//$_SESSION["id"] = $id;
//$_SESSION["nom"] = $nom;

// var_dump($_SESSION["nom"]);

$msgResultatScore = "<p> le score est ". $player1['score'] ."</p>";
//$msgResultatScore = "<p> le score est ". $nom ."</p>";

//     header("Location:?section=resultat");
//     // include("views/page/resultat.php");
}


// /* $score = $player->addScore(9, 5);
// //var_dump("le resultat est bien inscrit dans la db");
//  */

/* //var_dump($_SESSION['score']); */

// if (isset($_POST["playerId"]) && ($_POST["score"])) {

//     //var_dump($_POST["score"]);
//     //var_dump($_POST["playerId"]);

//     $score = $player->addScore($_POST["playerId"], $_POST["score"]); 

//     $_SESSION['score'] = $score;

//     $msgResultatScore = "<p> le score est ". $score ."</p>";

//     header("Location:?section=resultat");
//     // include("views/page/resultat.php");
// }


include("views/page/resultat.php");

?>

<!-- page des résultats du joueur - personne est connecté -->
