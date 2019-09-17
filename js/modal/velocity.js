if (window.location.pathname.match('modules.html') != null) {
  var velocityModule = document.getElementById("velocity-module"),
    velocityModal = document.getElementById("velocity-modal"),
    velocityButton = document.getElementById("odometer-button"),
    velocityHttp = new XMLHttpRequest(),
    url = 'http://localhost:5051/healthcheck';

    velocityButton.onclick = function () {
      changeSpeed();
    };

  velocityModule.onclick = function () {
    velocityModal.classList.remove("hide-button-effect");
    velocityModal.classList.add("button-effect");
  }

  function changeSpeed() {
    var speed = document.getElementById("odometer").value;

    velocityHttp.open('POST', url);
    velocityHttp.onreadystatechange = function () {
      if (velocityHttp.readyState != 4) {
        velocityButton.innerHTML = "Alterando...";
        velocityButton.classList.add("disabled");
      }
      if (velocityHttp.readyState == 4 && velocityHttp.status == 200) {
        setTimeout(function () {
          document.getElementById("velocity").innerHTML = speed;
          calcSpeedMarker(speed);
          velocityButton.innerHTML = "Alterar";
          velocityButton.classList.remove("disabled");
        }, 3000);
      }
    }
      velocityHttp.send(speed);
  }

  function calcSpeedMarker(speed) {
    [].forEach.call(document.querySelectorAll('.marker-opacity'), function (el) {
      el.classList.remove('marker-opacity');
    });
    marker = Math.round(speed/15);
    for (var i = 1; i <= marker; i++) {
      id = "marker-" + i
      document.getElementById(id).classList.add("marker-opacity");
    }
  }
}