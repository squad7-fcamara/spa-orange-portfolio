import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GlobalStyled } from "./GlobalStyled.jsx";
import Navbar from "./components/Navbar/index.jsx";
import MyPortfolio from "./pages/MyPortfolio/index.jsx";
import MyProjects from "./pages/MyProjects/index.jsx";
import Discover from "./pages/Discover/index.jsx";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/my-portfolio", element: <MyPortfolio /> },
      { path: "/my-projects", element: <MyProjects /> },
      { path: "/discover", element: <Discover /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="861664577576-isgm37phm8vcqnsialfvm3g788oi239r.apps.googleusercontent.com">
      <GlobalStyled />
      <RouterProvider router={routes} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
