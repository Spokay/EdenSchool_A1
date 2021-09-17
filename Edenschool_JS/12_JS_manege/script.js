let nombreDeTours = parseInt(prompt('Combien de tours voulez vous faire'));
let startNumber = parseInt(prompt('A partir de combien de tour le compteur commence'));

for (let toursIndex; startNumber <= nombreDeTours; startNumber++){
    document.write('C\'est le tour de manège N° ' + startNumber + '<br>');
}