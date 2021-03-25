import showWeather from '../components/showWeather';
import getWeather from '../helpers/data/getWeather';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('searchWeather')) {
      e.preventDefault();
      const city = document.querySelector('#location').value;
      getWeather(city).then((weatherObject) => showWeather(weatherObject));
    }
  });
};

export default domEvents;
