import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
import Feedback from './views/feedback/feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "*", 
    element: <h1>404 Not Found</h1>,
  },
]);



root.render(
  
    <RouterProvider router={router} />
  
);
