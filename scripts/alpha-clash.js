// function play(){
//     // console.log('Playing ');

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }


function handleKeyboardButtonPress(event){

    const playerPressed = event.key;
    // console.log(playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    const expectedAlphabet = currentAlphabet.toLowerCase();

    // console.log( playerPressed , expectedAlphabet);
    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;

        setTextElementValueById('current-score', newScore )





        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

      


        continueGame();
        removeBackgroundColorById(expectedAlphabet);

    }
    else{

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);


        if(newLife === 0 ){
            gameOver();
        }




        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;
    }

}
document.addEventListener('keypress',handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);


    continueGame();
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    
}