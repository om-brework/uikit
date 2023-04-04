import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Dashboard from './Pages/Dashboard';
import ButtonPages from './Pages/ButtonPages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/button', element: <ButtonPages /> },
    ],
  },
]);
