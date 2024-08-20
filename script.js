const apiKey = "5aefa943d2f95346cc48d1f144a2cb5e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {

   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


   if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   } else {

      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

      if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "https://lovepik.com/image-380271609/vector-fresh-weather-clouds-blue-icon.html";

      }

     

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

   }

}



searchBtn.addEventListener("click", () => {

   checkWeather(searchbox.value);

});
checkWeather();