while(true){
    let niOuiNiNon = prompt('Si vous entrez oui ou non vous avez perdu');

    if (niOuiNiNon === 'oui' || niOuiNiNon === 'non'){
        alert('vous avez perdu');
        break;
    }
    else {
        continue;
    }
}