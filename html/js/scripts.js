/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//plays audio
function playAudio(){
player = document.getElementById('player');
player.src = '../audio/squeak.wav';
player.play()
};

function animateDuck() {
    duck = document.getElementById('duck');

    initWidth = duck.width;
    initHeight = duck.height;
    
    
    
     var pos = 25;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            
            
            pos--; 
            duck.style.width = initWidth - pos + 'px'; 
            duck.style.height = initHeight - pos + 'px';

        }
    }
    
};