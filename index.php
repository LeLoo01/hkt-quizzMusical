<?php
session_start();
ob_start();
if (isset($_SESSION)) {

    
}


// var_dump($_SESSION['id']);
// var_dump($_SESSION['score']);

// var_dump($_SESSION["id"]); /* a activer si on veut voir le nombre de personne inscripte dans la db */

// inclure le head
include("views/html/head.php");

// inclure le menu
include("controller/menuController.php");

// inclure le router
include("controller/router.php");

// inclure le footer
include("views/html/footer.php");
