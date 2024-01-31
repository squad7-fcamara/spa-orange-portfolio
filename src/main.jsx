import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GlobalStyled } from "./GlobalStyled.jsx";
import Navbar from "./components/Navbar/index.jsx";
import MyProjects from "./pages/MyProjects/index.jsx";
import Discover from "./pages/Discover/index.jsx";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import { AuthProvider } from "./contexts/auth/AuthProvider.jsx";

import { RequireAuth } from "./contexts/auth/RequireAuth.jsx";
import { LoginContext } from "./contexts/auth/LoginContext.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <LoginContext><Login /></LoginContext> },
  { path: "/sign-up", element:  <RequireAuth><SignUp /></RequireAuth> },
  {
    path: "/",
    element:  <RequireAuth> <Navbar /> </RequireAuth> ,
    children: [
      { path: "my-projects", element: <RequireAuth> <MyProjects /> </RequireAuth>},
      { path: "discover", element: <RequireAuth>  <Discover /> </RequireAuth> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>

      <GoogleOAuthProvider clientId="861664577576-isgm37phm8vcqnsialfvm3g788oi239r.apps.googleusercontent.com">
        <GlobalStyled />
        <RouterProvider router={routes} />
      </GoogleOAuthProvider>

    </AuthProvider>
    
  </React.StrictMode>
);
