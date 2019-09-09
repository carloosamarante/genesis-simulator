var count = 0,
    txt = 'M\u00f3dulos',
    speed = 130;

window.onload = function typeWriter() {
  var moduleIcon = document.getElementById("module-icon");
  var moduleBox = document.getElementsByClassName("modules-box");
  
  if (count < txt.length) {
    document.getElementById("module-title").innerHTML += txt.charAt(count);
    count++;
    setTimeout(typeWriter, speed);
  } else {
    moduleIcon.classList.remove("hide-button-effect");
    moduleIcon.classList.remove("button-effect");
    showModules();
  }

  function showModules() {
    for (var i = 0; i < moduleBox.length; ++i) {
        moduleBox[i].classList.remove("hide-button-effect");
        moduleBox[i].classList.add("button-effect");
    }
  }
}