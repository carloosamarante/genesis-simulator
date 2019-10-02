if (window.location.pathname.match('modules.html') != null) {
  var fuelModule = document.getElementById("fuel-module"),
    fuelModal = document.getElementById("fuel-modal"),
    fuelButton = document.getElementById("fuel-button"),
    fuelHttp = new XMLHttpRequest(),
    urlFuel = 'http://localhost:5051/fuel';

  fuelModule.onclick = function showTime() {
    fuelModal.classList.remove("hide-button-effect");
    fuelModal.classList.add("button-effect");
  }

  fuelButton.onclick = function () {
    checkFuel();
  }

  function checkFuel() {
    fuelHttp.open('GET', urlFuel);
    fuelHttp.onreadystatechange = function () {
      if (fuelHttp.readyState != 4) {
        fuelButton.innerHTML = "Checando...";
        fuelButton.classList.add("disabled");
      }
      if (fuelHttp.readyState == 4 && fuelHttp.status == 200) {
        setTimeout(function () {
          fuelButton.innerHTML = "Checar Combustível";
          fuelButton.classList.remove("disabled");
        }, 3000);
      }
    }
    fuelHttp.setRequestHeader("Content-type", "application/json");
    fuelHttp.send();
  }
}