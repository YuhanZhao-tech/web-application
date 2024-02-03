const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const body = document.getElementById("body");
var albumElement;
var currentAlbum = 0;
var song;

function loadAudio() {
    switch (currentAlbum) {
        case 0:
            song = new Audio("retrowave.mp3");
            break;
        case 1:
            song = new Audio("morning.mp3");
            break;
        case 2:
            song = new Audio("space.mp3");
            break;
        case 3:
            song = new Audio("lofi.mp3");
            break;
        default:
            song = new Audio("retrowave.mp3");

    }

}


nextButton.addEventListener("click", () => {
    if (currentAlbum < 3) {
        currentAlbum++;
        albumElement = document.getElementById(`album${currentAlbum}`);
        albumElement.style.left = 0;
        body.style.backgroundImage = `url('cover${currentAlbum}.jpg')`;
        loadAudio();
    }
})

prevButton.addEventListener("click", () => {
    if (currentAlbum > 0) {
        
        albumElement = document.getElementById(`album${currentAlbum}`);
        albumElement.style.left = 400 + "px";
        currentAlbum--;
        body.style.backgroundImage = `url('cover${currentAlbum}.jpg')`;
        loadAudio();
    }
})

playButton.addEventListener("click", () => {

    if (!song.paused) { song.pause() }
    else { song.play() }

})