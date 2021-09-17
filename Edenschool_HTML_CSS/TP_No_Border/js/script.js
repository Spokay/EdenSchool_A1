/* --
     EXO BDD Authenticate
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.
-- */
// let bdd = [
//     { 'prenom': 'Harry', 'nom': 'POTTER', 'email': 'hp@poudlard.fr', 'mdp': 'hp' },
//     { 'prenom': 'Hermione', 'nom': 'GRANGER', 'email': 'hg@poudlard.fr', 'mdp': 'hg' },
//     { 'prenom': 'Ron', 'nom': 'WEASLEY', 'email': 'rw@poudlard.fr', 'mdp': 'rw' }
// ];
// --------------------------------TABLEAU / OBJET ----------------------------------------
let bdd = [
    { prenom: 'Harry', nom: 'POTTER', email: 'hp@poudlard.fr', mdp: 'hp' },
    { prenom: 'Hermione', nom: 'GRANGER', email: 'hg@poudlard.fr', mdp: 'hg' },
    { prenom: 'Ron', nom: 'WEASLEY', email: 'rw@poudlard.fr', mdp: 'rw' }
];
// --------------------------------TEST 1 ----------------------------------------
// let email = 'michel@bobo.fr'
// let pw = 'abcde'
// form.addEventListener('submit', function (e){
//     e.preventDefault();
//         if (isNaN(firstNameInput.value) && isNaN(name.value)) {
//             if (emailInput.value === email && passwordInput.value === pw){
//                 document.write('Bienvenue ' + firstNameInput.value + ' ' + name.value + ' !');
//             } else {
//                 alert('les informations sont invalides');
//             }
//         } else {
//             alert('les noms et prénoms ne peuvent pas contenir de chiffres');
//         }
// });

// --------------------------------TEST 2 ----------------------------------------
// let form = document.getElementById('formulaire');
// let firstNameInput = document.getElementById('firstname');
// let name = document.getElementById('name');
// let emailInput = document.getElementById('mail');
// let passwordInput = document.getElementById('passw');
//
// form.addEventListener('submit', function (e){
//      e.preventDefault();
// for (let bddI = 0; bddI < bdd.length; bddI++){
//     let user = bdd[bddI];
//         if (user.email === emailInput.value && passwordInput.value === user.mdp){
//             document.write('Bienvenue ' + user.prenom + ' ' + user.nom + ' !');
//             break;
//         }
//         else {
//             alert('Veuillez renseigner des informations valides');
//         }
// }
// });


// --------------------------------RESULTAT FINAL ----------------------------------------

let userInBdd = false;
let form = document.getElementById('formulaire');
let firstNameInput = document.getElementById('firstname');
let nameInput = document.getElementById('lastname');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('passw');
form.addEventListener('submit', function (e){
    e.preventDefault();
    for (let bddI = 0; bddI < bdd.length; bddI++){
        let user = bdd[bddI];
        if (user.email === emailInput.value && passwordInput.value === user.mdp){
            userInBdd = true;
            document.getElementById('globform').innerHTML = '<h2>Bienvenue ' + firstNameInput.value + ' ' + nameInput.value + ' ! </h2>';
            break;
        }
    }
    if (!userInBdd){
        alert('Veuillez renseigner des informations valides');
        emailInput.value = null;
        passwordInput.value = null;
        firstNameInput.value = null;
        nameInput.value = null;
    }
});
