<?php 
    if(isset($_SESSION["id"])){
        include ("views/menu/menu-co.php");
    }else{
        include("views/menu/menuDeconnecte.php");
    }
?>