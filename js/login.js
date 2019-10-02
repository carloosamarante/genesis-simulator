var count = 0,
  txt = 'Bem vindo ao Simulador Genesis!',
  speed = 130;

window.onload = function typeWriter() {
  if (window.location.pathname.match('login.html') != null) {
    connectHttp = new XMLHttpRequest(),
      url = 'http://localhost:5051/connect';
    connectButton = document.getElementById("button-home");
    if (count < txt.length) {
      document.getElementById("title-presentation").innerHTML += txt.charAt(count);
      count++;
      setTimeout(typeWriter, speed);
    } else {
      connectButton.classList.remove("hide-button-effect");
      connectButton.classList.add("button-effect");
    }

    spinnerLoading = document.getElementById("loading");
    connectButton.onclick = function loading() {
      connectHttp.open('GET', url);
      connectHttp.onreadystatechange = function () {
        if (connectHttp.readyState != 4) {
          connectButton.classList.add("hide");
          spinnerLoading.classList.remove("hide-button-effect");
          spinnerLoading.classList.add("button-effect");
        }
        if (connectHttp.readyState == 4 && connectHttp.status == 200) {
          setTimeout(function () {
            var newUrl = window.location.href.replace('login.html', 'modules.html')
            window.location.replace(newUrl)
          }, 4500);
        }
      }
      connectHttp.setRequestHeader("Content-type", "application/json");
      connectHttp.send();
    }
  }
}