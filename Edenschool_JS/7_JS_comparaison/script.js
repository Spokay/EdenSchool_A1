let nombre1 = parseInt(prompt("saisissez un premier nombre"));
let nombre2 = parseInt(prompt("saisissez un deuxieme nombre"));

if(!Number.isNaN(nombre1) && !Number.isNaN(nombre2)) {
    if(nombre1 > nombre2) {
        alert(nombre1 + " est suppérieur à " + nombre2);
    }
    else if(nombre1 < nombre2) {
        alert(nombre1 + " est inférieur à " + nombre2);
    }
    else {
        alert(nombre1 + " est égal à " + nombre2);
    }
}
else {
    alert("veuillez renseigner des nombres");
}