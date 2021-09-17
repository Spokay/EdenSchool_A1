// toolbar elements
let toolbar = document.querySelector('.toolbar');
let controllerElements = document.querySelectorAll('.controller-container');
let toolbarArrow = document.querySelector('.toolbar > i');
let controllerContainer = document.getElementById('controller');
let displayed = false;



//control diapo
let currentImage = 1;
let imageElement = document.querySelector('#bg-image > img');
let buttonsArray = document.querySelectorAll('.controller-item');
let imagesArray = [];
function previous(actual){
    if (actual <= 1){
        currentImage = 6;
        imageElement.src = 'assets/img/' + currentImage +'.jpg';
    }
    else{
        currentImage--;
        imageElement.src = 'assets/img/' + currentImage +'.jpg';
    }
}

// display toolbar
function displayArrow(){
    toolbarArrow.classList.remove('arrow-up');
    toolbarArrow.classList.add('arrow-down');
    controllerContainer.classList.remove('hidden');
    controllerContainer.classList.add('displayed');
}
function hideArrow(){
    toolbarArrow.classList.remove('arrow-down');
    toolbarArrow.classList.add('arrow-up');
    controllerContainer.classList.remove('displayed');
    controllerContainer.classList.add('hidden');
}
function displayController(){
    if(!displayed){
        displayArrow();
        controllerElements[0].classList.toggle('displayElement');
        controllerElements[1].classList.toggle('displayElement');
        controllerElements[2].classList.toggle('displayElement');
        controllerElements[3].classList.toggle('displayElement');
        displayed = true;
    }
    else{
        hideArrow();
        controllerElements[0].classList.toggle('displayElement');
        controllerElements[1].classList.toggle('displayElement');
        controllerElements[2].classList.toggle('displayElement');
        controllerElements[3].classList.toggle('displayElement');
        displayed = false;
    }
}


//events listeners
toolbar.addEventListener('click', displayController);
buttonsArray[0].addEventListener('click', function (){
    previous(currentImage);
});


