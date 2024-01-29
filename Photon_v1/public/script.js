var menuButton = document.getElementById("menu-button");
var closeButton = document.getElementById("close-button");
var sidebar =  document.getElementById("sidebar");

menuButton.addEventListener("click", () => {
  sidebar.style.display = "flex";
})

closeButton.addEventListener("click", () => {
  sidebar.style.display = "none";
})