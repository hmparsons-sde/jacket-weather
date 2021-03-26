const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="search-box"></div>
  <div id="weather-cards"></div>`;
};

export default domBuilder;
