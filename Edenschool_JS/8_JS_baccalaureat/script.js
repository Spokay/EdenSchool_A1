let moyenne = parseInt(prompt("quelle est ta moyenne ?"));
if(!isNaN(moyenne)){
    if (moyenne >= 12){
        alert("Bravo vous êtes recu avec une mention");
    }else if(moyenne < 12 && moyenne >= 10){
        alert("Vous avez été recu sans mention");
    }else if(moyenne < 10){
        alert("recalé");
    }
}
else{
    alert("Veuillez renseigner un nombre");
}