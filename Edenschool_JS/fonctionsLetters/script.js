/* EXOS FONCTIONS
* A B C
 */
function letterA() {
    return "A";
}
function letterB() {
    return "B";
}
function letterC() {
    return "C";
}
let index;
let result;
/*
 * But : il faut utiliser les fonctions écrites au-dessus pour générer les
 * chaînes de caractères attendues, en utilisant chaque fois le
 * moins de code possible.
 *
 * La chaîne de caractères sera stockée dans la variable result et cette
 * variable affichée dans la console.
 *
 * Chaîne #1 : A
 * Chaîne #2 : AC
 * Chaîne #3 : ABBCCC
 * Chaîne #4 : CBCBA
 * Chaîne #5 : CB!C CB!B CB!A
 */

// Chaine 1
result = letterA();
console.log(result);
// Chaine 2
result += letterC();
console.log(result);
// Chaine 3
result = letterA();
for(index = 0; index <= 1; index++){
    result += letterB();
}
for(index = 0; index <= 2; index++){
    result += letterC();
}
console.log(result);
// Chaine 4
result = "";
for(index = 0; index <=1; index++){
    result += letterC() + letterB();
}
result += letterA();
console.log(result);
// Chaine 5
function cB(){
        result = "";
        result += letterC() + letterB() + "!";
        return result;
}
result = cB() + letterC() + ' ' + cB() + letterB() + ' ' + cB() + letterA();
console.log(result);



