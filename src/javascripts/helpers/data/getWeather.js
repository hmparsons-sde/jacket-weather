import axios from 'axios';
import weatherApiConfig from '../apiKeys';

const getWeather = (city) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiConfig.apiKey}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
