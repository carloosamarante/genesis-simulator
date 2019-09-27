if (window.location.pathname.match('modules.html') != null) {
  var securityModule = document.getElementById("security-module"),
    securityModal = document.getElementById("security-modal"),
    securityButton = document.getElementById("securityonoffswitch"),
    securityBoxContent = document.getElementById("onoffswitchsecurity-container"),
    securitySpinnerLoading = document.getElementById("spinner-security"),
    securityModalHttp = new XMLHttpRequest(),
    url = 'http://localhost:5051/healthcheck';

  securityModule.onclick = function () {
    securityModal.classList.remove("hide-button-effect");
    securityModal.classList.add("button-effect");
  }

  securityButton.onclick = function () {
    changeStatus();
  };

  function changeStatus() {
    securityModalHttp.open('POST', url);
    securityModalHttp.onreadystatechange = function () {
      if (securityModalHttp.readyState != 4) {
        securityBoxContent.classList.add("hide-button-effect");
        securitySpinnerLoading.classList.remove("hide-button-effect");
      }
      if (securityModalHttp.readyState == 4 && securityModalHttp.status == 200) {
        setTimeout(function () {
          securitySpinnerLoading.classList.add("hide-button-effect");
          securityBoxContent.classList.remove("hide-button-effect");
        }, 3000);
      }
    }
    securityModalHttp.send({'value': securityButton.checked});
  }

}