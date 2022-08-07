import { Outlet} from 'react-router-dom';
import NotFoundPage from '../page/not-found/NotFound';
import Dashboard from '../page/home/Dashboard';
import MainLayout from '../layout/MainLayout';
import Route from '../page/route/Route';

export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        element: (      
            <MainLayout />       
        ),
        children: [
            {index: true, element: <Dashboard />},
            {path: '/route', element: <Route />},
        ],
      },
     
      {path: '*', element: <NotFoundPage />},
    ],
  },
];
