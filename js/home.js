var count = 0,
  txt = 'Bem vindo ao Simulador Genesis!',
  speed = 130;

window.onload = function typeWriter() {
  if (window.location.pathname.match('home.html') != null) {
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
      connectButton.classList.add("hide");
      spinnerLoading.classList.remove("hide-button-effect");
      spinnerLoading.classList.add("button-effect");
    }
  }
}