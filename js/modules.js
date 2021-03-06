document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.pathname.match('modules.html') != null) {
    var moduleIcon = document.getElementById("module-icon"),
      moduleBox = document.getElementsByClassName("modules-box"),
      newModule = document.getElementById("new-module-id"),
      plusIcon = document.getElementById("plus-icon"),
      velocityModal = document.getElementById("velocity-modal"),
      sleepModal = document.getElementById("sleep-modal"),
      timeModal = document.getElementById("time-modal"),
      fuelModal = document.getElementById("fuel-modal"),
      securityModal = document.getElementById("security-modal"),
      recommendationModal = document.getElementById("recommendation-modal"),
      newModal = document.getElementById("new-modal");

    moduleIcon.classList.remove("hide-button-effect");
    moduleIcon.classList.add("button-effect");
    plusIcon.classList.remove("hide-button-effect");
    plusIcon.classList.add("button-effect");
    showModules();

    window.onclick = function(event) {
      if (event.target == timeModal) {
        timeModal.classList.remove("button-effect");
        timeModal.classList.add("hide-button-effect");
      }
      if (event.target == velocityModal) {
        velocityModal.classList.remove("button-effect");
        velocityModal.classList.add("hide-button-effect");
      }
      if (event.target == sleepModal) {
        sleepModal.classList.remove("button-effect");
        sleepModal.classList.add("hide-button-effect");
      }
      if (event.target == fuelModal) {
        fuelModal.classList.remove("button-effect");
        fuelModal.classList.add("hide-button-effect");
      }
      if (event.target == securityModal) {
        securityModal.classList.remove("button-effect");
        securityModal.classList.add("hide-button-effect");
      }
      if (event.target == recommendationModal) {
        recommendationModal.classList.remove("button-effect");
        recommendationModal.classList.add("hide-button-effect");
      }
      if (event.target == newModal) {
        newModal.classList.remove("button-effect");
        newModal.classList.add("hide-button-effect");
      }
    }

    function showModules() {
      for (var i = 0; i < moduleBox.length; ++i) {
        moduleBox[i].classList.remove("hide-button-effect");
        moduleBox[i].classList.add("button-effect");
      }
      newModule.classList.remove("hide-button-effect");
      newModule.classList.add("button-effect");
    }
  }
})