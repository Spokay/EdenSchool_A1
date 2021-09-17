let section = document.getElementById('formcontainer');
let form = document.getElementById('formulaire');
let semaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
function meilleurInvestissement(arr){
    let maxGold = 0;
    let minGold = 9999;
    for(let arrMaxI = 0; arrMaxI < arr.length; arrMaxI++){
        let numberRunning = arr[arrMaxI];
        if(numberRunning > maxGold){
            maxGold = numberRunning;
        }
    }
    for(let arrMinI = 0; arrMinI < arr.length; arrMinI++){
        let numberRunning = arr[arrMinI];
        if(minGold > numberRunning){
            minGold = numberRunning;
        }
    }
    let difference = maxGold - minGold;
    section.innerHTML = '<h2 style="margin: 0; padding: 30px;">Le meilleur coup à faire cette semaine était d\'investir le <span style="color: #348A96">' + semaine[arr.indexOf(minGold)] + '</span> et de revendre le <span style="color: #348A96">' + semaine[arr.indexOf(maxGold)] + '</span> pour un bénéfice de <span style="color: #348A96">' + difference + '</span> euros </h2>';
}


form.addEventListener('submit', function (e){
    e.preventDefault();
    let nb1Value = parseInt(document.getElementById('number1').value), nb2Value = parseInt(document.getElementById('number2').value), nb3Value = parseInt(document.getElementById('number3').value), nb4Value = parseInt(document.getElementById('number4').value), nb5Value = parseInt(document.getElementById('number5').value), nb6Value = parseInt(document.getElementById('number6').value), nb7Value = parseInt(document.getElementById('number7').value);
    let investissementChiffres = [nb1Value, nb2Value, nb3Value, nb4Value, nb5Value, nb6Value, nb7Value];
    meilleurInvestissement(investissementChiffres);
});



// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi(4eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montantdu bénéfice.

// Bon courage !


// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();
