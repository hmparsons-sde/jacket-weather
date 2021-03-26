const showWeather = (weatherObject) => {
  document.querySelector('#weather-cards').innerHTML += `
  <div class="mt-5 p-3 card text-center" style="width: 12rem; height:20rem;">
  <img src="http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${weatherObject.name}</h5>
    <p class="card-text">${weatherObject.main.temp} | ${weatherObject.weather[0].description}</p>
    <p class="card-text"></p>
  </div>
</div>`;
};

export default showWeather;
