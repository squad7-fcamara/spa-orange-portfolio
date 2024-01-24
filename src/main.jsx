import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Soon from "./pages/Soon";
import Navbar from "./components/Navbar/index.jsx";
import MyProjects from "./pages/MyProjects/index.jsx";
import Discover from "./pages/Discover/index.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";

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
    <GlobalStyled />
    <RouterProvider router={routes} />
  </React.StrictMode>
);
