let tweetContent = document.getElementById('tweetContent');
let count = document.getElementById('counterBlock');

let maxLength = 140;

tweetContent.addEventListener('keydown', function(){
    let tweetLength = tweetContent.value.length;
    if (tweetLength <= maxLength){
        let remaining = maxLength - tweetLength;
        count.innerText = 'il vous reste ' + remaining + ' caractères';
    }
});