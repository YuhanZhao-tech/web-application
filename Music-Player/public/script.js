const nextButton = document.getElementById("next");
const album2 = document.getElementById("album2")
const body = document.getElementById("body");

nextButton.addEventListener("click", () => {
    console.log("Hello");
    album2.style.left = 0;
    body.style.backgroundImage = "url('cover2.jpg')";
})