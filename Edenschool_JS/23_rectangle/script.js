let button = document.getElementById('toggle-rectangle');
let rectangle = document.querySelector('.rectangle');


button.addEventListener('click', function (){
    rectangle.classList.toggle('hide');
});
rectangle.addEventListener('mouseover', function (){
    rectangle.classList.toggle('important');
});
rectangle.addEventListener('mouseout', function (){
   rectangle.classList.toggle('important');
   rectangle.classList.remove('good');
});
rectangle.addEventListener('dblclick', function (){
   rectangle.classList.toggle('good');
});
