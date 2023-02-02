import './index.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { App } from './components/app/App';
import router from './Router/Router';
const app = new App();
app.lessonController.start();

(function () {
  const url = window.location.pathname;
  router.changeLocation(url);
})();
