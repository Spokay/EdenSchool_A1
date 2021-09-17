let eleves = [['Hugo', 'Bressange', 'Javascript'], ['Kilian', 'Leclercq', 'PHP'], ['Mathias', 'Ghanem', 'HTML'], ['Daniel', 'Vieira Marques', 'CSS'], ['Melchior', 'Delescluse', 'POO']];


for(let ulI = 0; ulI < eleves.length; ulI++){
    let eleve = eleves[ulI];
    document.write('<ul>');
    for(let liI = 0; liI < eleve.length; liI++){
        document.write('<li>' + eleve[liI] + '</li>');
    }
    document.write('</ul>');
}
