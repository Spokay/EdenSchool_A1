// array with words
let everyWordArray = ["desir", "performance", "extrinseque", "reve", "capacite", "retroaction", "benefice", "moteur", "enthousiasme", "depassement", "ambition", "reussir", "recompense", "chemin", "intention", "reussite", "objectifs", "but", "effort", "benefice" ,"confiance", "defi", "plaisir", "possible", "soutien", "entrainement", "dynamisme", "progres", "courage", "investissement", "courage", "creativite", "challenge", "appui", "positive", "discipline", "avenir", "cerveau", "perseverance", "engagement", "agir", "efficacite", "pratique", "moteur", "cout", "benefice", "actions", "croire", "exigence", "dynamique", "talent", "strategie" ,"dopamine", "erreur", "satisfaction"
];
let virtualKb = document.querySelector('#virtualKb');
let splittedAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let tempAlphabet = splittedAlphabet;
let choosedWord;
let choosenWord;
for (const letter of splittedAlphabet) {
    let newButton = document.createElement('button');
    newButton.innerText = letter;
    newButton.classList.add('p-3');

    newButton.addEventListener('click', function (e){
        e.preventDefault();
        console.log(this.innerText);
            alertStart.classList.add('d-none');
            alertStart.classList.remove('d-block');
            alertDouble.classList.add('d-none');
            alertDouble.classList.remove('d-block');
            alertSuccess.classList.add('d-none');
            alertSuccess.classList.remove('d-block');
            alertFail.classList.add('d-none');
            alertFail.classList.remove('d-block');
            alertWinner.classList.add('d-none');
            alertWinner.classList.remove('d-block');

            //get the index of the alphabetical letter and delete it from the array
            let alphabetIndex = tempAlphabet.indexOf(this.innerText.toLowerCase());

            if (alphabetIndex >= 0) {
                tempAlphabet.splice(alphabetIndex, 1);
                console.log(this.innerText.toLowerCase());
                comparison(choosedWord, this.innerText.toLowerCase());
                console.log(tempAlphabet);
            } else {
                console.log('cest un doublon');
                alertDouble.classList.remove('d-none');
                alertDouble.classList.add('d-block');
            }

            console.log(lettersIndexArr);
            pendu();
            if (lettersIndexArr.length === letters.length){
                alertWinner.classList.remove('d-none');
                alertWinner.classList.add('d-block');
                alertSuccess.classList.add('d-none');
                alertSuccess.classList.remove('d-block');
                alertWinner.innerText = 'Bravo vous avez trouvé le mot c\'étais : ' + choosenWord.toUpperCase();
            }
    })
    virtualKb.appendChild(newButton);

}
// inputs
let inputLetter = document.querySelector('#inputLetter');
let inputSubmit = document.querySelector('#inputSubmit');
let inputStart = document.querySelector('#inputStart');
let alertStart = document.getElementById('alertStart');
let alertDouble = document.getElementById('alertDouble');
let alertSuccess = document.getElementById('alertSuccess');
let alertFail = document.getElementById('alertFail');
let alertWinner = document.getElementById('alertWinner');
let alertLoser = document.getElementById('alertLoser');

let cellsArr;
let cellsTextArr;
let letters;
let letterContainer = document.getElementById('letterContainer');
let lettersIndexArr = [];


