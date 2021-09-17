let choisir = parseInt(prompt('Veuillez saisir un nombre'));

for(let i = 0; isNaN(choisir); i++){
    if (isNaN(choisir)){
        choisir = parseInt(prompt('Veuillez saisir un nombre'));
    }
    else {
        break;
    }
}

document.write('votre nombre est ' + choisir);

