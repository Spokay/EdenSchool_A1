
let bigImageBackground = document.getElementById('bg-image');
let imageChange = document.querySelector('#bg-image img');
let previewDivsArray = document.querySelector('#images-preview');
let buttons = document.querySelectorAll('#controller input');
let downloadLink = document.getElementById('dl-link');

for (let i = 1; i <= 5; i++){
    let newImage = document.createElement('img');
    newImage.setAttribute('src', 'assets/img/' +  i + '.jpg')
    previewDivsArray.appendChild(newImage);
    newImage.onclick = function(e){
        imageChange.src = e.target.src;
        downloadLink.href = e.target.src;
    };
}

buttons[0].addEventListener('click', function (e){
    e.preventDefault();
    bigImageBackground.style.filter = 'contrast(' + buttons[0].value + '%)';
});

buttons[1].addEventListener('click', function(){
    bigImageBackground.style.filter = 'brightness(' + buttons[1].value + '%)';
});
