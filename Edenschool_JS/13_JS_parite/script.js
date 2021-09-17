
let startNumber = parseInt(prompt('A partir de quand commencer à compter les nombres pairs'));
let endNumber = parseInt(prompt('Quand arrêter de compter les nombres pairs'));

if (startNumber === 0) {
        document.write(startNumber + ' est ni pair ni impair <br>');
        startNumber++;
}

for (let i; startNumber <= endNumber; startNumber++) {
    if (startNumber % 2 === 0) {
        document.write(startNumber + " est pair <br>");
    }
    else{
        document.write(startNumber + " est impair <br>");
    }
}