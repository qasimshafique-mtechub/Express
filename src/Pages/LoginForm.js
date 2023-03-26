import React, { useState } from 'react';
import HomePage from './HomePage';

const LoginForm = () => {
  const [googleUser, setGoogleUser] = useState(null);

  const handleGoogleLoginSuccess = (response) => {
    setGoogleUser(response.profileObj);
  };

  const handleGoogleLoginFailure = () => {
    console.log('Google login failed.');
  };

  return (
    <form>
      {/* Your other form fields go here */}
      <HomePage  onClick={() => window.location.href = '/login/google'}  />
      {/* <GoogleLoginButton/> */}
      {googleUser && <p>Logged in as {googleUser.name} ({googleUser.email})</p>}
    </form>
  );
};

export default LoginForm;
