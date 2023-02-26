import { controller } from './application/base/controller';
import './index.scss';
import './assets/svg/RangBabe.svg';
import './assets/svg/coin.svg';
import './assets/svg/sloth.svg';
import router from './application/router/router';

(function () {
  controller.init().then(() => {
    router.locationHandler();
  });
})();
