import './index.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import router from './application/router/router';
import './assets/svg/RangBabe.svg';
import './assets/svg/coin.svg';
import './assets/svg/Profile.svg';
import './assets/svg/sloth.svg';
(function () {
  router.locationHandler();
})();
