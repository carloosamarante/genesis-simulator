document.addEventListener("DOMContentLoaded", function (eventVelocity) {
  if (window.location.pathname.match('modules.html') != null) {
    var velocityModule = document.getElementById("velocity-module"),
      velocityModal = document.getElementById("velocity-modal");

    velocityModule.onclick = function () {
      velocityModal.classList.remove("hide-button-effect");
      velocityModal.classList.add("button-effect");
    }
  }
})