<?php

if (isset($_GET["section"])) {

    ////var_dump($_SESSION);
    if (isset($_SESSION['id'])){
    // joueur est connecté et un profil ok
        switch ($_GET["section"]) {
            case 'introStartGame':
                include("controller/introStartGameController.php");
                break;
            case 'startGame':
                include("controller/startGameController.php");
                break;
            case 'deconnexion':
                include("controller/deconnexionController.php");
                break;
            case 'accueil_connexion':
                include("controller/accueil_connexionController.php");
                break;
            case 'resultat':
                include("controller/resultatController.php");
                break;
            default:
                include("views/error/404.php");
                break;
        }
    }else{//joueur non connecté
            switch ($_GET["section"]) {
                case 'accueil':
                    include("controller/accueilController.php");
                    break;
                case 'connexion':
                    include("controller/connexionController.php");
                    break;
                case 'formulaire_inscription':
                    include("controller/formulaire_inscriptionController.php");
                    break;
                default:
                    include("views/error/404.php");
                    break;
        
            }
        }

} else {
    include("views/page/accueil.php");
    // include ("views/menu/menuDeconnecte.php");
}
