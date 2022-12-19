fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".town").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = data.main.temp;

    document.querySelector(".pressure").innerHTML = data.main.pressure;

    document.querySelector(".desc").innerHTML = data.weather[0].description;

    document.querySelector(".humidity").innerHTML = data.main.humidity;

    document.querySelector(".speed").innerHTML = data.wind.speed;

    document.querySelector(".deg").innerHTML = data.wind.deg;
  });
