import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import TopNav from './components/TopNav';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const router = createBrowserRouter([
  {
    element: <TopNav />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/videos",
        element: <Videos />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

root.render(<RouterProvider router={router}/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
