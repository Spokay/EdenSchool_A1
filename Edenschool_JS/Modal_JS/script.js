let domElements = document.querySelectorAll('#validButton, #modal-background');
let bigblock = document.getElementById('bigblock');
let cross = document.querySelector('.fa-times');

domElements[0].addEventListener('click', function(e){
    e.preventDefault();
    domElements[1].style.display = 'block';
});
cross.addEventListener('click', function(e){
    domElements[1].style.display = 'none';
});
window.onclick = function(e){
    if(e.target === domElements[1]){
        domElements[1].style.display = 'none';
    }
};

