// import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import {Content} from "./styledLogingGoogleBtn"

const LoginGoogleBtn = () => {

  return (
    <Content>
          <GoogleLogin 
              onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                  console.log(credentialResponseDecoded);
              }}
              onError={() => {
                  console.log('Login Failed');
              }}
            />
    </Content>
  )
}

export default LoginGoogleBtn