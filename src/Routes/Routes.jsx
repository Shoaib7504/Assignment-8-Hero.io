import React from 'react';
import { createBrowserRouter } from 'react-router'
import Mainlayout from '../Layout/Mainlayout';
import Navbar from '../Components/Header/Navbar';
import Home from '../Components/Home/Home';
import Apps from '../Components/Apps/Apps';
import Instalization from '../Components/Instalization/Instalization';
import Error from '../Components/Errorpage/Error';
import Errorpage from '../Components/Errorpage/Errorpage';
import AppsDetails from '../Components/Apps/AppsDetails';




export const router = createBrowserRouter([
  {
    path: '/',
    Component: Mainlayout,
    //New error version
    errorElement: <Errorpage></Errorpage>,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('../mainpage.json')
      },
      {
        path: 'apps',
        Component: Apps,
        loader: () => fetch('../allapps.json')

      },
      {
        path: 'installation',
        Component: Instalization
      },
      {
        path: '/product/:id',
        Component: AppsDetails,
        loader: () => fetch('../allapps.json')
      }
    ]
  },
  {
    //Old error version
    // path:'*',
    // element:<Error></Error>

  }


])