alert('Bienvenue');
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(randomNumber);
let essaisI = 6;
while(essaisI >= 0){
    let chooseNumber = parseInt(prompt('Le but du jeu est simple je pense à un nombre entre 0 et 100. A ton avis quel est ce nombre ? Notes le dans la zone ci-dessous tu as ' + essaisI + ' essais'));

    if(!isNaN(chooseNumber)){
        if (randomNumber === chooseNumber){
            alert('Bravo vous avez trouvé le nombre auquel je pensais c\'était ' + randomNumber);
            break;
        }
        else {
            if(essaisI === 0 && chooseNumber !== randomNumber){
                alert('Dommage tu as échoué le nombre auquel je pensais etait ' + randomNumber);
            }
            else if(randomNumber < chooseNumber){
                alert(chooseNumber + ' est plus grand que le nombre auquel je pense');
            }
            else if(randomNumber > chooseNumber){
                alert(chooseNumber + ' est plus petit que le nombre auquel je pense');
            }
        }
        essaisI--;
    }
    else {
        alert('Veuillez renseigner un nombre');
    }
}
