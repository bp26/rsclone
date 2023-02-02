import { app } from '../components/app/App';
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
    // const parentTarget = target.parentElement as HTMLLinkElement;
    window.history.pushState({}, '', target.href);
    this.locationHandler();
  };

  locationHandler = async () => {
    // console.log(location)
    // if (location.length == 0) {
    //   location = '/';
    // }
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
    let controller;
    switch (page) {
      case '/':
        controller = app.homeContoller;
        break;
      case '/lessons':
        controller = app.lessonController;
        break;
      case '/documentation':
        controller = app.documentController;
        break;
      case '/profile':
        controller = app.profileContoller;
        break;
      case '/roadmap':
        controller = app.RoadMapController;
        break;
      default:
        alert("What's happened???");
    }

    controller?.start();
  };
}

export default new Router();

// const lenguage = {
//   ru: {
//     home: {
//       header: {
//         links: ['home', 'documentation', 'lessons', 'profile'],
//         button: ['Sign in', 'Login'],
//       },
//     },
//     documentation: {},
//     lessons: {},
//     profile: {},
//   },
//   en: {},
// };
