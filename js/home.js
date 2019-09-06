var count = 0,
    txt = 'Bem vindo ao Simulador Genesis!',
    speed = 130;

window.onload = function typeWriter() {
  if (count < txt.length) {
    document.getElementById("title-presentation").innerHTML += txt.charAt(count);
    count++;
    setTimeout(typeWriter, speed);
  } else {
        document.getElementById("button-home").classList.remove("hide-button-effect");
        document.getElementById("button-home").classList.add("button-effect");
  }

  document.getElementById("button-home").onclick = function loading() {
    document.getElementById("loading").classList.remove("hide");
  }
}