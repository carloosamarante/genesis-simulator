document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.pathname.match('modules.html') != null) {
    var moduleIcon = document.getElementById("module-icon"),
      moduleBox = document.getElementsByClassName("modules-box"),
      plusIcon = document.getElementById("plus-icon");

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
  }
})