// ------------------------------EXO 1-----------------------------------------
// document.write('<table cellpadding="15" border="1">');
// document.write('<tr>');
// for(let i = 0; i <= 9; i++){
//     document.write('<td style="font-size: 20px">' + i + '</td>');
// }
// document.write('</tr>');
// document.write('</table>');

// ------------------------------EXO 2-----------------------------------------

// document.write('<table cellpadding="15" border="1">');
// for(let i = 0; i <= 9; i++){
//     document.write('<tr><td style="font-size: 20px">' + i + '</td></tr>')
// }
// document.write('</table>');

// --------------------------------EXO 3----------------------------------------

//document.write('<table cellpadding="15" border="1">');
//document.write('<tr>');
//     for(let i = 0; i <= 9; i++){
//         if (i % 2 === 0){
//             document.write('<td style="font-size: 20px; background-color: purple">' + i + '</td>')
//         }
//         else {
//             document.write('<td style="font-size: 20px; background-color: yellow">' + i + '</td>')
//         }
//     }
//document.write('</tr>');
// document.write('</table>');

// --------------------------------EXO 4----------------------------------------

// document.write('<table cellpadding="15" border="1">');
// for(let i2 = 0; i2 <= 10; i2++){
//     document.write('<tr>');
//     for(let i = 0; i <= 9; i++){
//         if (i % 2 === 0){
//             document.write('<td style="font-size: 20px; background-color: purple">' + i + '</td>')
//         }
//         else {
//             document.write('<td style="font-size: 20px; background-color: yellow">' + i + '</td>')
//         }
//     }
//     document.write('</tr>');
// }
// document.write('</table>');

// ----------------------------------EXO 5----------------------------------------

document.write('<table cellpadding="15" border="1" style="border-collapse: collapse">');
        for(let i = 0; i <= 99; i++){
            if (i % 10 === 0){
                document.write('<tr style="display: none"></tr>');
                document.write('<td style="font-size: 20px; background-color: lawngreen; text-align: center">' + i + '</td>')
            }
            else if (i % 2 === 0){
                document.write('<td style="font-size: 20px; background-color: lawngreen; text-align: center">' + i + '</td>')
            }
            else {
                document.write('<td style="font-size: 20px; background-color: red; text-align: center">' + i + '</td>')
            }
        }
document.write('</table>');


