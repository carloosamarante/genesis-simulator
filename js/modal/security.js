if (window.location.pathname.match('modules.html') != null) {
  var securityModule = document.getElementById("security-module"),
    securityModal = document.getElementById("security-modal"),
    securityButton = document.getElementById("securityonoffswitch"),
    securityBoxContent = document.getElementById("onoffswitchsecurity-container"),
    securitySpinnerLoading = document.getElementById("spinner-security"),
    securityAlertButton = document.getElementById("security-button"),
    securityModalHttp = new XMLHttpRequest(),
    securityAlertHttp = new XMLHttpRequest(),
    url = 'http://localhost:5051/security';
    url_alert = 'http://localhost:5051/security/danger';

  securityModule.onclick = function () {
    securityModal.classList.remove("hide-button-effect");
    securityModal.classList.add("button-effect");
  }

  securityButton.onclick = function () {
    changeStatus();
  };

  securityAlertButton.onclick = function () {
    if (securityAlertButton.classList.contains("pulse")) {
      changeAlertStatus(false);
    } else {
      changeAlertStatus(true);
    }
  }

  function changeStatus() {
    securityModalHttp.open('PUT', url);
    securityModalHttp.onreadystatechange = function () {
      if (securityModalHttp.readyState != 4) {
        securityAlertButton.classList.add("hide-button-effect");
        securityBoxContent.classList.add("hide-button-effect");
        securitySpinnerLoading.classList.remove("hide-button-effect");
      }
      if (securityModalHttp.readyState == 4 && securityModalHttp.status == 200) {
        setTimeout(function () {
          securitySpinnerLoading.classList.add("hide-button-effect");
          securityBoxContent.classList.remove("hide-button-effect");

          if (securityButton.checked) {
            securityAlertButton.classList.remove("hide-button-effect");
          } else {
            securityAlertButton.classList.add("hide-button-effect");
            securityAlertButton.classList.remove("pulse")
          }
        }, 3000);
      }
    }
    securityModalHttp.setRequestHeader("Content-type", "application/json");
    securityModalHttp.send(JSON.stringify({ 'value': securityButton.checked }));
  }

  function changeAlertStatus(state) {
    securityAlertHttp.open('PUT', url_alert);
    securityAlertHttp.onreadystatechange = function () {
      if (securityAlertHttp.readyState == 4 && securityAlertHttp.status == 200) {
        if (securityAlertButton.classList.contains("pulse")) {
          securityAlertButton.classList.remove("pulse");
        } else {
          securityAlertButton.classList.add("pulse");
        }
      }
    }
    securityAlertHttp.setRequestHeader("Content-type", "application/json");
    securityAlertHttp.send(JSON.stringify({'value': state}));
  }

}