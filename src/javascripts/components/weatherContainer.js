const weatherContainer = () => {
  // document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="weather-container d-flex justify-content-center mb-5"></div>
    <form class="container" id="weatherContainer">
      <div class="form-group">
        <h1>Do you need a jacket?</h1>
        <input type="text" class="form-control" id="location" aria-describedby="location" placeholder="Zip Code, City, etc" required>
      </div>
      <button type="submit" class="btn btn-success btn-lg" id="searchWeather">Submit</button>
    </form>`;
};

export default weatherContainer;
