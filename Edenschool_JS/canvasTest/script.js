let canvas = document.getElementById('monCanvas');
let feuille = canvas.getContext('2d');
let radians = (Math.PI/180)*90;

function createStarter(){
    let startCircle = new Path2D();
    startCircle.arc(500, 500, 10, 0, 2 * Math.PI);
    feuille.fill(startCircle);
    return startCircle;
}

function randomFood(){
    let clientWidth = canvas.clientWidth;
    let clientHeight = canvas.clientHeight;
    let randomX = Math.floor(Math.random() * (clientWidth + 1));
    let randomY = Math.floor(Math.random() * (clientHeight + 1));
    console.log(randomX, randomY);

    let foodPoint = new Path2D();
    feuille.beginPath();
    foodPoint.rect(randomX, randomY, 10, 10);
    feuille.fill(foodPoint);
    return [foodPoint, randomX, randomY];
}
let foodTab = randomFood();
let starter = createStarter();
let startXY = [500, 500];

function moveUp(e, posX, posY){

    if (e.key === "ArrowUp" || e.key === "z") {
        //activation de la touche Z et fleche du haut
        // case "ArrowUp" && "z":
            let addY = posY + 10;
            starter.moveTo(posX, addY);
        //     break;
        //activation de la touche Q et fleche de gauche
        // case "ArrowLeft" && "q":
        // let removeX = posX - 10;
        // starter.moveTo(removeX, posY);
        // break;
        //activation de la touche S et fleche du bas
        // case "ArrowDown" && "s":
        //     let removeY = posY - 10;
        //     starter.moveTo(posX, removeY);
        //     break;
        //activation de la touche D et fleche de droite
        // case "ArrowRight" && "d":
        //     let addX = posX + 10;
        //     starter.moveTo(addX, posY);
        //     break;
        // default:
        //     return;
    }

}
function moveLeft(e, posX, posY){

    if (e.key === "ArrowLeft" || e.key === "q") {
        //activation de la touche Z et fleche du haut
        // case "ArrowUp" && "z":
        //     let addY = posY + 10;
        //     starter.moveTo(posX, addY);
        //     break;
        //activation de la touche Q et fleche de gauche
        // case "ArrowLeft" && "q":
            let removeX = posX - 10;
            starter.moveTo(removeX, posY);
            // break;
        //activation de la touche S et fleche du bas
        // case "ArrowDown" && "s":
        //     let removeY = posY - 10;
        //     starter.moveTo(posX, removeY);
        //     break;
        //activation de la touche D et fleche de droite
        // case "ArrowRight" && "d":
        //     let addX = posX + 10;
        //     starter.moveTo(addX, posY);
        //     break;
        // default:
        //     return;
    }

}
function moveDown(e, posX, posY){

    if (e.key === "ArrowDown" || e.key === "s") {
        //activation de la touche Z et fleche du haut
        // case "ArrowUp" && "z":
        //     let addY = posY + 10;
        //     starter.moveTo(posX, addY);
        //     break;
        //activation de la touche Q et fleche de gauche
        // case "ArrowLeft" && "q":
        // let removeX = posX - 10;
        // starter.moveTo(removeX, posY);
        // break;
        //activation de la touche S et fleche du bas
        // case "ArrowDown" && "s":
            let removeY = posY - 10;
            starter.moveTo(posX, removeY);
        //     break;
        //activation de la touche D et fleche de droite
        // case "ArrowRight" && "d":
        //     let addX = posX + 10;
        //     starter.moveTo(addX, posY);
        //     break;
        // default:
        //     return;
    }

}
function moveRight(e, posX, posY){

    if (e.key === "ArrowRight" || e.key === "d") {
        //activation de la touche Z et fleche du haut
        // case "ArrowUp" && "z":
        //     let addY = posY + 10;
        //     starter.moveTo(posX, addY);
        //     break;
        //activation de la touche Q et fleche de gauche
        // case "ArrowLeft" && "q":
        // let removeX = posX - 10;
        // starter.moveTo(removeX, posY);
        // break;
        //activation de la touche S et fleche du bas
        // case "ArrowDown" && "s":
        //     let removeY = posY - 10;
        //     starter.moveTo(posX, removeY);
        //     break;
        //activation de la touche D et fleche de droite
        // case "ArrowRight" && "d":
            let addX = posX + 10;
            starter.moveTo(addX, posY);
        //     break;
        // default:
        //     return;
    }

}