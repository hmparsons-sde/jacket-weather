import showWeather from '../components/showWeather';
import getWeather from '../helpers/data/getWeather';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('search-weather')) {
      e.preventDefault();
      const loc = document.querySelector('#location').value;
      getWeather(loc).then((weatherObject) => showWeather(weatherObject));
      document.querySelector('form').reset();
    }
  });
};

export default domEvents;
