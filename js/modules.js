window.onload = function typeWriter() {
  var moduleIcon = document.getElementById("module-icon"),
      moduleBox = document.getElementsByClassName("modules-box"),
      plusIcon = document.getElementById("plus-icon"),
      timeModule = document.getElementById("time-module"),
      timeModal = document.getElementById("time-modal");
      timePeriodButton = document.getElementById("period-time-button");
      timeClockButton = document.getElementById("time-clock-button");

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

  timeClockButton.onclick = function(){
    changePeriod('clock');
  };

  timePeriodButton.onclick = function(){
    changePeriod('period');
  };

  function changePeriod(typeButton) {
    if (typeButton == 'clock') {
      timec = document.getElementById("timec").value;
      document.getElementById("hour-clock").innerHTML = timec
    } else {
      timep = document.getElementById("timep").value;
      document.getElementById("hour-period").innerHTML = timep
    }
  }
}