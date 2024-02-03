import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GlobalStyled } from "./GlobalStyled.jsx";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Navbar from "./components/Navbar/index.jsx";
import MyPortfolio from "./pages/MyPortfolio/index.jsx";
import Community from "./pages/Community/index.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/profile", element: <MyPortfolio /> },
      { path: "/community", element: <Community /> },
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
