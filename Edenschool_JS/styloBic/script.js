function Stylo(col){
    this.couleur = col;
    this.encre = 100;
    this.ouvert = false;
    this.ecrire = function(color, writer){
        if(this.encre === 0){
            let reload = confirm('voulez n\'avez plus d\'encre, voulez vous recharger votre stylo ?');
            if(reload){
                this.encre = 100;
            }
            else {
                console.log('Vous n\'avez plus d\encre pour écrire');
            }
        }
        else if(this.ouvert === true){
            document.write('<h1 id="text" style="color:' + this.couleur + ' ">' + writer + '</h1>');
            this.encre -= 20;
        }
        else{
            this.ouvert = true;
            console.log('je dois dabord enlever le capuchon');
        }
    }
}
let bic = new Stylo('green');


