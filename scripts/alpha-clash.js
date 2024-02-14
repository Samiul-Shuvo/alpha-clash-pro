// function play(){
//     // console.log('Playing ');

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}