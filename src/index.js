import ReactDOM from 'react-dom/client';
import "./index.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';
import Feedback from './views/feedback/feedback'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/feedback',
        element: <Feedback />,
    }
]);

root.render(
    <RouterProvider router={router} />
);
