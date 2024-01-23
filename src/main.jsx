import "./App.css"; // FIXME: alterar para styled components
import "./index.css"; // FIXME: alterar para styled components
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Soon from "./pages/Soon";
import Navbar from "./components/Navbar/index.jsx";
import MyProjects from "./pages/MyProjects/index.jsx";
import Discover from "./pages/Discover/index.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <Soon /> },
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "my-projects", element: <MyProjects /> },
      { path: "discover", element: <Discover /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
