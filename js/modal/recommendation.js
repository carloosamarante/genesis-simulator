if (window.location.pathname.match('modules.html') != null) {
  var recommendationModule = document.getElementById("recommendation-module"),
    recommendationModal = document.getElementById("recommendation-modal"),
    restaurantButton = document.getElementById("restaurant-button"),
    hotelButton = document.getElementById("hotel-button"),
    gasButton = document.getElementById("gas-button"),
    restaurantHttp = new XMLHttpRequest(),
    hotelHttp = new XMLHttpRequest(),
    gasHttp = new XMLHttpRequest(),
    url_gas = 'http://localhost:5051/recommendation/GAS';
    url_hotel = 'http://localhost:5051/recommendation/HOTEL';
    url_restaurant = 'http://localhost:5051/recommendation/RESTAURANT';

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

  gasButton.onclick = function () {
    recommendation('gas');
  };

  function recommendation(type) {
    if (type == 'restaurant') {
      restaurantHttp.open('GET', url_restaurant);
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
      restaurantHttp.setRequestHeader("Content-type", "application/json");
      restaurantHttp.send();
    } else if (type == 'hotel') {
      hotelHttp.open('GET', url_hotel);
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
      hotelHttp.setRequestHeader("Content-type", "application/json");
      hotelHttp.send();
    } else {
      gasHttp.open('GET', url_gas);
      gasHttp.onreadystatechange = function () {
        if (gasHttp.readyState != 4) {
          gasButton.innerHTML = "Recebendo...";
          gasButton.classList.add("disabled");
        }
        if (gasHttp.readyState == 4 && gasHttp.status == 200) {
          setTimeout(function () {
            gasButton.innerHTML = "Receber";
            gasButton.classList.remove("disabled");
          }, 3000);
        }
      }
      gasHttp.setRequestHeader("Content-type", "application/json");
      gasHttp.send();
    }
  }
}