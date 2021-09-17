// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui va convertir des le nombre passé en paramètre
// en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// ----------------- CONSEILS -----------------

// For;
// while;

// ----- Convertisseur 2.0 conversion de chiffres Romains a Arabes et Arabes a Romains ------

let ask = prompt('Choisissez un chiffre à convertir');
let valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
let chiffreRomains = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
let askNumber = parseInt(ask);
let askTab = ask.split('').reverse();
console.log(askTab);
let count = 0;
let numberI = 0;
let previousNumber = 0;
if(isNaN(ask)){
    function convertisseurChiffres(){
        for(let arrayI = 0; arrayI < askTab.length; arrayI++){
            for (let r = 0; r < chiffreRomains.length; r++){
                if (askTab[arrayI] === chiffreRomains[r]){
                    previousNumber = numberI;
                    numberI = valeurDecimale[r];
                    if(previousNumber > numberI){
                        count -= numberI;
                    }
                    else {
                        count += numberI;
                    }
                    console.log(count);
                }
            }
        }
        return count;
    }
    document.write('<h1>' + convertisseurChiffres() + '</h1>');
}
else if(!isNaN(askNumber)){
    function convertisseurRomain(num){
        let str = "";
        for (let i = 0; i < valeurDecimale.length; ++i ){
            while ( num >= valeurDecimale[i] ){
                num -= valeurDecimale[i];
                str += chiffreRomains[i];
            }
            if ( num === 0 ){
                break;
            }
        }

        return str;
    }
    document.write('<h1> ' + convertisseurRomain(ask) + '</h1>');
}
else{
    alert('Veuillez renseigner un chiffre romain ou arabe pour le convertir');
}



// --------------------------------Chiffres into Chiffres romain------------------------------

// let ask = parseInt(prompt('Choisissez un chiffre a convertir en chiffre romain'));
// let valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
// let chiffreRomains = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
// function convertisseurRomain(num){
//     let str = "";
//     for (let i = 0; i < valeurDecimale.length; ++i ){
//         while ( num >= valeurDecimale[i] ){
//             num -= valeurDecimale[i];
//             str += chiffreRomains[i];
//         }
//         if ( num === 0 ){
//             break;
//         }
//     }
//
// return str;
// }
// if(isNaN(ask)){
//     alert('Veuillez rentrer un nombre');
// }
// else {
//     alert(ask + ' est égal à ' + convertisseurRomain(ask) + ' en chiffres romains');
// }

// -----------------Chiffres du tableau into chiffres romains------------------------

// let convertisseurRomain = function(num) {
//
//     let valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//     let chiffreRomains = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
//     let iRom = 0;
//     for(let iChi = 0; iChi <= valeurDecimale.length; iChi++){
//         valeurDecimale[iChi] = chiffreRomains[iRom];
//         if (num === valeurDecimale[iChi]){
//             return chiffreRomains[iRom];
//         }
//         iRom++;
//     }
//
// }
