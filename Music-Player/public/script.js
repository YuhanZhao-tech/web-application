const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const body = document.getElementById("body");
var albumElement;
var currentAlbum = 0;

nextButton.addEventListener("click", () => {
    if (currentAlbum < 3) {
        currentAlbum++;
        albumElement = document.getElementById(`album${currentAlbum}`);
        albumElement.style.left = 0;
        body.style.backgroundImage = `url('cover${currentAlbum}.jpg')`;
    }
})

prevButton.addEventListener("click", () => {
    if (currentAlbum > 0) {
        
        albumElement = document.getElementById(`album${currentAlbum}`);
        albumElement.style.left = 400 + "px";
        currentAlbum--;
        body.style.backgroundImage = `url('cover${currentAlbum}.jpg')`;
    }
})