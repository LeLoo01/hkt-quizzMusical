<?php
include("models/User.php");
$joueur = new User();
$msgErreurInscription = "";


if (isset($_POST["nom"])) {

    // var_dump(" 1 est ce que ca va ?");
    if (trim($_POST["nom"]) != "") {

        $data = array(
            ":nom" => trim($_POST["nom"])
        );

        /* If si mon user n'existe pas */
        // var_dump("2 est ce que ca va ?");
        $joueurNotExist = $joueur->joueurNotExist(htmlspecialchars($_POST['nom']));

        //retourner vrai si n'existe pas
        if ($joueurNotExist) {
            // var_dump('rentre dans joueurNotExist');

            $last_insert_id = $joueur->addPlayer($data);
            $joueur1 = $joueur->getJoueur($last_insert_id);

            // incrémente la variable de session
            $_SESSION["count"] = 0;


            // var_dump($data);
            // var_dump("le if du joueur n'existe pas");

            //$id = $joueur->addPlayer($data);

            $_SESSION["id"] = $last_insert_id;

            if ($last_insert_id != false) {
                // rediriger vers la page pour commencer le jeu
                header("Location:?section=accueil_connexion");

                // var_dump("je suis là ou je devrait etre");
            }
        } else {
            // var_dump('function verify good');
            $msgErreurInscription = '<p>Ce compte existe déjà. Voulez-vous <a href="?section=connexion">connecter</a>?</p>';/* TODO si possible/temps ne manque pas mettre aussi du css ici. bisous sur vous (Manon) */
        }

        ////var_dump($id); /* a activer si on veut voir le nom de personne inscrites dans la db */

    } else {
        $msgErreurInscription = '<p>Veuillez remplir correctement les champs s\'il vous plaît.</p>';
        ////var_dump('aucun champs');
    }
} else {
    $msgErreurInscription = '<p>Veuillez remplir correctement les champs s\'il vous plaît.</p>';
    ////var_dump('aucun champs');
}

include("views/page/formulaire_inscription.php");
