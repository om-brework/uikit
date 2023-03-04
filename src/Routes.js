import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Dashboard from './Pages/Dashboard';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
]);
