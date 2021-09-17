// ----------------- ÉNONCÉ -----------------
/**
 * Créer un objet littéral pour une voiture
 * Cet objet devra avoir les propriétés suivangtes :
 *  - marque (str)
 *  - couleur (str)
 *  - motorisation (obj) détaillant :
 *          - énergie (str)
 *          - puissance (str)
 *          - garantie (bool)
 *
 * et la méthode
 *  - afficherOrigine (f)
 *  qui va simplement afficher le pays d'origine de la voiture
 *
 *  Afficher une par une dans la page dans des paragraphes les informations suivantes :
 *  - la marque de la voiture,
 *  - sa couleur,
 *  - son origine,
 *  - son énergie,
 *  - si elle est sous garantie ou non.
 */

// let obj = {
//     marque: 'Renault',
//     couleur: 'Jaune',
//     motorisation: {
//         energie: 'diesel',
//         puissance: '150CV',
//         garantie: true
//     },
//     afficherOrigine: function(){
//         document.write('origine : France');
//     }
// }
//
// for(let voitureI in obj){
//     if(typeof(obj[voitureI]) == "object"){
//         for (let voitureIndex2 in obj[voitureI]){
//             if (obj[voitureI][voitureIndex2] === true){
//                 document.write('la voiture est sous garantie <br>');
//             }
//             else if (obj[voitureI][voitureIndex2] === false){
//                 document.write('la voiture n\'est pas sous garantie <br>');
//             }
//             else{
//                 document.write(voitureIndex2 + ' : ' + obj[voitureI][voitureIndex2] + '<br>');
//             }
//         }
//     }
//     else if(typeof(obj[voitureI]) == "function"){
//         obj.afficherOrigine();
//     }
//     else{
//         document.write(voitureI + ' : ' + obj[voitureI] + '<br>');
//     }
// }

let section = document.getElementsByClassName('formcontainer');
let formR = document.getElementById('formulaireRegister');
let formL = document.getElementById('formulaireLogin');


function Builder(n, a, m, pw){
    this.nom = n;
    this.age = a;
    this.mail = m;
    this.mdp = pw;
}

let bigtab = [];

formR.addEventListener('submit', function (e){
    e.preventDefault();
    let prenomValue = document.getElementById('prenom').value;
    let nomValue = document.getElementById('nom').value;
    let ageValue = parseInt(document.getElementById('age').value);
    let mailValue = document.getElementById('mailRegister').value;
    let pwdValue = document.getElementById('pwRegister').value;
    let nouvelEleve = new Builder([prenomValue, nomValue], ageValue, mailValue, pwdValue);
    bigtab.push(nouvelEleve);
    formR.innerHTML = '<h2> Successfully Registered </h2>';
});


let login = false;
console.log(bigtab);
formL.addEventListener('submit', function (e){
    e.preventDefault();
    let mailValueL = document.getElementById('mailLogin').value;
    let pwdValueL = document.getElementById('pwLogin').value;
    for (let bigtabI = 0; bigtabI < bigtab.length; bigtabI++){

        let user = bigtab[bigtabI];
        if (user.mail === mailValueL && pwdValueL === user.mdp){
            login = true;
            formL.innerHTML = '<h2> Bienvenue ' + user.nom[0] + ' ' + user.nom[1] + ' !</h2>'
            break;
        }
    }
    if (!login){
        alert('Veuillez renseigner des informations valides');
        mailValueL = null;
        pwdValueL = null;
    }
});

