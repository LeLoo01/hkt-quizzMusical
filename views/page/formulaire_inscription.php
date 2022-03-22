<div class="container-fluid bg">
    <div class="row bgBlue">
        <div class="col">
            <form action="#" method="post" class=" form_inscription text-center">
                <h1 class="text-center pb-2">S'inscrire</h1>
            <label class="d-block labelName pb-3" for="nom">Nom de joueur</label>
            <input type="text" name="nom" class="mt-3" placeholder="Saisissez votre nom">
                <button class="d-block m-auto mt-5 btnInscription" type="submit" >Inscription</button> 
            </form>
        </div>
    </div>
</div>

<div><!-- TODO à mettre avec du joli css please -->
<?= $msgErreurInscription ; ?>
</div>
