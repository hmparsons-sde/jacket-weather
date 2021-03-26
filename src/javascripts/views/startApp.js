import searchForm from '../components/weatherContainer';
import domEvents from '../events/domEvents';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  searchForm();
  domEvents();
};

export default startApp;
