// import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const LoginGoogleBtn = () => {

    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code'
      });
  return (
    <>
          <GoogleLogin onClick={() => login()}
              onSuccess={credentialResponse => {
                  console.log(credentialResponse);
              }}
              onError={() => {
                  console.log('Login Failed');
              }}
              useOneTap
            />
    </>
  )
}

export default LoginGoogleBtn