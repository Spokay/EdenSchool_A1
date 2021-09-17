const lundi = "lundi";
const mardi = "mardi";
const mercredi = "mercredi";
const jeudi = "jeudi";
const vendredi = "vendredi";
const samedi = "samedi";
const dimanche = "dimanche";

let jourChoisis = prompt("Saisissez un jour de la semaine");

// if (jourChoisis === dimanche){
//     alert(lundi);
// }
// else if (jourChoisis === lundi){
//     alert(mardi);
// }
// else if (jourChoisis === mardi){
//     alert(mercredi);
// }
// else if (jourChoisis === mercredi){
//     alert(jeudi);
// }
// else if (jourChoisis === jeudi){
//     alert(vendredi);
// }
// else if (jourChoisis === vendredi){
//     alert(samedi);
// }
// else if (jourChoisis === samedi){
//     alert(dimanche);
// }
// else{
//     alert("jour incorrect");
// }

switch(jourChoisis){
    case "lundi":
        alert(mardi);
        break;
    case "mardi":
        alert(mercredi);
        break;
    case "mercredi":
        alert(jeudi);
        break;
    case "jeudi":
        alert(vendredi);
        break;
    case "vendredi":
        alert(samedi);
        break;
    case "samedi":
        alert(dimanche);
        break;
    case "dimanche":
        alert(lundi);
        break;

    default:
        alert("jour incorrect");
}

