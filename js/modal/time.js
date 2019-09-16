document.addEventListener("DOMContentLoaded", function (event) {
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

    window.onclick = function (event) {
      if (event.target == timeModal) {
        timeModal.classList.remove("button-effect");
        timeModal.classList.add("hide-button-effect");
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
            if (TimeClockHttp.readyState == 3) {
              timeClockButton.innerHTML = "Alterando...";
              timeClockButton.setAttribute("disabled", true);
            }
            if (TimeClockHttp.readyState == 4 && TimeClockHttp.status == 200) {
              document.getElementById("hour-clock").innerHTML = timec;
              timeClockButton.innerHTML = "Alterar";
              timeClockButton.setAttribute("disabled", false);
            }
          }
          TimeClockHttp.send(timec);

        } else if (typeButton == 'period') {
          var timep = document.getElementById("timep").value;

          TimePeriodHttp.open('POST', url);
          TimePeriodHttp.onreadystatechange = function () {
            if (TimePeriodHttp.readyState == 3) {
              timePeriodButton.innerHTML = "Alterando...";
              timePeriodButton.setAttribute("disabled", true);
            }
            if (TimePeriodHttp.readyState == 4 && TimePeriodHttp.status == 200) {
              document.getElementById("hour-period").innerHTML = timep;
              timePeriodButton.innerHTML = "Alterar";
              timePeriodButton.setAttribute("disabled", false);
            }
          }
          TimePeriodHttp.send(timep);
        }
      }
    }
  }
});