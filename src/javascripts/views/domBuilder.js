const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div class="container">
  <div id="search-box"></div>
  <div id="weather-cards"></div>
  </div>`;
};

export default domBuilder;
