if (window.location.pathname.match('modules.html') != null) {
  var recommendationModule = document.getElementById("recommendation-module"),
    recommendationModal = document.getElementById("recommendation-modal"),
    restaurantButton = document.getElementById("restaurant-button"),
    hotelButton = document.getElementById("hotel-button"),
    entertainmentButton = document.getElementById("entertainment-button"),
    restaurantHttp = new XMLHttpRequest(),
    hotelHttp = new XMLHttpRequest(),
    entertainmentHttp = new XMLHttpRequest(),
    url = 'http://localhost:5051/healthcheck';

  recommendationModule.onclick = function showTime() {
    recommendationModal.classList.remove("hide-button-effect");
    recommendationModal.classList.add("button-effect");
  }

  restaurantButton.onclick = function () {
    recommendation('restaurant');
  };

  hotelButton.onclick = function () {
    recommendation('hotel');
  };

  entertainmentButton.onclick = function () {
    recommendation('entertainment');
  };

  function recommendation(type) {
    if (type == 'restaurant') {
      restaurantHttp.open('POST', url);
      restaurantHttp.onreadystatechange = function () {
        if (restaurantHttp.readyState != 4) {
          restaurantButton.innerHTML = "Recebendo...";
          restaurantButton.classList.add("disabled");
        }
        if (restaurantHttp.readyState == 4 && restaurantHttp.status == 200) {
          setTimeout(function () {
            restaurantButton.innerHTML = "Receber";
            restaurantButton.classList.remove("disabled");
          }, 3000);
        }
      }
      restaurantHttp.send(type);
    } else if (type == 'hotel') {
      hotelHttp.open('POST', url);
      hotelHttp.onreadystatechange = function () {
        if (hotelHttp.readyState != 4) {
          hotelButton.innerHTML = "Recebendo...";
          hotelButton.classList.add("disabled");
        }
        if (hotelHttp.readyState == 4 && hotelHttp.status == 200) {
          setTimeout(function () {
            hotelButton.innerHTML = "Receber";
            hotelButton.classList.remove("disabled");
          }, 3000);
        }
      }
      hotelHttp.send(type);
    } else {
      entertainmentHttp.open('POST', url);
      entertainmentHttp.onreadystatechange = function () {
        if (entertainmentHttp.readyState != 4) {
          entertainmentButton.innerHTML = "Recebendo...";
          entertainmentButton.classList.add("disabled");
        }
        if (entertainmentHttp.readyState == 4 && entertainmentHttp.status == 200) {
          setTimeout(function () {
            entertainmentButton.innerHTML = "Receber";
            entertainmentButton.classList.remove("disabled");
          }, 3000);
        }
      }
      entertainmentHttp.send(type);
    }
  }
}