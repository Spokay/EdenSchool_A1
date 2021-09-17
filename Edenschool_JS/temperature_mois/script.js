/* Vous avez le tableau de relevé des températures du mois de janvier suivant :
let jan = [2, 4, 3, 6, 17, 2, 1, 8, 19, 4, 7, 3, 18.7, 1.3, 5, 4.1, 9.1, 8.7, 4, 6, 1.9, 8, 3.7, 16, 7.8, 8.2, 7.6, 8.7, 9.7, 11.5, 13.7];
Affichez le relevé des températures jour par jour pour le mois (cf. image).
Les températures inférieures à 6°C sont sur fond bleu, celles supérieures à 15°C en rouge.
*/

let jan = [2, 4, 3, 6, 17, 2, 1, 8, 19, 4, 7, 3, 18.7, 1.3, 5, 4.1, 9.1, 8.7, 4, 6, 1.9, 8, 3.7, 16, 7.8, 8.2, 7.6, 8.7, 9.7, 11.5, 13.7];
let janI = 0;


document.write('<table cellpadding="15" border="1" style="border-collapse: collapse">');
document.write('<caption>Janvier</caption>');
document.write('<tr>');
for(let i = 1; i <= jan.length; i++){
    if (i % 8 === 0){
        document.write('<td style="font-size: 20px; color: white; background-color: #000080; text-align: center">' + 'J' + i + '</td>');
        document.write('</tr><tr>');
        for (let degrees = 0; degrees < 8; degrees++) {
            if (jan[janI] >= 15){
                document.write('<td style="font-size: 20px; text-align: center; background-color: #f4c7c2">' + jan[janI] + '</td>');
            }
            else if (jan[janI] <= 5){
                document.write('<td style="font-size: 20px; text-align: center; background-color: #bad8f4">' + jan[janI] + '</td>');
            }

            else{
                document.write('<td style="font-size: 20px; text-align: center">' + jan[janI] + '</td>');
            }

            janI++;
        }

        document.write('</tr><tr>');
    }

    else if (i === 31){
        document.write('<td style="font-size: 20px; background-color: #000080; color: white; text-align: center">' + 'J' + i + '</td>');
        document.write('</tr><tr>');
        for (let degrees = 0; degrees < 7; degrees++) {
            if (jan[janI] >= 15){
                document.write('<td style="font-size: 20px; text-align: center; background-color: #f4c7c2">' + jan[janI] + '</td>');
            }
            else if (jan[janI] <= 5){
                document.write('<td style="font-size: 20px; text-align: center; background-color: #bad8f4">' + jan[janI] + '</td>');
            }

            else{
                document.write('<td style="font-size: 20px; text-align: center">' + jan[janI] + '</td>');
            }

            janI++;
        }
    }

    else {
        document.write('<td style="font-size: 20px; color: white; background-color: #000080; text-align: center">' + 'J' + i + '</td>');
    }

}
document.write('</table>');