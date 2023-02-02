import { App } from '../components/app/App';

class Router {
  changeLocation(url: string) {
    window.history.pushState({}, '', url);
    switch (url) {
      case '/':
        break;
      case '/documentation':
        break;
      case 'lessons':
        break;
      case '/profile':
        break;
      case '/404':
        break;
    }
  }
}

export default new Router();

const lenguage = {
  ru: {
    home: {
      header: {
        links: ['home', 'documentation', 'lessons', 'profile'],
        button: ['Sign in', 'Login'],
      },
    },
    documentation: {},
    lessons: {},
    profile: {},
  },
  en: {},
};
