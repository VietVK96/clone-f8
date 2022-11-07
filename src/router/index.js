import { Outlet } from "react-router-dom";
import NotFoundPage from "../page/not-found/NotFound";
import Dashboard from "../page/home/Dashboard";
import MainLayout from "../layout/MainLayout";
import Route from "../page/route/Route";
import Study from "../page/study/Study";
import Blog from "../page/blog/Blog";
import Routedetail from "../page/route/routedetail/Routedetail";
import StudyDetail from "../page/study/StudyDetail";
import Signup from "../page/authen/Signup";
import { Login } from "../page/authen/Login";


export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "/route", element: <Route /> },
          { path: "/route/detail/:id", element: <Routedetail /> },
          { path: "/study", element: <Study /> },
          { path: "/study/detail/:id", element: <StudyDetail /> },
          { path: "/blog", element: <Blog /> }, 
        ],
      },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFoundPage /> },

    ],
  },
];