// canvas
let canvas = document.getElementById('moncanvas');
let context = canvas.getContext('2d');
let essaisManques;
function pendu() {
    switch (essaisManques) {
        case 1:
            context.beginPath();
            context.lineCap = 'round';
            context.lineWidth = "10";
            context.lineJoin = 'round';
            context.strokeStyle = "rgb(23, 145, 167)";
            context.moveTo(35, 295);
            context.lineTo(5, 295);
            context.stroke();
            break;
        case 2:
            context.moveTo(20, 295);
            context.lineTo(20, 5);
            context.stroke();
            break;
        case 3:
            context.lineTo(200, 5);
            context.stroke();
            break;
        case 4:
            context.lineTo(200, 50);
            context.stroke();
            break;
        case 5:
            context.moveTo(20, 50);
            context.lineTo(70, 5);
            context.stroke();
            break;
        case 6:
            context.beginPath();
            context.fillStyle = "red";
            context.arc(200, 50, 20, 0, Math.PI * 2);
            context.fill();
            break;
        case 7 :
            context.beginPath();
            context.strokeStyle = "red";
            context.moveTo(200, 50);
            context.lineTo(200, 150);
            context.stroke();
            break;
        case 8 :
            context.beginPath();
            context.moveTo(200, 80);
            context.lineTo(160, 110);
            context.stroke();
            break;
        case 9:
            context.beginPath();
            context.moveTo(200, 80);
            context.lineTo(240, 110);
            context.stroke();
            break;
        case 10:
            context.beginPath();
            context.moveTo(200, 150);
            context.lineTo(180, 200);
            context.stroke();
            break;
        case 11:
            context.beginPath();
            context.moveTo(200, 150);
            context.lineTo(220, 200);
            context.stroke();
            context.beginPath();
            context.fillStyle = "rgb(23, 145, 167)";
            context.arc(200, 62, 16, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.fillStyle = "red";
            context.arc(200, 50, 20, 0, Math.PI * 2);
            context.fill();
            break;
        case 12:
            alertLoser.classList.remove('d-none');
            alertLoser.classList.add('d-block');
            alertLoser.innerText = 'Dommage vous avez utilisé tous vos essais le mot étais : ' + choosenWord.toUpperCase();
            alertFail.classList.add('d-none');
            alertFail.classList.remove('d-block');
            return false;

        default:
            essaisManques=0;
            context.clearRect(0,0,300,300);
    }
}


// generating a random number to choose a word in the array
function randomWord(arr){
    let randomNumber = Math.floor(Math.random() * arr.length);
    choosenWord = arr[randomNumber];
    arr.splice(randomNumber, 1);
    return choosenWord;
}
//split the letters of the choosen word and return it
function SplitAndGetLetters(word){
    let wordArr = word.split('');
    console.log(wordArr);
    return wordArr;
}
// compare the splitted word and the letter in the input and push the index to an array
function comparison(splittedWord, choosedLetter){
    console.log(choosedLetter);
    console.log(splittedWord);
    //temporary variable
    let tempLettersIndexArr = [];

    // for loop running the splitted word
    for(let index = 0; index < splittedWord.length; index++){
        if(choosedLetter === splittedWord[index]){
            let indexLetter = index;
            lettersIndexArr.push(indexLetter);
            tempLettersIndexArr.push(indexLetter);
            alertSuccess.classList.remove('d-none');
            alertSuccess.classList.add('d-block');
            cellsTextArr[index].classList.remove('d-none');
            cellsTextArr[index].classList.add('d-block');
            cellsArr[index].style.backgroundColor = '#06d6a0';
        }
        // if it's the last lap of the loop change the condition
        else if((index + 1) === splittedWord.length && choosedLetter !== splittedWord[index]){
            if(tempLettersIndexArr.length > 0){
                tempLettersIndexArr = [];
                console.log(tempLettersIndexArr.length);
            }
            // if no conditions are filled the handman is updated
            else {
                essaisManques++;
                alertFail.classList.remove('d-none');
                alertFail.classList.add('d-block');
            }

            console.log(essaisManques + ' essais');
        }
    }

}
// create a container for each letter of the word selected
function createLetterContainer(arrayLetters){
    let arrLength = arrayLetters.length;
    for(let indexArray = 0; indexArray < arrLength; indexArray++){
        let cells = document.createElement('div');
        let cellsText = document.createElement('p');
        cellsText.innerText = arrayLetters[indexArray].toUpperCase();
        cells.appendChild(cellsText);
        cells.style.height = '50px';
        cells.style.width = '40px';
        cells.style.borderBottom = '1px solid black';
        cells.style.backgroundColor = '#e9edc9'
        cellsText.classList.add('d-none', 'cells-text-array');
        cells.classList.add('d-flex', 'justify-content-center', 'p-3', 'cells-array', 'my-2');
        letterContainer.appendChild(cells);
    }
}
// the letters are displayed
function displayLetters(arrIndex){

}

//event listener when the start button is pressed
inputStart.addEventListener('click', function(e){
    e.preventDefault();
   choosedWord = randomWord(everyWordArray);
   let lettersArr = SplitAndGetLetters(choosedWord);
   letters = lettersArr;
   lettersIndexArr = [];
   essaisManques = 0;
   tempAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   console.log(tempAlphabet);
   letterContainer.innerHTML = '';
   createLetterContainer(lettersArr);
   cellsArr = document.querySelectorAll('.cells-array');
   cellsTextArr = document.querySelectorAll('.cells-text-array');

   alertStart.classList.remove('d-none');
   alertStart.classList.add('d-block');
   alertDouble.classList.add('d-none');
   alertDouble.classList.remove('d-block');
   alertSuccess.classList.add('d-none');
   alertSuccess.classList.remove('d-block');
   alertFail.classList.add('d-none');
   alertFail.classList.remove('d-block');
   alertWinner.classList.add('d-none');
   alertWinner.classList.remove('d-block');
   alertLoser.classList.remove('d-block');
   alertLoser.classList.add('d-none');
    pendu();
});

inputSubmit.addEventListener('click', function(event){
    event.preventDefault();
    let finalLetter = inputLetter.value.toLowerCase();
    if (isNaN(finalLetter) && finalLetter !== '' && finalLetter !== undefined) {
        alertStart.classList.add('d-none');
        alertStart.classList.remove('d-block');
        alertDouble.classList.add('d-none');
        alertDouble.classList.remove('d-block');
        alertSuccess.classList.add('d-none');
        alertSuccess.classList.remove('d-block');
        alertFail.classList.add('d-none');
        alertFail.classList.remove('d-block');
        alertWinner.classList.add('d-none');
        alertWinner.classList.remove('d-block');

        //get the index of the alphabetical letter and delete it from the array
        let alphabetIndex = tempAlphabet.indexOf(finalLetter);

        if (alphabetIndex >= 0) {
            tempAlphabet.splice(alphabetIndex, 1);
            comparison(letters, finalLetter);
            console.log(tempAlphabet);
        } else {
            console.log('cest un doublon');
            alertDouble.classList.remove('d-none');
            alertDouble.classList.add('d-block');
        }

        console.log(lettersIndexArr);
        pendu();
        if (lettersIndexArr.length === letters.length){
            alertWinner.classList.remove('d-none');
            alertWinner.classList.add('d-block');
            alertSuccess.classList.add('d-none');
            alertSuccess.classList.remove('d-block');
            alertWinner.innerText = 'Bravo vous avez trouvé le mot c\'étais : ' + choosenWord.toUpperCase();
        }
    }
});