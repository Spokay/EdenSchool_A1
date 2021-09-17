
// ----------------- ÉNONCÉ -----------------
// Créez un Algorithme qui va retourner une phrase.
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.
// ----------------- CONSEILS -----------------
// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.

let motChoisis = prompt('Choisissez un mot');
let motChoisisCopy = motChoisis;

function retourneLaPhrase(str) {
    let arrayStr = str.split("");
    arrayStr.reverse();
    let strText = arrayStr.join("");
    if(strText === motChoisisCopy){
        document.write(strText + ' est un palindrome');
    }
    else {
        document.write(strText);
    }
}

retourneLaPhrase(motChoisis);

