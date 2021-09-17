/*
   EXO Big Bag
   Réaliser une classe Sac qui permettra de faire ses courses.
  On peut y mettre des articles, chaque article ne peut être qu'en un seul exemplaire.
  On doit avoir les méthodes suivantes :
• Ajouter
• Contenu
• Taille
• Vide
-BONUS-
- je peux voir la liste de ce que le sac contient
- je peux retirer un objet du sac
*/


function ListeDeCourse(){
    let ul = document.querySelector("#listCourse ul");
    let liS = document.querySelectorAll("ul li");
    let formAdd = document.getElementById('formAdd');
    let addChoice = document.getElementById('articleChoice');
    let addSubmit = document.getElementById('addSubmit');
    let clear = document.getElementById('clear');
    this.panier = [];
    this.Ajouter = function(produit){
        if(this.Verif(produit) === true){
            alert('Ce produit est déja choisis');
        }
        else if(produit === "" || produit === null || produit === undefined){
            alert('Veuillez choisir un produit valable');
        }
        else{
            this.panier.push(produit);
            let product = document.createElement("li");
            product.innerHTML = addChoice.value + '<i class="fas fa-minus"></i>';
            ul.appendChild(product);
            if(this.panier.length > 0){
                let minus = document.querySelectorAll('.fa-minus');
                for(let minI = 0; minI < minus.length; minI++){
                    let minusRunning = minus[minI];
                    minusRunning.addEventListener('click', function (e){
                        let clickedMinus = e.target;
                        let liSelected = clickedMinus.parentElement;
                        let liValue = liSelected.textContent;
                        for(let liSelectedI = 0; liSelectedI < courses.panier.length; liSelectedI++){
                            let indexPanier = courses.panier.indexOf(liValue);
                            if (liValue === courses.panier[indexPanier]){
                                courses.panier.splice(indexPanier, 1);
                                liSelected.remove();
                                break;
                            }
                        }
                    });
                }
            }
        }

    }
    this.Verif = function(p){
            let verifValue = false;
            for(let verifIndex = 0; verifIndex < this.panier.length; verifIndex++){
                if(p === this.panier[verifIndex]){
                    verifValue = true;
                    break;
                }
                else{
                    verifValue = false;
                }
            }
            return verifValue;
    }
    this.Contenu = function(){
        console.log(this.panier);
    }
    this.Taille = function(){
        console.log(this.panier.length);
    }
    this.Vide = function(){
            this.panier = [];
            ul.innerHTML = '';
    }

    formAdd.addEventListener('submit', function(e){
        e.preventDefault();
        courses.Ajouter(addChoice.value);
    });
    clear.addEventListener('click', function (){
        courses.Vide();
    });


}

let courses = new ListeDeCourse();

















