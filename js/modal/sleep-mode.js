if (window.location.pathname.match('modules.html') != null) {
  var sleepModule = document.getElementById("sleep-module"),
    sleepModal = document.getElementById("sleep-modal"),
    sleepButton = document.getElementById("myonoffswitch"),
    sleepBoxContent = document.getElementById("onoffswitch-container"),
    spinnerLoading = document.getElementById("spinner-sleep"),
    sleepModalHttp = new XMLHttpRequest(),
    url = 'http://localhost:5051/sleep';

  sleepModule.onclick = function () {
    sleepModal.classList.remove("hide-button-effect");
    sleepModal.classList.add("button-effect");
  }

  sleepButton.onclick = function () {
    changeStatus();
  };

  function changeStatus() {
    sleepModalHttp.open('PUT', url);
    sleepModalHttp.onreadystatechange = function () {
      if (sleepModalHttp.readyState != 4) {
        sleepBoxContent.classList.add("hide-button-effect");
        spinnerLoading.classList.remove("hide-button-effect");
      }
      if (sleepModalHttp.readyState == 4 && sleepModalHttp.status == 200) {
        setTimeout(function () {
          spinnerLoading.classList.add("hide-button-effect");
          sleepBoxContent.classList.remove("hide-button-effect");
        }, 3000);
      }
    }
    sleepModalHttp.send({'value': sleepButton.checked});
  }

}