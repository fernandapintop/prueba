import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/root";
import ErrorPage from "./pages/errorPage";
import Problem1 from "./pages/problem-1";
import Problem2 from "./pages/problem-2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/problem-1",
    element: <Problem1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/problem-2",
    element: <Problem2 />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
