import { RouteObject, createBrowserRouter } from 'react-router-dom';

import App from './App';
import AppWithParams from './AppWithParams';

export const routes: RouteObject[] = [
  { path: '/', element: <App /> },
  { path: '/:id', element: <AppWithParams /> },
];

export const router = createBrowserRouter(routes);
