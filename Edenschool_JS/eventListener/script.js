
let square1 = document.querySelector('.square');
let posSquareX = 0;
let posSquareY = 0;
let startButton = document.getElementById('startButton');

// square moving
window.addEventListener('keydown', function(event){
    let randomRed = Math.floor(Math.random() * (256));
    let randomGreen = Math.floor(Math.random() * (256));
    let randomBlue = Math.floor(Math.random() * (256));
    switch (event.key) {
        //activation de la touche Z et fleche du haut
        case "ArrowUp" && "z":
            posSquareY -= 10;
            square1.style.top = posSquareY + 'px';
            square1.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue +')';
            break;
        //activation de la touche Q et fleche de gauche
        case "ArrowLeft" && "q":
            posSquareX -= 10;
            square1.style.left = posSquareX + 'px';
            square1.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue +')';
            break;
        //activation de la touche S et fleche du bas
        case "ArrowDown" && "s":
            posSquareY += 10;
            square1.style.top = posSquareY + 'px';
            square1.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue +')';
            break;
        //activation de la touche D et fleche de droite
        case "ArrowRight" && "d":
            posSquareX += 10;
            square1.style.left = posSquareX + 'px';
            square1.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue +')';
            break;
        default:
            return;
    }
    event.preventDefault();

}, true);
//choisir une cellule random du tableau
function chooseRandomCell(){
    let linesTr = document.querySelectorAll('table tr');
    let cellsTd = document.querySelectorAll('table tr td');
    console.log(cellsTd);
    let randomTd = Math.floor(Math.random() * (cellsTd.length + 1));

    cellsTd[randomTd].style.backgroundColor = 'red';
    let goodCell = cellsTd[randomTd];
    return goodCell;
}

console.log(chooseRandomCell());
startButton.addEventListener('click', function(event){
   let rdCell = chooseRandomCell();
});



