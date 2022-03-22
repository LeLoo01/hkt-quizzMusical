<!--  -->

<div class="container-fluid bg">
    <div class="row bgBlue pt-5">
        <div class="col-5 text-center pt-5">
            <img class="logoStartGame" src="public/images/title2.png" alt="">
        </div>
        <div class="col-7 pt-5">
            <div class="blue py-4"><!-- Song -->
                <h1><span id="title"></span></h1>
                <h4><span id="artist"></span></h4>
            </div>
        </div>
        <div class="row ">
            <div class="col-5 pt-5">
                <div class="namePlayer ">
                    <p>Player <span id="player-id"></span></p><!-- Player -->
                </div>
                <div class="score pt-5">
                    <p class="scoreCss">Score : <span id="score">0</span></p>
                </div>
            </div>
            <div class="col-7">
                <!-- Player -->
                <div class="blue3  py-2">
                    <div class="col-7 text-light mt-2">
                        <div class="align">
                            <div class="py-2">
                                <!-- Lyrics -->
                                <div id="lyrics" style="height: 200px; overflow-y: scroll; padding-block: 1rem; background: #212347;"></div><!-- TODO a voir si c'est bon ou il faut enlever -->

                                <!--  -->
                                
                                <!-- Answers -->
                                <div class="my-3" id="answer-container" hidden>
                                    <div class="answer-item">
                                        <input type="radio" id="a" name="a" value="a">
                                        <label for="a">answer A</label>
                                    </div>
                                    <div class="answer-item">
                                        <input type="radio" id="b" name="b" value="b">
                                        <label for="b">answer B</label>
                                    </div>
                                    <div class="answer-item">
                                        <input type="radio" id="c" name="c" value="c">
                                        <label for="c">answer C</label>
                                    </div>
                                    <div class="answer-item">
                                        <input type="radio" id="d" name="d" value="d">
                                        <label for="d">answer D</label>
                                    </div>
                                </div>
                                <!-- Message Well Done / Too Bad -->
                                <div id="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- btn START game -->
                <!-- <button id="start-game">Start Game</button> -->
                <form action="#" method="post" id="game-form">
                    <div id="hidden-inputs" hidden>
                        <input type="score" name="score" id="scoreInput" placeholder="score">
                       <!--  <input type="playerId" name="playerId" id="playerId" placeholder="playerId" value="8">
                        <button type="submit">Fake end Game</button> ON L METS EN COMMENTAIRE AVEC LEILA -->
                    </div>
                    <!-- <button id="end-with-js" type="submit" hidden>End game with JS</button>  ON LE METS EN COMMENTAIRE avec leila-->
                </form>
                <script src="public/js/songsData.js"></script>
                <script src="public/js/gameState.js"></script>
                <script src="public/js/gameUtils.js"></script>
                <script src="public/js/game.js"></script>
                <!-- <a href="?section=resultat">End Game</a> -->