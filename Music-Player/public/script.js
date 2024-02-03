const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const album2 = document.getElementById("album2")
const body = document.getElementById("body");

nextButton.addEventListener("click", () => {
    album2.style.left = 0;
    body.style.backgroundImage = "url('cover2.jpg')";
})

prevButton.addEventListener("click", () => {
    album2.style.left = "400px";
    body.style.backgroundImage = "url('cover1.jpg')";
})