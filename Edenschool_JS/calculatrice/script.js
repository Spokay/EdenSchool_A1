let nb1 = parseInt(prompt('Entrez le premier nombre de votre opération'));
let operateur = prompt('Quel opération voulez vous utiliser');
let nb2 = parseInt(prompt('Entrez le premier nombre de votre opération'));
let res;

if (!isNaN(nb1) && !isNaN(nb2)){
    if (operateur === '/' || operateur === 'division'){
        if (nb2 === 0){
            document.write('L\'utilisateur a voulu effectuer une division par zéro.');
        }
        else{
            res = nb1 / nb2;
            document.write('le résultat de l\'opération ' + nb1 + ' / ' + nb2 + ' est ' + res);
        }

    }
    else if (operateur === '+' || operateur === 'addition'){
        res = nb1 + nb2;
        document.write('le résultat de l\'opération ' + nb1 + ' + ' + nb2 + ' est ' + res);
    }
    else if (operateur === '*' || operateur === 'multiplication'){
        res = nb1 * nb2;
        document.write('le résultat de l\'opération ' + nb1 + ' * ' + nb2 + ' est ' + res);
    }
    else if (operateur === '-' || operateur === 'soustraction'){
        res = nb1 - nb2;
        document.write('le résultat de l\'opération ' + nb1 + ' - ' + nb2 + ' est ' + res);
    }

    else {
        document.write('L\'opération demandée est inconnue.');
    }
}
else {
        document.write('L\'un des deux nombres saisis n\'est pas réellement un nombre.');
}

