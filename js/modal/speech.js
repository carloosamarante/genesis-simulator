if (window.location.pathname.match('modules.html') != null) {
  var speechModule = document.getElementById("speech-module"),
    speechModal = document.getElementById("speech-modal"),
    speechModalHttp = new XMLHttpRequest(),
    speechButton = document.getElementById("microphone-button"),
    spinnerSpeech = document.getElementById("spinner-speech"),
    url = 'http://localhost:5051/healthcheck',
    SpeechRecognition = SpeechRecognition || webkitSpeechRecognition,
    SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList,
    grammar = '#JSGF V1.0;',
    recognition = new SpeechRecognition(),
    speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'pt-BR';
  recognition.interimResults = false;

  speechModule.onclick = function () {
    speechModal.classList.add("button-effect");
    speechModal.classList.remove("hide-button-effect");
  }

  speechButton.onclick = function () {
    recognition.start();
    speechButton.classList.add("hide-button-effect");
    spinnerSpeech.classList.remove("hide-button-effect");
  };

  recognition.onspeechend = function () {
    recognition.stop();
  };

  recognition.onerror = function(event) {
    spinnerSpeech.classList.add("hide-button-effect");
    speechButton.classList.remove("hide-button-effect");
  }

  recognition.onresult = function (event) {
    var last = event.results.length - 1,
      command = event.results[last][0].transcript;
    console.log('Voice Input: ' + command);
    recognitionSpeech(command)
  };

  function recognitionSpeech(command) {
    speechModalHttp.open('POST', url);
    speechModalHttp.onreadystatechange = function () {
      if (speechModalHttp.readyState == 4 && speechModalHttp.status == 200) {
        setTimeout(function () {
          spinnerSpeech.classList.add("hide-button-effect");
          speechButton.classList.remove("hide-button-effect");
        }, 2000);
      }
    }
    speechModalHttp.send(command);
  }

}


