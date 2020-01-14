let duck = document.getElementById('duck');

let player = document.getElementById('player');

playAudio = () => {
    // declaring the src here allows you to squeak FASTER🔥
    player.src = './assets/squeak.wav';
    player.play()
};

duck.addEventListener('click', () => {
    playAudio();
    duck.blur(); //removes focus after click
});

// same thing but accessible 🎉
duck.addEventListener('keypress', () => {
    playAudio();
    duck.blur(); //removes focus after click
    setTimeout(()=> {duck.focus()} ,150);

});
