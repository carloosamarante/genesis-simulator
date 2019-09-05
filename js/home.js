var i = 0,
    txt = 'Bem vindo ao Simulador Genesis!',
    speed = 130;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title-presentation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
        document.getElementById("button-home").classList.remove("hide-button-effect");
        document.getElementById("button-home").classList.add("button-effect");
  }
}