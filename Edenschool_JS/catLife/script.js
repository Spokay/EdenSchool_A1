let cat;
let started = false;
let nameContainer = document.getElementById('name');
let nameForm = document.getElementById('nameform');
let body = document.getElementsByTagName('body')[0];
let ul = document.querySelector('#stats ul');
let eatBtn = document.getElementById('eatbtn');
let sleepBtn = document.getElementById('sleepbtn');
let jumpBtn = document.getElementById('jumpbtn');
let hugBtn = document.getElementById('hugbtn');
let animations = document.getElementsByClassName('catImgs');

function Chat(name){
    this.nom = name;
    this.fatigue = 0;
    this.faim = 0;
    this.humeur = 100;
    this.Jump = function(){
        if (this.fatigue >= 50){
            console.log('je suis trop fatigué pour sauter');
        }
        else {
            console.log('hop hop');
            this.fatigue += 10;
            this.faim += 10;
        }
    }
    this.Manger = function(){
        if (this.faim < 5){
            console.log('je suis déja rassasié');
            this.humeur -= 20;
        }
        else {
            this.faim -= 20;
            console.log('miam');
            this.fatigue += 5;
        }
    }
    this.Dormir = function(){
        if(this.fatigue < 5){
            this.humeur -= 10;
        }
        this.fatigue = 0;
        this.faim += 15;
    }
    this.Status = function(){
       ul.innerHTML = '';
        let fatigueKey = Object.getOwnPropertyNames(this)[1];
        let faimKey = Object.getOwnPropertyNames(this)[2];
        let humeurKey = Object.getOwnPropertyNames(this)[3];
        ul.insertAdjacentHTML("afterbegin", '<li>' + fatigueKey + ' : ' + this.fatigue +'</li>');
        ul.insertAdjacentHTML("afterbegin", '<li>' + faimKey + ' : ' + this.faim +'</li>');
        ul.insertAdjacentHTML("afterbegin", '<li>' + humeurKey + ' : ' + this.humeur +'</li>');

    }
    this.Calin = function(){
        this.humeur += 15;
    }

}

//functions

function hideEatGif(){
    animations[0].style.display = "block";
    animations[1].style.display = "none";
}
function displayEatGif(){
    setTimeout(hideEatGif, 3000);
    animations[0].style.display = "none";
    animations[1].style.display = "block";
}
function hideSleepGif(){
    animations[0].style.display = "block";
    animations[2].style.display = "none";
}
function displaySleepGif(){
    setTimeout(hideSleepGif, 3000);
    animations[0].style.display = "none";
    animations[2].style.display = "block";
}
function hideJumpGif(){
    animations[0].style.display = "block";
    animations[3].style.display = "none";
}
function displayJumpGif(){
    setTimeout(hideJumpGif, 3000);
    animations[0].style.display = "none";
    animations[3].style.display = "block";
}
function hideHugGif(){
    animations[0].style.display = "block";
    animations[4].style.display = "none";
}
function displayHugGif(){
    setTimeout(hideHugGif, 3000);
    animations[0].style.display = "none";
    animations[4].style.display = "block";
}


// events listeners


nameForm.addEventListener('submit', function(e){
    e.preventDefault();
    let catname = document.getElementById('catname');
    cat = new Chat(catname.value);
    nameContainer.innerHTML = '<h2 style="font-size: 40px">' + catname.value + '</h2>';
    if (started === false){
        cat.Status();
    }
    started = true;
});

// eat events

eatBtn.addEventListener('click', function(e){
    e.preventDefault();
    cat.Manger();
    cat.Status();
});
eatBtn.addEventListener('click', displayEatGif);

// sleep events

sleepBtn.addEventListener('click', function(e){
    e.preventDefault();
    cat.Dormir();
    cat.Status();
});
sleepBtn.addEventListener('click', displaySleepGif);

// jump events

jumpBtn.addEventListener('click', function(e){
    e.preventDefault();
    cat.Jump();
    cat.Status();
});
jumpBtn.addEventListener('click', displayJumpGif);

// hug events

hugBtn.addEventListener('click', function(e){
    e.preventDefault();
    cat.Calin();
    cat.Status();
});
hugBtn.addEventListener('click', displayHugGif);

// intervalles


setInterval(function (){

    if (started) {
        if (cat.humeur > 80) {
            body.style.backgroundImage = 'url(img/patterncatHappy.png)';
        } else if (cat.humeur <= 80 && cat.humeur >= 30) {
            body.style.backgroundImage = 'url(img/patterncatMedium.png)';
        } else {
            body.style.backgroundImage = 'url(img/patterncatAngry.png)';
        }
    }
}, 100);









