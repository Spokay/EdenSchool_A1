/*
 * EXO
 *
 * Exercises

 1- Créer un tableau (array) de vos plats préférés (favFoods). Il doit avoir au moins 3 éléments.
 2- Afficher le 2nd élément de favFoods.
 2bis- Changer le dernier élément de favFoods pour un autre de vos mets favoris.
 3- Retirer le 1er élément de favFoods et stocker le dans une variable ancienFavFoods.
 Afficher le tableau favFoods et la variable ancienFavFoods.
 4- Ajouter un autre élément à favFoods en fin de tableau. Afficher le tableau.
 5- Ajouter un autre élément à favFoods en début de tableau. Afficher le tableau.
 6- Créer un tableau vide et utiliser dessus la méthode pop(). Que se passe-t-il ?
 7- Dans les exemples ci-dessous utiliser splice() pour convertir le 1er tableau et obtenir le 2nd tableau fournit :
 [2, 3, 4, 5] -> [2, 4, 5]
 ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
 [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 */


let favFoods = ['steak', 'frites', 'chips'];
console.log(favFoods[1]);
favFoods.fill('poisson', 2, 2);
let ancienFavFoods = favFoods.shift();
console.log(favFoods);
console.log(ancienFavFoods);
favFoods.push('riz');
console.log(favFoods);
favFoods.unshift('pates');
console.log(favFoods);
let emptyArray = [];
emptyArray.pop();
console.log(emptyArray);
// il n'y a aucun changement.
let exempleArray1 = [2, 3, 4, 5];
exempleArray1.splice(1, 1);
console.log(exempleArray1);
let exempleArray2 = ["alpha", "gamma", "delta"];
exempleArray2.splice(1, 0, 'beta');
console.log(exempleArray2);
let exempleArray3 = [10, -10, -5, -3, 2, 1];
exempleArray3.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
console.log(exempleArray3);

