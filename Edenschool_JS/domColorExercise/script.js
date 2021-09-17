let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let divs = document.querySelectorAll('.lesDiv');
let p1 = document.querySelector('p:nth-of-type(1)');
let p2 = document.querySelector('p:nth-of-type(2)');
let p3 = document.querySelector('p:nth-of-type(3)');
let p4 = document.querySelector('p:nth-of-type(4)');
let articles = document.querySelectorAll('article.exo');
let formInput = document.getElementById('formColor');
let r = 0, g = 0, b = 0;
// for (let i = 0; i < divs.length; i++){
//     let div = divs[i];
//     div.onclick = function(){
//         r += 20;
//         g += 20;
//         b += 20;
//         this.style.color = 'rgb('+ r +',' + g + ',' + b + ')';
//     }
//
// }
let h1 = document.createElement('h1');
let link = document.querySelector('#section1 a');
h1.textContent = 'Random Colors';
h1.style.color = 'red';
link.style.textDecoration = 'none';
link.appendChild(h1);

formInput.addEventListener('submit', function(e){
    e.preventDefault();
    let rouge = document.getElementById('red').value;
    let vert = document.getElementById('green').value;
    let bleu = document.getElementById('blue').value;
    r = rouge;
    g = vert;
    b = bleu;

    formInput.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
});

let buttonR = document.getElementById('subRandom');
let formRandom = document.getElementById('formRandom');
buttonR.addEventListener('click', function (e){
    e.preventDefault();
    let randomRed = Math.floor(Math.random() * (256));
    let randomGreen = Math.floor(Math.random() * (256));
    let randomBlue = Math.floor(Math.random() * (256));

    formRandom.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue +')';
});

let submit2 = document.getElementById('submit2');
let containers = document.querySelectorAll('.color');
submit2.addEventListener('click', function(e){
    e.preventDefault();
    for(let tabI = 0; tabI < containers.length; tabI++){
        let randomRed2 = Math.floor(Math.random() * (256));
        let randomGreen2 = Math.floor(Math.random() * (256));
        let randomBlue2 = Math.floor(Math.random() * (256));
        let p = document.querySelectorAll('.color p');
        p[tabI].innerHTML = 'rgb(' + randomRed2 + ',' + randomGreen2 + ',' + randomBlue2 +')';

        containers[tabI].style.backgroundColor = 'rgb(' + randomRed2 + ',' + randomGreen2 + ',' + randomBlue2 +')';
    }

});
let containers2 = document.querySelectorAll('.color2');
setInterval(function(){

    for(let tabI2 = 0; tabI2 < containers2.length; tabI2++){
        let randomRed3 = Math.floor(Math.random() * (256));
        let randomGreen3 = Math.floor(Math.random() * (256));
        let randomBlue3 = Math.floor(Math.random() * (256));
        let p = document.querySelectorAll('.color2 p');
        p[tabI2].innerHTML = 'rgb(' + randomRed3 + ',' + randomGreen3 + ',' + randomBlue3 +')';

        containers2[tabI2].style.backgroundColor = 'rgb(' + randomRed3 + ',' + randomGreen3 + ',' + randomBlue3 +')';
    }
}, 1000);

