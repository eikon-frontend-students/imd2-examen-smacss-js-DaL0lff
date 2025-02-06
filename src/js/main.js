var boxToggleHeader = document.querySelector(".l-header");
function changeHeader() {
  boxToggleHeader.classList.toggle("is-active");
}
boxToggleHeader.addEventListener("click", changeHeader);

var boxTogglePink = document.querySelector(".l-cardonions");
function changePink() {
  boxTogglePink.classList.toggle("is-active");
}
boxTogglePink.addEventListener("click", changePink);

var boxToggleGreen = document.querySelector(".l-cardherby");
function changeGreen() {
  boxToggleGreen.classList.toggle("is-active");
}
boxToggleGreen.addEventListener("click", changeGreen);

var boxToggleBlue = document.querySelector(".l-cardsmooth");
function changeBlue() {
  boxToggleBlue.classList.toggle("is-active");
}
boxToggleBlue.addEventListener("click", changeBlue);
