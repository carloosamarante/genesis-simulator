if (window.location.pathname.match('modules.html') != null) {
  var timeModule = document.getElementById("time-module"),
    timeModal = document.getElementById("time-modal"),
    timePeriodButton = document.getElementById("period-time-button"),
    timeClockButton = document.getElementById("time-clock-button"),
    TimeClockHttp = new XMLHttpRequest(),
    TimePeriodHttp = new XMLHttpRequest(),
    url = 'http://localhost:5051/healthcheck';

  timeModule.onclick = function showTime() {
    timeModal.classList.remove("hide-button-effect");
    timeModal.classList.add("button-effect");
  }

  timeClockButton.onclick = function () {
    changePeriod('clock');
  };

  timePeriodButton.onclick = function () {
    changePeriod('period');
  };

  function changePeriod(typeButton) {
    if (typeButton == 'clock') {
      var timec = document.getElementById("timec").value;

      TimeClockHttp.open('POST', url);
      TimeClockHttp.onreadystatechange = function () {
        if (TimeClockHttp.readyState != 4) {
          timeClockButton.innerHTML = "Alterando...";
          timeClockButton.classList.add("disabled");
        }
        if (TimeClockHttp.readyState == 4 && TimeClockHttp.status == 200) {
          setTimeout(function () {
            document.getElementById("hour-clock").innerHTML = timec;
            timeClockButton.innerHTML = "Alterar";
            timeClockButton.classList.remove("disabled");
          }, 3000);
        }
      }
      TimeClockHttp.send(timec);

    } else if (typeButton == 'period') {
      var timep = document.getElementById("timep").value;

      TimePeriodHttp.open('POST', url);
      TimePeriodHttp.onreadystatechange = function () {
        if (TimePeriodHttp.readyState != 4) {
          timePeriodButton.innerHTML = "Alterando...";
          timePeriodButton.classList.add("disabled");
        }
        if (TimePeriodHttp.readyState == 4 && TimePeriodHttp.status == 200) {
          setTimeout(function () {
            document.getElementById("hour-period").innerHTML = timep;
            timePeriodButton.innerHTML = "Alterar";
            timePeriodButton.classList.remove("disabled");
          }, 3000);
        }
      }
      TimePeriodHttp.send(timep);
    }
  }
}