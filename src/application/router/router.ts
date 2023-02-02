import { controller } from '../base/controller';
class Router {
  hungRouteListeners = (className: string) => {
    const anchors = document.querySelectorAll(`.${className}`);
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        this.urlRoute(e);
      });
    });
  };

  urlRoute = (event: Event) => {
    event = event || window.event;
    event.preventDefault();
    if (event.target === null) throw new Error('Event target :' + event.target);
    const target = event.target as HTMLLinkElement;
    window.history.pushState({}, '', target.href);
    this.locationHandler();
  };

  locationHandler = async () => {
    const pathName = window.location.pathname.split('/').at(-1);
    const page =
      pathName === ''
        ? '/'
        : pathName === 'lessons'
        ? '/lessons'
        : pathName === 'documentation'
        ? '/documentation'
        : pathName === 'profile'
        ? '/profile'
        : pathName === 'roadmap'
        ? '/roadmap'
        : '/404';
    switch (page) {
      case '/':
        controller.initHomePage();
        break;
      case '/lessons':
        controller.initLessonsPage();
        break;
      case '/documentation':
        controller.initDocumentationPage();
        break;
      case '/profile':
        controller.initUserPage();
        break;
      case '/roadmap':
        controller.initRoadmapPage();
        break;
      default:
        alert('404');
    }
  };
}

export default new Router();
