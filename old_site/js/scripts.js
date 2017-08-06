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


//animates the duck
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


// Google analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-37961973-6', 'auto');
  ga('send', 'pageview');
