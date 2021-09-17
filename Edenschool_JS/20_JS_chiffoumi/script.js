let chiffoumiPlayer = prompt('Pierre ? Feuille ? Ou Ciseau ?').toLowerCase();
let chiffoumiComputer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
function randomChiffoumi(){
    if(chiffoumiComputer === 1){
        chiffoumiComputer = 'pierre';
    }
    else if(chiffoumiComputer === 2){
        chiffoumiComputer = 'feuille';
    }
    else{
        chiffoumiComputer = 'ciseau';
    }
}
randomChiffoumi();
console.log(chiffoumiComputer);

if (chiffoumiPlayer === 'pierre' || chiffoumiPlayer === 'feuille' || chiffoumiPlayer === 'ciseau'){
    if(chiffoumiPlayer === 'pierre' && chiffoumiComputer === 'pierre'){
        alert('égalité vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a également répondu ' + chiffoumiComputer);
    }
    else if(chiffoumiPlayer === 'feuille' && chiffoumiComputer === 'feuille'){
        alert('égalité vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a également répondu ' + chiffoumiComputer);
    }
    else if(chiffoumiPlayer === 'ciseau' && chiffoumiComputer === 'ciseau'){
        alert('égalité vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a également répondu ' + chiffoumiComputer);
    }
    else if(chiffoumiPlayer === 'pierre' && chiffoumiComputer === 'ciseau'){
        alert('Bravo vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a répondu ' + chiffoumiComputer + '. le ciseau est écrasé par la pierre.');
    }
    else if(chiffoumiPlayer === 'pierre' && chiffoumiComputer === 'feuille'){
        alert('Dommage vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a répondu ' + chiffoumiComputer + '. la pierre est enveloppée par la feuille.');
    }
    else if(chiffoumiPlayer === 'feuille' && chiffoumiComputer === 'pierre'){
        alert('Bravo vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a répondu ' + chiffoumiComputer + '. la pierre est enveloppée par la feuille.');
    }
    else if(chiffoumiPlayer === 'ciseau' && chiffoumiComputer === 'pierre'){
        alert('Dommage vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a répondu ' + chiffoumiComputer + '. le ciseau est écrasé par la pierre.');
    }
    else if(chiffoumiPlayer === 'ciseau' && chiffoumiComputer === 'feuille'){
        alert('Bravo vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a répondu ' + chiffoumiComputer + '. la feuille est découpée par le ciseau.');
    }
    else if(chiffoumiPlayer === 'feuille' && chiffoumiComputer === 'ciseau'){
        alert('Dommage vous avez répondu ' + chiffoumiPlayer + ' et l\'ordinateur a répondu ' + chiffoumiComputer + '. la feuille est découpée par le ciseau.');
    }
}
else {
    alert('Veuillez choisire une des trois possibilités : pierre, feuille ou ciseau ');
}
