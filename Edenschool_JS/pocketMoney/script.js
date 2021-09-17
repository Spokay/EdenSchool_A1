/* -------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
Afficher le résultat : (1) en mois et (2) en années.
-------------------------------- */
let moisTotal = 0;
let anneeTotal = 0;

for(let i = 1000; i <= 2000; i += 50){
    document.write('J\'ai actuellement ' + i + '€ sur mon compte <br> ');

    if (i === 2000){
        document.write('Je suis arrivé à ' + i + '€ sur mon compte en ' + moisTotal + ' mois <br>');
        document.write('Je suis arrivé à ' + i + '€ sur mon compte en ' + anneeTotal + ' années <br>');
    }

    moisTotal++;
    anneeTotal += 0.083333;
}

