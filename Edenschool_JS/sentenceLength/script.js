// ## Enoncé
// Rechercher et afficher en HTML la chaîne ayant le plus grand nombre de caractères dans le tableau de phrases.
//     ## Remarques
// * Le programme doit etre dynamique : le tableau peut s'aggrandir ou diminuer sans qu'il y ait besoin de modifier le code.
// * Les tableaux comme les chaînes de caractères sont des objets et disposent chacun d'une propriété nécessaire pour le programme.
// * Construire par étapes le programme : faire une boucle, puis une boucle qui affiche la longueur de chaque phrase, etc.
// * A la fin il faut afficher la phrase la plus longue elle-même ainsi que sa longueur.


/* let phrases = ["Le DOM est une représentation du document HTML source.", "Comme nous le verrons plus loin, il comporte quelques différences\, mais il s\'agit pour l'essentiel d\'une conversion de la structure et du contenu du document HTML en un modèle objet utilisable par divers programmes.", "La structure d\'objet du DOM est représentée par ce qu'on appelle une \"arborescence de noeuds\" (node tree).", "On l'appelle ainsi parce qu'il peut être considéré comme un arbre qui se ramifie en plusieurs branches enfants, chacune pouvant avoir des feuilles.", "Le premier parent est l\'élément racine html, les \"branches\" enfants sont les éléments imbriqués et les \"feuilles\" sont le contenu des éléments.", "Bien que créé à partir du document source HTML, le DOM n\'en est pas toujours l\'exact reflet.", "Il peut en différer dans deux cas.", "Le DOM est une interface pour les documents HTML valides.", "Pendant le processus de création du DOM, le navigateur peut être amené à corriger des informations invalides.", "Par exemple une page où les éléments head et body auraient été oubliés, alors qu\'ils sont requis dans un HTML valide.", "Si nous inspectons l\'arborescence créée, nous pouvons constater que l\'erreur a été corrigée par le moteur de rendu du navigateur.", "En plus d\'être une interface permettant de visualiser le contenu d'un document HTML, le DOM peut être modifié par JavaScript, ce qui en fait une ressource vivante", "Dans ce second cas, le DOM sera mis à jour, mais bien entendu notre document source HTML restera inchangé.", "En bref, le DOM est une interface vers un document HTML.", "Il est utilisé par les navigateurs dans une première étape pour déterminer ce qui peut être rendu à l\'écran, et par JavaScript pour modifier le contenu, la structure ou le style de la page"]; */


let phrases = ["Le DOM est une représentation du document HTML source.", "Comme nous le verrons plus loin, il comporte quelques différences\, mais il s\'agit pour l'essentiel d\'une conversion de la structure et du contenu du document HTML en un modèle objet utilisable par divers programmes.", "La structure d\'objet du DOM est représentée par ce qu'on appelle une \"arborescence de noeuds\" (node tree).", "On l'appelle ainsi parce qu'il peut être considéré comme un arbre qui se ramifie en plusieurs branches enfants, chacune pouvant avoir des feuilles.", "Le premier parent est l\'élément racine html, les \"branches\" enfants sont les éléments imbriqués et les \"feuilles\" sont le contenu des éléments.", "Bien que créé à partir du document source HTML, le DOM n\'en est pas toujours l\'exact reflet.", "Il peut en différer dans deux cas.", "Le DOM est une interface pour les documents HTML valides.", "Pendant le processus de création du DOM, le navigateur peut être amené à corriger des informations invalides.", "Par exemple une page où les éléments head et body auraient été oubliés, alors qu\'ils sont requis dans un HTML valide.", "Si nous inspectons l\'arborescence créée, nous pouvons constater que l\'erreur a été corrigée par le moteur de rendu du navigateur.", "En plus d\'être une interface permettant de visualiser le contenu d'un document HTML, le DOM peut être modifié par JavaScript, ce qui en fait une ressource vivante", "Dans ce second cas, le DOM sera mis à jour, mais bien entendu notre document source HTML restera inchangé.", "En bref, le DOM est une interface vers un document HTML.", "Il est utilisé par les navigateurs dans une première étape pour déterminer ce qui peut être rendu à l\'écran, et par JavaScript pour modifier le contenu, la structure ou le style de la page", "lorem En bref, le DOM est une interface vers un document HTML.\", \"Il est utilisé par les navigateurs dans une première étape pour déterminer ce qui peut être rendu à l\'écran, et par JavaScript pour modifier le contenu, la structure ou le style de la pageEn bref, le DOM est une interface vers un document HTML.\", \"Il est utilisé par les navigateurs dans une première étape pour déterminer ce qui peut être rendu à l\'écran, et par JavaScript pour modifier le contenu, la structure ou le style de la page En bref, le DOM est une interface vers un document HTML.\", \"Il est utilisé par les navigateurs dans une première étape pour déterminer ce qui peut être rendu à l\'écran, et par JavaScript pour modifier le contenu, la structure ou le style de la page"];

let maxLength = 0;
let stringLength = 0;
let phraseI = 0;

function findStringLength(){
    for (let i = 0; i < phrases.length; i++){
        stringLength = phrases[i].length;
        if (stringLength > maxLength){
            maxLength = stringLength;
            phraseI = phrases[i];
        }
    }
    return maxLength;
}

findStringLength();

document.write(phraseI + '<br><h2>Cette phrase est la plus longue du tableau et fait ' + maxLength + ' caractères</h2>')




