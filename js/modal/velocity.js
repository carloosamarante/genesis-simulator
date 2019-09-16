document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.pathname.match('modules.html') != null) {
    var velocityModule = document.getElementById("velocity-module"),
        velocityModal = document.getElementById("velocity-modal");

    velocityModule.onclick = function showTime() {
      velocityModal.classList.remove("hide-button-effect");
      velocityModal.classList.add("button-effect");
    }
    if (event.target == velocityModal) {
      velocityModal.classList.remove("button-effect");
      velocityModal.classList.add("hide-button-effect");
    }
  }
})