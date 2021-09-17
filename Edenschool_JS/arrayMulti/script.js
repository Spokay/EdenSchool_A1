// let eleves = [['Hugo', 'Bressange', 'Javascript'], ['Kilian', 'Leclercq', 'PHP'], ['Mathias', 'Ghanem', 'HTML'], ['Daniel', 'Vieira Marques', 'CSS'], ['Melchior', 'Delescluse', 'POO']];
// /**
//  * CONSIGNE : Grâce à une boucle FOR  ou autre..., affichez la liste des élèves et de leur préférence en programmation qui sont stockées dans le tableau ci
//  -dessus. L'affichage se fera sous forme de liste dans la page.
//  */
//
// for(let i = 0; i < eleves.length; i++){
//     document.write('<ul>');
//     for(let a = 0; a < eleves[i].length; a++){
//         document.write('<li>' + eleves[i][a] + '</li>');
//     }
//     document.write('</ul>');
// }



/**
 * EXO Poudlard_Moyennes/array3D
 */
/*
 I. Créer un tableau "Poudlard" contenant la moyenne des élèves pour plusieurs matières, tous les élèves n'ayant pas les mêmes cours.
 Un tableau 3D est un tableau multi-dimensionnel contenant des objets, eux-même contenant des objets
    Nous auront donc pour un élève, sa moyenne à plusieurs matières.
    Par exemple : var Poudlard = [
     {
          prenom: "Harry",
          nom: "POTTER",
          moyenne: {
               transfiguration: 14,
               potions: 7,
               defense: 18,
               divination: 11,
               quidditch: 19
          }
     }, ...
    **** Vous allez créer au minimum 5 étudiants ****
 II. Afficher sur la page (à l'aide de document.write) pour chaque élève, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale.
 III-Bonus : gérer l'affichage de la moyenne avec 2 chiffres après la virgule. Rechercher toFixed() dans la documentation MDN.
*/



let poudlard = [
    {
        prenom: "Harry",
        nom: "Potter",
        moyenne: {
            transfiguration: 14,
            potions: 11,
            defense: 13,
            divination: 11,
            quidditch: 15
        }
    },
    {
        prenom: "Hermione",
        nom: "Granger",
        moyenne: {
            transfiguration: 14,
            potions: 17,
            defense: 18,
            divination: 11,
            quidditch: 19,
            magie: 15
        }
    },
    {
        prenom: "Ron",
        nom: "Weasley",
        moyenne: {
            transfiguration: 6,
            potions: 7,
            defense: 8,
            divination: 12,
            quidditch: 14
        }
    }
];
//
//
//
// for(let i = 0; i < poudlard[0].length; i++){
//     document.write('<ul>');
//     for(let a = 0; a < poudlard[0][i].length; a++){
//         let res = poudlard[0][i].moyenne.transfiguration + poudlard[0][i].moyenne.potions + poudlard[0][i].moyenne.defense + poudlard[0][i].moyenne.divination + poudlard[0][i].moyenne.quidditch;
//         let moy = res / poudlard[i].moyenne.length;
//         document.write('<li>' + poudlard[0][i].prenom + ' ' + poudlard[0][i].nom + ' ' + poudlard[0][i].moyenne.transfiguration + ' ' + poudlard[0][i].moyenne.potions + ' ' + poudlard[0][i].moyenne.defense + ' ' + poudlard[0][i].moyenne.divination + ' ' + poudlard[0][i].moyenne.quidditch + ' la moyenne de l\'élève est ' + moy + '</li>');
//     }
//     document.write('</ul>');
// }



for (let i = 0; i < poudlard.length; i++){
    let eleve = poudlard[i];
    let total = 0;
    document.write('<ul>');
    document.write('<li>' + eleve.prenom + '</li> ' + '<li>' + eleve.nom + '</li>');
            document.write('<ul>');
            for (let matiere in eleve.moyenne){
                let note = eleve.moyenne[matiere];
                total += note;
                document.write('<li>' + matiere + ' : ' + note + '/20 </li>');
            }
            let moyLength = Object.keys(eleve.moyenne).length;
            let moy = total / moyLength;
            moy = moy.toFixed(2);
            document.write('<li><strong>Moyenne générale : ' + moy + '/20 </strong></li>');
            document.write('</ul>');
    document.write('</ul>');
}



