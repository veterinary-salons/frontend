import {
  Link,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
import ErrorBoundary from './error_page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route index element={<Link to="1">Первая</Link>} />
      <Route path="1" element={<Link to="2">Вторая</Link>} />
      <Route path="1/2" element={<Link to="/3">Третья</Link>} />
      <Route path="3" />
    </Route>,
  ),
);

export default router;
