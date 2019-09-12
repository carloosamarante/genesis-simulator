window.onload = function typeWriter() {
  var moduleIcon = document.getElementById("module-icon"),
      moduleBox = document.getElementsByClassName("modules-box"),
      plusIcon = document.getElementById("plus-icon"),
      timeModule = document.getElementById("time-module"),
      timeModal = document.getElementById("time-modal");

  moduleIcon.classList.remove("hide-button-effect");
  moduleIcon.classList.add("button-effect");
  plusIcon.classList.remove("hide-button-effect");
  plusIcon.classList.add("button-effect");
  showModules();

  function showModules() {
    for (var i = 0; i < moduleBox.length; ++i) {
        moduleBox[i].classList.remove("hide-button-effect");
        moduleBox[i].classList.add("button-effect");
    }
  }

  timeModule.onclick = function showTime() {
    timeModal.classList.remove("hide-button-effect");
    timeModal.classList.add("button-effect");
  }

  window.onclick = function(event) {
    if (event.target == timeModal) {
      timeModal.classList.remove("button-effect");
      timeModal.classList.add("hide-button-effect");
    }
  }
}