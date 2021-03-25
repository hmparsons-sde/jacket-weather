import domEvents from '../events/domEvents';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  domEvents();
};

export default startApp;
