<?php 
    include("models/User.php");
    $msg="";

    if(isset($_POST["score"])) {
    // if(isset($_POST["score"]) && isset($_POST["playerId"])){
        $player= new User();
        
        // var_dump($_POST['score']);
        $_SESSION["score"] = $_POST["score"];
        // $_SESSION["id"] = $_POST["playerId"];

        $score = $player->addScore($_SESSION["id"], $_POST["score"]); 
        // $score = $player->addScore($_POST["playerId"], $_POST["score"]); 

        header("Location:?section=resultat");
        
    }
    
    include("views/page/startGame.php");
?>
