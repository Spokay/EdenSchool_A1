

while (true){
    let number = parseInt(prompt('Entrez un nombre entre 50 et 100'));
    if(!isNaN(number)){
        if(number <== 50 || number >== 100){
            continue;
        }
        else {
            alert('bravo vous avez entré un nombre entre 50 et 100');
            break;
        }
    }
    else {
        alert('Veuillez entrer un nombre entre 50 et 100');
        continue;
    }
}