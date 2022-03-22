<?php
include("models/User.php");


// si la variable de session count n'existe pas
if (!isset($_SESSION["count"])) {
    // alors la créer et initialiser à 0
    $_SESSION["count"] = 0;
}

$msg = "";

// si le form est soumis (une variable post nom)
if (isset($_POST["nom"])) {

    // var_dump("nom bien rempli et devrait normalement executé la fonction de vérification des doublons");
    $connexionUser = new User();

    //vérifie que les connections (nom et id) existent déjà ou pas dans la db en passant par un tableau nommé $data
    $userComparaison = $connexionUser->verify(htmlspecialchars($_POST['nom']));

    if ($userComparaison != null) {
        // var_dump('function verify good');

        // enregistrer dans une variable de session
        $_SESSION["nom"] = $userComparaison["nom"];
        $_SESSION["id"] = $userComparaison["id"];
        // //var_dump($_SESSION["user"]);
        // var_dump($_SESSION["user"]);

         // incrémente la variable de session
         $_SESSION["count"] = 1;

         //je redirige le joeur vers la page d'acceuil
        header("Location:index.php?section=accueil_connexion");


    } else {
        $msg = "<p style='color:red'>Le nom n'est pas valide</p>";
    }
}

include("views/page/connexion.php");
