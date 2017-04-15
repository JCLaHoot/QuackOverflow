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