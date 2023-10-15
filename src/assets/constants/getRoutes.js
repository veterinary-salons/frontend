const routeNext = (path, step) => {
  switch (path) {
    case '/advert':
      return `/advert-${step}`;

    case `/advert-${step}`:
      return `/advert-${step}-pet`;

    case `/advert-${step}-pet`:
      if (`/advert-${step}-pet` === '/advert-petSitting-pet') {
        return '/advert-schedule';
      }
      return `/advert-${step}-services`;

    case `/advert-${step}-services`:
      return `/advert-schedule`;

    default: {
      return '';
    }
  }
};

const routeBack = (path, step) => {
  switch (path) {
    case `/advert-${step}`:
      return `/advert`;

    case `/advert-${step}-pet`:
      return `/advert-${step}`;

    case `/advert-${step}-services`:
      return `/advert-${step}-pet`;

    default: {
      return '';
    }
  }
};

export { routeNext, routeBack };
