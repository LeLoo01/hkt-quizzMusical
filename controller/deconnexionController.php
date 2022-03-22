<?php
//detruire la session
// unset($_SESSION["user"]);
session_destroy();
//revenir sur la page de connexion
header("Location:index.php?section=connexion");
    // header("Location:?section=connexion");
    // include("views/menu/menu-co.php");
