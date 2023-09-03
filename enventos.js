// eventos.js
function saludar() {
    alert("Hola!");
}
// eventos.js
document.addEventListener("DOMContentLoaded", function () {
    const divElement = document.querySelector("div");

    divElement.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
});
