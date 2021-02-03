// imrs
import React, { useState } from 'react';
import Login from './Login/Login';

import Signup from './Signup/Signup';

//Stateless Function sfc Hit Tab Type in Auth Tab Tab puts you between the () on return
const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  function handleToggle() {
    setShowLogin(!showLogin);
  }
  return (
    <div>
      {/* 
      <Login />
      <Signup />
       */}
      {showLogin ? <Login /> : <Signup />}
      <button onClick={handleToggle}>Click To Toggle</button>
    </div>
  );
};

export default Auth;
