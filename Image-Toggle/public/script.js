const images = document.querySelectorAll(".image-box");
images.forEach((image) => {

    image.addEventListener("click", () => {
        image.classList.toggle("box-active");
    })
})