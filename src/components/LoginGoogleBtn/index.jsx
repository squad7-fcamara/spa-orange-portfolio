// import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import {Content} from "./styledLogingGoogleBtn"

const LoginGoogleBtn = () => {

    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code'
      });
  return (
    <Content>
          <GoogleLogin onClick={() => login()}
              onSuccess={credentialResponse => {
                  console.log(credentialResponse);
              }}
              onError={() => {
                  console.log('Login Failed');
              }}
              useOneTap
              style={{ padding: '3px' }}
            />
    </Content>
  )
}

export default LoginGoogleBtn