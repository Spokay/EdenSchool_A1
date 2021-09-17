let nombreChoisis = parseInt(prompt('Choisis un nombre entre 2 et 9'));
let result;

if (!isNaN(nombreChoisis)){

    if (nombreChoisis >= 2 && nombreChoisis <= 9) {
        for (let i = 1; i <= 10; i++) {
            result = nombreChoisis * i;
            document.write('<p style="font-size: 20px">' + nombreChoisis + ' x ' + i + ' = ' + result + '</p><br>');
        }
    }
    else {
        document.write('Le nombre choisis n\'est pas entre 2 et 9');
    }
}
else {
    alert('Veuillez renseigner un nombre');
}
