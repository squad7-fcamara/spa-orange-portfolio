import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
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
    <GoogleOAuthProvider clientId="1004393937698-8ijksra4lgn485gbuf193prmsdrelhap.apps.googleusercontent.com">
    <GlobalStyled />
    <RouterProvider router={routes} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
