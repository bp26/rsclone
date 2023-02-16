import { controller } from '../base/controller';
import { model } from '../base/model';

class Router {
  hungRouteListeners = (className: string) => {
    const anchors = document.querySelectorAll(`.${className}`);
    anchors.forEach((anchor) => {
      anchor.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          this.urlRoute(e);
        },
        { capture: true }
      );
    });
  };

  urlRoute = (event: Event) => {
    event = event || window.event;
    event.preventDefault();
    if (event.currentTarget === null) throw new Error('Event target :' + event.target);
    const target = event.currentTarget as HTMLLinkElement;
    window.history.pushState({}, '', target.href);
    this.locationHandler();
  };

  locationHandler = async () => {
    const pathName = window.location.pathname.split('/').at(-1);
    switch (this.getUrl(pathName)) {
      case '/':
        controller.initHomePage();
        break;
      case '/lessons':
        if (model.isAuthenticated) {
          controller.initLessonsPage();
        } else {
          controller.initHomePage();
        }
        break;
      case '/documentation':
        controller.initDocumentationPage();
        break;
      case '/profile':
        if (model.isAuthenticated) {
          controller.initUserPage();
        } else {
          controller.initHomePage();
        }
        break;
      case '/roadmap':
        controller.initRoadmapPage();
        break;
      default:
        alert('404');
    }
  };

  getUrl(value: string | undefined) {
    switch (value) {
      case '':
        return '/';
      case 'lessons':
        return '/lessons';
      case 'documentation':
        return '/documentation';
      case 'profile':
        return '/profile';
      case 'roadmap':
        return '/roadmap';
    }
  }
}

export default new Router();
