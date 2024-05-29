import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import { MainContext } from './components/contextFile/contextFile'
import Registration from './components/pages/Registration'
import ChangePassword from './components/pages/change-password/ChangePassword'
import UpdateProfile from './components/pages/update-profile/UpdateProfile';
import AddCourse from './components/pages/courses/AddCourse';
import VIewCourse from './components/pages/courses/VIewCourse';
import AddVideos from './components/pages/videos/AddVideos';
import ViewVideos from './components/pages/videos/ViewVideos';
import AddSlides from './components/pages/slides/AddSlides';
import ViewSlides from './components/pages/slides/ViewSlides';
import AddTeam from './components/pages/team/AddTeam';
import ViewTeam from './components/pages/team/ViewTeam';
import ViewUser from './components/pages/users/ViewUser';

let allRouters = createBrowserRouter([

  {
    path: '/',
    element: <Login/>
  },

  {
    path: '/admin-registration',
    element: <Registration/>
  },

  {
    path: '/update-password',
    element: <ChangePassword/>
  },

  {
    path: '/update-profile',
    element: <UpdateProfile/>
  },

  {
    path: '/add-course',
    element: <AddCourse/>
  },

  {
    path: '/view-course',
    element: <VIewCourse/>
  },

  {
    path: '/add-videos',
    element: <AddVideos/>
  },

  {
    path: '/view-videos',
    element: <ViewVideos/>
  },
  {
    path: '/add-slider',
    element: <AddSlides/>
  },
  {
    path: '/view-slider',
    element: <ViewSlides/>
  },
  {
    path: '/add-team',
    element: <AddTeam/>
  },
  {
    path: '/view-team',
    element: <ViewTeam/>
  },

  {
    path: '/view-users',
    element: <ViewUser/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRouters}>
      <MainContext />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
