
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from './App'
import Home from './pages/Home'
import Book from './pages/Book'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:slug",
        element: <Book/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

