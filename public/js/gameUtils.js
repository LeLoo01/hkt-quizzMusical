const endGame = () => {
    document.getElementById('scoreInput').value = gameState.score;
    const _gameForm = document.getElementById('game-form');
    _gameForm.submit();
};

const getCurrentSong = (currentSongId) => { 
  if (currentSongId < SONGS.length) {
    return SONGS[currentSongId];
  } else {
    console.log('No More Songs - currentSongId sent ::', gameState.currentSongId);
    endGame();
  }
};

const displaySongData = (song) => {
  _artist.innerText = song.artist;
  _title.innerText = song.title;
};

// Seperate & Return
// each sentence of lyricsString
const tokenizeLyrics = (lyricsString) => {
  return lyricsString
        .split('\n')
        .map((l) => l.trim())
        .filter((sentence) => sentence != ''); // TODO: keep paragraphs ? (for maybe slider)
}

const makeAndDisplayAnswers = (correct, allLyricsAsTokens) => {
  // Populate radio inputs
  makeAnswerChoices(correct, allLyricsAsTokens);
  _answerContainer.removeAttribute('hidden');
};

const initSong = () => {
  // Set Current Song
  CURRENT_SONG = getCurrentSong(gameState.currentSongId);
  // Display artist & title
  displaySongData(CURRENT_SONG);
  // Cut lyrics
  // & get the right Answer
  const { toFindText, lyricsText } = prepareLyricsForGame(tokenizeLyrics(CURRENT_SONG.lyrics));

  // Display the cutted lyrics
  _lyrics.innerText = lyricsText;

  // Return the right answer
  return {
    correctAnswer: toFindText,
  };
  
};

// Function listenToAnswers
// Getting all radio inputs, and listen to whenever there're checked
const listenToAnswers = () => {
  _radioInputs
      .forEach((radio) => {
        radio.addEventListener("change", function(event) {
          // TODO: disable radios
          let radio = event.target;
          if (radio.checked) {
            if (radio.dataset.isCorrect == "true") { // DATASET stores STRING values ! not BOOLEANS
                gameState.score += 1;
                console.log(gameState.score);
                _score.innerText = gameState.score;

                _result.style.background = 'lightgreen'; //TODO: replace with CSS CLASS
                _result.innerText = 'Well Done!';
                _result.removeAttribute('hidden');
              } 
              else {
                _result.style.background= 'tomato'; //TODO: replace with CSS CLASS
                _result.innerText = 'Too Bad !';
                _result.removeAttribute('hidden');
              }
          };

          // May the answer be right or wrong
          // Get the next song anyway
          gameState.currentSongId += 1;

          setTimeout(() => {
            _result.setAttribute('hidden', '');
            _result.style.background= 'inherit';
            _result.innerText = '';
            const { correctAnswer } = initGame2();
        
            setTimeout(() => {
              makeAndDisplayAnswers(correctAnswer, tokenizeLyrics(CURRENT_SONG.lyrics));
            }, 3000);

          }, 3000);

        });
      });
}

const initGame2 = () => {
  // Re init radio input state
  _radioInputs.forEach((ri) => ri.checked = false );
  _answerContainer.setAttribute('hidden', '');
  return initSong();
};

const prepareLyricsForGame = (tokenizedLyrics) => {
// const getCutLyricsAndCorrectChoice = (tokenizedLyrics) => {

  const randomizedIndex = Math.floor(Math.random() * (tokenizedLyrics.length - 1) + 1);
  // const randomizedIndex = 18;

  const toFindText = tokenizedLyrics[randomizedIndex];

  // console.log('tokenized ::', tokenizedLyrics);
  const lyricsText = tokenizedLyrics
                              .slice(0, randomizedIndex)
                              .join('\n');

  // console.log('lyrics cut ::', lyricsText);

  return {
    toFindText,
    lyricsText,
  }
};

// Function makeAnswerChoices
// 1st param : the correct lyrics to find (the correct answer choice)
// 2nd param : the complete lyrics, as an array of sentences
// This function randomly chooses 3 sentences in the complete lyrics array
// which will be the wrong answers
// The correct answer is assigned a random letter (input radio have ids a, b, c and d)
// Then display them all (wrong choices + correct choice) in HTML
// Correct input has an HTML attribute "isCorrect" true ; wrong inputs have the same attribute set to false.
const makeAnswerChoices = (correctText, tokenizedLyrics) => {
    
  // 3 as 2nd parameter
  // because we need only 3 wrong answers for the quizz
  const randomIds = makeRandomUniqueIds(tokenizedLyrics.length, 3);
  
  console.log("rand ids ::", randomIds);
  
  const wrongSentences = [
    tokenizedLyrics[randomIds[0]], // ex: 'We are legends'
    tokenizedLyrics[randomIds[1]], // ex: 'Everything you want's a dream away'
    tokenizedLyrics[randomIds[2]], // ex: 'That's what she told him!'
  ];
  
  console.log("wrongSentences :::", wrongSentences);
  
  // --------------------------- Init Objects ----------------------------
  // LettersList : those will be used later for mapping with input radio id
  const lettersList = [ 'a', 'b', 'c', 'd' ];
  // Init wrong answers list
  const wrongs = [];
  // Init correct object
  // An Array even if only 1 correct possible answer
  // This is so that all answers (wrongs + correct) can be .concat() & .map() over later
  const correct = [];

  // ---------- Init Data Structure for HTML Labels / Inputs --------------
  const answersData = [ 
    { letter: 'a', answerText: '', isCorrect: false }, 
    { letter: 'b', answerText: '', isCorrect: false }, 
    { letter: 'c', answerText: '', isCorrect: false }, 
    { letter: 'd', answerText: '', isCorrect: false },
  ];

  // ----------------- Randomly Assign Answer Choices --------------------
  // Generate a random position (for future input radio value) for correct answer
  // Using number 4 in random calculation
  // because we have 4 answers for the quizz
  const randCorrectId = Math.floor(Math.random() * (4 - 1) + 1);
  
  // console.log("randCorrectId :::", randCorrectId);
  // console.log("rand LETTER :::", lettersList[randCorrectId]);
  
  let currentWrongIndex = wrongSentences.length - 1;
  answersData.map((answer) => {

    if (answer.letter == lettersList[randCorrectId]) {  // Select a random letter thanks to randCorrectId
      answer.answerText = correctText;
      answer.isCorrect = true;
      correct.push(answer);
      if (correct.length > 1) { console.log('More than 1 correct answer : correct ==', correct); }
    } else {
      // console.log("Wrong sentence at index :::", wrongSentences[currentWrongIndex]);
      answer.answerText = wrongSentences[currentWrongIndex];
      wrongs.push(answer);
      currentWrongIndex -= 1;
      // console.log("Wrong sentence INDEX :::", currentWrongIndex);
    }
  });
  
  // console.log("WRONGS remaining :::", wrongs);
  // console.log("CORRECT found :::", correct);


  // ---------- Set HTML Label + Input for each Answer Choice --------------
  correct
    .concat(wrongs)
    .forEach((dataForLabel) => {
      // console.log('Data for Label ::', dataForLabel);
      const _input = document.querySelector(`#${dataForLabel.letter}`);
      _input.setAttribute('data-is-correct', dataForLabel.isCorrect);
      const _label = document.querySelector(`label[for="${dataForLabel.letter}"]`);
      _label.innerText = dataForLabel.answerText;
    });

};

 